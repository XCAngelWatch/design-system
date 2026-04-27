/* AngelWatch Design System — page: motion (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["motion"] = `
<div class="content">
<!-- MOTION -->
<section class="section" id="motion">
  <p class="section-eyebrow">Foundations · 动效</p>
  <h2>Motion</h2>
  <p class="lede">一条缓动曲线，三档时长。专注功能性反馈——hover、focus、过渡——避免装饰性动画。</p>
  <div class="surface">
    <div class="demo-grid cols-3">
      <div><div class="mono" style="margin-bottom:8px">120ms · fast</div><div style="font-size:13px;color:var(--aw-text-2)">Hover、focus、tooltip。</div></div>
      <div><div class="mono" style="margin-bottom:8px">200ms · base</div><div style="font-size:13px;color:var(--aw-text-2)">大多数过渡：tabs、accordion、按钮态。</div></div>
      <div><div class="mono" style="margin-bottom:8px">320ms · slow</div><div style="font-size:13px;color:var(--aw-text-2)">drawer、modal 进出。</div></div>
    </div>
  </div>
  <div class="code" style="margin-top:12px"><span class="c">/* 全局缓动 */</span>
<span class="k">--aw-ease</span>: cubic-bezier(0.34, 0.69, 0.1, 1);</div>

  <div class="subsection">
    <h3>主题与切换 · Light / Dark</h3>
    <p class="lede" style="margin-bottom:12px">设计系统全套支持 light + dark 主题。切换通过 <code>&lt;html data-theme="..."&gt;</code> 触发，所有 <code>--aw-*</code> token 在 <code>[data-theme="dark"]</code> 选择器下重新声明。</p>

    <div class="surface" style="padding:14px;font-family:var(--aw-font-mono);font-size:12px;line-height:1.85;color:var(--aw-text-2)">
      <div style="color:var(--aw-text-3)">// 入口位置</div>
      <div>Topbar 右侧 toolbar · 太阳 / 月亮 icon (位于面包屑同行右端)</div>
      <div style="margin-top:8px;color:var(--aw-text-3)">// 默认策略</div>
      <div>1. 首次访问读 <b>prefers-color-scheme</b> 系统设置</div>
      <div>2. 用户手动切换后写入 <b>localStorage('aw-theme')</b>，覆盖系统</div>
      <div>3. 跨标签同步：监听 storage event 重新读 localStorage 应用</div>
      <div style="margin-top:8px;color:var(--aw-text-3)">// 切换动效 (避免组件级闪烁)</div>
      <div>html, body { transition: background-color 200ms var(--aw-ease); }</div>
      <div>* { transition: background-color 120ms, border-color 120ms, color 120ms; }</div>
      <div style="margin-top:8px;color:var(--aw-text-3)">// FOUC 防护 (在 &lt;head&gt; 内同步执行)</div>
      <div>var t = localStorage.getItem('aw-theme');</div>
      <div>if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);</div>
    </div>

    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong>切换瞬间过渡：</strong>仅根 root + 全局 background-color / border-color / color 过渡 120ms，不要让所有 transition 都参与（否则 hover 反应迟钝）。</div></div>

    <div class="alert warning" style="margin-top:8px"><div class="ico">!</div><div class="content"><strong>暗色 logo：</strong>brand-logo 在深色侧栏头会糊。已通过 <code>filter: brightness(0) invert(1)</code> 反白处理。租户提供的 logo 若已是单色版本可在 webConfig 中标记 <code>logo.darkVariant</code> 直接切换，避免 filter 失真。</div></div>

    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>禁止运行时改 token 数值：</strong>主题切换走 CSS 选择器（<code>[data-theme]</code>），不要 JS 写 <code>document.documentElement.style.setProperty</code>，会和租户白标 token 冲突。</div></div>
  </div>
</section>
</div>
`;
