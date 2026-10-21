// Optional maintenance audit. Supply Playwright and axe from a separate QA environment;
// the published static site has no npm or browser-test dependency.
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || '@playwright/test');
const root = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const url = option('--url', pathToFileURL(path.join(root, 'project/index.html')).href);
const output = path.resolve(option('--output', '/tmp/angelwatch-browser-audit'));
fs.mkdirSync(output, {recursive:true});
const allRoutes = fs.readdirSync(root + '/project/pages').filter(f => f.endsWith('.js') && f !== '_router.js').map(f => f.slice(0, -3));
const routes = option('--routes', allRoutes.join(',')).split(',');
if (routes.some(route => !allRoutes.includes(route))) throw new Error('Unknown route in --routes');
const widths = option('--widths', '1440,390').split(',').map(Number);
if (widths.some(width => !Number.isInteger(width) || width < 320)) throw new Error('Invalid viewport in --widths');

const axe = process.env.AXE_SCRIPT || require.resolve('axe-core/axe.min.js');
(async () => {
  const browser = await chromium.launch({headless: true});
  const problems = [];
  let renders = 0, accessibility = 0;
  const matrix = widths.flatMap(width => ['zh-CN','en-US'].flatMap(locale => ['light','dark'].map(theme => [width,locale,theme])));
  for (const [width, locale, theme] of matrix) {
    const context = await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce'});
    const page = await context.newPage();
    page.on('pageerror', e => problems.push({width, locale, theme, kind:'pageerror', message:e.message}));
    page.on('requestfailed', request => problems.push({width,locale,theme,kind:'requestfailed',url:request.url(),error:request.failure()?.errorText}));
    page.on('response', response => { if(response.status() >= 400) problems.push({width,locale,theme,kind:'http-error',status:response.status(),url:response.url()}); });
    await page.goto(url);
    await page.evaluate(({locale,theme}) => {localStorage.setItem('aw-locale',locale);localStorage.setItem('aw-theme',theme)}, {locale,theme});
    await page.reload();
    for (const route of routes) {
      await page.evaluate(route=>location.hash = '#/' + route, route);
      await page.waitForFunction(route => document.querySelector('#app-slot[aria-busy="false"] #' + route), route);
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(()=>requestAnimationFrame(resolve))));
      const result = await page.evaluate(() => {
        const issues = [];
        const visible = e => !!e.getClientRects().length && getComputedStyle(e).visibility !== 'hidden';
        if (document.documentElement.scrollWidth > innerWidth + 1) issues.push({kind:'document-overflow',width:document.documentElement.scrollWidth});
        for (const use of document.querySelectorAll('svg use')) {
          const href = use.getAttribute('href');
          if (href?.startsWith('#') && !document.getElementById(href.slice(1))) issues.push({kind:'missing-icon',href});
        }
        for (const th of document.querySelectorAll('th')) {
          if (visible(th) && th.textContent.trim() && th.getBoundingClientRect().width < 4) issues.push({kind:'zero-width-column',text:th.textContent.trim()});
        }
        for (const button of document.querySelectorAll('button.btn, button.btn-back, .ra-row > button')) {
          if (!visible(button) || !button.textContent.trim() || button.closest('[hidden]')) continue;
          if (button.scrollWidth > button.clientWidth + 3) issues.push({kind:'button-overflow',text:button.textContent.trim(),w:button.clientWidth,sw:button.scrollWidth});
        }
        for (const row of document.querySelectorAll('.datacard .ra-row')) {
          if (visible(row) && row.scrollWidth > row.clientWidth + 1) issues.push({kind:'card-actions-overflow',text:row.textContent.trim()});
        }
        for (const status of document.querySelectorAll('.status-dot')) {
          const cell = status.closest('td, .datacard .body .v');
          if (!cell || !visible(status) || status.closest('[hidden]')) continue;
          const style = getComputedStyle(cell);
          if (!['hidden','clip'].includes(style.overflowX)) continue;
          const range = document.createRange();
          range.selectNodeContents(status);
          const text = range.getBoundingClientRect();
          const bounds = cell.getBoundingClientRect();
          if (text.right > bounds.right + 1 || text.left < bounds.left - 1 || text.bottom > bounds.bottom + 1) {
            issues.push({kind:'status-clipped',text:status.textContent.trim()});
          }
        }
        for (const button of document.querySelectorAll('#app-slot .btn-back')) {
          if (!button.querySelector('use[href="#aw-icon-arrow-left"]') || !button.textContent.trim() || !button.hasAttribute('data-route-back')) issues.push({kind:'back-control',html:button.outerHTML});
        }
        for (const item of document.querySelectorAll('.ra-menu [role="menuitem"], .aw-table-menu [role="menuitem"]')) {
          const compact = !!item.closest('.datacard, [data-row-actions-compact]');
          const businessIcons = Array.from(item.querySelectorAll('svg')).filter(icon => !icon.hasAttribute('data-action-indicator'));
          if (!item.textContent.trim()) issues.push({kind:'menu-label-missing',html:item.outerHTML});
          if (compact && !item.querySelector('svg use')) issues.push({kind:'compact-menu-icon-missing',html:item.outerHTML});
          if (!compact && businessIcons.length) issues.push({kind:'table-menu-business-icon',html:item.outerHTML});
        }
        const ids = new Set();
        for (const el of document.querySelectorAll('[id]')) {
          if (ids.has(el.id)) issues.push({kind:'duplicate-id',id:el.id});
          ids.add(el.id);
        }
        return issues;
      });
      problems.push(...result.map(r=>({width,locale,theme,route,...r})));
      renders++;
      if (true) {
        await page.addScriptTag({path:axe});
        // axe CSS preloading uses fetch, which file:// forbids. The rendered
        // document styles and DOM remain available; HTTP audits use preloading.
        const violations = await page.evaluate(async () => (await axe.run(document, {preload:location.protocol !== 'file:',runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa']}})).violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)})));
        problems.push(...violations.map(v=>({width,locale,theme,route,kind:'axe',...v})));
        accessibility++;
      }
      if (['overview','a11y','inputs','data-cards','page-header','row-actions','whitelabel','push-page'].includes(route) && ((width===1440&&locale==='en-US'&&theme==='light')||(width===390&&locale==='zh-CN'&&theme==='dark'))) {
        await page.screenshot({path:path.join(output,`${route}-${width}-${locale}-${theme}.png`),fullPage:true});
      }
    }
    console.log(JSON.stringify({width,locale,theme,renders,accessibility,problems:problems.length}));
    await context.close();
  }
  await browser.close();
  fs.writeFileSync(path.join(output,'results.json'),JSON.stringify({url,matrix,routes,createdAt:new Date().toISOString(),renders,accessibility,problems},null,2));
  console.log(JSON.stringify({url,output,renders,accessibility,problemCount:problems.length}));
  if(problems.length) process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});
