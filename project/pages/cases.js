/* AngelWatch Design System — page: cases (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["cases"] = `
<div class="content">
<section class="section" id="cases">
  <p class="section-eyebrow">导览 · 实践案例</p>
  <h2>终端管理实践案例</h2>
  <p class="lede">实践案例用于说明 Android 终端管理的端到端流程：选择设备、推送应用或 OTA 包、跟踪结果、处理失败项、审计操作记录。复杂场景出现争议时，优先回到这里看完整链路。</p>

  <div class="subsection module-coverage">
    <h3>业务模块覆盖矩阵</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:820px;line-height:1.7;margin:0 0 12px">本页按 Android 终端管理的核心业务域沉淀页面规则，帮助团队在应用、OTA、推送、数据中心、账户权限和增值服务之间保持一致体验。</p>
    <table class="coverage-table">
      <thead><tr><th>业务域</th><th>关键页面</th><th>落地页面</th><th>覆盖策略</th></tr></thead>
      <tbody>
        <tr><td>应用市场</td><td>应用列表 / 版本 / 审核 / 安装明细</td><td><a href="#/market-page">market-page</a> + <a href="#/table">table</a> + <a href="#/data-cards">data-cards</a></td><td>主列表、卡片视图、审核、版本、安装明细</td></tr>
        <tr><td>OTA 升级</td><td>升级文件 / 推送确认 / 结果明细</td><td><a href="#/ota-page">ota-page</a> + <a href="#/feedback">feedback</a></td><td>沿用模板页，抽取上传、确认、推送结果规则</td></tr>
        <tr><td>推送任务</td><td>批次列表 / 设备明细 / 结果统计</td><td><a href="#/push-page">push-page</a> + <a href="#/status-matrix">status-matrix</a></td><td>沿用模板页，抽取批量状态与结果明细</td></tr>
        <tr><td>数据中心</td><td>设备列表 / 详情 / 分组 / 远程控制</td><td><a href="#/device-center-page">device-center-page</a> + <a href="#/drawer">drawer</a></td><td>主蓝图页，覆盖设备生命周期与远程控制</td></tr>
        <tr><td>设备地图</td><td>轨迹筛选 / 地图标注 / 时间范围</td><td>follow-up: map-page</td><td>本轮沉淀字段和筛选规则，后续建地图蓝图</td></tr>
        <tr><td>账户 / 运营 / 统计 / 系统</td><td>账号 / 机构 / 角色 / 菜单 / 字典</td><td>follow-up: ops-page + <a href="#/user-mgmt-page">user-mgmt-page</a></td><td>本轮沉淀账户权限和运营规则，后续建运营蓝图</td></tr>
        <tr><td>增值服务</td><td>APN / WIFI / 黑白名单 / 文件推送 / 日志</td><td>follow-up: service-page</td><td>本轮沉淀远程服务规则，后续建服务蓝图</td></tr>
      </tbody>
    </table>
    <div class="coverage-notes">
      <span>排除：老系统页面、废案、临时方案</span>
      <span>Token：light primary = #165DFF，dark primary = #4080FF</span>
      <span>资产：本轮不复制图片素材</span>
    </div>
    <div class="surface" style="margin-top:14px">
      <h3 style="margin:0 0 10px;font-size:14px">来源与转译边界</h3>
      <table class="map-table">
        <thead><tr><th style="width:22%">来源</th><th style="width:30%">用途</th><th>转译规则</th></tr></thead>
        <tbody>
          <tr><td>本地 Figma 文件</td><td>识别业务模块、页面族和高频状态</td><td>只抽取可复用模式，不把每个画板逐帧复制进站点。</td></tr>
          <tr><td>OpenDesign tree / tokens</td><td>核对模块数量、文案词汇和色彩证据</td><td>运行时不依赖本地绝对路径，最终只保留规范化说明和仓库内页面。</td></tr>
          <tr><td>当前 design-system</td><td>落地 token、组件规则、路由和页面模板</td><td>优先遵循 Ant Design v6、file://、常青文档与 --aw-* 变量约束。</td></tr>
        </tbody>
      </table>
      <p style="font-size:12px;color:var(--aw-text-3);line-height:1.7;margin:10px 0 0">本轮把 Figma 证据转译为模块级规则：应用市场、OTA、推送任务、数据中心、账户权限、设备地图、增值服务和系统管理。旧系统、废案和临时方案不进入规范。</p>
    </div>
  </div>

  <div class="subsection">
    <h3>案例 · 01 · 批量推送 OTA 包</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px">运维选 28 台设备 → 推送 OTA 包 → 实时跟进 → 处理失败设备。这是 TMS 最高频流程，跨 list-page → push-page → ota-page → detail-page 四个页面。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name">ListPage 选择终端</div><div class="cf-desc">表格 <b>批量勾选</b>（批量条出现 28/12,486）→ Action toolbar 出现"推送 OTA 包" → 高级筛选记住状态 = 在线</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name">Modal 二次确认</div><div class="cf-desc"><b>不可逆</b> → Modal.confirm，焦点落在"取消"。文案"将向 28 台设备推送 OTA 包，预计 8 分钟"，必须输入数字 28 确认</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name">PushPage 跟踪推送结果</div><div class="cf-desc">每条<b>独立进度环</b> + 状态 Tag → SSE 推送更新 → 失败自动停在该条，不影响后续 → Toast 汇总"24 成功 / 4 失败"</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name">Result 处理失败</div><div class="cf-desc">Result <b>partial-success</b> → 列出 4 台失败 + 错误码 + 「下载失败清单 / 重试 / 联系系统管理员」三个 extra → 跳详情查心跳日志</div></div>
    </div>
    <div class="case-tags"><span>list-page</span><span>push-page</span><span>ota-page</span><span>detail-page</span><span>row-actions</span><span>data-cards</span><span>progress</span><span>toast</span><span>avatar-result</span></div>
  </div>

  <div class="subsection">
    <h3>案例 · 02 · 单设备故障排查</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px">告警进来 → 跳详情页 → 查最近心跳 / 操作日志 / OTA 版本 → 定位原因 → 重启或回滚。从 toast → detail → log → action 闭环 ≤ 30 秒。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name">Notification 告警</div><div class="cf-desc">右上角 Notification 折叠展开 → 显示"DEV-86420075 心跳丢失 5 分钟"+「立即查看」直跳详情</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name">DetailPage</div><div class="cf-desc">顶部 <b>状态条</b>（红色离线）+ 关键字段 SN/IMEI/IP 一屏可见 → 6 Tab 第一个就是"心跳"，不需要再点</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name">操作记录追溯</div><div class="cf-desc">"操作记录" Tab 看最近 24h <b>完整审计</b>（who / when / what / IP）→ 定位是"昨天 14:30 OTA 升级后丢心跳"</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name">Popconfirm 回滚</div><div class="cf-desc">"回滚 OTA 版本" → Popconfirm 行内确认（明示"回滚需 2 分钟，期间设备离线"） → 服务端二次校验 → 推回滚</div></div>
    </div>
    <div class="case-tags"><span>toast</span><span>detail-page</span><span>tab-variants</span><span>status-matrix</span><span>row-actions</span><span>feedback</span></div>
  </div>

  <div class="subsection">
    <h3>案例 · 03 · OTA 全流程</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px">从上传新 OTA 包 → 配置升级策略 → 灰度推送 → 全量推送 → 监控 → 回归。涉及 wizard-page / ota-page / push-page / dash-page 四页。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name">WizardPage 配置</div><div class="cf-desc">5 步向导：上传 .bin → 设备范围（地区 / 型号 / 版本）→ 灰度比例 → 推送时间 → 复核。每步可回退，最后一步 Diff 显示</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name">Drawer 灰度（10%）</div><div class="cf-desc">从 OtaPage 列表点 <b>开始灰度</b> → Drawer 实时进度 → 灰度成功率 ≥ 95% 自动 enable"全量推送"按钮</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name">PushPage 全量</div><div class="cf-desc">复用案例 1 流程 → 但区别：大批量 (≥ 1000) 必须输入完整 SN 前缀确认</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name">DashboardPage 查看终端概况</div><div class="cf-desc">仪表盘看升级率 / 心跳 / 告警三大趋势 → 异常 spike 自动跳告警 → 回归到案例 2 排查</div></div>
    </div>
    <div class="case-tags"><span>wizard-page</span><span>ota-page</span><span>push-page</span><span>dash-page</span><span>drawer</span><span>charts</span><span>upload</span></div>
  </div>

  <div class="subsection">
    <h3>案例 · 04 · 多租户切换</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px">同一管理员管多个租户（不同品牌白标）。登录 → 切租户 → 视觉品牌随租户变 → 数据隔离。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name">LoginPage 多租户</div><div class="cf-desc">登录页第一步选租户（下拉记住上次） → 第二步账号 / 密码 → 验证码（blockPuzzle 滑块）</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name">Shell 顶部切换</div><div class="cf-desc">右上角租户徽章 → Dropdown 列出有权限的租户 → 切换后 <b>整页 reload</b>（不是 SPA 切换）→ logo / 主色 / 机构名 全替换</div></div>
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
