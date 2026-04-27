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
    <p class="lede" style="margin-bottom:12px">异步 / 批量操作的整页终态展示。区别于 Toast / Modal，Result 占据整个内容区，意味着"上一步操作已结束，决定下一步"。</p>
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
  <div class="extra" style="font-family:var(--aw-font-mono);background:var(--aw-fill-1);padding:6px 8px;border-radius:4px;margin-top:8px">trace=4f8a-2c1b-d934</div>
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
    <h3>Result · 部分成功（批量典型）</h3>
    <p class="lede" style="margin-bottom:12px">最棘手的态：N 个成功 + M 个失败。必须同时显示成功摘要 + 失败明细，不能只显示一个数字。</p>
    <div class="surface" style="padding:0;overflow:hidden">
      <div class="result-partial">
        <div class="rp-h">
          <div class="rp-icn">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div class="rp-meta">
            <h4>批量推送已完成 · 部分失败</h4>
            <div class="rp-stats">
              <span class="rp-stat ok"><b>1,250</b> 成功</span>
              <span class="rp-stat err"><b>34</b> 失败</span>
              <span class="rp-stat dim">共 1,284 台</span>
            </div>
          </div>
        </div>
        <div class="rp-progress">
          <div class="track">
            <div class="seg ok" style="width:97.4%"></div>
            <div class="seg err" style="width:2.6%"></div>
          </div>
          <div class="rp-pct">完成率 97.4% · 失败率 2.6%</div>
        </div>
        <div class="rp-detail">
          <div class="rp-d-h">失败明细 (34 项)</div>
          <table class="dt" style="border-radius:0;border:0">
            <thead><tr><th style="width:160px">设备 SN</th><th style="width:140px">设备名称</th><th style="width:140px">失败原因</th><th>错误码</th><th style="width:80px">操作</th></tr></thead>
            <tbody>
              <tr><td><code>DEV-86420075</code></td><td>终端-上海-001</td><td>网络超时</td><td><code>OTA-CONN-503</code></td><td><button class="btn btn-link btn-sm" style="padding:0">详情</button></td></tr>
              <tr><td><code>DEV-86420089</code></td><td>终端-北京-014</td><td>设备离线</td><td><code>OTA-DEV-OFFLINE</code></td><td><button class="btn btn-link btn-sm" style="padding:0">详情</button></td></tr>
              <tr><td><code>DEV-86420112</code></td><td>终端-广州-007</td><td>磁盘空间不足</td><td><code>OTA-DISK-FULL</code></td><td><button class="btn btn-link btn-sm" style="padding:0">详情</button></td></tr>
              <tr><td><code>DEV-86420144</code></td><td>终端-成都-022</td><td>证书过期</td><td><code>OTA-CERT-EXPIRED</code></td><td><button class="btn btn-link btn-sm" style="padding:0">详情</button></td></tr>
              <tr><td colspan="5" style="text-align:center;color:var(--aw-text-3);font-size:12px;padding:12px">还有 30 项 · <a href="#" style="color:var(--aw-primary)">展开查看全部</a></td></tr>
            </tbody>
          </table>
        </div>
        <div class="rp-acts">
          <button class="btn">返回</button>
          <button class="btn">下载错误清单 (CSV)</button>
          <button class="btn btn-primary">重试失败项 (34)</button>
        </div>
      </div>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong>"重试失败项"按钮</strong>触发后立即跳到 Result Loading 态，完成后再跳到新一份 Result（套娃直至全部成功或用户放弃）。</div></div>
    <div class="alert warning" style="margin-top:8px"><div class="ico">!</div><div class="content"><strong>失败明细 ≥ 50 条</strong>时强制要求"下载 CSV"，不要在页面内全量列出。表格仅显示前 5 条 + "展开查看全部"。</div></div>
  </div>

  <div class="subsection">
    <h3>Result 与 Toast / Modal / Alert 的边界</h3>
    <div class="alert info"><div class="ico">i</div><div class="content"><strong>判断口诀：</strong>"操作的下一步动作是回到列表 / 重试 / 跳转其他页面" → Result。"操作完成后用户继续在原页面工作" → Toast。"操作前需要决策" → Modal。"持续提示与上下文相关" → Alert。详细对照参见 <a href="#/toast" style="color:var(--aw-primary)">Toast 章节</a>。</div></div>
  </div>

  <div class="subsection">
    <h3>反例</h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong>不要在 Result 失败页只写"操作失败"：</strong>必须含错误码 + traceId + 建议下一步动作。</div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>不要把"部分成功"伪装成"成功"或"失败"：</strong>用户会误解。明确显示 N 成功 + M 失败两个数字。</div></div>
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
