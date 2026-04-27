/* AngelWatch Design System — page: loading-levels (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["loading-levels"] = `
<div class="content">
<!-- LOADING LEVELS -->
<section class="section" id="loading-levels">
  <p class="section-eyebrow">Components · 加载层级</p>
  <h2>Loading · 四级加载层次</h2>
  <p class="lede">明确四级 Loading 层次，按"用户感知 + 操作影响"分层。原则：Skeleton 优先于 spinner；spinner 优先于 fullscreen mask；fullscreen 仅用于阻塞写操作。</p>
  <div class="loading-row">
    <div class="loading-tile">
<div class="lt-ttl">L1 · Skeleton</div>
<div>
  <div class="skel-line" style="width:80%;height:10px;background:var(--aw-fill-3);border-radius:3px;margin-bottom:6px"></div>
  <div class="skel-line" style="width:60%;height:10px;background:var(--aw-fill-3);border-radius:3px;margin-bottom:6px"></div>
  <div class="skel-line" style="width:90%;height:10px;background:var(--aw-fill-3);border-radius:3px"></div>
</div>
<div style="font-size:11px;color:var(--aw-text-3)">页面初次加载</div>
    </div>
    <div class="loading-tile lt-card">
<div class="lt-ttl">L2 · 卡片局部</div>
<div class="lt-content">表格刷新中…<br/>原内容保留 + 顶部细线滚动</div>
<div style="font-size:11px;color:var(--aw-text-3)">列表筛选 / 排序</div>
    </div>
    <div class="loading-tile lt-page">
<div class="lt-ttl" style="position:absolute;top:14px;left:14px">L3 · 页面遮罩</div>
<div class="spinner"></div>
<div style="font-size:11px;color:var(--aw-text-3);position:absolute;bottom:10px;left:14px">表单提交</div>
    </div>
    <div class="loading-tile lt-fullscreen">
<div class="lt-ttl">L4 · 全屏阻塞</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div class="spinner"></div><div class="lt-text">批量操作中 12 / 86</div></div>
<div style="font-size:11px;color:rgba(255,255,255,0.5)">不可逆 / 批量操作</div>
    </div>
  </div>
</section>
</div>
`;
