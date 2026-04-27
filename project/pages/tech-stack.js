/* AngelWatch Design System — page: tech-stack (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["tech-stack"] = `
<div class="content">
<!-- TECH STACK MAP -->
<section class="section" id="tech-stack">
  <p class="section-eyebrow">Reference · 技术栈速查</p>
  <h2>Tech Stack Map · NPM 包速查表</h2>
  <p class="lede">Design system 各部分对应的 NPM 包、版本、license 一表清。新人入职 / 安全审计 / license 合规检查直接查这张表。所有包均自托管，禁运行时 CDN。版本以最新稳定为准（2026-04），落地时锁定到 <code>pnpm-lock.yaml</code>。</p>
  <div class="tech-table-wrap">
    <table class="tech-table">
<thead>
  <tr><th style="width:18%">Layer</th><th style="width:32%">Library</th><th style="width:14%">Version</th><th style="width:12%">License</th><th>用途 / 说明</th></tr>
</thead>
<tbody>
  <tr class="tech-group"><td colspan="5">基础组件 · Core UI</td></tr>
  <tr><td>组件库</td><td><code>antd</code></td><td>^6.x</td><td><span class="lic mit">MIT</span></td><td>主组件库（CSS-Variables mode）</td></tr>
  <tr><td>图标</td><td><code>@ant-design/icons</code></td><td>^5.x</td><td><span class="lic mit">MIT</span></td><td>antd 配套图标 · 700+</td></tr>
  <tr><td>颜色派生</td><td><code>@ant-design/colors</code></td><td>^7.x</td><td><span class="lic mit">MIT</span></td><td>种子色 → 10 阶自动生成</td></tr>

  <tr class="tech-group"><td colspan="5">数据可视化 · Visualization</td></tr>
  <tr><td>图表</td><td><code>@ant-design/charts</code></td><td>^3.x</td><td><span class="lic mit">MIT</span></td><td>基于 G2 · 与 antd v6 视觉语言一致</td></tr>
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
</section>
</div>
`;
