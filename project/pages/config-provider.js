/* AngelWatch Design System — page: config-provider (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["config-provider"] = `
<div class="content">
<section class="section" id="config-provider">
  <p class="section-eyebrow">Specs · 全局配置</p>
  <h2>Config Provider · 全局覆盖必填项清单</h2>
  <p class="lede">antd 默认值与 TMS 内部约定有 13 项不一致 —— 这一页是把 docs 中散布的"我们用的是 X 而不是 antd 默认 Y"集中落地到 <code>&lt;ConfigProvider&gt;</code> 的<b>唯一入口</b>。所有项目根 <code>App.tsx</code> 必须包一层带这些覆盖的 ConfigProvider，否则视觉与 docs 不一致是已知 bug。集中收口在 <code class="mono">packages/web/src/app/AntdConfig.tsx</code>。</p>

  <div class="subsection">
    <h3>覆盖项一览</h3>
    <table class="map-table">
      <thead><tr><th style="width:18%">维度</th><th style="width:24%">antd 默认</th><th style="width:24%">TMS 覆盖</th><th>覆盖位置</th></tr></thead>
      <tbody>
        <tr class="map-group"><td colspan="4">Token 层 · theme.token</td></tr>
        <tr><td>colorPrimary</td><td><span class="mono">#1677FF</span></td><td><span class="mono">#0052CC</span></td><td><code>theme.token.colorPrimary</code></td></tr>
        <tr><td>motionEaseInOut</td><td><span class="mono">cubic-bezier(.645,.045,.355,1)</span></td><td><span class="mono">cubic-bezier(.34,.69,.1,1)</span></td><td><code>theme.token.motionEaseInOut</code></td></tr>
        <tr><td>motionDurationSlow</td><td>0.3s</td><td>0.32s</td><td><code>theme.token.motionDurationSlow</code></td></tr>
        <tr><td>borderRadius</td><td>6</td><td>6</td><td>同 ✓ 不需覆盖</td></tr>
        <tr><td>controlHeight</td><td>32</td><td>32</td><td>同 ✓ 不需覆盖</td></tr>
        <tr><td>fontSize</td><td>14</td><td>14</td><td>同 ✓ 不需覆盖</td></tr>
        <tr><td>wireframe</td><td>false (填充式)</td><td>false</td><td>显式声明 <code>theme.token.wireframe = false</code> 防御 antd 升级默认值变化</td></tr>
        <tr class="map-group"><td colspan="4">组件层 · theme.components</td></tr>
        <tr><td>Button.fontWeight</td><td>400</td><td>500</td><td><code>theme.components.Button.fontWeight</code></td></tr>
        <tr><td>Button.primaryShadow</td><td><span class="mono">0 2px 0 rgba(...)</span></td><td><span class="mono">none</span></td><td><code>theme.components.Button.primaryShadow</code></td></tr>
        <tr><td>Pagination.pageSize</td><td>10</td><td>20</td><td>不在 theme，需 <code>&lt;Pagination defaultPageSize={20}&gt;</code> 或 <code>&lt;Table pagination={'{ pageSize: 20 }'}&gt;</code></td></tr>
        <tr><td>Notification.duration</td><td>4.5s</td><td>0 (手动关闭)</td><td><code>notification.config({ duration: 0 })</code> · 启动时 1 次</td></tr>
        <tr><td>Form.validateTrigger</td><td>onChange</td><td>onBlur (必填) / onChange (格式)</td><td><code>&lt;Form validateTrigger="onBlur"&gt;</code> · 默认</td></tr>
        <tr><td>Form.validateMessages</td><td>antd 内置 zh / en</td><td>TMS 文案三层模板</td><td><code>theme</code> 不管，需 <code>&lt;ConfigProvider form.validateMessages={'{...}'}&gt;</code></td></tr>
        <tr><td>Tag.13 个预设色</td><td>13 (含 volcano/lime/yellow)</td><td>10 (8 标签色 + 状态色)</td><td>不在 antd ConfigProvider 内禁用，靠 lint 拦截 <code>color="volcano"</code> 等</td></tr>
        <tr class="map-group"><td colspan="4">渲染层 · ConfigProvider props</td></tr>
        <tr><td>locale</td><td>en_US</td><td>zh_CN (默认) · en_US / es_ES / pt_BR (切换)</td><td><code>&lt;ConfigProvider locale={zhCN}&gt;</code></td></tr>
        <tr><td>componentSize</td><td>middle (32px)</td><td>middle</td><td>同 ✓ 不需覆盖</td></tr>
        <tr><td>renderEmpty</td><td>antd 自带彩色插画</td><td>TMS Empty 组件 (单色 + Result.extra)</td><td><code>&lt;ConfigProvider renderEmpty={() =&gt; &lt;TMSEmpty /&gt;}&gt;</code></td></tr>
        <tr><td>getPopupContainer</td><td>document.body</td><td>parentElement (跟随滚动)</td><td><code>&lt;ConfigProvider getPopupContainer={node =&gt; node?.parentElement || document.body}&gt;</code></td></tr>
        <tr><td>getTargetContainer</td><td>window</td><td>app-main 滚动容器</td><td><code>&lt;ConfigProvider getTargetContainer={() =&gt; document.getElementById('app-main')}&gt;</code></td></tr>
        <tr><td>direction</td><td>ltr</td><td>ltr</td><td>同 ✓ 不支持 RTL</td></tr>
        <tr><td>theme.algorithm</td><td>defaultAlgorithm</td><td>自定义 (不用 darkAlgorithm)</td><td>见 <a href="#/dark" style="color:var(--aw-primary)">dark 页</a> · 手写 token，不走 algorithm</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>完整 ConfigProvider 示例</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><code>packages/web/src/app/AntdConfig.tsx</code> 是项目的<b>单一入口</b>。任何项目根都要包一层这个组件，自定义 hook / API 不能跳过。</p>
    <div class="code-block"><pre><code>// packages/web/src/app/AntdConfig.tsx
import { ConfigProvider, notification, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { tmsThemeToken, tmsComponentOverrides } from '@tms/design-tokens';
import { TMSEmpty } from '@/components/Empty';
import { tmsValidateMessages } from '@/i18n/validate';

// 启动时 1 次 — Notification 全局禁自动关闭
notification.config({ duration: 0, placement: 'topRight', maxCount: 3 });

export const AntdConfig: FC&lt;{ children: ReactNode; locale?: Locale }&gt; = ({
  children,
  locale = zhCN,
}) =&gt; {
  return (
    &lt;ConfigProvider
      locale={locale}
      // === Token 层 ===
      theme={{
        token: {
          ...tmsThemeToken,             // colorPrimary / motionEaseInOut / wireframe ...
          motionEaseInOut: 'cubic-bezier(0.34, 0.69, 0.1, 1)',
          motionDurationFast: '120ms',
          motionDurationMid:  '200ms',
          motionDurationSlow: '320ms',
          wireframe: false,             // 显式 — 防御 antd 升级
        },
        components: {
          ...tmsComponentOverrides,
          Button:     { fontWeight: 500, primaryShadow: 'none', defaultBorderColor: '#D9D9D9' },
          Table:      { headerBg: '#FAFAFA', cellPaddingBlock: 10, cellPaddingInline: 12 },
          Pagination: { itemSize: 32 },
          Form:       { labelColor: '#4B5563', verticalLabelPadding: '0 0 4px' },
          Modal:      { borderRadiusLG: 8, paddingContentHorizontalLG: 24 },
          Tag:        { defaultBg: '#F5F5F5', defaultColor: '#4B5563' },
        },
        // 暗色: 不用 antd darkAlgorithm, 自定义 token 在 [data-theme="dark"] CSS 选择器下覆盖
        // algorithm: undefined  ← 不传, 走 defaultAlgorithm
      }}
      // === 渲染层 ===
      renderEmpty={() =&gt; &lt;TMSEmpty /&gt;}
      getPopupContainer={(node) =&gt; node?.parentElement || document.body}
      getTargetContainer={() =&gt; document.getElementById('app-main') || window}
      // === Form 层 ===
      form={{
        validateMessages: tmsValidateMessages, // 错误文案三层模板, 见 copywriting 页
        scrollToFirstError: true,
        requiredMark: true,
      }}
      // === Pagination 层 ===
      pagination={{ defaultPageSize: 20, pageSizeOptions: [20, 50, 100, 200] }}
    &gt;
      {children}
    &lt;/ConfigProvider&gt;
  );
};</code></pre></div>
  </div>

  <div class="subsection">
    <h3>嵌套 ConfigProvider · 局部覆盖</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">单点需要不同主题（如监控大屏强制暗色 / 危险操作面板品牌色变红 / 多租户白标）时，子树嵌一层 <code>&lt;ConfigProvider&gt;</code>。子级 token 自动继承父级，只覆盖差异项。</p>
    <div class="code-block"><pre><code>// 案例 1: 监控大屏子树强制暗色
&lt;ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}&gt;
  &lt;DashboardScreen /&gt;
&lt;/ConfigProvider&gt;

// 案例 2: 危险操作面板 (整个区域用红色主题)
&lt;ConfigProvider theme={{ token: { colorPrimary: '#CF1322' } }}&gt;
  &lt;DangerPanel&gt;
    &lt;Button type="primary"&gt;立即处理&lt;/Button&gt;
  &lt;/DangerPanel&gt;
&lt;/ConfigProvider&gt;

// 案例 3: 多租户白标 (运行时切换)
&lt;ConfigProvider theme={{
  token: {
    colorPrimary: tenantConfig.brandColor,    // 租户主色
    colorLink:    tenantConfig.brandColor,
  },
}}&gt;
  &lt;Shell /&gt;
&lt;/ConfigProvider&gt;</code></pre></div>
  </div>

  <div class="subsection">
    <h3>CSS 变量 ↔ antd token 双向同步</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">TMS 用<b>两套</b>主题系统并行：<b>1)</b> CSS 变量 <code>--aw-*</code>（自有组件 + 业务页面）；<b>2)</b> antd CSS-in-JS theme token（antd 内置组件）。两套必须同源 —— 否则同一界面两组组件颜色对不齐。生成器代码：</p>
    <div class="code-block"><pre><code>// packages/design-tokens/src/sync.ts
// 编译期: tokens.json → 同时生成 tokens.css 和 antdThemeToken.ts
// 运行时: 切换主题 (light/dark/tenant) 同时 setAttribute + ConfigProvider key
function syncTokens(theme: 'light' | 'dark', tenantId?: string) {
  // 1. CSS variables
  document.documentElement.setAttribute('data-theme', theme);
  if (tenantId) document.documentElement.setAttribute('data-tenant', tenantId);

  // 2. antd ConfigProvider 重建 (key 变化触发 re-render)
  // 由 zustand store 的 themeKey state 控制 ConfigProvider 的 key prop
  themeStore.setState({ themeKey: theme + ':' + (tenantId || 'default') });
}

// AntdConfig 内部
&lt;ConfigProvider key={themeKey} theme={resolvedTheme}&gt;...&lt;/ConfigProvider&gt;</code></pre></div>
  </div>

  <div class="subsection">
    <h3>antd 升级回归 checklist</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">antd 主版本 (5 → 6 → ...) 升级时，本表 13 项必须人工核对 —— antd 默认值变化会让"显式声明"和"和默认相同"两类项产生不同行为。</p>
    <ul style="font-size:13px;color:var(--aw-text-2);line-height:1.9;padding-left:18px">
      <li>跑 <code>yarn antd-token-diff</code> (内部脚本) 对比 antd 上下版本的 token 默认值</li>
      <li>本页"覆盖项一览"表里所有"同 ✓ 不需覆盖"项需重新核对 —— 上游默认变化时它们要变成显式覆盖</li>
      <li>新增的 antd token 决定是否需要 TMS 覆盖（如 v6 新增了 <code>linkHoverDecoration</code>）</li>
      <li>组件类 token (Form / Table / Modal) 重点核对，因为 antd 内部 less / theme 经常重命名</li>
      <li>所有 Storybook story 跑一次 visual regression（chromatic / loki）确认无意外漂移</li>
      <li>Light + Dark 两种模式都要回归</li>
      <li>4 种 locale 都要回归（zh-CN / en / es / pt）</li>
    </ul>
  </div>

  <div class="subsection">
    <h3>规则 · Do &amp; Don'ts</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>项目根包<b>一层</b> <code>&lt;AntdConfig&gt;</code>，业务代码不再写 ConfigProvider</li>
          <li>覆盖集中在 <code>packages/design-tokens/</code></li>
          <li>嵌套 ConfigProvider 仅用于场景化（暗色子树 / 白标 / 危险主题）</li>
          <li>antd 升级走升级 checklist，不裸跑</li>
          <li>新增覆盖必须先在 docs 表里登记，再写代码</li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>不要在业务代码写 <code>&lt;ConfigProvider&gt;</code> 临时改 token</li>
          <li>不要 JS 写 <code>document.documentElement.style.setProperty('--aw-primary', ...)</code></li>
          <li>不要跳过 <code>renderEmpty</code> —— antd 默认彩色插画与 TMS illustration 规则冲突</li>
          <li>不要保留 <code>Notification.duration</code> 默认 4.5s（与 feedback 决策树冲突）</li>
          <li>不要让 <code>getPopupContainer</code> 走 body 默认（长页面 popup 飘走是已知 bug）</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
