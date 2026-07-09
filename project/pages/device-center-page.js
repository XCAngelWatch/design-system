/* AngelWatch Design System - page: device-center-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["device-center-page"] = `
<div class="content">
<section class="section" id="device-center-page">
  <p class="section-eyebrow">页面模板 · 业务蓝图</p>
  <h2>数据中心 DeviceCenterPage</h2>
  <p class="lede">数据中心覆盖设备管理、设备详情、设备分组、型号、参数模板、联机方案与远程控制。核心目标是一套 Android 终端生命周期页面族：查找设备、判断状态、分配机构、远程处理、追踪结果。</p>

  <div class="subsection">
    <h3>覆盖范围</h3>
    <div class="bp-grid">
      <div class="bp-card"><h4>设备管理</h4><p>列表、卡片视图、添加设备、设备导入、修改设备、软件信息与设备详情。</p></div>
      <div class="bp-card"><h4>设备分组</h4><p>分组列表、分配设备、卡片布局、导入设备、选中态与冲突处理。</p></div>
      <div class="bp-card"><h4>远程控制</h4><p>设备连接、上传进度、应用程序、设备定位、设备轨迹、设备信息。</p></div>
      <div class="bp-card"><h4>基础资料</h4><p>型号管理、应用参数、参数管理、参数模板、联机方案。</p></div>
      <div class="bp-card"><h4>详情指标</h4><p>心跳、电池、充电、数据流量、存储、RAM、CPU、亮度、音量、IP 地址、位置上报。</p></div>
      <div class="bp-card"><h4>欠费设备</h4><p>欠费设备作为设备治理子集展示，必须保留所属机构、设备型号、状态和可恢复操作。</p></div>
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
          <div class="bp-toolbar"><input class="input" placeholder="搜索设备名称 / SN / IMEI" /><div class="select"><span>全部状态 ▾</span></div><div class="select"><span>所属机构 ▾</span></div><div class="select"><span>欠费设备 ▾</span></div><button class="btn">筛选</button></div>
          <table class="dt">
            <thead><tr><th>SN</th><th>备注</th><th>在线状态</th><th>机构</th><th>型号</th><th>系统版本</th><th>上线时间</th><th>锁屏</th><th>IMEI</th><th>操作</th></tr></thead>
            <tbody>
              <tr><td><code>DEV-86420075</code></td><td>上海试点机</td><td><span class="status-dot online">在线</span></td><td>上海 / 黄浦</td><td>AX-9 Pro</td><td>Android 13</td><td>28 秒前</td><td><span class="status-dot online">解锁</span></td><td><code>864200...</code></td><td><a>详情</a> · <a>远程</a> · <a>日志</a></td></tr>
              <tr><td><code>DEV-86420112</code></td><td>P5 收银台</td><td><span class="status-dot fault">故障</span></td><td>华南 / P5</td><td>AX-7</td><td>Android 12</td><td>8 分钟前</td><td><span class="status-dot online">解锁</span></td><td><code>864201...</code></td><td><a>诊断</a> · <a>日志</a> · <a>工单</a></td></tr>
              <tr><td><code>DEV-86420244</code></td><td>P8 备用机</td><td><span class="status-dot offline">离线</span></td><td>西南 / P8</td><td>AX-9</td><td>Android 13</td><td>1 天前</td><td><span class="status-dot offline">锁定</span></td><td><code>864202...</code></td><td><a>历史</a> · <span style="color:var(--aw-text-disabled)">远程</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>设备详情信息架构</h3>
    <div class="bp-flow">
      <div class="bp-step"><div class="num">1</div><div class="name">状态摘要</div><div class="desc">顶部固定设备名、SN、在线状态、所属机构、最后心跳和主操作。</div></div>
      <div class="bp-step"><div class="num">2</div><div class="name">运行指标</div><div class="desc">电池、充电、流量、存储、RAM、CPU、亮度、音量、IP 一屏可扫读。</div></div>
      <div class="bp-step"><div class="num">3</div><div class="name">远程控制</div><div class="desc">在线才开放应用程序、定位、轨迹、设备信息和上传进度入口。</div></div>
      <div class="bp-step"><div class="num">4</div><div class="name">审计记录</div><div class="desc">推送、修改、锁定、解锁、重置等写操作都要能追溯操作者和时间。</div></div>
    </div>
  </div>

  <div class="subsection">
    <h3>设备详情字段族与远程指令</h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 12px">真实后端字段(对齐旧 tms_web_ui <code>device/detail.vue</code>);落地时按 Tab 分组,字段拆 label + value formatter,不做"固件版本 vX / 电量 20%"式拼接翻译。</p>
    <div class="bp-grid">
      <div class="bp-card"><h4>详情 Tab 结构</h4><p>状态信息 / 基本信息 / 应用信息 / 位置信息(地图 lazy) / 用户证书信息(lazy) / 硬件告警(lazy)。</p></div>
      <div class="bp-card"><h4>基本信息 35 字段</h4><p>SN · 基带版本 modemVersion · 备注 · 添加/激活/到期时间 · 型号 · 客户名 tenantName · 硬件版本 · 机构 · 存储状态 · 主/子 SDK 版本 · 厂商 · KSN · IMEI-IMSI-icc_id · 内核版本 · 系统版本 · 内部版本 · 固件版本 · 编译信息 buildInfo · 安卓版本 · 网络类型 · 平台 · wifi/蓝牙地址 · 内网 IP · wifi SSID · 经纬度 · KPP 支持 · MDM/资源包版本。</p></div>
      <div class="bp-card"><h4>设备状态三字段</h4><p><code>onlineFlag</code>(在线/离线,在线判定"在线 {0}h 内")+ <code>state</code>(0 解锁 / 1 锁定,标签"屏幕状态 / Screen Lock")+ <code>registeredFlag</code>(已激活 / 未激活)。不是单枚举。</p></div>
      <div class="bp-card"><h4>远程控制 16 指令</h4><p>软件信息 · 流量控制 · 设备日志 · 应用安装 · 应用卸载 · 设备密码 · 设备锁定 · 全部刷新 · 恢复出厂 · WIFI 设置 · 调试开关 · 清警告 · 蓝牙开关 · 修改型号 · 消息通知 · 查找设备 · logcat。仅在线开放,每项复用推送引擎生成推送任务。</p></div>
      <div class="bp-card"><h4>参数模板</h4><p>名称 · 备注 · version 版本 · operator 操作人 · 时间 · 操作(设置设备 / 修改 / 复制 / 导入 / 删除)+ 顶部唯一参数配置开关(开启二次确认)。</p></div>
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
    <div class="blueprint-notes"><span><a href="#/table">Table</a>：设备列表和软件信息</span><span><a href="#/data-cards">DataCard</a>：Android 终端卡片视图</span><span><a href="#/drawer">Drawer</a>：编辑与远程控制</span><span><a href="#/status-matrix">Status Matrix</a>：设备状态规则</span></div>
  </div>
</section>
</div>
`;
