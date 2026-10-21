const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Exercise the production responsive-placement function with a minimal DOM.
// Geometry is supplied by each case; browser QA covers actual layout and focus.
const source = fs.readFileSync(path.join(__dirname, '../project/pages/_router.js'), 'utf8');
const placement = source.match(/  function fitRowActionMenus\(root\) \{[\s\S]*?\n  \}/);
assert.ok(placement, 'responsive row-action placement must remain available');
function productionFunction(name) {
  const match = source.match(new RegExp('  function ' + name + '\\([^]*?\\n  \\}'));
  assert.ok(match, name + ' must be available');
  return match[0];
}

class Element {
  constructor(tag, attributes = {}, text = '') {
    this.tagName = tag.toUpperCase();
    this.attributes = { ...attributes };
    this.children = [];
    this.parentElement = null;
    this.text = text;
    this.clientWidth = 1000;
    this.scrollWidth = 100;
    const classes = this.classes = new Set((attributes.class || '').split(' ').filter(Boolean));
    this.classList = {
      add(name) { classes.add(name); },
      remove(name) { classes.delete(name); },
      contains(name) { return classes.has(name); }
    };
  }
  get className() { return [...this.classes].join(' '); }
  set className(value) { this.classes.clear(); value.split(' ').filter(Boolean).forEach(name => this.classes.add(name)); }
  get textContent() { return this.text + this.children.map(child => child.textContent).join(''); }
  set textContent(value) { this.text = value; this.children = []; }
  get firstChild() { return this.children[0] || null; }
  getAttribute(name) { return this.attributes[name] ?? null; }
  hasAttribute(name) { return name in this.attributes; }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  removeAttribute(name) { delete this.attributes[name]; }
  matches(selector) {
    if (selector.includes(',')) return selector.split(',').some(part => this.matches(part.trim()));
    const taggedClass = selector.match(/^(\w+)\.(.+)$/);
    if (taggedClass) return this.tagName === taggedClass[1].toUpperCase() && this.classList.contains(taggedClass[2]);
    if (selector[0] === '.') return this.classList.contains(selector.slice(1));
    const attribute = selector.match(/^\[([^=]+)(?:="([^"]*)")?\]$/);
    if (attribute) return attribute[2] === undefined ? this.hasAttribute(attribute[1]) : this.getAttribute(attribute[1]) === attribute[2];
    return this.tagName === selector.toUpperCase();
  }
  closest(selector) { return this.matches(selector) ? this : this.parentElement && this.parentElement.closest(selector); }
  querySelectorAll(selector) {
    return this.children.flatMap(child => [
      ...(child.matches(selector) ? [child] : []), ...child.querySelectorAll(selector)
    ]);
  }
  querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
  contains(node) { return node === this || this.children.some(child => child.contains(node)); }
  focus() { context.document.activeElement = this; }
  remove() {
    if (this.parentElement) {
      if (this.contains(context.document.activeElement)) context.document.activeElement = null;
      const siblings = this.parentElement.children;
      siblings.splice(siblings.indexOf(this), 1);
      this.parentElement = null;
    }
  }
  insertBefore(child, anchor) {
    child.remove();
    const index = anchor ? this.children.indexOf(anchor) : this.children.length;
    this.children.splice(index, 0, child);
    child.parentElement = this;
    return child;
  }
  appendChild(child) { return this.insertBefore(child, null); }
  before(child) { this.parentElement.insertBefore(child, this); }
  after(child) {
    const siblings = this.parentElement.children;
    this.parentElement.insertBefore(child, siblings[siblings.indexOf(this) + 1] || null);
  }
}

const context = {
  window: { innerWidth: 1280 },
  document: {
    activeElement: null,
    createElement: tag => new Element(tag),
    createComment: () => new Element('#comment'),
    createElementNS: (namespace, tag) => new Element(tag),
    getElementById: () => ({})
  },
  tCommon(key, params, fallback) { return key === 'more' ? 'More' : fallback; },
  demoControlId: 0
};
vm.runInNewContext(['createSystemIcon', 'getRowActionIcon', 'makeRowActionTextOnly', 'decorateRowMenuItem', 'normalizeRowActionMenus', 'syncRowMenuDivider', 'prepareRowActionMenus', 'getRowMenuItems', 'getDemoActionLabel'].map(productionFunction).join('\n') +
  '\n' + placement[0] + '\nthis.fit = fitRowActionMenus; this.normalize = normalizeRowActionMenus; this.prepare = prepareRowActionMenus; this.items = getRowMenuItems;', context);

function fixture({ label = '编辑', text = '', icon = true } = {}) {
  const root = new Element('main');
  const row = root.appendChild(new Element('div', { class: 'ra-row', ...(icon ? { 'data-row-actions-compact': '' } : {}) }));
  row.clientWidth = 240;
  row.scrollWidth = 180;
  const primary = row.appendChild(new Element('button', {}, '详情'));
  const secondary = row.appendChild(new Element('button', {
    class: icon ? 'ra-btn' : 'btn btn-link',
    'data-row-secondary': '', 'data-row-icon': 'edit', 'aria-label': label, title: label
  }, text));
  const svg = icon ? secondary.appendChild(new Element('svg')) : null;
  const wrap = row.appendChild(new Element('span', { class: 'ra-more-wrap' }));
  const trigger = wrap.appendChild(new Element('button', { class: 'ra-more-trigger' }, '更多'));
  const menu = wrap.appendChild(new Element('div', { class: 'ra-menu' }));
  menu.hidden = true;
  const existingItem = menu.appendChild(new Element('button', { role: 'menuitem' }, '查看日志'));
  return { root, row, primary, secondary, svg, wrap, trigger, menu, existingItem };
}

const compact = fixture();
context.window.innerWidth = 390;
const handler = () => {};
compact.secondary.onclick = handler;
context.fit(compact.root);
assert.equal(compact.secondary.parentElement, compact.menu);
assert.equal(compact.secondary.textContent, '编辑');
assert.equal(compact.secondary.getAttribute('role'), 'menuitem');
assert.equal(compact.secondary.getAttribute('tabindex'), '-1');
assert.equal(compact.menu.firstChild, compact.secondary);
assert.equal(compact.secondary.children[0], compact.svg);
assert.equal(compact.secondary.onclick, handler, 'moving the control must preserve its handler');

context.fit(compact.root);
assert.equal(compact.secondary.querySelectorAll('[data-row-menu-label]').length, 1);
assert.equal(compact.secondary.textContent, '编辑', 'repeated resize must not duplicate text');
assert.equal(compact.menu.children[1], compact.existingItem, 'other menu items retain their order');

context.window.innerWidth = 1280;
context.fit(compact.root);
assert.equal(compact.secondary.parentElement, compact.row);
assert.equal(compact.row.children.indexOf(compact.secondary) + 1, compact.row.children.indexOf(compact.wrap));
assert.equal(compact.secondary.textContent, '', 'wide layout restores the icon-only control');
assert.equal(compact.secondary.querySelector('[data-row-menu-label]'), null);
assert.equal(compact.secondary.classList.contains('ra-menu-action'), false);
assert.equal(compact.secondary.getAttribute('role'), null);
assert.equal(compact.secondary.getAttribute('tabindex'), null);
assert.equal(compact.secondary.getAttribute('aria-label'), '编辑');

compact.secondary.setAttribute('aria-label', 'Edit');
compact.secondary.setAttribute('title', 'Edit');
compact.row.scrollWidth = 300;
context.fit(compact.root);
assert.equal(compact.secondary.parentElement, compact.menu, 'a narrow container also collapses at desktop widths');
assert.equal(compact.secondary.textContent, 'Edit', 'menu text uses the current translated label');

const textButton = fixture({ label: 'Edit', text: 'Edit', icon: false });
context.window.innerWidth = 390;
textButton.row.scrollWidth = 300;
context.fit(textButton.root);
assert.equal(textButton.secondary.textContent, 'Edit');
assert.equal(textButton.secondary.querySelector('[data-row-menu-label]'), null, 'existing visible text must not be duplicated');
assert.equal(textButton.secondary.querySelector('svg'), null, 'table menu actions stay text-only');
context.window.innerWidth = 1280;
textButton.row.scrollWidth = 180;
context.fit(textButton.root);
assert.equal(textButton.secondary.querySelector('svg'), null, 'a generated menu icon must not leak into the exposed text action');

const focused = fixture();
context.window.innerWidth = 1280;
focused.secondary.focus();
context.fit(focused.root);
assert.equal(context.document.activeElement, focused.secondary, 'resizing a visible action preserves its focus');
context.window.innerWidth = 390;
context.fit(focused.root);
assert.equal(context.document.activeElement, focused.trigger, 'a focused action folded into a closed menu transfers focus to its visible trigger');
focused.primary.focus();
context.fit(focused.root);
assert.equal(context.document.activeElement, focused.primary, 'responsive placement must not steal unrelated focus');

function actionCell(actions) {
  const root = new Element('main');
  const cell = root.appendChild(new Element('td', { class: 'colactions' }));
  actions.forEach(action => cell.appendChild(action));
  return { root, cell };
}
function action(text, attributes = {}) { return new Element('button', attributes, text); }
context.window.innerWidth = 1280;
// Run the production normalizer for every count, including disabled actions.
for (let count = 0; count <= 4; count++) {
  const actions = Array.from({ length: count }, (_, index) => action('Action ' + index));
  if (count) actions[count - 1].disabled = true;
  const candidate = actionCell(actions);
  context.normalize(candidate.root);
  context.prepare(candidate.root);
  const row = candidate.root.querySelector('.ra-row');
  const inline = row ? row.children.filter(child => child.tagName === 'BUTTON') : [];
  const wrap = candidate.root.querySelector('.ra-more-wrap');
  assert.equal(inline.length, count > 3 ? 2 : count, count + ' ordinary actions use the right inline limit');
  assert.equal(Boolean(wrap && !wrap.hidden), count > 3, 'More is visible only above three ordinary actions when space fits');
  if (count) assert.equal(actions[count - 1].disabled, true, 'placement preserves disabled state');
}

const details = action('Details', { 'data-row-icon': 'eye' });
const remote = action('Remote', { 'data-row-icon': 'monitor' });
const logs = action('Different translated wording', { 'data-i18n': 'device-center-page:text.048' });
const download = action('Download', { 'data-row-icon': 'cloud-download' });
download.disabled = true;
const ordinary = actionCell([details, remote, logs, download]);
context.normalize(ordinary.root);
context.prepare(ordinary.root);
const generatedMenu = ordinary.root.querySelector('.ra-menu');
assert.ok(generatedMenu);
assert.equal(ordinary.root.querySelector('.ra-row').children.filter(child => child.tagName === 'BUTTON').length, 2);
assert.equal(logs.parentElement, generatedMenu, 'the third ordinary action folds because More consumes the third visible entry');
assert.equal(download.parentElement, generatedMenu, 'the fourth ordinary action is collapsed');
assert.equal(download.querySelector('svg'), null, 'table menu actions have no business icons');
assert.equal(context.items(generatedMenu).length, 1, 'only the enabled log action receives menu keyboard focus');
assert.equal(generatedMenu.hidden, true);
assert.equal(ordinary.root.querySelector('.ra-more-trigger').getAttribute('aria-haspopup'), 'menu');
context.normalize(ordinary.root);
context.prepare(ordinary.root);
assert.equal(ordinary.root.querySelectorAll('.ra-menu').length, 1, 'preparing again does not wrap an authored or generated menu');

const destructive = action('Remove', { class: 'btn btn-danger-link', 'data-row-icon': 'trash' });
const preferred = action('Preferred', { 'data-row-primary': '', 'data-row-icon': 'eye' });
const extra = action('Extra', { 'data-row-icon': 'file-text' });
const helper = action('Helper', { 'data-row-secondary': '', 'data-row-icon': 'edit' });
const fourth = action('Fourth');
const explicit = actionCell([destructive, helper, preferred, extra, fourth]);
context.normalize(explicit.root);
context.prepare(explicit.root);
const explicitRow = explicit.root.querySelector('.ra-row');
assert.equal(explicitRow.children[0], preferred, 'explicit primary placement wins over source order');
assert.equal(explicitRow.children.filter(child => child.tagName === 'BUTTON')[1], helper);
const explicitMenu = explicit.root.querySelector('.ra-menu');
assert.equal(explicitMenu.children[0], extra);
assert.equal(explicitMenu.children[1], fourth);
assert.equal(explicitMenu.children[2].getAttribute('role'), 'separator');
assert.equal(explicitMenu.children[3], destructive, 'dangerous actions remain last after a separator');
assert.equal(destructive.hasAttribute('data-demo-confirm'), true, 'one confirmation executor handles the dangerous action');

const task = actionCell([action('Details'), action('Pause'), action('Operation logs'), action('Terminate', { class: 'danger' })]);
context.normalize(task.root);
context.prepare(task.root);
const taskRow = task.root.querySelector('.ra-row');
assert.equal(taskRow.children.filter(child => child.tagName === 'BUTTON').length, 2, 'a dangerous menu item reserves the third entry for More');
assert.equal(taskRow.querySelector('.ra-menu').children[0].textContent, 'Operation logs', 'operation logs join the menu before the danger group');

const onlyDanger = actionCell([action('Delete', { class: 'danger' })]);
context.normalize(onlyDanger.root);
context.prepare(onlyDanger.root);
assert.equal(onlyDanger.root.querySelector('.ra-more-wrap').hidden, false, 'a sole dangerous action may use More');
assert.equal(onlyDanger.root.querySelector('.ra-menu').children.length, 1, 'danger-only menus have no leading separator');
const membership = actionCell([action('Remove member', { class: 'danger', 'data-row-danger-exception': 'group-membership-removal' })]);
context.normalize(membership.root);
assert.equal(membership.root.querySelector('.ra-more-wrap'), null, 'documented membership removal may remain inline');

const small = actionCell([action('Details'), action('Edit'), action('More')]);
context.normalize(small.root);
context.prepare(small.root);
assert.equal(small.root.querySelector('.ra-more-wrap').hidden, true, 'a More placeholder does not count as an action or create a visible empty menu');

// Ordinary actions authored inside old menus must be promoted when the current
// rule permits; the resulting three actions then fold by actual container width.
const authored = fixture({ icon: false, label: 'Edit', text: 'Edit' });
authored.secondary.disabled = true;
context.normalize(authored.root);
context.prepare(authored.root);
assert.equal(authored.existingItem.parentElement, authored.row, 'authored menu location does not force a third ordinary action into More');
assert.equal(authored.row.querySelector('.ra-more-wrap').hidden, true);
Object.defineProperty(authored.row, 'scrollWidth', { configurable: true, get() {
  const exposed = this.children.filter(child => child.tagName === 'BUTTON').length;
  return exposed * 70 + (this.querySelector('.ra-more-wrap').hidden ? 0 : 50);
} });
authored.row.clientWidth = 200;
context.fit(authored.root);
assert.equal(authored.row.children.filter(child => child.tagName === 'BUTTON').length, 2, 'three actions reduce to two plus More when needed');
authored.row.clientWidth = 140;
context.fit(authored.root);
assert.equal(authored.row.children.filter(child => child.tagName === 'BUTTON').length, 1, 'two actions reduce to the primary plus More when needed');
assert.equal(authored.secondary.disabled, true);
authored.row.clientWidth = 90;
context.fit(authored.root);
assert.equal(authored.primary.parentElement, authored.row, 'the primary is never hidden even below its minimum required width');
assert.equal(authored.row.hasAttribute('data-row-actions-overflow'), true, 'remaining overflow is exposed to the table width planner');
authored.row.clientWidth = 240;
context.fit(authored.root);
assert.equal(authored.row.children.filter(child => child.tagName === 'BUTTON').length, 3, 'all three actions restore when container space returns');
assert.equal(authored.row.querySelector('.ra-more-wrap').hidden, true);
assert.equal(authored.row.hasAttribute('data-row-actions-overflow'), false);
const narrowDanger = action('Delete', { class: 'danger', 'data-demo-confirm': '' });
const dangerMenu = authored.row.querySelector('.ra-menu');
dangerMenu.appendChild(narrowDanger);
authored.row.clientWidth = 140;
context.fit(authored.root);
assert.equal(dangerMenu.children[dangerMenu.children.length - 2].getAttribute('role'), 'separator', 'folding ordinary actions into a danger-only menu creates one separator');
context.fit(authored.root);
assert.equal(dangerMenu.querySelectorAll('.ra-mdiv').length, 1, 'repeated resize does not duplicate danger separators');
authored.row.clientWidth = 300;
context.fit(authored.root);
assert.equal(dangerMenu.querySelectorAll('.ra-mdiv').length, 0, 'restoring ordinary actions removes a leading separator');


// Confirmation must name the actual account/device, not the first table column
// (which can be an organization or selection checkbox).
const account = new Element('tr', { 'data-row-label': 'alice@example.test' });
const accountAction = account.appendChild(action('Reset password'));
assert.equal(context.getDemoActionLabel(accountAction), 'alice@example.test');
const card = new Element('div', { class: 'datacard' });
card.appendChild(new Element('div', { class: 'nm' }, 'Device 007'));
card.appendChild(new Element('div', { class: 'sn' }, 'DEV-007'));
const cardFoot = card.appendChild(new Element('div', { class: 'foot ra-row' }));
cardFoot.appendChild(action('Diagnose', { 'data-row-icon': 'heartbeat' }));
cardFoot.appendChild(action('Restart', { 'data-row-icon': 'refresh', 'data-demo-confirm': '' }));
cardFoot.appendChild(action('Ticket', { 'data-row-icon': 'file-text' }));
context.normalize(card);
context.prepare(card);
const cardTrigger = cardFoot.querySelector('.ra-more-trigger');
assert.equal(context.getDemoActionLabel(cardTrigger), 'Device 007 · DEV-007');
assert.ok(cardFoot.querySelector('.ra-menu [data-demo-confirm]') ||
  cardFoot.querySelector('.ra-menu').children.some(item => item.hasAttribute('data-demo-confirm')),
  'card actions use the same menu and confirmation policy as table actions');

// A Chinese 390px viewport left the unconfigured "所属" column at zero in the
// fixed-layout RowActions table. Run the actual fitter with that table class,
// authored geometry and an independently supplied measured action width.
function tableStyle(initial = {}) {
  return Object.assign({
    getPropertyValue(name) { return this[name === 'min-width' ? 'minWidth' : name] || ''; },
    getPropertyPriority() { return ''; },
    setProperty(name, value) { this[name === 'min-width' ? 'minWidth' : name] = value; }
  }, initial);
}
const sizingRoot = new Element('div', { class: 'demo-table-scroll' });
sizingRoot.clientWidth = 356;
const sizingTable = sizingRoot.appendChild(new Element('table', { class: 'ra-table' }));
sizingTable.style = tableStyle();
const baseline = [140, 120, 90, 80, 0, 102];
const sizingCells = baseline.map((width, index) => {
  const cell = new Element('th', { class: index === 5 ? 'colactions' : '' }, index === 4 ? '所属' : '');
  cell.colSpan = cell.rowSpan = 1;
  cell.style = tableStyle({ width: index < 4 ? width + 'px' : '' });
  cell.classList.toggle = () => {};
  cell.getClientRects = () => [{}];
  cell.getBoundingClientRect = () => ({
    width: sizingTable.firstChild ? parseFloat(sizingTable.firstChild.children[index].style.width) : baseline[index]
  });
  return cell;
});
sizingTable.tHead = { rows: [{ cells: sizingCells }] };
sizingTable.rows = sizingTable.tHead.rows;
sizingTable.getClientRects = () => [{}];
sizingTable.getBoundingClientRect = () => ({
  width: Math.max(baseline.reduce((sum, width) => sum + width, 0), parseFloat(sizingTable.style.minWidth) || 0)
});
sizingTable.querySelectorAll = selector => selector === ':scope > colgroup > col'
  ? sizingTable.children.flatMap(group => group.children) : [];
const sizingContext = {
  document: { createElement(tag) { const node = new Element(tag); node.style = tableStyle(); return node; } },
  measureActionCell: () => 102
};
vm.runInNewContext(['planDemoTableColumns', 'getUnpinnedTableColumns', 'fitDemoTableColumns'].map(productionFunction).join('\n') +
  '\nthis.fit = fitDemoTableColumns;', sizingContext);
sizingContext.fit(sizingRoot);
assert.equal(sizingCells[4].getBoundingClientRect().width, 120, 'the RowActions data column receives readable space');
assert.deepEqual(sizingCells.slice(0, 4).map(cell => cell.getBoundingClientRect().width), [140, 120, 90, 80], 'explicit widths remain unchanged');
assert.equal(sizingCells[5].getBoundingClientRect().width, 103, 'the action column follows measured content rather than a 240px cap or fixed width');
const fittedMinimum = sizingTable.style.minWidth;
sizingContext.fit(sizingRoot);
assert.equal(sizingTable.style.minWidth, fittedMinimum, 'repeated layout does not accumulate table width');
assert.equal(sizingTable.children.length, 1);

// Focus scrolls the trigger into view before the menu opens, while the browser
// delivers that scroll event later. Its unchanged anchor must keep the menu
// open. Subsequent horizontal/vertical scrolling still closes and restores focus.
const anchor = { left: 304.25, top: 484.5, right: 345.75, bottom: 516.5 };
const closeCalls = [];
const scrollMenu = {
  style: {},
  getBoundingClientRect: () => ({ width: 168, height: 120 }),
  contains: target => target === scrollMenu
};
const scrollContext = {
  openRowActionMenu: { menu: scrollMenu, trigger: { getBoundingClientRect: () => ({ ...anchor }) } },
  document: { documentElement: { clientWidth: 390, clientHeight: 1000 } },
  closeRowActionMenu(restoreFocus) { closeCalls.push(restoreFocus); }
};
vm.runInNewContext(['positionRowActionMenu', 'handleRowActionScroll'].map(productionFunction).join('\n') +
  '\nthis.position = positionRowActionMenu; this.scroll = handleRowActionScroll;', scrollContext);
scrollContext.position();
scrollContext.scroll({ target: {} });
scrollContext.scroll({ target: {} });
assert.deepEqual(closeCalls, [], 'delayed focus-scroll events with unchanged anchor do not close the newly opened menu');
anchor.left -= 24;
anchor.right -= 24;
scrollContext.scroll({ target: scrollMenu });
assert.deepEqual(closeCalls, [], 'scrolling inside the menu never closes it');
scrollContext.scroll({ target: {} });
assert.deepEqual(closeCalls, [true], 'real horizontal scroll closes the menu and returns focus');
scrollContext.position();
anchor.top -= 32;
anchor.bottom -= 32;
scrollContext.scroll({ target: {} });
assert.deepEqual(closeCalls, [true, true], 'real vertical scroll also closes the menu');

console.log('row-action count, responsive placement, text-only tables, compact cards and menu normalization tests passed');
