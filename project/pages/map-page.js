/* AngelWatch Design System - page: map-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["map-page"] = `
<div class="content">
<section class="section" id="map-page">
  <p class="section-eyebrow"><span data-i18n="map-page:text.001">页面蓝图 · 设备地图</span></p>
  <h2><span data-i18n="map-page:text.002">设备地图 MapPage</span></h2>
  <p class="lede"><span data-i18n="map-page:text.003">设备地图覆盖设备查询、定位查询、轨迹查询、围栏管理和围栏警告。它不是普通列表页，主视图必须围绕地图、时间范围、设备结果和围栏状态组织。</span></p>

  <div class="subsection">
    <h3><span data-i18n="map-page:text.004">覆盖范围</span></h3>
    <div class="bp-grid">
      <div class="bp-card"><h4><span data-i18n="map-page:text.005">设备查询</span></h4><p><span data-i18n="map-page:text.006">主页面、搜索后状态、设备结果列表、定位入口。搜索字段优先 DSN、设备名称、IMEI。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="map-page:text.007">定位查询</span></h4><p><span data-i18n="map-page:text.008">按设备和时间查询最近位置，展示位置上报时间、运营商、地址摘要和定位来源。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="map-page:text.009">轨迹查询</span></h4><p><span data-i18n="map-page:text.010">使用开始时间、结束时间、起点、终点描述轨迹；结果必须支持时间轴和地图路径联动。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="map-page:text.011">围栏管理</span></h4><p><span data-i18n="map-page:text.012">新增、修改、绘制围栏、主页面。绘制态必须有保存、取消、清空和面积提示。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="map-page:text.013">围栏警告</span></h4><p><span data-i18n="map-page:text.014">主页面和查看详情。警告必须关联设备、围栏、触发时间、当前位置和处理状态。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="map-page:text.015">时间筛选</span></h4><p><span data-i18n="map-page:text.016">地图相关查询默认暴露开始时间和结束时间，复用 DatePicker / TimePicker 的确认式交互。</span></p></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="map-page:text.017">主工作区结构</span></h3>
    <div class="bp-shell">
      <div class="bp-shell-head"><strong><span data-i18n="map-page:text.018">设备地图 / 设备查询</span></strong><div class="row"><button class="btn"><span data-i18n="map-page:text.019">导出轨迹</span></button><button class="btn btn-primary"><span data-i18n="map-page:text.020">+ 新增围栏</span></button></div></div>
      <div class="bp-shell-body">
        <div class="bp-side">
          <div class="bp-nav-item active"><span data-i18n="map-page:text.021">设备查询</span></div>
          <div class="bp-nav-item"><span data-i18n="map-page:text.022">定位查询</span></div>
          <div class="bp-nav-item"><span data-i18n="map-page:text.023">轨迹查询</span></div>
          <div class="bp-nav-item"><span data-i18n="map-page:text.024">围栏管理</span></div>
          <div class="bp-nav-item"><span data-i18n="map-page:text.025">围栏警告</span></div>
        </div>
        <div class="bp-main">
          <div class="bp-toolbar"><input class="input" placeholder="搜索设备名称 / SN / IMEI" data-i18n-placeholder="map-page:text.026" /><div class="select"><span><span data-i18n="map-page:text.027">开始时间 ▾</span></span></div><div class="select"><span><span data-i18n="map-page:text.028">结束时间 ▾</span></span></div><button class="btn"><span data-i18n="map-page:text.029">查询</span></button></div>
          <div class="surface" style="min-height:280px;padding:0;overflow:hidden">
            <div style="height:280px;position:relative;background:var(--aw-fill-1);border-bottom:1px solid var(--aw-border-3)">
              <div style="position:absolute;inset:0;background-image:linear-gradient(var(--aw-border-3) 1px, transparent 1px),linear-gradient(90deg,var(--aw-border-3) 1px, transparent 1px);background-size:32px 32px;opacity:.55"></div>
              <div style="position:absolute;left:12%;top:28%;padding:6px 8px;border-radius:999px;background:var(--aw-bg);border:1px solid var(--aw-primary);color:var(--aw-primary);font-size:12px;box-shadow:var(--aw-shadow-2)"><span data-i18n="map-page:text.030">DEV-86420075 · 在线</span></div>
              <div style="position:absolute;left:54%;top:48%;padding:6px 8px;border-radius:999px;background:var(--aw-bg);border:1px solid var(--aw-warning);color:var(--aw-warning);font-size:12px;box-shadow:var(--aw-shadow-2)"><span data-i18n="map-page:text.031">围栏警告 · 待处理</span></div>
              <div style="position:absolute;left:32%;top:18%;width:220px;height:120px;border:2px dashed var(--aw-primary);border-radius:18px;background:var(--aw-primary-bg)"></div>
              <div style="position:absolute;right:12px;bottom:12px;width:220px;border:1px solid var(--aw-border-3);border-radius:var(--aw-radius);background:var(--aw-bg);padding:10px;font-size:12px;color:var(--aw-text-2)">
                <strong style="display:block;color:var(--aw-text-1);margin-bottom:6px"><span data-i18n="map-page:text.032">定位结果</span></strong>
                <span data-i18n="map-page:text.033">终端-上海-001 · 位置上报 28 秒前</span><br/><span data-i18n="map-page:text.034">运营商：上海 / 黄浦 · 来源：GPS</span>
              </div>
            </div>
            <table class="dt" style="border:0;border-radius:0">
              <thead><tr><th><span data-i18n="map-page:text.035">设备</span></th><th>SN</th><th><span data-i18n="map-page:text.036">位置上报</span></th><th><span data-i18n="map-page:text.037">围栏状态</span></th><th class="colactions"><span data-i18n="map-page:text.038">操作</span></th></tr></thead>
              <tbody>
                <tr><td><span data-i18n="map-page:text.039">终端-上海-001</span></td><td><code>DEV-86420075</code></td><td><span data-i18n="map-page:text.040">28 秒前</span></td><td><span class="status-dot is-success"><span data-i18n="map-page:text.041">围栏内</span></span></td><td class="colactions"><button class="btn btn-link btn-sm"><span data-i18n="map-page:text.042">定位</span></button><button class="btn btn-link btn-sm"><span data-i18n="map-page:text.043">轨迹</span></button></td></tr>
                <tr><td><span data-i18n="map-page:text.044">终端-广州-007</span></td><td><code>DEV-86420112</code></td><td><span data-i18n="map-page:text.045">8 分钟前</span></td><td><span class="status-dot is-warning"><span data-i18n="map-page:text.046">触发警告</span></span></td><td class="colactions"><button class="btn btn-link btn-sm"><span data-i18n="map-page:text.047">查看警告</span></button><button class="btn btn-link btn-sm"><span data-i18n="map-page:text.048">轨迹</span></button></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="map-page:text.049">状态与操作矩阵</span></h3>
    <table class="blueprint-table">
      <thead><tr><th><span data-i18n="map-page:text.050">对象</span></th><th><span data-i18n="map-page:text.051">状态</span></th><th><span data-i18n="map-page:text.052">主操作</span></th><th><span data-i18n="map-page:text.053">禁用 / 风险说明</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="map-page:text.054">设备定位</span></td><td><span data-i18n="map-page:text.055">在线 / 离线 / 未查询</span></td><td><span data-i18n="map-page:text.056">定位、轨迹查询、查看详情</span></td><td><span data-i18n="map-page:text.057">离线设备只能查看历史位置，不允许实时定位。</span></td></tr>
        <tr><td><span data-i18n="map-page:text.058">轨迹查询</span></td><td><span data-i18n="map-page:text.059">有结果 / 无结果 / 查询失败</span></td><td><span data-i18n="map-page:text.060">调整时间、导出轨迹、查看起点终点</span></td><td><span data-i18n="map-page:text.061">时间范围过大时提示缩小范围，避免一次性拉取过多点位。</span></td></tr>
        <tr><td><span data-i18n="map-page:text.062">围栏管理</span></td><td><span data-i18n="map-page:text.063">shape(circle / polygon) × eventType(进 / 出 / 进出)</span></td><td><span data-i18n="map-page:text.064">绘制、修改、设置权限、删除</span></td><td><span data-i18n="map-page:text.065">删除前必须提示关联设备数 deviceCount 和未处理警告数;列表顶部告警 badge 跳转告警日志。</span></td></tr>
        <tr><td><span data-i18n="map-page:text.066">围栏警告</span></td><td><span data-i18n="map-page:text.067">待处理 / 已处理 / 已忽略</span></td><td><span data-i18n="map-page:text.068">查看、标记已处理、跳转设备详情</span></td><td><span data-i18n="map-page:text.069">警告详情必须展示触发时间、当前位置和处理人。</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="map-page:text.070">围栏结构与绘制</span></h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 12px"><span data-i18n="map-page:text.071">围栏数据结构;术语用</span> <b>Geofence / Geocerca</b><span data-i18n="map-page:text.089">。</span></p>
    <div class="bp-grid">
      <div class="bp-card"><h4><span data-i18n="map-page:text.072">围栏列表列</span></h4><p><span data-i18n="map-page:text.073">名称 / shape 类型(circle 圆形 / polygon 多边形)/ eventType(enter 进 / leave 出 / enter_leave 进出)/ 机构 / 备注 / deviceCount 关联设备数 / 操作(设置权限 / 修改 / 删除)。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="map-page:text.074">数据结构</span></h4><p>circle = <code>{radius, center:{longitude, latitude}}</code>; polygon = <code>{vertices:[{latitude, longitude}]}</code><span data-i18n="map-page:text.075">。地图组件回调 getCircle / getPolygon 填表单。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="map-page:text.076">绘制表单</span></h4><p><span data-i18n="map-page:text.077">shape radio(circle / polygon) → eventType radio(进 / 出 / 进出) → radius(circle 时输入) → name(必填,≤50) → remark(≤200)。必须有保存 / 取消 / 编辑 / 清空。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="map-page:text.078">告警 badge</span></h4><p><span data-i18n="map-page:text.079">围栏列表顶部展示告警数 badge,点击跳转围栏警告日志;警告关联设备、围栏、触发时间、当前位置、处理状态。关联设备在独立页面配置(fence/addDeviceList)。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="map-page:text.080">门店管理</span></h4><p><span data-i18n="map-page:text.081">map/store:add / change / log。门店是机构级地理对象,map-page 覆盖。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="map-page:text.082">事件文案四语</span></h4><p><span data-i18n="map-page:text.083">进围栏 Entered / Ingresó / Entrou;出围栏 Exited / Salido / Saiu;进出 enter_leave。位置上报 Report Location,经纬度拆 lng / lat 两字段。</span></p></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="map-page:alertFlow.title">围栏告警处置闭环</span></h3>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name"><span data-i18n="map-page:alertFlow.detect">告警产生</span></div><div class="cf-desc"><span data-i18n="map-page:alertFlow.detectDesc">显示设备、围栏、事件类型、时间和级别。</span></div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name"><span data-i18n="map-page:alertFlow.locate">地图定位</span></div><div class="cf-desc"><span data-i18n="map-page:alertFlow.locateDesc">定位过期、设备离线或地图失败时给局部反馈。</span></div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name"><span data-i18n="map-page:alertFlow.handle">执行处置</span></div><div class="cf-desc"><span data-i18n="map-page:alertFlow.handleDesc">进入设备详情或远程动作，按副作用级别确认。</span></div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name"><span data-i18n="map-page:alertFlow.audit">记录复核</span></div><div class="cf-desc"><span data-i18n="map-page:alertFlow.auditDesc">记录处理人、时间、动作、结果和复核状态。</span></div></div>
    </div>
  </div>

  <div class="subsection" data-component-contract>
    <h3><span data-i18n="map-page:text.084">组件契约</span></h3>
    <div class="blueprint-notes"><span><a href="#/datepicker">DatePicker</a><span data-i18n="map-page:text.085">：开始时间 / 结束时间</span></span><span><a href="#/table">Table</a><span data-i18n="map-page:text.086">：查询结果与围栏警告</span></span><span><a href="#/drawer">Drawer</a><span data-i18n="map-page:text.087">：设备详情和警告详情</span></span><span><a href="#/tech-stack">Tech Stack</a><span data-i18n="map-page:text.088">：地图、聚合和热力图库</span></span></div>
  </div>
</section>
</div>
`;
