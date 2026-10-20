/* AngelWatch Design System — page: cases (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["cases"] = `
<div class="content">
<section class="section" id="cases">
  <p class="section-eyebrow" data-i18n="cases:hero.eyebrow">导览 · 实践案例</p>
  <h2 data-i18n="cases:hero.title">终端管理实践案例</h2>
  <p class="lede" data-i18n="cases:hero.desc">以下是用于讨论布局和交互的设计场景，不是当前消费者的功能或性能验收清单。字段、状态、权限与 API 须核验后端契约，页面范围、流程与风险策略须经产品批准。</p>

  <div class="subsection module-coverage">
    <h3 data-i18n="cases:coverage.title">业务模块覆盖矩阵</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:820px;line-height:1.7;margin:0 0 12px" data-i18n="cases:coverage.desc">本页按 Android 终端管理的核心业务域沉淀页面规则，帮助团队在应用、OTA、推送、数据中心、账户权限和增值服务之间保持一致体验。</p>
    <table class="coverage-table">
      <thead><tr><th data-i18n="cases:coverage.th.domain">业务域</th><th data-i18n="cases:coverage.th.pages">关键页面</th><th data-i18n="cases:coverage.th.routes">参考页面</th><th data-i18n="cases:coverage.th.strategy">覆盖策略</th></tr></thead>
      <tbody>
        <tr><td data-i18n="cases:coverage.market.domain">应用市场</td><td data-i18n="cases:coverage.market.pages">应用列表 / 版本 / 审核 / 安装明细</td><td><a href="#/market-page">market-page</a> + <a href="#/table">table</a> + <a href="#/data-cards">data-cards</a></td><td data-i18n="cases:coverage.market.strategy">主列表、卡片视图、审核、版本、安装明细</td></tr>
        <tr><td data-i18n="cases:coverage.ota.domain">OTA 升级</td><td data-i18n="cases:coverage.ota.pages">升级文件 / 推送确认 / 结果明细</td><td><a href="#/ota-page">ota-page</a> + <a href="#/feedback">feedback</a></td><td data-i18n="cases:coverage.ota.strategy">沿用页面蓝图，抽取上传、确认、推送结果规则</td></tr>
        <tr><td data-i18n="cases:coverage.push.domain">推送任务</td><td data-i18n="cases:coverage.push.pages">批次列表 / 设备明细 / 结果统计</td><td><a href="#/push-page">push-page</a> + <a href="#/status-matrix">status-matrix</a></td><td data-i18n="cases:coverage.push.strategy">沿用页面蓝图，抽取批量状态与结果明细</td></tr>
        <tr><td data-i18n="cases:coverage.device.domain">数据中心</td><td data-i18n="cases:coverage.device.pages">设备列表 / 详情 / 分组 / 远程控制</td><td><a href="#/device-center-page">device-center-page</a> + <a href="#/drawer">drawer</a></td><td data-i18n="cases:coverage.device.strategy">主蓝图页，覆盖设备生命周期与远程控制</td></tr>
        <tr><td data-i18n="cases:coverage.map.domain">设备地图</td><td data-i18n="cases:coverage.map.pages">设备查询 / 定位查询 / 轨迹查询 / 围栏</td><td><a href="#/map-page">map-page</a> + <a href="#/datepicker">datepicker</a></td><td data-i18n="cases:coverage.map.strategy">地图主视图、时间范围、围栏管理和围栏警告</td></tr>
        <tr><td data-i18n="cases:coverage.ops.domain">账户 / 运营 / 统计 / 系统</td><td data-i18n="cases:coverage.ops.pages">机构 / 运营商 / 账号 / 统计 / OSS / 日志 / 字典 / 菜单</td><td><a href="#/ops-page">ops-page</a> + <a href="#/user-mgmt-page">user-mgmt-page</a></td><td data-i18n="cases:coverage.ops.strategy">权限、运营、统计和系统配置统一为可审计后台规则</td></tr>
        <tr><td data-i18n="cases:coverage.service.domain">增值服务</td><td data-i18n="cases:coverage.service.pages">日志 / 锁定 / 流量 / 密码 / 恢复 / 文件 / APN / WIFI / 黑白名单</td><td><a href="#/service-page">service-page</a> + <a href="#/push-page">push-page</a></td><td data-i18n="cases:coverage.service.strategy">服务配置、推送任务和目标设备详情三段式闭环</td></tr>
      </tbody>
    </table>
    <div class="coverage-notes"><span data-i18n="cases:coverage.note.exclude">排除：老系统页面、废案、临时方案</span><span data-i18n="cases:coverage.note.token">Token：以 --aw-primary 与主题变量为准</span><span data-i18n="cases:coverage.note.asset">资产：仅采用已核验的仓库内资源</span></div>
    <div class="surface" style="margin-top:14px">
      <h3 style="margin:0 0 10px;font-size:14px" data-i18n="cases:sources.title">来源与转译边界</h3>
      <table class="map-table">
        <thead><tr><th style="width:22%" data-i18n="cases:sources.th.source">来源</th><th style="width:30%" data-i18n="cases:sources.th.purpose">用途</th><th data-i18n="cases:sources.th.rule">转译规则</th></tr></thead>
        <tbody>
          <tr><td data-i18n="cases:sources.figma.source">本地 Figma 文件</td><td data-i18n="cases:sources.figma.purpose">识别页面族、布局与状态展示</td><td data-i18n="cases:sources.figma.rule">只抽取可复用模式，不把每个画板逐帧复制进站点。</td></tr>
          <tr><td>OpenDesign tree / tokens</td><td data-i18n="cases:sources.open.purpose">核对模块数量、文案词汇和色彩证据</td><td data-i18n="cases:sources.open.rule">运行时不依赖本地绝对路径，最终只保留规范化说明和仓库内页面。</td></tr>
          <tr><td data-i18n="cases:sources.current.source">当前 design-system</td><td data-i18n="cases:sources.current.purpose">落地 token、组件规则、路由和页面蓝图</td><td data-i18n="cases:sources.current.rule">优先遵循 Ant Design v6、file://、常青文档与 --aw-* 变量约束。</td></tr>
        </tbody>
      </table>
      <p style="font-size:12px;color:var(--aw-text-3);line-height:1.7;margin:10px 0 0" data-i18n="cases:sources.summary">这些设计快照提供模块间的一致体验参考；不能据此认定功能已实现或字段已获后端确认。旧系统、废案和临时方案不进入规范。</p>
    </div>
  </div>

  <div class="subsection">
    <h3 data-i18n="cases:case1.title">案例 · 01 · 批量推送 OTA 包</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px" data-i18n="cases:case1.desc">示例：选择 28 台设备 → 确认推送 OTA 包 → 跟踪任务 → 处理失败项，用来串联列表、推送、OTA 与详情页的交互。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name" data-i18n="cases:case1.step1.name">ListPage 选择终端</div><div class="cf-desc" data-i18n="cases:case1.step1.desc">表格批量勾选，批量条显示 28/12,486；Action toolbar 出现推送 OTA 包；高级筛选记住状态 = 在线。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name" data-i18n="cases:case1.step2.name">Modal 二次确认</div><div class="cf-desc" data-i18n="cases:case1.step2.desc">通过 App 上下文的 modal.confirm 明示目标、数量与后果，默认聚焦取消。数量输入按已批准风险策略启用；仅在有可靠依据时展示耗时估计。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name" data-i18n="cases:case1.step3.name">PushPage 跟踪推送结果</div><div class="cf-desc" data-i18n="cases:case1.step3.desc">进度环与状态 Tag 展示各设备的任务反馈；订阅或轮询方式由消费项目核验。示例 Toast 汇总 24 成功 / 4 失败。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name" data-i18n="cases:case1.step4.name">Result 处理失败</div><div class="cf-desc" data-i18n="cases:case1.step4.desc">部分成功结果视图列出示例中的 4 台失败设备与已知原因；按实际能力和权限提供失败清单、重试或联系管理员入口。</div></div>
    </div>
    <div class="case-tags"><span>list-page</span><span>push-page</span><span>ota-page</span><span>detail-page</span><span>row-actions</span><span>data-cards</span><span>progress</span><span>toast</span><span>avatar-result</span></div>
  </div>

  <div class="subsection">
    <h3 data-i18n="cases:case2.title">案例 · 02 · 单设备故障排查</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px" data-i18n="cases:case2.desc">设计场景：告警 → 详情 → 最近心跳、操作记录与 OTA 信息 → 选择已支持的处置动作。具体入口、字段与处理时限由产品和服务契约确认。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name" data-i18n="cases:case2.step1.name">Notification 告警</div><div class="cf-desc" data-i18n="cases:case2.step1.desc">右上角 Notification 折叠展开，显示 DEV-86420075 心跳丢失 5 分钟，并提供立即查看直跳详情。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name">DetailPage</div><div class="cf-desc" data-i18n="cases:case2.step2.desc">首屏展示关键设备标识和状态，状态使用已定义的语义色。按诊断任务组织详情内容，不预设固定 Tab 数量或第一个 Tab。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name" data-i18n="cases:case2.step3.name">操作记录追溯</div><div class="cf-desc" data-i18n="cases:case2.step3.desc">提供可用的操作记录入口，按后端实际返回的操作者、时间、动作和来源辅助定位问题；不能把前端显示范围当作完整审计保证。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name" data-i18n="cases:case2.step4.name">确认处置动作</div><div class="cf-desc" data-i18n="cases:case2.step4.desc">仅展示后端支持且有权限的处置动作。重启、回滚等强副作用操作使用 modal.confirm，说明已知影响，默认聚焦取消；不承诺未知恢复时间。</div></div>
    </div>
    <div class="case-tags"><span>toast</span><span>detail-page</span><span>tab-variants</span><span>status-matrix</span><span>row-actions</span><span>feedback</span></div>
  </div>

  <div class="subsection">
    <h3 data-i18n="cases:case3.title">案例 · 03 · OTA 全流程</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px" data-i18n="cases:case3.desc">从上传新 OTA 包 → 配置升级策略 → 灰度推送 → 全量推送 → 监控 → 回归。涉及 wizard-page / ota-page / push-page / dash-page 四页。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name" data-i18n="cases:case3.step1.name">WizardPage 配置</div><div class="cf-desc" data-i18n="cases:case3.step1.desc">示例步骤：选择已支持的包、设备范围、策略、执行时间和复核。实际格式与步骤由产品和接口确认；返回上一步保留已填信息。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name" data-i18n="cases:case3.step2.name">Drawer 灰度示例</div><div class="cf-desc" data-i18n="cases:case3.step2.desc">若产品支持灰度推送，可用 Drawer 展示已核验的任务进度。灰度比例、观察窗口与全量放行条件由已批准策略确定。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name" data-i18n="cases:case3.step3.name">PushPage 全量</div><div class="cf-desc" data-i18n="cases:case3.step3.desc">复用批量确认与任务跟踪。大批量风险门槛、输入确认方式和执行权限由产品策略与后端契约确定。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name" data-i18n="cases:case3.step4.name">DashboardPage 查看终端概况</div><div class="cf-desc" data-i18n="cases:case3.step4.desc">在仪表盘查看接口已提供的趋势与异常，并提供可点击的告警或详情入口；不因后台数据更新自动打断当前任务。</div></div>
    </div>
    <div class="case-tags"><span>wizard-page</span><span>ota-page</span><span>push-page</span><span>dash-page</span><span>drawer</span><span>charts</span><span>upload</span></div>
  </div>

  <div class="subsection">
    <h3 data-i18n="cases:case4.title">案例 · 04 · 租户主题扩展候选</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px" data-i18n="cases:case4.desc">候选场景：同一管理员切换有权限的租户，并切换经批准的品牌配置。当前消费者尚未实现租户主题链路；采用前须扩展主题构建器、机器契约与回归测试。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name" data-i18n="cases:case4.step1.name">LoginPage 多租户</div><div class="cf-desc" data-i18n="cases:case4.step1.desc">租户选择是否存在、出现时机和认证步骤由已批准流程与认证接口确定；本案例不新增登录前置步骤。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name" data-i18n="cases:case4.step2.name">Shell 顶部切换</div><div class="cf-desc" data-i18n="cases:case4.step2.desc">若提供切换入口，只展示有权限的租户并处理未保存内容。整页重载或应用内切换须由消费项目评估，不将 reload 定为通用要求。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name" data-i18n="cases:case4.step3.name">品牌配置与主题映射</div><div class="cf-desc" data-i18n="cases:case4.step3.desc">品牌资产与主题 token 分别映射；先定义允许覆盖的品牌值及明暗主题对比度测试。ConfigProvider 不会自动重算全部 --aw-* CSS 变量。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name" data-i18n="cases:case4.step4.name">数据隔离</div><div class="cf-desc" data-i18n="cases:case4.step4.desc">后端负责租户与权限隔离。若实现切换，前端须清理旧租户状态、取消旧请求并隔离迟到响应，再显示新租户数据。</div></div>
    </div>
    <div class="case-tags"><span>login-page</span><span>shell</span><span>whitelabel</span><span>i18n</span></div>
  </div>

  <div class="subsection">
    <h3 data-i18n="cases:case5.title">案例 · 05 · 故障回归审计</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px" data-i18n="cases:case5.desc">月度审计：导出本月所有破坏性操作（删除 / 推送 / 重启 / 回滚）→ 按操作人 / 时间 / 设备过滤 → 异常操作打标 → 提交合规报告。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name">UserMgmtPage</div><div class="cf-desc" data-i18n="cases:case5.step1.desc">角色权限 Tab 展示本月哪些角色执行过破坏性操作，并联动跳到操作日志。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name" data-i18n="cases:case5.step2.name">Log 高级筛选</div><div class="cf-desc" data-i18n="cases:case5.step2.desc">复合筛选：操作类型 ∈ {删除, 重启, 回滚} + 操作人 + 时间区间 + IP 段。高级筛选默认折叠，4 字段先露。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name" data-i18n="cases:case5.step3.name">Table 异常打标</div><div class="cf-desc" data-i18n="cases:case5.step3.desc">勾选异常行后批量标记审查中，行级 Tag 显示状态，并把异常分组提升到顶部。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name" data-i18n="cases:case5.step4.name">导出 CSV / PDF</div><div class="cf-desc" data-i18n="cases:case5.step4.desc">按服务实际支持的格式提供导出入口。任务完成后提供下载；有效期、导出范围和权限依据真实响应与后端契约展示。</div></div>
    </div>
    <div class="case-tags"><span>user-mgmt-page</span><span>list-page</span><span>table</span><span>cascader</span><span>row-actions</span><span>upload</span><span>avatar-result</span></div>
  </div>

  <div class="subsection">
    <h3 data-i18n="cases:case6.title">案例 · 06 · 设备异常到安全远控</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px" data-i18n="cases:case6.desc">围栏或硬件告警进入设备详情，校验在线、激活、屏幕锁和占用状态后发起诊断；会话关闭后仍能从记录查看日志和处置结果。</p>
    <div class="case-flow">
      <div class="cf-step"><div class="cf-num">1</div><div class="cf-name" data-i18n="cases:case6.step1.name">告警定位</div><div class="cf-desc" data-i18n="cases:case6.step1.desc">地图或告警列表固定显示设备、来源、级别、时间和当前位置有效性。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">2</div><div class="cf-name" data-i18n="cases:case6.step2.name">会话前检查</div><div class="cf-desc" data-i18n="cases:case6.step2.desc">校验在线、激活、占用和权限；禁用动作必须说明具体原因。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">3</div><div class="cf-name" data-i18n="cases:case6.step3.name">连接与诊断</div><div class="cf-desc" data-i18n="cases:case6.step3.desc">Notification 展示等待设备和连接进度，拒绝、超时或服务异常进入持续反馈。</div></div>
      <div class="cf-arrow">→</div>
      <div class="cf-step"><div class="cf-num">4</div><div class="cf-name" data-i18n="cases:case6.step4.name">日志与复核</div><div class="cf-desc" data-i18n="cases:case6.step4.desc">结束会话后记录操作者、时长、动作、日志和处置结果，并返回告警复核。</div></div>
    </div>
    <div class="case-tags"><span>map-page</span><span>device-center-page</span><span>progress</span><span>feedback</span><span>ops-page</span></div>
  </div>

  <div class="subsection">
    <h3 data-i18n="cases:patterns.title">跨案例的共用模式</h3>
    <table class="map-table">
      <thead><tr><th style="width:30%" data-i18n="cases:patterns.th.pattern">模式</th><th data-i18n="cases:patterns.th.used">出现于</th></tr></thead>
      <tbody>
        <tr><td data-i18n="cases:patterns.bulk.pattern">批量勾选 + Action toolbar</td><td data-i18n="cases:patterns.bulk.used">案例 1 / 案例 5</td></tr>
        <tr><td data-i18n="cases:patterns.confirm.pattern">不可逆操作确认 + 风险策略</td><td data-i18n="cases:patterns.confirm.used">案例 1 / 案例 3</td></tr>
        <tr><td data-i18n="cases:patterns.sse.pattern">统一刷新进度与状态</td><td data-i18n="cases:patterns.sse.used">案例 1 / 案例 2 / 案例 3</td></tr>
        <tr><td data-i18n="cases:patterns.result.pattern">Result 部分成功 + 失败 CSV</td><td data-i18n="cases:patterns.result.used">案例 1 / 案例 5</td></tr>
        <tr><td data-i18n="cases:patterns.audit.pattern">可用操作记录与审计入口</td><td data-i18n="cases:patterns.audit.used">案例 2 / 案例 5</td></tr>
        <tr><td data-i18n="cases:patterns.tenant.pattern">租户切换的上下文隔离（候选）</td><td data-i18n="cases:patterns.tenant.used">案例 4</td></tr>
        <tr><td data-i18n="cases:patterns.error.pattern">错误信息：发生了什么 + 已知原因 + 下一步</td><td data-i18n="cases:patterns.error.used">所有案例</td></tr>
        <tr><td data-i18n="cases:patterns.theme.pattern">Light / Dark 双主题视觉同等支持</td><td data-i18n="cases:patterns.theme.used">所有案例</td></tr>
        <tr><td data-i18n="cases:patterns.session.pattern">远程会话状态与推送批次分离</td><td data-i18n="cases:patterns.session.used">案例 06</td></tr>
        <tr><td data-i18n="cases:patterns.conflict.pattern">冲突来源 + 跳过/覆盖 + 部分成功</td><td data-i18n="cases:patterns.conflict.used">设备分组 / 权限配置 / 应用与 OTA 分配</td></tr>
      </tbody>
    </table>
  </div>
</section>
</div>
`;
