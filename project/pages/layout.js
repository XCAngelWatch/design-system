/* AngelWatch Design System — page: layout (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["layout"] = `
<div class="content">
<!-- LAYOUT -->
<section class="section" id="layout">
  <p class="section-eyebrow">Foundations · 整体布局</p>
  <h2>Layout · 栅格 / 容器 / 断点 / 页面骨架</h2>
  <p class="lede">布局规则可执行可校验：基于 <b>24 栅格 + 4 档断点 + 5 种页面模板</b>，覆盖从手机到 4K 大屏的所有场景。所有间距使用 4px 基础单元（同 Spacing scale）。</p>

  <div class="section-subtitle">Grid System · 24 栅格</div>
  <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 12px">沿用 antd 24 列约定。常用切分：1/2 → <code>span 12</code>、1/3 → <code>span 8</code>、1/4 → <code>span 6</code>、1/6 → <code>span 4</code>。Form 表单常用 <code>labelCol 6 / wrapperCol 18</code>。</p>

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
<div class="gcell solid" style="grid-column:span 24">span 24 · 全宽</div>
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
<div class="gcell" style="grid-column:span 18">wrapperCol 18 · Form 默认</div>
    </div>
  </div>

  <table class="layout-spec-table">
    <thead><tr><th style="width:140px">Gutter</th><th style="width:120px">值</th><th>用途</th></tr></thead>
    <tbody>
<tr><td><code>gutter-sm</code></td><td><code>8px</code></td><td>密集表单 / Compact 模式列间</td></tr>
<tr><td><code>gutter-md</code></td><td><code>16px</code></td><td><b>默认</b>：列表卡片、统计行、Form 行间</td></tr>
<tr><td><code>gutter-lg</code></td><td><code>24px</code></td><td>Dashboard 模块间、详情页 section 间</td></tr>
<tr><td><code>gutter-xl</code></td><td><code>32px</code></td><td>仅营销 / 登录页这类低密度区域</td></tr>
    </tbody>
  </table>

  <div class="section-subtitle" style="margin-top:32px">Breakpoints · 4 档响应式断点</div>
  <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 12px">TMS 主战场是桌面（≥ 1280），同时<b>全量支持移动端</b>。Sidebar 在 &lt; 1024 自动收起为抽屉，表格在 &lt; 768 转卡片视图。</p>

  <div class="bp-devices">
    <div class="bp-card bp-mobile">
<div class="bp-frame"><div class="bp-screen"></div></div>
<div class="bp-label">Mobile</div>
<div class="bp-range">&lt; 768px</div>
<div class="bp-cols">1 / 2 / 4 列</div>
    </div>
    <div class="bp-card bp-tablet">
<div class="bp-frame"><div class="bp-screen"></div></div>
<div class="bp-label">Tablet</div>
<div class="bp-range">768 – 1024px</div>
<div class="bp-cols">2 / 4 / 8 列</div>
    </div>
    <div class="bp-card bp-desktop">
<div class="bp-frame"><div class="bp-screen"></div></div>
<div class="bp-label">Desktop</div>
<div class="bp-range">1024 – 1600px</div>
<div class="bp-cols">3 / 6 / 12 列</div>
    </div>
    <div class="bp-card bp-wide">
<div class="bp-frame"><div class="bp-screen"></div></div>
<div class="bp-label">Wide</div>
<div class="bp-range">≥ 1600px</div>
<div class="bp-cols">4 / 8 / 24 列</div>
    </div>
  </div>

  <table class="layout-spec-table">
    <thead><tr><th style="width:140px">断点</th><th style="width:170px">范围</th><th style="width:140px">Sidebar</th><th style="width:140px">表格</th><th>典型布局</th></tr></thead>
    <tbody>
<tr>
  <td><span class="bp-name"><code>xs</code> Mobile</span></td>
  <td><code>&lt; 768</code></td>
  <td>抽屉式 (drawer)</td>
  <td>转卡片视图</td>
  <td>单列优先；TabBar 替代左导航；浮层全屏化</td>
</tr>
<tr>
  <td><span class="bp-name"><code>sm</code> Tablet</span></td>
  <td><code>768 – 1024</code></td>
  <td>折叠 (64px)</td>
  <td>横向滚动</td>
  <td>2 列卡片；筛选区收起为下拉；详情页单栏堆叠</td>
</tr>
<tr>
  <td><span class="bp-name"><code>md</code> Desktop</span></td>
  <td><code>1024 – 1600</code></td>
  <td>展开 (240px)</td>
  <td>原表格</td>
  <td><b>主战场</b>：3 列统计 / 6 列设备网格 / 详情双栏</td>
</tr>
<tr>
  <td><span class="bp-name"><code>lg</code> Wide</span></td>
  <td><code>≥ 1600</code></td>
  <td>展开 + 容器最大宽度</td>
  <td>原表格 + 更多列</td>
  <td>大屏监控；4 列统计 / 8 列设备网格 / 三栏详情</td>
</tr>
    </tbody>
  </table>

  <div class="section-subtitle" style="margin-top:32px">Container · 最大宽度</div>
  <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 12px">内容区在大屏不无限拉伸 — 否则一行字横跨 3000px 不可读。<code>.aw-container</code> 默认居中，通过 <code>--aw-container-max</code> 控制上限。</p>
  <div class="container-demo">
    <div class="crow"><span class="clabel">xs</span><span class="cbar" style="width:100%"></span><span class="cmax">100% · padding 16px</span></div>
    <div class="crow"><span class="clabel">sm</span><span class="cbar" style="width:90%"></span><span class="cmax">100% · padding 20px</span></div>
    <div class="crow"><span class="clabel">md</span><span class="cbar" style="width:78%"></span><span class="cmax">max 1200px · padding 24px</span></div>
    <div class="crow"><span class="clabel">lg</span><span class="cbar" style="width:90%"></span><span class="cmax">max 1440px · padding 32px</span></div>
    <div class="crow"><span class="clabel">数据大屏</span><span class="cbar" style="width:100%"></span><span class="cmax">无上限 · 全宽铺满</span></div>
  </div>

  <div class="section-subtitle" style="margin-top:32px">Spacing × Layout · 4px 基础节奏</div>
  <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 12px">所有间距落在 <code>4 / 8 / 12 / 16 / 24 / 32 / 48 / 64</code> 这 8 档上，不允许出现 <code>13px</code> / <code>17px</code> 这类自由值。布局间距 ≥ 元件间距 ≥ 字符间距，构成"节奏一致 + 信息层级清晰"的视觉。</p>
  <div class="surface" style="font-size:13px;color:var(--aw-text-2);line-height:1.8;padding:16px 18px">
    · <b>组件内</b>：4 / 8 — 图标↔文字、Tag 内边距<br/>
    · <b>组件间（同组）</b>：12 / 16 — 表单行、按钮组、卡片内 section<br/>
    · <b>模块间</b>：24 / 32 — 卡片之间、详情页 sections 之间<br/>
    · <b>页面级</b>：48 / 64 — 主标题上下、页脚距离
  </div>

  <div class="section-subtitle" style="margin-top:32px">Page Layouts · 5 种核心骨架</div>
  <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 12px">所有业务页面只能用以下 5 种骨架之一。每种都已固化导航、标题、操作区、内容区的位置，禁止业务方自创布局。</p>
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
  <div class="sk-en">列表页</div>
  <div class="sk-when">面包屑 + 标题 + 筛选 + 工具栏 + 表格 + 分页。最常用。</div>
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
  <div class="sk-en">详情页</div>
  <div class="sk-when">面包屑 + 头部信息卡 + Tabs + Tab 内容。</div>
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
  <div class="sk-en">仪表盘</div>
  <div class="sk-when">指标卡片行 + 图表行 + 待办列表。</div>
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
  <div class="sk-en">向导页</div>
  <div class="sk-when">Steps 顶 + 中部内容 + 底部上一步 / 下一步。</div>
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
  <div class="sk-en">表单页</div>
  <div class="sk-when">面包屑 + 标题 + 双列表单 + 底部操作栏。</div>
</div>
    </div>
  </div>
</section>
</div>
`;
