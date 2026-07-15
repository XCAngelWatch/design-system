/* AngelWatch Design System — page: tree-comp (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["tree-comp"] = `
<div class="content">
<section class="section" id="tree-comp">
  <p class="section-eyebrow"><span data-i18n="tree-comp:text.001">通用组件 · 树</span></p>
  <h2><span data-i18n="tree-comp:text.002">树 Tree</span></h2>
  <p class="lede"><span data-i18n="tree-comp:text.003">承载层级关系——机构树（集团 → 大区 → 城市 → 营业厅）、设备分组、权限菜单。支持搜索、多选、半选状态。</span></p>

  <div class="surface">
    <div class="row" style="gap:32px;align-items:flex-start">
<div class="tree-comp">
  <div class="search"><input class="input" placeholder="搜索机构 / 分组" data-i18n-placeholder="tree-comp:attr.004.placeholder" /></div>
  <div class="body">
    <div class="tnode expanded"><div class="caret">›</div><div class="check checked"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V8l7-5 7 5v13"/></svg><span class="lbl"><span data-i18n="tree-comp:text.005">AngelWatch 集团</span></span><span class="count">12,486</span></div>
    <div class="tnode expanded depth-1"><div class="caret">›</div><div class="check partial"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.006">华东大区</span></span><span class="count">5,284</span></div>
    <div class="tnode expanded depth-2 selected"><div class="caret">›</div><div class="check checked"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.007">上海</span></span><span class="count">2,401</span></div>
    <div class="tnode leaf depth-3"><div class="caret"></div><div class="check checked"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="6" width="16" height="14" rx="1"/><path d="M8 6V3m8 3V3"/></svg><span class="lbl"><span data-i18n="tree-comp:text.008">黄浦营业厅</span></span><span class="count">186</span></div>
    <div class="tnode leaf depth-3"><div class="caret"></div><div class="check checked"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="6" width="16" height="14" rx="1"/><path d="M8 6V3m8 3V3"/></svg><span class="lbl"><span data-i18n="tree-comp:text.009">徐汇营业厅</span></span><span class="count">214</span></div>
    <div class="tnode leaf depth-3"><div class="caret"></div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="6" width="16" height="14" rx="1"/><path d="M8 6V3m8 3V3"/></svg><span class="lbl"><span data-i18n="tree-comp:text.010">浦东营业厅</span></span><span class="count">328</span></div>
    <div class="tnode depth-2"><div class="caret">›</div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.011">杭州</span></span><span class="count">1,802</span></div>
    <div class="tnode depth-2"><div class="caret">›</div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.012">南京</span></span><span class="count">1,081</span></div>
    <div class="tnode depth-1"><div class="caret">›</div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.013">华北大区</span></span><span class="count">3,402</span></div>
    <div class="tnode depth-1"><div class="caret">›</div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.014">华南大区</span></span><span class="count">2,816</span></div>
    <div class="tnode depth-1"><div class="caret">›</div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.015">华西大区</span></span><span class="count">984</span></div>
  </div>
</div>
<div style="flex:1;font-size:13px;color:var(--aw-text-2);line-height:1.7">
  <h3 style="margin:0 0 10px;font-size:14px;color:var(--aw-text-1)"><span data-i18n="tree-comp:text.016">行为</span></h3>
  <ul style="padding-left:18px;margin:0">
    <li><span data-i18n="tree-comp:text.017">点击文字行选中节点；点击 caret 展开 / 折叠</span></li>
    <li><span data-i18n="tree-comp:text.018">父节点处于 </span><strong><span data-i18n="tree-comp:text.019">半选状态</span></strong><span data-i18n="tree-comp:text.020">（partial）当其下子节点部分被勾选</span></li>
    <li><span data-i18n="tree-comp:text.021">右侧 </span><code class="mono">count</code><span data-i18n="tree-comp:text.022"> 显示该节点下的设备总数</span></li>
    <li><span data-i18n="tree-comp:text.023">搜索框过滤节点，命中部分高亮，自动展开父节点</span></li>
    <li><span data-i18n="tree-comp:text.024">键盘：↑↓ 移动，← 折叠，→ 展开，Space 勾选</span></li>
  </ul>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="tree-comp:text.025">搜索 · 命中高亮 + 自动展开父级</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="tree-comp:text.026">输入字符过滤节点。命中节点保留（其余隐藏），命中字符高亮，所有命中节点的父链自动展开。空查询恢复初始结构。</span></p>
    <div class="surface">
      <div class="tree-comp" style="max-width:380px">
        <div class="search">
          <input class="input" value="浦" data-i18n-value="tree-comp:attr.027.value" />
        </div>
        <div class="body">
          <div class="tnode expanded"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V8l7-5 7 5v13"/></svg><span class="lbl"><span data-i18n="tree-comp:text.028">AngelWatch 集团</span></span><span class="count">12,486</span></div>
          <div class="tnode expanded depth-1"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.029">华东大区</span></span><span class="count">5,284</span></div>
          <div class="tnode expanded depth-2"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.030">上海</span></span><span class="count">2,401</span></div>
          <div class="tnode leaf depth-3"><div class="caret"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="6" width="16" height="14" rx="1"/><path d="M8 6V3m8 3V3"/></svg><span class="lbl"><span data-i18n="tree-comp:text.031">黄</span><mark><span data-i18n="tree-comp:text.032">浦</span></mark><span data-i18n="tree-comp:text.033">营业厅</span></span><span class="count">186</span></div>
          <div class="tnode leaf depth-3"><div class="caret"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="6" width="16" height="14" rx="1"/><path d="M8 6V3m8 3V3"/></svg><span class="lbl"><mark><span data-i18n="tree-comp:text.034">浦</span></mark><span data-i18n="tree-comp:text.035">东营业厅</span></span><span class="count">328</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="tree-comp:text.036">懒加载 · 大型机构树</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="tree-comp:text.037">机构树节点 &gt; 1k 时不一次性下发。展开节点时拉取子节点（200ms 防抖），caret 切 spinner。失败显示 inline 重试。</span></p>
    <div class="surface">
      <div class="tree-comp" style="max-width:380px">
        <div class="body">
          <div class="tnode expanded"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V8l7-5 7 5v13"/></svg><span class="lbl"><span data-i18n="tree-comp:text.038">AngelWatch 集团</span></span></div>
          <div class="tnode loading depth-1"><div class="caret"><div class="tree-spin"></div></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.039">华东大区</span></span><span class="info-mini"><span data-i18n="tree-comp:text.040">加载中…</span></span></div>
          <div class="tnode err depth-1"><div class="caret">!</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.041">华北大区</span></span><span class="info-mini err"><span data-i18n="tree-comp:text.042">加载失败</span></span><span class="retry-link"><span data-i18n="tree-comp:text.043">重试</span></span></div>
          <div class="tnode depth-1"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.044">华南大区</span></span><span class="count">2,816</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="tree-comp:text.045">空态 · Empty</span></h3>
    <div class="surface">
      <div class="tree-comp" style="max-width:380px">
        <div class="search"><input class="input" value="火星营业厅" data-i18n-value="tree-comp:attr.046.value" /></div>
        <div class="tree-empty">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <div class="te-h"><span data-i18n="tree-comp:text.047">未找到匹配的机构</span></div>
          <div class="te-s"><span data-i18n="tree-comp:text.048">尝试输入完整城市名 / 营业厅名</span></div>
          <div class="te-act"><span class="retry-link"><span data-i18n="tree-comp:text.049">清空查询</span></span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="tree-comp:text.050">选择模式 · 单选 / 多选 / 复选三态</span></h3>
    <div class="tree-mode-grid">
      <div class="tm-card">
        <div class="tm-cap"><span data-i18n="tree-comp:text.051">单选 · selectedKey</span></div>
        <div class="tm-body">
          <div class="tree-comp">
            <div class="body">
              <div class="tnode expanded"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V8l7-5 7 5v13"/></svg><span class="lbl"><span data-i18n="tree-comp:text.052">集团</span></span></div>
              <div class="tnode expanded depth-1"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.053">华东大区</span></span></div>
              <div class="tnode depth-2 selected"><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.054">上海</span></span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="tm-card">
        <div class="tm-cap"><span data-i18n="tree-comp:text.055">多选 · checkable + checkOnSelect</span></div>
        <div class="tm-body">
          <div class="tree-comp">
            <div class="body">
              <div class="tnode expanded"><div class="caret">›</div><div class="check partial"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V8l7-5 7 5v13"/></svg><span class="lbl"><span data-i18n="tree-comp:text.056">集团</span></span></div>
              <div class="tnode expanded depth-1"><div class="caret">›</div><div class="check partial"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.057">华东大区</span></span></div>
              <div class="tnode depth-2"><div class="caret">›</div><div class="check checked"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.058">上海</span></span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="tm-card">
        <div class="tm-cap"><span data-i18n="tree-comp:text.059">复选独立 · checkStrictly</span></div>
        <div class="tm-body">
          <div class="tree-comp">
            <div class="body" data-check-strictly>
              <div class="tnode expanded"><div class="caret">›</div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V8l7-5 7 5v13"/></svg><span class="lbl"><span data-i18n="tree-comp:text.060">集团</span></span></div>
              <div class="tnode expanded depth-1"><div class="caret">›</div><div class="check checked"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.061">华东大区</span></span></div>
              <div class="tnode depth-2"><div class="caret">›</div><div class="check"></div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="3"/><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.062">上海</span></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="tree-comp:text.084">checkStrictly：</span></strong><span data-i18n="tree-comp:text.063">父子勾选互不影响。用于"权限菜单"场景——勾选父节点不代表自动选中子项。默认关闭，需要时显式开启。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="tree-comp:text.064">拖拽 · @dnd-kit 接入位置</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="tree-comp:text.065">机构树调整层级、菜单管理重排序时启用。drag handle 在节点最左侧，drop indicator 用 2px 主色横线（落在两节点之间）或 2px 主色边框（落在节点上做为新子项）。</span></p>
    <div class="surface">
      <div class="tree-comp" style="max-width:420px">
        <div class="body">
          <div class="tnode expanded"><div class="grip-h">⋮⋮</div><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V8l7-5 7 5v13"/></svg><span class="lbl"><span data-i18n="tree-comp:text.066">集团</span></span></div>
          <div class="tnode dragging depth-1"><div class="grip-h">⋮⋮</div><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.067">华南大区</span><span class="info-mini"><span data-i18n="tree-comp:text.068">拖拽中</span></span></span></div>
          <div class="tnode drop-into depth-1"><div class="grip-h">⋮⋮</div><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.069">华东大区</span></span><span class="info-mini"><span data-i18n="tree-comp:text.070">将作为子节点</span></span></div>
          <div class="drop-line"></div>
          <div class="tnode depth-1"><div class="grip-h">⋮⋮</div><div class="caret">›</div><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-6 9 6v12H3z"/></svg><span class="lbl"><span data-i18n="tree-comp:text.071">华北大区</span></span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="tree-comp:text.072">树 + 列表选中联动</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="tree-comp:text.073">TreeListLayout 的核心：树选中节点 → 右侧列表 filter；右侧行点击 → 反向高亮树节点对应路径。详细布局参见 </span><a href="#/tree-list" style="color:var(--aw-primary)">TreeListLayout</a><span data-i18n="tree-comp:text.085">。</span></p>
    <div class="surface">
      <div class="alert info" style="margin:0"><div class="ico">i</div><div class="content"><strong><span data-i18n="tree-comp:text.074">反向高亮规则：</span></strong><span data-i18n="tree-comp:text.075">右侧选中行的 organizationPath（如 集团/华东/上海/黄浦）对应树节点保留 selected 态；多选时仅最后一个保持 selected，前置节点用 dim 高亮（淡蓝色背景）。</span></div></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="tree-comp:text.076">反例</span></h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong><span data-i18n="tree-comp:text.077">不要在树节点上同时显示 ✕ 删除按钮：</span></strong><span data-i18n="tree-comp:text.078">误触概率极高，破坏性操作放右键菜单或 hover 出现的"⋯"按钮。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="tree-comp:text.079">不要把搜索做成"过滤树形"：</span></strong><span data-i18n="tree-comp:text.080">命中节点的父链必须保留（即使父级未命中），否则用户失去层级上下文。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="tree-comp:text.081">涉及变量</span></h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div><span data-i18n="tree-comp:text.082">--aw-primary (selected · checked · drop indicator) · --aw-primary-bg (selected 底)</span></div>
      <div style="margin-top:4px">--aw-fill-1 (hover) · --aw-text-3 (count) · --aw-danger (err) · --aw-warning (loading)</div>
      <div style="margin-top:4px"><span data-i18n="tree-comp:text.083">深度缩进：每层 16px (depth-N: padding-left = 12 + N × 16)</span></div>
    </div>
  </div>
  <div class="subsection"><h3><span data-i18n="common:component.usedBy">页面蓝图使用场景</span></h3><div class="blueprint-notes"><span><a href="#/tree-list">TreeListLayout</a></span><span><a href="#/user-mgmt-page">UserMgmtPage</a></span><span><a href="#/ops-page">OpsPage</a></span></div></div>
</section>
</div>
`;
