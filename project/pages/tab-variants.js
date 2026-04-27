/* AngelWatch Design System — page: tab-variants (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["tab-variants"] = `
<div class="content">
<!-- TAB VARIANTS / POPCONFIRM -->
<section class="section" id="tab-variants">
  <p class="section-eyebrow">Components · Tabs 变体 / 二次确认</p>
  <h2>Tabs Variants · Card / Route · Popconfirm</h2>

  <div class="subsection">
    <h3>Tabs · 三种形态</h3>
    <div style="display:flex;flex-direction:column;gap:24px">
<div>
  <p style="font-size:12px;color:var(--aw-text-3);margin:0 0 8px">Line（默认）· DetailPage 子页</p>
  <div class="tabs"><a class="tab active">遥测</a><a class="tab">事件</a><a class="tab">日志</a><a class="tab">维护历史</a></div>
</div>
<div>
  <p style="font-size:12px;color:var(--aw-text-3);margin:0 0 8px">Card · 弱化层级，常用于嵌入卡片头</p>
  <div class="tabs-card"><a class="active">基本信息</a><a>固件</a><a>权限</a><a>审计</a></div>
  <div class="surface" style="padding:18px;border-top-left-radius:0;font-size:13px;color:var(--aw-text-2)">基本信息选项卡内容…</div>
</div>
<div>
  <p style="font-size:12px;color:var(--aw-text-3);margin:0 0 8px">Route · 视图切换（不变更 URL，但改变 query 参数）</p>
  <div class="tabs-route"><a class="active">列表</a><a>卡片</a><a>地图</a></div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3>Popconfirm · 轻量二次确认</h3>
    <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 14px;max-width:720px;line-height:1.6">破坏性操作分级：单条删除、就地切换、状态翻转用 <b>Popconfirm</b>（轻、就近、不阻塞），批量删除、不可逆 OTA 推送、删除组织等用 <b>Modal</b>（重、要求用户离开当前焦点）。</p>
    <div style="display:flex;gap:64px;align-items:flex-end;padding:64px 24px;background:var(--aw-fill-1);border-radius:var(--aw-radius);justify-content:center">
<div class="popconfirm">
  <div class="popconfirm-bubble">
    <div><span class="pc-icon">⚠</span>确认删除终端 <strong>终端-上海-001</strong>？此操作不可撤销。</div>
    <div class="pc-actions"><button class="btn btn-sm">取消</button><button class="btn btn-sm btn-danger">确定</button></div>
  </div>
  <button class="btn btn-ghost-danger btn-sm">删除</button>
</div>
<div class="popconfirm">
  <div class="popconfirm-bubble">
    <div><span class="pc-icon" style="color:var(--aw-info)">i</span>确认锁定该终端？锁定后只能由超级管理员解锁。</div>
    <div class="pc-actions"><button class="btn btn-sm">取消</button><button class="btn btn-sm btn-primary">锁定</button></div>
  </div>
  <button class="btn btn-sm">锁定</button>
</div>
    </div>
  </div>
</section>
</div>
`;
