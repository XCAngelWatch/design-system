/* AngelWatch Design System — page: avatar-result (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["avatar-result"] = `
<div class="content">
<!-- AVATAR + RESULT + DESCRIPTION -->
<section class="section" id="avatar-result">
  <p class="section-eyebrow">Components · 头像 / 结果 / 描述列表</p>
  <h2>Avatar · Result · Description List</h2>

  <div class="subsection">
    <h3>Avatar · 圆形 / 方形 / 群组</h3>
    <div style="display:flex;gap:32px;align-items:center;flex-wrap:wrap">
<div class="avatar avatar-lg avatar-fb-1">王</div>
<div class="avatar avatar-fb-2">李</div>
<div class="avatar avatar-sm avatar-fb-3">张</div>
<div class="avatar avatar-square avatar-fb-4" style="width:48px;height:48px;font-size:18px">SH</div>
<div class="avatar avatar-square avatar-fb-5">BJ</div>
<div class="avatar-group">
  <div class="avatar avatar-fb-1">王</div>
  <div class="avatar avatar-fb-2">李</div>
  <div class="avatar avatar-fb-3">张</div>
  <div class="avatar avatar-fb-4">陈</div>
  <div class="avatar" style="background:var(--aw-fill-2);color:var(--aw-text-2)">+9</div>
</div>
    </div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0">▸ 用户头像用圆形；终端 / 设备 / 仓库等"物"用方形；群组 fallback 色板共 5 色循环。</p>
  </div>

  <div class="subsection">
    <h3>Result · 结果页（操作终态）</h3>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px">
<div class="result-mock success">
  <div class="ico"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
  <h4>批量升级已下发</h4>
  <p class="desc">已向 86 台终端推送 v3.4.2，推送进度可在升级中心实时查看。</p>
  <div class="extra"><div>计划：86 / 86 台</div><div>预计完成：14:40 (当地时间)</div><div>失败回滚阈值：≥ 5%</div></div>
  <div style="display:flex;gap:8px;justify-content:center"><button class="btn btn-primary">查看进度</button><button class="btn">返回列表</button></div>
</div>
<div class="result-mock error">
  <div class="ico"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
  <h4>推送失败</h4>
  <p class="desc">网络中断或目标终端拒绝接收，请检查后重试。</p>
  <div class="extra"><div>错误码：<code>OTA-CONN-503</code></div><div>失败时间：14:32:08</div><div>建议：检查 MQTT broker 网络状态</div></div>
  <div style="display:flex;gap:8px;justify-content:center"><button class="btn btn-primary">重试</button><button class="btn">查看日志</button></div>
</div>
<div class="result-mock info">
  <div class="ico"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></div>
  <h4>暂无可升级版本</h4>
  <p class="desc">所选 86 台终端已全部为最新版（v3.4.2）。</p>
  <div style="display:flex;gap:8px;justify-content:center"><button class="btn">返回</button></div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3>Description List · 描述列表（详情页关键信息）</h3>
    <div class="desc-list" data-cols="3">
<div class="dl-grid">
  <div class="dl-item"><div class="dl-l">设备 SN</div><div class="dl-v" style="font-family:var(--aw-font-mono)">DEV-86420075</div></div>
  <div class="dl-item"><div class="dl-l">名称</div><div class="dl-v">终端-上海-001</div></div>
  <div class="dl-item"><div class="dl-l">状态</div><div class="dl-v"><span class="status-dot online">在线</span></div></div>
  <div class="dl-item"><div class="dl-l">所属区域</div><div class="dl-v">华东一区 / 上海站 / 嘉定仓</div></div>
  <div class="dl-item"><div class="dl-l">固件版本</div><div class="dl-v">v3.4.2 <span class="tag tag-blue" style="margin-left:6px">最新</span></div></div>
  <div class="dl-item"><div class="dl-l">硬件型号</div><div class="dl-v">AW-T200-PRO</div></div>
  <div class="dl-item"><div class="dl-l">激活时间</div><div class="dl-v">2025/08/14 09:32:11</div></div>
  <div class="dl-item"><div class="dl-l">最后心跳</div><div class="dl-v">12 秒前</div></div>
  <div class="dl-item"><div class="dl-l">负责人</div><div class="dl-v"><div class="avatar avatar-sm avatar-fb-1" style="display:inline-grid;vertical-align:middle">王</div> 王志强</div></div>
</div>
    </div>
  </div>
</section>
</div>
`;
