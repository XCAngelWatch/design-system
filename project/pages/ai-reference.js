/* AngelWatch Design System — page: ai-reference (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["ai-reference"] = `
<div class="content">
  <section class="section" id="ai-reference">
    <p class="section-eyebrow" data-i18n="ai-reference:hero.eyebrow">导览 · AI 开发入口</p>
    <h2 data-i18n="ai-reference:hero.title">AI 开发入口：先读这里，再按网页范式开发</h2>
    <p class="lede" data-i18n="ai-reference:hero.desc">本页把 Markdown、Figma 证据、外部品牌包和当前页面范式串成一条可执行路径。未来 AI 做页面或组件时，先按这里确定权威顺序，再进入对应路由参考结构和交互。</p>
    <div class="alert info" style="margin-top:18px"><b data-i18n="ai-reference:authority.label">权威顺序：</b><span data-i18n="ai-reference:authority.desc">当前仓库规则最高，Figma / OpenDesign 是业务证据，design-system-angelwatch 只作为旧站品牌包和界面 kit 对照；旧 Vue 2 / Element UI 代码不能覆盖业务仓库当前的 React + AntD v6 范式。</span></div>

    <div class="section-subtitle" style="margin-top:28px" data-i18n="ai-reference:markdown.title">Markdown 入口</div>
    <table class="map-table">
      <thead><tr><th data-i18n="ai-reference:markdown.th.file">文件</th><th data-i18n="ai-reference:markdown.th.purpose">用途</th><th data-i18n="ai-reference:markdown.th.when">什么时候读</th></tr></thead>
      <tbody>
        <tr><td><code>AI_DESIGN_SYSTEM.md</code></td><td data-i18n="ai-reference:markdown.ai.purpose">AI 首读入口，定义权威顺序、页面范式和验收命令</td><td data-i18n="ai-reference:markdown.ai.when">任何新页面、组件、原型或设计系统修改前</td></tr>
        <tr><td><code>docs/ai-coding-design-reference.md</code></td><td data-i18n="ai-reference:markdown.coding.purpose">Figma 业务字段、模块词汇、组件选择和实现提示</td><td data-i18n="ai-reference:markdown.coding.when">需要确定字段、状态、操作或页面结构时</td></tr>
        <tr><td><code>brand-spec.md</code></td><td data-i18n="ai-reference:markdown.brand.purpose">品牌 token、字体、布局姿态和证据摘要</td><td data-i18n="ai-reference:markdown.brand.when">需要确认颜色、字体、间距、圆角和暗色主题时</td></tr>
        <tr><td><code>docs/decisions/audits/2026-07-08-figma-project-diff-conflicts.md</code></td><td data-i18n="ai-reference:markdown.figma.purpose">Figma 与当前项目的冲突、缺口和处理决定</td><td data-i18n="ai-reference:markdown.figma.when">需要判断某个 Figma 内容是否应当迁入时</td></tr>
        <tr><td><code>docs/decisions/audits/2026-07-09-angelwatch-external-design-system-audit.md</code></td><td data-i18n="ai-reference:markdown.external.purpose">design-system-angelwatch 可合并内容与禁用内容</td><td data-i18n="ai-reference:markdown.external.when">需要 token、尺寸或界面 kit 参考时</td></tr>
      </tbody>
    </table>
  </section>

  <section class="section">
    <p class="section-eyebrow" data-i18n="ai-reference:scenes.eyebrow">导览 · 场景入口</p>
    <h2 data-i18n="ai-reference:scenes.title">按开发场景进入对应页面</h2>
    <div class="demo-grid cols-3" style="margin-top:18px">
      <div class="surface"><div class="tag-meta" data-i18n="ai-reference:scene.list.meta">列表 / 表格</div><h3 data-i18n="ai-reference:scene.list.title">筛选、批量、分页</h3><p><span data-i18n="ai-reference:scene.list.prefix">优先看</span> <a href="#/list-page">ListPage</a><span data-i18n="ai-reference:sep">、</span><a href="#/table">Table</a><span data-i18n="ai-reference:sep">、</span><a href="#/row-actions">RowActions</a><span data-i18n="ai-reference:scene.list.suffix">。数据密度、操作列和空状态应保持一致。</span></p></div>
      <div class="surface"><div class="tag-meta" data-i18n="ai-reference:scene.stats.meta">统计 / 图表</div><h3 data-i18n="ai-reference:scene.stats.title">概览到详情闭环</h3><p><span data-i18n="ai-reference:scene.stats.prefix">优先看</span> <a href="#/dash-page">Dashboard</a><span data-i18n="ai-reference:sep">、</span><a href="#/charts">Charts</a><span data-i18n="ai-reference:sep">、</span><a href="#/ops-page">OpsPage</a><span data-i18n="ai-reference:scene.stats.suffix">。图表点位必须能进入同步筛选的详情表。</span></p></div>
      <div class="surface"><div class="tag-meta" data-i18n="ai-reference:scene.account.meta">账户 / 权限</div><h3 data-i18n="ai-reference:scene.account.title">机构、角色、账号</h3><p><span data-i18n="ai-reference:scene.account.prefix">优先看</span> <a href="#/user-mgmt-page">UserMgmtPage</a><span data-i18n="ai-reference:sep">、</span><a href="#/tree-comp">Tree</a><span data-i18n="ai-reference:sep">、</span><a href="#/cascader">Cascader</a><span data-i18n="ai-reference:scene.account.suffix">。权限必须覆盖半选态、冲突和保存前 diff。</span></p></div>
      <div class="surface"><div class="tag-meta" data-i18n="ai-reference:scene.map.meta">地图 / 轨迹</div><h3 data-i18n="ai-reference:scene.map.title">地图主视图</h3><p><span data-i18n="ai-reference:scene.map.prefix">优先看</span> <a href="#/map-page">MapPage</a><span data-i18n="ai-reference:sep">、</span><a href="#/datepicker">DatePicker</a><span data-i18n="ai-reference:sep">、</span><a href="#/tech-stack">TechStack</a><span data-i18n="ai-reference:scene.map.suffix">。地图页不是普通表格页，必须有结果面板。</span></p></div>
      <div class="surface"><div class="tag-meta" data-i18n="ai-reference:scene.push.meta">推送 / OTA / 服务</div><h3 data-i18n="ai-reference:scene.push.title">任务与失败明细</h3><p><span data-i18n="ai-reference:scene.push.prefix">优先看</span> <a href="#/push-page">PushPage</a><span data-i18n="ai-reference:sep">、</span><a href="#/ota-page">OtaPage</a><span data-i18n="ai-reference:sep">、</span><a href="#/service-page">ServicePage</a><span data-i18n="ai-reference:scene.push.suffix">。部分成功必须可追踪、可重试、可导出失败清单。</span></p></div>
      <div class="surface"><div class="tag-meta" data-i18n="ai-reference:scene.i18n.meta">i18n / 国外版</div><h3 data-i18n="ai-reference:scene.i18n.title">双语与格式化</h3><p><span data-i18n="ai-reference:scene.i18n.prefix">优先看</span> <a href="#/i18n">i18n</a> <span data-i18n="ai-reference:scene.i18n.suffix">和 AI 编程参考。日期、数字、坐标、百分比必须走 Intl 格式化，不拼字符串。</span></p></div>
    </div>
  </section>

  <section class="section">
    <p class="section-eyebrow" data-i18n="ai-reference:evidence.eyebrow">工程落地 · 外部证据边界</p>
    <h2 data-i18n="ai-reference:evidence.title">design-system-angelwatch 只合并规则，不合并旧实现</h2>
    <table class="map-table">
      <thead><tr><th data-i18n="ai-reference:evidence.th.source">外部内容</th><th data-i18n="ai-reference:evidence.th.usable">可用部分</th><th data-i18n="ai-reference:evidence.th.action">当前处理</th></tr></thead>
      <tbody>
        <tr><td>customertest-brand/DESIGN.md</td><td data-i18n="ai-reference:evidence.design.usable">颜色、字体、4px 网格、32px 控件、60px 顶栏、侧栏宽度、表格和表单密度</td><td data-i18n="ai-reference:evidence.design.action">映射到当前 --aw-* 与 AntD v6，不直接复制旧样式</td></tr>
        <tr><td>customertest-brand/system/theme.json</td><td data-i18n="ai-reference:evidence.theme.usable">旧站抽取的 ConfigProvider token 草案</td><td data-i18n="ai-reference:evidence.theme.action">作为 token 对照，当前主实现仍以 project/styles/tokens.css 为准</td></tr>
        <tr><td>customertest-brand/ui_kits/app</td><td data-i18n="ai-reference:evidence.kit.usable">侧栏、顶栏、筛选栏、表格、分页的实际界面姿态</td><td data-i18n="ai-reference:evidence.kit.action">用于校准中后台信息密度和布局，不迁移旧交互代码</td></tr>
        <tr><td>Figma tree</td><td data-i18n="ai-reference:evidence.figma.usable">业务模块、页面族、字段名、状态名、国外版翻译证据</td><td data-i18n="ai-reference:evidence.figma.action">转译到当前页面蓝图、组件规范和 AI Markdown，不逐帧照抄</td></tr>
      </tbody>
    </table>
    <div class="section-subtitle" style="margin-top:28px" data-i18n="ai-reference:avoid.title">不要回灌的内容</div>
    <div class="demo-grid cols-2">
      <div class="surface"><h3 data-i18n="ai-reference:avoid.legacy.title">旧实现限制</h3><p data-i18n="ai-reference:avoid.legacy.desc">不复制 Vue 2 / Element UI 代码，不使用 Pro Components，不新增运行时 CDN、构建步骤或 HTTP server 依赖。</p></div>
      <div class="surface"><h3 data-i18n="ai-reference:avoid.figma.title">Figma 排除边界</h3><p data-i18n="ai-reference:avoid.figma.desc">旧系统、废案、临时方案、占位图层、测试文件名和 mock ID 只能作为排除证据，不进入最终 UI 文案。</p></div>
    </div>
  </section>
</div>
`;
