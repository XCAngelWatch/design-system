/* AngelWatch Design System — page: user-mgmt-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["user-mgmt-page"] = `
<div class="content">
<section class="section" id="user-mgmt-page">
  <p class="section-eyebrow">Patterns · 用户与权限</p>
  <h2>UserMgmtPage · 用户管理</h2>
  <p class="lede">沿袭旧 admin 模块(dept / role / user / log)的 RBAC 结构。本模板覆盖 <b>左侧机构树 + 右侧用户表 + Drawer 角色分配</b> 三件套。新建 / 编辑 / 删除 / 重置密码 / 启停账号在工具栏与行操作中。</p>

  <div class="demo-stack">
    <div class="surface" style="padding:0;overflow:hidden">
      <div style="display:flex;align-items:stretch;height:540px">
        <!-- 左侧机构树 -->
        <div style="flex:0 0 240px;border-right:1px solid var(--aw-border-3);background:var(--aw-bg);display:flex;flex-direction:column">
          <div style="padding:12px 14px;border-bottom:1px solid var(--aw-border-3);display:flex;justify-content:space-between;align-items:center">
            <strong style="font-size:13px">机构</strong>
            <button class="btn btn-text btn-sm" style="padding:0 4px">+</button>
          </div>
          <div style="padding:8px 10px;border-bottom:1px solid var(--aw-border-3)">
            <input class="input" placeholder="搜索机构" style="height:28px;font-size:12px" />
          </div>
          <div style="flex:1;overflow:auto;padding:6px 0;font-size:13px">
            <div class="ut-row"><span class="ut-arrow">▾</span><span class="ut-icon">🏢</span>集团总部 <span class="ut-count">128</span></div>
            <div class="ut-row sub"><span class="ut-arrow">▾</span><span class="ut-icon">🏬</span>华东大区 <span class="ut-count">42</span></div>
            <div class="ut-row sub2 active"><span class="ut-arrow"></span><span class="ut-icon">📍</span>上海运营中心 <span class="ut-count">18</span></div>
            <div class="ut-row sub2"><span class="ut-arrow"></span><span class="ut-icon">📍</span>杭州分中心 <span class="ut-count">12</span></div>
            <div class="ut-row sub2"><span class="ut-arrow"></span><span class="ut-icon">📍</span>南京营业厅 <span class="ut-count">12</span></div>
            <div class="ut-row sub"><span class="ut-arrow">▸</span><span class="ut-icon">🏬</span>华北大区 <span class="ut-count">38</span></div>
            <div class="ut-row sub"><span class="ut-arrow">▸</span><span class="ut-icon">🏬</span>华南大区 <span class="ut-count">30</span></div>
            <div class="ut-row sub"><span class="ut-arrow">▸</span><span class="ut-icon">🏬</span>西南大区 <span class="ut-count">18</span></div>
          </div>
        </div>

        <!-- 右侧用户表 -->
        <div style="flex:1;display:flex;flex-direction:column;min-width:0">
          <div style="padding:12px 16px;border-bottom:1px solid var(--aw-border-3);display:flex;justify-content:space-between;align-items:center">
            <div>
              <strong style="font-size:14px">上海运营中心</strong>
              <span class="tag-meta" style="margin-left:8px">18 名成员</span>
            </div>
            <div class="row" style="gap:6px">
              <button class="btn btn-primary btn-sm">+ 新增用户</button>
              <button class="btn btn-sm">批量导入</button>
              <button class="btn btn-sm">导出</button>
            </div>
          </div>
          <div style="padding:10px 16px;border-bottom:1px solid var(--aw-border-3);display:flex;gap:8px;background:var(--aw-fill-1)">
            <input class="input" placeholder="搜索用户名 / 邮箱 / 工号" style="flex:1" />
            <div class="select" style="min-width:120px"><span>角色 ▾</span></div>
            <div class="select" style="min-width:100px"><span>状态 ▾</span></div>
            <button class="btn btn-sm">查询</button>
          </div>

          <div class="table-wrap" style="flex:1;border:0;border-radius:0;overflow:auto">
            <table class="dt">
              <thead>
                <tr>
                  <th style="width:36px"><label class="check"><input type="checkbox" /><span class="box"></span></label></th>
                  <th>用户</th>
                  <th>角色</th>
                  <th style="width:120px">工号</th>
                  <th style="width:80px">状态</th>
                  <th style="width:140px">最近登录</th>
                  <th style="width:160px" class="colactions">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><label class="check"><input type="checkbox" /><span class="box"></span></label></td>
                  <td><div class="row" style="gap:10px"><div style="width:28px;height:28px;border-radius:50%;background:var(--aw-primary);color:white;display:grid;place-items:center;font-size:12px;font-weight:600">运</div><div><strong>运维-上海</strong><div style="font-size:11px;color:var(--aw-text-3)">ops-sh@angelwatch.io</div></div></div></td>
                  <td><span class="tag tag-blue">管理员</span> <span class="tag tag-purple">运维</span></td>
                  <td><code>SH-001</code></td>
                  <td><span class="status-dot online">活跃</span></td>
                  <td>刚刚<div style="font-size:11px;color:var(--aw-text-3)">10.0.42.18</div></td>
                  <td class="colactions"><button class="btn btn-link">编辑</button><button class="btn btn-link">分配角色</button><button class="btn btn-link">重置密码</button></td>
                </tr>
                <tr>
                  <td><label class="check"><input type="checkbox" /><span class="box"></span></label></td>
                  <td><div class="row" style="gap:10px"><div style="width:28px;height:28px;border-radius:50%;background:#08979C;color:white;display:grid;place-items:center;font-size:12px;font-weight:600">张</div><div><strong>张工</strong><div style="font-size:11px;color:var(--aw-text-3)">zhang.gong@angelwatch.io</div></div></div></td>
                  <td><span class="tag tag-purple">运维</span></td>
                  <td><code>SH-014</code></td>
                  <td><span class="status-dot online">活跃</span></td>
                  <td>2 小时前</td>
                  <td class="colactions"><button class="btn btn-link">编辑</button><button class="btn btn-link">分配角色</button><button class="btn btn-link">重置密码</button></td>
                </tr>
                <tr>
                  <td><label class="check"><input type="checkbox" /><span class="box"></span></label></td>
                  <td><div class="row" style="gap:10px"><div style="width:28px;height:28px;border-radius:50%;background:#D48806;color:white;display:grid;place-items:center;font-size:12px;font-weight:600">李</div><div><strong>李审计</strong><div style="font-size:11px;color:var(--aw-text-3)">li.audit@angelwatch.io</div></div></div></td>
                  <td><span class="tag">审计</span></td>
                  <td><code>SH-022</code></td>
                  <td><span class="status-dot online">活跃</span></td>
                  <td>昨天 16:42</td>
                  <td class="colactions"><button class="btn btn-link">编辑</button><button class="btn btn-link">分配角色</button><button class="btn btn-link">重置密码</button></td>
                </tr>
                <tr>
                  <td><label class="check"><input type="checkbox" /><span class="box"></span></label></td>
                  <td><div class="row" style="gap:10px"><div style="width:28px;height:28px;border-radius:50%;background:var(--aw-text-4);color:white;display:grid;place-items:center;font-size:12px;font-weight:600">王</div><div><strong>王临时</strong><div style="font-size:11px;color:var(--aw-text-3)">wang.temp@angelwatch.io</div></div></div></td>
                  <td><span class="tag tag-orange">临时账号</span></td>
                  <td><code>SH-T-08</code></td>
                  <td><span class="status-dot offline">已停用</span></td>
                  <td>7 天前</td>
                  <td class="colactions"><button class="btn btn-link">编辑</button><button class="btn btn-link">启用</button><button class="btn btn-link">删除</button></td>
                </tr>
                <tr>
                  <td><label class="check"><input type="checkbox" /><span class="box"></span></label></td>
                  <td><div class="row" style="gap:10px"><div style="width:28px;height:28px;border-radius:50%;background:#531DAB;color:white;display:grid;place-items:center;font-size:12px;font-weight:600">陈</div><div><strong>陈分管</strong><div style="font-size:11px;color:var(--aw-text-3)">chen.lead@angelwatch.io</div></div></div></td>
                  <td><span class="tag tag-blue">主管</span></td>
                  <td><code>SH-005</code></td>
                  <td><span class="status-dot online">活跃</span></td>
                  <td>1 小时前</td>
                  <td class="colactions"><button class="btn btn-link">编辑</button><button class="btn btn-link">分配角色</button><button class="btn btn-link">重置密码</button></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="padding:10px 16px;display:flex;justify-content:space-between;align-items:center">
            <div style="font-size:12px;color:var(--aw-text-3)">已选 0 项 · 共 18 名</div>
            <div class="pager"><span class="total">共 18</span><button class="page is-active">1</button><button class="page">›</button></div>
          </div>
        </div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">角色分配 Drawer · 480px 右侧抽屉</h3>
      <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 14px">点击行 "分配角色" 弹出 Drawer。左:角色列表(可多选),右:角色对应的权限树(只读预览)。</p>
      <div style="border:1px solid var(--aw-border-2);border-radius:8px;overflow:hidden;display:flex;align-items:stretch;height:480px">
        <div style="flex:1;background:var(--aw-fill-1);position:relative">
          <div style="position:absolute;inset:0;display:grid;place-items:center;color:var(--aw-text-4);font-size:13px">背景:用户列表(已被 Drawer 遮罩)</div>
          <div style="position:absolute;inset:0;background:rgba(0,0,0,0.32)"></div>
        </div>
        <div style="flex:0 0 480px;background:var(--aw-bg);display:flex;flex-direction:column;box-shadow:var(--aw-shadow-3)">
          <div style="padding:14px 18px;border-bottom:1px solid var(--aw-border-3);display:flex;justify-content:space-between;align-items:center">
            <div><strong>分配角色</strong><div style="font-size:11px;color:var(--aw-text-3)">运维-上海 · ops-sh@angelwatch.io</div></div>
            <span style="cursor:pointer;color:var(--aw-text-3);font-size:18px">×</span>
          </div>
          <div style="flex:1;overflow:auto;padding:14px 18px">
            <div style="font-size:12px;color:var(--aw-text-3);margin-bottom:8px">已分配 2 个角色</div>
            <div class="role-list">
              <div class="role-item assigned">
                <label class="check"><input type="checkbox" checked /><span class="box"></span></label>
                <div><strong>系统管理员</strong><div class="rt-desc">完整 CRUD + 用户/角色/机构管理 + 审计查看</div></div>
              </div>
              <div class="role-item assigned">
                <label class="check"><input type="checkbox" checked /><span class="box"></span></label>
                <div><strong>运维</strong><div class="rt-desc">设备管理 + OTA 推送 + 远程控制 + 日志查看</div></div>
              </div>
              <div class="role-item">
                <label class="check"><input type="checkbox" /><span class="box"></span></label>
                <div><strong>审计</strong><div class="rt-desc">只读所有操作日志 / 设备状态;无写权限</div></div>
              </div>
              <div class="role-item">
                <label class="check"><input type="checkbox" /><span class="box"></span></label>
                <div><strong>主管</strong><div class="rt-desc">仅本机构数据查看 + 报表导出</div></div>
              </div>
              <div class="role-item">
                <label class="check"><input type="checkbox" /><span class="box"></span></label>
                <div><strong>临时账号</strong><div class="rt-desc">有效期内可登录,无任何写入权限</div></div>
              </div>
            </div>

            <div style="margin-top:18px;font-size:12px;color:var(--aw-text-3);margin-bottom:8px">合并权限预览(只读)</div>
            <div style="border:1px solid var(--aw-border-3);border-radius:6px;padding:10px 12px;font-size:12px;background:var(--aw-fill-1)">
              <div>📁 设备管理</div>
              <div style="padding-left:16px;color:var(--aw-success)">  ✓ 查看 ✓ 新增 ✓ 编辑 ✓ 删除</div>
              <div>📁 OTA 升级</div>
              <div style="padding-left:16px;color:var(--aw-success)">  ✓ 查看 ✓ 创建 ✓ 取消</div>
              <div>📁 用户管理</div>
              <div style="padding-left:16px;color:var(--aw-success)">  ✓ 查看 ✓ 新增 ✓ 编辑 ✓ 重置密码</div>
              <div>📁 系统设置</div>
              <div style="padding-left:16px;color:var(--aw-warning)">  ✓ 查看 — 仅审计配置可写</div>
            </div>
          </div>
          <div style="padding:12px 18px;border-top:1px solid var(--aw-border-3);display:flex;justify-content:flex-end;gap:8px">
            <button class="btn">取消</button>
            <button class="btn btn-primary">保存</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
`;
