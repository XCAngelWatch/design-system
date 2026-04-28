/* AngelWatch Design System — page: radius (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["radius"] = `
<div class="content">
<!-- RADIUS / SHADOW -->
<section class="section" id="radius">
  <p class="section-eyebrow">Foundations · 圆角与阴影</p>
  <h2>Radius &amp; Elevation</h2>
  <p class="lede">单一 6px 圆角作为系统默认。三档投影；保持克制——界面应是平的，仅在浮层上承担可见的高度差。</p>
  <div class="subsection">
    <h3>圆角</h3>
    <div class="radius-grid">
<div class="radius-tile"><div class="radius-shape" style="border-radius:4px"></div><div class="name">SM</div><div class="label">4px</div></div>
<div class="radius-tile"><div class="radius-shape" style="border-radius:6px"></div><div class="name">Default</div><div class="label">6px</div></div>
<div class="radius-tile"><div class="radius-shape" style="border-radius:8px"></div><div class="name">LG</div><div class="label">8px</div></div>
<div class="radius-tile"><div class="radius-shape" style="border-radius:50%"></div><div class="name">Circle</div><div class="label">50%</div></div>
    </div>
  </div>
  <div class="subsection">
    <h3>阴影 · 4 层 + 4 方向</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">阴影表达"高度差"。Layer 0 = 平面（仅 1px border）；Layer 1-3 = 离用户越来越近。方向跟随光源，固定面板向相反方向投阴影。所有 token 由两层阴影叠加生成（near + far），更柔和。</p>
    <div class="shadow-grid">
      <div class="shadow-tile" style="box-shadow:none;border:1px solid var(--aw-border-2)"><div class="name">Layer 0</div><div class="hex">flush / inputs</div></div>
      <div class="shadow-tile" style="box-shadow:var(--aw-shadow-1)"><div class="name">Layer 1</div><div class="hex">cards / table</div></div>
      <div class="shadow-tile" style="box-shadow:var(--aw-shadow-2)"><div class="name">Layer 2</div><div class="hex">popovers / dropdown</div></div>
      <div class="shadow-tile" style="box-shadow:var(--aw-shadow-3)"><div class="name">Layer 3</div><div class="hex">modals / drawers</div></div>
    </div>
  </div>

  <div class="subsection">
    <h3>方向变体 · Directional Shadow</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">默认所有阴影向下（光源在上）。固定面板需要按朝向反向投影 —— 浮于内容之上的边界感。</p>
    <div class="shadow-grid">
      <div class="shadow-tile" style="box-shadow:0 -4px 12px rgba(15,23,42,.08)"><div class="name">向上</div><div class="hex">底部 toolbar / 分页</div></div>
      <div class="shadow-tile" style="box-shadow:0 4px 12px rgba(15,23,42,.08)"><div class="name">向下 · 默认</div><div class="hex">顶部 navbar / 卡片</div></div>
      <div class="shadow-tile" style="box-shadow:4px 0 12px rgba(15,23,42,.08)"><div class="name">向右</div><div class="hex">左 sidebar / 抽屉</div></div>
      <div class="shadow-tile" style="box-shadow:-4px 0 12px rgba(15,23,42,.08)"><div class="name">向左</div><div class="hex">右 sidebar / 抽屉 / 固定列</div></div>
    </div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">Dark 模式：</b>纯黑 + alpha 提到 0.4-0.6。三档同步覆盖在 <code>tokens.css</code> 的 <code>[data-theme="dark"]</code> 选择器下。</p>
  </div>
</section>
</div>
`;
