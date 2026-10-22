// Local static reference QA. No backend calls or consumer implementation claims.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || '@playwright/test');
const output = process.env.AW_TABLE_QA_OUTPUT || '/tmp/awtable-qa';
fs.mkdirSync(output, { recursive: true });
let checks = 0;
const check = (condition, message) => { assert.ok(condition, message); checks++; };
const settled = page => page.waitForFunction(() => document.querySelector('[data-aw-body]')?.getAttribute('aria-busy') === 'false');
async function openDemoSettings(demo) {
  const settings = demo.locator('details[data-aw-demo-settings]');
  if (await settings.count() && !await settings.evaluate(element => element.open)) await settings.locator(':scope > summary').click();
}

async function verifyReadPendingControls(demo, label) {
  const result = await demo.evaluate(host => {
    const selectors = ['form[data-aw-filters] [type="submit"]', '[data-aw-filter-reset]',
      '[data-aw-command="previous"]', '[data-aw-command="next"]', '[data-aw-page-size]',
      '[data-aw-command="sort"]'];
    const missing = selectors.filter(selector => !host.querySelector(selector));
    const enabled = selectors.filter(selector => host.querySelector(selector) && !host.querySelector(selector).disabled);
    const before = { query: host.dataset.awQuery, queries: host.dataset.awQueryCount, requests: host.dataset.awRequestCount };
    host.querySelector('form[data-aw-filters]').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    for (const selector of ['[data-aw-filter-reset]', '[data-aw-command="previous"]', '[data-aw-command="next"]', '[data-aw-command="sort"]']) {
      host.querySelector(selector).dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    }
    const pageSize = host.querySelector('[data-aw-page-size]');
    const previousSize = pageSize.value;
    pageSize.value = previousSize === '20' ? '50' : '20';
    pageSize.dispatchEvent(new Event('change', { bubbles: true }));
    return {
      missing, enabled,
      visibleSecondaryActionsDisabled: Array.from(host.querySelectorAll('[data-aw-command="retry"], [data-aw-command="reset"]')).every(button => button.disabled),
      unchanged: before.query === host.dataset.awQuery && before.queries === host.dataset.awQueryCount && before.requests === host.dataset.awRequestCount,
      pageSizeRestored: pageSize.value === previousSize,
    };
  });
  check(result.missing.length === 0 && result.enabled.length === 0, `${label}: all foreground query controls are disabled (${result.enabled.join(', ')})`);
  check(result.visibleSecondaryActionsDisabled, `${label}: any visible retry/reset fallback is disabled`);
  check(result.unchanged, `${label}: dispatched submit/reset/page/size/sort events cannot mutate or duplicate a pending read`);
  check(result.pageSizeRestored, `${label}: blocked page-size events restore the displayed applied size`);
  check(await demo.locator('[data-aw-refreshing]').evaluate(node => node.classList.contains('visually-hidden')), `${label}: refresh announcement never inserts a visible text row`);
}

async function verifyFilters(page, demo, q, r) {
  const form = demo.locator('form[data-aw-filters]');
  const toggle = form.locator('[data-aw-filter-toggle]');
  const advanced = form.locator('[data-aw-filter-advanced]');
  const submit = form.locator('[type="submit"]');
  const reset = form.locator('[data-aw-filter-reset]');
  const field = id => form.locator('[data-aw-filter="' + id + '"]');
  const appliedCount = () => form.getAttribute('data-applied-count').then(Number);
  const rowKeys = () => demo.locator('tbody [data-aw-select]').evaluateAll(inputs => inputs.map(input => input.getAttribute('data-aw-select')));
  check(await form.count() === 1, 'one semantic filter form');
  check(await form.locator('.aw-table-filters-heading').count() === 0, 'filters have no visible title row');
  check(await form.getAttribute('aria-labelledby') === 'aw-table-filters-title' && await form.locator('#aw-table-filters-title').evaluate(node => node.classList.contains('visually-hidden')), 'filters retain a localized accessible name');
  check(await form.locator('.aw-table-filter-footer').evaluate(footer => {
    const group = footer.querySelector('.aw-table-filter-buttons');
    return footer.firstElementChild.matches('[data-aw-filter-count]') && group.firstElementChild.matches('[data-aw-filter-toggle]') && group.children[1].matches('.aw-table-filter-submit-actions') && group.children[1].children[0].matches('[data-aw-filter-reset]') && group.children[1].children[1].matches('[type="submit"]');
  }), 'footer keeps applied count left and More, Reset, Search grouped right');
  check(await form.locator('[data-aw-filter-count]').isVisible(), 'zero applied count remains visible before Reset');
  check(await submit.count() === 1 && await submit.getAttribute('data-aw-command') === 'search', 'one form submit path owns Search and Enter');
  check(await reset.getAttribute('type') === 'button', 'Reset cannot implicitly submit the form');
  check(await advanced.isHidden(), 'advanced filters start collapsed');
  check(await toggle.getAttribute('aria-expanded') === 'false', 'filter toggle announces collapsed state');
  check(await toggle.getAttribute('aria-controls') === await advanced.getAttribute('id'), 'filter toggle controls the persistent advanced region');
  check(await appliedCount() === 0, 'initial active count is zero');
  await advanced.evaluate(element => { element.__qaStableAdvanced = true; });
  let before = await q();
  let requestsBefore = await r();
  const composingPrevented = await field('search').evaluate(input => {
    const event = new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true, cancelable: true });
    input.dispatchEvent(event);
    return event.defaultPrevented;
  });
  check(composingPrevented, 'IME composition Enter prevents implicit form submission');
  check(await q() === before && await r() === requestsBefore, 'IME composition Enter neither changes query nor requests data');
  await toggle.focus(); await toggle.press('Enter');
  check(await q() === before, 'expanding advanced filters does not submit a query');
  check(await advanced.isVisible() && await toggle.getAttribute('aria-expanded') === 'true', 'keyboard expands the advanced region');
  await field('version').fill('1.2.2');
  await field('createdRange').nth(0).fill('2026-10-01');
  check(await appliedCount() === 0 && await q() === before, 'draft filters do not alter the applied count or query');
  await toggle.click();
  check(await advanced.isHidden(), 'advanced region collapses');
  check(await advanced.evaluate(element => element.__qaStableAdvanced === true), 'collapse preserves the advanced DOM rather than remounting fields');
  check(await field('version').inputValue() === '1.2.2' && await field('createdRange').nth(0).inputValue() === '2026-10-01', 'collapse preserves advanced draft values');
  check(await q() === before, 'collapsing advanced filters does not query');
  await submit.click();
  check(await q() === before && await r() === requestsBefore, 'incomplete hidden date range neither commits nor requests');
  check(await advanced.isVisible(), 'invalid hidden advanced field expands for correction');
  check(await field('createdRange').nth(0).getAttribute('aria-invalid') === 'true', 'invalid date pair is announced');
  check(await field('createdRange').nth(0).evaluate(element => element === document.activeElement), 'invalid date range receives focus');
  check(await form.locator('[data-aw-filter-errors]').isVisible(), 'date validation shows a persistent explanation');
  check(await appliedCount() === 0, 'invalid dates never change the applied count');
  await field('createdRange').nth(1).fill('2026-09-30');
  await submit.click();
  check(await q() === before && await r() === requestsBefore, 'reversed date range neither commits nor requests');
  await field('createdRange').nth(1).fill('2026-10-21');
  await field('model').selectOption('K1352');
  await field('status').selectOption('published');
  await toggle.click();
  await submit.focus(); await submit.press('Enter');
  check(await submit.isDisabled() && await reset.isDisabled(), 'Search and Reset are disabled while a search request is pending');
  check(await r() === requestsBefore + 1, 'one valid keyboard search starts exactly one request');
  await verifyReadPendingControls(demo, 'Search pending');
  await form.evaluate(element => {
    element.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    element.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  });
  check(await r() === requestsBefore + 1, 'repeated submit events cannot duplicate the pending request');
  await page.waitForFunction(() => !document.querySelector('form[data-aw-filters] [type="submit"]').disabled);
  check(await submit.evaluate(element => element === document.activeElement), 'keyboard submission restores focus to Search after its pending state');
  check(await q() === before + 1, 'one search commits all primary and collapsed advanced fields together');
  check(await appliedCount() === 4, 'model, status, version and date pair count as four filters');
  check(await advanced.isHidden(), 'successful submission respects the collapsed view');
  check((await toggle.textContent()).includes('(2)'), 'toggle reports two applied advanced fields');
  check(await advanced.evaluate(element => element.__qaStableAdvanced === true), 'search keeps the advanced DOM identity');
  before = await q(); requestsBefore = await r();
  await submit.click();
  check(await q() === before, 'same-condition Search leaves the query unchanged');
  check(await r() === requestsBefore + 1, 'same-condition Search requests fresh data after the previous request completes');
  await page.waitForFunction(() => !document.querySelector('form[data-aw-filters] [type="submit"]').disabled);
  check(await reset.isEnabled(), 'Reset is available after the request completes');
  const appliedRows = await rowKeys();
  check(appliedRows.length > 0, 'matching fixture survives the combined filters');
  await field('search').fill('draft-that-matches-no-record');
  check(await q() === before && await appliedCount() === 4, 'new draft text leaves existing applied conditions intact until Search');
  requestsBefore = await r();
  await submit.click();
  await page.waitForFunction(() => !document.querySelector('form[data-aw-filters] [type="submit"]').disabled);
  check(await q() === before + 1 && await r() === requestsBefore + 1, 'Search applies changed draft conditions with one query change and one request');
  check(await appliedCount() === 5, 'Search includes the new text condition in the applied count');
  check((await rowKeys()).length === 0, 'Search displays the rows matching the submitted draft');
  await demo.locator('[data-aw-page-size]').selectOption('50'); await settled(page);
  await demo.locator('[data-aw-command="sort"]').click(); await settled(page);
  before = await q();
  await reset.click(); await settled(page);
  check(await q() === before + 1, 'Reset restores the full query with one commit');
  check(await demo.locator('[data-aw-page-size]').inputValue() === '20', 'Reset restores the default page size');
  check(await demo.locator('[data-aw-command="previous"]').isDisabled(), 'Reset returns to page one');
  check(await demo.locator('th[aria-sort]').getAttribute('aria-sort') === 'none', 'Reset clears sorting');
  check(await appliedCount() === 0 && await advanced.isHidden(), 'Reset clears the applied count and collapses advanced fields');
  for (const id of ['search', 'model', 'status', 'version']) check(await field(id).inputValue() === '', `Reset clears ${id}`);
  check(await field('createdRange').evaluateAll(inputs => inputs.every(input => input.value === '')), 'Reset clears both date controls');
  before = await q(); requestsBefore = await r();
  await reset.click(); await settled(page);
  check(await q() === before && await r() === requestsBefore, 'Reset at defaults is a query and request no-op');
}

async function verifyFilterContainer(page, demo, q) {
  const form = demo.locator('form[data-aw-filters]');
  const before = await q();
  const toggle = form.locator('[data-aw-filter-toggle]');
  if (await toggle.getAttribute('aria-expanded') !== 'true') await toggle.click();
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  check(await demo.locator('[data-aw-region]').evaluate(region => region.getBoundingClientRect().width <= 481), 'narrow setting constrains the whole table region to 480px');
  check(await form.evaluate(element => element.scrollWidth <= element.clientWidth + 1), 'expanded filters stay inside their container');
  const overflows = await form.evaluate(element => {
    const bounds = element.getBoundingClientRect();
    return Array.from(element.querySelectorAll('input,select,button')).filter(control => {
      if (!control.getClientRects().length || control.closest('[hidden]')) return false;
      const rect = control.getBoundingClientRect();
      return rect.left < bounds.left - 1 || rect.right > bounds.right + 1;
    }).map(control => control.outerHTML);
  });
  check(overflows.length === 0, 'all filter controls fit a narrow container: ' + JSON.stringify(overflows));
  check(await q() === before, 'container changes and filter expansion do not query');
  await toggle.click();
}

async function verifyOverflowText(page, demo, q, r) {
  const beforeQuery = await q(), beforeRequest = await r();
  check(await demo.locator('[data-aw-value]').evaluateAll(values => values.every(value =>
    value.scrollWidth > value.clientWidth + 1 || (!value.hasAttribute('tabindex') && !value.hasAttribute('title')))),
  'names that fit do not add unnecessary Tab stops or tooltips');
  // Force actual text overflow without changing the underlying fixture records.
  // Font notifications trigger the same measurement used after locale/font loads.
  const style = await page.addStyleTag({ content: '.aw-table-demo [data-aw-value] { max-width: 64px; }' });
  try {
    await page.evaluate(() => document.fonts.dispatchEvent(new Event('loadingdone')));
    const value = demo.locator('[data-aw-value]').first();
    const fullText = await value.textContent();
    check(await value.getAttribute('data-aw-truncated') === 'true' && await value.getAttribute('tabindex') === '0', 'actual text overflow receives a keyboard-accessible full-value entry');
    await value.focus();
    check(await value.getAttribute('data-aw-expanded') === 'true', 'focusing a truncated value reveals its full text');
    check(await value.evaluate(element => element.scrollWidth <= element.clientWidth + 1) && await value.textContent() === fullText, 'expanded text wraps visibly without changing or clipping the full value');
    await value.press('Escape');
    check(await value.getAttribute('data-aw-expanded') === null && await value.evaluate(element => element === document.activeElement), 'Escape collapses full text while retaining its focus');
    for (const key of ['Enter', 'Space']) {
      await value.press(key);
      check(await value.getAttribute('data-aw-expanded') === 'true', `${key} reveals a focused truncated value`);
      await value.press('Escape');
    }
    await value.click();
    check(await value.getAttribute('data-aw-expanded') === 'true', 'click reveals truncated text without a hover-only requirement');
    await demo.locator('[data-aw-search]').focus();
    check(await value.getAttribute('data-aw-expanded') === null, 'moving focus away collapses the temporary full text');
  } finally {
    await style.evaluate(element => element.remove());
    await page.evaluate(() => document.fonts.dispatchEvent(new Event('loadingdone')));
  }
  check(await demo.locator('[data-aw-value]').evaluateAll(values => values.every(value =>
    value.scrollWidth > value.clientWidth + 1 || (!value.hasAttribute('tabindex') && !value.hasAttribute('title')))),
  'remeasurement removes unnecessary full-value controls after the width constraint is removed');
  check(await q() === beforeQuery && await r() === beforeRequest, 'full-value disclosure and remeasurement never query data');
}

async function verifyDeveloperGuides(page, { width, locale, theme, findings, shots }) {
  const guides = page.locator('details.aw-table-guide');
  const guideCount = await guides.count();
  check(guideCount >= 5, 'development, sources, interactions, implementation and reference guides are available');
  check(await guides.evaluateAll(elements => elements.every(element => !element.open)), 'developer guides start collapsed');
  check(await page.locator('.aw-table-reference .aw-table-guide-body :is(button,input,select,a[href],[tabindex])').count() > 0, 'collapsed reference contains controls to exercise the keyboard exclusion');

  // Walk the browser's real sequential focus order, not a CSS visibility guess:
  // none of the static reference controls may become a hidden Tab stop.
  for (let index = 0; index < guideCount; index++) {
    await guides.nth(index).locator(':scope > summary').focus();
    await page.keyboard.press('Tab');
    check(await page.evaluate(() => !document.activeElement.closest('.aw-table-guide-body')), `collapsed guide ${index + 1} excludes its body from Tab navigation`);
  }

  for (let index = 0; index < guideCount; index++) {
    const guide = guides.nth(index);
    const summary = guide.locator(':scope > summary');
    const body = guide.locator(':scope > .aw-table-guide-body');
    await summary.focus();
    await summary.press('Enter');
    check(await guide.evaluate(element => element.open) && await body.isVisible(), `Enter expands developer guide ${index + 1}`);
    check(await summary.evaluate(element => element === document.activeElement), `expanding guide ${index + 1} keeps focus on its summary`);
    check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `expanded guide ${index + 1} does not overflow the page at ${width}/${locale}/${theme}`);

    const scrollRegions = guide.locator('.aw-table-guide-scroll');
    for (let regionIndex = 0; regionIndex < await scrollRegions.count(); regionIndex++) {
      const region = scrollRegions.nth(regionIndex);
      const geometry = await region.evaluate(element => {
        const rect = element.getBoundingClientRect();
        const label = document.getElementById(element.getAttribute('aria-labelledby'));
        return {
          clientWidth: element.clientWidth,
          scrollWidth: element.scrollWidth,
          viewportWidth: innerWidth,
          overflowing: element.scrollWidth > element.clientWidth + 1,
          contained: rect.left >= -1 && rect.right <= innerWidth + 1,
          overflowX: getComputedStyle(element).overflowX,
          named: Boolean(label?.textContent.trim()),
          headers: element.querySelectorAll('th[scope="col"]').length,
          rowHeaders: element.querySelectorAll('th[scope="row"]').length,
        };
      });
      check(geometry.contained && ['auto', 'scroll'].includes(geometry.overflowX), 'guide comparison table scrolls within its named local region');
      check(geometry.named && geometry.headers > 1 && geometry.rowHeaders > 0, 'guide comparison table has a localized region name and row/column headers');
      if (width <= 768) check(geometry.overflowing, `guide ${index + 1} uses local horizontal overflow at ${width}px: ${JSON.stringify(geometry)}`);
      if (geometry.overflowing) {
        await region.evaluate(element => { element.scrollTo({ left: 0, behavior: 'instant' }); });
        await region.focus();
        await page.keyboard.press('ArrowRight');
        await page.waitForFunction(({ guideIndex, scrollIndex }) => document.querySelectorAll('details.aw-table-guide')[guideIndex].querySelectorAll('.aw-table-guide-scroll')[scrollIndex].scrollLeft > 0,
          { guideIndex: index, scrollIndex: regionIndex });
        check(await region.evaluate(element => element.scrollLeft > 0 && window.scrollX === 0), 'keyboard horizontal scrolling moves the guide region rather than the page');
        await region.evaluate(element => { element.scrollTo({ left: 0, behavior: 'instant' }); });
      }
    }

    if (index < 2 && process.env.AXE_SCRIPT) {
      const result = await guide.evaluate(async element => window.axe.run(element, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } }));
      findings.push(...result.violations.map(violation => ({ width, locale, theme, guide: index + 1, id: violation.id, nodes: violation.nodes.map(node => ({ target: node.target, failure: node.failureSummary })) })));
    }
    const guideName = await guide.getAttribute('data-aw-guide');
    if (guideName === 'sources' || (['development', 'interactions'].includes(guideName) && width === 1440 && locale === 'zh-CN' && theme === 'light')) {
      const file = path.join(output, `awtable-developer-guide-${guideName}-${width}-${locale}-${theme}.png`);
      await guide.screenshot({ path: file });
      shots.push(file);
    }
    if (guideName === 'reference') {
      await summary.focus();
      await page.keyboard.press('Tab');
      check(await page.evaluate(() => Boolean(document.activeElement.closest('.aw-table-reference .aw-table-guide-body'))), 'reference controls become keyboard reachable only after disclosure expands');
    }
    await summary.focus();
    await summary.press('Space');
    check(!await guide.evaluate(element => element.open) && await body.isHidden(), `Space collapses developer guide ${index + 1}`);
    await summary.press('Space');
    check(await guide.evaluate(element => element.open), `Space expands developer guide ${index + 1}`);
    await summary.press('Enter');
    check(!await guide.evaluate(element => element.open) && await body.isHidden(), `Enter collapses developer guide ${index + 1}`);
  }
  check(await guides.evaluateAll(elements => elements.every(element => !element.open)), 'guide verification restores the initial collapsed document');
}

(async () => {
  const browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL });
  const findings = [], shots = [];
  try {
    const widths = (process.env.AW_TABLE_QA_WIDTHS || '390,768,1440').split(',').map(Number);
    const locales = (process.env.AW_TABLE_QA_LOCALES || 'zh-CN,en-US').split(',');
    const themes = (process.env.AW_TABLE_QA_THEMES || 'light,dark').split(',');
    for (const width of widths) for (const locale of locales) for (const theme of themes) {
      const context = await browser.newContext({ viewport: { width, height: 1100 }, reducedMotion: 'reduce' });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
      const url = (process.env.AW_TABLE_QA_URL || pathToFileURL(path.resolve(__dirname, '../project/index.html')).href) + '#/table';
      await page.goto(url);
      await page.evaluate(({ locale, theme }) => { localStorage.setItem('aw-locale', locale); localStorage.setItem('aw-theme', theme); }, { locale, theme });
      await page.reload();
      const demo = page.locator('[data-aw-table-demo]');
      await page.waitForFunction(() => document.querySelector('[data-aw-table-demo] .aw-table-preview'));
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      const q = () => demo.getAttribute('data-aw-query-count').then(Number);
      const r = () => demo.getAttribute('data-aw-request-count').then(Number);
      const search = demo.locator('form[data-aw-filters] [type="submit"]');
      const idle = () => page.waitForFunction(() => !document.querySelector('form[data-aw-filters] [type="submit"]').disabled);
      const first = () => demo.locator('tbody tr').first();
      await openDemoSettings(demo);
      for (let n = 0; n <= 5; n++) {
        await demo.locator('[data-aw-count]').selectOption(String(n));
        const inline = await first().locator('.aw-table-actions button:not([data-aw-command="more"])').count();
        const more = await first().locator('[data-aw-command="more"]').count();
        if (width === 1440) { check(inline === (n > 3 ? 2 : n), `wide ${n} inline`); check(more === Number(n > 3), `wide ${n} More threshold`); }
        else check(inline <= Math.min(n, 3), `narrow ${n} inline limit`);
        check(inline + more <= 3, `${n} actions keep at most three visible entries including More`);
        const clipped = await demo.locator('.aw-table-actions-cell').evaluateAll(cells => cells.filter(cell => {
          const children = [...cell.querySelectorAll('button')];
          const rect = cell.getBoundingClientRect();
          return children.some(b => b.getBoundingClientRect().right > rect.right + 1 || b.scrollWidth > b.clientWidth + 1);
        }).length);
        check(clipped === 0, `action geometry ${n}, ${width}, ${locale}`);
      }
      await demo.locator('[data-aw-count]').selectOption('3');
      await demo.locator('[data-aw-danger]').check();
      const dangerInline = await first().locator('.aw-table-actions button:not([data-aw-command="more"])').count();
      check(dangerInline <= 2 && await first().locator('[data-aw-command="more"]').count() === 1, 'three ordinary plus danger use at most two ordinary actions and More');
      if (width === 1440) check(dangerInline === 2, 'wide danger menu folds the third ordinary action without over-folding');
      await first().locator('[data-aw-command="more"]').click();
      check(await page.locator('.aw-table-menu [data-aw-command="download"]').count() === 1, 'the third ordinary action moves into More before danger');
      await page.keyboard.press('Escape');
      await demo.locator('[data-aw-danger]').uncheck();
      check(await demo.evaluate(host => Math.abs(Number(host.dataset.awActionWidth) - host.querySelector('td.aw-table-actions-cell').getBoundingClientRect().width) < 1), 'action column does not absorb spare width');
      check(await demo.locator('.aw-table-actions svg').count() === 0, 'actions are text-only');
      check(await demo.locator('[data-aw-command="refresh"]').count() === 0, 'table has no independent Refresh entry');
      check(await demo.locator('[data-aw-command="columns"]').count() === 1 && await demo.locator('.aw-table-results-actions [data-aw-command="columns"]').count() === 1, 'column settings has one entry in the right-side results toolbar');
      check(await demo.locator('thead [data-aw-command="columns"]').count() === 0, 'column settings is not duplicated in the table header');
      check(await demo.locator('thead th').count() === 6, 'all five fixed data and selection columns plus actions are visible');
      check(await demo.getAttribute('data-aw-request-count') !== null, 'request count is exposed separately from query changes');
      await verifyFilters(page, demo, q, r);
      await verifyOverflowText(page, demo, q, r);
      await demo.locator('[data-aw-select]').first().check();
      let before = await q();
      let requestsBefore = await r();
      await demo.locator('[data-aw-filter-reset]').click(); await settled(page);
      check(await q() === before && await r() === requestsBefore, 'Reset at default query does not request just to clear selection');
      check(await demo.locator('[data-aw-batch]').isHidden() && !await demo.locator('[data-aw-select]').first().isChecked(), 'explicit Reset clears selection even when the query is already at defaults');
      await demo.locator('[data-aw-command="next"]').click(); await settled(page);
      check(await q() === before + 1, 'one next-page query commit');
      const secondPageRows = await demo.locator('[data-aw-select]').evaluateAll(inputs => inputs.map(input => input.dataset.awSelect));
      before = await q(); requestsBefore = await r();
      await search.click(); await idle();
      check(await q() === before && await r() === requestsBefore + 1, 'same-condition Search refreshes the current page without a query change');
      check(await demo.locator('[data-aw-command="previous"]').isEnabled(), 'same-condition Search keeps page two');
      check(JSON.stringify(await demo.locator('[data-aw-select]').evaluateAll(inputs => inputs.map(input => input.dataset.awSelect))) === JSON.stringify(secondPageRows), 'same-condition Search keeps current-page rows');
      before = await q(); requestsBefore = await r();
      await demo.locator('[data-aw-search]').fill('01');
      check(await q() === before && await r() === requestsBefore, 'draft input neither commits nor requests');
      await demo.locator('[data-aw-search]').press('Enter'); await idle();
      check(await q() === before + 1 && await r() === requestsBefore + 1, 'Enter applies changed filters with one query commit and one request');
      check(await demo.locator('[data-aw-command="previous"]').isDisabled(), 'changed Search filters return to page one');
      check(await demo.locator('tbody tr').count() === 1, 'applied filter changes data');
      await demo.locator('form[data-aw-filters] [data-aw-filter-reset]').click(); await settled(page);
      await demo.locator('[data-aw-command="next"]').click(); await settled(page);
      await demo.locator('[data-aw-page-size]').selectOption('50'); await settled(page);
      check(await demo.locator('[data-aw-command="previous"]').isDisabled(), 'page size resets to first page');
      await demo.locator('form[data-aw-filters] [data-aw-filter-reset]').click(); await settled(page);
      const selection = demo.locator('[data-aw-select]').first();
      await selection.focus(); await selection.press('Space');
      check(await demo.locator('[data-aw-select]').first().isChecked(), 'keyboard selects row');
      check(await page.evaluate(() => document.activeElement.hasAttribute('data-aw-select')), 'selection keeps focus');
      await demo.locator('[data-aw-command="next"]').click(); await settled(page);
      await demo.locator('[data-aw-command="previous"]').click(); await settled(page);
      check(await demo.locator('[data-aw-select]').first().isChecked(), 'selection persists across pages');
      await demo.locator('[data-aw-command="clearSelection"]').click();
      await demo.locator('[data-aw-command="sort"]').focus();
      await demo.locator('[data-aw-command="sort"]').press('Enter'); await settled(page);
      check(await page.evaluate(() => document.activeElement.dataset.awCommand === 'sort'), 'sorting keeps focus');
      check(await demo.locator('thead th').count() === 6, 'all declared columns stay visible after sorting and paging');
      before = await q(); requestsBefore = await r();
      await search.click();
      check(await r() === requestsBefore + 1, 'Search is the refresh entry for unchanged conditions');
      await demo.locator('[data-aw-state]').selectOption('error');
      await page.waitForTimeout(550); await idle();
      check(await demo.locator('[data-aw-command="retry"]').count() === 1, 'stale search completion cannot overwrite a newer error state');
      check(await q() === before, 'refreshing with Search does not change query state');
      await demo.locator('[data-aw-search]').fill('retry-must-not-submit-this-draft');
      requestsBefore = await r();
      await demo.locator('[data-aw-command="retry"]').click();
      check(await r() === requestsBefore + 1, 'error Retry starts one request');
      await verifyReadPendingControls(demo, 'Retry pending');
      await page.waitForFunction(() => document.querySelector('[data-aw-body]').getAttribute('aria-busy') === 'false');
      check(await q() === before, 'Retry preserves applied query state');
      check(await demo.locator('[data-aw-search]').inputValue() === 'retry-must-not-submit-this-draft', 'Retry preserves unsubmitted draft text');
      check(await demo.locator('[data-aw-select]').count() > 1, 'Retry uses applied conditions instead of the unmatched draft');
      await demo.locator('[data-aw-state]').selectOption('error');
      requestsBefore = await r();
      await demo.locator('[data-aw-command="retry"]').click();
      await demo.locator('[data-aw-search]').fill('01');
      await demo.locator('form[data-aw-filters]').evaluate(form => form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
      check(await q() === before && await r() === requestsBefore + 1, 'Search cannot supersede a foreground Retry while it is pending');
      await idle();
      check(await demo.locator('[data-aw-search]').inputValue() === '01' && await demo.locator('[data-aw-select]').count() > 1, 'Retry completion preserves edited draft without applying it');
      await search.click(); await idle();
      check(await q() === before + 1 && await r() === requestsBefore + 2, 'Search after Retry completes applies the edited draft with exactly one additional request');
      check(await demo.locator('[data-aw-select]').count() === 1 && await demo.locator('[data-aw-command="retry"]').count() === 0, 'post-Retry Search displays the current submitted result');
      await demo.locator('form[data-aw-filters] [data-aw-filter-reset]').click(); await settled(page);
      for (const state of ['loading', 'empty', 'error', 'refreshing', 'ready']) {
        await demo.locator('[data-aw-state]').selectOption(state);
        if (state === 'loading') check(await demo.locator('.aw-table-skeleton').count() > 0, 'loading skeleton');
        if (state === 'error') check(await demo.locator('[data-aw-command="retry"]').count() === 1, 'persistent error with retry');
        if (state === 'loading' || state === 'refreshing') await verifyReadPendingControls(demo, `${state} preview state`);
      }
      await demo.locator('[data-aw-count]').selectOption('1');
      const action = first().locator('[data-aw-command="details"]');
      const actionRow = await action.getAttribute('data-aw-row');
      before = await q(); requestsBefore = await r();
      await action.focus(); await action.press('Enter');
      check(await action.isDisabled(), 'row action disables its own pending execution');
      check(await search.isEnabled() && await demo.locator('[data-aw-page-size]').isEnabled(), 'row action does not lock unrelated query controls');
      await page.waitForFunction(id => !document.querySelector('[data-aw-command="details"][data-aw-row="' + id + '"]').disabled, actionRow);
      check(await action.evaluate(element => element === document.activeElement), 'completed row action restores focus when the user has not moved it');
      await action.press('Enter');
      await demo.locator('[data-aw-search]').focus();
      await page.waitForFunction(id => !document.querySelector('[data-aw-command="details"][data-aw-row="' + id + '"]').disabled, actionRow);
      check(await demo.locator('[data-aw-search]').evaluate(element => element === document.activeElement), 'completed row action does not steal focus from an input the user moved to');
      check(await q() === before && await r() === requestsBefore, 'synthetic row-action feedback does not mutate or reload query state');
      await demo.locator('[data-aw-count]').selectOption('0');
      await demo.locator('[data-aw-danger]').check();
      const trigger = first().locator('[data-aw-command="more"]');
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      await trigger.evaluate(button => {
        // Model focus + keyboard opening before the browser delivers the scroll
        // event caused by revealing an offscreen trigger.
        button.focus();
        button.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }));
      });
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      check(await page.locator('.aw-table-menu [role="menuitem"]').count() === 1, 'danger-only More survives the delayed focus-scroll event');
      check(await page.locator('.aw-table-menu').evaluate(menu => menu.contains(document.activeElement)), 'delayed focus-scroll keeps keyboard focus inside the menu');
      check(await page.locator('.aw-table-menu svg').count() === 0, 'menu has no business icons');
      await page.keyboard.press('Escape');
      check(await trigger.evaluate(e => e === document.activeElement), 'menu Escape restores focus');
      await trigger.focus(); await trigger.press('ArrowDown');
      await page.evaluate(() => window.scrollBy(0, 24));
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      check(await page.locator('.aw-table-menu').count() === 0, 'real anchor movement closes the menu');
      check(await trigger.evaluate(e => e === document.activeElement), 'real scrolling returns focus without scrolling the trigger back');
      await trigger.click(); await page.locator('.aw-table-menu button').click();
      check(await page.locator('.aw-table-confirm [data-aw-command="cancel"]').evaluate(e => e === document.activeElement), 'danger confirmation focuses Cancel');
      await page.keyboard.press('Escape');
      check(await trigger.evaluate(e => e === document.activeElement), 'confirmation restores focus');
      const deletedRow = await trigger.getAttribute('data-aw-row');
      const adjacentRow = await demo.locator('[data-aw-select]').nth(1).getAttribute('data-aw-select');
      await trigger.click(); await page.locator('.aw-table-menu button').click();
      await page.locator('.aw-table-confirm [data-aw-command="confirm"]').click();
      await page.waitForFunction(id => !document.querySelector('[data-aw-select="' + id + '"]'), deletedRow);
      await settled(page);
      check(await demo.locator('[data-aw-select="' + deletedRow + '"]').count() === 0, 'confirmed synthetic deletion removes the selected record');
      check(await demo.locator('[data-aw-command="more"][data-aw-row="' + adjacentRow + '"]').evaluate(element => element === document.activeElement), 'deleting the trigger row restores focus to the next displayed row action');
      await demo.locator('[data-aw-danger]').uncheck();
      await demo.locator('[data-aw-count]').selectOption('3');
      await demo.locator('[data-aw-density]').selectOption('dense');
      check(await demo.locator('.aw-table-preview').getAttribute('data-density') === 'dense', 'density applied');
      await demo.locator('[data-aw-density]').selectOption('middle');
      await demo.locator('[data-aw-narrow]').check();
      await verifyFilterContainer(page, demo, q);
      check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'no page horizontal overflow');
      await demo.locator('[data-aw-narrow]').uncheck();
      // Synthetic long-label probes cover the six consumer languages, not live translation acceptance.
      for (const labels of [
        ['详情','编辑','下载'], ['Details','Edit','Download'], ['Detalles','Editar','Descargar'],
        ['Detalhes','Editar','Transferir'], ['Détails','Modifier','Télécharger'], ['Подробности','Редактировать','Скачать']
      ]) {
        await demo.evaluate((host, values) => {
          ['details','edit','download'].forEach((key, i) => { host.querySelector('[data-aw-label="' + key + '"]').textContent = values[i]; });
          host.querySelector('[data-aw-count]').dispatchEvent(new Event('change', { bubbles: true }));
        }, labels);
        check(await demo.locator('.aw-table-actions').evaluateAll(groups => groups.every(group => group.scrollWidth <= group.clientWidth + 1)), 'six-language action probe fits');
      }
      await page.reload();
      await page.waitForFunction(() => document.querySelector('[data-aw-table-demo] .aw-table-preview'));
      if (process.env.AXE_SCRIPT) await page.addScriptTag({ path: process.env.AXE_SCRIPT });
      for (const filterView of ['collapsed', 'expanded']) {
        const toggle = demo.locator('[data-aw-filter-toggle]');
        const expectedExpanded = filterView === 'expanded';
        if ((await toggle.getAttribute('aria-expanded') === 'true') !== expectedExpanded) await toggle.click();
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        check(await demo.locator('[data-aw-filter-advanced]').isVisible() === expectedExpanded, `${filterView} filter state is ready for accessibility and screenshots`);
        if (process.env.AXE_SCRIPT) {
          const result = await page.evaluate(async () => window.axe.run('[data-aw-table-demo]', { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } }));
          findings.push(...result.violations.map(v => ({ width, locale, theme, filterView, id: v.id, nodes: v.nodes.map(n => ({ target: n.target, failure: n.failureSummary })) })));
        }
        if ([390, 1440].includes(width)) {
          const file = path.join(output, `awtable-${width}-${locale}-${theme}${expectedExpanded ? '-expanded' : ''}.png`);
          await page.locator('#app-toolbar').evaluate(el => { el.style.visibility = 'hidden'; });
          await demo.screenshot({ path: file }); shots.push(file);
          if (width === 1440 && locale === 'zh-CN' && theme === 'light' && expectedExpanded) {
            const filterPreview = path.join(output, 'awtable-filters-preview.png');
            await demo.locator('form[data-aw-filters]').screenshot({ path: filterPreview }); shots.push(filterPreview);
          }
        }
      }
      await verifyDeveloperGuides(page, { width, locale, theme, findings, shots });
      check(errors.length === 0, errors.join('\n'));
      await context.close();
      console.log(`AWTable browser group passed: ${width}/${locale}/${theme}`);
    }
    fs.writeFileSync(path.join(output, 'result.json'), JSON.stringify({ checks, findings, shots, scope: 'DS synthetic preview only; no consumer code or backend' }, null, 2));
    check(findings.length === 0, JSON.stringify(findings, null, 2));
    console.log(`AWTable browser checks passed: ${checks}; ${widths.length * locales.length * themes.length} viewport/locale/theme combinations; ${shots.length} screenshots.`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
