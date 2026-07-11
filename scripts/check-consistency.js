const fs = require('fs');
const path = require('path');

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

function readPage(id) {
  return fs.readFileSync(path.join(pagesDir, id + '.js'), 'utf8');
}

for (const id of blueprints) {
  if (!readPage(id).includes('data-component-contract')) {
    errors.push(id + ': missing component contract');
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
