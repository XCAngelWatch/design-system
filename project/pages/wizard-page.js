/* AngelWatch Design System — page: wizard-page (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["wizard-page"] = `
<div class="content">
<!-- WIZARD PAGE -->
<section class="section" id="wizard-page">
  <p class="section-eyebrow">Patterns · WizardPage</p>
  <h2>WizardPage · 向导页</h2>
  <p class="lede">顶部 Steps 进度 → 中部内容 → 底部上一步 / 下一步。用于 OTA 推送、批量导入、复杂配置。每步都可保存草稿，避免长流程中断丢失。</p>
  <div class="frame">
    <div class="frame-head">📐 WizardPage · OTA 推送向导</div>
    <div class="frame-body" style="padding:0">
<div class="wizard-mock">
  <div class="top">
    <div class="steps">
      <div class="step done"><div class="num">✓</div><div class="lbl">选择设备</div><div class="sub">1,284 台</div></div>
      <div class="step done"><div class="num">✓</div><div class="lbl">选择固件包</div><div class="sub">v3.5.0</div></div>
      <div class="step active"><div class="num">3</div><div class="lbl">配置策略</div><div class="sub">设置中</div></div>
      <div class="step"><div class="num">4</div><div class="lbl">确认提交</div><div class="sub">待执行</div></div>
    </div>
  </div>
  <div class="body">
    <h3 style="margin:0 0 16px;font-size:16px">推送策略</h3>
    <div class="form-demo" style="max-width:none">
      <div class="form-row"><div class="lbl">推送时间</div><div><div class="row" style="gap:18px"><label class="check radio"><input type="checkbox" /><span class="box"></span>立即推送</label><label class="check radio"><input type="checkbox" checked /><span class="box"></span>定时推送</label></div></div></div>
      <div class="form-row"><div class="lbl">执行窗口</div><div><div class="dp dp-range"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg><span class="val">2026-04-28 02:00</span><span class="sep">→</span><span class="val">04-28 06:00</span></div><div class="help" style="font-size:11px;color:var(--aw-text-3);margin-top:4px">仅在该时间窗口内执行，超时未完成的设备将延后到次日同窗口</div></div></div>
      <div class="form-row"><div class="lbl">并发上限</div><div><div class="row"><input class="input" value="200" style="width:120px" /><span style="font-size:13px;color:var(--aw-text-3)">台 / 同时推送</span></div></div></div>
      <div class="form-row"><div class="lbl">失败重试</div><div class="row"><span class="switch is-on"></span><span style="font-size:13px;color:var(--aw-text-2)">自动重试 3 次，间隔 5 分钟</span></div></div>
      <div class="form-row"><div class="lbl">低电量保护</div><div class="row"><span class="switch is-on"></span><span style="font-size:13px;color:var(--aw-text-2)">电量低于 30% 跳过</span></div></div>
    </div>
  </div>
  <div class="bottom">
    <button class="btn">← 上一步</button>
    <div class="row"><button class="btn btn-text">保存草稿</button><button class="btn">取消</button><button class="btn btn-primary">下一步 →</button></div>
  </div>
</div>
    </div>
  </div>
</section>
</div>
`;
