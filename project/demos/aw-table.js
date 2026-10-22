/* AWTable interaction reference. Synthetic, in-memory data; no business API. */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.AWTableDemo = api;
})(typeof window === 'undefined' ? null : window, function () {
  'use strict';
  function planActions(items, available, moreWidth, gap) {
    var visible = items.filter(function (item) { return !item.hidden; });
    var exceptions = visible.filter(function (item) { return item.danger && item.inlineException === 'group-membership-removal'; });
    var normal = visible.filter(function (item) { return !item.danger; }).concat(exceptions);
    var danger = visible.filter(function (item) { return item.danger && exceptions.indexOf(item) === -1; });
    // More occupies one of the row's three visible entries, including danger menus.
    var count = Math.min(normal.length > 3 || danger.length ? 2 : 3, normal.length);
    function result() {
      var inline = normal.slice(0, count);
      var overflow = normal.slice(count).concat(danger);
      var entries = inline.length + Number(overflow.length > 0);
      return { inline: inline, overflow: overflow, width: (entries ? 32 : 0) +
        inline.reduce(function (sum, item) { return sum + item.width; }, 0) +
        (overflow.length ? moreWidth : 0) + Math.max(0, entries - 1) * gap };
    }
    var plan = result();
    while (count > 1 && plan.width > available) { count--; plan = result(); }
    // Return the real required width even if one primary + More cannot fit.
    // The column grows and scrolling/unfreezing preserves the complete label.
    return plan;
  }
  function reduceQuery(query, event) {
    var next = Object.assign({}, query);
    if (event.type === 'page') next.page = Math.max(1, event.value);
    if (event.type === 'pageSize') { next.pageSize = event.value; next.page = 1; }
    if (event.type === 'sort') { next.sort = event.value; next.page = 1; }
    if (event.type === 'filter') {
      ['search', 'model', 'status', 'version', 'createdRange'].forEach(function (key) { if (key in event) next[key] = event[key]; });
      next.page = 1;
    }
    if (event.type === 'search') {
      var changed = false;
      ['search', 'model', 'status', 'version', 'createdRange'].forEach(function (key) {
        if (key in event.values) { changed = changed || JSON.stringify(query[key]) !== JSON.stringify(event.values[key]); next[key] = event.values[key]; }
      });
      if (changed) next.page = 1;
    }
    if (event.type === 'reset') next = Object.assign({}, query, event.values, { page: 1 });
    return JSON.stringify(query) === JSON.stringify(next) ? query : next;
  }
  // A synchronous request owner: an expired success/error/finally can never
  // accept data or release a newer request. Transport cancellation is optional.
  function createRequestCoordinator() {
    var sequence = 0, active = null;
    return {
      accept: function (query, context, gate, replace) {
        if (gate !== 'ready' || active && !replace) return null;
        active = { id: ++sequence, context: context, query: JSON.parse(JSON.stringify(query)) };
        return active;
      },
      isCurrent: function (token) { return active === token; },
      settle: function (token) { if (active !== token) return false; active = null; return true; },
      invalidate: function () { active = null; },
      pending: function () { return active !== null; }
    };
  }
  function planActionColumn(combinations, available, moreWidth, gap) {
    return combinations.reduce(function (width, items) {
      return Math.max(width, planActions(items, available, moreWidth, gap).width);
    }, 0);
  }
  var dispose = null;
  function mount(slot) {
    if (dispose) { dispose(); dispose = null; }
    var host = slot.querySelector('[data-aw-table-demo]');
    if (!host) return;
    function text(key, values) {
      var node = host.querySelector('[data-aw-label="' + key + '"]');
      return (node ? node.textContent : key).replace(/\{(\w+)\}/g, function (_, name) { return String((values || {})[name]); });
    }
    function escape(value) {
      return String(value).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
    }
    var initialQuery = { page: 1, pageSize: 20, search: '', model: '', status: '', version: '', createdRange: ['', ''], sort: '' };
    var query = Object.assign({}, initialQuery), resultQuery = Object.assign({}, initialQuery), filters;
    var coordinator = createRequestCoordinator(), context = 'A', resultContext = 'A', gate = 'ready';
    var hasResult = true, resultRecords, ignored = 0, mutationCount = 0, optionsRequests = 0, verificationCount = 0;
    var scenario = 'normal', mixedActions = false, longLabels = false, optionsFailed = false, optionsBusy = false;
    var batchBusy = false, batchOutcome = null, batchSnapshot = [], logs = [], scenarioNote = '';
    var requestTasks = new Set(), auxiliaryTimers = new Set();
    var filterFields = [{ id: 'search' }, { id: 'model' }, { id: 'status' }, { id: 'version', advanced: true }, { id: 'createdRange', kind: 'range', advanced: true }];
    var count = 3, danger = false, state = 'ready', selected = new Set(), queries = 0, requests = 0;
    var density = 'middle', measureCache = Object.create(null), measuredContainer = null;
    // Illustrative semantic budgets, not universal widths for every consumer.
    var columnDefinitions = [
      { key: 'selection', semantic: 'selection', min: 40, preferred: 40 },
      { key: 'name', semantic: 'identity', min: 200, preferred: 200, flexible: true },
      { key: 'status', semantic: 'status', min: 112, preferred: 112 },
      { key: 'version', semantic: 'text', min: 112, preferred: 136 },
      { key: 'updated', semantic: 'dateTime', min: 168, preferred: 196 }
    ];
    var hiddenColumns = new Set(), columnDraft = new Set(), columnPanelContext = null;
    var columnStorageKey = 'aw:table-demo:columns:v1';
    function optionalColumn(key) { return ['status', 'version', 'updated'].includes(key); }
    try {
      var storedColumns = JSON.parse(localStorage.getItem(columnStorageKey));
      if (storedColumns && storedColumns.schemaVersion === 1 && Array.isArray(storedColumns.hiddenIds) && storedColumns.hiddenIds.every(function (key) { return typeof key === 'string'; })) {
        hiddenColumns = new Set(storedColumns.hiddenIds.filter(optionalColumn));
      }
    } catch (_) { /* Invalid or unavailable storage falls back to all columns. */ }
    function visibleColumnDefinitions() { return columnDefinitions.filter(function (column) { return !hiddenColumns.has(column.key); }); }
    function paintColumnDraft() {
      host.querySelector('[data-aw-column-options]').innerHTML = columnDefinitions.filter(function (column) { return column.key !== 'selection'; }).concat(actionWidth() ? [{ key: 'actions' }] : []).map(function (column) {
        return '<label><input type="checkbox" data-aw-column-option="' + column.key + '"' + (!columnDraft.has(column.key) ? ' checked' : '') + (!optionalColumn(column.key) ? ' disabled' : '') + '><span>' + escape(text(column.key)) + '</span></label>';
      }).join('');
    }
    function closeColumns(focus) {
      var panel = host.querySelector('[data-aw-columns-panel]');
      var entry = host.querySelector('[data-aw-command="columns"]');
      panel.hidden = true; entry.setAttribute('aria-expanded', 'false'); columnDraft = new Set(); columnPanelContext = null;
      if (focus && entry.isConnected) entry.focus({ preventScroll: true });
    }
    var columnControl = host.querySelector('[data-aw-columns-control]');
    function showColumnTooltip(visible) {
      var entry = host.querySelector('[data-aw-command="columns"]');
      var tip = host.querySelector('[data-aw-columns-tooltip]');
      tip.hidden = !visible || entry.getAttribute('aria-expanded') === 'true';
      if (tip.hidden) entry.removeAttribute('aria-describedby');
      else entry.setAttribute('aria-describedby', tip.id);
    }
    columnControl.addEventListener('pointerenter', function () { showColumnTooltip(true); });
    columnControl.addEventListener('pointerleave', function () { if (!columnControl.contains(document.activeElement)) showColumnTooltip(false); });
    columnControl.addEventListener('focusin', function () { showColumnTooltip(true); });
    columnControl.addEventListener('focusout', function (event) { if (!columnControl.contains(event.relatedTarget)) showColumnTooltip(false); });
    function openColumns() {
      var panel = host.querySelector('[data-aw-columns-panel]');
      if (!panel.hidden) { closeColumns(true); return; }
      closeMenu(false); columnDraft = new Set(hiddenColumns); columnPanelContext = context; paintColumnDraft();
      panel.hidden = false; host.querySelector('[data-aw-command="columns"]').setAttribute('aria-expanded', 'true');
      showColumnTooltip(false);
      panel.querySelector('input:not(:disabled)').focus({ preventScroll: true });
    }
    function fixtures(length, scope) { return Array.from({ length: length }, function (_, index) {
      return { id: 'sample-' + index, number: index + 1, name: text('sample', { n: String(index + 1).padStart(2, '0') }) + (scope === 'B' ? ' · B' : ''),
        status: index % 3 ? 'published' : 'draft', model: index % 2 ? 'P10' : 'K1352', version: '1.2.' + index,
        created: '2026-10-' + String(1 + index % 21).padStart(2, '0'), updated: '2026-10-21 09:30:00' };
    }); }
    var records = fixtures(56, context); resultRecords = records.slice();
    var viewport = host.querySelector('[data-aw-viewport]');
    var body = host.querySelector('[data-aw-body]');
    var summary = host.querySelector('[data-aw-summary]');
    var feedback = host.querySelector('[data-aw-feedback]');
    var batch = host.querySelector('[data-aw-batch]');
    var menu, menuAnchor, trigger, dialog, pending = new Set();
    var alive = true, actionCleanups = new Set();
    var actionKeys = ['details', 'edit', 'download', 'copy', 'history'];
    function button(label, action, extra) {
      return '<button type="button" class="aw-table-action" data-aw-command="' + action + '" ' + (extra || '') + '>' + escape(label) + '</button>';
    }
    function closeMenu(focus) {
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
      if (menu) menu.remove();
      menu = null; menuAnchor = null;
      if (focus && trigger && trigger.isConnected) trigger.focus({ preventScroll: true });
    }
    function label(key) { return text(longLabels && ['details', 'edit', 'download'].includes(key) ? 'long' + key[0].toUpperCase() + key.slice(1) : key); }
    function measure(key) {
      var value = label(key);
      if (measureCache[value] !== undefined) return measureCache[value];
      var probe = document.createElement('button');
      probe.className = 'aw-table-action aw-table-probe';
      probe.textContent = value;
      host.appendChild(probe);
      var width = probe.getBoundingClientRect().width;
      probe.remove();
      measureCache[value] = Math.ceil(width); return measureCache[value];
    }
    function contentWidth() {
      if (measuredContainer !== null) return measuredContainer;
      var style = getComputedStyle(viewport);
      measuredContainer = Math.max(0, viewport.clientWidth - parseFloat(style.paddingLeft || 0) - parseFloat(style.paddingRight || 0));
      return measuredContainer;
    }
    function actionItems(row) {
      var number = mixedActions ? (row ? row.number % 6 : 5) : count;
      var items = actionKeys.slice(0, number).map(function (key) { return { key: key, width: measure(key) }; });
      if (danger && (!mixedActions || !row || row.status === 'draft')) items.push({ key: 'delete', danger: true, width: measure('delete') });
      return items;
    }
    function actions(row) {
      return planActions(actionItems(row), Math.max(0, contentWidth() - visibleColumnDefinitions().slice(0, 3).reduce(function (sum, column) { return sum + column.min; }, 0)), measure('more'), 8);
    }
    function actionWidth() {
      // Use all declared combinations, never the current page's longest row.
      var combinations = mixedActions ? Array.from({ length: 6 }, function (_, number) { return actionItems({ number: number, status: 'draft' }); }) : [actionItems()];
      return planActionColumn(combinations, Math.max(0, contentWidth() - visibleColumnDefinitions().slice(0, 3).reduce(function (sum, column) { return sum + column.min; }, 0)), measure('more'), 8);
    }
    function rows(forQuery, source) {
      var target = forQuery || resultQuery;
      var filtered = (source || resultRecords).filter(function (row) {
        return [row.name, row.version].some(function (value) { return value.toLowerCase().includes(target.search.toLowerCase()); }) &&
          (!target.status || row.status === target.status) && (!target.model || row.model === target.model) && row.version.includes(target.version) &&
          (!target.createdRange[0] || row.created >= target.createdRange[0] && row.created <= target.createdRange[1]);
      });
      if (target.sort) filtered.sort(function (a, b) { return (a.number - b.number) * (target.sort === 'asc' ? 1 : -1); });
      return filtered;
    }
    function log(key, values) { logs.push(text(key, values)); if (logs.length > 4) logs.shift(); }
    function cancelRequest() {
      coordinator.invalidate();
      requestTasks.forEach(function (task) { clearTimeout(task.timer); task.cleanup(); task.resolve(); }); requestTasks.clear();
    }
    function later(callback, delay) {
      var timer = setTimeout(function () { auxiliaryTimers.delete(timer); if (alive && host.isConnected) callback(); }, delay);
      auxiliaryTimers.add(timer); return timer;
    }
    function isRequestPending() { return coordinator.pending() || state === 'loading' || state === 'refreshing'; }
    function canQuery() { return gate === 'ready' && !isRequestPending(); }
    function setState(value) { state = value; host.querySelector('[data-aw-state]').value = ['stale-error', 'waiting', 'blocked'].includes(value) ? 'ready' : value; }
    function requestRows(options) {
      options = options || {};
      var token = coordinator.accept(query, context, gate, options.replace);
      if (!token) return Promise.resolve(false);
      var source = records.slice();
      var activeElement = document.activeElement;
      var requestFocus = options.requestFocus || { node: host.contains(activeElement) ? activeElement : null, moved: false };
      function focusTarget() {
        var node = requestFocus.node;
        if (node && node.isConnected) return node;
        return node && node.dataset && node.dataset.awCommand ? host.querySelector('[data-aw-command="' + node.dataset.awCommand + '"]') : null;
      }
      function trackRequestFocus(event) { if (event.target !== document.body && event.target !== focusTarget()) requestFocus.moved = true; }
      function restoreRequestFocus() {
        if (!requestFocus.moved && document.activeElement === document.body && canFocus(focusTarget())) focusTarget().focus({ preventScroll: true });
      }
      document.addEventListener('focusin', trackRequestFocus);
      requests++; setState(hasResult ? 'refreshing' : 'loading');
      log('requestStarted', { id: token.id, context: text('context' + token.context), page: token.query.page }); render();
      return new Promise(function (resolve) {
        var task = { resolve: resolve, cleanup: function () { document.removeEventListener('focusin', trackRequestFocus); } };
        requestTasks.add(task);
        task.timer = setTimeout(function () {
          requestTasks.delete(task); task.cleanup();
          if (!alive || !host.isConnected) { resolve(false); return; }
          if (!coordinator.isCurrent(token) || context !== token.context) {
            ignored++; log('requestIgnored', { id: token.id }); render(); resolve(false); return;
          }
          coordinator.settle(token);
          if (options.fail) {
            setState(hasResult ? 'stale-error' : 'error'); log('requestFailed', { id: token.id }); render(); restoreRequestFocus(); resolve(false); return;
          }
          var maxPage = Math.max(1, Math.ceil(rows(token.query, source).length / token.query.pageSize));
          if (token.query.page > maxPage && !options.corrected) {
            query = Object.assign({}, query, { page: maxPage }); queries++;
            scenarioNote = text('pageCorrected', { page: maxPage });
            requestRows({ corrected: true, requestFocus: requestFocus }).then(resolve); return;
          }
          resultQuery = token.query; resultRecords = source; resultContext = token.context; hasResult = true;
          setState('ready'); log('requestAccepted', { id: token.id }); render(); restoreRequestFocus(); resolve(true);
        }, options.delay == null ? 350 : options.delay);
      });
    }
    function commit(event) {
      if (!canQuery()) return Promise.resolve(false);
      var next = reduceQuery(query, event);
      if (next === query) return Promise.resolve(false);
      if (event.type === 'filter' || event.type === 'sort' || event.type === 'reset') selected.clear();
      query = next; queries++;
      return requestRows();
    }
    function measureValues() {
      body.querySelectorAll('[data-aw-value]').forEach(function (value) {
        var wasExpanded = value.dataset.awExpanded === 'true';
        value.removeAttribute('data-aw-expanded');
        var truncated = value.scrollWidth > value.clientWidth + 1;
        if (truncated) {
          value.tabIndex = 0; value.dataset.awTruncated = 'true'; value.title = value.textContent;
          if (wasExpanded) value.dataset.awExpanded = 'true';
        } else {
          value.removeAttribute('tabindex'); value.removeAttribute('title'); value.removeAttribute('data-aw-truncated');
        }
      });
    }
    function render() {
      measureCache = Object.create(null); measuredContainer = null;
      var focused = body.contains(document.activeElement) ? document.activeElement : null;
      var focusSelector = focused && (focused.hasAttribute('data-aw-select')
        ? '[data-aw-select="' + focused.dataset.awSelect + '"]'
        : focused.hasAttribute('data-aw-select-all') ? '[data-aw-select-all]'
        : focused.hasAttribute('data-aw-command') ? '[data-aw-command="' + focused.dataset.awCommand + '"]' + (focused.dataset.awRow ? '[data-aw-row="' + focused.dataset.awRow + '"]' : '')
        : focused.hasAttribute('data-aw-value') ? '[data-aw-value="' + focused.dataset.awValue + '"]' : null);
      closeMenu(false);
      var all = state === 'empty' || !hasResult ? [] : rows();
      var displayQuery = hasResult ? resultQuery : query;
      var pageRows = all.slice((displayQuery.page - 1) * displayQuery.pageSize, displayQuery.page * displayQuery.pageSize);
      var width = actionWidth();
      host.dataset.awQueryCount = String(queries);
      host.dataset.awRequestCount = String(requests);
      host.dataset.awQuery = JSON.stringify(query);
      host.dataset.awResultQuery = JSON.stringify(resultQuery); host.dataset.awContext = context; host.dataset.awResultContext = hasResult ? resultContext : '';
      host.dataset.awPending = String(isRequestPending()); host.dataset.awIgnored = String(ignored); host.dataset.awGate = gate;
      host.dataset.awSelected = JSON.stringify(Array.from(selected)); host.dataset.awBatchOutcome = JSON.stringify(batchOutcome);
      host.dataset.awVerificationCount = String(verificationCount); host.dataset.awMutationCount = String(mutationCount); host.dataset.awOptionsRequests = String(optionsRequests);
      host.dataset.awActionWidth = String(width);
      if (columnPanelContext !== null && columnPanelContext !== context) closeColumns(false);
      var visibleColumns = visibleColumnDefinitions();
      var widths = visibleColumns.map(function (column) { return column.preferred; }).concat(width ? [width] : []);
      host.dataset.awColumnDefinitions = JSON.stringify(visibleColumns);
      host.dataset.awHiddenColumns = JSON.stringify(Array.from(hiddenColumns));
      var totalWidth = widths.reduce(function (sum, width) { return sum + width; }, 0);
      var spare = Math.max(0, contentWidth() - 2 - totalWidth);
      widths[visibleColumns.findIndex(function (column) { return column.flexible; })] += spare; totalWidth += spare;
      var freeze = width > 0 && contentWidth() - width >= columnDefinitions[1].min;
      host.dataset.awContainerWidth = String(Math.round(contentWidth())); host.dataset.awTotalWidth = String(totalWidth);
      var head = '<th scope="col"><input type="checkbox" data-aw-select-all aria-label="' + escape(text('selectPage')) + '"></th>' +
        '<th scope="col" aria-sort="' + (query.sort === 'asc' ? 'ascending' : query.sort === 'desc' ? 'descending' : 'none') + '">' +
        button(text('name') + (query.sort === 'asc' ? ' ↑' : query.sort === 'desc' ? ' ↓' : ''), 'sort', !canQuery() ? 'disabled' : '') + '</th>' +
        (hiddenColumns.has('status') ? '' : '<th scope="col">' + escape(text('status')) + '</th>') +
        (hiddenColumns.has('version') ? '' : '<th scope="col">' + escape(text('version')) + '</th>') +
        (hiddenColumns.has('updated') ? '' : '<th scope="col">' + escape(text('updated')) + '</th>') +
        (width ? '<th scope="col" class="aw-table-actions-cell">' + escape(text('actions')) + '</th>' : '');
      var content = pageRows.map(function (row) {
        var stale = state === 'stale-error' || JSON.stringify(query) !== JSON.stringify(resultQuery);
        var busy = pending.has(row.id) || isRequestPending() || gate !== 'ready' || batchBusy || stale;
        var unavailable = stale ? ' title="' + escape(text('staleResults')) + '"' : '';
        var plan = actions(row);
        var rowActions = plan.inline.map(function (item) {
          return button(label(item.key), item.key, 'data-aw-row="' + row.id + '"' + (busy ? ' disabled' + (pending.has(row.id) ? ' aria-busy="true"' : '') + unavailable : ''));
        }).join('');
        if (plan.overflow.length) rowActions += button(text('more'), 'more', 'data-aw-row="' + row.id + '" aria-haspopup="menu" aria-expanded="false"' + (busy ? ' disabled' + unavailable : ''));
        return '<tr' + (selected.has(row.id) ? ' class="is-selected"' : '') + '><td><input type="checkbox" data-aw-select="' + row.id + '" aria-label="' + escape(text('selectRow', { name: row.name })) + '"' + (selected.has(row.id) ? ' checked' : '') + (busy ? ' disabled' + unavailable : '') + '></td>' +
          '<td><span class="aw-table-value" data-aw-value="' + row.id + '">' + escape(row.name) + '</span></td>' +
          (hiddenColumns.has('status') ? '' : '<td>' + escape(text(row.status)) + '</td>') +
          (hiddenColumns.has('version') ? '' : '<td>' + escape(row.version) + '</td>') +
          (hiddenColumns.has('updated') ? '' : '<td class="aw-table-date">' + escape(row.updated) + '</td>') +
          (width ? '<td class="aw-table-actions-cell"><div class="aw-table-actions">' + (rowActions || '<span class="visually-hidden">' + escape(text('noActions')) + '</span>') + '</div></td>' : '') + '</tr>';
      }).join('');
      if (state === 'loading') content = Array.from({ length: 4 }, function () { return '<tr><td colspan="' + widths.length + '"><div class="aw-table-skeleton"></div></td></tr>'; }).join('');
      if (state === 'waiting' || state === 'blocked') content = '<tr><td colspan="' + widths.length + '"><div class="aw-table-state"><p>' + escape(text(state === 'waiting' ? 'gateWaiting' : 'gateBlocked')) + '</p></div></td></tr>';
      else if (state === 'error' || (!pageRows.length && state !== 'loading')) content = '<tr><td colspan="' + widths.length + '"><div class="aw-table-state">' +
        '<p>' + escape(text(state === 'error' ? 'error' : window.AWTableFiltersDemo.countActive(filterFields, query) ? 'noMatches' : 'empty')) + '</p>' +
        (state === 'error' || window.AWTableFiltersDemo.countActive(filterFields, query)
          ? button(text(state === 'error' ? 'retry' : 'reset'), state === 'error' ? 'retry' : 'reset', isRequestPending() ? 'disabled' : '') : '') + '</div></td></tr>';
      body.innerHTML = '<table class="aw-table-preview" data-density="' + density + '" data-fixed-actions="' + freeze + '" style="width:' + totalWidth + 'px"><caption class="visually-hidden">' + escape(text('caption')) + '</caption><colgroup>' +
        widths.map(function (width) { return '<col style="width:' + width + 'px">'; }).join('') + '</colgroup><thead><tr>' + head + '</tr></thead><tbody>' + content + '</tbody></table>';
      body.setAttribute('aria-busy', String(state === 'loading' || state === 'refreshing'));
      viewport.classList.toggle('aw-table-is-refreshing', state === 'refreshing');
      measureValues();
      if (focusSelector) { var restored = body.querySelector(focusSelector); if (restored) restored.focus({ preventScroll: true }); }
      var pageSelect = body.querySelector('[data-aw-select-all]');
      pageSelect.checked = pageRows.length > 0 && pageRows.every(function (row) { return selected.has(row.id); });
      pageSelect.indeterminate = !pageSelect.checked && pageRows.some(function (row) { return selected.has(row.id); });
      pageSelect.disabled = state === 'stale-error' || !pageRows.length || JSON.stringify(query) !== JSON.stringify(resultQuery) || isRequestPending() || gate !== 'ready' || batchBusy || state === 'error';
      batch.hidden = selected.size === 0;
      batch.querySelector('span').textContent = text('selected', { n: selected.size });
      summary.textContent = hasResult || state === 'empty' ? text('summary', { total: all.length, page: displayQuery.page, pages: Math.ceil(all.length / displayQuery.pageSize) || 1 }) : text('totalUnknown');
      host.querySelector('[data-aw-command="previous"]').disabled = !canQuery() || query.page <= 1;
      host.querySelector('[data-aw-command="next"]').disabled = !canQuery() || query.page * query.pageSize >= all.length;
      host.querySelector('[data-aw-page-size]').disabled = !canQuery();
      host.querySelector('[data-aw-page-size]').value = String(query.pageSize);
      host.querySelector('[data-aw-metrics]').textContent = text('metrics', { width: width, queries: queries, requests: requests });
      host.querySelector('[data-aw-refreshing]').hidden = state !== 'refreshing';
      var activeCount = window.AWTableFiltersDemo.countActive(filterFields, query);
      host.querySelector('[data-aw-applied]').textContent = activeCount ? text('applied', { count: activeCount }) : text('noFilters');
      if (filters) { filters.setApplied(query); filters.setSubmitting(!canQuery()); }
      paintDiagnostics(width, totalWidth, freeze);
    }
    function paintDiagnostics(width, totalWidth, freeze) {
      var status = host.querySelector('[data-aw-scenario-status]');
      if (status) {
        var notice = state === 'stale-error' ? text('staleResults')
          : gate !== 'ready' ? text(gate === 'waiting' ? 'gateWaiting' : 'gateBlocked')
          : hasResult && !isRequestPending() && JSON.stringify(query) !== JSON.stringify(resultQuery) ? text('resultMismatch') : scenarioNote;
        status.hidden = !notice; status.textContent = notice;
        if (state === 'stale-error') status.insertAdjacentHTML('beforeend', ' ' + button(text('retry'), 'retry'));
        if (gate !== 'ready') status.insertAdjacentHTML('beforeend', ' ' + button(text('resumeScope'), 'resumeScope'));
      }
      var logNode = host.querySelector('[data-aw-request-log]'); if (logNode) logNode.textContent = logs.join(' · ');
      var layout = host.querySelector('[data-aw-layout]');
      if (layout) layout.textContent = text('layoutMetrics', { container: Math.round(contentWidth()), total: Math.round(totalWidth), actions: width, fixed: text(freeze ? 'yes' : 'no') });
      var options = host.querySelector('[data-aw-options-error]'); if (options) { options.hidden = !optionsFailed; if (!options.id) options.id = 'aw-table-model-options-error'; }
      var model = host.querySelector('[data-aw-filter="model"]'); model.disabled = optionsFailed || optionsBusy;
      if (optionsFailed && options && options.id) model.setAttribute('aria-describedby', options.id); else model.removeAttribute('aria-describedby');
      var retryOptions = host.querySelector('[data-aw-command="retryOptions"]'); if (retryOptions) retryOptions.disabled = optionsBusy;
      var batchRun = host.querySelector('[data-aw-command="batchRun"]');
      var hasUnknown = batchOutcome && batchOutcome.unknownKeys.length > 0;
      if (batchRun) { batchRun.hidden = !scenario.startsWith('batch-'); batchRun.disabled = batchBusy || isRequestPending() || state === 'stale-error' || !selected.size || hasUnknown; }
      var batchRetry = host.querySelector('[data-aw-command="batchRetry"]');
      if (batchRetry) { batchRetry.hidden = !batchOutcome || !batchOutcome.failed.length || hasUnknown; batchRetry.disabled = batchBusy || isRequestPending() || state === 'stale-error'; }
      var outcomeNode = host.querySelector('[data-aw-batch-result]');
      if (outcomeNode) {
        outcomeNode.hidden = !batchOutcome && !batchBusy;
        outcomeNode.textContent = batchBusy ? text('batchProcessing', { total: batchSnapshot.length }) : batchOutcome
          ? text('batchOutcome', { total: batchOutcome.total, success: batchOutcome.succeededKeys.length, failed: batchOutcome.failed.length, unknown: batchOutcome.unknownKeys.length }) +
            (hasUnknown ? ' ' + text('batchUnknown') : batchOutcome.failed.length ? ' ' + batchOutcome.failed.map(function (item) { return item.key + ': ' + item.message; }).join('; ') : '') : '';
        if (hasUnknown) outcomeNode.insertAdjacentHTML('beforeend', ' ' + button(text('verifyOutcome'), 'verifyOutcome', batchBusy ? 'disabled' : ''));
      }
    }
    function runBatch(retry) {
      if (gate !== 'ready' || isRequestPending() || state === 'stale-error' || batchBusy || !scenario.startsWith('batch-')) return;
      if (batchOutcome && batchOutcome.unknownKeys.length) return;
      var keys = retry ? batchOutcome && batchOutcome.failed.filter(function (item) { return item.retryable; }).map(function (item) { return item.key; }) : Array.from(selected);
      if (!keys || !keys.length) return;
      batchSnapshot = keys.slice(); var actionContext = context;
      batchBusy = true; mutationCount++; render();
      later(function () {
        if (actionContext !== context) return;
        var success = retry ? keys : scenario === 'batch-partial' ? keys.slice(0, -1) : [];
        var failed = !retry && scenario === 'batch-partial' ? keys.slice(-1).map(function (key) { return { key: key, message: text('batchFailure'), retryable: true }; }) : [];
        var unknown = !retry && scenario === 'batch-unknown' ? keys.slice() : [];
        batchOutcome = { total: keys.length, succeededKeys: success, failed: failed, unknownKeys: unknown };
        success.forEach(function (key) { selected.delete(key); }); batchBusy = false;
        if (success.length) requestRows(); else render();
      }, 450);
    }
    function verifyOutcome() {
      if (batchBusy || isRequestPending() || gate !== 'ready' || !batchOutcome || !batchOutcome.unknownKeys.length) return;
      var keys = batchOutcome.unknownKeys.slice(), actionContext = context;
      batchSnapshot = keys.slice(); batchBusy = true; verificationCount++; render();
      later(function () {
        if (actionContext !== context) return;
        var succeeded = keys.slice(0, -1), failed = keys.slice(-1).map(function (key) { return { key: key, message: text('batchFailure'), retryable: true }; });
        batchOutcome = { total: keys.length, succeededKeys: succeeded, failed: failed, unknownKeys: [] };
        succeeded.forEach(function (key) { selected.delete(key); }); batchBusy = false; scenarioNote = text('verificationDone');
        requestRows();
      }, 450);
    }
    function runScenario(value) {
      cancelRequest(); auxiliaryTimers.forEach(clearTimeout); auxiliaryTimers.clear();
      actionCleanups.forEach(function (cleanup) { cleanup(); }); pending.clear(); closeMenu(false);
      if (dialog) { dialog.close(); dialog.remove(); dialog = null; }
      scenario = value; context = 'A'; gate = 'ready'; hasResult = true; resultContext = context;
      query = Object.assign({}, initialQuery); resultQuery = Object.assign({}, initialQuery);
      records = fixtures(value === 'delete-last' ? 21 : 56, context); resultRecords = records.slice();
      selected.clear(); batchBusy = false; batchOutcome = null; batchSnapshot = []; optionsFailed = false; optionsBusy = false;
      setState('ready'); scenarioNote = text('scenarioReady'); logs = [];
      host.querySelector('[data-aw-filters]').reset();
      var advancedToggle = host.querySelector('[data-aw-filter-toggle]');
      if (advancedToggle.getAttribute('aria-expanded') === 'true') advancedToggle.click();
      var errors = host.querySelector('[data-aw-filter-errors]'); errors.hidden = true; errors.textContent = '';
      host.querySelectorAll('[data-aw-filter][aria-invalid]').forEach(function (input) { input.removeAttribute('aria-invalid'); input.removeAttribute('aria-describedby'); });
      var observation = host.querySelector('[data-aw-observation]'); if (observation) observation.open = true;
      if (value === 'waiting' || value === 'blocked') {
        gate = value; hasResult = false; resultRecords = []; setState(value); render(); return;
      }
      if (value === 'context-race') {
        hasResult = false; resultRecords = []; requestRows({ delay: 1000, fail: true });
        later(function () {
          context = 'B'; coordinator.invalidate(); hasResult = false; resultRecords = [];
          records = fixtures(34, context); selected.clear(); query = Object.assign({}, initialQuery); queries++;
          requestRows({ delay: 200, replace: true });
        }, 100); return;
      }
      if (value === 'refresh-error') { requestRows({ fail: true }); return; }
      if (value === 'options-error') { optionsFailed = true; scenarioNote = text('optionsFailed'); render(); return; }
      if (value === 'batch-partial' || value === 'batch-unknown') {
        records.slice(0, 3).forEach(function (row) { selected.add(row.id); }); render(); return;
      }
      if (value === 'delete-last') {
        query = Object.assign({}, query, { page: 2 }); resultQuery = Object.assign({}, query);
        danger = true; mixedActions = false; count = 1;
        host.querySelector('[data-aw-danger]').checked = true; host.querySelector('[data-aw-count]').value = '1';
        var mixed = host.querySelector('[data-aw-mixed-actions]'); if (mixed) mixed.checked = false;
        scenarioNote = text('lastPageReady'); render(); return;
      }
      requestRows();
    }
    function canFocus(node) {
      return node && node.isConnected && !node.disabled && node.getAttribute('aria-disabled') !== 'true' && node.getClientRects().length > 0;
    }
    function rowAction(id, preferred) {
      return host.querySelector('[data-aw-row="' + id + '"][data-aw-command="' + preferred + '"]:not(:disabled)') ||
        host.querySelector('[data-aw-row="' + id + '"][data-aw-command]:not(:disabled)');
    }
    function run(action, id, origin) {
      if (pending.has(id) || dialog || state === 'stale-error' || isRequestPending() || gate !== 'ready' || batchBusy || JSON.stringify(query) !== JSON.stringify(resultQuery)) return;
      var actionContext = context;
      if (action === 'delete') {
        var confirmationDone = false;
        dialog = document.createElement('dialog'); dialog.className = 'aw-table-confirm';
        dialog.setAttribute('aria-labelledby', 'aw-table-confirm-title');
        dialog.innerHTML = '<h3 id="aw-table-confirm-title">' + escape(text('confirmDelete')) + '</h3><p>' + escape(text('synthetic')) + '</p><div>' + button(text('cancel'), 'cancel') + button(text('delete'), 'confirm') + '</div>';
        document.body.appendChild(dialog);
        var confirmationDialog = dialog;
        function finish(restore) {
          if (confirmationDone || dialog !== confirmationDialog) return;
          confirmationDone = true;
          dialog.close(); dialog.remove(); dialog = null;
          if (restore !== false && canFocus(origin)) origin.focus({ preventScroll: true });
        }
        dialog.addEventListener('cancel', function (event) { event.preventDefault(); finish(); });
        dialog.addEventListener('click', function (event) {
          if (confirmationDone || actionContext !== context || dialog !== confirmationDialog) return;
          var command = event.target.closest('[data-aw-command]');
          if (!command) return;
          if (command.dataset.awCommand === 'confirm') {
            var visibleIds = Array.from(body.querySelectorAll('[data-aw-select]')).map(function (input) { return input.dataset.awSelect; });
            var index = visibleIds.indexOf(id), preferred = origin ? origin.dataset.awCommand : 'more';
            var nextId = visibleIds[index + 1], previousId = visibleIds[index - 1];
            if (actionContext !== context) { finish(false); return; }
            records = records.filter(function (row) { return row.id !== id; }); selected.delete(id); mutationCount++; finish(false);
            requestRows().then(function () {
              if (actionContext !== context || !alive) return;
              // A user who moved focus while the write/read completed keeps it.
              if (document.activeElement !== document.body) return;
              var returnTo = (nextId && rowAction(nextId, preferred)) || (previousId && rowAction(previousId, preferred)) || host.querySelector('[data-aw-command="search"]');
              if (canFocus(returnTo)) returnTo.focus({ preventScroll: true });
            });
          }
          else finish();
        });
        dialog.showModal(); dialog.querySelector('button').focus(); return;
      }
      var preferred = origin ? origin.dataset.awCommand : action, focusMoved = false;
      function isOrigin(node) { return node && node.dataset && node.dataset.awRow === id && node.dataset.awCommand === preferred; }
      function trackFocus(event) { if (event.target !== document.body && !isOrigin(event.target)) focusMoved = true; }
      document.addEventListener('focusin', trackFocus);
      var actionTimer;
      function cleanupAction() { clearTimeout(actionTimer); document.removeEventListener('focusin', trackFocus); actionCleanups.delete(cleanupAction); }
      actionCleanups.add(cleanupAction);
      pending.add(id); feedback.textContent = text('processing', { action: text(action) }); render();
      actionTimer = setTimeout(function () {
        var shouldRestore = !focusMoved && (document.activeElement === document.body || isOrigin(document.activeElement));
        cleanupAction();
        if (!alive || !host.isConnected || actionContext !== context) return;
        pending.delete(id); feedback.textContent = text('executed', { action: text(action) }); render();
        var returnTo = rowAction(id, preferred);
        if (shouldRestore && canFocus(returnTo)) returnTo.focus({ preventScroll: true });
      }, 350);
    }
    function openMenu(buttonNode) {
      if (buttonNode.disabled || isRequestPending() || state === 'stale-error' || gate !== 'ready' || batchBusy) return;
      closeMenu(false); trigger = buttonNode;
      menu = document.createElement('div'); menu.className = 'aw-table-menu'; menu.setAttribute('role', 'menu');
      menu.setAttribute('aria-label', text('actions')); menu.id = 'aw-table-demo-menu';
      trigger.setAttribute('aria-controls', menu.id); trigger.setAttribute('aria-expanded', 'true');
      var id = trigger.dataset.awRow;
      menu.innerHTML = actions(records.find(function (row) { return row.id === id; })).overflow.map(function (item) { return button(label(item.key), item.key, 'role="menuitem"' + (pending.has(id) ? ' disabled' : '')); }).join('');
      document.body.appendChild(menu);
      var rect = trigger.getBoundingClientRect();
      menuAnchor = { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom };
      menu.style.left = Math.max(8, Math.min(rect.right - menu.offsetWidth, innerWidth - menu.offsetWidth - 8)) + 'px';
      menu.style.top = Math.max(8, Math.min(rect.bottom + 4, innerHeight - menu.offsetHeight - 8)) + 'px';
      menu.addEventListener('click', function (event) { var item = event.target.closest('button'); if (item && !item.disabled) { closeMenu(true); run(item.dataset.awCommand, id, trigger); } });
      menu.addEventListener('keydown', function (event) {
        var items = Array.from(menu.querySelectorAll('button:not(:disabled)'));
        var index = items.indexOf(document.activeElement);
        if (event.key === 'Escape' || event.key === 'Tab') { if (event.key === 'Escape') event.preventDefault(); closeMenu(true); return; }
        if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key) && items.length) {
          event.preventDefault(); items[event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + (event.key === 'ArrowUp' ? -1 : 1) + items.length) % items.length].focus();
        }
      });
      var first = menu.querySelector('button:not(:disabled)'); if (first) first.focus({ preventScroll: true });
    }
    host.addEventListener('click', function (event) {
      var optionRetry = event.target.closest('[data-aw-command="retryOptions"]');
      if (optionRetry) {
        if (!optionsFailed || optionsBusy) return;
        optionsBusy = true; optionsRequests++; render();
        later(function () { optionsBusy = false; optionsFailed = false; scenarioNote = text('optionsRecovered'); render(); }, 350); return;
      }
      if (event.target.closest('[data-aw-filters]')) return;
      var value = event.target.closest('[data-aw-value][data-aw-truncated="true"]');
      if (value) { value.focus({ preventScroll: true }); value.dataset.awExpanded = 'true'; return; }
      var buttonNode = event.target.closest('[data-aw-command]');
      if (!buttonNode || buttonNode.disabled) return;
      var action = buttonNode.dataset.awCommand;
      if (action === 'columns') { openColumns(); return; }
      if (action === 'columnsCancel') { closeColumns(true); return; }
      if (action === 'columnsReset') { columnDraft = new Set(); paintColumnDraft(); return; }
      if (action === 'columnsApply') {
        hiddenColumns = new Set(columnDraft);
        try { localStorage.setItem(columnStorageKey, JSON.stringify({ schemaVersion: 1, hiddenIds: Array.from(hiddenColumns) })); } catch (_) { /* Preferences remain usable for this view. */ }
        closeColumns(true); render(); return;
      }
      if (!canQuery() && ['reset', 'previous', 'next', 'sort', 'retry'].includes(action)) return;
      if (action === 'runScenario') { runScenario(host.querySelector('[data-aw-scenario]').value); return; }
      if (action === 'resumeScope') { if (gate === 'ready') return; gate = 'ready'; setState('ready'); requestRows(); return; }
      if (action === 'verifyOutcome') { verifyOutcome(); return; }
      if (action === 'batchRun' || action === 'batchRetry') { runBatch(action === 'batchRetry'); return; }
      if (action === 'reset') host.querySelector('[data-aw-filter-reset]').click();
      else if (action === 'previous' || action === 'next') commit({ type: 'page', value: query.page + (action === 'next' ? 1 : -1) });
      else if (action === 'sort') commit({ type: 'sort', value: query.sort === '' ? 'asc' : query.sort === 'asc' ? 'desc' : '' });
      else if (action === 'clearSelection') { selected.clear(); render(); }
      else if (action === 'retry') requestRows();
      else if (action === 'more') openMenu(buttonNode);
      else run(action, buttonNode.dataset.awRow, buttonNode);
    });
    host.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') showColumnTooltip(false);
      if (event.key === 'Escape' && !host.querySelector('[data-aw-columns-panel]').hidden) { event.preventDefault(); closeColumns(true); return; }
      if (event.target.matches('[data-aw-value][data-aw-truncated="true"]')) {
        if (['Enter', ' ', 'Escape'].includes(event.key)) {
          event.preventDefault();
          if (event.key === 'Escape') event.target.removeAttribute('data-aw-expanded');
          else event.target.dataset.awExpanded = 'true';
        }
        return;
      }
      if (event.key === 'ArrowDown' && event.target.matches('[data-aw-command="more"]')) { event.preventDefault(); openMenu(event.target); }
    });
    host.addEventListener('focusin', function (event) {
      if (event.target.matches('[data-aw-value][data-aw-truncated="true"]')) event.target.dataset.awExpanded = 'true';
    });
    host.addEventListener('focusout', function (event) {
      if (event.target.matches('[data-aw-value]')) event.target.removeAttribute('data-aw-expanded');
    });
    host.addEventListener('change', function (event) {
      var target = event.target;
      if (target.matches('[data-aw-column-option]')) {
        var key = target.dataset.awColumnOption;
        if (optionalColumn(key)) { if (target.checked) columnDraft.delete(key); else columnDraft.add(key); }
        return;
      }
      if (target.closest('[data-aw-filters]')) return;
      if (target.matches('[data-aw-scenario]')) return;
      if (target.matches('[data-aw-mixed-actions]')) mixedActions = target.checked;
      else if (target.matches('[data-aw-long-labels]')) longLabels = target.checked;
      else if (target.matches('[data-aw-count]')) count = Number(target.value);
      else if (target.matches('[data-aw-danger]')) danger = target.checked;
      else if (target.matches('[data-aw-state]')) { cancelRequest(); gate = 'ready'; state = target.value; if (state === 'loading' || state === 'error') hasResult = false; else { hasResult = true; resultQuery = Object.assign({}, query); resultRecords = records.slice(); } }
      else if (target.matches('[data-aw-density]')) density = target.value;
      else if (target.matches('[data-aw-narrow]')) host.querySelector('[data-aw-region]').classList.toggle('aw-table-narrow', target.checked);
      else if (target.matches('[data-aw-page-size]')) {
        if (!canQuery()) { target.value = String(query.pageSize); return; }
        commit({ type: 'pageSize', value: Number(target.value) }); return;
      }
      else if (target.matches('[data-aw-select]')) { if (target.disabled || state === 'stale-error' || isRequestPending() || gate !== 'ready' || batchBusy || JSON.stringify(query) !== JSON.stringify(resultQuery)) return; if (target.checked) selected.add(target.dataset.awSelect); else selected.delete(target.dataset.awSelect); }
      else if (target.matches('[data-aw-select-all]')) { if (target.disabled || state === 'stale-error' || isRequestPending() || gate !== 'ready' || batchBusy || JSON.stringify(query) !== JSON.stringify(resultQuery)) return; rows().slice((resultQuery.page - 1) * resultQuery.pageSize, resultQuery.page * resultQuery.pageSize).forEach(function (row) { if (target.checked) selected.add(row.id); else selected.delete(row.id); }); }
      render();
    });
    function outside(event) {
      if (menu && !menu.contains(event.target) && event.target !== trigger) closeMenu(false);
      var panel = host.querySelector('[data-aw-columns-panel]');
      if (!panel.hidden && !panel.contains(event.target) && !event.target.closest('[data-aw-command="columns"]')) closeColumns(false);
    }
    document.addEventListener('pointerdown', outside);
    function onScroll(event) {
      if (!menu || !trigger || menu.contains(event.target)) return;
      var rect = trigger.getBoundingClientRect();
      // Focusing an offscreen trigger scrolls synchronously, but its scroll
      // event arrives after the menu opens. Keep that unchanged anchor open.
      if (menuAnchor && ['left', 'top', 'right', 'bottom'].every(function (edge) {
        return Math.abs(rect[edge] - menuAnchor[edge]) < 0.5;
      })) return;
      closeMenu(true);
    }
    document.addEventListener('scroll', onScroll, true);
    var previousWidth = -1;
    var observer = new ResizeObserver(function () { var width = Math.round(viewport.clientWidth); if (width !== previousWidth) { previousWidth = width; render(); } });
    observer.observe(viewport);
    function onFontsChange() { if (alive && host.isConnected) render(); }
    if (document.fonts) {
      document.fonts.addEventListener('loadingdone', onFontsChange);
      document.fonts.ready.then(onFontsChange);
    }
    filters = window.AWTableFiltersDemo.mount(host.querySelector('[data-aw-filters]'), {
      fields: filterFields, defaults: initialQuery, applied: query, text: text,
      onApply: function (values) {
        if (!canQuery()) return;
        var next = reduceQuery(query, { type: 'search', values: values });
        if (next !== query) { selected.clear(); query = next; queries++; }
        // A valid search always requests once, even when query identity is unchanged.
        return requestRows();
      },
      onReset: function (values) {
        if (!canQuery()) return;
        selected.clear(); batchOutcome = null;
        // A no-op reset only resets the draft/selection. It cannot invent a
        // successful response or erase a failed read without making a request.
        commit({ type: 'reset', values: Object.assign({}, initialQuery, values) }); render();
      }
    });
    render();
    dispose = function () { alive = false; cancelRequest(); auxiliaryTimers.forEach(clearTimeout); auxiliaryTimers.clear(); actionCleanups.forEach(function (cleanup) { cleanup(); }); filters.destroy(); observer.disconnect(); closeMenu(false); if (dialog) dialog.remove(); if (document.fonts) document.fonts.removeEventListener('loadingdone', onFontsChange); document.removeEventListener('pointerdown', outside); document.removeEventListener('scroll', onScroll, true); };
  }
  return { mount: mount, planActions: planActions, planActionColumn: planActionColumn, reduceQuery: reduceQuery, createRequestCoordinator: createRequestCoordinator };
});
