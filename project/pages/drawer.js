/* AngelWatch Design System — page: drawer (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["drawer"] = `
<div class="content">
<section class="section" id="drawer">
  <p class="section-eyebrow">Components · 抽屉</p>
  <h2>Drawer</h2>
  <p class="lede">从右侧滑入，承载快速编辑、详情预览。<strong>比 Modal 更适合 TMS 高频操作</strong>——保留页面上下文，可继续看到列表。默认 480px 宽。</p>
  <div style="background:var(--aw-fill-1);border-radius:6px;padding:32px;display:flex;justify-content:flex-end">
    <div class="drawer-demo">
<div class="head"><h4>编辑设备 · 终端-上海-001</h4><span style="cursor:pointer;font-size:18px;color:var(--aw-text-3)">×</span></div>
<div class="body">
  <div class="form-demo">
    <div class="form-row"><div class="lbl"><span class="req" style="color:var(--aw-danger)">*</span>设备名称</div><div><input class="input" value="终端-上海-001" /></div></div>
    <div class="form-row"><div class="lbl">所属机构</div><div><div class="select" style="width:100%"><span>上海 / 黄浦营业厅</span></div></div></div>
    <div class="form-row"><div class="lbl">分组标签</div><div><div class="row"><span class="tag tag-blue">VIP 网点</span><span class="tag">实验组</span><button class="btn btn-text btn-sm">+ 添加</button></div></div></div>
    <div class="form-row"><div class="lbl">允许远程</div><div class="row"><span class="switch is-on"></span><span style="font-size:12px;color:var(--aw-text-3)">远程控制 + 远程截屏</span></div></div>
    <div class="form-row"><div class="lbl">备注</div><div><input class="input" placeholder="可选" /></div></div>
  </div>
</div>
<div class="foot"><button class="btn">取消</button><button class="btn btn-primary">保存</button></div>
    </div>
  </div>

  <div class="subsection">
    <h3>Modal vs Drawer · 取舍表</h3>
    <p class="lede" style="margin-bottom:12px">两者都能"在上下文之上叠层"，但触发条件、信息密度、用户姿态不同。</p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:120px">维度</th><th>Modal · 弹窗</th><th>Drawer · 抽屉</th></tr></thead>
        <tbody>
          <tr><td>使用场景</td><td>阻塞性确认、单步操作、关键决策</td><td>详情查看、长表单编辑、与列表并行参考</td></tr>
          <tr><td>用户姿态</td><td>必须先处理才能继续主流程</td><td>可关闭随时回到列表</td></tr>
          <tr><td>宽度</td><td>360 / 480 / 600 / 800（按内容）</td><td>320 (S) / 480 (M, 默认) / 720 (L) / 100% (XL)</td></tr>
          <tr><td>遮罩</td><td>必有，深色（rgba(0,0,0,0.45)），点击外部不关闭</td><td>有/无可选，浅色（rgba(0,0,0,0.18)），点击外部默认关闭</td></tr>
          <tr><td>承载内容</td><td>&lt; 2 屏，避免内部滚动</td><td>可超过 2 屏，body 内滚动</td></tr>
          <tr><td>动作位置</td><td>底部右对齐（取消 + 主操作）</td><td>底部 sticky 或顶部右上角</td></tr>
          <tr><td>典型例子</td><td>删除确认、批量推送、状态切换</td><td>编辑设备、查看日志详情、设置面板</td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong>判断口诀：</strong>"用户需要边看边做" → Drawer；"用户必须现在就决定" → Modal。如果还在犹豫，默认 Drawer（保留上下文是 TMS 高频操作的核心需求）。</div></div>
  </div>

  <div class="subsection">
    <h3>Drawer 宽度变体</h3>
    <div class="row" style="gap:10px;flex-wrap:wrap">
      <span class="tag-meta">S · 320px <small>右上角设置 / 通知中心</small></span>
      <span class="tag-meta">M · 480px (默认) <small>编辑表单 / 详情查看</small></span>
      <span class="tag-meta">L · 720px <small>含表格 / 长表单分组</small></span>
      <span class="tag-meta">XL · 100% <small>沉浸式编辑（OTA 策略 / 流程编排）</small></span>
    </div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong>多 Drawer 嵌套：</strong>原则不允许。若必须从 Drawer 内打开新 Drawer（如选择"机构"），第二层用 Modal 而非 Drawer，避免视觉栈混乱。</div></div>
  </div>

  <div class="subsection">
    <h3>反例</h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong>不要用 Drawer 做"删除确认"：</strong>动作太轻量，且需要阻塞决策。改 Modal 或 Popconfirm。</div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>不要在 Modal 内嵌入 Drawer：</strong>层叠交互会让用户迷失返回路径。</div></div>
  </div>
</section>
</div>
`;
