/* AngelWatch Design System - page: service-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["service-page"] = `
<div class="content">
<section class="section" id="service-page">
  <p class="section-eyebrow">页面模板 · 业务蓝图</p>
  <h2>增值服务 ServicePage</h2>
  <p class="lede">增值服务覆盖获取设备日志、锁定解锁设备、数据流量控制、重置设备密码、恢复出厂设置、推送文件到设备、APN 设置、WIFI 设置和应用黑白名单。核心规则是“服务配置 + 推送任务 + 目标设备详情”三段式闭环。</p>

  <div class="subsection">
    <h3>覆盖范围</h3>
    <div class="bp-grid">
      <div class="bp-card"><h4>设备日志</h4><p>获取设备日志、添加任务、推送任务详情、推送设备详情。日志任务必须说明取回范围和保留时间。</p></div>
      <div class="bp-card"><h4>锁定解锁</h4><p>锁定设备、解锁设备、目标设备详情。锁定是保护态，解锁需要审计记录。</p></div>
      <div class="bp-card"><h4>流量与密码</h4><p>数据流量控制、重置设备密码、目标设备详情。所有动作都需要目标设备和执行结果。</p></div>
      <div class="bp-card"><h4>恢复出厂</h4><p>恢复出厂设置是最高风险动作，必须 Modal.confirm 明示设备数量和不可逆后果。</p></div>
      <div class="bp-card"><h4>文件推送</h4><p>添加文件、查看文件、修改文件、推送文件、推送记录、推送设备详情。</p></div>
      <div class="bp-card"><h4>网络与名单</h4><p>APN 设置、WIFI 设置、应用黑白名单都包含推送到设备、从设备删除、推送记录和设备详情。</p></div>
    </div>
  </div>

  <div class="subsection">
    <h3>operationType 词汇表(27+ 种)</h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 12px">增值服务按 <code>operationType</code> 组织(同一推送引擎的不同实例)。UI 用人类可读标签,但保留 code 映射。批次列表与设备详情按 operationType 动态追加列(如 17/19 追加 appName+appVersion,33 追加 scanCodeLicenseState)。</p>
    <div class="bp-grid">
      <div class="bp-card"><h4>设备控制</h4><p>1 设备日志 · 2 设备锁定 · 3 设备密码 · 12 清警告 · 13 全部刷新 · 24 修改型号 · 30 查找设备 · 51 设备名称</p></div>
      <div class="bp-card"><h4>应用</h4><p>17 应用安装 · 19 应用卸载 · 48 清除应用数据 · appHidden(隐藏应用)</p></div>
      <div class="bp-card"><h4>网络</h4><p>5 流量控制 · 20 蓝牙开关 · 40 热点 · 52 GPS 开关 · 53 电源键开关 · apnSetting · wifiSetting</p></div>
      <div class="bp-card"><h4>系统</h4><p>6 恢复出厂 · 29 调试开关 · 49 电源模式 · screenSaver · bootInterface · desktopShortcut</p></div>
      <div class="bp-card"><h4>文件 / 媒体</h4><p>7 文件推送 · 38 壁纸 · filePush · statusBarPanelConfig</p></div>
      <div class="bp-card"><h4>诊断 / 日志</h4><p>14 OTA 日志 · 15 软件信息 · 31 logcat · 54 logcat 配置 · 43 上报用户证书</p></div>
      <div class="bp-card"><h4>扫码授权(独立子状态机)</h4><p>operationType=33,8 态:0 未激活 / 1 正在激活 / 2 已激活 / 3 无效 / 4 网络不通 / 5 已过期 / 6 服务器异常 / -1 未知。</p></div>
      <div class="bp-card"><h4>focus / 资源</h4><p>46 / 47 focus 资源推送 · userCert 用户证书 · resourcePackage 资源包(壁纸/铃声)</p></div>
    </div>
  </div>

  <div class="subsection">
    <h3>主列表结构</h3>
    <div class="bp-shell">
      <div class="bp-shell-head"><strong>增值服务 / APN 设置</strong><div class="row"><button class="btn">推送记录</button><button class="btn btn-primary">+ 添加 APN</button></div></div>
      <div class="bp-shell-body">
        <div class="bp-side">
          <div class="bp-nav-item">获取设备日志</div>
          <div class="bp-nav-item">锁定解锁设备</div>
          <div class="bp-nav-item">数据流量控制</div>
          <div class="bp-nav-item">重置设备密码</div>
          <div class="bp-nav-item">恢复出厂设置</div>
          <div class="bp-nav-item">推送文件到设备</div>
          <div class="bp-nav-item active">APN 设置</div>
          <div class="bp-nav-item">WIFI 设置</div>
          <div class="bp-nav-item">应用黑白名单</div>
        </div>
        <div class="bp-main">
          <div class="bp-toolbar"><input class="input" placeholder="搜索名称 / 机构 / 操作人" /><div class="select"><span>全部状态 ▾</span></div><div class="select"><span>所属机构 ▾</span></div><button class="btn">筛选</button></div>
          <table class="dt">
            <thead><tr><th>名称</th><th>机构</th><th>状态</th><th>最后操作时间</th><th>操作人</th><th>操作</th></tr></thead>
            <tbody>
              <tr><td><b>欧洲默认 APN</b></td><td>EU / 默认机构</td><td><span class="status-dot online">已启用</span></td><td>今天 10:12</td><td>运营管理员</td><td><a>推送到设备</a> · <a>从设备删除</a> · <a>详情</a></td></tr>
              <tr><td><b>备用 APN</b></td><td>华东一区</td><td><span class="status-dot upgrading">推送中</span></td><td>昨天 18:44</td><td>设备运维</td><td><a>推送记录</a> · <a>设备详情</a></td></tr>
              <tr><td><b>测试 APN</b></td><td>测试机构</td><td><span class="status-dot offline">已停用</span></td><td>周一 11:03</td><td>系统管理员</td><td><a>修改</a> · <a>删除</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>任务闭环</h3>
    <div class="bp-flow">
      <div class="bp-step"><div class="num">1</div><div class="name">配置资产</div><div class="desc">创建 APN、WIFI、名单、文件或服务策略，保留机构和操作人。</div></div>
      <div class="bp-step"><div class="num">2</div><div class="name">选择目标</div><div class="desc">按机构、设备分组、型号、指定设备编号选择目标设备。</div></div>
      <div class="bp-step"><div class="num">3</div><div class="name">推送执行</div><div class="desc">生成推送记录，展示成功、失败、总数和进行中状态。</div></div>
      <div class="bp-step"><div class="num">4</div><div class="name">处理结果</div><div class="desc">失败项进入推送设备详情，支持重试失败项和下载失败清单。</div></div>
    </div>
  </div>

  <div class="subsection">
    <h3>状态与风险矩阵</h3>
    <table class="blueprint-table">
      <thead><tr><th>服务类型</th><th>强副作用</th><th>确认方式</th><th>结果承接</th></tr></thead>
      <tbody>
        <tr><td>获取设备日志</td><td>低</td><td>Drawer 表单确认范围</td><td>任务详情 + 日志下载。</td></tr>
        <tr><td>锁定 / 解锁设备</td><td>高</td><td>Modal.confirm，明示设备数量和后果</td><td>Result + 操作日志。</td></tr>
        <tr><td>恢复出厂设置</td><td>最高</td><td>必须输入目标数量确认</td><td>Result 部分成功 + 失败清单。</td></tr>
        <tr><td>APN / WIFI / 黑白名单</td><td>中</td><td>推送到设备或从设备删除时二次确认</td><td>推送记录 + 推送设备详情。</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>组件映射</h3>
    <div class="blueprint-notes"><span><a href="#/table">Table</a>：服务配置与推送记录</span><span><a href="#/drawer">Drawer</a>：配置编辑与设备详情</span><span><a href="#/feedback">Feedback</a>：高风险确认</span><span><a href="#/avatar-result">Result</a>：部分成功和失败清单</span><span><a href="#/push-page">PushPage</a>：任务详情结构</span></div>
  </div>
</section>
</div>
`;
