/* AngelWatch Design System — page: icons (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["icons"] = `
<div class="content">
<section class="section" id="icons">
  <p class="section-eyebrow"><span data-i18n="icons:t001">设计基础 · 图标</span></p>
  <h2><span data-i18n="icons:t002">图标系统 Icons</span></h2>
  <p class="lede"><span data-i18n="icons:t003">当前消费者直接采用</span> <code>@ant-design/icons</code> <span data-i18n="icons:t004">作为基础图标库。目录覆盖 12 类、159 个展示项；其中 24 个 TMS 语义及标为 Custom*SvgCandidate 的通用语义是设计候选，不是已发布包。只有 AntD 图标无法表达经验证语义时，才在消费者 src/components/ 中增加局部 React SVG，或提案本地 SVG 资产。</span></p>

  <div class="subsection">
    <h3><span data-i18n="icons:t005">尺寸阶梯</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="icons:t006">三档主用尺寸，对齐 8-pt 网格。所有图标使用</span> <code>currentColor</code> <span data-i18n="icons:t007">跟随父级文字色，禁多色描边或内嵌色块。</span></p>
    <div class="icon-size-grid">
      <div class="icon-tile">
        <div class="icon-shape sz-16"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg></div>
        <div class="size-label">16px</div>
        <div class="size-use"><span data-i18n="icons:t008">表内联 / Tag / 表头排序</span></div>
      </div>
      <div class="icon-tile">
        <div class="icon-shape sz-24"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg></div>
        <div class="size-label"><span data-i18n="icons:t009">24px · 默认</span></div>
        <div class="size-use"><span data-i18n="icons:t010">按钮 / 菜单 / 面包屑</span></div>
      </div>
      <div class="icon-tile">
        <div class="icon-shape sz-32"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg></div>
        <div class="size-label">32px</div>
        <div class="size-use"><span data-i18n="icons:t011">空状态 / Avatar 大尺寸</span></div>
      </div>
      <div class="icon-tile">
        <div class="icon-shape sz-48"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg></div>
        <div class="size-label"><span data-i18n="icons:t012">48px · 大</span></div>
        <div class="size-use"><span data-i18n="icons:t013">仅 Hero / Result 顶部</span></div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="icons:t014">风格规范 · Outlined / Filled / Two-tone</span></h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="icons:t015">默认 · Outlined</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="icons:t016">线性 · 1.5px stroke</span></h3>
        <p style="margin:0 0 10px;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="icons:t017">业务场景 90% 用线性。描边宽度统一</span> <b>1.5px</b><span data-i18n="icons:t018">，圆角终端 + 圆角连接（</span><code>line-cap: round</code><span data-i18n="icons:t019">）。视觉重量轻、识别度高，跟字号自然伸缩。</span></p>
        <div style="display:flex;gap:14px;color:var(--aw-text-2)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="icons:t020">强调 · Filled</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="icons:t021">面性 · 实色填充</span></h3>
        <p style="margin:0 0 10px;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="icons:t022">仅用于状态徽章（在线 / 离线 / 告警圆点）+ 选中态导航 + 通知红点。同一界面 Outlined / Filled 比例 ≥ 5:1，避免视觉抢焦。</span></p>
        <div style="display:flex;gap:14px;color: var(--aw-primary-text)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="3"/></svg>
        </div>
      </div>
      <div class="surface" style="background:var(--aw-fill-1)">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="icons:t023">禁用 · Two-tone</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="icons:t024">双色变体 · 不使用</span></h3>
        <p style="margin:0 0 10px;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="icons:t025">系统层面禁用 antd v6 的 two-tone 双色变体 —— TMS 通过</span> <code>currentColor</code> + <code>opacity</code> <span data-i18n="icons:t026">表达层级，避免双色与品牌定制白标冲突。</span></p>
        <div style="display:flex;gap:14px;color:var(--aw-text-3);opacity:0.55;text-decoration:line-through">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3z" opacity="0.3"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="icons:t027">图标目录 · 12 类 159 个展示项</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:820px;line-height:1.7;margin:0 0 16px"><span data-i18n="icons:t028">分类参考 Element Plus 的通用操作、导航、编辑、状态、数据、文件、媒体、用户、设备、位置与商务服务范围；</span> <span data-i18n="icons:t029">实现优先从 @ant-design/icons 按需导入；候选 SVG 需经设计、无障碍与许可评审后与消费者组件共置。所有示意资产本地加载，禁运行时 CDN。</span></p>

    <p class="icon-catalog-note"><span data-i18n="icons:t093">同名图标可跨分类复用；159 个展示项对应 155 个唯一名称。Custom*SvgCandidate 与全部 TMS 项均为设计候选，不是可导入组件；其余名称映射已安装的 AntD 导出。示意 SVG 保留统一线性风格，不代表 AntD 原始图形。</span></p>

    <svg class="icon-symbols" aria-hidden="true" focusable="false">
      <symbol id="aw-icon-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></symbol>
      <symbol id="aw-icon-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
      <symbol id="aw-icon-minus" viewBox="0 0 24 24"><path d="M5 12h14"/></symbol>
      <symbol id="aw-icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></symbol>
      <symbol id="aw-icon-check" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></symbol>
      <symbol id="aw-icon-refresh" viewBox="0 0 24 24"><path d="M20 7v5h-5M4 17v-5h5"/><path d="M6.1 8A7 7 0 0 1 18 6l2 6M17.9 16A7 7 0 0 1 6 18l-2-6"/></symbol>
      <symbol id="aw-icon-more" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/></symbol>
      <symbol id="aw-icon-setting" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 13.5v-3l-2-.7-.7-1.7.9-1.9-2.1-2.1-1.9.9-1.7-.7L10.5 2h-3l-.7 2.3-1.7.7-1.9-.9-2.1 2.1.9 1.9-.7 1.7-2.3.7v3l2.3.7.7 1.7-.9 1.9 2.1 2.1 1.9-.9 1.7.7.7 2.3h3l.7-2.3 1.7-.7 1.9.9 2.1-2.1-.9-1.9.7-1.7z" transform="translate(1.5 0) scale(.88)"/></symbol>
      <symbol id="aw-icon-filter" viewBox="0 0 24 24"><path d="M4 5h16l-6 7v6l-4 2v-8z"/></symbol>
      <symbol id="aw-icon-sort" viewBox="0 0 24 24"><path d="m8 5-3 3-3-3M5 8V3m11 16 3-3 3 3m-3-3v5M10 6h10M10 12h7M10 18h4"/></symbol>
      <symbol id="aw-icon-copy" viewBox="0 0 24 24"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></symbol>
      <symbol id="aw-icon-trash" viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></symbol>
      <symbol id="aw-icon-arrow-up" viewBox="0 0 24 24"><path d="m5 15 7-7 7 7"/></symbol>
      <symbol id="aw-icon-arrow-down" viewBox="0 0 24 24"><path d="m5 9 7 7 7-7"/></symbol>
      <symbol id="aw-icon-arrow-left" viewBox="0 0 24 24"><path d="m15 5-7 7 7 7"/></symbol>
      <symbol id="aw-icon-arrow-right" viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></symbol>
      <symbol id="aw-icon-caret-up" viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6"/></symbol>
      <symbol id="aw-icon-caret-down" viewBox="0 0 24 24"><path d="M12 5v14M6 13l6 6 6-6"/></symbol>
      <symbol id="aw-icon-caret-left" viewBox="0 0 24 24"><path d="M5 12h14M11 6l-6 6 6 6"/></symbol>
      <symbol id="aw-icon-caret-right" viewBox="0 0 24 24"><path d="M19 12H5M13 6l6 6-6 6"/></symbol>
      <symbol id="aw-icon-expand" viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></symbol>
      <symbol id="aw-icon-compress" viewBox="0 0 24 24"><path d="M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5"/></symbol>
      <symbol id="aw-icon-menu" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></symbol>
      <symbol id="aw-icon-home" viewBox="0 0 24 24"><path d="m3 11 9-8 9 8v9H6v-9M10 20v-6h4v6"/></symbol>
      <symbol id="aw-icon-edit" viewBox="0 0 24 24"><path d="M4 20h4l11-11-4-4L4 16zM13 7l4 4M4 20h16"/></symbol>
      <symbol id="aw-icon-crop" viewBox="0 0 24 24"><path d="M7 3v14a2 2 0 0 0 2 2h12M3 7h14a2 2 0 0 1 2 2v12"/></symbol>
      <symbol id="aw-icon-scissors" viewBox="0 0 24 24"><circle cx="6" cy="7" r="3"/><circle cx="6" cy="17" r="3"/><path d="m8.5 8.5 10 7M8.5 15.5l10-7"/></symbol>
      <symbol id="aw-icon-link" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1"/></symbol>
      <symbol id="aw-icon-paperclip" viewBox="0 0 24 24"><path d="m8 12 6-6a4 4 0 0 1 6 6l-8 8a6 6 0 0 1-8-8l8-8"/></symbol>
      <symbol id="aw-icon-zoom-in" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5M10.5 7.5v6M7.5 10.5h6"/></symbol>
      <symbol id="aw-icon-zoom-out" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5M7.5 10.5h6"/></symbol>
      <symbol id="aw-icon-eye" viewBox="0 0 24 24"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="2.5"/></symbol>
      <symbol id="aw-icon-eye-off" viewBox="0 0 24 24"><path d="m3 3 18 18M10.5 6.2A10 10 0 0 1 12 6c6.5 0 10 6 10 6a16 16 0 0 1-3 3.7M6.2 6.2C3.5 8 2 12 2 12s3.5 6 10 6c1.4 0 2.6-.3 3.7-.7"/></symbol>
      <symbol id="aw-icon-save" viewBox="0 0 24 24"><path d="M4 3h13l3 3v15H4zM8 3v6h8V3M8 21v-7h8v7"/></symbol>
      <symbol id="aw-icon-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></symbol>
      <symbol id="aw-icon-help" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1.3 1-1.3 2M12 17h.01"/></symbol>
      <symbol id="aw-icon-warning" viewBox="0 0 24 24"><path d="m12 3 10 18H2zM12 9v5M12 18h.01"/></symbol>
      <symbol id="aw-icon-error" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></symbol>
      <symbol id="aw-icon-success" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></symbol>
      <symbol id="aw-icon-loading" viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v6h-6"/></symbol>
      <symbol id="aw-icon-bell" viewBox="0 0 24 24"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></symbol>
      <symbol id="aw-icon-flag" viewBox="0 0 24 24"><path d="M5 21V4M5 5h12l-2 4 2 4H5"/></symbol>
      <symbol id="aw-icon-star" viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"/></symbol>
      <symbol id="aw-icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></symbol>
      <symbol id="aw-icon-moon" viewBox="0 0 24 24"><path d="M21 13a9 9 0 1 1-10-10 7 7 0 0 0 10 10z"/></symbol>
      <symbol id="aw-icon-disabled" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m6 6 12 12"/></symbol>
      <symbol id="aw-icon-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></symbol>
      <symbol id="aw-icon-alert" viewBox="0 0 24 24"><path d="M12 3 2.5 20h19zM12 9v5M12 17h.01"/></symbol>
      <symbol id="aw-icon-dashboard" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="4" rx="1"/><rect x="14" y="11" width="7" height="10" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></symbol>
      <symbol id="aw-icon-chart-line" viewBox="0 0 24 24"><path d="M4 20V4M4 20h16M7 15l4-4 3 2 5-7"/></symbol>
      <symbol id="aw-icon-bars" viewBox="0 0 24 24"><path d="M4 20V4M4 20h16M8 17v-5M13 17V7M18 17v-8"/></symbol>
      <symbol id="aw-icon-pie" viewBox="0 0 24 24"><path d="M11 3a9 9 0 1 0 10 10h-10z"/><path d="M14 3v7h7a9 9 0 0 0-7-7z"/></symbol>
      <symbol id="aw-icon-trend" viewBox="0 0 24 24"><path d="m4 16 5-5 4 3 7-8M15 6h5v5"/></symbol>
      <symbol id="aw-icon-trend-down" viewBox="0 0 24 24"><path d="m4 8 5 5 4-3 7 8M15 18h5v-5"/></symbol>
      <symbol id="aw-icon-table" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11M15 9v11"/></symbol>
      <symbol id="aw-icon-list" viewBox="0 0 24 24"><path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/></symbol>
      <symbol id="aw-icon-grid" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></symbol>
      <symbol id="aw-icon-database" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></symbol>
      <symbol id="aw-icon-file" viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6zM14 3v5h4"/></symbol>
      <symbol id="aw-icon-file-text" viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6zM14 3v5h4M9 12h6M9 16h6"/></symbol>
      <symbol id="aw-icon-image" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m4 17 5-5 4 4 3-3 4 4"/></symbol>
      <symbol id="aw-icon-folder" viewBox="0 0 24 24"><path d="M3 6h7l2 2h9v11H3z"/></symbol>
      <symbol id="aw-icon-folder-open" viewBox="0 0 24 24"><path d="M3 8V5h7l2 3h9l-2 11H4L2 10h17"/></symbol>
      <symbol id="aw-icon-archive" viewBox="0 0 24 24"><path d="M4 7h16v14H4zM3 3h18v4H3zM9 12h6"/></symbol>
      <symbol id="aw-icon-cloud-download" viewBox="0 0 24 24"><path d="M7 18H5a4 4 0 0 1 0-8 7 7 0 0 1 13-2 5 5 0 0 1 1 10h-2M12 11v10m-4-4 4 4 4-4"/></symbol>
      <symbol id="aw-icon-play" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/></symbol>
      <symbol id="aw-icon-pause" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M10 9v6M14 9v6"/></symbol>
      <symbol id="aw-icon-camera" viewBox="0 0 24 24"><path d="M4 7h4l2-3h4l2 3h4v13H4z"/><circle cx="12" cy="13" r="4"/></symbol>
      <symbol id="aw-icon-video" viewBox="0 0 24 24"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></symbol>
      <symbol id="aw-icon-mic" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></symbol>
      <symbol id="aw-icon-mute" viewBox="0 0 24 24"><path d="M5 9H2v6h3l5 4V5zM15 9l6 6M21 9l-6 6"/></symbol>
      <symbol id="aw-icon-headset" viewBox="0 0 24 24"><path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h4v6H6a2 2 0 0 1-2-2zM20 14h-4v6h2a2 2 0 0 0 2-2z"/></symbol>
      <symbol id="aw-icon-phone" viewBox="0 0 24 24"><path d="M6 3h4l2 5-3 2a14 14 0 0 0 5 5l2-3 5 2v4c0 2-2 3-4 3C9 20 4 15 3 7c0-2 1-4 3-4z"/></symbol>
      <symbol id="aw-icon-message" viewBox="0 0 24 24"><path d="M4 5h16v12H9l-5 4zM8 9h8M8 13h5"/></symbol>
      <symbol id="aw-icon-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></symbol>
      <symbol id="aw-icon-send" viewBox="0 0 24 24"><path d="m3 11 18-8-8 18-2-8zM11 13l5-5"/></symbol>
      <symbol id="aw-icon-notification" viewBox="0 0 24 24"><path d="m4 13 12-7v12L4 13zM4 13v4h4l2 4h3l-2-5"/></symbol>
      <symbol id="aw-icon-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2"/></symbol>
      <symbol id="aw-icon-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v1"/></symbol>
      <symbol id="aw-icon-id-card" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16a3 3 0 0 1 6 0M14 10h4M14 14h4"/></symbol>
      <symbol id="aw-icon-shield" viewBox="0 0 24 24"><path d="M12 3 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="m9 12 2 2 4-4"/></symbol>
      <symbol id="aw-icon-org" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/></symbol>
      <symbol id="aw-icon-key" viewBox="0 0 24 24"><circle cx="8" cy="15" r="4"/><path d="m11 12 8-8M16 7l2 2M14 9l2 2"/></symbol>
      <symbol id="aw-icon-lock" viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></symbol>
      <symbol id="aw-icon-unlock" viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 7-2"/></symbol>
      <symbol id="aw-icon-audit" viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6zM15 3v4h4M9 11h6M9 15h4"/><path d="m15 18 2 2 4-4"/></symbol>
      <symbol id="aw-icon-login" viewBox="0 0 24 24"><path d="M14 4h6v16h-6M3 12h12M10 7l5 5-5 5"/></symbol>
      <symbol id="aw-icon-logout" viewBox="0 0 24 24"><path d="M10 4H4v16h6M21 12H9M14 7l-5 5 5 5"/></symbol>
      <symbol id="aw-icon-cellphone" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 5h4M11 18h2"/></symbol>
      <symbol id="aw-icon-tablet" viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M11 18h2"/></symbol>
      <symbol id="aw-icon-monitor" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></symbol>
      <symbol id="aw-icon-laptop" viewBox="0 0 24 24"><path d="M5 5h14v11H5zM2 19h20l-2-3H4z"/></symbol>
      <symbol id="aw-icon-cpu" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></symbol>
      <symbol id="aw-icon-server" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6h.01M7 17h.01M11 6h6M11 17h6"/></symbol>
      <symbol id="aw-icon-chip" viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4"/></symbol>
      <symbol id="aw-icon-battery" viewBox="0 0 24 24"><rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10v4M6 10v4M9 10v4M12 10v4"/></symbol>
      <symbol id="aw-icon-power" viewBox="0 0 24 24"><path d="M12 3v9M7 6a8 8 0 1 0 10 0"/></symbol>
      <symbol id="aw-icon-usb" viewBox="0 0 24 24"><path d="M12 3v14M12 3l-3 3M12 3l3 3M12 11l5-3M17 8v3M12 14l-5-3M7 11v3M12 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></symbol>
      <symbol id="aw-icon-printer" viewBox="0 0 24 24"><path d="M6 9V3h12v6M6 17H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M6 14h12v7H6z"/></symbol>
      <symbol id="aw-icon-qr" viewBox="0 0 24 24"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM15 14h2v2h-2zM19 14h2v4h-2zM14 19h4v2h-4zM20 20h1v1h-1z"/></symbol>
      <symbol id="aw-icon-location" viewBox="0 0 24 24"><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/><circle cx="12" cy="9" r="2.5"/></symbol>
      <symbol id="aw-icon-pin" viewBox="0 0 24 24"><path d="m14 4 6 6-4 2-5 5-4-4 5-5zM7 13l-4 8"/></symbol>
      <symbol id="aw-icon-aim" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></symbol>
      <symbol id="aw-icon-compass" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m15 9-2 5-5 2 2-5z"/></symbol>
      <symbol id="aw-icon-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9z"/></symbol>
      <symbol id="aw-icon-geofence" viewBox="0 0 24 24"><path d="M4 7 12 3l8 4v10l-8 4-8-4z" stroke-dasharray="3 2"/><path d="M12 8v8M8 12h8"/></symbol>
      <symbol id="aw-icon-route" viewBox="0 0 24 24"><circle cx="5" cy="18" r="2"/><circle cx="19" cy="6" r="2"/><path d="M7 18h3c4 0 4-6 0-6h4c4 0 4-6 3-6"/></symbol>
      <symbol id="aw-icon-van" viewBox="0 0 24 24"><path d="M3 7h11v10H3zM14 10h4l3 4v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></symbol>
      <symbol id="aw-icon-rocket" viewBox="0 0 24 24"><path d="M14 4c3-2 6-1 6-1s1 3-1 6l-7 7-5-5zM8 15l-4 5 5-2M9 9 4 8l5-4"/><circle cx="15" cy="8" r="2"/></symbol>
      <symbol id="aw-icon-shop" viewBox="0 0 24 24"><path d="M4 10v11h16V10M3 4h18l-2 6H5zM9 21v-6h6v6"/></symbol>
      <symbol id="aw-icon-building" viewBox="0 0 24 24"><path d="M5 21V4h10v17M15 9h4v12M8 8h4M8 12h4M8 16h4M3 21h18"/></symbol>
      <symbol id="aw-icon-package" viewBox="0 0 24 24"><path d="m4 7 8-4 8 4v10l-8 4-8-4zM4 7l8 4 8-4M12 11v10"/></symbol>
      <symbol id="aw-icon-wallet" viewBox="0 0 24 24"><path d="M4 6h15a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h12v3M15 11h6v4h-6z"/></symbol>
      <symbol id="aw-icon-card" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></symbol>
      <symbol id="aw-icon-money" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M15 8h-4a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H9M12 6v12"/></symbol>
      <symbol id="aw-icon-ticket" viewBox="0 0 24 24"><path d="M3 7h18v4a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4zM12 7v12" stroke-dasharray="3 2"/></symbol>
      <symbol id="aw-icon-tag" viewBox="0 0 24 24"><path d="M3 4h8l10 10-7 7L4 11z"/><circle cx="8" cy="8" r="1"/></symbol>
      <symbol id="aw-icon-gift" viewBox="0 0 24 24"><path d="M3 10h18v11H3zM2 6h20v4H2zM12 6v15M12 6H8a2 2 0 1 1 0-4c3 0 4 4 4 4zM12 6h4a2 2 0 1 0 0-4c-3 0-4 4-4 4z"/></symbol>
      <symbol id="aw-icon-bag" viewBox="0 0 24 24"><path d="M5 8h14l1 13H4zM9 8V6a3 3 0 0 1 6 0v2"/></symbol>
      <symbol id="aw-icon-cart" viewBox="0 0 24 24"><path d="M3 4h2l2 12h10l3-8H6M9 20h.01M17 20h.01"/></symbol>
      <symbol id="aw-icon-tools" viewBox="0 0 24 24"><path d="m14 6 4-4 4 4-4 4M13 7l-9 9v4h4l9-9M3 4l5 5"/></symbol>
      <symbol id="aw-icon-service" viewBox="0 0 24 24"><path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h4v5H6a2 2 0 0 1-2-2zM20 14h-4v5h2a2 2 0 0 0 2-2zM16 21h-4"/></symbol>
      <symbol id="aw-icon-briefcase" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 12h18M10 12v2h4v-2"/></symbol>
      <symbol id="aw-icon-online" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/></symbol>
      <symbol id="aw-icon-offline" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m8 8 8 8M16 8l-8 8"/></symbol>
      <symbol id="aw-icon-heartbeat" viewBox="0 0 24 24"><path d="M3 12h4l2-5 4 10 2-5h6"/></symbol>
      <symbol id="aw-icon-upload" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M12 15V3m-5 5 5-5 5 5"/></symbol>
    </svg>

    <div class="icon-catalog" data-icon-catalog>
      <div class="icon-catalog-tools">
        <label class="icon-search">
          <svg aria-hidden="true"><use href="#aw-icon-search"></use></svg>
          <input type="search" data-icon-search aria-label="搜索图标" data-i18n-aria-label="icons:t094" placeholder="搜索名称，如 Device、Upload、Lock" data-i18n-placeholder="icons:t064" />
        </label>
        <div class="icon-catalog-total" role="status" aria-live="polite" aria-atomic="true"><span data-icon-visible-count>159</span> / <span data-icon-total-count>159</span> <span data-i18n="icons:t065">个展示项</span></div>
      </div>
      <div class="icon-filter-row" role="group" aria-label="图标分类" data-i18n-aria-label="icons:t092">
        <button class="chip active" data-icon-filter="all" aria-pressed="true"><span data-i18n="icons:t066">全部</span></button>
        <button class="chip" data-icon-filter="actions" aria-pressed="false"><span data-i18n="icons:t067">常用操作</span></button>
        <button class="chip" data-icon-filter="navigation" aria-pressed="false"><span data-i18n="icons:t069">方向导航</span></button>
        <button class="chip" data-icon-filter="editor" aria-pressed="false"><span data-i18n="icons:t071">编辑排版</span></button>
        <button class="chip" data-icon-filter="status" aria-pressed="false"><span data-i18n="icons:t073">状态反馈</span></button>
        <button class="chip" data-icon-filter="data" aria-pressed="false"><span data-i18n="icons:t075">数据图表</span></button>
        <button class="chip" data-icon-filter="files" aria-pressed="false"><span data-i18n="icons:t077">文件内容</span></button>
        <button class="chip" data-icon-filter="media" aria-pressed="false"><span data-i18n="icons:t079">媒体通信</span></button>
        <button class="chip" data-icon-filter="users" aria-pressed="false"><span data-i18n="icons:t081">用户权限</span></button>
        <button class="chip" data-icon-filter="devices" aria-pressed="false"><span data-i18n="icons:t083">设备硬件</span></button>
        <button class="chip" data-icon-filter="location" aria-pressed="false"><span data-i18n="icons:t085">位置物流</span></button>
        <button class="chip" data-icon-filter="commerce" aria-pressed="false"><span data-i18n="icons:t087">商务服务</span></button>
        <button class="chip" data-icon-filter="tms" aria-pressed="false"><span data-i18n="icons:t089">TMS 业务候选</span></button>
      </div>

      <div class="icon-category" data-icon-category-section="actions" data-icons="SearchOutlined:search,PlusOutlined:plus,MinusOutlined:minus,CloseOutlined:close,CheckOutlined:check,ReloadOutlined:refresh,MoreOutlined:more,SettingOutlined:setting,FilterOutlined:filter,SortAscendingOutlined:sort,CopyOutlined:copy,DeleteOutlined:trash">
        <div class="icon-category-head"><div><h4><span data-i18n="icons:t067">常用操作</span></h4><p><span data-i18n="icons:t068">搜索、增删、确认、刷新、筛选与设置等高频命令。</span></p></div><span class="icon-category-count">12</span></div>
      </div>
      <div class="icon-category" data-icon-category-section="navigation" data-icons="ArrowUpOutlined:arrow-up,ArrowDownOutlined:arrow-down,ArrowLeftOutlined:arrow-left,ArrowRightOutlined:arrow-right,CaretUpOutlined:caret-up,CaretDownOutlined:caret-down,CaretLeftOutlined:caret-left,CaretRightOutlined:caret-right,RollbackOutlined:caret-left,ForwardOutlined:caret-right,ExpandOutlined:expand,CompressOutlined:compress,MenuOutlined:menu,HomeOutlined:home">
        <div class="icon-category-head"><div><h4><span data-i18n="icons:t069">方向导航</span></h4><p><span data-i18n="icons:t070">方向、层级、返回、展开、收起与全局导航。</span></p></div><span class="icon-category-count">14</span></div>
      </div>
      <div class="icon-category" data-icon-category-section="editor" data-icons="EditOutlined:edit,FormOutlined:edit,CopyOutlined:copy,CustomCropSvgCandidate:crop,ScissorOutlined:scissors,LinkOutlined:link,PaperClipOutlined:paperclip,ZoomInOutlined:zoom-in,ZoomOutOutlined:zoom-out,EyeOutlined:eye,EyeInvisibleOutlined:eye-off,SaveOutlined:save" data-icon-candidates="CustomCropSvgCandidate">
        <div class="icon-category-head"><div><h4><span data-i18n="icons:t071">编辑排版</span></h4><p><span data-i18n="icons:t072">编辑、复制、裁剪、链接、附件、缩放与可见性。</span></p></div><span class="icon-category-count">12</span></div>
      </div>
      <div class="icon-category" data-icon-category-section="status" data-icons="InfoCircleOutlined:info,QuestionCircleOutlined:help,WarningOutlined:warning,CloseCircleOutlined:error,CheckCircleOutlined:success,LoadingOutlined:loading,BellOutlined:bell,FlagOutlined:flag,StarOutlined:star,StopOutlined:disabled,ClockCircleOutlined:clock,ExclamationCircleOutlined:alert">
        <div class="icon-category-head"><div><h4><span data-i18n="icons:t073">状态反馈</span></h4><p><span data-i18n="icons:t074">信息、成功、警告、失败、加载、提醒与等待状态。</span></p></div><span class="icon-category-count">12</span></div>
      </div>
      <div class="icon-category" data-icon-category-section="data" data-icons="DashboardOutlined:dashboard,FundOutlined:chart-line,BarChartOutlined:bars,PieChartOutlined:pie,RiseOutlined:trend,FallOutlined:trend-down,AreaChartOutlined:chart-line,FieldTimeOutlined:clock,TableOutlined:table,UnorderedListOutlined:list,AppstoreOutlined:grid,DatabaseOutlined:database">
        <div class="icon-category-head"><div><h4><span data-i18n="icons:t075">数据图表</span></h4><p><span data-i18n="icons:t076">仪表盘、趋势、统计、表格、网格与数据源。</span></p></div><span class="icon-category-count">12</span></div>
      </div>
      <div class="icon-category" data-icon-category-section="files" data-icons="FileOutlined:file,FileTextOutlined:file-text,FileAddOutlined:file,FileDoneOutlined:file,FileExcelOutlined:table,FileImageOutlined:image,FolderOutlined:folder,FolderOpenOutlined:folder-open,FolderAddOutlined:folder,CustomFolderDeleteSvgCandidate:folder,InboxOutlined:archive,CloudDownloadOutlined:cloud-download,UploadOutlined:upload" data-icon-candidates="CustomFolderDeleteSvgCandidate">
        <div class="icon-category-head"><div><h4><span data-i18n="icons:t077">文件内容</span></h4><p><span data-i18n="icons:t078">文件、文件夹、图片、归档与云端传输。</span></p></div><span class="icon-category-count">13</span></div>
      </div>
      <div class="icon-category" data-icon-category-section="media" data-icons="PlayCircleOutlined:play,PauseCircleOutlined:pause,CameraOutlined:camera,VideoCameraOutlined:video,AudioOutlined:mic,MutedOutlined:mute,CustomerServiceOutlined:headset,PhoneOutlined:phone,MessageOutlined:message,MailOutlined:mail,SendOutlined:send,NotificationOutlined:notification">
        <div class="icon-category-head"><div><h4><span data-i18n="icons:t079">媒体通信</span></h4><p><span data-i18n="icons:t080">音视频、拍摄、语音、电话、消息、邮件与通知。</span></p></div><span class="icon-category-count">12</span></div>
      </div>
      <div class="icon-category" data-icon-category-section="users" data-icons="UserOutlined:user,TeamOutlined:users,IdcardOutlined:id-card,CrownOutlined:shield,SafetyCertificateOutlined:shield,ApartmentOutlined:org,KeyOutlined:key,LockOutlined:lock,UnlockOutlined:unlock,AuditOutlined:audit,LoginOutlined:login,LogoutOutlined:logout">
        <div class="icon-category-head"><div><h4><span data-i18n="icons:t081">用户权限</span></h4><p><span data-i18n="icons:t082">用户、组织、角色、凭证、权限、安全与审计。</span></p></div><span class="icon-category-count">12</span></div>
      </div>
      <div class="icon-category" data-icon-category-section="devices" data-icons="MobileOutlined:cellphone,TabletOutlined:tablet,DesktopOutlined:monitor,LaptopOutlined:laptop,CustomCpuSvgCandidate:cpu,HddOutlined:server,GatewayOutlined:chip,CustomBatterySvgCandidate:battery,PoweroffOutlined:power,UsbOutlined:usb,PrinterOutlined:printer,QrcodeOutlined:qr" data-icon-candidates="CustomCpuSvgCandidate,CustomBatterySvgCandidate">
        <div class="icon-category-head"><div><h4><span data-i18n="icons:t083">设备硬件</span></h4><p><span data-i18n="icons:t084">移动终端、桌面设备、芯片、存储、电源与外设。</span></p></div><span class="icon-category-count">12</span></div>
      </div>
      <div class="icon-category" data-icon-category-section="location" data-icons="EnvironmentOutlined:location,PushpinOutlined:pin,AimOutlined:aim,CompassOutlined:compass,GlobalOutlined:globe,BorderOutlined:geofence,BranchesOutlined:route,CarOutlined:van,RocketOutlined:rocket,ShopOutlined:shop,BankOutlined:building,InboxOutlined:package">
        <div class="icon-category-head"><div><h4><span data-i18n="icons:t085">位置物流</span></h4><p><span data-i18n="icons:t086">位置、地图、围栏、路线、站点、运输与包裹。</span></p></div><span class="icon-category-count">12</span></div>
      </div>
      <div class="icon-category" data-icon-category-section="commerce" data-icons="WalletOutlined:wallet,CreditCardOutlined:card,DollarOutlined:money,CustomTicketSvgCandidate:ticket,TagsOutlined:tag,GiftOutlined:gift,ShoppingOutlined:bag,ShoppingCartOutlined:cart,ShopOutlined:shop,ToolOutlined:tools,CustomerServiceOutlined:service,SolutionOutlined:briefcase" data-icon-candidates="CustomTicketSvgCandidate">
        <div class="icon-category-head"><div><h4><span data-i18n="icons:t087">商务服务</span></h4><p><span data-i18n="icons:t088">钱包、支付、票券、商品、商店、工具与客户服务。</span></p></div><span class="icon-category-count">12</span></div>
      </div>
      <div class="icon-category icon-category-tms" data-icon-category-section="tms" data-icon-source="candidate" data-icons="DeviceOutlined:cellphone,DeviceOnlineFilled:online,DeviceOfflineOutlined:offline,DeviceUnregisteredOutlined:help,HeartbeatOutlined:heartbeat,FirmwareOutlined:chip,OtaPushOutlined:cloud-download,AppMarketOutlined:grid,PolicyOutlined:shield,RemoteControlOutlined:monitor,ScreenLockOutlined:lock,ScreenUnlockOutlined:unlock,RebootOutlined:refresh,FactoryResetOutlined:refresh,DataWipeOutlined:trash,RecycleOutlined:refresh,BatchTaskOutlined:list,RetryOutlined:refresh,TerminateOutlined:disabled,AssignmentOutlined:users,EnrollmentOutlined:success,AuditTrailOutlined:audit,DeviceAlertOutlined:alert,SiteOutlined:location">
        <div class="icon-category-head"><div><h4><span data-i18n="icons:t089">TMS 业务候选</span></h4><p><span data-i18n="icons:t090">终端状态、心跳、固件、OTA、策略、远控、擦除、分配与注册。</span></p></div><span class="icon-category-count">24</span></div>
      </div>
      <div class="icon-catalog-empty" data-icon-empty hidden><span data-i18n="icons:t091">没有匹配的图标，请调整名称或分类。</span></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="icons:t030">命名规范</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:24%"><span data-i18n="icons:t031">规则</span></th><th style="width:34%"><span data-i18n="icons:t032">示例</span></th><th><span data-i18n="icons:t033">说明</span></th></tr></thead>
      <tbody>
        <tr><td><b>PascalCase</b></td><td><code>DeviceOnlineFilled</code></td><td><span data-i18n="icons:t034">React 组件名，不连字符</span></td></tr>
        <tr><td><b><span data-i18n="icons:t035">语义 + 风格后缀</span></b></td><td><code>SearchOutlined</code> · <code>HeartbeatFilled</code></td><td><span data-i18n="icons:t036">主语义置前，风格后缀显式标注 Outlined / Filled</span></td></tr>
        <tr><td><b><span data-i18n="icons:t037">状态字面量同 API</span></b></td><td><code>DeviceOffline</code> <span data-i18n="icons:t038">而非</span> <code>DeviceLost</code></td><td><span data-i18n="icons:t039">对应后端</span> <code>device.status === "offline"</code><span data-i18n="icons:t040">，避免设计 / 数据词汇分裂</span></td></tr>
        <tr><td><b><span data-i18n="icons:t041">动词 / 名词分离</span></b></td><td><code>OtaPush</code><span data-i18n="icons:t042">（动作）·</span> <code>Firmware</code><span data-i18n="icons:t043">（实体）</span></td><td><span data-i18n="icons:t044">动作图标用动词；实体图标用名词。Confirm 选用上一致</span></td></tr>
        <tr><td><b><span data-i18n="icons:t045">候选 SVG 文件名</span></b></td><td><code>device-online-filled.svg</code></td><td><span data-i18n="icons:t046">kebab-case 与 PascalCase 对应；当前没有 SVGR 生成器，不宣称自动发布</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="icons:t047">接入流程</span></h3>
    <div class="code-block"><pre><code>// 1. Prefer the installed package; import only what the screen uses.
import { MobileOutlined, CloudUploadOutlined } from '@ant-design/icons';

// 2. If no AntD icon expresses a verified domain meaning, keep the first
//    implementation with its consumer component under src/components/.
export function DeviceOnlineIcon() {
  return &lt;svg viewBox="0 0 24 24" aria-hidden focusable="false"&gt;...&lt;/svg&gt;;
}

// 3. Promote a repeated local SVG only after design, a11y and license review.
//    There is currently no shared icon package or automatic SVGR pipeline.

// 4. Control color / size through CSS; SVG carries no hard-coded color.
.icon-active { color: var(--aw-primary-text); font-size: 24px; }</code></pre></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="icons:t048">规则 · Do &amp; Don'ts</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="icons:t049">所有图标用</span> <code>currentColor</code><span data-i18n="icons:t050">，跟随父级文字色</span></li>
          <li><span data-i18n="icons:t051">尺寸用</span> <code>1em</code> <span data-i18n="icons:t052">跟字号；或显式 16/24/32/48 px</span></li>
          <li><span data-i18n="icons:t053">状态图标必须配文字（"色 + icon + 文字"三重编码，色弱可辨）</span></li>
          <li><span data-i18n="icons:t054">新业务图标先 review 是否能用 antd-icons 现有的 700 个之一</span></li>
          <li><span data-i18n="icons:t055">通用图标来自已安装的</span> <code>@ant-design/icons</code><span data-i18n="icons:t056">；业务 React SVG 与消费者 src/components/ 共置，独立本地 SVG 仍是待评审候选</span></li>
          <li><span data-i18n="icons:t057">描边宽度统一 1.5px，圆角终端 + 圆角连接</span></li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="icons:t058">不要混用多种描边宽度</span></li>
          <li><span data-i18n="icons:t059">不要在 SVG 内嵌色块，颜色一律</span> <code>currentColor</code></li>
          <li><span data-i18n="icons:t060">不要用 antd v6 默认的 two-tone 双色 icon</span></li>
          <li><span data-i18n="icons:t061">不要从 CDN 加载图标字体（如 iconfont.cn）</span></li>
          <li><span data-i18n="icons:t062">不要为单一业务页造一套全新图标库（先复用，再加业务专属）</span></li>
          <li><span data-i18n="icons:t063">不要用 emoji 替代图标（视觉不一致 + i18n 渲染差异）</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
