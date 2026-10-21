/* AngelWatch Design System — page: list-page (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["list-page"] = `
<div class="content">
<!-- LIST PAGE -->
<section class="section" id="list-page">
  <p class="section-eyebrow"><span data-i18n="list-page:text.001">页面蓝图 · ListPage</span></p>
  <h2><span data-i18n="list-page:text.002">列表页 ListPage</span></h2>
  <p class="lede"><span data-i18n="list-page:text.003">面包屑 → AWTableFilters 筛选卡 → 工具栏 → 批量选择条 → AWTable → 分页。筛选卡统一主要 / 高级字段、已应用计数与搜索底栏；字段、权限和查询语义由业务声明。</span></p>
  <div class="frame" style="background:var(--aw-bg)">
    <div class="frame-head">📐 ListPage</div>
    <div class="frame-body" style="padding:20px">
<div class="crumbs" style="margin-bottom:12px"><a href="#/overview"><span data-i18n="list-page:text.004">首页</span></a><span class="sep">/</span><a href="#/device-center-page"><span data-i18n="list-page:text.005">数据中心</span></a><span class="sep">/</span><span class="current"><span data-i18n="list-page:text.006">设备管理</span></span></div>
<h3 style="margin:0 0 14px;font-size:18px"><span data-i18n="list-page:text.007">设备管理</span></h3>
<div class="surface" style="padding:16px;margin-bottom:12px">
  <div class="row" style="justify-content:space-between;margin-bottom:16px"><h4 style="margin:0"><span data-i18n="list-page:filters.title">筛选条件</span></h4><span style="font-size:12px;color:var(--aw-text-3)" data-i18n="list-page:filters.count">已启用 0 项</span></div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:16px">
    <div style="min-width:0"><span data-i18n="list-page:text.008">设备 SN</span><div class="input" style="min-height:32px;margin-top:4px" aria-hidden="true"></div></div>
    <div style="min-width:0"><span data-i18n="list-page:text.009">状态</span><div class="input" style="min-height:32px;margin-top:4px"><span data-i18n="list-page:filters.all">全部</span></div></div>
    <div style="min-width:0"><span data-i18n="list-page:text.010">所属机构</span><div class="input" style="min-height:32px;margin-top:4px"><span data-i18n="list-page:filters.all">全部</span></div></div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:16px;margin-top:16px">
    <div style="min-width:0"><span data-i18n="list-page:text.011">固件版本</span><div class="input" style="min-height:32px;margin-top:4px" aria-hidden="true"></div></div>
    <div style="min-width:0"><span data-i18n="list-page:filters.date">创建日期</span><div class="input row" style="min-height:32px;margin-top:4px;justify-content:space-between"><span data-i18n="list-page:filters.start">开始日期</span><span aria-hidden="true">–</span><span data-i18n="list-page:filters.end">结束日期</span></div></div>
  </div>
  <div class="row" style="justify-content:space-between;border-top:1px solid var(--aw-border-2);padding-top:12px;margin-top:16px">
    <span class="btn btn-link" style="padding-inline:0"><span data-i18n="list-page:filters.collapse">收起筛选</span><span aria-hidden="true">⌃</span></span>
    <div class="row"><span class="btn"><span data-i18n="list-page:text.013">重置</span></span><span class="btn btn-primary"><span data-i18n="list-page:text.012">搜索</span></span></div>
  </div>
  <p style="font-size:12px;color:var(--aw-text-3);margin:12px 0 0"><span data-i18n="list-page:filters.static">展开态静态蓝图，控件不提交查询。折叠只改变显示，草稿和已应用条件均保留；计数依据已应用条件。</span> <a href="#/table"><span data-i18n="list-page:filters.preview">打开 AWTableFilters 交互预览</span></a></p>
</div>
<div class="row" style="justify-content:space-between;margin-bottom:10px">
  <div class="row"><button class="btn btn-primary btn-sm"><span data-i18n="list-page:text.014">+ 添加</span></button><button class="btn btn-sm"><span data-i18n="list-page:text.015">批量推送</span></button><button class="btn btn-sm"><span data-i18n="list-page:text.016">导出</span></button><span style="font-size:12px;color:var(--aw-text-3)"><span data-i18n="list-page:text.017">已选 0 项</span></span></div>
  <div class="row"><button class="btn btn-sm"><span data-i18n="list-page:text.018">⊞ 卡片</span></button></div>
</div>
<div class="table-wrap">
  <table class="dt">
    <thead><tr><th scope="col" style="width:36px"><span class="visually-hidden" data-i18n="common:selectionColumn">选择列</span><label class="check"><input type="checkbox" aria-label="全选当前页" data-i18n-aria-label="common:selectCurrentPage" /><span class="box"></span></label></th><th><span data-i18n="list-page:text.020">设备名称</span></th><th>SN</th><th><span data-i18n="list-page:text.021">状态</span></th><th><span data-i18n="list-page:text.022">版本</span></th><th class="colactions" style="width:96px"><span data-i18n="list-page:text.023">操作</span></th></tr></thead>
    <tbody>
      <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="list-page:text.024">终端-上海-001</span></td><td><code>DEV-86420075</code></td><td><span class="status-dot online"><span data-i18n="list-page:text.025">在线</span></span></td><td>v3.4.2</td><td class="colactions"><div class="table-actions"><button class="btn btn-link" type="button" data-demo-route="#/detail-page"><span data-i18n="list-page:text.026">详情</span></button></div></td></tr>
      <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="list-page:text.027">终端-北京-014</span></td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading"><span data-i18n="list-page:text.028">升级中</span></span></td><td>v3.4.1</td><td class="colactions"><div class="table-actions"><button class="btn btn-link" type="button" data-demo-route="#/detail-page"><span data-i18n="list-page:text.029">详情</span></button></div></td></tr>
    </tbody>
  </table>
</div>
<div class="row" style="justify-content:flex-end;margin-top:12px">
  <div class="pager" data-total-pages="625"><span class="total"><span data-i18n="list-page:text.030">共 12,486 项</span></span><button class="page" disabled aria-label="上一页" data-i18n-aria-label="common:paginationPrevious">‹</button><button class="page is-active">1</button><button class="page">2</button><button class="page">3</button><span class="page" aria-hidden="true">…</span><button class="page">625</button><button class="page" aria-label="下一页" data-i18n-aria-label="common:paginationNext">›</button></div>
</div>
    </div>
  </div>
  <div class="subsection" data-component-contract>
    <h3><span data-i18n="common:component.contract">组件契约</span></h3>
    <div class="blueprint-notes"><span><a href="#/page-header">PageHeader</a></span><span><a href="#/table">AWTableFilters / AWTable</a></span><span><a href="#/row-actions">RowActions</a></span><span><a href="#/empty-state">Empty</a></span><span><a href="#/loading-levels">Loading</a></span></div>
  </div>
</section>
</div>
`;
