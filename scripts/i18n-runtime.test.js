const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const runtimePath = path.resolve(__dirname, '../project/i18n/runtime.js');
delete require.cache[runtimePath];
const i18n = require(runtimePath).createI18n();

assert.equal(i18n.normalizeLocale('en-US'), 'en-US');
assert.equal(i18n.normalizeLocale('en'), 'en-US');
assert.equal(i18n.normalizeLocale('fr-FR'), 'zh-CN');
assert.equal(i18n.getLocale(), 'zh-CN');

i18n.register('en-US', 'common', {
  save: 'Save',
  selected: 'Selected {count} devices',
  scopedSelection: 'Selected {count} devices in {scope}'
});

assert.equal(i18n.getCatalogs()['en-US'].common.save, 'Save');
assert.equal(i18n.setLocale('en-US'), 'en-US');
assert.equal(i18n.t('common:save', null, '保存'), 'Save');
assert.equal(
  i18n.t('common:selected', { count: 3 }, '已选择 3 台设备'),
  'Selected 3 devices'
);
assert.equal(
  i18n.t('common:scopedSelection', { count: 3 }, '已选择 3 台设备'),
  'Selected 3 devices in {scope}'
);

const missingErrors = [];
const originalError = console.error;
try {
  console.error = (...args) => missingErrors.push(args.join(' '));
  assert.equal(
    i18n.t('common:missing', { count: 3 }, '已选择 {count} 台设备'),
    '已选择 3 台设备'
  );
} finally {
  console.error = originalError;
}
assert.equal(missingErrors.length, 1);
assert.match(missingErrors[0], /\[i18n\].*common:missing/);

assert.equal(i18n.setLocale('unknown'), 'zh-CN');
assert.equal(i18n.getLocale(), 'zh-CN');
assert.equal(i18n.t('common:save', null, '保存'), '保存');
assert.equal(
  i18n.t('common:missing', { count: 3 }, '已选择 {count} 台设备'),
  '已选择 3 台设备'
);

function fakeNode(attributes, text) {
  const values = { ...attributes };
  return {
    textContent: text || '',
    getAttribute(name) { return values[name] == null ? null : values[name]; },
    setAttribute(name, value) { values[name] = String(value); },
    value(name) { return values[name]; }
  };
}

i18n.register('en-US', 'buttons', {
  title: 'Buttons',
  titleAttr: 'Button usage'
});
i18n.register('en-US', 'inputs', {
  searchPlaceholder: 'Enter device SN'
});

const title = fakeNode({ 'data-i18n': 'buttons:title' }, '按钮 Button');
const input = fakeNode({
  'data-i18n-placeholder': 'inputs:searchPlaceholder',
  placeholder: '请输入设备 SN'
});
const help = fakeNode({
  'data-i18n-title': 'buttons:titleAttr',
  title: '按钮用法'
});
const root = {
  querySelectorAll(selector) {
    if (selector === '[data-i18n]') return [title];
    if (selector === '[data-i18n-placeholder]') return [input];
    if (selector === '[data-i18n-title]') return [help];
    return [];
  }
};

i18n.setLocale('en-US');
i18n.apply(root);
assert.equal(title.textContent, 'Buttons');
assert.equal(input.value('placeholder'), 'Enter device SN');
assert.equal(help.value('title'), 'Button usage');

const rootTitle = fakeNode({ 'data-i18n': 'buttons:title' }, '按钮 Button');
rootTitle.querySelectorAll = () => [];
rootTitle.matches = selector => selector === '[data-i18n]';
i18n.apply(rootTitle);
assert.equal(rootTitle.textContent, 'Buttons');

const rootInput = fakeNode({
  'data-i18n-placeholder': 'inputs:searchPlaceholder',
  placeholder: '请输入设备 SN'
});
rootInput.querySelectorAll = () => [];
rootInput.matches = selector => selector === '[data-i18n-placeholder]';
i18n.apply(rootInput);
assert.equal(rootInput.value('placeholder'), 'Enter device SN');

const zhTitle = fakeNode({ 'data-i18n': 'buttons:title' }, '按钮 Button');
zhTitle.querySelectorAll = selector => selector === '[data-i18n]' ? [zhTitle] : [];
i18n.setLocale('zh-CN');
i18n.apply(zhTitle);
assert.equal(zhTitle.textContent, '按钮 Button');
assert.doesNotThrow(() => i18n.apply(null));

const previousWindow = global.window;
const previousDocument = global.document;
try {
  global.window = {};
  global.document = { createElement() { return {}; } };
  i18n.setLocale('en-US');
  assert.doesNotThrow(() => i18n.apply(fakeNode({}, '')));
  assert.doesNotThrow(() => i18n.apply({ querySelectorAll() { return []; } }));
} finally {
  if (previousWindow === undefined) delete global.window;
  else global.window = previousWindow;
  if (previousDocument === undefined) delete global.document;
  else global.document = previousDocument;
}

function fakeParent(options) {
  const state = {
    inserted: [],
    isScrollWrapper: options && options.isScrollWrapper
  };
  return {
    clientWidth: (options && options.clientWidth) || 300,
    classList: {
      contains(name) { return name === 'i18n-table-scroll' && state.isScrollWrapper; }
    },
    insertBefore(node, before) {
      state.inserted.push({ node, before });
      node.parentElement = this;
    },
    inserted() { return state.inserted; }
  };
}

function fakeTable(scrollWidth, parent) {
  return { scrollWidth, parentElement: parent };
}

function fakeTableRoot(tables) {
  return {
    querySelectorAll(selector) {
      return selector === 'table' ? tables : [];
    }
  };
}

const previousTableWindow = global.window;
const previousTableDocument = global.document;
try {
  global.window = {};
  global.document = {
    createElement(tagName) {
      assert.equal(tagName, 'div');
      return {
        className: '',
        children: [],
        appendChild(child) {
          this.children.push(child);
          child.parentElement = this;
        }
      };
    }
  };

  const overflowParent = fakeParent({ clientWidth: 320 });
  const overflowTable = fakeTable(640, overflowParent);
  i18n.setLocale('en-US');
  i18n.apply(fakeTableRoot([overflowTable]));
  assert.equal(overflowParent.inserted().length, 1);
  assert.equal(overflowParent.inserted()[0].node.className, 'i18n-table-scroll');
  assert.equal(overflowParent.inserted()[0].node.children[0], overflowTable);

  const compactParent = fakeParent({ clientWidth: 640 });
  const compactTable = fakeTable(320, compactParent);
  i18n.apply(fakeTableRoot([compactTable]));
  assert.equal(compactParent.inserted().length, 0);

  const wrappedParent = fakeParent({ clientWidth: 320, isScrollWrapper: true });
  const wrappedTable = fakeTable(640, wrappedParent);
  i18n.apply(fakeTableRoot([wrappedTable]));
  assert.equal(wrappedParent.inserted().length, 0);

  const zhParent = fakeParent({ clientWidth: 320 });
  const zhTable = fakeTable(640, zhParent);
  i18n.setLocale('zh-CN');
  i18n.apply(fakeTableRoot([zhTable]));
  assert.equal(zhParent.inserted().length, 0);
} finally {
  if (previousTableWindow === undefined) delete global.window;
  else global.window = previousTableWindow;
  if (previousTableDocument === undefined) delete global.document;
  else global.document = previousTableDocument;
}

const browserWindow = {};
vm.runInNewContext(fs.readFileSync(runtimePath, 'utf8'), {
  window: browserWindow,
  console
});
assert.ok(browserWindow.__AW_I18N__);
browserWindow.__AW_I18N__.register('en-US', 'common', { save: 'Save' });
browserWindow.__AW_I18N__.setLocale('en-US');
assert.equal(browserWindow.__AW_I18N__.t('common:save', null, '保存'), 'Save');

console.log('i18n runtime tests passed');
