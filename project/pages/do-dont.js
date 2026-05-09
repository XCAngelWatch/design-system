/* AngelWatch Design System — page: do-dont (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["do-dont"] = `
<div class="content">
<!-- DO / DON'T -->
<section class="section" id="do-dont">
  <p class="section-eyebrow">Specs · 规范红线</p>
  <h2>Do &amp; Don't</h2>
  <p class="lede">这些是 stylelint / 设计审查中会被直接打回的硬约束，覆盖 Token 三层架构、Sidebar 规范、扩展色板与交互守则。</p>

  <div class="subsection">
    <h3>antd 默认值 vs TMS 覆盖 · 一览</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">下表是 antd 默认值与 TMS 内部约定不一致项的快速索引，所有覆盖代码集中在 <a href="#/config-provider" style="color:var(--aw-primary)">ConfigProvider 全局配置</a>。新人 onboarding 先扫这张表，能避免 80% 的"为什么我的组件不一样"困惑。</p>
    <table class="map-table">
      <thead><tr><th style="width:24%">维度</th><th style="width:30%">antd 默认</th><th>TMS 覆盖</th></tr></thead>
      <tbody>
        <tr><td>品牌主色</td><td><span class="mono">#1677FF</span></td><td><span class="mono">#165DFF</span> Arco blue-6(沿用历史 tms_web_ui 主色)</td></tr>
        <tr><td>状态色</td><td><span class="mono">#52C41A / #FAAD14 / #FF4D4F / #1677FF</span> (-6 阶)</td><td><span class="mono">#389E0D / #D48806 / #CF1322 / #0958D9</span> (-7 阶, 与品牌同位)</td></tr>
        <tr><td>Motion ease</td><td><span class="mono">cubic-bezier(.645,.045,.355,1)</span></td><td><span class="mono">cubic-bezier(.34,.69,.1,1)</span> 惯性减速</td></tr>
        <tr><td>Motion 时长</td><td>0.1 / 0.2 / 0.3 s</td><td>120 / 200 / 320 ms</td></tr>
        <tr><td>Button.fontWeight</td><td>400</td><td>500</td></tr>
        <tr><td>Button.primaryShadow</td><td><span class="mono">0 2px 0 rgba(...)</span></td><td><span class="mono">none</span> 扁平</td></tr>
        <tr><td>Two-tone icon</td><td>允许</td><td>禁用 (currentColor 单色)</td></tr>
        <tr><td>Pagination.pageSize</td><td>10</td><td>20</td></tr>
        <tr><td>Notification.duration</td><td>4.5s 自动关闭</td><td>0 (手动关闭, 仅成功 Toast 走 3s 自动)</td></tr>
        <tr><td>Form.validateTrigger</td><td>onChange</td><td>onBlur (必填) / onChange (格式)</td></tr>
        <tr><td>Modal 不可逆默认焦点</td><td>"确认" 按钮</td><td>"取消" 按钮 (焦点防误点)</td></tr>
        <tr><td>Empty 默认图</td><td>antd 自带彩色插画</td><td>TMS 单色线性 + Result.extra 必填</td></tr>
        <tr><td>Result 状态图</td><td>antd 自带彩色插画</td><td>TMS 单色线性 (登录 + 错误页 仅 2 处使用)</td></tr>
        <tr><td>Compact 算法高度</td><td>antd <code>compactAlgorithm</code> 24px</td><td>TMS 自定义 28px (中间值, 不套 antd 算法)</td></tr>
        <tr><td>暗色算法</td><td>antd <code>darkAlgorithm</code> 派生</td><td>TMS 手写 token (沿袭旧 Vue 项目)</td></tr>
        <tr><td>Tag 预设色</td><td>13 色 (含 volcano/lime/yellow)</td><td>10 色 (8 标签色 + 4 状态色; 禁 volcano/lime/yellow)</td></tr>
        <tr><td>getPopupContainer</td><td>document.body</td><td>node.parentElement (跟随滚动)</td></tr>
        <tr><td>renderEmpty</td><td>antd 默认 Empty</td><td><code>&lt;TMSEmpty /&gt;</code> (统一 Result 组件)</td></tr>
      </tbody>
    </table>
  </div>

  <div class="demo-grid cols-2">
    <div class="surface" style="border-left:3px solid var(--aw-success)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
  <li>组件优先级：<b>antd v6 原生 → 业务自建</b>（封装在 <span class="mono">src/components/</span>）。两者都不满足时才引第三方包</li>
  <li>所有颜色通过 CSS 变量引用</li>
  <li>radius 统一 6px（仅 sm/lg 例外）</li>
  <li>侧边栏：Light <span class="mono">#FFFFFF</span> 白底 + 3px <span class="mono">#165DFF</span> indicator bar / Dark <span class="mono">#1A1D23</span> 渐变</li>
  <li>Inter + Source Han Sans CN 自托管</li>
  <li>状态以「点 + 文字 + 形状」三重编码（色弱可辨）</li>
  <li>键盘可达（tab 顺序 + focus 可见）+ 13 个全局快捷键</li>
  <li>所有可见文本通过 <span class="mono">t('namespace.key')</span> 包裹</li>
  <li>组件必须同时通过 Light + Dark 视觉回归</li>
  <li>批量 / 不可逆操作用 Modal，单条用 Popconfirm</li>
  <li>日期 / 数字格式必须用 <span class="mono">Intl.*</span> API</li>
  <li>异常态返回 ErrorPage（404/403/500）+ traceId</li>
  <li>异步/批量操作给到 Result 终态页</li>
  <li>组件只消费 Alias Token，不直接引 Seed/Map（<code>colorBgContainer</code> ✓ ／ <code>colorPrimary</code> ✗）</li>
  <li>Sidebar Active 必须用 <b>3px 品牌蓝 indicator bar</b>，不能仅靠背景色</li>
  <li>业务标签优先用扩展色板的 25/700 双阶（保 AA 对比）</li>
  <li>所有文本色块必须通过自动 WCAG 对比度测试（≥ 4.5:1）</li>
  <li>组件级覆盖统一收口在 <code>theme.components</code>，禁止散落在业务代码</li>
  <li>复杂场景（地图/终端/拖拽/节点图/虚拟表/Schema 表单/代码编辑）优先用成熟 NPM 包，不自建</li>
  <li>新引入的第三方包必须 license ∈ MIT / Apache-2.0 / BSD / ISC，其他需法务确认</li>
  <li>破坏性操作必须经服务端二次校验，非法操作返回 422 并记录审计</li>
  <li>所有第三方资源（字体 / 图标 / Monaco loader / leaflet 瓦片）必须自托管，禁运行时 CDN</li>
</ul>
    </div>
    <div class="surface" style="border-left:3px solid var(--aw-danger)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
  <li>不要使用 <span class="mono">!important</span>（stylelint 报错）<br/><span style="color:var(--aw-text-3);font-size:12px">例外:a11y reduced-motion 重置 / antd CSS-in-JS 覆盖。豁免必须前置 <code>/* stylelint-disable-next-line declaration-no-important -- 原因 */</code> 注释。</span></li>
  <li>不要使用 Tailwind utility（仅 CSS Modules）</li>
  <li>不要使用 <span class="mono">@ant-design/pro-components</span>（不再维护对 antd v6 的兼容）。<span class="mono">ProForm / ProTable / ProLayout / ProCard</span> 等均改用 antd 原生 + 业务自建封装</li>
  <li>不要使用过亮的强调色（饱和度 ≤ 80%）</li>
  <li>不要在登录页之外使用装饰性插画（错误页线性插画除外）</li>
  <li>不要从 CDN 加载字体或图标</li>
  <li>不要硬编码用户可见字符串（即使是英文）</li>
  <li>不要在 Dark 模式用纯黑 <span class="mono">#000</span> 或纯白文本（用 token）</li>
  <li>不要用整卡背景色表达状态（用 4px 顶部色条）</li>
  <li>不要用 Toast 显示错误结果（用 Result 页或 Modal）</li>
  <li>不要用纯色彩表达状态（必须 + 文字 / 形状）</li>
  <li>不要在业务代码中写 hex（<code>#165DFF</code> ✗ ／ <code>var(--aw-primary)</code> ✓）</li>
  <li>不要在 Sidebar 用品牌蓝铺底色（仅作 3px indicator）</li>
  <li>不要在一屏内并存 &gt; 5 种色相，避免视觉嘈杂</li>
  <li>不要为破坏性操作默认聚焦"确认"按钮（焦点必须落在"取消"）</li>
  <li>不要在不可逆操作上做乐观更新（推送、删除、重启）</li>
  <li>不要自建图表 / 地图 / 终端 / 节点编辑器 / 虚拟表（成熟库已经够用）</li>
  <li>不要引入其他图表库（<code>@ant-design/charts</code> / <code>chart.js</code> / <code>recharts</code> / d3 直绘）—— 图表方案统一 echarts v6</li>
  <li>不要在业务代码直接 <code>import 'echarts-for-react'</code> —— 必须通过 <code>&lt;TMSChart /&gt;</code> 包装层调用</li>
  <li>不要在 echarts series 内硬编码 hex —— 用 <code>--aw-chart-1..8</code> 或 status token</li>
  <li>不要在 Sidebar 用品牌蓝铺底色（仅作 3px indicator + 浅蓝 active 底）</li>
  <li>不要直接套 antd <code>compactAlgorithm</code>(24px)，本系统 Compact = 28px 中间值</li>
  <li>不要把"已退役"作为可恢复状态（终态不可逆，只允许审计查看）</li>
</ul>
    </div>
  </div>
</section>
</div>
`;
