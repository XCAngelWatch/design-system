const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Exercise the production responsive-placement function with a minimal DOM.
// Geometry is supplied by each case; browser QA covers actual layout and focus.
const source = fs.readFileSync(path.join(__dirname, '../project/pages/_router.js'), 'utf8');
const placement = source.match(/  function fitRowActionMenus\(root\) \{[\s\S]*?\n  \}/);
assert.ok(placement, 'responsive row-action placement must remain available');

class Element {
  constructor(tag, attributes = {}, text = '') {
    this.tagName = tag.toUpperCase();
    this.attributes = { ...attributes };
    this.children = [];
    this.parentElement = null;
    this.text = text;
    const classes = new Set((attributes.class || '').split(' ').filter(Boolean));
    this.classList = {
      add(name) { classes.add(name); },
      remove(name) { classes.delete(name); },
      contains(name) { return classes.has(name); }
    };
  }
  get textContent() { return this.text + this.children.map(child => child.textContent).join(''); }
  set textContent(value) { this.text = value; this.children = []; }
  get firstChild() { return this.children[0] || null; }
  getAttribute(name) { return this.attributes[name] ?? null; }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  removeAttribute(name) { delete this.attributes[name]; }
  matches(selector) {
    if (selector[0] === '.') return this.classList.contains(selector.slice(1));
    if (selector[0] === '[') return this.getAttribute(selector.slice(1, -1)) !== null;
    return this.tagName === selector.toUpperCase();
  }
  querySelectorAll(selector) {
    return this.children.flatMap(child => [
      ...(child.matches(selector) ? [child] : []), ...child.querySelectorAll(selector)
    ]);
  }
  querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
  remove() {
    if (this.parentElement) {
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
    createElement: tag => new Element(tag),
    createComment: () => new Element('#comment')
  }
};
vm.runInNewContext(placement[0] + '\nthis.fit = fitRowActionMenus;', context);

function fixture({ label = '编辑', text = '', icon = true } = {}) {
  const root = new Element('main');
  const row = root.appendChild(new Element('div', { class: 'ra-row' }));
  row.clientWidth = 240;
  row.scrollWidth = 180;
  const primary = row.appendChild(new Element('button', {}, '详情'));
  const secondary = row.appendChild(new Element('button', {
    class: icon ? 'ra-btn' : 'btn btn-link',
    'data-row-secondary': '', 'aria-label': label, title: label
  }, text));
  const svg = icon ? secondary.appendChild(new Element('svg')) : null;
  const wrap = row.appendChild(new Element('span', { class: 'ra-more-wrap' }));
  const menu = wrap.appendChild(new Element('div', { class: 'ra-menu' }));
  const existingItem = menu.appendChild(new Element('button', { role: 'menuitem' }, '查看日志'));
  return { root, row, primary, secondary, svg, wrap, menu, existingItem };
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
context.fit(textButton.root);
assert.equal(textButton.secondary.textContent, 'Edit');
assert.equal(textButton.secondary.querySelector('[data-row-menu-label]'), null, 'existing visible text must not be duplicated');

console.log('row-action responsive placement tests passed');
