/* AngelWatch Design System — page: avatar-result (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["avatar-result"] = `
<div class="content">
<!-- AVATAR + RESULT + DESCRIPTION -->
<section class="section" id="avatar-result">
  <p class="section-eyebrow"><span data-i18n="avatar-result:text.001">业务模式 · 结果与描述</span></p>
  <h2><span data-i18n="avatar-result:text.002">头像 / 结果 / 描述 Avatar / Result / Description</span></h2>

  <div class="subsection">
    <h3><span data-i18n="avatar-result:text.003">Avatar · 圆形 / 方形 / 群组</span></h3>
    <div style="display:flex;gap:32px;align-items:center;flex-wrap:wrap">
<div class="avatar avatar-lg avatar-fb-1"><span data-i18n="avatar-result:text.004">王</span></div>
<div class="avatar avatar-fb-2"><span data-i18n="avatar-result:text.005">李</span></div>
<div class="avatar avatar-sm avatar-fb-3"><span data-i18n="avatar-result:text.006">张</span></div>
<div class="avatar avatar-square avatar-fb-4" style="width:48px;height:48px;font-size:18px">SH</div>
<div class="avatar avatar-square avatar-fb-5">BJ</div>
<div class="avatar-group">
  <div class="avatar avatar-fb-1"><span data-i18n="avatar-result:text.007">王</span></div>
  <div class="avatar avatar-fb-2"><span data-i18n="avatar-result:text.008">李</span></div>
  <div class="avatar avatar-fb-3"><span data-i18n="avatar-result:text.009">张</span></div>
  <div class="avatar avatar-fb-4"><span data-i18n="avatar-result:text.010">陈</span></div>
  <div class="avatar" style="background:var(--aw-fill-2);color:var(--aw-text-2)">+9</div>
</div>
    </div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0"><span data-i18n="avatar-result:text.011">▸ 用户头像用圆形；终端 / 设备 / 应用等"物"用方形；群组 fallback 色板共 5 色循环。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="avatar-result:text.012">Result · 结果页（操作终态）</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="avatar-result:text.013">异步 / 批量操作的整页终态展示。区别于 Message / Notification / Modal，Result 占据整个内容区，意味着"上一步操作已结束，决定下一步"。</span></p>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px">
<div class="result-mock success">
  <div class="ico"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
  <h4><span data-i18n="avatar-result:text.014">批量升级已下发</span></h4>
  <p class="desc"><span data-i18n="avatar-result:text.015">已向 86 台终端推送 v3.4.2，推送进度可在升级中心实时查看。</span></p>
  <div class="extra"><div><span data-i18n="avatar-result:text.016">计划：86 / 86 台</span></div><div><span data-i18n="avatar-result:text.017">预计完成：14:40 (当地时间)</span></div><div><span data-i18n="avatar-result:text.018">失败回滚阈值：≥ 5%</span></div></div>
  <div style="display:flex;gap:8px;justify-content:center"><button class="btn btn-primary"><span data-i18n="avatar-result:text.019">查看进度</span></button><button class="btn"><span data-i18n="avatar-result:text.020">返回列表</span></button></div>
</div>
<div class="result-mock error">
  <div class="ico"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
  <h4><span data-i18n="avatar-result:text.021">推送失败</span></h4>
  <p class="desc"><span data-i18n="avatar-result:text.022">网络中断或目标终端拒绝接收，请检查后重试。</span></p>
  <div class="extra"><div><span data-i18n="avatar-result:text.023">错误码：</span><code>OTA-CONN-503</code></div><div><span data-i18n="avatar-result:text.024">失败时间：14:32:08</span></div><div><span data-i18n="avatar-result:text.025">建议：检查 MQTT broker 网络状态</span></div></div>
  <div class="extra" style="font-family:var(--aw-font-mono);background:var(--aw-fill-1);padding:6px 8px;border-radius:4px;margin-top:8px">trace=4f8a-2c1b-d934</div>
  <div style="display:flex;gap:8px;justify-content:center"><button class="btn btn-primary"><span data-i18n="avatar-result:text.026">重试</span></button><button class="btn"><span data-i18n="avatar-result:text.027">查看日志</span></button></div>
</div>
<div class="result-mock info">
  <div class="ico"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></div>
  <h4><span data-i18n="avatar-result:text.028">暂无可升级版本</span></h4>
  <p class="desc"><span data-i18n="avatar-result:text.029">所选 86 台终端已全部为最新版（v3.4.2）。</span></p>
  <div style="display:flex;gap:8px;justify-content:center"><button class="btn"><span data-i18n="avatar-result:text.030">返回</span></button></div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="avatar-result:text.031">Result · 部分成功（批量典型）</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="avatar-result:text.032">最棘手的态：N 个成功 + M 个失败。必须同时显示成功摘要 + 失败明细，不能只显示一个数字。</span></p>
    <div class="surface" style="padding:0;overflow:hidden">
      <div class="result-partial">
        <div class="rp-h">
          <div class="rp-icn">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div class="rp-meta">
            <h4><span data-i18n="avatar-result:text.033">批量推送已完成 · 部分失败</span></h4>
            <div class="rp-stats">
              <span class="rp-stat ok"><b>1,250</b><span data-i18n="avatar-result:text.034"> 成功</span></span>
              <span class="rp-stat err"><b>34</b><span data-i18n="avatar-result:text.035"> 失败</span></span>
              <span class="rp-stat dim"><span data-i18n="avatar-result:text.036">共 1,284 台</span></span>
            </div>
          </div>
        </div>
        <div class="rp-progress">
          <div class="track">
            <div class="seg ok" style="width:97.4%"></div>
            <div class="seg err" style="width:2.6%"></div>
          </div>
          <div class="rp-pct"><span data-i18n="avatar-result:text.037">完成率 97.4% · 失败率 2.6%</span></div>
        </div>
        <div class="rp-detail">
          <div class="rp-d-h"><span data-i18n="avatar-result:text.038">失败明细 (34 项)</span></div>
          <table class="dt" style="border-radius:0;border:0">
            <thead><tr><th style="width:160px"><span data-i18n="avatar-result:text.039">设备 SN</span></th><th style="width:140px"><span data-i18n="avatar-result:text.040">设备名称</span></th><th style="width:140px"><span data-i18n="avatar-result:text.041">失败原因</span></th><th><span data-i18n="avatar-result:text.042">错误码</span></th><th style="width:80px" class="colactions"><span data-i18n="avatar-result:text.043">操作</span></th></tr></thead>
            <tbody>
              <tr><td><code>DEV-86420075</code></td><td><span data-i18n="avatar-result:text.044">终端-上海-001</span></td><td><span data-i18n="avatar-result:text.045">网络超时</span></td><td><code>OTA-CONN-503</code></td><td class="colactions"><button class="btn btn-link btn-sm" style="padding:0"><span data-i18n="avatar-result:text.046">详情</span></button></td></tr>
              <tr><td><code>DEV-86420089</code></td><td><span data-i18n="avatar-result:text.047">终端-北京-014</span></td><td><span data-i18n="avatar-result:text.048">设备离线</span></td><td><code>OTA-DEV-OFFLINE</code></td><td class="colactions"><button class="btn btn-link btn-sm" style="padding:0"><span data-i18n="avatar-result:text.049">详情</span></button></td></tr>
              <tr><td><code>DEV-86420112</code></td><td><span data-i18n="avatar-result:text.050">终端-广州-007</span></td><td><span data-i18n="avatar-result:text.051">磁盘空间不足</span></td><td><code>OTA-DISK-FULL</code></td><td class="colactions"><button class="btn btn-link btn-sm" style="padding:0"><span data-i18n="avatar-result:text.052">详情</span></button></td></tr>
              <tr><td><code>DEV-86420144</code></td><td><span data-i18n="avatar-result:text.053">终端-成都-022</span></td><td><span data-i18n="avatar-result:text.054">证书过期</span></td><td><code>OTA-CERT-EXPIRED</code></td><td class="colactions"><button class="btn btn-link btn-sm" style="padding:0"><span data-i18n="avatar-result:text.055">详情</span></button></td></tr>
              <tr><td colspan="5" style="text-align:center;color:var(--aw-text-3);font-size:12px;padding:12px"><span data-i18n="avatar-result:text.056">还有 30 项 · </span><button class="btn btn-link btn-sm"><span data-i18n="avatar-result:text.057">展开查看全部</span></button></td></tr>
            </tbody>
          </table>
        </div>
        <div class="rp-acts">
          <button class="btn"><span data-i18n="avatar-result:text.058">返回</span></button>
          <button class="btn"><span data-i18n="avatar-result:text.059">下载错误清单 (CSV)</span></button>
          <button class="btn btn-primary"><span data-i18n="avatar-result:text.060">重试失败项 (34)</span></button>
        </div>
      </div>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="avatar-result:text.061">"重试失败项"按钮</span></strong><span data-i18n="avatar-result:text.062">触发后立即跳到 Result Loading 态，完成后再跳到新一份 Result（套娃直至全部成功或用户放弃）。</span></div></div>
    <div class="alert warning" style="margin-top:8px"><div class="ico">!</div><div class="content"><strong><span data-i18n="avatar-result:text.063">失败明细 ≥ 50 条</span></strong><span data-i18n="avatar-result:text.064">时强制要求"下载 CSV"，不要在页面内全量列出。表格仅预览前 5 条，完整明细只能通过 CSV 获取。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="avatar-result:text.065">Result 与 Message / Notification / Modal / Alert 的边界</span></h3>
    <div class="alert info"><div class="ico">i</div><div class="content"><strong><span data-i18n="avatar-result:text.066">判断口诀：</span></strong><span data-i18n="avatar-result:text.067">"下一步是回到列表 / 重试 / 跳转" → Result。"继续在原页工作" → Message。"异步任务仍在运行" → Notification。"操作前需要决策" → Modal。"持续提示与上下文相关" → Alert。详细对照参见 </span><a href="#/toast" style="color:var(--aw-primary)"><span data-i18n="avatar-result:text.068">消息与通知章节</span></a><span data-i18n="avatar-result:text.069">。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="avatar-result:text.070">反例</span></h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong><span data-i18n="avatar-result:text.071">不要在 Result 失败页只写"操作失败"：</span></strong><span data-i18n="avatar-result:text.072">必须含错误码 + traceId + 建议下一步动作。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="avatar-result:text.073">不要把"部分成功"伪装成"成功"或"失败"：</span></strong><span data-i18n="avatar-result:text.074">用户会误解。明确显示 N 成功 + M 失败两个数字。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="avatar-result:text.075">Description List · 描述列表（详情页关键信息）</span></h3>
    <div class="desc-list" data-cols="3">
<div class="dl-grid">
  <div class="dl-item"><div class="dl-l"><span data-i18n="avatar-result:text.076">设备 SN</span></div><div class="dl-v" style="font-family:var(--aw-font-mono)">DEV-86420075</div></div>
  <div class="dl-item"><div class="dl-l"><span data-i18n="avatar-result:text.077">名称</span></div><div class="dl-v"><span data-i18n="avatar-result:text.078">终端-上海-001</span></div></div>
  <div class="dl-item"><div class="dl-l"><span data-i18n="avatar-result:text.079">状态</span></div><div class="dl-v"><span class="status-dot online"><span data-i18n="avatar-result:text.080">在线</span></span></div></div>
  <div class="dl-item"><div class="dl-l"><span data-i18n="avatar-result:text.081">所属区域</span></div><div class="dl-v"><span data-i18n="avatar-result:text.082">华东一区 / 上海运营中心 / P5 设备组</span></div></div>
  <div class="dl-item"><div class="dl-l"><span data-i18n="avatar-result:text.083">OTA 版本</span></div><div class="dl-v">v3.4.2 <span class="tag tag-blue" style="margin-left:6px"><span data-i18n="avatar-result:text.084">最新</span></span></div></div>
  <div class="dl-item"><div class="dl-l"><span data-i18n="avatar-result:text.085">硬件型号</span></div><div class="dl-v">AW-T200-PRO</div></div>
  <div class="dl-item"><div class="dl-l"><span data-i18n="avatar-result:text.086">激活时间</span></div><div class="dl-v">2025/08/14 09:32:11</div></div>
  <div class="dl-item"><div class="dl-l"><span data-i18n="avatar-result:text.087">最后心跳</span></div><div class="dl-v"><span data-i18n="avatar-result:text.088">12 秒前</span></div></div>
  <div class="dl-item"><div class="dl-l"><span data-i18n="avatar-result:text.089">负责人</span></div><div class="dl-v"><div class="avatar avatar-sm avatar-fb-1" style="display:inline-grid;vertical-align:middle"><span data-i18n="avatar-result:text.090">王</span></div><span data-i18n="avatar-result:text.091"> 王志强</span></div></div>
</div>
    </div>
  </div>
  <div class="subsection"><h3><span data-i18n="common:component.usedBy">页面蓝图使用场景</span></h3><div class="blueprint-notes"><span><a href="#/push-page">PushPage</a></span><span><a href="#/service-page">ServicePage</a></span><span><a href="#/ota-page">OtaPage</a></span></div></div>
  <div class="subsection">
    <h3><span data-i18n="avatar-result:assignment.title">分配结果维度 · Assignment Result</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface"><div class="tag-meta"><span data-i18n="avatar-result:assignment.success">成功</span></div><strong>1,204</strong><p><span data-i18n="avatar-result:assignment.successDesc">已按目标范围生效</span></p></div>
      <div class="surface"><div class="tag-meta"><span data-i18n="avatar-result:assignment.failed">失败</span></div><strong>18</strong><p><span data-i18n="avatar-result:assignment.failedDesc">保留错误码与可重试原因</span></p></div>
      <div class="surface"><div class="tag-meta"><span data-i18n="avatar-result:assignment.conflict">冲突</span></div><strong>27</strong><p><span data-i18n="avatar-result:assignment.conflictDesc">展示来源策略和覆盖权限</span></p></div>
      <div class="surface"><div class="tag-meta"><span data-i18n="avatar-result:assignment.skipped">跳过</span></div><strong>35</strong><p><span data-i18n="avatar-result:assignment.skippedDesc">离线、无权限或用户选择</span></p></div>
    </div>
    <p style="font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="avatar-result:assignment.rule">总数必须等于成功、失败、冲突和跳过之和；重试只作用于可重试失败项，覆盖冲突需要独立权限。</span></p>
  </div>
</section>
</div>
`;
