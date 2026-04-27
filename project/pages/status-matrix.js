/* AngelWatch Design System — page: status-matrix (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["status-matrix"] = `
<div class="content">
<!-- DEVICE STATUS MATRIX -->
<section class="section" id="status-matrix">
  <p class="section-eyebrow">Components · 设备状态</p>
  <h2>Device Status Matrix · 八种状态</h2>
  <p class="lede">设备在生命周期中会经历远多于"在线/离线"的状态：已下发指令但未激活、被锁定、维护中、已退役 …… 系统定义 8 种状态，每个状态有专属图形信号 + 颜色 + 动效，色弱用户可凭形状辨认。</p>
  <table class="status-matrix">
    <thead>
<tr><th style="width:160px">状态</th><th style="width:120px">视觉</th><th style="width:140px">Token</th><th>触发条件</th><th style="width:200px">允许后续操作</th></tr>
    </thead>
    <tbody>
<tr><td><strong>在线</strong> · Online</td><td><span class="sm-dot sm-online">活跃</span></td><td><code>--aw-success</code></td><td>30s 内有心跳</td><td>升级、远程指令、查看日志</td></tr>
<tr><td><strong>离线</strong> · Offline</td><td><span class="sm-dot sm-offline">无心跳</span></td><td><code>--aw-text-4</code></td><td>≥ 5 min 无心跳</td><td>查看历史；操作禁用</td></tr>
<tr><td><strong>升级中</strong> · Upgrading</td><td><span class="sm-dot sm-upgrading">推送中</span></td><td><code>--aw-warning</code></td><td>OTA 已下发未确认</td><td>取消升级、查看进度</td></tr>
<tr><td><strong>故障</strong> · Fault</td><td><span class="sm-dot sm-fault">异常</span></td><td><code>--aw-danger</code></td><td>自检失败 / 异常告警</td><td>诊断、远程重启、上报</td></tr>
<tr><td><strong>已锁定</strong> · Locked</td><td><span class="sm-dot sm-locked">受保护</span></td><td><code>--aw-text-2</code></td><td>管理员手动锁机</td><td>仅解锁；其余全部禁用</td></tr>
<tr><td><strong>未激活</strong> · Unactivated</td><td><span class="sm-dot sm-unactivated">待激活</span></td><td><code>--aw-text-3</code></td><td>已入库未首次上线</td><td>激活、注销</td></tr>
<tr><td><strong>维护中</strong> · Maintenance</td><td><span class="sm-dot sm-maint">检修</span></td><td><code>--aw-info</code></td><td>工单期间</td><td>结束维护、查看工单</td></tr>
<tr><td><strong>已退役</strong> · Decommissioned</td><td><span class="sm-dot sm-decom">下线</span></td><td><code>--aw-text-4</code></td><td>资产已注销</td><td>仅审计查看</td></tr>
    </tbody>
  </table>
</section>
</div>
`;
