/* AngelWatch Design System — page: tree-list (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["tree-list"] = `
<div class="content">
<!-- TREELIST -->
<section class="section" id="tree-list">
  <p class="section-eyebrow">Patterns · TreeListLayout</p>
  <h2>TreeListLayout · 树 + 列表</h2>
  <p class="lede">左侧 240px 机构树 / 资源树（可折叠），右侧承载列表或详情。TMS 中频率最高的层级布局——设备分组、权限管理、告警规则均沿用。</p>
  <div class="frame">
    <div class="frame-head">📐 TreeListLayout · 设备分组</div>
    <div class="frame-body" style="padding:0">
<div class="treelist-mock">
  <div class="left">
    <div class="ttl">机构树</div>
    <div style="padding:0 10px 10px"><input class="input" style="height:28px;font-size:12px" placeholder="搜索…" /></div>
    <div class="tnode expanded" style="padding:5px 10px"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V8l7-5 7 5v13"/></svg><span class="lbl">AngelWatch 集团</span><span class="count">12,486</span></div>
    <div class="tnode expanded depth-1"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl">华东大区</span><span class="count">5,284</span></div>
    <div class="tnode expanded depth-2 selected"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl">上海</span><span class="count">2,401</span></div>
    <div class="tnode leaf depth-3"><div class="caret"></div><span class="lbl" style="color:var(--aw-text-2)">黄浦营业厅</span><span class="count">186</span></div>
    <div class="tnode leaf depth-3"><div class="caret"></div><span class="lbl" style="color:var(--aw-text-2)">徐汇营业厅</span><span class="count">214</span></div>
    <div class="tnode depth-2"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl">杭州</span><span class="count">1,802</span></div>
    <div class="tnode depth-2"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl">南京</span><span class="count">1,081</span></div>
    <div class="tnode depth-1"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl">华北大区</span><span class="count">3,402</span></div>
    <div class="tnode depth-1"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl">华南大区</span><span class="count">2,816</span></div>
    <div class="tnode depth-1"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl">华西大区</span><span class="count">984</span></div>
  </div>
  <div class="right">
    <div class="crumbs"><a>机构树</a><span class="sep">/</span><a>华东大区</a><span class="sep">/</span><span class="current">上海</span></div>
    <div class="row" style="justify-content:space-between"><h3 style="margin:0;font-size:16px">上海 · 设备列表 (2,401)</h3><div class="row"><button class="btn btn-sm">+ 添加设备</button><button class="btn btn-sm">批量推送</button></div></div>
    <div class="table-wrap" style="flex:1;overflow:hidden">
      <table class="dt">
        <thead><tr><th>设备名称</th><th>SN</th><th>状态</th><th>所属营业厅</th><th>固件</th></tr></thead>
        <tbody>
          <tr><td>终端-上海-001</td><td><code>DEV-86420075</code></td><td><span class="status-dot online">在线</span></td><td>黄浦营业厅</td><td>v3.4.2</td></tr>
          <tr><td>终端-上海-002</td><td><code>DEV-86420076</code></td><td><span class="status-dot online">在线</span></td><td>黄浦营业厅</td><td>v3.4.2</td></tr>
          <tr><td>终端-上海-014</td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading">升级中</span></td><td>徐汇营业厅</td><td>v3.4.1</td></tr>
          <tr><td>终端-上海-022</td><td><code>DEV-86420098</code></td><td><span class="status-dot offline">离线</span></td><td>浦东营业厅</td><td>v3.3.8</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    </div>
  </div>
</section>
</div>
`;
