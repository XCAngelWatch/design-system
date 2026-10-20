/* AngelWatch Design System — page: loading-levels (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["loading-levels"] = `
<div class="content">
<!-- LOADING LEVELS -->
<section class="section" id="loading-levels">
  <p class="section-eyebrow"><span data-i18n="loading-levels:text.001">业务模式 · 加载层级</span></p>
  <h2><span data-i18n="loading-levels:text.002">加载层次 Loading</span></h2>
  <p class="lede"><span data-i18n="loading-levels:text.003">按加载范围选择反馈：首次加载用 Skeleton，刷新保留原内容；表单提交只禁用相关控件并让提交按钮 loading，不遮住整页。全屏阻塞仅限确实不能继续操作的短暂提交阶段；异步批量任务用可追踪进度。</span></p>
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
    <div class="loading-tile lt-card" aria-busy="true">
<div class="lt-ttl"><span data-i18n="loading-levels:text.005">L2 · 卡片局部</span></div>
<div class="lt-content"><span data-i18n="loading-levels:text.006">表格刷新中…</span><br/><span data-i18n="loading-levels:text.007">原内容保留 + 顶部细线滚动</span></div>
<div style="font-size:11px;color:var(--aw-text-3)"><span data-i18n="loading-levels:text.008">列表筛选 / 排序</span></div>
    </div>
    <div class="loading-tile" aria-busy="true">
<div class="lt-ttl"><span data-i18n="loading-levels:text.009">L3 · 表单提交</span></div>
<button class="btn btn-primary" disabled style="align-self:flex-start"><span class="spinner" aria-hidden="true" style="width:14px;height:14px"></span><span data-i18n="loading-levels:form.submitting">提交中…</span></button>
<div style="font-size:11px;color:var(--aw-text-3)"><span data-i18n="loading-levels:text.010">禁用相关控件，保留上下文</span></div>
    </div>
    <div class="loading-tile lt-fullscreen" aria-busy="true">
<div class="lt-ttl"><span data-i18n="loading-levels:text.011">L4 · 全屏阻塞</span></div>
<div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div class="spinner"></div><div class="lt-text"><span data-i18n="loading-levels:text.012">正在提交，请稍候…</span></div></div>
<div class="lt-note"><span data-i18n="loading-levels:text.013">仅短暂阻塞阶段，不等待整批任务</span></div>
    </div>
  </div>
</section>
</div>
`;
