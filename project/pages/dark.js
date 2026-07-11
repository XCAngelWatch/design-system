/* AngelWatch Design System — page: dark (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["dark"] = `
<div class="content">
<section class="section" id="dark">
  <p class="section-eyebrow"><span data-i18n="dark:t001">设计基础 · 暗色主题</span></p>
  <h2><span data-i18n="dark:t002">暗色主题 Dark Mode</span></h2>
  <p class="lede"><span data-i18n="dark:t003">暗色主题在 TMS 是一等公民，不是切换插件。token 通过</span> <code>[data-theme="dark"]</code> <span data-i18n="dark:t004">完整覆盖，所有组件都参与 dark 视觉回归。运维夜班高频使用，沿用 TMS 暗色习惯。</span></p>

  <div class="subsection">
    <h3><span data-i18n="dark:t005">使用场景</span></h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="dark:t006">场景 · 01</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="dark:t007">运维夜班</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="dark:t008">长时间值守降低眼压。Dashboard / List / Detail 页全套适配；配合 OS</span> <code>prefers-color-scheme</code> <span data-i18n="dark:t009">自动切换。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="dark:t010">场景 · 02</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="dark:t011">监控大屏</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="dark:t012">墙体 / 显示器投屏；亮色背景反光强。Dashboard 默认暗色，统计数字提亮，状态色饱和度上调。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="dark:t013">场景 · 03</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="dark:t014">沉浸分析</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="dark:t015">长时间数据分析 / 故障排查 —— 暗色减少视觉干扰。表单页 / 配置页默认 light，但用户偏好覆盖。</span></p>
      </div>
    </div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="dark:t016">默认策略：</span></b><span data-i18n="dark:t017">1) 首次访问读 OS</span> <code>prefers-color-scheme</code><span data-i18n="dark:t018">；2) 用户切换后写</span> <code>localStorage('aw-theme')</code> <span data-i18n="dark:t019">覆盖；3) 跨标签同步</span> <code>storage</code> event.</p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="dark:t020">色彩转换原则</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:22%"><span data-i18n="dark:t021">维度</span></th><th style="width:38%"><span data-i18n="dark:t022">规则</span></th><th><span data-i18n="dark:t023">原因</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="dark:t024">背景</span></td><td><span data-i18n="dark:t025">不用纯黑</span> <span class="mono">#000</span><span data-i18n="dark:t026">，用灰阶</span> <span class="mono">#0F1115</span> <span data-i18n="dark:t027">页面底 /</span> <span class="mono">#14171D</span> <span data-i18n="dark:t028">卡片</span></td><td><span data-i18n="dark:t029">纯黑 OLED 闪烁感强；灰阶呈现层次</span></td></tr>
        <tr><td><span data-i18n="dark:t030">文本</span></td><td><span data-i18n="dark:t031">不用纯白</span> <span class="mono">#FFF</span><span data-i18n="dark:t032">，用</span> <span class="mono">rgba(255,255,255,.92)</span></td><td><span data-i18n="dark:t033">纯白与暗背景对比过强，长时间阅读眼睛酸</span></td></tr>
        <tr><td><span data-i18n="dark:t034">品牌色</span></td><td><span data-i18n="dark:t035">提亮 + 降饱和：</span><span class="mono">#165DFF</span> → <span class="mono">#4080FF</span></td><td><span data-i18n="dark:t036">原品牌色在暗底对比度不够（仅 3:1）；提亮变体保 4.5:1</span></td></tr>
        <tr><td><span data-i18n="dark:t037">状态色</span></td><td><span data-i18n="dark:t038">统一提亮：success</span> <span class="mono">#389E0D → #52C41A</span></td><td><span data-i18n="dark:t039">暗底色块需要更亮才能识别；保留色相不变</span></td></tr>
        <tr><td><span data-i18n="dark:t040">边框</span></td><td><span data-i18n="dark:t041">用</span> <span class="mono">#3A3F4A → #2D323C → #232831</span> <span data-i18n="dark:t042">三档</span></td><td><span data-i18n="dark:t043">层次比 light 模式更微，避免割裂感</span></td></tr>
        <tr><td><span data-i18n="dark:t044">阴影</span></td><td><span data-i18n="dark:t045">纯黑 + 高 alpha（0.4 ~ 0.6）</span></td><td><span data-i18n="dark:t046">暗底要更深的阴影才有空间感</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="dark:t047">背景层级 · 5 档</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="dark:t048">暗色模式下"高度"通过深浅区分而非阴影 —— 越浅 = 越接近用户。</span></p>
    <div class="dark-layer-grid">
      <div class="dlay" style="background:#0F1115"><div class="dl-name">--aw-bg-page</div><div class="dl-hex">#0F1115</div><div class="dl-use"><span data-i18n="dark:t049">页面底（最远）</span></div></div>
      <div class="dlay" style="background:#14171D"><div class="dl-name">--aw-bg</div><div class="dl-hex">#14171D</div><div class="dl-use"><span data-i18n="dark:t050">卡片 / 表格</span></div></div>
      <div class="dlay" style="background:#1B1F27"><div class="dl-name">--aw-fill-1</div><div class="dl-hex">#1B1F27</div><div class="dl-use"><span data-i18n="dark:t051">表头 / hover</span></div></div>
      <div class="dlay" style="background:#21262F"><div class="dl-name">--aw-fill-2</div><div class="dl-hex">#21262F</div><div class="dl-use"><span data-i18n="dark:t052">输入填充</span></div></div>
      <div class="dlay" style="background:#2A2F38"><div class="dl-name">--aw-fill-3</div><div class="dl-hex">#2A2F38</div><div class="dl-use"><span data-i18n="dark:t053">弹层 / 抽屉（最近）</span></div></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="dark:t054">对比度阶梯（vs 暗底）</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="dark:t055">同 light 模式四档文本对比度，但实现方式不同：用</span> <code>rgba(255,255,255,*)</code> <span data-i18n="dark:t056">透明度阶梯，而非具体灰色。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:22%"><span data-i18n="dark:t057">层级</span></th><th style="width:32%"><span data-i18n="dark:t058">值</span></th><th style="width:18%">vs #14171D</th><th><span data-i18n="dark:t059">用途</span></th></tr></thead>
      <tbody>
        <tr><td><b><span data-i18n="dark:t060">主要 · 92%</span></b></td><td><span class="mono">rgba(255,255,255,.92)</span></td><td><span class="wcag-badge aaa">15.6:1</span></td><td><span data-i18n="dark:t061">标题 / 主列 / 数字</span></td></tr>
        <tr><td><b><span data-i18n="dark:t062">次要 · 72%</span></b></td><td><span class="mono">rgba(255,255,255,.72)</span></td><td><span class="wcag-badge aaa">10.8:1</span></td><td><span data-i18n="dark:t063">正文 / 表单值</span></td></tr>
        <tr><td><b><span data-i18n="dark:t064">说明 · 52%</span></b></td><td><span class="mono">rgba(255,255,255,.52)</span></td><td><span class="wcag-badge aa">6.1:1</span></td><td><span data-i18n="dark:t065">placeholder / 时间戳</span></td></tr>
        <tr><td><b><span data-i18n="dark:t066">禁用 · 32%</span></b></td><td><span class="mono">rgba(255,255,255,.32)</span></td><td><span class="wcag-badge fail">3.0:1</span></td><td><span data-i18n="dark:t067">仅装饰 / 离线 / 禁用</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="dark:t068">为什么不用 antd</span> <code>darkAlgorithm</code></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="dark:t069">antd v5+ 提供</span> <code>theme.darkAlgorithm</code><span data-i18n="dark:t070">，传入 light token 自动派生 dark token。TMS</span> <b><span data-i18n="dark:t071">不</span></b><span data-i18n="dark:t072">用 darkAlgorithm，原因有三：</span></p>
    <ul style="margin:0 0 12px;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
      <li><b><span data-i18n="dark:t073">沿用 TMS 暗色习惯</span></b><span data-i18n="dark:t074">：运维人员对</span> <code>#0F1115 → #14171D → #1B1F27</code> <span data-i18n="dark:t075">三档背景已经形成肌肉记忆；darkAlgorithm 的派生结果是</span> <code>#141414 → #1F1F1F → #262626</code><span data-i18n="dark:t076">，迁移会破坏既有习惯</span></li>
      <li><b><span data-i18n="dark:t077">状态色饱和度不一致</span></b><span data-i18n="dark:t078">：darkAlgorithm 对状态色提亮幅度大（如 success</span> <code>#52C41A → #6ABE39</code><span data-i18n="dark:t079">），TMS 偏好更克制（</span><code>#389E0D → #52C41A</code><span data-i18n="dark:t080">），保留"企业级"视觉</span></li>
      <li><b><span data-i18n="dark:t081">白标场景灵活性</span></b><span data-i18n="dark:t082">：每个租户的暗色主色不是单纯亮度变化（如某租户 light</span> <code>#165DFF</code> / dark <code>#4080FF</code><span data-i18n="dark:t083">，但有租户 light</span> <code>#CF1322</code> / dark <code>#FF4D4F</code><span data-i18n="dark:t084">），手写 token 表更灵活</span></li>
    </ul>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><b style="color:var(--aw-text-1)"><span data-i18n="dark:t085">代价：</span></b><span data-i18n="dark:t086">antd 内置组件（如 Drawer / Modal / Tooltip）依然用 antd 内部 dark token；它们的</span> <code>colorBgElevated</code> <span data-i18n="dark:t087">与 TMS 的</span> <code>--aw-bg-elevated</code> <span data-i18n="dark:t088">可能产生</span><b><span data-i18n="dark:t089">组件级视觉差</span></b>.</p>
    <div class="code-block"><pre><code>// ConfigProvider setup -- key point: do not pass darkAlgorithm
&lt;ConfigProvider theme={{
  // Do not use algorithm: theme.darkAlgorithm in TMS
  algorithm: theme.defaultAlgorithm,    // light and dark both use defaultAlgorithm
  token: data-theme === 'dark'
    ? darkTokens   // manual mapping: --aw-* dark values -> antd token names
    : lightTokens,
}}&gt;
  &lt;App /&gt;
&lt;/ConfigProvider&gt;</code></pre></div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong><span data-i18n="dark:t090">antd 升级回归：</span></strong><span data-i18n="dark:t091">antd 主版本升级时（v5 → v6 / v6 → v7）必须人工核对 antd 内部组件的 dark 视觉，darkAlgorithm 的派生算法变化会让 antd 自带的 Drawer / Modal / Tooltip 的 dark 与 TMS 手写 token 产生新差异。详见</span> <a href="#/config-provider" style="color:var(--aw-primary)"><span data-i18n="dark:t092">ConfigProvider 升级 checklist</span></a>.</div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="dark:t093">切换流程 · FOUC 防护</span></h3>
    <div class="code-block"><pre><code>// 1. Inline script in <head> -- must run before any rendering
&lt;script&gt;
  try {
    var t = localStorage.getItem('aw-theme');
    if (t === 'dark' || t === 'light') {
      document.documentElement.setAttribute('data-theme', t);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {}
&lt;/script&gt;

// 2. Toggle function -- write DOM + storage + storage event
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('aw-theme', theme);
}

// 3. Global transition -- root only, avoid sluggish component hover
html, body { transition: background-color 200ms var(--aw-ease); }

// 4. Cross-tab sync
window.addEventListener('storage', function(e) {
  if (e.key === 'aw-theme') {
    document.documentElement.setAttribute('data-theme', e.newValue);
  }
});</code></pre></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="dark:t094">规则 · Do &amp; Don'ts</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="dark:t095">暗色 token 通过</span> <code>[data-theme="dark"]</code> <span data-i18n="dark:t096">完整覆盖</span></li>
          <li><span data-i18n="dark:t097">FOUC 防护脚本在</span> <code>&lt;head&gt;</code> <span data-i18n="dark:t098">同步执行</span></li>
          <li><span data-i18n="dark:t099">组件必须同时通过 Light + Dark 视觉回归</span></li>
          <li><span data-i18n="dark:t100">状态色统一提亮 + 降饱和（保对比度）</span></li>
          <li><span data-i18n="dark:t101">大屏 / 仪表盘默认暗色</span></li>
          <li><span data-i18n="dark:t102">暗模式阴影提强度（0.4 ~ 0.6 alpha）</span></li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="dark:t103">不要用纯黑</span> <code>#000</code> <span data-i18n="dark:t104">或纯白</span> <code>#FFF</code></li>
          <li><span data-i18n="dark:t105">不要在暗底用品牌主色</span> <code>#165DFF</code><span data-i18n="dark:t106">（对比度不够）</span></li>
          <li><span data-i18n="dark:t107">不要 JS 写</span> <code>document.documentElement.style.setProperty</code> <span data-i18n="dark:t108">切 token（与白标冲突）</span></li>
          <li><span data-i18n="dark:t109">不要让所有 transition 都参与切换（hover 会迟钝）</span></li>
          <li><span data-i18n="dark:t110">不要忽略 OS</span> <code>prefers-color-scheme</code></li>
          <li><span data-i18n="dark:t111">不要把 light 的阴影直接用到 dark（视觉消失）</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
