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

  // === 41 routes (id → label, group) ===
  var ROUTES = [
    ['overview',         '概览',                            '导览'],
    ['color',            '色彩',                            '基础'],
    ['i18n',             '国际化',                          '基础'],
    ['type',             '字体',                            '基础'],
    ['space',            '间距',                            '基础'],
    ['radius',           '圆角与阴影',                      '基础'],
    ['motion',           '动效',                            '基础'],
    ['layout',           '布局栅格',                        '基础'],
    ['palette',          '扩展色板',                        '基础'],
    ['buttons',          '按钮',                            '通用组件'],
    ['inputs',           '输入与表单',                      '通用组件'],
    ['tags',             '标签 / 状态',                     '通用组件'],
    ['table',            '表格 / 分页',                     '通用组件'],
    ['nav-comp',         '导航 / 标签页',                   '通用组件'],
    ['feedback',         '反馈',                            '通用组件'],
    ['progress',         '进度 / 步骤',                     '通用组件'],
    ['datepicker',       '日期选择',                        '通用组件'],
    ['upload',           '上传',                            '通用组件'],
    ['tree-comp',        '树',                              '通用组件'],
    ['drawer',           '抽屉',                            '通用组件'],
    ['toast',            '瞬时反馈',                        '通用组件'],
    ['skeleton',         '骨架屏',                          '通用组件'],
    ['status-matrix',    '设备状态矩阵',                    '业务组件'],
    ['data-cards',       'DataCard 设备卡片',               '业务组件'],
    ['cascader',         'Cascader / Transfer',             '业务组件'],
    ['advanced-form',    'NumberInput / 校验态',            '业务组件'],
    ['tab-variants',     'Tabs 变体 / Popconfirm',          '业务组件'],
    ['avatar-result',    'Avatar / Result / Description',   '业务组件'],
    ['error-page',       'ErrorPage 404 / 403 / 500',       '业务组件'],
    ['loading-levels',   'Loading 层次',                    '业务组件'],
    ['row-actions',      'RowActions 行操作',               '业务组件'],
    ['shell',            '应用外壳',                        '页面模板'],
    ['login-page',       'LoginPage',                       '页面模板'],
    ['list-page',        'ListPage',                        '页面模板'],
    ['detail-page',      'DetailPage',                      '页面模板'],
    ['form-page',        'FormPage',                        '页面模板'],
    ['tree-list',        'TreeListLayout',                  '页面模板'],
    ['wizard-page',      'WizardPage',                      '页面模板'],
    ['dash-page',        'DashboardPage',                   '页面模板'],
    ['ecosystem',        '生态库集成',                      '生态'],
    ['tech-stack',       '技术栈速查',                      '生态'],
    ['do-dont',          '规范红线',                        '规范'],
    ['whitelabel',       '白标 / 租户主题',                 '规范']
  ];
  var ROUTE_MAP = {};
  ROUTES.forEach(function (r) { ROUTE_MAP[r[0]] = { label: r[1], group: r[2] }; });
  var DEFAULT_ROUTE = 'overview';

  var BRAND_LOGO = 'https://uitmss3.eu.aw-iot.com/tms/tms-web-ui/images/angle.png';
  var SUN_SVG  = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
  var MOON_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  // === sidebar grouping ===
  function groupRoutes() {
    var groups = {};
    ROUTES.forEach(function (r) {
      (groups[r[2]] = groups[r[2]] || []).push({ id: r[0], label: r[1] });
    });
    // preserve original order
    var order = ['导览', '基础', '通用组件', '业务组件', '页面模板', '生态', '规范'];
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
      html.push('<div class="nav-section">' + name + '</div>');
      html.push('<nav class="nav">');
      items.forEach(function (it) {
        var cls = it.id === activeId ? ' class="active"' : '';
        html.push('  <a href="#/' + it.id + '"' + cls + '><span class="dot"></span>' + it.label + '</a>');
      });
      html.push('</nav>');
    });
    return html.join('\n');
  }

  function buildToolbar(routeId) {
    var meta = ROUTE_MAP[routeId];
    var bcLeaf, bcGroup;
    if (routeId === 'overview') {
      bcGroup = '导览';
      bcLeaf = '概览';
    } else {
      bcGroup = meta.group;
      bcLeaf = meta.label;
    }
    var bc = '<div class="comp-bc">' +
             (routeId === 'overview' ? '<span class="leaf">' + bcLeaf + '</span>' :
              '<a href="#/overview">概览</a>' +
              '<span class="sep">/</span>' +
              '<span class="group">' + bcGroup + '</span>' +
              '<span class="sep">/</span>' +
              '<span class="leaf">' + bcLeaf + '</span>') +
             '</div>';
    var toggle =
      '<div class="theme-toggle-fixed" role="group" aria-label="主题切换">' +
        '<button class="tt-btn" data-theme-set="light" aria-label="Light 主题">' + SUN_SVG + 'Light</button>' +
        '<button class="tt-btn" data-theme-set="dark" aria-label="Dark 主题">' + MOON_SVG + 'Dark</button>' +
      '</div>';
    return bc + toggle;
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
      b.classList.toggle('is-active', b.getAttribute('data-theme-set') === current);
    });
  }

  function wireThemeToggle() {
    syncThemeButtons();
    document.querySelectorAll('[data-theme-set]').forEach(function (b) {
      // Avoid double-binding by replacing the listener
      b.onclick = function () { setTheme(b.getAttribute('data-theme-set')); };
    });
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
           '<h2 style="margin:0 0 12px;color:var(--aw-danger)">加载失败</h2>' +
           '<p style="color:var(--aw-text-2);margin:0 0 16px">无法加载 <code>pages/' + routeId + '.js</code></p>' +
           '<p style="color:var(--aw-text-3);font-size:13px;line-height:1.7">检查文件是否存在,或刷新页面重试。</p>' +
           '</div></div>';
  }

  // page 注册表(由 pages/<id>.js 注入到 window.__AW_PAGES__)
  window.__AW_PAGES__ = window.__AW_PAGES__ || {};
  // 已经发起加载的 script 缓存,避免重复 inject
  var loadedScripts = {};

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
        var html = window.__AW_PAGES__[routeId];
        if (html != null) {
          loadedScripts[routeId].forEach(function (w) { w.resolve(html); });
        } else {
          loadedScripts[routeId].forEach(function (w) {
            w.reject(new Error('script loaded but no page registered: ' + routeId));
          });
        }
      };
      s.onerror = function () {
        loadedScripts[routeId].forEach(function (w) {
          w.reject(new Error('failed to load pages/' + routeId + '.js'));
        });
      };
      document.head.appendChild(s);
    });
  }

  function loadRoute(routeId) {
    if (!ROUTE_MAP[routeId]) routeId = DEFAULT_ROUTE;
    var reqId = ++currentReqId;

    var slot = document.getElementById('app-slot');
    var sidebar = document.getElementById('app-side');
    var toolbar = document.getElementById('app-toolbar');

    // Update sidebar + toolbar synchronously (no flicker)
    if (sidebar) sidebar.innerHTML = buildSidebar(routeId);
    if (toolbar) toolbar.innerHTML = buildToolbar(routeId);
    wireThemeToggle();

    // Update title
    document.title = (routeId === 'overview' ? '' : (ROUTE_MAP[routeId].label + ' · ')) +
                     'AngelWatch Design System';

    // 同步可用?
    if (window.__AW_PAGES__[routeId]) {
      slot.innerHTML = window.__AW_PAGES__[routeId];
      window.scrollTo(0, 0);
      return;
    }

    slot.innerHTML = '<div class="content"><div style="padding:64px;text-align:center;color:var(--aw-text-3);font-size:13px">加载中…</div></div>';

    loadPageScript(routeId).then(function (html) {
      if (reqId !== currentReqId) return;
      slot.innerHTML = html;
      window.scrollTo(0, 0);
    }).catch(function (err) {
      if (reqId !== currentReqId) return;
      slot.innerHTML = showError(routeId);
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
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
