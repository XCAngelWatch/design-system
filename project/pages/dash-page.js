/* AngelWatch Design System — page: dash-page (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["dash-page"] = `
<div class="content">
<!-- DASHBOARD PAGE -->
<section class="section" id="dash-page">
  <p class="section-eyebrow">Patterns · DashboardPage</p>
  <h2>首页仪表盘 DashboardPage</h2>
  <p class="lede">首页仪表盘用于快速扫读 Android 终端运行概况：设备总数、激活设备、活跃设备、锁定设备、推送结果和近期告警。它不是营销看板，而是运维入口；图表用法可参考 <a href="#/charts">数据图表</a>。</p>
  <div class="frame" style="background:var(--aw-bg)">
    <div class="frame-head">📐 DashboardPage</div>
    <div class="frame-body" style="padding:20px">
<h3 style="margin:0 0 14px;font-size:18px">设备总览</h3>
<div class="dash-row" style="margin-bottom:12px">
  <div class="stat"><div class="lbl">激活设备</div><div class="num">12,486</div><div class="delta up">↑ 248 较上周</div></div>
  <div class="stat"><div class="lbl">在线设备</div><div class="num">11,902</div><div class="delta">95.3% 在线率</div></div>
  <div class="stat"><div class="lbl">升级中</div><div class="num">312</div><div class="delta">v3.5.0 推送中</div></div>
  <div class="stat"><div class="lbl">告警</div><div class="num" style="color:var(--aw-danger)">17</div><div class="delta dn">↑ 5 待处理</div></div>
</div>
<div class="dash-charts" style="margin-bottom:12px">
  <div class="dash-chart">
    <div class="row" style="justify-content:space-between"><div class="ttl">激活趋势 · 近 30 日</div><div class="row"><span class="tag">日</span><span class="tag tag-blue">周</span><span class="tag">月</span></div></div>
    <div class="spark"><svg viewBox="0 0 400 100" preserveAspectRatio="none">
      <path d="M0,80 L20,72 L40,68 L60,55 L80,58 L100,42 L120,45 L140,30 L160,35 L180,28 L200,40 L220,32 L240,20 L260,25 L280,18 L300,28 L320,22 L340,15 L360,22 L380,12 L400,16 L400,100 L0,100 Z" fill="rgba(0,82,204,0.12)"/>
      <path d="M0,80 L20,72 L40,68 L60,55 L80,58 L100,42 L120,45 L140,30 L160,35 L180,28 L200,40 L220,32 L240,20 L260,25 L280,18 L300,28 L320,22 L340,15 L360,22 L380,12 L400,16" fill="none" stroke="#165DFF" stroke-width="2"/>
    </svg></div>
  </div>
  <div class="dash-chart">
    <div class="ttl">设备状态分布</div>
    <div style="display:flex;flex-direction:column;gap:8px;flex:1">
      <div><div class="row" style="justify-content:space-between"><span style="font-size:12px">在线</span><span class="mono" style="font-size:11px">11,902</span></div><div style="height:6px;background:var(--aw-fill-3);border-radius:3px;overflow:hidden;margin-top:4px"><div style="width:95%;height:100%;background:var(--aw-success)"></div></div></div>
      <div><div class="row" style="justify-content:space-between"><span style="font-size:12px">升级中</span><span class="mono" style="font-size:11px">312</span></div><div style="height:6px;background:var(--aw-fill-3);border-radius:3px;overflow:hidden;margin-top:4px"><div style="width:2.5%;height:100%;background:var(--aw-warning)"></div></div></div>
      <div><div class="row" style="justify-content:space-between"><span style="font-size:12px">离线</span><span class="mono" style="font-size:11px">255</span></div><div style="height:6px;background:var(--aw-fill-3);border-radius:3px;overflow:hidden;margin-top:4px"><div style="width:2%;height:100%;background:var(--aw-text-4)"></div></div></div>
      <div><div class="row" style="justify-content:space-between"><span style="font-size:12px">故障</span><span class="mono" style="font-size:11px">17</span></div><div style="height:6px;background:var(--aw-fill-3);border-radius:3px;overflow:hidden;margin-top:4px"><div style="width:0.5%;height:100%;background:var(--aw-danger)"></div></div></div>
    </div>
  </div>
</div>
<div class="dash-chart">
  <div class="ttl">最近活动</div>
  <div style="display:flex;flex-direction:column">
    <div class="row" style="padding:8px 0;border-bottom:1px solid var(--aw-border-3);font-size:13px"><span class="status-dot online"></span><span style="flex:1">终端-上海-001 已激活</span><span class="mono" style="color:var(--aw-text-3);font-size:11px">刚刚</span></div>
    <div class="row" style="padding:8px 0;border-bottom:1px solid var(--aw-border-3);font-size:13px"><span class="status-dot upgrading"></span><span style="flex:1">v3.5.0 OTA 推送已发起，影响 1,284 台</span><span class="mono" style="color:var(--aw-text-3);font-size:11px">2 分钟前</span></div>
    <div class="row" style="padding:8px 0;border-bottom:1px solid var(--aw-border-3);font-size:13px"><span class="status-dot fault"></span><span style="flex:1">终端-成都-022 触发故障告警</span><span class="mono" style="color:var(--aw-text-3);font-size:11px">1 小时前</span></div>
    <div class="row" style="padding:8px 0;font-size:13px"><span class="status-dot offline"></span><span style="flex:1">终端-广州-007 失联超过 12 分钟</span><span class="mono" style="color:var(--aw-text-3);font-size:11px">12 分钟前</span></div>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3>统计详情入口 · 从首页到明细</h3>
    <p class="lede" style="margin-bottom:12px">Figma 数据统计不是独立大屏，而是从首页运营指标进入统计详情。Dashboard 只负责快速判断异常，详情页负责筛选、下钻、导出和追责。</p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="map-table">
        <thead><tr><th style="width:18%">首页卡片</th><th style="width:24%">进入详情后默认视图</th><th style="width:26%">筛选继承</th><th>异常处理</th></tr></thead>
        <tbody>
          <tr><td><b>活跃设备</b></td><td>设备活跃数据 · 近7日折线 + 活跃设备列表</td><td>机构、设备分组、时间范围、在线状态</td><td>活跃突降时突出近 24 小时离线设备，并给出“查看设备详情”入口。</td></tr>
          <tr><td><b>激活设备</b></td><td>设备激活数据 · 当日 / 七天 / 30天激活趋势</td><td>机构、设备型号、激活来源、时间范围</td><td>激活异常增长时展示来源分布，不直接给无来源结论。</td></tr>
          <tr><td><b>固件统计</b></td><td>升级文件统计详情 · 固件版本分布 + 失败明细</td><td>固件版本、适配机型、任务状态、时间范围</td><td>失败率升高时默认打开失败原因分组，并链接 OTA / 推送任务详情。</td></tr>
        </tbody>
      </table>
    </div>
    <div class="demo-grid cols-3" style="margin-top:12px">
      <div class="surface">
        <div class="tag-meta">活跃设备详情</div>
        <h3 style="margin:8px 0;font-size:18px">设备活跃数据</h3>
        <p style="margin:0 0 10px;font-size:13px;color:var(--aw-text-2);line-height:1.7">默认近7日，点击趋势点后表格只显示该日活跃设备。</p>
        <div class="row" style="gap:6px"><span class="tag tag-blue">近7日</span><span class="tag">30天</span><span class="tag">自定义</span></div>
      </div>
      <div class="surface">
        <div class="tag-meta">激活设备详情</div>
        <h3 style="margin:8px 0;font-size:18px">设备激活数据</h3>
        <p style="margin:0 0 10px;font-size:13px;color:var(--aw-text-2);line-height:1.7">按机构和机型对比，详情表展示激活时间、系统版本和激活来源。</p>
        <div class="row" style="gap:6px"><span class="tag tag-blue">当日激活</span><span class="tag">七天内激活</span></div>
      </div>
      <div class="surface">
        <div class="tag-meta">固件统计详情</div>
        <h3 style="margin:8px 0;font-size:18px">升级文件统计详情</h3>
        <p style="margin:0 0 10px;font-size:13px;color:var(--aw-text-2);line-height:1.7">按固件版本聚合成功、失败、升级中，失败项进入可重试列表。</p>
        <div class="row" style="gap:6px"><span class="tag tag-blue">成功</span><span class="tag">失败</span><span class="tag">升级中</span></div>
      </div>
    </div>
  </div>
</section>
</div>
`;
