/* AngelWatch Design System — page: feedback */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["feedback"] = `
<div class="content">
<section class="section" id="feedback">
  <p class="section-eyebrow">Components · 反馈</p>
  <h2>Feedback</h2>
  <p class="lede">提示横条用于持续性的状态信息；toast/message 用于瞬时操作反馈；modal 用于阻塞性的二次确认。</p>

  <div class="demo-stack">
    <div class="surface">
      <h3 class="card-title">Alert · 提示横条</h3>
      <div class="demo-grid">
        <div class="alert info"><div class="ico">i</div><div class="content"><strong>OTA 计划已生成</strong>共影响 1,284 台设备，将于今晚 02:00 开始推送。</div></div>
        <div class="alert success"><div class="ico">✓</div><div class="content"><strong>推送成功</strong>1,284 台设备已收到更新通知。</div></div>
        <div class="alert warning"><div class="ico">!</div><div class="content"><strong>低电量预警</strong>当前批次中 18 台设备电量低于 20%，可能升级失败。</div></div>
        <div class="alert error"><div class="ico">×</div><div class="content"><strong>推送失败</strong>34 台设备未确认接收，请稍后重试或查看故障日志。</div></div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">Modal · 弹窗</h3>
      <div class="modal-stage">
        <div class="modal-demo">
          <div class="head"><h4>确认删除设备</h4><span style="color:var(--aw-text-3);cursor:pointer;font-size:18px">×</span></div>
          <div class="body">将删除 <strong>终端-上海-001</strong> 及其所有历史数据。此操作不可撤销，确认继续？</div>
          <div class="foot"><button class="btn">取消</button><button class="btn btn-danger">确认删除</button></div>
        </div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">Empty · 空状态</h3>
      <div class="empty">
        <div class="glyph"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M12 8v8"/></svg></div>
        <div class="title">暂无设备</div>
        <div class="sub">尚未注册任何终端设备，先添加一台开始监控。</div>
        <button class="btn btn-primary">+ 添加设备</button>
      </div>
    </div>
  </div>
</section>
</div>
`;
