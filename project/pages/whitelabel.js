/* AngelWatch Design System — page: whitelabel */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["whitelabel"] = `
<section class="section" id="whitelabel">
  <p class="section-eyebrow">规范 · 白标 / 多租户</p>
  <h2>White-label · 租户主题接管</h2>
  <p class="lede">企业 TMS 必须支持租户级品牌定制：主色、Logo、登录背景、ICP 文案、产品名等可被租户接管，但语义色 / 间距 / 字号 / 圆角 / 阴影 / 动效曲线由设计系统锁定，租户禁止覆盖。覆盖通过 antd v6 <code>ConfigProvider.theme</code> 注入。</p>

  <div class="subsection">
    <h3>可覆盖 token · 租户允许配置</h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead>
          <tr><th style="width:180px">字段</th><th style="width:200px">antd v6 token 路径</th><th style="width:120px">默认值</th><th>说明</th></tr>
        </thead>
        <tbody>
          <tr><td>主色</td><td><code>token.colorPrimary</code></td><td>#0052CC</td><td>派生 hover/active/light，色相单值即可</td></tr>
          <tr><td>产品名</td><td><code>app.productName</code></td><td>AngelWatch</td><td>侧栏 brand-name + 浏览器 title</td></tr>
          <tr><td>产品副标题</td><td><code>app.productSubtitle</code></td><td>Terminal Management System</td><td>登录页 + 侧栏 small 文案</td></tr>
          <tr><td>Home Logo</td><td><code>app.logo.home</code></td><td>angle.png</td><td>登录页浮层 / 顶栏</td></tr>
          <tr><td>Login Box Logo</td><td><code>app.logo.loginBox</code></td><td>(empty)</td><td>登录卡内置图标，空则降级文字</td></tr>
          <tr><td>Sidebar Expanded</td><td><code>app.logo.expanded</code></td><td>all_angle.png</td><td>侧栏展开态 logo（含字母）</td></tr>
          <tr><td>Sidebar Collapsed</td><td><code>app.logo.collapsed</code></td><td>angle.png</td><td>侧栏折叠态 logo（icon-only）</td></tr>
          <tr><td>Favicon</td><td><code>app.favicon</code></td><td>favicon.ico</td><td>注入到 &lt;link rel="icon"&gt;</td></tr>
          <tr><td>Login 背景图</td><td><code>app.loginBackground</code></td><td>login_banner.png</td><td>登录页右侧或全屏底图</td></tr>
          <tr><td>ICP 文案</td><td><code>app.icp</code></td><td>Copyright 2026 XC TECH...</td><td>登录页 footer + 控制台底栏</td></tr>
          <tr><td>操作手册 URL</td><td><code>app.manualUrl</code></td><td>(空)</td><td>顶栏帮助菜单跳转</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3>禁止覆盖 token · 设计系统锁定</h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead>
          <tr><th style="width:180px">类别</th><th style="width:240px">代表字段</th><th>原因</th></tr>
        </thead>
        <tbody>
          <tr><td>语义色</td><td>colorSuccess / colorWarning / colorError / colorInfo</td><td>状态语义全局统一，租户改色破坏 WCAG 与色盲安全编码</td></tr>
          <tr><td>间距</td><td>--aw-space-* / paddingXS..XL</td><td>密度与栅格强相关，定制会破坏多语种长文案布局</td></tr>
          <tr><td>字号 · 字体</td><td>fontSize* / fontFamily / lineHeight*</td><td>Inter + Source Han Sans CN 自托管，与设备 DPI 标定一致</td></tr>
          <tr><td>圆角</td><td>borderRadius / -SM / -LG</td><td>6/4/8 三档与组件视觉打包，单点改动破坏一致性</td></tr>
          <tr><td>阴影</td><td>boxShadow / Secondary / Tertiary</td><td>层级语义（subtle / medium / elevation）固定</td></tr>
          <tr><td>动效曲线</td><td>motionEaseInOut / motionDuration*</td><td>cubic-bezier(0.34,0.69,0.1,1) + 120/200/320ms 三档</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3>antd v6 注入位置</h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12.5px;line-height:1.7;color:var(--aw-text-2)">
      <div style="margin-bottom:6px;color:var(--aw-text-3)">// app/providers/TenantThemeProvider.tsx</div>
      <div>&lt;ConfigProvider</div>
      <div style="padding-left:20px">theme={{</div>
      <div style="padding-left:40px"><span style="color:var(--aw-success)">// 可覆盖：仅 colorPrimary 与少量组件 token</span></div>
      <div style="padding-left:40px">token: { colorPrimary: tenant.primary ?? <span style="color:var(--aw-primary)">'#0052CC'</span> },</div>
      <div style="padding-left:40px">components: { Layout: { siderBg: <span style="color:var(--aw-primary)">'#FFFFFF'</span> } }</div>
      <div style="padding-left:20px">}}</div>
      <div>&gt;</div>
      <div style="padding-left:20px">&lt;App&gt; ... &lt;/App&gt;</div>
      <div>&lt;/ConfigProvider&gt;</div>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong>分层原则：</strong>租户配置只到达 <code>theme.token.colorPrimary</code> 与 <code>theme.components.*.bg/borderColor</code> 等"皮肤层"。Seed → Map（派生算法）由 antd 内核 + design-system 一并锁定，租户不可见。</div></div>
  </div>

  <div class="subsection">
    <h3>覆盖时机 · 加载链路</h3>
    <div class="surface" style="font-size:13px;line-height:1.85;color:var(--aw-text-2)">
      <div><b style="color:var(--aw-text-1)">① 登录前（域名解析）</b> — 通过 <code>window.location.hostname</code> 反查租户公开配置（logo / 主色 / 背景），用于美化登录页。失败降级到默认主题，不阻塞登录。</div>
      <div><b style="color:var(--aw-text-1)">② 登录后（用户态）</b> — 用户登录成功后从后端拉 <code>/api/tenant/theme</code>，覆写 <code>ConfigProvider</code>。该接口必须在 5xx 或超时（>2s）时回退默认。</div>
      <div><b style="color:var(--aw-text-1)">③ 切换租户</b> — 多租户用户切换 tenant 时整页 reload，避免 antd 在运行时换 token 引发的重排闪烁。</div>
    </div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong>降级要求：</strong>租户接口必须有 ETag / 304 缓存与 stale-while-revalidate；离线场景下读 IndexedDB 中的上次成功值；首次安装无缓存且接口失败 → 用 default theme，不显示空白。</div></div>
  </div>

  <div class="subsection">
    <h3>双租户对比 · 同组件不同主色</h3>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="surface" style="--aw-primary-local:#0052CC;background:var(--aw-bg)">
        <div style="font-size:11px;letter-spacing:0.6px;text-transform:uppercase;color:var(--aw-text-3);font-weight:600;margin-bottom:8px">租户 A · AngelWatch 默认</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <div style="width:32px;height:32px;border-radius:6px;background:#0052CC;color:white;display:grid;place-items:center;font-weight:700">A</div>
          <div style="font-size:14px;font-weight:600">AngelWatch<div style="font-size:11px;font-weight:400;color:var(--aw-text-3);margin-top:2px">Terminal Management System</div></div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn" style="background:#0052CC;border-color:#0052CC;color:white">主操作</button>
          <button class="btn">次操作</button>
          <span class="tag-meta" style="background:#E6EFFB;color:#0052CC;font-family:inherit;font-weight:500">在线</span>
        </div>
      </div>
      <div class="surface" style="background:var(--aw-bg)">
        <div style="font-size:11px;letter-spacing:0.6px;text-transform:uppercase;color:var(--aw-text-3);font-weight:600;margin-bottom:8px">租户 B · Acme 定制</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <div style="width:32px;height:32px;border-radius:6px;background:#7B2CBF;color:white;display:grid;place-items:center;font-weight:700">M</div>
          <div style="font-size:14px;font-weight:600">Acme MDM<div style="font-size:11px;font-weight:400;color:var(--aw-text-3);margin-top:2px">Mobile Device Manager</div></div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn" style="background:#7B2CBF;border-color:#7B2CBF;color:white">主操作</button>
          <button class="btn">次操作</button>
          <span class="tag-meta" style="background:#F2E5FF;color:#7B2CBF;font-family:inherit;font-weight:500">在线</span>
        </div>
      </div>
    </div>
    <div style="margin-top:8px;font-size:12px;color:var(--aw-text-3);font-family:var(--aw-font-mono)">两个租户共享：圆角 6 · 字号 14 · 间距 12 · 状态语义。仅主色被替换，其他视觉锁定。</div>
  </div>

  <div class="subsection">
    <h3>反例 · 不允许的"租户定制"</h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong>租户要求把"删除"按钮改成蓝色</strong> — 拒绝。语义色（danger）锁定，否则破坏全站危险操作识别。改方向：可在租户配置中把"删除"动作降级（如禁用单条删除，仅留批量），不改色。</div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>租户要求圆角全改成 0</strong> — 拒绝。圆角与阴影、字号、行高有视觉协调，单点改动会破坏一致性。如确有需求走 design-system 内 PR 评审。</div></div>
  </div>

  <div class="subsection">
    <h3>涉及变量</h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div><b style="color:var(--aw-text-1)">租户层（runtime 注入）：</b>colorPrimary · app.logo.* · app.loginBackground · app.icp · app.manualUrl · app.productName · app.productSubtitle · app.favicon</div>
      <div style="margin-top:6px"><b style="color:var(--aw-text-1)">系统层（设计系统锁定）：</b>所有 --aw-* 语义色 · --aw-space-* · --aw-radius-* · --aw-shadow-* · --aw-dur-* · --aw-ease · --aw-font · --aw-font-mono</div>
    </div>
  </div>
</section>
`;
