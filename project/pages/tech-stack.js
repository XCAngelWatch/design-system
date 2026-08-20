/* AngelWatch Design System — page: tech-stack */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["tech-stack"] = `
<div class="content">
<section class="section" id="tech-stack">
  <p class="section-eyebrow"><span data-i18n="tech-stack:t001">工程落地 · 技术栈</span></p>
  <h2><span data-i18n="tech-stack:t002">技术栈速查 Tech Stack</span></h2>
  <p class="lede"><span data-i18n="tech-stack:t003">本页区分</span><b><span data-i18n="tech-stack:t004">当前已安装</span></b><span data-i18n="tech-stack:t005">与</span><b><span data-i18n="tech-stack:t006">候选但未安装</span></b><span data-i18n="tech-stack:t007">的能力。唯一验证依据是 tms2.5-web-ui/package.json 与 pnpm-lock.yaml；候选项不能直接 import，也不代表已获架构或法务批准。</span></p>

  <div class="subsection">
    <h3><span data-i18n="tech-stack:t008">版本与依赖规则</span></h3>
    <ul style="font-size:13px;color:var(--aw-text-2);line-height:1.9;padding-left:18px">
      <li><span data-i18n="tech-stack:t009">当前 package.json 使用精确版本；pnpm-lock.yaml 记录完整解析结果，CI 使用 frozen lockfile。</span></li>
      <li><span data-i18n="tech-stack:t010">升级先看 release notes，再运行 pnpm check、pnpm build、Light/Dark、六种 locale、响应式与关键 E2E。</span></li>
      <li><span data-i18n="tech-stack:t011">新依赖必须有已验证需求、许可证结论、体积与维护性评估；本设计文档不能替代依赖审批。</span></li>
    </ul>
  </div>

  <div class="subsection">
    <h3><span data-i18n="tech-stack:t012">当前已安装 · tms2.5-web-ui</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:20%"><span data-i18n="tech-stack:t013">层级</span></th><th style="width:32%"><span data-i18n="tech-stack:t014">包</span></th><th style="width:18%"><span data-i18n="tech-stack:t015">精确版本</span></th><th><span data-i18n="tech-stack:t016">职责</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="tech-stack:t017">应用运行时</span></td><td><code>react</code> + <code>react-dom</code></td><td>19.2.7</td><td><span data-i18n="tech-stack:t018">单应用 React 运行时。</span></td></tr>
        <tr><td><span data-i18n="tech-stack:t019">组件与图标</span></td><td><code>antd</code> / <code>@ant-design/icons</code></td><td>6.5.0 / 6.3.2</td><td><span data-i18n="tech-stack:t020">首选 UI 组件；不安装 ProComponents。</span></td></tr>
        <tr><td><span data-i18n="tech-stack:t021">路由与状态</span></td><td><code>react-router</code> / <code>zustand</code></td><td>7.18.1 / 5.0.14</td><td><span data-i18n="tech-stack:t022">路由树、认证与 UI 状态。</span></td></tr>
        <tr><td><span data-i18n="tech-stack:t023">国际化</span></td><td><code>i18next</code> / <code>react-i18next</code></td><td>26.3.4 / 17.0.8</td><td><span data-i18n="tech-stack:t024">zh-CN、en、es、pt、fr、ru 六种语言；AntD locale 同步。</span></td></tr>
        <tr><td><span data-i18n="tech-stack:t025">数据访问</span></td><td><code>axios</code> / <code>json-bigint</code></td><td>1.18.1 / 1.0.0</td><td><span data-i18n="tech-stack:t026">统一 HTTP 客户端与 Snowflake ID 安全解析。</span></td></tr>
        <tr><td><span data-i18n="tech-stack:t027">图表</span></td><td><code>echarts</code> / <code>echarts-for-react</code></td><td>6.1.0 / 3.0.6</td><td><span data-i18n="tech-stack:t028">通过 TMSChart 消费设计 token。</span></td></tr>
        <tr><td><span data-i18n="tech-stack:t029">文件与安全</span></td><td><code>jszip</code> / <code>spark-md5</code> / <code>dompurify</code> / <code>crypto-js</code></td><td>3.10.1 / 3.0.2 / 3.4.12 / 4.2.0</td><td><span data-i18n="tech-stack:t030">压缩包、校验、HTML 清理与协议所需加密。</span></td></tr>
        <tr><td><span data-i18n="tech-stack:t031">日期基础</span></td><td><code>dayjs</code></td><td>1.11.21</td><td><span data-i18n="tech-stack:t032">日期运算；用户可见格式仍统一走 Intl 封装。</span></td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:12px 0 0"><span data-i18n="tech-stack:t033">许可证以锁定版本包清单为准。当前关键 UI/运行时包为 MIT；ECharts 为 Apache-2.0；多许可证包必须在分发前保留所选许可证文本。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="tech-stack:t034">候选能力 · 当前未安装</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:22%"><span data-i18n="tech-stack:t035">能力</span></th><th style="width:34%"><span data-i18n="tech-stack:t036">可评估候选</span></th><th><span data-i18n="tech-stack:t037">引入门槛</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="tech-stack:t038">地图 / 聚合 / 热力</span></td><td><code>react-leaflet</code> <span data-i18n="tech-stack:t039">生态</span></td><td><span data-i18n="tech-stack:t040">先确认地图服务、离线瓦片、许可证和数据安全。</span></td></tr>
        <tr><td><span data-i18n="tech-stack:t041">拖拽与树排序</span></td><td><code>@dnd-kit/*</code></td><td><span data-i18n="tech-stack:t042">AntD 原生能力无法满足且有键盘拖拽方案。</span></td></tr>
        <tr><td><span data-i18n="tech-stack:t043">Schema / 复杂表单</span></td><td><code>@rjsf/*</code> / <code>react-hook-form</code> / <code>zod</code></td><td><span data-i18n="tech-stack:t044">先证明 AntD Form 不足，并验证 i18n、a11y 与包体积。</span></td></tr>
        <tr><td><span data-i18n="tech-stack:t045">节点图 / 编辑器 / 终端</span></td><td><code>@xyflow/react</code> / <code>@monaco-editor/react</code> / <code>@xterm/*</code></td><td><span data-i18n="tech-stack:t046">仅在对应产品能力获批后按需加载并自托管资源。</span></td></tr>
        <tr><td><span data-i18n="tech-stack:t047">导出</span></td><td><code>papaparse</code> / <code>xlsx</code> / <code>@react-pdf/renderer</code></td><td><span data-i18n="tech-stack:t048">先评估服务端导出、数据量、字体与许可证。</span></td></tr>
      </tbody>
    </table>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong><span data-i18n="tech-stack:t049">候选不是白名单：</span></strong><span data-i18n="tech-stack:t050">每次引入仍需按当前版本重新核对许可证、安全公告、维护状态和可访问性。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="tech-stack:t051">当前自建组件位置</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:26%"><span data-i18n="tech-stack:t052">组件</span></th><th style="width:40%"><span data-i18n="tech-stack:t053">真实路径</span></th><th><span data-i18n="tech-stack:t054">规则</span></th></tr></thead>
      <tbody>
        <tr><td><code>PageHeader</code></td><td><code>src/components/PageHeader/</code></td><td><span data-i18n="tech-stack:t055">统一页头槽位、动作与 sticky compact 行为。</span></td></tr>
        <tr><td><code>TMSEmpty</code> / <code>ErrorPage</code></td><td><code>src/components/TMSEmpty/</code> / <code>ErrorPage/</code></td><td><span data-i18n="tech-stack:t056">全局空态与整页错误反馈。</span></td></tr>
        <tr><td><code>AppTable</code> / <code>AppPagination</code></td><td><code>src/components/AppTable/</code> / <code>AppPagination/</code></td><td><span data-i18n="tech-stack:t057">默认使用 AntD Table；大数据固定行高场景使用原生 virtual + 数值 scroll.x / scroll.y。</span></td></tr>
        <tr><td><code>RowActions</code></td><td><code>src/components/RowActions/</code></td><td><span data-i18n="tech-stack:t058">表格默认 1 个主操作 + 更多；紧凑卡片最多明示 3 个。</span></td></tr>
        <tr><td><code>StatusIndicator</code></td><td><code>src/components/StatusIndicator/</code></td><td><span data-i18n="tech-stack:t059">状态使用颜色、图标与文字多重编码。</span></td></tr>
        <tr><td><code>TMSChart</code> / <code>KpiCard</code> / <code>ChartCard</code></td><td><code>src/components/</code></td><td><span data-i18n="tech-stack:t060">图表、指标与容器统一消费主题 token。</span></td></tr>
        <tr><td><code>MobileTabBar</code></td><td><code>src/components/MobileTabBar/</code></td><td><span data-i18n="tech-stack:t061">md 以下的窄屏主导航，与桌面 Sidebar 互斥。</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="tech-stack:t062">选型顺序</span></h3>
    <ol style="font-size:13px;color:var(--aw-text-2);line-height:1.9;padding-left:20px">
      <li><span data-i18n="tech-stack:t063">优先使用已安装的 AntD v6 原生组件与能力。</span></li>
      <li><span data-i18n="tech-stack:t064">AntD 未覆盖时，在 src/components 内做最小业务封装。</span></li>
      <li><span data-i18n="tech-stack:t065">只有已验证需求无法由前两层满足时，才评估候选第三方包。</span></li>
    </ol>
  </div>
</section>
</div>
`;
