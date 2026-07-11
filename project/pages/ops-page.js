/* AngelWatch Design System - page: ops-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["ops-page"] = `
<div class="content">
<section class="section" id="ops-page">
  <p class="section-eyebrow"><span data-i18n="ops-page:text.001">页面蓝图 · 运营与系统</span></p>
  <h2><span data-i18n="ops-page:text.002">运营与系统管理 OpsPage</span></h2>
  <p class="lede"><span data-i18n="ops-page:text.003">运营与系统管理覆盖账户信息、机构、运营商、角色、账号、数据统计、OSS 节点、操作日志、字典和菜单。它把权限、统计和系统配置统一为可审计、可回溯、可分配的后台管理规则。</span></p>

  <div class="subsection">
    <h3><span data-i18n="ops-page:text.004">覆盖范围</span></h3>
    <div class="bp-grid">
      <div class="bp-card"><h4><span data-i18n="ops-page:text.005">机构与运营商</span></h4><p><span data-i18n="ops-page:text.006">机构管理、运营商管理、运营商账号、机构编码、机构名称、运营商别名。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="ops-page:text.007">账号与角色</span></h4><p><span data-i18n="ops-page:text.008">账号管理、角色管理、配置权限、登录账号、电子邮箱、重置密码。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="ops-page:text.009">数据统计</span></h4><p><span data-i18n="ops-page:text.010">设备活跃数据、活跃设备、激活设备、固件统计、统计详情、近7日趋势和列表视图。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="ops-page:text.011">OSS 节点</span></h4><p><span data-i18n="ops-page:text.012">独立服务器部署、OSS节点、接入国家、节点配置和状态。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="ops-page:text.013">操作日志</span></h4><p><span data-i18n="ops-page:text.014">类型(正常 / 异常)、机构、操作人、标题、请求地址(IP)、创建时间。支持按类型、操作人、标题、时间范围筛选与导出。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="ops-page:text.015">字典与菜单</span></h4><p><span data-i18n="ops-page:text.016">字典类型、字典名称、字典标签、字典键值、菜单类型、显示排序、上级菜单。</span></p></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="ops-page:text.017">主列表结构</span></h3>
    <div class="bp-shell">
      <div class="bp-shell-head"><strong><span data-i18n="ops-page:text.018">系统管理 / 操作日志</span></strong><div class="row"><button class="btn"><span data-i18n="ops-page:text.019">导出日志</span></button><button class="btn btn-primary"><span data-i18n="ops-page:text.020">刷新</span></button></div></div>
      <div class="bp-shell-body">
        <div class="bp-side">
          <div class="bp-nav-item"><span data-i18n="ops-page:text.021">机构管理</span></div>
          <div class="bp-nav-item"><span data-i18n="ops-page:text.022">运营商管理</span></div>
          <div class="bp-nav-item"><span data-i18n="ops-page:text.023">角色管理</span></div>
          <div class="bp-nav-item"><span data-i18n="ops-page:text.024">账号管理</span></div>
          <div class="bp-nav-item"><span data-i18n="ops-page:text.025">数据统计</span></div>
          <div class="bp-nav-item"><span data-i18n="ops-page:text.026">OSS 节点</span></div>
          <div class="bp-nav-item active"><span data-i18n="ops-page:text.027">操作日志</span></div>
          <div class="bp-nav-item"><span data-i18n="ops-page:text.028">字典管理</span></div>
          <div class="bp-nav-item"><span data-i18n="ops-page:text.029">菜单管理</span></div>
        </div>
        <div class="bp-main">
          <div class="bp-toolbar"><input class="input" placeholder="搜索操作人 / 标题 / 请求地址" data-i18n-placeholder="ops-page:text.030" /><div class="select"><span><span data-i18n="ops-page:text.031">类型 ▾</span></span></div><div class="select"><span><span data-i18n="ops-page:text.032">时间范围 ▾</span></span></div><button class="btn"><span data-i18n="ops-page:text.033">筛选</span></button><button class="btn"><span data-i18n="ops-page:text.034">导出</span></button></div>
          <table class="dt">
            <thead><tr><th><span data-i18n="ops-page:text.035">类型</span></th><th><span data-i18n="ops-page:text.036">机构</span></th><th><span data-i18n="ops-page:text.037">操作人</span></th><th><span data-i18n="ops-page:text.038">标题</span></th><th><span data-i18n="ops-page:text.039">请求地址</span></th><th><span data-i18n="ops-page:text.040">时间</span></th><th><span data-i18n="ops-page:text.041">操作</span></th></tr></thead>
            <tbody>
              <tr><td><span class="status-dot online"><span data-i18n="ops-page:text.042">正常</span></span></td><td><span data-i18n="ops-page:text.043">华东运营中心</span></td><td><span data-i18n="ops-page:text.044">系统管理员</span></td><td><span data-i18n="ops-page:text.045">添加 APN 设置</span></td><td><code>10.12.3.45</code></td><td><span data-i18n="ops-page:text.046">今天 10:12</span></td><td><a><span data-i18n="ops-page:text.047">详情</span></a></td></tr>
              <tr><td><span class="status-dot online"><span data-i18n="ops-page:text.048">正常</span></span></td><td><span data-i18n="ops-page:text.049">华南运营中心</span></td><td><span data-i18n="ops-page:text.050">设备运维</span></td><td><span data-i18n="ops-page:text.051">修改设备分组</span></td><td><code>10.12.3.50</code></td><td><span data-i18n="ops-page:text.052">昨天 18:44</span></td><td><a><span data-i18n="ops-page:text.053">详情</span></a></td></tr>
              <tr><td><span class="status-dot fault"><span data-i18n="ops-page:text.054">异常</span></span></td><td><span data-i18n="ops-page:text.055">华北运营中心</span></td><td><span data-i18n="ops-page:text.056">运营管理员</span></td><td><span data-i18n="ops-page:text.057">删除字典数据</span></td><td><code>10.12.3.61</code></td><td><span data-i18n="ops-page:text.058">周一 11:03</span></td><td><a><span data-i18n="ops-page:text.059">详情</span></a></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="ops-page:text.060">权限与配置规则</span></h3>
    <table class="blueprint-table">
      <thead><tr><th><span data-i18n="ops-page:text.061">对象</span></th><th><span data-i18n="ops-page:text.062">核心字段</span></th><th><span data-i18n="ops-page:text.063">编辑方式</span></th><th><span data-i18n="ops-page:text.064">审计要求</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="ops-page:text.065">机构 / 运营商</span></td><td><span data-i18n="ops-page:text.066">编码、名称、别名、接入国家、网络定位类型</span></td><td><span data-i18n="ops-page:text.067">Tree + Drawer 表单</span></td><td><span data-i18n="ops-page:text.068">新增、修改、删除都记录操作人和时间。</span></td></tr>
        <tr><td><span data-i18n="ops-page:text.069">角色 / 账号</span></td><td><span data-i18n="ops-page:text.070">登录账号、角色、电子邮箱、配置权限</span></td><td>Tree + Permission Matrix</td><td><span data-i18n="ops-page:text.071">权限变更必须保留变更前后差异。</span></td></tr>
        <tr><td><span data-i18n="ops-page:text.072">OSS 节点</span></td><td><span data-i18n="ops-page:text.073">节点、接入国家、状态、备注</span></td><td><span data-i18n="ops-page:text.074">Table + Modal 表单</span></td><td><span data-i18n="ops-page:text.075">节点变更影响上传下载链路，必须二次确认。</span></td></tr>
        <tr><td><span data-i18n="ops-page:text.076">字典 / 菜单</span></td><td><span data-i18n="ops-page:text.077">字典类型、键值、排序、菜单类型、上级菜单</span></td><td>Tree Table + Drawer</td><td><span data-i18n="ops-page:text.078">删除前展示引用关系，避免破坏菜单和业务枚举。</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="ops-page:text.079">统计详情模式</span></h3>
    <div class="bp-flow">
      <div class="bp-step"><div class="num">1</div><div class="name"><span data-i18n="ops-page:text.080">趋势总览</span></div><div class="desc"><span data-i18n="ops-page:text.081">近7日设备活跃数据、当日激活、固件分布先给趋势和总数。</span></div></div>
      <div class="bp-step"><div class="num">2</div><div class="name"><span data-i18n="ops-page:text.082">列表明细</span></div><div class="desc"><span data-i18n="ops-page:text.083">统计详情必须能回落到设备列表，字段与数据中心保持一致。</span></div></div>
      <div class="bp-step"><div class="num">3</div><div class="name"><span data-i18n="ops-page:text.084">筛选联动</span></div><div class="desc"><span data-i18n="ops-page:text.085">机构、设备型号、时间范围联动图表和表格。</span></div></div>
      <div class="bp-step"><div class="num">4</div><div class="name"><span data-i18n="ops-page:text.086">导出审计</span></div><div class="desc"><span data-i18n="ops-page:text.087">导出统计和操作日志都要记录操作人、时间和筛选条件。</span></div></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="ops-page:text.088">组件映射</span></h3>
    <div class="blueprint-notes"><span><a href="#/tree-comp">Tree</a><span data-i18n="ops-page:text.089">：机构、菜单和权限</span></span><span><a href="#/table">Table</a><span data-i18n="ops-page:text.090">：日志、OSS、字典和统计明细</span></span><span><a href="#/charts">Charts</a><span data-i18n="ops-page:text.091">：活跃设备和固件统计</span></span><span><a href="#/drawer">Drawer</a><span data-i18n="ops-page:text.092">：长表单编辑</span></span><span><a href="#/user-mgmt-page">UserMgmtPage</a><span data-i18n="ops-page:text.093">：账户权限细节</span></span></div>
  </div>
</section>
</div>
`;
