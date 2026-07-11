/* AngelWatch Design System — SPA 路由器
 *
 * 单页面应用控制器。负责:
 *   1. 主题持久化 (localStorage 'aw-theme')
 *   2. 渲染品牌区 / 侧边栏 / toolbar (面包屑 + 主题切换)
 *   3. hash 路由 (#/color → 动态 <script> 加载 pages/color.js → inject into <main>)
 *   4. 跨视图保持 active 状态 / 滚动顶部 / 文档标题
 *
 * **完全静态,file:// 直接打开就能用。**
 * 每个 page fragment 都是 JS 文件,通过 `<script>` 动态注入而非 fetch(),
 * 避开浏览器对 file:// 协议下 fetch 的限制。
 */
(function () {
  'use strict';

  // === 66 routes (id → label, group) across 6 navigation groups ===
  var ROUTES = [
    ['overview',              '设计系统概览',                        '导览'],
    ['ai-reference',          'AI 开发入口',                       '导览'],
    ['cases',                 '终端管理实践案例',                      '导览'],
    ['color',                 '色彩 Token',                      '设计基础'],
    ['dark',                  '暗色主题',                          '设计基础'],
    ['i18n',                  '多语言',                           '设计基础'],
    ['type',                  '字体与字号',                         '设计基础'],
    ['space',                 '间距',                            '设计基础'],
    ['radius',                '圆角与阴影',                         '设计基础'],
    ['motion',                '动效',                            '设计基础'],
    ['layout',                '布局栅格',                          '设计基础'],
    ['responsive',            '响应式断点',                         '设计基础'],
    ['palette',               '扩展色板',                          '设计基础'],
    ['icons',                 '图标',                            '设计基础'],
    ['illustration',          '图形化规则',                         '设计基础'],
    ['a11y',                  '无障碍',                           '设计基础'],
    ['buttons',               '按钮 Button',                     '通用组件'],
    ['inputs',                '输入与表单 Input',                   '通用组件'],
    ['menu',                  '菜单 Menu',                       '通用组件'],
    ['nav-comp',              '导航与标签页',                        '通用组件'],
    ['table',                 '表格 Table',                      '通用组件'],
    ['tags',                  '标签与状态 Tag',                     '通用组件'],
    ['feedback',              '反馈 Feedback',                   '通用组件'],
    ['progress',              '进度与步骤',                         '通用组件'],
    ['datepicker',            '日期选择',                          '通用组件'],
    ['upload',                '上传 Upload',                     '通用组件'],
    ['tree-comp',             '树 Tree',                        '通用组件'],
    ['drawer',                '抽屉 Drawer',                     '通用组件'],
    ['toast',                 '消息与通知',                         '通用组件'],
    ['skeleton',              '骨架屏 Skeleton',                  '通用组件'],
    ['status-matrix',         '终端状态矩阵',                        '业务模式'],
    ['data-cards',            '设备卡片 DataCard',                 '业务模式'],
    ['row-actions',           '行操作 RowActions',                '业务模式'],
    ['charts',                '数据图表 Charts',                   '业务模式'],
    ['cascader',              '级联与穿梭',                         '业务模式'],
    ['advanced-form',         '数字输入与校验',                       '业务模式'],
    ['tab-variants',          'Tabs 与 Popconfirm',             '业务模式'],
    ['avatar-result',         '头像 / 结果 / 描述',                  '业务模式'],
    ['empty-state',           '空状态 Empty',                     '业务模式'],
    ['error-page',            '错误页 ErrorPage',                 '业务模式'],
    ['loading-levels',        '加载层次 Loading',                  '业务模式'],
    ['page-header',           '页头 PageHeader',                 '业务模式'],
    ['shell',                 '应用外壳 Shell',                    '页面蓝图'],
    ['login-page',            '登录页 LoginPage',                 '页面蓝图'],
    ['list-page',             '列表页 ListPage',                  '页面蓝图'],
    ['detail-page',           '详情页 DetailPage',                '页面蓝图'],
    ['form-page',             '表单页 FormPage',                  '页面蓝图'],
    ['tree-list',             '树列表 TreeListLayout',            '页面蓝图'],
    ['wizard-page',           '向导页 WizardPage',                '页面蓝图'],
    ['dash-page',             '首页仪表盘 Dashboard',               '页面蓝图'],
    ['device-center-page',    '数据中心 DeviceCenterPage',         '页面蓝图'],
    ['market-page',           '应用市场 MarketPage',               '页面蓝图'],
    ['ota-page',              'OTA 升级 OtaPage',                '页面蓝图'],
    ['push-page',             '推送任务 PushPage',                 '页面蓝图'],
    ['user-mgmt-page',        '账户权限 UserMgmtPage',             '页面蓝图'],
    ['map-page',              '设备地图 MapPage',                  '页面蓝图'],
    ['service-page',          '增值服务 ServicePage',              '页面蓝图'],
    ['ops-page',              '运营与系统管理 OpsPage',               '页面蓝图'],
    ['ecosystem',             '生态库集成',                         '工程落地'],
    ['tech-stack',            '技术栈速查',                         '工程落地'],
    ['config-provider',       '全局配置 ConfigProvider',           '工程落地'],
    ['api',                   '组件 API 约定',                     '工程落地'],
    ['data-format',           '数据格式',                          '工程落地'],
    ['copywriting',           '文案规范',                          '工程落地'],
    ['whitelabel',            '白标与租户主题',                       '工程落地'],
    ['do-dont',               '规范红线',                          '工程落地']
  ];
  var ROUTE_MAP = {};
  ROUTES.forEach(function (r) { ROUTE_MAP[r[0]] = { label: r[1], group: r[2] }; });
  var DEFAULT_ROUTE = 'overview';
  var GROUP_KEYS = {
    '导览': 'guide',
    '设计基础': 'foundations',
    '通用组件': 'components',
    '业务模式': 'patterns',
    '页面蓝图': 'blueprints',
    '工程落地': 'implementation'
  };

  var BRAND_LOGO = 'favicon.ico';
  var SUN_SVG  = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
  var MOON_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  function createFallbackI18n() {
    var locale = 'zh-CN';
    return {
      setLocale: function (value) {
        locale = value === 'en-US' || value === 'en' ? 'en-US' : 'zh-CN';
        return locale;
      },
      getLocale: function () { return locale; },
      register: function () {},
      t: function (_, params, fallback) {
        return String(fallback == null ? '' : fallback).replace(/\{([A-Za-z0-9_]+)\}/g, function (placeholder, key) {
          return params && params[key] != null ? String(params[key]) : placeholder;
        });
      },
      apply: function () {},
      getCatalogs: function () { return {}; }
    };
  }

  window.__AW_I18N__ = window.__AW_I18N__ || createFallbackI18n();

  function tCommon(key, params, fallback) {
    return window.__AW_I18N__.t('common:' + key, params, fallback);
  }

  function getGroupLabel(group) {
    return tCommon('group.' + GROUP_KEYS[group], null, group);
  }

  function getRouteLabel(routeId) {
    return tCommon('route.' + routeId, null, ROUTE_MAP[routeId].label);
  }

  function getCurrentLocale() {
    return window.__AW_I18N__.getLocale();
  }

  function formatMonth(date, locale) {
    return new Intl.DateTimeFormat(locale || getCurrentLocale(), { year: 'numeric', month: 'long' }).format(date);
  }

  function formatNumber(value, locale) {
    return new Intl.NumberFormat(locale || getCurrentLocale()).format(value);
  }

  // === sidebar grouping ===
  function groupRoutes() {
    var groups = {};
    ROUTES.forEach(function (r) {
      (groups[r[2]] = groups[r[2]] || []).push({ id: r[0], label: r[1] });
    });
    // Menu order follows the reading path: orient → foundations → components → business patterns → pages → implementation.
    var order = ['导览', '设计基础', '通用组件', '业务模式', '页面蓝图', '工程落地'];
    return order.map(function (name) { return [name, groups[name] || []]; });
  }

  function buildSidebar(activeId) {
    var html = [
      '<div class="brand">',
      '  <div class="brand-logo"><img src="' + BRAND_LOGO + '" alt="AngelWatch" /></div>',
      '  <div class="brand-name">AngelWatch<small>Design System</small></div>',
      '</div>'
    ];
    groupRoutes().forEach(function (g) {
      var name = g[0], items = g[1];
      if (!items.length) return;
      html.push('');
      html.push('<div class="nav-section">' + getGroupLabel(name) + '</div>');
      html.push('<nav class="nav">');
      items.forEach(function (it) {
        var cls = it.id === activeId ? ' class="active"' : '';
        html.push('  <a href="#/' + it.id + '"' + cls + '><span class="dot"></span>' + getRouteLabel(it.id) + '</a>');
      });
      html.push('</nav>');
    });
    return html.join('\n');
  }

  function buildLocaleToggle() {
    var current = getCurrentLocale();
    return '<div class="locale-toggle-fixed" role="group" aria-label="' + tCommon('language.switch', null, '语言切换') + '">' +
      '<button class="tt-btn' + (current === 'zh-CN' ? ' is-active' : '') + '" data-locale-set="zh-CN" aria-pressed="' + (current === 'zh-CN' ? 'true' : 'false') + '" aria-label="' + tCommon('language.zh', null, '中文') + '">' + tCommon('language.zh', null, '中文') + '</button>' +
      '<button class="tt-btn' + (current === 'en-US' ? ' is-active' : '') + '" data-locale-set="en-US" aria-pressed="' + (current === 'en-US' ? 'true' : 'false') + '" aria-label="' + tCommon('language.en', null, 'English') + '">' + tCommon('language.en', null, 'English') + '</button>' +
      '</div>';
  }

  function buildThemeToggle() {
    return '<div class="theme-toggle-fixed" role="group" aria-label="' + tCommon('theme.switch', null, '主题切换') + '">' +
      '<button class="tt-btn" data-theme-set="light" aria-label="' + tCommon('theme.light', null, 'Light 主题') + '">' + SUN_SVG + tCommon('theme.light', null, 'Light') + '</button>' +
      '<button class="tt-btn" data-theme-set="dark" aria-label="' + tCommon('theme.dark', null, 'Dark 主题') + '">' + MOON_SVG + tCommon('theme.dark', null, 'Dark') + '</button>' +
      '</div>';
  }

  function buildToolbar(routeId) {
    var meta = ROUTE_MAP[routeId];
    var bcLeaf, bcGroup;
    if (routeId === 'overview') {
      bcGroup = getGroupLabel('导览');
      bcLeaf = tCommon('breadcrumb.overview', null, '概览');
    } else {
      bcGroup = getGroupLabel(meta.group);
      bcLeaf = getRouteLabel(routeId);
    }
    var bc = '<div class="comp-bc">' +
             (routeId === 'overview' ? '<span class="leaf">' + bcLeaf + '</span>' :
              '<a href="#/overview">' + tCommon('breadcrumb.home', null, '概览') + '</a>' +
              '<span class="sep">/</span>' +
              '<span class="group">' + bcGroup + '</span>' +
              '<span class="sep">/</span>' +
              '<span class="leaf">' + bcLeaf + '</span>') +
             '</div>';
    return bc + '<div class="toolbar-controls">' + buildLocaleToggle() + buildThemeToggle() + '</div>';
  }

  // === theme handling ===
  function getSavedTheme() {
    try {
      var t = localStorage.getItem('aw-theme');
      return (t === 'dark' || t === 'light') ? t : null;
    } catch (e) { return null; }
  }

  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('aw-theme', t); } catch (e) {}
    syncThemeButtons();
  }

  function syncThemeButtons() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    document.querySelectorAll('[data-theme-set]').forEach(function (b) {
      var active = b.getAttribute('data-theme-set') === current;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function wireThemeToggle() {
    syncThemeButtons();
    document.querySelectorAll('[data-theme-set]').forEach(function (b) {
      // Avoid double-binding by replacing the listener
      b.onclick = function () { setTheme(b.getAttribute('data-theme-set')); };
    });
  }

  function setLocale(locale) {
    var scrollY = window.scrollY || 0;
    var normalized = window.__AW_I18N__.setLocale(locale);
    document.documentElement.setAttribute('lang', normalized);
    try { localStorage.setItem('aw-locale', normalized); } catch (e) {}
    loadRoute(getRouteFromHash() || DEFAULT_ROUTE, { preserveScroll: true, scrollY: scrollY, focusLocale: normalized });
  }

  function syncLocaleButtons() {
    var current = getCurrentLocale();
    document.querySelectorAll('[data-locale-set]').forEach(function (b) {
      var active = b.getAttribute('data-locale-set') === current;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function wireLocaleToggle() {
    syncLocaleButtons();
    document.querySelectorAll('[data-locale-set]').forEach(function (b) {
      b.onclick = function () { setLocale(b.getAttribute('data-locale-set')); };
    });
  }

  // === demo interactions ===
  function setSingleActive(el, selector, cls) {
    var scope = el.parentElement || document;
    scope.querySelectorAll(selector).forEach(function (item) {
      item.classList.remove(cls);
      item.classList.remove('is-active');
    });
    el.classList.add(cls);
    el.classList.add('is-active');
  }

  function setOutput(root, name, value) {
    root.querySelectorAll('[data-demo-output="' + name + '"]').forEach(function (el) {
      el.textContent = value;
    });
  }

  function getOutput(root, name, fallback) {
    var el = root.querySelector('[data-demo-output="' + name + '"]');
    return el ? el.textContent : fallback;
  }

  function pulse(el) {
    el.classList.add('demo-pressed');
    window.setTimeout(function () { el.classList.remove('demo-pressed'); }, 180);
  }

  function showDemoToast(root, message) {
    var toast = root.querySelector('.demo-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'demo-toast';
      toast.setAttribute('role', 'status');
      root.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showDemoToast.timer);
    showDemoToast.timer = window.setTimeout(function () {
      toast.classList.remove('show');
    }, 1400);
  }

  function updateDateTimeStart(root) {
    var emptyDate = tCommon('picker.dateEmpty', null, '未选择日期');
    var emptyTime = tCommon('picker.timeEmpty', null, '未选择时间');
    var date = getOutput(root, 'date', '2026-04-20');
    var time = getOutput(root, 'time', '02:00');
    if (date === emptyDate || time === emptyTime) return;
    setOutput(root, 'datetime-start', date + ' ' + time);
  }

  function handleDemoAction(root, el, action, event) {
    event.preventDefault();
    pulse(el);

    if (action === 'quick-range') {
      setSingleActive(el, '.chip', 'active');
      setOutput(root, 'range-start', el.getAttribute('data-range-start'));
      setOutput(root, 'range-end', el.getAttribute('data-range-end'));
      setOutput(root, 'date', el.getAttribute('data-range-end'));
      updateDateTimeStart(root);
      showDemoToast(root, tCommon('demo.quickRange', { label: el.textContent.trim() }, '已切换到「{label}」'));
      return;
    }

    if (action === 'date-select') {
      var calendar = el.closest('.calendar');
      if (calendar) {
        calendar.querySelectorAll('.day.selected').forEach(function (day) {
          day.classList.remove('selected');
        });
      }
      el.classList.add('selected');
      setOutput(root, 'date', el.getAttribute('data-date'));
      setOutput(root, 'range-end', el.getAttribute('data-date'));
      updateDateTimeStart(root);
      showDemoToast(root, tCommon('demo.dateSelected', { date: el.getAttribute('data-date') }, '已选择日期 {date}'));
      return;
    }

    if (action === 'time-select') {
      setSingleActive(el, '.time-option', 'active');
      var time = el.getAttribute('data-time');
      var endMap = { '02:00': '06:00', '06:00': '10:00', '12:30': '16:30', '22:00': '02:00(+1)' };
      setOutput(root, 'time', time);
      setOutput(root, 'datetime-end', endMap[time] || '06:00');
      updateDateTimeStart(root);
      showDemoToast(root, tCommon('demo.timeSelected', { time: time }, '已选择时间 {time}'));
      return;
    }

    if (action === 'time-part') {
      setSingleActive(el, 'button', 'active');
      var picker = el.closest('.time-picker');
      if (picker) {
        var cols = picker.querySelectorAll('.time-col');
        var hEl = cols[0].querySelector('.active,.is-active') || cols[0].querySelector('button');
        var mEl = cols[1].querySelector('.active,.is-active') || cols[1].querySelector('button');
        var sEl = cols[2].querySelector('.active,.is-active') || cols[2].querySelector('button');
        var h = hEl ? hEl.textContent.trim() : '00';
        var m = mEl ? mEl.textContent.trim() : '00';
        var s = sEl ? sEl.textContent.trim() : '00';
        var value = h + ':' + m + (s === '00' ? '' : ':' + s);
        setOutput(root, 'time', value);
        updateDateTimeStart(root);
        showDemoToast(root, tCommon('demo.timeSet', { time: value }, '已设置时间 {time}'));
      }
      return;
    }

    if (action === 'month-prev' || action === 'month-next') {
      var label = root.querySelector('[data-demo-output="month-label"]');
      var months = [new Date(2026, 2, 1), new Date(2026, 3, 1), new Date(2026, 4, 1)];
      var idx = label && label.getAttribute('data-month-index') ? parseInt(label.getAttribute('data-month-index'), 10) : 1;
      if (isNaN(idx)) idx = 1;
      idx = action === 'month-prev' ? Math.max(0, idx - 1) : Math.min(months.length - 1, idx + 1);
      var monthLabel = formatMonth(months[idx], getCurrentLocale());
      if (label) {
        label.textContent = monthLabel;
        label.setAttribute('data-month-index', String(idx));
      }
      showDemoToast(root, tCommon('demo.monthChanged', { month: monthLabel }, '切换到 {month}'));
      return;
    }

    if (action === 'clear-picker') {
      setOutput(root, 'date', tCommon('picker.dateEmpty', null, '未选择日期'));
      setOutput(root, 'time', tCommon('picker.timeEmpty', null, '未选择时间'));
      setOutput(root, 'range-start', tCommon('picker.rangeStart', null, '开始日期'));
      setOutput(root, 'range-end', tCommon('picker.rangeEnd', null, '结束日期'));
      setOutput(root, 'datetime-start', tCommon('picker.dateTimeStart', null, '开始时间'));
      setOutput(root, 'datetime-end', tCommon('picker.dateTimeEnd', null, '结束时间'));
      root.querySelectorAll('.selected,.active,.is-active').forEach(function (item) {
        if (!item.hasAttribute('data-theme-set')) {
          item.classList.remove('selected', 'active', 'is-active');
        }
      });
      showDemoToast(root, tCommon('demo.selectionCleared', null, '已清空选择'));
      return;
    }

    if (action === 'confirm-picker') {
      showDemoToast(root, tCommon('demo.selectionConfirmed', null, '已确认当前日期时间'));
      return;
    }
  }

  function wireDemoInteractions(root) {
    if (!root) return;

    root.onclick = function (event) {
      var target = event.target;
      var actionEl = target.closest && target.closest('[data-demo-action]');
      if (actionEl && root.contains(actionEl)) {
        handleDemoAction(root, actionEl, actionEl.getAttribute('data-demo-action'), event);
        return;
      }

      var routeLink = target.closest && target.closest('a[href^="#/"]');
      if (routeLink) return;

      var select = target.closest && target.closest('.select');
      if (select && root.contains(select)) {
        event.preventDefault();
        select.classList.toggle('is-open');
        showDemoToast(root, select.classList.contains('is-open') ?
          tCommon('demo.selectExpanded', null, '已展开选择器') :
          tCommon('demo.selectCollapsed', null, '已收起选择器'));
        return;
      }

      var page = target.closest && target.closest('.pager .page');
      if (page && root.contains(page)) {
        event.preventDefault();
        var text = page.textContent.trim();
        if (!/[‹›…]/.test(text)) setSingleActive(page, '.page', 'is-active');
        var pageLabel = /^\d+$/.test(text) ? formatNumber(Number(text), getCurrentLocale()) : text;
        showDemoToast(root, tCommon('demo.pageClicked', { page: pageLabel }, '分页点击：{page}'));
        return;
      }

      var tab = target.closest && target.closest('.tabs a, .viewtoggle button, .seg button, .chip');
      if (tab && root.contains(tab)) {
        event.preventDefault();
        setSingleActive(tab, tab.tagName === 'A' ? 'a' : tab.classList.contains('chip') ? '.chip' : 'button', tab.classList.contains('chip') ? 'active' : 'active');
        showDemoToast(root, tCommon('demo.viewChanged', { label: tab.textContent.trim() }, '已切换：{label}'));
        return;
      }

      var button = target.closest && target.closest('button, .btn');
      if (button && root.contains(button) && !button.disabled) {
        event.preventDefault();
        pulse(button);
        showDemoToast(root, tCommon('demo.buttonClicked', {
          action: button.textContent.trim() || tCommon('demo.defaultAction', null, '操作')
        }, '已点击：{action}'));
      }
    };

    root.onchange = function (event) {
      var input = event.target;
      if (!input.matches || !input.matches('input[type="checkbox"]')) return;
      var row = input.closest('tr');
      var label = input.closest('label');
      if (row) row.classList.toggle('is-selected', input.checked);
      if (label) label.classList.toggle('is-checked', input.checked);
      showDemoToast(root, input.checked ? tCommon('demo.checked', null, '已选中') : tCommon('demo.unchecked', null, '已取消选中'));
    };
  }

  // === routing ===
  var currentReqId = 0;

  function getRouteFromHash() {
    var h = location.hash || '';
    var m = h.match(/^#\/?([\w-]+)/);
    if (m && ROUTE_MAP[m[1]]) return m[1];
    return null;  // null means: invalid or empty hash
  }

  function showError(routeId) {
    return '<div class="content"><div class="surface" style="padding:48px;text-align:center;max-width:680px;margin:48px auto">' +
           '<h2 style="margin:0 0 12px;color:var(--aw-danger)">' + tCommon('loadFailed', null, '加载失败') + '</h2>' +
           '<p style="color:var(--aw-text-2);margin:0 0 16px">' + tCommon('loadFailedBody', { route: routeId }, '无法加载 pages/{route}.js') + '</p>' +
           '<p style="color:var(--aw-text-3);font-size:13px;line-height:1.7">' + tCommon('checkFile', null, '检查文件是否存在,或刷新页面重试。') + '</p>' +
           '<button class="btn" onclick="location.reload()">' + tCommon('retry', null, '重试') + '</button>' +
           '</div></div>';
  }

  // page 注册表(由 pages/<id>.js 注入到 window.__AW_PAGES__)
  window.__AW_PAGES__ = window.__AW_PAGES__ || {};
  // 已经发起加载的 script 缓存,避免重复 inject
  var loadedScripts = {};
  var loadedLocaleScripts = {};

  function loadPageScript(routeId) {
    return new Promise(function (resolve, reject) {
      // 已注册:同步返回
      if (window.__AW_PAGES__[routeId]) {
        resolve(window.__AW_PAGES__[routeId]);
        return;
      }
      // 已发起加载但未完成:挂等待
      if (loadedScripts[routeId]) {
        loadedScripts[routeId].push({ resolve: resolve, reject: reject });
        return;
      }
      loadedScripts[routeId] = [{ resolve: resolve, reject: reject }];
      var s = document.createElement('script');
      s.src = 'pages/' + routeId + '.js';
      s.onload = function () {
        var waiters = loadedScripts[routeId] || [];
        var html = window.__AW_PAGES__[routeId];
        if (html != null) {
          waiters.forEach(function (w) { w.resolve(html); });
        } else {
          delete loadedScripts[routeId];
          waiters.forEach(function (w) {
            w.reject(new Error('script loaded but no page registered: ' + routeId));
          });
        }
      };
      s.onerror = function () {
        var waiters = loadedScripts[routeId] || [];
        delete loadedScripts[routeId];
        waiters.forEach(function (w) {
          w.reject(new Error('failed to load pages/' + routeId + '.js'));
        });
      };
      document.head.appendChild(s);
    });
  }

  function loadLocaleScript(routeId) {
    return new Promise(function (resolve, reject) {
      if (loadedLocaleScripts[routeId] === true) {
        resolve(true);
        return;
      }
      if (loadedLocaleScripts[routeId] === false) {
        resolve(false);
        return;
      }
      if (loadedLocaleScripts[routeId]) {
        loadedLocaleScripts[routeId].push({ resolve: resolve, reject: reject });
        return;
      }
      loadedLocaleScripts[routeId] = [{ resolve: resolve, reject: reject }];
      var script = document.createElement('script');
      script.src = 'i18n/en-US/' + routeId + '.js';
      script.onload = function () {
        var waiters = loadedLocaleScripts[routeId] || [];
        loadedLocaleScripts[routeId] = true;
        waiters.forEach(function (w) { w.resolve(true); });
      };
      script.onerror = function () {
        var waiters = loadedLocaleScripts[routeId] || [];
        loadedLocaleScripts[routeId] = false;
        waiters.forEach(function (w) {
          w.reject(new Error('failed to load i18n/en-US/' + routeId + '.js'));
        });
      };
      document.head.appendChild(script);
    });
  }

  function loadEnglishCatalogOrFallback(routeId) {
    if (getCurrentLocale() !== 'en-US') return Promise.resolve(false);
    return loadLocaleScript(routeId).catch(function (error) {
      console.error('[i18n]', error);
      return false;
    });
  }

  function finishRouteRender(slot, options) {
    wireDemoInteractions(slot);
    if (options.preserveScroll) {
      requestAnimationFrame(function () {
        window.scrollTo(0, options.scrollY || 0);
        if (options.focusLocale) {
          var button = document.querySelector('[data-locale-set="' + options.focusLocale + '"]');
          if (button) button.focus({ preventScroll: true });
        }
      });
      return;
    }
    window.scrollTo(0, 0);
  }

  function loadRoute(routeId, options) {
    options = options || {};
    if (!ROUTE_MAP[routeId]) routeId = DEFAULT_ROUTE;
    var reqId = ++currentReqId;

    var slot = document.getElementById('app-slot');
    var sidebar = document.getElementById('app-side');
    var toolbar = document.getElementById('app-toolbar');

    // Update sidebar + toolbar synchronously (no flicker)
    if (sidebar) sidebar.innerHTML = buildSidebar(routeId);
    if (toolbar) toolbar.innerHTML = buildToolbar(routeId);
    wireThemeToggle();
    wireLocaleToggle();

    // Update title
    document.title = (routeId === 'overview' ? '' : (getRouteLabel(routeId) + ' · ')) +
                     'AngelWatch Design System';

    if (!window.__AW_PAGES__[routeId]) {
      slot.innerHTML = '<div class="content"><div style="padding:64px;text-align:center;color:var(--aw-text-3);font-size:13px">' + tCommon('loading', null, '加载中…') + '</div></div>';
    }

    var pagePromise = loadPageScript(routeId);
    var localePromise = loadEnglishCatalogOrFallback(routeId);

    Promise.all([pagePromise, localePromise]).then(function (result) {
      if (reqId !== currentReqId) return;
      var html = result[0];
      slot.innerHTML = html;
      window.__AW_I18N__.apply(slot);
      finishRouteRender(slot, options);
    }).catch(function (err) {
      if (reqId !== currentReqId) return;
      slot.innerHTML = showError(routeId);
      finishRouteRender(slot, options);
      console.error('[router]', err);
    });
  }

  function navigate() {
    var route = getRouteFromHash();
    loadRoute(route || DEFAULT_ROUTE);
  }

  function init() {
    window.addEventListener('hashchange', navigate);
    navigate();
  }

  // === bootstrap ===
  var initialLocale = window.__AW_I18N__.setLocale(document.documentElement.getAttribute('lang'));
  document.documentElement.setAttribute('lang', initialLocale);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
