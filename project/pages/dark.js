/* AngelWatch Design System — page: dark (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["dark"] = `
<div class="content">
<section class="section" id="dark">
  <p class="section-eyebrow">Foundations · 暗黑模式</p>
  <h2>Dark Mode · 暗黑模式</h2>
  <p class="lede">暗色主题在 TMS 是一等公民，不是切换插件。token 通过 <code>[data-theme="dark"]</code> 完整覆盖，所有组件都参与 dark 视觉回归。运维夜班高频使用，沿袭旧 Vue 版本的暗色习惯。</p>

  <div class="subsection">
    <h3>使用场景</h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">场景 · 01</div>
        <h3 style="margin:0 0 8px;font-size:14px">运维夜班</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">长时间值守降低眼压。Dashboard / List / Detail 页全套适配；配合 OS <code>prefers-color-scheme</code> 自动切换。</p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">场景 · 02</div>
        <h3 style="margin:0 0 8px;font-size:14px">监控大屏</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">墙体 / 显示器投屏；亮色背景反光强。Dashboard 默认暗色，统计数字提亮，状态色饱和度上调。</p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">场景 · 03</div>
        <h3 style="margin:0 0 8px;font-size:14px">沉浸分析</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">长时间数据分析 / 故障排查 —— 暗色减少视觉干扰。表单页 / 配置页默认 light，但用户偏好覆盖。</p>
      </div>
    </div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">默认策略：</b>1) 首次访问读 OS <code>prefers-color-scheme</code>；2) 用户切换后写 <code>localStorage('aw-theme')</code> 覆盖；3) 跨标签同步 <code>storage</code> event。</p>
  </div>

  <div class="subsection">
    <h3>色彩转换原则</h3>
    <table class="map-table">
      <thead><tr><th style="width:22%">维度</th><th style="width:38%">规则</th><th>原因</th></tr></thead>
      <tbody>
        <tr><td>背景</td><td>不用纯黑 <span class="mono">#000</span>，用灰阶 <span class="mono">#0F1115</span> 页面底 / <span class="mono">#14171D</span> 卡片</td><td>纯黑 OLED 闪烁感强；灰阶呈现层次</td></tr>
        <tr><td>文本</td><td>不用纯白 <span class="mono">#FFF</span>，用 <span class="mono">rgba(255,255,255,.92)</span></td><td>纯白与暗背景对比过强，长时间阅读眼睛酸</td></tr>
        <tr><td>品牌色</td><td>提亮 + 降饱和：<span class="mono">#0052CC</span> → <span class="mono">#4A8BE0</span></td><td>原品牌色在暗底对比度不够（仅 3:1）；提亮变体保 4.5:1</td></tr>
        <tr><td>状态色</td><td>统一提亮：success <span class="mono">#389E0D → #52C41A</span></td><td>暗底色块需要更亮才能识别；保留色相不变</td></tr>
        <tr><td>边框</td><td>用 <span class="mono">#3A3F4A → #2D323C → #232831</span> 三档</td><td>层次比 light 模式更微，避免割裂感</td></tr>
        <tr><td>阴影</td><td>纯黑 + 高 alpha（0.4 ~ 0.6）</td><td>暗底要更深的阴影才有空间感</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>背景层级 · 5 档</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">暗色模式下"高度"通过深浅区分而非阴影 —— 越浅 = 越接近用户。</p>
    <div class="dark-layer-grid">
      <div class="dlay" style="background:#0F1115"><div class="dl-name">--aw-bg-page</div><div class="dl-hex">#0F1115</div><div class="dl-use">页面底（最远）</div></div>
      <div class="dlay" style="background:#14171D"><div class="dl-name">--aw-bg</div><div class="dl-hex">#14171D</div><div class="dl-use">卡片 / 表格</div></div>
      <div class="dlay" style="background:#1B1F27"><div class="dl-name">--aw-fill-1</div><div class="dl-hex">#1B1F27</div><div class="dl-use">表头 / hover</div></div>
      <div class="dlay" style="background:#21262F"><div class="dl-name">--aw-fill-2</div><div class="dl-hex">#21262F</div><div class="dl-use">输入填充</div></div>
      <div class="dlay" style="background:#2A2F38"><div class="dl-name">--aw-fill-3</div><div class="dl-hex">#2A2F38</div><div class="dl-use">弹层 / 抽屉（最近）</div></div>
    </div>
  </div>

  <div class="subsection">
    <h3>对比度阶梯（vs 暗底）</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">同 light 模式四档文本对比度，但实现方式不同：用 <code>rgba(255,255,255,*)</code> 透明度阶梯，而非具体灰色。</p>
    <table class="map-table">
      <thead><tr><th style="width:22%">层级</th><th style="width:32%">值</th><th style="width:18%">vs #14171D</th><th>用途</th></tr></thead>
      <tbody>
        <tr><td><b>主要 · 92%</b></td><td><span class="mono">rgba(255,255,255,.92)</span></td><td><span class="wcag-badge aaa">15.6:1</span></td><td>标题 / 主列 / 数字</td></tr>
        <tr><td><b>次要 · 72%</b></td><td><span class="mono">rgba(255,255,255,.72)</span></td><td><span class="wcag-badge aaa">10.8:1</span></td><td>正文 / 表单值</td></tr>
        <tr><td><b>说明 · 52%</b></td><td><span class="mono">rgba(255,255,255,.52)</span></td><td><span class="wcag-badge aa">6.1:1</span></td><td>placeholder / 时间戳</td></tr>
        <tr><td><b>禁用 · 32%</b></td><td><span class="mono">rgba(255,255,255,.32)</span></td><td><span class="wcag-badge fail">3.0:1</span></td><td>仅装饰 / 离线 / 禁用</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>为什么不用 antd <code>darkAlgorithm</code></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">antd v5+ 提供 <code>theme.darkAlgorithm</code>，传入 light token 自动派生 dark token。TMS <b>不</b>用 darkAlgorithm，原因有三：</p>
    <ul style="margin:0 0 12px;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
      <li><b>沿袭旧 Vue 项目的暗色习惯</b>：运维人员对 <code>#0F1115 → #14171D → #1B1F27</code> 三档背景已经形成肌肉记忆；darkAlgorithm 的派生结果是 <code>#141414 → #1F1F1F → #262626</code>，迁移会破坏既有习惯</li>
      <li><b>状态色饱和度不一致</b>：darkAlgorithm 对状态色提亮幅度大（如 success <code>#52C41A → #6ABE39</code>），TMS 偏好更克制（<code>#389E0D → #52C41A</code>），保留"企业级"视觉</li>
      <li><b>白标场景灵活性</b>：每个租户的暗色主色不是单纯亮度变化（如某租户 light <code>#0052CC</code> / dark <code>#4A8BE0</code>，但有租户 light <code>#CF1322</code> / dark <code>#FF4D4F</code>），手写 token 表更灵活</li>
    </ul>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><b style="color:var(--aw-text-1)">代价：</b>antd 内置组件（如 Drawer / Modal / Tooltip）依然用 antd 内部 dark token；它们的 <code>colorBgElevated</code> 与 TMS 的 <code>--aw-bg-elevated</code> 可能产生<b>组件级视觉差</b>。</p>
    <div class="code-block"><pre><code>// ConfigProvider 配置 — 关键: 不传 algorithm
&lt;ConfigProvider theme={{
  // ⛔ algorithm: theme.darkAlgorithm   ← TMS 不用
  algorithm: theme.defaultAlgorithm,    // light / dark 都用 default
  token: data-theme === 'dark'
    ? darkTokens   // 手写映射: --aw-* dark 值 → antd token 名
    : lightTokens,
}}&gt;
  &lt;App /&gt;
&lt;/ConfigProvider&gt;</code></pre></div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong>antd 升级回归：</strong>antd 主版本升级时（v5 → v6 / v6 → v7）必须人工核对 antd 内部组件的 dark 视觉，darkAlgorithm 的派生算法变化会让 antd 自带的 Drawer / Modal / Tooltip 的 dark 与 TMS 手写 token 产生新差异。详见 <a href="#/config-provider" style="color:var(--aw-primary)">ConfigProvider 升级 checklist</a>。</div></div>
  </div>

  <div class="subsection">
    <h3>切换流程 · FOUC 防护</h3>
    <div class="code-block"><pre><code>// 1. &lt;head&gt; 内 inline script —— 必须在任何渲染前执行
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

// 2. 切换函数 —— 写 dom + 写 storage + 触发 storage event
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('aw-theme', theme);
}

// 3. 全局过渡 —— 仅 root 级,避免组件 hover 反应迟钝
html, body { transition: background-color 200ms var(--aw-ease); }

// 4. 跨标签同步
window.addEventListener('storage', function(e) {
  if (e.key === 'aw-theme') {
    document.documentElement.setAttribute('data-theme', e.newValue);
  }
});</code></pre></div>
  </div>

  <div class="subsection">
    <h3>规则 · Do &amp; Don'ts</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>暗色 token 通过 <code>[data-theme="dark"]</code> 完整覆盖</li>
          <li>FOUC 防护脚本在 <code>&lt;head&gt;</code> 同步执行</li>
          <li>组件必须同时通过 Light + Dark 视觉回归</li>
          <li>状态色统一提亮 + 降饱和（保对比度）</li>
          <li>大屏 / 仪表盘默认暗色</li>
          <li>暗模式阴影提强度（0.4 ~ 0.6 alpha）</li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>不要用纯黑 <code>#000</code> 或纯白 <code>#FFF</code></li>
          <li>不要在暗底用品牌主色 <code>#0052CC</code>（对比度不够）</li>
          <li>不要 JS 写 <code>document.documentElement.style.setProperty</code> 切 token（与白标冲突）</li>
          <li>不要让所有 transition 都参与切换（hover 会迟钝）</li>
          <li>不要忽略 OS <code>prefers-color-scheme</code></li>
          <li>不要把 light 的阴影直接用到 dark（视觉消失）</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
