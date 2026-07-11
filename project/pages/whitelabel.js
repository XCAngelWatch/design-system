/* AngelWatch Design System — page: whitelabel */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["whitelabel"] = `
<div class="content">
<section class="section" id="whitelabel">
<p class="section-eyebrow"><span data-i18n="whitelabel:t001">工程落地 · 白标 / 多租户</span></p>
<h2><span data-i18n="whitelabel:t002">白标与租户主题 White-label</span></h2>
<p class="lede"><span data-i18n="whitelabel:t003">企业 TMS 必须支持租户级品牌定制：主色、Logo、登录背景、ICP 文案、产品名等可被租户接管，但语义色 / 间距 / 字号 / 圆角 / 阴影 / 动效曲线由设计系统锁定，租户禁止覆盖。覆盖通过 antd v6</span> <code>ConfigProvider.theme</code> <span data-i18n="whitelabel:t004">注入。</span></p>
<div class="subsection">
<h3><span data-i18n="whitelabel:t005">可覆盖 token · 租户允许配置</span></h3>
<div class="surface" style="padding:0;overflow:hidden">
<table class="tech-table">
<thead>
<tr><th style="width:180px"><span data-i18n="whitelabel:t006">字段</span></th><th style="width:200px"><span data-i18n="whitelabel:t007">antd v6 token 路径</span></th><th style="width:120px"><span data-i18n="whitelabel:t008">默认值</span></th><th><span data-i18n="whitelabel:t009">说明</span></th></tr>
</thead>
<tbody>
<tr><td><span data-i18n="whitelabel:t010">主色</span></td><td><code>token.colorPrimary</code></td><td>#165DFF</td><td><span data-i18n="whitelabel:t011">派生 hover/active/light，色相单值即可</span></td></tr>
<tr><td><span data-i18n="whitelabel:t012">产品名</span></td><td><code>app.productName</code></td><td>AngelWatch</td><td><span data-i18n="whitelabel:t013">侧栏 brand-name + 浏览器 title</span></td></tr>
<tr><td><span data-i18n="whitelabel:t014">产品副标题</span></td><td><code>app.productSubtitle</code></td><td>Device Management System</td><td><span data-i18n="whitelabel:t015">登录页 + 侧栏 small 文案</span></td></tr>
<tr><td>Home Logo</td><td><code>app.logo.home</code></td><td>angle.png</td><td><span data-i18n="whitelabel:t016">登录页浮层 / 顶栏</span></td></tr>
<tr><td>Login Box Logo</td><td><code>app.logo.loginBox</code></td><td>(empty)</td><td><span data-i18n="whitelabel:t017">登录卡内置图标，空则降级文字</span></td></tr>
<tr><td>Sidebar Expanded</td><td><code>app.logo.expanded</code></td><td>all_angle.png</td><td><span data-i18n="whitelabel:t018">侧栏展开态 logo（含字母）</span></td></tr>
<tr><td>Sidebar Collapsed</td><td><code>app.logo.collapsed</code></td><td>angle.png</td><td><span data-i18n="whitelabel:t019">侧栏折叠态 logo（icon-only）</span></td></tr>
<tr><td>Favicon</td><td><code>app.favicon</code></td><td>favicon.ico</td><td><span data-i18n="whitelabel:t020">注入到 &lt;link rel="icon"&gt;</span></td></tr>
<tr><td><span data-i18n="whitelabel:t021">Login 背景图</span></td><td><code>app.loginBackground</code></td><td>login_banner.png</td><td><span data-i18n="whitelabel:t022">登录页右侧或全屏底图</span></td></tr>
<tr><td><span data-i18n="whitelabel:t023">ICP 文案</span></td><td><code>app.icp</code></td><td>Copyright 2026 XC TECH...</td><td><span data-i18n="whitelabel:t024">登录页 footer + 控制台底栏</span></td></tr>
<tr><td><span data-i18n="whitelabel:t025">操作手册 URL</span></td><td><code>app.manualUrl</code></td><td><span data-i18n="whitelabel:t026">(空)</span></td><td><span data-i18n="whitelabel:t027">顶栏帮助菜单跳转</span></td></tr>
</tbody>
</table>
</div>
</div>
<div class="subsection">
<h3><span data-i18n="whitelabel:t028">禁止覆盖 token · 设计系统锁定</span></h3>
<div class="surface" style="padding:0;overflow:hidden">
<table class="tech-table">
<thead>
<tr><th style="width:180px"><span data-i18n="whitelabel:t029">类别</span></th><th style="width:240px"><span data-i18n="whitelabel:t030">代表字段</span></th><th><span data-i18n="whitelabel:t031">原因</span></th></tr>
</thead>
<tbody>
<tr><td><span data-i18n="whitelabel:t032">语义色</span></td><td>colorSuccess / colorWarning / colorError / colorInfo</td><td><span data-i18n="whitelabel:t033">状态语义全局统一，租户改色破坏 WCAG 与色盲安全编码</span></td></tr>
<tr><td><span data-i18n="whitelabel:t034">间距</span></td><td>--aw-space-* / paddingXS..XL</td><td><span data-i18n="whitelabel:t035">密度与栅格强相关，定制会破坏多语种长文案布局</span></td></tr>
<tr><td><span data-i18n="whitelabel:t036">字号 · 字体</span></td><td>fontSize* / fontFamily / lineHeight*</td><td><span data-i18n="whitelabel:t037">Inter + Source Han Sans CN 自托管，与设备 DPI 标定一致</span></td></tr>
<tr><td><span data-i18n="whitelabel:t038">圆角</span></td><td>borderRadius / -SM / -LG</td><td><span data-i18n="whitelabel:t039">6/4/8 三档与组件视觉打包，单点改动破坏一致性</span></td></tr>
<tr><td><span data-i18n="whitelabel:t040">阴影</span></td><td>boxShadow / Secondary / Tertiary</td><td><span data-i18n="whitelabel:t041">层级语义（subtle / medium / elevation）固定</span></td></tr>
<tr><td><span data-i18n="whitelabel:t042">动效曲线</span></td><td>motionEaseInOut / motionDuration*</td><td><span data-i18n="whitelabel:t043">cubic-bezier(0.34,0.69,0.1,1) + 120/200/320ms 三档</span></td></tr>
</tbody>
</table>
</div>
</div>
<div class="subsection">
<h3><span data-i18n="whitelabel:t044">antd v6 注入位置</span></h3>
<div class="surface" style="font-family:var(--aw-font-mono);font-size:12.5px;line-height:1.7;color:var(--aw-text-2)">
<div style="margin-bottom:6px;color:var(--aw-text-3)">// app/providers/TenantThemeProvider.tsx</div>
<div>&lt;ConfigProvider</div>
<div style="padding-left:20px">theme={{</div>
<div style="padding-left:40px"><span style="color:var(--aw-success)"><span data-i18n="whitelabel:t045">// 可覆盖：仅 colorPrimary 与少量组件 token</span></span></div>
<div style="padding-left:40px">token: { colorPrimary: tenant.primary ?? <span style="color:var(--aw-primary)">'#165DFF'</span> },</div>
<div style="padding-left:40px">components: { Layout: { siderBg: <span style="color:var(--aw-primary)">'#FFFFFF'</span> } }</div>
<div style="padding-left:20px">}}</div>
<div>&gt;</div>
<div style="padding-left:20px">&lt;App&gt; ... &lt;/App&gt;</div>
<div>&lt;/ConfigProvider&gt;</div>
</div>
<div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="whitelabel:t046">分层原则：</span></strong><span data-i18n="whitelabel:t047">租户配置只到达</span> <code>theme.token.colorPrimary</code> <span data-i18n="whitelabel:t048">与</span> <code>theme.components.*.bg/borderColor</code> <span data-i18n="whitelabel:t049">等"皮肤层"。Seed → Map（派生算法）由 antd 内核 + design-system 一并锁定，租户不可见。</span></div></div>
</div>
<div class="subsection">
<h3><span data-i18n="whitelabel:t050">覆盖时机 · 加载链路</span></h3>
<div class="surface" style="font-size:13px;line-height:1.85;color:var(--aw-text-2)">
<div><b style="color:var(--aw-text-1)"><span data-i18n="whitelabel:t051">① 登录前（域名解析）</span></b> <span data-i18n="whitelabel:t052">— 通过</span> <code>window.location.hostname</code> <span data-i18n="whitelabel:t053">反查租户公开配置（logo / 主色 / 背景），用于美化登录页。失败降级到默认主题，不阻塞登录。</span></div>
<div><b style="color:var(--aw-text-1)"><span data-i18n="whitelabel:t054">② 登录后（用户态）</span></b> <span data-i18n="whitelabel:t055">— 用户登录成功后从后端拉</span> <code>/api/tenant/theme</code><span data-i18n="whitelabel:t056">，覆写</span> <code>ConfigProvider</code><span data-i18n="whitelabel:t057">。该接口必须在 5xx 或超时（&gt;2s）时回退默认。</span></div>
<div><b style="color:var(--aw-text-1)"><span data-i18n="whitelabel:t058">③ 切换租户</span></b> <span data-i18n="whitelabel:t059">— 多租户用户切换 tenant 时整页 reload，避免 antd 在运行时换 token 引发的重排闪烁。</span></div>
</div>
<div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong><span data-i18n="whitelabel:t060">降级要求：</span></strong><span data-i18n="whitelabel:t061">租户接口必须有 ETag / 304 缓存与 stale-while-revalidate；离线场景下读 IndexedDB 中的上次成功值；首次安装无缓存且接口失败 → 用 default theme，不显示空白。</span></div></div>
</div>
<div class="subsection">
<h3><span data-i18n="whitelabel:t062">双租户对比 · 同组件不同主色</span></h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
<div class="surface" style="--aw-primary-local:#165DFF;background:var(--aw-bg)">
<div style="font-size:11px;letter-spacing:0.6px;text-transform:uppercase;color:var(--aw-text-3);font-weight:600;margin-bottom:8px"><span data-i18n="whitelabel:t063">租户 A · AngelWatch 默认</span></div>
<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
<div style="width:32px;height:32px;border-radius:6px;background:#165DFF;color:white;display:grid;place-items:center;font-weight:700">A</div>
<div style="font-size:14px;font-weight:600">AngelWatch<div style="font-size:11px;font-weight:400;color:var(--aw-text-3);margin-top:2px">Device Management System</div></div>
</div>
<div style="display:flex;gap:8px;flex-wrap:wrap">
<button class="btn" style="background:#165DFF;border-color:#165DFF;color:white"><span data-i18n="whitelabel:t064">主操作</span></button>
<button class="btn"><span data-i18n="whitelabel:t065">次操作</span></button>
<span class="tag-meta" style="background:#E8F3FF;color:#165DFF;font-family:inherit;font-weight:500"><span data-i18n="whitelabel:t066">在线</span></span>
</div>
</div>
<div class="surface" style="background:var(--aw-bg)">
<div style="font-size:11px;letter-spacing:0.6px;text-transform:uppercase;color:var(--aw-text-3);font-weight:600;margin-bottom:8px"><span data-i18n="whitelabel:t067">租户 B · Acme 定制</span></div>
<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
<div style="width:32px;height:32px;border-radius:6px;background:#7B2CBF;color:white;display:grid;place-items:center;font-weight:700">M</div>
<div style="font-size:14px;font-weight:600">Acme MDM<div style="font-size:11px;font-weight:400;color:var(--aw-text-3);margin-top:2px">Mobile Device Manager</div></div>
</div>
<div style="display:flex;gap:8px;flex-wrap:wrap">
<button class="btn" style="background:#7B2CBF;border-color:#7B2CBF;color:white"><span data-i18n="whitelabel:t068">主操作</span></button>
<button class="btn"><span data-i18n="whitelabel:t069">次操作</span></button>
<span class="tag-meta" style="background:#F2E5FF;color:#7B2CBF;font-family:inherit;font-weight:500"><span data-i18n="whitelabel:t070">在线</span></span>
</div>
</div>
</div>
<div style="margin-top:8px;font-size:12px;color:var(--aw-text-3);font-family:var(--aw-font-mono)"><span data-i18n="whitelabel:t071">两个租户共享：圆角 6 · 字号 14 · 间距 12 · 状态语义。仅主色被替换，其他视觉锁定。</span></div>
</div>
<div class="subsection">
<h3><span data-i18n="whitelabel:t072">反例 · 不允许的"租户定制"</span></h3>
<div class="alert error"><div class="ico">×</div><div class="content"><strong><span data-i18n="whitelabel:t073">租户要求把"删除"按钮改成蓝色</span></strong> <span data-i18n="whitelabel:t074">— 拒绝。语义色（danger）锁定，否则破坏全站危险操作识别。改方向：可在租户配置中把"删除"动作降级（如禁用单条删除，仅留批量），不改色。</span></div></div>
<div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="whitelabel:t075">租户要求圆角全改成 0</span></strong> <span data-i18n="whitelabel:t076">— 拒绝。圆角与阴影、字号、行高有视觉协调，单点改动会破坏一致性。如确有需求走 design-system 内 PR 评审。</span></div></div>
</div>
<div class="subsection">
<h3><span data-i18n="whitelabel:t077">涉及变量</span></h3>
<div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
<div><b style="color:var(--aw-text-1)"><span data-i18n="whitelabel:t078">租户层（runtime 注入）：</span></b>colorPrimary · app.logo.* · app.loginBackground · app.icp · app.manualUrl · app.productName · app.productSubtitle · app.favicon</div>
<div style="margin-top:6px"><b style="color:var(--aw-text-1)"><span data-i18n="whitelabel:t079">系统层（设计系统锁定）：</span></b><span data-i18n="whitelabel:t080">所有 --aw-* 语义色 · --aw-space-* · --aw-radius-* · --aw-shadow-* · --aw-dur-* · --aw-ease · --aw-font · --aw-font-mono</span></div>
</div>
</div>
<div class="subsection">
<h3><span data-i18n="whitelabel:t081">租户白标配置 schema</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="whitelabel:t082">租户配置分四类。图片资源自托管,禁外部 CDN/S3;密钥由后端管理,禁前端硬编码。</span></p>
<div class="bp-grid">
<div class="bp-card"><h4><span data-i18n="whitelabel:t083">① 品牌资源</span></h4><p><span data-i18n="whitelabel:t084">title / subtitle / homeLogo / loginBoxLogo / background / titleIcon / expandingMenuBar / closingMenuBar / imgUrl。全部自托管,禁外部 CDN/S3。</span></p></div>
<div class="bp-card"><h4><span data-i18n="whitelabel:t085">② 运行开关</span></h4><p><span data-i18n="whitelabel:t086">validateCode / passwordEnc(后端管,禁前端硬编码)/ register / connectSync / domainAutoTenant / websocket / dynamicCodeCache / whiteList / whiteTagList。</span></p></div>
<div class="bp-card"><h4><span data-i18n="whitelabel:t087">③ 登录 client</span></h4><p><span data-i18n="whitelabel:t088">formLoginClient / smsLoginClient / socialLoginClient —— 决定登录页可用方式,按租户启用。</span></p></div>
<div class="bp-card"><h4><span data-i18n="whitelabel:t089">④ 首页 / 菜单 props</span></h4><p><span data-i18n="whitelabel:t090">fistPage(label/value/params/query/group/close)/ menu.props(label/path/icon/children/id) —— 租户默认首页与可见菜单树。</span></p></div>
</div>
<p style="font-size:12px;color:var(--aw-text-3);margin:12px 0 0"><span data-i18n="whitelabel:t091">所有图片资源必须自托管(品牌 logo 仍引 CDN 属历史遗留,新内容不要再加)。license ∈ MIT / Apache-2.0 / BSD / ISC。</span></p>
</div>
</section>
</div>
`;
