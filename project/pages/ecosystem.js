/* AngelWatch Design System — page: ecosystem (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["ecosystem"] = `
<div class="content">
<!-- ECOSYSTEM INTEGRATIONS -->
<section class="section" id="ecosystem">
<p class="section-eyebrow"><span data-i18n="ecosystem:t001">工程落地 · 生态集成</span></p>
<h2><span data-i18n="ecosystem:t002">生态库集成 Ecosystem</span></h2>
<p class="lede"><span data-i18n="ecosystem:t003">本页展示 10 类复杂场景的设计参考。当前消费者已使用 TMSChart 和 AntD AppTable；其余生态卡均为待评估候选。共用目标是</span> <b><span data-i18n="ecosystem:t004">套用 design tokens</span></b><span data-i18n="ecosystem:t005">。每张卡展示的是</span> <b><span data-i18n="ecosystem:t006">套色后的视觉示意</span></b><span data-i18n="ecosystem:t007">；采用候选前须确认产品需求、锁定版本、许可证、无障碍和离线资源，不表示已经安装或获准使用。</span></p>
<div class="eco-grid">
<!-- 1. RealtimeChart -->
<div class="eco-card">
<div class="eco-h"><div class="eco-num">01</div><div class="eco-t"><span data-i18n="ecosystem:t008">RealtimeChart · 实时图表</span></div></div>
<div class="eco-use"><span data-i18n="ecosystem:t009">Dashboard 趋势图 · OTA 推送进度大盘 · 网络流量监控</span></div>
<div class="eco-pkg"><code>echarts</code> + <code>echarts-for-react</code><span class="eco-pkg-note"><span data-i18n="ecosystem:t010">ECharts v6 · Apache 2.0 · 业务统一通过</span> <code>&lt;TMSChart /&gt;</code> <span data-i18n="ecosystem:t011">包装层调用，详见</span> <a href="#/charts" style="color: var(--aw-primary-text)"><span data-i18n="ecosystem:t012">Charts 页</span></a></span></div>
<div class="eco-mock">
<svg preserveaspectratio="none" style="width:100%;height:100%" viewbox="0 0 360 130">
<defs><lineargradient id="eg1" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#165DFF" stop-opacity="0.32"></stop><stop offset="100%" stop-color="#165DFF" stop-opacity="0"></stop></lineargradient></defs>
<line stroke="#F0F0F0" stroke-dasharray="3 3" x1="0" x2="360" y1="40" y2="40"></line>
<line stroke="#F0F0F0" stroke-dasharray="3 3" x1="0" x2="360" y1="80" y2="80"></line>
<path d="M0 95 L40 80 L80 70 L120 60 L160 65 L200 50 L240 40 L280 35 L320 25 L360 20 L360 130 L0 130 Z" fill="url(#eg1)"></path>
<path d="M0 95 L40 80 L80 70 L120 60 L160 65 L200 50 L240 40 L280 35 L320 25 L360 20" fill="none" stroke="#165DFF" stroke-width="2"></path>
<circle cx="320" cy="25" fill="#165DFF" r="3"></circle>
<text data-i18n="ecosystem:t013" fill="#6B7280" font-family="Inter" font-size="9" x="6" y="14">激活设备 · 近 30 日</text>
<text fill="#9CA3AF" font-family="Inter" font-size="8" x="6" y="124">04-01</text>
<text fill="#9CA3AF" font-family="Inter" font-size="8" x="320" y="124">04-30</text>
</svg>
</div>
<div class="eco-warn"><span data-i18n="ecosystem:t014">⚠ 仅视觉示意 · 业务代码用 &lt;TMSChart option={...} /&gt;，禁止直接 import echarts-for-react</span></div>
</div>
<!-- 2. DeviceMap -->
<div class="eco-card">
<div class="eco-h"><div class="eco-num">02</div><div class="eco-t"><span data-i18n="ecosystem:t015">DeviceMap · 设备地图</span></div></div>
<div class="eco-use"><span data-i18n="ecosystem:t016">全国设备分布 · 实时心跳热力 · 故障点标记 · 聚合气泡</span></div>
<div class="eco-pkg"><code>react-leaflet</code> + <code>leaflet.markercluster</code> + <code>leaflet.heat</code><span class="eco-pkg-note"><span data-i18n="ecosystem:t017">候选地图生态；瓦片服务与使用条款须另行确认</span></span></div>
<div class="eco-mock map-mock">
<svg style="width:100%;height:100%" viewbox="0 0 360 130">
<rect fill="#F5F7FA" height="130" width="360"></rect>
<path d="M40 40 Q80 30 130 50 L160 70 L200 60 L260 90 L300 80 L320 100" fill="none" stroke="#D9D9D9" stroke-width="1"></path>
<path d="M60 70 Q100 80 160 90 L210 100 L260 110" fill="none" stroke="#D9D9D9" stroke-width="1"></path>
<circle cx="100" cy="50" fill="#165DFF" fill-opacity="0.85" r="14"></circle><text fill="white" font-family="Inter" font-size="9" font-weight="600" text-anchor="middle" x="100" y="54">328</text>
<circle cx="180" cy="80" fill="#165DFF" fill-opacity="0.85" r="18"></circle><text fill="white" font-family="Inter" font-size="10" font-weight="600" text-anchor="middle" x="180" y="84">1.2k</text>
<circle cx="270" cy="60" fill="#165DFF" fill-opacity="0.85" r="10"></circle><text fill="white" font-family="Inter" font-size="8" font-weight="600" text-anchor="middle" x="270" y="63">86</text>
<circle cx="240" cy="100" fill="#CF1322" r="6"></circle>
<circle cx="140" cy="100" fill="#CF1322" r="6"></circle>
<circle cx="310" cy="40" fill="#D48806" r="5"></circle>
<rect fill="white" height="28" rx="4" stroke="#E5E7EB" width="74" x="282" y="6"></rect>
<circle cx="294" cy="14" fill="#165DFF" r="3"></circle><text data-i18n="ecosystem:t018" fill="#4B5563" font-family="Inter" font-size="8" x="302" y="17">在线</text>
<circle cx="294" cy="26" fill="#CF1322" r="3"></circle><text data-i18n="ecosystem:t019" fill="#4B5563" font-family="Inter" font-size="8" x="302" y="29">故障</text>
</svg>
</div>
<div class="eco-warn"><span data-i18n="ecosystem:t020">候选示意 · 地图服务、离线瓦片与授权须核验，不默认连接外部服务</span></div>
</div>
<!-- 3. RemoteTerminal -->
<div class="eco-card">
<div class="eco-h"><div class="eco-num">03</div><div class="eco-t"><span data-i18n="ecosystem:t021">RemoteTerminal · 远程终端</span></div></div>
<div class="eco-use"><span data-i18n="ecosystem:t022">浏览器 SSH 到设备 shell · 远程 adb 命令 · 故障诊断</span></div>
<div class="eco-pkg"><code>@xterm/xterm</code> + <code>react-xtermjs</code> + <code>@xterm/addon-attach</code> <span data-i18n="ecosystem:t023">· WebSocket 桥接</span><span class="eco-pkg-note"><span data-i18n="ecosystem:t024">候选终端库；服务端桥接和权限需单独实现</span></span></div>
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
<div class="eco-warn"><span data-i18n="ecosystem:t025">候选示意 · 尚无已验证的 PTY 桥接实现</span></div>
</div>
<!-- 4. SortableTree -->
<div class="eco-card">
<div class="eco-h"><div class="eco-num">04</div><div class="eco-t"><span data-i18n="ecosystem:t026">SortableTree · 拖拽树</span></div></div>
<div class="eco-use"><span data-i18n="ecosystem:t027">菜单管理 · 机构层级调整 · 设备分组重排</span></div>
<div class="eco-pkg"><code>dnd-kit-sortable-tree</code><span data-i18n="ecosystem:t028">(基于</span> <code>@dnd-kit/core</code>)<span class="eco-pkg-note"><span data-i18n="ecosystem:t029">候选拖拽方案；键盘操作与读屏反馈需实测</span></span></div>
<div class="eco-mock tree-mock">
<div class="tn"><span class="th">▾</span><span data-i18n="ecosystem:t030">集团总部</span></div>
<div class="tn sub"><span class="th">▾</span><span data-i18n="ecosystem:t031">华东大区</span></div>
<div class="tn sub2 dragging"><span class="th">⋮⋮</span><span data-i18n="ecosystem:t032">上海运营中心</span> <span class="ghost"><span data-i18n="ecosystem:t033">移动到 →</span></span></div>
<div class="tn sub2"><span class="th">○</span><span data-i18n="ecosystem:t034">南京营业厅</span></div>
<div class="tn sub drop-target"><span class="th">▾</span><span data-i18n="ecosystem:t035">华北大区</span><span class="drop-line"></span></div>
<div class="tn sub2"><span class="th">○</span><span data-i18n="ecosystem:t036">北京旗舰店</span></div>
</div>
<div class="eco-warn"><span data-i18n="ecosystem:t037">候选示意 · 当前未安装；具体组件与 API 以选定版本文档为准</span></div>
</div>
<!-- 5. FlowEditor -->
<div class="eco-card">
<div class="eco-h"><div class="eco-num">05</div><div class="eco-t"><span data-i18n="ecosystem:t038">FlowEditor · 流程编辑器</span></div></div>
<div class="eco-use"><span data-i18n="ecosystem:t039">OTA 推送策略可视化 · 设备拓扑图 · 自动化规则编排</span></div>
<div class="eco-pkg"><code>@xyflow/react</code><span data-i18n="ecosystem:t040">(原 react-flow)</span><span class="eco-pkg-note"><span data-i18n="ecosystem:t041">候选节点编辑器；产品范围与交互需先确认</span></span></div>
<div class="eco-mock flow-mock">
<svg style="width:100%;height:100%" viewbox="0 0 360 130">
<rect fill="#FAFAFA" height="130" width="360"></rect>
<pattern height="14" id="flowdot" patternunits="userSpaceOnUse" width="14" x="0" y="0"><circle cx="1" cy="1" fill="#D9D9D9" r="0.8"></circle></pattern>
<rect fill="url(#flowdot)" height="130" width="360"></rect>
<rect fill="white" height="34" rx="6" stroke="#165DFF" stroke-width="1.5" width="80" x="20" y="48"></rect>
<text data-i18n="ecosystem:t042" fill="#165DFF" font-family="Inter" font-size="9" font-weight="600" text-anchor="middle" x="60" y="62">选择设备</text>
<text data-i18n="ecosystem:t043" fill="#6B7280" font-family="Inter" font-size="8" text-anchor="middle" x="60" y="74">1,284 台</text>
<path d="M100 65 L138 65" fill="none" marker-end="url(#flowarr)" stroke="#A5C9FF" stroke-width="1.5"></path>
<rect fill="white" height="34" rx="6" stroke="#165DFF" stroke-width="1.5" width="80" x="140" y="48"></rect>
<text data-i18n="ecosystem:t044" fill="#165DFF" font-family="Inter" font-size="9" font-weight="600" text-anchor="middle" x="180" y="62">选择固件包</text>
<text fill="#6B7280" font-family="Inter" font-size="8" text-anchor="middle" x="180" y="74">v3.5.0</text>
<path d="M220 65 L258 65" fill="none" marker-end="url(#flowarr)" stroke="#A5C9FF" stroke-width="1.5"></path>
<rect fill="#E8F3FF" height="34" rx="6" stroke="#165DFF" stroke-width="1.5" width="80" x="260" y="48"></rect>
<text data-i18n="ecosystem:t045" fill="#165DFF" font-family="Inter" font-size="9" font-weight="600" text-anchor="middle" x="300" y="62">推送策略</text>
<text data-i18n="ecosystem:t046" fill="#165DFF" font-family="Inter" font-size="8" font-weight="600" text-anchor="middle" x="300" y="74">02:00 启动</text>
<defs><marker id="flowarr" markerheight="5" markerwidth="5" orient="auto" refx="6" refy="5" viewbox="0 0 10 10"><path d="M 0 0 L 8 5 L 0 10 z" fill="#A5C9FF"></path></marker></defs>
</svg>
</div>
<div class="eco-warn"><span data-i18n="ecosystem:t047">候选示意 · 自定义节点与状态管理尚未接入</span></div>
</div>
<!-- 6. VirtualTable -->
<div class="eco-card">
<div class="eco-h"><div class="eco-num">06</div><div class="eco-t"><span data-i18n="ecosystem:t048">VirtualTable · 虚拟表格</span></div></div>
<div class="eco-use"><span data-i18n="ecosystem:t049">大数据设备列表流畅滚动 · 列冻结 · 列拖拽宽度</span></div>
<div class="eco-pkg"><code>antd Table virtual</code><span class="eco-pkg-note"><span data-i18n="ecosystem:t050">当前 AppTable 使用 AntD；启用 virtual 时 x/y 须为数值</span></span></div>
<div class="eco-mock vt-mock">
<div class="vt-head"><span>SN</span><span><span data-i18n="ecosystem:t051">状态</span></span><span><span data-i18n="ecosystem:t052">固件</span></span><span><span data-i18n="ecosystem:t053">心跳</span></span></div>
<div class="vt-row"><span class="mono">DEV-86420075</span><span><span class="status-dot online"><span data-i18n="ecosystem:t054">在线</span></span></span><span>v3.4.2</span><span><span data-i18n="ecosystem:t055">刚刚</span></span></div>
<div class="vt-row"><span class="mono">DEV-86420089</span><span><span class="status-dot upgrading"><span data-i18n="ecosystem:t056">升级</span></span></span><span>v3.4.1</span><span>2m</span></div>
<div class="vt-row"><span class="mono">DEV-86420112</span><span><span class="status-dot offline"><span data-i18n="ecosystem:t057">离线</span></span></span><span>v3.3.8</span><span>12m</span></div>
<div class="vt-row"><span class="mono">DEV-86420144</span><span><span class="status-dot fault"><span data-i18n="ecosystem:t058">故障</span></span></span><span>v3.4.0</span><span>1h</span></div>
<div class="vt-foot"><span data-i18n="ecosystem:t059">已渲染 50 / 共 86,420 行 · 滚动加载</span></div>
</div>
<div class="eco-warn"><span data-i18n="ecosystem:t060">视觉示意 · 虚拟化沿用 AntD Table virtual，不引入其他表格内核</span></div>
</div>
<!-- 7. SchemaForm -->
<div class="eco-card">
<div class="eco-h"><div class="eco-num">07</div><div class="eco-t"><span data-i18n="ecosystem:t061">SchemaForm · JSON Schema 表单</span></div></div>
<div class="eco-use"><span data-i18n="ecosystem:t062">OTA 任务参数动态配置 · 不同型号策略表单 · 数据采集规则</span></div>
<div class="eco-pkg"><code>@rjsf/antd</code> + <code>@rjsf/validator-ajv8</code><span class="eco-pkg-note"><span data-i18n="ecosystem:t063">候选 JSON Schema 表单；需核验字段、校验和无障碍映射</span></span></div>
<div class="eco-mock sf-mock">
<div class="sf-l">
<div class="sf-key">"timeout":</div>
<div class="sf-val">{ type: "number", min: 30 }</div>
<div class="sf-key">"retry":</div>
<div class="sf-val">{ enum: ["once", "thrice"] }</div>
</div>
<div class="sf-r">
<div class="sf-row"><label><span data-i18n="ecosystem:t064">超时(秒)</span></label><div class="sf-input">60</div></div>
<div class="sf-row"><label><span data-i18n="ecosystem:t065">重试策略</span></label><div class="sf-input"><span data-i18n="ecosystem:t066">尝试 3 次 ▾</span></div></div>
<div class="sf-row"><div class="sf-btn"><span data-i18n="ecosystem:t067">提交</span></div></div>
</div>
</div>
<div class="eco-warn"><span data-i18n="ecosystem:t068">候选示意 · Schema 变化需验证表单状态与校验行为</span></div>
</div>
<!-- 8. CodeEditor -->
<div class="eco-card">
<div class="eco-h"><div class="eco-num">08</div><div class="eco-t"><span data-i18n="ecosystem:t069">CodeEditor · 代码编辑器</span></div></div>
<div class="eco-use"><span data-i18n="ecosystem:t070">OTA 升级脚本 · 自定义规则 · 配置文件预览</span></div>
<div class="eco-pkg"><code>@monaco-editor/react</code><span data-i18n="ecosystem:t071">(VS Code 引擎)</span><span class="eco-pkg-note"><span data-i18n="ecosystem:t072">候选代码编辑器；按需加载并验证无障碍</span></span></div>
<div class="eco-mock code-mock">
<div class="cm-row"><span class="cm-num">1</span><span class="cm-key">{</span></div>
<div class="cm-row"><span class="cm-num">2</span> <span class="cm-prop">"version"</span>: <span class="cm-str">"3.4.2"</span>,</div>
<div class="cm-row"><span class="cm-num">3</span> <span class="cm-prop">"targets"</span>: [</div>
<div class="cm-row"><span class="cm-num">4</span> <span class="cm-str">"DEV-864200*"</span>,</div>
<div class="cm-row"><span class="cm-num">5</span> <span class="cm-str">"DEV-865*"</span></div>
<div class="cm-row"><span class="cm-num">6</span>  ],</div>
<div class="cm-row sel"><span class="cm-num">7</span> <span class="cm-prop">"strategy"</span>: <span class="cm-str">"rolling"</span><span class="cm-cursor">|</span></div>
</div>
<div class="eco-warn"><span data-i18n="ecosystem:t073">候选示意 · 引入后 loader 与 worker 必须自托管，不走 CDN</span></div>
</div>
<!-- 9. QRCode -->
<div class="eco-card">
<div class="eco-h"><div class="eco-num">09</div><div class="eco-t"><span data-i18n="ecosystem:t074">QRCode · 二维码</span></div></div>
<div class="eco-use"><span data-i18n="ecosystem:t075">设备激活码 · 配置文件分享 · 扫码绑定</span></div>
<div class="eco-pkg"><code>qrcode.react</code><span class="eco-pkg-note"><span data-i18n="ecosystem:t076">候选二维码组件；实际包体积与输出能力按锁定版本核验</span></span></div>
<div class="eco-mock qr-mock">
<div class="qr-frame">
<svg style="width:88px;height:88px" viewbox="0 0 80 80">
<rect fill="white" height="80" width="80"></rect>
<g fill="#1F2937">
<rect height="20" width="20" x="4" y="4"></rect><rect height="20" width="20" x="56" y="4"></rect><rect height="20" width="20" x="4" y="56"></rect>
<rect fill="white" height="10" width="10" x="9" y="9"></rect><rect fill="white" height="10" width="10" x="61" y="9"></rect><rect fill="white" height="10" width="10" x="9" y="61"></rect>
<rect height="6" width="6" x="11" y="11"></rect><rect height="6" width="6" x="63" y="11"></rect><rect height="6" width="6" x="11" y="63"></rect>
<rect height="3" width="3" x="28" y="6"></rect><rect height="3" width="3" x="34" y="6"></rect><rect height="3" width="3" x="40" y="6"></rect><rect height="3" width="3" x="46" y="6"></rect>
<rect height="3" width="3" x="28" y="12"></rect><rect height="3" width="3" x="40" y="12"></rect><rect height="3" width="3" x="46" y="12"></rect>
<rect height="3" width="3" x="6" y="28"></rect><rect height="3" width="3" x="12" y="28"></rect><rect height="3" width="3" x="22" y="28"></rect>
<rect height="3" width="3" x="28" y="28"></rect><rect height="3" width="3" x="34" y="28"></rect><rect height="3" width="3" x="46" y="28"></rect>
<rect height="3" width="3" x="6" y="34"></rect><rect height="3" width="3" x="22" y="34"></rect><rect height="3" width="3" x="34" y="34"></rect><rect height="3" width="3" x="40" y="34"></rect>
<rect height="3" width="3" x="28" y="40"></rect><rect height="3" width="3" x="46" y="40"></rect><rect height="3" width="3" x="58" y="40"></rect><rect height="3" width="3" x="64" y="40"></rect>
<rect height="3" width="3" x="6" y="46"></rect><rect height="3" width="3" x="34" y="46"></rect><rect height="3" width="3" x="40" y="46"></rect><rect height="3" width="3" x="52" y="46"></rect><rect height="3" width="3" x="64" y="46"></rect>
<rect height="3" width="3" x="28" y="52"></rect><rect height="3" width="3" x="40" y="52"></rect><rect height="3" width="3" x="64" y="52"></rect>
<rect height="3" width="3" x="34" y="58"></rect><rect height="3" width="3" x="46" y="58"></rect><rect height="3" width="3" x="58" y="58"></rect>
<rect height="3" width="3" x="40" y="64"></rect><rect height="3" width="3" x="52" y="64"></rect><rect height="3" width="3" x="64" y="64"></rect>
<rect height="3" width="3" x="34" y="70"></rect><rect height="3" width="3" x="46" y="70"></rect>
</g>
<rect fill="white" height="14" width="14" x="33" y="33"></rect>
<rect fill="#165DFF" height="12" width="12" x="34" y="34"></rect>
<text fill="white" font-family="Inter" font-size="8" font-weight="700" text-anchor="middle" x="40" y="44">A</text>
</svg>
</div>
<div class="qr-info">
<div class="qr-label"><span data-i18n="ecosystem:t077">激活码 · DEV-86420075</span></div>
<div class="qr-meta">128 × 128 · ECC Level M</div>
<div class="qr-meta"><span data-i18n="ecosystem:t078">有效期：48 小时</span></div>
</div>
</div>
<div class="eco-warn"><span data-i18n="ecosystem:t079">候选示意 · Logo 叠加需验证扫码成功率与资源来源</span></div>
</div>
<!-- 10. ExportTools -->
<div class="eco-card">
<div class="eco-h"><div class="eco-num">10</div><div class="eco-t"><span data-i18n="ecosystem:t080">ExportTools · 导出工具</span></div></div>
<div class="eco-use"><span data-i18n="ecosystem:t081">设备列表导出 CSV/Excel · 告警报表 PDF · 大批量分片导出</span></div>
<div class="eco-pkg"><code>papaparse</code>(CSV) · <code>xlsx</code>(Excel) · <code>@react-pdf/renderer</code>(PDF)<span class="eco-pkg-note"><span data-i18n="ecosystem:t082">候选导出方案；按数据量和权限评估服务端或浏览器端实现</span></span></div>
<div class="eco-mock export-mock">
<div class="ex-tabs"><span class="ex-tab act">CSV</span><span class="ex-tab">Excel</span><span class="ex-tab">PDF</span></div>
<div class="ex-fields">
<label class="ex-chk"><span class="cb checked"></span>SN</label>
<label class="ex-chk"><span class="cb checked"></span><span data-i18n="ecosystem:t083">状态</span></label>
<label class="ex-chk"><span class="cb checked"></span><span data-i18n="ecosystem:t084">固件版本</span></label>
<label class="ex-chk"><span class="cb"></span><span data-i18n="ecosystem:t085">IP 地址</span></label>
<label class="ex-chk"><span class="cb"></span><span data-i18n="ecosystem:t086">所属机构</span></label>
</div>
<div class="ex-progress"><div class="ex-bar" style="width:62%"></div></div>
<div class="ex-meta"><span data-i18n="ecosystem:t087">已处理 7,742 / 共 12,486 行 · 预计 8 秒</span></div>
</div>
<div class="eco-warn"><span data-i18n="ecosystem:t088">候选示意 · 大数据先评估服务端导出，浏览器方案须测内存与可取消性</span></div>
</div>
</div>
</section>
</div>
`;
