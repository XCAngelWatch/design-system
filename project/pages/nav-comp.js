/* AngelWatch Design System — page: nav-comp (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["nav-comp"] = `
<div class="content">
<section class="section" id="nav-comp">
  <p class="section-eyebrow">Components · 导航</p>
  <h2>Tabs &amp; Breadcrumbs</h2>
  <p class="lede">面包屑用于位置感知；标签页用于同一对象的视图切换（不用于跳转）。下表给出"用哪种导航" 的选型 —— 顶部 / 侧边 / Tabs / 面包屑各有适用场景，不应混搭。</p>

  <div class="subsection">
    <h3>导航选型决策表</h3>
    <table class="map-table">
      <thead><tr><th style="width:20%">类型</th><th style="width:20%">承载层级</th><th style="width:30%">适用条件</th><th>规则</th></tr></thead>
      <tbody>
        <tr><td><b>侧边 Sidebar</b></td><td>顶级 + 二级</td><td>主导航 ≥ 4 项；功能明显分组</td><td>TMS 默认导航；可折叠（icon-only 64px）；Light 白底 + 3px 品牌 indicator</td></tr>
        <tr><td><b>顶部 Topbar</b></td><td>租户切换 / 个人 / 全局搜索</td><td>跨业务功能（语言 / 主题 / 帮助）</td><td>不放主业务导航；仅放跨页面通用功能</td></tr>
        <tr><td><b>Tabs · 视图切换</b></td><td>同一对象的视图</td><td>详情页 6 个视图（基础 / 状态 / 日志 / 告警 ...）</td><td><b>不</b>用于路由跳转；按使用频率排序，第一个解决 80% 查看意图</td></tr>
        <tr><td><b>Tabs · Card 路由</b></td><td>同级别页面间</td><td>用户管理 → 角色 / 权限 / 审计 三个 sub-page</td><td>路由变化但保持父级导航位；面包屑追加</td></tr>
        <tr><td><b>面包屑 Breadcrumbs</b></td><td>跨级层级</td><td>≥ 3 级深度的页面（设备 / 详情 / 编辑）</td><td>位置感知 + 快速回退；最后一段不可点</td></tr>
        <tr><td><b>步骤 Steps</b></td><td>线性流程</td><td>WizardPage 5 步配置 / 上传 → 配置 → 推送</td><td>明确进度；可回退到已完成步骤</td></tr>
        <tr><td><b>Cascader 级联</b></td><td>层级数据筛选</td><td>地区 → 站点 → 设备 三级筛选</td><td>不超过 3 级；4 级以上用 TreeSelect</td></tr>
        <tr><td><b>Menu / Dropdown</b></td><td>动作集合</td><td>RowActions 折叠 / 用户菜单</td><td>≤ 8 项主菜单；≥ 9 项分组 + 分隔线</td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">三条硬规则：</b>1) Tabs 切视图、Tabs Card 切路由 —— 不混用；2) 面包屑最后一段不可点（当前位）；3) 同级菜单 ≥ 9 项必须分组（按用途，不按字母）。</p>
  </div>

  <div class="subsection">
    <h3>视觉示例</h3>
    <div class="demo-grid">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">面包屑 · 跨级位置</div>
        <div class="crumbs"><a>首页</a><span class="sep">/</span><a>数据中心</a><span class="sep">/</span><a>设备管理</a><span class="sep">/</span><span class="current">终端-上海-001</span></div>
      </div>
      <div class="surface" style="padding:0">
        <div class="tag-meta" style="margin:14px 14px 0">Tabs · 同对象视图</div>
        <div class="tabs">
          <a class="active">基础信息</a>
          <a>实时状态</a>
          <a>操作日志</a>
          <a>告警</a>
          <a>固件历史</a>
        </div>
        <div style="padding:24px;color:var(--aw-text-3);font-size:13px">所选标签的内容区。</div>
      </div>
    </div>
  </div>
</section>
</div>
`;
