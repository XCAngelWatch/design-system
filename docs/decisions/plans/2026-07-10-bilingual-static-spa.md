# AngelWatch Design System 中英文国际化实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在不引入构建、NPM 或第二套页面的前提下，让静态 SPA 的 66 个页面、共享导航和动态交互完整支持 `zh-CN` / `en-US` 切换。

**Architecture:** 现有 `pages/<id>.js` 继续作为唯一 HTML 结构和中文 fallback，通过 `data-i18n="namespace:key"` 标记可翻译叶子节点。英文词典按 route id 拆到 `project/i18n/en-US/<id>.js`，由 `_router.js` 在英文模式下与页面脚本并行加载，再由无依赖运行时写入文本和属性。

**Tech Stack:** Vanilla JavaScript、HTML template literals、CSS language selectors、Node 内置模块、`Intl.*Format`、动态 `<script>` 加载、`localStorage`

**Version Control:** 当前工作树已有同一批页面上的既存修改。各任务末尾的提交命令只作为可选检查点；除非用户明确授权，否则执行时不得运行 `git add` / `git commit`，也不得把既存修改拆出、覆盖或回退。

---

## 文件职责

### 新增

- `project/i18n/runtime.js`：locale 规范化、词典注册、key 查找、插值、DOM 文本/属性应用。
- `project/i18n/common.en-US.js`：导航分组、66 个路由标题、工具栏、加载/错误和动态交互文案。
- `project/i18n/en-US/<id>.js`：与 66 个页面一一对应的英文 namespace 词典。
- `scripts/i18n-runtime.test.js`：运行时纯函数与 DOM 应用单元测试。
- `scripts/i18n-contract.test.js`：`index.html`、路由器和 CSS 的接入契约测试。
- `scripts/check-i18n.js`：route/page/catalog 对齐、key 存在性、中文标记覆盖和孤立 key 检查。

### 修改

- `project/index.html`：首屏恢复 locale，并按正确顺序加载 i18n runtime、common 和 router。
- `project/pages/_router.js`：语言状态、语言切换、词典脚本加载、shell 翻译、动态提示和 `Intl` 格式化。
- `project/pages/*.js`：为用户可见文本和属性增加稳定 key；不复制 HTML。
- `project/styles/system.css`：侧栏宽度变量与英文 shell 宽度。
- `project/styles/components-extras.css`：语言切换控件和英文组件布局适配。
- `README.md`、`AGENTS.md`、`CLAUDE.md`、`AI_DESIGN_SYSTEM.md`：目录、扩展规则、校验命令和 React/AntD 对齐。
- `project/pages/i18n.js`：从规范示例更新为当前站点实际实现说明。

---

### Task 1: 国际化运行时测试与最小实现

**Files:**
- Create: `scripts/i18n-runtime.test.js`
- Create: `project/i18n/runtime.js`

- [ ] **Step 1: 写 locale、注册、插值和 fallback 的失败测试**

```javascript
// scripts/i18n-runtime.test.js
const assert = require('node:assert/strict');
const path = require('node:path');

const runtimePath = path.resolve(__dirname, '../project/i18n/runtime.js');
delete require.cache[runtimePath];
const i18n = require(runtimePath).createI18n();

assert.equal(i18n.normalizeLocale('en-US'), 'en-US');
assert.equal(i18n.normalizeLocale('en'), 'en-US');
assert.equal(i18n.normalizeLocale('fr-FR'), 'zh-CN');
assert.equal(i18n.getLocale(), 'zh-CN');

i18n.register('en-US', 'common', {
  save: 'Save',
  selected: 'Selected {count} devices'
});

i18n.setLocale('en-US');
assert.equal(i18n.t('common:save', null, '保存'), 'Save');
assert.equal(i18n.t('common:selected', { count: 3 }, '已选择 3 台设备'), 'Selected 3 devices');
const missingErrors = [];
const originalError = console.error;
console.error = (...args) => missingErrors.push(args.join(' '));
assert.equal(i18n.t('common:missing', null, '中文 fallback'), '中文 fallback');
console.error = originalError;
assert.match(missingErrors[0], /\[i18n\].*common:missing/);

i18n.setLocale('unknown');
assert.equal(i18n.getLocale(), 'zh-CN');
assert.equal(i18n.t('common:save', null, '保存'), '保存');

console.log('i18n runtime tests passed');
```

- [ ] **Step 2: 运行测试并确认因运行时不存在而失败**

Run: `node scripts/i18n-runtime.test.js`

Expected: FAIL with `Cannot find module '../project/i18n/runtime.js'`.

- [ ] **Step 3: 实现可在浏览器和 Node 使用的运行时核心**

```javascript
/* project/i18n/runtime.js */
(function (root, factory) {
  var exported = { createI18n: factory };
  if (typeof module === 'object' && module.exports) module.exports = exported;
  if (root) root.__AW_I18N__ = factory();
})(typeof window !== 'undefined' ? window : globalThis, function createI18n() {
  'use strict';

  var locale = 'zh-CN';
  var catalogs = {};
  function normalizeLocale(value) {
    return value === 'en-US' || value === 'en' ? 'en-US' : 'zh-CN';
  }

  function setLocale(value) {
    locale = normalizeLocale(value);
    return locale;
  }

  function getLocale() {
    return locale;
  }

  function register(targetLocale, namespace, messages) {
    var normalized = normalizeLocale(targetLocale);
    catalogs[normalized] = catalogs[normalized] || {};
    catalogs[normalized][namespace] = Object.assign(
      catalogs[normalized][namespace] || {},
      messages || {}
    );
  }

  function splitKey(namespacedKey) {
    var index = String(namespacedKey || '').indexOf(':');
    if (index < 1) return null;
    return [namespacedKey.slice(0, index), namespacedKey.slice(index + 1)];
  }

  function interpolate(value, params) {
    return String(value).replace(/\{([A-Za-z0-9_]+)\}/g, function (_, key) {
      return params && params[key] != null ? String(params[key]) : '{' + key + '}';
    });
  }

  function t(namespacedKey, params, fallback) {
    if (locale === 'zh-CN') return fallback == null ? '' : String(fallback);
    var pair = splitKey(namespacedKey);
    var messages = pair && catalogs[locale] && catalogs[locale][pair[0]];
    var value = messages && messages[pair[1]];
    if (value == null) {
      if (typeof console !== 'undefined' && console.error) {
        console.error('[i18n] Missing translation for ' + locale + ': ' + namespacedKey);
      }
      return String(fallback == null ? '' : fallback);
    }
    return interpolate(value, params);
  }

  function getCatalogs() {
    return catalogs;
  }

  return {
    normalizeLocale: normalizeLocale,
    setLocale: setLocale,
    getLocale: getLocale,
    register: register,
    t: t,
    getCatalogs: getCatalogs
  };
});
```

- [ ] **Step 4: 运行测试并确认通过**

Run: `node scripts/i18n-runtime.test.js`

Expected: `i18n runtime tests passed`.

- [ ] **Step 5: 提交运行时基础**

```bash
git add scripts/i18n-runtime.test.js project/i18n/runtime.js
git commit -m "feat: add static i18n runtime"
```

---

### Task 2: DOM 文本与属性应用测试

**Files:**
- Modify: `scripts/i18n-runtime.test.js`
- Modify: `project/i18n/runtime.js`

- [ ] **Step 1: 用最小 fake DOM 增加文本和属性失败测试**

```javascript
function fakeNode(attributes, text) {
  const values = { ...attributes };
  return {
    textContent: text || '',
    getAttribute(name) { return values[name] == null ? null : values[name]; },
    setAttribute(name, value) { values[name] = String(value); },
    value(name) { return values[name]; }
  };
}

const title = fakeNode({ 'data-i18n': 'buttons:title' }, '按钮 Button');
const input = fakeNode({
  'data-i18n-placeholder': 'inputs:searchPlaceholder',
  placeholder: '请输入设备 SN'
});
const root = {
  querySelectorAll(selector) {
    if (selector === '[data-i18n]') return [title];
    if (selector === '[data-i18n-placeholder]') return [input];
    return [];
  }
};

i18n.register('en-US', 'buttons', { title: 'Buttons' });
i18n.register('en-US', 'inputs', { searchPlaceholder: 'Enter device SN' });
i18n.setLocale('en-US');
i18n.apply(root);
assert.equal(title.textContent, 'Buttons');
assert.equal(input.value('placeholder'), 'Enter device SN');

const rootTitle = fakeNode({ 'data-i18n': 'buttons:title' }, '按钮 Button');
rootTitle.querySelectorAll = () => [];
rootTitle.matches = selector => selector === '[data-i18n]';
i18n.apply(rootTitle);
assert.equal(rootTitle.textContent, 'Buttons');
```

- [ ] **Step 2: 运行测试并确认 DOM API 尚未实现**

Run: `node scripts/i18n-runtime.test.js`

Expected: FAIL with `TypeError: i18n.apply is not a function`.

- [ ] **Step 3: 调整 `apply` 让 root 自身和后代节点都可应用**

```javascript
var attributeBindings = [
  ['data-i18n-placeholder', 'placeholder'],
  ['data-i18n-title', 'title'],
  ['data-i18n-aria-label', 'aria-label'],
  ['data-i18n-alt', 'alt'],
  ['data-i18n-value', 'value']
];

function selectIncludingRoot(rootNode, selector) {
  var nodes = Array.prototype.slice.call(rootNode.querySelectorAll(selector));
  if (rootNode.matches && rootNode.matches(selector)) nodes.unshift(rootNode);
  return nodes;
}

function apply(rootNode) {
  if (!rootNode || locale === 'zh-CN') return;
  selectIncludingRoot(rootNode, '[data-i18n]').forEach(function (node) {
    node.textContent = t(node.getAttribute('data-i18n'), null, node.textContent);
  });
  attributeBindings.forEach(function (binding) {
    selectIncludingRoot(rootNode, '[' + binding[0] + ']').forEach(function (node) {
      var fallback = node.getAttribute(binding[1]) || '';
      node.setAttribute(binding[1], t(node.getAttribute(binding[0]), null, fallback));
    });
  });
}

// Add `apply: apply` to the object returned by createI18n().
```

- [ ] **Step 4: 运行测试并确认通过**

Run: `node scripts/i18n-runtime.test.js`

Expected: `i18n runtime tests passed`.

- [ ] **Step 5: 提交 DOM 应用能力**

```bash
git add scripts/i18n-runtime.test.js project/i18n/runtime.js
git commit -m "test: cover i18n DOM bindings"
```

---

### Task 3: 词典完整性检查器

**Files:**
- Create: `scripts/check-i18n.js`
- Create: `project/i18n/common.en-US.js`

- [ ] **Step 1: 写检查器入口并先验证缺少 66 个词典时失败**

```javascript
// scripts/check-i18n.js
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const pagesDir = path.join(root, 'project/pages');
const localeDir = path.join(root, 'project/i18n/en-US');
const router = fs.readFileSync(path.join(pagesDir, '_router.js'), 'utf8');
const routeBlock = router.match(/var ROUTES = \[([\s\S]*?)\];/)[1];
const routeIds = [...routeBlock.matchAll(/^\s*\['([^']+)'/gm)].map(match => match[1]);
const pageIds = fs.readdirSync(pagesDir)
  .filter(name => name.endsWith('.js') && name !== '_router.js')
  .map(name => name.slice(0, -3));
const localeIds = fs.existsSync(localeDir)
  ? fs.readdirSync(localeDir).filter(name => name.endsWith('.js')).map(name => name.slice(0, -3))
  : [];

function difference(left, right) {
  const rightSet = new Set(right);
  return left.filter(value => !rightSet.has(value));
}

const errors = [];
for (const id of difference(routeIds, pageIds)) errors.push('missing page: ' + id);
for (const id of difference(routeIds, localeIds)) errors.push('missing locale: ' + id);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(routeIds.length + ' routes, pages and locale catalogs aligned');
```

- [ ] **Step 2: 运行检查器并确认失败原因是英文词典缺失**

Run: `node scripts/check-i18n.js`

Expected: FAIL with `missing locale: overview` and the remaining route ids.

- [ ] **Step 3: 扩展检查器解析 key、属性和未标记中文**

检查器需要按 HTML token 维护元素栈，并执行这些确定规则：

```javascript
const I18N_ATTRS = {
  placeholder: 'data-i18n-placeholder',
  title: 'data-i18n-title',
  'aria-label': 'data-i18n-aria-label',
  alt: 'data-i18n-alt',
  value: 'data-i18n-value'
};
const CHINESE = /[\u3400-\u9fff]/;
const SKIP_TAGS = new Set(['code', 'pre', 'script', 'style']);

function splitNamespacedKey(value) {
  const index = String(value || '').indexOf(':');
  return index > 0 ? [value.slice(0, index), value.slice(index + 1)] : null;
}

function isIgnored(stack) {
  return stack.some(node => SKIP_TAGS.has(node.tag) || node.attrs['data-i18n-ignore'] != null);
}

function parseAttributes(source) {
  const attrs = {};
  for (const match of source.matchAll(/([:\w-]+)(?:\s*=\s*"([^"]*)")?/g)) {
    attrs[match[1].toLowerCase()] = match[2] == null ? '' : match[2];
  }
  return attrs;
}

function scanHtml(html, onText, onElement) {
  const stack = [];
  const tokens = html.match(/<!--[\s\S]*?-->|<[^>]+>|[^<]+/g) || [];
  for (const token of tokens) {
    if (token.startsWith('<!--')) continue;
    if (token.startsWith('</')) {
      stack.pop();
      continue;
    }
    if (token.startsWith('<')) {
      const match = token.match(/^<\s*([\w-]+)([\s\S]*?)\/?\s*>$/);
      if (!match) continue;
      const node = { tag: match[1].toLowerCase(), attrs: parseAttributes(match[2]) };
      onElement(node, stack);
      if (!/\/$/.test(token.replace(/>$/, '').trim()) && !/^(br|hr|img|input|meta|link)$/.test(node.tag)) {
        stack.push(node);
      }
      continue;
    }
    onText(token, stack);
  }
}
```

页面和词典不做字符串截取，统一在隔离的全局对象中执行并读取注册结果：

```javascript
function loadRouteAssets(id) {
  const runtimePath = path.join(root, 'project/i18n/runtime.js');
  delete require.cache[require.resolve(runtimePath)];
  const i18n = require(runtimePath).createI18n();
  global.window = { __AW_PAGES__: {}, __AW_I18N__: i18n };

  for (const file of [
    path.join(root, 'project/pages', id + '.js'),
    path.join(root, 'project/i18n/common.en-US.js'),
    path.join(localeDir, id + '.js')
  ]) {
    delete require.cache[require.resolve(file)];
    require(file);
  }

  return {
    html: global.window.__AW_PAGES__[id],
    catalogs: i18n.getCatalogs()['en-US'] || {}
  };
}
```

参数解析固定为 `--routes=id1,id2`；出现未知 route、空 route 列表或其他参数时打印错误并退出 1。对每个页面执行：

- 中文文本节点必须位于 `data-i18n` 元素内，或位于 `code/pre/data-i18n-ignore` 区域。
- 中文 `placeholder/title/aria-label/alt/value` 必须有对应 `data-i18n-*`。
- key 必须采用 `namespace:key`，namespace 只能是 `common` 或当前 route id。
- 带 `data-i18n` 的元素不得再包含子元素；富文本必须拆成多个可翻译叶子节点，避免运行时 `textContent` 删除 `<code>`、`<a>` 或图标。
- 加载 `runtime.js`、`common.en-US.js` 和页面英文词典后，所有 key 必须存在。
- 页面词典中的 key 必须被当前页面使用；common key 必须被页面标记、`_router.js` 的字面量 `t('common:...')` 调用，或固定的 `group.<slug>` / `route.<id>` shell key 使用，否则报错。
- 每个 fragment 源文件必须注册到与文件名相同的 `__AW_PAGES__` key；模板 HTML 中不得出现 `${`、额外反引号或反斜杠。
- 每个 `href="#/<id>"` 必须指向已知 route；每页首个 `.section-eyebrow` 的中文 fallback 必须以该 route 的中文 group 加 ` · ` 开头。
- 每条错误使用 `<route>: <error type>: <key or text>` 格式；即使前面已发现缺失词典，也继续扫描其他可用页面，最后统一退出 1。
- 指定 `--routes` 时只要求这些 route 的页面词典存在，但仍加载全局 common 词典；不因其他 route 的词典尚未创建而失败。

- [ ] **Step 4: 创建最小 common 词典，使检查器可加载公共 namespace**

```javascript
/* project/i18n/common.en-US.js */
(function (root) {
  'use strict';
  root.__AW_I18N__.register('en-US', 'common', {
    'language.zh': 'Chinese',
    'language.en': 'English',
    'loading': 'Loading...',
    'loadFailed': 'Failed to load',
    'retry': 'Retry'
  });
})(typeof window !== 'undefined' ? window : globalThis);
```

- [ ] **Step 5: 运行 runtime 测试，并保留完整性检查的预期红灯**

Run: `node scripts/i18n-runtime.test.js`

Expected: PASS.

Run: `node scripts/check-i18n.js`

Expected: FAIL for missing page catalogs, unmarked page content, and the minimal common keys that are not wired into the shell until Task 4; no parser crash or false “missing page” error.

- [ ] **Step 6: 提交检查器**

```bash
git add scripts/check-i18n.js project/i18n/common.en-US.js
git commit -m "test: add i18n coverage validator"
```

---

### Task 4: Shell、路由和语言持久化

**Files:**
- Create: `scripts/i18n-contract.test.js`
- Modify: `project/index.html`
- Modify: `project/pages/_router.js`
- Modify: `project/i18n/common.en-US.js`

- [ ] **Step 1: 写静态接入契约失败测试**

```javascript
// scripts/i18n-contract.test.js
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const index = fs.readFileSync('project/index.html', 'utf8');
const router = fs.readFileSync('project/pages/_router.js', 'utf8');

assert.match(index, /localStorage\.getItem\('aw-locale'\)/);
assert.match(index, /i18n\/runtime\.js/);
assert.match(index, /i18n\/common\.en-US\.js/);
assert.ok(index.indexOf('i18n/runtime.js') < index.indexOf('pages/_router.js'));
assert.match(router, /data-locale-set="zh-CN"/);
assert.match(router, /data-locale-set="en-US"/);
assert.match(router, /localStorage\.setItem\('aw-locale'/);
assert.match(router, /i18n\/en-US\/' \+ routeId \+ '\.js'/);
assert.match(router, /document\.documentElement\.setAttribute\('lang'/);
assert.match(router, /function loadRoute\(routeId, options\)/);
assert.match(router, /preserveScroll/);
assert.match(router, /focus\(\{ preventScroll: true \}\)/);

const earlyScript = index.match(/<script>([\s\S]*?aw-locale[\s\S]*?)<\/script>/)[1];
function runEarlyLocale(getItem) {
  const attrs = { lang: 'zh-CN' };
  vm.runInNewContext(earlyScript, {
    localStorage: { getItem },
    document: { documentElement: { setAttribute(name, value) { attrs[name] = value; } } }
  });
  return attrs.lang;
}
assert.equal(runEarlyLocale(key => key === 'aw-locale' ? 'en-US' : null), 'en-US');
assert.doesNotThrow(() => runEarlyLocale(() => { throw new Error('storage blocked'); }));
assert.equal(runEarlyLocale(() => 'unsupported'), 'zh-CN');

console.log('i18n shell contract passed');
```

- [ ] **Step 2: 运行契约测试并确认失败**

Run: `node scripts/i18n-contract.test.js`

Expected: FAIL on the first missing `aw-locale` or i18n script assertion.

- [ ] **Step 3: 在首屏脚本恢复 locale 并加载运行时**

在 `project/index.html` 中扩展现有早期主题脚本：

```html
<script>
  (function () {
    try {
      var theme = localStorage.getItem('aw-theme');
      if (theme === 'dark' || theme === 'light') {
        document.documentElement.setAttribute('data-theme', theme);
      }
      var locale = localStorage.getItem('aw-locale');
      document.documentElement.setAttribute('lang', locale === 'en-US' ? 'en-US' : 'zh-CN');
    } catch (e) {}
  })();
</script>
```

在 router 前按顺序增加：

```html
<script src="i18n/runtime.js"></script>
<script src="i18n/common.en-US.js"></script>
<script src="pages/_router.js"></script>
```

- [ ] **Step 4: 在 `_router.js` 增加 locale 状态与 Segmented 控件**

```javascript
function setLocale(locale) {
  var scrollY = window.scrollY || 0;
  var normalized = window.__AW_I18N__.setLocale(locale);
  document.documentElement.setAttribute('lang', normalized);
  try { localStorage.setItem('aw-locale', normalized); } catch (e) {}
  loadRoute(getRouteFromHash() || DEFAULT_ROUTE, {
    preserveScroll: true,
    scrollY: scrollY,
    focusLocale: normalized
  });
}

function buildLocaleToggle() {
  var current = window.__AW_I18N__.getLocale();
  return '<div class="locale-toggle-fixed" role="group" aria-label="' + tCommon('language.switch', null, '语言切换') + '">' +
    '<button class="lt-btn' + (current === 'zh-CN' ? ' is-active' : '') + '" data-locale-set="zh-CN" aria-label="' + tCommon('language.zh', null, '中文') + '" aria-pressed="' + (current === 'zh-CN') + '">中文</button>' +
    '<button class="lt-btn' + (current === 'en-US' ? ' is-active' : '') + '" data-locale-set="en-US" aria-label="' + tCommon('language.en', null, '英文') + '" aria-pressed="' + (current === 'en-US') + '">EN</button>' +
    '</div>';
}

// Run once before the first route render.
window.__AW_I18N__.setLocale(document.documentElement.getAttribute('lang'));
```

增加统一 shell 查询函数，并使用固定 key 结构：

```javascript
var GROUP_KEYS = {
  '导览': 'guide',
  '设计基础': 'foundations',
  '通用组件': 'components',
  '业务模式': 'patterns',
  '页面蓝图': 'blueprints',
  '工程落地': 'implementation'
};

function tCommon(key, params, fallback) {
  return window.__AW_I18N__.t('common:' + key, params, fallback);
}

function getGroupLabel(group) {
  return tCommon('group.' + GROUP_KEYS[group], null, group);
}

function getRouteLabel(routeId) {
  return tCommon('route.' + routeId, null, ROUTE_MAP[routeId].label);
}
```

`buildSidebar` 使用 `getGroupLabel` / `getRouteLabel`；`buildToolbar`、`showError`、加载态、`document.title` 和 demo toast 都通过带中文 fallback 的 `tCommon(key, params, chineseFallback)` 获取当前文案。toolbar 返回 `.comp-bc` 与 `.toolbar-controls` 两部分，后者依次包含 `buildLocaleToggle()` 和主题切换器。

语言按钮与路由渲染完成逻辑必须完整接线：

```javascript
function wireLocaleToggle() {
  document.querySelectorAll('[data-locale-set]').forEach(function (button) {
    button.onclick = function () { setLocale(button.getAttribute('data-locale-set')); };
  });
}

function finishRouteRender(slot, options) {
  wireDemoInteractions(slot);
  if (!options.preserveScroll) {
    window.scrollTo(0, 0);
    return;
  }
  window.requestAnimationFrame(function () {
    window.scrollTo(0, options.scrollY || 0);
    var selector = '[data-locale-set="' + options.focusLocale + '"]';
    var button = document.querySelector(selector);
    if (button) button.focus({ preventScroll: true });
  });
}
```

将 `loadRoute` 改为 `function loadRoute(routeId, options)`，第一行执行 `options = options || {}`；每次 toolbar 重绘后同时调用 `wireThemeToggle()` 和 `wireLocaleToggle()`。普通 hash 导航不传 options，因此仍滚动到顶部；语言切换传入保存的 `scrollY`，因此只恢复当前阅读位置和语言按钮焦点。

- [ ] **Step 5: 增加英文词典脚本缓存与竞态保护**

```javascript
var loadedLocaleScripts = {};

function loadLocaleScript(routeId) {
  if (window.__AW_I18N__.getLocale() !== 'en-US') return Promise.resolve();
  if (loadedLocaleScripts[routeId]) return loadedLocaleScripts[routeId];
  loadedLocaleScripts[routeId] = new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.src = 'i18n/en-US/' + routeId + '.js';
    script.onload = resolve;
    script.onerror = function () {
      delete loadedLocaleScripts[routeId];
      reject(new Error('failed to load English locale: ' + routeId));
    };
    document.head.appendChild(script);
  });
  return loadedLocaleScripts[routeId];
}
```

`loadRoute` 删除当前只处理 page cache 的提前返回分支，对页面和词典统一使用 `Promise.all`，保留现有 `reqId` 检查。只有页面尚未注册时才显示加载态；词典加载失败时捕获错误、输出 `console.error` 并继续渲染中文 fallback，不进入整页加载失败状态：

```javascript
function loadEnglishCatalogOrFallback(routeId) {
  return loadLocaleScript(routeId).catch(function (error) {
    console.error('[i18n]', error);
  });
}

Promise.all([loadPageScript(routeId), loadEnglishCatalogOrFallback(routeId)])
  .then(function (result) {
    if (reqId !== currentReqId) return;
    slot.innerHTML = result[0];
    window.__AW_I18N__.apply(slot);
    finishRouteRender(slot, options);
  });
```

页面加载失败的 catch 分支也要检查 `reqId`、写入本地化错误页并调用 `finishRouteRender(slot, options)`。这样缓存页面、首次页面、中文 fallback 和错误页共享同一套滚动/焦点收尾逻辑。

- [ ] **Step 6: 用 `Intl` 和 common key 替换路由器动态中文**

```javascript
function formatMonth(date, locale) {
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(date);
}

function formatNumber(value, locale) {
  return new Intl.NumberFormat(locale).format(value);
}
```

月份切换不再通过中文字符串查找索引。给月份标题保存 `data-month-index="1"`，用 `[new Date(2026, 2, 1), new Date(2026, 3, 1), new Date(2026, 4, 1)]` 计算前后月份并调用 `formatMonth`。数字分页提示先把纯数字转换为 Number，再用 `formatNumber` 输出。

清空、确认、选择器、分页、Tab、按钮和 checkbox 提示固定使用这些 common key：

```text
demo.quickRange       demo.dateSelected      demo.timeSelected
demo.timeSet          demo.monthChanged      demo.selectionCleared
demo.selectionConfirmed                    demo.selectExpanded
demo.selectCollapsed  demo.pageClicked       demo.viewChanged
demo.buttonClicked    demo.defaultAction     demo.checked
demo.unchecked        picker.dateEmpty       picker.timeEmpty
picker.rangeStart     picker.rangeEnd         picker.dateTimeStart
picker.dateTimeEnd
```

其中带值的消息使用 `{label}`、`{date}`、`{time}`、`{month}`、`{page}` 或 `{action}` 插值。`updateDateTimeStart` 不再硬编码比较“未选择”，而是分别比较 `tCommon('picker.dateEmpty', null, '未选择日期')` 和 `tCommon('picker.timeEmpty', null, '未选择时间')`。所有初始输出 fallback 也使用同一组 key，避免英文模式被动态交互改回中文。

- [ ] **Step 7: 补齐 common shell 词典并运行契约测试**

`common.en-US.js` 必须包含 `group.guide|foundations|components|patterns|blueprints|implementation`、`route.<66 route id>`、`language.switch|zh|en`、`theme.switch|light|dark`、breadcrumb/loading/error 文案，以及 Step 6 列出的全部动态 key。运行 `node scripts/check-i18n.js --routes=overview` 时 common 不得出现 missing 或 unused key。

Run: `node scripts/i18n-contract.test.js`

Expected: `i18n shell contract passed`.

Run: `node scripts/i18n-runtime.test.js`

Expected: `i18n runtime tests passed`.

- [ ] **Step 8: 提交 shell 国际化**

```bash
git add project/index.html project/pages/_router.js project/i18n/common.en-US.js scripts/i18n-contract.test.js
git commit -m "feat: add persistent language switching"
```

---

### Task 5: 英文布局适配

**Files:**
- Modify: `scripts/i18n-contract.test.js`
- Modify: `project/i18n/runtime.js`
- Modify: `project/styles/system.css`
- Modify: `project/styles/components-extras.css`

- [ ] **Step 1: 增加英文布局契约失败测试**

```javascript
const systemCss = fs.readFileSync('project/styles/system.css', 'utf8');
const extrasCss = fs.readFileSync('project/styles/components-extras.css', 'utf8');
const runtime = fs.readFileSync('project/i18n/runtime.js', 'utf8');

assert.match(systemCss, /--aw-doc-sidebar-width:\s*240px/);
assert.match(systemCss, /html\[lang="en-US"\][\s\S]*--aw-doc-sidebar-width:\s*272px/);
assert.match(systemCss, /grid-template-columns:\s*var\(--aw-doc-sidebar-width\)/);
assert.match(extrasCss, /\.locale-toggle-fixed/);
assert.match(extrasCss, /\.toolbar-controls/);
assert.match(extrasCss, /html\[lang="en-US"\][\s\S]*\.btn/);
assert.match(extrasCss, /html\[lang="en-US"\][\s\S]*table/);
assert.match(extrasCss, /html\[lang="en-US"\][\s\S]*\.actions/);
assert.match(runtime, /scrollWidth\s*>\s*parent\.clientWidth/);
```

- [ ] **Step 2: 运行契约测试并确认 CSS 断言失败**

Run: `node scripts/i18n-contract.test.js`

Expected: FAIL on `--aw-doc-sidebar-width`.

- [ ] **Step 3: 用 CSS 变量实现语言相关侧栏宽度**

```css
:root { --aw-doc-sidebar-width: 240px; }
html[lang="en-US"] { --aw-doc-sidebar-width: 272px; }

.app {
  grid-template-columns: var(--aw-doc-sidebar-width) minmax(0, 1fr);
}

html[lang="en-US"] .nav a {
  min-width: 0;
  min-height: 34px;
  line-height: 1.35;
  white-space: normal;
}
```

- [ ] **Step 4: 增加语言 Segmented 与英文组件规则**

```css
.locale-toggle-fixed {
  display: inline-flex;
  flex-shrink: 0;
  padding: 3px;
  border: 1px solid var(--aw-border-2);
  border-radius: 999px;
  background: var(--aw-fill-1);
}
.locale-toggle-fixed .lt-btn {
  min-width: 42px;
  height: 26px;
  padding: 0 10px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--aw-text-2);
  font: 500 12px/1 var(--aw-font);
  cursor: pointer;
}
.locale-toggle-fixed .lt-btn.is-active {
  background: var(--aw-bg);
  color: var(--aw-primary);
  box-shadow: var(--aw-shadow-1);
}

.toolbar-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

html[lang="en-US"] .btn {
  min-height: 32px;
  height: auto;
  white-space: normal;
  line-height: 1.3;
}
html[lang="en-US"] .form-row > .lbl { min-width: 132px; white-space: normal; }
html[lang="en-US"] .tabs { overflow-x: auto; }
html[lang="en-US"] .tabs a { flex: 0 0 auto; white-space: nowrap; }
html[lang="en-US"] .tag,
html[lang="en-US"] .status-dot { white-space: nowrap; }
html[lang="en-US"] .card-title,
html[lang="en-US"] .surface h3,
html[lang="en-US"] .surface h4 { overflow-wrap: anywhere; }
html[lang="en-US"] .actions,
html[lang="en-US"] .dt-actions,
html[lang="en-US"] .lp-actions,
html[lang="en-US"] .pc-actions,
html[lang="en-US"] .ph-actions { flex-wrap: wrap; }
html[lang="en-US"] table th { white-space: normal; line-height: 1.35; }
html[lang="en-US"] table .mono { white-space: nowrap; }
html[lang="en-US"] .i18n-table-scroll { overflow-x: auto; max-width: 100%; }
html[lang="en-US"] .i18n-table-scroll > table { min-width: 720px; }

@media (max-width: 700px) {
  .app-main.comp-page .comp-toolbar { align-items: flex-start; flex-wrap: wrap; }
  .app-main.comp-page .comp-bc { flex-basis: 100%; }
  .toolbar-controls { width: 100%; justify-content: flex-end; }
}
```

这些规则只修正英文内容固有的长度风险；小屏 toolbar 规则同时服务两种语言，确保两个切换器始终位于面包屑下一行。

- [ ] **Step 5: 只包装实际溢出的英文表格**

在 `runtime.js` 中增加布局准备函数，并在英文 `apply` 完成后调用。页面切回中文时会由 router 重新注入原始 HTML，因此不需要逆向拆除 wrapper。

```javascript
function prepareEnglishTables(rootNode) {
  if (!rootNode || locale !== 'en-US' || typeof document === 'undefined') return;
  window.requestAnimationFrame(function () {
    rootNode.querySelectorAll('table').forEach(function (table) {
      var parent = table.parentElement;
      if (!parent || parent.classList.contains('i18n-table-scroll')) return;
      if (!parent.clientWidth) return;
      if (table.scrollWidth <= parent.clientWidth) return;
      var wrapper = document.createElement('div');
      wrapper.className = 'i18n-table-scroll';
      parent.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  });
}
```

把 `prepareEnglishTables(rootNode)` 放在 `apply` 的末尾。

- [ ] **Step 6: 运行 runtime 与契约测试并确认通过**

Run: `node scripts/i18n-contract.test.js`

Expected: `i18n shell contract passed`.

Run: `node scripts/i18n-runtime.test.js`

Expected: `i18n runtime tests passed`.

- [ ] **Step 7: 提交英文布局基础**

```bash
git add project/i18n/runtime.js project/styles/system.css project/styles/components-extras.css scripts/i18n-contract.test.js
git commit -m "style: adapt components for English copy"
```

---

### Task 6: 导览页面词典

**Files:**
- Create: `project/i18n/en-US/overview.js`
- Create: `project/i18n/en-US/ai-reference.js`
- Create: `project/i18n/en-US/cases.js`
- Modify: `project/pages/overview.js`
- Modify: `project/pages/ai-reference.js`
- Modify: `project/pages/cases.js`

- [ ] **Step 1: 对导览组运行覆盖检查并确认红灯**

Run: `node scripts/check-i18n.js --routes=overview,ai-reference,cases`

Expected: FAIL，逐项列出三个页面的缺失词典和未标记中文。

- [ ] **Step 2: 标记导览组全部用户文案**

统一 key 约定：

```html
<p class="section-eyebrow" data-i18n="overview:values.eyebrow">导览 · 设计价值观</p>
<h2 data-i18n="overview:values.title">AngelWatch TMS 设计系统</h2>
<span data-i18n="common:viewDetails">查看详情</span>
```

Hero、统计单位、证据表、案例矩阵、链接文案和属性都必须被标记；品牌名、route id、文件路径和代码保持原文。

- [ ] **Step 3: 创建三份完整英文词典**

每个文件按固定注册形式写入当前页面使用的全部局部 key：

```javascript
(function (root) {
  'use strict';
  root.__AW_I18N__.register('en-US', 'overview', {
    'values.eyebrow': 'Guide · Design Values',
    'values.title': 'AngelWatch TMS Design System'
  });
})(typeof window !== 'undefined' ? window : globalThis);
```

实际词典必须覆盖检查器列出的全部 key，不保留空值或机器占位文案。

- [ ] **Step 4: 运行导览组覆盖检查直到通过**

Run: `node scripts/check-i18n.js --routes=overview,ai-reference,cases`

Expected: `3 routes i18n coverage passed`.

- [ ] **Step 5: 提交导览翻译**

```bash
git add project/pages/overview.js project/pages/ai-reference.js project/pages/cases.js project/i18n/en-US/overview.js project/i18n/en-US/ai-reference.js project/i18n/en-US/cases.js
git commit -m "feat: translate guide pages"
```

---

### Task 7: 设计基础页面词典

**Files:**
- Create: `project/i18n/en-US/{color,dark,i18n,type,space,radius,motion,layout,responsive,palette,icons,illustration,a11y}.js`
- Modify: `project/pages/{color,dark,i18n,type,space,radius,motion,layout,responsive,palette,icons,illustration,a11y}.js`

- [ ] **Step 1: 对 13 个设计基础路由运行覆盖检查并确认红灯**

Run: `node scripts/check-i18n.js --routes=color,dark,i18n,type,space,radius,motion,layout,responsive,palette,icons,illustration,a11y`

Expected: FAIL，列出 13 个页面的未标记中文和缺失 key。

- [ ] **Step 2: 标记所有设计基础文案与属性**

key 使用页面语义分段，例如：

```html
<h3 data-i18n="color:status.title">状态色</h3>
<p data-i18n="responsive:sidebar.description">侧边栏在小屏下折叠。</p>
<svg><text data-i18n="layout:grid.columns">24 栅格</text></svg>
```

`i18n.js` 中四语言对照单元格和代码示例容器使用 `data-i18n-ignore`；其标题、说明和验收规则仍需英文 key。

- [ ] **Step 3: 创建 13 份完整英文词典**

词典必须使用准确的设计系统英文术语：Color Tokens、Dark Mode、Internationalization、Typography、Spacing、Radius and Shadow、Motion、Layout Grid、Responsive Breakpoints、Extended Palette、Icons、Illustration、Accessibility。

- [ ] **Step 4: 运行设计基础覆盖检查直到通过**

Run: `node scripts/check-i18n.js --routes=color,dark,i18n,type,space,radius,motion,layout,responsive,palette,icons,illustration,a11y`

Expected: `13 routes i18n coverage passed`.

- [ ] **Step 5: 提交设计基础翻译**

```bash
git add project/pages/{color,dark,i18n,type,space,radius,motion,layout,responsive,palette,icons,illustration,a11y}.js project/i18n/en-US/{color,dark,i18n,type,space,radius,motion,layout,responsive,palette,icons,illustration,a11y}.js
git commit -m "feat: translate foundation pages"
```

提交前用 `git diff --cached --name-only` 确认暂存文件只包含上述 13 个页面及其词典。

---

### Task 8: 通用组件页面词典

**Files:**
- Create: `project/i18n/en-US/{buttons,inputs,menu,nav-comp,table,tags,feedback,progress,datepicker,upload,tree-comp,drawer,toast,skeleton}.js`
- Modify: `project/pages/{buttons,inputs,menu,nav-comp,table,tags,feedback,progress,datepicker,upload,tree-comp,drawer,toast,skeleton}.js`

- [ ] **Step 1: 对 14 个通用组件路由运行覆盖检查并确认红灯**

Run: `node scripts/check-i18n.js --routes=buttons,inputs,menu,nav-comp,table,tags,feedback,progress,datepicker,upload,tree-comp,drawer,toast,skeleton`

Expected: FAIL，列出所有缺失词典、文本 key 和属性 key。

- [ ] **Step 2: 标记组件文案、placeholder、状态与交互标签**

```html
<button class="btn btn-primary" data-i18n="common:save">保存</button>
<input data-i18n-placeholder="inputs:deviceSnPlaceholder" placeholder="请输入设备 SN" />
<span class="status-dot online" data-i18n="common:status.online">在线</span>
```

可复用动作与状态优先进入 `common`；组件特有说明、规则和示例放当前 route namespace。

- [ ] **Step 3: 创建 14 份完整英文词典并扩展 common**

按钮、表单、表格、分页、反馈、日期、上传、树、抽屉和 Toast 使用 AntD 官方英文组件名；业务样例使用自然、简短的企业后台英文。

- [ ] **Step 4: 运行通用组件覆盖检查直到通过**

Run: `node scripts/check-i18n.js --routes=buttons,inputs,menu,nav-comp,table,tags,feedback,progress,datepicker,upload,tree-comp,drawer,toast,skeleton`

Expected: `14 routes i18n coverage passed`.

- [ ] **Step 5: 提交通用组件翻译**

```bash
git add project/pages/{buttons,inputs,menu,nav-comp,table,tags,feedback,progress,datepicker,upload,tree-comp,drawer,toast,skeleton}.js project/i18n/common.en-US.js project/i18n/en-US/{buttons,inputs,menu,nav-comp,table,tags,feedback,progress,datepicker,upload,tree-comp,drawer,toast,skeleton}.js
git commit -m "feat: translate common component pages"
```

提交前用 `git diff --cached --name-only` 确认没有暂存其他页面组。

---

### Task 9: 业务模式页面词典

**Files:**
- Create: `project/i18n/en-US/{status-matrix,data-cards,row-actions,charts,cascader,advanced-form,tab-variants,avatar-result,empty-state,error-page,loading-levels,page-header}.js`
- Modify: `project/pages/{status-matrix,data-cards,row-actions,charts,cascader,advanced-form,tab-variants,avatar-result,empty-state,error-page,loading-levels,page-header}.js`

- [ ] **Step 1: 对 12 个业务模式路由运行覆盖检查并确认红灯**

Run: `node scripts/check-i18n.js --routes=status-matrix,data-cards,row-actions,charts,cascader,advanced-form,tab-variants,avatar-result,empty-state,error-page,loading-levels,page-header`

Expected: FAIL，列出业务状态、操作和说明中的未标记中文。

- [ ] **Step 2: 标记业务模式文本并保持状态术语一致**

```html
<span class="status-dot upgrading" data-i18n="common:status.upgrading">升级中</span>
<button class="btn" data-i18n="common:retry">重试</button>
<h3 data-i18n="charts:details.title">统计详情</h3>
```

在线/离线/升级中/故障/锁定、成功/失败/部分成功等状态只使用 common 中的锁定译法。

- [ ] **Step 3: 创建 12 份完整英文词典并扩展 common 状态表**

状态矩阵和图表页的英文必须与 `copywriting` 术语表一致；代码块中的 ECharts、React 和 TypeScript 示例保持原文。

- [ ] **Step 4: 运行业务模式覆盖检查直到通过**

Run: `node scripts/check-i18n.js --routes=status-matrix,data-cards,row-actions,charts,cascader,advanced-form,tab-variants,avatar-result,empty-state,error-page,loading-levels,page-header`

Expected: `12 routes i18n coverage passed`.

- [ ] **Step 5: 提交业务模式翻译**

```bash
git add project/pages/{status-matrix,data-cards,row-actions,charts,cascader,advanced-form,tab-variants,avatar-result,empty-state,error-page,loading-levels,page-header}.js project/i18n/common.en-US.js project/i18n/en-US/{status-matrix,data-cards,row-actions,charts,cascader,advanced-form,tab-variants,avatar-result,empty-state,error-page,loading-levels,page-header}.js
git commit -m "feat: translate business pattern pages"
```

---

### Task 10: 页面蓝图词典

**Files:**
- Create: `project/i18n/en-US/{shell,login-page,list-page,detail-page,form-page,tree-list,wizard-page,dash-page,device-center-page,market-page,ota-page,push-page,user-mgmt-page,map-page,service-page,ops-page}.js`
- Modify: `project/pages/{shell,login-page,list-page,detail-page,form-page,tree-list,wizard-page,dash-page,device-center-page,market-page,ota-page,push-page,user-mgmt-page,map-page,service-page,ops-page}.js`

- [ ] **Step 1: 对 16 个页面蓝图运行覆盖检查并确认红灯**

Run: `node scripts/check-i18n.js --routes=shell,login-page,list-page,detail-page,form-page,tree-list,wizard-page,dash-page,device-center-page,market-page,ota-page,push-page,user-mgmt-page,map-page,service-page,ops-page`

Expected: FAIL，列出页面标题、筛选器、表头、状态、按钮和帮助文本中的缺失项。

- [ ] **Step 2: 标记页面蓝图中的全部产品文案**

```html
<label data-i18n="common:field.organization">所属机构</label>
<button class="btn" data-i18n="common:search">查询</button>
<th data-i18n="device-center-page:table.lastHeartbeat">最后心跳</th>
```

设备编号、IMEI、版本号、operationType、包名和文件名保持原文；产品模块、字段、状态和操作必须翻译。

- [ ] **Step 3: 创建 16 份完整英文词典**

使用锁定产品词汇：Application Market、OTA Upgrade、Push Tasks、Data Center、Device Map、Value-added Services、Account and Permissions、Operations and System Management。

- [ ] **Step 4: 运行页面蓝图覆盖检查直到通过**

Run: `node scripts/check-i18n.js --routes=shell,login-page,list-page,detail-page,form-page,tree-list,wizard-page,dash-page,device-center-page,market-page,ota-page,push-page,user-mgmt-page,map-page,service-page,ops-page`

Expected: `16 routes i18n coverage passed`.

- [ ] **Step 5: 提交页面蓝图翻译**

```bash
git add project/pages/{shell,login-page,list-page,detail-page,form-page,tree-list,wizard-page,dash-page,device-center-page,market-page,ota-page,push-page,user-mgmt-page,map-page,service-page,ops-page}.js project/i18n/common.en-US.js project/i18n/en-US/{shell,login-page,list-page,detail-page,form-page,tree-list,wizard-page,dash-page,device-center-page,market-page,ota-page,push-page,user-mgmt-page,map-page,service-page,ops-page}.js
git commit -m "feat: translate page blueprints"
```

---

### Task 11: 工程落地页面词典

**Files:**
- Create: `project/i18n/en-US/{ecosystem,tech-stack,config-provider,api,data-format,copywriting,whitelabel,do-dont}.js`
- Modify: `project/pages/{ecosystem,tech-stack,config-provider,api,data-format,copywriting,whitelabel,do-dont}.js`

- [ ] **Step 1: 对 8 个工程落地路由运行覆盖检查并确认红灯**

Run: `node scripts/check-i18n.js --routes=ecosystem,tech-stack,config-provider,api,data-format,copywriting,whitelabel,do-dont`

Expected: FAIL，列出规范说明、组件映射、数据格式和红线中的未标记中文。

- [ ] **Step 2: 标记工程规则文本，保留技术标识符**

```html
<h3 data-i18n="config-provider:overrides.title">覆盖项一览</h3>
<td data-i18n="data-format:date.full">完整日期时间</td>
<li data-i18n="do-dont:rules.noCdn">不要从 CDN 加载字体或图标</li>
```

NPM 包、license、代码、token、文件路径和 API 名不翻译；解释这些技术内容的自然语言必须翻译。

- [ ] **Step 3: 创建 8 份完整英文词典**

`copywriting` 页的中英文术语对照属于内容本身：标题和说明翻译，对照表的中文源词列使用 `data-i18n-ignore` 保留。

- [ ] **Step 4: 运行工程落地覆盖检查直到通过**

Run: `node scripts/check-i18n.js --routes=ecosystem,tech-stack,config-provider,api,data-format,copywriting,whitelabel,do-dont`

Expected: `8 routes i18n coverage passed`.

- [ ] **Step 5: 提交工程落地翻译**

```bash
git add project/pages/{ecosystem,tech-stack,config-provider,api,data-format,copywriting,whitelabel,do-dont}.js project/i18n/en-US/{ecosystem,tech-stack,config-provider,api,data-format,copywriting,whitelabel,do-dont}.js
git commit -m "feat: translate implementation guidance"
```

---

### Task 12: 全量词典、路由和模板安全回归

**Files:**
- Verify: `scripts/check-i18n.js`, `project/index.html`, `project/pages/_router.js`, `project/pages/*.js`, `project/i18n/**/*.js`

- [ ] **Step 1: 运行全量国际化检查**

Run: `node scripts/check-i18n.js`

Expected:

```text
66 routes, pages and locale catalogs aligned
0 missing keys
0 unmarked Chinese text nodes
0 unmarked Chinese attributes
0 unused English keys
i18n coverage passed
```

- [ ] **Step 2: 运行运行时和接入契约测试**

Run: `node scripts/i18n-runtime.test.js`

Expected: `i18n runtime tests passed`.

Run: `node scripts/i18n-contract.test.js`

Expected: `i18n shell contract passed`.

- [ ] **Step 3: 运行 66 个 fragment 注册校验**

Run:

```bash
node - <<'NODE'
global.window = {};
const fs = require('fs');
const files = fs.readdirSync('project/pages').filter(f => f.endsWith('.js') && f !== '_router.js');
let ok = 0;
for (const f of files) {
  delete require.cache[require.resolve('./project/pages/' + f)];
  require('./project/pages/' + f);
  if (window.__AW_PAGES__[f.slice(0, -3)]) ok++;
}
console.log(ok + ' / ' + files.length + ' pages registered');
NODE
```

Expected: `66 / 66 pages registered`.

- [ ] **Step 4: 运行 route/磁盘与 HTML 结构校验**

Run:

```bash
python3 - <<'PY'
import glob, re
js = open('project/pages/_router.js').read()
m = re.search(r'var ROUTES = \[([\s\S]*?)\];', js)
ids_in_js = set(re.findall(r"\['([^']+)',", m.group(1)))
files = {p.split('/')[-1].rsplit('.', 1)[0] for p in glob.glob('project/pages/*.js') if not p.endswith('_router.js')}
assert ids_in_js == files, {'only in router': ids_in_js - files, 'only on disk': files - ids_in_js}
print('route/file match')
PY

python3 - <<'PY'
from html.parser import HTMLParser
class C(HTMLParser):
    def __init__(self): super().__init__(); self.s = {}
    def handle_starttag(self, t, a): self.s[t] = (self.s.get(t, (0, 0))[0] + 1, self.s.get(t, (0, 0))[1])
    def handle_endtag(self, t): self.s[t] = (self.s.get(t, (0, 0))[0], self.s.get(t, (0, 0))[1] + 1)
void = {'meta','link','br','hr','img','input','source','track','wbr','area','base','col','embed','param','circle','rect','path','line','polygon','ellipse','use','marker','stop','text','image','tspan'}
p = C(); p.feed(open('project/index.html').read())
assert all(o == c for t, (o, c) in p.s.items() if t not in void), p.s
print('index.html balanced')
PY
```

Expected: `route/file match` 和 `index.html balanced`。内部 route link、eyebrow 与模板安全已由 Step 1 的 `check-i18n.js` 覆盖。

- [ ] **Step 5: 运行禁用模式和 diff 格式检查**

Run: `grep -rnE 'class="new-tag"|class="v">v[0-9]+\.[0-9]+ *</span>|state-machine|sm-graph|sm-legend|sm-rules|"v1\.0/|撤回 v1|（同 v1' project/`

Expected: no output.

Run: `git diff --check`

Expected: exit 0, no output.

- [ ] **Step 6: 将失败项返回所属任务**

Task 12 本身不做目录级暂存。若检查失败，只修改错误所指向的精确文件，回到 Task 3 或 Task 6-11 的对应命令验证，再重新执行 Task 12；未经用户明确授权不创建提交。

---

### Task 13: 浏览器桌面与移动端验收

**Files:**
- Verify/Modify: `project/styles/system.css`
- Verify/Modify: `project/styles/components-extras.css`
- Verify/Modify: `project/pages/{overview,buttons,inputs,table,i18n,login-page,device-center-page,ops-page}.js`
- Verify/Modify: `project/i18n/en-US/{overview,buttons,inputs,table,i18n,login-page,device-center-page,ops-page}.js`

- [ ] **Step 1: 使用 `file://` 打开站点并检查持久化**

Run: `open project/index.html`

Expected: 默认中文；切换 EN 后 `<html lang="en-US">`，刷新仍为英文；切回中文后刷新仍为中文。

- [ ] **Step 2: 桌面检查高风险路由**

检查 `overview`、`buttons`、`inputs`、`table`、`i18n`、`login-page`、`device-center-page`、`ops-page`，视口至少为 `1440×900`。

Expected: Light/Dark × zh/en 四组合无重叠、裁切、混合语言或页面级横向滚动；表格区域可独立横向滚动。

- [ ] **Step 3: 移动端检查相同路由**

使用 `390×844` 视口检查相同路由。

Expected: 语言和主题控件可见，面包屑不覆盖控件，按钮和表单自然换行，页面无空白或不可恢复的横向偏移。

- [ ] **Step 4: 检查语言切换状态保持**

在长页面滚动到中部后切换语言。

Expected: hash、主题和阅读位置保持；焦点回到当前语言按钮；动态 demo toast 使用当前语言。

- [ ] **Step 5: 修复并重复浏览器检查**

每个视觉问题只修改拥有该行为的最小 CSS 或页面词典，然后重复对应视口与四组合检查。

- [ ] **Step 6: 记录视觉修正边界**

运行 `git diff --check`，并在执行记录中列出每个视觉缺陷及其拥有文件。不得暂存整个 `project/styles`、`project/pages` 或 `project/i18n` 目录；未经用户明确授权不创建提交。

---

### Task 14: 文档同步与最终验收

**Files:**
- Modify: `README.md`
- Modify: `AGENTS.md`
- Modify: `CLAUDE.md`
- Modify: `AI_DESIGN_SYSTEM.md`
- Modify: `project/pages/i18n.js`
- Modify: `project/i18n/en-US/i18n.js`

- [ ] **Step 1: 更新 README 的能力与目录**

写明：

```markdown
- 运行时语言：zh-CN / en-US
- 默认语言：zh-CN
- 偏好存储：localStorage('aw-locale')
- 页面结构：单套 pages/*.js
- 英文词典：i18n/en-US/<id>.js
- 校验：node scripts/i18n-runtime.test.js && node scripts/i18n-contract.test.js && node scripts/check-i18n.js
```

- [ ] **Step 2: 更新 AGENTS/CLAUDE 扩展规则**

新增 route 或修改可见文本时必须：

```markdown
1. 为可见文本增加 data-i18n="<route>:<key>"。
2. 为 placeholder/title/aria-label/alt/value 使用对应 data-i18n-*。
3. 同步 project/i18n/en-US/<route>.js。
4. 代码或多语言对照样例使用 data-i18n-ignore，不得用它绕过普通文案翻译。
5. 运行 node scripts/check-i18n.js。
```

- [ ] **Step 3: 更新 AI 入口与 i18n 页面**

`AI_DESIGN_SYSTEM.md` 说明静态站和 React 业务仓库的职责；`project/pages/i18n.js` 展示当前实际的 `data-i18n`、词典加载和 `I18nextProvider + ConfigProvider` 示例，并同步 `project/i18n/en-US/i18n.js` 中新增或调整的页面 key。

- [ ] **Step 4: 重新运行所有测试与静态校验**

Run:

```bash
node scripts/i18n-runtime.test.js
node scripts/i18n-contract.test.js
node scripts/check-i18n.js
```

Expected: all three exit 0.

随后重新运行 Task 12 的 fragment、route、HTML、链接、eyebrow、禁用模式和 `git diff --check` 校验，结果全部通过。

- [ ] **Step 5: 提交文档与最终实现**

```bash
git add README.md AGENTS.md CLAUDE.md AI_DESIGN_SYSTEM.md project/pages/i18n.js project/i18n/en-US/i18n.js
git commit -m "docs: document bilingual design system workflow"
```
