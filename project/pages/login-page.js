/* AngelWatch Design System — page: login-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["login-page"] = `
<div class="content">
<!-- LOGIN PAGE -->
<section class="section" id="login-page">
  <p class="section-eyebrow">Patterns · LoginPage</p>
  <h2>LoginPage · 登录页</h2>
  <p class="lede">分屏布局。左侧 40% 品牌区（logo + 产品名 + slogan + 装饰图形），右侧 60% 表单区（账号 + 密码 + 验证码 + 记住我 + 登录 + 语言切换）。深品牌色突出企业身份。</p>
  <div class="frame">
    <div class="frame-head">📐 LoginPage · 默认（单租户）</div>
    <div class="frame-body" style="padding:0">
<div class="login-mock">
  <div class="panel-left">
    <div class="lp-brand">
      <div class="lg"><img src="https://uitmss3.eu.aw-iot.com/tms/tms-web-ui/images/angle.png" alt="AngelWatch" /></div>
      <div class="nm">AngelWatch<small>Terminal Management System</small></div>
    </div>
    <div class="lp-tag">
      <h2>守护每一台<br/>终端，每一秒。</h2>
      <p>统一监控、远程运维、批量升级。为运营商、零售网点、机场、银行而设计的终端管理平台。</p>
    </div>
    <svg class="lp-illust" viewBox="0 0 200 200" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.2">
      <circle cx="100" cy="100" r="78"/>
      <circle cx="100" cy="100" r="56"/>
      <circle cx="100" cy="100" r="34"/>
      <circle cx="100" cy="100" r="6" fill="rgba(255,255,255,0.85)" stroke="none"/>
      <circle cx="158" cy="76" r="3" fill="rgba(255,255,255,0.85)" stroke="none"/>
      <circle cx="42" cy="124" r="3" fill="rgba(255,255,255,0.85)" stroke="none"/>
      <circle cx="124" cy="158" r="3" fill="rgba(255,255,255,0.85)" stroke="none"/>
      <circle cx="76" cy="42" r="3" fill="rgba(255,255,255,0.85)" stroke="none"/>
      <path d="M100 100 L158 76 M100 100 L42 124 M100 100 L124 158 M100 100 L76 42" stroke-dasharray="2 3"/>
    </svg>
    <div class="lp-foot">© 2026 AngelWatch · v1.0.0 · 内部部署</div>
  </div>
  <div class="panel-right" style="position:relative">
    <div class="lr-langs"><span class="active">中文</span><span>English</span></div>
    <div class="lr-form">
      <h3>欢迎回来</h3>
      <div class="sub">登录到 TMS 控制台</div>
      <div class="lr-field"><label>账号</label><input class="input" placeholder="用户名 / 邮箱 / 工号" /></div>
      <div class="lr-field"><label>密码</label><div style="position:relative"><input class="input" type="password" value="••••••••" /><span style="position:absolute;right:10px;top:50%;transform:translateY(-50%);color:var(--aw-text-3);cursor:pointer">👁</span></div></div>
      <div class="lr-field"><label>验证码</label><div class="row" style="gap:8px"><input class="input" placeholder="6 位字符" style="flex:1" /><div style="width:100px;height:32px;background:linear-gradient(135deg,#E6EFFB,#CCDFF7);border:1px solid var(--aw-border-2);border-radius:6px;display:grid;place-items:center;font-family:var(--aw-font-mono);font-size:14px;color:var(--aw-primary);font-weight:600;letter-spacing:2px;cursor:pointer">7K2N9</div></div></div>
      <div class="lr-row"><label class="check"><input type="checkbox" checked /><span class="box"></span>记住账号</label><a>忘记密码？</a></div>
      <button class="btn btn-primary btn-lg" style="width:100%">登录</button>
      <div style="margin-top:18px;font-size:12px;color:var(--aw-text-3);text-align:center">使用 SSO 登录 · <a style="color:var(--aw-primary);text-decoration:none">单点登录 →</a></div>
    </div>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3>登录全态 · 6 变体</h3>
    <p class="lede" style="margin-bottom:16px">企业 TMS 登录链路除了"用户名 + 密码"，还需覆盖多租户、强制改密、MFA、邮箱二次校验、忘记密码 5 种衍生态。下面展示每种态在表单区的形态（左侧品牌区不变）。</p>
    <div class="login-states-grid">

      <div class="ls-card">
        <div class="ls-cap">①  单租户 · 默认</div>
        <div class="ls-mock">
          <div class="ls-h">欢迎回来</div>
          <div class="ls-sub">登录到 TMS 控制台</div>
          <div class="ls-fld"><div class="ls-lab">账号</div><div class="ls-ipt">运维-上海</div></div>
          <div class="ls-fld"><div class="ls-lab">密码</div><div class="ls-ipt">••••••••</div></div>
          <div class="ls-fld"><div class="ls-lab">验证码</div><div class="ls-ipt-row"><div class="ls-ipt small">6 位字符</div><div class="ls-cap-img">7K2N9</div></div></div>
          <div class="ls-btn">登录</div>
        </div>
      </div>

      <div class="ls-card">
        <div class="ls-cap">②  多租户 · 前置 tenant 选择</div>
        <div class="ls-mock">
          <div class="ls-h">选择组织 / 租户</div>
          <div class="ls-sub">您的账号绑定多个租户</div>
          <div class="ls-fld"><div class="ls-lab">租户</div><div class="ls-select">AngelWatch 集团 - 总部 ▾</div></div>
          <div class="ls-fld"><div class="ls-lab">账号</div><div class="ls-ipt">运维-上海</div></div>
          <div class="ls-fld"><div class="ls-lab">密码</div><div class="ls-ipt">••••••••</div></div>
          <div class="ls-btn">下一步</div>
          <div class="ls-hint">提示：租户切换后会清空当前 session</div>
        </div>
      </div>

      <div class="ls-card">
        <div class="ls-cap">③  强制改密</div>
        <div class="ls-mock">
          <div class="ls-h">请先设置新密码</div>
          <div class="ls-sub">您的密码已过期 30 天，必须更新后才能继续</div>
          <div class="ls-fld"><div class="ls-lab">原密码</div><div class="ls-ipt">••••••••</div></div>
          <div class="ls-fld"><div class="ls-lab">新密码</div><div class="ls-ipt">••••••••••</div></div>
          <div class="ls-fld"><div class="ls-lab">确认新密码</div><div class="ls-ipt err">两次输入不一致</div></div>
          <div class="ls-strength"><div class="bar w70"></div><span>中强度 · 建议加入特殊字符</span></div>
          <div class="ls-btn">提交</div>
        </div>
      </div>

      <div class="ls-card">
        <div class="ls-cap">④  MFA · 6 位令牌</div>
        <div class="ls-mock">
          <div class="ls-h">两步验证</div>
          <div class="ls-sub">请输入 Authenticator 显示的 6 位代码</div>
          <div class="ls-otp">
            <span>1</span><span>3</span><span>7</span><span class="cur">_</span><span></span><span></span>
          </div>
          <div class="ls-hint">提示：剩余 28 秒后令牌将刷新</div>
          <div class="ls-btn">验证并登录</div>
          <div class="ls-link">使用备用验证码 →</div>
        </div>
      </div>

      <div class="ls-card">
        <div class="ls-cap">⑤  邮箱二次校验</div>
        <div class="ls-mock">
          <div class="ls-h">邮箱验证</div>
          <div class="ls-sub">已发送验证码到 david@***.com</div>
          <div class="ls-otp"><span>4</span><span>2</span><span>9</span><span></span><span></span><span></span></div>
          <div class="ls-link disabled">重新发送（54s）</div>
          <div class="ls-btn">提交</div>
        </div>
      </div>

      <div class="ls-card">
        <div class="ls-cap">⑥  忘记密码 · 三步</div>
        <div class="ls-mock">
          <div class="ls-steps">
            <div class="st done">①  邮箱</div><div class="st-line"></div>
            <div class="st act">②  验证码</div><div class="st-line"></div>
            <div class="st">③  设置新密码</div>
          </div>
          <div class="ls-sub">已向 d***@xctech.com 发送 6 位代码</div>
          <div class="ls-otp"><span>8</span><span>1</span><span>3</span><span class="cur">_</span><span></span><span></span></div>
          <div class="ls-link">未收到？重发（21s）</div>
          <div class="ls-btn">下一步</div>
        </div>
      </div>

    </div>
  </div>

  <div class="subsection">
    <h3>滑块拼图验证码 · blockPuzzle 4 态</h3>
    <p class="lede" style="margin-bottom:16px">现网生产沿用的滑块拼图（260×130）。失败 3 次后强制刷新背景图，避免被脚本暴力。</p>
    <div class="puzzle-grid">

      <div class="pz-card">
        <div class="pz-cap">①  初始 · 触发</div>
        <div class="pz-frame">
          <div class="pz-bg">
            <svg viewBox="0 0 260 130" preserveAspectRatio="none"><defs><linearGradient id="pz1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0052CC" stop-opacity="0.18"/><stop offset="1" stop-color="#7B2CBF" stop-opacity="0.18"/></linearGradient></defs><rect width="260" height="130" fill="url(#pz1)"/><circle cx="80" cy="40" r="24" fill="rgba(255,255,255,0.5)"/><rect x="160" y="70" width="50" height="40" rx="4" fill="rgba(255,255,255,0.5)"/></svg>
            <div class="pz-hole" style="left:172px"></div>
            <div class="pz-piece" style="left:8px"></div>
          </div>
          <div class="pz-track"><div class="pz-handle">»</div><div class="pz-tip">向右拖动滑块完成拼图</div></div>
        </div>
      </div>

      <div class="pz-card">
        <div class="pz-cap">②  loading · 校验中</div>
        <div class="pz-frame">
          <div class="pz-bg loading">
            <svg viewBox="0 0 260 130" preserveAspectRatio="none"><rect width="260" height="130" fill="#F5F7FA"/></svg>
            <div class="pz-spin"></div>
          </div>
          <div class="pz-track"><div class="pz-handle dim">···</div><div class="pz-tip">正在校验，请稍候</div></div>
        </div>
      </div>

      <div class="pz-card">
        <div class="pz-cap">③  成功</div>
        <div class="pz-frame">
          <div class="pz-bg ok">
            <svg viewBox="0 0 260 130" preserveAspectRatio="none"><rect width="260" height="130" fill="#F6FFED"/></svg>
            <div class="pz-check">✓ 验证通过</div>
          </div>
          <div class="pz-track ok"><div class="pz-handle ok">✓</div><div class="pz-tip ok">已完成验证</div></div>
        </div>
      </div>

      <div class="pz-card">
        <div class="pz-cap">④  失败 · 抖动 + 重置</div>
        <div class="pz-frame">
          <div class="pz-bg err">
            <svg viewBox="0 0 260 130" preserveAspectRatio="none"><rect width="260" height="130" fill="#FFF1F0"/></svg>
            <div class="pz-cross">×  位置不正确</div>
          </div>
          <div class="pz-track err"><div class="pz-handle err">×</div><div class="pz-tip err">第 2 次失败 · 还剩 1 次</div></div>
        </div>
      </div>

    </div>
  </div>

  <div class="subsection">
    <h3>规范要点</h3>
    <div class="alert info"><div class="ico">i</div><div class="content"><strong>语言切换：右上 inline。</strong>取代现网 footer popover 形态，符合 antd v6 习惯，且多语种切换不应被埋在最底端。</div></div>
    <div class="alert info" style="margin-top:8px"><div class="ico">i</div><div class="content"><strong>背景图、ICP、产品名、Logo 均为白标 token</strong>，参见 <a href="#/whitelabel" style="color:var(--aw-primary)">白标 / 租户主题</a> 章节。</div></div>
    <div class="alert warning" style="margin-top:8px"><div class="ico">!</div><div class="content"><strong>MFA / 邮箱验证 / 强制改密</strong>由后端在登录返回中标注 <code>nextStep</code>，前端按 step 路由跳转，禁止前端单方面决定流程顺序。</div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>反例：</strong>不要把"忘记密码"做成新弹窗叠在登录卡上 — 多步流程在原表单区切换更稳，避免移动端遮挡。</div></div>
  </div>
</section>
</div>
`;
