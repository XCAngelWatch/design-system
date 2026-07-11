/* AngelWatch Design System — page: login-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["login-page"] = `
<div class="content">
<!-- LOGIN PAGE -->
<section class="section" id="login-page">
  <p class="section-eyebrow"><span data-i18n="login-page:text.001">页面蓝图 · LoginPage</span></p>
  <h2><span data-i18n="login-page:text.002">登录页 LoginPage</span></h2>
  <p class="lede"><span data-i18n="login-page:text.003">登录页服务于 Android 终端管理后台，重点是安全进入系统、选择语言、记住账号和处理验证码。视觉上保持冷静、轻盈、科技感，不使用营销化大段文案。</span></p>
  <div class="frame">
    <div class="frame-head"><span data-i18n="login-page:text.004">📐 LoginPage · 默认（单租户）</span></div>
    <div class="frame-body" style="padding:0">
<div class="login-mock">
  <div class="panel-left">
    <div class="lp-brand">
      <div class="lg"><img src="favicon.ico" alt="AngelWatch" /></div>
      <div class="nm">AngelWatch<small>Device Management System</small></div>
    </div>
    <div class="lp-tag">
      <h2><span data-i18n="login-page:text.005">守护每一台</span><br/><span data-i18n="login-page:text.006">终端，每一秒。</span></h2>
      <p><span data-i18n="login-page:text.007">统一监控、远程运维、批量升级。为运营商、零售网点、机场、银行而设计的终端管理平台。</span></p>
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
    <div class="lp-foot"><span data-i18n="login-page:text.008">AngelWatch · 内部部署</span></div>
  </div>
  <div class="panel-right" style="position:relative">
    <div class="lr-langs"><span class="active"><span data-i18n="login-page:text.009">中文</span></span><span>English</span></div>
    <div class="lr-form">
      <h3><span data-i18n="login-page:text.010">欢迎回来</span></h3>
      <div class="sub"><span data-i18n="login-page:text.011">登录到 TMS 控制台</span></div>
      <div class="lr-field"><label><span data-i18n="login-page:text.012">账号</span></label><input class="input" placeholder="账号 / 邮箱 / 工号" data-i18n-placeholder="login-page:text.013" /></div>
      <div class="lr-field"><label><span data-i18n="login-page:text.014">密码</span></label><div style="position:relative"><input class="input" type="password" value="••••••••" /><button class="icon-btn" data-demo-toggle-password style="position:absolute;right:6px;top:50%;transform:translateY(-50%);width:28px;height:28px" aria-label="显示密码" data-i18n-aria-label="common:showPassword">👁</button></div></div>
      <div class="lr-field"><label><span data-i18n="login-page:text.015">验证码</span></label><div class="row" style="gap:8px"><input class="input" placeholder="6 位字符" style="flex:1" data-i18n-placeholder="login-page:text.016" /><button class="captcha-button" data-demo-refresh-captcha style="width:100px;height:32px;background:var(--aw-primary-bg);border:1px solid var(--aw-border-2);border-radius:6px;font-family:var(--aw-font-mono);font-size:14px;color:var(--aw-primary);font-weight:600;letter-spacing:2px;cursor:pointer" aria-label="刷新验证码" data-i18n-aria-label="common:refreshCaptcha">7K2N9</button></div></div>
      <div class="lr-row"><label class="check"><input type="checkbox" checked /><span class="box"></span><span data-i18n="login-page:text.017">记住账号</span></label><a><span data-i18n="login-page:text.018">忘记密码？</span></a></div>
      <button class="btn btn-primary btn-lg" style="width:100%"><span data-i18n="login-page:text.019">登录</span></button>
      <div style="margin-top:18px;font-size:12px;color:var(--aw-text-3);text-align:center"><span data-i18n="login-page:text.020">使用 SSO 登录 ·</span> <a style="color:var(--aw-primary);text-decoration:none"><span data-i18n="login-page:text.021">单点登录 →</span></a></div>
    </div>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="login-page:text.022">登录全态 · 6 变体</span></h3>
    <p class="lede" style="margin-bottom:16px"><span data-i18n="login-page:text.023">企业 TMS 登录链路除了"账号 + 密码"，还需覆盖多租户、强制改密、MFA、邮箱二次校验、忘记密码 5 种衍生态。下面展示每种态在表单区的形态（左侧品牌区不变）。</span></p>
    <div class="login-states-grid">

      <div class="ls-card">
        <div class="ls-cap"><span data-i18n="login-page:text.024">①  单租户 · 默认</span></div>
        <div class="ls-mock">
          <div class="ls-h"><span data-i18n="login-page:text.025">欢迎回来</span></div>
          <div class="ls-sub"><span data-i18n="login-page:text.026">登录到 TMS 控制台</span></div>
          <div class="ls-fld"><div class="ls-lab"><span data-i18n="login-page:text.027">账号</span></div><div class="ls-ipt"><span data-i18n="login-page:text.028">运维-上海</span></div></div>
          <div class="ls-fld"><div class="ls-lab"><span data-i18n="login-page:text.029">密码</span></div><div class="ls-ipt">••••••••</div></div>
          <div class="ls-fld"><div class="ls-lab"><span data-i18n="login-page:text.030">验证码</span></div><div class="ls-ipt-row"><div class="ls-ipt small"><span data-i18n="login-page:text.031">6 位字符</span></div><div class="ls-cap-img">7K2N9</div></div></div>
          <div class="ls-btn"><span data-i18n="login-page:text.032">登录</span></div>
        </div>
      </div>

      <div class="ls-card">
        <div class="ls-cap"><span data-i18n="login-page:text.033">②  多租户 · 前置 tenant 选择</span></div>
        <div class="ls-mock">
          <div class="ls-h"><span data-i18n="login-page:text.034">选择组织 / 租户</span></div>
          <div class="ls-sub"><span data-i18n="login-page:text.035">您的账号绑定多个租户</span></div>
          <div class="ls-fld"><div class="ls-lab"><span data-i18n="login-page:text.036">租户</span></div><div class="ls-select"><span data-i18n="login-page:text.037">AngelWatch 集团 - 总部 ▾</span></div></div>
          <div class="ls-fld"><div class="ls-lab"><span data-i18n="login-page:text.038">账号</span></div><div class="ls-ipt"><span data-i18n="login-page:text.039">运维-上海</span></div></div>
          <div class="ls-fld"><div class="ls-lab"><span data-i18n="login-page:text.040">密码</span></div><div class="ls-ipt">••••••••</div></div>
          <div class="ls-btn"><span data-i18n="login-page:text.041">下一步</span></div>
          <div class="ls-hint"><span data-i18n="login-page:text.042">提示：租户切换后会清空当前 session</span></div>
        </div>
      </div>

      <div class="ls-card">
        <div class="ls-cap"><span data-i18n="login-page:text.043">③  强制改密</span></div>
        <div class="ls-mock">
          <div class="ls-h"><span data-i18n="login-page:text.044">请先设置新密码</span></div>
          <div class="ls-sub"><span data-i18n="login-page:text.045">您的密码已过期 30 天，必须更新后才能继续</span></div>
          <div class="ls-fld"><div class="ls-lab"><span data-i18n="login-page:text.046">原密码</span></div><div class="ls-ipt">••••••••</div></div>
          <div class="ls-fld"><div class="ls-lab"><span data-i18n="login-page:text.047">新密码</span></div><div class="ls-ipt">••••••••••</div></div>
          <div class="ls-fld"><div class="ls-lab"><span data-i18n="login-page:text.048">确认新密码</span></div><div class="ls-ipt err"><span data-i18n="login-page:text.049">两次输入不一致</span></div></div>
          <div class="ls-strength"><div class="bar w70"></div><span><span data-i18n="login-page:text.050">中强度 · 建议加入特殊字符</span></span></div>
          <div class="ls-btn"><span data-i18n="login-page:text.051">提交</span></div>
        </div>
      </div>

      <div class="ls-card">
        <div class="ls-cap"><span data-i18n="login-page:text.052">④  MFA · 6 位令牌</span></div>
        <div class="ls-mock">
          <div class="ls-h"><span data-i18n="login-page:text.053">两步验证</span></div>
          <div class="ls-sub"><span data-i18n="login-page:text.054">请输入 Authenticator 显示的 6 位代码</span></div>
          <div class="ls-otp">
            <span>1</span><span>3</span><span>7</span><span class="cur">_</span><span></span><span></span>
          </div>
          <div class="ls-hint"><span data-i18n="login-page:text.055">提示：剩余 28 秒后令牌将刷新</span></div>
          <div class="ls-btn"><span data-i18n="login-page:text.056">验证并登录</span></div>
          <div class="ls-link"><span data-i18n="login-page:text.057">使用备用验证码 →</span></div>
        </div>
      </div>

      <div class="ls-card">
        <div class="ls-cap"><span data-i18n="login-page:text.058">⑤  邮箱二次校验</span></div>
        <div class="ls-mock">
          <div class="ls-h"><span data-i18n="login-page:text.059">邮箱验证</span></div>
          <div class="ls-sub"><span data-i18n="login-page:text.060">已发送验证码到 david@***.com</span></div>
          <div class="ls-otp"><span>4</span><span>2</span><span>9</span><span></span><span></span><span></span></div>
          <div class="ls-link disabled"><span data-i18n="login-page:text.061">重新发送（54s）</span></div>
          <div class="ls-btn"><span data-i18n="login-page:text.062">提交</span></div>
        </div>
      </div>

      <div class="ls-card">
        <div class="ls-cap"><span data-i18n="login-page:text.063">⑥  忘记密码 · 三步</span></div>
        <div class="ls-mock">
          <div class="ls-steps">
            <div class="st done"><span data-i18n="login-page:text.064">①  邮箱</span></div><div class="st-line"></div>
            <div class="st act"><span data-i18n="login-page:text.065">②  验证码</span></div><div class="st-line"></div>
            <div class="st"><span data-i18n="login-page:text.066">③  设置新密码</span></div>
          </div>
          <div class="ls-sub"><span data-i18n="login-page:text.067">已向 d***@xctech.com 发送 6 位代码</span></div>
          <div class="ls-otp"><span>8</span><span>1</span><span>3</span><span class="cur">_</span><span></span><span></span></div>
          <div class="ls-link"><span data-i18n="login-page:text.068">未收到？重发（21s）</span></div>
          <div class="ls-btn"><span data-i18n="login-page:text.069">下一步</span></div>
        </div>
      </div>

    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="login-page:text.070">滑块拼图验证码 · blockPuzzle 4 态</span></h3>
    <p class="lede" style="margin-bottom:16px"><span data-i18n="login-page:text.071">现网生产沿用的滑块拼图（260×130）。失败 3 次后强制刷新背景图，避免被脚本暴力。</span></p>
    <div class="puzzle-grid">

      <div class="pz-card">
        <div class="pz-cap"><span data-i18n="login-page:text.072">①  初始 · 触发</span></div>
        <div class="pz-frame">
          <div class="pz-bg">
            <svg viewBox="0 0 260 130" preserveAspectRatio="none"><defs><linearGradient id="pz1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#165DFF" stop-opacity="0.18"/><stop offset="1" stop-color="#7B2CBF" stop-opacity="0.18"/></linearGradient></defs><rect width="260" height="130" fill="url(#pz1)"/><circle cx="80" cy="40" r="24" fill="rgba(255,255,255,0.5)"/><rect x="160" y="70" width="50" height="40" rx="4" fill="rgba(255,255,255,0.5)"/></svg>
            <div class="pz-hole" style="left:172px"></div>
            <div class="pz-piece" style="left:8px"></div>
          </div>
          <div class="pz-track"><div class="pz-handle">»</div><div class="pz-tip"><span data-i18n="login-page:text.073">向右拖动滑块完成拼图</span></div></div>
        </div>
      </div>

      <div class="pz-card">
        <div class="pz-cap"><span data-i18n="login-page:text.074">②  loading · 校验中</span></div>
        <div class="pz-frame">
          <div class="pz-bg loading">
            <svg viewBox="0 0 260 130" preserveAspectRatio="none"><rect width="260" height="130" fill="#F5F7FA"/></svg>
            <div class="pz-spin"></div>
          </div>
          <div class="pz-track"><div class="pz-handle dim">···</div><div class="pz-tip"><span data-i18n="login-page:text.075">正在校验，请稍候</span></div></div>
        </div>
      </div>

      <div class="pz-card">
        <div class="pz-cap"><span data-i18n="login-page:text.076">③  成功</span></div>
        <div class="pz-frame">
          <div class="pz-bg ok">
            <svg viewBox="0 0 260 130" preserveAspectRatio="none"><rect width="260" height="130" fill="#F6FFED"/></svg>
            <div class="pz-check"><span data-i18n="login-page:text.077">✓ 验证通过</span></div>
          </div>
          <div class="pz-track ok"><div class="pz-handle ok">✓</div><div class="pz-tip ok"><span data-i18n="login-page:text.078">已完成验证</span></div></div>
        </div>
      </div>

      <div class="pz-card">
        <div class="pz-cap"><span data-i18n="login-page:text.079">④  失败 · 抖动 + 重置</span></div>
        <div class="pz-frame">
          <div class="pz-bg err">
            <svg viewBox="0 0 260 130" preserveAspectRatio="none"><rect width="260" height="130" fill="#FFF1F0"/></svg>
            <div class="pz-cross"><span data-i18n="login-page:text.080">×  位置不正确</span></div>
          </div>
          <div class="pz-track err"><div class="pz-handle err">×</div><div class="pz-tip err"><span data-i18n="login-page:text.081">第 2 次失败 · 还剩 1 次</span></div></div>
        </div>
      </div>

    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="login-page:text.082">规范要点</span></h3>
    <div class="alert info"><div class="ico">i</div><div class="content"><strong><span data-i18n="login-page:text.083">语言切换：右上 inline。</span></strong><span data-i18n="login-page:text.084">取代现网 footer popover 形态，符合 antd v6 习惯，且多语种切换不应被埋在最底端。</span></div></div>
    <div class="alert info" style="margin-top:8px"><div class="ico">i</div><div class="content"><strong><span data-i18n="login-page:text.085">背景图、ICP、产品名、Logo 均为白标 token</span></strong><span data-i18n="login-page:text.086">，参见</span> <a href="#/whitelabel" style="color:var(--aw-primary)"><span data-i18n="login-page:text.087">白标 / 租户主题</span></a> <span data-i18n="login-page:text.088">章节。</span></div></div>
    <div class="alert warning" style="margin-top:8px"><div class="ico">!</div><div class="content"><strong><span data-i18n="login-page:text.089">MFA / 邮箱验证 / 强制改密</span></strong><span data-i18n="login-page:text.090">由后端在登录返回中标注</span> <code>nextStep</code><span data-i18n="login-page:text.091">，前端按 step 路由跳转，禁止前端单方面决定流程顺序。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="login-page:text.092">反例：</span></strong><span data-i18n="login-page:text.093">不要把"忘记密码"做成新弹窗叠在登录卡上 — 多步流程在原表单区切换更稳，避免移动端遮挡。</span></div></div>
  </div>
  <div class="subsection" data-component-contract>
    <h3><span data-i18n="common:component.contract">组件契约</span></h3>
    <div class="blueprint-notes"><span><a href="#/inputs">Input</a></span><span><a href="#/feedback">Feedback</a></span><span><a href="#/i18n">i18n</a></span><span><a href="#/a11y">Accessibility</a></span><span><a href="#/whitelabel">Whitelabel</a></span></div>
  </div>
</section>
</div>
`;
