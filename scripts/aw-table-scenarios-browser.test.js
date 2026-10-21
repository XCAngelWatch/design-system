// Synthetic Design System demonstrations only. Does not call consumer or backend APIs.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || '@playwright/test');
const output = process.env.AW_TABLE_SCENARIO_QA_OUTPUT || '/tmp/awtable-scenarios-qa';
fs.mkdirSync(output, { recursive: true });
let checks = 0;
const findings = [], screenshots = [];
function check(condition, message) { assert.ok(condition, message); checks++; }
const settle = page => page.waitForFunction(() => document.querySelector('[data-aw-table-demo]')?.dataset.awPending === 'false');
const state = demo => demo.evaluate(host => Object.fromEntries(Object.entries(host.dataset).filter(([key]) => key.startsWith('aw'))));
const rows = demo => demo.locator('[data-aw-value]').evaluateAll(values => values.map(value => ({ key: value.dataset.awValue, text: value.textContent })));
async function runScenario(demo, name) {
  await demo.locator('[data-aw-scenario]').selectOption(name);
  await demo.locator('[data-aw-command="runScenario"]').click();
}
async function normal(page, demo) { await runScenario(demo, 'normal'); await settle(page); }

async function verifyDocumentation(page, demo, config) {
  const settings = demo.locator('[data-aw-demo-settings]');
  check(await settings.count() === 1 && !await settings.evaluate(element => element.open), 'demo configuration starts collapsed');
  check(await settings.locator(':scope > summary').isVisible(), 'configuration remains discoverable as a native disclosure');
  if (config.width === 1440) check(await demo.locator('thead').evaluate(element => element.getBoundingClientRect().bottom < innerHeight), 'the initial desktop viewport reaches the table header without expanding settings');
  const route = new URL(page.url()).hash;
  const links = page.locator('.aw-table-quick-nav [data-aw-doc-link]');
  check(await links.count() >= 3, 'component experience, development and rules have in-page navigation');
  for (let index = 0; index < await links.count(); index++) {
    const link = links.nth(index);
    const targetId = (await link.getAttribute('href')).slice(1);
    await link.focus(); await link.press('Enter');
    check(new URL(page.url()).hash === route, `navigation to ${targetId} keeps the table route`);
    check(await page.locator('#' + targetId).isVisible(), `navigation reveals ${targetId}`);
    check(await page.locator('#' + targetId).evaluate(target => target === document.activeElement || target.contains(document.activeElement)), `navigation focuses ${targetId} or its native summary`);
  }
  const development = page.locator('#aw-table-development');
  if (!await development.evaluate(element => element.open)) await development.locator(':scope > summary').click();
  const copyButtons = development.locator('[data-aw-copy]');
  check(await copyButtons.count() === 3, 'three composition examples offer a copy entry');
  for (let index = 0; index < await copyButtons.count(); index++) {
    const button = copyButtons.nth(index);
    const id = await button.getAttribute('data-aw-copy');
    const code = page.locator('#' + id);
    const example = button.locator('xpath=ancestor::details[1]');
    if (!await example.evaluate(element => element.open)) await example.locator(':scope > summary').click();
    const source = await code.textContent();
    check(source.trim().length > 80 && !/&(?:lt|gt|amp);/.test(source), `${id} contains unescaped, nonempty code after DOM parsing`);
    await button.focus(); await button.press('Enter');
    await page.waitForFunction(id => window.__awCopied === document.getElementById(id).textContent, id);
    check(await code.textContent() === await page.evaluate(() => window.__awCopied), `${id} copies the exact displayed code`);
    const feedback = page.locator('[data-aw-copy-feedback="' + id + '"]');
    check((await feedback.textContent()).trim().length > 0, `${id} announces copy feedback`);
    check(await button.evaluate(element => element === document.activeElement), `${id} copy does not move keyboard focus`);
  }
  await page.evaluate(() => { window.__awClipboardReject = true; window.__awCopied = undefined; });
  await copyButtons.first().click();
  const failedId = await copyButtons.first().getAttribute('data-aw-copy');
  await page.waitForFunction(id => {
    const feedback = document.querySelector('[data-aw-copy-feedback="' + id + '"]');
    const label = document.querySelector('[data-aw-doc-label="copyFailed"]');
    return feedback?.textContent === label?.textContent;
  }, failedId);
  check(await page.evaluate(() => window.__awCopied === undefined), 'failed clipboard access does not report a successful copy');
  check(await page.evaluate(id => String(getSelection()) === document.getElementById(id).textContent, failedId), 'failed copy selects the displayed code for manual copying');
  await page.evaluate(() => { window.__awClipboardReject = false; getSelection().removeAllRanges(); });
  await copyButtons.first().click();
  await page.waitForFunction(id => window.__awCopied === document.getElementById(id).textContent, failedId);
  if (process.env.AXE_SCRIPT) {
    await page.addScriptTag({ path: process.env.AXE_SCRIPT });
    const result = await development.evaluate(async element => window.axe.run(element, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } }));
    findings.push(...result.violations.map(violation => ({ ...config, section: 'development', id: violation.id, nodes: violation.nodes.map(node => ({ target: node.target, failure: node.failureSummary })) })));
  }
  const examples = development.locator('.aw-table-code-example');
  for (let index = 1; index < await examples.count(); index++) await examples.nth(index).locator(':scope > summary').click();
  const screenshot = path.join(output, `development-${config.width}-${config.locale}-${config.theme}.png`);
  await development.screenshot({ path: screenshot }); screenshots.push(screenshot);
  await settings.locator(':scope > summary').click();
  const initialReads = (await state(demo)).awRequestCount;
  const scenarioValues = await demo.locator('[data-aw-scenario] option').evaluateAll(options => options.map(option => option.value));
  check(scenarioValues.length === 9, 'nine supported scenarios are discoverable');
  const helpTexts = new Set();
  for (const value of scenarioValues) {
    await demo.locator('[data-aw-scenario]').selectOption(value);
    const help = demo.locator('[data-aw-scenario-help]');
    const text = (await help.textContent()).trim();
    check(await help.isVisible() && text.length > 30, `${value} explains its steps and expected outcome before execution`);
    helpTexts.add(text);
  }
  check(helpTexts.size === scenarioValues.length && (await state(demo)).awRequestCount === initialReads, 'selecting each scenario updates distinct help without silently executing a read');
}

async function verifyScenarios(page, demo, config) {
  await normal(page, demo);
  const draft = demo.locator('[data-aw-search]');
  const search = demo.locator('form[data-aw-filters] [type="submit"]');
  const before = await state(demo), oldRows = await rows(demo);
  await draft.fill('01');
  let current = await state(demo);
  check(current.awQuery === before.awQuery && current.awResultQuery === before.awResultQuery && current.awRequestCount === before.awRequestCount, 'editing draft changes neither applied query, result query nor read count');
  await search.click();
  current = await state(demo);
  check(JSON.parse(current.awQuery).search === '01' && current.awResultQuery === before.awResultQuery && current.awPending === 'true', 'accepted search commits applied query while pending rows retain their result query');
  check(JSON.stringify(await rows(demo)) === JSON.stringify(oldRows), 'pending search preserves previous rows instead of relabeling them as the new result');
  check(await demo.locator('[data-aw-select]').evaluateAll(elements => elements.every(element => element.disabled)), 'selection is disabled while displayed results belong to an earlier query');
  await draft.fill('02'); await settle(page);
  current = await state(demo);
  check(JSON.parse(current.awResultQuery).search === '01' && JSON.parse(current.awQuery).search === '01' && await draft.inputValue() === '02', 'in-flight result uses its captured query without overwriting a newer draft');
  check(await demo.locator('[data-aw-value]').count() === 1, 'accepted filtered result has the expected matching fixture');

  await normal(page, demo);
  const sort = demo.locator('[data-aw-command="sort"]');
  await sort.focus(); await sort.press('Enter'); await settle(page);
  check(await sort.evaluate(element => element === document.activeElement), 'asynchronous sorting restores its keyboard trigger after completion');
  await sort.press('Enter'); await draft.focus(); await draft.fill('keep-focus'); await settle(page);
  check(await draft.evaluate(element => element === document.activeElement), 'request completion does not steal focus after the user edits a different control');
  const next = demo.locator('[data-aw-command="next"]');
  await next.focus(); await next.press('Enter'); await settle(page);
  check(await next.evaluate(element => element === document.activeElement), 'asynchronous paging restores the initiating keyboard control');

  await normal(page, demo);
  const priorRows = await rows(demo), priorState = await state(demo);
  await runScenario(demo, 'refresh-error'); await settle(page);
  current = await state(demo);
  check(JSON.stringify(await rows(demo)) === JSON.stringify(priorRows) && current.awResultQuery === priorState.awResultQuery, 'refresh failure preserves last successful rows and result identity');
  check(await demo.locator('[data-aw-command="retry"]').count() === 1, 'refresh failure exposes one retry rather than an empty result');
  check(await demo.locator('[data-aw-select], .aw-table-actions button').evaluateAll(elements => elements.every(element => element.disabled)), 'stale-error results cannot be selected or mutated until revalidated');
  const staleRequests = current.awRequestCount;
  await demo.locator('[data-aw-filter-reset]').click();
  current = await state(demo);
  check(current.awRequestCount === staleRequests && await demo.locator('[data-aw-command="retry"]').count() === 1 && JSON.stringify(await rows(demo)) === JSON.stringify(priorRows), 'Reset at a default query preserves a refresh error and its old result without manufacturing a successful read');
  await draft.fill('unsubmitted-draft');
  const refreshRequests = Number(current.awRequestCount);
  await demo.locator('[data-aw-command="retry"]').click(); await settle(page);
  current = await state(demo);
  check(Number(current.awRequestCount) === refreshRequests + 1 && await draft.inputValue() === 'unsubmitted-draft', 'retry reads exactly once and preserves unsubmitted draft');
  check(JSON.stringify(await rows(demo)) === JSON.stringify(priorRows), 'retry uses the applied query and restores its result');

  await normal(page, demo);
  await demo.locator('[data-aw-state]').selectOption('error');
  const initialError = await state(demo);
  await demo.locator('[data-aw-filter-reset]').click();
  current = await state(demo);
  check(current.awRequestCount === initialError.awRequestCount && await demo.locator('[data-aw-value]').count() === 0 && await demo.locator('[data-aw-command="retry"]').count() === 1, 'Reset at defaults does not manufacture rows or clear an initial read failure');

  for (const gate of ['waiting', 'blocked']) {
    await runScenario(demo, gate);
    const gated = await state(demo);
    check(gated.awGate === gate && gated.awPending === 'false', `${gate} is an explicit non-reading state`);
    check(await search.isDisabled(), `${gate} disables Search`);
    await demo.evaluate(host => {
      host.querySelector('form[data-aw-filters]').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      for (const command of ['next', 'previous', 'sort', 'retry']) host.querySelector('[data-aw-command="' + command + '"]')?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    });
    current = await state(demo);
    check(current.awRequestCount === gated.awRequestCount && current.awQuery === gated.awQuery, `${gate} rejects synthetic submit/paging/sorting without any read or query mutation`);
    check(await demo.locator('[data-aw-value]').count() === 0, `${gate} does not expose results from the previous authorized scope`);
    await demo.locator('[data-aw-command="resumeScope"]').click(); await settle(page);
    current = await state(demo);
    check(current.awGate === 'ready' && Number(current.awRequestCount) === Number(gated.awRequestCount) + 1 && await demo.locator('[data-aw-value]').count() > 0, `${gate} recovery revalidates scope and issues exactly one table read`);
  }

  await normal(page, demo);
  const raceBefore = await state(demo);
  await runScenario(demo, 'context-race');
  await page.waitForFunction(previous => Number(document.querySelector('[data-aw-table-demo]').dataset.awIgnored) > previous, Number(raceBefore.awIgnored));
  await settle(page); current = await state(demo);
  check(current.awContext === 'B' && current.awResultContext === 'B', 'late A response cannot replace the latest B context result');
  check(Number(current.awRequestCount) === Number(raceBefore.awRequestCount) + 2, 'context race issues one read per ready context');
  check(Number(current.awIgnored) === Number(raceBefore.awIgnored) + 1 && current.awPending === 'false', 'one stale success/finally is ignored without corrupting the current request lock');
  check((await rows(demo)).length > 0, 'the current context retains a usable completed result');

  await normal(page, demo);
  const optionsBefore = await state(demo);
  await runScenario(demo, 'options-error');
  check(await demo.locator('[data-aw-filter="model"]').isDisabled() && await search.isEnabled(), 'option error is local to its dependent field and does not block independent table reads');
  await demo.locator('[data-aw-command="retryOptions"]').click();
  await page.waitForFunction(() => !document.querySelector('[data-aw-filter="model"]').disabled);
  current = await state(demo);
  check(current.awRequestCount === optionsBefore.awRequestCount && Number(current.awOptionsRequests) > Number(optionsBefore.awOptionsRequests), 'option retry uses its own request owner without reloading table rows');

  await normal(page, demo);
  await runScenario(demo, 'batch-partial');
  const batchBefore = await state(demo);
  const batchSnapshot = JSON.parse(batchBefore.awSelected);
  check(batchSnapshot.length === 3, 'partial-failure scenario captures three selected records');
  await demo.locator('[data-aw-command="batchRun"]').click();
  await page.waitForFunction(() => JSON.parse(document.querySelector('[data-aw-table-demo]').dataset.awBatchOutcome)?.failed.length > 0);
  current = await state(demo);
  const retained = JSON.parse(current.awSelected);
  check(retained.length > 0 && retained.length < batchSnapshot.length && retained.every(key => batchSnapshot.includes(key)), 'partial success removes successes and retains failed snapshot members');
  check(Number(current.awMutationCount) === Number(batchBefore.awMutationCount) + 1, 'batch execution sends one write for the captured snapshot');
  await demo.locator('[data-aw-command="batchRetry"]').click();
  await page.waitForFunction(() => (() => { const outcome = JSON.parse(document.querySelector('[data-aw-table-demo]').dataset.awBatchOutcome); return outcome && outcome.succeededKeys.length > 0 && !outcome.failed.length && !outcome.unknownKeys.length; })());
  current = await state(demo);
  check(JSON.parse(current.awSelected).length === 0 && Number(current.awMutationCount) === Number(batchBefore.awMutationCount) + 2, 'explicit retry acts only on confirmed retryable failures and clears them on success');

  await normal(page, demo);
  await runScenario(demo, 'batch-unknown');
  const unknownBefore = await state(demo);
  await demo.locator('[data-aw-command="batchRun"]').click();
  await page.waitForFunction(() => JSON.parse(document.querySelector('[data-aw-table-demo]').dataset.awBatchOutcome)?.unknownKeys.length > 0);
  const unknown = await state(demo);
  const retry = demo.locator('[data-aw-command="batchRetry"]');
  check(!await retry.count() || await retry.isHidden() || await retry.isDisabled(), 'unknown write outcome does not offer a blind retry');
  await demo.evaluate(host => host.querySelector('[data-aw-command="batchRetry"]')?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true })));
  current = await state(demo);
  check(current.awMutationCount === unknown.awMutationCount && Number(current.awMutationCount) === Number(unknownBefore.awMutationCount) + 1, 'programmatic retry cannot repeat a write with unknown outcome');
  check(current.awSelected === unknown.awSelected && JSON.parse(current.awSelected).length === 3, 'unknown outcome preserves the snapshot for reconciliation');
  await demo.locator('[data-aw-command="verifyOutcome"]').click();
  await page.waitForFunction(() => { const outcome = JSON.parse(document.querySelector('[data-aw-table-demo]').dataset.awBatchOutcome); return outcome && !outcome.unknownKeys.length && outcome.failed.length > 0; });
  await settle(page); current = await state(demo);
  const reconciled = JSON.parse(current.awBatchOutcome);
  check(current.awMutationCount === unknown.awMutationCount && Number(current.awVerificationCount) === Number(unknown.awVerificationCount) + 1 && Number(current.awRequestCount) === Number(unknown.awRequestCount) + 1, 'reconciling unknown results issues no write and refreshes the result once');
  check(JSON.stringify(JSON.parse(current.awSelected)) === JSON.stringify(reconciled.failed.map(item => item.key)), 'reconciliation retains only confirmed failure keys');
  await demo.locator('[data-aw-command="batchRetry"]').click();
  await page.waitForFunction(() => { const outcome = JSON.parse(document.querySelector('[data-aw-table-demo]').dataset.awBatchOutcome); return outcome && outcome.succeededKeys.length > 0 && !outcome.failed.length && !outcome.unknownKeys.length; });
  await settle(page); current = await state(demo);
  check(Number(current.awMutationCount) === Number(unknown.awMutationCount) + 1 && JSON.parse(current.awSelected).length === 0, 'only an explicit retry of reconciled failures performs the next write');

  await normal(page, demo);
  await runScenario(demo, 'delete-last'); await settle(page);
  const deleteBefore = await state(demo);
  check(JSON.parse(deleteBefore.awQuery).page === 2 && await demo.locator('[data-aw-value]').count() === 1, 'last-page scenario starts with one record on page two');
  await demo.locator('[data-aw-command="more"]').first().click();
  await page.locator('.aw-table-menu [data-aw-command="delete"]').click();
  await page.locator('.aw-table-confirm [data-aw-command="confirm"]').evaluate(button => { button.click(); button.click(); });
  await page.waitForFunction(() => { const host = document.querySelector('[data-aw-table-demo]'); return host.dataset.awPending === 'false' && JSON.parse(host.dataset.awQuery).page === 1; });
  current = await state(demo);
  check(JSON.parse(current.awQuery).page === 1 && await demo.locator('[data-aw-value]').count() === 20, 'deleting the last record corrects to the preceding valid page');
  check(Number(current.awRequestCount) === Number(deleteBefore.awRequestCount) + 2, 'deletion performs a current-page read and at most one corrective read');
  check(Number(current.awMutationCount) === Number(deleteBefore.awMutationCount) + 1, 'same-frame duplicate confirmation events still perform exactly one deletion');

  await normal(page, demo);
  await demo.locator('[data-aw-danger]').uncheck();
  await demo.locator('[data-aw-mixed-actions]').check();
  await demo.locator('[data-aw-long-labels]').check();
  const layout = await demo.locator('.aw-table-actions-cell').evaluateAll(cells => cells.map(cell => ({ width: cell.getBoundingClientRect().width, clipped: [...cell.querySelectorAll('button')].some(button => button.scrollWidth > button.clientWidth + 1 || button.getBoundingClientRect().right > cell.getBoundingClientRect().right + 1) })));
  check(layout.length > 1 && layout.every(cell => Math.abs(cell.width - layout[0].width) < 1 && !cell.clipped), 'mixed action sets and long labels share one stable unclipped action column');
  const actionCounts = await demo.locator('tbody .aw-table-actions').evaluateAll(groups => [...new Set(groups.map(group => group.querySelectorAll('button').length))]);
  check(actionCounts.length >= 3 && actionCounts.includes(0), 'mixed fixture exercises zero, one and multiple actionable entries in the same column');
  if (config.width === 390) {
    check(await demo.locator('.aw-table-preview').getAttribute('data-fixed-actions') === 'false', 'insufficient middle content budget unfreezes the long action column');
    const scroll = demo.locator('[data-aw-body]');
    check(await scroll.evaluate(element => element.scrollWidth > element.clientWidth), 'long action labels use local table scrolling rather than clipping');
    await scroll.focus(); await scroll.press('ArrowRight');
    await page.waitForFunction(() => document.querySelector('[data-aw-body]').scrollLeft > 0);
    check(await page.evaluate(() => scrollX === 0), 'keyboard scrolling stays in the table region');
    await scroll.evaluate(element => element.scrollTo({ left: 0, behavior: 'instant' }));
  }
  const firstWidth = Number((await state(demo)).awActionWidth);
  await demo.locator('[data-aw-command="next"]').click(); await settle(page);
  check(Number((await state(demo)).awActionWidth) === firstWidth, 'paging through different action combinations does not resize the action column');
  check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'scenario controls and mixed table layout do not create page overflow');
  check(await page.locator('.demo-toast.show').count() === 0, 'AWTable settings and selection are not intercepted by the generic checkbox feedback handler');
  if (process.env.AXE_SCRIPT) {
    await page.addScriptTag({ path: process.env.AXE_SCRIPT });
    const result = await page.evaluate(async () => window.axe.run('[data-aw-table-demo]', { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } }));
    findings.push(...result.violations.map(violation => ({ ...config, id: violation.id, nodes: violation.nodes.map(node => ({ target: node.target, failure: node.failureSummary })) })));
  }
  const screenshot = path.join(output, `scenarios-${config.width}-${config.locale}-${config.theme}.png`);
  await demo.screenshot({ path: screenshot }); screenshots.push(screenshot);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const config of [{ width: 1440, locale: 'zh-CN', theme: 'light' }, { width: 390, locale: 'en-US', theme: 'dark' }]) {
      const context = await browser.newContext({ viewport: { width: config.width, height: 1100 }, reducedMotion: 'reduce' });
      await context.addInitScript(({ locale, theme }) => {
        localStorage.setItem('aw-locale', locale); localStorage.setItem('aw-theme', theme);
        Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async value => {
          if (window.__awClipboardReject) throw new Error('Synthetic denied clipboard permission');
          window.__awCopied = value;
        } } });
      }, config);
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto((process.env.AW_TABLE_QA_URL || 'http://127.0.0.1:5182/index.html') + '#/table');
      const demo = page.locator('[data-aw-table-demo]');
      await page.waitForFunction(() => document.querySelector('[data-aw-table-demo] .aw-table-preview'));
      await verifyDocumentation(page, demo, config);
      await verifyScenarios(page, demo, config);
      await page.reload();
      await page.waitForFunction(() => document.querySelector('[data-aw-table-demo] .aw-table-preview'));
      await page.evaluate(() => scrollTo(0, 0));
      const overview = path.join(output, `overview-${config.width}-${config.locale}-${config.theme}.png`);
      await page.screenshot({ path: overview }); screenshots.push(overview);
      check(errors.length === 0, errors.join('\n'));
      await context.close();
      console.log(`AWTable scenario group passed: ${config.width}/${config.locale}/${config.theme}`);
    }
    fs.writeFileSync(path.join(output, 'result.json'), JSON.stringify({ checks, findings, screenshots, scope: 'Local synthetic Design System reference; no consumer or backend acceptance' }, null, 2));
    check(findings.length === 0, JSON.stringify(findings, null, 2));
    console.log(`AWTable scenario checks passed: ${checks}; ${screenshots.length} screenshots.`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
