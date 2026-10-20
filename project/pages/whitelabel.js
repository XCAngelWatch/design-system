/* AngelWatch Design System — page: whitelabel */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["whitelabel"] = `
<div class="content">
<section class="section" id="whitelabel">
<p class="section-eyebrow"><span data-i18n="whitelabel:t001">工程落地 · 白标 / 多租户</span></p>
<h2><span data-i18n="whitelabel:t002">白标与租户主题 White-label</span></h2>
<p class="lede"><span data-i18n="whitelabel:t003">本页为租户品牌扩展候选，不是当前消费者既有能力。采用前须批准产品范围，并扩展主题构建器、机器契约和测试。品牌资源与业务开关不属于 AntD token；仅经核验的视觉值才映射到</span> <code>ConfigProvider.theme</code> <span data-i18n="whitelabel:t004">，且需同步自有 CSS 变量。</span></p>
<div class="subsection">
<h3><span data-i18n="whitelabel:t005">候选品牌字段 · 非已实现配置</span></h3>
<div class="surface responsive-table" style="padding:0">
<table class="tech-table">
<thead>
<tr><th style="width:180px"><span data-i18n="whitelabel:t006">字段</span></th><th style="width:200px"><span data-i18n="whitelabel:t007">候选字段 / 映射位置</span></th><th style="width:120px"><span data-i18n="whitelabel:t008">示意值</span></th><th><span data-i18n="whitelabel:t009">说明</span></th></tr>
</thead>
<tbody>
<tr><td><span data-i18n="whitelabel:t010">主色</span></td><td><code>token.colorPrimary</code></td><td>#165DFF</td><td><span data-i18n="whitelabel:t011">需定义并测试明暗主题的正文、填充与 hover/active 值，不只覆盖单个 seed</span></td></tr>
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
<div class="surface responsive-table" style="padding:0">
<table class="tech-table">
<thead>
<tr><th style="width:180px"><span data-i18n="whitelabel:t029">类别</span></th><th style="width:240px"><span data-i18n="whitelabel:t030">代表字段</span></th><th><span data-i18n="whitelabel:t031">原因</span></th></tr>
</thead>
<tbody>
<tr><td><span data-i18n="whitelabel:t032">语义色</span></td><td>colorSuccess / colorWarning / colorError / colorInfo</td><td><span data-i18n="whitelabel:t033">状态语义全局统一，租户改色破坏 WCAG 与色盲安全编码</span></td></tr>
<tr><td><span data-i18n="whitelabel:t034">间距</span></td><td>--aw-space-* / paddingXS..XL</td><td><span data-i18n="whitelabel:t035">密度与栅格强相关，定制会破坏多语种长文案布局</span></td></tr>
<tr><td><span data-i18n="whitelabel:t036">字号 · 字体</span></td><td>fontSize* / fontFamily / lineHeight*</td><td><span data-i18n="whitelabel:t037">参考站优先匹配本机字体，再按系统字体栈回退；若需跨机确定性，先提交有许可证记录的 WOFF2</span></td></tr>
<tr><td><span data-i18n="whitelabel:t038">圆角</span></td><td>borderRadius / -SM / -LG</td><td><span data-i18n="whitelabel:t039">6/4/8 三档与组件视觉打包，单点改动破坏一致性</span></td></tr>
<tr><td><span data-i18n="whitelabel:t040">阴影</span></td><td>boxShadow / Secondary / Tertiary</td><td><span data-i18n="whitelabel:t041">层级语义（subtle / medium / elevation）固定</span></td></tr>
<tr><td><span data-i18n="whitelabel:t042">动效曲线</span></td><td>motionEaseInOut / motionDuration*</td><td><span data-i18n="whitelabel:t043">cubic-bezier(0.34,0.69,0.1,1) + 120/200/320ms 三档</span></td></tr>
</tbody>
</table>
</div>
</div>
<div class="subsection">
<h3><span data-i18n="whitelabel:t044">当前消费者主题入口 · 尚无租户覆盖</span></h3>
<div class="surface" style="font-family:var(--aw-font-mono);font-size:12.5px;line-height:1.7;color:var(--aw-text-2)">
<div style="margin-bottom:6px;color:var(--aw-text-3)">// tms2.5-web-ui/src/App.tsx (current theme boundary)</div>
<div>&lt;ConfigProvider</div>
<div style="padding-left:20px">theme={buildAntdTheme({</div>
<div style="padding-left:40px"><span style="color:var(--aw-success)"><span data-i18n="whitelabel:t045">// 当前读取活动 --aw-*；租户配置尚未接入</span></span></div>
<div style="padding-left:40px">controlHeight: 32,</div>
<div style="padding-left:40px">tableCellPaddingBlock: 9,</div>
<div style="padding-left:20px">})}</div>
<div>&gt;</div>
<div style="padding-left:20px">&lt;App&gt; ... &lt;/App&gt;</div>
<div>&lt;/ConfigProvider&gt;</div>
</div>
<div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="whitelabel:t046">分层原则：</span></strong><span data-i18n="whitelabel:t047">当前主题构建器同时映射</span> <code>theme.token.colorPrimary</code> <span data-i18n="whitelabel:t048">与</span> <code>theme.components.Button</code> <span data-i18n="whitelabel:t049">等组件值。单独改变全局 seed 不会替换已有组件覆盖，也不会自动改写 CSS 变量；候选实现必须明确完整映射和对比度。</span></div></div>
</div>
<div class="subsection">
<h3><span data-i18n="whitelabel:t050">候选加载流程 · 实现前确认</span></h3>
<div class="surface" style="font-size:13px;line-height:1.85;color:var(--aw-text-2)">
<div><b style="color:var(--aw-text-1)"><span data-i18n="whitelabel:t051">① 登录前品牌配置</span></b> <span data-i18n="whitelabel:t052">— 若批准按</span> <code>window.location.hostname</code> <span data-i18n="whitelabel:t053">选择公开品牌配置，需先定义来源与可公开字段。失败使用默认品牌，不暴露用户或租户私有信息。</span></div>
<div><b style="color:var(--aw-text-1)"><span data-i18n="whitelabel:t054">② 登录后（用户态）</span></b> <span data-i18n="whitelabel:t055">— 先核验</span> <code>OpenAPI</code><span data-i18n="whitelabel:t056">与配置权限，再组装</span> <code>ConfigProvider</code><span data-i18n="whitelabel:t057">；接口路径、超时和回退策略由消费项目定义，本页不提供已实现接口。</span></div>
<div><b style="color:var(--aw-text-1)"><span data-i18n="whitelabel:t058">③ 切换租户</span></b> <span data-i18n="whitelabel:t059">— 清理旧上下文、取消旧请求并隔离迟到响应。采用整页重载还是应用内切换须经验证，不能仅用 reload 代替数据隔离。</span></div>
</div>
<div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong><span data-i18n="whitelabel:t060">候选降级原则：</span></strong><span data-i18n="whitelabel:t061">品牌配置失败时仍能显示默认主题。缓存策略和失效时间按服务契约确定；如缓存租户配置，须按租户隔离并验证退出、切换与离线场景。</span></div></div>
</div>
<div class="subsection">
<h3><span data-i18n="whitelabel:t062">候选视觉对比 · 非运行时切换演示</span></h3>
<div class="tenant-theme-compare">
<div class="surface" style="--aw-primary-local:#165DFF;background:var(--aw-bg)">
<div style="font-size:11px;letter-spacing:0.6px;text-transform:uppercase;color:var(--aw-text-3);font-weight:600;margin-bottom:8px"><span data-i18n="whitelabel:t063">租户 A · AngelWatch 默认</span></div>
<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
<div style="width:32px;height:32px;border-radius:6px;background:#165DFF;color:white;display:grid;place-items:center;font-weight:700">A</div>
<div style="font-size:14px;font-weight:600">AngelWatch<div style="font-size:11px;font-weight:400;color:var(--aw-text-3);margin-top:2px">Device Management System</div></div>
</div>
<div style="display:flex;gap:8px;flex-wrap:wrap">
<button class="btn" style="background:#165DFF;border-color:#165DFF;color:white"><span data-i18n="whitelabel:t064">主操作</span></button>
<button class="btn"><span data-i18n="whitelabel:t065">次操作</span></button>
<span class="tag-meta" style="background:var(--aw-success-bg);color:var(--aw-success);font-family:inherit;font-weight:500"><span data-i18n="whitelabel:t066">在线</span></span>
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
<span class="tag-meta" style="background:var(--aw-success-bg);color:var(--aw-success);font-family:inherit;font-weight:500"><span data-i18n="whitelabel:t070">在线</span></span>
</div>
</div>
</div>
<div style="margin-top:8px;font-size:12px;color:var(--aw-text-3);font-family:var(--aw-font-mono)"><span data-i18n="whitelabel:t071">两个租户共享：圆角 6 · 字号 14 · 间距 12 · 状态语义。仅主色被替换，其他视觉锁定。</span></div>
</div>
<div class="subsection">
<h3><span data-i18n="whitelabel:t072">反例 · 不允许的"租户定制"</span></h3>
<div class="alert error"><div class="ico">×</div><div class="content"><strong><span data-i18n="whitelabel:t073">租户要求把"删除"按钮改成蓝色</span></strong> <span data-i18n="whitelabel:t074">— 危险语义色保持一致。操作是否可用、单条或批量权限由后端与产品策略决定，不能通过品牌配置变更。</span></div></div>
<div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="whitelabel:t075">租户要求圆角全改成 0</span></strong> <span data-i18n="whitelabel:t076">— 拒绝。圆角与阴影、字号、行高有视觉协调，单点改动会破坏一致性。如确有需求走 design-system 内 PR 评审。</span></div></div>
</div>
<div class="subsection">
<h3><span data-i18n="whitelabel:t077">涉及变量</span></h3>
<div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
<div><b style="color:var(--aw-text-1)"><span data-i18n="whitelabel:t078">候选品牌字段（尚无 runtime 注入）：</span></b>colorPrimary · app.logo.* · app.loginBackground · app.icp · app.manualUrl · app.productName · app.productSubtitle · app.favicon</div>
<div style="margin-top:6px"><b style="color:var(--aw-text-1)"><span data-i18n="whitelabel:t079">系统层（设计系统锁定）：</span></b><span data-i18n="whitelabel:t080">所有 --aw-* 语义色 · --aw-space-* · --aw-radius-* · --aw-shadow-* · --aw-dur-* · --aw-ease · --aw-font · --aw-font-mono</span></div>
</div>
</div>
<div class="subsection">
<h3><span data-i18n="whitelabel:t081">配置职责边界 · 非接口 schema</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="whitelabel:t082">以下区分品牌、认证与信息架构的职责，不给出可直接提交的后端字段。图片资源自托管；接口、密钥和授权由后端契约决定。</span></p>
<div class="bp-grid">
<div class="bp-card"><h4><span data-i18n="whitelabel:t083">① 品牌资源</span></h4><p><span data-i18n="whitelabel:t084">产品名、Logo、登录背景与 favicon 是候选品牌资源；采用前核验资产来源、许可证和回退方式。</span></p></div>
<div class="bp-card"><h4><span data-i18n="whitelabel:t085">② 认证与安全策略</span></h4><p><span data-i18n="whitelabel:t086">验证码、密码处理、注册与访问控制由认证领域定义，不能作为视觉 token 或任意租户开关。</span></p></div>
<div class="bp-card"><h4><span data-i18n="whitelabel:t087">③ 登录方式</span></h4><p><span data-i18n="whitelabel:t088">账号、短信或社交登录须以已批准产品流程和认证接口为准，不据本页增加 client 字段。</span></p></div>
<div class="bp-card"><h4><span data-i18n="whitelabel:t089">④ 首页与菜单</span></h4><p><span data-i18n="whitelabel:t090">默认首页、可见菜单与权限由产品和后端契约确定；不直接采用旧站配置字段。</span></p></div>
</div>
<p style="font-size:12px;color:var(--aw-text-3);margin:12px 0 0"><span data-i18n="whitelabel:t091">所有图片资源必须自托管；当前品牌 logo 也是仓库内本地资产。第三方资产需要保留许可证与来源记录。</span></p>
</div>
</section>
</div>
`;
