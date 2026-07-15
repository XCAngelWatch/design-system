/* AngelWatch Design System — page: user-mgmt-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["user-mgmt-page"] = `
<div class="content">
<section class="section" id="user-mgmt-page">
  <p class="section-eyebrow"><span data-i18n="user-mgmt-page:text.001">页面蓝图 · 账户权限</span></p>
  <h2><span data-i18n="user-mgmt-page:text.002">账户权限 UserMgmtPage</span></h2>
  <p class="lede"><span data-i18n="user-mgmt-page:text.003">账户权限页管理账号、机构、角色、菜单权限和数据权限。权限文案必须说明作用域、影响对象和保存后的结果。</span></p>

  <div class="surface" style="padding:0;overflow:hidden">
    <div style="display:flex;align-items:stretch;height:560px">
      <!-- 左:机构树 -->
      <div class="ota-tree">
        <div class="ot-h">
          <strong><span data-i18n="user-mgmt-page:text.004">机构列表</span></strong>
          <button class="btn btn-text btn-sm" style="padding:0 4px">⟳</button>
        </div>
        <div class="ot-search"><input class="input" placeholder="搜索机构" data-i18n-placeholder="user-mgmt-page:text.005" /></div>
        <div class="ot-list">
          <div class="ot-row"><span class="ot-arrow">▾</span><span><span data-i18n="user-mgmt-page:text.006">集团总部</span></span><span class="ot-count">128</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▾</span><span><span data-i18n="user-mgmt-page:text.007">华东大区</span></span><span class="ot-count">42</span></div>
          <div class="ot-row sub2 act"><span><span data-i18n="user-mgmt-page:text.008">上海运营中心</span></span><span class="ot-count">18</span></div>
          <div class="ot-row sub2"><span><span data-i18n="user-mgmt-page:text.009">杭州分中心</span></span><span class="ot-count">12</span></div>
          <div class="ot-row sub2"><span><span data-i18n="user-mgmt-page:text.010">南京营业厅</span></span><span class="ot-count">12</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▸</span><span><span data-i18n="user-mgmt-page:text.011">华北大区</span></span><span class="ot-count">38</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▸</span><span><span data-i18n="user-mgmt-page:text.012">华南大区</span></span><span class="ot-count">30</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▸</span><span><span data-i18n="user-mgmt-page:text.013">西南大区</span></span><span class="ot-count">18</span></div>
        </div>
      </div>

      <!-- 右:账号列表 -->
      <div class="ota-main">
        <div class="lp-toolbar">
          <div class="row" style="gap:12px;flex:1;min-width:0">
            <div style="min-width:160px"><label><span data-i18n="user-mgmt-page:text.014">姓名</span></label><input class="input" placeholder="搜索姓名" data-i18n-placeholder="user-mgmt-page:text.015" /></div>
            <div style="min-width:160px"><label><span data-i18n="user-mgmt-page:text.016">登录账号</span></label><input class="input" placeholder="账号 / 工号" data-i18n-placeholder="user-mgmt-page:text.017" /></div>
            <button class="btn btn-primary btn-sm"><span data-i18n="user-mgmt-page:text.018">查询</span></button>
            <button class="btn btn-sm"><span data-i18n="user-mgmt-page:text.019">重置</span></button>
          </div>
        </div>

        <div class="lp-actions">
          <div class="row" style="gap:6px">
            <button class="btn btn-primary btn-sm"><span data-i18n="user-mgmt-page:text.020">+ 添加账号</span></button>
          </div>
          <span class="meta" style="font-size:12px;color:var(--aw-text-3)"><span data-i18n="user-mgmt-page:text.021">上海运营中心 · 18 名成员</span></span>
        </div>

        <!-- 列:store / username / name / email / role / remark / account_status / operate -->
        <div class="table-wrap" style="border:0;border-radius:0;flex:1;overflow:auto">
          <table class="dt">
            <thead>
              <tr>
                <th style="width:120px"><span data-i18n="user-mgmt-page:text.022">机构</span></th>
                <th style="width:140px"><span data-i18n="user-mgmt-page:text.023">登录账号</span></th>
                <th style="width:120px"><span data-i18n="user-mgmt-page:text.024">姓名</span></th>
                <th><span data-i18n="user-mgmt-page:text.025">邮箱</span></th>
                <th style="width:140px"><span data-i18n="user-mgmt-page:text.026">角色</span></th>
                <th style="width:140px"><span data-i18n="user-mgmt-page:text.027">备注</span></th>
                <th style="width:90px"><span data-i18n="user-mgmt-page:text.028">状态</span></th>
                <th style="width:200px" class="colactions"><span data-i18n="user-mgmt-page:text.029">操作</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span data-i18n="user-mgmt-page:text.030">上海运营中心</span></td>
                <td><code>ops_sh_001</code></td>
                <td><span data-i18n="user-mgmt-page:text.031">运维-上海</span></td>
                <td>ops-sh@angelwatch.io</td>
                <td><span data-i18n="user-mgmt-page:text.032">管理员</span></td>
                <td><span data-i18n="user-mgmt-page:text.033">主负责人</span></td>
                <td><span class="status-dot is-success"><span data-i18n="user-mgmt-page:text.034">启用</span></span></td>
                <td class="colactions"><button class="btn btn-link"><span data-i18n="user-mgmt-page:text.035">编辑</span></button><button class="btn btn-link"><span data-i18n="user-mgmt-page:text.036">重置密码</span></button><button class="btn btn-link btn-danger-link"><span data-i18n="user-mgmt-page:text.037">停用</span></button></td>
              </tr>
              <tr>
                <td><span data-i18n="user-mgmt-page:text.038">上海运营中心</span></td>
                <td><code>zhang_gong</code></td>
                <td><span data-i18n="user-mgmt-page:text.039">张工</span></td>
                <td>zhang.gong@angelwatch.io</td>
                <td><span data-i18n="user-mgmt-page:text.040">运维</span></td>
                <td>—</td>
                <td><span class="status-dot is-success"><span data-i18n="user-mgmt-page:text.041">启用</span></span></td>
                <td class="colactions"><button class="btn btn-link"><span data-i18n="user-mgmt-page:text.042">编辑</span></button><button class="btn btn-link"><span data-i18n="user-mgmt-page:text.043">重置密码</span></button><button class="btn btn-link btn-danger-link"><span data-i18n="user-mgmt-page:text.044">停用</span></button></td>
              </tr>
              <tr>
                <td><span data-i18n="user-mgmt-page:text.045">上海运营中心</span></td>
                <td><code>li_audit</code></td>
                <td><span data-i18n="user-mgmt-page:text.046">李审计</span></td>
                <td>li.audit@angelwatch.io</td>
                <td><span data-i18n="user-mgmt-page:text.047">审计</span></td>
                <td><span data-i18n="user-mgmt-page:text.048">每月 1 号导报表</span></td>
                <td><span class="status-dot is-success"><span data-i18n="user-mgmt-page:text.049">启用</span></span></td>
                <td class="colactions"><button class="btn btn-link"><span data-i18n="user-mgmt-page:text.050">编辑</span></button><button class="btn btn-link"><span data-i18n="user-mgmt-page:text.051">重置密码</span></button><button class="btn btn-link btn-danger-link"><span data-i18n="user-mgmt-page:text.052">停用</span></button></td>
              </tr>
              <tr>
                <td><span data-i18n="user-mgmt-page:text.053">上海运营中心</span></td>
                <td><code>chen_lead</code></td>
                <td><span data-i18n="user-mgmt-page:text.054">陈分管</span></td>
                <td>chen.lead@angelwatch.io</td>
                <td><span data-i18n="user-mgmt-page:text.055">主管</span></td>
                <td><span data-i18n="user-mgmt-page:text.056">分管华东</span></td>
                <td><span class="status-dot is-success"><span data-i18n="user-mgmt-page:text.057">启用</span></span></td>
                <td class="colactions"><button class="btn btn-link"><span data-i18n="user-mgmt-page:text.058">编辑</span></button><button class="btn btn-link"><span data-i18n="user-mgmt-page:text.059">重置密码</span></button><button class="btn btn-link btn-danger-link"><span data-i18n="user-mgmt-page:text.060">停用</span></button></td>
              </tr>
              <tr>
                <td><span data-i18n="user-mgmt-page:text.061">上海运营中心</span></td>
                <td><code>wang_temp_08</code></td>
                <td><span data-i18n="user-mgmt-page:text.062">王临时</span></td>
                <td>wang.temp@angelwatch.io</td>
                <td><span data-i18n="user-mgmt-page:text.063">临时账号</span></td>
                <td><span data-i18n="user-mgmt-page:text.064">合同至 2026-06</span></td>
                <td><span class="status-dot is-neutral"><span data-i18n="user-mgmt-page:text.065">已停用</span></span></td>
                <td class="colactions"><button class="btn btn-link"><span data-i18n="user-mgmt-page:text.066">编辑</span></button><button class="btn btn-link"><span data-i18n="user-mgmt-page:text.067">启用</span></button><button class="btn btn-link btn-danger-link"><span data-i18n="user-mgmt-page:text.068">删除</span></button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="lp-pager">
          <span class="meta"><span data-i18n="user-mgmt-page:text.069">共 18 名</span></span>
        </div>
      </div>
    </div>
  </div>

  <div class="surface" style="margin-top:24px">
    <h3 class="card-title"><span data-i18n="user-mgmt-page:text.070">添加 / 编辑账号 Modal</span></h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 14px"><span data-i18n="user-mgmt-page:text.071">账号表单字段与表格列对齐:机构 / 登录账号 / 姓名 / 邮箱 / 角色 / 备注 / 启停。表单还含</span> <b><span data-i18n="user-mgmt-page:text.072">时区 timeZone</span></b><span data-i18n="user-mgmt-page:text.073">(zone select,UTC±HH:MM 15 分钟粒度)与</span> <b><span data-i18n="user-mgmt-page:text.074">MFA 谷歌验证器 mfaSecretKey</span></b><span data-i18n="user-mgmt-page:text.075">(可解绑,二次确认);新增账号后自动生成密码并支持一键复制;账号状态 code '0' 正常 / '9' 禁用。</span></p>
    <div class="modal-stage" style="padding:32px">
      <div class="modal-demo" style="width:520px;max-width:100%">
        <div class="head"><h4><span data-i18n="user-mgmt-page:text.076">添加账号</span></h4><button class="dialog-close" aria-label="关闭" data-i18n-aria-label="common:close">×</button></div>
        <div class="body">
          <div class="form-demo">
            <div class="form-row"><div class="lbl"><span class="req">*</span><span data-i18n="user-mgmt-page:text.077">机构</span></div><div><div class="select" style="width:100%"><span><span data-i18n="user-mgmt-page:text.078">上海运营中心 ▾</span></span></div></div></div>
            <div class="form-row"><div class="lbl"><span class="req">*</span><span data-i18n="user-mgmt-page:text.079">登录账号</span></div><div><input class="input" placeholder="5–30 位数字 / 字母，且必须含字母" data-i18n-placeholder="user-mgmt-page:text.080" /></div></div>
            <div class="form-row"><div class="lbl"><span class="req">*</span><span data-i18n="user-mgmt-page:text.081">姓名</span></div><div><input class="input" /></div></div>
            <div class="form-row"><div class="lbl"><span data-i18n="user-mgmt-page:text.082">邮箱</span></div><div><input class="input" placeholder="选填,编辑时掩码跳过校验" data-i18n-placeholder="user-mgmt-page:text.083" /></div></div>
            <div class="form-row"><div class="lbl"><span class="req">*</span><span data-i18n="user-mgmt-page:text.084">时区</span></div><div><div class="select" style="width:100%"><span>UTC+08:00 ▾</span></div></div></div>
            <div class="form-row"><div class="lbl">MFA</div><div><div class="row"><button type="button" class="switch" role="switch" aria-checked="false" aria-label="启用谷歌验证器" data-i18n-aria-label="user-mgmt-page:text.085"></button><span style="font-size:13px;color:var(--aw-text-2)" data-i18n="user-mgmt-page:text.085">启用谷歌验证器(可解绑,二次确认)</span></div></div></div>
            <div class="form-row"><div class="lbl"><span class="req">*</span><span data-i18n="user-mgmt-page:text.086">角色</span></div><div><div class="select" style="width:100%"><span><span data-i18n="user-mgmt-page:text.087">选择角色 (可多选) ▾</span></span></div></div></div>
            <div class="form-row"><div class="lbl"><span data-i18n="user-mgmt-page:text.090">备注</span></div><div><input class="input" placeholder="选填,内部识别用" data-i18n-placeholder="user-mgmt-page:text.091" /></div></div>
          </div>
        </div>
        <div class="foot">
          <button class="btn"><span data-i18n="user-mgmt-page:text.092">取消</span></button>
          <button class="btn btn-primary"><span data-i18n="user-mgmt-page:text.093">完成添加</span></button>
        </div>
      </div>
    </div>
    <div class="alert success" style="margin-top:12px">
      <div class="ico">✓</div>
      <div class="content">
        <strong><span data-i18n="user-mgmt-page:text.161">账号创建成功 · 临时密码仅显示一次</span></strong>
        <span data-i18n="user-mgmt-page:text.162">系统自动为</span> <code>ops_new_01</code> <span data-i18n="user-mgmt-page:text.163">生成临时密码</span> <code>Aw-7Kp9-X2mQ</code>。
        <button class="btn btn-link btn-sm" style="padding:0 4px"><span data-i18n="user-mgmt-page:text.164">复制临时密码</span></button>
        <span data-i18n="user-mgmt-page:text.165">用户首次登录必须修改密码；关闭后不可再次查看，只能执行重置密码。</span>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="user-mgmt-page:text.094">Figma 账户信息证据矩阵</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="user-mgmt-page:text.095">Figma 账户信息 canvas 覆盖机构管理、运营商管理、账号管理、角色管理和配置权限。设计系统落地时按“对象类型 + 作用域 + 可执行操作”拆分，不把所有权限放进一个通用表单。</span></p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="map-table">
        <thead><tr><th style="width:18%"><span data-i18n="user-mgmt-page:text.096">对象</span></th><th style="width:28%"><span data-i18n="user-mgmt-page:text.097">Figma 证据帧 / 词</span></th><th style="width:28%"><span data-i18n="user-mgmt-page:text.098">关键字段</span></th><th><span data-i18n="user-mgmt-page:text.099">必须覆盖的状态</span></th></tr></thead>
        <tbody>
          <tr><td><b><span data-i18n="user-mgmt-page:text.100">机构管理</span></b></td><td><span data-i18n="user-mgmt-page:text.101">机构管理、添加下级机构、修改下级机构、分配设备、配置权限</span></td><td><span data-i18n="user-mgmt-page:text.102">机构编码、机构名称、上级机构、所属运营商、设备数量</span></td><td><span data-i18n="user-mgmt-page:text.103">空机构、加载中、无设备可分配、权限配置半选态、保存后刷新组织树。</span></td></tr>
          <tr><td><b><span data-i18n="user-mgmt-page:text.104">运营商管理</span></b></td><td><span data-i18n="user-mgmt-page:text.105">运营商管理、添加运营商、修改运营商、运营商账号</span></td><td><span data-i18n="user-mgmt-page:text.106">运营商名称、运营商别名、网络定位类型、定位应用SHA1值、定位Key值、显示地图Key值</span></td><td><span data-i18n="user-mgmt-page:text.107">地图 Key 缺失、定位配置不可用、运营商账号为空、保存后影响设备地图。</span></td></tr>
          <tr><td><b><span data-i18n="user-mgmt-page:text.108">账号管理</span></b></td><td><span data-i18n="user-mgmt-page:text.109">登录账号、账号名称、姓名、电子邮箱、重置密码、启用 / 停用、时区、MFA</span></td><td><span data-i18n="user-mgmt-page:text.110">登录账号(5-30)、姓名、电子邮箱、角色、机构、时区 timeZone、MFA mfaSecretKey、状态('0'/'9')、备注</span></td><td><span data-i18n="user-mgmt-page:text.111">自身账号禁止停用、重置密码 / 解绑 MFA 二次确认、邮箱格式错误、角色为空不可保存、新增后自动生成密码+复制。</span></td></tr>
          <tr><td><b><span data-i18n="user-mgmt-page:text.112">角色管理</span></b></td><td><span data-i18n="user-mgmt-page:text.113">角色、配置权限、菜单权限、数据权限</span></td><td><span data-i18n="user-mgmt-page:text.114">角色名称、角色描述、菜单权限、数据权限范围 dsType(0 全部 / 1 自定义 / 2 本级及子级 / 3 本级 / 4 本人)、可管理机构 dsScope</span></td><td><span data-i18n="user-mgmt-page:text.115">半选态、权限冲突、只读角色、删除前检查已绑定账号。</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="user-mgmt-page:text.116">配置权限 Drawer · 菜单权限 + 数据权限</span></h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <div style="display:grid;grid-template-columns:280px minmax(0,1fr);min-height:360px">
        <div style="border-right:1px solid var(--aw-border-2);padding:16px;background:var(--aw-fill-1)">
          <h4 style="margin:0 0 12px;font-size:14px"><span data-i18n="user-mgmt-page:text.117">权限对象</span></h4>
          <div class="ot-row act"><span><span data-i18n="user-mgmt-page:text.118">上海运营中心</span></span><span class="ot-count"><span data-i18n="user-mgmt-page:text.119">机构</span></span></div>
          <div class="ot-row"><span><span data-i18n="user-mgmt-page:text.120">运营商管理员</span></span><span class="ot-count"><span data-i18n="user-mgmt-page:text.121">角色</span></span></div>
          <div class="ot-row"><span>ops_sh_001</span><span class="ot-count"><span data-i18n="user-mgmt-page:text.122">账号</span></span></div>
          <p style="margin:14px 0 0;font-size:12px;color:var(--aw-text-3);line-height:1.7"><span data-i18n="user-mgmt-page:text.123">同一个抽屉承载三类对象，但标题、保存文案和影响范围必须随对象变化。</span></p>
        </div>
        <div style="padding:16px">
          <div class="row" style="justify-content:space-between;margin-bottom:12px">
            <div>
              <h4 style="margin:0 0 4px;font-size:14px"><span data-i18n="user-mgmt-page:text.124">为“上海运营中心”配置权限</span></h4>
              <p style="margin:0;font-size:12px;color:var(--aw-text-3)"><span data-i18n="user-mgmt-page:text.125">保存后影响该机构下账号可见菜单和可管理设备范围。</span></p>
            </div>
            <button class="btn btn-primary btn-sm"><span data-i18n="user-mgmt-page:text.126">保存权限</span></button>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div class="surface" style="box-shadow:none">
              <div class="tag-meta" style="margin-bottom:10px"><span data-i18n="user-mgmt-page:text.127">菜单权限</span></div>
              <div class="ot-row"><span class="ot-arrow">▾</span><span><span data-i18n="user-mgmt-page:text.128">数据中心</span></span><span class="ot-count"><span data-i18n="user-mgmt-page:text.129">半选</span></span></div>
              <div class="ot-row sub act"><span><span data-i18n="user-mgmt-page:text.130">设备管理</span></span><span class="ot-count"><span data-i18n="user-mgmt-page:text.131">读写</span></span></div>
              <div class="ot-row sub"><span><span data-i18n="user-mgmt-page:text.132">设备详情</span></span><span class="ot-count"><span data-i18n="user-mgmt-page:text.133">只读</span></span></div>
              <div class="ot-row"><span class="ot-arrow">▾</span><span><span data-i18n="user-mgmt-page:text.134">设备地图</span></span><span class="ot-count"><span data-i18n="user-mgmt-page:text.135">半选</span></span></div>
              <div class="ot-row sub"><span><span data-i18n="user-mgmt-page:text.136">轨迹查询</span></span><span class="ot-count"><span data-i18n="user-mgmt-page:text.137">只读</span></span></div>
              <div class="ot-row sub"><span><span data-i18n="user-mgmt-page:text.138">围栏管理</span></span><span class="ot-count"><span data-i18n="user-mgmt-page:text.139">无</span></span></div>
            </div>
            <div class="surface" style="box-shadow:none">
              <div class="tag-meta" style="margin-bottom:10px"><span data-i18n="user-mgmt-page:text.140">数据权限</span></div>
              <div class="form-demo">
                <div class="form-row"><div class="lbl"><span data-i18n="user-mgmt-page:text.141">机构范围</span></div><div><div class="select" style="width:100%"><span><span data-i18n="user-mgmt-page:text.142">本机构及下级机构 ▾</span></span></div></div></div>
                <div class="form-row"><div class="lbl"><span data-i18n="user-mgmt-page:text.143">设备范围</span></div><div><div class="select" style="width:100%"><span><span data-i18n="user-mgmt-page:text.144">已分配设备 + 新增设备自动继承 ▾</span></span></div></div></div>
                <div class="form-row"><div class="lbl"><span data-i18n="user-mgmt-page:text.145">敏感操作</span></div><div><span class="tag"><span data-i18n="user-mgmt-page:text.146">重置密码</span></span> <span class="tag"><span data-i18n="user-mgmt-page:text.147">恢复出厂</span></span> <span class="tag"><span data-i18n="user-mgmt-page:text.148">删除围栏</span></span></div></div>
              </div>
              <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong><span data-i18n="user-mgmt-page:text.149">权限冲突提示：</span></strong><span data-i18n="user-mgmt-page:text.150">如果角色无菜单权限，账号单独授予数据权限也不可访问对应页面。</span></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="user-mgmt-page:text.151">账户权限交互细节</span></h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta"><span data-i18n="user-mgmt-page:text.152">重置密码</span></div>
        <h3 style="margin:8px 0;font-size:16px"><span data-i18n="user-mgmt-page:text.153">强确认，不默认确认</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="user-mgmt-page:text.154">文案必须写清“将为登录账号生成临时密码，并要求下次登录修改”。默认焦点停在取消。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta"><span data-i18n="user-mgmt-page:text.155">运营商定位配置</span></div>
        <h3 style="margin:8px 0;font-size:16px"><span data-i18n="user-mgmt-page:text.156">Key 值分组显示</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="user-mgmt-page:text.157">定位应用SHA1值、定位Key值、显示地图Key值属于地图能力配置，不和账号基础信息混在同一表单。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta"><span data-i18n="user-mgmt-page:text.158">分配设备</span></div>
        <h3 style="margin:8px 0;font-size:16px"><span data-i18n="user-mgmt-page:text.159">表格 / 卡片双布局</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="user-mgmt-page:text.160">Figma 同时给出分配设备添加和卡片布局；实现应支持筛选、批量勾选、导入和冲突设备提示。</span></p>
      </div>
    </div>
  </div>
  <div class="subsection">
    <h3><span data-i18n="user-mgmt-page:permissionDiff.title">权限保存前 Diff</span></h3>
    <table class="map-table">
      <thead><tr><th><span data-i18n="user-mgmt-page:permissionDiff.dimension">维度</span></th><th><span data-i18n="user-mgmt-page:permissionDiff.before">保存前</span></th><th><span data-i18n="user-mgmt-page:permissionDiff.after">保存后</span></th><th><span data-i18n="user-mgmt-page:permissionDiff.risk">风险提示</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="user-mgmt-page:permissionDiff.functions">功能权限</span></td><td><span data-i18n="user-mgmt-page:permissionDiff.functionsBefore">24 项</span></td><td><span data-i18n="user-mgmt-page:permissionDiff.functionsAfter">新增 3，移除 2</span></td><td><span data-i18n="user-mgmt-page:permissionDiff.functionsRisk">列出受影响菜单和强副作用动作</span></td></tr>
        <tr><td><span data-i18n="user-mgmt-page:permissionDiff.data">数据范围</span></td><td><span data-i18n="user-mgmt-page:permissionDiff.dataBefore">本级及子级</span></td><td><span data-i18n="user-mgmt-page:permissionDiff.dataAfter">自定义 6 个机构</span></td><td><span data-i18n="user-mgmt-page:permissionDiff.dataRisk">展示失去访问的机构与设备数</span></td></tr>
        <tr><td><span data-i18n="user-mgmt-page:permissionDiff.conflict">分配冲突</span></td><td><span data-i18n="user-mgmt-page:permissionDiff.conflictBefore">未处理 4 项</span></td><td><span data-i18n="user-mgmt-page:permissionDiff.conflictAfter">覆盖 1，跳过 3</span></td><td><span data-i18n="user-mgmt-page:permissionDiff.conflictRisk">覆盖需要独立权限并记录来源</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection" data-component-contract>
    <h3><span data-i18n="common:component.contract">组件契约</span></h3>
    <div class="blueprint-notes"><span><a href="#/tree-comp">Tree</a></span><span><a href="#/cascader">Cascader</a></span><span><a href="#/table">Table</a></span><span><a href="#/drawer">Drawer</a></span><span><a href="#/feedback">Feedback</a></span><span><a href="#/row-actions">RowActions</a></span></div>
  </div>
</section>
</div>
`;
