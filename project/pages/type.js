/* AngelWatch Design System — page: type (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["type"] = `
<div class="content">
<!-- TYPE -->
<section class="section" id="type">
  <p class="section-eyebrow"><span data-i18n="type:t001">设计基础 · 字体</span></p>
  <h2><span data-i18n="type:t002">字体与字号 Typography</span></h2>
  <p class="lede"><span data-i18n="type:t003">字体栈按顺序匹配本机已安装的 Inter / Source Han Sans CN，未命中时回退系统字体；离线时不发出字体网络请求。若需跨机器一致的字体指标，再提交有许可证记录的 WOFF2。下表展示设计字阶参考，不声明额外 CSS 变量；基础字号 14 / 22，字重使用 400 / 500 / 600。</span></p>
  <div class="surface" style="padding:8px 24px">
    <div class="type-row"><div class="meta"><strong>Display</strong>48 / 56 · 600</div><div class="meta">font-size: 48px</div><div style="font-size:48px;font-weight:600;line-height:56px;letter-spacing:-0.8px"><span data-i18n="type:t004">设备总览</span></div></div>
    <div class="type-row"><div class="meta"><strong>H1</strong>30 / 40 · 600</div><div class="meta">font-size: 30px</div><div style="font-size:30px;font-weight:600;line-height:40px;letter-spacing:-0.3px"><span data-i18n="type:t005">终端运维中心</span></div></div>
    <div class="type-row"><div class="meta"><strong>H2</strong>24 / 32 · 600</div><div class="meta">font-size: 24px</div><div style="font-size:24px;font-weight:600;line-height:32px"><span data-i18n="type:t006">激活设备数</span></div></div>
    <div class="type-row"><div class="meta"><strong>H3</strong>20 / 28 · 600</div><div class="meta">font-size: 20px</div><div style="font-size:20px;font-weight:600;line-height:1.4"><span data-i18n="type:t007">设备详情 / Detail</span></div></div>
    <div class="type-row"><div class="meta"><strong>H4</strong>16 / 24 · 500</div><div class="meta">font-size: 16px</div><div style="font-size:16px;font-weight:500;line-height:1.5"><span data-i18n="type:t008">区块标题</span></div></div>
    <div class="type-row"><div class="meta"><strong>Body</strong>14 / 22 · 400</div><div class="meta">font-size: 14px</div><div style="font-size:14px;line-height:22px"><span data-i18n="type:t009">默认正文与表格内容。绝大多数 UI 都用这一档——它是工作主力。</span></div></div>
    <div class="type-row"><div class="meta"><strong>Caption</strong>12 / 18 · 400</div><div class="meta">font-size: 12px</div><div style="font-size:12px;line-height:1.5;color:var(--aw-text-3)"><span data-i18n="type:t010">辅助文字、时间戳、表格元数据。</span></div></div>
    <div class="type-row"><div class="meta"><strong>Mono</strong>12 / 18</div><div class="meta">--aw-font-mono</div><div class="mono" style="font-size:12px;line-height:18px;color:var(--aw-text-2)">DEV-86420075-IMEI · 10.0.42.118</div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="type:t011">与 antd</span> <code>fontSizeHeading*</code> <span data-i18n="type:t012">默认字号对照</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="type:t013">下表对照设计参考字阶与 AntD 默认字号，</span><b><span data-i18n="type:t014">不代表当前消费者配置</span></b> <span data-i18n="type:t015">。消费者已显式覆盖 fontSizeHeading1–5 为 28 / 22 / 18 / 16 / 14px；不能按上游默认 token 名称推断实际字号。后续统一字阶需同步消费者源码与契约。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:22%"><span data-i18n="type:t016">TMS 标签</span></th><th style="width:18%">px / line-height</th><th style="width:32%"><span data-i18n="type:t017">AntD 默认字号参考</span></th><th><span data-i18n="type:t018">说明</span></th></tr></thead>
      <tbody>
        <tr><td><b>Display</b></td><td>48 / 56</td><td><span data-i18n="type:t019">— (antd 无)</span></td><td><span data-i18n="type:t020">仅 Hero / 登录主视觉</span></td></tr>
        <tr><td>—</td><td>38 / 46</td><td><code>fontSizeHeading1</code></td><td><b><span data-i18n="type:t021">TMS 跳过此档</span></b> <span data-i18n="type:t022">(太重, 中后台不需要)</span></td></tr>
        <tr><td><b>H1</b></td><td>30 / 40</td><td><code>fontSizeHeading2</code></td><td><span data-i18n="type:t023">页面级标题 (ListPage / DetailPage)</span></td></tr>
        <tr><td><b>H2</b></td><td>24 / 32</td><td><code>fontSizeHeading3</code></td><td><span data-i18n="type:t024">区块标题</span></td></tr>
        <tr><td><b>H3</b></td><td>20 / 28</td><td><code>fontSizeHeading4</code></td><td><span data-i18n="type:t025">子区块 / 卡片标题</span></td></tr>
        <tr><td><b>H4</b></td><td>16 / 24</td><td><code>fontSizeHeading5</code></td><td><span data-i18n="type:t026">表头 / Tab / 段落小标题</span></td></tr>
        <tr><td><b>Body</b></td><td>14 / 22</td><td><code>fontSize</code></td><td><span data-i18n="type:t027">正文 (antd 默认 ✓)</span></td></tr>
        <tr><td><b>Caption</b></td><td>12 / 18</td><td><code>fontSizeSM</code></td><td><span data-i18n="type:t028">辅助文字 (antd 默认 ✓)</span></td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="type:t029">为什么跳过 38px：</span></b><span data-i18n="type:t030">设计参考保留 30px 页面标题与 48px 展示标题；当前消费者采用更紧凑的 28px 主标题。两者的差异尚待统一，不能把本页对照表当作已完成的消费者映射。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="type:t031">文本层级 · Hierarchy</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="type:t032">沿用 Ant Design v6 的四档文本对比度阶梯。Light 模式用接近不透明黑（</span><code class="mono">#1F2937</code> ≈ <code>rgba(0,0,0,0.88)</code><span data-i18n="type:t033">），Dark 模式直接用</span> <code>rgba(255,255,255,*)</code><span data-i18n="type:t034">。正文至少达到 4.5:1（AA）；大文本至少 3:1。若要求 AAA，普通文本需 7:1、大文本需 4.5:1；大文本阈值见无障碍页。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:22%"><span data-i18n="type:t035">层级</span></th><th style="width:24%">Token</th><th style="width:22%">Light</th><th style="width:22%">Dark</th><th><span data-i18n="type:t036">典型用途</span></th></tr></thead>
      <tbody>
        <tr>
          <td><b><span data-i18n="type:t037">主要文本</span></b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">Primary</div></td>
          <td><code>--aw-text-1</code></td>
          <td><span class="swatch-inline" style="background:#1F2937"></span><code>#1F2937</code></td>
          <td><span class="swatch-inline" style="background:#fff"></span><code>rgba(255,255,255,.92)</code></td>
          <td><span data-i18n="type:t038">标题、表格主列、统计数字</span></td>
        </tr>
        <tr>
          <td><b><span data-i18n="type:t039">次要文本</span></b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">Secondary</div></td>
          <td><code>--aw-text-2</code></td>
          <td><span class="swatch-inline" style="background:#4B5563"></span><code>#4B5563</code></td>
          <td><span class="swatch-inline" style="background:#fff;opacity:.72"></span><code>rgba(255,255,255,.72)</code></td>
          <td><span data-i18n="type:t040">正文、表单说明、表格辅列</span></td>
        </tr>
        <tr>
          <td><b><span data-i18n="type:t041">说明文本</span></b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">Tertiary</div></td>
          <td><code>--aw-text-3</code></td>
          <td><span class="swatch-inline" style="background:#5F6B7A"></span><code>#5F6B7A</code></td>
          <td><span class="swatch-inline" style="background:#fff;opacity:.60"></span><code>rgb(255 255 255 / 60%)</code></td>
          <td><span data-i18n="type:t042">placeholder、时间戳、metadata</span></td>
        </tr>
        <tr>
          <td><b><span data-i18n="type:t043">四级辅助文本</span></b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">Quaternary · AA</div></td>
          <td><code>--aw-text-4</code></td>
          <td><span class="swatch-inline" style="background:#667085"></span><code>#667085</code></td>
          <td><span class="swatch-inline" style="background:#fff;opacity:.52"></span><code>rgb(255 255 255 / 52%)</code></td>
          <td><span data-i18n="type:t044">placeholder、离线设备、过期日期；真正 disabled 使用 --aw-text-disabled</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="type:t045">字重使用约束</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="type:t046">同一界面内字重组合 ≤ 2 档。</span><b>Regular(400)</b><span data-i18n="type:t047">承担主体阅读，</span><b>Medium(500)</b><span data-i18n="type:t048">承担轻量强调（小标题、表头、按钮），</span><b>Semibold(600)</b><span data-i18n="type:t049">仅用于 H1–H3 与 Display。不引入 700+ 字重，避免过重影响阅读节奏。</span></p>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:6px">Regular · 400</div>
        <div style="font-size:14px;line-height:1.7"><span data-i18n="type:t050">默认正文，承担 90% 的文本载荷 —— 表格内容、表单填充、详情字段、说明文案。</span></div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:6px">Medium · 500</div>
        <div style="font-size:14px;font-weight:500;line-height:1.7"><span data-i18n="type:t051">轻量强调 —— H4 区块标题、表头、按钮文字、Tab 当前项、统计数字 label。</span></div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:6px">Semibold · 600</div>
        <div style="font-size:14px;font-weight:600;line-height:1.7"><span data-i18n="type:t052">仅用于 H1–H3 与 Display。在小字号（≤14px）上禁用，会显得拥挤、降低识别度。</span></div>
      </div>
    </div>
  </div>
</section>
</div>
`;
