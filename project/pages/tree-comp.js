/* AngelWatch Design System — page: tree-comp (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["tree-comp"] = `
<div class="content">
<section class="section" id="tree-comp">
  <p class="section-eyebrow">Components · 树</p>
  <h2>Tree</h2>
  <p class="lede">承载层级关系——机构树（集团 → 大区 → 城市 → 营业厅）、设备分组、权限菜单。支持搜索、多选、半选状态。</p>

  <div class="surface">
    <div class="row" style="gap:32px;align-items:flex-start">
<div class="tree-comp">
  <div class="search"><input class="input" placeholder="搜索机构 / 分组" /></div>
  <div class="body">
    <div class="tnode expanded"><div class="caret">›</div><div class="check checked"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V8l7-5 7 5v13"/></svg><span class="lbl">AngelWatch 集团</span><span class="count">12,486</span></div>
    <div class="tnode expanded depth-1"><div class="caret">›</div><div class="check partial"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl">华东大区</span><span class="count">5,284</span></div>
    <div class="tnode expanded depth-2 selected"><div class="caret">›</div><div class="check checked"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl">上海</span><span class="count">2,401</span></div>
    <div class="tnode leaf depth-3"><div class="caret"></div><div class="check checked"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="6" width="16" height="14" rx="1"/><path d="M8 6V3m8 3V3"/></svg><span class="lbl">黄浦营业厅</span><span class="count">186</span></div>
    <div class="tnode leaf depth-3"><div class="caret"></div><div class="check checked"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="6" width="16" height="14" rx="1"/><path d="M8 6V3m8 3V3"/></svg><span class="lbl">徐汇营业厅</span><span class="count">214</span></div>
    <div class="tnode leaf depth-3"><div class="caret"></div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="6" width="16" height="14" rx="1"/><path d="M8 6V3m8 3V3"/></svg><span class="lbl">浦东营业厅</span><span class="count">328</span></div>
    <div class="tnode depth-2"><div class="caret">›</div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl">杭州</span><span class="count">1,802</span></div>
    <div class="tnode depth-2"><div class="caret">›</div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl">南京</span><span class="count">1,081</span></div>
    <div class="tnode depth-1"><div class="caret">›</div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl">华北大区</span><span class="count">3,402</span></div>
    <div class="tnode depth-1"><div class="caret">›</div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl">华南大区</span><span class="count">2,816</span></div>
    <div class="tnode depth-1"><div class="caret">›</div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl">华西大区</span><span class="count">984</span></div>
  </div>
</div>
<div style="flex:1;font-size:13px;color:var(--aw-text-2);line-height:1.7">
  <h3 style="margin:0 0 10px;font-size:14px;color:var(--aw-text-1)">行为</h3>
  <ul style="padding-left:18px;margin:0">
    <li>点击文字行选中节点；点击 caret 展开 / 折叠</li>
    <li>父节点处于 <strong>半选状态</strong>（partial）当其下子节点部分被勾选</li>
    <li>右侧 <code class="mono">count</code> 显示该节点下的设备总数</li>
    <li>搜索框过滤节点，命中部分高亮，自动展开父节点</li>
    <li>键盘：↑↓ 移动，← 折叠，→ 展开，Space 勾选</li>
  </ul>
</div>
    </div>
  </div>
</section>
</div>
`;
