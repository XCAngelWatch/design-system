/* AngelWatch Design System - page: ops-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["ops-page"] = `
<div class="content">
<section class="section" id="ops-page">
  <p class="section-eyebrow">页面模板 · 业务蓝图</p>
  <h2>运营与系统管理 OpsPage</h2>
  <p class="lede">运营与系统管理覆盖账户信息、机构、运营商、角色、账号、数据统计、OSS 节点、操作日志、字典和菜单。它把权限、统计和系统配置统一为可审计、可回溯、可分配的后台管理规则。</p>

  <div class="subsection">
    <h3>覆盖范围</h3>
    <div class="bp-grid">
      <div class="bp-card"><h4>机构与运营商</h4><p>机构管理、运营商管理、运营商账号、机构编码、机构名称、运营商别名。</p></div>
      <div class="bp-card"><h4>账号与角色</h4><p>账号管理、角色管理、配置权限、登录账号、电子邮箱、重置密码。</p></div>
      <div class="bp-card"><h4>数据统计</h4><p>设备活跃数据、活跃设备、激活设备、固件统计、统计详情、近7日趋势和列表视图。</p></div>
      <div class="bp-card"><h4>OSS 节点</h4><p>独立服务器部署、OSS节点、接入国家、节点配置和状态。</p></div>
      <div class="bp-card"><h4>操作日志</h4><p>类型(正常 / 异常)、机构、操作人、标题、请求地址(IP)、创建时间。支持按类型、操作人、标题、时间范围筛选与导出。</p></div>
      <div class="bp-card"><h4>字典与菜单</h4><p>字典类型、字典名称、字典标签、字典键值、菜单类型、显示排序、上级菜单。</p></div>
    </div>
  </div>

  <div class="subsection">
    <h3>主列表结构</h3>
    <div class="bp-shell">
      <div class="bp-shell-head"><strong>系统管理 / 操作日志</strong><div class="row"><button class="btn">导出日志</button><button class="btn btn-primary">刷新</button></div></div>
      <div class="bp-shell-body">
        <div class="bp-side">
          <div class="bp-nav-item">机构管理</div>
          <div class="bp-nav-item">运营商管理</div>
          <div class="bp-nav-item">角色管理</div>
          <div class="bp-nav-item">账号管理</div>
          <div class="bp-nav-item">数据统计</div>
          <div class="bp-nav-item">OSS 节点</div>
          <div class="bp-nav-item active">操作日志</div>
          <div class="bp-nav-item">字典管理</div>
          <div class="bp-nav-item">菜单管理</div>
        </div>
        <div class="bp-main">
          <div class="bp-toolbar"><input class="input" placeholder="搜索操作人 / 标题 / 请求地址" /><div class="select"><span>类型 ▾</span></div><div class="select"><span>时间范围 ▾</span></div><button class="btn">筛选</button><button class="btn">导出</button></div>
          <table class="dt">
            <thead><tr><th>类型</th><th>机构</th><th>操作人</th><th>标题</th><th>请求地址</th><th>时间</th><th>操作</th></tr></thead>
            <tbody>
              <tr><td><span class="status-dot online">正常</span></td><td>华东运营中心</td><td>系统管理员</td><td>添加 APN 设置</td><td><code>10.12.3.45</code></td><td>今天 10:12</td><td><a>详情</a></td></tr>
              <tr><td><span class="status-dot online">正常</span></td><td>华南运营中心</td><td>设备运维</td><td>修改设备分组</td><td><code>10.12.3.50</code></td><td>昨天 18:44</td><td><a>详情</a></td></tr>
              <tr><td><span class="status-dot fault">异常</span></td><td>华北运营中心</td><td>运营管理员</td><td>删除字典数据</td><td><code>10.12.3.61</code></td><td>周一 11:03</td><td><a>详情</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>权限与配置规则</h3>
    <table class="blueprint-table">
      <thead><tr><th>对象</th><th>核心字段</th><th>编辑方式</th><th>审计要求</th></tr></thead>
      <tbody>
        <tr><td>机构 / 运营商</td><td>编码、名称、别名、接入国家、网络定位类型</td><td>Tree + Drawer 表单</td><td>新增、修改、删除都记录操作人和时间。</td></tr>
        <tr><td>角色 / 账号</td><td>登录账号、角色、电子邮箱、配置权限</td><td>Tree + Permission Matrix</td><td>权限变更必须保留变更前后差异。</td></tr>
        <tr><td>OSS 节点</td><td>节点、接入国家、状态、备注</td><td>Table + Modal 表单</td><td>节点变更影响上传下载链路，必须二次确认。</td></tr>
        <tr><td>字典 / 菜单</td><td>字典类型、键值、排序、菜单类型、上级菜单</td><td>Tree Table + Drawer</td><td>删除前展示引用关系，避免破坏菜单和业务枚举。</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>统计详情模式</h3>
    <div class="bp-flow">
      <div class="bp-step"><div class="num">1</div><div class="name">趋势总览</div><div class="desc">近7日设备活跃数据、当日激活、固件分布先给趋势和总数。</div></div>
      <div class="bp-step"><div class="num">2</div><div class="name">列表明细</div><div class="desc">统计详情必须能回落到设备列表，字段与数据中心保持一致。</div></div>
      <div class="bp-step"><div class="num">3</div><div class="name">筛选联动</div><div class="desc">机构、设备型号、时间范围联动图表和表格。</div></div>
      <div class="bp-step"><div class="num">4</div><div class="name">导出审计</div><div class="desc">导出统计和操作日志都要记录操作人、时间和筛选条件。</div></div>
    </div>
  </div>

  <div class="subsection">
    <h3>组件映射</h3>
    <div class="blueprint-notes"><span><a href="#/tree-comp">Tree</a>：机构、菜单和权限</span><span><a href="#/table">Table</a>：日志、OSS、字典和统计明细</span><span><a href="#/charts">Charts</a>：活跃设备和固件统计</span><span><a href="#/drawer">Drawer</a>：长表单编辑</span><span><a href="#/user-mgmt-page">UserMgmtPage</a>：账户权限细节</span></div>
  </div>
</section>
</div>
`;
