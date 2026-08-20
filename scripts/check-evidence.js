const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pagesDir = path.join(root, 'project/pages');
const errors = [];

function readJson(relativePath) {
  try {
    return JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));
  } catch (error) {
    errors.push(relativePath + ': ' + error.message);
    return null;
  }
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function arraysEqual(actual, expected) {
  return Array.isArray(actual)
    && actual.length === expected.length
    && actual.every((value, index) => value === expected[index]);
}

function validateStringArray(value, owner, field) {
  if (!Array.isArray(value) || value.length === 0) {
    errors.push(owner + ': ' + field + ' must be a non-empty array');
    return;
  }
  const seen = new Set();
  for (const item of value) {
    if (!isNonEmptyString(item)) errors.push(owner + ': ' + field + ' values must be non-empty strings');
    if (seen.has(item)) errors.push(owner + ': duplicate ' + field + ' value ' + String(item));
    seen.add(item);
  }
}

function validateSource(source, owner, figmaCanvases) {
  const allowedKinds = new Set(['approved-figma', 'legacy-implementation']);
  if (!source || typeof source !== 'object' || Array.isArray(source)) {
    errors.push(owner + ': source must be an object');
    return;
  }
  if (!allowedKinds.has(source.kind)) {
    errors.push(owner + ': unsupported source kind ' + String(source.kind));
  }
  if (!isNonEmptyString(source.locator)) {
    errors.push(owner + ': source locator is required');
  }
  if (/^(?:\.\/)?(?:docs|project|scripts|contracts)\//i.test(source.locator || '')) {
    errors.push(owner + ': repository-derived document cannot be primary evidence: ' + source.locator);
  }
  if (source.kind === 'approved-figma') {
    if (!isNonEmptyString(source.canvasId)) {
      errors.push(owner + ': approved-figma source requires canvasId');
    } else if (!figmaCanvases.has(source.canvasId)) {
      errors.push(owner + ': unknown or excluded Figma canvas ' + source.canvasId);
    }
  }
}

const frameManifest = readJson('docs/evidence/figma-frame-manifest.json');
const capabilityManifest = readJson('docs/evidence/angelwatch-business-capabilities.json');
const pageIds = new Set(
  fs.readdirSync(pagesDir)
    .filter((name) => name.endsWith('.js') && name !== '_router.js')
    .map((name) => name.slice(0, -3))
);
const validDispositions = new Set(['adopt', 'adapt', 'exclude', 'pending']);
const approvedFigmaCanvases = new Set();

if (frameManifest) {
  // These checks protect the integrity and traceability of the checked-in snapshot;
  // they do not certify the external Figma file as a business contract.
  const expectedCanvasIds = [
    'account',
    'cover',
    'device',
    'foundations',
    'home',
    'internal-components',
    'login',
    'map',
    'market',
    'ota',
    'overseas',
    'push',
    'service',
    'statistics',
    'system',
    'temporary'
  ];
  if (frameManifest.schemaVersion !== 1 || frameManifest.manifestKind !== 'canvas-summary') {
    errors.push('figma-frame-manifest: unsupported schema or manifest kind');
  }

  const source = frameManifest.source;
  if (!source || typeof source !== 'object') {
    errors.push('figma-frame-manifest: source metadata is required');
  } else {
    if (!isNonEmptyString(source.fileName)) errors.push('figma-frame-manifest: source fileName is required');
    if (!/^https:\/\/www\.figma\.com\/(?:design|file)\//.test(source.figmaUrl || '')) {
      errors.push('figma-frame-manifest: a direct Figma source URL is required');
    }
    if (!/^\d+[:\-]\d+$/.test(source.sourceNodeId || '')) {
      errors.push('figma-frame-manifest: sourceNodeId is required');
    }
    if (!isNonEmptyString(source.exportedAt) || Number.isNaN(Date.parse(source.exportedAt))) {
      errors.push('figma-frame-manifest: exportedAt must be a valid timestamp');
    }
  }

  const canvases = Array.isArray(frameManifest.canvases) ? frameManifest.canvases : [];
  const canvasIds = new Set();
  let interfaceTotal = 0;
  let stateTotal = 0;
  if (!canvases.length) errors.push('figma-frame-manifest: canvases must not be empty');

  for (const canvas of canvases) {
    if (!isNonEmptyString(canvas.id) || canvasIds.has(canvas.id)) {
      errors.push('figma canvas: missing or duplicate id ' + String(canvas.id));
      continue;
    }
    canvasIds.add(canvas.id);
    if (!validDispositions.has(canvas.disposition)) errors.push('figma canvas ' + canvas.id + ': invalid disposition');
    if (!Number.isInteger(canvas.approvedInterfaceFrames) || canvas.approvedInterfaceFrames < 0) {
      errors.push('figma canvas ' + canvas.id + ': approvedInterfaceFrames must be a non-negative integer');
    } else {
      interfaceTotal += canvas.approvedInterfaceFrames;
    }
    if (!Number.isInteger(canvas.stateFrames) || canvas.stateFrames < 0) {
      errors.push('figma canvas ' + canvas.id + ': stateFrames must be a non-negative integer');
    } else {
      stateTotal += canvas.stateFrames;
    }
    if (!Array.isArray(canvas.mappedRoutes)) {
      errors.push('figma canvas ' + canvas.id + ': mappedRoutes must be an array');
    } else {
      for (const route of canvas.mappedRoutes) {
        if (!pageIds.has(route)) errors.push('figma canvas ' + canvas.id + ': unknown design route ' + route);
      }
    }
    if (!['exclude', 'pending'].includes(canvas.disposition)) approvedFigmaCanvases.add(canvas.id);
  }

  if (!arraysEqual([...canvasIds].sort(), expectedCanvasIds)) {
    errors.push('figma-frame-manifest: canvas snapshot coverage changed without a checker review');
  }

  if (!frameManifest.totals || interfaceTotal !== frameManifest.totals.approvedInterfaceFrames) {
    errors.push('figma-frame-manifest: approved interface total does not match sourced canvas rows');
  }
  if (!frameManifest.totals || stateTotal !== frameManifest.totals.approvedStateFrames) {
    errors.push('figma-frame-manifest: approved state total does not match sourced canvas rows');
  }
}

if (capabilityManifest) {
  const expectedAuthority = {
    businessContract: ['backend-openapi', 'backend-domain-contract'],
    productInformationArchitectureAndWorkflows: ['approved-product-requirements', 'approved-figma'],
    designPresentation: ['design-system-contract'],
    historicalContext: ['legacy-implementation']
  };
  const expectedSnapshotFields = [
    'sources',
    'observedFields',
    'observedStates',
    'observedActions',
    'observedPermissions',
    'interactionPattern',
    'feedbackPattern',
    'designRoutes'
  ];
  const expectedAuthoritativeScope = ['visual-tokens', 'component-interaction', 'accessibility', 'layout'];
  const expectedNonAuthoritativeScope = [
    'business-fields',
    'business-states',
    'permissions',
    'api-contracts',
    'product-information-architecture',
    'product-workflows'
  ];
  const expectedCapabilityIds = [
    'account-permission',
    'alert-remediation',
    'app-distribution',
    'assignment-conflict',
    'device-lifecycle',
    'geofence-and-track',
    'ota-distribution',
    'push-task',
    'remote-control-session'
  ];
  const expectedLegacyIds = [
    'legacy-kiosk-launcher',
    'legacy-mdm',
    'legacy-remote-iframe',
    'legacy-resource-package',
    'legacy-watch-focus'
  ];

  if (capabilityManifest.schemaVersion !== 2 || capabilityManifest.artifactType !== 'sourced-design-snapshot') {
    errors.push('capability snapshot: schemaVersion 2 and sourced-design-snapshot artifactType are required');
  }
  if ('authorityOrder' in capabilityManifest || 'requiredContractFields' in capabilityManifest) {
    errors.push('capability snapshot: global repository authority and self-declared business contract fields are forbidden');
  }
  if (!arraysEqual(capabilityManifest.requiredSnapshotFields, expectedSnapshotFields)) {
    errors.push('capability snapshot: requiredSnapshotFields must match the checker-owned snapshot schema');
  }

  const policy = capabilityManifest.snapshotPolicy || {};
  if (!arraysEqual(policy.authoritativeFor, expectedAuthoritativeScope)) {
    errors.push('capability snapshot: authoritative scope must be limited to visual, interaction, accessibility and layout');
  }
  if (!arraysEqual(policy.notAuthoritativeFor, expectedNonAuthoritativeScope)) {
    errors.push('capability snapshot: non-authoritative business and product scope is incomplete');
  }
  if (!isNonEmptyString(policy.purpose) || !isNonEmptyString(policy.conflictRule)) {
    errors.push('capability snapshot: purpose and conflictRule are required');
  }

  const authority = capabilityManifest.authorityByConcern || {};
  const actualAuthorityKeys = Object.keys(authority).sort();
  const expectedAuthorityKeys = Object.keys(expectedAuthority).sort();
  if (!arraysEqual(actualAuthorityKeys, expectedAuthorityKeys)) {
    errors.push('capability snapshot: authorityByConcern has missing or unexpected concerns');
  }
  for (const [concern, expectedOrder] of Object.entries(expectedAuthority)) {
    if (!arraysEqual(authority[concern], expectedOrder)) {
      errors.push('capability snapshot: invalid authority order for ' + concern);
    }
  }

  const capabilities = Array.isArray(capabilityManifest.capabilities) ? capabilityManifest.capabilities : [];
  const ids = new Set();
  if (!capabilities.length) errors.push('capability snapshot: capabilities must not be empty');
  for (const capability of capabilities) {
    const owner = 'design capability snapshot ' + String(capability.id);
    if (!isNonEmptyString(capability.id) || ids.has(capability.id)) errors.push(owner + ': missing or duplicate id');
    ids.add(capability.id);
    if (!isNonEmptyString(capability.moduleLabel)) errors.push(owner + ': moduleLabel is required');
    if (!['adopt', 'adapt'].includes(capability.referenceDisposition)) {
      errors.push(owner + ': referenceDisposition must be adopt or adapt');
    }
    if (capability.businessContractStatus !== 'requires-backend-verification') {
      errors.push(owner + ': businessContractStatus must require backend verification');
    }
    for (const oldField of ['module', 'disposition', 'fields', 'states', 'actions', 'permissions', 'confirmation', 'feedback', 'routes']) {
      if (oldField in capability) errors.push(owner + ': contract-like field is forbidden: ' + oldField);
    }
    for (const field of expectedSnapshotFields) {
      if (!(field in capability)
        || (Array.isArray(capability[field]) && capability[field].length === 0)
        || (typeof capability[field] === 'string' && !capability[field].trim())) {
        errors.push(owner + ': missing ' + field);
      }
    }
    for (const field of ['observedFields', 'observedStates', 'observedActions', 'observedPermissions', 'designRoutes']) {
      validateStringArray(capability[field], owner, field);
    }
    for (const field of ['interactionPattern', 'feedbackPattern']) {
      if (!isNonEmptyString(capability[field])) errors.push(owner + ': ' + field + ' must be a non-empty string');
    }
    const sources = Array.isArray(capability.sources) ? capability.sources : [];
    for (const source of sources) validateSource(source, owner, approvedFigmaCanvases);
    if (!sources.some((source) => source && source.kind === 'approved-figma')) {
      errors.push(owner + ': at least one approved Figma source is required for a core design snapshot');
    }
    for (const route of capability.designRoutes || []) {
      if (!pageIds.has(route)) errors.push(owner + ': unknown design route ' + route);
    }
  }
  if (!arraysEqual([...ids].sort(), expectedCapabilityIds)) {
    errors.push('capability snapshot: core capability coverage changed without a checker review');
  }

  const legacyIds = new Set();
  const legacyCandidates = Array.isArray(capabilityManifest.legacyCandidates) ? capabilityManifest.legacyCandidates : [];
  for (const candidate of legacyCandidates) {
    const owner = 'legacy reference ' + String(candidate.id);
    if (!isNonEmptyString(candidate.id) || legacyIds.has(candidate.id)) errors.push(owner + ': missing or duplicate id');
    legacyIds.add(candidate.id);
    if (!['exclude', 'pending'].includes(candidate.disposition)) {
      errors.push(owner + ': must remain exclude or pending');
    }
    if (candidate.corePageAllowed !== false) errors.push(owner + ': corePageAllowed must be false');
    if (!isNonEmptyString(candidate.reason)) errors.push(owner + ': reason is required');
    if (!Array.isArray(candidate.sources) || candidate.sources.length === 0) {
      errors.push(owner + ': at least one source is required');
    } else {
      for (const source of candidate.sources) validateSource(source, owner, approvedFigmaCanvases);
    }
  }
  if (!arraysEqual([...legacyIds].sort(), expectedLegacyIds)) {
    errors.push('capability snapshot: legacy isolation coverage changed without a checker review');
  }
}

const authorityBoundaryFiles = {
  'project/pages/ai-reference.js': fs.readFileSync(path.join(root, 'project/pages/ai-reference.js'), 'utf8'),
  'project/i18n/en-US/ai-reference.js': fs.readFileSync(path.join(root, 'project/i18n/en-US/ai-reference.js'), 'utf8'),
  'docs/ai-coding-design-reference.md': fs.readFileSync(path.join(root, 'docs/ai-coding-design-reference.md'), 'utf8')
};
const obsoleteAuthorityClaims = [
  '当前仓库规则最高',
  '权威顺序',
  '机器可读业务契约',
  '机器可读的字段、状态、动作、权限、确认、反馈和路由契约',
  '业务字段和页面族以 Figma 为准',
  '工程落地以当前仓库为准',
  'AI 优先读取结构化契约',
  '业务词汇以 Figma 证据为准',
  '两者由同一 `tokens.json` 生成',
  'Current repository rules come first',
  'Authority order:',
  'Machine-readable fields, states, actions, permissions, confirmations, feedback, and route contracts',
  'AI reads structured contracts first'
];
for (const [relativePath, source] of Object.entries(authorityBoundaryFiles)) {
  for (const obsoleteClaim of obsoleteAuthorityClaims) {
    if (source.includes(obsoleteClaim)) {
      errors.push(relativePath + ': obsolete global-authority or self-contract claim remains: ' + obsoleteClaim);
    }
  }
}

const authorityPage = authorityBoundaryFiles['project/pages/ai-reference.js'];
for (const requiredBoundary of [
  '分域权威',
  '字段、状态、权限与 API 以后端/OpenAPI 为准',
  '信息架构与流程以已批准产品需求/Figma 为准',
  '消费者实现事实以 tms2.5-web-ui 当前源码与测试为准',
  '带来源的设计快照，不是业务契约'
]) {
  if (!authorityPage.includes(requiredBoundary)) {
    errors.push('project/pages/ai-reference.js: missing authority boundary ' + requiredBoundary);
  }
}

const authorityCatalog = authorityBoundaryFiles['project/i18n/en-US/ai-reference.js'];
for (const requiredBoundary of [
  'Authority by concern',
  'Backend/OpenAPI owns fields, states, permissions, and APIs',
  'Approved product requirements/Figma own information architecture and workflows',
  'Current tms2.5-web-ui source and tests own consumer implementation facts',
  'sourced design snapshots, not business contracts'
]) {
  if (!authorityCatalog.includes(requiredBoundary)) {
    errors.push('project/i18n/en-US/ai-reference.js: missing authority boundary ' + requiredBoundary);
  }
}

const codingReference = authorityBoundaryFiles['docs/ai-coding-design-reference.md'];
for (const requiredBoundary of [
  '## 分域权威边界',
  '## 跨模块流程设计快照（实现前核验）',
  '## 模块业务观察（非业务契约）',
  '`tms2.5-web-ui` 当前源码与测试',
  '字段、状态、权限与 API 以后端/OpenAPI 为准',
  '信息架构与流程以已批准产品需求/Figma 为准'
]) {
  if (!codingReference.includes(requiredBoundary)) {
    errors.push('docs/ai-coding-design-reference.md: missing authority boundary ' + requiredBoundary);
  }
}

const forbiddenPatterns = [
  ['legacy Vue component', /<\/?tms-[a-z-]+/i],
  ['Element UI component', /<\/?el-(?:table|form|dialog|input|select)\b/i],
  ['legacy MDM route', /["']\/mdm\//],
  ['legacy resource package route', /["']\/resourcePackage\//],
  ['legacy Watch System route', /["']\/watchSystem\//],
  ['legacy Focus route', /["']\/focus\//],
  ['legacy remote iframe', /xcheng\.gotohttp\.com|gotohttp/],
  ['legacy runtime S3', /uitmss3\.eu\.aw-iot\.com/]
];

for (const relativeDir of ['project/pages', 'project/styles']) {
  const directory = path.join(root, relativeDir);
  for (const name of fs.readdirSync(directory)) {
    if (!/\.(?:js|css)$/.test(name)) continue;
    const source = fs.readFileSync(path.join(directory, name), 'utf8');
    for (const [label, pattern] of forbiddenPatterns) {
      if (pattern.test(source)) errors.push(relativeDir + '/' + name + ': forbidden ' + label);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('sourced design evidence and legacy-isolation checks passed');
