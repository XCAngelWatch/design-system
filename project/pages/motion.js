/* AngelWatch Design System — page: motion (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["motion"] = `
<div class="content">
<!-- MOTION -->
<section class="section" id="motion">
  <p class="section-eyebrow"><span data-i18n="motion:t001">设计基础 · 动效</span></p>
  <h2><span data-i18n="motion:t002">动效 Motion</span></h2>
  <p class="lede"><span data-i18n="motion:t003">沿用 Ant Design v6 的动效三原则 ——</span> <b><span data-i18n="motion:t004">自然</span></b> / <b><span data-i18n="motion:t005">高效</span></b> / <b><span data-i18n="motion:t006">克制</span></b><span data-i18n="motion:t007">。一条缓动曲线，三档时长，是这三条原则的物理落地。专注功能性反馈（hover / focus / 过渡），不引入装饰性动画。</span></p>

  <div class="subsection" style="margin-top:18px">
    <h3><span data-i18n="motion:t008">三条动效原则</span></h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="motion:t009">原则 · 01</span></div>
        <h3 style="margin:0 0 6px;font-size:15px"><span data-i18n="motion:t010">自然 · Natural</span></h3>
        <p style="margin:0 0 8px;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="motion:t011">遵从自然运动规律，保证视觉连贯，让用户感知到动作是"成立"的 —— 不是任意补间，而是有惯性、有阻尼。</span></p>
        <p style="margin:0;font-size:12px;color:var(--aw-text-3);line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="motion:t012">落地：</span></b><span data-i18n="motion:t013">统一缓动</span> <code class="mono">cubic-bezier(.34,.69,.1,1)</code><span data-i18n="motion:t014">（先快后慢，模拟惯性减速），不用 linear / ease-in。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="motion:t015">原则 · 02</span></div>
        <h3 style="margin:0 0 6px;font-size:15px"><span data-i18n="motion:t016">高效 · Efficient</span></h3>
        <p style="margin:0 0 8px;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="motion:t017">中后台场景效率优先 —— 尽量缩短过渡时间，快速完成动画。出场动画必须直接、不夸张。</span></p>
        <p style="margin:0;font-size:12px;color:var(--aw-text-3);line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="motion:t018">落地：</span></b><span data-i18n="motion:t019">fast 120ms / base 200ms / slow 320ms 三档封顶；超过 320ms 的动画必须 PR review 论证；不允许 enter / exit 不对称（如进 200ms 出 600ms）。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="motion:t020">原则 · 03</span></div>
        <h3 style="margin:0 0 6px;font-size:15px"><span data-i18n="motion:t021">克制 · Restrained</span></h3>
        <p style="margin:0 0 8px;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="motion:t022">动效要有目的，不为博眼球。子要素的过场（图标切换、菜单展开）保持低调，让内容本身成为视觉焦点。</span></p>
        <p style="margin:0;font-size:12px;color:var(--aw-text-3);line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="motion:t023">落地：</span></b><span data-i18n="motion:t024">禁止 bounce / overshoot / scale &gt; 1.05 / rotate 装饰；禁用纯展示动画（如卡片入场逐个 stagger）。功能性反馈优先 —— hover、focus、loading、success。</span></p>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="motion:t025">时长 / 缓动 Token</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="motion:t026">三档时长是"高效"原则的量化表达，单一缓动是"自然"原则的量化表达。所有组件直接消费这四个 token，不在业务代码自建 timing。</span></p>
    <div class="surface">
      <div class="demo-grid cols-3">
        <div><div class="mono" style="margin-bottom:8px">120ms · fast</div><div style="font-size:13px;color:var(--aw-text-2)"><span data-i18n="motion:t027">Hover、focus、tooltip、color / opacity 微变。</span></div></div>
        <div><div class="mono" style="margin-bottom:8px">200ms · base</div><div style="font-size:13px;color:var(--aw-text-2)"><span data-i18n="motion:t028">大多数过渡：tabs、accordion、按钮态、popover。</span></div></div>
        <div><div class="mono" style="margin-bottom:8px">320ms · slow</div><div style="font-size:13px;color:var(--aw-text-2)"><span data-i18n="motion:t029">drawer、modal 进出、页面级过场。</span></div></div>
      </div>
    </div>
    <div class="code" style="margin-top:12px"><span class="c"><span data-i18n="motion:t030">/* 全局缓动（自然原则）+ 三档时长（高效原则） */</span></span>
<span class="k">--aw-ease</span>: cubic-bezier(0.34, 0.69, 0.1, 1);
<span class="k">--aw-dur-fast</span>: 120ms;
<span class="k">--aw-dur-base</span>: 200ms;
<span class="k">--aw-dur-slow</span>: 320ms;</div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="motion:t031">与 antd motion token 的映射</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="motion:t032">antd 内置组件用自己的 motion token（</span><code>motionEaseInOut</code> / <code>motionDurationFast/Mid/Slow</code><span data-i18n="motion:t033">）。TMS 自有动画用</span> <code>--aw-ease</code> / <code>--aw-dur-*</code><span data-i18n="motion:t034">。两套必须同源 —— 否则同一界面 antd 组件和 TMS 组件的入场曲线不一致。下表给出映射 + 必须在 ConfigProvider 显式覆盖的项。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:24%">TMS token</th><th style="width:30%"><span data-i18n="motion:t035">值</span></th><th style="width:24%">antd token</th><th><span data-i18n="motion:t036">antd 默认</span></th></tr></thead>
      <tbody>
        <tr><td><code>--aw-ease</code></td><td><span class="mono">cubic-bezier(.34,.69,.1,1)</span></td><td><code>motionEaseInOut</code></td><td><span class="mono">cubic-bezier(.645,.045,.355,1)</span> <span data-i18n="motion:t037">⚠ 不同</span></td></tr>
        <tr><td><code>--aw-dur-fast</code></td><td>120ms</td><td><code>motionDurationFast</code></td><td><span data-i18n="motion:t038">0.1s ⚠ 多 20ms</span></td></tr>
        <tr><td><code>--aw-dur-base</code></td><td>200ms</td><td><code>motionDurationMid</code></td><td><span data-i18n="motion:t039">0.2s ✓ 同</span></td></tr>
        <tr><td><code>--aw-dur-slow</code></td><td>320ms</td><td><code>motionDurationSlow</code></td><td><span data-i18n="motion:t040">0.3s ⚠ 多 20ms</span></td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><span data-i18n="motion:t041">⚠ 所有标记的项必须在</span> <a href="#/config-provider" style="color:var(--aw-primary)">ConfigProvider</a> <span data-i18n="motion:t042">中显式覆盖到 antd token，否则 antd 内置组件用 antd 默认（视觉与 TMS 自有组件不一致）。详见 config-provider 页代码示例。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="motion:t043">降低动效偏好 · prefers-reduced-motion</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="motion:t044">系统设置开启"减少动效"时（macOS Accessibility / Windows 简单视觉效果）必须降级到几乎无动画 —— 不仅是 CSS transition，也包括</span> <code>rc-motion</code> <span data-i18n="motion:t045">内部的 keyframes。</span></p>
    <div class="code-block"><pre><code>@media (prefers-reduced-motion: reduce) {
  /* 1. Reduce CSS transitions directly */
  *, *::before, *::after {
    transition-duration: 1ms !important;
    /* rc-motion uses animation/keyframes; transition rules cannot stop it */
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
  /* 2. Reduce tokens too, so ConfigProvider injects them into antd internals */
  :root, [data-theme="dark"] {
    --aw-dur-fast: 1ms;
    --aw-dur-base: 1ms;
    --aw-dur-slow: 1ms;
  }
}</code></pre></div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="motion:t046">完整链路：</span></b><span data-i18n="motion:t047">CSS variable 降为 1ms → ConfigProvider 监听</span> <code>--aw-dur-*</code> <span data-i18n="motion:t048">把 antd</span> <code>motionDurationFast/Mid/Slow</code> <span data-i18n="motion:t049">同步覆盖 → antd 内部组件入场动画也降为 1ms。两层都改才能闭环，仅改 CSS transition 拦不住 antd Drawer/Modal 的 rc-motion 入场。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="motion:t050">主题与切换 · Light / Dark</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="motion:t051">设计系统全套支持 light + dark 主题。切换通过</span> <code>&lt;html data-theme="..."&gt;</code> <span data-i18n="motion:t052">触发，所有</span> <code>--aw-*</code> <span data-i18n="motion:t053">token 在</span> <code>[data-theme="dark"]</code> <span data-i18n="motion:t054">选择器下重新声明。</span></p>

    <div class="surface" style="padding:14px;font-family:var(--aw-font-mono);font-size:12px;line-height:1.85;color:var(--aw-text-2)">
      <div style="color:var(--aw-text-3)"><span data-i18n="motion:t055">// 入口位置</span></div>
      <div><span data-i18n="motion:t056">Topbar 右侧 toolbar · 太阳 / 月亮 icon (位于面包屑同行右端)</span></div>
      <div style="margin-top:8px;color:var(--aw-text-3)"><span data-i18n="motion:t057">// 默认策略</span></div>
      <div><span data-i18n="motion:t058">1. 首次访问读</span> <b>prefers-color-scheme</b> <span data-i18n="motion:t059">系统设置</span></div>
      <div><span data-i18n="motion:t060">2. 用户手动切换后写入</span> <b>localStorage('aw-theme')</b><span data-i18n="motion:t061">，覆盖系统</span></div>
      <div><span data-i18n="motion:t062">3. 跨标签同步：监听 storage event 重新读 localStorage 应用</span></div>
      <div style="margin-top:8px;color:var(--aw-text-3)"><span data-i18n="motion:t063">// 切换动效 (避免组件级闪烁)</span></div>
      <div>html, body { transition: background-color 200ms var(--aw-ease); }</div>
      <div>* { transition: background-color 120ms, border-color 120ms, color 120ms; }</div>
      <div style="margin-top:8px;color:var(--aw-text-3)"><span data-i18n="motion:t064">// FOUC 防护 (在 &lt;head&gt; 内同步执行)</span></div>
      <div>var t = localStorage.getItem('aw-theme');</div>
      <div>if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);</div>
    </div>

    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="motion:t065">切换瞬间过渡：</span></strong><span data-i18n="motion:t066">仅根 root + 全局 background-color / border-color / color 过渡 120ms，不要让所有 transition 都参与（否则 hover 反应迟钝）。</span></div></div>

    <div class="alert warning" style="margin-top:8px"><div class="ico">!</div><div class="content"><strong><span data-i18n="motion:t067">暗色 logo：</span></strong><span data-i18n="motion:t068">brand-logo 在深色侧栏头会糊。已通过</span> <code>filter: brightness(0) invert(1)</code> <span data-i18n="motion:t069">反白处理。租户提供的 logo 若已是单色版本可在 webConfig 中标记</span> <code>logo.darkVariant</code> <span data-i18n="motion:t070">直接切换，避免 filter 失真。</span></div></div>

    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="motion:t071">禁止运行时改 token 数值：</span></strong><span data-i18n="motion:t072">主题切换走 CSS 选择器（</span><code>[data-theme]</code><span data-i18n="motion:t073">），不要 JS 写</span> <code>document.documentElement.style.setProperty</code><span data-i18n="motion:t074">，会和租户白标 token 冲突。</span></div></div>
  </div>
</section>
</div>
`;
