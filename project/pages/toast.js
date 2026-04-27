/* AngelWatch Design System — page: toast (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["toast"] = `
<div class="content">
<section class="section" id="toast">
  <p class="section-eyebrow">Components · 瞬时反馈</p>
  <h2>Toast / Tooltip / Popover</h2>
  <p class="lede">Toast 浮于右上角，自动消失 (3s)，用于操作结果。Tooltip 用于解释行内文字。Popover 承载结构化补充内容。</p>

  <div class="demo-grid cols-2">
    <div class="surface">
<h3 style="margin:0 0 12px;font-size:14px">Toast / Notification</h3>
<div class="toast-stack">
  <div class="toast success"><div class="ico">✓</div><div class="body"><strong>已保存</strong>设备配置已生效</div><div class="close">×</div></div>
  <div class="toast info"><div class="ico">i</div><div class="body"><strong>OTA 推送已发起</strong><small>共 1,284 台设备 · 预计 02:12 完成</small></div><div class="close">×</div></div>
  <div class="toast warning"><div class="ico">!</div><div class="body"><strong>低电量预警</strong>批次中 18 台设备电量 &lt; 20%</div><div class="close">×</div></div>
  <div class="toast error"><div class="ico">×</div><div class="body"><strong>推送失败</strong>34 台设备未确认接收</div><div class="close">×</div></div>
</div>
    </div>
    <div class="surface">
<h3 style="margin:0 0 12px;font-size:14px">Tooltip &amp; Popover</h3>
<div style="padding:16px 0 0">
  <div class="tip-demo">
    <span style="border-bottom:1px dotted var(--aw-text-3)">SHA-256 校验和</span>
    <div class="tip">服务端会比对此值，一致才允许下发到设备</div>
  </div>
</div>
<div style="padding:60px 0 0;position:relative;height:200px">
  <div style="position:relative;display:inline-block">
    <span class="status-dot fault" style="cursor:pointer;border-bottom:1px dotted var(--aw-danger)">故障</span>
    <div class="popover">
      <div class="ttl">故障详情 · DEV-86420144</div>
      <div style="font-size:12px;color:var(--aw-text-2);line-height:1.6">
        <div style="display:flex;justify-content:space-between"><span>错误码</span><code class="mono">E-AGT-0142</code></div>
        <div style="display:flex;justify-content:space-between"><span>触发时间</span><span>1 小时前</span></div>
        <div style="display:flex;justify-content:space-between"><span>看门狗</span><span style="color:var(--aw-danger)">无响应</span></div>
      </div>
      <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--aw-border-3)"><button class="btn btn-link btn-sm" style="padding:0">查看完整日志 →</button></div>
    </div>
  </div>
</div>
    </div>
  </div>
</section>
</div>
`;
