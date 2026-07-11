/* AngelWatch Design System — page: loading-levels (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["loading-levels"] = `
<div class="content">
<!-- LOADING LEVELS -->
<section class="section" id="loading-levels">
  <p class="section-eyebrow"><span data-i18n="loading-levels:text.001">业务模式 · 加载层级</span></p>
  <h2><span data-i18n="loading-levels:text.002">加载层次 Loading</span></h2>
  <p class="lede"><span data-i18n="loading-levels:text.003">明确四级 Loading 层次，按"用户感知 + 操作影响"分层。原则：Skeleton 优先于 spinner；spinner 优先于 fullscreen mask；fullscreen 仅用于阻塞写操作。</span></p>
  <div class="loading-row">
    <div class="loading-tile">
<div class="lt-ttl"><span data-i18n="loading-levels:text.014">L1 · Skeleton</span></div>
<div>
  <div class="skel-line" style="width:80%;height:10px;background:var(--aw-fill-3);border-radius:3px;margin-bottom:6px"></div>
  <div class="skel-line" style="width:60%;height:10px;background:var(--aw-fill-3);border-radius:3px;margin-bottom:6px"></div>
  <div class="skel-line" style="width:90%;height:10px;background:var(--aw-fill-3);border-radius:3px"></div>
</div>
<div style="font-size:11px;color:var(--aw-text-3)"><span data-i18n="loading-levels:text.004">页面初次加载</span></div>
    </div>
    <div class="loading-tile lt-card">
<div class="lt-ttl"><span data-i18n="loading-levels:text.005">L2 · 卡片局部</span></div>
<div class="lt-content"><span data-i18n="loading-levels:text.006">表格刷新中…</span><br/><span data-i18n="loading-levels:text.007">原内容保留 + 顶部细线滚动</span></div>
<div style="font-size:11px;color:var(--aw-text-3)"><span data-i18n="loading-levels:text.008">列表筛选 / 排序</span></div>
    </div>
    <div class="loading-tile lt-page">
<div class="lt-ttl" style="position:absolute;top:14px;left:14px"><span data-i18n="loading-levels:text.009">L3 · 页面遮罩</span></div>
<div class="spinner"></div>
<div style="font-size:11px;color:var(--aw-text-3);position:absolute;bottom:10px;left:14px"><span data-i18n="loading-levels:text.010">表单提交</span></div>
    </div>
    <div class="loading-tile lt-fullscreen">
<div class="lt-ttl"><span data-i18n="loading-levels:text.011">L4 · 全屏阻塞</span></div>
<div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div class="spinner"></div><div class="lt-text"><span data-i18n="loading-levels:text.012">批量操作中 12 / 86</span></div></div>
<div style="font-size:11px;color:rgba(255,255,255,0.5)"><span data-i18n="loading-levels:text.013">不可逆 / 批量操作</span></div>
    </div>
  </div>
</section>
</div>
`;
