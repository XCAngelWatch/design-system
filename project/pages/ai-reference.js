/* AngelWatch Design System — page: ai-reference (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["ai-reference"] = `
<div class="content">
  <section class="section" id="ai-reference">
    <p class="section-eyebrow">AI Reference · 开发入口</p>
    <h2>AI 开发入口：先读这里，再按网页范式开发</h2>
    <p class="lede">本页把 Markdown、Figma 证据、外部品牌包和当前页面范式串成一条可执行路径。未来 AI 做页面或组件时，先按这里确定权威顺序，再进入对应路由参考结构和交互。</p>

    <div class="alert info" style="margin-top:18px">
      <b>权威顺序：</b>当前仓库规则最高，Figma / OpenDesign 是业务证据，design-system-angelwatch 只作为旧站品牌包和界面 kit 对照；旧 Vue 2 / Element UI 代码不能覆盖当前 React 19 + AntD v6 范式。
    </div>

    <div class="section-subtitle" style="margin-top:28px">Markdown 入口</div>
    <table class="map-table">
      <thead>
        <tr><th>文件</th><th>用途</th><th>什么时候读</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="../AI_DESIGN_SYSTEM.md">AI_DESIGN_SYSTEM.md</a></td>
          <td>AI 首读入口，定义权威顺序、页面范式和验收命令</td>
          <td>任何新页面、组件、原型或设计系统修改前</td>
        </tr>
        <tr>
          <td><a href="../docs/ai-coding-design-reference.md">docs/ai-coding-design-reference.md</a></td>
          <td>Figma 业务字段、模块词汇、组件选择和实现提示</td>
          <td>需要确定字段、状态、操作或页面结构时</td>
        </tr>
        <tr>
          <td><a href="../brand-spec.md">brand-spec.md</a></td>
          <td>品牌 token、字体、布局姿态和证据摘要</td>
          <td>需要确认颜色、字体、间距、圆角和暗色主题时</td>
        </tr>
        <tr>
          <td><a href="../docs/superpowers/audits/2026-07-08-figma-project-diff-conflicts.md">Figma 差异与冲突清单</a></td>
          <td>Figma 与当前项目的冲突、缺口和处理决定</td>
          <td>需要判断某个 Figma 内容是否应当迁入时</td>
        </tr>
        <tr>
          <td><a href="../docs/superpowers/audits/2026-07-09-angelwatch-external-design-system-audit.md">外部品牌包审计</a></td>
          <td>design-system-angelwatch 可合并内容与禁用内容</td>
          <td>需要参考旧站抽取 token、尺寸或界面 kit 时</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="section">
    <p class="section-eyebrow">Routes · 网页范式</p>
    <h2>按开发场景进入对应页面</h2>
    <div class="demo-grid cols-3" style="margin-top:18px">
      <div class="surface">
        <div class="tag-meta">列表 / 表格</div>
        <h3>筛选、批量、分页</h3>
        <p>优先看 <a href="#/list-page">ListPage</a>、<a href="#/table">Table</a>、<a href="#/row-actions">RowActions</a>。数据密度、操作列和空状态应保持一致。</p>
      </div>
      <div class="surface">
        <div class="tag-meta">统计 / 图表</div>
        <h3>概览到详情闭环</h3>
        <p>优先看 <a href="#/dash-page">Dashboard</a>、<a href="#/charts">Charts</a>、<a href="#/ops-page">OpsPage</a>。图表点位必须能进入同步筛选的详情表。</p>
      </div>
      <div class="surface">
        <div class="tag-meta">账户 / 权限</div>
        <h3>机构、角色、账号</h3>
        <p>优先看 <a href="#/user-mgmt-page">UserMgmtPage</a>、<a href="#/tree-comp">Tree</a>、<a href="#/cascader">Cascader</a>。权限必须覆盖半选态、冲突和保存前 diff。</p>
      </div>
      <div class="surface">
        <div class="tag-meta">地图 / 轨迹</div>
        <h3>地图主视图</h3>
        <p>优先看 <a href="#/map-page">MapPage</a>、<a href="#/datepicker">DatePicker</a>、<a href="#/tech-stack">TechStack</a>。地图页不是普通表格页，必须有结果面板。</p>
      </div>
      <div class="surface">
        <div class="tag-meta">推送 / OTA / 服务</div>
        <h3>任务与失败明细</h3>
        <p>优先看 <a href="#/push-page">PushPage</a>、<a href="#/ota-page">OtaPage</a>、<a href="#/service-page">ServicePage</a>。部分成功必须可追踪、可重试、可导出失败清单。</p>
      </div>
      <div class="surface">
        <div class="tag-meta">i18n / 国外版</div>
        <h3>四语言与格式化</h3>
        <p>优先看 <a href="#/i18n">i18n</a> 和 AI 编程参考。日期、数字、坐标、百分比必须走 Intl 格式化，不拼字符串。</p>
      </div>
    </div>
  </section>

  <section class="section">
    <p class="section-eyebrow">External Evidence · 外部参考边界</p>
    <h2>design-system-angelwatch 只合并规则，不合并旧实现</h2>
    <table class="map-table">
      <thead>
        <tr><th>外部内容</th><th>可用部分</th><th>当前处理</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>customertest-brand/DESIGN.md</td>
          <td>颜色、字体、4px 网格、32px 控件、60px 顶栏、侧栏宽度、表格和表单密度</td>
          <td>映射到当前 <code>--aw-*</code> 与 AntD v6，不直接复制旧样式</td>
        </tr>
        <tr>
          <td>customertest-brand/system/theme.json</td>
          <td>旧站抽取的 ConfigProvider token 草案</td>
          <td>作为 token 对照，当前主实现仍以 <code>project/styles/tokens.css</code> 为准</td>
        </tr>
        <tr>
          <td>customertest-brand/ui_kits/app</td>
          <td>侧栏、顶栏、筛选栏、表格、分页的实际界面姿态</td>
          <td>用于校准中后台信息密度和布局，不迁移旧交互代码</td>
        </tr>
        <tr>
          <td>Figma tree</td>
          <td>业务模块、页面族、字段名、状态名、国外版翻译证据</td>
          <td>转译到当前页面模板、组件规范和 AI Markdown，不逐帧照抄</td>
        </tr>
      </tbody>
    </table>

    <div class="section-subtitle" style="margin-top:28px">不要回灌的内容</div>
    <div class="demo-grid cols-2">
      <div class="surface">
        <h3>旧实现限制</h3>
        <p>不复制 Vue 2 / Element UI 代码，不使用 Pro Components，不新增运行时 CDN、构建步骤或 HTTP server 依赖。</p>
      </div>
      <div class="surface">
        <h3>Figma 排除边界</h3>
        <p>旧系统、废案、临时方案、占位图层、测试文件名和 mock ID 只能作为排除证据，不进入最终 UI 文案。</p>
      </div>
    </div>
  </section>
</div>
`;
