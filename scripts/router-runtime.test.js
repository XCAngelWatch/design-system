const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../project/pages/_router.js'), 'utf8');
function productionFunction(name) {
  const match = source.match(new RegExp('  function ' + name + '\\([^]*?\\n  \\}'));
  assert.ok(match, name + ' must be available');
  return match[0];
}

// Hold the actual render callbacks until another navigation has superseded them.
// This reproduces rapid locale changes while the next animation frame is pending.
const frames = [];
const events = [];
const heading = { setAttribute() {}, focus() { events.push(['focus', 'heading']); } };
const slot = {
  querySelector(selector) { return selector === 'h1, .section h2, h2' ? heading : null; },
  setAttribute() {}
};
const rendering = {
  currentReqId: 1,
  wireDemoInteractions() {},
  scheduleTableLayout() {},
  requestAnimationFrame(callback) { frames.push(callback); },
  window: { scrollTo(x, y) { events.push(['scroll', y]); } },
  document: { querySelector() { return { focus() { events.push(['focus', 'locale']); } }; } }
};
vm.runInNewContext(productionFunction('finishRouteRender') + '\nthis.finish = finishRouteRender;', rendering);
rendering.finish(slot, { preserveScroll: true, scrollY: 1400, focusLocale: 'en-US' }, 1);
rendering.currentReqId = 2;
rendering.finish(slot, { focusHeading: true }, 2);
frames.splice(0).forEach(callback => callback());
assert.deepEqual(events, [['scroll', 0], ['focus', 'heading']], 'a superseded locale render must not scroll or focus the new route');

events.length = 0;
rendering.finish(slot, { focusHeading: true }, 2);
rendering.currentReqId = 3;
rendering.finish(slot, { preserveScroll: true, scrollY: 320, focusLocale: 'zh-CN' }, 3);
frames.splice(0).forEach(callback => callback());
assert.deepEqual(events, [['scroll', 0], ['scroll', 320], ['focus', 'locale']], 'a stale heading callback must not steal focus from the current locale control');

// Minimal DOM carriers exercise production icon selection and replacement. Tone
// and activity are separate: progress must survive the informational toast color.
class IconElement {
  constructor(tag, text = '') { this.tag = tag; this.text = text; this.children = []; this.attributes = {}; }
  get textContent() { return this.text + this.children.map(child => child.textContent).join(''); }
  set textContent(value) { this.text = value; this.children = []; }
  setAttribute(name, value) { this.attributes[name] = value; }
  getAttribute(name) { return this.attributes[name] ?? null; }
  hasAttribute(name) { return name in this.attributes; }
  appendChild(child) { this.children.push(child); }
  matches() { return false; }
  querySelector() { return this.children.find(child => child.attributes.class === 'aw-icon') || null; }
}
const pending = new IconElement('div', '⟳');
const info = new IconElement('div', 'i');
const error = new IconElement('div', '!');
const iconRoot = {
  querySelectorAll(selector) {
    if (selector === '.alert.info > .ico, .toast.info .ico') return [pending, info];
    if (selector === '.alert.error > .ico, .toast.error .ico') return [error];
    if (selector === '.ico, .pct, .upp-play, button.icon-btn') return [pending, info, error];
    return [];
  }
};
const icons = {
  document: { getElementById: () => ({}), createElementNS: (namespace, tag) => new IconElement(tag) }
};
vm.runInNewContext(['createSystemIcon', 'replaceIconCarrier', 'normalizeComponentIcons'].map(productionFunction).join('\n') + '\nthis.normalize = normalizeComponentIcons;', icons);
icons.normalize(iconRoot);
const symbol = carrier => carrier.children[0].children[0].getAttribute('href');
assert.equal(symbol(pending), '#aw-icon-refresh', 'a running task keeps its progress icon');
assert.equal(symbol(info), '#aw-icon-info', 'ordinary information remains informational');
assert.equal(symbol(error), '#aw-icon-error', 'error tone retains its error symbol');
icons.normalize(iconRoot);
assert.equal(symbol(pending), '#aw-icon-refresh', 'normalization is idempotent');
assert.equal(pending.children.length, 1);

// Closing a selector must not leave keyboard focus in its hidden popup.
const popupInput = {};
const outside = {};
const popup = { hidden: false, contains(node) { return node === popupInput; } };
const selectContext = {
  document: { activeElement: popupInput, getElementById() { return popup; } }
};
const select = {
  classList: { toggle() {} },
  getAttribute() { return 'popup'; }, setAttribute() {},
  focus() { selectContext.document.activeElement = this; }
};
vm.runInNewContext(['getDemoSelectPopup', 'setDemoSelectExpanded'].map(productionFunction).join('\n') + '\nthis.expand = setDemoSelectExpanded;', selectContext);
selectContext.expand(select, false);
assert.equal(popup.hidden, true);
assert.equal(selectContext.document.activeElement, select);
selectContext.document.activeElement = outside;
selectContext.expand(select, true);
selectContext.expand(select, false);
assert.equal(selectContext.document.activeElement, outside, 'closing a popup must not steal outside focus');

// Page-number replacement keeps keyboard navigation at the newly selected page.
const paging = { document: { activeElement: null, createElement: () => pageItem('') } };
let pageItems = [];
function pageItem(text) {
  const classes = new Set(['page']);
  const attributes = {};
  return {
    textContent: text,
    classList: {
      add(name) { classes.add(name); }, remove(name) { classes.delete(name); },
      contains(name) { return classes.has(name); },
      toggle(name, active) { if (active) classes.add(name); else classes.delete(name); }
    },
    matches(selector) { return selector === '.page'; },
    setAttribute(name, value) { attributes[name] = value; },
    removeAttribute(name) { delete attributes[name]; },
    getAttribute(name) { return attributes[name]; },
    focus() { paging.document.activeElement = this; },
    remove() {
      pageItems.splice(pageItems.indexOf(this), 1);
      if (paging.document.activeElement === this) paging.document.activeElement = null;
    }
  };
}
pageItems = ['‹', '1', '2', '3', '…', '10', '›'].map(pageItem);
const pager = {
  dataset: { currentPage: '1', totalPages: '10', windowed: 'true' },
  contains(item) { return pageItems.includes(item); },
  querySelectorAll() { return pageItems; },
  querySelector(selector) {
    if (selector === '.page[aria-current="page"]') return pageItems.find(item => item.getAttribute('aria-current') === 'page');
    if (selector === '.page.is-active, .page.active') return pageItems.find(item => item.classList.contains('is-active'));
    return null;
  },
  insertBefore(item, anchor) { pageItems.splice(anchor ? pageItems.indexOf(anchor) : pageItems.length, 0, item); }
};
vm.runInNewContext(['getPagerModel', 'getPagerItems', 'renderPager', 'syncPagerState'].map(productionFunction).join('\n') + '\nthis.render = renderPager;', paging);
pageItems.find(item => item.textContent === '2').focus();
paging.render(pager, 2);
assert.equal(paging.document.activeElement, pager.querySelector('.page[aria-current="page"]'));
assert.equal(paging.document.activeElement.textContent, '2');
const nextPage = pageItems.find(item => item.textContent === '›');
nextPage.focus();
paging.render(pager, 3);
assert.equal(paging.document.activeElement, nextPage, 'a preserved next-page button keeps its own focus');
paging.document.activeElement = outside;
paging.render(pager, 8);
assert.equal(paging.document.activeElement, outside);

// Concurrent page requests share a script; errors remain retryable and a cached
// page resolves without another injection. The real loader runs against fake events.
async function testScriptLoading() {
  const injected = [];
  const loading = {
    window: { __AW_PAGES__: {} }, loadedScripts: {}, loadedLocaleScripts: {},
    document: { createElement() { return {}; }, head: { appendChild(script) { injected.push(script); } } }
  };
  vm.runInNewContext(['loadPageScript', 'loadLocaleScript'].map(productionFunction).join('\n') + '\nthis.loadPage = loadPageScript; this.loadLocale = loadLocaleScript;', loading);
  const first = loading.loadPage('table');
  const second = loading.loadPage('table');
  assert.equal(injected.length, 1);
  loading.window.__AW_PAGES__.table = '<section>Table</section>';
  injected[0].onload();
  assert.deepEqual(await Promise.all([first, second]), ['<section>Table</section>', '<section>Table</section>']);
  assert.equal(await loading.loadPage('table'), '<section>Table</section>');
  assert.equal(injected.length, 1);

  const failure = assert.rejects(loading.loadPage('retry'), /failed to load/);
  injected[1].onerror();
  await failure;
  const retry = loading.loadPage('retry');
  assert.equal(injected.length, 3);
  loading.window.__AW_PAGES__.retry = 'loaded on retry';
  injected[2].onload();
  assert.equal(await retry, 'loaded on retry');

  const localeA = loading.loadLocale('table');
  const localeB = loading.loadLocale('table');
  assert.equal(injected.length, 4);
  injected[3].onload();
  await Promise.all([localeA, localeB]);
  await loading.loadLocale('table');
  assert.equal(injected.length, 4);
}

testScriptLoading().then(() => {
  console.log('router lifecycle, focus, semantic icon and script loading tests passed');
}).catch(error => { console.error(error); process.exitCode = 1; });
