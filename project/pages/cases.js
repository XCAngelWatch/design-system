/* AngelWatch Design System — page: cases (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["cases"] = `
<div class="content">
<section class="section" id="cases">
  <p class="section-eyebrow">导览 · 实践案例</p>
  <h2>Cases · 实践案例</h2>
  <p class="lede">设计系统不是组件清单 —— 它是把价值观、原则、token 跨越多个组件页落地到端到端业务流程的能力。下表 5 个案例对应 TMS 最高频的运维流程，每个都跨 4-6 个 page template + 3-5 类组件。复杂场景出现争议时回到这里看"完整链路怎么走"。</p>

  <div class="subsection">
    <h3>案例 · 01 · 批量推送固件</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px">运维选 28 台设备 → 推送固件 v3.4.2 → 实时跟进 → 处理失败设备。这是 TMS 最高频流程，跨 list-page → push-page → ota-page → detail-page 四个页面。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name">ListPage 选设备</div><div class="cf-desc">表格 <b>批量勾选</b>（批量条出现 28/12,486）→ Action toolbar 出现"推送固件" → 高级筛选记住状态 = 在线</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name">Modal 二次确认</div><div class="cf-desc"><b>不可逆</b> → Modal.confirm，焦点落在"取消"。文案"将向 28 台设备推送 v3.4.2，预计 8 分钟"，必须输入数字 28 确认</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name">PushPage 实时</div><div class="cf-desc">每条<b>独立进度环</b> + 状态 Tag → SSE 推送更新 → 失败自动停在该条，不影响后续 → Toast 汇总"24 成功 / 4 失败"</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name">Result 处理失败</div><div class="cf-desc">Result <b>partial-success</b> → 列出 4 台失败 + 错误码 + 「下载 CSV / 重试 / 联系管理员」三个 extra → 跳详情查心跳日志</div></div>
    </div>
    <div class="case-tags"><span>list-page</span><span>push-page</span><span>ota-page</span><span>detail-page</span><span>row-actions</span><span>data-cards</span><span>progress</span><span>toast</span><span>avatar-result</span></div>
  </div>

  <div class="subsection">
    <h3>案例 · 02 · 单设备故障排查</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px">告警进来 → 跳详情页 → 查最近心跳 / 操作日志 / 固件版本 → 定位原因 → 重启或回滚。从 toast → detail → log → action 闭环 ≤ 30 秒。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name">Notification 告警</div><div class="cf-desc">右上角 Notification 折叠展开 → 显示"GW-007 心跳丢失 5 分钟"+「立即查看」直跳详情</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name">DetailPage</div><div class="cf-desc">顶部 <b>状态条</b>（红色离线）+ 关键字段 SN/IMEI/IP 一屏可见 → 6 Tab 第一个就是"心跳"，不需要再点</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name">操作记录追溯</div><div class="cf-desc">"操作记录" Tab 看最近 24h <b>完整审计</b>（who / when / what / IP）→ 定位是"昨天 14:30 推送 v3.4.2 后丢心跳"</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name">Popconfirm 回滚</div><div class="cf-desc">"回滚到 v3.4.1" → Popconfirm 行内确认（明示"回滚需 2 分钟，期间设备离线"） → 服务端二次校验 → 推回滚</div></div>
    </div>
    <div class="case-tags"><span>toast</span><span>detail-page</span><span>tab-variants</span><span>status-matrix</span><span>row-actions</span><span>feedback</span></div>
  </div>

  <div class="subsection">
    <h3>案例 · 03 · OTA 全流程</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px">从上传新固件 → 配置升级策略 → 灰度推送 → 全量推送 → 监控 → 回归。涉及 wizard-page / ota-page / push-page / dash-page 四页。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name">WizardPage 配置</div><div class="cf-desc">5 步向导：上传 .bin → 设备范围（地区 / 型号 / 版本）→ 灰度比例 → 推送时间 → 复核。每步可回退，最后一步 Diff 显示</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name">Drawer 灰度（10%）</div><div class="cf-desc">从 OtaPage 列表点 <b>开始灰度</b> → Drawer 实时进度 → 灰度成功率 ≥ 95% 自动 enable"全量推送"按钮</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name">PushPage 全量</div><div class="cf-desc">复用案例 1 流程 → 但区别：大批量 (≥ 1000) 必须输入完整 SN 前缀确认</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name">DashboardPage 监控</div><div class="cf-desc">仪表盘看升级率 / 心跳 / 告警三大趋势 → 异常 spike 自动跳告警 → 回归到案例 2 排查</div></div>
    </div>
    <div class="case-tags"><span>wizard-page</span><span>ota-page</span><span>push-page</span><span>dash-page</span><span>drawer</span><span>charts</span><span>upload</span></div>
  </div>

  <div class="subsection">
    <h3>案例 · 04 · 多租户切换</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px">同一管理员管多个租户（不同品牌白标）。登录 → 切租户 → 视觉品牌随租户变 → 数据隔离。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name">LoginPage 多租户</div><div class="cf-desc">登录页第一步选租户（下拉记住上次） → 第二步用户名 / 密码 → 验证码（blockPuzzle 滑块）</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name">Shell 顶部切换</div><div class="cf-desc">右上角租户徽章 → Dropdown 列出有权限的租户 → 切换后 <b>整页 reload</b>（不是 SPA 切换）→ logo / 主色 / 站点名 全替换</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name">Whitelabel token 接管</div><div class="cf-desc">租户 webConfig 里的 logo / brandColor / siteName 通过 <code>ConfigProvider</code> 顶层注入 → 所有 <code>--aw-*</code> token 重新解析 → dark / 4 语保持</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name">数据隔离</div><div class="cf-desc">所有 API 自带 X-Tenant 头 → 切租户清空 React Query 缓存 → 防止 A 租户数据闪现到 B</div></div>
    </div>
    <div class="case-tags"><span>login-page</span><span>shell</span><span>whitelabel</span><span>i18n</span></div>
  </div>

  <div class="subsection">
    <h3>案例 · 05 · 故障回归审计</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px">月度审计：导出本月所有破坏性操作（删除 / 推送 / 重启 / 回滚）→ 按操作人 / 时间 / 设备过滤 → 异常操作打标 → 提交合规报告。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name">UserMgmtPage</div><div class="cf-desc">"角色权限"Tab → 看本月哪些角色做了破坏性操作 → 联动跳到操作日志</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name">Log 高级筛选</div><div class="cf-desc">复合筛选：操作类型 ∈ {删除, 重启, 回滚} + 操作人 + 时间区间 + IP段 → 高级筛选默认折叠，4 字段先露</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name">Table 异常打标</div><div class="cf-desc">勾选异常行 → 批量"标记审查中" → 行级 Tag 显示 → 异常分组到顶部</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name">导出 CSV / PDF</div><div class="cf-desc">右上"导出" → Modal 选格式（CSV 完整 / PDF 摘要） → 进度条 → 完成后<b>不</b>自动下载，给"下载"按钮 + 24h 过期提示</div></div>
    </div>
    <div class="case-tags"><span>user-mgmt-page</span><span>list-page</span><span>table</span><span>cascader</span><span>row-actions</span><span>upload</span><span>avatar-result</span></div>
  </div>

  <div class="subsection">
    <h3>跨案例的共用模式</h3>
    <table class="map-table">
      <thead><tr><th style="width:30%">模式</th><th>出现于</th></tr></thead>
      <tbody>
        <tr><td>批量勾选 + Action toolbar</td><td>案例 1 / 案例 5</td></tr>
        <tr><td>不可逆操作二次确认 + 输入数量</td><td>案例 1 / 案例 3</td></tr>
        <tr><td>SSE 推送更新 React Query</td><td>案例 1 / 案例 2 / 案例 3</td></tr>
        <tr><td>Result 部分成功 + 失败 CSV</td><td>案例 1 / 案例 5</td></tr>
        <tr><td>操作记录 Tab 强制审计</td><td>案例 2 / 案例 5</td></tr>
        <tr><td>租户切换整页 reload</td><td>案例 4</td></tr>
        <tr><td>错误信息三层（做了什么 + 为什么 + 怎么办）</td><td>所有案例</td></tr>
        <tr><td>Light / Dark 双主题视觉同等支持</td><td>所有案例</td></tr>
      </tbody>
    </table>
  </div>
</section>
</div>
`;
