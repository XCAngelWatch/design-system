/* AngelWatch Design System — page: tech-stack (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["tech-stack"] = `
<div class="content">
<!-- TECH STACK MAP -->
<section class="section" id="tech-stack">
  <p class="section-eyebrow">Reference · 技术栈速查</p>
  <h2>Tech Stack Map · NPM 包速查表</h2>
  <p class="lede">Design system 各部分对应的 NPM 包、版本、license 一表清。新人入职 / 安全审计 / license 合规检查直接查这张表。所有包均自托管，禁运行时 CDN。版本号见下方"版本固化策略"章节。</p>

  <div class="subsection">
    <h3>版本固化策略 · Version Pinning Policy</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px"><code>package.json</code> 的 <code>^x.y.z</code> 是<b>许可范围</b>（允许 minor / patch 自动升级）；<code>pnpm-lock.yaml</code> 是<b>实际安装版本</b>（精确到 commit hash）。两者职责不同，更新规则也不同。</p>
    <table class="map-table">
      <thead><tr><th style="width:18%">变化类型</th><th style="width:18%">SemVer</th><th style="width:24%">触发条件</th><th>review 流程</th></tr></thead>
      <tbody>
        <tr><td>Patch</td><td><span class="mono">x.y.<b>z</b></span> 比如 6.1.4 → 6.1.5</td><td>自动 (Renovate / Dependabot 周报)</td><td>仅看 changelog 是否有 bug fix；CI 通过即合并</td></tr>
        <tr><td>Minor</td><td><span class="mono">x.<b>y</b>.0</span> 比如 6.1.x → 6.2.0</td><td>季度手动评估</td><td>跑 visual regression（chromatic / loki）+ Light/Dark 双主题回归</td></tr>
        <tr><td><b>Major</b></td><td><span class="mono"><b>x</b>.0.0</span> 比如 6.x → 7.0.0</td><td>专项升级 spike</td><td><a href="#/config-provider" style="color:var(--aw-primary)">ConfigProvider 升级 checklist</a> 7 步全过 + design review + i18n × 4 全回归</td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">硬约束：</b><br/>1) <code>antd</code> / <code>@ant-design/icons</code> / <code>@ant-design/colors</code> 三个包必须<b>同步</b>升级（破版本不兼容）；锁版本时三者要么都升要么都不升<br/>2) 所有 <code>@ant-design/*</code> 包<b>禁用</b> <code>~x.y.z</code>（仅 patch 升级）—— 除非有具体 issue 指向某个 minor 版本回归<br/>3) <code>pnpm-lock.yaml</code> <b>必须</b>提交到 git，安装走 <code>pnpm install --frozen-lockfile</code>（CI / 部署 / 内网镜像同源）<br/>4) 引入新包前先核对下方 license 列；非 MIT / Apache-2.0 / BSD / ISC 必须经法务确认</p>
  </div>
  <div class="tech-table-wrap">
    <table class="tech-table">
<thead>
  <tr><th style="width:18%">Layer</th><th style="width:32%">Library</th><th style="width:14%">Version</th><th style="width:12%">License</th><th>用途 / 说明</th></tr>
</thead>
<tbody>
  <tr class="tech-group"><td colspan="5">基础组件 · Core UI （三件套同步升级，破版本不兼容）</td></tr>
  <tr><td>组件库</td><td><code>antd</code></td><td>^6.0.0</td><td><span class="lic mit">MIT</span></td><td>主组件库（CSS-in-JS · token 模式）。所有覆盖收口 <a href="#/config-provider" style="color:var(--aw-primary)">ConfigProvider 页</a></td></tr>
  <tr><td>图标</td><td><code>@ant-design/icons</code></td><td>^5.5.0</td><td><span class="lic mit">MIT</span></td><td>antd 配套图标 · 700+ 个；TMS 业务图标在 <code>@tms/icons</code> 包补充</td></tr>
  <tr><td>颜色派生</td><td><code>@ant-design/colors</code></td><td>^7.2.0</td><td><span class="lic mit">MIT</span></td><td>种子色 → 10 阶自动生成；palette / chart 色板生成器</td></tr>

  <tr class="tech-group"><td colspan="5">数据可视化 · Visualization</td></tr>
  <tr><td>图表</td><td><code>echarts</code> + <code>echarts-for-react</code></td><td>^6.x · ^3.x</td><td><span class="lic apache">Apache 2.0</span></td><td>百度 ECharts · 60+ 图表类型 · 通过 setOption 主题继承 design tokens</td></tr>
  <tr><td>地图</td><td><code>react-leaflet</code> + <code>leaflet.markercluster</code> + <code>leaflet.heat</code></td><td>^4.x</td><td><span class="lic bsd">BSD-2</span></td><td>设备地图 · 聚合 · 热力图</td></tr>

  <tr class="tech-group"><td colspan="5">交互 · Interaction</td></tr>
  <tr><td>表格虚拟滚动</td><td><code>@tanstack/react-table</code> + <code>@tanstack/react-virtual</code></td><td>^8.x · ^3.x</td><td><span class="lic mit">MIT</span></td><td>spike-1 兜底方案，AppTable Facade 内核</td></tr>
  <tr><td>拖拽 / 树拖拽</td><td><code>@dnd-kit/core</code> + <code>dnd-kit-sortable-tree</code></td><td>^6.x · ^0.1.x</td><td><span class="lic mit">MIT</span></td><td>菜单 / 机构 / 表格列拖拽</td></tr>
  <tr><td>节点编辑</td><td><code>@xyflow/react</code></td><td>^12.x</td><td><span class="lic mit">MIT</span></td><td>OTA 流程编排 · 设备拓扑</td></tr>
  <tr><td>终端</td><td><code>@xterm/xterm</code> + <code>react-xtermjs</code> + <code>@xterm/addon-attach</code></td><td>^5.x</td><td><span class="lic mit">MIT</span></td><td>WebSocket 桥接 SSH / adb</td></tr>
  <tr><td>代码编辑</td><td><code>@monaco-editor/react</code></td><td>^4.x</td><td><span class="lic mit">MIT</span></td><td>VS Code 同款 · loader 自托管</td></tr>

  <tr class="tech-group"><td colspan="5">表单 · Forms</td></tr>
  <tr><td>Schema 表单</td><td><code>@rjsf/antd</code> + <code>@rjsf/core</code> + <code>@rjsf/validator-ajv8</code></td><td>^5.x</td><td><span class="lic apache">Apache 2.0</span></td><td>JSON Schema 动态表单</td></tr>
  <tr><td>表单逻辑</td><td><code>react-hook-form</code> + <code>zod</code></td><td>^7.x · ^3.x</td><td><span class="lic mit">MIT</span></td><td>复杂校验 / 强类型</td></tr>

  <tr class="tech-group"><td colspan="5">状态 · State</td></tr>
  <tr><td>服务端状态</td><td><code>@tanstack/react-query</code></td><td>^5.x</td><td><span class="lic mit">MIT</span></td><td>WebSocket 通过 setQueryData 回写</td></tr>
  <tr><td>客户端状态</td><td><code>zustand</code></td><td>^4.x</td><td><span class="lic mit">MIT</span></td><td>authStore / menuStore</td></tr>

  <tr class="tech-group"><td colspan="5">国际化 · i18n</td></tr>
  <tr><td>翻译</td><td><code>react-i18next</code> + <code>i18next</code></td><td>^14.x · ^23.x</td><td><span class="lic mit">MIT</span></td><td>4 语言：zh-CN / en / es / pt</td></tr>
  <tr><td>组件 locale</td><td>antd <code>ConfigProvider.locale</code> 内置</td><td>—</td><td><span class="lic mit">MIT</span></td><td>DatePicker / Pagination 等自动翻译</td></tr>

  <tr class="tech-group"><td colspan="5">导出 · Export</td></tr>
  <tr><td>CSV</td><td><code>papaparse</code></td><td>^5.x</td><td><span class="lic mit">MIT</span></td><td>边界处理稳定</td></tr>
  <tr><td>Excel</td><td><code>xlsx</code>(SheetJS)</td><td>^0.20.x</td><td><span class="lic apache">Apache 2.0</span></td><td>读 + 写 · 单元格样式</td></tr>
  <tr><td>PDF</td><td><code>@react-pdf/renderer</code></td><td>^4.x</td><td><span class="lic mit">MIT</span></td><td>声明式 PDF · 中文字体自托管</td></tr>
  <tr><td>二维码</td><td><code>qrcode.react</code></td><td>^4.x</td><td><span class="lic isc">ISC</span></td><td>仅 4 KB · 极轻</td></tr>
</tbody>
    </table>
  </div>
  <p class="tech-foot">所有上述包 license 均为 MIT / Apache-2.0 / BSD / ISC，可放心商用与内网部署。引入新包前先核对此表 license 列；非以上 4 类（如 GPL / AGPL）必须经法务确认。</p>

  <div class="subsection">
    <h3>TMS 自建组件 · 不在 antd 提供</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px">下表是<b>新人查 antd 文档找不到</b>的组件 / 包 —— 它们都是 TMS 自建（部分是 antd 移除后由 TMS 接管），代码在 monorepo 内，不去 npmjs 找。</p>
    <table class="map-table">
      <thead><tr><th style="width:22%">组件 / 包</th><th style="width:24%">代码位置</th><th style="width:18%">原因</th><th>说明</th></tr></thead>
      <tbody>
        <tr class="map-group"><td colspan="4">UI 组件 · 包装 antd 或独立实现</td></tr>
        <tr><td><code>&lt;PageHeader /&gt;</code></td><td><span class="mono">packages/web/src/components/PageHeader.tsx</span></td><td>antd v5+ 移除</td><td>v4 内置 → v5 移到 ProComponents → TMS 禁 ProComponents 故自建。详见 <a href="#/page-header" style="color:var(--aw-primary)">page-header 页</a></td></tr>
        <tr><td><code>&lt;TMSEmpty /&gt;</code></td><td><span class="mono">packages/web/src/components/Empty.tsx</span></td><td>覆盖默认插画</td><td>antd 默认彩色插画 → TMS 单色 simple 版；通过 <code>ConfigProvider.renderEmpty</code> 全局注入</td></tr>
        <tr><td><code>&lt;TMSResult /&gt;</code></td><td><span class="mono">packages/web/src/components/Result.tsx</span></td><td>覆盖默认插画</td><td>包一层 antd Result，替换 8 种 status 默认彩色图为 TMS 单色 icon / illustration。详见 <a href="#/illustration" style="color:var(--aw-primary)">illustration 页</a></td></tr>
        <tr><td><code>&lt;AppTable /&gt;</code> · Facade</td><td><span class="mono">packages/web/src/components/AppTable/</span></td><td>跨档位策略</td><td>≤ 1k 行用 antd Table；&gt; 1k 行切到 <code>@tanstack/react-table + react-virtual</code>；业务方只用 AppTable 不直接用 antd Table</td></tr>
        <tr><td><code>&lt;DataCard /&gt;</code></td><td><span class="mono">packages/web/src/components/DataCard.tsx</span></td><td>设备卡片专用</td><td>列表卡片视图。包含状态条 / 关键字段 / 折叠操作。详见 <a href="#/data-cards" style="color:var(--aw-primary)">data-cards 页</a></td></tr>
        <tr><td><code>&lt;RowActions /&gt;</code></td><td><span class="mono">packages/web/src/components/RowActions.tsx</span></td><td>行操作折叠</td><td>表格行内操作栏。≤ 3 个全显示, ≥ 4 个折叠到 ··· 下拉。详见 <a href="#/row-actions" style="color:var(--aw-primary)">row-actions 页</a></td></tr>
        <tr><td><code>&lt;ErrorPage /&gt;</code></td><td><span class="mono">packages/web/src/components/ErrorPage.tsx</span></td><td>统一错误页</td><td>包 antd Result 的 status="404"/"403"/"500" 三种 + Network 一种；带 traceId 显示</td></tr>
        <tr><td><code>&lt;StatusDot /&gt;</code> · <code>&lt;StatusPill /&gt;</code></td><td><span class="mono">packages/web/src/components/Status.tsx</span></td><td>三重编码</td><td>颜色 + 形状 + 文字三重编码（色弱可达）。8 种设备状态固化</td></tr>
        <tr class="map-group"><td colspan="4">底层包 · 工具 / 设计契约</td></tr>
        <tr><td><code>@tms/design-tokens</code></td><td><span class="mono">packages/design-tokens/</span></td><td>主题契约</td><td>tokens.json 单一信源 → 编译期同时生成 <code>tokens.css</code> + <code>antdThemeToken.ts</code>。两套主题系统同源</td></tr>
        <tr><td><code>@tms/icons</code></td><td><span class="mono">packages/icons/</span></td><td>业务图标库</td><td>antd-icons 之外的 24 个 TMS 业务图标。SVGR 自动生成。详见 <a href="#/icons" style="color:var(--aw-primary)">icons 页</a></td></tr>
        <tr><td><code>@tms/illustrations</code></td><td><span class="mono">packages/illustrations/</span></td><td>登录 / 错误页插画</td><td>5 个 SVG（login / 404 / 403 / 500 / network）。仅这两类页面用</td></tr>
        <tr><td><code>@tms/format</code></td><td><span class="mono">packages/format/</span></td><td>数据格式化</td><td><code>Intl.*</code> 包装 + TMS 专属（SN / IMEI 分组）。详见 <a href="#/data-format" style="color:var(--aw-primary)">data-format 页</a></td></tr>
        <tr><td><code>@tms/i18n</code></td><td><span class="mono">packages/i18n/</span></td><td>翻译 + 术语</td><td>react-i18next 包装 + TMS 术语锁定表（zh-CN / en / es / pt）。详见 <a href="#/copywriting" style="color:var(--aw-primary)">copywriting 页</a></td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">监控点：</b>新业务页禁止<b>直接</b>使用 antd 的 <code>&lt;Empty&gt;</code> / <code>&lt;Result&gt;</code> / <code>&lt;Table&gt;</code> / <code>&lt;PageHeader&gt;</code>（最后一个 v5+ 已移除），必须用上表 TMS 包装版。stylelint 自动拦截 import 路径 <code>'antd'</code> 中的这几个名字，强制走 <code>@/components/*</code>。</p>
  </div>
</section>
</div>
`;
