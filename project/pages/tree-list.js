/* AngelWatch Design System — page: tree-list (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["tree-list"] = `
<div class="content">
<!-- TREELIST -->
<section class="section" id="tree-list">
  <p class="section-eyebrow"><span data-i18n="tree-list:text.001">页面蓝图 · TreeListLayout</span></p>
  <h2><span data-i18n="tree-list:text.002">树列表 TreeListLayout</span></h2>
  <p class="lede"><span data-i18n="tree-list:text.003">左侧 240px 机构树 / 资源树（可折叠），右侧承载列表或详情。TMS 中频率最高的层级布局——设备分组、权限管理、告警规则均沿用。</span></p>
  <div class="frame">
    <div class="frame-head"><span data-i18n="tree-list:text.004">📐 TreeListLayout · 设备分组</span></div>
    <div class="frame-body" style="padding:0">
<div class="treelist-mock">
  <div class="left">
    <div class="ttl"><span data-i18n="tree-list:text.005">机构树</span></div>
    <div style="padding:0 10px 10px"><input class="input" style="height:28px;font-size:12px" placeholder="搜索…" data-i18n-placeholder="tree-list:text.006" /></div>
    <div class="tnode expanded" style="padding:5px 10px"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V8l7-5 7 5v13"/></svg><span class="lbl"><span data-i18n="tree-list:text.007">AngelWatch 集团</span></span><span class="count">12,486</span></div>
    <div class="tnode expanded depth-1"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-list:text.008">华东大区</span></span><span class="count">5,284</span></div>
    <div class="tnode expanded depth-2 selected"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl"><span data-i18n="tree-list:text.009">上海</span></span><span class="count">2,401</span></div>
    <div class="tnode leaf depth-3"><div class="caret"></div><span class="lbl" style="color:var(--aw-text-2)"><span data-i18n="tree-list:text.010">黄浦营业厅</span></span><span class="count">186</span></div>
    <div class="tnode leaf depth-3"><div class="caret"></div><span class="lbl" style="color:var(--aw-text-2)"><span data-i18n="tree-list:text.011">徐汇营业厅</span></span><span class="count">214</span></div>
    <div class="tnode depth-2"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl"><span data-i18n="tree-list:text.012">杭州</span></span><span class="count">1,802</span></div>
    <div class="tnode depth-2"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl"><span data-i18n="tree-list:text.013">南京</span></span><span class="count">1,081</span></div>
    <div class="tnode depth-1"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-list:text.014">华北大区</span></span><span class="count">3,402</span></div>
    <div class="tnode depth-1"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-list:text.015">华南大区</span></span><span class="count">2,816</span></div>
    <div class="tnode depth-1"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-list:text.016">华西大区</span></span><span class="count">984</span></div>
  </div>
  <div class="right">
    <div class="crumbs"><a><span data-i18n="tree-list:text.017">机构树</span></a><span class="sep">/</span><a><span data-i18n="tree-list:text.018">华东大区</span></a><span class="sep">/</span><span class="current"><span data-i18n="tree-list:text.019">上海</span></span></div>
    <div class="row" style="justify-content:space-between"><h3 style="margin:0;font-size:16px"><span data-i18n="tree-list:text.020">上海 · 设备列表 (2,401)</span></h3><div class="row"><button class="btn btn-sm"><span data-i18n="tree-list:text.021">+ 添加设备</span></button><button class="btn btn-sm"><span data-i18n="tree-list:text.022">批量推送</span></button></div></div>
    <div class="table-wrap" style="flex:1;overflow:hidden">
      <table class="dt">
        <thead><tr><th><span data-i18n="tree-list:text.023">设备名称</span></th><th>SN</th><th><span data-i18n="tree-list:text.024">状态</span></th><th><span data-i18n="tree-list:text.025">所属营业厅</span></th><th><span data-i18n="tree-list:text.026">固件</span></th></tr></thead>
        <tbody>
          <tr><td><span data-i18n="tree-list:text.027">终端-上海-001</span></td><td><code>DEV-86420075</code></td><td><span class="status-dot online"><span data-i18n="tree-list:text.028">在线</span></span></td><td><span data-i18n="tree-list:text.029">黄浦营业厅</span></td><td>v3.4.2</td></tr>
          <tr><td><span data-i18n="tree-list:text.030">终端-上海-002</span></td><td><code>DEV-86420076</code></td><td><span class="status-dot online"><span data-i18n="tree-list:text.031">在线</span></span></td><td><span data-i18n="tree-list:text.032">黄浦营业厅</span></td><td>v3.4.2</td></tr>
          <tr><td><span data-i18n="tree-list:text.033">终端-上海-014</span></td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading"><span data-i18n="tree-list:text.034">升级中</span></span></td><td><span data-i18n="tree-list:text.035">徐汇营业厅</span></td><td>v3.4.1</td></tr>
          <tr><td><span data-i18n="tree-list:text.036">终端-上海-022</span></td><td><code>DEV-86420098</code></td><td><span class="status-dot offline"><span data-i18n="tree-list:text.037">离线</span></span></td><td><span data-i18n="tree-list:text.038">浦东营业厅</span></td><td>v3.3.8</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    </div>
  </div>
  <div class="subsection" data-component-contract>
    <h3><span data-i18n="common:component.contract">组件契约</span></h3>
    <div class="blueprint-notes"><span><a href="#/tree-comp">Tree</a></span><span><a href="#/table">Table</a></span><span><a href="#/row-actions">RowActions</a></span><span><a href="#/empty-state">Empty</a></span><span><a href="#/loading-levels">Loading</a></span></div>
  </div>
  <div class="subsection">
    <h3><span data-i18n="tree-list:conflict.title">批量分配与冲突 · Assignment Conflict</span></h3>
    <table class="map-table">
      <thead><tr><th><span data-i18n="tree-list:conflict.state">状态</span></th><th><span data-i18n="tree-list:conflict.meaning">含义</span></th><th><span data-i18n="tree-list:conflict.action">可用动作</span></th></tr></thead>
      <tbody>
        <tr><td><span class="tag tag-info"><span data-i18n="tree-list:conflict.partial">部分分配</span></span></td><td><span data-i18n="tree-list:conflict.partialDesc">所选对象只有一部分已在当前范围</span></td><td><span data-i18n="tree-list:conflict.partialAction">补充分配或查看差异</span></td></tr>
        <tr><td><span class="tag tag-warning"><span data-i18n="tree-list:conflict.conflicted">冲突</span></span></td><td><span data-i18n="tree-list:conflict.conflictedDesc">对象已被其他策略、机构或分组占用</span></td><td><span data-i18n="tree-list:conflict.conflictedAction">查看来源、跳过或按权限覆盖</span></td></tr>
        <tr><td><span class="tag tag-neutral"><span data-i18n="tree-list:conflict.skipped">已跳过</span></span></td><td><span data-i18n="tree-list:conflict.skippedDesc">无权限、离线限制或用户选择不覆盖</span></td><td><span data-i18n="tree-list:conflict.skippedAction">下载清单或返回修改范围</span></td></tr>
      </tbody>
    </table>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><span data-i18n="tree-list:conflict.rule">覆盖操作必须显示冲突来源、影响数量和最终生效范围；不得只给红色标签或静默覆盖。</span></div></div>
  </div>
</section>
</div>
`;
