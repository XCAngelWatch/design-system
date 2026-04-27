/* AngelWatch Design System — page: menu */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["menu"] = `
<div class="content">
<section class="section" id="menu">
  <p class="section-eyebrow">Components · 菜单</p>
  <h2>Menu · 菜单</h2>
  <p class="lede">侧边栏的核心组件。Vertical Menu（默认）+ 横向 Menu（分隔少 / 顶栏用）+ 折叠态 + Submenu 时间轴层级。Active 用 3px 品牌蓝 indicator bar + 浅蓝底 + 蓝色文字标记，子菜单缩进 + 1px 时间轴线建立层级。</p>

  <div class="demo-stack">
    <div class="surface">
      <h3 class="card-title">Vertical Menu · 三态对照</h3>
      <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 16px">从左到右:展开默认态 / 展开 + 二级子菜单 / 折叠态(64px 仅 icon)</p>
      <div class="menu-states">
        <div class="ms-frame">
          <div class="ms-label">展开 · Expanded</div>
          <div class="ms-mock">
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12 12 4l9 8M5 10v10h14V10"/></svg>首页</div>
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>应用市场</div>
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v8m0 0 4-4m-4 4-4-4M4 20h16"/></svg>OTA 升级</div>
            <div class="ms-it act"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="16"/><path d="M4 9h16M9 4v16"/></svg>数据中心</div>
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/></svg>设备地图</div>
            <div class="ms-it dis"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/></svg>系统管理</div>
          </div>
        </div>

        <div class="ms-frame">
          <div class="ms-label">展开 + 子菜单</div>
          <div class="ms-mock">
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12 12 4l9 8M5 10v10h14V10"/></svg>首页</div>
            <div class="ms-it act"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="16"/><path d="M4 9h16M9 4v16"/></svg>数据中心</div>
            <div class="ms-sub">
              <div class="ms-sub-it">设备分组</div>
              <div class="ms-sub-it act">设备管理</div>
              <div class="ms-sub-it">型号管理</div>
              <div class="ms-sub-it">设备地图</div>
            </div>
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg>数据统计</div>
          </div>
        </div>

        <div class="ms-frame">
          <div class="ms-label">折叠 · 64px</div>
          <div class="ms-mock collapsed">
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12 12 4l9 8M5 10v10h14V10"/></svg></div>
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></div>
            <div class="ms-it"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v8m0 0 4-4m-4 4-4-4M4 20h16"/></svg></div>
            <div class="ms-it act"><svg class="ms-icn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="16"/><path d="M4 9h16M9 4v16"/></svg></div>
            <div class="ms-tip">数据中心 <span class="ms-tip-bg">3</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">Item 状态详解</h3>
      <table class="dt" style="margin-top:8px">
        <thead><tr><th style="width:120px">状态</th><th style="width:240px">视觉</th><th style="width:180px">CSS Token</th><th>触发条件 / 用途</th></tr></thead>
        <tbody>
          <tr><td><strong>Default</strong></td><td><span class="ms-pill">📁 应用市场</span></td><td><code>--aw-sidebar-text</code></td><td>未交互的常态</td></tr>
          <tr><td><strong>Hover</strong></td><td><span class="ms-pill hover">📁 应用市场</span></td><td><code>--aw-sidebar-bg-hover</code></td><td>鼠标悬浮 200ms 渐入</td></tr>
          <tr><td><strong>Active</strong></td><td><span class="ms-pill active"><span class="bar"></span>📁 应用市场</span></td><td><code>--aw-sidebar-bg-active</code> + 3px <code>--aw-primary</code> indicator</td><td>当前路由匹配</td></tr>
          <tr><td><strong>Disabled</strong></td><td><span class="ms-pill disabled">🔒 系统管理</span></td><td><code>--aw-text-disabled</code> + cursor: not-allowed</td><td>权限不足 / 未激活</td></tr>
          <tr><td><strong>Badge</strong></td><td><span class="ms-pill">🔔 告警 <span class="badge-num">3</span></span></td><td><code>--aw-danger</code> 圆形小数字</td><td>未读 / 待办计数(限 99+)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="surface">
      <h3 class="card-title">Submenu 层级规范</h3>
      <div class="row" style="gap:24px;align-items:flex-start">
        <div style="flex:1;font-size:13px;color:var(--aw-text-2);line-height:1.7">
          <b style="color:var(--aw-text-1)">规则:</b><br>
          · 最深 <b>3 级</b>(一级菜单 → 子菜单 → 三级)。超过用搜索/快捷入口<br>
          · 二级缩进 <b>36px</b>,左侧 1px <code>#E5E8EC</code> 时间轴线<br>
          · 二级 active 不再用 indicator bar(避免与一级冲突),改 <b>6×6 圆点</b> + 蓝色文字<br>
          · 折叠态:子菜单不可见,仅鼠标悬停时浮出 hover popup
        </div>
        <div style="flex:0 0 280px;font-family:var(--aw-font-mono);font-size:11px;line-height:1.8;background:var(--aw-fill-1);padding:12px;border-radius:6px;color:var(--aw-text-2)">
          <div>📁 数据中心          ← L1</div>
          <div style="padding-left:16px">│  设备分组          ← L2</div>
          <div style="padding-left:16px">│  <span style="color:var(--aw-primary)">●  设备管理          ← L2 active</span></div>
          <div style="padding-left:16px">│     ├─ 列表视图    ← L3</div>
          <div style="padding-left:16px">│     └─ 卡片视图    ← L3</div>
          <div style="padding-left:16px">│  型号管理</div>
        </div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">Horizontal Menu · 顶栏导航</h3>
      <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 14px">用于一级模块切换(如多产品线)。子级仍走 vertical sidebar。</p>
      <div class="menu-h-mock">
        <div class="mh-it">设备管理</div>
        <div class="mh-it">应用市场</div>
        <div class="mh-it act">数据中心 <span class="mh-bar"></span></div>
        <div class="mh-it">OTA 升级</div>
        <div class="mh-it">推送中心</div>
        <div class="mh-it dis">监控大屏 <span class="ms-pill" style="background:var(--aw-fill-2);color:var(--aw-text-3);font-size:10px;padding:0 6px;margin-left:4px">即将开放</span></div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">Do / Don't</h3>
      <div class="demo-grid cols-2">
        <div style="font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <b style="color:var(--aw-success)">✓ DO</b><br>
          · Active 必须有 <b>3px indicator bar</b>,不要只靠背景色<br>
          · 一级菜单 ≤ 8 项;超出用分组(MAIN / SYSTEM)<br>
          · 折叠态 hover 必须有 tooltip 浮出菜单名<br>
          · 角标数字 99+ 上限,不显示真实大数<br>
          · 键盘可达:↑↓ 切换,Enter 进入,Esc 关闭子菜单
        </div>
        <div style="font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <b style="color:var(--aw-danger)">✕ DON'T</b><br>
          · 不要用 4 级或更深(需重新设计信息架构)<br>
          · 不要在 Hover 上加角标(易误判为 active)<br>
          · 不要在折叠态显示文字(64px 容不下)<br>
          · 不要让用户从角标跳转(角标仅提示,点击进入页面再处理)<br>
          · 不要在 Menu Item 内嵌按钮 / 表单
        </div>
      </div>
    </div>
  </div>
</section>
</div>
`;
