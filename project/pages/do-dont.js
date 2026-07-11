/* AngelWatch Design System — page: do-dont (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["do-dont"] = `
<div class="content">
<!-- DO / DON'T -->
<section class="section" id="do-dont">
<p class="section-eyebrow"><span data-i18n="do-dont:t001">工程落地 · 规范红线</span></p>
<h2><span data-i18n="do-dont:t002">规范红线 Do &amp; Don't</span></h2>
<p class="lede"><span data-i18n="do-dont:t003">这些是业务仓库接入 stylelint / 设计审查时应执行的硬约束，覆盖 Token 三层架构、Sidebar 规范、扩展色板与交互守则。</span></p>
<div class="subsection">
<h3><span data-i18n="do-dont:t004">antd 默认值 vs TMS 覆盖 · 一览</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="do-dont:t005">这里只保留最容易造成视觉偏差的差异；完整覆盖项与页面级默认值统一维护在</span> <a href="#/config-provider" style="color:var(--aw-primary)"><span data-i18n="do-dont:t006">ConfigProvider 全局配置</span></a><span data-i18n="do-dont:t128">。</span></p>
<table class="map-table">
<thead><tr><th style="width:24%"><span data-i18n="do-dont:t007">维度</span></th><th style="width:30%"><span data-i18n="do-dont:t008">antd 默认</span></th><th><span data-i18n="do-dont:t009">TMS 覆盖</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="do-dont:t010">品牌主色</span></td><td><span class="mono">#1677FF</span></td><td><span class="mono">#165DFF</span> <span data-i18n="do-dont:t011">当前品牌主色（通过 design token 使用）</span></td></tr>
<tr><td><span data-i18n="do-dont:t012">状态色</span></td><td><span class="mono">#52C41A / #FAAD14 / #FF4D4F / #1677FF</span> <span data-i18n="do-dont:t013">(-6 阶)</span></td><td><span class="mono">#389E0D / #D48806 / #CF1322 / #0958D9</span> <span data-i18n="do-dont:t014">(-7 阶, 与品牌同位)</span></td></tr>
<tr><td>Motion</td><td><span class="mono">.645,.045,.355,1</span> · 0.1 / 0.2 / 0.3 s</td><td><span class="mono">.34,.69,.1,1</span> · 120 / 200 / 320 ms</td></tr>
<tr><td>Button</td><td><span data-i18n="do-dont:t015">字重 400 · 有 primary shadow</span></td><td><span data-i18n="do-dont:t016">字重 500 · 无 primary shadow</span></td></tr>
<tr><td>Notification.duration</td><td><span data-i18n="do-dont:t017">4.5s 自动关闭</span></td><td><span data-i18n="do-dont:t018">0（手动关闭；成功 Toast 单独 3s）</span></td></tr>
<tr><td><span data-i18n="do-dont:t019">Modal 不可逆默认焦点</span></td><td><span data-i18n="do-dont:t020">"确认" 按钮</span></td><td><span data-i18n="do-dont:t021">"取消" 按钮 (焦点防误点)</span></td></tr>
<tr><td><span data-i18n="do-dont:t022">暗色算法</span></td><td>antd <code>darkAlgorithm</code> <span data-i18n="do-dont:t023">派生</span></td><td><span data-i18n="do-dont:t024">TMS 手写 token</span></td></tr>
</tbody>
</table>
</div>
<div class="demo-grid cols-2">
<div class="surface" style="border-left:3px solid var(--aw-success)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
<li><span data-i18n="do-dont:t025">组件优先级：</span><b><span data-i18n="do-dont:t026">antd v6 原生 → 业务自建</span></b><span data-i18n="do-dont:t027">（封装在</span> <span class="mono">src/components/</span><span data-i18n="do-dont:t028">）。两者都不满足时才引第三方包</span></li>
<li><span data-i18n="do-dont:t029">所有颜色通过 CSS 变量引用</span></li>
<li><span data-i18n="do-dont:t030">radius 统一 6px（仅 sm/lg 例外）</span></li>
<li><span data-i18n="do-dont:t031">侧边栏：Light</span> <span class="mono">#FFFFFF</span> <span data-i18n="do-dont:t032">白底 + 3px</span> <span class="mono">#165DFF</span> indicator bar / Dark <span class="mono">#1A1D23</span> <span data-i18n="do-dont:t033">渐变</span></li>
<li><span data-i18n="do-dont:t034">Inter + Source Han Sans CN 自托管</span></li>
<li><span data-i18n="do-dont:t035">状态以「点 + 文字 + 形状」三重编码（色弱可辨）</span></li>
<li><span data-i18n="do-dont:t036">键盘可达（tab 顺序 + focus 可见）+ 13 个全局快捷键</span></li>
<li><span data-i18n="do-dont:t037">所有可见文本通过</span> <span class="mono">t('namespace.key')</span> <span data-i18n="do-dont:t038">包裹</span></li>
<li><span data-i18n="do-dont:t039">组件必须同时通过 Light + Dark 视觉回归</span></li>
<li><span data-i18n="do-dont:t040">单条可逆操作用 Popconfirm；单条不可逆或批量操作用 Modal</span></li>
<li><span data-i18n="do-dont:t041">日期 / 数字格式必须用</span> <span class="mono">Intl.*</span> API</li>
<li><span data-i18n="do-dont:t042">异常态返回 ErrorPage（404/403/500）+ traceId</span></li>
<li><span data-i18n="do-dont:t043">异步/批量操作给到 Result 终态页</span></li>
<li><span data-i18n="do-dont:t044">组件只消费 Alias Token，不直接引 Seed/Map（</span><code>colorBgContainer</code> ✓ / <code>colorPrimary</code> ✗)</li>
<li><span data-i18n="do-dont:t045">Sidebar Active 必须用</span> <b><span data-i18n="do-dont:t046">3px 品牌蓝 indicator bar</span></b><span data-i18n="do-dont:t047">，不能仅靠背景色</span></li>
<li><span data-i18n="do-dont:t048">业务标签优先用扩展色板的 25/700 双阶（保 AA 对比）</span></li>
<li><span data-i18n="do-dont:t049">所有文本色块应达到 WCAG 对比度要求（≥ 4.5:1）；业务仓库可接入自动化检查</span></li>
<li><span data-i18n="do-dont:t050">组件级覆盖统一收口在</span> <code>theme.components</code><span data-i18n="do-dont:t051">，禁止散落在业务代码</span></li>
<li><span data-i18n="do-dont:t052">复杂场景（地图/终端/拖拽/节点图/虚拟表/Schema 表单/代码编辑）优先用成熟 NPM 包，不自建</span></li>
<li><span data-i18n="do-dont:t053">新引入的第三方包必须 license ∈ MIT / Apache-2.0 / BSD / ISC，其他需法务确认</span></li>
<li><span data-i18n="do-dont:t054">破坏性操作必须经服务端二次校验，非法操作返回 422 并记录审计</span></li>
<li><span data-i18n="do-dont:t055">所有第三方资源（字体 / 图标 / Monaco loader / leaflet 瓦片）必须自托管，禁运行时 CDN</span></li>
</ul>
</div>
<div class="surface" style="border-left:3px solid var(--aw-danger)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
<li><span data-i18n="do-dont:t056">不要使用</span> <span class="mono">!important</span><span data-i18n="do-dont:t057">（业务仓库 stylelint 规则通常会拦截）</span><br/><span style="color:var(--aw-text-3);font-size:12px"><span data-i18n="do-dont:t058">例外:a11y reduced-motion 重置 / antd CSS-in-JS 覆盖。豁免必须前置</span> <code>/* stylelint-disable-next-line declaration-no-important -- reason */</code> <span data-i18n="do-dont:t059">注释。</span></span></li>
<li><span data-i18n="do-dont:t060">不要使用 Tailwind utility（仅 CSS Modules）</span></li>
<li><span data-i18n="do-dont:t061">不要使用</span> <span class="mono">@ant-design/pro-components</span><span data-i18n="do-dont:t062">（不再维护对 antd v6 的兼容）。</span><span class="mono">ProForm / ProTable / ProLayout / ProCard</span> <span data-i18n="do-dont:t063">等均改用 antd 原生 + 业务自建封装</span></li>
<li><span data-i18n="do-dont:t064">不要使用过亮的强调色（饱和度 ≤ 80%）</span></li>
<li><span data-i18n="do-dont:t065">不要在登录页之外使用装饰性插画（错误页线性插画除外）</span></li>
<li><span data-i18n="do-dont:t066">不要从 CDN 加载字体或图标</span></li>
<li><span data-i18n="do-dont:t067">不要硬编码用户可见字符串（即使是英文）</span></li>
<li><span data-i18n="do-dont:t068">不要在 Dark 模式用纯黑</span> <span class="mono">#000</span> <span data-i18n="do-dont:t069">或纯白文本（用 token）</span></li>
<li><span data-i18n="do-dont:t070">不要用整卡背景色表达状态（用 4px 顶部色条）</span></li>
<li><span data-i18n="do-dont:t071">不要用 Toast 显示错误结果（用 Result 页或 Modal）</span></li>
<li><span data-i18n="do-dont:t072">不要用纯色彩表达状态（必须 + 文字 / 形状）</span></li>
<li><span data-i18n="do-dont:t073">不要在业务代码中写 hex（</span><code>#165DFF</code> ✗ / <code>var(--aw-primary)</code> ✓)</li>
<li><span data-i18n="do-dont:t074">不要在一屏内并存 &gt; 5 种色相，避免视觉嘈杂</span></li>
<li><span data-i18n="do-dont:t075">不要为破坏性操作默认聚焦"确认"按钮（焦点必须落在"取消"）</span></li>
<li><span data-i18n="do-dont:t076">不要在不可逆操作上做乐观更新（推送、删除、重启）</span></li>
<li><span data-i18n="do-dont:t077">不要自建图表 / 地图 / 终端 / 节点编辑器 / 虚拟表（成熟库已经够用）</span></li>
<li><span data-i18n="do-dont:t078">不要引入其他图表库（</span><code>@ant-design/charts</code> / <code>chart.js</code> / <code>recharts</code> <span data-i18n="do-dont:t079">/ d3 直绘）—— 图表方案统一 echarts v6</span></li>
<li><span data-i18n="do-dont:t080">不要在业务代码直接</span> <code>import 'echarts-for-react'</code> <span data-i18n="do-dont:t081">—— 必须通过</span> <code>&lt;TMSChart /&gt;</code> <span data-i18n="do-dont:t082">包装层调用</span></li>
<li><span data-i18n="do-dont:t083">不要在 echarts series 内硬编码 hex —— 用</span> <code>--aw-chart-1..8</code> <span data-i18n="do-dont:t084">或 status token</span></li>
<li><span data-i18n="do-dont:t085">不要在 Sidebar 用品牌蓝铺底色（仅作 3px indicator + 浅蓝 active 底）</span></li>
<li><span data-i18n="do-dont:t086">不要直接套 antd</span> <code>compactAlgorithm</code><span data-i18n="do-dont:t087">(24px)，本系统 Compact = 28px 中间值</span></li>
<li><span data-i18n="do-dont:t088">不要把"已退役"作为可恢复状态（终态不可逆，只允许审计查看）</span></li>
</ul>
</div>
</div>
<div class="subsection">
<h3><span data-i18n="do-dont:t089">模块语言 · 必须统一</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px"><span data-i18n="do-dont:t090">模块名称、对象名和按钮动作必须与终端管理业务语义保持一致，避免把终端管理产品写成泛行业后台。</span></p>
<table class="map-table">
<thead><tr><th style="width:22%"><span data-i18n="do-dont:t091">模块</span></th><th style="width:39%"><span data-i18n="do-dont:t092">推荐</span></th><th><span data-i18n="do-dont:t093">禁止</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="do-dont:t094">产品定位</span></td><td><span data-i18n="do-dont:t095">面向安卓设备的终端管理系统</span></td><td><span data-i18n="do-dont:t096">偏行业调度平台、资产台账系统、泛企业平台</span></td></tr>
<tr><td><span data-i18n="do-dont:t097">设备对象</span></td><td><span data-i18n="do-dont:t098">安卓设备、Android 终端、设备分组、设备型号</span></td><td><span data-i18n="do-dont:t099">非终端对象、网关、装置、机器混用</span></td></tr>
<tr><td><span data-i18n="do-dont:t100">应用市场</span></td><td><span data-i18n="do-dont:t101">应用管理、应用分类、版本管理、安装明细</span></td><td><span data-i18n="do-dont:t102">软件商城、资源市场、下载中心混用</span></td></tr>
<tr><td>OTA</td><td><span data-i18n="do-dont:t103">升级文件、OTA 包、基线版本、适配机型、更新推送</span></td><td><span data-i18n="do-dont:t104">只写“更新”“执行”“开始”</span></td></tr>
<tr><td><span data-i18n="do-dont:t105">推送任务</span></td><td><span data-i18n="do-dont:t106">批次号、推送方式、指定设备编号、推送设备详情</span></td><td><span data-i18n="do-dont:t107">任务编号、目标列表等无业务指向的泛词</span></td></tr>
<tr><td><span data-i18n="do-dont:t108">远程服务</span></td><td><span data-i18n="do-dont:t109">推送到设备、从设备删除、恢复出厂、取回日志</span></td><td><span data-i18n="do-dont:t110">处理、操作、执行等缺少对象和后果的按钮</span></td></tr>
</tbody>
</table>
<div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong><span data-i18n="do-dont:t111">Figma 红线：</span></strong><span data-i18n="do-dont:t112">只能把 Figma 当作业务证据和模式来源。禁止把废案、临时方案、设计占位词或逐帧截图目录迁入站点；每一处迁移都必须落到 token、组件规则、页面蓝图或模块规则。</span></div></div>
<table class="map-table" style="margin-top:12px">
<thead><tr><th style="width:22%"><span data-i18n="do-dont:t113">冲突类型</span></th><th style="width:34%"><span data-i18n="do-dont:t114">处理顺序</span></th><th><span data-i18n="do-dont:t115">说明</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="do-dont:t116">业务模块 / 字段 / 状态</span></td><td><span data-i18n="do-dont:t117">Figma 优先</span></td><td><span data-i18n="do-dont:t118">例如围栏、APN、WIFI、OSS、设备推送结果统计，当前项目缺失时必须补齐。</span></td></tr>
<tr><td><span data-i18n="do-dont:t119">工程架构 / 路由 / token</span></td><td><span data-i18n="do-dont:t120">当前仓库优先</span></td><td><span data-i18n="do-dont:t121">不得破坏 file:// SPA、--aw-* token、AntD v6 和无构建约束。</span></td></tr>
<tr><td><span data-i18n="do-dont:t122">废案 / 临时方案</span></td><td><span data-i18n="do-dont:t123">排除</span></td><td><span data-i18n="do-dont:t124">即使来自 Figma，也不作为设计系统依据。</span></td></tr>
<tr><td><span data-i18n="do-dont:t125">拼写 / 术语别名</span></td><td><span data-i18n="do-dont:t126">规范化后采用</span></td><td><span data-i18n="do-dont:t127">例如“登陆”统一为“登录”，“参数模版”统一为“参数模板”。</span></td></tr>
</tbody>
</table>
</div>
</section>
</div>
`;
