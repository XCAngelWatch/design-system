/* AngelWatch Design System — page: cascader (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["cascader"] = `
<div class="content">
<!-- CASCADER + TRANSFER -->
<section class="section" id="cascader">
  <p class="section-eyebrow"><span data-i18n="cascader:text.001">业务模式 · 级联与穿梭</span></p>
  <h2><span data-i18n="cascader:text.002">级联与穿梭 Cascader / Transfer</span></h2>
  <p class="lede"><span data-i18n="cascader:text.003">"机构 → 设备分组 → 设备型号 → 终端"四级对象选择用 Cascader，"角色 → 终端组"权限分配用 Transfer，两个 antd 经典组件覆盖几乎所有"层级选择 / 双栏选取"场景，避免嵌套 Select 凑合。</span></p>

  <div class="subsection">
    <h3><span data-i18n="cascader:text.004">Cascader · 级联选择</span></h3>
    <div style="display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:start">
<div>
  <div class="select" style="width:340px"><span data-i18n="cascader:text.005">华东一区 / 上海运营中心 / P5 设备组 / DEV-86420075</span></div>
  <p style="font-size:12px;color:var(--aw-text-3);margin:8px 0 0;max-width:340px;line-height:1.6"><span data-i18n="cascader:text.006">点击展开 popover；最多 4 级深度；面包屑回填到输入框；支持搜索"DEV"直接定位叶子。</span></p>
</div>
<div class="cascader-pop">
  <div class="cascader-col">
    <div class="search"><input placeholder="搜索机构 / 设备…" data-i18n-placeholder="cascader:text.007" /></div>
    <div class="item active"><span data-i18n="cascader:text.008">华东一区</span><span class="arrow">›</span></div>
    <div class="item"><span data-i18n="cascader:text.009">华北二区</span><span class="arrow">›</span></div>
    <div class="item"><span data-i18n="cascader:text.010">华南一区</span><span class="arrow">›</span></div>
    <div class="item"><span data-i18n="cascader:text.011">西南一区</span><span class="arrow">›</span></div>
  </div>
  <div class="cascader-col">
    <div class="item active"><span data-i18n="cascader:text.012">上海运营中心</span><span class="arrow">›</span></div>
    <div class="item"><span data-i18n="cascader:text.013">杭州运营中心</span><span class="arrow">›</span></div>
    <div class="item"><span data-i18n="cascader:text.014">南京运营中心</span><span class="arrow">›</span></div>
  </div>
  <div class="cascader-col">
    <div class="item"><span data-i18n="cascader:text.015">P3 设备组</span><span class="arrow">›</span></div>
    <div class="item active"><span data-i18n="cascader:text.016">P5 设备组</span><span class="arrow">›</span></div>
    <div class="item"><span data-i18n="cascader:text.017">P8 设备组</span><span class="arrow">›</span></div>
  </div>
  <div class="cascader-col">
    <div class="item">DEV-86420008</div>
    <div class="item">DEV-86420010</div>
    <div class="item active">DEV-86420075</div>
    <div class="item">DEV-86420015</div>
    <div class="item">DEV-86420101</div>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="cascader:text.018">Transfer · 穿梭框</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 14px;max-width:720px;line-height:1.6"><span data-i18n="cascader:text.019">用于"待处理 → 已选"的批量分配。典型场景：把一批未分组终端加入"OTA 灰度组 5%"。</span></p>
    <div class="transfer">
<div class="transfer-pane">
  <div class="head"><span class="ttl" data-i18n="cascader:text.020">待选终端</span><span class="cnt" data-i18n="cascader:text.021">86 项 · 已选 3</span></div>
  <div class="search"><input placeholder="按 SN 搜索…" data-i18n-placeholder="cascader:text.022" /></div>
  <div class="body">
    <div class="item checked"><span class="cb"></span><span data-i18n="cascader:text.023">DEV-86420075 · 终端-上海-001</span></div>
    <div class="item"><span class="cb"></span><span data-i18n="cascader:text.024">DEV-86420081 · 终端-上海-002</span></div>
    <div class="item checked"><span class="cb"></span><span data-i18n="cascader:text.025">DEV-86420094 · 终端-上海-003</span></div>
    <div class="item"><span class="cb"></span><span data-i18n="cascader:text.026">DEV-86420112 · 终端-北京-014</span></div>
    <div class="item checked"><span class="cb"></span><span data-i18n="cascader:text.027">DEV-86420128 · 终端-北京-015</span></div>
    <div class="item"><span class="cb"></span><span data-i18n="cascader:text.028">DEV-86420198 · 终端-广州-007</span></div>
    <div class="item"><span class="cb"></span><span data-i18n="cascader:text.029">DEV-86420244 · 终端-成都-022</span></div>
  </div>
</div>
<div class="transfer-arrows">
  <button class="is-active" title="加入右侧" data-i18n-title="cascader:text.030">›</button>
  <button title="移回左侧" data-i18n-title="cascader:text.031">‹</button>
</div>
<div class="transfer-pane">
  <div class="head"><span class="ttl" data-i18n="cascader:text.032">灰度组 5%</span><span class="cnt" data-i18n="cascader:text.033">12 项 · 已选 0</span></div>
  <div class="search"><input placeholder="按 SN 搜索…" data-i18n-placeholder="cascader:text.034" /></div>
  <div class="body">
    <div class="item"><span class="cb"></span><span data-i18n="cascader:text.035">DEV-86420050 · 终端-上海-A1</span></div>
    <div class="item"><span class="cb"></span><span data-i18n="cascader:text.036">DEV-86420051 · 终端-上海-A2</span></div>
    <div class="item"><span class="cb"></span><span data-i18n="cascader:text.037">DEV-86420060 · 终端-杭州-B5</span></div>
    <div class="item"><span class="cb"></span><span data-i18n="cascader:text.038">DEV-86420065 · 终端-南京-C2</span></div>
    <div class="item"><span class="cb"></span><span data-i18n="cascader:text.039">DEV-86420068 · 终端-苏州-D1</span></div>
  </div>
</div>
    </div>
  </div>
</section>
</div>
`;
