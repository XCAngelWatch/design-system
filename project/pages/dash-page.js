/* AngelWatch Design System — page: dash-page (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["dash-page"] = `
<div class="content">
<!-- DASHBOARD PAGE -->
<section class="section" id="dash-page">
  <p class="section-eyebrow"><span data-i18n="dash-page:text.001">页面蓝图 · Dashboard</span></p>
  <h2><span data-i18n="dash-page:text.002">首页仪表盘 DashboardPage</span></h2>
  <p class="lede"><span data-i18n="dash-page:text.003">首页仪表盘用于快速扫读 Android 终端运行概况：设备总数、激活设备、活跃设备、锁定设备、推送结果和近期告警。它不是营销看板，而是运维入口；图表用法可参考</span> <a href="#/charts"><span data-i18n="dash-page:text.004">数据图表</span></a><span data-i18n="dash-page:text.067">。</span></p>
  <div class="frame" style="background:var(--aw-bg)">
    <div class="frame-head">📐 DashboardPage</div>
    <div class="frame-body" style="padding:20px">
<h3 style="margin:0 0 14px;font-size:18px"><span data-i18n="dash-page:text.005">设备总览</span></h3>
<div class="dash-row" style="margin-bottom:12px">
  <div class="stat"><div class="lbl"><span data-i18n="dash-page:text.006">激活设备</span></div><div class="num">12,486</div><div class="delta up"><span data-i18n="dash-page:text.007">↑ 248 较上周</span></div></div>
  <div class="stat"><div class="lbl"><span data-i18n="dash-page:text.008">在线设备</span></div><div class="num">11,902</div><div class="delta"><span data-i18n="dash-page:text.009">95.3% 在线率</span></div></div>
  <div class="stat"><div class="lbl"><span data-i18n="dash-page:text.010">升级中</span></div><div class="num">312</div><div class="delta"><span data-i18n="dash-page:text.011">v3.5.0 推送中</span></div></div>
  <div class="stat"><div class="lbl"><span data-i18n="dash-page:text.012">告警</span></div><div class="num" style="color:var(--aw-danger)">17</div><div class="delta dn"><span data-i18n="dash-page:text.013">↑ 5 待处理</span></div></div>
</div>
<div class="dash-charts" style="margin-bottom:12px">
  <div class="dash-chart">
    <div class="row" style="justify-content:space-between"><div class="ttl"><span data-i18n="dash-page:text.014">激活趋势 · 近 30 日</span></div><div class="row"><span class="tag"><span data-i18n="dash-page:text.015">日</span></span><span class="tag tag-blue"><span data-i18n="dash-page:text.016">周</span></span><span class="tag"><span data-i18n="dash-page:text.017">月</span></span></div></div>
    <div class="spark"><svg viewBox="0 0 400 100" preserveAspectRatio="none">
      <path d="M0,80 L20,72 L40,68 L60,55 L80,58 L100,42 L120,45 L140,30 L160,35 L180,28 L200,40 L220,32 L240,20 L260,25 L280,18 L300,28 L320,22 L340,15 L360,22 L380,12 L400,16 L400,100 L0,100 Z" fill="rgba(0,82,204,0.12)"/>
      <path d="M0,80 L20,72 L40,68 L60,55 L80,58 L100,42 L120,45 L140,30 L160,35 L180,28 L200,40 L220,32 L240,20 L260,25 L280,18 L300,28 L320,22 L340,15 L360,22 L380,12 L400,16" fill="none" stroke="#165DFF" stroke-width="2"/>
    </svg></div>
  </div>
  <div class="dash-chart">
    <div class="ttl"><span data-i18n="dash-page:text.018">设备状态分布</span></div>
    <div style="display:flex;flex-direction:column;gap:8px;flex:1">
      <div><div class="row" style="justify-content:space-between"><span style="font-size:12px"><span data-i18n="dash-page:text.019">在线</span></span><span class="mono" style="font-size:11px">11,902</span></div><div style="height:6px;background:var(--aw-fill-3);border-radius:3px;overflow:hidden;margin-top:4px"><div style="width:95%;height:100%;background:var(--aw-success)"></div></div></div>
      <div><div class="row" style="justify-content:space-between"><span style="font-size:12px"><span data-i18n="dash-page:text.020">升级中</span></span><span class="mono" style="font-size:11px">312</span></div><div style="height:6px;background:var(--aw-fill-3);border-radius:3px;overflow:hidden;margin-top:4px"><div style="width:2.5%;height:100%;background:var(--aw-warning)"></div></div></div>
      <div><div class="row" style="justify-content:space-between"><span style="font-size:12px"><span data-i18n="dash-page:text.021">离线</span></span><span class="mono" style="font-size:11px">255</span></div><div style="height:6px;background:var(--aw-fill-3);border-radius:3px;overflow:hidden;margin-top:4px"><div style="width:2%;height:100%;background:var(--aw-text-4)"></div></div></div>
      <div><div class="row" style="justify-content:space-between"><span style="font-size:12px"><span data-i18n="dash-page:text.022">故障</span></span><span class="mono" style="font-size:11px">17</span></div><div style="height:6px;background:var(--aw-fill-3);border-radius:3px;overflow:hidden;margin-top:4px"><div style="width:0.5%;height:100%;background:var(--aw-danger)"></div></div></div>
    </div>
  </div>
</div>
<div class="dash-chart">
  <div class="ttl"><span data-i18n="dash-page:text.023">最近活动</span></div>
  <div style="display:flex;flex-direction:column">
    <div class="row" style="padding:8px 0;border-bottom:1px solid var(--aw-border-3);font-size:13px"><span class="status-dot is-success"></span><span style="flex:1"><span data-i18n="dash-page:text.024">终端-上海-001 已激活</span></span><span class="mono" style="color:var(--aw-text-3);font-size:11px"><span data-i18n="dash-page:text.025">刚刚</span></span></div>
    <div class="row" style="padding:8px 0;border-bottom:1px solid var(--aw-border-3);font-size:13px"><span class="status-dot is-processing"></span><span style="flex:1"><span data-i18n="dash-page:text.026">v3.5.0 OTA 推送已发起，影响 1,284 台</span></span><span class="mono" style="color:var(--aw-text-3);font-size:11px"><span data-i18n="dash-page:text.027">2 分钟前</span></span></div>
    <div class="row" style="padding:8px 0;border-bottom:1px solid var(--aw-border-3);font-size:13px"><span class="status-dot fault"></span><span style="flex:1"><span data-i18n="dash-page:text.028">终端-成都-022 触发故障告警</span></span><span class="mono" style="color:var(--aw-text-3);font-size:11px"><span data-i18n="dash-page:text.029">1 小时前</span></span></div>
    <div class="row" style="padding:8px 0;font-size:13px"><span class="status-dot offline"></span><span style="flex:1"><span data-i18n="dash-page:text.030">终端-广州-007 失联超过 12 分钟</span></span><span class="mono" style="color:var(--aw-text-3);font-size:11px"><span data-i18n="dash-page:text.031">12 分钟前</span></span></div>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="dash-page:text.032">统计详情入口 · 从首页到明细</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="dash-page:text.033">Figma 数据统计不是独立大屏，而是从首页运营指标进入统计详情。Dashboard 只负责快速判断异常，详情页负责筛选、下钻、导出和追责。</span></p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="map-table">
        <thead><tr><th style="width:18%"><span data-i18n="dash-page:text.034">首页卡片</span></th><th style="width:24%"><span data-i18n="dash-page:text.035">进入详情后默认视图</span></th><th style="width:26%"><span data-i18n="dash-page:text.036">筛选继承</span></th><th><span data-i18n="dash-page:text.037">异常处理</span></th></tr></thead>
        <tbody>
          <tr><td><b><span data-i18n="dash-page:text.038">活跃设备</span></b></td><td><span data-i18n="dash-page:text.039">设备活跃数据 · 近7日折线 + 活跃设备列表</span></td><td><span data-i18n="dash-page:text.040">机构、设备分组、时间范围、在线状态</span></td><td><span data-i18n="dash-page:text.041">活跃突降时突出近 24 小时离线设备，并给出“查看设备详情”入口。</span></td></tr>
          <tr><td><b><span data-i18n="dash-page:text.042">激活设备</span></b></td><td><span data-i18n="dash-page:text.043">设备激活数据 · 当日 / 七天 / 30天激活趋势</span></td><td><span data-i18n="dash-page:text.044">机构、设备型号、激活来源、时间范围</span></td><td><span data-i18n="dash-page:text.045">激活异常增长时展示来源分布，不直接给无来源结论。</span></td></tr>
          <tr><td><b><span data-i18n="dash-page:text.046">固件统计</span></b></td><td><span data-i18n="dash-page:text.047">升级文件统计详情 · 固件版本分布 + 失败明细</span></td><td><span data-i18n="dash-page:text.048">固件版本、适配机型、任务状态、时间范围</span></td><td><span data-i18n="dash-page:text.049">失败率升高时默认打开失败原因分组，并链接 OTA / 推送任务详情。</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="demo-grid cols-3" style="margin-top:12px">
      <div class="surface">
        <div class="tag-meta"><span data-i18n="dash-page:text.050">活跃设备详情</span></div>
        <h3 style="margin:8px 0;font-size:18px"><span data-i18n="dash-page:text.051">设备活跃数据</span></h3>
        <p style="margin:0 0 10px;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="dash-page:text.052">默认近7日，点击趋势点后表格只显示该日活跃设备。</span></p>
        <div class="row" style="gap:6px"><span class="tag tag-blue"><span data-i18n="dash-page:text.053">近7日</span></span><span class="tag"><span data-i18n="dash-page:text.054">30天</span></span><span class="tag"><span data-i18n="dash-page:text.055">自定义</span></span></div>
      </div>
      <div class="surface">
        <div class="tag-meta"><span data-i18n="dash-page:text.056">激活设备详情</span></div>
        <h3 style="margin:8px 0;font-size:18px"><span data-i18n="dash-page:text.057">设备激活数据</span></h3>
        <p style="margin:0 0 10px;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="dash-page:text.058">按机构和机型对比，详情表展示激活时间、系统版本和激活来源。</span></p>
        <div class="row" style="gap:6px"><span class="tag tag-blue"><span data-i18n="dash-page:text.059">当日激活</span></span><span class="tag"><span data-i18n="dash-page:text.060">七天内激活</span></span></div>
      </div>
      <div class="surface">
        <div class="tag-meta"><span data-i18n="dash-page:text.061">固件统计详情</span></div>
        <h3 style="margin:8px 0;font-size:18px"><span data-i18n="dash-page:text.062">升级文件统计详情</span></h3>
        <p style="margin:0 0 10px;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="dash-page:text.063">按固件版本聚合成功、失败、升级中，失败项进入可重试列表。</span></p>
        <div class="row" style="gap:6px"><span class="tag tag-success"><span data-i18n="dash-page:text.064">成功</span></span><span class="tag tag-danger"><span data-i18n="dash-page:text.065">失败</span></span><span class="tag tag-warning"><span data-i18n="dash-page:text.066">升级中</span></span></div>
      </div>
    </div>
  </div>
  <div class="subsection" data-component-contract>
    <h3><span data-i18n="common:component.contract">组件契约</span></h3>
    <div class="blueprint-notes"><span><a href="#/data-cards">DataCard</a></span><span><a href="#/charts">Charts</a></span><span><a href="#/table">Table</a></span><span><a href="#/empty-state">Empty</a></span><span><a href="#/loading-levels">Loading</a></span></div>
  </div>
</section>
</div>
`;
