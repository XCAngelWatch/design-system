/* AngelWatch Design System — page: detail-page (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["detail-page"] = `
<div class="content">
<!-- DETAIL PAGE -->
<section class="section" id="detail-page">
  <p class="section-eyebrow"><span data-i18n="detail-page:text.001">页面蓝图 · DetailPage</span></p>
  <h2><span data-i18n="detail-page:text.002">详情页 DetailPage</span></h2>
  <p class="lede"><span data-i18n="detail-page:text.003">顶栏面包屑 + 内容区页头（← 返回、标题与状态同一行）+ 业务正文。返回按钮与标题并列，不嵌入 h1，加载、空数据、错误、403、移动端与紧凑态均保留。优先使用显式目标或有效站内来源，无来源时回到业务父页并保留列表状态；正文分组、摘要与标签页按业务组织，抽屉详情仍使用关闭。</span></p>
  <div class="frame" style="background:var(--aw-bg)">
    <div class="frame-head">📐 DetailPage</div>
    <div class="frame-body" style="padding:20px">
<div class="page-back-row" data-slot="shell-breadcrumbs">
  <div class="crumbs"><a href="#/device-center-page"><span data-i18n="detail-page:text.005">设备管理</span></a><span class="sep">/</span><span class="current"><span data-i18n="detail-page:text.006">终端-上海-001</span></span></div>
</div>
<div class="surface" style="padding:18px;margin-bottom:0">
  <header class="detail-content-header">
    <div class="ph-title-with-back"><button class="btn btn-back" type="button" data-route-back data-back-fallback="#/device-center-page"><svg class="aw-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#aw-icon-arrow-left"></use></svg><span data-i18n="detail-page:text.004">返回</span></button><div class="ph-title-content"><div class="row"><h3 style="margin:0;font-size:18px"><span data-i18n="detail-page:text.008">终端-上海-001</span></h3><span class="status-dot online"><span data-i18n="detail-page:text.009">在线</span></span><span class="tag tag-blue">Android 11</span></div></div></div>
    <div class="row"><button class="btn"><span data-i18n="detail-page:text.020">远程控制</span></button><button class="btn btn-primary"><span data-i18n="detail-page:text.021">推送 OTA</span></button></div>
  </header>
  <div class="row" style="gap:18px;align-items:flex-start">
    <div style="width:56px;height:56px;border-radius:6px;background:var(--aw-primary-bg);color: var(--aw-primary-text);display:grid;place-items:center;font-size:20px;font-weight:600"><span data-i18n="detail-page:text.007">终</span></div>
    <div style="flex:1">
      <div class="detail-summary-grid">
        <div><div style="color:var(--aw-text-3);font-size:12px">SN</div><code>DEV-86420075-IMEI</code></div>
        <div><div style="color:var(--aw-text-3);font-size:12px"><span data-i18n="detail-page:text.010">所属机构</span></div><span data-i18n="detail-page:text.011">上海 / 黄浦</span></div>
        <div><div style="color:var(--aw-text-3);font-size:12px"><span data-i18n="detail-page:text.012">固件</span></div>v3.4.2</div>
        <div><div style="color:var(--aw-text-3);font-size:12px"><span data-i18n="detail-page:text.013">最后心跳</span></div><span data-i18n="detail-page:text.014">刚刚</span></div>
        <div><div style="color:var(--aw-text-3);font-size:12px"><span data-i18n="detail-page:text.015">IP 地址</span></div><code>10.0.42.118</code></div>
        <div><div style="color:var(--aw-text-3);font-size:12px"><span data-i18n="detail-page:text.016">激活时间</span></div>2025-11-04</div>
        <div><div style="color:var(--aw-text-3);font-size:12px"><span data-i18n="detail-page:text.017">运行天数</span></div><span data-i18n="detail-page:text.018">173 天</span></div>
        <div><div style="color:var(--aw-text-3);font-size:12px"><span data-i18n="detail-page:text.019">电量</span></div>87%</div>
      </div>
    </div>
  </div>
</div>
<div style="background:var(--aw-bg);border:1px solid var(--aw-border-2);border-top:0;border-radius:0 0 6px 6px">
  <div class="tabs"><a class="active"><span data-i18n="detail-page:text.022">基础信息</span></a><a><span data-i18n="detail-page:text.023">实时状态</span></a><a><span data-i18n="detail-page:text.024">操作日志</span></a><a><span data-i18n="detail-page:text.025">告警 (3)</span></a><a><span data-i18n="detail-page:text.026">固件历史</span></a></div>
  <div style="padding:24px;font-size:13px;color:var(--aw-text-3)"><span data-i18n="detail-page:text.027">所选标签的内容区。</span></div>
</div>
    </div>
  </div>
  <div class="subsection" data-component-contract>
    <h3><span data-i18n="common:component.contract">组件契约</span></h3>
    <div class="blueprint-notes"><span><a href="#/page-header">PageHeader</a></span><span><a href="#/tab-variants">Tabs</a></span><span><a href="#/avatar-result">Description</a></span><span><a href="#/drawer">Drawer</a></span><span><a href="#/status-matrix">Status</a></span></div>
  </div>
</section>
</div>
`;
