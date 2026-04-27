/* AngelWatch Design System — page: cascader (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["cascader"] = `
<div class="content">
<!-- CASCADER + TRANSFER -->
<section class="section" id="cascader">
  <p class="section-eyebrow">Components · 高级选择</p>
  <h2>Cascader &amp; Transfer · 级联 / 穿梭</h2>
  <p class="lede">"区域 → 站点 → 仓库 → 货架"四级地理选择用 Cascader，"角色 → 终端组"权限分配用 Transfer，两个 antd 经典组件覆盖几乎所有"层级选择 / 双栏选取"场景，避免嵌套 Select 凑合。</p>

  <div class="subsection">
    <h3>Cascader · 级联选择</h3>
    <div style="display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:start">
<div>
  <div class="select" style="width:340px">华东一区 / 上海站 / 嘉定仓 / 货架 A-12</div>
  <p style="font-size:12px;color:var(--aw-text-3);margin:8px 0 0;max-width:340px;line-height:1.6">点击展开 popover；最多 4 级深度；面包屑回填到输入框；支持搜索"嘉定"直接定位叶子。</p>
</div>
<div class="cascader-pop">
  <div class="cascader-col">
    <div class="search"><input placeholder="搜索区域 / 站点…" /></div>
    <div class="item active">华东一区<span class="arrow">›</span></div>
    <div class="item">华北二区<span class="arrow">›</span></div>
    <div class="item">华南一区<span class="arrow">›</span></div>
    <div class="item">西南一区<span class="arrow">›</span></div>
  </div>
  <div class="cascader-col">
    <div class="item active">上海站<span class="arrow">›</span></div>
    <div class="item">杭州站<span class="arrow">›</span></div>
    <div class="item">南京站<span class="arrow">›</span></div>
  </div>
  <div class="cascader-col">
    <div class="item">浦东仓<span class="arrow">›</span></div>
    <div class="item active">嘉定仓<span class="arrow">›</span></div>
    <div class="item">松江仓<span class="arrow">›</span></div>
  </div>
  <div class="cascader-col">
    <div class="item">货架 A-08</div>
    <div class="item">货架 A-10</div>
    <div class="item active">货架 A-12</div>
    <div class="item">货架 A-15</div>
    <div class="item">货架 B-01</div>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3>Transfer · 穿梭框</h3>
    <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 14px;max-width:720px;line-height:1.6">用于"待处理 → 已选"的批量分配。典型场景：把一批未分组终端加入"OTA 灰度组 5%"。</p>
    <div class="transfer">
<div class="transfer-pane">
  <div class="head"><span class="ttl">待选终端</span><span class="cnt">86 项 · 已选 3</span></div>
  <div class="search"><input placeholder="按 SN 搜索…" /></div>
  <div class="body">
    <div class="item checked"><span class="cb"></span><span>DEV-86420075 · 终端-上海-001</span></div>
    <div class="item"><span class="cb"></span><span>DEV-86420081 · 终端-上海-002</span></div>
    <div class="item checked"><span class="cb"></span><span>DEV-86420094 · 终端-上海-003</span></div>
    <div class="item"><span class="cb"></span><span>DEV-86420112 · 终端-北京-014</span></div>
    <div class="item checked"><span class="cb"></span><span>DEV-86420128 · 终端-北京-015</span></div>
    <div class="item"><span class="cb"></span><span>DEV-86420198 · 终端-广州-007</span></div>
    <div class="item"><span class="cb"></span><span>DEV-86420244 · 终端-成都-022</span></div>
  </div>
</div>
<div class="transfer-arrows">
  <button class="is-active" title="加入右侧">›</button>
  <button title="移回左侧">‹</button>
</div>
<div class="transfer-pane">
  <div class="head"><span class="ttl">灰度组 5%</span><span class="cnt">12 项 · 已选 0</span></div>
  <div class="search"><input placeholder="按 SN 搜索…" /></div>
  <div class="body">
    <div class="item"><span class="cb"></span><span>DEV-86420050 · 终端-上海-A1</span></div>
    <div class="item"><span class="cb"></span><span>DEV-86420051 · 终端-上海-A2</span></div>
    <div class="item"><span class="cb"></span><span>DEV-86420060 · 终端-杭州-B5</span></div>
    <div class="item"><span class="cb"></span><span>DEV-86420065 · 终端-南京-C2</span></div>
    <div class="item"><span class="cb"></span><span>DEV-86420068 · 终端-苏州-D1</span></div>
  </div>
</div>
    </div>
  </div>
</section>
</div>
`;
