/* AngelWatch Design System — page: list-page (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["list-page"] = `
<div class="content">
<!-- LIST PAGE -->
<section class="section" id="list-page">
  <p class="section-eyebrow">Patterns · ListPage</p>
  <h2>ListPage · 列表页</h2>
  <p class="lede">面包屑 → 可折叠搜索表单 → 工具栏（批量操作 + 视图切换） → 表格（多选 + 分页 + 列设置）。这是 TMS 出现频率最高的页面骨架。</p>
  <div class="frame" style="background:var(--aw-bg)">
    <div class="frame-head">📐 ListPage</div>
    <div class="frame-body" style="padding:20px">
<div class="crumbs" style="margin-bottom:12px"><a>首页</a><span class="sep">/</span><a>数据中心</a><span class="sep">/</span><span class="current">设备管理</span></div>
<h3 style="margin:0 0 14px;font-size:18px">设备管理</h3>
<div class="search-mock" style="margin-bottom:12px">
  <div class="field"><label>设备 SN</label><div class="ipt"></div></div>
  <div class="field"><label>状态</label><div class="ipt"></div></div>
  <div class="field"><label>所属机构</label><div class="ipt"></div></div>
  <div class="field"><label>固件版本</label><div class="ipt"></div></div>
  <div class="acts"><div class="btn-mock">查询</div><div class="btn-mock ghost">重置</div></div>
</div>
<div class="row" style="justify-content:space-between;margin-bottom:10px">
  <div class="row"><button class="btn btn-primary btn-sm">+ 添加</button><button class="btn btn-sm">批量推送</button><button class="btn btn-sm">导出</button><span style="font-size:12px;color:var(--aw-text-3)">已选 0 项</span></div>
  <div class="row"><button class="btn btn-sm">⊞ 卡片</button><button class="btn btn-sm">⚙ 列设置</button></div>
</div>
<div class="table-wrap">
  <table class="dt">
    <thead><tr><th style="width:36px"></th><th>设备名称</th><th>SN</th><th>状态</th><th>版本</th><th class="colactions">操作</th></tr></thead>
    <tbody>
      <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td>终端-上海-001</td><td><code>DEV-86420075</code></td><td><span class="status-dot online">在线</span></td><td>v3.4.2</td><td class="colactions"><button class="btn btn-link">详情</button></td></tr>
      <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td>终端-北京-014</td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading">升级中</span></td><td>v3.4.1</td><td class="colactions"><button class="btn btn-link">详情</button></td></tr>
    </tbody>
  </table>
</div>
<div class="row" style="justify-content:flex-end;margin-top:12px">
  <div class="pager"><span class="total">共 12,486 项</span><button class="page">‹</button><button class="page is-active">1</button><button class="page">2</button><button class="page">3</button><button class="page">›</button></div>
</div>
    </div>
  </div>
</section>
</div>
`;
