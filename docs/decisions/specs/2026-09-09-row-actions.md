# 行操作按用途和可用宽度收纳

本决策替代 2026-08-14 consumer contract 中的行操作条款，其余 token、断点、密度和业务权威边界保持原契约。

授权记录：2026-09-09，Codex 任务 `01a08615-f431-7e93-9c02-d9fff886bd57`，用户在逐页审查后明确回复“授权 同步 Design System ，同步统一落地”。消费者审查记录为 `tms2.5-web-ui/docs/more-actions-usability-audit.md`。授权涵盖本次行操作规范及消费者落地，不含提交、推送或发布。

## 规则

- 表格与紧凑卡片最多直接展示一个主操作和一个常用辅助操作。主次由页面依据已核实业务状态声明，不依据实时点击频率重排。普通动作只剩一项时直接显示，无操作时不创建空菜单。
- 操作使用 `primary / secondary / menu` 声明位置。危险动作默认收纳且分隔置底，不因缺少其他权限被提升到行内；只允许登记的明确单用途例外，当前例外为分组成员移出。
- 使用现有 md 断点判断窄容器，并测量完整按钮文案。容不下辅助操作时收入更多，保留主操作；同一表格沿用同一容器预算。表格使用文字，卡片图标有名称和提示。
- 行内与菜单共用一个执行和确认流程。需要确认的行操作统一一次 Modal，默认焦点在取消；请求进行中禁止重复触发。调用方已拥有确认对话框时，不再重复声明组件 confirm。
- 禁用动作保留短名称并解释原因。权限、状态、allowedActions、数据范围和接口参数仍由业务契约决定；布局变化不新增权限或扩大数据范围。
- 菜单由点击或键盘触发，按钮提供对象上下文、aria-haspopup 和 aria-expanded。打开时交接焦点，方向键导航，Escape 关闭并回焦；触屏不依赖 hover。
- 页头保持独立预算：一个强调主按钮，最多三个直接动作，第 4 项起收纳；危险操作不直接平铺在页头，使用“更多”菜单中分隔置底的危险分组或独立危险区；两种位置均沿用一次 Modal 确认。有业务名称的决策菜单（例如审核）保留名称，不改成“更多”。

## 公共组件落地

`RowActionItem` 增加 placement、disabledReason、loading、allowDangerInline；onClick 支持 Promise。RowActions 增加 contextLabel，支持 table、compact、toolbar 模式。table/compact 上限 2，toolbar 上限 3。visibleCount 和 overflowKeys 为兼容入口，仍受模式上限及危险规则约束。

响应式测量、菜单语义、pending 和确认由公共组件拥有；业务页明确动作优先级。组件使用 antd 原生 Menu/Dropdown/Modal 和项目主题，不引入新依赖。

## 同步与验证

按源页面及中英文词典 → contracts/tms-web-ui.json → 消费者 source-contract.json 和文档 → 公共组件与业务页面同步。验证源 i18n、consistency、consumer contract；消费者检查权限/状态矩阵、行内/菜单确认次数、异步重复触发、键盘、主题、语言和窄布局。

参考：Carbon 推荐少量行操作直接展示以减少点击，其 overflow 指南将风险动作分隔置底；TMS 保留明确业务文字而非照搬图标形式。[Carbon Data Table](https://carbondesignsystem.com/components/data-table/usage/)，[Carbon Overflow Menu](https://carbondesignsystem.com/components/overflow-menu/usage/)。菜单焦点与展开语义按 [W3C Menu Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) 实施。

页头契约中的 `dangerActionsAllowed: false` 指禁止直接平铺危险按钮；`dangerActionsPlacement` 将上述独立区域明确为 `separated-overflow-menu` 或 `danger-zone`。这是对本次已授权“危险操作默认进入更多底部，分隔并确认”规则的同步澄清，保留既有设备页头的更多入口，不新增操作或权限。
