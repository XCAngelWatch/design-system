/* AngelWatch Design System — page: progress (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["progress"] = `
<div class="content">
<section class="section" id="progress">
  <p class="section-eyebrow"><span data-i18n="progress:text.001">通用组件 · 进度</span></p>
  <h2><span data-i18n="progress:text.002">进度与步骤 Progress</span></h2>
  <p class="lede"><span data-i18n="progress:text.003">OTA 升级、批量推送、固件上传——任何耗时操作都用 Progress 提供持续反馈。多步流程使用 Steps。</span></p>

  <div class="demo-stack">
    <div class="surface">
      <h3 class="card-title"><span data-i18n="progress:text.004">线性进度</span></h3>
      <div style="display:flex;flex-direction:column;gap:18px;max-width:640px">
        <div>
          <div style="font-size:13px;margin-bottom:8px;display:flex;justify-content:space-between"><span><strong>v3.4.1 → v3.5.0</strong><span data-i18n="progress:text.005"> · 估计 4 分钟</span></span><span class="mono" style="color:var(--aw-text-3)"><span data-i18n="progress:text.006">42% · 1,284 / 3,058 台</span></span></div>
          <div class="progress"><div class="track"><div class="fill" style="width:42%"></div></div><div class="pct">42%</div></div>
        </div>
        <div><div style="font-size:13px;margin-bottom:8px;color:var(--aw-text-2)"><span data-i18n="progress:text.007">下载固件包</span></div><div class="progress"><div class="track"><div class="fill success" style="width:100%"></div></div><div class="pct">100%</div></div></div>
        <div><div style="font-size:13px;margin-bottom:8px;color:var(--aw-text-2)"><span data-i18n="progress:text.008">校验签名</span></div><div class="progress"><div class="track"><div class="fill warning" style="width:68%"></div></div><div class="pct">68%</div></div></div>
        <div><div style="font-size:13px;margin-bottom:8px;color:var(--aw-text-2)"><span data-i18n="progress:text.009">推送失败 — 17 台设备超时</span></div><div class="progress"><div class="track"><div class="fill danger" style="width:23%"></div></div><div class="pct">23%</div></div></div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title"><span data-i18n="progress:text.010">环形进度</span></h3>
      <div class="row" style="gap:32px;justify-content:flex-start">
        <div class="progress-circle">
          <svg width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" fill="none" stroke="var(--aw-fill-3)" stroke-width="6"/><circle cx="40" cy="40" r="34" fill="none" stroke="var(--aw-primary)" stroke-width="6" stroke-dasharray="213.6" stroke-dashoffset="123.9" stroke-linecap="round"/></svg>
          <div class="lbl">42%</div>
        </div>
        <div class="progress-circle">
          <svg width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" fill="none" stroke="var(--aw-fill-3)" stroke-width="6"/><circle cx="40" cy="40" r="34" fill="none" stroke="var(--aw-success)" stroke-width="6" stroke-dasharray="213.6" stroke-dashoffset="0" stroke-linecap="round"/></svg>
          <div class="lbl" style="color:var(--aw-success)">✓</div>
        </div>
        <div class="progress-circle">
          <svg width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" fill="none" stroke="var(--aw-fill-3)" stroke-width="6"/><circle cx="40" cy="40" r="34" fill="none" stroke="var(--aw-danger)" stroke-width="6" stroke-dasharray="213.6" stroke-dashoffset="49.1" stroke-linecap="round"/></svg>
          <div class="lbl" style="color:var(--aw-danger)">!</div>
        </div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title"><span data-i18n="progress:text.011">Steps · 多步流程</span></h3>
      <div class="steps">
        <div class="step done"><div class="num">✓</div><div class="lbl"><span data-i18n="progress:text.012">选择设备</span></div><div class="sub"><span data-i18n="progress:text.013">1,284 台</span></div></div>
        <div class="step done"><div class="num">✓</div><div class="lbl"><span data-i18n="progress:text.014">选择固件包</span></div><div class="sub">v3.5.0</div></div>
        <div class="step active"><div class="num">3</div><div class="lbl"><span data-i18n="progress:text.015">配置策略</span></div><div class="sub"><span data-i18n="progress:text.016">设置中</span></div></div>
        <div class="step"><div class="num">4</div><div class="lbl"><span data-i18n="progress:text.017">确认提交</span></div><div class="sub"><span data-i18n="progress:text.018">未开始</span></div></div>
      </div>
    </div>
  </div>
  <div class="subsection">
    <h3><span data-i18n="progress:session.title">远程会话进度 · Remote Session</span></h3>
    <div class="steps">
      <div class="step done"><div class="num">✓</div><div class="lbl"><span data-i18n="progress:session.waiting">等待设备</span></div><div class="sub"><span data-i18n="progress:session.waitingSub">校验在线与占用</span></div></div>
      <div class="step active"><div class="num">2</div><div class="lbl"><span data-i18n="progress:session.connecting">建立连接</span></div><div class="sub"><span data-i18n="progress:session.connectingSub">等待设备确认</span></div></div>
      <div class="step"><div class="num">3</div><div class="lbl"><span data-i18n="progress:session.active">会话中</span></div><div class="sub"><span data-i18n="progress:session.activeSub">显示操作者与时长</span></div></div>
      <div class="step"><div class="num">4</div><div class="lbl"><span data-i18n="progress:session.ended">结束与日志</span></div><div class="sub"><span data-i18n="progress:session.endedSub">可从历史继续追踪</span></div></div>
    </div>
    <p style="font-size:13px;color:var(--aw-text-2);line-height:1.7;margin-top:12px"><span data-i18n="progress:session.rule">设备拒绝、超时、服务异常和用户中断是会话终态，不得混入推送批次四态。关闭页面不能丢失任务入口。</span></p>
  </div>
</section>
</div>
`;
