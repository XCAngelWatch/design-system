const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const contractPath = path.join(root, 'contracts/tms-web-ui.json');
const contract = JSON.parse(fs.readFileSync(contractPath, 'utf8'));
const tokenCss = fs.readFileSync(path.join(root, contract.tokens.sourceFile), 'utf8');
const responsivePage = fs.readFileSync(path.join(root, 'project/pages/responsive.js'), 'utf8');
const errors = [];

function same(actual, expected) {
  return JSON.stringify(actual) === JSON.stringify(expected);
}

function tokenMap(body) {
  return Object.fromEntries(Array.from(body.matchAll(/(--aw-[a-z0-9-]+)\s*:\s*([^;]+);/gi), (match) => [match[1], match[2].trim()]));
}

const lightBlock = (tokenCss.match(/:root,\s*\[data-theme="light"\]\s*\{([\s\S]*?)\}/) || [null, ''])[1];
const darkBlock = (tokenCss.match(/\[data-theme="dark"\]\s*\{([\s\S]*?)\}/) || [null, ''])[1];
const light = tokenMap(lightBlock);
const dark = tokenMap(darkBlock);

if (contract.schemaVersion !== 1 || contract.contractVersion !== '2026-08-14' ||
    contract.sourceRepository !== 'design-system' ||
    contract.decisionRecord !== 'docs/decisions/specs/2026-08-14-responsive-consumer-contract.md') {
  errors.push('contract: unexpected schema or decision version');
}
if (contract.consumerRepository !== 'tms2.5-web-ui' ||
    contract.consumerCopyPath !== 'docs/design-system/source-contract.json') {
  errors.push('contract: consumer repository or copy path drifted');
}

const requiredTokens = [
  '--aw-primary', '--aw-primary-text', '--aw-primary-solid', '--aw-primary-solid-hover',
  '--aw-primary-solid-active', '--aw-primary-hover', '--aw-primary-active', '--aw-primary-bg',
  '--aw-primary-bg-hover', '--aw-primary-border', '--aw-success', '--aw-success-solid', '--aw-warning',
  '--aw-danger', '--aw-danger-hover', '--aw-danger-solid', '--aw-danger-solid-hover', '--aw-info',
  '--aw-text-1', '--aw-text-2', '--aw-text-3', '--aw-text-4', '--aw-text-disabled',
  '--aw-text-on-brand', '--aw-border-1', '--aw-border-2', '--aw-border-3',
  '--aw-fill-1', '--aw-fill-2', '--aw-fill-3', '--aw-fill-4', '--aw-switch-handle', '--aw-bg',
  '--aw-bg-page', '--aw-bg-elevated'
];
if (contract.tokens.sourceFile !== 'project/styles/tokens.css' || contract.tokens.prefix !== '--aw-' ||
    !same(contract.tokens.required, requiredTokens) || !contract.tokens.consumerExtensions?.allowed ||
    !contract.tokens.consumerExtensions.rule.includes('must not redefine source token names')) {
  errors.push('tokens: source, required list, prefix, or consumer-extension policy drifted');
}

for (const name of requiredTokens) {
  if (!(name in light)) errors.push('tokens.light: missing ' + name);
  if (!(name in dark) && !(name in light)) errors.push('tokens.dark: missing or uninherited ' + name);
}

for (const [mode, expected] of Object.entries(contract.tokens.coreValues)) {
  const actual = mode === 'dark' ? { ...light, ...dark } : light;
  for (const [name, value] of Object.entries(expected)) {
    if (actual[name] !== value) errors.push('tokens.' + mode + ': ' + name + ' expected ' + value + ', got ' + actual[name]);
  }
}

if (!same(contract.tokens.antdAliasMappings, {
  colorFill: '--aw-fill-3',
  colorFillSecondary: '--aw-fill-2',
  colorFillTertiary: '--aw-fill-1',
  colorFillQuaternary: '--aw-fill-4'
})) {
  errors.push('tokens: Ant Design fill aliases must follow strongest-to-weakest intensity');
}
if (!same(contract.tokens.antdComponentMappings, {
  'Button.colorPrimary': '--aw-primary-solid',
  'Button.colorPrimaryHover': '--aw-primary-solid-hover',
  'Button.colorPrimaryActive': '--aw-primary-solid-active',
  'Button.colorError': '--aw-danger-solid',
  'Button.colorErrorHover': '--aw-danger-solid-hover'
})) {
  errors.push('tokens: Ant Design solid Button colors must use accessible solid-surface tokens');
}

const canonicalBreakpoints = { xs: 480, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1600 };
if (!same(contract.breakpoints.canonical, canonicalBreakpoints)) {
  errors.push('breakpoints: canonical values must match Ant Design xs/sm/md/lg/xl/xxl');
}
const qaTargetWidths = [390, 480, 576, 768, 1024, 1280, 1366, 1440, 1920];
if (!same(contract.breakpoints.qaTargetWidths, qaTargetWidths)) errors.push('breakpoints: QA target widths drifted');
if (!contract.breakpoints.narrowScreen.supported || contract.breakpoints.narrowScreen.resolutionGuard) {
  errors.push('breakpoints: narrow screens must be supported without ResolutionGuard');
}
if (contract.breakpoints.strategy !== 'desktop-first-with-narrow-screen-support' ||
    contract.breakpoints.narrowScreen.navigation !== 'mobile-tab-bar-below-md' ||
    contract.breakpoints.narrowScreen.table !== 'preserve-primary-columns-and-use-horizontal-scroll') {
  errors.push('breakpoints: desktop-first narrow-screen behavior drifted');
}
for (const width of Object.values(canonicalBreakpoints).filter(Boolean)) {
  if (!responsivePage.includes(width + 'px')) errors.push('responsive page: missing canonical width ' + width + 'px');
}
for (const forbidden of ['<ResolutionGuard', '不支持手机', '请使用桌面浏览器']) {
  if (responsivePage.includes(forbidden)) errors.push('responsive page: obsolete narrow-screen guard remains: ' + forbidden);
}
if (contract.density.smallControlHeight !== 24 || contract.density.compactControlHeight !== 28 ||
    contract.density.defaultControlHeight !== 32 || contract.density.largeControlHeight !== 40 ||
    !contract.density.compactRule.includes('must not be implemented by Ant Design compactAlgorithm')) {
  errors.push('density: expected small/compact/default/large = 24/28/32/40');
}
if (contract.pagination.defaultPageSize !== 20 ||
    !same(contract.pagination.pageSizeOptions, [20, 50, 100, 200])) {
  errors.push('pagination: expected default 20 and options [20,50,100,200]');
}
if (!same(contract.i18n?.locales, ['zh_CN', 'en', 'es', 'pt', 'fr', 'ru']) ||
    !same(contract.i18n?.requiredAllLocaleKeys, ['common.scrollableTable', 'common.dangerZone']) ||
    !same(contract.i18n?.defaultValueLiteralRequiredLocales, ['zh_CN', 'en'])) {
  errors.push('i18n: expected six locales, shared a11y/danger keys, and zh_CN/en defaultValue literal catalogs');
}
if (contract.dateTime?.transport !== 'RFC3339-or-ISO-8601-instant' ||
    contract.dateTime?.displayApi !== 'Intl.DateTimeFormat' ||
    !same(contract.dateTime?.timeZonePriority, ['user-or-tenant-iana', 'runtime-resolved-iana', 'UTC']) ||
    contract.dateTime?.fixedOffsetAsZoneAllowed !== false) {
  errors.push('dateTime: expected instant transport, Intl display, IANA priority, and no fixed-offset zones');
}
if (contract.rowActions.table.visiblePrimaryCount !== 1 ||
    !contract.rowActions.table.collapseSecondaryActions ||
    contract.rowActions.compactCard.maxVisibleCount !== 3 ||
    contract.rowActions.compactCard.collapseFrom !== 4 || !contract.rowActions.dangerLast ||
    contract.rowActions.dangerConfirmationDefaultFocus !== 'cancel') {
  errors.push('rowActions: expected table 1 primary + more and compact/card max 3, collapse from 4');
}
if (contract.pageHeader.freeTextSubtitle || !contract.pageHeader.keyFieldsOnly ||
    contract.pageHeader.maxPrimaryActions !== 1 || contract.pageHeader.dangerActionsAllowed ||
    contract.pageHeader.collapseActionsFrom !== 4 ||
    !same(contract.pageHeader.longPageSticky, ['detail', 'form', 'dashboard']) ||
    contract.pageHeader.listPageSticky || contract.pageHeader.compactAfterScrollPx !== 60) {
  errors.push('pageHeader: subtitle/danger/sticky contract drifted');
}
if (!same(contract.feedback.providerOrder, ['ConfigProvider', 'App']) ||
    contract.feedback.api !== 'App.useApp()' || contract.feedback.staticApiAllowed ||
    contract.feedback.notification.placement !== 'topRight' ||
    contract.feedback.notification.maxCount !== 3 ||
    contract.feedback.failurePresentation?.initialOrRefreshLoad?.toastOnlyAllowed !== false ||
    !same(contract.feedback.failurePresentation?.initialOrRefreshLoad?.persistentInlineComponents, ['Alert', 'Result']) ||
    contract.feedback.failurePresentation?.initialOrRefreshLoad?.retryRequired !== true ||
    contract.feedback.failurePresentation?.singleOperationOnPresentedContent?.messageAllowed !== true) {
  errors.push('feedback: App context, notification, or persistent load-failure contract drifted');
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Consumer contract valid: ' + path.relative(root, contractPath));
