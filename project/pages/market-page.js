/* AngelWatch Design System - page: market-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["market-page"] = `
<div class="content">
<section class="section" id="market-page">
  <p class="section-eyebrow"><span data-i18n="market-page:text.001">页面蓝图 · 应用市场</span></p>
  <h2><span data-i18n="market-page:text.002">应用市场 MarketPage</span></h2>
  <p class="lede"><span data-i18n="market-page:text.003">应用市场覆盖应用管理、广告管理、应用分类、版本管理、审核和安装明细。它把应用市场页面族抽象为列表、卡片、审核、版本与明细规则。</span></p>

  <div class="subsection">
    <h3><span data-i18n="market-page:text.004">覆盖范围</span></h3>
    <table class="blueprint-table">
      <thead><tr><th><span data-i18n="market-page:text.005">页面族</span></th><th><span data-i18n="market-page:text.006">关键界面</span></th><th><span data-i18n="market-page:text.007">规范落点</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="market-page:text.008">应用管理</span></td><td><span data-i18n="market-page:text.009">添加、详情、修改、审核、卡片视图</span></td><td><span data-i18n="market-page:text.010">列表骨架、表单校验、审核反馈、卡片视图</span></td></tr>
        <tr><td><span data-i18n="market-page:text.011">版本管理</span></td><td><span data-i18n="market-page:text.012">版本管理、版本升级、安装明细、升级历史</span></td><td><span data-i18n="market-page:text.013">版本表格、上传文件、推送结果、安装明细</span></td></tr>
        <tr><td><span data-i18n="market-page:text.014">广告管理</span></td><td><span data-i18n="market-page:text.015">主页、卡片视图、详情、添加、修改</span></td><td><span data-i18n="market-page:text.016">媒体卡片、上下架状态、时间窗口</span></td></tr>
        <tr><td><span data-i18n="market-page:text.017">应用分类</span></td><td><span data-i18n="market-page:text.018">主页面、添加、修改、状态帧</span></td><td><span data-i18n="market-page:text.019">轻量表单、排序、禁用态、删除确认</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="market-page:text.020">主列表结构</span></h3>
    <div class="bp-shell">
      <div class="bp-shell-head"><strong><span data-i18n="market-page:text.021">应用市场 / 应用管理</span></strong><div class="row"><button class="btn"><span data-i18n="market-page:text.022">导出</span></button><button class="btn btn-primary"><span data-i18n="market-page:text.023">+ 添加应用</span></button></div></div>
      <div class="bp-shell-body">
        <div class="bp-side">
          <div class="bp-nav-item active"><span data-i18n="market-page:text.024">应用管理</span></div>
          <div class="bp-nav-item"><span data-i18n="market-page:text.025">广告管理</span></div>
          <div class="bp-nav-item"><span data-i18n="market-page:text.026">应用分类</span></div>
          <div class="bp-nav-item"><span data-i18n="market-page:text.027">版本审核</span></div>
        </div>
        <div class="bp-main">
          <div class="bp-toolbar"><input class="input" placeholder="搜索应用名 / 包名" data-i18n-placeholder="market-page:text.028" /><div class="select"><span><span data-i18n="market-page:text.029">全部状态 ▾</span></span></div><div class="select"><span><span data-i18n="market-page:text.030">全部分类 ▾</span></span></div><button class="btn"><span data-i18n="market-page:text.031">筛选</span></button></div>
          <table class="dt">
            <thead><tr><th><span data-i18n="market-page:text.032">应用</span></th><th><span data-i18n="market-page:text.033">机构</span></th><th><span data-i18n="market-page:text.034">包名</span></th><th><span data-i18n="market-page:text.035">版本总数</span></th><th><span data-i18n="market-page:text.036">下载总数</span></th><th><span data-i18n="market-page:text.037">操作</span></th></tr></thead>
            <tbody>
              <tr><td><b>Terminal Guard</b></td><td><span data-i18n="market-page:text.038">华北运营中心</span></td><td><code>com.aw.guard</code></td><td><span class="mono">12</span></td><td><span class="mono">8,642</span></td><td class="colactions"><button class="btn btn-link btn-sm"><span data-i18n="market-page:text.039">详情</span></button><button class="btn btn-link btn-sm"><span data-i18n="market-page:text.040">版本</span></button><button class="btn btn-link btn-sm"><span data-i18n="market-page:text.041">下架</span></button></td></tr>
              <tr><td><b>Policy Sync</b></td><td><span data-i18n="market-page:text.042">华南运营中心</span></td><td><code>com.aw.policy</code></td><td><span class="mono">8</span></td><td><span class="mono">3,210</span></td><td class="colactions"><button class="btn btn-link btn-sm"><span data-i18n="market-page:text.044">修改</span></button><button class="btn btn-link btn-sm"><span data-i18n="market-page:text.043">审核</span></button><button class="btn btn-link btn-sm"><span data-i18n="market-page:text.045">驳回</span></button></td></tr>
              <tr><td><b>Device Tools</b></td><td><span data-i18n="market-page:text.046">华东运营中心</span></td><td><code>com.aw.tools</code></td><td><span class="mono">5</span></td><td><span class="mono">1,088</span></td><td class="colactions"><button class="btn btn-link btn-sm"><span data-i18n="market-page:text.047">详情</span></button><button class="btn btn-link btn-sm"><span data-i18n="market-page:text.048">重新上架</span></button></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="market-page:text.049">状态与操作矩阵(版本包真实状态)</span></h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 12px"><span data-i18n="market-page:text.050">版本包状态含签名子态(kpp / APK 签名中与签名错误)。已上架 =</span> <b>Published</b><span data-i18n="market-page:text.051">,已下架 =</span> <b>Unpublished</b><span data-i18n="market-page:text.101">。</span></p>
    <table class="blueprint-table">
      <thead><tr><th><span data-i18n="market-page:text.052">状态</span></th><th><span data-i18n="market-page:text.053">主操作</span></th><th><span data-i18n="market-page:text.054">禁用操作</span></th><th><span data-i18n="market-page:text.055">反馈组件</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="market-page:text.056">草稿 / 签名中 / 签名错误</span></td><td><span data-i18n="market-page:text.057">编辑、删除、重新签名</span></td><td><span data-i18n="market-page:text.058">上架、推送</span></td><td><span data-i18n="market-page:text.059">签名错误用 danger Tag + 错误码 tooltip</span></td></tr>
        <tr><td><span data-i18n="market-page:text.060">审核中</span></td><td><span data-i18n="market-page:text.061">审核通过 / 驳回</span></td><td><span data-i18n="market-page:text.062">下架、推送安装</span></td><td><span data-i18n="market-page:text.063">Modal 表单，必须填写审核意见</span></td></tr>
        <tr><td><span data-i18n="market-page:text.064">已上架 Published</span></td><td><span data-i18n="market-page:text.065">版本管理 / 下架 / 推送安装</span></td><td><span data-i18n="market-page:text.066">删除</span></td><td><span data-i18n="market-page:text.067">Popconfirm 或 Modal.confirm</span></td></tr>
        <tr><td><span data-i18n="market-page:text.068">已拒绝 / 取消上架</span></td><td><span data-i18n="market-page:text.069">编辑、删除、重新申请上架</span></td><td><span data-i18n="market-page:text.070">推送安装</span></td><td><span data-i18n="market-page:text.071">Alert 持续展示拒绝原因和错误码</span></td></tr>
        <tr><td><span data-i18n="market-page:text.072">已下架 Unpublished</span></td><td><span data-i18n="market-page:text.073">重新上架 / 修改</span></td><td><span data-i18n="market-page:text.074">推送安装</span></td><td><span data-i18n="market-page:text.075">Message 只提示轻量操作结果</span></td></tr>
        <tr><td><span data-i18n="market-page:text.076">版本升级中</span></td><td><span data-i18n="market-page:text.077">查看进度 / 安装明细</span></td><td><span data-i18n="market-page:text.078">删除版本包</span></td><td><span data-i18n="market-page:text.079">Result 部分成功承接失败设备</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="market-page:text.080">添加应用四段表单</span></h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 12px"><span data-i18n="market-page:text.081">添加应用四段表单;APK 签名解析在后端完成,不在前端解析。</span></p>
    <div class="bp-grid">
      <div class="bp-card"><h4><span data-i18n="market-page:text.082">① 基础信息</span></h4><p><span data-i18n="market-page:text.083">机构 / APK 包(上传后自动解析 packageName+versionCode+versionName)/ logo / 9:16 截图 / 应用名 / 分类 / 开发者 / 简介 / 详情 / 备注。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="market-page:text.084">② 权限配置</span></h4><p><span data-i18n="market-page:text.085">禁止卸载 uninstallFlag / 禁止清除数据 clearDataFlag(switch,正常 active=true 语义,不沿用旧后端反转)。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="market-page:text.086">③ 签名配置</span></h4><p><span data-i18n="market-page:text.087">是否签名 needSigner / 签名方式 certificateType(1 谷歌 / 2 AW / 3 证书链)/ 证书 certificateId / 使用证书机构 usingDeptId。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="market-page:text.088">④ 规则信息</span></h4><p><span data-i18n="market-page:text.089">适配机型 deviceModelId(多选)/ 可见范围 ruleType(0-7,同推送 targetMode)/ 可见对象 rule(5 分组 / 6,7 机构树 / 其他 textarea)。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="market-page:text.090">版本与自动策略</span></h4><p><span data-i18n="market-page:text.091">版本列表列:versionName / versionCode / 操作人 / 大小 / 下载数 / 适配机型 / 备注 / 状态 / 操作。自动安装 autoInstallFlag / 自动更新 autoUpdateFlag 开关开启需二次确认。同应用不同版本高版本优先显示;更新版本签名须一致。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="market-page:text.092">应用分类</span></h4><p><span data-i18n="market-page:text.093">名称 / logo /</span> <b><span data-i18n="market-page:text.094">ordinal 排序</span></b><span data-i18n="market-page:text.095">字段 / 操作。轻量表单 + 删除确认。</span></p></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="market-page:distribution.title">应用分发闭环</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface"><div class="tag-meta">1</div><h4><span data-i18n="market-page:distribution.upload">上传解析</span></h4><p><span data-i18n="market-page:distribution.uploadDesc">后端解析包名、版本、签名与证书信息。</span></p></div>
      <div class="surface"><div class="tag-meta">2</div><h4><span data-i18n="market-page:distribution.review">审核上架</span></h4><p><span data-i18n="market-page:distribution.reviewDesc">审核意见、签名错误和上下架原因持续可见。</span></p></div>
      <div class="surface"><div class="tag-meta">3</div><h4><span data-i18n="market-page:distribution.scope">分配范围</span></h4><p><span data-i18n="market-page:distribution.scopeDesc">展示机构、设备、适配机型、冲突和预计数量。</span></p></div>
      <div class="surface"><div class="tag-meta">4</div><h4><span data-i18n="market-page:distribution.result">安装结果</span></h4><p><span data-i18n="market-page:distribution.resultDesc">进入推送任务，保留失败明细、重试和下载。</span></p></div>
    </div>
    <p style="font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="market-page:distribution.scopeRule">核心蓝图只覆盖当前有效 Figma 已确认的应用、广告、分类、版本、审核和安装明细；未确认的旧模块不得借应用市场入口回流。</span></p>
  </div>

  <div class="subsection" data-component-contract>
    <h3><span data-i18n="market-page:text.096">组件契约</span></h3>
    <div class="blueprint-notes"><span><a href="#/table">Table</a><span data-i18n="market-page:text.097">：列表和安装明细</span></span><span><a href="#/data-cards">DataCard</a><span data-i18n="market-page:text.098">：应用卡片视图</span></span><span><a href="#/feedback">Feedback</a><span data-i18n="market-page:text.099">：审核和上下架确认</span></span><span><a href="#/upload">Upload</a><span data-i18n="market-page:text.100">：版本包上传</span></span></div>
  </div>
</section>
</div>
`;
