# AngelWatch Design System 中英文国际化设计

## 状态

- 日期：2026-07-10
- 范围：当前静态设计系统站点的 66 个页面、共享导航和交互提示
- 决策：保留一套页面结构，通过稳定 key 和按页英文词典切换中英文
- 默认语言：`zh-CN`
- 支持语言：`zh-CN`、`en-US`

## 背景

当前站点是纯 HTML、CSS 和 vanilla JavaScript 组成的静态 SPA。页面通过 `pages/<id>.js` 注册 HTML 字符串，由 `_router.js` 使用动态 `<script>` 加载，因此必须继续满足：

- 不增加 NPM、构建步骤或 HTTP server 依赖。
- `file://` 直接打开 `project/index.html` 时可完整使用。
- 66 个页面继续只有一套 HTML 和组件样式。
- 主题切换、hash 路由和页面片段缓存保持可用。
- 业务 React 仓库仍使用 `react-i18next` 和 AntD `ConfigProvider.locale`，本仓库只提供可复用的 key 与词典结构。

当前页面约有 4,369 条不重复的非代码中文可见文本。词典不能集中到单个大文件，必须按页面 namespace 拆分并按路由加载。

## 目标

1. 侧边栏、工具栏、页面标题、正文、组件示例和动态提示均支持中文与英文切换。
2. 用户语言选择写入 `localStorage('aw-locale')`，刷新和跨页面导航后保持不变。
3. 切换语言不改变 hash、主题和当前阅读位置。
4. 英文模式下菜单、按钮、表单、表格、卡片、Tabs、Tag 和状态文案不重叠、不裁切。
5. 英文词典使用稳定 key，可迁移到业务仓库的 `react-i18next` namespace。
6. 自动校验 66 个页面的词典、key 和可见中文覆盖率。

## 非目标

- 不把当前文档站迁移到 React。
- 不引入 AntD 运行时、CDN、在线翻译接口或浏览器自动翻译。
- 不为中文和英文复制两套页面 HTML。
- 不翻译代码块、API 名、文件路径、CSS token、设备编号、型号、版本号和刻意展示的多语言对照样例。
- 本轮不增加西班牙语和葡萄牙语运行时切换；现有规范内容继续保留这两种语言的设计说明。

## 目录结构

```text
project/
├── i18n/
│   ├── runtime.js                 语言状态、词典注册、插值和 DOM 应用
│   ├── common.en-US.js            共享导航、工具栏、加载/错误和交互提示
│   └── en-US/
│       ├── overview.js            overview namespace
│       ├── ai-reference.js
│       └── ...                    与 66 个 pages/<id>.js 一一对应
├── pages/
│   ├── _router.js                 路由与 locale 词典动态加载
│   └── <id>.js                    唯一页面结构，中文为内联 fallback
├── styles/
│   └── components-extras.css      语言控件和英文布局适配
└── index.html                     首屏恢复 locale，加载 runtime/common/router
```

英文词典文件只包含字符串，不包含页面 HTML。中文文案保留在原页面中，既是默认显示内容，也是词典缺失时的安全 fallback。

## Key 与页面标记

### 普通文本

```html
<h2 data-i18n="buttons:title">按钮 Button</h2>
<button class="btn" data-i18n="common:save">保存</button>
```

### 属性

```html
<input
  class="input"
  data-i18n-placeholder="inputs:searchPlaceholder"
  placeholder="请输入设备 SN"
/>
```

支持的属性标记：

- `data-i18n-placeholder`
- `data-i18n-title`
- `data-i18n-aria-label`
- `data-i18n-alt`
- `data-i18n-value`

### 富文本

包含 `<b>`、`<code>`、`<a>` 或其他结构的段落不使用整段 `innerHTML` 翻译。将需要翻译的文本拆成叶子节点，技术内容继续保留原结构：

```html
<p>
  <span data-i18n="buttons:tokenRulePrefix">所有颜色通过</span>
  <code>var(--aw-*)</code>
  <span data-i18n="buttons:tokenRuleSuffix">引用。</span>
</p>
```

这样可以避免把 HTML 存入词典，也不会引入 XSS 或中英文结构漂移。

### 明确排除

代码块默认不翻译。其他必须保留原文的可见区域使用 `data-i18n-ignore`，例如 i18n 页的四语言对照表。校验脚本只接受明确标记的排除，不使用宽泛的 class 名猜测技术内容。

## 英文词典格式

```javascript
(window.__AW_I18N__ = window.__AW_I18N__ || {}).register(
  'en-US',
  'buttons',
  {
    'title': 'Buttons',
    'tokenRulePrefix': 'Reference all colors through',
    'tokenRuleSuffix': '.'
  }
);
```

每个页面使用自己的 route id 作为 namespace。页面标记统一使用 `namespace:key`，词典文件内部只保存局部 key。跨页面稳定复用的动作、状态和 shell 文案放在 `common` namespace，避免同一句英文在多个文件重复维护。

运行时支持 `{name}`、`{count}` 形式的安全文本插值，只写入 `textContent` 或属性，不解析 HTML。

## 运行时 API

`project/i18n/runtime.js` 暴露一个小型全局 API：

```javascript
window.__AW_I18N__.register(locale, namespace, messages);
window.__AW_I18N__.setLocale(locale);
window.__AW_I18N__.getLocale();
window.__AW_I18N__.t(namespacedKey, params, fallback);
window.__AW_I18N__.apply(root);
```

行为约束：

- 只接受 `zh-CN` 和 `en-US`；其他值回退到 `zh-CN`。
- `zh-CN` 直接使用页面内联中文，不修改 DOM。
- `en-US` 根据 key 写入英文文本和属性。
- 缺少 key 时保留中文 fallback，并在控制台输出包含 route id 和 key 的错误。
- 所有 `localStorage` 访问都放在 `try/catch` 中，存储不可用时仍可在当前会话切换。

## 路由与加载流程

### 首次加载

1. `index.html` 的早期脚本读取 `aw-locale`。
2. 设置 `<html lang="zh-CN|en-US">`，让英文 CSS 在首屏布局前生效。
3. 加载 `i18n/runtime.js` 和 `i18n/common.en-US.js`。
4. `_router.js` 渲染本地化的侧边栏、面包屑、主题切换和语言切换。
5. 中文模式只加载页面片段；英文模式并行加载页面片段和 `i18n/en-US/<id>.js`。
6. 页面写入 `#app-slot` 后调用 `apply(slot)`；route id 已包含在 `namespace:key` 中。

### 页面导航

- 词典脚本与页面脚本分别缓存，二次访问不重复加载。
- `document.title` 使用当前语言的路由名称。
- 加载态和错误态使用 `common` namespace。

### 语言切换

1. 更新当前 locale、`localStorage` 和 `<html lang>`。
2. 记录当前 `scrollY`。
3. 重新渲染侧边栏、工具栏和当前页面。
4. 英文词典加载完成后应用翻译。
5. 恢复阅读位置，并把焦点保留在语言切换按钮。

hash、主题和已加载页面缓存都不改变。

## 共享导航与动态文案

`ROUTES` 继续保留中文 label/group 作为默认数据。`common.en-US.js` 提供：

- 6 个导航分组名称。
- 66 个路由名称。
- 概览、加载中、加载失败、检查文件和重试等 shell 文案。
- Light、Dark、中文、English 控件的 aria-label。
- Demo 交互产生的“已点击”“已选择”“已展开”“已收起”“分页”等动态提示。

日期选择器中由路由器生成的月份和日期标签使用 `Intl.DateTimeFormat(locale)`，数字使用 `Intl.NumberFormat(locale)`，不为每个日期建立词典项。

## React 与 AntD 对齐

当前静态站不加载 React 或 AntD。业务 React 仓库可直接复用相同 key：

```tsx
const { t, i18n } = useTranslation(['buttons', 'common']);

<ConfigProvider locale={i18n.language === 'en-US' ? enUS : zhCN}>
  <Button>{t('common:save')}</Button>
</ConfigProvider>
```

职责边界：

- `react-i18next`：页面标题、菜单、字段、按钮、状态和业务提示。
- `ConfigProvider.locale`：DatePicker、Pagination、Table 筛选器等 AntD 内置文案。
- `Intl.*Format`：日期、数字、货币、百分比和相对时间。

## 英文布局适配

所有适配以 `<html lang="en-US">` 为作用域，不复制组件样式。

### Shell

- 中文侧栏保持 `240px`。
- 英文侧栏扩展到约 `272px`，导航允许自然换行到两行。
- `.nav a` 使用 `min-width: 0`、稳定行高和可增长高度，不截断关键名称。
- 工具栏并列放置语言 Segmented 和主题 Segmented；面包屑保留 `min-width: 0` 和 ellipsis。
- 小屏沿用现有响应式侧栏方案，两个切换器保持可见且不覆盖面包屑。

### 组件

- Button 保持 `min-height: 32px`，英文长文案可增加宽度或换成两行。
- Form label 使用自适应列宽；长 label 可换行，不挤压输入控件。
- Tabs 在空间不足时横向滚动，不压缩到不可读。
- Tag 和状态文本保持单行，但容器宽度随内容增长。
- Card 标题和描述允许自然换行，网格列使用 `minmax(0, 1fr)`。
- Modal、Drawer 和结果页操作区允许按钮换行。

### 表格

- 英文模式保持可读列宽，不通过缩小字号容纳长文本。
- 对未提供滚动容器的展示表格增加统一的横向滚动包装。
- 表头可换行到两行；技术字段、SN、版本号保持单行。
- 页面主容器继续限制横向溢出，滚动只发生在表格区域。

## 无障碍

- 语言切换使用原生 `<button>`，具有 `role="group"`、本地化 `aria-label` 和 `aria-pressed`。
- 切换后更新 `<html lang>`，便于屏幕阅读器使用正确发音。
- 键盘 Tab 与 Enter/Space 可完成语言切换。
- 切换语言时不把焦点移到页面顶部。
- 英文翻译不删除原有状态文字、图形或颜色以外的辅助编码。

## 错误处理

- 不支持的 locale：回退中文。
- `localStorage` 不可用：当前会话仍可切换，刷新后回到中文。
- 英文词典加载失败：保留中文页面，工具栏继续可用，并输出明确错误。
- key 缺失：保留节点原文，不显示空字符串或 key 本身。
- 快速切换路由或语言：使用请求序号忽略过期异步结果，避免旧词典覆盖新页面。

## 测试与校验

仓库继续不引入测试框架，使用 Node 脚本执行可重复校验。

### 测试先行

在实现运行时代码前，先增加失败测试，覆盖：

1. locale 规范化和中文默认值。
2. 英文选择的持久化与存储异常降级。
3. namespace 注册、查找、参数插值和缺失 key fallback。
4. 文本与属性 key 的应用规则。
5. 语言切换后 `html.lang`、标题和当前路由保持正确。

### 词典完整性

校验脚本必须确认：

- 路由、页面片段和英文词典均为 66 个且 id 一致。
- 所有 `data-i18n*` key 在 `common` 或当前页面 namespace 中存在。
- 非代码、非 `data-i18n-ignore` 的中文可见文本都带稳定 key。
- 英文词典不存在未被页面或 shell 使用的孤立 key。
- 页面 fragment 仍可在 Node 中全部注册。
- 内部路由链接、首个 eyebrow 分组和模板字符串安全检查继续通过。

### 浏览器验收

至少检查以下路由：

- `overview`：Hero、统计和长段落。
- `buttons`、`inputs`：按钮、placeholder 和表单 label。
- `table`：英文表头、分页、操作区和横向滚动。
- `i18n`：刻意保留的四语言样例不被误翻译。
- `login-page`：语言切换、表单和验证码区域。
- `device-center-page`、`ops-page`：高密度业务表格和长业务术语。

桌面与移动视口都要验证 Light / Dark × zh-CN / en-US 四种组合，无重叠、裁切、空白页面或横向页面级溢出。

## 文档同步

实现完成后同步：

- `README.md`：支持语言、目录结构、切换方式和校验命令。
- `AGENTS.md`、`CLAUDE.md`：新增/修改页面时必须同步 key 与英文词典。
- `AI_DESIGN_SYSTEM.md`：补充语言资源权威顺序和 React/AntD 落地方式。
- `project/pages/i18n.js`：把“规范示例”更新为“当前站点真实实现 + 业务仓库落地”。

## 验收标准

1. 66 个路由在中文和英文下均可打开。
2. 所有非排除的可见中文内容在英文模式下有英文结果。
3. 语言选择可持久化，切换不改变 hash、主题和阅读位置。
4. 英文模式下桌面和移动端没有控件重叠、关键文本裁切或页面级横向溢出。
5. `file://` 无服务器运行保持可用。
6. 原有页面注册、路由、链接、主题和禁用模式校验全部通过。
7. 新增国际化运行时测试和词典完整性校验全部通过。
