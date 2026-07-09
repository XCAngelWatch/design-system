/* AngelWatch Design System - page: map-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["map-page"] = `
<div class="content">
<section class="section" id="map-page">
  <p class="section-eyebrow">页面模板 · 业务蓝图</p>
  <h2>设备地图 MapPage</h2>
  <p class="lede">设备地图覆盖设备查询、定位查询、轨迹查询、围栏管理和围栏警告。它不是普通列表页，主视图必须围绕地图、时间范围、设备结果和围栏状态组织。</p>

  <div class="subsection">
    <h3>覆盖范围</h3>
    <div class="bp-grid">
      <div class="bp-card"><h4>设备查询</h4><p>主页面、搜索后状态、设备结果列表、定位入口。搜索字段优先 DSN、设备名称、IMEI。</p></div>
      <div class="bp-card"><h4>定位查询</h4><p>按设备和时间查询最近位置，展示位置上报时间、运营商、地址摘要和定位来源。</p></div>
      <div class="bp-card"><h4>轨迹查询</h4><p>使用开始时间、结束时间、起点、终点描述轨迹；结果必须支持时间轴和地图路径联动。</p></div>
      <div class="bp-card"><h4>围栏管理</h4><p>新增、修改、绘制围栏、主页面。绘制态必须有保存、取消、清空和面积提示。</p></div>
      <div class="bp-card"><h4>围栏警告</h4><p>主页面和查看详情。警告必须关联设备、围栏、触发时间、当前位置和处理状态。</p></div>
      <div class="bp-card"><h4>时间筛选</h4><p>地图相关查询默认暴露开始时间和结束时间，复用 DatePicker / TimePicker 的确认式交互。</p></div>
    </div>
  </div>

  <div class="subsection">
    <h3>主工作区结构</h3>
    <div class="bp-shell">
      <div class="bp-shell-head"><strong>设备地图 / 设备查询</strong><div class="row"><button class="btn">导出轨迹</button><button class="btn btn-primary">+ 新增围栏</button></div></div>
      <div class="bp-shell-body">
        <div class="bp-side">
          <div class="bp-nav-item active">设备查询</div>
          <div class="bp-nav-item">定位查询</div>
          <div class="bp-nav-item">轨迹查询</div>
          <div class="bp-nav-item">围栏管理</div>
          <div class="bp-nav-item">围栏警告</div>
        </div>
        <div class="bp-main">
          <div class="bp-toolbar"><input class="input" placeholder="搜索设备名称 / DSN / IMEI" /><div class="select"><span>开始时间 ▾</span></div><div class="select"><span>结束时间 ▾</span></div><button class="btn">查询</button></div>
          <div class="surface" style="min-height:280px;padding:0;overflow:hidden">
            <div style="height:280px;position:relative;background:var(--aw-fill-1);border-bottom:1px solid var(--aw-border-3)">
              <div style="position:absolute;inset:0;background-image:linear-gradient(var(--aw-border-3) 1px, transparent 1px),linear-gradient(90deg,var(--aw-border-3) 1px, transparent 1px);background-size:32px 32px;opacity:.55"></div>
              <div style="position:absolute;left:12%;top:28%;padding:6px 8px;border-radius:999px;background:var(--aw-bg);border:1px solid var(--aw-primary);color:var(--aw-primary);font-size:12px;box-shadow:var(--aw-shadow-2)">DEV-86420075 · 在线</div>
              <div style="position:absolute;left:54%;top:48%;padding:6px 8px;border-radius:999px;background:var(--aw-bg);border:1px solid var(--aw-warning);color:var(--aw-warning);font-size:12px;box-shadow:var(--aw-shadow-2)">围栏警告 · 待处理</div>
              <div style="position:absolute;left:32%;top:18%;width:220px;height:120px;border:2px dashed var(--aw-primary);border-radius:18px;background:var(--aw-primary-bg)"></div>
              <div style="position:absolute;right:12px;bottom:12px;width:220px;border:1px solid var(--aw-border-3);border-radius:var(--aw-radius);background:var(--aw-bg);padding:10px;font-size:12px;color:var(--aw-text-2)">
                <strong style="display:block;color:var(--aw-text-1);margin-bottom:6px">定位结果</strong>
                终端-上海-001 · 位置上报 28 秒前<br/>运营商：上海 / 黄浦 · 来源：GPS
              </div>
            </div>
            <table class="dt" style="border:0;border-radius:0">
              <thead><tr><th>设备</th><th>DSN</th><th>位置上报</th><th>围栏状态</th><th>操作</th></tr></thead>
              <tbody>
                <tr><td>终端-上海-001</td><td><code>DEV-86420075</code></td><td>28 秒前</td><td><span class="status-dot online">围栏内</span></td><td><a>定位</a> · <a>轨迹</a></td></tr>
                <tr><td>终端-广州-007</td><td><code>DEV-86420112</code></td><td>8 分钟前</td><td><span class="status-dot upgrading">触发警告</span></td><td><a>查看警告</a> · <a>轨迹</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>状态与操作矩阵</h3>
    <table class="blueprint-table">
      <thead><tr><th>对象</th><th>状态</th><th>主操作</th><th>禁用 / 风险说明</th></tr></thead>
      <tbody>
        <tr><td>设备定位</td><td>在线 / 离线 / 未查询</td><td>定位、轨迹查询、查看详情</td><td>离线设备只能查看历史位置，不允许实时定位。</td></tr>
        <tr><td>轨迹查询</td><td>有结果 / 无结果 / 查询失败</td><td>调整时间、导出轨迹、查看起点终点</td><td>时间范围过大时提示缩小范围，避免一次性拉取过多点位。</td></tr>
        <tr><td>围栏管理</td><td>草稿 / 已启用 / 已停用</td><td>绘制、修改、启用、停用、删除</td><td>删除围栏前必须提示关联设备和未处理警告数量。</td></tr>
        <tr><td>围栏警告</td><td>待处理 / 已处理 / 已忽略</td><td>查看、标记已处理、跳转设备详情</td><td>警告详情必须展示触发时间、当前位置和处理人。</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>组件映射</h3>
    <div class="blueprint-notes"><span><a href="#/datepicker">DatePicker</a>：开始时间 / 结束时间</span><span><a href="#/table">Table</a>：查询结果与围栏警告</span><span><a href="#/drawer">Drawer</a>：设备详情和警告详情</span><span><a href="#/tech-stack">Tech Stack</a>：地图、聚合和热力图库</span></div>
  </div>
</section>
</div>
`;
