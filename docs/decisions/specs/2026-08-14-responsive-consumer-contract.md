# TMS Web UI 响应式与消费者契约决策

- 日期：2026-08-14
- 状态：已授权执行
- 授权来源：用户在当前 Codex 任务中明确要求同时修改 `design-system` 与 `tms2.5-web-ui`，优化 2026-08-13 审计发现的问题。
- 影响仓库：`design-system`、`tms2.5-web-ui`
- 机器契约：`contracts/tms-web-ui.json`

## 背景

源规范曾声明 TMS 不支持手机并在小于 1024px 时显示 `ResolutionGuard`，而当前 React 应用已经实现窄屏导航与 390px 视觉验证。与此同时，源规范中的断点、密度、分页、PageHeader、反馈上下文和消费者工程路径分散在多个页面，无法由消费者仓库自动验证。

## 本次授权内的决策

1. 采用“桌面优先、支持窄屏与移动端”的产品假设。窄屏保留核心查询、查看和受控操作能力，不再显示 `ResolutionGuard`。
2. 响应式实现统一使用 Ant Design screen token：`xs=480`、`sm=576`、`md=768`、`lg=992`、`xl=1200`、`xxl=1600`；小于 xs 使用基础窄屏样式。设计 QA 另外覆盖 390、480、576、768、1024、1280、1366、1440、1920px；QA 视口不是另一套 CSS 断点。
3. `small=24px` 是 AntD 小尺寸控件；TMS `compact=28px` 是应用密度；默认与大尺寸分别为 32px、40px。Compact 不使用 `compactAlgorithm`。
4. 分页默认 20，选项固定为 20/50/100/200。表格 RowActions 默认只明示 1 个主操作，其余收入“更多”，降低高密度表格噪音；紧凑卡片/图标模式最多明示 3 项，从第 4 项起折叠。
5. PageHeader 不提供自由副标题，`keyFields` 只承载结构化关键字段；危险动作不进入页头；长 Detail/Form/Dashboard 在滚动 60px 后 sticky + compact，List 不 sticky。
6. 应用根保持 `ConfigProvider > App`，反馈只从 `App.useApp()` 获取；Notification 默认 topRight，最多同时展示 3 条。
7. 当前消费者是 sibling 单应用仓库 `tms2.5-web-ui`。当前不假设存在 `tms2.5-web-react` monorepo、`packages/web` 或已发布的 `@tms/design-tokens`。
8. 消费者支持 `zh_CN` / `en` / `es` / `pt` / `fr` / `ru` 六种 locale；六份字典必须共有 `common.scrollableTable` 与 `common.dangerZone`，用于表格滚动区和危险区的共享可访问文案。代码中的 `defaultValue` 字面量至少要在 `zh_CN` 与 `en` 目录有正式 key，不能成为漏翻的旁路。
9. 现有 `fill-1/2/3` 值已被业务 CSS 消费，不为修正编号语义而大面积换值。AntD alias 按实际感知强度桥接：`fill-3 → colorFill`、`fill-2 → Secondary`、`fill-1 → Tertiary`、`fill-4 → Quaternary`；`fill-4` 显式定义为 Light / Dark 的最弱层。
10. 日期时间传输使用 RFC 3339 / ISO 8601 instant；界面展示使用 `Intl.DateTimeFormat`。时区依次取用户或租户 IANA 标识、运行时解析的 IANA 标识、`UTC`，固定偏移不得冒充时区。
11. 页面或区域首次加载、刷新加载失败时，单独 toast 不足以承载错误；必须使用持久的内联 `Alert` / `Result` 并提供重试。已有内容上的单次操作失败可以使用 Message。
12. 强调色按使用场景拆分：`primary-text` 用于链接与浅色选中底上的文字，`primary` 用于图形/边框强调，`primary-solid*` 用于白字实心主控件；成功与危险实心表面分别使用 `success-solid`、`danger-solid*`。`text-on-brand` 是实心品牌色表面的唯一前景 token。这样 Dark 主题可以保留明亮链接，同时保证 12–14px 白字按钮与状态标记达到 WCAG AA，禁止再以一个色值同时承担前景和实心背景。

## 同步与验证

`contracts/tms-web-ui.json` 是可复制的消费者契约。消费者将其原样同步到 `docs/design-system/source-contract.json`，在本地门禁中验证代码与契约。源仓运行 `node scripts/check-consumer-contract.js`，验证 token 与关键规则没有发生静默漂移。

业务仓私有 token 可以保留，但不得覆盖源 token；跨模块语义 token 必须先进入源仓，再同步消费者。

## 后续复核

本决策中的移动支持范围属于本次任务为解除三方冲突而采用的明确假设。若产品负责人或架构师之后要求改变支持矩阵，应先更新本决策及机器契约，再同步页面规范、消费者实现与测试，禁止只改其中一处。
