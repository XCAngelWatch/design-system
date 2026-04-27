/* AngelWatch Design System — page: overview (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["overview"] = `
<!-- HERO -->
<section class="hero" id="overview">
  <div class="hero-inner">
    <div class="hero-eyebrow">AngelWatch · TMS Design System</div>
    <h1>The unified visual &amp; interaction language for <em>AngelWatch TMS.</em></h1>
    <p>Built on Ant Design v6, calibrated for high-density telemetry, OTA orchestration, and 24/7 fleet operations. Single source of truth for ops engineers and IT admins who live in this tool 4–8 hours a day. Light + Dark 双主题，zh-CN / en / es / pt 四语言，均自托管，内网部署，离线可用。</p>
    <div class="hero-meta">
<div><strong>240</strong>设计 Token</div>
<div><strong>33+</strong>核心组件</div>
<div><strong>10</strong>生态集成</div>
<div><strong>10</strong>页面模式</div>
    </div>
</div>
</section>
<div class="content">

  <!-- PRINCIPLES -->
  <section class="section">
    <p class="section-eyebrow">Principles · 设计原则</p>
    <h2>密度、状态、熟悉感</h2>
    <p class="lede">运维人员每天在系统中停留数小时，处理成千上万的设备。我们用三条原则约束每一次取舍。</p>
    <div class="demo-grid cols-3">
<div class="surface">
  <div class="tag-meta" style="margin-bottom:10px">01</div>
  <h3 style="margin:0 0 6px;font-size:15px">密度，但不嘈杂</h3>
  <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.6">每个像素都要承担信息。慷慨的数据，克制的装饰，可预测的节奏。</p>
</div>
<div class="surface">
  <div class="tag-meta" style="margin-bottom:10px">02</div>
  <h3 style="margin:0 0 6px;font-size:15px">状态是结构</h3>
  <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.6">在线、离线、升级中、锁定、故障——状态是一等公民。颜色、形状、动效一致传达。</p>
</div>
<div class="surface">
  <div class="tag-meta" style="margin-bottom:10px">03</div>
  <h3 style="margin:0 0 6px;font-size:15px">熟悉，而非泛用</h3>
  <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.6">基于 antd v6 中后台用户已经熟悉的语言。打磨它，不为求新而重造。</p>
</div>
    </div>

    <div class="section-subtitle" style="margin-top:34px">Interaction Principles · 10 条交互守则</div>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.6;margin:0 0 12px">设计语言层面的"红线" — 每条都对应一个实际场景中被反复推翻的设计争论。当 PR review 出现分歧时，引用编号即可结案。</p>
    <div class="principles-table">
<div class="pt-row">
  <div class="pt-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></svg></div>
  <div class="pt-name">即时反馈<span class="en">Immediate Feedback</span></div>
  <div class="pt-tms">所有用户操作 ≤ 100ms 给出视觉反馈（hover、按压、loading）。后台请求 &gt; 300ms 必须显示 spinner；&gt; 1s 必须显示进度。<code>useFeedback</code> hook 自动处理。</div>
</div>
<div class="pt-row">
  <div class="pt-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/></svg></div>
  <div class="pt-name">乐观更新<span class="en">Optimistic UI</span></div>
  <div class="pt-tms">勾选、收藏、状态切换等可逆操作 — UI 立刻响应，请求失败再回滚 + Toast。<b>不可</b>用于：删除、推送固件、重启设备等不可逆 / 强副作用操作。</div>
</div>
<div class="pt-row">
  <div class="pt-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 13l4 4L19 7"/></svg></div>
  <div class="pt-name">默认安全<span class="en">Safe Defaults</span></div>
  <div class="pt-tms">破坏性操作不能默认聚焦"确认"按钮 — 默认聚焦"取消"。批量操作 &gt; 10 条必须二次输入设备数量；&gt; 100 条必须输入完整 SN 前缀。</div>
</div>
<div class="pt-row">
  <div class="pt-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 12h18M3 6h18M3 18h12"/></svg></div>
  <div class="pt-name">单一信源<span class="en">Single Source of Truth</span></div>
  <div class="pt-tms">设备状态只从 <code>/api/devices/:id</code> 取，不允许在列表 / 详情 / 卡片各自缓存推断。状态由 SSE 推送统一更新到 React Query store。</div>
</div>
<div class="pt-row">
  <div class="pt-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/></svg></div>
  <div class="pt-name">焦点优先<span class="en">Focus First</span></div>
  <div class="pt-tms">所有交互组件键盘可达：<code>Tab</code> 顺序自然、<code>Esc</code> 关闭弹层、<code>Enter</code> 确认、<code>↑↓</code> 在下拉/表格中导航。focus ring 永远可见（非 :focus-visible only）。</div>
</div>
<div class="pt-row">
  <div class="pt-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
  <div class="pt-name">语义化反馈<span class="en">Semantic Feedback</span></div>
  <div class="pt-tms">成功 = 绿色 Toast 自动消失（3s）；警告 = 黄色 Toast 需手动关闭；错误 = 红色 Modal 必须用户确认。禁止用 <code>alert()</code> / <code>confirm()</code>。</div>
</div>
<div class="pt-row">
  <div class="pt-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 3l18 18M21 3 3 21"/></svg></div>
  <div class="pt-name">不可逆即二次确认<span class="en">Confirm the Irreversible</span></div>
  <div class="pt-tms">删除、解绑、推送、重启、回滚 — 五类操作必须 <code>Popconfirm</code>（行内 inline）或 <code>Modal.confirm</code>（页面级）。文案要明示后果，不要"确定要继续吗"。</div>
</div>
<div class="pt-row">
  <div class="pt-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></div>
  <div class="pt-name">渐进披露<span class="en">Progressive Disclosure</span></div>
  <div class="pt-tms">高级筛选默认折叠，常用 4 个字段先露。详情页 6 个 Tab 按使用频率排序，第一个 Tab 必须能解决 80% 的查看意图。表单字段 &gt; 8 必须分组。</div>
</div>
<div class="pt-row">
  <div class="pt-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2 2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
  <div class="pt-name">空状态可执行<span class="en">Actionable Empty</span></div>
  <div class="pt-tms">空状态不只是"暂无数据" — 必须给出下一步：「+ 添加设备」/ 「调整筛选」/ 「联系管理员」。Result 组件强制传 <code>extra</code> prop。</div>
</div>
<div class="pt-row">
  <div class="pt-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/><circle cx="12" cy="9" r="2.5"/></svg></div>
  <div class="pt-name">可追溯<span class="en">Traceable</span></div>
  <div class="pt-tms">所有写操作（推送、修改、删除）落地操作日志：操作人 / 时间 / 设备 / IP。详情页"操作记录" Tab 是最后一道审计防线，不能被绕过。</div>
</div>
    </div>
  </section>
</div>
`;
