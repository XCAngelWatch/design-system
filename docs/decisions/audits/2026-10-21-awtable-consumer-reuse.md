# AWTable 消费者复用审查

## 范围与证据

本次根据用户“结合当前前端的代码分析……吸收进来当做统一的组件封装……交互尽可能再细致一些……优化系统设计页面”的要求，只更新 Design System 的分析与规范。消费者实现仍遵循此前“确认后再更新当前项目”的边界。

- 消费者：`/Users/david/Documents/workspaces/xctech/tms25/code/tms2.5-web-ui`，分支 `dev_20260928`，读取时 HEAD 为 `320877432a0234c6e59eb3649d6d693b27ac5413`，工作区干净。
- 源规范：Design System HEAD `39aca4e9c25a4629c7c29dba600391090e029c69` 加本任务已有的未提交 AWTable 改动；对照 [AWTable 契约](../../components/aw-table.md)。
- 下文 `src/` 路径均相对消费者仓库，行号对应上述读取快照。结论来自源码静态阅读，未执行消费者运行时验收、后端请求或业务写入；“可吸收”不表示现有实现的所有边界已经验证。
- 本次不重新引入独立刷新按钮、列设置、业务操作图标，也不把静态文档站描述为已经发布的 React 组件包。

重复使用统计以 `src/**/*.tsx` 中包含对应标识的非测试文件为单位，不等于独立页面数或组件实例数：`AppTable` 25 个文件，`buildPaginationProps` 29 个，`RowActions` 17 个，`StatusIndicator` 12 个，`useTableColumnFreeze` 5 个，`loadListState` 3 个，`useInstallTaskAutoRefresh` 3 个。足以证明公共能力已有复用基础；不能据此推断所有页面行为一致。

## 复用决策

“吸收”表示保留已明确的机制；“适配”表示保留机制并按当前规范修正；“外置”表示作为相邻组件或领域适配器复用；“拒绝复制”表示不能进入统一默认规则。

| 当前实现与源码证据 | 决策 | 进入统一组件的内容与边界 |
| --- | --- | --- |
| `src/components/AppTable/AppTable.tsx:37–63` 合并调用方 Semantic DOM 类名、隐藏测量行退出键盘路径、横滚区域有名称 | 适配 → AWTable | 保留原生 Table 与样式透传，实际发生溢出时才增加滚动区 Tab 停靠点；隐藏测量副本不得成为重复控件。不能直接把薄封装改名当作完成统一组件。 |
| `src/components/AppPagination/pager.ts:23–64` 页码/页大小纯函数；`src/components/AppPagination/AppPagination.tsx:24–32` 内外分页共用配置 | 吸收 → 查询控制器 | 页大小改变与 page=1 原子提交；默认 20/50/100/200，业务例外显式声明。分页只有一个事件所有者，保留纯函数便于测试。 |
| `src/pages/resource-packages/ResourcePackagesPage.tsx:273–283,380–404,1019–1110` 完整筛选面板、applied 计数、草稿/已应用/展开分别保存 | 适配 → AWTableFilters | 保留分组、底部动作、折叠保值及草稿分离；搜索按最新规则同条件重取当前页、变条件回首页。完整草稿不能依赖仍挂载字段的 `getFieldsValue()`。 |
| `src/pages/apps/versions/AppVersionsPage.tsx:296–321,335–368` 请求序号、queryKey 与上下文共同隔离；`src/pages/ota-push-tasks/OtaPushTasksPage.tsx:115–139` 同类成功/失败/finally 隔离 | 吸收 → 可选 useAWTableRequest | 仅当前请求可提交 rows/total/error/loading；切上下文和卸载同时使旧请求失效。读取取消信号与响应代际检查并用，不能只防旧成功。 |
| `src/utils/useOrganizationScope.ts:14–38` 身份变化不暴露旧机构；`src/utils/organizationScope.ts:16–22` 区分范围加载/失败/空与全部授权范围；`ResourcePackagesPage.tsx:304–319` 查询门禁 | 外置范围适配 + 请求门禁 | 页面计算可查询状态与 contextKey；公共请求层接受启用/阻断信息。空范围或选项加载失败不能被当作“不限”发出更宽查询；组件不自行获取角色或推断权限。 |
| `src/components/RowActions/RowActions.tsx:131–171,199–205,242–292` 同步执行锁、一次确认、取消默认焦点、失败保留重试、禁用原因和键盘菜单 | 适配 → AWTableActions | 锁定粒度为行 key＋动作 id；确认与执行共用入口。完整保留对象、后果与焦点契约；无菜单时普通操作 1–3 展示；有菜单时最多 2＋更多，总入口不超过 3，并按真实容器/文案测量。 |
| `src/utils/useTableColumnFreeze.ts:8–23` 观察实际 content box；`ResourcePackagesPage.tsx:630–647`、`src/pages/devices/components/DeviceTable.tsx:50–64` 有重复测量 | 适配 → 内部 ColumnPlanner | 收口容器测量、字体/语言变化后重测、冻结预算和局部横滚。页面只声明语义宽度与优先级，不重复手算动作列或 scroll.x。 |
| `src/components/OrgTreeSider/OrgTreeTitle.tsx:20–65` 实际测量、字体加载重测、仅截断时全文访问；同时由 `OrgTreeSider.tsx:170–175` 与 `orgTreeSelectProps.tsx:5–25` 使用 | 吸收 → 通用全文展示原语 | 表格可复用“截断后才提供全文”的机制，支持 hover/focus/click/Escape 与读屏完整值；不为每个普通单元格都创建 Tooltip 和 Tab 停靠点。中间省略还是尾部省略由数据语义决定。 |
| `src/components/StatusIndicator/StatusIndicator.tsx:27–53` 明确文字＋语义状态；`src/utils/format.ts:36–65,89–108` locale 数字/容量/时区时间 | 外置单元格原语 | 状态、金额、容量、时间格式通过列 renderer 组合；业务状态映射、单位和时区来源仍由领域适配器提供。纯文字动作规则不删除状态的辅助语义图形。 |
| `src/components/TMSEmpty/TMSEmpty.tsx:20–50` 简单空态壳；`src/pages/ota-push-tasks/OtaPushTaskDetailPage.tsx:292–330` 摘要、任务、明细各自保存成功/错误 | 适配 → 状态区域 | 统一空/无匹配/初次失败/旧结果刷新失败/无权限的结构；摘要或筛选选项失败只影响自身区域，不把整表伪装成无数据。重试指向失败区域。 |
| `src/stores/deviceListStore.ts:13–21,106–132` 表格/卡片共享查询、切机构清选择；`src/pages/devices/groups/AddDevicesToGroupModal.tsx:65–87,246–269` 跨页选择与弹窗上下文清理 | 适配 → 选择控制器 | 只保留显式 `page/query/context` 范围；数量与清空入口说明范围。视图切换保留同一状态，切业务对象清理旧选择。`preserveSelectedRowKeys` 不能独立定义选择策略。 |
| `src/pages/apps/versions/AppVersionsPage.tsx:395–399,564–588,631–655` 操作完成使用最新 loader；`AddDevicesToGroupModal.tsx:137–160` 同步提交锁与弹窗代际隔离 | 吸收 → 操作协调器 | 操作开始时固定对象与上下文，完成后检查上下文；同上下文重取当前已应用查询，不提交草稿，不把捕获的旧页条件写回新页。写入失败不自动重放。 |
| `src/pages/resource-packages/resourcePackageListState.ts:16–45` 分别序列化草稿/已应用/日期；`ResourcePackagesPage.tsx:125–140,399–404` 身份及返回位置隔离；`src/utils/listStatePersistence.ts:7–27` 存储失败降级 | 适配 → 可选恢复适配器 | 恢复白名单字段、schema 版本和身份范围，损坏时回默认。日期 codec 可由领域提供；不能把 JSON 类型断言当作运行时校验。选择和待执行操作默认不持久化。 |
| `src/pages/apps/install-tasks/useInstallTaskAutoRefresh.ts:144–255` 单计时器、隐藏暂停、失败退避、补查合并；被任务列表/详情/设备明细使用 | 外置、显式启用 | 自动更新不成为所有表格默认能力。调度器只调用统一读取入口，保留当前页/草稿/选择；任务状态边界和间隔由领域决定。后台读取不能与用户搜索并发双取或抢焦点。 |
| `src/components/OrgTreeSider/OrgTreeSider.tsx:11–27,143–177` 插槽及加载/错误/空态；`ResponsiveOrgTreeSider.tsx:24–47` 窄屏抽屉与选择关闭 | 外置 → 机构范围组件 | 与 AWTableRegion 并列组合，向外提供范围变化；不把机构树、鉴权读取和机构选择状态塞进表格内核。 |
| `src/utils/scrollableModal.ts:4–13` 固定头尾、正文滚动；`src/pages/accounts/AccountsPage.tsx:1064–1084` 打开后初始化及焦点恢复；`src/utils/confirmDestructiveAction.tsx:8–43` 对象/后果/数量和一次确认 | 外置 → 表单弹窗、确认适配器 | 表单弹窗统一初始化时点、脏值保护、提交防重、错误定位、关闭/焦点恢复；危险确认统一结构但内容由领域提供。表格只通过动作连接它们。 |
| `src/pages/apps/install-tasks/AppInstallTaskDetailPage.tsx:420–455` 导出同步锁；`src/pages/resource-packages/push-tasks/executionExport.ts:76–139` 共享 CSV 转义、本地化和下载 | 外置 → 导出适配器 | 表格只声明导出动作与范围，调用方负责后端任务/文件及数据转换；导出快照、失败重试和空结果反馈可统一。不能从当前可见 rows 推断“导出全部”。 |

## 不能复制为统一规则的现状

| 观察证据 | 要避免的问题 |
| --- | --- |
| `src/components/AppTable/AppTable.tsx:73–82` 同时手动转发分页回调与调用表格回调 | 存在两处更新查询的路径；消费者迁移必须按实际锁定的 AntD 行为验证网络次数，不凭旧注释保留双出口。 |
| `src/components/RowActions/partitionRowActions.ts:7–31` table 默认最多 2 项、按禁用状态重排；`RowActions.tsx:105–106,214–215` 视口强制 1 项及菜单图标 | 与用户确认的 1–3/4 项规则、容器适配、稳定顺序、纯文字动作冲突。不能改名后沿用旧默认值。 |
| `ResourcePackagesPage.tsx:633,797` 固定预算/操作列宽；`DeviceTable.tsx:52,154` 类似手算值 | 不把某页的 200/340px 或视口阈值变成统一列宽，长译文、机构树、嵌套表会改变实际可用宽度。 |
| `src/stores/deviceListStore.ts:113–117,145–148` 筛选/排序恢复整套默认分页，整个 store 持久化；`src/utils/listStatePersistence.ts:11–16` 未做字段校验 | 查询改变通常只重置 page，不应无意清除用户 pageSize；不能照搬全 store 持久化、默认保存选择或信任存储中的 page/sort/字段。 |
| `src/pages/devices/components/DeviceBatchMoveModal.tsx:63–83` 仅统计成功/失败数量，处理完关闭 | 可以借鉴提交锁与逐项反馈，但公共批量结果必须保留各项 key、结果和可重试性；部分失败不能只 Toast 后丢失失败对象。 |
| `ResourcePackagesPage.tsx:255–264` 机型选项失败变为空数组；`src/pages/apps/components/TaskDeviceExecutionTable.tsx:217–226` 前台失败清 rows/total | 筛选选项“加载失败”必须区别于“没有选项”；请求失败的未知总数不能显示为成功的 0 条。保留旧结果需标注其所属查询和更新时间。 |
| `src/pages/roles/RolesPage.tsx:689–704`、`ResourcePackageFormModal.tsx:1155–1187` 打开回调再写字段 | 表单初始化是场景实现，不能机械复用无条件回填；公共弹窗须防止异步默认值覆盖用户已编辑草稿。 |

以上是组件提炼时的修正项，不是消费者运行时缺陷已全部复现的声明。

## 本次应补足的细节契约

既有 AWTable 契约已经覆盖搜索、排序、列宽、选择、请求代际和基本状态；进一步开发前需把以下边界写成可执行的交互表，而非只增加布尔配置。

| 场景 | 必须明确的处理 |
| --- | --- |
| 用户操作与后台读取相遇 | 后台更新显式启用，隐藏页面暂停；正在搜索时不另起后台读取。用户提交有效草稿的请求优先，取消/失效后台旧读；失败退避不能吞掉用户显式搜索。 |
| 写操作完成时用户已翻页/筛选/切对象 | 提交快照固定 rowKey/上下文/意图；当前上下文一致才更新当前列表，重取最新已应用查询；切对象后不弹旧弹窗、不覆盖新页，也不自动重放写入。 |
| 批量确认到执行 | 确认显示固定选择范围和数量；确认期间选择变化不静默扩大操作集合。执行前重核资格，返回逐项成功/失败/跳过/未知；只移除成功项，保留可重试失败项及原因。未知结果需查询确认，不能盲目重发。 |
| 分页尾页收缩 | 成功结果中的 total 才参与校正，page 超尾页时合并一次 correctPage＋补查；失败/未知 total 不回首页，不形成补查循环。 |
| 区域依赖与权限改变 | 筛选选项、范围、摘要、表格分别有状态与重试；必需范围未准备好时不请求表格。身份变化立即隐藏旧上下文，清理不适用的选择、确认与错误。 |
| 单元格全文与格式 | 真实截断才提供全文入口；鼠标、键盘、触屏均能关闭，不抢走行操作焦点；零值、未知值、空值区分，时间显示使用明示时区，CSV 与显示值转换分层。 |
| 返回列表 | 草稿/已应用/展开分别恢复；分页、排序、上下文先校验，再只发一个初始读取。滚动在匹配结果和布局就绪后恢复，不等待固定帧数；有新导航/输入时不抢滚动或焦点。 |
| 导出 | 显示当前页/已选/全部匹配等明确范围；开始时冻结已应用条件、选择、上下文和语言，不导出未提交草稿。执行中防重复；空结果/取消/失败分开，导出文件任务由适配器负责。 |
| 表单弹窗与危险确认 | 初始化不覆盖 touched 字段；校验失败保持打开并定位首错；业务失败可重试且仅一处反馈；取消只在没有不能中断的提交时生效，关闭后回到仍有效的触发器或稳定后备位置。 |

## 分阶段实施与验收

| 优先级 | 范围 | 验收证据 |
| --- | --- | --- |
| P0：先完成源契约 | AWTable、Filters、Actions、ColumnPlanner、查询单出口；把上述吸收/适配边界放入设计页 | 文档、机器契约与示例一致；无独立刷新/列设置；无菜单时普通操作 1–3 项全部可见；有菜单时最多 2 项＋更多，总入口不超过 3；长译文、真实容器宽度、Light/Dark、键盘可操作。 |
| P0：确认后实现消费者基础 | 用日志/简单列表与资源包验证远程分页、完整草稿、状态区及内外分页 | 每次有效搜索恰好一次读取；旧 success/error/finally 不覆盖新上下文；同条件当前页重取、变条件首页；非法/收起字段校验；首次错误不显示 0 条。 |
| P1：复杂列表与选择 | OTA/资源包/设备/分组、表格卡片共享、一次确认与批量结果 | 翻页/筛选/切机构/切租户选择策略明确；确认快照不扩张；部分失败保留目标；删除尾页校正一次；操作完成重取当前查询；长文案和焦点回退实测。 |
| P1：相邻组件复用 | 全文展示、状态格式、机构范围、表单弹窗、恢复适配器 | 只截断内容增加全文入口；权限/选项失败不放宽查询；默认值不盖脏值；损坏存储/无效字段回默认；六语言消费者回归。 |
| P2：按业务启用 | 自动更新、导出、复杂展开与大数据能力 | 隐藏/可见切换、后台与搜索竞争、失败退避、上下文变更、导出快照分别验收；不用固定行数自动切换表格引擎。 |

消费者各阶段都需本身的代码、单元/交互测试与真实环境验收；Design System 静态预览通过不能代替接口权限、批量写入或设备执行验收。本报告不修改消费者，不记录其构建/运行时测试为已完成。
