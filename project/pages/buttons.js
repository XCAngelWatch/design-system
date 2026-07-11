/* AngelWatch Design System — page: buttons */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["buttons"] = `
<div class="content">
<section class="section" id="buttons">
  <p class="section-eyebrow"><span data-i18n="buttons:text.001">通用组件 · 按钮</span></p>
  <h2><span data-i18n="buttons:text.002">按钮 Button</span></h2>
  <p class="lede"><span data-i18n="buttons:text.003">主按钮承载页面的主要操作；同一上下文中只允许一个 Primary。Default 用于次级操作，Text/Link 用于行内动作。</span></p>

  <div class="demo-stack">
    <div class="surface">
      <h3 class="card-title"><span data-i18n="buttons:text.004">类型</span></h3>
      <div class="row">
        <button class="btn btn-primary"><span data-i18n="buttons:text.005">主操作</span></button>
        <button class="btn"><span data-i18n="buttons:text.006">次操作</span></button>
        <button class="btn btn-text"><span data-i18n="buttons:text.007">文字按钮</span></button>
        <button class="btn btn-link"><span data-i18n="buttons:text.008">链接按钮</span></button>
        <button class="btn btn-danger"><span data-i18n="buttons:text.009">删除</span></button>
        <button class="btn btn-ghost-danger"><span data-i18n="buttons:text.010">危险次级</span></button>
        <button class="btn btn-primary" disabled><span data-i18n="buttons:text.011">禁用</span></button>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title"><span data-i18n="buttons:text.012">尺寸</span></h3>
      <div class="row">
        <button class="btn btn-primary btn-lg"><span data-i18n="buttons:text.013">大 · 40</span></button>
        <button class="btn btn-primary"><span data-i18n="buttons:text.014">中 · 32</span></button>
        <button class="btn btn-primary btn-sm"><span data-i18n="buttons:text.015">小 · 24</span></button>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title"><span data-i18n="buttons:text.016">使用规则</span></h3>
      <div class="alert info">
        <div class="ico">i</div>
        <div class="content"><strong><span data-i18n="buttons:text.017">每页一个 Primary。</span></strong><span data-i18n="buttons:text.018">当出现「保存 + 取消」时，取消用 Default；当出现「确定 + 删除」时，删除用 ghost-danger。</span></div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="buttons:text.019">主次按钮选型决策表</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="buttons:text.020">页面级 / 区块级 / 行内 三种粒度上一致：每个粒度只允许 1 个 Primary。多个 Primary 等于</span><b><span data-i18n="buttons:text.021">没有</span></b><span data-i18n="buttons:text.022"> Primary —— 用户视线会被分散。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="buttons:text.023">粒度</span></th><th style="width:24%">Primary</th><th style="width:24%">Secondary</th><th><span data-i18n="buttons:text.024">规则</span></th></tr></thead>
      <tbody>
        <tr><td><b><span data-i18n="buttons:text.025">页面级</span></b></td><td><span data-i18n="buttons:text.026">"保存设置" / "发布"</span></td><td><span data-i18n="buttons:text.027">"取消" / "保存草稿"</span></td><td><span data-i18n="buttons:text.028">顶部右上 / 底部右；只 1 个 Primary；取消永远在最左</span></td></tr>
        <tr><td><b><span data-i18n="buttons:text.029">区块级</span></b></td><td><span data-i18n="buttons:text.030">"+ 添加设备"</span></td><td><span data-i18n="buttons:text.031">"导入" / "导出"</span></td><td><span data-i18n="buttons:text.032">List 页区块标题右侧；同一区块只 1 个 Primary</span></td></tr>
        <tr><td><b><span data-i18n="buttons:text.033">行内级</span></b></td><td>—</td><td><span data-i18n="buttons:text.034">"详情" / "编辑" / "..."</span></td><td><span data-i18n="buttons:text.035">表格行操作禁用 Primary；统一 Text / Link 风格 + 折叠下拉</span></td></tr>
        <tr><td><b><span data-i18n="buttons:text.036">Modal 底部</span></b></td><td><span data-i18n="buttons:text.037">"确认" / "下一步"</span></td><td><span data-i18n="buttons:text.038">"取消" / "上一步"</span></td><td><span data-i18n="buttons:text.039">主按钮永远最右；不可逆操作焦点默认在"取消"</span></td></tr>
        <tr><td><b><span data-i18n="buttons:text.040">破坏性</span></b></td><td>—</td><td><span data-i18n="buttons:text.041">"删除" / "解绑" / "重启"</span></td><td><span data-i18n="buttons:text.042">不能用 Primary —— 用 </span><code>btn-danger</code><span data-i18n="buttons:text.043"> 或 </span><code>btn-ghost-danger</code><span data-i18n="buttons:text.044">；不能默认聚焦</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="buttons:text.045">按钮文案约束</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)"><span data-i18n="buttons:text.046">✓ 推荐</span></h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="buttons:text.047">动词 + 对象："+ 添加设备"</span></li>
          <li><span data-i18n="buttons:text.048">批量含数量："删除 28 台设备"</span></li>
          <li><span data-i18n="buttons:text.049">结果导向："保存设置" / "完成创建"</span></li>
          <li><span data-i18n="buttons:text.050">破坏性明示："确认删除"，不写"确定"</span></li>
          <li><span data-i18n="buttons:text.051">详细文案见 </span><a href="#/copywriting" style="color:var(--aw-primary)"><span data-i18n="buttons:text.052">文案规范</span></a></li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)"><span data-i18n="buttons:text.053">✕ 避免</span></h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="buttons:text.054">"确定" / "是" / "OK" 等空话</span></li>
          <li><span data-i18n="buttons:text.055">"批量删除" 而不带数量</span></li>
          <li><span data-i18n="buttons:text.056">"提交" / "确认" 用于表单（用"保存设置"）</span></li>
          <li><span data-i18n="buttons:text.057">同页 ≥ 2 个 Primary</span></li>
          <li><span data-i18n="buttons:text.058">icon-only 按钮无 tooltip 与 aria-label</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
