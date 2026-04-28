/* AngelWatch Design System — page: type (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["type"] = `
<div class="content">
<!-- TYPE -->
<section class="section" id="type">
  <p class="section-eyebrow">Foundations · 字体</p>
  <h2>Typography</h2>
  <p class="lede">Inter 拉丁字符 + Source Han Sans CN 中文字符，自托管 woff2，离线可用。8 级字阶，4-pt 对齐。基础字号 14 / 22 与 Ant Design v6 一致；字重严格控制在三档（Regular 400 / Medium 500 / Semibold 600），同一界面通常只用 Regular + Medium 两档。</p>
  <div class="surface" style="padding:8px 24px">
    <div class="type-row"><div class="meta"><strong>Display</strong>48 / 56 · 600</div><div class="meta">--aw-fs-48</div><div style="font-size:48px;font-weight:600;line-height:1.1;letter-spacing:-0.8px">设备总览</div></div>
    <div class="type-row"><div class="meta"><strong>H1</strong>30 / 40 · 600</div><div class="meta">--aw-fs-30</div><div style="font-size:30px;font-weight:600;line-height:1.3;letter-spacing:-0.3px">Fleet Operations</div></div>
    <div class="type-row"><div class="meta"><strong>H2</strong>24 / 32 · 600</div><div class="meta">--aw-fs-24</div><div style="font-size:24px;font-weight:600;line-height:1.3">激活设备数</div></div>
    <div class="type-row"><div class="meta"><strong>H3</strong>20 / 28 · 600</div><div class="meta">--aw-fs-20</div><div style="font-size:20px;font-weight:600;line-height:1.4">设备详情 / Detail</div></div>
    <div class="type-row"><div class="meta"><strong>H4</strong>16 / 24 · 500</div><div class="meta">--aw-fs-16</div><div style="font-size:16px;font-weight:500;line-height:1.5">区块标题</div></div>
    <div class="type-row"><div class="meta"><strong>Body</strong>14 / 22 · 400</div><div class="meta">--aw-fs-14</div><div style="font-size:14px;line-height:1.6">默认正文与表格内容。绝大多数 UI 都用这一档——它是工作主力。</div></div>
    <div class="type-row"><div class="meta"><strong>Caption</strong>12 / 18 · 400</div><div class="meta">--aw-fs-12</div><div style="font-size:12px;line-height:1.5;color:var(--aw-text-3)">辅助文字、时间戳、表格元数据。</div></div>
    <div class="type-row"><div class="meta"><strong>Mono</strong>12 / 18</div><div class="meta">--aw-font-mono</div><div class="mono" style="font-size:13px;line-height:1.5;color:var(--aw-text-2)">DEV-86420075-IMEI · 10.0.42.118</div></div>
  </div>

  <div class="subsection">
    <h3>与 antd <code>fontSizeHeading*</code> 的命名映射</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">TMS 的 Heading 标签与 antd 内置 token 名<b>错位一档</b> —— 设计师在 antd Figma library 取 H1 token 拿到 38px，与 TMS 的 H1 (30px) 不同。下表是对照表，避免设计 / 前端用同一术语指不同 px。</p>
    <table class="map-table">
      <thead><tr><th style="width:22%">TMS 标签</th><th style="width:18%">px / line-height</th><th style="width:32%">对应 antd token</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><b>Display</b></td><td>48 / 56</td><td>— (antd 无)</td><td>仅 Hero / 登录主视觉</td></tr>
        <tr><td>—</td><td>38 / 46</td><td><code>fontSizeHeading1</code></td><td><b>TMS 跳过此档</b> (太重, 中后台不需要)</td></tr>
        <tr><td><b>H1</b></td><td>30 / 40</td><td><code>fontSizeHeading2</code></td><td>页面级标题 (ListPage / DetailPage)</td></tr>
        <tr><td><b>H2</b></td><td>24 / 32</td><td><code>fontSizeHeading3</code></td><td>区块标题</td></tr>
        <tr><td><b>H3</b></td><td>20 / 28</td><td><code>fontSizeHeading4</code></td><td>子区块 / 卡片标题</td></tr>
        <tr><td><b>H4</b></td><td>16 / 24</td><td><code>fontSizeHeading5</code></td><td>表头 / Tab / 段落小标题</td></tr>
        <tr><td><b>Body</b></td><td>14 / 22</td><td><code>fontSize</code></td><td>正文 (antd 默认 ✓)</td></tr>
        <tr><td><b>Caption</b></td><td>12 / 18</td><td><code>fontSizeSM</code></td><td>辅助文字 (antd 默认 ✓)</td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">为什么跳过 38px：</b>antd 默认 H1=38px 偏 marketing-style；TMS 中后台运维场景 30px 已经足够"页面级"识别度，再大反而压缩内容区。Figma 端应在 token 表显示"TMS H1 (30px) ≡ antd fontSizeHeading2"</p>
  </div>

  <div class="subsection">
    <h3>文本层级 · Hierarchy</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">沿用 Ant Design v6 的四档文本对比度阶梯。Light 模式用接近不透明黑（<code class="mono">#1F2937</code> ≈ <code>rgba(0,0,0,0.88)</code>），Dark 模式直接用 <code>rgba(255,255,255,*)</code>。所有正文文本对底色 ≥ 4.5:1（AA），主要标题 ≥ 7:1（AAA）—— stylelint 自动校验，不达标无法合并。</p>
    <table class="map-table">
      <thead><tr><th style="width:22%">层级</th><th style="width:24%">Token</th><th style="width:22%">Light</th><th style="width:22%">Dark</th><th>典型用途</th></tr></thead>
      <tbody>
        <tr>
          <td><b>主要文本</b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">Primary · 88%</div></td>
          <td><code>--aw-text-1</code></td>
          <td><span class="swatch-inline" style="background:#1F2937"></span><code>#1F2937</code></td>
          <td><span class="swatch-inline" style="background:#fff"></span><code>rgba(255,255,255,.92)</code></td>
          <td>标题、表格主列、统计数字</td>
        </tr>
        <tr>
          <td><b>次要文本</b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">Secondary · 65%</div></td>
          <td><code>--aw-text-2</code></td>
          <td><span class="swatch-inline" style="background:#4B5563"></span><code>#4B5563</code></td>
          <td><span class="swatch-inline" style="background:#fff;opacity:.72"></span><code>rgba(255,255,255,.72)</code></td>
          <td>正文、表单说明、表格辅列</td>
        </tr>
        <tr>
          <td><b>说明文本</b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">Tertiary · 45%</div></td>
          <td><code>--aw-text-3</code></td>
          <td><span class="swatch-inline" style="background:#6B7280"></span><code>#6B7280</code></td>
          <td><span class="swatch-inline" style="background:#fff;opacity:.52"></span><code>rgba(255,255,255,.52)</code></td>
          <td>placeholder、时间戳、metadata</td>
        </tr>
        <tr>
          <td><b>禁用文本</b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">Disabled · 25%</div></td>
          <td><code>--aw-text-4</code></td>
          <td><span class="swatch-inline" style="background:#9CA3AF"></span><code>#9CA3AF</code></td>
          <td><span class="swatch-inline" style="background:#fff;opacity:.32"></span><code>rgba(255,255,255,.32)</code></td>
          <td>disabled 状态、离线设备、过期日期</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>字重使用约束</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">同一界面内字重组合 ≤ 2 档。<b>Regular（400）</b>承担主体阅读，<b>Medium（500）</b>承担轻量强调（小标题、表头、按钮），<b>Semibold（600）</b>仅用于 H1–H3 与 Display。不引入 700+ 字重，避免过重影响阅读节奏。</p>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:6px">Regular · 400</div>
        <div style="font-size:14px;line-height:1.7">默认正文，承担 90% 的文本载荷 —— 表格内容、表单填充、详情字段、说明文案。</div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:6px">Medium · 500</div>
        <div style="font-size:14px;font-weight:500;line-height:1.7">轻量强调 —— H4 区块标题、表头、按钮文字、Tab 当前项、统计数字 label。</div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:6px">Semibold · 600</div>
        <div style="font-size:14px;font-weight:600;line-height:1.7">仅用于 H1–H3 与 Display。在小字号（≤14px）上禁用，会显得拥挤、降低识别度。</div>
      </div>
    </div>
  </div>
</section>
</div>
`;
