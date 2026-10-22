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

if (contract.schemaVersion !== 1 || contract.contractVersion !== '2026-10-21' ||
    contract.sourceRepository !== 'design-system' ||
    contract.decisionRecord !== 'docs/decisions/specs/2026-10-21-aw-table.md') {
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
    !same(contract.i18n?.requiredAllLocaleKeys, ['common.scrollableTable', 'common.dangerZone', 'common.moreFor', 'common.actionProcessing']) ||
    !same(contract.i18n?.defaultValueLiteralRequiredLocales, ['zh_CN', 'en'])) {
  errors.push('i18n: expected six locales, shared a11y/danger keys, and zh_CN/en defaultValue literal catalogs');
}
if (contract.dateTime?.transport !== 'RFC3339-or-ISO-8601-instant' ||
    contract.dateTime?.displayApi !== 'Intl.DateTimeFormat' ||
    !same(contract.dateTime?.timeZonePriority, ['user-or-tenant-iana', 'runtime-resolved-iana', 'UTC']) ||
    contract.dateTime?.fixedOffsetAsZoneAllowed !== false) {
  errors.push('dateTime: expected instant transport, Intl display, IANA priority, and no fixed-offset zones');
}
if (!same(contract.visualPresentation, {
  table: {
    defaultAlign: 'left', numberAlign: 'left', dateTimeAlign: 'left', actionsAlign: 'left',
    amountAlign: 'right', cellPaddingInline: 16, numericFontVariant: 'tabular-nums'
  },
  controls: {
    buttonWhiteSpace: 'nowrap', buttonFlexShrink: 0,
    singleSelectValueOverflow: 'ellipsis', switchHandleAlignment: 'center'
  },
  icons: {
    documentationSvgViewBox: [0, 0, 24, 24], documentationSvgStrokeWidth: 1.5,
    consumerSource: 'antd-exports-or-reviewed-local-svg'
  },
  staticStatusMatrixAnimation: false, decorativeTreeNodeIcons: false,
  preserveLoadingAndInteractiveIndicators: true
})) {
  errors.push('visualPresentation: approved OpenDesign table, control, icon, or decoration policy drifted');
}
if (contract.rowActions.table.visiblePrimaryCount !== 1 ||
    contract.rowActions.table.maxVisibleCount !== 3 ||
    contract.rowActions.table.visibleEntryLimit !== 3 ||
    contract.rowActions.table.moreCountsAsEntry !== true ||
    contract.rowActions.table.overflowInlineLimit !== 2 ||
    contract.rowActions.table.collapseFrom !== 4 ||
    contract.rowActions.table.inlinePresentation !== 'text-only' ||
    contract.rowActions.table.menuPresentation !== 'text-only' ||
    contract.rowActions.table.minimumVisibleCount !== 1 ||
    contract.rowActions.table.collapseOnlyFor !== 'count-danger-or-insufficient-width' ||
    contract.rowActions.compactCard.maxVisibleCount !== 2 ||
    contract.rowActions.compactCard.collapseFrom !== 3 ||
    contract.rowActions.toolbar.maxVisibleCount !== 3 ||
    !same(contract.rowActions.placement, ['primary', 'secondary', 'menu']) ||
    contract.rowActions.responsive.structuralBreakpoint !== 'md' ||
    !contract.rowActions.singleSafeActionInline || contract.rowActions.dangerInlineDefault ||
    !same(contract.rowActions.dangerInlineExceptions, ['group-membership-removal']) ||
    contract.rowActions.confirmation !== 'single-modal-independent-of-placement' ||
    !contract.rowActions.menuKeyboardFocus || !contract.rowActions.pendingPreventsRepeat ||
    !contract.rowActions.dangerLast || contract.rowActions.dangerConfirmationDefaultFocus !== 'cancel') {
  errors.push('rowActions: normal max 3, collapse from 4, responsive fit, safe danger placement and one confirmation required');
}
if (!contract.decisionRecords?.includes('docs/decisions/specs/2026-10-21-aw-table.md') ||
    contract.awTable?.name !== 'AWTable' || contract.awTable.engine !== 'antd-native-table' ||
    contract.awTable.actions.normalInlineLimit !== 3 || contract.awTable.actions.collapseFrom !== 4 ||
    contract.awTable.actions.overflowInlineLimit !== 2 ||
    contract.awTable.actions.visibleEntryLimit !== 3 ||
    contract.awTable.actions.moreCountsAsEntry !== true || contract.awTable.actions.businessIcons !== false ||
    !same(contract.awTable.actions.exceptions, ['danger', 'insufficient-container-width']) ||
    contract.awTable.layout.cellPaddingInline !== 16 || contract.awTable.layout.selectionWidth !== 40 ||
    !same(contract.awTable.layout.densityMinRowHeights, [32, 40, 48]) ||
    contract.awTable.query.event !== 'onQueryChange' || !contract.awTable.query.oneCommitPerInteraction ||
    contract.awTable.query.remoteDataResliced !== false ||
    contract.awTable.standaloneRefreshControl !== false ||
    contract.awTable.composition.includes('column-settings') ||
    contract.awTable.query.search !== 'always-request-once-with-validated-draft' ||
    contract.awTable.query.unchangedSearch !== 'reload-current-page' ||
    contract.awTable.selection.defaultSelectAll !== 'current-page' ||
    !fs.existsSync(path.join(root, contract.awTable.specification))) {
  errors.push('AWTable: unified component, layout, query, and action contract drifted');
}
if (!same(contract.awTable?.columnSettings, {
  enabled: 'opt-in-visibility-only',
  api: ['schemaVersion', 'scopeKey'],
  entry: 'results-toolbar-right',
  trigger: 'icon-button-with-tooltip',
  triggerSize: 32,
  triggerIcon: 'ControlOutlined',
  triggerLabel: 'localized-title',
  tooltipTriggers: ['hover', 'focus'],
  tooltipWhileOpen: false,
  triggerOpenState: 'primary-background-and-text',
  groupedWith: 'view-switch',
  headerWidthReservation: false,
  standaloneToolbar: false,
  addsHeaderRow: false,
  requiredColumns: ['first-identity-or-first-business', 'actions'],
  identityHideableDefault: false,
  columnOverride: 'hideable',
  defaultVisibility: 'all-columns',
  commit: 'apply-draft-once',
  cancel: 'discard-draft-on-cancel-escape-outside',
  reset: 'all-columns-in-draft-until-apply',
  queryEffect: 'none',
  storage: 'local',
  storagePayload: ['schemaVersion', 'hiddenIds'],
  storageScope: ['application', 'user', 'tenant', 'tableId', 'schemaVersion'],
  newColumns: 'visible',
  legacyOtaCache: 'ignored',
  contextChange: 'close-and-discard-draft-preserve-same-identity-preferences',
  dragReorder: 'deferred',
  resize: 'deferred'
}) || !same(contract.awTable?.paginationLayout, {
  total: 'left',
  controls: 'right',
  narrow: 'wrap-without-clipping',
  tableAndCard: 'shared-presentation-single-event-owner'
})) {
  errors.push('AWTable: right-toolbar icon visibility, protected columns, isolated draft preferences and shared pagination required');
}
if (contract.awTable?.filters?.name !== 'AWTableFilters' || !contract.awTable.filters.standalone ||
    contract.awTable.filters.referencePattern !== 'resource-package-panel' ||
    !same(contract.awTable.filters.structure, ['primary-fields', 'advanced-fields', 'divider', 'applied-count-left-expand-reset-submit-right']) ||
    contract.awTable.filters.visibleTitle !== false ||
    contract.awTable.filters.accessibleName !== 'localized-title' ||
    contract.awTable.filters.activeCountPlacement !== 'footer-left' ||
    contract.awTable.filters.actionsPlacement !== 'footer-right' ||
    !same(contract.awTable.filters.actionOrder, ['expand', 'reset', 'submit']) ||
    contract.awTable.filters.narrowFooter !== 'count-left-actions-wrap-right-reset-submit-together' ||
    contract.awTable.filters.zeroCountVisible !== true ||
    contract.awTable.filters.panelPadding !== 16 ||
    contract.awTable.filters.defaultSubmitMode !== 'explicit' ||
    contract.awTable.filters.activeCountSource !== 'normalized-applied' ||
    contract.awTable.filters.rangeCountsAs !== 1 || !contract.awTable.filters.zeroAndFalseAreValues ||
    !contract.awTable.filters.collapsePreservesDraftAndApplied || !contract.awTable.filters.submitIncludesCollapsedFields ||
    contract.awTable.filters.collapseEmitsQuery !== false || contract.awTable.filters.externalContextReset !== false ||
    contract.awTable.filters.businessIcons !== false) {
  errors.push('AWTableFilters: resource-panel layout, applied count, hidden values and explicit submission required');
}
if (contract.awTable?.interactionSpecification !== 'docs/components/aw-table-interactions.md' ||
    contract.awTable?.consumerReuseEvidence !== 'docs/decisions/audits/2026-10-21-awtable-consumer-reuse.md' ||
    !fs.existsSync(path.join(root, contract.awTable.interactionSpecification)) ||
    !fs.existsSync(path.join(root, contract.awTable.consumerReuseEvidence)) ||
    contract.awTable.query.coordinator !== 'one-synchronous-admission-and-request-owner' ||
    contract.awTable.query.resetAtDefaultQuery !== 'no-read-clear-selection-and-draft' ||
    !same(contract.awTable.request?.gate, ['ready', 'waiting', 'blocked']) ||
    contract.awTable.request.unreadyScopeReads !== false ||
    contract.awTable.request.refreshPresentation !== 'in-table-loading-without-visible-status-row' ||
    contract.awTable.request.refreshAnnouncement !== 'screen-reader-only' ||
    contract.awTable.request.preserveResultLayoutWhilePending !== true ||
    contract.awTable.request.refreshErrorPresentation !== 'persistent-stale-result-warning-and-retry' ||
    !same(contract.awTable.request.staleResultIsolation, ['success', 'error', 'finally']) ||
    contract.awTable.request.mutationInvalidation !== 'coalesce-one-read-in-origin-context' ||
    contract.awTable.request.writeAutoRetry !== false ||
    contract.awTable.selection.batchSnapshot !== 'freeze-at-confirmation-or-direct-trigger' ||
    contract.awTable.selection.unknownOutcome !== 'verify-before-retry' ||
    contract.awTable.accessibility.scrollFocusWhen !== 'actual-overflow') {
  errors.push('AWTable: documented reuse, request ownership, context isolation, and interaction boundaries required');
}
if (!same(contract.pageHeader.backNavigation, {
  presentation: 'arrow-left-and-text',
  requiredFor: ['nested-detail', 'form', 'immersive-flow'],
  hiddenFor: ['top-level-list', 'top-level-dashboard'],
  detailBreadcrumbsAllowed: true,
  formBreadcrumbsAllowed: false,
  immersiveBreadcrumbsAllowed: false,
  targetPriority: ['explicit-target', 'validated-in-app-source', 'business-parent'],
  externalHistoryFallbackAllowed: false,
  preserveListState: true,
  preserveUnsavedChangesGuard: true,
  placement: 'content',
  detailPlacement: 'before-title-same-row',
  outsideHeading: true,
  visibleWhenSticky: true,
  visibleWhenMobile: true,
  visibleDuring: ['loading', 'empty', 'error', 'forbidden']
}) || contract.pageHeader.freeTextSubtitle || !contract.pageHeader.keyFieldsOnly ||
    contract.pageHeader.maxPrimaryActions !== 1 || contract.pageHeader.dangerActionsAllowed ||
    !same(contract.pageHeader.dangerActionsPlacement, ['separated-overflow-menu', 'danger-zone']) ||
    contract.pageHeader.collapseActionsFrom !== 4 ||
    !same(contract.pageHeader.longPageSticky, ['detail', 'form', 'dashboard']) ||
    contract.pageHeader.listPageSticky || contract.pageHeader.compactAfterScrollPx !== 60) {
  errors.push('pageHeader: back navigation/subtitle/danger/sticky contract drifted');
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
