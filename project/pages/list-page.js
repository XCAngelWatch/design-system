/* AngelWatch Design System — page: list-page (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["list-page"] = `
<div class="content">
<!-- LIST PAGE -->
<section class="section" id="list-page">
  <p class="section-eyebrow"><span data-i18n="list-page:text.001">页面蓝图 · ListPage</span></p>
  <h2><span data-i18n="list-page:text.002">列表页 ListPage</span></h2>
  <p class="lede"><span data-i18n="list-page:text.003">面包屑 → 可折叠搜索表单 → 工具栏（批量操作 + 视图切换） → 表格（多选 + 分页 + 列设置）。这是 TMS 出现频率最高的页面骨架。</span></p>
  <div class="frame" style="background:var(--aw-bg)">
    <div class="frame-head">📐 ListPage</div>
    <div class="frame-body" style="padding:20px">
<div class="crumbs" style="margin-bottom:12px"><a href="#/overview"><span data-i18n="list-page:text.004">首页</span></a><span class="sep">/</span><a href="#/device-center-page"><span data-i18n="list-page:text.005">数据中心</span></a><span class="sep">/</span><span class="current"><span data-i18n="list-page:text.006">设备管理</span></span></div>
<h3 style="margin:0 0 14px;font-size:18px"><span data-i18n="list-page:text.007">设备管理</span></h3>
<div class="search-mock" style="margin-bottom:12px">
  <div class="field"><label><span data-i18n="list-page:text.008">设备 SN</span></label><div class="ipt"></div></div>
  <div class="field"><label><span data-i18n="list-page:text.009">状态</span></label><div class="ipt"></div></div>
  <div class="field"><label><span data-i18n="list-page:text.010">所属机构</span></label><div class="ipt"></div></div>
  <div class="field"><label><span data-i18n="list-page:text.011">固件版本</span></label><div class="ipt"></div></div>
  <div class="acts"><div class="btn-mock"><span data-i18n="list-page:text.012">查询</span></div><div class="btn-mock ghost"><span data-i18n="list-page:text.013">重置</span></div></div>
</div>
<div class="row" style="justify-content:space-between;margin-bottom:10px">
  <div class="row"><button class="btn btn-primary btn-sm"><span data-i18n="list-page:text.014">+ 添加</span></button><button class="btn btn-sm"><span data-i18n="list-page:text.015">批量推送</span></button><button class="btn btn-sm"><span data-i18n="list-page:text.016">导出</span></button><span style="font-size:12px;color:var(--aw-text-3)"><span data-i18n="list-page:text.017">已选 0 项</span></span></div>
  <div class="row"><button class="btn btn-sm"><span data-i18n="list-page:text.018">⊞ 卡片</span></button><button class="btn btn-sm"><span data-i18n="list-page:text.019">⚙ 列设置</span></button></div>
</div>
<div class="table-wrap">
  <table class="dt">
    <thead><tr><th style="width:36px"><label class="check"><input type="checkbox" aria-label="全选当前页" data-i18n-aria-label="common:selectCurrentPage" /><span class="box"></span></label></th><th><span data-i18n="list-page:text.020">设备名称</span></th><th>SN</th><th><span data-i18n="list-page:text.021">状态</span></th><th><span data-i18n="list-page:text.022">版本</span></th><th class="colactions" style="width:96px"><span data-i18n="list-page:text.023">操作</span></th></tr></thead>
    <tbody>
      <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="list-page:text.024">终端-上海-001</span></td><td><code>DEV-86420075</code></td><td><span class="status-dot online"><span data-i18n="list-page:text.025">在线</span></span></td><td>v3.4.2</td><td class="colactions"><div class="table-actions"><button class="btn btn-link"><span data-i18n="list-page:text.026">详情</span></button></div></td></tr>
      <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="list-page:text.027">终端-北京-014</span></td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading"><span data-i18n="list-page:text.028">升级中</span></span></td><td>v3.4.1</td><td class="colactions"><div class="table-actions"><button class="btn btn-link"><span data-i18n="list-page:text.029">详情</span></button></div></td></tr>
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
    <div class="blueprint-notes"><span><a href="#/page-header">PageHeader</a></span><span><a href="#/inputs">Input</a></span><span><a href="#/table">Table</a></span><span><a href="#/row-actions">RowActions</a></span><span><a href="#/empty-state">Empty</a></span><span><a href="#/loading-levels">Loading</a></span></div>
  </div>
</section>
</div>
`;
