const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// These inputs reproduce column geometry observed in the file:// demos before
// the fix. Browser QA separately verifies CSS layout, clipping and scrolling.
const source = fs.readFileSync(path.join(__dirname, '../project/pages/_router.js'), 'utf8');
const functions = ['planDemoTableColumns', 'getUnpinnedTableColumns'].map(name => {
  const match = source.match(new RegExp('  function ' + name + '\\([^]*?\\n  \\}'));
  assert.ok(match, name + ' must remain available');
  return match[0];
});
const runtime = {};
vm.runInNewContext(functions.join('\n') + '\nthis.plan = planDemoTableColumns; this.unpin = getUnpinnedTableColumns;', runtime);

function plan(widths, minimums, actionWidth = 0) {
  return runtime.plan(widths.map((width, index) => ({
    width, minimum: minimums[index], content: index === widths.length - 1 ? actionWidth : 0
  })));
}

// The name/email/batch columns had zero width even though actions were visible.
for (const fixture of [
  { name: 'OTA name', widths: [0, 120, 120, 120, 80, 120, 140, 100, 140], missing: 0, total: 1060 },
  { name: 'Account email', widths: [120, 140, 120, 0, 140, 140, 90, 200], missing: 3, total: 1070 },
  { name: 'Push batch', widths: [0, 160, 120, 160, 100, 140], missing: 0, total: 800 },
  { name: 'Push semantics, no actions', widths: [80, 200, 140, 0], missing: 3, total: 540 },
  { name: 'Menu usage, no actions', widths: [120, 240, 180, 0], missing: 3, total: 660 }
]) {
  const minimums = fixture.widths.map((width, index) => index === fixture.missing ? 120 : width);
  const result = plan(fixture.widths, minimums);
  assert.equal(result.widths[fixture.missing], 120, fixture.name + ' must remain readable');
  assert.equal(result.widths.reduce((sum, width) => sum + width, 0), fixture.total);
  fixture.widths.forEach((width, index) => {
    if (index !== fixture.missing) assert.equal(result.widths[index], width, 'authored widths remain unchanged');
  });
}

const compact = plan([36, 0, 80, 140], [36, 120, 80, 140], 212);
assert.deepEqual(Array.from(compact.widths), [36, 120, 80, 212], 'checkbox, numeric and action widths have distinct rules');
assert.equal(compact.growth, 192, 'table growth must include both the missing data column and translated actions');
const wide = plan([36, 260, 80, 220], [36, 120, 80, 140], 212);
assert.deepEqual(Array.from(wide.widths), [36, 260, 80, 220], 'wide layouts must not lose their existing data space');
assert.equal(wide.growth, 0);

const frozenCells = ['freeze-l', 'freeze-l', '', 'freeze-r'].map(name => ({
  classList: { contains: candidate => candidate === name }
}));
const frozenWidths = [160, 160, 120, 88];
assert.deepEqual(Array.from(runtime.unpin(frozenCells, frozenWidths, 600)), []);
assert.deepEqual(Array.from(runtime.unpin(frozenCells, frozenWidths, 356)), [1], '390px demo retains the primary column and actions');
assert.deepEqual(Array.from(runtime.unpin(frozenCells, frozenWidths, 286)), [1, 3], 'very narrow demos expose actions through local scrolling');
assert.deepEqual(Array.from(runtime.unpin(frozenCells, frozenWidths, 180)), [1, 3, 0], 'pinned columns must not cover the entire scroll viewport');
assert.deepEqual(Array.from(runtime.unpin(frozenCells, frozenWidths, 600)), [], 'growing the viewport restores the original frozen columns');

// Exercise the production DOM integration too: a no-action table must receive
// the plan, and repeated resize must restore authored geometry before planning.
function style() {
  return {
    getPropertyValue(name) { return this[name === 'min-width' ? 'minWidth' : name] || ''; },
    getPropertyPriority() { return ''; },
    setProperty(name, value) { this[name === 'min-width' ? 'minWidth' : name] = value; }
  };
}
function classes(names = []) {
  const values = new Set(names);
  return {
    contains: name => values.has(name),
    toggle(name, enabled) { if (enabled) values.add(name); else values.delete(name); }
  };
}
runtime.document = {
  createElement() {
    return {
      style: style(), children: [], setAttribute() {},
      appendChild(node) { this.children.push(node); node.parentElement = this; },
      remove() { this.parentElement.groups.splice(this.parentElement.groups.indexOf(this), 1); }
    };
  }
};
const fitting = source.match(/  function fitDemoTableColumns\(root\) \{[\s\S]*?\n  \}/);
assert.ok(fitting);
vm.runInNewContext(fitting[0] + '\nthis.fit = fitDemoTableColumns;', runtime);

function tableFixture(baseline, authored, checkboxIndex = -1) {
  const table = {
    baseline: [...baseline], style: style(), groups: [],
    parentElement: { matches: () => true, clientWidth: 356 },
    querySelectorAll() { return this.groups.flatMap(group => group.children); },
    getClientRects: () => [{}],
    getBoundingClientRect() { return { width: Math.max(this.baseline.reduce((sum, width) => sum + width, 0), parseFloat(this.style.minWidth) || 0) }; },
    insertBefore(group) { this.groups.push(group); group.parentElement = this; }
  };
  const cells = baseline.map((width, index) => ({
    colSpan: 1, rowSpan: 1, style: Object.assign(style(), { width: authored[index] || '' }),
    classList: classes(index === checkboxIndex ? ['colselect'] : []),
    getAttribute: () => null,
    querySelector: () => index === checkboxIndex ? {} : null,
    matches: () => index === checkboxIndex,
    getBoundingClientRect() { return { width: table.groups.length ? parseFloat(table.groups[0].children[index].style.width) : table.baseline[index] }; }
  }));
  table.rows = [{ cells }];
  table.tHead = { rows: table.rows };
  const root = { querySelectorAll: () => [table] };
  return { root, table, cells };
}

const menu = tableFixture([120, 240, 180, 0], ['120px', '240px', '180px', '']);
runtime.fit(menu.root);
assert.equal(menu.cells[3].getBoundingClientRect().width, 120, 'tables without actions must receive the fallback');
assert.equal(menu.table.style.minWidth, '660px');
runtime.fit(menu.root);
assert.equal(menu.table.groups.length, 1, 'repeated fitting replaces, rather than accumulates, generated colgroups');
assert.equal(menu.table.style.minWidth, '660px', 'repeated fitting cannot accumulate the first width increment');
menu.table.baseline[3] = 260;
runtime.fit(menu.root);
assert.equal(menu.table.groups.length, 0, 'the authored wide layout is restored when no increment is needed');
assert.equal(menu.table.style.minWidth, '');
menu.table.baseline[3] = 0;
runtime.fit(menu.root);
assert.equal(menu.table.style.minWidth, '660px', 'returning to a narrow viewport reproduces the original result');

const selection = tableFixture([36, 0, 80], ['36px', '', '80px'], 0);
runtime.fit(selection.root);
assert.equal(selection.cells[0].getBoundingClientRect().width, 36, 'the integration preserves compact selection columns');
assert.equal(selection.cells[1].getBoundingClientRect().width, 120);
assert.equal(selection.cells[2].getBoundingClientRect().width, 80);

console.log('table column sizing and frozen-column tests passed');
