/* AngelWatch Design System — page: status-matrix (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["status-matrix"] = `
<div class="content">
<!-- DEVICE STATUS MATRIX -->
<section class="section" id="status-matrix">
  <p class="section-eyebrow">Components · 设备状态</p>
  <h2>终端状态矩阵</h2>
  <p class="lede">设备在生命周期中会经历远多于"在线/离线"的状态：已下发指令但未激活、被锁定、维护中、已退役 …… 系统定义 8 种状态，每个状态有专属图形信号 + 颜色 + 动效，色弱用户可凭形状辨认。</p>
  <table class="status-matrix">
    <thead>
<tr><th style="width:160px">状态</th><th style="width:120px">视觉</th><th style="width:140px">Token</th><th>触发条件</th><th style="width:200px">允许后续操作</th></tr>
    </thead>
    <tbody>
<tr><td><strong>在线</strong> · Online</td><td><span class="sm-dot sm-online">活跃</span></td><td><code>--aw-success</code></td><td>30s 内有心跳</td><td>升级、远程指令、查看日志</td></tr>
<tr><td><strong>离线</strong> · Offline</td><td><span class="sm-dot sm-offline">无心跳</span></td><td><code>--aw-text-4</code></td><td>≥ 5 min 无心跳</td><td>查看历史；操作禁用</td></tr>
<tr><td><strong>升级中</strong> · Upgrading</td><td><span class="sm-dot sm-upgrading">推送中</span></td><td><code>--aw-warning</code></td><td>OTA 已下发未确认</td><td>取消升级、查看进度</td></tr>
<tr><td><strong>故障</strong> · Faulty</td><td><span class="sm-dot sm-fault">异常</span></td><td><code>--aw-danger</code></td><td>自检失败 / 异常告警</td><td>诊断、远程重启、上报</td></tr>
<tr><td><strong>已锁定</strong> · Locked</td><td><span class="sm-dot sm-locked">受保护</span></td><td><code>--aw-text-2</code></td><td>管理员手动锁机</td><td>仅解锁；其余全部禁用</td></tr>
<tr><td><strong>未激活</strong> · Inactive</td><td><span class="sm-dot sm-unactivated">待激活</span></td><td><code>--aw-text-3</code></td><td>已入库未首次上线</td><td>激活、注销</td></tr>
<tr><td><strong>维护中</strong> · Maintenance</td><td><span class="sm-dot sm-maint">检修</span></td><td><code>--aw-info</code></td><td>工单期间</td><td>结束维护、查看工单</td></tr>
<tr><td><strong>已退役</strong> · Decommissioned</td><td><span class="sm-dot sm-decom">下线</span></td><td><code>--aw-text-4</code></td><td>资产已注销</td><td>仅审计查看</td></tr>
    </tbody>
  </table>

  <div class="subsection">
    <h3>业务域状态族 · 模块通用规则</h3>
    <p class="lede" style="margin-bottom:12px">这些状态用于列表、卡片、详情和结果页。这里只定义状态族与操作可用性，不定义状态转换图。</p>
    <table class="blueprint-table">
      <thead><tr><th>状态族</th><th>典型状态</th><th>适用模块</th><th>操作规则</th></tr></thead>
      <tbody>
        <tr><td>应用审核 / 版本包</td><td>草稿 / 签名中 / 签名错误 / 审核中 / 已上架 / 已拒绝 / 取消上架 / 已下架</td><td>应用市场</td><td>签名态(kpp 签名中/错误、APK 签名中/错误)是真实业务;审核中显示上架审核;已上架显示下架与推送安装;已拒绝/已下架允许编辑、删除、重新上架。</td></tr>
        <tr><td>OTA 文件</td><td>草稿 / 审核中 / 已上架 / 已拒绝 / 驳回 / 已下架 / 定期上架</td><td>OTA 升级</td><td>草稿/已下架允许编辑、删除、申请上架;已上架允许下架与推送到设备;上下架均二次确认。OTA 推送结果走"推送任务"状态族,不在此列。</td></tr>
        <tr><td>推送任务</td><td>批次:执行中 / 成功 / 部分成功 / 失败;设备级追加 已过期 / 已终止</td><td>推送任务、增值服务</td><td>执行中显示进度;部分失败允许重试失败项;已终止设备不可重试;成功/部分成功允许查看与导出。终止与重试需 push_task_terminate / push_task_rePush 权限。</td></tr>
        <tr><td>设备连接</td><td>在线 / 离线 / 锁定 / 故障 / 维护中</td><td>数据中心、设备地图</td><td>离线禁用远程控制；锁定只允许解锁；故障优先诊断与日志。</td></tr>
        <tr><td>权限分配</td><td>未分配 / 部分分配 / 已分配 / 冲突</td><td>账户、机构、设备分组</td><td>冲突状态必须展示来源，不允许只给红色标签。</td></tr>
      </tbody>
    </table>
  </div>
</section>
</div>
`;
