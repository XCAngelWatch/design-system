/* AngelWatch Design System — page: wizard-page (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["wizard-page"] = `
<div class="content">
<!-- WIZARD PAGE -->
<section class="section" id="wizard-page">
  <p class="section-eyebrow"><span data-i18n="wizard-page:text.001">页面蓝图 · WizardPage</span></p>
  <h2><span data-i18n="wizard-page:text.002">向导页 WizardPage</span></h2>
  <p class="lede"><span data-i18n="wizard-page:text.003">顶部 Steps 进度 → 中部内容 → 底部上一步 / 下一步。用于 OTA 推送、批量导入、复杂配置。每步都可保存草稿，避免长流程中断丢失。</span></p>
  <div class="frame">
    <div class="frame-head"><span data-i18n="wizard-page:text.004">📐 WizardPage · OTA 推送向导</span></div>
    <div class="frame-body" style="padding:0">
<div class="wizard-mock">
  <div class="top">
    <div class="steps">
      <div class="step done"><div class="num">✓</div><div class="lbl"><span data-i18n="wizard-page:text.005">选择设备</span></div><div class="sub"><span data-i18n="wizard-page:text.006">1,284 台</span></div></div>
      <div class="step done"><div class="num">✓</div><div class="lbl"><span data-i18n="wizard-page:text.007">选择固件包</span></div><div class="sub">v3.5.0</div></div>
      <div class="step active"><div class="num">3</div><div class="lbl"><span data-i18n="wizard-page:text.008">配置策略</span></div><div class="sub"><span data-i18n="wizard-page:text.009">设置中</span></div></div>
      <div class="step"><div class="num">4</div><div class="lbl"><span data-i18n="wizard-page:text.010">确认提交</span></div><div class="sub"><span data-i18n="wizard-page:text.011">待执行</span></div></div>
    </div>
  </div>
  <div class="body">
    <h3 style="margin:0 0 16px;font-size:16px"><span data-i18n="wizard-page:text.012">推送策略</span></h3>
    <div class="form-demo" style="max-width:none">
      <div class="form-row"><div class="lbl"><span data-i18n="wizard-page:text.013">推送时间</span></div><div><div class="row" style="gap:18px"><label class="check radio"><input type="checkbox" /><span class="box"></span><span data-i18n="wizard-page:text.014">立即推送</span></label><label class="check radio"><input type="checkbox" checked /><span class="box"></span><span data-i18n="wizard-page:text.015">定时推送</span></label></div></div></div>
      <div class="form-row"><div class="lbl"><span data-i18n="wizard-page:text.016">执行窗口</span></div><div><div class="dp dp-range"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg><span class="val">2026-04-28 02:00</span><span class="sep">→</span><span class="val">04-28 06:00</span></div><div class="help" style="font-size:11px;color:var(--aw-text-3);margin-top:4px"><span data-i18n="wizard-page:text.017">仅在该时间窗口内执行，超时未完成的设备将延后到次日同窗口</span></div></div></div>
      <div class="form-row"><div class="lbl"><span data-i18n="wizard-page:text.018">并发上限</span></div><div><div class="row"><input class="input" value="200" style="width:120px" /><span style="font-size:13px;color:var(--aw-text-3)"><span data-i18n="wizard-page:text.019">台 / 同时推送</span></span></div></div></div>
      <div class="form-row"><div class="lbl"><span data-i18n="wizard-page:text.020">失败重试</span></div><div class="row"><span class="switch is-on"></span><span style="font-size:13px;color:var(--aw-text-2)"><span data-i18n="wizard-page:text.021">自动重试 3 次，间隔 5 分钟</span></span></div></div>
      <div class="form-row"><div class="lbl"><span data-i18n="wizard-page:text.022">低电量保护</span></div><div class="row"><span class="switch is-on"></span><span style="font-size:13px;color:var(--aw-text-2)"><span data-i18n="wizard-page:text.023">电量低于 30% 跳过</span></span></div></div>
    </div>
  </div>
  <div class="bottom">
    <button class="btn"><span data-i18n="wizard-page:text.024">← 上一步</span></button>
    <div class="row"><button class="btn btn-text"><span data-i18n="wizard-page:text.025">保存草稿</span></button><button class="btn"><span data-i18n="wizard-page:text.026">取消</span></button><button class="btn btn-primary"><span data-i18n="wizard-page:text.027">下一步 →</span></button></div>
  </div>
</div>
    </div>
  </div>
</section>
</div>
`;
