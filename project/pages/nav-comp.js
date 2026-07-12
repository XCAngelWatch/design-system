/* AngelWatch Design System — page: nav-comp (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["nav-comp"] = `
<div class="content">
<section class="section" id="nav-comp">
  <p class="section-eyebrow"><span data-i18n="nav-comp:text.001">通用组件 · 导航</span></p>
  <h2><span data-i18n="nav-comp:text.002">导航与标签页 Navigation</span></h2>
  <p class="lede"><span data-i18n="nav-comp:text.003">面包屑用于位置感知；标签页用于同一对象的视图切换（不用于跳转）。下表给出"用哪种导航" 的选型 —— 顶部 / 侧边 / Tabs / 面包屑各有适用场景，不应混搭。</span></p>

  <div class="subsection">
    <h3><span data-i18n="nav-comp:text.004">导航选型决策表</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:20%"><span data-i18n="nav-comp:text.005">类型</span></th><th style="width:20%"><span data-i18n="nav-comp:text.006">承载层级</span></th><th style="width:30%"><span data-i18n="nav-comp:text.007">适用条件</span></th><th><span data-i18n="nav-comp:text.008">规则</span></th></tr></thead>
      <tbody>
        <tr><td><b><span data-i18n="nav-comp:text.009">侧边 Sidebar</span></b></td><td><span data-i18n="nav-comp:text.010">顶级 + 二级</span></td><td><span data-i18n="nav-comp:text.011">主导航 ≥ 4 项；功能明显分组</span></td><td><span data-i18n="nav-comp:text.012">TMS 默认导航；可折叠（icon-only 64px）；Light 白底 + 3px 品牌 indicator</span></td></tr>
        <tr><td><b><span data-i18n="nav-comp:text.013">顶部 Topbar</span></b></td><td><span data-i18n="nav-comp:text.014">租户切换 / 个人 / 全局搜索</span></td><td><span data-i18n="nav-comp:text.015">跨业务功能（语言 / 主题 / 帮助）</span></td><td><span data-i18n="nav-comp:text.016">不放主业务导航；仅放跨页面通用功能</span></td></tr>
        <tr><td><b><span data-i18n="nav-comp:text.017">Tabs · 视图切换</span></b></td><td><span data-i18n="nav-comp:text.018">同一对象的视图</span></td><td><span data-i18n="nav-comp:text.019">详情页 6 个视图（基础 / 状态 / 日志 / 告警 ...）</span></td><td><b><span data-i18n="nav-comp:text.020">不</span></b><span data-i18n="nav-comp:text.021">用于路由跳转；按使用频率排序，第一个解决 80% 查看意图</span></td></tr>
        <tr><td><b><span data-i18n="nav-comp:text.022">Tabs · Card 路由</span></b></td><td><span data-i18n="nav-comp:text.023">同级别页面间</span></td><td><span data-i18n="nav-comp:text.024">账号权限 → 角色 / 权限 / 审计 三个 sub-page</span></td><td><span data-i18n="nav-comp:text.025">路由变化但保持父级导航位；面包屑追加</span></td></tr>
        <tr><td><b><span data-i18n="nav-comp:text.026">面包屑 Breadcrumbs</span></b></td><td><span data-i18n="nav-comp:text.027">跨级层级</span></td><td><span data-i18n="nav-comp:text.028">≥ 3 级深度的页面（设备 / 详情 / 编辑）</span></td><td><span data-i18n="nav-comp:text.029">位置感知 + 快速回退；最后一段不可点</span></td></tr>
        <tr><td><b><span data-i18n="nav-comp:text.030">步骤 Steps</span></b></td><td><span data-i18n="nav-comp:text.031">线性流程</span></td><td><span data-i18n="nav-comp:text.032">WizardPage 5 步配置 / 上传 → 配置 → 推送</span></td><td><span data-i18n="nav-comp:text.033">明确进度；可回退到已完成步骤</span></td></tr>
        <tr><td><b><span data-i18n="nav-comp:text.034">Cascader 级联</span></b></td><td><span data-i18n="nav-comp:text.035">层级数据筛选</span></td><td><span data-i18n="nav-comp:text.036">机构 → 设备分组 → 设备 三级筛选</span></td><td><span data-i18n="nav-comp:text.037">不超过 3 级；4 级以上用 TreeSelect</span></td></tr>
        <tr><td><b>Menu / Dropdown</b></td><td><span data-i18n="nav-comp:text.038">动作集合</span></td><td><span data-i18n="nav-comp:text.039">RowActions 折叠 / 账号菜单</span></td><td><span data-i18n="nav-comp:text.040">≤ 8 项主菜单；≥ 9 项分组 + 分隔线</span></td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="nav-comp:text.041">三条硬规则：</span></b><span data-i18n="nav-comp:text.042">1) Tabs 切视图、Tabs Card 切路由 —— 不混用；2) 面包屑最后一段不可点（当前位）；3) 同级菜单 ≥ 9 项必须分组（按用途，不按字母）。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="nav-comp:text.043">视觉示例</span></h3>
    <div class="demo-grid">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="nav-comp:text.044">面包屑 · 跨级位置</span></div>
        <div class="crumbs"><a href="#/overview"><span data-i18n="nav-comp:text.045">首页</span></a><span class="sep">/</span><a href="#/device-center-page"><span data-i18n="nav-comp:text.046">数据中心</span></a><span class="sep">/</span><a href="#/list-page"><span data-i18n="nav-comp:text.047">设备管理</span></a><span class="sep">/</span><span class="current"><span data-i18n="nav-comp:text.048">终端-上海-001</span></span></div>
      </div>
      <div class="surface" style="padding:0">
        <div class="tag-meta" style="margin:14px 14px 0"><span data-i18n="nav-comp:text.049">Tabs · 同对象视图</span></div>
        <div class="tabs">
          <a class="active"><span data-i18n="nav-comp:text.050">基础信息</span></a>
          <a><span data-i18n="nav-comp:text.051">实时状态</span></a>
          <a><span data-i18n="nav-comp:text.052">操作日志</span></a>
          <a><span data-i18n="nav-comp:text.053">告警</span></a>
          <a><span data-i18n="nav-comp:text.054">固件历史</span></a>
        </div>
        <div style="padding:24px;color:var(--aw-text-3);font-size:13px"><span data-i18n="nav-comp:text.055">所选标签的内容区。</span></div>
      </div>
    </div>
  </div>
</section>
</div>
`;
