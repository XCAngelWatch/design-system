// Optional browser QA against the static reference only; uses an external Playwright install.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || '@playwright/test');
const output = process.env.AW_FILTER_QA_OUTPUT || '/tmp/aw-filter-compositions-qa';
const url = (process.env.AW_TABLE_QA_URL || pathToFileURL(path.resolve(__dirname, '../project/index.html')).href) + '#/table';
fs.mkdirSync(output, { recursive: true });
let checks = 0;
const failures = [], screenshots = [], accessibility = [];
function check(condition, message) { checks++; if (!condition) failures.push(message); }
const count = form => form.getAttribute('data-applied-count').then(Number);
async function open(page, config) {
  await page.addInitScript(({ locale, theme }) => {
    localStorage.setItem('aw-locale', locale); localStorage.setItem('aw-theme', theme);
  }, config);
  await page.goto(url);
  await page.waitForFunction(() => document.querySelectorAll('[data-aw-example-form][data-applied-count]').length === 3);
}
async function interactions(page) {
  const forms = Object.fromEntries(await Promise.all(['standard', 'context', 'compact'].map(async kind =>
    [kind, page.locator('[data-aw-filter-example="' + kind + '"] [data-aw-example-form]')])));
  for (const [kind, form] of Object.entries(forms)) {
    await form.locator('[data-aw-filter="search"]').fill('example');
    check(await count(form) === 0, kind + ': draft does not change applied count');
    await form.locator('[type="submit"]').click();
    check(await count(form) === 1, kind + ': Search applies the keyword once');
    await form.locator('[data-aw-filter-reset]').click();
    check(await count(form) === 0 && await form.locator('[data-aw-filter="search"]').inputValue() === '', kind + ': Reset restores defaults');
  }
  const standard = forms.standard, toggle = standard.locator('[data-aw-filter-toggle]');
  const advanced = standard.locator('[data-aw-filter-advanced]'), dates = standard.locator('[data-aw-filter="createdRange"]');
  await toggle.click();
  await standard.locator('[data-aw-filter="version"]').fill('1.2.1');
  await dates.nth(0).fill('2026-10-01');
  await toggle.click();
  check(await advanced.isHidden() && await standard.locator('[data-aw-filter="version"]').inputValue() === '1.2.1', 'collapse preserves advanced draft');
  await standard.locator('[type="submit"]').click();
  check(await advanced.isVisible() && await count(standard) === 0, 'hidden invalid range expands without applying');
  check(await dates.nth(0).getAttribute('aria-invalid') === 'true' && await standard.locator('[data-aw-filter-errors]').isVisible(), 'range error is announced');
  await dates.nth(1).fill('2026-10-22');
  await standard.locator('[data-aw-filter="version"]').fill('');
  await standard.locator('[type="submit"]').click();
  check(await count(standard) === 1, 'a complete date range counts as one field');
  check(await count(forms.context) === 0 && await count(forms.compact) === 0, 'the three form states are independent');
  await standard.locator('[data-aw-filter-reset]').click();
  check(await count(standard) === 0 && await advanced.isHidden() && await dates.nth(0).inputValue() === '' && await dates.nth(1).inputValue() === '', 'Reset clears dates and collapses advanced fields');
  const context = page.locator('[data-aw-filter-example="context"]');
  await context.locator('[data-aw-example-context="organization"]').selectOption('org-b');
  await context.locator('[data-aw-example-context="scope"]').selectOption('descendants');
  check(await count(forms.context) === 0, 'external context does not increment filter count');
  await forms.context.locator('[data-aw-filter="search"]').fill('scope sample');
  await forms.context.locator('[type="submit"]').click();
  await forms.context.locator('[data-aw-filter-reset]').click();
  check(await context.locator('[data-aw-example-context="organization"]').inputValue() === 'org-b' && await context.locator('[data-aw-example-context="scope"]').inputValue() === 'descendants', 'filter Reset preserves caller-owned context');
}
async function layout(page, label, coarse = false) {
  for (const selector of ['[data-aw-filter-example="standard"]', '[data-aw-table-demo]']) {
    const toggle = page.locator(selector + ' [data-aw-filter-toggle]');
    if (await toggle.getAttribute('aria-expanded') !== 'true') await toggle.click();
  }
  const metrics = await page.evaluate(() => {
    const visible = node => node.getClientRects().length && getComputedStyle(node).visibility !== 'hidden';
    const rect = node => { const r = node.getBoundingClientRect(); return { left: r.left, right: r.right, width: r.width, height: r.height }; };
    return {
      overflow: document.documentElement.scrollWidth > innerWidth + 1,
      forms: Array.from(document.querySelectorAll('.aw-table-filters')).map(form => {
        const primary = form.querySelector('.aw-table-filter-primary'), advanced = form.querySelector('[data-aw-filter-advanced]');
        const s = getComputedStyle(form), p = getComputedStyle(primary), a = getComputedStyle(advanced);
        const first = advanced.firstElementChild && rect(advanced.firstElementChild);
        const f = rect(form), region = rect(form.closest('.aw-table-region'));
        const controls = Array.from(form.querySelectorAll('input,select,button')).filter(visible).map(rect);
        return { kind: form.closest('[data-aw-filter-example]')?.dataset.awFilterExample || 'main',
          padding: [s.paddingTop, s.paddingRight, s.paddingBottom, s.paddingLeft],
          gaps: [p.rowGap, p.columnGap, a.rowGap, a.columnGap], tracks: [p.gridTemplateColumns, a.gridTemplateColumns],
          aligned: !first || Array.from(primary.children).some(node => { const r = rect(node); return Math.abs(r.left - first.left) < 1 && Math.abs(r.right - first.right) < 1; }),
          width: region.width, contentWidth: form.clientWidth - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight),
          controls, overflow: controls.some(r => r.left < f.left - 1 || r.right > f.right + 1) };
      }),
      context: Array.from(document.querySelectorAll('[data-aw-example-context]')).filter(visible).map(rect)
    };
  });
  check(!metrics.overflow, label + ': no document horizontal overflow');
  for (const m of metrics.forms) {
    check(m.padding.every(value => value === '16px'), label + '/' + m.kind + ': 16px card padding');
    check(m.gaps.every(value => value === '16px'), label + '/' + m.kind + ': 16px field gaps');
    const primaryTracks = m.tracks[0].split(' ').map(parseFloat);
    check(primaryTracks.length <= 4 && primaryTracks.every(value => Math.abs(value - primaryTracks[0]) < 0.5), label + '/' + m.kind + ': at most four equal tracks');
    if (m.contentWidth > 575) check(primaryTracks.every(value => value <= 320.5), label + '/' + m.kind + ': ordinary fields stop growing at 320px');
    if (m.kind === 'standard' || m.kind === 'main') {
      const tracks = m.tracks.map(value => value.split(' ').map(parseFloat));
      check(tracks[0].length === tracks[1].length && tracks[0].every((value, i) => Math.abs(value - tracks[1][i]) < 0.5), label + '/' + m.kind + ': basic and advanced tracks match');
      check(m.aligned, label + '/' + m.kind + ': cross-row field edges align');
    }
    check(!m.overflow, label + '/' + m.kind + ': controls stay inside their card');
    if (m.width <= 575) check(m.tracks[0].split(' ').length === 1, label + '/' + m.kind + ': narrow container uses one column');
    if (coarse || m.width <= 575) check(m.controls.every(r => r.height >= 43.5 && r.width >= 43.5), label + '/' + m.kind + ': touch targets at least 44px');
  }
  if (coarse || metrics.forms.find(m => m.kind === 'context').width <= 575) check(metrics.context.every(r => r.height >= 43.5), label + ': context controls at least 44px');
  return metrics;
}
async function longEnglish(page, width) {
  await page.evaluate(() => {
    document.querySelectorAll('[data-aw-filter-example] .aw-table-filter-primary label > span').forEach(node => { node.textContent = 'Resource package configuration identifier'; });
    document.querySelectorAll('[data-aw-filter-example] input').forEach(node => { node.placeholder = 'Enter a resource package name or configuration identifier'; });
    document.querySelectorAll('[data-aw-filter-example] [data-aw-filter-reset] span').forEach(node => { node.textContent = 'Restore default filters'; });
    document.querySelectorAll('[data-aw-filter-example] [type="submit"] span').forEach(node => { node.textContent = 'Search records'; });
  });
  await layout(page, 'long-en/' + width);
}
async function main() {
  const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL, headless: true });
  try {
    let axePath = process.env.AXE_SCRIPT;
    if (!axePath) { try { axePath = require.resolve('axe-core/axe.min.js', { paths: [process.env.PLAYWRIGHT_MODULE || __dirname] }); } catch (_) {} }
    for (const locale of ['zh-CN', 'en-US']) for (const theme of ['light', 'dark']) for (const width of [390, 768, 1440, 1920]) {
      const context = await browser.newContext({ viewport: { width, height: 1000 }, locale });
      const page = await context.newPage(), label = [locale, theme, width].join('/');
      page.on('pageerror', error => failures.push(label + ': page error: ' + error.message));
      await open(page, { locale, theme });
      if (width === 1440 && theme === 'light') await interactions(page);
      await layout(page, label);
      if (theme === 'light' && [390, 1440].includes(width)) {
        const screenshot = path.join(output, 'filters-' + locale + '-' + width + '.png');
        const shell = page.locator('#app-toolbar,.locale-toggle-fixed,.theme-toggle-fixed');
        const styles = await shell.evaluateAll(nodes => nodes.map(node => { const old = node.getAttribute('style'); node.style.setProperty('display', 'none', 'important'); return old; }));
        await page.locator('#aw-filter-compositions').screenshot({ path: screenshot }); screenshots.push(screenshot);
        await shell.evaluateAll((nodes, styles) => nodes.forEach((node, i) => { if (styles[i] == null) node.removeAttribute('style'); else node.setAttribute('style', styles[i]); }), styles);
      }
      if (axePath && width === 1440) {
        await page.addScriptTag({ path: axePath });
        const violations = await page.evaluate(async () => (await window.axe.run(document.querySelector('#aw-filter-compositions'), { preload: false, runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } })).violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) })));
        accessibility.push({ label, violations });
        check(violations.length === 0, label + ': no scoped axe violations');
      }
      if (locale === 'en-US' && theme === 'light') await longEnglish(page, width);
      await context.close();
    }
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, hasTouch: true, locale: 'en-US' });
    const page = await context.newPage(); await open(page, { locale: 'en-US', theme: 'light' });
    check(await page.evaluate(() => matchMedia('(pointer: coarse)').matches), 'wide touch context exposes coarse pointer');
    await layout(page, 'wide-coarse/1440', true); await context.close();
    fs.writeFileSync(path.join(output, 'filter-compositions-report.json'), JSON.stringify({ checks, failures, screenshots, accessibility, axeAvailable: !!axePath }, null, 2));
    console.log(JSON.stringify({ checks, failures, screenshots, output }, null, 2));
    assert.equal(failures.length, 0, 'filter composition browser checks failed; see report');
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
