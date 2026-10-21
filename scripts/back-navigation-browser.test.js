// Optional browser regression. Provide Playwright/axe from an independent QA
// environment, as for browser-audit.js; the site keeps no runtime dependencies.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { pathToFileURL } = require('node:url');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || '@playwright/test');
const root = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const base = option('--url', pathToFileURL(path.join(root, 'project/index.html')).href);
const output = path.resolve(option('--output', '/tmp/angelwatch-back-navigation'));
const axe = process.env.AXE_SCRIPT || require.resolve('axe-core/axe.min.js');
const pages = {};
for (const name of fs.readdirSync(path.join(root, 'project/pages'))) {
  if (!name.endsWith('.js') || name === '_router.js') continue;
  vm.runInNewContext(fs.readFileSync(path.join(root, 'project/pages', name), 'utf8'), { window: { __AW_PAGES__: pages } });
}
const routes = Object.keys(pages).filter(route => /\bdata-route-back\b/.test(pages[route]));
const results = { renders: [], direct: [], history: [], errors: [] };
const ready = async (page, route) => {
  await page.waitForFunction(route => location.hash === '#/' + route && document.querySelector('#app-slot[aria-busy="false"] #' + route), route);
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
};
const go = async (page, route) => {
  await page.evaluate(route => { location.hash = '#/' + route; }, route);
  await ready(page, route);
};

(async () => {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  try {
    for (const width of [1440, 1024, 390]) for (const locale of ['zh-CN', 'en-US']) for (const theme of ['light', 'dark']) {
      const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
      await context.addInitScript(({ locale, theme }) => {
        localStorage.setItem('aw-locale', locale);
        localStorage.setItem('aw-theme', theme);
      }, { locale, theme });
      const page = await context.newPage();
      page.on('pageerror', error => results.errors.push(error.message));
      for (const route of routes) {
        await page.goto(base + '#/' + route);
        await ready(page, route);
        const controls = await page.locator('#app-slot .btn-back, #app-toolbar .btn-back').evaluateAll(nodes => nodes.map(button => {
          const box = button.getBoundingClientRect();
          const heading = button.parentElement.querySelector('.ph-title-content');
          const titleBox = heading && heading.getBoundingClientRect();
          return {
            text: button.textContent.trim(), height: box.height,
            visible: box.width > 0 && box.height > 0 && getComputedStyle(button).visibility !== 'hidden',
            clipped: button.scrollWidth > button.clientWidth + 1,
            inHeading: !!button.closest('h1,h2,h3,h4,h5,h6'),
            icon: !!button.querySelector('use[href="#aw-icon-arrow-left"]'),
            titleAligned: !titleBox || (box.right <= titleBox.left && box.top < titleBox.bottom && box.bottom > titleBox.top),
          };
        }));
        assert.ok(controls.length, route + ': missing Back');
        for (const control of controls) {
          assert.ok(control.visible && !control.clipped && control.icon && !control.inHeading && control.titleAligned, JSON.stringify({ route, width, locale, theme, control }));
          assert.ok(Math.abs(control.height - 32) < 1, 'Back keeps its 32px height: ' + JSON.stringify({ route, width, locale, theme, control }));
        }
        await page.addScriptTag({ path: axe });
        const violations = await page.evaluate(async () => (await axe.run({ include: [...document.querySelectorAll('#app-slot .btn-back, #app-toolbar .btn-back')] }, {
          preload: false, runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
        })).violations.map(({ id, nodes }) => ({ id, targets: nodes.map(node => node.target) })));
        assert.deepEqual(violations, [], route + ': Back accessibility');
        const back = page.locator('#app-slot .btn-back').first();
        await back.focus();
        assert.ok(await back.evaluate(button => button === document.activeElement && getComputedStyle(button).outlineStyle !== 'none'), route + ': visible keyboard focus');
        results.renders.push({ route, width, locale, theme, controls });
        if (width === 390 && locale === 'en-US') await page.screenshot({ path: path.join(output, `${route}-${width}-${locale}-${theme}.png`) });
      }
      await context.close();
    }
    // Each direct entry gets a fresh document, so previous test navigation cannot
    // mask a missing stable fallback. Exercise native keyboard activation too.
    for (const route of routes) {
      const count = [...pages[route].matchAll(/<button\b[^>]*\bdata-route-back\b/g)].length;
      for (let index = 0; index < count; index++) {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(base + '#/' + route); await ready(page, route);
        const back = page.locator('#app-slot .btn-back').nth(index);
        const target = await back.evaluate(button => button.getAttribute('data-back-target') || button.getAttribute('data-back-fallback'));
        await back.focus(); await page.keyboard.press('Enter');
        await ready(page, target.slice(2));
        results.direct.push({ route, index, target });
        await context.close();
      }
    }
    const context = await browser.newContext();
    const page = await context.newPage();
    // A reload invalidates the previous document's memory. A native Back after
    // it must not make that older entry look like a newly pushed in-site entry.
    await page.goto('data:text/html,<title>External page</title>');
    await page.goto(base + '#/list-page'); await ready(page, 'list-page');
    await page.locator('#app-slot [data-demo-route]').first().click(); await ready(page, 'detail-page');
    await page.reload(); await ready(page, 'detail-page');
    await page.goBack(); await ready(page, 'list-page');
    await page.locator('#app-toolbar [data-route-back]').click(); await ready(page, 'overview');
    results.history.push('reload + native Back stays inside the document');
    await go(page, 'buttons'); await go(page, 'detail-page');
    await page.locator('#app-slot .btn-back').click(); await ready(page, 'buttons');
    results.history.push('new in-site source works after re-anchoring');
    await page.goForward(); await ready(page, 'detail-page');
    await page.locator('#app-slot .btn-back').click(); await ready(page, 'buttons');
    results.history.push('native Forward preserves the verified source');
    await context.close();
    assert.deepEqual(results.errors, [], 'no browser script errors');
    console.log(JSON.stringify({ renders: results.renders.length, direct: results.direct.length, history: results.history.length }));
  } finally {
    fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify(results, null, 2));
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
