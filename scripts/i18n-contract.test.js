const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const index = fs.readFileSync('project/index.html', 'utf8');
const router = fs.readFileSync('project/pages/_router.js', 'utf8');
const runtime = fs.readFileSync('project/i18n/runtime.js', 'utf8');
const common = fs.readFileSync('project/i18n/common.en-US.js', 'utf8');
const systemCss = fs.readFileSync('project/styles/system.css', 'utf8');
const extrasCss = fs.readFileSync('project/styles/components-extras.css', 'utf8');

assert.match(index, /localStorage\.getItem\('aw-locale'\)/);
assert.match(index, /i18n\/runtime\.js/);
assert.match(index, /i18n\/common\.en-US\.js/);
assert.ok(index.indexOf('i18n/runtime.js') < index.indexOf('pages/_router.js'));
assert.match(router, /data-locale-set="zh-CN"/);
assert.match(router, /data-locale-set="en-US"/);
assert.match(router, /class="locale-toggle-fixed"/);
assert.match(router, /localStorage\.setItem\('aw-locale'/);
assert.match(router, /i18n\/en-US\/' \+ routeId \+ '\.js'/);
assert.match(router, /document\.documentElement\.setAttribute\('lang'/);
assert.match(router, /function loadRoute\(routeId, options\)/);
assert.match(router, /preserveScroll/);
assert.match(router, /focus\(\{ preventScroll: true \}\)/);
assert.match(router, /if \(!window\.__AW_PAGES__\[routeId\]\) \{[\s\S]*?tCommon\('loading'/);
assert.match(router, /var pagePromise = loadPageScript\(routeId\);/);
assert.match(router, /var localePromise = loadEnglishCatalogOrFallback\(routeId\);/);
assert.match(router, /Promise\.all\(\[pagePromise,\s*localePromise\]\)\.then/);
assert.doesNotMatch(router, /pagePromise\.then/);
assert.doesNotMatch(router, /localePromise\.then/);
assert.doesNotMatch(router, /Promise\.all\(\[loadPageScript\(routeId\), loadEnglishCatalogOrFallback\(routeId\)\]\)/);
assert.match(router, /delete loadedScripts\[routeId\]/);
assert.match(router, /loadedLocaleScripts\[routeId\] = false/);
assert.match(systemCss, /--aw-doc-sidebar-width:\s*240px/);
assert.match(systemCss, /html\[lang="en-US"\][\s\S]*--aw-doc-sidebar-width:\s*272px/);
assert.match(systemCss, /grid-template-columns:\s*var\(--aw-doc-sidebar-width\)\s+minmax\(0,\s*1fr\)/);
assert.match(systemCss, /html\[lang="en-US"\]\s+\.nav a\s*\{[^}]*white-space:\s*normal/);
assert.match(systemCss, /@media \(max-width:\s*700px\)\s*\{[\s\S]*?\.app\s*\{[^}]*display:\s*block/);
assert.match(systemCss, /@media \(max-width:\s*700px\)\s*\{[\s\S]*?\.app-side\s*\{[^}]*max-height:\s*42vh/);
assert.match(extrasCss, /\.locale-toggle-fixed/);
assert.match(extrasCss, /\.toolbar-controls/);
assert.match(extrasCss, /html\[lang="en-US"\]\s+\.btn\s*\{[^}]*min-height:\s*32px[^}]*height:\s*auto[^}]*white-space:\s*normal/);
assert.match(extrasCss, /html\[lang="en-US"\]\s+\.form-row\s*>\s*\.lbl\s*\{[^}]*min-width:\s*132px[^}]*white-space:\s*normal/);
assert.match(extrasCss, /html\[lang="en-US"\]\s+\.tabs\s*\{[^}]*overflow-x:\s*auto/);
assert.match(extrasCss, /html\[lang="en-US"\]\s+\.tabs a\s*\{[^}]*white-space:\s*nowrap/);
assert.match(extrasCss, /html\[lang="en-US"\]\s+\.tag,\s*html\[lang="en-US"\]\s+\.status-dot\s*\{[^}]*white-space:\s*nowrap/);
assert.match(extrasCss, /html\[lang="en-US"\]\s+\.card-title,[\s\S]*?html\[lang="en-US"\]\s+\.surface h4\s*\{[^}]*overflow-wrap:\s*anywhere/);
assert.match(extrasCss, /html\[lang="en-US"\]\s+\.actions,[\s\S]*?html\[lang="en-US"\]\s+\.ph-actions\s*\{[^}]*flex-wrap:\s*wrap/);
assert.match(extrasCss, /html\[lang="en-US"\]\s+table th\s*\{[^}]*white-space:\s*normal[^}]*line-height:\s*1\.35/);
assert.match(extrasCss, /html\[lang="en-US"\]\s+table \.mono\s*\{[^}]*white-space:\s*nowrap/);
assert.match(extrasCss, /html\[lang="en-US"\]\s+\.i18n-table-scroll\s*\{[^}]*overflow-x:\s*auto[^}]*max-width:\s*100%/);
assert.match(extrasCss, /@media \(max-width:\s*700px\)\s*\{[\s\S]*?\.comp-toolbar\s*\{[^}]*flex-wrap:\s*wrap[\s\S]*?\.toolbar-controls\s*\{[^}]*width:\s*100%/);
assert.match(runtime, /scrollWidth\s*>\s*parent\.clientWidth/);

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

const routeIds = [...router.matchAll(/^\s*\['([^']+)'/gm)].map(match => match[1]).sort();
const routeKeys = [...common.matchAll(/'route\.([^']+)'\s*:/g)].map(match => match[1]).sort();
assert.deepEqual(routeKeys, routeIds);

const context = { window: {}, console };
vm.runInNewContext(runtime, context);
vm.runInNewContext(common, context);
assert.equal(context.window.__AW_I18N__.getCatalogs()['en-US'].common['route.overview'], 'Design System Overview');

console.log('i18n shell contract passed');
