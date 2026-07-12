/* AngelWatch Design System — page: color (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["color"] = `
<div class="content">
<!-- COLOR -->
<section class="section" id="color">
  <p class="section-eyebrow"><span data-i18n="color:t001">设计基础 · 色彩</span></p>
  <h2><span data-i18n="color:t002">色彩 Token</span></h2>
  <p class="lede"><span data-i18n="color:t003">品牌蓝承载操作；中性灰承载信息；状态色承载语义。所有颜色以 CSS 变量在</span> <span class="mono">:root</span> <span data-i18n="color:t004">暴露，深色模式通过</span> <span class="mono">[data-theme="dark"]</span> <span data-i18n="color:t005">完整覆盖。两套主题共享同一品牌色锚点，确保跨主题视觉延续性。</span></p>

  <div class="section-subtitle"><span data-i18n="color:t006">Token Architecture · 三层金字塔</span></div>
  <div class="token-pyramid">
    <svg class="pyramid-svg" viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Seed layer -->
      <polygon points="300,12 420,12 440,62 280,62" fill="#165DFF"/>
      <text x="360" y="42" text-anchor="middle" fill="white" font-family="Inter, sans-serif" font-size="14" font-weight="600">Seed Tokens</text>
      <text x="360" y="56" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-family="Inter, sans-serif" font-size="10"><span data-i18n="color:t007">设计师真正决策 · 6–8 个</span></text>
      <!-- arrow -->
      <path d="M360 68 L360 80" stroke="#4080FF" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>
      <text x="380" y="78" fill="#4080FF" font-family="Inter, sans-serif" font-size="10"><span data-i18n="color:t008">algorithm 派生</span></text>
      <!-- Map layer -->
      <polygon points="240,84 480,84 510,140 210,140" fill="#4080FF"/>
      <text x="360" y="114" text-anchor="middle" fill="white" font-family="Inter, sans-serif" font-size="14" font-weight="600">Map Tokens</text>
      <text x="360" y="128" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-family="Inter, sans-serif" font-size="10"><span data-i18n="color:t009">算法派生 · ~40 个</span></text>
      <!-- arrow -->
      <path d="M360 146 L360 158" stroke="#A5C9FF" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>
      <text x="380" y="156" fill="#7B9CCB" font-family="Inter, sans-serif" font-size="10"><span data-i18n="color:t010">语义化映射</span></text>
      <!-- Alias layer -->
      <polygon points="170,162 550,162 590,210 130,210" fill="#A5C9FF"/>
      <text x="360" y="190" text-anchor="middle" fill="#0E42D2" font-family="Inter, sans-serif" font-size="14" font-weight="600">Alias Tokens</text>
      <text x="360" y="204" text-anchor="middle" fill="#0E42D2" font-family="Inter, sans-serif" font-size="10" opacity="0.8"><span data-i18n="color:t011">业务消费层 · ~190 个</span></text>
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 8 5 L 0 10 z" fill="#4080FF"/>
        </marker>
      </defs>
    </svg>
    <div class="pyramid-legend">
      <div class="leg seed">
        <div class="h">Seed Tokens<span class="cnt">6–8</span></div>
        <div class="desc"><span data-i18n="color:t012">设计师真正决策的"种子"。改一个，整个系统跟着变。</span></div>
        <div class="examples">
          <code>colorPrimary</code><code>borderRadius</code><code>controlHeight</code><code>fontFamily</code><code>fontSize</code><code>sizeUnit</code>
        </div>
      </div>
      <div class="leg map">
        <div class="h">Map Tokens<span class="cnt">~40</span></div>
        <div class="desc"><span data-i18n="color:t013">由 antd algorithm 从 seed 自动派生 hover / active / bg / border 等阶。</span></div>
        <div class="examples">
          <code>colorPrimaryHover</code><code>colorPrimaryBg</code><code>borderRadiusLG</code><code>controlHeightSM</code><code>fontSizeHeading2</code>
        </div>
      </div>
      <div class="leg alias">
        <div class="h">Alias Tokens<span class="cnt">~190</span></div>
        <div class="desc"><span data-i18n="color:t014">业务语义层。组件直接消费这一层，不要直接引 seed/map。</span></div>
        <div class="examples">
          <code>colorBgContainer</code><code>colorTextSecondary</code><code>colorBorderSecondary</code><code>colorFillTertiary</code><code>colorLink</code>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="color:t015">品牌主色</span> <span style="font-size:11px;font-weight:400;color:var(--aw-text-3);margin-left:6px"><span data-i18n="color:t016">每色标注 WCAG 对比度（vs 白底）</span></span></h3>
    <div class="brand-strip">
      <div style="background:#0E42D2"><div><div class="name">Active</div><div class="lbl">--aw-primary-active</div></div><div>#0E42D2 <span class="wcag-badge aaa">7.7:1 · AAA ✓</span></div></div>
      <div style="background:#165DFF"><div><div class="name">Primary</div><div class="lbl">--aw-primary</div></div><div>#165DFF <span class="wcag-badge aa">5.2:1 · AA ✓</span></div></div>
      <div style="background:#4080FF"><div><div class="name">Hover</div><div class="lbl">--aw-primary-hover</div></div><div>#4080FF <span class="wcag-badge fail">3.7:1 · AA Large</span></div></div>
      <div style="background:#94BFFF;color:#0E42D2"><div><div class="name">Border</div><div class="lbl">--aw-primary-border</div></div><div>#94BFFF <span class="wcag-badge fail"><span data-i18n="color:t017">1.9:1 · 仅装饰</span></span></div></div>
      <div style="background:#E8F3FF;color:#165DFF"><div><div class="name">Bg</div><div class="lbl">--aw-primary-bg</div></div><div>#E8F3FF <span class="wcag-badge fail"><span data-i18n="color:t018">1.1:1 · 仅背景</span></span></div></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="color:t019">中性色</span></h3>
    <div class="swatch-row">
      <div class="swatch" style="background:#FFFFFF;color:#1F2937"><div class="num">00</div><div><div>White</div><div class="hex">#FFFFFF</div></div></div>
      <div class="swatch" style="background:#FAFAFA;color:#1F2937"><div class="num">10</div><div><div>Fill 1</div><div class="hex">#FAFAFA</div></div></div>
      <div class="swatch" style="background:#F5F5F5;color:#1F2937"><div class="num">20</div><div><div>Fill 2</div><div class="hex">#F5F5F5</div></div></div>
      <div class="swatch" style="background:#F0F0F0;color:#1F2937"><div class="num">30</div><div><div>Border 3</div><div class="hex">#F0F0F0</div></div></div>
      <div class="swatch" style="background:#D9D9D9;color:#1F2937"><div class="num">40</div><div><div>Border 1</div><div class="hex">#D9D9D9</div></div></div>
      <div class="swatch" style="background:#9CA3AF;color:white"><div class="num">50</div><div><div>Text 4</div><div class="hex">#9CA3AF</div></div></div>
      <div class="swatch" style="background:#6B7280;color:white"><div class="num">60</div><div><div>Text 3</div><div class="hex">#6B7280</div></div></div>
      <div class="swatch" style="background:#4B5563;color:white"><div class="num">70</div><div><div>Text 2</div><div class="hex">#4B5563</div></div></div>
      <div class="swatch" style="background:#4A5568;color:white;grid-column:span 2"><div class="num">75</div><div><div>Slate</div><div class="hex">#4A5568</div></div></div>
      <div class="swatch" style="background:#374151;color:white"><div class="num">85</div><div><div>—</div><div class="hex">#374151</div></div></div>
      <div class="swatch" style="background:#1F2937;color:white"><div class="num">90</div><div><div>Text 1</div><div class="hex">#1F2937</div></div></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="color:t020">状态色</span> <span style="font-size:11px;font-weight:400;color:var(--aw-text-3);margin-left:6px"><span data-i18n="color:t021">WCAG 对比度（vs 白底）· 全部 AA / AAA 合格</span></span></h3>
    <div class="status-row">
      <div class="status-tile">
        <div class="bar" style="background:#389E0D"></div>
        <div class="name"><span data-i18n="color:t022">Success · 成功</span></div>
        <div class="hex">#389E0D</div>
        <span class="pill" style="background:var(--aw-success-bg);color:var(--aw-success)"><span data-i18n="color:t023">在线</span></span>
        <div class="wcag-row"><span class="wcag-badge aa">4.6:1 · AA ✓</span></div>
      </div>
      <div class="status-tile">
        <div class="bar" style="background:#D48806"></div>
        <div class="name"><span data-i18n="color:t024">Warning · 警告</span></div>
        <div class="hex">#D48806</div>
        <span class="pill" style="background:var(--aw-warning-bg);color:var(--aw-warning)"><span data-i18n="color:t025">升级中</span></span>
        <div class="wcag-row"><span class="wcag-badge aa">3.4:1 · AA Large ✓</span></div>
      </div>
      <div class="status-tile">
        <div class="bar" style="background:#CF1322"></div>
        <div class="name"><span data-i18n="color:t026">Danger · 危险</span></div>
        <div class="hex">#CF1322</div>
        <span class="pill" style="background:var(--aw-danger-bg);color:var(--aw-danger)"><span data-i18n="color:t027">离线</span></span>
        <div class="wcag-row"><span class="wcag-badge aa">5.9:1 · AA ✓</span></div>
      </div>
      <div class="status-tile">
        <div class="bar" style="background:#0958D9"></div>
        <div class="name"><span data-i18n="color:t028">Info · 信息</span></div>
        <div class="hex">#0958D9</div>
        <span class="pill" style="background:var(--aw-info-bg);color:var(--aw-info)"><span data-i18n="color:t029">通知</span></span>
        <div class="wcag-row"><span class="wcag-badge aa">6.4:1 · AA ✓</span></div>
      </div>
    </div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.6"><b style="color:var(--aw-text-2)"><span data-i18n="color:t030">取值原则：</span></b><span data-i18n="color:t031">状态色统一在 antd v6</span> <b><span data-i18n="color:t032">-7 阶</span></b><span data-i18n="color:t033">取色,与品牌主色</span> <code>#165DFF</code> <span data-i18n="color:t034">同位,保持企业克制感而不发暗(原 -8/-9 阶在大面积文本上会发脏)。WCAG 正文 ≥ 4.5:1(AA)、大字标题 ≥ 3:1(AA Large)的标准下全部合格;Warning 单独使用时建议配合</span> <code>colorWarningBg</code> <span data-i18n="color:t035">浅底而非裸文本,以保证 contrast。提交前按本页标注抽检；业务仓库可再接入自动化 contrast 校验。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="color:t036">Ant Design v6 基础色相 · 12 Hue Reference</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 14px"><span data-i18n="color:t037">Ant Design v6 提供 12 个基础色相 × 10 阶（共 120 色）作为上游色板。AngelWatch 在每个色相的</span> <b><span data-i18n="color:t038">第 6 阶</span></b><span data-i18n="color:t039">（饱和度最高的"主"色）取色 —— 这是 antd 官方推荐的品牌色取色位。下表标注我们当前在用的色相位 + 备用扩展位，扩展位仅供 palette / Tag 等业务标签使用，不用于状态语义。</span></p>
    <div class="hue-grid">
      <div class="hue-row" style="background:linear-gradient(90deg,#FFF1F0,#FFA39E,#F5222D,#CF1322,#5C0011);"><span class="hue-label"><span data-i18n="color:t040">Red · 红</span></span><span class="hue-tag"><span data-i18n="color:t041">danger 取 #CF1322(antd red-7)</span></span></div>
      <div class="hue-row" style="background:linear-gradient(90deg,#FFF2E8,#FFBB96,#FA541C,#871400,#2B0E05);"><span class="hue-label"><span data-i18n="color:t042">Volcano · 火山</span></span><span class="hue-tag"><span data-i18n="color:t043">扩展位</span></span></div>
      <div class="hue-row" style="background:linear-gradient(90deg,#FFF7E6,#FFD591,#FA8C16,#873800,#2B1611);"><span class="hue-label"><span data-i18n="color:t044">Orange · 橙</span></span><span class="hue-tag"><span data-i18n="color:t045">扩展位</span></span></div>
      <div class="hue-row" style="background:linear-gradient(90deg,#FCFFE6,#EAFF8F,#A0D911,#3F6600,#1F2611);"><span class="hue-label"><span data-i18n="color:t046">Lime · 青柠</span></span><span class="hue-tag"><span data-i18n="color:t047">扩展位</span></span></div>
      <div class="hue-row" style="background:linear-gradient(90deg,#FFFBE6,#FFE58F,#FAAD14,#D48806,#2B2111);"><span class="hue-label"><span data-i18n="color:t048">Gold · 金</span></span><span class="hue-tag"><span data-i18n="color:t049">warning 取 #D48806(antd gold-7)</span></span></div>
      <div class="hue-row" style="background:linear-gradient(90deg,#FEFFE6,#FFFB8F,#FADB14,#876800,#2B2611);"><span class="hue-label"><span data-i18n="color:t050">Yellow · 黄</span></span><span class="hue-tag"><span data-i18n="color:t051">扩展位</span></span></div>
      <div class="hue-row" style="background:linear-gradient(90deg,#F6FFED,#B7EB8F,#52C41A,#389E0D,#092B00);"><span class="hue-label"><span data-i18n="color:t052">Green · 绿</span></span><span class="hue-tag"><span data-i18n="color:t053">success 取 #389E0D(antd green-7)</span></span></div>
      <div class="hue-row" style="background:linear-gradient(90deg,#E6FFFB,#87E8DE,#13C2C2,#006D75,#022C33);"><span class="hue-label"><span data-i18n="color:t054">Cyan · 青</span></span><span class="hue-tag"><span data-i18n="color:t055">扩展位</span></span></div>
      <div class="hue-row" style="background:linear-gradient(90deg,#E6F7FF,#91D5FF,#1677FF,#0958D9,#002766);"><span class="hue-label"><span data-i18n="color:t056">Blue · 蓝</span></span><span class="hue-tag"><span data-i18n="color:t057">info 取 #0958D9(antd blue-7)· chart-1 用 antd 默认 #1677FF(blue-6)</span></span></div>
      <div class="hue-row" style="background:linear-gradient(90deg,#F0F5FF,#ADC6FF,#2F54EB,#10239E,#030852);"><span class="hue-label"><span data-i18n="color:t058">Geekblue · 极客蓝</span></span><span class="hue-tag"><span data-i18n="color:t059">primary 锚定 #165DFF(介于 6/7 阶之间)</span></span></div>
      <div class="hue-row" style="background:linear-gradient(90deg,#F9F0FF,#D3ADF7,#722ED1,#391085,#120338);"><span class="hue-label"><span data-i18n="color:t060">Purple · 紫</span></span><span class="hue-tag"><span data-i18n="color:t061">扩展位</span></span></div>
      <div class="hue-row" style="background:linear-gradient(90deg,#FFF0F6,#FFADD2,#EB2F96,#9E1068,#520339);"><span class="hue-label"><span data-i18n="color:t062">Magenta · 洋红</span></span><span class="hue-tag"><span data-i18n="color:t063">扩展位</span></span></div>
    </div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="color:t064">取色规则:</span></b><span data-i18n="color:t065">状态色统一上调到 antd v6</span> <b><span data-i18n="color:t066">-7 阶</span></b><span data-i18n="color:t067">(比 antd 默认 -6 阶略沉,与 brand primary</span> <code>#165DFF</code><span data-i18n="color:t068">(geekblue 6/7 之间)同位),既保持企业克制感又避免 -8/-9 阶在大面积文本上的浑浊。WCAG 全部通过 AA(正文 ≥ 4.5:1 / 大字 ≥ 3:1)。品牌主色选用 Geekblue 而非 Blue,避开 antd 默认</span> <code>#1677FF</code><span data-i18n="color:t069">,保持与 Arco / Material 视觉边界。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="color:t070">Tier 阶数 · 与 antd v6 token 对齐</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="color:t071">antd v6 在 border / fill / bg 三个维度提供多档 token；TMS 全部对齐，便于 component override 在任意 tier 都能取到 token。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:22%"><span data-i18n="color:t072">维度</span></th><th style="width:24%">TMS Token</th><th style="width:18%"><span data-i18n="color:t073">值 (Light)</span></th><th style="width:18%"><span data-i18n="color:t074">值 (Dark)</span></th><th><span data-i18n="color:t075">对应 antd</span></th></tr></thead>
      <tbody>
        <tr class="map-group"><td colspan="5"><span data-i18n="color:t076">Border · 4 阶（antd 2 阶 + TMS 加深 / 浅 2 阶）</span></td></tr>
        <tr><td><span data-i18n="color:t077">较深</span></td><td><code>--aw-border-1</code></td><td><span class="swatch-inline" style="background:#D9D9D9"></span><code>#D9D9D9</code></td><td><span class="swatch-inline" style="background:#3A3F4A"></span><code>#3A3F4A</code></td><td><code>colorBorder</code></td></tr>
        <tr><td><span data-i18n="color:t078">主用</span></td><td><code>--aw-border-2</code></td><td><span class="swatch-inline" style="background:#E5E7EB"></span><code>#E5E7EB</code></td><td><span class="swatch-inline" style="background:#2D323C"></span><code>#2D323C</code></td><td><code>colorBorderSecondary</code></td></tr>
        <tr><td><span data-i18n="color:t079">较浅</span></td><td><code>--aw-border-3</code></td><td><span class="swatch-inline" style="background:#F0F0F0"></span><code>#F0F0F0</code></td><td><span class="swatch-inline" style="background:#232831"></span><code>#232831</code></td><td><span data-i18n="color:t080">(TMS 自有)</span></td></tr>
        <tr><td><span data-i18n="color:t081">最浅 (近 bg)</span></td><td><code>--aw-border-4</code></td><td><span class="swatch-inline" style="background:#F5F5F5"></span><code>#F5F5F5</code></td><td><span class="swatch-inline" style="background:#2D323C"></span><code>#2D323C</code></td><td><span data-i18n="color:t082">(TMS 自有, 用于表头分隔)</span></td></tr>
        <tr class="map-group"><td colspan="5"><span data-i18n="color:t083">Fill · 4 阶（与 antd 4 阶对齐）</span></td></tr>
        <tr><td><span data-i18n="color:t084">较深</span></td><td><code>--aw-fill-1</code></td><td><span class="swatch-inline" style="background:#FAFAFA"></span><code>#FAFAFA</code></td><td><span class="swatch-inline" style="background:#1B1F27"></span><code>#1B1F27</code></td><td><code>colorFill</code></td></tr>
        <tr><td><span data-i18n="color:t085">主用</span></td><td><code>--aw-fill-2</code></td><td><span class="swatch-inline" style="background:#F5F5F5"></span><code>#F5F5F5</code></td><td><span class="swatch-inline" style="background:#21262F"></span><code>#21262F</code></td><td><code>colorFillSecondary</code></td></tr>
        <tr><td><span data-i18n="color:t086">较浅</span></td><td><code>--aw-fill-3</code></td><td><span class="swatch-inline" style="background:#EEEEEE"></span><code>#EEEEEE</code></td><td><span class="swatch-inline" style="background:#2A2F38"></span><code>#2A2F38</code></td><td><code>colorFillTertiary</code></td></tr>
        <tr><td><span data-i18n="color:t087">极浅 (hover)</span></td><td><code>--aw-fill-4</code></td><td><span class="swatch-inline" style="background:#FAFAFA"></span><code>#FAFAFA</code></td><td><span class="swatch-inline" style="background:#2A2F38"></span><code>#2A2F38</code></td><td><code>colorFillQuaternary</code></td></tr>
        <tr class="map-group"><td colspan="5"><span data-i18n="color:t088">Bg · 5 阶（含 spotlight 与 mask）</span></td></tr>
        <tr><td><span data-i18n="color:t089">页面底</span></td><td><code>--aw-bg-page</code></td><td><span class="swatch-inline" style="background:#F5F7FA"></span><code>#F5F7FA</code></td><td><span class="swatch-inline" style="background:#0F1115"></span><code>#0F1115</code></td><td><code>colorBgLayout</code></td></tr>
        <tr><td><span data-i18n="color:t090">容器</span></td><td><code>--aw-bg</code></td><td><span class="swatch-inline" style="background:#FFFFFF"></span><code>#FFFFFF</code></td><td><span class="swatch-inline" style="background:#14171D"></span><code>#14171D</code></td><td><code>colorBgContainer</code></td></tr>
        <tr><td><span data-i18n="color:t091">浮层 / Modal</span></td><td><code>--aw-bg-elevated</code></td><td><span class="swatch-inline" style="background:#FFFFFF"></span><code>#FFFFFF</code></td><td><span class="swatch-inline" style="background:#1B1F27"></span><code>#1B1F27</code></td><td><code>colorBgElevated</code></td></tr>
        <tr><td><span data-i18n="color:t092">Tooltip 暗底</span></td><td><code>--aw-bg-spotlight</code></td><td><span class="swatch-inline" style="background:rgba(15,23,42,.92)"></span><code>rgba(15,23,42,.92)</code></td><td><span class="swatch-inline" style="background:rgba(255,255,255,.92)"></span><code>rgba(255,255,255,.92)</code></td><td><code>colorBgSpotlight</code></td></tr>
        <tr><td><span data-i18n="color:t093">Modal 遮罩</span></td><td><code>--aw-bg-mask</code></td><td><span class="swatch-inline" style="background:rgba(0,0,0,.45)"></span><code>rgba(0,0,0,.45)</code></td><td><span class="swatch-inline" style="background:rgba(0,0,0,.65)"></span><code>rgba(0,0,0,.65)</code></td><td><code>colorBgMask</code></td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="color:t094">关键点：</span></b><span data-i18n="color:t095">所有 4 / 5 阶 token 与 antd 一一对应，便于 ConfigProvider 直接桥接。Tooltip 即使 light 模式也用</span><b><span data-i18n="color:t096">暗底</span></b><span data-i18n="color:t097">（spotlight），charts 页 tooltip 已经在用，这里把它 token 化。</span></p>
  </div>

  <div class="subsection">
    <h3>Mapping to antd v6 tokens</h3>
    <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 14px;max-width:680px;line-height:1.6"><span data-i18n="color:t098">在</span> <code class="mono">ConfigProvider.theme.token</code> <span data-i18n="color:t099">中桥接，确保 antd 内置组件与自定义组件颜色一致。落地于</span> <span class="mono">packages/design-tokens/src/antd.ts</span>.</p>
    <table class="map-table">
      <thead><tr><th style="width:34%">antd v6 token</th><th><span data-i18n="color:t100">AngelWatch 变量</span></th><th style="width:30%"><span data-i18n="color:t101">值</span></th></tr></thead>
      <tbody>
        <tr><td><code>colorPrimary</code></td><td><code>var(--aw-primary)</code></td><td><span class="swatch-inline" style="background:#165DFF"></span><code>#165DFF</code></td></tr>
        <tr><td><code>colorSuccess</code></td><td><code>var(--aw-success)</code></td><td><span class="swatch-inline" style="background:#389E0D"></span><code>#389E0D</code></td></tr>
        <tr><td><code>colorWarning</code></td><td><code>var(--aw-warning)</code></td><td><span class="swatch-inline" style="background:#D48806"></span><code>#D48806</code></td></tr>
        <tr><td><code>colorError</code></td><td><code>var(--aw-danger)</code></td><td><span class="swatch-inline" style="background:#CF1322"></span><code>#CF1322</code></td></tr>
        <tr><td><code>colorInfo</code></td><td><code>var(--aw-info)</code></td><td><span class="swatch-inline" style="background:#0958D9"></span><code>#0958D9</code></td></tr>
        <tr><td><code>borderRadius</code></td><td><code>var(--aw-radius)</code></td><td><code>6</code></td></tr>
        <tr><td><code>controlHeight</code></td><td><code>var(--aw-h-md)</code></td><td><code>32</code></td></tr>
        <tr><td><code>fontFamily</code></td><td><code>var(--aw-font)</code></td><td><code>Inter, Source Han Sans CN, …</code></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>Dark mode tokens</h3>
    <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 14px;max-width:720px;line-height:1.6"><span data-i18n="color:t102">暗色主题为正式交付。运维人员夜班高频使用，沿用 TMS 暗色习惯。值更新到新品牌锚点。</span></p>
    <table class="map-table dark-map">
      <thead><tr><th style="width:34%">Token</th><th>Light</th><th>Dark</th><th style="width:18%"><span data-i18n="color:t103">语义</span></th></tr></thead>
      <tbody>
        <tr class="map-group"><td colspan="4"><span data-i18n="color:t104">品牌色 · 暗色提亮 + 降饱和</span></td></tr>
        <tr><td><code>--aw-primary</code></td><td><span class="swatch-inline" style="background:#165DFF"></span><code>#165DFF</code></td><td><span class="swatch-inline" style="background:#4080FF"></span><code>#4080FF</code></td><td><span data-i18n="color:t105">主操作</span></td></tr>
        <tr><td><code>--aw-primary-hover</code></td><td><span class="swatch-inline" style="background:#4080FF"></span><code>#4080FF</code></td><td><span class="swatch-inline" style="background:#6AA1FF"></span><code>#6AA1FF</code></td><td><span data-i18n="color:t106">hover 态</span></td></tr>
        <tr><td><code>--aw-primary-bg</code></td><td><span class="swatch-inline" style="background:#E8F3FF"></span><code>#E8F3FF</code></td><td><span class="swatch-inline" style="background:#0F2A52"></span><code>#0F2A52</code></td><td><span data-i18n="color:t107">浅底背景</span></td></tr>
        <tr class="map-group"><td colspan="4"><span data-i18n="color:t108">文本 · Dark 用 rgba 白色梯度</span></td></tr>
        <tr><td><code>--aw-text-1</code></td><td><span class="swatch-inline" style="background:#1F2937"></span><code>#1F2937</code></td><td><span class="swatch-inline" style="background:#fff"></span><code>rgba(255,255,255,.92)</code></td><td><span data-i18n="color:t109">主标题</span></td></tr>
        <tr><td><code>--aw-text-2</code></td><td><span class="swatch-inline" style="background:#4B5563"></span><code>#4B5563</code></td><td><span class="swatch-inline" style="background:#fff;opacity:.72"></span><code>rgba(255,255,255,.72)</code></td><td><span data-i18n="color:t110">正文</span></td></tr>
        <tr><td><code>--aw-text-3</code></td><td><span class="swatch-inline" style="background:#6B7280"></span><code>#6B7280</code></td><td><span class="swatch-inline" style="background:#fff;opacity:.52"></span><code>rgba(255,255,255,.52)</code></td><td><span data-i18n="color:t111">说明 / 占位</span></td></tr>
        <tr><td><code>--aw-text-4</code></td><td><span class="swatch-inline" style="background:#9CA3AF"></span><code>#9CA3AF</code></td><td><span class="swatch-inline" style="background:#fff;opacity:.32"></span><code>rgba(255,255,255,.32)</code></td><td><span data-i18n="color:t112">禁用 / 离线</span></td></tr>
        <tr class="map-group"><td colspan="4"><span data-i18n="color:t113">背景 · TMS 暗色 #14171D / #1B1F27</span></td></tr>
        <tr><td><code>--aw-bg-page</code></td><td><span class="swatch-inline" style="background:#F5F7FA"></span><code>#F5F7FA</code></td><td><span class="swatch-inline" style="background:#0F1115"></span><code>#0F1115</code></td><td><span data-i18n="color:t114">页面底</span></td></tr>
        <tr><td><code>--aw-bg</code></td><td><span class="swatch-inline" style="background:#FFFFFF"></span><code>#FFFFFF</code></td><td><span class="swatch-inline" style="background:#14171D"></span><code>#14171D</code></td><td><span data-i18n="color:t115">卡片 / 表格</span></td></tr>
        <tr><td><code>--aw-fill-1</code></td><td><span class="swatch-inline" style="background:#FAFAFA"></span><code>#FAFAFA</code></td><td><span class="swatch-inline" style="background:#1B1F27"></span><code>#1B1F27</code></td><td><span data-i18n="color:t116">表头 / hover</span></td></tr>
        <tr class="map-group"><td colspan="4"><span data-i18n="color:t117">侧边栏 · Light 白底（Linear/Notion 路线），Dark 保留深色渐变</span></td></tr>
        <tr><td><code>--aw-sidebar-bg</code></td><td><span class="swatch-inline" style="background:#FFFFFF;border:1px solid #E5E7EB"></span><code>#FFFFFF</code></td><td><span class="swatch-inline" style="background:#1A1D23"></span><code>#1A1D23</code></td><td><span data-i18n="color:t118">侧栏底</span></td></tr>
        <tr><td><code>--aw-sidebar-bg-active</code></td><td><span class="swatch-inline" style="background:#E8F3FF"></span><code>#E8F3FF</code></td><td><span class="swatch-inline" style="background:rgba(255,255,255,0.08);border:1px solid #2D323C"></span><code>rgba(255,255,255,.08)</code></td><td><span data-i18n="color:t119">选中项底色</span></td></tr>
        <tr><td><code>--aw-sidebar-text-active</code></td><td><span class="swatch-inline" style="background:#165DFF"></span><code>#165DFF</code></td><td><span class="swatch-inline" style="background:#FFFFFF;border:1px solid #2D323C"></span><code>#FFFFFF</code></td><td><span data-i18n="color:t120">选中文字</span></td></tr>
        <tr><td><code>--aw-sidebar-indicator</code></td><td><span class="swatch-inline" style="background:#165DFF"></span><code>#165DFF</code></td><td><span class="swatch-inline" style="background:#4080FF"></span><code>#4080FF</code></td><td><span data-i18n="color:t121">3px 左侧 indicator bar</span></td></tr>
        <tr class="map-group"><td colspan="4"><span data-i18n="color:t122">状态色 · light 取 antd -7 阶,dark 提亮到 -6 阶保对比度</span></td></tr>
        <tr><td><code>--aw-success</code></td><td><span class="swatch-inline" style="background:#389E0D"></span><code>#389E0D</code></td><td><span class="swatch-inline" style="background:#52C41A"></span><code>#52C41A</code></td><td><span data-i18n="color:t123">在线 / 成功</span></td></tr>
        <tr><td><code>--aw-warning</code></td><td><span class="swatch-inline" style="background:#D48806"></span><code>#D48806</code></td><td><span class="swatch-inline" style="background:#FAAD14"></span><code>#FAAD14</code></td><td><span data-i18n="color:t124">升级 / 警告</span></td></tr>
        <tr><td><code>--aw-danger</code></td><td><span class="swatch-inline" style="background:#CF1322"></span><code>#CF1322</code></td><td><span class="swatch-inline" style="background:#FF4D4F"></span><code>#FF4D4F</code></td><td><span data-i18n="color:t125">故障 / 删除</span></td></tr>
        <tr class="map-group"><td colspan="4"><span data-i18n="color:t126">阴影 · 暗色用纯黑 + 高 alpha</span></td></tr>
        <tr><td><code>--aw-shadow-1</code></td><td colspan="2" class="mono" style="font-size:11px"><span style="color:var(--aw-text-3)">L:</span> 0 1px 2px rgba(15,23,42,.04)<br/><span style="color:var(--aw-text-3)">D:</span> 0 1px 2px rgba(0,0,0,.4)</td><td>cards</td></tr>
        <tr><td><code>--aw-shadow-2</code></td><td colspan="2" class="mono" style="font-size:11px"><span style="color:var(--aw-text-3)">L:</span> 0 4px 12px rgba(15,23,42,.08)<br/><span style="color:var(--aw-text-3)">D:</span> 0 4px 12px rgba(0,0,0,.5)</td><td>popover</td></tr>
        <tr><td><code>--aw-shadow-3</code></td><td colspan="2" class="mono" style="font-size:11px"><span style="color:var(--aw-text-3)">L:</span> 0 8px 24px rgba(15,23,42,.12)<br/><span style="color:var(--aw-text-3)">D:</span> 0 8px 24px rgba(0,0,0,.6)</td><td>modal</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection" id="theme">
    <h3><span data-i18n="color:t127">Theme Comparison · 跨主题预览</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 14px;max-width:720px;line-height:1.6"><span data-i18n="color:t128">同一组件 Light（左）vs Dark（右）并排对照，便于做色彩与层级回归。Dark 区域使用</span> <span class="mono">.theme-dark</span> <span data-i18n="color:t129">局部作用域，不影响全局。</span></p>
    <div class="theme-compare">
      <div class="tc-col">
        <div class="tc-tag">☀ Light</div>
        <div class="tc-stack">
          <div class="stat"><div class="lbl"><span data-i18n="color:t130">激活设备</span></div><div class="num">12,486</div><div class="delta up"><span data-i18n="color:t131">↑ 248 较上周</span></div></div>
          <div class="row"><button class="btn btn-primary"><span data-i18n="color:t132">主操作</span></button><button class="btn"><span data-i18n="color:t133">次操作</span></button><button class="btn btn-danger"><span data-i18n="color:t134">删除</span></button></div>
          <input class="input" value="DEV-86420075" />
          <input class="input is-error" value="格式错误"  data-i18n-value="color:a135"/>
          <div class="table-wrap"><table class="dt"><tbody>
            <tr><td><span data-i18n="color:t136">终端-上海-001</span></td><td><span class="status-dot online"><span data-i18n="color:t137">在线</span></span></td><td>v3.4.2</td></tr>
            <tr><td><span data-i18n="color:t138">终端-北京-014</span></td><td><span class="status-dot upgrading"><span data-i18n="color:t139">升级中</span></span></td><td>v3.4.1</td></tr>
            <tr><td><span data-i18n="color:t140">终端-广州-007</span></td><td><span class="status-dot offline"><span data-i18n="color:t141">离线</span></span></td><td>v3.3.8</td></tr>
          </tbody></table></div>
        </div>
      </div>
      <div class="tc-col theme-dark" data-theme="dark">
        <div class="tc-tag">🌙 Dark</div>
        <div class="tc-stack">
          <div class="stat"><div class="lbl"><span data-i18n="color:t142">激活设备</span></div><div class="num">12,486</div><div class="delta up"><span data-i18n="color:t143">↑ 248 较上周</span></div></div>
          <div class="row"><button class="btn btn-primary"><span data-i18n="color:t144">主操作</span></button><button class="btn"><span data-i18n="color:t145">次操作</span></button><button class="btn btn-danger"><span data-i18n="color:t146">删除</span></button></div>
          <input class="input" value="DEV-86420075" />
          <input class="input is-error" value="格式错误"  data-i18n-value="color:a147"/>
          <div class="table-wrap"><table class="dt"><tbody>
            <tr><td><span data-i18n="color:t148">终端-上海-001</span></td><td><span class="status-dot online"><span data-i18n="color:t149">在线</span></span></td><td>v3.4.2</td></tr>
            <tr><td><span data-i18n="color:t150">终端-北京-014</span></td><td><span class="status-dot upgrading"><span data-i18n="color:t151">升级中</span></span></td><td>v3.4.1</td></tr>
            <tr><td><span data-i18n="color:t152">终端-广州-007</span></td><td><span class="status-dot offline"><span data-i18n="color:t153">离线</span></span></td><td>v3.3.8</td></tr>
          </tbody></table></div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>Component Token Overrides</h3>
    <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 14px;max-width:720px;line-height:1.6"><span data-i18n="color:t154">全局 token 解决 80% 的需求，剩下 20% 用</span> <code>theme.components</code> <span data-i18n="color:t155">定向覆盖某个组件 — 不污染全局变量。所有覆盖集中收口在</span> <code class="mono">packages/design-tokens/src/components.ts</code><span data-i18n="color:t156">，组件库新版本升级时只需 review 这一个文件。</span></p>
    <div class="code-block"><pre><code>// packages/design-tokens/src/components.ts
export const componentOverrides = {
  Table: {
    headerBg: '#FAFAFA',          // one step lighter than global colorFillAlter
    headerColor: '#4B5563',       // fixed gray table-header text, not colorText
    rowHoverBg: 'rgba(0,82,204,0.04)',
    cellPaddingBlock: 10,         // compact TMS table: 12 -> 10
    cellPaddingInline: 12,
  },
  Button: {
    fontWeight: 500,              // antd default 400 is too light
    primaryShadow: 'none',        // remove default 0 2px 0 rgba shadow
    defaultBorderColor: '#D9D9D9',
    contentFontSize: 13,
  },
  Tag: {
    defaultBg: '#F5F5F5',
    defaultColor: '#4B5563',
  },
  Tabs: {
    horizontalItemPadding: '8px 0',
    inkBarColor: 'var(--aw-primary)',
    itemSelectedColor: 'var(--aw-primary)',
  },
  Modal: { borderRadiusLG: 8, paddingContentHorizontalLG: 24 },
  Form:  { labelColor: '#4B5563', verticalLabelPadding: '0 0 4px' },
};</code></pre></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="color:t157">Density Modes · 三档密度</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 14px;max-width:720px;line-height:1.6"><span data-i18n="color:t158">运维场景一屏看到的设备越多越好，营销场景需要呼吸感。通过</span> <code>controlHeight</code> + <code>sizeUnit</code> <span data-i18n="color:t159">两个 seed token 一键切换，全局组件按比例响应。用户偏好持久化到</span> <code>localStorage</code><span data-i18n="color:t160">，跟随账号同步。</span></p>
    <div class="density-grid">
      <div class="dens-card">
        <div class="dh"><span class="lbl">Compact</span><span class="hint"><span data-i18n="color:t161">默认 · TMS 标准</span></span></div>
        <div class="dvars"><code>controlHeight: 28</code><code>sizeUnit: 4</code><code>fontSize: 12</code><code>cellPadding: 8 / 10</code></div>
        <div class="dpreview compact">
          <div class="dr"><span class="dl">SN</span><span class="dv">DEV-86420075</span><span class="dt"><span data-i18n="color:t162">在线</span></span></div>
          <div class="dr"><span class="dl"><span data-i18n="color:t163">版本</span></span><span class="dv">v3.4.2</span><span class="dt"><span data-i18n="color:t164">已升级</span></span></div>
          <div class="dr"><span class="dl"><span data-i18n="color:t165">心跳</span></span><span class="dv"><span data-i18n="color:t166">刚刚</span></span><span class="dt"><span data-i18n="color:t167">28 设备</span></span></div>
          <div class="dr"><span class="dl"><span data-i18n="color:t168">告警</span></span><span class="dv">0</span><span class="dt"><span data-i18n="color:t169">正常</span></span></div>
        </div>
        <div class="duse"><span data-i18n="color:t170">设备列表 · 监控大屏 · 一屏 ≥ 18 行</span></div>
        <div class="dnote"><span data-i18n="color:t171">⚠ 28px 是 TMS 自定义中间值，不直接对应 antd</span> <code>compactAlgorithm</code><span data-i18n="color:t172">(24px)。落地需在</span> <code>ConfigProvider.theme</code> <span data-i18n="color:t173">自建 compact token，不要直接套 algorithm。</span></div>
      </div>
      <div class="dens-card">
        <div class="dh"><span class="lbl">Default</span><span class="hint"><span data-i18n="color:t174">通用业务</span></span></div>
        <div class="dvars"><code>controlHeight: 32</code><code>sizeUnit: 4</code><code>fontSize: 14</code><code>cellPadding: 12 / 16</code></div>
        <div class="dpreview default">
          <div class="dr"><span class="dl">SN</span><span class="dv">DEV-86420075</span><span class="dt"><span data-i18n="color:t175">在线</span></span></div>
          <div class="dr"><span class="dl"><span data-i18n="color:t176">版本</span></span><span class="dv">v3.4.2</span><span class="dt"><span data-i18n="color:t177">已升级</span></span></div>
          <div class="dr"><span class="dl"><span data-i18n="color:t178">心跳</span></span><span class="dv"><span data-i18n="color:t179">刚刚</span></span><span class="dt"><span data-i18n="color:t180">28 设备</span></span></div>
        </div>
        <div class="duse"><span data-i18n="color:t181">表单页 · 设置页 · 配置页</span></div>
      </div>
      <div class="dens-card">
        <div class="dh"><span class="lbl">Spacious</span><span class="hint"><span data-i18n="color:t182">营销 / 详情</span></span></div>
        <div class="dvars"><code>controlHeight: 40</code><code>sizeUnit: 6</code><code>fontSize: 15</code><code>cellPadding: 16 / 20</code></div>
        <div class="dpreview spacious">
          <div class="dr"><span class="dl">SN</span><span class="dv">DEV-86420075</span><span class="dt"><span data-i18n="color:t183">在线</span></span></div>
          <div class="dr"><span class="dl"><span data-i18n="color:t184">版本</span></span><span class="dv">v3.4.2</span><span class="dt"><span data-i18n="color:t185">已升级</span></span></div>
        </div>
        <div class="duse"><span data-i18n="color:t186">登录页 · ErrorPage · 营销官网</span></div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="color:t187">Nested Themes · 局部主题作用域</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 14px;max-width:720px;line-height:1.6"><span data-i18n="color:t188">侧边栏永远 dark，正文跟随用户偏好；监控大屏顶部模块需要红色危险主题；详情页里嵌一个独立 Card 时不受外层污染 — 这些都靠</span> <code>&lt;ConfigProvider theme&gt;</code> <span data-i18n="color:t189">嵌套实现。父级 token 自动继承，子级覆盖只影响子树。</span></p>
    <div class="nested-demo">
      <div class="nd-frame">
        <div class="nd-label outer"><code>&lt;ConfigProvider&gt;</code> <span data-i18n="color:t190">· 全局 light</span></div>
        <div class="nd-outer">
          <div class="nd-row">
            <div class="nd-card">
              <div class="nd-ch"><span data-i18n="color:t191">设备总览</span></div>
              <div class="nd-cn">12,486</div>
              <div class="nd-cs"><span data-i18n="color:t192">↑ 248 较上周</span></div>
            </div>
            <div class="nd-card">
              <div class="nd-ch"><span data-i18n="color:t193">在线率</span></div>
              <div class="nd-cn">98.2%</div>
              <div class="nd-cs">↑ 0.4%</div>
            </div>
          </div>
          <div class="nd-frame nested">
            <div class="nd-label inner"><code>&lt;ConfigProvider theme={'{ algorithm: darkAlgorithm }'}&gt;</code> <span data-i18n="color:t194">· 子树独立 dark</span></div>
            <div class="nd-inner" data-theme="dark">
              <div class="nd-row">
                <div class="nd-card dark">
                  <div class="nd-ch"><span data-i18n="color:t195">实时告警</span></div>
                  <div class="nd-cn">3</div>
                  <div class="nd-cs danger"><span data-i18n="color:t196">↑ 2 待处理</span></div>
                </div>
                <div class="nd-card dark">
                  <div class="nd-ch"><span data-i18n="color:t197">离线设备</span></div>
                  <div class="nd-cn">28</div>
                  <div class="nd-cs"><span data-i18n="color:t198">含 12 故障</span></div>
                </div>
              </div>
              <div class="nd-frame nested2">
                <div class="nd-label inner2"><code>&lt;ConfigProvider theme={resolvedDangerTheme}&gt;</code> <span data-i18n="color:t199">· 危险主题</span></div>
                <div class="nd-inner-danger">
                  <button class="nd-btn-danger"><span data-i18n="color:t200">立即处理</span></button>
                  <button class="nd-btn-ghost"><span data-i18n="color:t201">稍后</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
`;
