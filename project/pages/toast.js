/* AngelWatch Design System — page: toast (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["toast"] = `
<div class="content">
<section class="section" id="toast">
  <p class="section-eyebrow"><span data-i18n="toast:text.001">通用组件 · 消息与通知</span></p>
  <h2><span data-i18n="toast:text.002">Message / Notification / Tooltip / Popover</span></h2>
  <p class="lede"><span data-i18n="toast:text.003">Message 用于可忽略的轻量成功或信息；Notification 跟踪异步进度并链接任务详情；Tooltip 解释行内内容，Popover 承载结构化补充信息。错误终态使用 Alert、Modal 或 Result。</span></p>

  <div class="demo-grid cols-2">
    <div class="surface">
<h3 style="margin:0 0 12px;font-size:14px">Message / Notification</h3>
<div class="toast-stack">
  <div class="toast success"><div class="ico">✓</div><div class="body"><strong><span data-i18n="toast:text.004">已保存</span></strong><span data-i18n="toast:text.005">设备配置已生效</span></div><button class="close" aria-label="关闭" data-i18n-aria-label="common:close">×</button></div>
  <div class="toast info"><div class="ico">i</div><div class="body"><strong><span data-i18n="toast:text.006">OTA 推送已发起</span></strong><small><span data-i18n="toast:text.007">共 1,284 台设备 · 预计 02:12 完成</span></small></div><button class="close" aria-label="关闭" data-i18n-aria-label="common:close">×</button></div>
  <div class="toast warning"><div class="ico">!</div><div class="body"><strong><span data-i18n="toast:text.008">低电量预警</span></strong><span data-i18n="toast:text.009">批次中 18 台设备电量 &lt; 20%</span></div><button class="close" aria-label="关闭" data-i18n-aria-label="common:close">×</button></div>
  <div class="toast warning"><div class="ico">!</div><div class="body"><strong><span data-i18n="toast:text.010">推送结果需要处理</span></strong><span data-i18n="toast:text.011">34 台失败；打开 Result 查看明细</span></div><button class="close" aria-label="关闭" data-i18n-aria-label="common:close">×</button></div>
</div>
    </div>
    <div class="surface">
<h3 style="margin:0 0 12px;font-size:14px">Tooltip &amp; Popover</h3>
<div style="padding:16px 0 0">
  <div class="tip-demo">
    <button class="inline-action" style="border-bottom:1px dotted var(--aw-text-3)" aria-describedby="checksum-tip"><span data-i18n="toast:text.012">SHA-256 校验和</span></button>
    <div class="tip" id="checksum-tip" role="tooltip"><span data-i18n="toast:text.013">服务端会比对此值，一致才允许下发到设备</span></div>
  </div>
</div>
<div style="padding:60px 0 0;position:relative;height:200px">
  <div style="position:relative;display:inline-block">
    <button class="inline-action status-dot fault" style="border-bottom:1px dotted var(--aw-danger)" aria-expanded="true" aria-controls="fault-popover"><span data-i18n="toast:text.014">故障</span></button>
    <div class="popover" id="fault-popover" role="dialog" aria-labelledby="fault-popover-title">
      <div class="ttl" id="fault-popover-title"><span data-i18n="toast:text.015">故障详情 · DEV-86420144</span></div>
      <div style="font-size:12px;color:var(--aw-text-2);line-height:1.6">
        <div style="display:flex;justify-content:space-between"><span><span data-i18n="toast:text.016">错误码</span></span><code class="mono">E-AGT-0142</code></div>
        <div style="display:flex;justify-content:space-between"><span><span data-i18n="toast:text.017">触发时间</span></span><span><span data-i18n="toast:text.018">1 小时前</span></span></div>
        <div style="display:flex;justify-content:space-between"><span><span data-i18n="toast:text.019">看门狗</span></span><span style="color:var(--aw-danger)"><span data-i18n="toast:text.020">无响应</span></span></div>
      </div>
      <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--aw-border-3)"><button class="btn btn-link btn-sm" style="padding:0"><span data-i18n="toast:text.021">查看完整日志 →</span></button></div>
    </div>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="toast:text.022">Notification 体系 · 位置 / 栈 / 时长</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="toast:text.023">Message / Notification / Tooltip 在 antd v6 中各有职责。本节统一规约位置、栈策略和自动消失时长，项目不再使用含混的 Toast 作为组件名。</span></p>

    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead>
          <tr><th style="width:120px"><span data-i18n="toast:text.024">类型</span></th><th style="width:140px"><span data-i18n="toast:text.025">默认位置</span></th><th style="width:100px"><span data-i18n="toast:text.026">栈上限</span></th><th style="width:120px"><span data-i18n="toast:text.027">自动消失</span></th><th><span data-i18n="toast:text.028">典型场景</span></th></tr>
        </thead>
        <tbody>
          <tr><td>Message<br/><small style="color:var(--aw-text-3)"><span data-i18n="toast:text.029">轻量横条</span></small></td><td><span data-i18n="toast:text.030">页面顶部居中</span></td><td><span data-i18n="toast:text.031">3 条</span></td><td><span data-i18n="toast:text.032">1.5s 成功 / 2s info</span></td><td><span data-i18n="toast:text.033">"已保存" / "已复制" / "已撤销"</span></td></tr>
          <tr><td>Notification<br/><small style="color:var(--aw-text-3)"><span data-i18n="toast:text.034">右上角卡片</span></small></td><td><span data-i18n="toast:text.035">topRight (默认)</span><br/><small><span data-i18n="toast:text.036">可配 topLeft / bottomRight</span></small></td><td><span data-i18n="toast:text.037">3 条</span></td><td><span data-i18n="toast:text.038">3s 成功 / 4.5s info / 6s 警告；进度手动关闭</span></td><td><span data-i18n="toast:text.039">OTA 推送启动、进度和结果摘要；终态链接 Result</span></td></tr>
          <tr><td><span data-i18n="toast:text.040">富 Notification</span><br/><small style="color:var(--aw-text-3)"><span data-i18n="toast:text.041">含按钮 / 进度</span></small></td><td>topRight / bottomRight</td><td><span data-i18n="toast:text.042">2 条</span></td><td><span data-i18n="toast:text.043">不自动消失</span></td><td><span data-i18n="toast:text.044">升级进度、待确认动作</span></td></tr>
          <tr><td>Tooltip<br/><small style="color:var(--aw-text-3)"><span data-i18n="toast:text.045">hover 浮层</span></small></td><td><span data-i18n="toast:text.046">跟随触发元素</span></td><td><span data-i18n="toast:text.047">1 条 (单)</span></td><td><span data-i18n="toast:text.048">移开即消</span></td><td><span data-i18n="toast:text.049">截断文本完整内容、icon 含义解释</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="toast:text.050">位置规则：</span></strong><span data-i18n="toast:text.051">同一会话内不同时使用 topRight + bottomRight。新 Notification 以 200ms 滑入；超过栈上限时移除最旧项，任务仍可从任务列表继续追踪。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="toast:text.052">边界对照 · Message / Notification / Alert / Modal / Result</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="toast:text.053">"用户该不该停下手上的事？操作是不是终结？"两个问题决定用哪个。</span></p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:140px"><span data-i18n="toast:text.054">类型</span></th><th style="width:140px"><span data-i18n="toast:text.055">是否阻塞</span></th><th style="width:140px"><span data-i18n="toast:text.056">是否需要决策</span></th><th style="width:140px"><span data-i18n="toast:text.057">是否页面级</span></th><th><span data-i18n="toast:text.058">使用场景</span></th></tr></thead>
        <tbody>
          <tr><td><b>Message / Notification</b></td><td><span data-i18n="toast:text.059">否</span></td><td><span data-i18n="toast:text.060">否</span></td><td><span data-i18n="toast:text.061">否（浮层）</span></td><td><span data-i18n="toast:text.062">轻量成功 / 信息，或可继续追踪的异步摘要</span></td></tr>
          <tr><td><b><span data-i18n="toast:text.063">Alert (页面内)</span></b></td><td><span data-i18n="toast:text.064">否</span></td><td><span data-i18n="toast:text.065">否</span></td><td><span data-i18n="toast:text.066">是（嵌入内容）</span></td><td><span data-i18n="toast:text.067">与上下文相关的持续性提示，不消失</span></td></tr>
          <tr><td><b>Modal</b></td><td><span data-i18n="toast:text.068">是</span></td><td><span data-i18n="toast:text.069">是</span></td><td><span data-i18n="toast:text.070">否（叠层）</span></td><td><span data-i18n="toast:text.071">必须现在决策的阻塞确认</span></td></tr>
          <tr><td><b>Result</b></td><td><span data-i18n="toast:text.072">否（已是结果）</span></td><td><span data-i18n="toast:text.073">否（操作完成）</span></td><td><span data-i18n="toast:text.074">是（整页）</span></td><td><span data-i18n="toast:text.075">异步 / 批量操作的终态展示</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong><span data-i18n="toast:text.076">不要混用：</span></strong><span data-i18n="toast:text.077">错误终态用 Message 会丢失上下文；用 Modal 展示失败会频繁打断流程；用 Notification 代替 Result 会缺少失败明细。Notification 只做摘要并链接任务或 Result。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="toast:text.078">富 Notification · 3 类</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="toast:text.079">超出"标题 + 副文案"的复杂瞬时反馈。带按钮 / 进度条 / 折叠展开。</span></p>
    <div class="rich-toast-grid">

      <div class="rt-card">
        <div class="rt-cap"><span data-i18n="toast:text.080">①  含操作按钮 · 异步任务发起后</span></div>
        <div class="rt-body">
          <div class="toast info" style="position:relative;width:100%">
            <div class="ico">i</div>
            <div class="body">
              <strong><span data-i18n="toast:text.081">OTA 推送已发起</span></strong>
              <small><span data-i18n="toast:text.082">共 1,284 台设备 · 预计 02:12 完成</span></small>
              <div class="rt-acts">
                <button class="btn btn-link btn-sm" style="padding:0"><span data-i18n="toast:text.083">查看进度 →</span></button>
                <button class="btn btn-link btn-sm" style="padding:0;color:var(--aw-text-3)"><span data-i18n="toast:text.084">查看任务</span></button>
              </div>
            </div>
            <button class="close" aria-label="关闭" data-i18n-aria-label="common:close">×</button>
          </div>
        </div>
      </div>

      <div class="rt-card">
        <div class="rt-cap"><span data-i18n="toast:text.085">②  含进度条 · 长任务跟随</span></div>
        <div class="rt-body">
          <div class="toast info" style="position:relative;width:100%">
            <div class="ico">⟳</div>
            <div class="body">
              <strong><span data-i18n="toast:text.086">批量推送中</span></strong>
              <small><span data-i18n="toast:text.087">已完成 384 / 1,284 台 · 30%</span></small>
              <div class="rt-progress" style="margin-top:6px">
                <div class="track"><div class="fill" style="width:30%"></div></div>
              </div>
            </div>
            <button class="close" aria-label="收起" data-i18n-aria-label="common:collapse">−</button>
          </div>
        </div>
      </div>

      <div class="rt-card">
        <div class="rt-cap"><span data-i18n="toast:text.088">③  结果摘要 · 链接完整 Result</span></div>
        <div class="rt-body">
          <div class="toast warning expanded" style="position:relative;width:100%">
            <div class="ico">!</div>
            <div class="body">
              <strong><span data-i18n="toast:text.089">34 台设备推送失败</span></strong>
              <small><span data-i18n="toast:text.090">摘要可展开，完整明细进入 Result</span></small>
              <div class="rt-detail">
                <div class="rd-row"><span>DEV-86420075</span><span class="er"><span data-i18n="toast:text.091">网络超时</span></span></div>
                <div class="rd-row"><span>DEV-86420089</span><span class="er"><span data-i18n="toast:text.092">设备离线</span></span></div>
                <div class="rd-row"><span>DEV-86420112</span><span class="er"><span data-i18n="toast:text.093">磁盘满</span></span></div>
                <div class="rd-row" style="opacity:0.6"><span data-i18n="toast:text.094">还有 31 条…</span></div>
              </div>
              <div class="rt-acts">
                <button class="btn btn-link btn-sm" style="padding:0"><span data-i18n="toast:text.095">下载完整列表</span></button>
                <button class="btn btn-link btn-sm" style="padding:0"><span data-i18n="toast:text.096">重试失败项</span></button>
              </div>
            </div>
            <button class="close" aria-label="关闭" data-i18n-aria-label="common:close">×</button>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="toast:text.097">反例</span></h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong><span data-i18n="toast:text.098">不要用 Message / Notification 承载需要用户做选择的内容：</span></strong><span data-i18n="toast:text.099">浮层可能消失，用户来不及反应。需要决策走 Modal。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="toast:text.100">不要让 4 个 Notification 堆叠遮挡 topbar：</span></strong><span data-i18n="toast:text.101">同方向超过 3 个时移除最旧项；高频事件汇总到 Notification Center。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="toast:text.102">不要把错误 Notification 当成最终结果：</span></strong><span data-i18n="toast:text.103">Notification 只展示摘要、traceId 或错误码，并链接 Alert、任务详情或 Result。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="toast:text.104">涉及变量</span></h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div><span data-i18n="toast:text.105">--aw-success / --aw-info / --aw-warning / --aw-danger (语义) · 对应 _bg 浅色底</span></div>
      <div style="margin-top:4px"><span data-i18n="toast:text.106">--aw-shadow-2 (Notification) · --aw-radius (容器) · --aw-dur-base (滑入)</span></div>
      <div style="margin-top:4px"><span data-i18n="toast:text.107">栈上限：Notification 3 / 富 Notification 2 / Message 3</span></div>
    </div>
  </div>
  <div class="subsection"><h3><span data-i18n="common:component.usedBy">页面蓝图使用场景</span></h3><div class="blueprint-notes"><span><a href="#/push-page">PushPage</a></span><span><a href="#/ota-page">OtaPage</a></span><span><a href="#/service-page">ServicePage</a></span></div></div>
</section>
</div>
`;
