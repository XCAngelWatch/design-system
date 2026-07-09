/* AngelWatch Design System — page: user-mgmt-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["user-mgmt-page"] = `
<div class="content">
<section class="section" id="user-mgmt-page">
  <p class="section-eyebrow">Patterns · 账户权限</p>
  <h2>账户权限 UserMgmtPage</h2>
  <p class="lede">账户权限页管理账号、机构、角色、菜单权限和数据权限。权限文案必须说明作用域、影响对象和保存后的结果。</p>

  <div class="surface" style="padding:0;overflow:hidden">
    <div style="display:flex;align-items:stretch;height:560px">
      <!-- 左:机构树 -->
      <div class="ota-tree">
        <div class="ot-h">
          <strong>机构列表</strong>
          <button class="btn btn-text btn-sm" style="padding:0 4px">⟳</button>
        </div>
        <div class="ot-search"><input class="input" placeholder="搜索机构" /></div>
        <div class="ot-list">
          <div class="ot-row"><span class="ot-arrow">▾</span><span>集团总部</span><span class="ot-count">128</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▾</span><span>华东大区</span><span class="ot-count">42</span></div>
          <div class="ot-row sub2 act"><span>上海运营中心</span><span class="ot-count">18</span></div>
          <div class="ot-row sub2"><span>杭州分中心</span><span class="ot-count">12</span></div>
          <div class="ot-row sub2"><span>南京营业厅</span><span class="ot-count">12</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▸</span><span>华北大区</span><span class="ot-count">38</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▸</span><span>华南大区</span><span class="ot-count">30</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▸</span><span>西南大区</span><span class="ot-count">18</span></div>
        </div>
      </div>

      <!-- 右:账号列表 -->
      <div class="ota-main">
        <div class="lp-toolbar">
          <div class="row" style="gap:12px;flex:1;min-width:0">
            <div style="min-width:160px"><label>姓名</label><input class="input" placeholder="搜索姓名" /></div>
            <div style="min-width:160px"><label>登录账号</label><input class="input" placeholder="账号 / 工号" /></div>
            <button class="btn btn-primary btn-sm">查询</button>
            <button class="btn btn-sm">重置</button>
          </div>
        </div>

        <div class="lp-actions">
          <div class="row" style="gap:6px">
            <button class="btn btn-primary btn-sm">+ 添加账号</button>
          </div>
          <span class="meta" style="font-size:12px;color:var(--aw-text-3)">上海运营中心 · 18 名成员</span>
        </div>

        <!-- 列:store / username / name / email / role / remark / account_status / operate -->
        <div class="table-wrap" style="border:0;border-radius:0;flex:1;overflow:auto">
          <table class="dt">
            <thead>
              <tr>
                <th style="width:120px">机构</th>
                <th style="width:140px">登录账号</th>
                <th style="width:120px">姓名</th>
                <th>邮箱</th>
                <th style="width:140px">角色</th>
                <th style="width:140px">备注</th>
                <th style="width:90px">状态</th>
                <th style="width:200px" class="colactions">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>上海运营中心</td>
                <td><code>ops_sh_001</code></td>
                <td>运维-上海</td>
                <td>ops-sh@angelwatch.io</td>
                <td>管理员</td>
                <td>主负责人</td>
                <td><span class="status-dot online">启用</span></td>
                <td class="colactions"><button class="btn btn-link">编辑</button><button class="btn btn-link">重置密码</button><button class="btn btn-link">停用</button></td>
              </tr>
              <tr>
                <td>上海运营中心</td>
                <td><code>zhang_gong</code></td>
                <td>张工</td>
                <td>zhang.gong@angelwatch.io</td>
                <td>运维</td>
                <td>—</td>
                <td><span class="status-dot online">启用</span></td>
                <td class="colactions"><button class="btn btn-link">编辑</button><button class="btn btn-link">重置密码</button><button class="btn btn-link">停用</button></td>
              </tr>
              <tr>
                <td>上海运营中心</td>
                <td><code>li_audit</code></td>
                <td>李审计</td>
                <td>li.audit@angelwatch.io</td>
                <td>审计</td>
                <td>每月 1 号导报表</td>
                <td><span class="status-dot online">启用</span></td>
                <td class="colactions"><button class="btn btn-link">编辑</button><button class="btn btn-link">重置密码</button><button class="btn btn-link">停用</button></td>
              </tr>
              <tr>
                <td>上海运营中心</td>
                <td><code>chen_lead</code></td>
                <td>陈分管</td>
                <td>chen.lead@angelwatch.io</td>
                <td>主管</td>
                <td>分管华东</td>
                <td><span class="status-dot online">启用</span></td>
                <td class="colactions"><button class="btn btn-link">编辑</button><button class="btn btn-link">重置密码</button><button class="btn btn-link">停用</button></td>
              </tr>
              <tr>
                <td>上海运营中心</td>
                <td><code>wang_temp_08</code></td>
                <td>王临时</td>
                <td>wang.temp@angelwatch.io</td>
                <td>临时账号</td>
                <td>合同至 2026-06</td>
                <td><span class="status-dot offline">已停用</span></td>
                <td class="colactions"><button class="btn btn-link">编辑</button><button class="btn btn-link">启用</button><button class="btn btn-link">删除</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="lp-pager">
          <span class="meta">共 18 名</span>
          <div class="pager"><button class="page is-active">1</button><button class="page">2</button><button class="page">›</button></div>
        </div>
      </div>
    </div>
  </div>

  <div class="surface" style="margin-top:24px">
    <h3 class="card-title">添加 / 编辑账号 Modal</h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 14px">账号表单字段与表格列对齐:机构 / 登录账号 / 姓名 / 邮箱 / 角色 / 备注 / 启停。表单还含 <b>时区 timeZone</b>(zone select,UTC±HH:MM 15 分钟粒度)与 <b>MFA 谷歌验证器 mfaSecretKey</b>(可解绑,二次确认);新增账号后自动生成密码并支持一键复制;账号状态 code '0' 正常 / '9' 禁用。</p>
    <div class="modal-stage" style="padding:32px">
      <div class="modal-demo" style="width:520px;max-width:100%">
        <div class="head"><h4>添加账号</h4><span style="cursor:pointer;color:var(--aw-text-3);font-size:18px">×</span></div>
        <div class="body">
          <div class="form-demo">
            <div class="form-row"><div class="lbl"><span class="req">*</span>机构</div><div><div class="select" style="width:100%"><span>上海运营中心 ▾</span></div></div></div>
            <div class="form-row"><div class="lbl"><span class="req">*</span>登录账号</div><div><input class="input" placeholder="字母 / 下划线开头" /></div></div>
            <div class="form-row"><div class="lbl"><span class="req">*</span>姓名</div><div><input class="input" /></div></div>
            <div class="form-row"><div class="lbl">邮箱</div><div><input class="input" placeholder="选填,编辑时掩码跳过校验" /></div></div>
            <div class="form-row"><div class="lbl"><span class="req">*</span>时区</div><div><div class="select" style="width:100%"><span>UTC+08:00 ▾</span></div></div></div>
            <div class="form-row"><div class="lbl">MFA</div><div><label style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--aw-text-2)"><input type="checkbox" /> 启用谷歌验证器(可解绑,二次确认)</label></div></div>
            <div class="form-row"><div class="lbl"><span class="req">*</span>角色</div><div><div class="select" style="width:100%"><span>选择角色 (可多选) ▾</span></div></div></div>
            <div class="form-row"><div class="lbl"><span class="req">*</span>密码</div><div><input class="input" type="password" placeholder="≥ 8 位 + 大小写 + 数字 + 符号" /></div></div>
            <div class="form-row"><div class="lbl">备注</div><div><input class="input" placeholder="选填,内部识别用" /></div></div>
          </div>
        </div>
        <div class="foot">
          <button class="btn">取消</button>
          <button class="btn btn-primary">完成添加</button>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>Figma 账户信息证据矩阵</h3>
    <p class="lede" style="margin-bottom:12px">Figma 账户信息 canvas 覆盖机构管理、运营商管理、账号管理、角色管理和配置权限。设计系统落地时按“对象类型 + 作用域 + 可执行操作”拆分，不把所有权限放进一个通用表单。</p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="map-table">
        <thead><tr><th style="width:18%">对象</th><th style="width:28%">Figma 证据帧 / 词</th><th style="width:28%">关键字段</th><th>必须覆盖的状态</th></tr></thead>
        <tbody>
          <tr><td><b>机构管理</b></td><td>机构管理、添加下级机构、修改下级机构、分配设备、配置权限</td><td>机构编码、机构名称、上级机构、所属运营商、设备数量</td><td>空机构、加载中、无设备可分配、权限配置半选态、保存后刷新组织树。</td></tr>
          <tr><td><b>运营商管理</b></td><td>运营商管理、添加运营商、修改运营商、运营商账号</td><td>运营商名称、运营商别名、网络定位类型、定位应用SHA1值、定位Key值、显示地图Key值</td><td>地图 Key 缺失、定位配置不可用、运营商账号为空、保存后影响设备地图。</td></tr>
          <tr><td><b>账号管理</b></td><td>登录账号、账号名称、姓名、电子邮箱、重置密码、启用 / 停用、时区、MFA</td><td>登录账号(5-30)、姓名、电子邮箱、角色、机构、时区 timeZone、MFA mfaSecretKey、状态('0'/'9')、备注</td><td>自身账号禁止停用、重置密码 / 解绑 MFA 二次确认、邮箱格式错误、角色为空不可保存、新增后自动生成密码+复制。</td></tr>
          <tr><td><b>角色管理</b></td><td>角色、配置权限、菜单权限、数据权限</td><td>角色名称、角色描述、菜单权限、数据权限范围 dsType(0 全部 / 1 自定义 / 2 本级及子级 / 3 本级 / 4 本人)、可管理机构 dsScope</td><td>半选态、权限冲突、只读角色、删除前检查已绑定账号。</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3>配置权限 Drawer · 菜单权限 + 数据权限</h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <div style="display:grid;grid-template-columns:280px minmax(0,1fr);min-height:360px">
        <div style="border-right:1px solid var(--aw-border-2);padding:16px;background:var(--aw-fill-1)">
          <h4 style="margin:0 0 12px;font-size:14px">权限对象</h4>
          <div class="ot-row act"><span>上海运营中心</span><span class="ot-count">机构</span></div>
          <div class="ot-row"><span>运营商管理员</span><span class="ot-count">角色</span></div>
          <div class="ot-row"><span>ops_sh_001</span><span class="ot-count">账号</span></div>
          <p style="margin:14px 0 0;font-size:12px;color:var(--aw-text-3);line-height:1.7">同一个抽屉承载三类对象，但标题、保存文案和影响范围必须随对象变化。</p>
        </div>
        <div style="padding:16px">
          <div class="row" style="justify-content:space-between;margin-bottom:12px">
            <div>
              <h4 style="margin:0 0 4px;font-size:14px">为“上海运营中心”配置权限</h4>
              <p style="margin:0;font-size:12px;color:var(--aw-text-3)">保存后影响该机构下账号可见菜单和可管理设备范围。</p>
            </div>
            <button class="btn btn-primary btn-sm">保存权限</button>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div class="surface" style="box-shadow:none">
              <div class="tag-meta" style="margin-bottom:10px">菜单权限</div>
              <div class="ot-row"><span class="ot-arrow">▾</span><span>数据中心</span><span class="ot-count">半选</span></div>
              <div class="ot-row sub act"><span>设备管理</span><span class="ot-count">读写</span></div>
              <div class="ot-row sub"><span>设备详情</span><span class="ot-count">只读</span></div>
              <div class="ot-row"><span class="ot-arrow">▾</span><span>设备地图</span><span class="ot-count">半选</span></div>
              <div class="ot-row sub"><span>轨迹查询</span><span class="ot-count">只读</span></div>
              <div class="ot-row sub"><span>围栏管理</span><span class="ot-count">无</span></div>
            </div>
            <div class="surface" style="box-shadow:none">
              <div class="tag-meta" style="margin-bottom:10px">数据权限</div>
              <div class="form-demo">
                <div class="form-row"><div class="lbl">机构范围</div><div><div class="select" style="width:100%"><span>本机构及下级机构 ▾</span></div></div></div>
                <div class="form-row"><div class="lbl">设备范围</div><div><div class="select" style="width:100%"><span>已分配设备 + 新增设备自动继承 ▾</span></div></div></div>
                <div class="form-row"><div class="lbl">敏感操作</div><div><span class="tag">重置密码</span> <span class="tag">恢复出厂</span> <span class="tag">删除围栏</span></div></div>
              </div>
              <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong>权限冲突提示：</strong>如果角色无菜单权限，账号单独授予数据权限也不可访问对应页面。</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>账户权限交互细节</h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta">重置密码</div>
        <h3 style="margin:8px 0;font-size:16px">强确认，不默认确认</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">文案必须写清“将为登录账号生成临时密码，并要求下次登录修改”。默认焦点停在取消。</p>
      </div>
      <div class="surface">
        <div class="tag-meta">运营商定位配置</div>
        <h3 style="margin:8px 0;font-size:16px">Key 值分组显示</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">定位应用SHA1值、定位Key值、显示地图Key值属于地图能力配置，不和账号基础信息混在同一表单。</p>
      </div>
      <div class="surface">
        <div class="tag-meta">分配设备</div>
        <h3 style="margin:8px 0;font-size:16px">表格 / 卡片双布局</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">Figma 同时给出分配设备添加和卡片布局；实现应支持筛选、批量勾选、导入和冲突设备提示。</p>
      </div>
    </div>
  </div>
</section>
</div>
`;
