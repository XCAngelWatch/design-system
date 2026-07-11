/* AngelWatch Design System — page: status-matrix (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["status-matrix"] = `
<div class="content">
<!-- DEVICE STATUS MATRIX -->
<section class="section" id="status-matrix">
  <p class="section-eyebrow"><span data-i18n="status-matrix:text.001">业务模式 · 终端状态</span></p>
  <h2><span data-i18n="status-matrix:text.002">终端状态矩阵</span></h2>
  <p class="lede"><span data-i18n="status-matrix:text.003">下列 8 项是列表、卡片和详情页使用的派生展示状态，不是后端单一枚举。设备真实状态由 onlineFlag、state、registeredFlag 等独立字段组合，界面再按业务优先级映射为文字、形状和颜色。</span></p>
  <table class="status-matrix">
    <thead>
<tr><th style="width:160px"><span data-i18n="status-matrix:text.004">状态</span></th><th style="width:120px"><span data-i18n="status-matrix:text.005">视觉</span></th><th style="width:140px">Token</th><th><span data-i18n="status-matrix:text.006">触发条件</span></th><th style="width:200px"><span data-i18n="status-matrix:text.007">允许后续操作</span></th></tr>
    </thead>
    <tbody>
<tr><td><strong><span data-i18n="status-matrix:text.008">在线</span></strong><span data-i18n="status-matrix:text.009"> · Online</span></td><td><span class="sm-dot sm-online"><span data-i18n="status-matrix:text.010">活跃</span></span></td><td><code>--aw-success</code></td><td><span data-i18n="status-matrix:text.011">onlineFlag 命中部署配置的在线窗口</span></td><td><span data-i18n="status-matrix:text.012">升级、远程指令、查看日志</span></td></tr>
<tr><td><strong><span data-i18n="status-matrix:text.013">离线</span></strong><span data-i18n="status-matrix:text.014"> · Offline</span></td><td><span class="sm-dot sm-offline"><span data-i18n="status-matrix:text.015">无心跳</span></span></td><td><code>--aw-text-4</code></td><td><span data-i18n="status-matrix:text.016">onlineFlag 超出部署配置的在线窗口</span></td><td><span data-i18n="status-matrix:text.017">查看历史；即时远程操作禁用并说明原因</span></td></tr>
<tr><td><strong><span data-i18n="status-matrix:text.018">升级中</span></strong><span data-i18n="status-matrix:text.019"> · Upgrading</span></td><td><span class="sm-dot sm-upgrading"><span data-i18n="status-matrix:text.020">推送中</span></span></td><td><code>--aw-warning</code></td><td><span data-i18n="status-matrix:text.021">OTA 已下发未确认</span></td><td><span data-i18n="status-matrix:text.022">取消升级、查看进度</span></td></tr>
<tr><td><strong><span data-i18n="status-matrix:text.023">故障</span></strong><span data-i18n="status-matrix:text.024"> · Faulty</span></td><td><span class="sm-dot sm-fault"><span data-i18n="status-matrix:text.025">异常</span></span></td><td><code>--aw-danger</code></td><td><span data-i18n="status-matrix:text.026">自检失败 / 异常告警</span></td><td><span data-i18n="status-matrix:text.027">诊断、远程重启、上报</span></td></tr>
<tr><td><strong><span data-i18n="status-matrix:text.028">屏幕锁定</span></strong><span data-i18n="status-matrix:text.029"> · Screen Locked</span></td><td><span class="sm-dot sm-locked"><span data-i18n="status-matrix:text.030">受保护</span></span></td><td><code>--aw-text-2</code></td><td><span data-i18n="status-matrix:text.031">state=1，表示设备屏幕锁定</span></td><td><span data-i18n="status-matrix:text.032">允许解锁和审计；安装、OTA、恢复出厂按业务规则禁用</span></td></tr>
<tr><td><strong><span data-i18n="status-matrix:text.033">未激活</span></strong><span data-i18n="status-matrix:text.034"> · Inactive</span></td><td><span class="sm-dot sm-unactivated"><span data-i18n="status-matrix:text.035">待激活</span></span></td><td><code>--aw-text-3</code></td><td><span data-i18n="status-matrix:text.036">已入库未首次上线</span></td><td><span data-i18n="status-matrix:text.037">激活、注销</span></td></tr>
<tr><td><strong><span data-i18n="status-matrix:text.038">维护中</span></strong><span data-i18n="status-matrix:text.039"> · Maintenance</span></td><td><span class="sm-dot sm-maint"><span data-i18n="status-matrix:text.040">检修</span></span></td><td><code>--aw-info</code></td><td><span data-i18n="status-matrix:text.041">工单期间</span></td><td><span data-i18n="status-matrix:text.042">结束维护、查看工单</span></td></tr>
<tr><td><strong><span data-i18n="status-matrix:text.043">已退役</span></strong><span data-i18n="status-matrix:text.044"> · Decommissioned</span></td><td><span class="sm-dot sm-decom"><span data-i18n="status-matrix:text.045">下线</span></span></td><td><code>--aw-text-4</code></td><td><span data-i18n="status-matrix:text.046">资产已注销</span></td><td><span data-i18n="status-matrix:text.047">仅审计查看</span></td></tr>
    </tbody>
  </table>

  <div class="subsection">
    <h3><span data-i18n="status-matrix:text.048">业务域状态族 · 模块通用规则</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="status-matrix:text.049">这些状态族用于列表、卡片、详情和结果页。每个模块从自己的字段派生展示状态；这里只定义显示语义与操作可用性，不定义状态转换图。</span></p>
    <table class="blueprint-table">
      <thead><tr><th><span data-i18n="status-matrix:text.050">状态族</span></th><th><span data-i18n="status-matrix:text.051">典型状态</span></th><th><span data-i18n="status-matrix:text.052">适用模块</span></th><th><span data-i18n="status-matrix:text.053">操作规则</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="status-matrix:text.054">应用审核 / 版本包</span></td><td><span data-i18n="status-matrix:text.055">草稿 / 签名中 / 签名错误 / 审核中 / 已上架 / 已拒绝 / 取消上架 / 已下架</span></td><td><span data-i18n="status-matrix:text.056">应用市场</span></td><td><span data-i18n="status-matrix:text.057">签名态(kpp 签名中/错误、APK 签名中/错误)是真实业务;审核中显示上架审核;已上架显示下架与推送安装;已拒绝/已下架允许编辑、删除、重新上架。</span></td></tr>
        <tr><td><span data-i18n="status-matrix:text.058">OTA 文件</span></td><td><span data-i18n="status-matrix:text.059">草稿 / 审核中 / 已上架 / 已拒绝 / 驳回 / 已下架 / 定期上架</span></td><td><span data-i18n="status-matrix:text.060">OTA 升级</span></td><td><span data-i18n="status-matrix:text.061">草稿/已下架允许编辑、删除、申请上架;已上架允许下架与推送到设备;上下架均二次确认。OTA 推送结果走"推送任务"状态族,不在此列。</span></td></tr>
        <tr><td><span data-i18n="status-matrix:text.062">推送任务</span></td><td><span data-i18n="status-matrix:text.063">批次:执行中 / 成功 / 部分成功 / 失败;设备级追加 已过期 / 已终止</span></td><td><span data-i18n="status-matrix:text.064">推送任务、增值服务</span></td><td><span data-i18n="status-matrix:text.065">执行中显示进度;部分失败允许重试失败项;已终止设备不可重试;成功/部分成功允许查看与导出。终止与重试需 push_task_terminate / push_task_rePush 权限。</span></td></tr>
        <tr><td><span data-i18n="status-matrix:text.066">设备状态组合</span></td><td><span data-i18n="status-matrix:text.067">连接：在线 / 离线；屏幕：解锁 / 锁定；激活：已激活 / 未激活</span></td><td><span data-i18n="status-matrix:text.068">数据中心、设备地图</span></td><td><span data-i18n="status-matrix:text.069">三个维度独立展示。离线禁用即时远程操作；屏幕锁定允许解锁和审计；故障优先诊断与日志。</span></td></tr>
        <tr><td><span data-i18n="status-matrix:text.070">权限分配</span></td><td><span data-i18n="status-matrix:text.071">未分配 / 部分分配 / 已分配 / 冲突</span></td><td><span data-i18n="status-matrix:text.072">账户、机构、设备分组</span></td><td><span data-i18n="status-matrix:text.073">冲突状态必须展示来源，不允许只给红色标签。</span></td></tr>
        <tr><td><span data-i18n="status-matrix:domain.session">远程会话</span></td><td><span data-i18n="status-matrix:domain.sessionStates">等待设备 / 连接中 / 进行中 / 已结束 / 失败</span></td><td><span data-i18n="status-matrix:domain.sessionScenes">设备诊断、远程控制</span></td><td><span data-i18n="status-matrix:domain.sessionRule">会话状态独立于设备连接状态和推送批次状态。</span></td></tr>
        <tr><td><span data-i18n="status-matrix:domain.alert">告警处置</span></td><td><span data-i18n="status-matrix:domain.alertStates">待处理 / 处理中 / 已处理 / 无需处理</span></td><td><span data-i18n="status-matrix:domain.alertScenes">围栏告警、硬件告警</span></td><td><span data-i18n="status-matrix:domain.alertRule">必须记录处理人、处理时间、动作和结果。</span></td></tr>
        <tr><td><span data-i18n="status-matrix:domain.asset">配置资产</span></td><td><span data-i18n="status-matrix:domain.assetStates">草稿 / 已生效 / 已停用 / 冲突</span></td><td><span data-i18n="status-matrix:domain.assetScenes">参数、策略、设备分配</span></td><td><span data-i18n="status-matrix:domain.assetRule">版本和分配状态不能冒用在线、离线样式。</span></td></tr>
      </tbody>
    </table>
  </div>
  <div class="subsection"><h3><span data-i18n="common:component.usedBy">页面蓝图使用场景</span></h3><div class="blueprint-notes"><span><a href="#/device-center-page">DeviceCenterPage</a></span><span><a href="#/market-page">MarketPage</a></span><span><a href="#/push-page">PushPage</a></span></div></div>
</section>
</div>
`;
