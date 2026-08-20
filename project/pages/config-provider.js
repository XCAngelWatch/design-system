/* AngelWatch Design System — page: config-provider (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["config-provider"] = `
<div class="content">
<section class="section" id="config-provider">
<p class="section-eyebrow"><span data-i18n="config-provider:t001">工程落地 · 全局配置</span></p>
<h2><span data-i18n="config-provider:t002">全局配置 ConfigProvider</span></h2>
<p class="lede"><span data-i18n="config-provider:t003">这一页把 docs 中散布的"我们用的是 X 而不是 antd 默认 Y"集中整理到</span> <code>&lt;ConfigProvider&gt;</code> <span data-i18n="config-provider:t004">及其页面级默认值。所有项目根</span> <code>App.tsx</code> <span data-i18n="config-provider:t005">必须包一层带这些覆盖的 ConfigProvider，否则视觉与 docs 不一致是已知 bug。当前单应用消费者入口是</span> <code class="mono">tms2.5-web-ui/src/App.tsx</code><span data-i18n="config-provider:t090">。</span></p>
<div class="subsection">
<h3><span data-i18n="config-provider:t006">覆盖项一览</span></h3>
<table class="map-table">
<thead><tr><th style="width:18%"><span data-i18n="config-provider:t007">维度</span></th><th style="width:24%"><span data-i18n="config-provider:t008">antd 默认</span></th><th style="width:24%"><span data-i18n="config-provider:t009">TMS 覆盖</span></th><th><span data-i18n="config-provider:t010">覆盖位置</span></th></tr></thead>
<tbody>
<tr class="map-group"><td colspan="4"><span data-i18n="config-provider:t011">Token 层 · theme.token</span></td></tr>
<tr><td>colorPrimary</td><td><span class="mono">#1677FF</span></td><td><span class="mono">#165DFF</span></td><td><code>theme.token.colorPrimary</code></td></tr>
<tr><td>motionEaseInOut</td><td><span class="mono">cubic-bezier(.645,.045,.355,1)</span></td><td><span class="mono">cubic-bezier(.34,.69,.1,1)</span></td><td><code>theme.token.motionEaseInOut</code></td></tr>
<tr><td>motionDurationSlow</td><td>0.3s</td><td>0.32s</td><td><code>theme.token.motionDurationSlow</code></td></tr>
<tr><td>borderRadius</td><td>6</td><td>6</td><td><span data-i18n="config-provider:t012">同 ✓ 不需覆盖</span></td></tr>
<tr><td>controlHeight</td><td>32</td><td>32</td><td><span data-i18n="config-provider:t013">同 ✓ 不需覆盖</span></td></tr>
<tr><td>fontSize</td><td>14</td><td>14</td><td><span data-i18n="config-provider:t014">同 ✓ 不需覆盖</span></td></tr>
<tr><td>wireframe</td><td><span data-i18n="config-provider:t015">false (填充式)</span></td><td>false</td><td><span data-i18n="config-provider:t016">显式声明</span> <code>theme.token.wireframe = false</code> <span data-i18n="config-provider:t017">防御 antd 升级默认值变化</span></td></tr>
<tr class="map-group"><td colspan="4"><span data-i18n="config-provider:t018">组件层 · theme.components</span></td></tr>
<tr><td>Button.fontWeight</td><td>400</td><td>500</td><td><code>theme.components.Button.fontWeight</code></td></tr>
<tr><td>Button.primaryShadow</td><td><span class="mono">0 2px 0 rgba(...)</span></td><td><span class="mono">none</span></td><td><code>theme.components.Button.primaryShadow</code></td></tr>
<tr><td>Pagination.pageSize</td><td>10</td><td>20</td><td><span data-i18n="config-provider:t019">不在 theme，需</span> <code>&lt;Pagination defaultPageSize={20}&gt;</code> <span data-i18n="config-provider:t020">或</span> <code>&lt;Table pagination={{ pageSize: 20 }} /&gt;</code></td></tr>
<tr><td>Notification.duration</td><td>4.5s</td><td><span data-i18n="config-provider:t021">按反馈类型配置</span></td><td><code>App.useApp().notification</code> <span data-i18n="config-provider:t022">· 禁止静态 notification API</span></td></tr>
<tr><td>Form.validateTrigger</td><td>onChange</td><td><span data-i18n="config-provider:t023">onBlur (必填) / onChange (格式)</span></td><td><code>&lt;Form validateTrigger="onBlur"&gt;</code> <span data-i18n="config-provider:t024">· 默认</span></td></tr>
<tr><td>Form.validateMessages</td><td><span data-i18n="config-provider:t025">antd 内置 zh / en</span></td><td><span data-i18n="config-provider:t026">TMS 文案三层模板</span></td><td><code>theme</code> <span data-i18n="config-provider:t027">不管，需</span> <code>&lt;ConfigProvider form.validateMessages={{...}} /&gt;</code></td></tr>
<tr><td><span data-i18n="config-provider:t028">Tag 预设色</span></td><td><span data-i18n="config-provider:t029">13 (含 volcano/lime/yellow)</span></td><td><span data-i18n="config-provider:t030">只使用已发布语义 token；8 色扩展标签色仍是候选</span></td><td><span data-i18n="config-provider:t031">不在 antd ConfigProvider 内禁用，由业务仓库 lint / 代码审查拦截</span> <code>color="volcano"</code> <span data-i18n="config-provider:t032">等</span></td></tr>
<tr class="map-group"><td colspan="4"><span data-i18n="config-provider:t033">渲染层 · ConfigProvider props</span></td></tr>
<tr><td>locale</td><td>en_US</td><td><span data-i18n="config-provider:t034">zh_CN (默认) · en_US / es_ES / pt_BR / fr_FR / ru_RU (切换)</span></td><td><code>&lt;ConfigProvider locale={zhCN}&gt;</code></td></tr>
<tr><td>componentSize</td><td>middle (32px)</td><td>middle</td><td><span data-i18n="config-provider:t035">同 ✓ 不需覆盖</span></td></tr>
<tr><td>renderEmpty</td><td><span data-i18n="config-provider:t036">antd 自带彩色插画</span></td><td><span data-i18n="config-provider:t037">TMS Empty 组件 (单色 + Result.extra)</span></td><td><code>&lt;ConfigProvider renderEmpty={() =&gt; &lt;TMSEmpty /&gt;}&gt;</code></td></tr>
<tr><td>getPopupContainer</td><td>document.body</td><td><span data-i18n="config-provider:t038">parentElement (跟随滚动)</span></td><td><code>&lt;ConfigProvider getPopupContainer={node =&gt; node?.parentElement || document.body}&gt;</code></td></tr>
<tr><td>getTargetContainer</td><td>window</td><td><span data-i18n="config-provider:t039">app-main 滚动容器</span></td><td><code>&lt;ConfigProvider getTargetContainer={() =&gt; document.getElementById('app-main')}&gt;</code></td></tr>
<tr><td>direction</td><td>ltr</td><td>ltr</td><td><span data-i18n="config-provider:t040">同 ✓ 不支持 RTL</span></td></tr>
<tr><td>theme.algorithm</td><td>defaultAlgorithm</td><td><span data-i18n="config-provider:t041">自定义 (不用 darkAlgorithm)</span></td><td><span data-i18n="config-provider:t042">见</span> <a href="#/dark" style="color: var(--aw-primary-text)"><span data-i18n="config-provider:t043">dark 页</span></a> <span data-i18n="config-provider:t044">· 手写 token，不走 algorithm</span></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="config-provider:t045">真实入口结构 · 精简摘录</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><code>tms2.5-web-ui/src/App.tsx</code> <span data-i18n="config-provider:t046">是项目的</span><b><span data-i18n="config-provider:t047">单一入口</span></b><span data-i18n="config-provider:t048">。业务组件从 App.useApp() 获取反馈 API，不能绕过上下文。</span></p>
<div class="code-block"><pre><code>// tms2.5-web-ui/src/App.tsx (essential structure)
import { useMemo } from 'react';
import { App as AntdApp, ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router';
import { buildAntdTheme } from './theme/antd';
import TMSEmpty from './components/TMSEmpty';

export default function App() {
  const themeMode = useUIStore((state) =&gt; state.theme);
  const density = useUIStore((state) =&gt; state.density);
  const themeConfig = useMemo(
    () =&gt; buildAntdTheme({
      controlHeight: density === 'compact' ? 28 : density === 'comfortable' ? 40 : 32,
      tableCellPaddingBlock: density === 'compact' ? 5 : density === 'comfortable' ? 13 : 9,
    }),
    [themeMode, density],
  );

  return (
    &lt;ConfigProvider
      locale={resolvedAntdLocale}
      theme={themeConfig}
      renderEmpty={() =&gt; &lt;TMSEmpty /&gt;}
      getPopupContainer={(node) =&gt; node?.parentElement || document.body}
      getTargetContainer={() =&gt; document.getElementById('app-main') || window}
      form={{ validateMessages, requiredMark: true }}
    &gt;
      &lt;AntdApp notification={{ placement: 'topRight', maxCount: 3 }}&gt;
        &lt;RouterProvider router={router} /&gt;
      &lt;/AntdApp&gt;
    &lt;/ConfigProvider&gt;
  );
}</code></pre></div>
<p style="font-size:12px;color:var(--aw-text-3);max-width:720px;line-height:1.7;margin:10px 0 0"><code>Pagination.pageSize</code> <span data-i18n="config-provider:t049">是页面级默认值，不是</span> <code>ConfigProvider</code> <span data-i18n="config-provider:t050">prop；应在</span> <code>&lt;Table pagination={{ defaultPageSize: 20, pageSizeOptions: [20, 50, 100, 200] }} /&gt;</code> <span data-i18n="config-provider:t051">或</span> <code>&lt;Pagination /&gt;</code> <span data-i18n="config-provider:t052">调用处设置。</span></p>
<p style="font-size:12px;color:var(--aw-text-3);max-width:720px;line-height:1.7;margin:6px 0 0"><span data-i18n="config-provider:t092">滚动到首个错误属于 Form 实例行为：</span><code>&lt;Form scrollToFirstError&gt;</code><span data-i18n="config-provider:t093">；自建表单控件必须透传 id 与 ref。</span></p>
</div>
<div class="subsection">
<h3><span data-i18n="config-provider:t053">嵌套 ConfigProvider · 局部覆盖</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="config-provider:t054">已批准的局部语义场景（如危险操作面板）可以在子树嵌一层</span> <code>&lt;ConfigProvider&gt;</code><span data-i18n="config-provider:t055">。子级只覆盖差异项。强制暗色子树或多租户白标当前不是既有能力；必须先扩展 theme builder、机器契约与回归测试。</span></p>
<div class="code-block"><pre><code>// Approved local semantic override; value still comes from the active source token
const dangerPrimary = getComputedStyle(document.documentElement)
  .getPropertyValue('--aw-danger-solid')
  .trim();

&lt;ConfigProvider theme={{ token: { colorPrimary: dangerPrimary } }}&gt;
  &lt;DangerPanel&gt;
    &lt;Button type="primary"&gt;Resolve Now&lt;/Button&gt;
  &lt;/DangerPanel&gt;
&lt;/ConfigProvider&gt;</code></pre></div>
</div>
<div class="subsection">
<h3><span data-i18n="config-provider:t056">CSS 变量 → antd token 同步</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="config-provider:t057">TMS 用</span><b><span data-i18n="config-provider:t058">两层</span></b><span data-i18n="config-provider:t059">主题消费：</span><b>1)</b> <span data-i18n="config-provider:t060">CSS 变量</span> <code>--aw-*</code><span data-i18n="config-provider:t061">（自有组件 + 业务页面）；</span><b>2)</b> <span data-i18n="config-provider:t062">src/theme/antd.ts 读取同一组活动 CSS 变量并构建 antd theme。当前由 consumer contract 校验手工镜像；建立生成器之前不得宣称已有发布包。</span></p>
<div class="code-block"><pre><code>// tms2.5-web-ui/src/theme/antd.ts
function readVar(name: string, fallback: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}

export function buildAntdTheme(options: AntdThemeOptions): ThemeConfig {
  const primary = readVar('--aw-primary', '#165DFF');
  const primaryText = readVar('--aw-primary-text', '#165DFF');
  const primarySolid = readVar('--aw-primary-solid', '#165DFF');
  return {
    token: {
      colorPrimary: primary,
      colorPrimaryText: primaryText,
      colorLink: primaryText,
      controlHeight: options.controlHeight,
    },
    components: buildAntdComponentTheme({ primary, primaryText, primarySolid, ...options }),
  };
}

// Source contract: design-system/contracts/tms-web-ui.json
// Consumer mirror: docs/design-system/source-contract.json</code></pre></div>
</div>
<div class="subsection">
<h3><span data-i18n="config-provider:t063">antd 升级回归 checklist</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="config-provider:t064">antd 主版本升级时，本表的覆盖项与显式防御项都必须人工核对 —— antd 默认值变化会让"显式声明"和"和默认相同"两类项产生不同行为。</span></p>
<ul style="font-size:13px;color:var(--aw-text-2);line-height:1.9;padding-left:18px">
<li><span data-i18n="config-provider:t065">业务仓库若已配置</span> <code>antd-token-diff</code> <span data-i18n="config-provider:t066">脚本，先对比 antd 上下版本的 token 默认值</span></li>
<li><span data-i18n="config-provider:t067">本页"覆盖项一览"表里所有"同 ✓ 不需覆盖"项需重新核对 —— 上游默认变化时它们要变成显式覆盖</span></li>
<li><span data-i18n="config-provider:t068">新增的 antd token 决定是否需要 TMS 覆盖（如 v6 新增了</span> <code>linkHoverDecoration</code><span data-i18n="config-provider:t091">）</span></li>
<li><span data-i18n="config-provider:t069">组件类 token (Form / Table / Modal) 重点核对，因为 antd 内部 less / theme 经常重命名</span></li>
<li><span data-i18n="config-provider:t070">业务仓库接入 Storybook 后，跑一次 visual regression（chromatic / loki）确认无意外漂移</span></li>
<li><span data-i18n="config-provider:t071">Light + Dark 两种模式都要回归</span></li>
<li><span data-i18n="config-provider:t072">6 种 locale 都要回归（zh-CN / en-US / es / pt-BR / fr-FR / ru-RU）</span></li>
</ul>
</div>
<div class="subsection">
<h3><span data-i18n="config-provider:t073">规则 · Do &amp; Don'ts</span></h3>
<div class="demo-grid cols-2">
<div class="surface" style="border-left:3px solid var(--aw-success)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
<li><span data-i18n="config-provider:t074">项目根保持</span><b><span data-i18n="config-provider:t075">唯一一层</span></b> <code>&lt;ConfigProvider&gt; &gt; &lt;App&gt;</code><span data-i18n="config-provider:t076">，全局配置只在 App.tsx 组装</span></li>
<li><span data-i18n="config-provider:t077">覆盖集中在</span> <code>src/styles/tokens.css</code> + <code>src/theme/antd.ts</code> + <code>src/theme/components.ts</code></li>
<li><span data-i18n="config-provider:t078">嵌套 ConfigProvider 仅用于已批准的局部语义差异；强制暗色与白标要先扩展契约</span></li>
<li><span data-i18n="config-provider:t079">antd 升级走升级 checklist，不裸跑</span></li>
<li><span data-i18n="config-provider:t080">新增覆盖必须先在 docs 表里登记，再写代码</span></li>
</ul>
</div>
<div class="surface" style="border-left:3px solid var(--aw-danger)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
<li><span data-i18n="config-provider:t081">不要在业务代码写</span> <code>&lt;ConfigProvider&gt;</code> <span data-i18n="config-provider:t082">临时改 token</span></li>
<li><span data-i18n="config-provider:t083">不要 JS 写</span> <code>document.documentElement.style.setProperty('--aw-primary', ...)</code></li>
<li><span data-i18n="config-provider:t084">不要跳过</span> <code>renderEmpty</code> <span data-i18n="config-provider:t085">—— antd 默认彩色插画与 TMS illustration 规则冲突</span></li>
<li><span data-i18n="config-provider:t086">不要保留</span> <code>Notification.duration</code> <span data-i18n="config-provider:t087">默认 4.5s（与 feedback 决策树冲突）</span></li>
<li><span data-i18n="config-provider:t088">不要让</span> <code>getPopupContainer</code> <span data-i18n="config-provider:t089">走 body 默认（长页面 popup 飘走是已知 bug）</span></li>
</ul>
</div>
</div>
</div>
</section>
</div>
`;
