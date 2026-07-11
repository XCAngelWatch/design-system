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

const frameManifest = readJson('docs/evidence/figma-frame-manifest.json');
const capabilityManifest = readJson('docs/evidence/angelwatch-business-capabilities.json');
const pageIds = new Set(
  fs.readdirSync(pagesDir)
    .filter((name) => name.endsWith('.js') && name !== '_router.js')
    .map((name) => name.slice(0, -3))
);
const validDispositions = new Set(['adopt', 'adapt', 'exclude', 'pending']);

if (frameManifest) {
  const interfaceTotal = frameManifest.canvases.reduce((sum, item) => sum + item.approvedInterfaceFrames, 0);
  const stateTotal = frameManifest.canvases.reduce((sum, item) => sum + item.stateFrames, 0);
  if (interfaceTotal !== frameManifest.totals.approvedInterfaceFrames || interfaceTotal !== 263) {
    errors.push('figma-frame-manifest: approved interface frame total must remain 263');
  }
  if (stateTotal !== frameManifest.totals.approvedStateFrames || stateTotal !== 54) {
    errors.push('figma-frame-manifest: state frame total must remain 54');
  }
  for (const canvas of frameManifest.canvases) {
    if (!validDispositions.has(canvas.disposition)) errors.push('figma canvas ' + canvas.id + ': invalid disposition');
    for (const route of canvas.mappedRoutes) {
      if (!pageIds.has(route)) errors.push('figma canvas ' + canvas.id + ': unknown route ' + route);
    }
  }
}

if (capabilityManifest) {
  const required = capabilityManifest.requiredContractFields || [];
  const ids = new Set();
  for (const capability of capabilityManifest.capabilities || []) {
    if (ids.has(capability.id)) errors.push('business capability: duplicate id ' + capability.id);
    ids.add(capability.id);
    if (!['adopt', 'adapt'].includes(capability.disposition)) {
      errors.push('business capability ' + capability.id + ': core capability must be adopt or adapt');
    }
    for (const field of required) {
      if (!(field in capability) || (Array.isArray(capability[field]) && capability[field].length === 0)) {
        errors.push('business capability ' + capability.id + ': missing ' + field);
      }
    }
    for (const route of capability.routes || []) {
      if (!pageIds.has(route)) errors.push('business capability ' + capability.id + ': unknown route ' + route);
    }
  }
  for (const candidate of capabilityManifest.legacyCandidates || []) {
    if (!['exclude', 'pending'].includes(candidate.disposition)) {
      errors.push('legacy candidate ' + candidate.id + ': must remain exclude or pending');
    }
    if (candidate.corePageAllowed !== false) {
      errors.push('legacy candidate ' + candidate.id + ': corePageAllowed must be false');
    }
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

for (const name of fs.readdirSync(pagesDir)) {
  if (!name.endsWith('.js')) continue;
  const source = fs.readFileSync(path.join(pagesDir, name), 'utf8');
  for (const [label, pattern] of forbiddenPatterns) {
    if (pattern.test(source)) errors.push('project/pages/' + name + ': forbidden ' + label);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('evidence and legacy-isolation checks passed');
