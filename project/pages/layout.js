/* AngelWatch Design System — page: layout (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["layout"] = `
<div class="content">
<!-- LAYOUT -->
<section class="section" id="layout">
  <p class="section-eyebrow"><span data-i18n="layout:t001">设计基础 · 布局栅格</span></p>
  <h2><span data-i18n="layout:t002">布局栅格 Layout</span></h2>
  <p class="lede"><span data-i18n="layout:t003">布局规则可执行可校验：基于</span> <b><span data-i18n="layout:t004">24 栅格 + 桌面断点 + 5 种页面骨架</span></b><span data-i18n="layout:t005">，覆盖从最小宽度守卫到 4K 监控大屏的受支持桌面分辨率。所有间距使用 4px 基础单元（同 Spacing scale）。</span></p>

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

  <div class="section-subtitle" style="margin-top:32px"><span data-i18n="layout:t018">Breakpoints · 4 档响应式断点</span></div>
  <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 12px"><span data-i18n="layout:t019">TMS 主战场是桌面（≥ 1280px），低于最小支持宽度时显示</span><b><span data-i18n="layout:t020">分辨率守卫而非移动端适配</span></b><span data-i18n="layout:t021">。Sidebar 与表格只在桌面宽度变化内做适配，不适配手机或平板布局。</span></p>

  <div class="bp-devices">
    <div class="bp-card bp-mobile">
<div class="bp-frame"><div class="bp-screen"></div></div>
<div class="bp-label">Guard</div>
<div class="bp-range">&lt; 768px</div>
<div class="bp-cols"><span data-i18n="layout:t022">显示分辨率守卫</span></div>
    </div>
    <div class="bp-card bp-tablet">
<div class="bp-frame"><div class="bp-screen"></div></div>
<div class="bp-label">Below Min</div>
<div class="bp-range">768 – 1024px</div>
<div class="bp-cols"><span data-i18n="layout:t023">不做移动端适配</span></div>
    </div>
    <div class="bp-card bp-desktop">
<div class="bp-frame"><div class="bp-screen"></div></div>
<div class="bp-label">Desktop</div>
<div class="bp-range">1024 – 1600px</div>
<div class="bp-cols"><span data-i18n="layout:t024">3 / 6 / 12 列</span></div>
    </div>
    <div class="bp-card bp-wide">
<div class="bp-frame"><div class="bp-screen"></div></div>
<div class="bp-label">Wide</div>
<div class="bp-range">≥ 1600px</div>
<div class="bp-cols"><span data-i18n="layout:t025">4 / 8 / 24 列</span></div>
    </div>
  </div>

  <table class="layout-spec-table">
    <thead><tr><th style="width:140px"><span data-i18n="layout:t026">断点</span></th><th style="width:170px"><span data-i18n="layout:t027">范围</span></th><th style="width:140px">Sidebar</th><th style="width:140px"><span data-i18n="layout:t028">表格</span></th><th><span data-i18n="layout:t029">典型布局</span></th></tr></thead>
    <tbody>
<tr>
  <td><span class="bp-name"><code>xs</code> Mobile</span></td>
  <td><code>&lt; 768</code></td>
  <td><span data-i18n="layout:t030">分辨率守卫</span></td>
  <td><span data-i18n="layout:t031">不支持</span></td>
  <td><span data-i18n="layout:t032">显示分辨率守卫；不适配手机或平板布局</span></td>
</tr>
<tr>
  <td><span class="bp-name"><code>sm</code> Tablet</span></td>
  <td><code>768 – 1024</code></td>
  <td><span data-i18n="layout:t033">强制折叠 (64px)</span></td>
  <td><span data-i18n="layout:t034">横向滚动</span></td>
  <td><span data-i18n="layout:t035">桌面窄屏布局；按优先级隐藏次要表格列，保持详情内容可读</span></td>
</tr>
<tr>
  <td><span class="bp-name"><code>md</code> Desktop</span></td>
  <td><code>1024 – 1600</code></td>
  <td><span data-i18n="layout:t036">展开 (240px)</span></td>
  <td><span data-i18n="layout:t037">原表格</span></td>
  <td><b><span data-i18n="layout:t038">主战场</span></b><span data-i18n="layout:t039">：3 列统计 / 6 列设备网格 / 详情双栏</span></td>
</tr>
<tr>
  <td><span class="bp-name"><code>lg</code> Wide</span></td>
  <td><code>≥ 1600</code></td>
  <td><span data-i18n="layout:t040">展开 + 容器最大宽度</span></td>
  <td><span data-i18n="layout:t041">原表格 + 更多列</span></td>
  <td><span data-i18n="layout:t042">大屏监控；4 列统计 / 8 列设备网格 / 三栏详情</span></td>
</tr>
    </tbody>
  </table>

  <div class="section-subtitle" style="margin-top:32px"><span data-i18n="layout:t043">Container · 最大宽度</span></div>
  <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 12px"><span data-i18n="layout:t044">内容区在大屏不无限拉伸 — 否则一行字横跨 3000px 不可读。</span><code>.aw-container</code> <span data-i18n="layout:t045">默认居中，通过</span> <code>--aw-container-max</code> <span data-i18n="layout:t046">控制上限。</span></p>
  <div class="container-demo">
    <div class="crow"><span class="clabel">xs</span><span class="cbar" style="width:100%"></span><span class="cmax">100% · padding 16px</span></div>
    <div class="crow"><span class="clabel">sm</span><span class="cbar" style="width:90%"></span><span class="cmax">100% · padding 20px</span></div>
    <div class="crow"><span class="clabel">md</span><span class="cbar" style="width:78%"></span><span class="cmax">max 1200px · padding 24px</span></div>
    <div class="crow"><span class="clabel">lg</span><span class="cbar" style="width:90%"></span><span class="cmax">max 1440px · padding 32px</span></div>
    <div class="crow"><span class="clabel"><span data-i18n="layout:t047">数据大屏</span></span><span class="cbar" style="width:100%"></span><span class="cmax"><span data-i18n="layout:t048">无上限 · 全宽铺满</span></span></div>
  </div>

  <div class="section-subtitle" style="margin-top:32px"><span data-i18n="layout:t049">Spacing × Layout · 4px 基础节奏</span></div>
  <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 12px"><span data-i18n="layout:t050">所有间距落在</span> <code>4 / 8 / 12 / 16 / 24 / 32 / 48 / 64</code> <span data-i18n="layout:t051">这 8 档上，不允许出现</span> <code>13px</code> / <code>17px</code> <span data-i18n="layout:t052">这类自由值。布局间距 ≥ 元件间距 ≥ 字符间距，构成"节奏一致 + 信息层级清晰"的视觉。</span></p>
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
  <div class="sk-when"><span data-i18n="layout:t066">面包屑 + 头部信息卡 + Tabs + Tab 内容。</span></div>
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
  <div class="sk-when"><span data-i18n="layout:t070">Steps 顶 + 中部内容 + 底部上一步 / 下一步。</span></div>
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
  <div class="sk-when"><span data-i18n="layout:t072">面包屑 + 标题 + 双列表单 + 底部操作栏。</span></div>
</div>
    </div>
  </div>
</section>
</div>
`;
