/* AngelWatch Design System — page: layout (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["layout"] = `
<div class="content">
<!-- LAYOUT -->
<section class="section" id="layout">
  <p class="section-eyebrow"><span data-i18n="layout:t001">设计基础 · 布局栅格</span></p>
  <h2><span data-i18n="layout:t002">布局栅格 Layout</span></h2>
  <p class="lede"><span data-i18n="layout:t003">布局规则可执行可校验：基于</span> <b><span data-i18n="layout:t004">24 栅格 + 六档响应式断点 + 5 种页面骨架</span></b><span data-i18n="layout:t005">，覆盖窄屏查询到宽屏运维。页面不使用分辨率守卫阻断访问；所有间距基于 4px 单位，与 Spacing 页保持一致。</span></p>

  <div class="section-subtitle"><span data-i18n="layout:t006">Grid System · 24 栅格</span></div>
  <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 12px"><span data-i18n="layout:t007">沿用 antd 24 列约定。常用切分：1/2 →</span> <code>span 12</code> / 1/3 → <code>span 8</code> / 1/4 → <code>span 6</code> / 1/6 → <code>span 4</code><span data-i18n="layout:t008">。Form 表单常用</span> <code>labelCol 6 / wrapperCol 18</code>.</p>

  <div class="grid-demo">
    <div class="grid-ruler">
<div class="gtick" data-n="1"></div><div class="gtick"></div><div class="gtick"></div><div class="gtick"></div>
<div class="gtick" data-n="5"></div><div class="gtick"></div><div class="gtick"></div><div class="gtick"></div>
<div class="gtick" data-n="9"></div><div class="gtick"></div><div class="gtick"></div><div class="gtick"></div>
<div class="gtick" data-n="13"></div><div class="gtick"></div><div class="gtick"></div><div class="gtick"></div>
<div class="gtick" data-n="17"></div><div class="gtick"></div><div class="gtick"></div><div class="gtick"></div>
<div class="gtick" data-n="21"></div><div class="gtick"></div><div class="gtick"></div><div class="gtick" data-n="24"></div>
    </div>
    <div class="grid-row">
<div class="gcell solid" style="grid-column:span 24"><span data-i18n="layout:t009">span 24 · 全宽</span></div>
    </div>
    <div class="grid-row">
<div class="gcell" style="grid-column:span 12">span 12</div>
<div class="gcell" style="grid-column:span 12">span 12</div>
    </div>
    <div class="grid-row">
<div class="gcell" style="grid-column:span 8">span 8</div>
<div class="gcell" style="grid-column:span 8">span 8</div>
<div class="gcell" style="grid-column:span 8">span 8</div>
    </div>
    <div class="grid-row">
<div class="gcell" style="grid-column:span 6">span 6</div>
<div class="gcell" style="grid-column:span 6">span 6</div>
<div class="gcell" style="grid-column:span 6">span 6</div>
<div class="gcell" style="grid-column:span 6">span 6</div>
    </div>
    <div class="grid-row">
<div class="gcell" style="grid-column:span 4">span 4</div>
<div class="gcell" style="grid-column:span 4">span 4</div>
<div class="gcell" style="grid-column:span 4">span 4</div>
<div class="gcell" style="grid-column:span 4">span 4</div>
<div class="gcell" style="grid-column:span 4">span 4</div>
<div class="gcell" style="grid-column:span 4">span 4</div>
    </div>
    <div class="grid-row">
<div class="gcell solid" style="grid-column:span 6">labelCol 6</div>
<div class="gcell" style="grid-column:span 18"><span data-i18n="layout:t010">wrapperCol 18 · Form 默认</span></div>
    </div>
  </div>

  <table class="layout-spec-table">
    <thead><tr><th style="width:140px">Gutter</th><th style="width:120px"><span data-i18n="layout:t011">值</span></th><th><span data-i18n="layout:t012">用途</span></th></tr></thead>
    <tbody>
<tr><td><code>gutter-sm</code></td><td><code>8px</code></td><td><span data-i18n="layout:t013">密集表单 / Compact 模式列间</span></td></tr>
<tr><td><code>gutter-md</code></td><td><code>16px</code></td><td><b><span data-i18n="layout:t014">默认</span></b><span data-i18n="layout:t015">：列表卡片、统计行、Form 行间</span></td></tr>
<tr><td><code>gutter-lg</code></td><td><code>24px</code></td><td><span data-i18n="layout:t016">Dashboard 模块间、详情页 section 间</span></td></tr>
<tr><td><code>gutter-xl</code></td><td><code>32px</code></td><td><span data-i18n="layout:t017">仅营销 / 登录页这类低密度区域</span></td></tr>
    </tbody>
  </table>

  <div class="section-subtitle" style="margin-top:32px"><span data-i18n="layout:t018">Breakpoints · 六档实现断点</span></div>
  <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 12px"><span data-i18n="layout:t019">TMS 采用</span><b><span data-i18n="layout:t020">桌面优先、窄屏可用</span></b><span data-i18n="layout:t021">。下方四组示意展示主要布局变化；实际实现统一使用 xs 480 / sm 576 / md 768 / lg 992 / xl 1200 / xxl 1600px，基础样式同时覆盖小于 xs。完整规则见 Responsive。</span></p>

  <div class="bp-devices">
    <div class="bp-card bp-mobile">
<div class="bp-frame"><div class="bp-screen"></div></div>
<div class="bp-label">xs / sm</div>
<div class="bp-range">&lt; 768px</div>
<div class="bp-cols"><span data-i18n="layout:t022">单列内容与局部横向滚动</span></div>
    </div>
    <div class="bp-card bp-tablet">
<div class="bp-frame"><div class="bp-screen"></div></div>
<div class="bp-label">md / lg</div>
<div class="bp-range">768 – 1199px</div>
<div class="bp-cols"><span data-i18n="layout:t023">恢复侧栏与自适应表单</span></div>
    </div>
    <div class="bp-card bp-desktop">
<div class="bp-frame"><div class="bp-screen"></div></div>
<div class="bp-label">xl</div>
<div class="bp-range">1200 – 1599px</div>
<div class="bp-cols"><span data-i18n="layout:t024">高密度列表与统计区域</span></div>
    </div>
    <div class="bp-card bp-wide">
<div class="bp-frame"><div class="bp-screen"></div></div>
<div class="bp-label">xxl</div>
<div class="bp-range">≥ 1600px</div>
<div class="bp-cols"><span data-i18n="layout:t025">限制行长，按内容扩展</span></div>
    </div>
  </div>

  <table class="layout-spec-table">
    <thead><tr><th style="width:140px"><span data-i18n="layout:t026">断点</span></th><th style="width:170px"><span data-i18n="layout:t027">范围</span></th><th style="width:140px">Sidebar</th><th style="width:140px"><span data-i18n="layout:t028">表格</span></th><th><span data-i18n="layout:t029">典型布局</span></th></tr></thead>
    <tbody>
      <tr><td><code>xs / base</code></td><td><code>&lt; 576px (xs: 480px)</code></td><td><span data-i18n="layout:t030">底部导航或抽屉菜单</span></td><td><span data-i18n="layout:t031">局部横向滚动</span></td><td><span data-i18n="layout:t032">基础窄屏覆盖小于 480px；单列内容、顶部表单标签，关键操作可达</span></td></tr>
      <tr><td><code>sm</code></td><td>576–767px</td><td><span data-i18n="layout:t030">底部导航或抽屉菜单</span></td><td><span data-i18n="layout:t034">横向滚动</span></td><td><span data-i18n="layout:breakpoints.smUsage">单列或紧凑双列；浮层保持安全边距</span></td></tr>
      <tr><td><code>md</code></td><td>768–991px</td><td><span data-i18n="layout:t033">恢复侧栏，可折叠</span></td><td><span data-i18n="layout:t034">横向滚动</span></td><td><span data-i18n="layout:t035">按字段关系使用一至两列表单，保留详情与关键状态</span></td></tr>
      <tr><td><code>lg</code></td><td>992–1199px</td><td><span data-i18n="layout:t036">按偏好展开或折叠</span></td><td><span data-i18n="layout:t037">保留可读列宽</span></td><td><b><span data-i18n="layout:t038">标准管理布局</span></b><span data-i18n="layout:t039">：详情可双栏，表格按需横向滚动</span></td></tr>
      <tr><td><code>xl</code></td><td>1200–1599px</td><td><span data-i18n="layout:t036">按偏好展开或折叠</span></td><td><span data-i18n="layout:t041">按优先级显示列，必要时滚动</span></td><td><span data-i18n="layout:t042">三至四列统计区域；大屏限制单图与文字行宽</span></td></tr>
      <tr><td><code>xxl</code></td><td>≥ 1600px</td><td><span data-i18n="layout:t040">侧栏 + 容器最大宽度</span></td><td><span data-i18n="layout:t041">按优先级显示列，必要时滚动</span></td><td><span data-i18n="layout:t042">三至四列统计区域；大屏限制单图与文字行宽</span></td></tr>
    </tbody>
  </table>

  <div class="section-subtitle" style="margin-top:32px"><span data-i18n="layout:t043">Container · 最大宽度</span></div>
  <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 12px"><span data-i18n="layout:t044">宽屏内容需要限制行长。下方是设计参考尺寸；实现可通过</span><code>max-width</code> <span data-i18n="layout:t045">与自动外边距控制内容宽度；</span> <code>.aw-container / --aw-container-max</code> <span data-i18n="layout:t046">不是当前仓库发布的容器 API，不应直接假定存在。</span></p>
  <div class="container-demo">
    <div class="crow"><span class="clabel">&lt; 480</span><span class="cbar" style="width:100%"></span><span class="cmax">100% · padding 16px</span></div>
    <div class="crow"><span class="clabel">480–767</span><span class="cbar" style="width:90%"></span><span class="cmax">100% · padding 20px</span></div>
    <div class="crow"><span class="clabel">768–1599</span><span class="cbar" style="width:78%"></span><span class="cmax">max 1200px · padding 24px</span></div>
    <div class="crow"><span class="clabel">≥ 1600</span><span class="cbar" style="width:90%"></span><span class="cmax">max 1440px · padding 32px</span></div>
    <div class="crow"><span class="clabel"><span data-i18n="layout:t047">数据大屏</span></span><span class="cbar" style="width:100%"></span><span class="cmax"><span data-i18n="layout:t048">无上限 · 全宽铺满</span></span></div>
  </div>

  <div class="section-subtitle" style="margin-top:32px"><span data-i18n="layout:t049">Spacing × Layout · 4px 基础节奏</span></div>
  <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 12px"><span data-i18n="layout:t050">所有间距落在</span> <code>4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64</code> <span data-i18n="layout:t051">这 10 档。避免未经说明的</span> <code>13px</code> / <code>17px</code> <span data-i18n="layout:t052">等布局自由值；边框补偿、控件内部几何与字符微调可按组件规范处理。布局取值与 Spacing 页保持一致。</span></p>
  <div class="surface" style="font-size:13px;color:var(--aw-text-2);line-height:1.8;padding:16px 18px">
    · <b><span data-i18n="layout:t053">组件内</span></b><span data-i18n="layout:t054">：4 / 8 — 图标↔文字、Tag 内边距</span><br/>
    · <b><span data-i18n="layout:t055">组件间（同组）</span></b><span data-i18n="layout:t056">：12 / 16 — 表单行、按钮组、卡片内 section</span><br/>
    · <b><span data-i18n="layout:t057">模块间</span></b><span data-i18n="layout:t058">：24 / 32 — 卡片之间、详情页 sections 之间</span><br/>
    · <b><span data-i18n="layout:t059">页面级</span></b><span data-i18n="layout:t060">：48 / 64 — 主标题上下、页脚距离</span>
  </div>

  <div class="section-subtitle" style="margin-top:32px"><span data-i18n="layout:t061">Page Layouts · 5 种核心骨架</span></div>
  <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 12px"><span data-i18n="layout:t062">所有业务页面只能用以下 5 种骨架之一。每种都已固化导航、标题、操作区、内容区的位置，禁止业务方自创布局。</span></p>
  <div class="page-skeletons">
    <div class="page-sk">
<div class="sk-thumb">
  <div class="sk-sb"></div>
  <div class="sk-main">
    <div class="sk-block" style="height:14px"></div>
    <div class="sk-block" style="height:24px"></div>
    <div class="sk-block" style="flex:1"></div>
    <div class="sk-block" style="height:18px"></div>
  </div>
</div>
<div class="sk-foot">
  <div class="sk-name">List Page</div>
  <div class="sk-en"><span data-i18n="layout:t063">列表页</span></div>
  <div class="sk-when"><span data-i18n="layout:t064">面包屑 + 标题 + 筛选 + 工具栏 + 表格 + 分页。最常用。</span></div>
</div>
    </div>
    <div class="page-sk">
<div class="sk-thumb">
  <div class="sk-sb"></div>
  <div class="sk-main">
    <div class="sk-block" style="height:14px"></div>
    <div class="sk-block brand" style="height:54px"></div>
    <div class="sk-block" style="height:18px"></div>
    <div class="sk-block" style="flex:1"></div>
  </div>
</div>
<div class="sk-foot">
  <div class="sk-name">Detail Page</div>
  <div class="sk-en"><span data-i18n="layout:t065">详情页</span></div>
  <div class="sk-when"><span data-i18n="layout:t066">返回 + 可选面包屑 + 头部信息卡 + Tabs + Tab 内容。</span></div>
</div>
    </div>
    <div class="page-sk">
<div class="sk-thumb">
  <div class="sk-sb"></div>
  <div class="sk-main">
    <div class="sk-block" style="height:14px"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px"><div class="sk-block" style="height:30px"></div><div class="sk-block" style="height:30px"></div><div class="sk-block" style="height:30px"></div></div>
    <div style="display:grid;grid-template-columns:2fr 1fr;gap:4px;flex:1"><div class="sk-block"></div><div class="sk-block"></div></div>
  </div>
</div>
<div class="sk-foot">
  <div class="sk-name">Dashboard</div>
  <div class="sk-en"><span data-i18n="layout:t067">仪表盘</span></div>
  <div class="sk-when"><span data-i18n="layout:t068">指标卡片行 + 图表行 + 待办列表。</span></div>
</div>
    </div>
    <div class="page-sk">
<div class="sk-thumb">
  <div class="sk-sb"></div>
  <div class="sk-main">
    <div class="sk-block brand" style="height:30px"></div>
    <div class="sk-block" style="flex:1"></div>
    <div class="sk-block" style="height:24px"></div>
  </div>
</div>
<div class="sk-foot">
  <div class="sk-name">Wizard Page</div>
  <div class="sk-en"><span data-i18n="layout:t069">向导页</span></div>
  <div class="sk-when"><span data-i18n="layout:t070">离开流程的返回 + Steps + 中部内容 + 底部上一步 / 下一步；不重复面包屑。</span></div>
</div>
    </div>
    <div class="page-sk">
<div class="sk-thumb">
  <div class="sk-sb"></div>
  <div class="sk-main">
    <div class="sk-block" style="height:14px"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;flex:1"><div class="sk-block"></div><div class="sk-block"></div></div>
    <div class="sk-block" style="height:24px"></div>
  </div>
</div>
<div class="sk-foot">
  <div class="sk-name">Form Page</div>
  <div class="sk-en"><span data-i18n="layout:t071">表单页</span></div>
  <div class="sk-when"><span data-i18n="layout:t072">返回 + 标题 + 按内容排列的表单 + 底部操作栏；窄屏单列，不重复面包屑。</span></div>
</div>
    </div>
  </div>
</section>
</div>
`;
