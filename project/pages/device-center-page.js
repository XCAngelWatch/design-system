/* AngelWatch Design System - page: device-center-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["device-center-page"] = `
<div class="content">
<section class="section" id="device-center-page">
  <p class="section-eyebrow"><span data-i18n="device-center-page:text.001">页面蓝图 · 数据中心</span></p>
  <h2><span data-i18n="device-center-page:text.002">数据中心 DeviceCenterPage</span></h2>
  <p class="lede"><span data-i18n="device-center-page:text.003">数据中心覆盖设备管理、设备详情、设备分组、型号、参数模板、联机方案与远程控制。核心目标是一套 Android 终端生命周期页面族：查找设备、判断状态、分配机构、远程处理、追踪结果。</span></p>

  <div class="subsection">
    <h3><span data-i18n="device-center-page:text.004">覆盖范围</span></h3>
    <div class="bp-grid">
      <div class="bp-card"><h4><span data-i18n="device-center-page:text.005">设备管理</span></h4><p><span data-i18n="device-center-page:text.006">列表、卡片视图、添加设备、设备导入、修改设备、软件信息与设备详情。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="device-center-page:text.007">设备分组</span></h4><p><span data-i18n="device-center-page:text.008">分组列表、分配设备、卡片布局、导入设备、选中态与冲突处理。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="device-center-page:text.009">远程控制</span></h4><p><span data-i18n="device-center-page:text.010">设备连接、上传进度、应用程序、设备定位、设备轨迹、设备信息。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="device-center-page:text.011">基础资料</span></h4><p><span data-i18n="device-center-page:text.012">型号管理、应用参数、参数管理、参数模板、联机方案。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="device-center-page:text.013">详情指标</span></h4><p><span data-i18n="device-center-page:text.014">心跳、电池、充电、数据流量、存储、RAM、CPU、亮度、音量、IP 地址、位置上报。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="device-center-page:text.015">欠费设备</span></h4><p><span data-i18n="device-center-page:text.016">欠费设备作为设备治理子集展示，必须保留所属机构、设备型号、状态和可恢复操作。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="device-center-page:text.017">状态治理</span></h4><p><span data-i18n="device-center-page:text.018">在线、离线、故障、锁定、维护中、未激活、已退役的可操作性差异。</span></p></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="device-center-page:text.019">主列表结构</span></h3>
    <div class="bp-shell">
      <div class="bp-shell-head"><strong><span data-i18n="device-center-page:text.020">数据中心 / 设备管理</span></strong><div class="row"><button class="btn"><span data-i18n="device-center-page:text.021">导入设备</span></button><button class="btn btn-primary"><span data-i18n="device-center-page:text.022">+ 添加设备</span></button></div></div>
      <div class="bp-shell-body">
        <div class="bp-side">
          <div class="bp-nav-item active"><span data-i18n="device-center-page:text.023">设备管理</span></div>
          <div class="bp-nav-item"><span data-i18n="device-center-page:text.024">设备分组</span></div>
          <div class="bp-nav-item"><span data-i18n="device-center-page:text.025">型号管理</span></div>
          <div class="bp-nav-item"><span data-i18n="device-center-page:text.026">参数模板</span></div>
          <div class="bp-nav-item"><span data-i18n="device-center-page:text.027">联机方案</span></div>
        </div>
        <div class="bp-main">
          <div class="bp-toolbar"><input class="input" placeholder="搜索设备名称 / SN / IMEI" data-i18n-placeholder="device-center-page:text.028" /><div class="select"><span><span data-i18n="device-center-page:text.029">全部状态 ▾</span></span></div><div class="select"><span><span data-i18n="device-center-page:text.030">所属机构 ▾</span></span></div><div class="select"><span><span data-i18n="device-center-page:text.031">欠费设备 ▾</span></span></div><button class="btn"><span data-i18n="device-center-page:text.032">筛选</span></button></div>
          <div class="bp-table-scroll">
          <table class="dt" style="min-width:1120px">
            <thead><tr><th>SN</th><th><span data-i18n="device-center-page:text.033">备注</span></th><th><span data-i18n="device-center-page:text.034">在线状态</span></th><th><span data-i18n="device-center-page:text.035">机构</span></th><th><span data-i18n="device-center-page:text.036">型号</span></th><th><span data-i18n="device-center-page:text.037">系统版本</span></th><th><span data-i18n="device-center-page:text.038">上线时间</span></th><th><span data-i18n="device-center-page:text.039">锁屏状态</span></th><th>IMEI</th><th class="colactions"><span data-i18n="device-center-page:text.040">操作</span></th></tr></thead>
            <tbody>
              <tr><td><code>DEV-86420075</code></td><td><span data-i18n="device-center-page:text.041">上海试点机</span></td><td><span class="status-dot online"><span data-i18n="device-center-page:text.042">在线</span></span></td><td><span data-i18n="device-center-page:text.043">上海 / 黄浦</span></td><td>AX-9 Pro</td><td>Android 13</td><td><span data-i18n="device-center-page:text.044">28 秒前</span></td><td><span class="status-dot is-success"><span data-i18n="device-center-page:text.045">解锁</span></span></td><td><code title="864200750001234">864200750001234</code></td><td class="colactions"><button class="btn btn-link btn-sm"><span data-i18n="device-center-page:text.046">详情</span></button><button class="btn btn-link btn-sm"><span data-i18n="device-center-page:text.047">远程</span></button><button class="btn btn-link btn-sm"><span data-i18n="device-center-page:text.048">日志</span></button></td></tr>
              <tr><td><code>DEV-86420112</code></td><td><span data-i18n="device-center-page:text.049">P5 收银台</span></td><td><span class="status-dot fault"><span data-i18n="device-center-page:text.050">故障</span></span></td><td><span data-i18n="device-center-page:text.051">华南 / P5</span></td><td>AX-7</td><td>Android 12</td><td><span data-i18n="device-center-page:text.052">8 分钟前</span></td><td><span class="status-dot is-success"><span data-i18n="device-center-page:text.053">解锁</span></span></td><td><code title="864201120005678">864201120005678</code></td><td class="colactions"><button class="btn btn-link btn-sm"><span data-i18n="device-center-page:text.046">详情</span></button><button class="btn btn-link btn-sm"><span data-i18n="device-center-page:text.054">诊断</span></button><button class="btn btn-link btn-sm"><span data-i18n="device-center-page:text.055">日志</span></button></td></tr>
              <tr><td><code>DEV-86420244</code></td><td><span data-i18n="device-center-page:text.057">P8 备用机</span></td><td><span class="status-dot offline"><span data-i18n="device-center-page:text.058">离线</span></span></td><td><span data-i18n="device-center-page:text.059">西南 / P8</span></td><td>AX-9</td><td>Android 13</td><td><span data-i18n="device-center-page:text.060">1 天前</span></td><td><span class="status-dot is-neutral"><span data-i18n="device-center-page:text.061">锁定</span></span></td><td><code title="864202440009012">864202440009012</code></td><td class="colactions"><button class="btn btn-link btn-sm"><span data-i18n="device-center-page:text.046">详情</span></button><button class="btn btn-link btn-sm"><span data-i18n="device-center-page:text.062">历史</span></button><button class="btn btn-link btn-sm" disabled title="设备离线，不能远程控制" data-i18n-title="device-center-page:text.113"><span data-i18n="device-center-page:text.063">远程</span></button></td></tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="device-center-page:text.064">设备详情信息架构</span></h3>
    <div class="bp-flow">
      <div class="bp-step"><div class="num">1</div><div class="name"><span data-i18n="device-center-page:text.065">状态摘要</span></div><div class="desc"><span data-i18n="device-center-page:text.066">顶部固定设备名、SN、在线状态、所属机构、最后心跳和主操作。</span></div></div>
      <div class="bp-step"><div class="num">2</div><div class="name"><span data-i18n="device-center-page:text.067">运行指标</span></div><div class="desc"><span data-i18n="device-center-page:text.068">电池、充电、流量、存储、RAM、CPU、亮度、音量、IP 一屏可扫读。</span></div></div>
      <div class="bp-step"><div class="num">3</div><div class="name"><span data-i18n="device-center-page:text.069">远程控制</span></div><div class="desc"><span data-i18n="device-center-page:text.070">在线才开放应用程序、定位、轨迹、设备信息和上传进度入口。</span></div></div>
      <div class="bp-step"><div class="num">4</div><div class="name"><span data-i18n="device-center-page:text.071">审计记录</span></div><div class="desc"><span data-i18n="device-center-page:text.072">推送、修改、锁定、解锁、重置等写操作都要能追溯操作者和时间。</span></div></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="device-center-page:text.073">设备详情字段族与远程指令</span></h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 12px"><span data-i18n="device-center-page:text.074">设备详情字段;按 Tab 分组,字段拆 label + value formatter,不做"固件版本 vX / 电量 20%"式拼接翻译。</span></p>
    <div class="bp-grid">
      <div class="bp-card"><h4><span data-i18n="device-center-page:text.075">详情 Tab 结构</span></h4><p><span data-i18n="device-center-page:text.076">状态信息 / 基本信息 / 应用信息 / 位置信息(地图 lazy) / 用户证书信息(lazy) / 硬件告警(lazy)。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="device-center-page:text.077">基本信息 35 字段</span></h4><p><span data-i18n="device-center-page:text.078">SN · 基带版本 modemVersion · 备注 · 添加/激活/到期时间 · 型号 · 客户名 tenantName · 硬件版本 · 机构 · 存储状态 · 主/子 SDK 版本 · 厂商 · KSN · IMEI-IMSI-icc_id · 内核版本 · 系统版本 · 内部版本 · 固件版本 · 编译信息 buildInfo · 安卓版本 · 网络类型 · 平台 · wifi/蓝牙地址 · 内网 IP · wifi SSID · 经纬度 · KPP 支持 · MDM/资源包版本。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="device-center-page:text.079">设备状态三字段</span></h4><p><code>onlineFlag</code><span data-i18n="device-center-page:text.080">(在线/离线,在线判定"在线 {0}h 内")+</span> <code>state</code><span data-i18n="device-center-page:text.081">(0 解锁 / 1 锁定,标签"屏幕状态 / Screen Lock")+</span> <code>registeredFlag</code><span data-i18n="device-center-page:text.082">(已激活 / 未激活)。不是单枚举。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="device-center-page:text.083">远程控制快捷指令</span></h4><p><span data-i18n="device-center-page:text.084">软件信息 · 流量控制 · 设备日志 · 应用安装 · 应用卸载 · 设备密码 · 设备锁定 · 全部刷新 · 恢复出厂 · WIFI 设置 · 调试开关 · 清警告 · 蓝牙开关 · 修改型号 · 消息通知 · 查找设备 · logcat。仅在线开放,每项复用推送引擎生成推送任务；以动作 key 清单为准，不展示易漂移的数量。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="device-center-page:text.085">参数模板</span></h4><p><span data-i18n="device-center-page:text.086">名称 · 备注 · version 版本 · operator 操作人 · 时间 · 操作(设置设备 / 修改 / 复制 / 导入 / 删除)+ 顶部唯一参数配置开关(开启二次确认)。</span></p></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="device-center-page:text.087">状态驱动操作</span></h3>
    <table class="blueprint-table">
      <thead><tr><th><span data-i18n="device-center-page:text.088">设备状态</span></th><th><span data-i18n="device-center-page:text.089">允许操作</span></th><th><span data-i18n="device-center-page:text.090">禁用操作</span></th><th><span data-i18n="device-center-page:text.091">说明</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="device-center-page:text.092">在线</span></td><td><span data-i18n="device-center-page:text.093">远程控制、推送、升级、日志、修改分组</span></td><td><span data-i18n="device-center-page:text.094">无</span></td><td><span data-i18n="device-center-page:text.095">高风险动作仍需二次确认。</span></td></tr>
        <tr><td><span data-i18n="device-center-page:text.096">离线</span></td><td><span data-i18n="device-center-page:text.097">查看历史、操作记录、修改归属</span></td><td><span data-i18n="device-center-page:text.098">远程控制、即时推送、实时定位</span></td><td><span data-i18n="device-center-page:text.099">禁用项必须显示离线原因。</span></td></tr>
        <tr><td><span data-i18n="device-center-page:text.100">故障</span></td><td><span data-i18n="device-center-page:text.101">诊断、日志、上报工单、远程重启</span></td><td><span data-i18n="device-center-page:text.102">批量升级</span></td><td><span data-i18n="device-center-page:text.103">故障优先级高于普通推送任务。</span></td></tr>
        <tr><td><span data-i18n="device-center-page:text.104">屏幕锁定</span></td><td><span data-i18n="device-center-page:text.105">解锁、查看审计</span></td><td><span data-i18n="device-center-page:text.106">安装应用、OTA、恢复出厂</span></td><td><span data-i18n="device-center-page:text.107">state=1 表示屏幕锁定，是独立保护维度，不替代在线或激活状态。</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="device-center-page:session.title">诊断与远程会话契约</span></h3>
    <table class="map-table">
      <thead><tr><th><span data-i18n="device-center-page:session.phase">阶段</span></th><th><span data-i18n="device-center-page:session.guard">前置条件</span></th><th><span data-i18n="device-center-page:session.feedback">反馈与下一步</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="device-center-page:session.start">发起</span></td><td><span data-i18n="device-center-page:session.startGuard">设备在线、已激活、未被其他会话占用且操作者有权限</span></td><td><span data-i18n="device-center-page:session.startFeedback">确认设备与操作者后创建会话记录</span></td></tr>
        <tr><td><span data-i18n="device-center-page:session.connect">连接</span></td><td><span data-i18n="device-center-page:session.connectGuard">等待设备确认并显示超时边界</span></td><td><span data-i18n="device-center-page:session.connectFeedback">Notification 展示进度；拒绝或超时进入 Alert</span></td></tr>
        <tr><td><span data-i18n="device-center-page:session.active">进行中</span></td><td><span data-i18n="device-center-page:session.activeGuard">固定显示 SN、操作者、开始时间和会话时长</span></td><td><span data-i18n="device-center-page:session.activeFeedback">退出需确认，结束后可查看或下载日志</span></td></tr>
      </tbody>
    </table>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><span data-i18n="device-center-page:session.security">设计系统只定义安全会话状态和审计边界，不复用旧外部 iframe、隐藏凭据或高频轮询实现。</span></div></div>
  </div>

  <div class="subsection" data-component-contract>
    <h3><span data-i18n="device-center-page:text.108">组件契约</span></h3>
    <div class="blueprint-notes"><span><a href="#/table">Table</a><span data-i18n="device-center-page:text.109">：设备列表和软件信息</span></span><span><a href="#/data-cards">DataCard</a><span data-i18n="device-center-page:text.110">：Android 终端卡片视图</span></span><span><a href="#/drawer">Drawer</a><span data-i18n="device-center-page:text.111">：编辑与远程控制</span></span><span><a href="#/status-matrix">Status Matrix</a><span data-i18n="device-center-page:text.112">：设备状态规则</span></span></div>
  </div>
</section>
</div>
`;
