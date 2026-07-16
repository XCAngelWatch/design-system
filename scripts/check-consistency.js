const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const pagesDir = path.join(root, 'project/pages');
const router = fs.readFileSync(path.join(pagesDir, '_router.js'), 'utf8');
const pageFiles = fs.readdirSync(pagesDir).filter((name) => name.endsWith('.js') && name !== '_router.js');
const pageIds = new Set(pageFiles.map((name) => name.slice(0, -3)));
const errors = [];

const blueprints = [
  'shell', 'login-page', 'list-page', 'detail-page', 'form-page', 'tree-list', 'wizard-page', 'dash-page',
  'device-center-page', 'market-page', 'ota-page', 'push-page', 'user-mgmt-page', 'map-page', 'service-page', 'ops-page'
];
const componentRoutes = new Set([
  'buttons', 'inputs', 'menu', 'nav-comp', 'table', 'tags', 'feedback', 'progress', 'datepicker', 'upload',
  'tree-comp', 'drawer', 'toast', 'skeleton', 'status-matrix', 'data-cards', 'row-actions', 'charts', 'cascader',
  'advanced-form', 'tab-variants', 'avatar-result', 'empty-state', 'error-page', 'loading-levels', 'page-header',
  'dark', 'i18n', 'a11y', 'whitelabel', 'tech-stack'
]);

function readPage(id) {
  return fs.readFileSync(path.join(pagesDir, id + '.js'), 'utf8');
}

function getEnglishCatalogStats() {
  const catalogs = {};
  const sandbox = {
    window: {
      __AW_I18N__: {
        register(locale, namespace, catalog) {
          if (locale === 'en-US') catalogs[namespace] = catalog;
        }
      }
    }
  };
  const catalogFiles = [path.join(root, 'project/i18n/common.en-US.js')]
    .concat(fs.readdirSync(path.join(root, 'project/i18n/en-US'))
      .filter((name) => name.endsWith('.js'))
      .map((name) => path.join(root, 'project/i18n/en-US', name)));
  for (const file of catalogFiles) {
    vm.runInNewContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
  }
  const common = Object.keys(catalogs.common || {}).length;
  const total = Object.values(catalogs).reduce((sum, catalog) => sum + Object.keys(catalog).length, 0);
  return { common, routes: total - common, total };
}

for (const id of blueprints) {
  const source = readPage(id);
  if (!source.includes('data-component-contract')) {
    errors.push(id + ': missing component contract');
  }
  const contractSection = (source.match(/<div class="subsection" data-component-contract>[\s\S]*?<\/div>\s*<\/div>/) || [''])[0];
  const contract = contractSection.replace(/<div class="blueprint-notes" data-page-dependency>[\s\S]*?<\/div>/g, '');
  for (const match of contract.matchAll(/href="#\/([^"]+)"/g)) {
    if (!componentRoutes.has(match[1])) errors.push(id + ': page dependency mixed into component contract: ' + match[1]);
  }
}

const userPage = readPage('user-mgmt-page');
if (/type="password"/.test(userPage)) errors.push('user-mgmt-page: create form must not request a password');

const pushPage = readPage('push-page');
for (const term of ['已完成', '已撤回', '待执行', '取消推送']) {
  if (pushPage.includes(term)) errors.push('push-page: deprecated status/action term ' + term);
}

for (const id of ['market-page', 'ota-page', 'push-page', 'user-mgmt-page', 'service-page', 'ops-page']) {
  const source = readPage(id);
  if (/class="status-dot (?:online|offline)"/.test(source)) {
    errors.push(id + ': non-connection status must use an is-* semantic modifier');
  }
}

for (const file of pageFiles) {
  const id = file.slice(0, -3);
  const source = readPage(id);
  for (const table of source.matchAll(/<table\b[^>]*class="[^"]*\bdt\b[^"]*"[^>]*>([\s\S]*?)<\/table>/g)) {
    const markup = table[1];
    const header = (markup.match(/<thead>[\s\S]*?<\/thead>/) || [''])[0];
    if (/<th\b[^>]*>[\s\S]*?(?:操作|Actions?)[\s\S]*?<\/th>/i.test(header) &&
        !/<th\b[^>]*class="[^"]*\bcolactions\b/.test(header)) {
      errors.push(file + ': operation header must use colactions');
    }
  }
  for (const button of source.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)) {
    const attrs = button[1];
    const label = button[2].replace(/<[^>]+>/g, '').trim();
    if (/(?:删除|停用|下架|驳回|撤回|解绑|重启|回滚)/.test(label) && !/danger/.test(attrs)) {
      errors.push(file + ': destructive button must use a danger style: ' + label);
    }
  }
  if (/<(?:span|div)\b[^>]*style="[^"]*cursor\s*:\s*pointer/i.test(source)) {
    errors.push(file + ': clickable span/div must use a semantic button or link');
  }
  if (/href="#"/.test(source)) {
    errors.push(file + ': href="#" conflicts with the hash router; use a button or a real route');
  }
  const withoutTabs = source.replace(/<div\b[^>]*class="[^"]*\btabs(?:-card|-route)?\b[^"]*"[^>]*>[\s\S]*?<\/div>/g, '');
  if (/<a\b(?![^>]*\bhref=)[^>]*>/.test(withoutTabs)) {
    errors.push(file + ': action anchors without href must use button elements');
  }
}

if (readPage('map-page').includes('DSN')) errors.push('map-page: device identifier must use SN, not DSN');

const codingReference = fs.readFileSync(path.join(root, 'docs/ai-coding-design-reference.md'), 'utf8');
if (/\bDSN\b/.test(codingReference)) errors.push('ai coding reference: device identifier must use SN, not DSN');

const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
if (!/大数据表格[\s\S]*antd Table 原生 `virtual`/.test(readme)) {
  errors.push('README: large tables must prefer native antd Table virtual support');
}

const rawCodeLiterals = [
  ['api', "<button></button>"],
  ['dark', '<head>'],
  ['responsive', '<ResolutionGuard />'],
  ['i18n', '<lang>']
];
for (const [pageId, literal] of rawCodeLiterals) {
  if (readPage(pageId).includes(literal)) errors.push(pageId + ': code literal must be HTML-escaped: ' + literal);
}

const uploadPage = readPage('upload');
if (!/<label class="upload-drop" data-demo-upload>[\s\S]*<input class="visually-hidden" type="file"[^>]*data-demo-file-input/.test(uploadPage) ||
    !router.includes('function handleDemoFiles') || !router.includes('root.ondrop')) {
  errors.push('upload: primary dropzone must support keyboard file selection and drag/drop');
}

const cascaderPage = readPage('cascader');
if (!/<button[^>]*class="select"[^>]*data-demo-options="cascader-demo-popup"[^>]*aria-controls="cascader-demo-popup"/.test(cascaderPage) ||
    !/<div class="cascader-pop" id="cascader-demo-popup">/.test(cascaderPage) ||
    !router.includes('function setDemoSelectExpanded')) {
  errors.push('cascader: demo trigger must control the popup with native button semantics');
}

const advancedFormPage = readPage('advanced-form');
if ((advancedFormPage.match(/class="[^"]*is-error[^"]*"/g) || []).length !==
    (advancedFormPage.match(/aria-invalid="true"/g) || []).length ||
    (advancedFormPage.match(/aria-describedby="[^"]+-error"/g) || []).length < 2) {
  errors.push('advanced-form: every error input must expose aria-invalid and an error description');
}
if (!/id="af-disabled"[^>]*disabled[\s\S]*?<div class="step"><button type="button" disabled>▲<\/button><button type="button" disabled>▼<\/button>/.test(advancedFormPage)) {
  errors.push('advanced-form: disabled NumberInput must disable both stepper buttons');
}

const workflow = fs.readFileSync(path.join(root, '.github/workflows/pages.yml'), 'utf8');
for (const command of ['check-i18n.js', 'i18n-runtime.test.js', 'i18n-contract.test.js', 'check-consistency.js', 'check-evidence.js']) {
  if (!workflow.includes(command)) errors.push('pages workflow: missing validation command ' + command);
}

const tablePage = readPage('table');
if (tablePage.includes('共 12,486 项') && tablePage.includes('20 条/页') && !tablePage.includes('>625<')) {
  errors.push('table: pagination total/page-size must resolve to page 625');
}

const datepickerPage = readPage('datepicker');
if (!datepickerPage.includes('data-calendar-month="2026-04"') ||
    !router.includes('function renderCalendarMonth') ||
    !router.includes("button.setAttribute('data-date', dateValue)")) {
  errors.push('datepicker: month navigation must rebuild date buttons for the displayed month');
}

const rowActionsPage = readPage('row-actions');
if (!rowActionsPage.includes('操作 ≥ 4 时') || !rowActionsPage.includes('前 3 个动作明示')) {
  errors.push('row-actions: collapse threshold must be 3 visible actions, collapse at 4');
}

const configProviderPage = readPage('config-provider');
for (const forbidden of ['notification.config(', 'theme.darkAlgorithm', 'scrollToFirstError: true']) {
  if (configProviderPage.includes(forbidden)) errors.push('config-provider: obsolete or misplaced API remains: ' + forbidden);
}
if (!configProviderPage.includes('&lt;App notification=')) {
  errors.push('config-provider: root example must provide antd App context for feedback APIs');
}
if (!configProviderPage.includes('tmsThemeToken[themeMode]')) {
  errors.push('config-provider: AntD Light/Dark tokens must switch with the runtime theme');
}
if (!configProviderPage.includes('tmsComponentOverrides[themeMode]')) {
  errors.push('config-provider: component tokens must switch with the runtime theme');
}
for (const typeName of ['Locale', 'FC', 'ReactNode']) {
  if (!new RegExp('import type \\{[^}]*\\b' + typeName + '\\b[^}]*\\}').test(configProviderPage)) {
    errors.push('config-provider: complete example is missing type import ' + typeName);
  }
}

const techStackPage = readPage('tech-stack');
if (/1k 行|@tanstack\/react-table \+ react-virtual/.test(techStackPage)) {
  errors.push('tech-stack: table virtualization must prefer native antd virtual and measured thresholds');
}
if (/@tanstack\/react-table|@tanstack\/react-virtual/.test(readPage('ecosystem'))) {
  errors.push('ecosystem: obsolete TanStack table engine guidance remains');
}

const overviewPage = readPage('overview');
if (/不可逆[\s\S]*Popconfirm[\s\S]*或[\s\S]*Modal\.confirm/.test(overviewPage)) {
  errors.push('overview: irreversible confirmation rule must not present Popconfirm and Modal as interchangeable');
}

const detailPage = readPage('detail-page');
if (detailPage.includes('class="crumbs"') && detailPage.includes('detail-page:text.004')) {
  errors.push('detail-page: do not show an equivalent Back button together with breadcrumbs');
}

const apiPage = readPage('api');
for (const semanticProp of ['&lt;code&gt;classNames&lt;/code&gt;', '&lt;code&gt;styles&lt;/code&gt;']) {
  if (!apiPage.replace(/<code>/g, '&lt;code&gt;').replace(/<\/code>/g, '&lt;/code&gt;').includes(semanticProp)) {
    errors.push('api: AntD v6 Semantic DOM prop missing: ' + semanticProp);
  }
}

const marketPage = readPage('market-page');
const marketCountHeader = Array.from(marketPage.matchAll(/<th\b([^>]*)>([\s\S]*?)<\/th>/g))
  .find((match) => match[2].includes('market-page:text.035'));
if (!marketCountHeader || !/\bcolnum\b/.test(marketCountHeader[1])) {
  errors.push('market-page: numeric count columns must use colnum alignment');
}

for (const id of ['detail-page', 'list-page', 'tree-list', 'nav-comp']) {
  const source = readPage(id);
  for (const crumbs of source.matchAll(/<div\b[^>]*class="[^"]*\bcrumbs\b[^"]*"[^>]*>([\s\S]*?)<\/div>/g)) {
    if (/<a\b(?![^>]*\bhref=)[^>]*>/.test(crumbs[1])) {
      errors.push(id + ': breadcrumb anchors must have a real href or use span');
    }
  }
}

if (router.includes("root.querySelectorAll('.select').forEach")) {
  errors.push('router: static select mocks must not claim combobox semantics without option data');
}
if (!router.includes(".select[data-demo-options]")) {
  errors.push('router: interactive select semantics must require explicit option data');
}
if (/slice\(2,\s*7\)/.test(router)) {
  errors.push('router: captcha generator must produce the documented six-character value');
}
if (!router.includes("button.getAttribute('aria-disabled') !== 'true'")) {
  errors.push('router: aria-disabled demo actions must not remain clickable');
}

for (const [id, totalPages] of [['list-page', 625], ['table', 625], ['ota-page', 2], ['push-page', 65]]) {
  if (!readPage(id).includes('data-total-pages="' + totalPages + '"')) {
    errors.push(id + ': pager must declare the total page count derived from the documented default page size');
  }
}
const userPagerBlock = (readPage('user-mgmt-page').match(/<div class="lp-pager">[\s\S]*?user-mgmt-page:text\.069[\s\S]*?<\/div>/) || [''])[0];
if (/<div class="pager"/.test(userPagerBlock)) {
  errors.push('user-mgmt-page: one-page result sets must hide pagination controls');
}
if (!/<button\b[^>]*disabled/.test(readPage('data-cards'))) errors.push('data-cards: unavailable actions must use native disabled buttons');
for (const option of readPage('wizard-page').matchAll(/<label\b([^>]*)>([\s\S]*?)<\/label>/g)) {
  if (/\bcheck radio\b/.test(option[1]) && /type="checkbox"/.test(option[2])) {
    errors.push('wizard-page: mutually exclusive scheduling choices must use radio inputs');
  }
}
for (const requiredRuntimeContract of [
  'table input[type="checkbox"]',
  "label:not([for])",
  "tCommon('increaseValue'",
  "tCommon('previousMonth'"
]) {
  if (!router.includes(requiredRuntimeContract)) {
    errors.push('router: missing shared accessibility enhancement ' + requiredRuntimeContract);
  }
}
if (/<button\b[^>]*class="[^"]*\bpage\b[^"]*"[^>]*>…<\/button>/.test(tablePage)) {
  errors.push('table: pagination ellipses must not be focusable buttons');
}
if (/\sonclick=/.test(router)) {
  errors.push('router: inline event handlers are forbidden');
}
for (const tabsContract of ['aria-controls', "setAttribute('role', 'tabpanel')", 'data-demo-query']) {
  if (!router.includes(tabsContract) && !readPage('tab-variants').includes(tabsContract)) {
    errors.push('tabs: missing interactive contract ' + tabsContract);
  }
}
for (const pressedContract of ["setAttribute('aria-pressed', 'false')", "setAttribute('aria-pressed', 'true')"]) {
  if (!router.includes(pressedContract)) errors.push('router: selection buttons must expose ' + pressedContract);
}
const toastPage = readPage('toast');
if (!/role="tooltip"/.test(toastPage) || !/aria-describedby="checksum-tip"/.test(toastPage)) {
  errors.push('toast: tooltip trigger and tooltip must expose their relationship');
}
if (!/aria-controls="fault-popover"/.test(toastPage) || !/role="dialog"/.test(toastPage)) {
  errors.push('toast: popover disclosure must expose its controlled dialog');
}
if (/≥\s*10,000[^<]*游标分页/.test(tablePage)) {
  errors.push('table: pagination strategy must not conflict with the 12,486-item page-number example');
}
const otaSizeHeader = Array.from(readPage('ota-page').matchAll(/<th\b([^>]*)>([\s\S]*?)<\/th>/g))
  .find((match) => match[2].includes('ota-page:text.033'));
if (!otaSizeHeader || !/\bcolnum\b/.test(otaSizeHeader[1])) {
  errors.push('ota-page: file-size column must use numeric alignment');
}
const darkCatalog = fs.readFileSync(path.join(root, 'project/i18n/en-US/dark.js'), 'utf8');
if (!/"t071":\s*"does"[\s\S]*?"t072":\s*" not use darkAlgorithm/.test(darkCatalog)) {
  errors.push('dark: English copy must preserve the decision not to use darkAlgorithm');
}
const a11yPage = readPage('a11y');
const extrasCss = fs.readFileSync(path.join(root, 'project/styles/components-extras.css'), 'utf8');
if (!a11yPage.includes('<code>:focus-visible</code>') || !/:focus-visible[\s\S]*outline:\s*2px solid var\(--aw-primary\)/.test(extrasCss)) {
  errors.push('a11y: documented focus-visible ring must be implemented in shared CSS');
}
if (/focus ring 永远可见/.test(a11yPage + overviewPage) || /focus ring is always visible/i.test(fs.readFileSync(path.join(root, 'project/i18n/en-US/a11y.js'), 'utf8'))) {
  errors.push('a11y: focus-ring copy must distinguish keyboard focus from pointer clicks');
}

const componentsCss = fs.readFileSync(path.join(root, 'project/styles/components.css'), 'utf8');
if (!/\.btn-link:disabled[\s\S]*?background:\s*transparent/.test(componentsCss)) {
  errors.push('components.css: disabled link buttons must retain the link appearance');
}

const switchOnRuleIndex = componentsCss.indexOf('.switch.is-on {');
const switchFocusRuleIndex = componentsCss.indexOf('.switch:focus-visible {');
if (switchOnRuleIndex < 0 || switchFocusRuleIndex < switchOnRuleIndex) {
  errors.push('switch: focus-visible styling must follow the active-state shadow reset');
}

const feedbackPage = readPage('feedback');
if (feedbackPage.includes('<div class="tab is-active">') &&
    (!router.includes('function getTabItems') || !router.includes("item.matches('a, [data-demo-tab]')") || router.includes("item.matches('a, .tab')"))) {
  errors.push('tabs: visual-only tab rows must not receive interactive tab semantics without real panels');
}

const formPageRule = componentsCss.match(/\.formpage-mock\s*\{([^}]*)\}/);
const formBodyRule = componentsCss.match(/\.formpage-mock \.body\s*\{([^}]*)\}/);
const formFootRule = componentsCss.match(/\.formpage-mock \.foot\s*\{([^}]*)\}/);
if (!formPageRule || !/grid-template-rows:\s*auto minmax\(0, 1fr\) auto/.test(formPageRule[1]) ||
    !formBodyRule || !/overflow-y:\s*auto/.test(formBodyRule[1]) ||
    !formFootRule || /position:\s*sticky/.test(formFootRule[1])) {
  errors.push('form-page: the body must own scrolling while the action footer stays outside the scroll region');
}

for (const safeAreaInset of ['top', 'right', 'bottom', 'left']) {
  if (!componentsCss.includes('env(safe-area-inset-' + safeAreaInset + ')')) {
    errors.push('drawer: mobile chrome is missing safe-area-inset-' + safeAreaInset);
  }
}
const drawerInteractionTable = (readPage('drawer').match(/drawer:text\.080[\s\S]*?<\/table>/) || [''])[0];
if (!/class="surface" style="padding:0;overflow:auto"/.test(drawerInteractionTable)) {
  errors.push('drawer: the interaction contract table must remain horizontally scrollable on mobile');
}

const i18nStats = getEnglishCatalogStats();
const i18nTotalLabel = i18nStats.total.toLocaleString('en-US') + ' / ' + i18nStats.total.toLocaleString('en-US');
const i18nPage = readPage('i18n');
if ((i18nPage.match(new RegExp(i18nTotalLabel.replace(',', '\\,'), 'g')) || []).length !== 2) {
  errors.push('i18n: coverage cards must match the current ' + i18nStats.total + '-key catalog total');
}

const uploadProCss = fs.readFileSync(path.join(root, 'project/styles/upload-pro.css'), 'utf8');
if (!/\.upload-item \.upload-file-actions,\s*\.upload-item \.actions\s*\{[^}]*grid-column:\s*2/.test(uploadProCss)) {
  errors.push('upload: mobile layout must keep both completed and in-progress actions in the metadata column');
}

const treePage = readPage('tree-comp');
const treeProCss = fs.readFileSync(path.join(root, 'project/styles/tree-pro.css'), 'utf8');
for (const treeRuntimeContract of [
  'function syncTreeVisibility',
  'function isTreeNodeExpandable',
  'function updateTreeAncestors',
  "tree.hasAttribute('data-check-strictly')"
]) {
  if (!router.includes(treeRuntimeContract)) errors.push('tree: missing runtime contract ' + treeRuntimeContract);
}
if (!treePage.includes('class="body" data-check-strictly')) {
  errors.push('tree: checkStrictly example must declare independent check behavior');
}
if (!/tree-comp:text\.055[\s\S]*?class="body" data-check-on-select/.test(treePage) ||
    !router.includes('function activateTreeNode') || (router.match(/activateTreeNode\(treeNode\)/g) || []).length < 2) {
  errors.push('tree: checkOnSelect example must toggle checks when its rows are activated');
}
if ((treePage.match(/data-tree-expandable/g) || []).length < 6) {
  errors.push('tree: collapsed or lazy branches must preserve explicit expandability metadata');
}
if (!/\.tnode\[hidden\]\s*\{\s*display:\s*none/.test(treeProCss)) {
  errors.push('tree: collapsed descendants must be removed from visual layout');
}
if (!componentsCss.includes('.tnode.tree-terminal:not(.loading):not(.err) .caret')) {
  errors.push('tree: inferred terminal nodes must not expose an expandable caret');
}
if (!/<button[^>]*class="retry-link"[^>]*data-demo-tree-retry/.test(treePage) ||
    !router.includes("target.closest('[data-demo-tree-retry]')")) {
  errors.push('tree: lazy-load retry must be a button with a dedicated handler');
}

const routeBlock = router.match(/var ROUTES = \[([\s\S]*?)\];/);
const routeIds = new Set(routeBlock ? Array.from(routeBlock[1].matchAll(/\['([^']+)',/g), (match) => match[1]) : []);
for (const file of pageFiles) {
  const source = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  for (const match of source.matchAll(/href="#\/([^"]+)"/g)) {
    if (!routeIds.has(match[1])) errors.push(file + ': broken route link #/' + match[1]);
  }
}

for (const id of routeIds) {
  if (!pageIds.has(id)) errors.push('router: route has no page fragment ' + id);
}
for (const id of pageIds) {
  if (!routeIds.has(id)) errors.push('pages: fragment has no route ' + id);
}

const projectFiles = [];
for (const dir of ['project/pages', 'project/styles']) {
  for (const name of fs.readdirSync(path.join(root, dir))) {
    const file = path.join(root, dir, name);
    if (fs.statSync(file).isFile()) projectFiles.push(file);
  }
}
for (const file of projectFiles) {
  const source = fs.readFileSync(file, 'utf8');
  if (/uitmss3\.eu\.aw-iot\.com/.test(source)) errors.push(path.relative(root, file) + ': runtime logo CDN remains');
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('component/content consistency checks passed');
