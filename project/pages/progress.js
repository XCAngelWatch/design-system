/* AngelWatch Design System — page: progress (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["progress"] = `
<div class="content">
<section class="section" id="progress">
  <p class="section-eyebrow">Components · 进度</p>
  <h2>Progress &amp; Steps</h2>
  <p class="lede">OTA 升级、批量推送、固件上传——任何耗时操作都用 Progress 提供持续反馈。多步流程使用 Steps。</p>

  <div class="demo-stack">
    <div class="surface">
      <h3 class="card-title">线性进度</h3>
      <div style="display:flex;flex-direction:column;gap:18px;max-width:640px">
        <div>
          <div style="font-size:13px;margin-bottom:8px;display:flex;justify-content:space-between"><span><strong>v3.4.1 → v3.5.0</strong> · 估计 4 分钟</span><span class="mono" style="color:var(--aw-text-3)">42% · 1,284 / 3,058 台</span></div>
          <div class="progress"><div class="track"><div class="fill" style="width:42%"></div></div><div class="pct">42%</div></div>
        </div>
        <div><div style="font-size:13px;margin-bottom:8px;color:var(--aw-text-2)">下载固件包</div><div class="progress"><div class="track"><div class="fill success" style="width:100%"></div></div><div class="pct">100%</div></div></div>
        <div><div style="font-size:13px;margin-bottom:8px;color:var(--aw-text-2)">校验签名</div><div class="progress"><div class="track"><div class="fill warning" style="width:68%"></div></div><div class="pct">68%</div></div></div>
        <div><div style="font-size:13px;margin-bottom:8px;color:var(--aw-text-2)">推送失败 — 17 台设备超时</div><div class="progress"><div class="track"><div class="fill danger" style="width:23%"></div></div><div class="pct">23%</div></div></div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">环形进度</h3>
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
      <h3 class="card-title">Steps · 多步流程</h3>
      <div class="steps">
        <div class="step done"><div class="num">✓</div><div class="lbl">选择设备</div><div class="sub">1,284 台</div></div>
        <div class="step done"><div class="num">✓</div><div class="lbl">选择固件包</div><div class="sub">v3.5.0</div></div>
        <div class="step active"><div class="num">3</div><div class="lbl">配置策略</div><div class="sub">设置中</div></div>
        <div class="step"><div class="num">4</div><div class="lbl">确认提交</div><div class="sub">待执行</div></div>
      </div>
    </div>
  </div>
</section>
</div>
`;
