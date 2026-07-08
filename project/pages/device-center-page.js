/* AngelWatch Design System - page: device-center-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["device-center-page"] = `
<div class="content">
<section class="section" id="device-center-page">
  <p class="section-eyebrow">页面模板 · 业务蓝图</p>
  <h2>DeviceCenterPage · 数据中心蓝图</h2>
  <p class="lede">覆盖 Figma 新界面中的设备管理、设备详情、设备分组、型号、参数、联机方案与远程控制。核心目标是一套设备生命周期页面族：查找设备、判断状态、分配组织、远程处理、追踪结果。</p>

  <div class="subsection">
    <h3>覆盖范围</h3>
    <div class="bp-grid">
      <div class="bp-card"><h4>设备管理</h4><p>列表、卡片视图、添加设备、设备导入、修改设备、软件信息与设备详情。</p></div>
      <div class="bp-card"><h4>设备分组</h4><p>分组列表、分配设备、卡片布局、导入设备、选中态与冲突处理。</p></div>
      <div class="bp-card"><h4>远程控制</h4><p>设备连接、上传进度、应用程序、设备定位、设备轨迹、设备信息。</p></div>
      <div class="bp-card"><h4>基础资料</h4><p>型号管理、应用参数、参数管理、参数模板、联机方案。</p></div>
      <div class="bp-card"><h4>详情指标</h4><p>心跳、电池、充电、数据流量、存储、RAM、CPU、亮度、音量、IP 地址。</p></div>
      <div class="bp-card"><h4>状态治理</h4><p>在线、离线、故障、锁定、维护中、未激活、已退役的可操作性差异。</p></div>
    </div>
  </div>

  <div class="subsection">
    <h3>主列表结构</h3>
    <div class="bp-shell">
      <div class="bp-shell-head"><strong>数据中心 / 设备管理</strong><div class="row"><button class="btn">导入设备</button><button class="btn btn-primary">+ 添加设备</button></div></div>
      <div class="bp-shell-body">
        <div class="bp-side">
          <div class="bp-nav-item active">设备管理</div>
          <div class="bp-nav-item">设备分组</div>
          <div class="bp-nav-item">型号管理</div>
          <div class="bp-nav-item">参数模板</div>
          <div class="bp-nav-item">联机方案</div>
        </div>
        <div class="bp-main">
          <div class="bp-toolbar"><input class="input" placeholder="搜索设备名称 / SN / IMEI" /><div class="select"><span>全部状态 ▾</span></div><div class="select"><span>所属组织 ▾</span></div><button class="btn">筛选</button></div>
          <table class="dt">
            <thead><tr><th>设备</th><th>SN</th><th>所属组织</th><th>状态</th><th>电量</th><th>最后心跳</th><th>操作</th></tr></thead>
            <tbody>
              <tr><td><b>终端-上海-001</b></td><td><code>DEV-86420075</code></td><td>上海 / 黄浦</td><td><span class="status-dot online">在线</span></td><td>86%</td><td>28 秒前</td><td><a>详情</a> · <a>远程</a> · <a>日志</a></td></tr>
              <tr><td><b>终端-广州-007</b></td><td><code>DEV-86420112</code></td><td>华南 / 仓配</td><td><span class="status-dot fault">故障</span></td><td>32%</td><td>8 分钟前</td><td><a>诊断</a> · <a>日志</a> · <a>工单</a></td></tr>
              <tr><td><b>终端-成都-022</b></td><td><code>DEV-86420244</code></td><td>西南 / 仓配</td><td><span class="status-dot offline">离线</span></td><td>未知</td><td>1 天前</td><td><a>历史</a> · <span style="color:var(--aw-text-disabled)">远程</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>设备详情信息架构</h3>
    <div class="bp-flow">
      <div class="bp-step"><div class="num">1</div><div class="name">状态摘要</div><div class="desc">顶部固定设备名、SN、在线状态、所属组织、最后心跳和主操作。</div></div>
      <div class="bp-step"><div class="num">2</div><div class="name">运行指标</div><div class="desc">电池、充电、流量、存储、RAM、CPU、亮度、音量、IP 一屏可扫读。</div></div>
      <div class="bp-step"><div class="num">3</div><div class="name">远程控制</div><div class="desc">在线才开放应用程序、定位、轨迹、设备信息和上传进度入口。</div></div>
      <div class="bp-step"><div class="num">4</div><div class="name">审计记录</div><div class="desc">推送、修改、锁定、解锁、重置等写操作都要能追溯操作者和时间。</div></div>
    </div>
  </div>

  <div class="subsection">
    <h3>状态驱动操作</h3>
    <table class="blueprint-table">
      <thead><tr><th>设备状态</th><th>允许操作</th><th>禁用操作</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>在线</td><td>远程控制、推送、升级、日志、修改分组</td><td>无</td><td>高风险动作仍需二次确认。</td></tr>
        <tr><td>离线</td><td>查看历史、操作记录、修改归属</td><td>远程控制、即时推送、实时定位</td><td>禁用项必须显示离线原因。</td></tr>
        <tr><td>故障</td><td>诊断、日志、上报工单、远程重启</td><td>批量升级</td><td>故障优先级高于普通推送任务。</td></tr>
        <tr><td>锁定</td><td>解锁、查看审计</td><td>安装应用、OTA、恢复出厂</td><td>锁定是保护态，不是错误态。</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>组件映射</h3>
    <div class="blueprint-notes"><span><a href="#/table">Table</a>：设备列表和软件信息</span><span><a href="#/data-cards">DataCard</a>：设备卡片视图</span><span><a href="#/drawer">Drawer</a>：编辑与远程控制</span><span><a href="#/status-matrix">Status Matrix</a>：设备状态规则</span></div>
  </div>
</section>
</div>
`;
