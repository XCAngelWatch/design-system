/* AngelWatch Design System — page: user-mgmt-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["user-mgmt-page"] = `
<div class="content">
<section class="section" id="user-mgmt-page">
  <p class="section-eyebrow">Patterns · 用户管理</p>
  <h2>UserMgmtPage · 用户列表</h2>
  <p class="lede">沿袭旧 <code>views/admin/user/index.vue</code>:<b>左侧机构树 + 右侧用户表</b>(TreeListLayout 范式)。搜索按 姓名 / 登录账号,操作含 编辑 / 删除 / 重置密码 / 启停账号,均通过 Modal 表单完成。</p>

  <div class="surface" style="padding:0;overflow:hidden">
    <div style="display:flex;align-items:stretch;height:560px">
      <!-- 左:机构树 -->
      <div class="ota-tree">
        <div class="ot-h">
          <strong>站点列表</strong>
          <button class="btn btn-text btn-sm" style="padding:0 4px">⟳</button>
        </div>
        <div class="ot-search"><input class="input" placeholder="搜索站点" /></div>
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

      <!-- 右:用户列表 -->
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
            <button class="btn btn-primary btn-sm">+ 新增</button>
          </div>
          <span class="meta" style="font-size:12px;color:var(--aw-text-3)">上海运营中心 · 18 名成员</span>
        </div>

        <!-- 列严格沿袭旧项目 columns: store / username / name / email / role / remark / account_status / operate -->
        <div class="table-wrap" style="border:0;border-radius:0;flex:1;overflow:auto">
          <table class="dt">
            <thead>
              <tr>
                <th style="width:120px">站点</th>
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
    <h3 class="card-title">新增 / 编辑用户 Modal</h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 14px">沿袭旧项目 <code>dialogForm.vue</code> 的扁平 Form,字段与表格列对齐:站点 / 登录账号 / 姓名 / 邮箱 / 角色 / 备注 / 启停。新建时含密码字段,编辑时不展示(密码用单独的"重置密码"操作)。</p>
    <div class="modal-stage" style="padding:32px">
      <div class="modal-demo" style="width:520px;max-width:100%">
        <div class="head"><h4>新增用户</h4><span style="cursor:pointer;color:var(--aw-text-3);font-size:18px">×</span></div>
        <div class="body">
          <div class="form-demo">
            <div class="form-row"><div class="lbl"><span class="req">*</span>站点</div><div><div class="select" style="width:100%"><span>上海运营中心 ▾</span></div></div></div>
            <div class="form-row"><div class="lbl"><span class="req">*</span>登录账号</div><div><input class="input" placeholder="字母 / 下划线开头" /></div></div>
            <div class="form-row"><div class="lbl"><span class="req">*</span>姓名</div><div><input class="input" /></div></div>
            <div class="form-row"><div class="lbl">邮箱</div><div><input class="input" placeholder="选填" /></div></div>
            <div class="form-row"><div class="lbl"><span class="req">*</span>角色</div><div><div class="select" style="width:100%"><span>选择角色 (可多选) ▾</span></div></div></div>
            <div class="form-row"><div class="lbl"><span class="req">*</span>密码</div><div><input class="input" type="password" placeholder="≥ 8 位 + 大小写 + 数字 + 符号" /></div></div>
            <div class="form-row"><div class="lbl">备注</div><div><input class="input" placeholder="选填,内部识别用" /></div></div>
          </div>
        </div>
        <div class="foot">
          <button class="btn">取消</button>
          <button class="btn btn-primary">保存</button>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
`;
