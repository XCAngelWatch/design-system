/* AngelWatch Design System — page: buttons */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["buttons"] = `
<div class="content">
<section class="section" id="buttons">
  <p class="section-eyebrow">Components · 按钮</p>
  <h2>Buttons</h2>
  <p class="lede">主按钮承载页面的主要操作；同一上下文中只允许一个 Primary。Default 用于次级操作，Text/Link 用于行内动作。</p>

  <div class="demo-stack">
    <div class="surface">
      <h3 class="card-title">类型</h3>
      <div class="row">
        <button class="btn btn-primary">主操作</button>
        <button class="btn">次操作</button>
        <button class="btn btn-text">文字按钮</button>
        <button class="btn btn-link">链接按钮</button>
        <button class="btn btn-danger">删除</button>
        <button class="btn btn-ghost-danger">危险次级</button>
        <button class="btn btn-primary" disabled>禁用</button>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">尺寸</h3>
      <div class="row">
        <button class="btn btn-primary btn-lg">大 · 40</button>
        <button class="btn btn-primary">中 · 32</button>
        <button class="btn btn-primary btn-sm">小 · 24</button>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">使用规则</h3>
      <div class="alert info">
        <div class="ico">i</div>
        <div class="content"><strong>每页一个 Primary。</strong>当出现「保存 + 取消」时，取消用 Default；当出现「确定 + 删除」时，删除用 ghost-danger。</div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>主次按钮选型决策表</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">页面级 / 区块级 / 行内 三种粒度上一致：每个粒度只允许 1 个 Primary。多个 Primary 等于<b>没有</b> Primary —— 用户视线会被分散。</p>
    <table class="map-table">
      <thead><tr><th style="width:18%">粒度</th><th style="width:24%">Primary</th><th style="width:24%">Secondary</th><th>规则</th></tr></thead>
      <tbody>
        <tr><td><b>页面级</b></td><td>"保存设置" / "发布"</td><td>"取消" / "保存草稿"</td><td>顶部右上 / 底部右；只 1 个 Primary；取消永远在最左</td></tr>
        <tr><td><b>区块级</b></td><td>"+ 添加设备"</td><td>"导入" / "导出"</td><td>List 页区块标题右侧；同一区块只 1 个 Primary</td></tr>
        <tr><td><b>行内级</b></td><td>—</td><td>"详情" / "编辑" / "..."</td><td>表格行操作禁用 Primary；统一 Text / Link 风格 + 折叠下拉</td></tr>
        <tr><td><b>Modal 底部</b></td><td>"确认" / "下一步"</td><td>"取消" / "上一步"</td><td>主按钮永远最右；不可逆操作焦点默认在"取消"</td></tr>
        <tr><td><b>破坏性</b></td><td>—</td><td>"删除" / "解绑" / "重启"</td><td>不能用 Primary —— 用 <code>btn-danger</code> 或 <code>btn-ghost-danger</code>；不能默认聚焦</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>按钮文案约束</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ 推荐</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>动词 + 对象："+ 添加设备"</li>
          <li>批量含数量："删除 28 台设备"</li>
          <li>结果导向："保存设置" / "完成创建"</li>
          <li>破坏性明示："确认删除"，不写"确定"</li>
          <li>详细文案见 <a href="#/copywriting" style="color:var(--aw-primary)">文案规范</a></li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ 避免</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>"确定" / "是" / "OK" 等空话</li>
          <li>"批量删除" 而不带数量</li>
          <li>"提交" / "确认" 用于表单（用"保存设置"）</li>
          <li>同页 ≥ 2 个 Primary</li>
          <li>icon-only 按钮无 tooltip 与 aria-label</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
