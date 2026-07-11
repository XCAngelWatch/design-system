# 2026-07-11 组件与内容一致性审计

## 目的与权威顺序

本轮审计覆盖 66 个路由，重点校准通用组件、业务模式与页面蓝图之间的契约。发生冲突时依次采用：当前仓库规则与 `--aw-*` → `AI_DESIGN_SYSTEM.md` → `docs/ai-coding-design-reference.md` 的模块字段锚点 → 当前组件契约 → 历史审计证据。旧 Vue / Element UI 与排除的 Figma 内容不能覆盖当前规范。

## 已确认问题与修正

| 类型 | 当前冲突 | 权威来源 | 修正结果 | 受影响路由 |
| --- | --- | --- | --- | --- |
| 业务状态 | 设备八态被描述为单枚举，并硬编码心跳阈值 | 设备状态三字段锚点 | 八态改为派生展示态，真实字段保持 `onlineFlag/state/registeredFlag`，阈值由部署配置 | `status-matrix`, `device-center-page` |
| 推送状态 | “已完成 / 已撤回 / 待执行 / 取消”与四种批次状态混用 | 推送任务字段锚点 | 批次只用执行中 / 成功 / 部分成功 / 失败；设备结果追加已过期 / 已终止 | `push-page`, `copywriting`, `toast`, `status-matrix` |
| 推送权限 | 同页同时写“已过期不可重试”和“失败/已过期可重试” | `push_task_rePush` 规则 | 失败和已过期可按权限重试；已终止不可重试 | `push-page`, `avatar-result` |
| 账户创建 | 说明写自动生成密码，表单仍要求手填密码 | 账户字段锚点 | 移除密码输入，创建后展示临时密码、复制和首次登录修改提示 | `user-mgmt-page` |
| 设备指令 | 标题写 16 项，实际清单数量不一致 | 当前完整动作清单 | 移除不可靠的数量，只保留“远程控制快捷指令” | `device-center-page`, AI 入口文档 |
| 状态样式 | 账号启停、任务成功等复用 `.online/.offline` | Tag / Status 语义契约 | 连接态保留旧类，其他业务状态改用 `.is-*` | `tags`, `push-page`, `user-mgmt-page`, `ota-page` 等 |
| Tag 样式 | 颜色类和业务语义混用 | 色彩与 Tag 契约 | 增加五种语义 Tag；八色分类色板仍只用于分类 | `tags` 及业务蓝图 |
| 反馈边界 | 错误 Toast 示例与“错误禁用 Toast”规则并存 | Feedback / Result 契约 | Message、Notification、Alert、Modal、Result 重新分工，错误终态进入 Alert / Modal / Result | `toast`, `feedback`, `avatar-result` |
| 运行时资源 | Shell、登录页和站点侧栏依赖失效外链 Logo | 离线 / 自托管规则 | 全部改用 `project/favicon.ico` | `shell`, `login-page`, `_router` |
| 真实组件色 | 危险按钮 hover、Tag 和 Alert 边框硬编码 | `tokens.css` | 增加 `--aw-danger-hover`，其余改用已有状态 border token | `components.css`, `tokens.css` |

固定色允许范围：色板样本、token 可视化、代码语法高亮、终端窗口指示灯、Avatar 分类色和许可证徽章。这些颜色是被展示的数据或装饰，不是业务组件运行时状态色。

## 66 路由组件引用矩阵

| 分组 | 路由 | 主契约 |
| --- | --- | --- |
| 导览 | `overview`, `ai-reference`, `cases` | 导航索引、业务路径、权威来源，不定义组件变体 |
| 设计基础 | `color`, `dark`, `i18n`, `type`, `space`, `radius`, `motion`, `layout`, `responsive`, `palette`, `icons`, `illustration`, `a11y` | `--aw-*`、主题、Intl、密度、响应式和可访问性，是所有组件上游 |
| 通用组件 | `buttons`, `inputs`, `menu`, `nav-comp`, `table`, `tags`, `feedback`, `progress`, `datepicker`, `upload`, `tree-comp`, `drawer`, `toast`, `skeleton` | AntD v6 原语、状态、反馈与容器契约，不写模块专属字段 |
| 业务模式 | `status-matrix`, `data-cards`, `row-actions`, `charts`, `cascader`, `advanced-form`, `tab-variants`, `avatar-result`, `empty-state`, `error-page`, `loading-levels`, `page-header` | 组合通用组件并定义 TMS 复用规则，不复制页面业务数据 |
| 页面蓝图 | `shell`, `login-page`, `list-page`, `detail-page`, `form-page`, `tree-list`, `wizard-page`, `dash-page` | Shell/Menu；Login/Input/Feedback；List/Table/RowActions；Detail/PageHeader/Tabs；Form/Input/Validation；TreeList/Tree/Table；Wizard/Progress；Dashboard/DataCard/Charts |
| 页面蓝图 | `device-center-page`, `market-page`, `ota-page`, `push-page`, `user-mgmt-page`, `map-page`, `service-page`, `ops-page` | 模块字段锚点 + Table/DataCard/Drawer/Upload/Status/Result/Tree/Charts 等现有契约 |
| 工程落地 | `ecosystem`, `tech-stack`, `config-provider`, `api`, `data-format`, `copywriting`, `whitelabel`, `do-dont` | 实现、格式、文案、主题和红线，不创建第二套视觉或业务枚举 |

## 页面蓝图引用规则

每个页面蓝图必须包含带 `data-component-contract` 的“组件契约”区。该区只引用已有路由：Shell/Login 对应导航、输入、反馈和白标；List/TreeList 对应 Table、Tree、RowActions、Empty、Loading；Detail/Form/Wizard 对应 PageHeader、Tabs、Drawer、Input、Validation、Progress；Dashboard 对应 DataCard、Charts、Table、Empty、Loading；模块页面再叠加业务字段锚点。

## 自动防回归

`node scripts/check-consistency.js` 检查：16 个蓝图均有组件契约、账户创建不含密码输入、推送页不含废弃状态词、非连接状态不冒用 `.online/.offline`、内部路由链接完整、路由与片段一致、运行时 Logo CDN 已清除。

落地到 sibling React 仓库时需同步：`--aw-danger-hover`、语义状态修饰类对应的 React `Status` 映射、语义 Tag 映射，以及推送/账户的业务规则；本仓库不直接修改 sibling 仓库。
