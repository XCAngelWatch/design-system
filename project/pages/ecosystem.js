/* AngelWatch Design System — page: ecosystem (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["ecosystem"] = `
<div class="content">
<!-- ECOSYSTEM INTEGRATIONS -->
<section class="section" id="ecosystem">
  <p class="section-eyebrow">Patterns · 生态集成</p>
  <h2>Ecosystem Integrations · 复杂场景不要自建</h2>
  <p class="lede">TMS 有 10 类高复杂度场景（地图 / 终端 / 拖拽树 / 流程编排 / 大数据表格 / 动态表单 / 代码编辑 等）。这些都有成熟的开源库，本系统提供视觉规范让它们 <b>套用 design tokens</b>，而不是从头写。每张卡是 <b>套色后的视觉示意</b>，不是组件，落地直接接入对应 NPM 包。</p>
  <div class="eco-grid">
    <!-- 1. RealtimeChart -->
    <div class="eco-card">
<div class="eco-h"><div class="eco-num">01</div><div class="eco-t">RealtimeChart · 实时图表</div></div>
<div class="eco-use">Dashboard 趋势图 · OTA 推送进度大盘 · 网络流量监控</div>
<div class="eco-pkg"><code>echarts</code> + <code>echarts-for-react</code><span class="eco-pkg-note">ECharts v6 · Apache 2.0 · 业务统一通过 <code>&lt;TMSChart /&gt;</code> 包装层调用，详见 <a href="#/charts" style="color:var(--aw-primary)">Charts 页</a></span></div>
<div class="eco-mock">
  <svg viewBox="0 0 360 130" preserveAspectRatio="none" style="width:100%;height:100%">
    <defs><linearGradient id="eg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0052CC" stop-opacity="0.32"/><stop offset="100%" stop-color="#0052CC" stop-opacity="0"/></linearGradient></defs>
    <line x1="0" y1="40" x2="360" y2="40" stroke="#F0F0F0" stroke-dasharray="3 3"/>
    <line x1="0" y1="80" x2="360" y2="80" stroke="#F0F0F0" stroke-dasharray="3 3"/>
    <path d="M0 95 L40 80 L80 70 L120 60 L160 65 L200 50 L240 40 L280 35 L320 25 L360 20 L360 130 L0 130 Z" fill="url(#eg1)"/>
    <path d="M0 95 L40 80 L80 70 L120 60 L160 65 L200 50 L240 40 L280 35 L320 25 L360 20" fill="none" stroke="#0052CC" stroke-width="2"/>
    <circle cx="320" cy="25" r="3" fill="#0052CC"/>
    <text x="6" y="14" fill="#6B7280" font-size="9" font-family="Inter">激活设备 · 近 30 日</text>
    <text x="6" y="124" fill="#9CA3AF" font-size="8" font-family="Inter">04-01</text>
    <text x="320" y="124" fill="#9CA3AF" font-size="8" font-family="Inter">04-30</text>
  </svg>
</div>
<div class="eco-warn">⚠ 仅视觉示意 · 业务代码用 &lt;TMSChart option={...} /&gt;，禁止直接 import echarts-for-react</div>
    </div>

    <!-- 2. DeviceMap -->
    <div class="eco-card">
<div class="eco-h"><div class="eco-num">02</div><div class="eco-t">DeviceMap · 设备地图</div></div>
<div class="eco-use">全国设备分布 · 实时心跳热力 · 故障点标记 · 聚合气泡</div>
<div class="eco-pkg"><code>react-leaflet</code> + <code>leaflet.markercluster</code> + <code>leaflet.heat</code><span class="eco-pkg-note">轻量 ~40KB · 成熟生态 · 商用免费</span></div>
<div class="eco-mock map-mock">
  <svg viewBox="0 0 360 130" style="width:100%;height:100%">
    <rect width="360" height="130" fill="#F5F7FA"/>
    <path d="M40 40 Q80 30 130 50 L160 70 L200 60 L260 90 L300 80 L320 100" fill="none" stroke="#D9D9D9" stroke-width="1"/>
    <path d="M60 70 Q100 80 160 90 L210 100 L260 110" fill="none" stroke="#D9D9D9" stroke-width="1"/>
    <circle cx="100" cy="50" r="14" fill="#0052CC" fill-opacity="0.85"/><text x="100" y="54" fill="white" font-size="9" font-family="Inter" text-anchor="middle" font-weight="600">328</text>
    <circle cx="180" cy="80" r="18" fill="#0052CC" fill-opacity="0.85"/><text x="180" y="84" fill="white" font-size="10" font-family="Inter" text-anchor="middle" font-weight="600">1.2k</text>
    <circle cx="270" cy="60" r="10" fill="#0052CC" fill-opacity="0.85"/><text x="270" y="63" fill="white" font-size="8" font-family="Inter" text-anchor="middle" font-weight="600">86</text>
    <circle cx="240" cy="100" r="6" fill="#A8071A"/>
    <circle cx="140" cy="100" r="6" fill="#A8071A"/>
    <circle cx="310" cy="40" r="5" fill="#AD6800"/>
    <rect x="282" y="6" width="74" height="28" rx="4" fill="white" stroke="#E5E7EB"/>
    <circle cx="294" cy="14" r="3" fill="#0052CC"/><text x="302" y="17" fill="#4B5563" font-size="8" font-family="Inter">在线</text>
    <circle cx="294" cy="26" r="3" fill="#A8071A"/><text x="302" y="29" fill="#4B5563" font-size="8" font-family="Inter">故障</text>
  </svg>
</div>
<div class="eco-warn">⚠ 仅视觉示意 · 实际用 OpenStreetMap 瓦片</div>
    </div>

    <!-- 3. RemoteTerminal -->
    <div class="eco-card">
<div class="eco-h"><div class="eco-num">03</div><div class="eco-t">RemoteTerminal · 远程终端</div></div>
<div class="eco-use">浏览器 SSH 到设备 shell · 远程 adb 命令 · 故障诊断</div>
<div class="eco-pkg"><code>@xterm/xterm</code> + <code>react-xtermjs</code> + <code>@xterm/addon-attach</code> · WebSocket 桥接<span class="eco-pkg-note">VS Code 内置同款 · GitHub 50k stars</span></div>
<div class="eco-mock term-mock">
  <div class="term-bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span class="term-title">DEV-86420075 · adb shell</span></div>
  <div class="term-body">
    <div><span class="term-prompt">root@android:/ #</span> getprop ro.build.version.release</div>
    <div class="term-out">11</div>
    <div><span class="term-prompt">root@android:/ #</span> dumpsys battery | grep level</div>
    <div class="term-out">  level: 87</div>
    <div><span class="term-prompt">root@android:/ #</span> <span class="term-cursor">▌</span></div>
  </div>
</div>
<div class="eco-warn">⚠ 仅视觉示意 · 实际由后端 WebSocket 透传 PTY</div>
    </div>

    <!-- 4. SortableTree -->
    <div class="eco-card">
<div class="eco-h"><div class="eco-num">04</div><div class="eco-t">SortableTree · 拖拽树</div></div>
<div class="eco-use">菜单管理 · 机构层级调整 · 设备分组重排</div>
<div class="eco-pkg"><code>dnd-kit-sortable-tree</code>(基于 <code>@dnd-kit/core</code>)<span class="eco-pkg-note">无障碍友好 · 跨浏览器 · 无 jQuery 依赖</span></div>
<div class="eco-mock tree-mock">
  <div class="tn"><span class="th">▾</span>集团总部</div>
  <div class="tn sub"><span class="th">▾</span>华东大区</div>
  <div class="tn sub2 dragging"><span class="th">⋮⋮</span>上海运营中心 <span class="ghost">移动到 →</span></div>
  <div class="tn sub2"><span class="th">○</span>南京营业厅</div>
  <div class="tn sub drop-target"><span class="th">▾</span>华北大区<span class="drop-line"></span></div>
  <div class="tn sub2"><span class="th">○</span>北京旗舰店</div>
</div>
<div class="eco-warn">⚠ 仅视觉示意 · 实际接入 dnd-kit useSortableTree</div>
    </div>

    <!-- 5. FlowEditor -->
    <div class="eco-card">
<div class="eco-h"><div class="eco-num">05</div><div class="eco-t">FlowEditor · 流程编辑器</div></div>
<div class="eco-use">OTA 推送策略可视化 · 设备拓扑图 · 自动化规则编排</div>
<div class="eco-pkg"><code>@xyflow/react</code>(原 react-flow)<span class="eco-pkg-note">21k stars · 生产级稳定 · 内置 minimap/controls</span></div>
<div class="eco-mock flow-mock">
  <svg viewBox="0 0 360 130" style="width:100%;height:100%">
    <rect width="360" height="130" fill="#FAFAFA"/>
    <pattern id="flowdot" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.8" fill="#D9D9D9"/></pattern>
    <rect width="360" height="130" fill="url(#flowdot)"/>
    <rect x="20" y="48" width="80" height="34" rx="6" fill="white" stroke="#0052CC" stroke-width="1.5"/>
    <text x="60" y="62" fill="#0052CC" font-size="9" font-family="Inter" text-anchor="middle" font-weight="600">选择设备</text>
    <text x="60" y="74" fill="#6B7280" font-size="8" font-family="Inter" text-anchor="middle">1,284 台</text>
    <path d="M100 65 L138 65" stroke="#A5C9FF" stroke-width="1.5" fill="none" marker-end="url(#flowarr)"/>
    <rect x="140" y="48" width="80" height="34" rx="6" fill="white" stroke="#0052CC" stroke-width="1.5"/>
    <text x="180" y="62" fill="#0052CC" font-size="9" font-family="Inter" text-anchor="middle" font-weight="600">选择固件包</text>
    <text x="180" y="74" fill="#6B7280" font-size="8" font-family="Inter" text-anchor="middle">v3.5.0</text>
    <path d="M220 65 L258 65" stroke="#A5C9FF" stroke-width="1.5" fill="none" marker-end="url(#flowarr)"/>
    <rect x="260" y="48" width="80" height="34" rx="6" fill="#E6EFFB" stroke="#0052CC" stroke-width="1.5"/>
    <text x="300" y="62" fill="#0052CC" font-size="9" font-family="Inter" text-anchor="middle" font-weight="600">推送策略</text>
    <text x="300" y="74" fill="#0052CC" font-size="8" font-family="Inter" text-anchor="middle" font-weight="600">02:00 启动</text>
    <defs><marker id="flowarr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 8 5 L 0 10 z" fill="#A5C9FF"/></marker></defs>
  </svg>
</div>
<div class="eco-warn">⚠ 仅视觉示意 · 实际节点用 customNode + Zustand</div>
    </div>

    <!-- 6. VirtualTable -->
    <div class="eco-card">
<div class="eco-h"><div class="eco-num">06</div><div class="eco-t">VirtualTable · 虚拟表格</div></div>
<div class="eco-use">5 万行+ 设备列表流畅滚动 · 列冻结 · 列拖拽宽度</div>
<div class="eco-pkg"><code>@tanstack/react-table</code> + <code>@tanstack/react-virtual</code><span class="eco-pkg-note">spike-1 已采纳为 AppTable Facade 内核</span></div>
<div class="eco-mock vt-mock">
  <div class="vt-head"><span>SN</span><span>状态</span><span>固件</span><span>心跳</span></div>
  <div class="vt-row"><span class="mono">DEV-86420075</span><span><span class="status-dot online">在线</span></span><span>v3.4.2</span><span>刚刚</span></div>
  <div class="vt-row"><span class="mono">DEV-86420089</span><span><span class="status-dot upgrading">升级</span></span><span>v3.4.1</span><span>2m</span></div>
  <div class="vt-row"><span class="mono">DEV-86420112</span><span><span class="status-dot offline">离线</span></span><span>v3.3.8</span><span>12m</span></div>
  <div class="vt-row"><span class="mono">DEV-86420144</span><span><span class="status-dot fault">故障</span></span><span>v3.4.0</span><span>1h</span></div>
  <div class="vt-foot">已渲染 50 / 共 86,420 行 · 滚动加载</div>
</div>
<div class="eco-warn">⚠ 仅视觉示意 · 实际由 useVirtualizer 接管 DOM</div>
    </div>

    <!-- 7. SchemaForm -->
    <div class="eco-card">
<div class="eco-h"><div class="eco-num">07</div><div class="eco-t">SchemaForm · JSON Schema 表单</div></div>
<div class="eco-use">OTA 任务参数动态配置 · 不同型号策略表单 · 数据采集规则</div>
<div class="eco-pkg"><code>@rjsf/antd</code> + <code>@rjsf/validator-ajv8</code><span class="eco-pkg-note">JSON Schema → antd 表单一键映射</span></div>
<div class="eco-mock sf-mock">
  <div class="sf-l">
    <div class="sf-key">"timeout":</div>
    <div class="sf-val">{ type: "number", min: 30 }</div>
    <div class="sf-key">"retry":</div>
    <div class="sf-val">{ enum: ["once", "thrice"] }</div>
  </div>
  <div class="sf-r">
    <div class="sf-row"><label>超时(秒)</label><div class="sf-input">60</div></div>
    <div class="sf-row"><label>重试策略</label><div class="sf-input">尝试 3 次 ▾</div></div>
    <div class="sf-row"><div class="sf-btn">提交</div></div>
  </div>
</div>
<div class="eco-warn">⚠ 仅视觉示意 · Schema 改了 UI 自动更新</div>
    </div>

    <!-- 8. CodeEditor -->
    <div class="eco-card">
<div class="eco-h"><div class="eco-num">08</div><div class="eco-t">CodeEditor · 代码编辑器</div></div>
<div class="eco-use">OTA 升级脚本 · 自定义规则 · 配置文件预览</div>
<div class="eco-pkg"><code>@monaco-editor/react</code>(VS Code 引擎)<span class="eco-pkg-note">语法高亮 · IntelliSense · diff view</span></div>
<div class="eco-mock code-mock">
  <div class="cm-row"><span class="cm-num">1</span><span class="cm-key">{</span></div>
  <div class="cm-row"><span class="cm-num">2</span>  <span class="cm-prop">"version"</span>: <span class="cm-str">"3.4.2"</span>,</div>
  <div class="cm-row"><span class="cm-num">3</span>  <span class="cm-prop">"targets"</span>: [</div>
  <div class="cm-row"><span class="cm-num">4</span>    <span class="cm-str">"DEV-864200*"</span>,</div>
  <div class="cm-row"><span class="cm-num">5</span>    <span class="cm-str">"DEV-865*"</span></div>
  <div class="cm-row"><span class="cm-num">6</span>  ],</div>
  <div class="cm-row sel"><span class="cm-num">7</span>  <span class="cm-prop">"strategy"</span>: <span class="cm-str">"rolling"</span><span class="cm-cursor">|</span></div>
</div>
<div class="eco-warn">⚠ 仅视觉示意 · loader 必须自托管,不走 CDN</div>
    </div>

    <!-- 9. QRCode -->
    <div class="eco-card">
<div class="eco-h"><div class="eco-num">09</div><div class="eco-t">QRCode · 二维码</div></div>
<div class="eco-use">设备激活码 · 配置文件分享 · 扫码绑定</div>
<div class="eco-pkg"><code>qrcode.react</code><span class="eco-pkg-note">仅 4 KB · SVG / Canvas 双输出 · logo 嵌入</span></div>
<div class="eco-mock qr-mock">
  <div class="qr-frame">
    <svg viewBox="0 0 80 80" style="width:88px;height:88px">
      <rect width="80" height="80" fill="white"/>
      <g fill="#1F2937">
        <rect x="4" y="4" width="20" height="20"/><rect x="56" y="4" width="20" height="20"/><rect x="4" y="56" width="20" height="20"/>
        <rect x="9" y="9" width="10" height="10" fill="white"/><rect x="61" y="9" width="10" height="10" fill="white"/><rect x="9" y="61" width="10" height="10" fill="white"/>
        <rect x="11" y="11" width="6" height="6"/><rect x="63" y="11" width="6" height="6"/><rect x="11" y="63" width="6" height="6"/>
        <rect x="28" y="6" width="3" height="3"/><rect x="34" y="6" width="3" height="3"/><rect x="40" y="6" width="3" height="3"/><rect x="46" y="6" width="3" height="3"/>
        <rect x="28" y="12" width="3" height="3"/><rect x="40" y="12" width="3" height="3"/><rect x="46" y="12" width="3" height="3"/>
        <rect x="6" y="28" width="3" height="3"/><rect x="12" y="28" width="3" height="3"/><rect x="22" y="28" width="3" height="3"/>
        <rect x="28" y="28" width="3" height="3"/><rect x="34" y="28" width="3" height="3"/><rect x="46" y="28" width="3" height="3"/>
        <rect x="6" y="34" width="3" height="3"/><rect x="22" y="34" width="3" height="3"/><rect x="34" y="34" width="3" height="3"/><rect x="40" y="34" width="3" height="3"/>
        <rect x="28" y="40" width="3" height="3"/><rect x="46" y="40" width="3" height="3"/><rect x="58" y="40" width="3" height="3"/><rect x="64" y="40" width="3" height="3"/>
        <rect x="6" y="46" width="3" height="3"/><rect x="34" y="46" width="3" height="3"/><rect x="40" y="46" width="3" height="3"/><rect x="52" y="46" width="3" height="3"/><rect x="64" y="46" width="3" height="3"/>
        <rect x="28" y="52" width="3" height="3"/><rect x="40" y="52" width="3" height="3"/><rect x="64" y="52" width="3" height="3"/>
        <rect x="34" y="58" width="3" height="3"/><rect x="46" y="58" width="3" height="3"/><rect x="58" y="58" width="3" height="3"/>
        <rect x="40" y="64" width="3" height="3"/><rect x="52" y="64" width="3" height="3"/><rect x="64" y="64" width="3" height="3"/>
        <rect x="34" y="70" width="3" height="3"/><rect x="46" y="70" width="3" height="3"/>
      </g>
      <rect x="33" y="33" width="14" height="14" fill="white"/>
      <rect x="34" y="34" width="12" height="12" fill="#0052CC"/>
      <text x="40" y="44" fill="white" font-size="8" font-family="Inter" text-anchor="middle" font-weight="700">A</text>
    </svg>
  </div>
  <div class="qr-info">
    <div class="qr-label">激活码 · DEV-86420075</div>
    <div class="qr-meta">128 × 128 · ECC Level M</div>
    <div class="qr-meta">有效期：48 小时</div>
  </div>
</div>
<div class="eco-warn">⚠ 仅视觉示意 · 中央 logo 用 imageSettings</div>
    </div>

    <!-- 10. ExportTools -->
    <div class="eco-card">
<div class="eco-h"><div class="eco-num">10</div><div class="eco-t">ExportTools · 导出工具</div></div>
<div class="eco-use">设备列表导出 CSV/Excel · 告警报表 PDF · 大批量分片导出</div>
<div class="eco-pkg"><code>papaparse</code>(CSV) · <code>xlsx</code>(Excel) · <code>@react-pdf/renderer</code>(PDF)<span class="eco-pkg-note">浏览器端纯前端导出 · 不走服务端</span></div>
<div class="eco-mock export-mock">
  <div class="ex-tabs"><span class="ex-tab act">CSV</span><span class="ex-tab">Excel</span><span class="ex-tab">PDF</span></div>
  <div class="ex-fields">
    <label class="ex-chk"><span class="cb checked"></span>SN</label>
    <label class="ex-chk"><span class="cb checked"></span>状态</label>
    <label class="ex-chk"><span class="cb checked"></span>固件版本</label>
    <label class="ex-chk"><span class="cb"></span>IP 地址</label>
    <label class="ex-chk"><span class="cb"></span>所属机构</label>
  </div>
  <div class="ex-progress"><div class="ex-bar" style="width:62%"></div></div>
  <div class="ex-meta">已处理 7,742 / 共 12,486 行 · 预计 8 秒</div>
</div>
<div class="eco-warn">⚠ 仅视觉示意 · 大数据用 streaming write 避免 OOM</div>
    </div>
  </div>
</section>
</div>
`;
