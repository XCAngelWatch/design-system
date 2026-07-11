/* AngelWatch Design System — page: drawer (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["drawer"] = `
<div class="content">
<section class="section" id="drawer">
  <p class="section-eyebrow"><span data-i18n="drawer:text.001">通用组件 · 抽屉</span></p>
  <h2><span data-i18n="drawer:text.002">抽屉 Drawer</span></h2>
  <p class="lede"><span data-i18n="drawer:text.003">从右侧滑入，承载快速编辑、详情预览。</span><strong><span data-i18n="drawer:text.004">比 Modal 更适合 TMS 高频操作</span></strong><span data-i18n="drawer:text.005">——保留页面上下文，可继续看到列表。默认 480px 宽。</span></p>
  <div style="background:var(--aw-fill-1);border-radius:6px;padding:32px;display:flex;justify-content:flex-end">
    <div class="drawer-demo">
<div class="head"><h4><span data-i18n="drawer:text.006">编辑设备 · 终端-上海-001</span></h4><span style="cursor:pointer;font-size:18px;color:var(--aw-text-3)">×</span></div>
<div class="body">
  <div class="form-demo">
    <div class="form-row"><div class="lbl"><span class="req" style="color:var(--aw-danger)">*</span><span data-i18n="drawer:text.007">设备名称</span></div><div><input class="input" value="终端-上海-001" data-i18n-value="drawer:attr.008.value" /></div></div>
    <div class="form-row"><div class="lbl"><span data-i18n="drawer:text.009">所属机构</span></div><div><div class="select" style="width:100%"><span><span data-i18n="drawer:text.010">上海 / 黄浦营业厅</span></span></div></div></div>
    <div class="form-row"><div class="lbl"><span data-i18n="drawer:text.011">分组标签</span></div><div><div class="row"><span class="tag tag-blue"><span data-i18n="drawer:text.012">VIP 网点</span></span><span class="tag"><span data-i18n="drawer:text.013">实验组</span></span><button class="btn btn-text btn-sm"><span data-i18n="drawer:text.014">+ 添加</span></button></div></div></div>
    <div class="form-row"><div class="lbl"><span data-i18n="drawer:text.015">允许远程</span></div><div class="row"><span class="switch is-on"></span><span style="font-size:12px;color:var(--aw-text-3)"><span data-i18n="drawer:text.016">远程控制 + 远程截屏</span></span></div></div>
    <div class="form-row"><div class="lbl"><span data-i18n="drawer:text.017">备注</span></div><div><input class="input" placeholder="可选" data-i18n-placeholder="drawer:attr.018.placeholder" /></div></div>
  </div>
</div>
<div class="foot"><button class="btn"><span data-i18n="drawer:text.019">取消</span></button><button class="btn btn-primary"><span data-i18n="drawer:text.020">保存</span></button></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="drawer:text.021">Modal vs Drawer · 取舍表</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="drawer:text.022">两者都能"在上下文之上叠层"，但触发条件、信息密度、用户姿态不同。</span></p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:120px"><span data-i18n="drawer:text.023">维度</span></th><th><span data-i18n="drawer:text.024">Modal · 弹窗</span></th><th><span data-i18n="drawer:text.025">Drawer · 抽屉</span></th></tr></thead>
        <tbody>
          <tr><td><span data-i18n="drawer:text.026">使用场景</span></td><td><span data-i18n="drawer:text.027">阻塞性确认、单步操作、关键决策</span></td><td><span data-i18n="drawer:text.028">详情查看、长表单编辑、与列表并行参考</span></td></tr>
          <tr><td><span data-i18n="drawer:text.029">用户姿态</span></td><td><span data-i18n="drawer:text.030">必须先处理才能继续主流程</span></td><td><span data-i18n="drawer:text.031">可关闭随时回到列表</span></td></tr>
          <tr><td><span data-i18n="drawer:text.032">宽度</span></td><td><span data-i18n="drawer:text.033">360 / 480 / 600 / 800（按内容）</span></td><td><span data-i18n="drawer:text.034">320 (S) / 480 (M, 默认) / 720 (L) / 100% (XL)</span></td></tr>
          <tr><td><span data-i18n="drawer:text.035">遮罩</span></td><td><span data-i18n="drawer:text.036">必有，深色（rgba(0,0,0,0.45)），点击外部不关闭</span></td><td><span data-i18n="drawer:text.037">有/无可选，浅色（rgba(0,0,0,0.18)），点击外部默认关闭</span></td></tr>
          <tr><td><span data-i18n="drawer:text.038">承载内容</span></td><td><span data-i18n="drawer:text.039">&lt; 2 屏，避免内部滚动</span></td><td><span data-i18n="drawer:text.040">可超过 2 屏，body 内滚动</span></td></tr>
          <tr><td><span data-i18n="drawer:text.041">动作位置</span></td><td><span data-i18n="drawer:text.042">底部右对齐（取消 + 主操作）</span></td><td><span data-i18n="drawer:text.043">底部 sticky 或顶部右上角</span></td></tr>
          <tr><td><span data-i18n="drawer:text.044">典型例子</span></td><td><span data-i18n="drawer:text.045">删除确认、批量推送、状态切换</span></td><td><span data-i18n="drawer:text.046">编辑设备、查看日志详情、设置面板</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="drawer:text.047">判断口诀：</span></strong><span data-i18n="drawer:text.048">"用户需要边看边做" → Drawer；"用户必须现在就决定" → Modal。如果还在犹豫，默认 Drawer（保留上下文是 TMS 高频操作的核心需求）。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="drawer:text.049">Drawer 宽度变体</span></h3>
    <div class="row" style="gap:10px;flex-wrap:wrap">
      <span class="tag-meta">S · 320px <small><span data-i18n="drawer:text.050">右上角设置 / 通知中心</span></small></span>
      <span class="tag-meta"><span data-i18n="drawer:text.051">M · 480px (默认) </span><small><span data-i18n="drawer:text.052">编辑表单 / 详情查看</span></small></span>
      <span class="tag-meta">L · 720px <small><span data-i18n="drawer:text.053">含表格 / 长表单分组</span></small></span>
      <span class="tag-meta">XL · 100% <small><span data-i18n="drawer:text.054">沉浸式编辑（OTA 策略 / 流程编排）</span></small></span>
    </div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong><span data-i18n="drawer:text.055">多 Drawer 嵌套：</span></strong><span data-i18n="drawer:text.056">原则不允许。若必须从 Drawer 内打开新 Drawer（如选择"机构"），第二层用 Modal 而非 Drawer，避免视觉栈混乱。</span></div></div>
  </div>


  <div class="subsection">
    <h3><span data-i18n="drawer:text.057">业务抽屉模式 · 详情、编辑、远程控制</span></h3>
    <table class="blueprint-table">
      <thead><tr><th><span data-i18n="drawer:text.058">抽屉类型</span></th><th><span data-i18n="drawer:text.059">宽度</span></th><th><span data-i18n="drawer:text.060">典型内容</span></th><th><span data-i18n="drawer:text.061">关闭规则</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="drawer:text.062">快速详情</span></td><td>480px</td><td><span data-i18n="drawer:text.063">设备基础信息、最近心跳、当前状态、操作入口</span></td><td><span data-i18n="drawer:text.064">可 Esc / 点击遮罩关闭，不产生数据变更。</span></td></tr>
        <tr><td><span data-i18n="drawer:text.065">编辑表单</span></td><td>480-720px</td><td><span data-i18n="drawer:text.066">设备、分组、应用分类、参数模板的创建与修改</span></td><td><span data-i18n="drawer:text.067">有未保存变更时关闭前二次确认。</span></td></tr>
        <tr><td><span data-i18n="drawer:text.068">远程控制</span></td><td><span data-i18n="drawer:text.069">720px 或全屏</span></td><td><span data-i18n="drawer:text.070">应用程序、设备信息、定位、轨迹、上传进度</span></td><td><span data-i18n="drawer:text.071">离线设备禁用入口；进行中任务关闭后转入任务详情。</span></td></tr>
        <tr><td><span data-i18n="drawer:text.072">分配设备</span></td><td>720px</td><td><span data-i18n="drawer:text.073">树筛选、表格勾选、导入设备、已选列表</span></td><td><span data-i18n="drawer:text.074">提交前展示已选数量，失败进入部分成功 Result。</span></td></tr>
      </tbody>
    </table>
  </div>
  <div class="subsection">
    <h3><span data-i18n="drawer:text.075">反例</span></h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong><span data-i18n="drawer:text.076">不要用 Drawer 做"删除确认"：</span></strong><span data-i18n="drawer:text.077">动作太轻量，且需要阻塞决策。改 Modal 或 Popconfirm。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="drawer:text.078">不要在 Modal 内嵌入 Drawer：</span></strong><span data-i18n="drawer:text.079">层叠交互会让用户迷失返回路径。</span></div></div>
  </div>
  <div class="subsection"><h3><span data-i18n="common:component.usedBy">页面蓝图使用场景</span></h3><div class="blueprint-notes"><span><a href="#/detail-page">DetailPage</a></span><span><a href="#/device-center-page">DeviceCenterPage</a></span><span><a href="#/map-page">MapPage</a></span><span><a href="#/service-page">ServicePage</a></span></div></div>
</section>
</div>
`;
