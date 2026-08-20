/* AngelWatch Design System — page: responsive */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["responsive"] = `
<div class="content">
<section class="section" id="responsive">
  <p class="section-eyebrow"><span data-i18n="responsive:t001">设计基础 · 响应式</span></p>
  <h2><span data-i18n="responsive:t002">响应式断点 Responsive</span></h2>
  <p class="lede"><span data-i18n="responsive:t003">TMS 采用</span><b><span data-i18n="responsive:t004">桌面优先、窄屏可用</span></b><span data-i18n="responsive:t005">的策略。桌面保留高密度运维效率；平板与手机保留核心查询、查看和受控操作能力。任何宽度都不使用 ResolutionGuard 阻断访问。</span></p>

  <div class="subsection">
    <h3><span data-i18n="responsive:t006">唯一实现断点 · Ant Design canonical</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px"><span data-i18n="responsive:t007">CSS、</span><code>Grid.useBreakpoint()</code><span data-i18n="responsive:t008">与组件条件渲染统一使用下表。QA 目标视口只用于验证，不得再创造一套实现断点。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="responsive:t009">断点</span></th><th style="width:22%"><span data-i18n="responsive:t010">最小宽度</span></th><th><span data-i18n="responsive:t011">默认布局行为</span></th></tr></thead>
      <tbody>
        <tr><td><b>xs</b></td><td>480px</td><td><span data-i18n="responsive:t012">基础窄屏样式覆盖小于 xs；达到 xs 后仍保持单列内容、底部移动导航、顶部表单标签与横向滚动表格。</span></td></tr>
        <tr><td><b>sm</b></td><td>576px</td><td><span data-i18n="responsive:t013">单列或紧凑双列；Modal / Drawer 保留安全边距。</span></td></tr>
        <tr><td><b>md</b></td><td>768px</td><td><span data-i18n="responsive:t014">恢复侧栏导航；表单可双列；移动底栏隐藏。</span></td></tr>
        <tr><td><b>lg</b></td><td>992px</td><td><span data-i18n="responsive:t015">标准管理后台布局；侧栏允许用户折叠。</span></td></tr>
        <tr><td><b>xl</b></td><td>1200px</td><td><span data-i18n="responsive:t016">高密度列表与三至四列统计区域。</span></td></tr>
        <tr><td><b>xxl</b></td><td>1600px</td><td><span data-i18n="responsive:t017">限制内容最大宽度，避免超宽行长；大屏图表可扩展。</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="responsive:t018">设计 QA 目标视口</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:22%"><span data-i18n="responsive:t019">视口</span></th><th style="width:28%"><span data-i18n="responsive:t020">场景</span></th><th><span data-i18n="responsive:t021">必须验证</span></th></tr></thead>
      <tbody>
        <tr><td>390 / 480px</td><td><span data-i18n="responsive:t022">手机窄屏 / xs 边界</span></td><td><span data-i18n="responsive:t023">无页面级横向溢出；导航、筛选、表格和危险确认可完成。</span></td></tr>
        <tr><td>576 / 768px</td><td><span data-i18n="responsive:t024">手机横屏 / 平板切换点</span></td><td><span data-i18n="responsive:t025">导航切换没有重复入口；Drawer、Modal 和表单不跳动。</span></td></tr>
        <tr><td>1024 / 1280px</td><td><span data-i18n="responsive:t026">平板横屏 / 小型笔记本</span></td><td><span data-i18n="responsive:t027">侧栏、内容区和固定列不互相遮挡。</span></td></tr>
        <tr><td>1366 / 1440px</td><td><span data-i18n="responsive:t028">主要桌面基准</span></td><td><span data-i18n="responsive:t029">完整列表密度、PageHeader、批量条与分页。</span></td></tr>
        <tr><td>1920px</td><td><span data-i18n="responsive:t030">宽屏 / 运营大屏</span></td><td><span data-i18n="responsive:t031">内容最大宽度、图表密度和留白不失控。</span></td></tr>
      </tbody>
    </table>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="responsive:t032">契约位置：</span></strong><code>contracts/tms-web-ui.json</code><span data-i18n="responsive:t033"> 是断点与 QA 视口的机器可读来源；消费者必须同步并自动校验。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="responsive:t034">组件行为矩阵</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:22%"><span data-i18n="responsive:t035">组件</span></th><th style="width:38%">xs / sm</th><th>md+</th></tr></thead>
      <tbody>
        <tr><td><b>Navigation</b></td><td><span data-i18n="responsive:t036">底部移动导航或抽屉菜单，当前项始终可见。</span></td><td><span data-i18n="responsive:t037">左侧 Sidebar，可折叠但不强制。</span></td></tr>
        <tr><td><b>PageHeader</b></td><td><span data-i18n="responsive:t038">标题与操作换行；只保留最重要操作，其余进更多菜单。</span></td><td><span data-i18n="responsive:t039">按页面类型执行完整 / sticky compact 规则。</span></td></tr>
        <tr><td><b>Table</b></td><td><span data-i18n="responsive:t040">保留标识、状态、主操作；其余列横向滚动或进入详情，不把表格改造成不可比较的卡片。</span></td><td><span data-i18n="responsive:t041">按业务优先级显示列，必要时使用固定操作列。</span></td></tr>
        <tr><td><b>Form</b></td><td><span data-i18n="responsive:t042">单列、标签顶部对齐，底部操作尊重 safe-area。</span></td><td><span data-i18n="responsive:t043">按字段关系使用一至两列，不为填满网格强行并列。</span></td></tr>
        <tr><td><b>Modal / Drawer</b></td><td><span data-i18n="responsive:t044">优先全宽 Drawer；Modal 宽度不超过视口并保留 16px 边距。</span></td><td><span data-i18n="responsive:t045">使用内容驱动的标准宽度，不随桌面宽度无限放大。</span></td></tr>
        <tr><td><b>Dashboard</b></td><td><span data-i18n="responsive:t046">单列 KPI 与图表，次要详情延后加载。</span></td><td><span data-i18n="responsive:t047">按 xl / xxl 扩展到三至四列，并限制单图最大宽度。</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="responsive:t048">实现与验收规则</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="responsive:t049">使用 AntD 六档断点和移动优先的局部 CSS。</span></li>
          <li><span data-i18n="responsive:t050">逐档验证导航、焦点、滚动、浮层与危险确认。</span></li>
          <li><span data-i18n="responsive:t051">表格窄屏优先保持比较能力和主操作可达。</span></li>
          <li><span data-i18n="responsive:t052">在 390px 与 1440px 同时做 Light / Dark 回归。</span></li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="responsive:t053">不要按设备名称或 User-Agent 分支布局。</span></li>
          <li><span data-i18n="responsive:t054">不要用页面守卫拒绝窄屏访问。</span></li>
          <li><span data-i18n="responsive:t055">不要把 QA 视口值全部写成新的 media query。</span></li>
          <li><span data-i18n="responsive:t056">不要通过隐藏关键状态或危险确认换取“适配”。</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
