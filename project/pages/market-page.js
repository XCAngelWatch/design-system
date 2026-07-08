/* AngelWatch Design System - page: market-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["market-page"] = `
<div class="content">
<section class="section" id="market-page">
  <p class="section-eyebrow">页面模板 · 业务蓝图</p>
  <h2>应用市场 MarketPage</h2>
  <p class="lede">应用市场覆盖应用管理、广告管理、应用分类、版本管理、审核和安装明细。它把 Figma 中的应用市场页面族抽象为列表、卡片、审核、版本与明细规则。</p>

  <div class="subsection">
    <h3>覆盖范围</h3>
    <table class="blueprint-table">
      <thead><tr><th>页面族</th><th>关键界面</th><th>规范落点</th></tr></thead>
      <tbody>
        <tr><td>应用管理</td><td>添加、详情、修改、审核、卡片视图</td><td>列表骨架、表单校验、审核反馈、卡片视图</td></tr>
        <tr><td>版本管理</td><td>版本管理、版本升级、安装明细、升级历史</td><td>版本表格、上传文件、推送结果、安装明细</td></tr>
        <tr><td>广告管理</td><td>主页、卡片视图、详情、新增、修改</td><td>媒体卡片、上下架状态、时间窗口</td></tr>
        <tr><td>应用分类</td><td>主页面、添加、修改、状态帧</td><td>轻量表单、排序、禁用态、删除确认</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>主列表结构</h3>
    <div class="bp-shell">
      <div class="bp-shell-head"><strong>应用市场 / 应用管理</strong><div class="row"><button class="btn">导出</button><button class="btn btn-primary">+ 添加应用</button></div></div>
      <div class="bp-shell-body">
        <div class="bp-side">
          <div class="bp-nav-item active">应用管理</div>
          <div class="bp-nav-item">广告管理</div>
          <div class="bp-nav-item">应用分类</div>
          <div class="bp-nav-item">版本审核</div>
        </div>
        <div class="bp-main">
          <div class="bp-toolbar"><input class="input" placeholder="搜索应用名 / 包名" /><div class="select"><span>全部状态 ▾</span></div><div class="select"><span>全部分类 ▾</span></div><button class="btn">筛选</button></div>
          <table class="dt">
            <thead><tr><th>应用</th><th>包名</th><th>版本</th><th>分类</th><th>状态</th><th>更新时间</th><th>操作</th></tr></thead>
            <tbody>
              <tr><td><b>Android terminal Guard</b></td><td><code>com.aw.guard</code></td><td>3.5.0</td><td>安全</td><td><span class="status-dot online">已上架</span></td><td>今天 09:12</td><td><a>详情</a> · <a>版本</a> · <a>下架</a></td></tr>
              <tr><td><b>Route Sync</b></td><td><code>com.aw.route</code></td><td>2.8.1</td><td>导航</td><td><span class="status-dot upgrading">待审核</span></td><td>昨天 18:44</td><td><a>审核</a> · <a>修改</a> · <a>驳回</a></td></tr>
              <tr><td><b>Device Tools</b></td><td><code>com.aw.tools</code></td><td>1.9.4</td><td>工具</td><td><span class="status-dot offline">已下架</span></td><td>周一 11:03</td><td><a>详情</a> · <a>重新上架</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>状态与操作矩阵</h3>
    <table class="blueprint-table">
      <thead><tr><th>状态</th><th>主操作</th><th>禁用操作</th><th>反馈组件</th></tr></thead>
      <tbody>
        <tr><td>待审核</td><td>审核通过 / 驳回</td><td>下架、推送安装</td><td>Modal 表单，必须填写审核意见</td></tr>
        <tr><td>已上架</td><td>版本管理 / 下架 / 推送安装</td><td>删除</td><td>Popconfirm 或 Modal.confirm</td></tr>
        <tr><td>已下架</td><td>重新上架 / 修改</td><td>推送安装</td><td>Toast 只提示操作结果</td></tr>
        <tr><td>版本升级中</td><td>查看进度 / 安装明细</td><td>删除版本包</td><td>Result 部分成功承接失败设备</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>组件映射</h3>
    <div class="blueprint-notes"><span><a href="#/table">Table</a>：列表和安装明细</span><span><a href="#/data-cards">DataCard</a>：应用卡片视图</span><span><a href="#/feedback">Feedback</a>：审核和上下架确认</span><span><a href="#/upload">Upload</a>：版本包上传</span></div>
  </div>
</section>
</div>
`;
