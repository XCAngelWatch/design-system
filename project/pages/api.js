/* AngelWatch Design System — page: api (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["api"] = `
<div class="content">
<section class="section" id="api">
  <p class="section-eyebrow">Specs · API 约定</p>
  <h2>Component API · 组件 API 设计约定</h2>
  <p class="lede">设计 token 是「视觉契约」，组件 API 是「调用契约」。两者一致才能让 PM 切换业务页时不重学。本页固化命名规则、受控 / 非受控、common props、组合模式、版本演进 —— 新组件提 PR 时 review 直接对照本页。</p>

  <div class="subsection">
    <h3>命名约定</h3>
    <table class="map-table">
      <thead><tr><th style="width:22%">类型</th><th style="width:30%">规则</th><th style="width:24%">示例</th><th>反例</th></tr></thead>
      <tbody>
        <tr><td>组件名</td><td>PascalCase, 单数</td><td><code>DeviceCard</code> · <code>Button</code></td><td><code>device_card</code> · <code>Buttons</code></td></tr>
        <tr><td>Prop 名</td><td>camelCase</td><td><code>defaultValue</code> · <code>maxLength</code></td><td><code>default-value</code> · <code>MaxLength</code></td></tr>
        <tr><td>Boolean prop</td><td>无前缀；状态用 <code>disabled</code> / <code>loading</code> / <code>open</code></td><td><code>disabled</code> · <code>loading</code></td><td><code>isDisabled</code> · <code>hasLoading</code></td></tr>
        <tr><td>事件回调</td><td><code>on</code> + 动词或事件名</td><td><code>onChange</code> · <code>onClick</code> · <code>onSelect</code></td><td><code>change</code> · <code>handleClick</code></td></tr>
        <tr><td>before / after</td><td><code>onBefore*</code> 可阻断；<code>onAfter*</code> 仅通知</td><td><code>onBeforeSubmit</code> 返 <code>false</code> 阻止</td><td>—</td></tr>
        <tr><td>插槽</td><td>语义命名；<code>title</code> / <code>extra</code> / <code>footer</code></td><td><code>extra={'<Button/>'}</code></td><td><code>actionSlot</code> · <code>renderActions</code></td></tr>
        <tr><td>render prop</td><td><code>render*</code> 前缀</td><td><code>renderItem</code> · <code>renderHeader</code></td><td><code>itemRenderer</code></td></tr>
        <tr><td>枚举值</td><td>kebab-case 字符串</td><td><code>type="primary"</code> · <code>size="small"</code></td><td><code>type="Primary"</code></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>受控 / 非受控 · Controlled vs Uncontrolled</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">所有有"值"的组件必须同时支持<b>两种模式</b>：业务方可不传 <code>value</code> 让组件自管，也可传 <code>value</code> + <code>onChange</code> 完全接管。两者不能并存。</p>
    <div class="code-block"><pre><code>// ✓ 推荐 API 形态
type InputProps = {
  value?: string;          // 受控
  defaultValue?: string;   // 非受控初始值
  onChange?: (v: string) =&gt; void;
};

// ✓ 业务方两种用法
&lt;Input defaultValue="DEV-86420075" /&gt;          // 非受控
&lt;Input value={sn} onChange={setSn} /&gt;           // 受控

// ✕ 同时传两个 —— 抛 console.warn,以 value 为准
&lt;Input value={sn} defaultValue="..." /&gt;</code></pre></div>
  </div>

  <div class="subsection">
    <h3>Common Props · 所有组件共有</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">下表列举所有 TMS 组件统一支持的 prop 集合 —— 业务封装组件时必须保留这套接口，不能"截断"。</p>
    <table class="map-table">
      <thead><tr><th style="width:22%">prop</th><th style="width:24%">类型</th><th>语义</th></tr></thead>
      <tbody>
        <tr><td><code>className</code></td><td><code>string</code></td><td>追加根节点 className，业务方覆盖样式入口</td></tr>
        <tr><td><code>style</code></td><td><code>CSSProperties</code></td><td>追加根节点 inline style；优先级高于 className</td></tr>
        <tr><td><code>id</code></td><td><code>string</code></td><td>根节点 id；表单 label 关联用</td></tr>
        <tr><td><code>data-*</code></td><td><code>string</code></td><td>透传到根节点；E2E 测试 / 埋点用 <code>data-testid</code></td></tr>
        <tr><td><code>aria-*</code></td><td><code>string</code></td><td>透传到根节点；a11y 增强</td></tr>
        <tr><td><code>ref</code></td><td><code>Ref&lt;HTMLElement&gt;</code></td><td>所有组件 forwardRef 到根节点</td></tr>
        <tr><td><code>prefixCls</code></td><td><code>string</code></td><td>覆盖默认 <code>tms-</code> 前缀；用于多版本共存</td></tr>
        <tr><td><code>locale</code></td><td><code>Locale</code></td><td>组件内文案的语言（覆盖 ConfigProvider 全局）</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>组合模式 · Composition Patterns</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">下面 6 类是 TMS 最高频的组合模式。优先用 antd 提供的<b>声明式</b>组合（slot props），不要用 forwardRef + ImperativeHandle 强耦合。</p>
    <table class="map-table">
      <thead><tr><th style="width:24%">组合</th><th style="width:30%">推荐用法</th><th>避免</th></tr></thead>
      <tbody>
        <tr><td>Modal + Form</td><td><code>&lt;Modal&gt;&lt;Form ref={formRef}&gt;...&lt;/Form&gt;&lt;/Modal&gt;</code></td><td>把 Form 通过 children 传到 Modal 内部，关闭时 reset</td></tr>
        <tr><td>Drawer + Form</td><td>同上；Drawer 适合 ≥ 8 字段表单</td><td>不要把 Drawer 当 Modal 用，关闭交互不一致</td></tr>
        <tr><td>Tabs + Table</td><td>Tabs 切视图，Table 重渲染（不卸载）</td><td>Tabs 内部不要嵌完整路由，用 Tabs Card 路由</td></tr>
        <tr><td>Select + 远端搜索</td><td><code>showSearch + onSearch + filterOption={false}</code></td><td>不要本地 filter 大数据集</td></tr>
        <tr><td>Tooltip + icon-only Button</td><td>必须 Tooltip 包；同时 <code>aria-label</code></td><td>不可只 Tooltip 不 aria-label（hover-only 漏 a11y）</td></tr>
        <tr><td>Popconfirm + Action 按钮</td><td>包在按钮外，不要包在按钮内 children</td><td>—</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>Token 与 ConfigProvider 集成</h3>
    <div class="code-block"><pre><code>// 业务组件接收主题 token —— 通过 useToken hook
import { theme } from 'antd';
const { useToken } = theme;

function DeviceCard(props) {
  const { token } = useToken();   // ← 拿到当前合并后的 token
  return (
    &lt;div style={{ borderRadius: token.borderRadius, color: token.colorTextSecondary }}&gt;
      ...
    &lt;/div&gt;
  );
}

// ✓ 所有自定义组件应支持嵌套 ConfigProvider 主题继承
&lt;ConfigProvider theme={{ token: { colorPrimary: '#A8071A' } }}&gt;
  &lt;DeviceCard /&gt;   {/* 自动接收红色品牌 */}
&lt;/ConfigProvider&gt;

// ✕ 不要在组件内硬编码 antd 私有变量
const styles = { color: '#0052CC' };  // ← 硬编码,白标失效</code></pre></div>
  </div>

  <div class="subsection">
    <h3>i18n 集成</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">所有可见文本必走 i18n。组件内文案（如"加载中…"、"暂无数据"）默认从 <code>locale</code> prop 取，回退到 ConfigProvider 全局，再回退到内置 zh-CN。业务方传 <code>locale</code> 可临时覆盖单组件语言（少见，仅用于嵌入第三方页面）。</p>
    <div class="code-block"><pre><code>// 组件内部文案声明
type LocaleKeys = {
  emptyText: string;
  loadingText: string;
  retryText: string;
};

// 业务方使用
&lt;ConfigProvider locale={zhCN}&gt;
  &lt;DeviceTable /&gt;   {/* 默认中文 */}
&lt;/ConfigProvider&gt;

&lt;DeviceTable locale={{ emptyText: 'No devices' }} /&gt;  // 临时覆盖单组件</code></pre></div>
  </div>

  <div class="subsection">
    <h3>版本演进 · Semver + Deprecation</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">遵循 SemVer。<b>主版本号</b>：破坏性变更；<b>次版本号</b>：新增能力；<b>补丁号</b>：bug fix。废弃 API 走两阶段周期。</p>
    <div class="code-block"><pre><code>// 阶段 1 · 标 deprecated 但保留功能 (1 个 minor 周期 ≈ 3 个月)
function Modal(props: ModalProps & { centered?: boolean }) {
  if (props.centered !== undefined) {
    console.warn(
      '[tms] Modal: \`centered\` is deprecated, use \`align="center"\` instead. ' +
      'Will be removed in v3.0.'
    );
  }
  // ...
}

// 阶段 2 · 移除（下个 major 版本，至少跨 3 个月公告期）
// v3.0 中删除 centered prop
// CHANGELOG 显著标注 BREAKING</code></pre></div>
  </div>

  <div class="subsection">
    <h3>命名禁忌</h3>
    <table class="map-table">
      <thead><tr><th style="width:30%">禁用</th><th>替代</th></tr></thead>
      <tbody>
        <tr><td><code>onClick</code> 用于非按钮元素</td><td>改用 <code>&lt;button&gt;</code> 或 <code>onActivate</code> + 键盘绑定</td></tr>
        <tr><td><code>visible</code> / <code>show</code></td><td><code>open</code>（与 antd v5+ 对齐）</td></tr>
        <tr><td><code>onOk</code> / <code>onCancel</code></td><td><code>onConfirm</code> / <code>onCancel</code>（语义更清晰）</td></tr>
        <tr><td><code>disabled</code> 与 <code>readOnly</code> 混用</td><td>明确：<code>disabled</code> = 不可交互；<code>readOnly</code> = 可见但不可改</td></tr>
        <tr><td><code>data</code> 作为 prop 名</td><td>语义化：<code>dataSource</code> / <code>options</code> / <code>items</code></td></tr>
        <tr><td><code>callback</code> 作为 prop</td><td><code>onChange</code> / <code>onSubmit</code> / 具体语义</td></tr>
        <tr><td><code>style="..."</code> 字符串</td><td>用 <code>style={{ ... }}</code> 对象，类型可校验</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>规则 · Do &amp; Don'ts</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>所有有值组件支持受控 + 非受控两种模式</li>
          <li>所有组件 forwardRef 到根节点</li>
          <li>透传 <code>className</code> / <code>style</code> / <code>data-*</code> / <code>aria-*</code></li>
          <li>主题 token 通过 useToken hook，禁硬编码</li>
          <li>Slot props 用语义名（<code>extra</code> / <code>footer</code>）</li>
          <li>废弃 API 走两阶段周期</li>
          <li>CHANGELOG 显著标注 BREAKING</li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>不要给 boolean 加 <code>is</code> / <code>has</code> 前缀</li>
          <li>不要混用 <code>visible</code> / <code>show</code> / <code>open</code></li>
          <li>不要在 prop 名中带组件名（<code>buttonClassName</code>，应为 <code>className</code>）</li>
          <li>不要直接破坏 API 不走 deprecation</li>
          <li>不要在组件内硬编码 antd 私有 token</li>
          <li>不要用 ImperativeHandle 替代 props 传值</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
