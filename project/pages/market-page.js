/* AngelWatch Design System - page: market-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["market-page"] = `
<div class="content">
<section class="section" id="market-page">
  <p class="section-eyebrow">页面模板 · 业务蓝图</p>
  <h2>应用市场 MarketPage</h2>
  <p class="lede">应用市场覆盖应用管理、广告管理、应用分类、版本管理、审核和安装明细。它把应用市场页面族抽象为列表、卡片、审核、版本与明细规则。</p>

  <div class="subsection">
    <h3>覆盖范围</h3>
    <table class="blueprint-table">
      <thead><tr><th>页面族</th><th>关键界面</th><th>规范落点</th></tr></thead>
      <tbody>
        <tr><td>应用管理</td><td>添加、详情、修改、审核、卡片视图</td><td>列表骨架、表单校验、审核反馈、卡片视图</td></tr>
        <tr><td>版本管理</td><td>版本管理、版本升级、安装明细、升级历史</td><td>版本表格、上传文件、推送结果、安装明细</td></tr>
        <tr><td>广告管理</td><td>主页、卡片视图、详情、添加、修改</td><td>媒体卡片、上下架状态、时间窗口</td></tr>
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
            <thead><tr><th>应用</th><th>机构</th><th>包名</th><th>版本总数</th><th>下载总数</th><th>操作</th></tr></thead>
            <tbody>
              <tr><td><b>Terminal Guard</b></td><td>华北运营中心</td><td><code>com.aw.guard</code></td><td><span class="mono">12</span></td><td><span class="mono">8,642</span></td><td><a>详情</a> · <a>版本</a> · <a>下架</a></td></tr>
              <tr><td><b>Policy Sync</b></td><td>华南运营中心</td><td><code>com.aw.policy</code></td><td><span class="mono">8</span></td><td><span class="mono">3,210</span></td><td><a>审核</a> · <a>修改</a> · <a>驳回</a></td></tr>
              <tr><td><b>Device Tools</b></td><td>华东运营中心</td><td><code>com.aw.tools</code></td><td><span class="mono">5</span></td><td><span class="mono">1,088</span></td><td><a>详情</a> · <a>重新上架</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>状态与操作矩阵(版本包真实状态)</h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 12px">版本包状态含签名子态(kpp / APK 签名中与签名错误),是真实业务;采纳生产措辞 <b>Published / Unpublished</b>(非 Figma 的 Released / Removed)。</p>
    <table class="blueprint-table">
      <thead><tr><th>状态</th><th>主操作</th><th>禁用操作</th><th>反馈组件</th></tr></thead>
      <tbody>
        <tr><td>草稿 / 签名中 / 签名错误</td><td>编辑、删除、重新签名</td><td>上架、推送</td><td>签名错误用 danger Tag + 错误码 tooltip</td></tr>
        <tr><td>审核中</td><td>审核通过 / 驳回</td><td>下架、推送安装</td><td>Modal 表单，必须填写审核意见</td></tr>
        <tr><td>已上架 Published</td><td>版本管理 / 下架 / 推送安装</td><td>删除</td><td>Popconfirm 或 Modal.confirm</td></tr>
        <tr><td>已拒绝 / 取消上架</td><td>编辑、删除、重新申请上架</td><td>推送安装</td><td>Toast + 拒绝原因</td></tr>
        <tr><td>已下架 Unpublished</td><td>重新上架 / 修改</td><td>推送安装</td><td>Toast 只提示操作结果</td></tr>
        <tr><td>版本升级中</td><td>查看进度 / 安装明细</td><td>删除版本包</td><td>Result 部分成功承接失败设备</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>添加应用四段表单</h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 12px">真实表单结构(对齐旧 <code>app/manage/addApp.vue</code>);APK 签名解析应在后端完成,不在前端用 JSZip 解析。</p>
    <div class="bp-grid">
      <div class="bp-card"><h4>① 基础信息</h4><p>机构 / APK 包(上传后自动解析 packageName+versionCode+versionName)/ logo / 9:16 截图 / 应用名 / 分类 / 开发者 / 简介 / 详情 / 备注。</p></div>
      <div class="bp-card"><h4>② 权限配置</h4><p>禁止卸载 uninstallFlag / 禁止清除数据 clearDataFlag(switch,正常 active=true 语义,不沿用旧后端反转)。</p></div>
      <div class="bp-card"><h4>③ 签名配置</h4><p>是否签名 needSigner / 签名方式 certificateType(1 谷歌 / 2 AW / 3 证书链)/ 证书 certificateId / 使用证书机构 usingDeptId。</p></div>
      <div class="bp-card"><h4>④ 规则信息</h4><p>适配机型 deviceModelId(多选)/ 可见范围 ruleType(0-7,同推送 targetMode)/ 可见对象 rule(5 分组 / 6,7 机构树 / 其他 textarea)。</p></div>
      <div class="bp-card"><h4>版本与自动策略</h4><p>版本列表列:versionName / versionCode / 操作人 / 大小 / 下载数 / 适配机型 / 备注 / 状态 / 操作。自动安装 autoInstallFlag / 自动更新 autoUpdateFlag 开关开启需二次确认。同应用不同版本高版本优先显示;更新版本签名须一致。</p></div>
      <div class="bp-card"><h4>应用分类</h4><p>名称 / logo / <b>ordinal 排序</b>字段 / 操作。轻量表单 + 删除确认。</p></div>
    </div>
  </div>

  <div class="subsection">
    <h3>组件映射</h3>
    <div class="blueprint-notes"><span><a href="#/table">Table</a>：列表和安装明细</span><span><a href="#/data-cards">DataCard</a>：应用卡片视图</span><span><a href="#/feedback">Feedback</a>：审核和上下架确认</span><span><a href="#/upload">Upload</a>：版本包上传</span></div>
  </div>
</section>
</div>
`;
