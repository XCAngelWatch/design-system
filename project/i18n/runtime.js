(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = { createI18n: factory };
  }
  if (root) root.__AW_I18N__ = factory();
})(typeof window !== 'undefined' ? window : null, function createI18n() {
  'use strict';

  var locale = 'zh-CN';
  var catalogs = {};
  var hasOwn = Object.prototype.hasOwnProperty;

  function normalizeLocale(value) {
    return value === 'en-US' || value === 'en' ? 'en-US' : 'zh-CN';
  }

  function setLocale(value) {
    locale = normalizeLocale(value);
    return locale;
  }

  function getLocale() {
    return locale;
  }

  function register(targetLocale, namespace, messages) {
    var normalized = normalizeLocale(targetLocale);
    catalogs[normalized] = catalogs[normalized] || {};
    catalogs[normalized][namespace] = Object.assign(
      catalogs[normalized][namespace] || {},
      messages || {}
    );
  }

  function splitKey(namespacedKey) {
    var value = String(namespacedKey || '');
    var index = value.indexOf(':');
    if (index < 1) return null;
    return [value.slice(0, index), value.slice(index + 1)];
  }

  function interpolate(value, params) {
    return String(value).replace(/\{([A-Za-z0-9_]+)\}/g, function (placeholder, key) {
      return params && hasOwn.call(params, key) ? String(params[key]) : placeholder;
    });
  }

  var attributeBindings = [
    ['data-i18n-placeholder', 'placeholder'],
    ['data-i18n-title', 'title'],
    ['data-i18n-aria-label', 'aria-label'],
    ['data-i18n-alt', 'alt'],
    ['data-i18n-value', 'value']
  ];

  function t(namespacedKey, params, fallback) {
    if (locale === 'zh-CN') return interpolate(fallback == null ? '' : fallback, params);

    var pair = splitKey(namespacedKey);
    var messages = pair && catalogs[locale] && catalogs[locale][pair[0]];
    var hasMessage = messages && hasOwn.call(messages, pair[1]);
    if (!hasMessage) {
      if (typeof console !== 'undefined' && console.error) {
        console.error('[i18n] Missing translation for ' + locale + ': ' + namespacedKey);
      }
      return interpolate(fallback == null ? '' : fallback, params);
    }

    return interpolate(messages[pair[1]], params);
  }

  function selectIncludingRoot(rootNode, selector) {
    var nodes = rootNode.querySelectorAll
      ? Array.prototype.slice.call(rootNode.querySelectorAll(selector))
      : [];
    if (rootNode.matches && rootNode.matches(selector)) nodes.unshift(rootNode);
    return nodes;
  }

  function prepareEnglishTables(rootNode) {
    if (!rootNode || locale !== 'en-US' || typeof document === 'undefined') return;
    var schedule = (typeof window !== 'undefined' && window.requestAnimationFrame)
      ? window.requestAnimationFrame.bind(window)
      : function (callback) { callback(); };

    schedule(function () {
      var tables = rootNode.querySelectorAll
        ? Array.prototype.slice.call(rootNode.querySelectorAll('table'))
        : [];
      tables.forEach(function (table) {
        var parent = table.parentElement;
        if (!parent || parent.classList.contains('i18n-table-scroll')) return;
        if (!parent.clientWidth) return;
        if (table.scrollWidth > parent.clientWidth) {
          var wrapper = document.createElement('div');
          wrapper.className = 'i18n-table-scroll';
          parent.insertBefore(wrapper, table);
          wrapper.appendChild(table);
        }
      });
    });
  }

  function apply(rootNode) {
    if (!rootNode || locale === 'zh-CN') return;

    selectIncludingRoot(rootNode, '[data-i18n]').forEach(function (node) {
      node.textContent = t(node.getAttribute('data-i18n'), null, node.textContent);
    });

    attributeBindings.forEach(function (binding) {
      selectIncludingRoot(rootNode, '[' + binding[0] + ']').forEach(function (node) {
        var fallback = node.getAttribute(binding[1]) || '';
        node.setAttribute(binding[1], t(node.getAttribute(binding[0]), null, fallback));
      });
    });

    prepareEnglishTables(rootNode);
  }

  function getCatalogs() {
    return catalogs;
  }

  return {
    normalizeLocale: normalizeLocale,
    setLocale: setLocale,
    getLocale: getLocale,
    register: register,
    t: t,
    apply: apply,
    getCatalogs: getCatalogs
  };
});
