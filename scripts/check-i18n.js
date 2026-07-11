#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'project/pages');
const ROUTER_PATH = path.join(PAGES_DIR, '_router.js');
const I18N_DIR = path.join(ROOT, 'project/i18n');
const RUNTIME_PATH = path.join(I18N_DIR, 'runtime.js');
const COMMON_PATH = path.join(I18N_DIR, 'common.en-US.js');
const LOCALE_DIR = path.join(I18N_DIR, 'en-US');

const I18N_ATTRS = {
  placeholder: 'data-i18n-placeholder',
  title: 'data-i18n-title',
  'aria-label': 'data-i18n-aria-label',
  alt: 'data-i18n-alt',
  value: 'data-i18n-value'
};
const CHINESE = /[\u3400-\u9fff]/;
const SKIP_TAGS = new Set(['code', 'pre', 'script', 'style']);
const VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
  'meta', 'param', 'source', 'track', 'wbr'
]);
const GROUP_KEYS = {
  '导览': 'guide',
  '设计基础': 'foundations',
  '通用组件': 'components',
  '业务模式': 'patterns',
  '页面蓝图': 'blueprints',
  '工程落地': 'implementation'
};

function readFile(file) {
  return fs.readFileSync(file, 'utf8');
}

function parseRoutes() {
  const source = readFile(ROUTER_PATH);
  const match = source.match(/var ROUTES = \[([\s\S]*?)\];/);
  if (!match) {
    throw new Error('Unable to find ROUTES in project/pages/_router.js');
  }

  const routes = [];
  for (const routeMatch of match[1].matchAll(/^\s*\['([^']+)',\s*'([^']+)',\s*'([^']+)'\]/gm)) {
    routes.push({ id: routeMatch[1], label: routeMatch[2], group: routeMatch[3] });
  }
  return { routes, routerSource: source };
}

function usageError(message) {
  console.error(message);
  console.error('usage: node scripts/check-i18n.js [--routes=id1,id2]');
  process.exit(1);
}

function parseArgs(args, routeMap) {
  if (args.length === 0) return null;
  if (args.length !== 1 || !args[0].startsWith('--routes=')) {
    usageError('invalid argument');
  }

  const value = args[0].slice('--routes='.length);
  const ids = value.split(',');
  if (!value || ids.some((id) => id === '')) {
    usageError('empty route list');
  }

  for (const id of ids) {
    if (!routeMap.has(id)) usageError('unknown route: ' + id);
  }
  return [...new Set(ids)];
}

function listPageIds() {
  if (!fs.existsSync(PAGES_DIR)) return new Set();
  return new Set(
    fs.readdirSync(PAGES_DIR)
      .filter((file) => file.endsWith('.js') && file !== '_router.js')
      .map((file) => file.slice(0, -3))
  );
}

function listLocaleIds() {
  if (!fs.existsSync(LOCALE_DIR)) return new Set();
  return new Set(
    fs.readdirSync(LOCALE_DIR)
      .filter((file) => file.endsWith('.js'))
      .map((file) => file.slice(0, -3))
  );
}

function splitNamespacedKey(value) {
  const text = String(value || '');
  const index = text.indexOf(':');
  if (index < 1 || index === text.length - 1) return null;
  return [text.slice(0, index), text.slice(index + 1)];
}

function decodeAttributeValue(value) {
  return String(value == null ? '' : value)
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function compactText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function parseAttributes(source) {
  const attrs = {};
  const attrPattern = /([^\s"'=<>\/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const match of source.matchAll(attrPattern)) {
    attrs[match[1].toLowerCase()] = decodeAttributeValue(match[2] ?? match[3] ?? match[4] ?? '');
  }
  return attrs;
}

function getTag(token) {
  const match = token.match(/^<\s*\/?\s*([A-Za-z][\w:-]*)/);
  return match ? match[1].toLowerCase() : null;
}

function isClosingTag(token) {
  return /^<\s*\//.test(token);
}

function isSelfClosing(token, tag) {
  return VOID_TAGS.has(tag) || /\/\s*>$/.test(token);
}

function isIgnored(stack) {
  return stack.some((node) => node.ignored);
}

function isInsideI18n(stack) {
  return stack.some((node) => Boolean(node.i18nKey));
}

function closeTag(stack, tag, onClose) {
  for (let index = stack.length - 1; index >= 0; index -= 1) {
    const node = stack.pop();
    onClose(node);
    if (node.tag === tag) return;
  }
}

function scanHtml(html, handlers) {
  const stack = [];
  const tokenPattern = /<!--[\s\S]*?-->|<![^>]*>|<\/?[A-Za-z][^>]*>/g;
  let cursor = 0;
  let match;

  function emitText(value) {
    if (value) handlers.onText(value, stack);
  }

  while ((match = tokenPattern.exec(html)) !== null) {
    emitText(html.slice(cursor, match.index));
    const token = match[0];
    cursor = tokenPattern.lastIndex;

    if (token.startsWith('<!--') || token.startsWith('<!')) continue;

    const tag = getTag(token);
    if (!tag) continue;

    if (isClosingTag(token)) {
      closeTag(stack, tag, handlers.onClose);
      continue;
    }

    const openMatch = token.match(/^<\s*([A-Za-z][\w:-]*)([\s\S]*?)\/?\s*>$/);
    if (!openMatch) continue;

    const attrs = parseAttributes(openMatch[2]);
    const parent = stack[stack.length - 1];
    if (parent) parent.hasElementChild = true;

    const ignored = Boolean(
      (parent && parent.ignored) ||
      SKIP_TAGS.has(tag) ||
      Object.prototype.hasOwnProperty.call(attrs, 'data-i18n-ignore')
    );
    const node = {
      tag,
      attrs,
      ignored,
      i18nKey: attrs['data-i18n'],
      hasElementChild: false
    };

    handlers.onOpen(node, stack);
    if (isSelfClosing(token, tag)) {
      handlers.onClose(node);
    } else {
      stack.push(node);
    }
  }

  emitText(html.slice(cursor));
  while (stack.length) handlers.onClose(stack.pop());
}

function validateKey(routeId, key, errors, usedKeys) {
  const pair = splitNamespacedKey(key);
  if (!pair) {
    errors.push(routeId + ': invalid i18n key: ' + key);
    return;
  }
  if (pair[0] !== 'common' && pair[0] !== routeId) {
    errors.push(routeId + ': invalid i18n namespace: ' + key);
    return;
  }
  usedKeys.add(key);
}

function findTemplate(source) {
  const first = source.indexOf('`');
  const last = source.lastIndexOf('`');
  if (first === -1 || last === first) return null;
  return source.slice(first + 1, last);
}

function isEscaped(source, index) {
  let slashCount = 0;
  for (let cursor = index - 1; cursor >= 0 && source[cursor] === '\\'; cursor -= 1) {
    slashCount += 1;
  }
  return slashCount % 2 === 1;
}

function countUnescapedBackticks(source) {
  let count = 0;
  for (let index = 0; index < source.length; index += 1) {
    if (source[index] === '`' && !isEscaped(source, index)) count += 1;
  }
  return count;
}

function findUnsafeTemplateExpression(source) {
  for (const match of source.matchAll(/\$\{([^}]+)\}/g)) {
    if (isEscaped(source, match.index)) continue;
    if (/^\s*ICN\.[A-Za-z0-9_]+\s*$/.test(match[1])) continue;
    return match[0];
  }
  return null;
}

function validateFragmentSource(routeId, source, errors) {
  const registration = source.match(/__AW_PAGES__\s*=\s*window\.__AW_PAGES__\s*\|\|\s*\{\}\)\["([^"]+)"\]\s*=\s*`/);
  const registeredId = registration && registration[1];
  if (registeredId !== routeId) {
    errors.push(routeId + ': registration mismatch: ' + (registeredId || 'missing'));
  }

  const backtickCount = countUnescapedBackticks(source);
  if (backtickCount !== 2) {
    errors.push(routeId + ': invalid template token: backtick');
  }

  const unsafeExpression = findUnsafeTemplateExpression(source);
  if (unsafeExpression) errors.push(routeId + ': invalid template token: ' + unsafeExpression);
}

function validateHref(routeId, href, routeIds, errors) {
  const match = String(href || '').match(/^#\/([^#?]+)/);
  if (match && !routeIds.has(match[1])) {
    errors.push(routeId + ': unknown href route: ' + match[1]);
  }
}

function validateEyebrow(route, html, errors) {
  const match = html.match(/<[^>]*class=(?:"[^"]*\bsection-eyebrow\b[^"]*"|'[^']*\bsection-eyebrow\b[^']*')[^>]*>([^<]*)/i);
  if (!match) return;
  const fallback = compactText(match[1]);
  const prefix = route.group + ' · ';
  if (CHINESE.test(fallback) && !fallback.startsWith(prefix)) {
    errors.push(route.id + ': invalid section eyebrow: ' + fallback);
  }
}

function scanPage(route, html, routeIds) {
  const errors = [];
  const usedKeys = new Set();

  validateEyebrow(route, html, errors);

  scanHtml(html, {
    onText(text, stack) {
      const value = compactText(text);
      if (!value || !CHINESE.test(value) || isIgnored(stack) || isInsideI18n(stack)) return;
      errors.push(route.id + ': unmarked text: ' + value);
    },
    onOpen(node) {
      if (!node.ignored) {
        if (node.attrs['data-i18n']) {
          validateKey(route.id, node.attrs['data-i18n'], errors, usedKeys);
        }
        for (const attr of Object.keys(I18N_ATTRS)) {
          const i18nAttr = I18N_ATTRS[attr];
          const fallback = node.attrs[attr];
          const key = node.attrs[i18nAttr];
          if (key) validateKey(route.id, key, errors, usedKeys);
          if (fallback && CHINESE.test(fallback) && !key) {
            errors.push(route.id + ': missing attr i18n: ' + attr + '=' + compactText(fallback));
          }
        }
        if (node.attrs.href) validateHref(route.id, node.attrs.href, routeIds, errors);
      }
    },
    onClose(node) {
      if (!node.ignored && node.i18nKey && node.hasElementChild) {
        errors.push(route.id + ': non-leaf i18n element: ' + node.i18nKey);
      }
    }
  });

  return { errors, usedKeys };
}

function clearRequire(file) {
  try {
    delete require.cache[require.resolve(file)];
  } catch (error) {
    // Missing optional locale files are reported separately and skipped.
  }
}

function requireIfExists(file) {
  if (!fs.existsSync(file)) return null;
  clearRequire(file);
  require(file);
  return true;
}

function loadRouteAssets(id, errors) {
  const previousWindow = global.window;
  const previousDocument = global.document;
  const previousLocalStorage = global.localStorage;

  try {
    global.window = { __AW_PAGES__: {} };
    clearRequire(RUNTIME_PATH);
    const runtime = require(RUNTIME_PATH);
    const i18n = global.window.__AW_I18N__ || runtime.createI18n();
    global.window = { __AW_PAGES__: {}, __AW_I18N__: i18n };

    requireIfExists(path.join(PAGES_DIR, id + '.js'));
    requireIfExists(COMMON_PATH);
    requireIfExists(path.join(LOCALE_DIR, id + '.js'));

    return {
      html: global.window.__AW_PAGES__[id] || '',
      catalogs: i18n.getCatalogs()['en-US'] || {}
    };
  } catch (error) {
    errors.push(id + ': load failed: ' + error.message);
    return { html: '', catalogs: {} };
  } finally {
    if (previousWindow === undefined) delete global.window;
    else global.window = previousWindow;
    if (previousDocument === undefined) delete global.document;
    else global.document = previousDocument;
    if (previousLocalStorage === undefined) delete global.localStorage;
    else global.localStorage = previousLocalStorage;
  }
}

function collectRouterCommonKeys(routerSource) {
  const keys = new Set();
  for (const match of routerSource.matchAll(/\bt\(\s*['"]common:([^'"]+)['"]/g)) {
    keys.add(match[1]);
  }
  for (const match of routerSource.matchAll(/\btCommon\(\s*['"]([^'"]+)['"]/g)) {
    keys.add(match[1]);
  }
  return keys;
}

function fixedCommonKeys(routes) {
  const keys = new Set();
  for (const route of routes) {
    keys.add('route.' + route.id);
    if (GROUP_KEYS[route.group]) keys.add('group.' + GROUP_KEYS[route.group]);
  }
  return keys;
}

function catalogHas(catalogs, namespacedKey) {
  const pair = splitNamespacedKey(namespacedKey);
  if (!pair) return false;
  return Boolean(
    catalogs[pair[0]] &&
    Object.prototype.hasOwnProperty.call(catalogs[pair[0]], pair[1])
  );
}

function main() {
  const { routes, routerSource } = parseRoutes();
  const routeMap = new Map(routes.map((route) => [route.id, route]));
  const routeIds = new Set(routeMap.keys());
  const selectedIds = parseArgs(process.argv.slice(2), routeMap) || routes.map((route) => route.id);
  const isFullRouteSet = selectedIds.length === routes.length;
  const selectedRoutes = selectedIds.map((id) => routeMap.get(id));
  const errors = [];

  const pageIds = listPageIds();
  for (const route of routes) {
    if (!pageIds.has(route.id)) errors.push('missing page: ' + route.id);
  }
  for (const pageId of pageIds) {
    if (!routeIds.has(pageId)) errors.push('extra page: ' + pageId);
  }

  const localeIds = listLocaleIds();
  for (const id of selectedIds) {
    if (!localeIds.has(id)) errors.push('missing locale: ' + id);
  }

  const allUsedKeys = new Set();
  const commonKeysUsedByPages = new Set();
  const pageCatalogs = new Map();
  let commonCatalog = null;

  for (const route of selectedRoutes) {
    const pagePath = path.join(PAGES_DIR, route.id + '.js');
    let source = '';
    if (fs.existsSync(pagePath)) {
      source = readFile(pagePath);
      validateFragmentSource(route.id, source, errors);
    }

    const assets = loadRouteAssets(route.id, errors);
    const html = assets.html || findTemplate(source) || '';
    if (commonCatalog == null && assets.catalogs.common) commonCatalog = assets.catalogs.common;
    if (assets.catalogs[route.id]) pageCatalogs.set(route.id, assets.catalogs[route.id]);

    const result = scanPage(route, html, routeIds);
    for (const error of result.errors) errors.push(error);
    for (const key of result.usedKeys) {
      allUsedKeys.add(key);
      if (key.startsWith('common:')) commonKeysUsedByPages.add(key.slice('common:'.length));
      if (!catalogHas(assets.catalogs, key)) errors.push(route.id + ': missing catalog key: ' + key);
    }
  }

  for (const route of selectedRoutes) {
    const pageCatalog = pageCatalogs.get(route.id);
    if (!pageCatalog) continue;
    for (const key of Object.keys(pageCatalog)) {
      if (!allUsedKeys.has(route.id + ':' + key)) {
        errors.push(route.id + ': unused page key: ' + key);
      }
    }
  }

  if (commonCatalog == null && fs.existsSync(COMMON_PATH)) {
    const assets = loadRouteAssets(selectedRoutes[0] ? selectedRoutes[0].id : 'overview', errors);
    commonCatalog = assets.catalogs.common || null;
  }

  if (commonCatalog && isFullRouteSet) {
    const allowedCommonKeys = new Set([
      ...commonKeysUsedByPages,
      ...collectRouterCommonKeys(routerSource),
      ...fixedCommonKeys(routes)
    ]);
    for (const key of Object.keys(commonCatalog)) {
      if (!allowedCommonKeys.has(key)) errors.push('common: unused key: ' + key);
    }
  }

  if (errors.length) {
    console.error(errors.join('\n'));
    process.exit(1);
  }

  console.log(selectedIds.length + ' routes i18n coverage passed');
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
