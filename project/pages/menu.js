/* AngelWatch Design System — page: menu */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["menu"] = `
<div class="content">
<section class="section" id="menu">
  <p class="section-eyebrow"><span data-i18n="menu:text.001">通用组件 · 菜单</span></p>
  <h2><span data-i18n="menu:text.002">菜单 Menu</span></h2>
  <p class="lede"><span data-i18n="menu:text.003">侧边栏的核心组件。Vertical Menu（默认）+ 横向 Menu（分隔少 / 顶栏用）+ 折叠态 + Submenu 时间轴层级。Active 用 3px 品牌蓝 indicator bar + 浅蓝底 + 蓝色文字标记，子菜单缩进 + 1px 时间轴线建立层级。</span></p>

  <div class="demo-stack">
    <div class="surface">
      <h3 class="card-title"><span data-i18n="menu:text.004">Vertical Menu · 三态对照</span></h3>
      <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 16px"><span data-i18n="menu:text.005">从左到右:展开默认态 / 展开 + 二级子菜单 / 折叠态(64px 仅 icon)</span></p>
      <div class="menu-states">
        <div class="ms-frame">
          <div class="ms-label"><span data-i18n="menu:text.006">展开 · Expanded</span></div>
          <div class="ms-mock">
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12 12 4l9 8M5 10v10h14V10"/></svg><span data-i18n="menu:text.007">首页</span></div>
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg><span data-i18n="menu:text.008">应用市场</span></div>
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v8m0 0 4-4m-4 4-4-4M4 20h16"/></svg><span data-i18n="menu:text.009">OTA 升级</span></div>
            <div class="ms-it act"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="16"/><path d="M4 9h16M9 4v16"/></svg><span data-i18n="menu:text.010">数据中心</span></div>
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg><span data-i18n="menu:text.011">设备地图</span></div>
            <div class="ms-it dis"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/></svg><span data-i18n="menu:text.012">系统管理</span></div>
          </div>
        </div>

        <div class="ms-frame">
          <div class="ms-label"><span data-i18n="menu:text.013">展开 + 子菜单</span></div>
          <div class="ms-mock">
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12 12 4l9 8M5 10v10h14V10"/></svg><span data-i18n="menu:text.014">首页</span></div>
            <div class="ms-it act"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="16"/><path d="M4 9h16M9 4v16"/></svg><span data-i18n="menu:text.015">数据中心</span></div>
            <div class="ms-sub">
              <div class="ms-sub-it"><span data-i18n="menu:text.016">设备分组</span></div>
              <div class="ms-sub-it act"><span data-i18n="menu:text.017">设备管理</span></div>
              <div class="ms-sub-it"><span data-i18n="menu:text.018">型号管理</span></div>
              <div class="ms-sub-it"><span data-i18n="menu:text.019">设备地图</span></div>
            </div>
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg><span data-i18n="menu:text.020">数据统计</span></div>
          </div>
        </div>

        <div class="ms-frame">
          <div class="ms-label"><span data-i18n="menu:text.021">折叠 · 64px</span></div>
          <div class="ms-mock collapsed">
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12 12 4l9 8M5 10v10h14V10"/></svg></div>
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></div>
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v8m0 0 4-4m-4 4-4-4M4 20h16"/></svg></div>
            <div class="ms-it act"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="16"/><path d="M4 9h16M9 4v16"/></svg></div>
            <div class="ms-tip"><span data-i18n="menu:text.022">数据中心 </span><span class="ms-tip-bg">3</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title"><span data-i18n="menu:text.023">Item 状态详解</span></h3>
      <table class="dt" style="margin-top:8px">
        <thead><tr><th style="width:120px"><span data-i18n="menu:text.024">状态</span></th><th style="width:240px"><span data-i18n="menu:text.025">视觉</span></th><th style="width:180px">CSS Token</th><th><span data-i18n="menu:text.026">触发条件 / 用途</span></th></tr></thead>
        <tbody>
          <tr><td><strong>Default</strong></td><td><span class="ms-pill"><span data-i18n="menu:text.027">📁 应用市场</span></span></td><td><code>--aw-sidebar-text</code></td><td><span data-i18n="menu:text.028">未交互的常态</span></td></tr>
          <tr><td><strong>Hover</strong></td><td><span class="ms-pill hover"><span data-i18n="menu:text.029">📁 应用市场</span></span></td><td><code>--aw-sidebar-bg-hover</code></td><td><span data-i18n="menu:text.030">鼠标悬浮 200ms 渐入</span></td></tr>
          <tr><td><strong>Active</strong></td><td><span class="ms-pill active"><span class="bar"></span><span data-i18n="menu:text.031">📁 应用市场</span></span></td><td><code>--aw-sidebar-bg-active</code> + 3px <code>--aw-primary</code> indicator</td><td><span data-i18n="menu:text.032">当前路由匹配</span></td></tr>
          <tr><td><strong>Disabled</strong></td><td><span class="ms-pill disabled"><span data-i18n="menu:text.033">🔒 系统管理</span></span></td><td><code>--aw-text-disabled</code> + cursor: not-allowed</td><td><span data-i18n="menu:text.034">权限不足 / 未激活</span></td></tr>
          <tr><td><strong>Badge</strong></td><td><span class="ms-pill"><span data-i18n="menu:text.035">🔔 告警 </span><span class="badge-num">3</span></span></td><td><code>--aw-danger</code><span data-i18n="menu:text.036"> 圆形小数字</span></td><td><span data-i18n="menu:text.037">未读 / 待办计数(限 99+)</span></td></tr>
        </tbody>
      </table>
    </div>

    <div class="surface">
      <h3 class="card-title"><span data-i18n="menu:text.038">Submenu 层级规范</span></h3>
      <div class="row" style="gap:24px;align-items:flex-start">
        <div style="flex:1;font-size:13px;color:var(--aw-text-2);line-height:1.7">
          <b style="color:var(--aw-text-1)"><span data-i18n="menu:text.039">规则:</span></b><br><span data-i18n="menu:text.040">
          · 最深 </span><b><span data-i18n="menu:text.041">3 级</span></b><span data-i18n="menu:text.042">(一级菜单 → 子菜单 → 三级)。超过用搜索/快捷入口</span><br><span data-i18n="menu:text.043">
          · 二级缩进 </span><b>36px</b><span data-i18n="menu:text.044">,左侧 1px </span><code>#E5E8EC</code><span data-i18n="menu:text.045"> 时间轴线</span><br><span data-i18n="menu:text.046">
          · 二级 active 不再用 indicator bar(避免与一级冲突),改 </span><b><span data-i18n="menu:text.047">6×6 圆点</span></b><span data-i18n="menu:text.048"> + 蓝色文字</span><br><span data-i18n="menu:text.049">
          · 折叠态:子菜单不可见,仅鼠标悬停时浮出 hover popup
        </span></div>
        <div style="flex:0 0 280px;font-family:var(--aw-font-mono);font-size:11px;line-height:1.8;background:var(--aw-fill-1);padding:12px;border-radius:6px;color:var(--aw-text-2)">
          <div><span data-i18n="menu:text.050">📁 数据中心          ← L1</span></div>
          <div style="padding-left:16px"><span data-i18n="menu:text.051">│  设备分组          ← L2</span></div>
          <div style="padding-left:16px">│  <span style="color:var(--aw-primary)"><span data-i18n="menu:text.052">●  设备管理          ← L2 active</span></span></div>
          <div style="padding-left:16px"><span data-i18n="menu:text.053">│     ├─ 列表视图    ← L3</span></div>
          <div style="padding-left:16px"><span data-i18n="menu:text.054">│     └─ 卡片视图    ← L3</span></div>
          <div style="padding-left:16px"><span data-i18n="menu:text.055">│  型号管理</span></div>
        </div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title"><span data-i18n="menu:text.056">Horizontal Menu · 顶栏导航</span></h3>
      <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 14px"><span data-i18n="menu:text.057">用于一级模块切换(如多产品线)。子级仍走 vertical sidebar。</span></p>
      <div class="menu-h-mock">
        <div class="mh-it"><span data-i18n="menu:text.058">设备管理</span></div>
        <div class="mh-it"><span data-i18n="menu:text.059">应用市场</span></div>
        <div class="mh-it act"><span data-i18n="menu:text.060">数据中心 </span><span class="mh-bar"></span></div>
        <div class="mh-it"><span data-i18n="menu:text.061">OTA 升级</span></div>
        <div class="mh-it"><span data-i18n="menu:text.062">推送中心</span></div>
        <div class="mh-it dis"><span data-i18n="menu:text.063">监控大屏 </span><span class="ms-pill" style="background:var(--aw-fill-2);color:var(--aw-text-3);font-size:10px;padding:0 6px;margin-left:4px"><span data-i18n="menu:text.064">即将开放</span></span></div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">Do / Don't</h3>
      <div class="demo-grid cols-2">
        <div style="font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <b style="color:var(--aw-success)">✓ DO</b><br><span data-i18n="menu:text.065">
          · Active 必须有 </span><b>3px indicator bar</b><span data-i18n="menu:text.066">,不要只靠背景色</span><br><span data-i18n="menu:text.067">
          · 一级菜单 ≤ 8 项;超出用分组(MAIN / SYSTEM)</span><br><span data-i18n="menu:text.068">
          · 折叠态 hover 必须有 tooltip 浮出菜单名</span><br><span data-i18n="menu:text.069">
          · 角标数字 99+ 上限,不显示真实大数</span><br><span data-i18n="menu:text.070">
          · 键盘可达:↑↓ 切换,Enter 进入,Esc 关闭子菜单
        </span></div>
        <div style="font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <b style="color:var(--aw-danger)">✕ DON'T</b><br><span data-i18n="menu:text.071">
          · 不要用 4 级或更深(需重新设计信息架构)</span><br><span data-i18n="menu:text.072">
          · 不要在 Hover 上加角标(易误判为 active)</span><br><span data-i18n="menu:text.073">
          · 不要在折叠态显示文字(64px 容不下)</span><br><span data-i18n="menu:text.074">
          · 不要让用户从角标跳转(角标仅提示,点击进入页面再处理)</span><br><span data-i18n="menu:text.075">
          · 不要在 Menu Item 内嵌按钮 / 表单
        </span></div>
      </div>
    </div>
  </div>
</section>
</div>
`;
