/* AngelWatch Design System — page: api (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["api"] = `
<div class="content">
<section class="section" id="api">
<p class="section-eyebrow"><span data-i18n="api:t001">工程落地 · API 约定</span></p>
<h2><span data-i18n="api:t002">组件 API 约定</span></h2>
<p class="lede"><span data-i18n="api:t003">本页是新业务封装的 API 设计建议，不代表已发布组件包或所有现有组件均实现这些接口。包装 AntD 时保留其锁定版本的原生类型与行为；应用实现事实以消费者源码为准。</span></p>
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
<tr><td><span data-i18n="api:t019">插槽</span></td><td><span data-i18n="api:t020">语义命名；</span><code>header</code> / <code>extra</code> / <code>footer</code></td><td><code>extra={&lt;Button&gt;{t('common.save')}&lt;/Button&gt;}</code></td><td><code>actionSlot</code> · <code>renderActions</code></td></tr>
<tr><td>render prop</td><td><code>render*</code> <span data-i18n="api:t021">前缀</span></td><td><code>renderItem</code> · <code>renderHeader</code></td><td><code>itemRenderer</code></td></tr>
<tr><td><span data-i18n="api:t022">枚举值</span></td><td><span data-i18n="api:t023">kebab-case 字符串</span></td><td><code>type="primary"</code> · <code>size="small"</code></td><td><code>type="Primary"</code></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="api:t024">受控 / 非受控 · Controlled vs Uncontrolled</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="api:t025">新值组件按需求明确支持的</span><b><span data-i18n="api:t026">受控 / 非受控模式</span></b><span data-i18n="api:t027">。以下自定义示例允许不传</span> <code>value</code> <span data-i18n="api:t028">让组件自管，也可传</span> <code>value</code> + <code>onChange</code> <span data-i18n="api:t029">完全接管；不同时传入受控值和默认值。此示例不更改 AntD Input 的事件签名。</span></p>
<div class="code-block"><pre><code>// Recommended API shape
type TextValueInputProps = {
  value?: string;          // controlled
  defaultValue?: string;   // uncontrolled initial value
  onChange?: (v: string) =&gt; void;
};

// Two valid consumer usages
&lt;TextValueInput defaultValue="DEV-86420075" /&gt;          // uncontrolled
&lt;TextValueInput value={sn} onChange={setSn} /&gt;           // controlled

// Do not pass both; warn and let value win
&lt;TextValueInput value={sn} defaultValue="..." /&gt;</code></pre></div>
</div>
<div class="subsection">
<h3><span data-i18n="api:t030">Common Props · 包装时逐项核验</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="api:t031">按包装组件的真实类型透传适用属性与语义节点，记录 ref 的公开目标。不要给不支持的原生组件强加接口，也不要把本表视为当前 TMS 全组件支持清单。</span></p>
<table class="map-table">
<thead><tr><th style="width:22%">prop</th><th style="width:24%"><span data-i18n="api:t032">类型</span></th><th><span data-i18n="api:t033">语义</span></th></tr></thead>
<tbody>
<tr><td><code>className</code></td><td><code>string</code></td><td><span data-i18n="api:t034">追加根节点 className，业务方覆盖样式入口</span></td></tr>
<tr><td><code>style</code></td><td><code>CSSProperties</code></td><td><span data-i18n="api:t035">追加根节点 inline style；优先级高于 className</span></td></tr>
<tr><td><code>classNames</code></td><td><code>SemanticClassNames</code></td><td><span data-i18n="api:t112">AntD v6 语义节点 class 映射；包装组件必须透传支持的 semantic key</span></td></tr>
<tr><td><code>styles</code></td><td><code>SemanticStyles</code></td><td><span data-i18n="api:t113">AntD v6 语义节点样式映射；禁止依赖内部 DOM 层级选择器</span></td></tr>
<tr><td><code>id</code></td><td><code>string</code></td><td><span data-i18n="api:t036">传到实际关联 label 的表单控件，不固定为包装根节点</span></td></tr>
<tr><td><code>data-*</code></td><td><code>string</code></td><td><span data-i18n="api:t037">透传到文档指定的测试或交互节点；例如</span> <code>data-testid</code></td></tr>
<tr><td><code>aria-*</code></td><td><code>string</code></td><td><span data-i18n="api:t038">传到对应语义控件；保留原生 role、状态与关联，不覆盖内部语义</span></td></tr>
<tr><td><code>ref</code></td><td><code>React.Ref</code></td><td><span data-i18n="api:t039">指向原生组件公开的 ref / handle；不假定都是 DOM 根节点</span></td></tr>
<tr><td><code>prefixCls</code></td><td><code>string</code></td><td><span data-i18n="api:t040">仅在底层支持时透传；不假定存在</span> <code>tms-</code> <span data-i18n="api:t041">公共前缀或多版本能力</span></td></tr>
<tr><td><code>locale</code></td><td><code>Locale</code></td><td><span data-i18n="api:t042">仅原生组件明确支持时使用；业务文案走应用 i18n</span></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="api:t043">组合模式 · Composition Patterns</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="api:t044">以下是常见组合建议。优先用 antd 提供的</span><b><span data-i18n="api:t045">声明式</span></b><span data-i18n="api:t046">组合（slot props），不要用 forwardRef + ImperativeHandle 强耦合。</span></p>
<table class="map-table">
<thead><tr><th style="width:24%"><span data-i18n="api:t047">组合</span></th><th style="width:30%"><span data-i18n="api:t048">推荐用法</span></th><th><span data-i18n="api:t049">避免</span></th></tr></thead>
<tbody>
<tr><td>Modal + Form</td><td><code>&lt;Modal&gt;&lt;Form ref={formRef}&gt;...&lt;/Form&gt;&lt;/Modal&gt;</code></td><td><span data-i18n="api:t050">保留 Form 实例与未保存内容保护；明确何时 reset</span></td></tr>
<tr><td>Drawer + Form</td><td><span data-i18n="api:t051">按任务复杂度和上下文选择 Drawer，不按字段数机械判断</span></td><td><span data-i18n="api:t052">不要把 Drawer 当 Modal 用，关闭交互不一致</span></td></tr>
<tr><td>Tabs + Table</td><td><span data-i18n="api:t053">明确切换时是否保留表格状态</span></td><td><span data-i18n="api:t054">路由型 Tab 应与产品路由和返回策略一致</span></td></tr>
<tr><td><span data-i18n="api:t055">Select + 远端搜索</span></td><td><code>showSearch + onSearch + filterOption={false}</code></td><td><span data-i18n="api:t056">不要本地 filter 大数据集</span></td></tr>
<tr><td>Tooltip + icon-only Button</td><td><span data-i18n="api:t057">必须 Tooltip 包；同时</span> <code>aria-label</code></td><td><span data-i18n="api:t058">不可只 Tooltip 不 aria-label（hover-only 漏 a11y）</span></td></tr>
<tr><td><span data-i18n="api:t059">低风险视图确认 + 按钮</span></td><td><span data-i18n="api:t060">仅本地视图操作可用 Popconfirm；高风险业务动作统一一次上下文 modal.confirm</span></td><td>—</td></tr>
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

// Use existing semantic mappings for a destructive action.
&lt;Button danger onClick={confirmDelete}&gt;{t('common.delete')}&lt;/Button&gt;

// Do not hard-code theme colors inside business components.
const styles = { color: 'var(--aw-text-2)' };</code></pre></div>
</div>
<div class="subsection">
<h3><span data-i18n="api:t062">i18n 集成</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="api:t063">当前消费者业务文案通过</span> <code>useTranslation()</code> <span data-i18n="api:t064">读取应用词典，缺失翻译按 en → zh_CN 回退；原生 AntD 文案通过</span> <code>ConfigProvider locale</code> <span data-i18n="api:t065">同步当前语言，不引入统一组件 locale prop。</span></p>
<div class="code-block"><pre><code>// Current consumer pattern: src/components/TMSEmpty/TMSEmpty.tsx
const { t } = useTranslation();
const text = description ?? t('common.noData');

&lt;Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={text}&gt;
  {extra}
&lt;/Empty&gt;

// The application root synchronizes the native AntD locale separately.
&lt;ConfigProvider locale={ANTD_LOCALE_MAP[i18n.language] ?? zhCN}&gt;
  {children}
&lt;/ConfigProvider&gt;</code></pre></div>
</div>
<div class="subsection">
<h3><span data-i18n="api:t066">版本演进 · Semver + Deprecation</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="api:t067">若未来发布公共组件包，应制定 SemVer 和废弃周期；当前静态参考站未发布该包。</span><b><span data-i18n="api:t068">主版本号</span></b><span data-i18n="api:t069">：破坏性变更；</span><b><span data-i18n="api:t070">次版本号</span></b><span data-i18n="api:t071">：新增能力；</span><b><span data-i18n="api:t072">补丁号</span></b><span data-i18n="api:t073">：bug fix。现有应用内 API 变更需检查调用方，不虚构 AntD 废弃计划。</span></p>
<div class="code-block"><pre><code>// Preserve the native API of the installed AntD version.
import { Modal } from 'antd';

&lt;Modal
  open={open}
  centered
  onOk={save}
  onCancel={close}
/&gt;

// For a future custom-wrapper migration:
// 1. Document the replacement and check all callers.
// 2. Keep a tested compatibility path for the agreed migration period.
// 3. Remove only after callers migrate; record any breaking change.</code></pre></div>
</div>
<div class="subsection">
<h3><span data-i18n="api:t074">API 适配注意项</span></h3>
<table class="map-table">
<thead><tr><th style="width:30%"><span data-i18n="api:t075">场景</span></th><th><span data-i18n="api:t076">处理</span></th></tr></thead>
<tbody>
<tr><td><code>onClick</code> <span data-i18n="api:t077">用于非按钮元素</span></td><td><span data-i18n="api:t078">改用</span> <code>&lt;button&gt;</code> <span data-i18n="api:t079">或</span> <code>onActivate</code> <span data-i18n="api:t080">+ 键盘绑定</span></td></tr>
<tr><td><code>visible</code> / <code>show</code></td><td><code>open</code><span data-i18n="api:t081">（与 antd v5+ 对齐）</span></td></tr>
<tr><td><code>onOk</code> / <code>onCancel</code></td><td><code>onOk</code> / <code>onCancel</code><span data-i18n="api:t082">：原生 AntD Modal 保留 onOk / onCancel；新业务封装才按语义另行设计。</span></td></tr>
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
<li><span data-i18n="api:t096">明确值组件支持的模式与默认值优先级</span></li>
<li><span data-i18n="api:t097">保留真实公开 ref 类型和焦点能力</span></li>
<li><span data-i18n="api:t098">透传</span> <code>className</code> / <code>style</code> / <code>data-*</code> / <code>aria-*</code></li>
<li><span data-i18n="api:t114">包装 AntD 组件时透传 classNames / styles Semantic DOM API</span></li>
<li><span data-i18n="api:t099">主题 token 通过 useToken hook，禁硬编码</span></li>
<li><span data-i18n="api:t100">Slot props 用语义名（</span><code>extra</code> / <code>footer</code><span data-i18n="api:t111">）</span></li>
<li><span data-i18n="api:t101">公共 API 废弃需说明替代方案与迁移期</span></li>
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
