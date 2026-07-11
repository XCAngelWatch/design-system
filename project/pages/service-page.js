/* AngelWatch Design System - page: service-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["service-page"] = `
<div class="content">
<section class="section" id="service-page">
  <p class="section-eyebrow"><span data-i18n="service-page:text.001">页面蓝图 · 增值服务</span></p>
  <h2><span data-i18n="service-page:text.002">增值服务 ServicePage</span></h2>
  <p class="lede"><span data-i18n="service-page:text.003">增值服务覆盖获取设备日志、锁定解锁设备、数据流量控制、重置设备密码、恢复出厂设置、推送文件到设备、APN 设置、WIFI 设置和应用黑白名单。核心规则是“服务配置 + 推送任务 + 目标设备详情”三段式闭环。</span></p>

  <div class="subsection">
    <h3><span data-i18n="service-page:text.004">覆盖范围</span></h3>
    <div class="bp-grid">
      <div class="bp-card"><h4><span data-i18n="service-page:text.005">设备日志</span></h4><p><span data-i18n="service-page:text.006">获取设备日志、添加任务、推送任务详情、推送设备详情。日志任务必须说明取回范围和保留时间。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="service-page:text.007">锁定解锁</span></h4><p><span data-i18n="service-page:text.008">锁定设备、解锁设备、目标设备详情。锁定是保护态，解锁需要审计记录。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="service-page:text.009">流量与密码</span></h4><p><span data-i18n="service-page:text.010">数据流量控制、重置设备密码、目标设备详情。所有动作都需要目标设备和执行结果。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="service-page:text.011">恢复出厂</span></h4><p><span data-i18n="service-page:text.012">恢复出厂设置是最高风险动作，必须 Modal.confirm 明示设备数量和不可逆后果。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="service-page:text.013">文件推送</span></h4><p><span data-i18n="service-page:text.014">添加文件、查看文件、修改文件、推送文件、推送记录、推送设备详情。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="service-page:text.015">网络与名单</span></h4><p><span data-i18n="service-page:text.016">APN 设置、WIFI 设置、应用黑白名单都包含推送到设备、从设备删除、推送记录和设备详情。</span></p></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="service-page:text.017">operationType 词汇表(27+ 种)</span></h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 12px"><span data-i18n="service-page:text.018">增值服务按</span> <code>operationType</code> <span data-i18n="service-page:text.019">组织(同一推送引擎的不同实例)。UI 用人类可读标签,但保留 code 映射。批次列表与设备详情按 operationType 动态追加列(如 17/19 追加 appName+appVersion,33 追加 scanCodeLicenseState)。</span></p>
    <div class="bp-grid">
      <div class="bp-card"><h4><span data-i18n="service-page:text.020">设备控制</span></h4><p><span data-i18n="service-page:text.021">1 设备日志 · 2 设备锁定 · 3 设备密码 · 12 清警告 · 13 全部刷新 · 24 修改型号 · 25 消息通知 · 30 查找设备 · 51 设备名称</span></p></div>
      <div class="bp-card"><h4><span data-i18n="service-page:text.022">应用</span></h4><p><span data-i18n="service-page:text.023">17 应用安装 · 19 应用卸载 · 48 清除应用数据 · appHidden(隐藏应用)</span></p></div>
      <div class="bp-card"><h4><span data-i18n="service-page:text.024">网络</span></h4><p><span data-i18n="service-page:text.025">5 流量控制 · 20 蓝牙开关 · 40 热点 · 52 GPS 开关 · 53 电源键开关 · apnSetting · wifiSetting</span></p></div>
      <div class="bp-card"><h4><span data-i18n="service-page:text.026">系统</span></h4><p><span data-i18n="service-page:text.027">6 恢复出厂 · 29 调试开关 · 49 电源模式 · screenSaver · bootInterface · desktopShortcut</span></p></div>
      <div class="bp-card"><h4><span data-i18n="service-page:text.028">文件 / 媒体</span></h4><p><span data-i18n="service-page:text.029">7 文件推送 · 38 壁纸 · filePush · statusBarPanelConfig</span></p></div>
      <div class="bp-card"><h4><span data-i18n="service-page:text.030">诊断 / 日志</span></h4><p><span data-i18n="service-page:text.031">14 OTA 日志 · 15 软件信息 · 31 logcat · 54 logcat 配置 · 43 上报用户证书</span></p></div>
      <div class="bp-card"><h4><span data-i18n="service-page:text.032">扫码授权(独立子状态机)</span></h4><p><span data-i18n="service-page:text.033">operationType=33,8 态:0 未激活 / 1 正在激活 / 2 已激活 / 3 无效 / 4 网络不通 / 5 已过期 / 6 服务器异常 / -1 未知。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="service-page:text.034">focus / 资源</span></h4><p><span data-i18n="service-page:text.035">46 / 47 focus 资源推送 · userCert 用户证书 · resourcePackage 资源包(壁纸/铃声)</span></p></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="service-page:text.036">主列表结构</span></h3>
    <div class="bp-shell">
      <div class="bp-shell-head"><strong><span data-i18n="service-page:text.037">增值服务 / APN 设置</span></strong><div class="row"><button class="btn"><span data-i18n="service-page:text.038">推送记录</span></button><button class="btn btn-primary"><span data-i18n="service-page:text.039">+ 添加 APN</span></button></div></div>
      <div class="bp-shell-body">
        <div class="bp-side">
          <div class="bp-nav-item"><span data-i18n="service-page:text.040">获取设备日志</span></div>
          <div class="bp-nav-item"><span data-i18n="service-page:text.041">锁定解锁设备</span></div>
          <div class="bp-nav-item"><span data-i18n="service-page:text.042">数据流量控制</span></div>
          <div class="bp-nav-item"><span data-i18n="service-page:text.043">重置设备密码</span></div>
          <div class="bp-nav-item"><span data-i18n="service-page:text.044">恢复出厂设置</span></div>
          <div class="bp-nav-item"><span data-i18n="service-page:text.045">推送文件到设备</span></div>
          <div class="bp-nav-item active"><span data-i18n="service-page:text.046">APN 设置</span></div>
          <div class="bp-nav-item"><span data-i18n="service-page:text.047">WIFI 设置</span></div>
          <div class="bp-nav-item"><span data-i18n="service-page:text.048">应用黑白名单</span></div>
        </div>
        <div class="bp-main">
          <div class="bp-toolbar"><input class="input" placeholder="搜索名称 / 机构 / 操作人" data-i18n-placeholder="service-page:text.049" /><div class="select"><span><span data-i18n="service-page:text.050">全部状态 ▾</span></span></div><div class="select"><span><span data-i18n="service-page:text.051">所属机构 ▾</span></span></div><button class="btn"><span data-i18n="service-page:text.052">筛选</span></button></div>
          <table class="dt">
            <thead><tr><th><span data-i18n="service-page:text.053">名称</span></th><th><span data-i18n="service-page:text.054">机构</span></th><th><span data-i18n="service-page:text.055">状态</span></th><th><span data-i18n="service-page:text.056">最后操作时间</span></th><th><span data-i18n="service-page:text.057">操作人</span></th><th class="colactions"><span data-i18n="service-page:text.058">操作</span></th></tr></thead>
            <tbody>
              <tr><td><b><span data-i18n="service-page:text.059">欧洲默认 APN</span></b></td><td><span data-i18n="service-page:text.060">EU / 默认机构</span></td><td><span class="status-dot is-success"><span data-i18n="service-page:text.061">已启用</span></span></td><td><span data-i18n="service-page:text.062">今天 10:12</span></td><td><span data-i18n="service-page:text.063">运营管理员</span></td><td class="colactions"><button class="btn btn-link btn-sm"><span data-i18n="service-page:text.066">详情</span></button><button class="btn btn-link btn-sm"><span data-i18n="service-page:text.064">推送到设备</span></button><button class="btn btn-link btn-danger-link btn-sm"><span data-i18n="service-page:text.065">从设备删除</span></button></td></tr>
              <tr><td><b><span data-i18n="service-page:text.067">备用 APN</span></b></td><td><span data-i18n="service-page:text.068">华东一区</span></td><td><span class="status-dot is-processing"><span data-i18n="service-page:text.069">推送中</span></span></td><td><span data-i18n="service-page:text.070">昨天 18:44</span></td><td><span data-i18n="service-page:text.071">设备运维</span></td><td class="colactions"><button class="btn btn-link btn-sm"><span data-i18n="service-page:text.073">设备详情</span></button><button class="btn btn-link btn-sm"><span data-i18n="service-page:text.072">推送记录</span></button></td></tr>
              <tr><td><b><span data-i18n="service-page:text.074">测试 APN</span></b></td><td><span data-i18n="service-page:text.075">测试机构</span></td><td><span class="status-dot is-neutral"><span data-i18n="service-page:text.076">已停用</span></span></td><td><span data-i18n="service-page:text.077">周一 11:03</span></td><td><span data-i18n="service-page:text.078">系统管理员</span></td><td class="colactions"><button class="btn btn-link btn-sm"><span data-i18n="service-page:text.079">编辑</span></button><button class="btn btn-link btn-danger-link btn-sm"><span data-i18n="service-page:text.080">删除</span></button></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="service-page:text.081">任务闭环</span></h3>
    <div class="bp-flow">
      <div class="bp-step"><div class="num">1</div><div class="name"><span data-i18n="service-page:text.082">配置资产</span></div><div class="desc"><span data-i18n="service-page:text.083">创建 APN、WIFI、名单、文件或服务策略，保留机构和操作人。</span></div></div>
      <div class="bp-step"><div class="num">2</div><div class="name"><span data-i18n="service-page:text.084">选择目标</span></div><div class="desc"><span data-i18n="service-page:text.085">按机构、设备分组、型号、指定设备编号选择目标设备。</span></div></div>
      <div class="bp-step"><div class="num">3</div><div class="name"><span data-i18n="service-page:text.086">推送执行</span></div><div class="desc"><span data-i18n="service-page:text.087">生成推送记录，展示成功、失败、总数和进行中状态。</span></div></div>
      <div class="bp-step"><div class="num">4</div><div class="name"><span data-i18n="service-page:text.088">处理结果</span></div><div class="desc"><span data-i18n="service-page:text.089">失败项进入推送设备详情，支持重试失败项和下载失败清单。</span></div></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="service-page:text.090">状态与风险矩阵</span></h3>
    <table class="blueprint-table">
      <thead><tr><th><span data-i18n="service-page:text.091">服务类型</span></th><th><span data-i18n="service-page:text.092">强副作用</span></th><th><span data-i18n="service-page:text.093">确认方式</span></th><th><span data-i18n="service-page:text.094">结果承接</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="service-page:text.095">获取设备日志</span></td><td><span data-i18n="service-page:text.096">低</span></td><td><span data-i18n="service-page:text.097">Drawer 表单确认范围</span></td><td><span data-i18n="service-page:text.098">任务详情 + 日志下载。</span></td></tr>
        <tr><td><span data-i18n="service-page:text.099">锁定 / 解锁设备</span></td><td><span data-i18n="service-page:text.100">高</span></td><td><span data-i18n="service-page:text.101">Modal.confirm，明示设备数量和后果</span></td><td><span data-i18n="service-page:text.102">Result + 操作日志。</span></td></tr>
        <tr><td><span data-i18n="service-page:text.103">恢复出厂设置</span></td><td><span data-i18n="service-page:text.104">最高</span></td><td><span data-i18n="service-page:text.105">必须输入目标数量确认</span></td><td><span data-i18n="service-page:text.106">Result 部分成功 + 失败清单。</span></td></tr>
        <tr><td><span data-i18n="service-page:text.107">APN / WIFI / 黑白名单</span></td><td><span data-i18n="service-page:text.108">中</span></td><td><span data-i18n="service-page:text.109">推送到设备或从设备删除时二次确认</span></td><td><span data-i18n="service-page:text.110">推送记录 + 推送设备详情。</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="service-page:engine.title">统一远程服务引擎</span></h3>
    <table class="map-table">
      <thead><tr><th><span data-i18n="service-page:engine.layer">层级</span></th><th><span data-i18n="service-page:engine.contract">统一契约</span></th><th><span data-i18n="service-page:engine.variant">业务差异</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="service-page:engine.action">动作定义</span></td><td><span data-i18n="service-page:engine.actionContract">人类可读标签、operationType 映射、风险级别和权限</span></td><td><span data-i18n="service-page:engine.actionVariant">参数字段和设备能力要求</span></td></tr>
        <tr><td><span data-i18n="service-page:engine.target">目标范围</span></td><td><span data-i18n="service-page:engine.targetContract">设备、分组、机构、冲突和预计数量</span></td><td><span data-i18n="service-page:engine.targetVariant">是否要求在线、激活或特定机型</span></td></tr>
        <tr><td><span data-i18n="service-page:engine.result">执行结果</span></td><td><span data-i18n="service-page:engine.resultContract">复用推送批次与设备结果、重试和终止规则</span></td><td><span data-i18n="service-page:engine.resultVariant">按 operationType 追加明细列</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection" data-component-contract>
    <h3><span data-i18n="service-page:text.111">组件契约</span></h3>
    <div class="blueprint-notes"><span><a href="#/table">Table</a><span data-i18n="service-page:text.112">：服务配置与推送记录</span></span><span><a href="#/drawer">Drawer</a><span data-i18n="service-page:text.113">：配置编辑与设备详情</span></span><span><a href="#/feedback">Feedback</a><span data-i18n="service-page:text.114">：高风险确认</span></span><span><a href="#/avatar-result">Result</a><span data-i18n="service-page:text.115">：部分成功和失败清单</span></span><span><a href="#/push-page">PushPage</a><span data-i18n="service-page:text.116">：任务详情结构</span></span></div>
  </div>
</section>
</div>
`;
