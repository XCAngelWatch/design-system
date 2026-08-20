/* AngelWatch Design System — page: palette (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["palette"] = `
<div class="content">
<!-- EXTENDED PALETTE -->
<section class="section" id="palette">
  <p class="section-eyebrow"><span data-i18n="palette:t001">设计基础 · 扩展色板</span></p>
  <h2><span data-i18n="palette:t002">扩展色板候选 Extended Palette</span></h2>
  <p class="lede"><span data-i18n="palette:t003">机构分组、设备类型、标签分类有时需要品牌色与状态色之外的分类色。本页展示 8 色</span> <b><span data-i18n="palette:t004">候选标签色板</span></b><span data-i18n="palette:t005">（中性、红、橙、金、绿、青、蓝、紫），用于评估文字 / 底色对比度与业务区分度。它不是当前已发布的 runtime token 或 TypeScript 包；业务实现只能使用已存在的语义 token 与图表 token。</span></p>
  <div class="alert info" style="margin:10px 0 18px"><div class="ico">i</div><div class="content"><strong><span data-i18n="palette:t006">候选标签色板 ≠ 已发布图表序列色板。</span></strong><span data-i18n="palette:t007">本页为</span><b><span data-i18n="palette:t008">标签 / Tag / Pill 分类</span></b><span data-i18n="palette:t009">保留候选命名草案，例如</span> <code>--aw-{hue}-{step}</code><span data-i18n="palette:t010">；当前并没有 40 个 runtime 变量。</span><b><span data-i18n="palette:t011">多系列图表</span></b><span data-i18n="palette:t012">使用已发布的 8 色序列 token</span> <code>--aw-chart-1..8</code><span data-i18n="palette:t013">，优化"序列间区分度 + 色弱可达"，详见</span> <a href="#/charts" style="color: var(--aw-primary-text)"><span data-i18n="palette:t014">Charts 页</span></a><span data-i18n="palette:t015">。候选分类色获得架构、对比度与 Light/Dark 审核前不得复制到业务代码。</span></div></div>

  <div class="ext-palette">
    <!-- Neutral -->
    <div class="ep-row">
<div class="ep-meta">
  <div class="name">Neutral <span class="en"><span data-i18n="palette:t016">中性</span></span></div>
  <div class="hex">Candidate · neutral</div>
  <div class="use"><span data-i18n="palette:t017">分隔线、占位、禁用态、未分类标签。</span></div>
</div>
<div class="ep-shades">
  <div class="sh" style="background:#F5F5F5;color:#1F2937"><div class="step">25</div><div class="hx">#F5F5F5</div></div>
  <div class="sh" style="background:#E5E7EB;color:#1F2937"><div class="step">100</div><div class="hx">#E5E7EB</div></div>
  <div class="sh" style="background:#9CA3AF;color:white"><div class="step">500</div><div class="hx">#9CA3AF</div></div>
  <div class="sh" style="background:#4B5563;color:white"><div class="step">700</div><div class="hx">#4B5563</div></div>
  <div class="sh" style="background:#1F2937;color:white"><div class="step">900</div><div class="hx">#1F2937</div></div>
</div>
<div class="ep-example">
  <span class="label-text"><span data-i18n="palette:t018">业务示例 · 标签 / 状态</span></span>
  <span class="ep-tag" style="background:#F5F5F5;color:#4B5563;border-color:#E5E7EB"><span data-i18n="palette:t019">未分类</span></span>
  <span class="ep-tag" style="background:#fff;color:#4B5563;border-color:#E5E7EB"><span data-i18n="palette:t020">已禁用</span></span>
  <span class="ep-tag" style="background:#1F2937;color:white;border-color:#1F2937"><span data-i18n="palette:t021">已退役</span></span>
</div>
    </div>

    <!-- Red -->
    <div class="ep-row">
<div class="ep-meta">
  <div class="name">Red <span class="en"><span data-i18n="palette:t022">朱砂</span></span></div>
  <div class="hex">Candidate · red</div>
  <div class="use"><span data-i18n="palette:t023">故障、删除、危险操作、超阈值告警。</span></div>
</div>
<div class="ep-shades">
  <div class="sh" style="background:#FFF1F0;color:#5C0011"><div class="step">25</div><div class="hx">#FFF1F0</div></div>
  <div class="sh" style="background:#FFA39E;color:#5C0011"><div class="step">100</div><div class="hx">#FFA39E</div></div>
  <div class="sh" style="background:#F5222D;color:white"><div class="step">500</div><div class="hx">#F5222D</div></div>
  <div class="sh" style="background:#CF1322;color:white"><div class="step">700</div><div class="hx">#CF1322</div></div>
  <div class="sh" style="background:#5C0011;color:white"><div class="step">900</div><div class="hx">#5C0011</div></div>
</div>
<div class="ep-example">
  <span class="label-text"><span data-i18n="palette:t024">业务示例 · 故障 / 告警</span></span>
  <span class="ep-tag" style="background:#FFF1F0;color:#CF1322;border-color:#FFA39E"><span data-i18n="palette:t025">设备故障</span></span>
  <span class="ep-tag" style="background:#CF1322;color:white;border-color:#CF1322"><span data-i18n="palette:t026">紧急告警</span></span>
  <span class="ep-tag" style="background:#fff;color:#CF1322;border-color:#FFA39E"><span data-i18n="palette:t027">未恢复 12</span></span>
</div>
    </div>

    <!-- Orange -->
    <div class="ep-row">
<div class="ep-meta">
  <div class="name">Orange <span class="en"><span data-i18n="palette:t028">琥珀</span></span></div>
  <div class="hex">Candidate · orange</div>
  <div class="use"><span data-i18n="palette:t029">运维进行中、固件升级、需要关注但非阻断。</span></div>
</div>
<div class="ep-shades">
  <div class="sh" style="background:#FFF7E6;color:#612500"><div class="step">25</div><div class="hx">#FFF7E6</div></div>
  <div class="sh" style="background:#FFD591;color:#612500"><div class="step">100</div><div class="hx">#FFD591</div></div>
  <div class="sh" style="background:#FA8C16;color:white"><div class="step">500</div><div class="hx">#FA8C16</div></div>
  <div class="sh" style="background:#AD4E00;color:white"><div class="step">700</div><div class="hx">#AD4E00</div></div>
  <div class="sh" style="background:#612500;color:white"><div class="step">900</div><div class="hx">#612500</div></div>
</div>
<div class="ep-example">
  <span class="label-text"><span data-i18n="palette:t030">业务示例 · 任务 / 升级</span></span>
  <span class="ep-tag" style="background:#FFF7E6;color:#AD4E00;border-color:#FFD591"><span data-i18n="palette:t031">升级中 28</span></span>
  <span class="ep-tag" style="background:#FA8C16;color:#612500;border-color:#FA8C16"><span data-i18n="palette:t032">运维任务</span></span>
  <span class="ep-tag" style="background:#fff;color:#AD4E00;border-color:#FFD591"><span data-i18n="palette:t033">维护窗口</span></span>
</div>
    </div>

    <!-- Gold -->
    <div class="ep-row">
<div class="ep-meta">
  <div class="name">Gold <span class="en"><span data-i18n="palette:t034">日晷</span></span></div>
  <div class="hex">Candidate · gold</div>
  <div class="use"><span data-i18n="palette:t035">警告、待处理、需用户决策的中间态。</span></div>
</div>
<div class="ep-shades">
  <div class="sh" style="background:#FFFBE6;color:#613400"><div class="step">25</div><div class="hx">#FFFBE6</div></div>
  <div class="sh" style="background:#FFE58F;color:#613400"><div class="step">100</div><div class="hx">#FFE58F</div></div>
  <div class="sh" style="background:#FAAD14;color:#613400"><div class="step">500</div><div class="hx">#FAAD14</div></div>
  <div class="sh" style="background:#874D00;color:white"><div class="step">700</div><div class="hx">#874D00</div></div>
  <div class="sh" style="background:#613400;color:white"><div class="step">900</div><div class="hx">#613400</div></div>
</div>
<div class="ep-example">
  <span class="label-text"><span data-i18n="palette:t036">业务示例 · 待处理 / 警告</span></span>
  <span class="ep-tag" style="background:#FFFBE6;color:#874D00;border-color:#FFE58F"><span data-i18n="palette:t037">待审批</span></span>
  <span class="ep-tag" style="background:#FAAD14;color:#613400;border-color:#FAAD14"><span data-i18n="palette:t038">待确认</span></span>
  <span class="ep-tag" style="background:#fff;color:#874D00;border-color:#FFE58F"><span data-i18n="palette:t039">证书将过期</span></span>
</div>
    </div>

    <!-- Green -->
    <div class="ep-row">
<div class="ep-meta">
  <div class="name">Green <span class="en"><span data-i18n="palette:t040">极光</span></span></div>
  <div class="hex">Candidate · green</div>
  <div class="use"><span data-i18n="palette:t041">在线、成功、已升级、健康状态。</span></div>
</div>
<div class="ep-shades">
  <div class="sh" style="background:#F6FFED;color:#092B00"><div class="step">25</div><div class="hx">#F6FFED</div></div>
  <div class="sh" style="background:#B7EB8F;color:#092B00"><div class="step">100</div><div class="hx">#B7EB8F</div></div>
  <div class="sh" style="background:#52C41A;color:white"><div class="step">500</div><div class="hx">#52C41A</div></div>
  <div class="sh" style="background:#237804;color:white"><div class="step">700</div><div class="hx">#237804</div></div>
  <div class="sh" style="background:#092B00;color:white"><div class="step">900</div><div class="hx">#092B00</div></div>
</div>
<div class="ep-example">
  <span class="label-text"><span data-i18n="palette:t042">业务示例 · 在线 / 成功</span></span>
  <span class="ep-tag" style="background:#F6FFED;color:#237804;border-color:#B7EB8F"><span data-i18n="palette:t043">在线 12,486</span></span>
  <span class="ep-tag" style="background:#237804;color:white;border-color:#237804"><span data-i18n="palette:t044">操作成功</span></span>
  <span class="ep-tag" style="background:#fff;color:#237804;border-color:#B7EB8F"><span data-i18n="palette:t045">心跳正常</span></span>
</div>
    </div>

    <!-- Cyan -->
    <div class="ep-row">
<div class="ep-meta">
  <div class="name">Cyan <span class="en"><span data-i18n="palette:t046">明青</span></span></div>
  <div class="hex">Candidate · cyan</div>
  <div class="use"><span data-i18n="palette:t047">分组：「华东」、「机场零售」、「金融自助」等区域 / 行业标签。</span></div>
</div>
<div class="ep-shades">
  <div class="sh" style="background:#E6FFFB;color:#002329"><div class="step">25</div><div class="hx">#E6FFFB</div></div>
  <div class="sh" style="background:#87E8DE;color:#002329"><div class="step">100</div><div class="hx">#87E8DE</div></div>
  <div class="sh" style="background:#13C2C2;color:white"><div class="step">500</div><div class="hx">#13C2C2</div></div>
  <div class="sh" style="background:#006D75;color:white"><div class="step">700</div><div class="hx">#006D75</div></div>
  <div class="sh" style="background:#002329;color:white"><div class="step">900</div><div class="hx">#002329</div></div>
</div>
<div class="ep-example">
  <span class="label-text"><span data-i18n="palette:t048">业务示例 · 分组 / 区域</span></span>
  <span class="ep-tag" style="background:#E6FFFB;color:#006D75;border-color:#87E8DE"><span data-i18n="palette:t049">华东</span></span>
  <span class="ep-tag" style="background:#E6FFFB;color:#006D75;border-color:#87E8DE"><span data-i18n="palette:t050">机场零售</span></span>
  <span class="ep-tag" style="background:#13C2C2;color:#002329;border-color:#13C2C2"><span data-i18n="palette:t051">金融自助</span></span>
</div>
    </div>

    <!-- Blue (brand) -->
    <div class="ep-row">
<div class="ep-meta">
  <div class="name">Blue <span class="en"><span data-i18n="palette:t052">品牌蓝</span></span></div>
  <div class="hex"><span data-i18n="palette:t053">候选 blue 层级 / runtime 使用 primary</span></div>
  <div class="use"><span data-i18n="palette:t054">操作、主按钮、链接、信息提示。</span></div>
</div>
<div class="ep-shades">
  <div class="sh" style="background:#E8F3FF;color:#002766"><div class="step">25</div><div class="hx">#E8F3FF</div></div>
  <div class="sh" style="background:#94BFFF;color:#002766"><div class="step">100</div><div class="hx">#94BFFF</div></div>
  <div class="sh" style="background:#4080FF;color:white"><div class="step">500</div><div class="hx">#4080FF</div></div>
  <div class="sh" style="background:#165DFF;color:white"><div class="step">700</div><div class="hx">#165DFF</div></div>
  <div class="sh" style="background:#002766;color:white"><div class="step">900</div><div class="hx">#002766</div></div>
</div>
<div class="ep-example">
  <span class="label-text"><span data-i18n="palette:t055">业务示例 · 操作 / 信息</span></span>
  <span class="ep-tag" style="background:#E8F3FF;color:#165DFF;border-color:#94BFFF"><span data-i18n="palette:t056">推送中</span></span>
  <span class="ep-tag" style="background:#165DFF;color:white;border-color:#165DFF"><span data-i18n="palette:t057">主操作</span></span>
  <span class="ep-tag" style="background:#fff;color:#165DFF;border-color:#94BFFF"><span data-i18n="palette:t058">查看详情</span></span>
</div>
    </div>

    <!-- Purple -->
    <div class="ep-row">
<div class="ep-meta">
  <div class="name">Purple <span class="en"><span data-i18n="palette:t059">酱紫</span></span></div>
  <div class="hex">Candidate · purple</div>
  <div class="use"><span data-i18n="palette:t060">设备类型：「自助终端」、「广告机」、「门禁」、「POS」等品类标签。</span></div>
</div>
<div class="ep-shades">
  <div class="sh" style="background:#F9F0FF;color:#120338"><div class="step">25</div><div class="hx">#F9F0FF</div></div>
  <div class="sh" style="background:#D3ADF7;color:#120338"><div class="step">100</div><div class="hx">#D3ADF7</div></div>
  <div class="sh" style="background:#722ED1;color:white"><div class="step">500</div><div class="hx">#722ED1</div></div>
  <div class="sh" style="background:#391085;color:white"><div class="step">700</div><div class="hx">#391085</div></div>
  <div class="sh" style="background:#120338;color:white"><div class="step">900</div><div class="hx">#120338</div></div>
</div>
<div class="ep-example">
  <span class="label-text"><span data-i18n="palette:t061">业务示例 · 设备类型</span></span>
  <span class="ep-tag" style="background:#F9F0FF;color:#391085;border-color:#D3ADF7"><span data-i18n="palette:t062">自助终端</span></span>
  <span class="ep-tag" style="background:#F9F0FF;color:#391085;border-color:#D3ADF7"><span data-i18n="palette:t063">广告机</span></span>
  <span class="ep-tag" style="background:#722ED1;color:white;border-color:#722ED1">POS</span>
</div>
    </div>
  </div>

  <div class="demo-grid cols-2" style="margin-top:18px">
    <div class="surface" style="font-size:12.5px;line-height:1.7">
<b style="color:var(--aw-text-1)"><span data-i18n="palette:t064">使用规范</span></b><br/>
<span data-i18n="palette:t065">· 业务标签优先用 25 / 700 双阶（背景 + 文字），保证 AA 对比度</span><br/>
<span data-i18n="palette:t066">· 实心 chip 用 500 阶为底色 + 白字，仅在需要"分类被强调"时使用</span><br/>
<span data-i18n="palette:t067">· 同一视图内最多并存 5 种色相，避免视觉嘈杂</span><br/>
<span data-i18n="palette:t068">· 颜色不是身份 — 必须配文字标签，禁止仅靠颜色传达语义（色弱可达性）</span>
    </div>
    <div class="surface" style="font-size:12.5px;line-height:1.7">
<b style="color:var(--aw-text-1)"><span data-i18n="palette:t069">落地</span></b><br/>
<span data-i18n="palette:t070">· 当前 runtime 分类语义只使用</span> <code>--aw-primary / --aw-success / --aw-warning / --aw-danger / --aw-info</code><br/>
<span data-i18n="palette:t072">· 图表序列只使用</span> <code>--aw-chart-1..8</code><br/>
<span data-i18n="palette:t073">· 扩展分类色必须先提升到源 token，并显式提供 Light/Dark 值；不使用 algorithm 自动派生</span><br/>
<span data-i18n="palette:t074">· 提升前，本页色阶只用于设计评估，不得作为已发布 API 引用</span>
    </div>
  </div>
</section>
</div>
`;
