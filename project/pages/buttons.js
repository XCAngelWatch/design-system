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
</section>
</div>
`;
