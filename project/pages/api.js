/* AngelWatch Design System — page: api (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["api"] = `
<div class="content">
<section class="section" id="api">
<p class="section-eyebrow"><span data-i18n="api:t001">工程落地 · API 约定</span></p>
<h2><span data-i18n="api:t002">组件 API 约定</span></h2>
<p class="lede"><span data-i18n="api:t003">设计 token 是「视觉契约」，组件 API 是「调用契约」。两者一致才能让 PM 切换业务页时不重学。本页固化命名规则、受控 / 非受控、common props、组合模式、版本演进 —— 新组件提 PR 时 review 直接对照本页。</span></p>
<div class="subsection">
<h3><span data-i18n="api:t004">命名约定</span></h3>
<table class="map-table">
<thead><tr><th style="width:22%"><span data-i18n="api:t005">类型</span></th><th style="width:30%"><span data-i18n="api:t006">规则</span></th><th style="width:24%"><span data-i18n="api:t007">示例</span></th><th><span data-i18n="api:t008">反例</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="api:t009">组件名</span></td><td><span data-i18n="api:t010">PascalCase, 单数</span></td><td><code>DeviceCard</code> · <code>Button</code></td><td><code>device_card</code> · <code>Buttons</code></td></tr>
<tr><td><span data-i18n="api:t011">Prop 名</span></td><td>camelCase</td><td><code>defaultValue</code> · <code>maxLength</code></td><td><code>default-value</code> · <code>MaxLength</code></td></tr>
<tr><td>Boolean prop</td><td><span data-i18n="api:t012">无前缀；状态用</span> <code>disabled</code> / <code>loading</code> / <code>open</code></td><td><code>disabled</code> · <code>loading</code></td><td><code>isDisabled</code> · <code>hasLoading</code></td></tr>
<tr><td><span data-i18n="api:t013">事件回调</span></td><td><code>on</code> <span data-i18n="api:t014">+ 动词或事件名</span></td><td><code>onChange</code> · <code>onClick</code> · <code>onSelect</code></td><td><code>change</code> · <code>handleClick</code></td></tr>
<tr><td>before / after</td><td><code>onBefore*</code> <span data-i18n="api:t015">可阻断；</span><code>onAfter*</code> <span data-i18n="api:t016">仅通知</span></td><td><code>onBeforeSubmit</code> <span data-i18n="api:t017">返</span> <code>false</code> <span data-i18n="api:t018">阻止</span></td><td>—</td></tr>
<tr><td><span data-i18n="api:t019">插槽</span></td><td><span data-i18n="api:t020">语义命名；</span><code>header</code> / <code>extra</code> / <code>footer</code></td><td><code>extra={'&lt;button&gt;&lt;/button&gt;'}</code></td><td><code>actionSlot</code> · <code>renderActions</code></td></tr>
<tr><td>render prop</td><td><code>render*</code> <span data-i18n="api:t021">前缀</span></td><td><code>renderItem</code> · <code>renderHeader</code></td><td><code>itemRenderer</code></td></tr>
<tr><td><span data-i18n="api:t022">枚举值</span></td><td><span data-i18n="api:t023">kebab-case 字符串</span></td><td><code>type="primary"</code> · <code>size="small"</code></td><td><code>type="Primary"</code></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="api:t024">受控 / 非受控 · Controlled vs Uncontrolled</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="api:t025">所有有"值"的组件必须同时支持</span><b><span data-i18n="api:t026">两种模式</span></b><span data-i18n="api:t027">：业务方可不传</span> <code>value</code> <span data-i18n="api:t028">让组件自管，也可传</span> <code>value</code> + <code>onChange</code> <span data-i18n="api:t029">完全接管。两者不能并存。</span></p>
<div class="code-block"><pre><code>// Recommended API shape
type InputProps = {
  value?: string;          // controlled
  defaultValue?: string;   // uncontrolled initial value
  onChange?: (v: string) =&gt; void;
};

// Two valid consumer usages
&lt;Input defaultValue="DEV-86420075" /&gt;          // uncontrolled
&lt;Input value={sn} onChange={setSn} /&gt;           // controlled

// Do not pass both; warn and let value win
&lt;Input value={sn} defaultValue="..." /&gt;</code></pre></div>
</div>
<div class="subsection">
<h3><span data-i18n="api:t030">Common Props · 所有组件共有</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="api:t031">下表列举所有 TMS 组件统一支持的 prop 集合 —— 业务封装组件时必须保留这套接口，不能"截断"。</span></p>
<table class="map-table">
<thead><tr><th style="width:22%">prop</th><th style="width:24%"><span data-i18n="api:t032">类型</span></th><th><span data-i18n="api:t033">语义</span></th></tr></thead>
<tbody>
<tr><td><code>className</code></td><td><code>string</code></td><td><span data-i18n="api:t034">追加根节点 className，业务方覆盖样式入口</span></td></tr>
<tr><td><code>style</code></td><td><code>CSSProperties</code></td><td><span data-i18n="api:t035">追加根节点 inline style；优先级高于 className</span></td></tr>
<tr><td><code>classNames</code></td><td><code>SemanticClassNames</code></td><td><span data-i18n="api:t112">AntD v6 语义节点 class 映射；包装组件必须透传支持的 semantic key</span></td></tr>
<tr><td><code>styles</code></td><td><code>SemanticStyles</code></td><td><span data-i18n="api:t113">AntD v6 语义节点样式映射；禁止依赖内部 DOM 层级选择器</span></td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td><span data-i18n="api:t036">根节点 id；表单 label 关联用</span></td></tr>
<tr><td><code>data-*</code></td><td><code>string</code></td><td><span data-i18n="api:t037">透传到根节点；E2E 测试 / 埋点用</span> <code>data-testid</code></td></tr>
<tr><td><code>aria-*</code></td><td><code>string</code></td><td><span data-i18n="api:t038">透传到根节点；a11y 增强</span></td></tr>
<tr><td><code>ref</code></td><td><code>Ref&lt;HTMLElement&gt;</code></td><td><span data-i18n="api:t039">所有组件 forwardRef 到根节点</span></td></tr>
<tr><td><code>prefixCls</code></td><td><code>string</code></td><td><span data-i18n="api:t040">覆盖默认</span> <code>tms-</code> <span data-i18n="api:t041">前缀；用于多版本共存</span></td></tr>
<tr><td><code>locale</code></td><td><code>Locale</code></td><td><span data-i18n="api:t042">组件内文案的语言（覆盖 ConfigProvider 全局）</span></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="api:t043">组合模式 · Composition Patterns</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="api:t044">下面 6 类是 TMS 最高频的组合模式。优先用 antd 提供的</span><b><span data-i18n="api:t045">声明式</span></b><span data-i18n="api:t046">组合（slot props），不要用 forwardRef + ImperativeHandle 强耦合。</span></p>
<table class="map-table">
<thead><tr><th style="width:24%"><span data-i18n="api:t047">组合</span></th><th style="width:30%"><span data-i18n="api:t048">推荐用法</span></th><th><span data-i18n="api:t049">避免</span></th></tr></thead>
<tbody>
<tr><td>Modal + Form</td><td><code>&lt;Modal&gt;&lt;Form ref={formRef}&gt;...&lt;/Form&gt;&lt;/Modal&gt;</code></td><td><span data-i18n="api:t050">把 Form 通过 children 传到 Modal 内部，关闭时 reset</span></td></tr>
<tr><td>Drawer + Form</td><td><span data-i18n="api:t051">同上；Drawer 适合 ≥ 8 字段表单</span></td><td><span data-i18n="api:t052">不要把 Drawer 当 Modal 用，关闭交互不一致</span></td></tr>
<tr><td>Tabs + Table</td><td><span data-i18n="api:t053">Tabs 切视图，Table 重渲染（不卸载）</span></td><td><span data-i18n="api:t054">Tabs 内部不要嵌完整路由，用 Tabs Card 路由</span></td></tr>
<tr><td><span data-i18n="api:t055">Select + 远端搜索</span></td><td><code>showSearch + onSearch + filterOption={false}</code></td><td><span data-i18n="api:t056">不要本地 filter 大数据集</span></td></tr>
<tr><td>Tooltip + icon-only Button</td><td><span data-i18n="api:t057">必须 Tooltip 包；同时</span> <code>aria-label</code></td><td><span data-i18n="api:t058">不可只 Tooltip 不 aria-label（hover-only 漏 a11y）</span></td></tr>
<tr><td><span data-i18n="api:t059">Popconfirm + Action 按钮</span></td><td><span data-i18n="api:t060">包在按钮外，不要包在按钮内 children</span></td><td>—</td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="api:t061">Token 与 ConfigProvider 集成</span></h3>
<div class="code-block"><pre><code>// Business components receive theme tokens through the useToken hook
import { theme } from 'antd';
const { useToken } = theme;

function DeviceCard(props) {
  const { token } = useToken();   // current merged token
  return (
    &lt;div style={{ borderRadius: token.borderRadius, color: token.colorTextSecondary }}&gt;
      ...
    &lt;/div&gt;
  );
}

// resolvedDangerTheme comes from @tms/design-tokens and follows the active mode
&lt;ConfigProvider theme={resolvedDangerTheme}&gt;
  &lt;DeviceCard /&gt;   {/* automatically receives the red brand theme */}
&lt;/ConfigProvider&gt;

// Do not hard-code antd private variables inside components
const styles = { color: '#165DFF' };  // hard-coded; white-labeling fails</code></pre></div>
</div>
<div class="subsection">
<h3><span data-i18n="api:t062">i18n 集成</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="api:t063">所有可见文本必走 i18n。组件内文案（如"加载中…"、"当前没有可显示的数据"）默认从</span> <code>locale</code> <span data-i18n="api:t064">prop 取，回退到 ConfigProvider 全局，再回退到内置 zh-CN。业务方传</span> <code>locale</code> <span data-i18n="api:t065">可临时覆盖单组件语言（少见，仅用于嵌入第三方页面）。</span></p>
<div class="code-block"><pre><code>// Component copy declaration
type LocaleKeys = {
  emptyText: string;
  loadingText: string;
  retryText: string;
};

// Consumer usage
&lt;ConfigProvider locale={zhCN}&gt;
  &lt;DeviceTable /&gt;   {/* default zh-CN */}
&lt;/ConfigProvider&gt;

&lt;DeviceTable locale={{ emptyText: 'No devices' }} /&gt;  // temporary single-component override</code></pre></div>
</div>
<div class="subsection">
<h3><span data-i18n="api:t066">版本演进 · Semver + Deprecation</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="api:t067">遵循 SemVer。</span><b><span data-i18n="api:t068">主版本号</span></b><span data-i18n="api:t069">：破坏性变更；</span><b><span data-i18n="api:t070">次版本号</span></b><span data-i18n="api:t071">：新增能力；</span><b><span data-i18n="api:t072">补丁号</span></b><span data-i18n="api:t073">：bug fix。废弃 API 走两阶段周期。</span></p>
<div class="code-block"><pre><code>// Phase 1: mark deprecated but keep behavior (one minor cycle, about three months)
function Modal(props: ModalProps &amp; { centered?: boolean }) {
  if (props.centered !== undefined) {
    console.warn(
      '[tms] Modal: centered is deprecated, use align="center" instead. ' +
      'Will be removed in v3.0.'
    );
  }
  // ...
}

// Phase 2: remove in the next major after at least three months of notice
// Remove centered prop in v3.0
// Mark BREAKING clearly in release notes</code></pre></div>
</div>
<div class="subsection">
<h3><span data-i18n="api:t074">命名禁忌</span></h3>
<table class="map-table">
<thead><tr><th style="width:30%"><span data-i18n="api:t075">禁用</span></th><th><span data-i18n="api:t076">替代</span></th></tr></thead>
<tbody>
<tr><td><code>onClick</code> <span data-i18n="api:t077">用于非按钮元素</span></td><td><span data-i18n="api:t078">改用</span> <code>&lt;button&gt;</code> <span data-i18n="api:t079">或</span> <code>onActivate</code> <span data-i18n="api:t080">+ 键盘绑定</span></td></tr>
<tr><td><code>visible</code> / <code>show</code></td><td><code>open</code><span data-i18n="api:t081">（与 antd v5+ 对齐）</span></td></tr>
<tr><td><code>onOk</code> / <code>onCancel</code></td><td><code>onConfirm</code> / <code>onCancel</code><span data-i18n="api:t082">（语义更清晰）</span></td></tr>
<tr><td><code>disabled</code> <span data-i18n="api:t083">与</span> <code>readOnly</code> <span data-i18n="api:t084">混用</span></td><td><span data-i18n="api:t085">明确：</span><code>disabled</code> <span data-i18n="api:t086">= 不可交互；</span><code>readOnly</code> <span data-i18n="api:t087">= 可见但不可改</span></td></tr>
<tr><td><code>data</code> <span data-i18n="api:t088">作为 prop 名</span></td><td><span data-i18n="api:t089">语义化：</span><code>dataSource</code> / <code>options</code> / <code>items</code></td></tr>
<tr><td><code>callback</code> <span data-i18n="api:t090">作为 prop</span></td><td><code>onChange</code> / <code>onSubmit</code> <span data-i18n="api:t091">/ 具体语义</span></td></tr>
<tr><td><code>style="..."</code> <span data-i18n="api:t092">字符串</span></td><td><span data-i18n="api:t093">用</span> <code>style={{ ... }}</code> <span data-i18n="api:t094">对象，类型可校验</span></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="api:t095">规则 · Do &amp; Don'ts</span></h3>
<div class="demo-grid cols-2">
<div class="surface" style="border-left:3px solid var(--aw-success)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
<li><span data-i18n="api:t096">所有有值组件支持受控 + 非受控两种模式</span></li>
<li><span data-i18n="api:t097">所有组件 forwardRef 到根节点</span></li>
<li><span data-i18n="api:t098">透传</span> <code>className</code> / <code>style</code> / <code>data-*</code> / <code>aria-*</code></li>
<li><span data-i18n="api:t114">包装 AntD 组件时透传 classNames / styles Semantic DOM API</span></li>
<li><span data-i18n="api:t099">主题 token 通过 useToken hook，禁硬编码</span></li>
<li><span data-i18n="api:t100">Slot props 用语义名（</span><code>extra</code> / <code>footer</code><span data-i18n="api:t111">）</span></li>
<li><span data-i18n="api:t101">废弃 API 走两阶段周期</span></li>
<li><span data-i18n="api:t102">CHANGELOG 显著标注 BREAKING</span></li>
</ul>
</div>
<div class="surface" style="border-left:3px solid var(--aw-danger)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
<li><span data-i18n="api:t103">不要给 boolean 加</span> <code>is</code> / <code>has</code> <span data-i18n="api:t104">前缀</span></li>
<li><span data-i18n="api:t105">不要混用</span> <code>visible</code> / <code>show</code> / <code>open</code></li>
<li><span data-i18n="api:t106">不要在 prop 名中带组件名（</span><code>buttonClassName</code><span data-i18n="api:t107">，应为</span> <code>className</code><span data-i18n="api:t111">）</span></li>
<li><span data-i18n="api:t108">不要直接破坏 API 不走 deprecation</span></li>
<li><span data-i18n="api:t109">不要在组件内硬编码 antd 私有 token</span></li>
<li><span data-i18n="api:t110">不要用 ImperativeHandle 替代 props 传值</span></li>
</ul>
</div>
</div>
</div>
</section>
</div>
`;
