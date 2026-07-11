/* AngelWatch Design System — page: tech-stack (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["tech-stack"] = `
<div class="content">
<!-- TECH STACK MAP -->
<section class="section" id="tech-stack">
<p class="section-eyebrow"><span data-i18n="tech-stack:t001">工程落地 · 技术栈</span></p>
<h2><span data-i18n="tech-stack:t002">技术栈速查 Tech Stack</span></h2>
<p class="lede"><span data-i18n="tech-stack:t003">Design system 各部分对应的 NPM 包、版本、license 一表清。新人入职 / 安全审计 / license 合规检查直接查这张表。所有包均自托管，禁运行时 CDN。版本号见下方"版本固化策略"章节。</span></p>
<div class="subsection">
<h3><span data-i18n="tech-stack:t004">版本固化策略 · Version Pinning Policy</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px"><code>package.json</code> <span data-i18n="tech-stack:t005">的</span> <code>^x.y.z</code> <span data-i18n="tech-stack:t006">是</span><b><span data-i18n="tech-stack:t007">许可范围</span></b><span data-i18n="tech-stack:t008">（允许 minor / patch 自动升级）；</span><code>pnpm-lock.yaml</code> <span data-i18n="tech-stack:t009">是</span><b><span data-i18n="tech-stack:t010">实际安装版本</span></b><span data-i18n="tech-stack:t011">（精确到 commit hash）。两者职责不同，更新规则也不同。</span></p>
<table class="map-table">
<thead><tr><th style="width:18%"><span data-i18n="tech-stack:t012">变化类型</span></th><th style="width:18%">SemVer</th><th style="width:24%"><span data-i18n="tech-stack:t013">触发条件</span></th><th><span data-i18n="tech-stack:t014">review 流程</span></th></tr></thead>
<tbody>
<tr><td>Patch</td><td><span class="mono">x.y.<b>z</b></span> <span data-i18n="tech-stack:t015">比如 6.1.4 → 6.1.5</span></td><td><span data-i18n="tech-stack:t016">自动 (Renovate / Dependabot 周报)</span></td><td><span data-i18n="tech-stack:t017">仅看 changelog 是否有 bug fix；CI 通过即合并</span></td></tr>
<tr><td>Minor</td><td><span class="mono">x.<b>y</b>.0</span> <span data-i18n="tech-stack:t018">比如 6.1.x → 6.2.0</span></td><td><span data-i18n="tech-stack:t019">季度手动评估</span></td><td><span data-i18n="tech-stack:t020">跑 visual regression（chromatic / loki）+ Light/Dark 双主题回归</span></td></tr>
<tr><td><b>Major</b></td><td><span class="mono"><b>x</b>.0.0</span> <span data-i18n="tech-stack:t021">比如 6.x → 7.0.0</span></td><td><span data-i18n="tech-stack:t022">专项升级 spike</span></td><td><a href="#/config-provider" style="color:var(--aw-primary)"><span data-i18n="tech-stack:t023">ConfigProvider 升级 checklist</span></a> <span data-i18n="tech-stack:t024">7 步全过 + design review + i18n × 4 全回归</span></td></tr>
</tbody>
</table>
<p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="tech-stack:t025">硬约束：</span></b><br/>1) <code>antd</code> / <code>@ant-design/icons</code> / <code>@ant-design/colors</code> <span data-i18n="tech-stack:t026">三个包必须</span><b><span data-i18n="tech-stack:t027">同步</span></b><span data-i18n="tech-stack:t028">升级（破版本不兼容）；锁版本时三者要么都升要么都不升</span><br/><span data-i18n="tech-stack:t029">2) 所有</span> <code>@ant-design/*</code> <span data-i18n="tech-stack:t030">包</span><b><span data-i18n="tech-stack:t031">禁用</span></b> <code>~x.y.z</code><span data-i18n="tech-stack:t032">（仅 patch 升级）—— 除非有具体 issue 指向某个 minor 版本回归</span><br/>3) <code>pnpm-lock.yaml</code> <b><span data-i18n="tech-stack:t033">必须</span></b><span data-i18n="tech-stack:t034">提交到 git，安装走</span> <code>pnpm install --frozen-lockfile</code><span data-i18n="tech-stack:t035">（CI / 部署 / 内网镜像同源）</span><br/><span data-i18n="tech-stack:t036">4) 引入新包前先核对下方 license 列；非 MIT / Apache-2.0 / BSD / ISC 必须经法务确认</span></p>
</div>
<div class="tech-table-wrap">
<table class="tech-table">
<thead>
<tr><th style="width:18%">Layer</th><th style="width:32%">Library</th><th style="width:14%">Version</th><th style="width:12%">License</th><th><span data-i18n="tech-stack:t037">用途 / 说明</span></th></tr>
</thead>
<tbody>
<tr class="tech-group"><td colspan="5"><span data-i18n="tech-stack:t038">基础组件 · Core UI （三件套同步升级，破版本不兼容）</span></td></tr>
<tr><td><span data-i18n="tech-stack:t039">组件库</span></td><td><code>antd</code></td><td>^6.0.0</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t040">主组件库（CSS-in-JS · token 模式）。所有覆盖收口</span> <a href="#/config-provider" style="color:var(--aw-primary)"><span data-i18n="tech-stack:t041">ConfigProvider 页</span></a></td></tr>
<tr><td><span data-i18n="tech-stack:t042">图标</span></td><td><code>@ant-design/icons</code></td><td>^5.5.0</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t043">antd 配套图标 · 700+ 个；TMS 业务图标在</span> <code>@tms/icons</code> <span data-i18n="tech-stack:t044">包补充</span></td></tr>
<tr><td><span data-i18n="tech-stack:t045">颜色派生</span></td><td><code>@ant-design/colors</code></td><td>^7.2.0</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t046">种子色 → 10 阶自动生成；palette / chart 色板生成器</span></td></tr>
<tr class="tech-group"><td colspan="5"><span data-i18n="tech-stack:t047">数据可视化 · Visualization</span></td></tr>
<tr><td><span data-i18n="tech-stack:t048">图表</span></td><td><code>echarts</code> + <code>echarts-for-react</code></td><td>^6.x · ^3.x</td><td><span class="lic apache">Apache 2.0</span></td><td><span data-i18n="tech-stack:t049">百度 ECharts · 60+ 图表类型 · 通过 setOption 主题继承 design tokens</span></td></tr>
<tr><td><span data-i18n="tech-stack:t050">地图</span></td><td><code>react-leaflet</code> + <code>leaflet.markercluster</code> + <code>leaflet.heat</code></td><td>^4.x</td><td><span class="lic bsd">BSD-2</span></td><td><span data-i18n="tech-stack:t051">设备地图 · 聚合 · 热力图</span></td></tr>
<tr class="tech-group"><td colspan="5"><span data-i18n="tech-stack:t052">交互 · Interaction</span></td></tr>
<tr><td><span data-i18n="tech-stack:t053">表格虚拟滚动</span></td><td>antd <code>Table virtual</code></td><td>v6</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t054">默认方案；TanStack 仅用于非表格或实测不满足的异构场景</span></td></tr>
<tr><td><span data-i18n="tech-stack:t055">拖拽 / 树拖拽</span></td><td><code>@dnd-kit/core</code> + <code>dnd-kit-sortable-tree</code></td><td>^6.x · ^0.1.x</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t056">菜单 / 机构 / 表格列拖拽</span></td></tr>
<tr><td><span data-i18n="tech-stack:t057">节点编辑</span></td><td><code>@xyflow/react</code></td><td>^12.x</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t058">OTA 流程编排 · 设备拓扑</span></td></tr>
<tr><td><span data-i18n="tech-stack:t059">终端</span></td><td><code>@xterm/xterm</code> + <code>react-xtermjs</code> + <code>@xterm/addon-attach</code></td><td>^5.x</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t060">WebSocket 桥接 SSH / adb</span></td></tr>
<tr><td><span data-i18n="tech-stack:t061">代码编辑</span></td><td><code>@monaco-editor/react</code></td><td>^4.x</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t062">VS Code 同款 · loader 自托管</span></td></tr>
<tr class="tech-group"><td colspan="5"><span data-i18n="tech-stack:t063">表单 · Forms</span></td></tr>
<tr><td><span data-i18n="tech-stack:t064">Schema 表单</span></td><td><code>@rjsf/antd</code> + <code>@rjsf/core</code> + <code>@rjsf/validator-ajv8</code></td><td>^5.x</td><td><span class="lic apache">Apache 2.0</span></td><td><span data-i18n="tech-stack:t065">JSON Schema 动态表单</span></td></tr>
<tr><td><span data-i18n="tech-stack:t066">表单逻辑</span></td><td><code>react-hook-form</code> + <code>zod</code></td><td>^7.x · ^3.x</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t067">复杂校验 / 强类型</span></td></tr>
<tr class="tech-group"><td colspan="5"><span data-i18n="tech-stack:t068">状态 · State</span></td></tr>
<tr><td><span data-i18n="tech-stack:t069">服务端状态</span></td><td><code>@tanstack/react-query</code></td><td>^5.x</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t070">WebSocket 通过 setQueryData 回写</span></td></tr>
<tr><td><span data-i18n="tech-stack:t071">客户端状态</span></td><td><code>zustand</code></td><td>^4.x</td><td><span class="lic mit">MIT</span></td><td>authStore / menuStore</td></tr>
<tr class="tech-group"><td colspan="5"><span data-i18n="tech-stack:t072">国际化 · i18n</span></td></tr>
<tr><td><span data-i18n="tech-stack:t073">翻译</span></td><td><code>react-i18next</code> + <code>i18next</code></td><td>^14.x · ^23.x</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t074">4 语言：zh-CN / en / es / pt</span></td></tr>
<tr><td><span data-i18n="tech-stack:t075">组件 locale</span></td><td>antd <code>ConfigProvider.locale</code> <span data-i18n="tech-stack:t076">内置</span></td><td>—</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t077">DatePicker / Pagination 等自动翻译</span></td></tr>
<tr class="tech-group"><td colspan="5"><span data-i18n="tech-stack:t078">导出 · Export</span></td></tr>
<tr><td>CSV</td><td><code>papaparse</code></td><td>^5.x</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t079">边界处理稳定</span></td></tr>
<tr><td>Excel</td><td><code>xlsx</code>(SheetJS)</td><td>^0.20.x</td><td><span class="lic apache">Apache 2.0</span></td><td><span data-i18n="tech-stack:t080">读 + 写 · 单元格样式</span></td></tr>
<tr><td>PDF</td><td><code>@react-pdf/renderer</code></td><td>^4.x</td><td><span class="lic mit">MIT</span></td><td><span data-i18n="tech-stack:t081">声明式 PDF · 中文字体自托管</span></td></tr>
<tr><td><span data-i18n="tech-stack:t082">二维码</span></td><td><code>qrcode.react</code></td><td>^4.x</td><td><span class="lic isc">ISC</span></td><td><span data-i18n="tech-stack:t083">仅 4 KB · 极轻</span></td></tr>
</tbody>
</table>
</div>
<p class="tech-foot"><span data-i18n="tech-stack:t084">所有上述包 license 均为 MIT / Apache-2.0 / BSD / ISC，可放心商用与内网部署。引入新包前先核对此表 license 列；非以上 4 类（如 GPL / AGPL）必须经法务确认。</span></p>
<div class="subsection">
<h3><span data-i18n="tech-stack:t085">TMS 自建组件 · 不在 antd 提供</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px"><span data-i18n="tech-stack:t086">下表是</span><b><span data-i18n="tech-stack:t087">新人查 antd 文档找不到</span></b><span data-i18n="tech-stack:t088">的组件 / 包 —— 它们都是 TMS 自建（部分是 antd 移除后由 TMS 接管），代码在 monorepo 内，不去 npmjs 找。</span></p>
<table class="map-table">
<thead><tr><th style="width:22%"><span data-i18n="tech-stack:t089">组件 / 包</span></th><th style="width:24%"><span data-i18n="tech-stack:t090">代码位置</span></th><th style="width:18%"><span data-i18n="tech-stack:t091">原因</span></th><th><span data-i18n="tech-stack:t092">说明</span></th></tr></thead>
<tbody>
<tr class="map-group"><td colspan="4"><span data-i18n="tech-stack:t093">UI 组件 · 包装 antd 或独立实现</span></td></tr>
<tr><td><code>&lt;PageHeader /&gt;</code></td><td><span class="mono">packages/web/src/components/PageHeader.tsx</span></td><td><span data-i18n="tech-stack:t094">antd v5+ 移除</span></td><td><span data-i18n="tech-stack:t095">v4 内置 → v5 移到 ProComponents → TMS 禁 ProComponents 故自建。详见</span> <a href="#/page-header" style="color:var(--aw-primary)"><span data-i18n="tech-stack:t096">page-header 页</span></a></td></tr>
<tr><td><code>&lt;TMSEmpty /&gt;</code></td><td><span class="mono">packages/web/src/components/Empty.tsx</span></td><td><span data-i18n="tech-stack:t097">覆盖默认插画</span></td><td><span data-i18n="tech-stack:t098">antd 默认彩色插画 → TMS 单色 simple 版；通过</span> <code>ConfigProvider.renderEmpty</code> <span data-i18n="tech-stack:t099">全局注入</span></td></tr>
<tr><td><code>&lt;TMSResult /&gt;</code></td><td><span class="mono">packages/web/src/components/Result.tsx</span></td><td><span data-i18n="tech-stack:t100">覆盖默认插画</span></td><td><span data-i18n="tech-stack:t101">包一层 antd Result，替换 8 种 status 默认彩色图为 TMS 单色 icon / illustration。详见</span> <a href="#/illustration" style="color:var(--aw-primary)"><span data-i18n="tech-stack:t102">illustration 页</span></a></td></tr>
<tr><td><code>&lt;AppTable /&gt;</code> · Facade</td><td><span class="mono">packages/web/src/components/AppTable/</span></td><td><span data-i18n="tech-stack:t103">跨档位策略</span></td><td><span data-i18n="tech-stack:t104">默认使用 antd Table；大数据固定行高场景启用</span> <code>virtual + scroll.x + scroll.y</code><span data-i18n="tech-stack:t105">；是否换内核由性能测试决定，不使用固定行数阈值</span></td></tr>
<tr><td><code>&lt;DataCard /&gt;</code></td><td><span class="mono">packages/web/src/components/DataCard.tsx</span></td><td><span data-i18n="tech-stack:t106">设备卡片专用</span></td><td><span data-i18n="tech-stack:t107">列表卡片视图。包含状态条 / 关键字段 / 折叠操作。详见</span> <a href="#/data-cards" style="color:var(--aw-primary)"><span data-i18n="tech-stack:t108">data-cards 页</span></a></td></tr>
<tr><td><code>&lt;RowActions /&gt;</code></td><td><span class="mono">packages/web/src/components/RowActions.tsx</span></td><td><span data-i18n="tech-stack:t109">行操作折叠</span></td><td><span data-i18n="tech-stack:t110">表格行内操作栏。≤ 3 个全显示, ≥ 4 个折叠到 ··· 下拉。详见</span> <a href="#/row-actions" style="color:var(--aw-primary)"><span data-i18n="tech-stack:t111">row-actions 页</span></a></td></tr>
<tr><td><code>&lt;ErrorPage /&gt;</code></td><td><span class="mono">packages/web/src/components/ErrorPage.tsx</span></td><td><span data-i18n="tech-stack:t112">统一错误页</span></td><td><span data-i18n="tech-stack:t113">包 antd Result 的 status="404"/"403"/"500" 三种 + Network 一种；带 traceId 显示</span></td></tr>
<tr><td><code>&lt;StatusDot /&gt;</code> · <code>&lt;StatusPill /&gt;</code></td><td><span class="mono">packages/web/src/components/Status.tsx</span></td><td><span data-i18n="tech-stack:t114">三重编码</span></td><td><span data-i18n="tech-stack:t115">颜色 + 形状 + 文字三重编码（色弱可达）。8 种设备状态固化</span></td></tr>
<tr class="map-group"><td colspan="4"><span data-i18n="tech-stack:t116">底层包 · 工具 / 设计契约</span></td></tr>
<tr><td><code>@tms/design-tokens</code></td><td><span class="mono">packages/design-tokens/</span></td><td><span data-i18n="tech-stack:t117">主题契约</span></td><td><span data-i18n="tech-stack:t118">tokens.json 单一信源 → 编译期同时生成</span> <code>tokens.css</code> + <code>antdThemeToken.ts</code><span data-i18n="tech-stack:t119">。两套主题系统同源</span></td></tr>
<tr><td><code>@tms/icons</code></td><td><span class="mono">packages/icons/</span></td><td><span data-i18n="tech-stack:t120">业务图标库</span></td><td><span data-i18n="tech-stack:t121">antd-icons 之外的 24 个 TMS 业务图标。SVGR 自动生成。详见</span> <a href="#/icons" style="color:var(--aw-primary)"><span data-i18n="tech-stack:t122">icons 页</span></a></td></tr>
<tr><td><code>@tms/illustrations</code></td><td><span class="mono">packages/illustrations/</span></td><td><span data-i18n="tech-stack:t123">登录 / 错误页插画</span></td><td><span data-i18n="tech-stack:t124">5 个 SVG（login / 404 / 403 / 500 / network）。仅这两类页面用</span></td></tr>
<tr><td><code>@tms/format</code></td><td><span class="mono">packages/format/</span></td><td><span data-i18n="tech-stack:t125">数据格式化</span></td><td><code>Intl.*</code> <span data-i18n="tech-stack:t126">包装 + TMS 专属（SN / IMEI 分组）。详见</span> <a href="#/data-format" style="color:var(--aw-primary)"><span data-i18n="tech-stack:t127">data-format 页</span></a></td></tr>
<tr><td><code>@tms/i18n</code></td><td><span class="mono">packages/i18n/</span></td><td><span data-i18n="tech-stack:t128">翻译 + 术语</span></td><td><span data-i18n="tech-stack:t129">react-i18next 包装 + TMS 术语锁定表（zh-CN / en / es / pt）。详见</span> <a href="#/copywriting" style="color:var(--aw-primary)"><span data-i18n="tech-stack:t130">copywriting 页</span></a></td></tr>
</tbody>
</table>
<p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="tech-stack:t131">监控点：</span></b><span data-i18n="tech-stack:t132">新业务页禁止</span><b><span data-i18n="tech-stack:t133">直接</span></b><span data-i18n="tech-stack:t134">使用 antd 的</span> <code>&lt;Empty&gt;</code> / <code>&lt;Result&gt;</code> / <code>&lt;Table&gt;</code> / <code>&lt;PageHeader&gt;</code><span data-i18n="tech-stack:t135">（最后一个 v5+ 已移除），必须用上表 TMS 包装版。业务仓库应在 lint 规则中拦截这些 import，强制走</span> <code>@/components/*</code><span data-i18n="tech-stack:t136">。</span></p>
</div>
</section>
</div>
`;
