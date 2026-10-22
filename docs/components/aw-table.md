# AWTable 统一表格组件契约

## 交付范围与状态

AWTable 是 AngelWatch 管理后台统一表格的目标组件名称。本文件规定组件内容、组合方式、交互、布局和验收标准，供消费者实现前确认。Design System 仍是规范与可交互示例仓库；此处没有发布 React 运行时包，也没有可以安装的 `@angelwatch/table`。

2026-10-21，用户明确要求：

> 先更新 /Users/david/Documents/workspaces/xctech/tms25/code/design-system ，封装完整统一的table 组件，组件为 AWTable。先输出组件的内容，我确认后再更新当前项目。

最初授权只更新 Design System 源；随后用户已确认应用安装任务、OTA 包列表接入统一 AWTable，并批准列显隐、筛选和分页呈现修订，并于 2026-10-22 确认底栏与显示列位置调整，以及筛选跨行对齐、三种组合、触控尺寸和 16px 间距。当前筛选修订补充公共组件与设计系统内容；实际消费者实施与验证须单独记录，不表示全站迁移、提交或部署。本文中的目标 API 与实际已验证能力仍须分别记录；授权、规范差异和三层状态见 [决策记录](../decisions/specs/2026-10-21-aw-table.md)。

当前阶段按后续用户修订：不展示独立刷新按钮，“搜索”同时承担重新加载；相同条件搜索保留当前页，条件改变时回第 1 页。列设置按需启用，仅提供结果工具栏右侧的浅底图标入口、列显隐和隔离的偏好保存；拖拽列顺序与用户调整列宽继续延后。

开发时配套阅读 [交互细则](aw-table-interactions.md)：逐事件定义草稿/查询、请求次数、选择、焦点与滚动，并细化依赖准入、错误分区、批量结果、恢复和表单生命周期。[消费者复用审查](../decisions/audits/2026-10-21-awtable-consumer-reuse.md) 记录当前源码证据、17 类吸收/适配/外置决策以及不应复制的旧行为。交互细则是本契约的补充；配套模式不因此成为表格内核的强制功能。

## 组件目标与职责

AWTable 统一重复出现的表格问题：列宽、固定列、横向滚动、行操作、筛选提交、查询事件、分页、选择范围、加载与错误、国际化、主题和键盘访问。组件对简单嵌套表格保持轻量，对完整列表通过组合接入查询和工具栏能力。

组件基于消费者已使用的 Ant Design v6 Table，不引入第二套表格内核、不恢复 Pro Components，也不按数据条数自动切换实现。原生 Table 负责表格基础渲染；AWTable 负责项目级设计和事件契约。

| 层 | 负责 | 不负责 |
| --- | --- | --- |
| AWTable | 列规划、统一表格渲染、行操作、选择、分页、状态、固定列和无障碍 | 具体 API 路径、领域权限、业务状态转换 |
| AWTableRegion（可选） | 筛选区、工具栏、批量条、内容、分页的共同布局；允许内容为表格或卡片 | 机构树、页面导航、详情、上传和编辑表单 |
| AWTableFilters | 独立可复用的基础/高级字段、受控草稿、已应用计数、验证、搜索/重置和展开交互 | 领域字段、API 参数、机构范围、表格排序及页大小 |
| useAWTableState（可选） | 已应用查询、表单提交入口、页码重置、刷新版本、明确的恢复策略 | 筛选草稿字段、自动猜测后端字段或筛选逻辑 |
| useAWTableRequest（可选） | 请求生命周期、取消、过期响应隔离、重试 | 生成业务请求、直接访问全局 API 单例 |
| AWTableActions | 行内与菜单动作的计数、测宽、确认、执行反馈和焦点 | 为用户赋予权限、推断操作能否执行 |
| ColumnPlanner（内部） | 语义列宽、弹性分配、冻结预算、滚动总宽、测量缓存 | 为所有表格指定同一组固定宽度 |

以上名称定义职责和目标导出，不要求消费者把内部模块全部暴露为公共 API。页面传入经过领域规则计算的动作和选择状态；客户端的禁用或隐藏永远不替代服务端授权。

## 组件结构

完整列表的固定结构为：筛选区 → 工具栏 → 批量选择条 → 表格或卡片内容 → 分页。无筛选、无批量动作或不需要分页时，对应区域不占空白位置。弹窗、抽屉、详情中的小表可以只使用 AWTable。

- 筛选区统一使用独立可复用的 AWTableFilters，通过 AWTableRegion 的 filters 区域组合；默认显式搜索。即时筛选仅在业务显式声明时启用，同一字段不同时绑定两种提交方式。
- 工具栏左侧为标题、结果数量或上下文；右侧为文字业务动作及确需的密度、视图切换工具，以及32×32px 浅底“显示列”图标入口。不生成独立刷新入口，不为显示列另外新增工具栏。显示列与表格/卡片视图切换并排成组；没有视图切换时仍位于结果工具栏右侧。`AWTableToolbar` 负责 summary 左侧、children 右侧；AWTable 的 `slots.summary` 与 `slots.toolbar` 分别注入这两个区域，显示列由组件在右侧动作之后统一生成。空槽位不占空间。入口保持在表格横向滚动区域外，不在表头重复显示。窄容器允许同一逻辑组自然换行，按钮不缩小、不截断。
- 批量条只在存在选择时出现，显示选择范围与数量，提供清空和已授权批量动作。出现时不遮挡表头或滚动区域。
- 内置分页与外置分页共用一个查询控制器；只能有一个事件所有者。表格/卡片切换保留同一查询、选择策略和动作定义。
- 不因屏幕变窄自动把比较型数据表改成卡片。卡片视图由业务显式提供，数据含义和操作权限保持一致。

## AWTableFilters 筛选组件

### 资源包页面参考与边界

交互以消费者资源包列表为参考，并按用户修订取消顶部可见“筛选条件”标题行。基础字段直接展示，高级字段通过底部右侧“更多筛选/收起筛选”展开；分隔线下左侧显示“已启用 N 项”，右侧依次为更多筛选、重置、搜索。计数为 0 也显示。基础字段示例为关键词、机型、状态，高级示例为版本和创建日期段。这些名称只是场景示例，不写入通用组件的字段或 API 契约。

源码观察锚点（消费者路径相对 `tms2.5-web-ui`，只读核对）：

| 观察 | 当前源码位置 |
| --- | --- |
| 基础/高级字段及分隔线底部操作 | `src/pages/resource-packages/ResourcePackagesPage.tsx:1019`、`:1039`、`:1082`、`:1110` |
| 计数根据已应用条件而非正在编辑的草稿 | `src/pages/resource-packages/ResourcePackagesPage.tsx:273` |
| 搜索回第 1 页；重置清条件、排序、默认分页并收起 | `src/pages/resource-packages/ResourcePackagesPage.tsx:380` |
| 机构树立即更新业务范围，保留条件 | `src/pages/resource-packages/ResourcePackagesPage.tsx:999` |
| 草稿、已应用值与展开状态分别保存 | `src/pages/resource-packages/ResourcePackagesPage.tsx:399`、`src/pages/resource-packages/resourcePackageListState.ts:16` |
| 参考页面存在宽区关键词加宽、高级日期段加宽、窄区重排；关键词加宽不作为公共组件规则 | `src/pages/resource-packages/ResourcePackagesPage.module.css:96`、`:342`、`:357` |

本次复用上述结构，并依据后续用户修订调整搜索语义：资源包当前实现搜索总是回第 1 页，AWTable 则在相同条件搜索时保留当前页，只有条件改变才回第 1 页。另修正两个不应带入公共组件的细节：现有搜索按钮的搜索图标不复制，搜索/重置均为纯文字；现有高级区条件卸载后调用 `getFieldsValue()` 可能只收集仍注册字段，统一组件必须始终持有完整草稿，折叠不能丢值或漏提交。现有日期查询使用无 offset 的日首/日尾字符串是领域适配事实，不升级为通用日期传输规范。

### 结构与响应式

- 使用具名 section 和单个 Form：基础字段网格 → 可折叠高级字段网格 → 分隔线 → 左侧已启用计数，右侧展开入口 / 重置 / 搜索。不显示独立标题行；本地化 title 仅用于 aria-label 或屏幕阅读器名称，保留区域可访问名称。底栏 DOM 与键盘顺序一致：计数、展开、重置、搜索；长文案或窄容器下先让操作组换行并保持右对齐，重置与搜索保持相邻一组，计数仍左对齐；无高级字段时只省略展开按钮。
- 字段标签置于控件上方；基础区与高级区共享同一组等宽列轨道及列间距，同列控件的左右边界跨行对齐。普通字段默认占 1 列；日期段或明确需要额外空间的控件由 `layout.span` 声明占 2 列或整行，跨列宽度包含轨道间距，仍落在共同边界上。`span: 'full'` 只跨满共享轨道，不绕过轨道上限铺满整个面板。关键词不自动加宽。`layout.flex` 仅保留类型兼容，已弃用且不参与列比例或自动跨列；字段顺序保持 schema 顺序。
- 普通轨道默认可读下限为 224px、宽屏上限为 320px，最多 4 列，靠左排列。列数根据基础、高级两个分组各自的 span 占用与实际筛选容器宽度共同规划，高级区折叠不改变列轨道。例如基础 3 个普通字段、高级 2 个普通字段加 1 个跨 2 列日期段，宽度足够时共享 4 条轨道；基础行的空余位置保留，不把 3 个字段拉大铺满。超过 4 列的字段自然换行，不限制业务字段数量或强制固定数量后折叠。320px 上限是为修复实际业务宽屏过度伸展新增的适配规则，不将它描述为审核附件原有尺寸。
- `layout.minWidth` 表示该字段的可读宽度要求。规划每个候选列数时，按实际跨度扣除内部 16px 间距并折算为轨道下限，取所有字段的最大值与 224px 中较大者作为整面板统一下限；统一上限取 320px 与该下限中较大者。显式可读宽度因此可提高所有轨道的下限与上限，不能被宽屏上限悄悄忽略。容器收窄时减少列数，跨度随列数收敛；不超过 575px 时使用单列填满可用空间。桌面只有一列时仍遵守宽度上限；容器已不足一条轨道时优先适应容器，允许控件内部重排，避免整页横向溢出。机构树、抽屉和内嵌区域以各自容器测量，不用视口宽度猜测可用空间。
- 面板四边内边距、字段网格横纵间距、基础区与高级区间距均为 16px，沿用现有间距 token；标准、上下文、紧凑三种组合使用同一间距。标签与控件、日期段两个端点、按钮组内部等局部间距按对应组件规则，不因字段网格为 16px 一律放大。底栏保持紧凑；沿用当前 Design System 断点，不创建新全局 token。
- 精细指针桌面控件默认高度 32px；`pointer: coarse` 或筛选容器宽度不超过 575px 时，输入、选择、日期端点及展开/重置/搜索的可点击高度至少 44px。触控目标不可靠缩小文字或压缩按钮换取单行，窄区操作自然换行；上下文选择的标签点击区也要满足触控高度，不能只放大视觉图标。调整尺寸不改变 draft/applied 或查询次数。
- 底部计数与按钮始终可见且不截断。左侧计数为 0 也保留，右侧按展开、重置、搜索顺序布局；窄容器允许操作组另起一行并右对齐，计数保持左对齐；重置与搜索保持相邻的一组，按钮不收缩、不挤压，不把搜索入口收进“更多”。无高级字段时不展示展开入口，仍保留计数与右侧动作。
- 搜索、重置是纯文字按钮；展开入口保留必要的方向指示和 `aria-expanded/aria-controls`。搜索为主按钮，重置为默认按钮，展开为文字/链接按钮。

### 字段 schema 与受控接口

AWTableFilters 允许独立用于列表、卡片或其他结果区，不依赖 AWTable 实例。它接收调用方 schema 和受控 draft/applied，不内置业务字段，也不直接调用查询接口。

| 接口 | 契约 |
| --- | --- |
| `id` / `title` | 稳定实例 id、本地化可访问名称；title 不渲染可见标题行，id 用于 label、错误和高级区域关联 |
| `fields` | 稳定唯一 name、group、kind、label、placeholder、options、自定义控件及布局意图；字段顺序由 schema 决定 |
| `draft` / `onDraftChange(next, meta)` | 完整受控草稿；meta 标记字段及 input/clear 等原因，修改不会自行提交查询 |
| `applied` | 只读的已应用条件，用于计数和未提交变化比较；不会因修改 draft 自动更新 |
| `defaultValues` | 重置目标，允许非空默认值；不能把一律清空 `{}` 当成所有页面的默认 |
| `expanded` / `onExpandedChange(next)` | 受控高级区显隐；展开/收起不提交、重置或改变条件 |
| `mode` | 默认 `submit`；只有明确场景才设 `immediate`，不得同时绑定输入查询和搜索查询 |
| `validate(values)` | 可选整体验证，返回字段错误映射；与 schema 的字段验证共同运行 |
| `onSubmit(values, { reason })` | 归一化并验证通过后唯一提交入口；search 每次产生一次有效加载意图，条件改变则回第 1 页，相同则保留当前页重新加载；immediate 只处理有效条件改变 |
| `onReset(defaultValues)` | 唯一重置意图；调用方同步草稿/已应用值、收起高级区及执行已声明的查询重置策略，不同时触发 onSubmit |
| `submitting` / `disabled` | 反馈提交状态和上下文不可用；搜索防重复，其余控件是否可继续编辑由明确策略决定 |
| `messages` | 搜索、重置、更多/收起、已启用计数、错误等共用文案，统一 i18n；不提供业务图标配置 |
| `className/style/classNames/styles` 与 `aria-*` | 沿用公共组件透传边界，不允许隐藏必要错误或按钮语义 |

字段 schema 的目标内容如下；消费者实现时将原生控件 props 收窄为判别联合，避免任意属性覆盖受控 value、onChange、id 和错误关联。

```ts
import type { ReactNode } from 'react';

type AWFilterField<F> = {
  name: Extract<keyof F, string>;
  group: 'basic' | 'advanced';
  kind: 'text' | 'select' | 'multiSelect' | 'dateRange' | 'custom';
  label: string;
  placeholder?: string;
  options?: readonly { value: string | number; label: string; disabled?: boolean }[];
  loading?: boolean;
  optionsError?: string;
  onRetryOptions?: () => void;
  disabled?: boolean;
  layout?: {
    minWidth?: number; // 字段可读宽度；按跨度折算后统一提高面板轨道下限
    /** @deprecated 仅为兼容旧 schema 保留，不再影响等宽轨道或跨度。 */
    flex?: number;
    span?: 1 | 2 | 'full';
  };
  normalize?: (value: unknown, values: F) => unknown;
  isActive?: (value: unknown, values: F) => boolean;
  validate?: (value: unknown, values: F) => string | undefined | Promise<string | undefined>;
  render?: (binding: {
    value: unknown;
    onChange: (value: unknown) => void;
    id: string;
    disabled: boolean;
    status?: 'error' | 'warning';
    'aria-describedby'?: string;
  }) => ReactNode;
};
```

`kind: 'custom'` 必须提供 render，其他 kind 使用受约束的原生控件适配；自定义控件完整透传 binding 的 value/onChange/id/disabled/status/aria-describedby。`options` 的加载、搜索与领域权限由外层适配器负责；组件只展示加载/失败状态与已提供选项。无权限的字段不能仅用 disabled 假装授权，schema 改变时调用方应明确清理或迁移不再适用的 draft/applied。可见字段的暂时禁用不静默清空值。

### 草稿、计数和折叠

- 编辑、清空输入或选择“全部”只改变 draft；底栏左侧独立信息区的“已启用 N 项”只按 applied 计算，0 项也显示。计数表示已提交条件，不表示网络请求已经成功或这些结果已返回。
- 默认按字段而非值个数计数：trim 后非空文本计 1；多选有至少一个有效项计 1；完整合法日期段计 1；未选择、空数组、空字符串不计。合法的数值 `0` 或布尔 `false` 不能直接按 falsy 当空；业务“全部”哨兵由 schema 的 `isActive` 明确排除。
- 机构树是独立业务范围，不自动加入筛选计数；分页、排序和展开状态也不计。高级区收起时仍统计其中已应用条件，不能让隐藏条件悄悄生效却从计数消失。
- 展开/收起只控制呈现。保留完整草稿和所有字段的查询含义；提交与保存必须包含已收起的高级字段。可以保留 DOM 并使用 hidden/inert，也可以卸载后由完整受控 draft 驱动；不能依赖只返回已挂载字段的表单取值方法。
- 恢复列表时独立恢复 draft、applied 和 expanded；不把未提交草稿覆盖到已应用查询，也不因恢复折叠状态触发请求。变更业务上下文的清理/保留规则由父控制器声明。

### 提交、校验和重置

1. 搜索按钮与输入框回车走同一个 Form 提交入口。正在中文等输入法组合输入时回车不提前提交；多行自定义控件保留自身换行语义。
2. 提交时从完整 draft 生成快照，按 schema 归一化并校验全部有效字段，包括已收起的高级字段。异步验证只接纳当前草稿/上下文的结果，旧验证结束不能覆盖新错误或提交旧条件。
3. 验证失败不更新 applied、计数、分页或请求，也不回退到刷新旧条件；如果错误在高级区，展开它并把焦点移到首个无效字段。错误与 label、控件关联，不能只给顶部短暂提示。
4. 验证成功只调用一次 onSubmit，由父控制器的 `search(values)` 处理：归一化条件改变时更新完整 filters 与 page=1，并请求一次；与 applied 相同则保持当前页、页大小和排序，重新请求一次。查询状态相同可以保持对象 identity，但不得吞掉用户的搜索意图。没有独立刷新按钮。
5. 默认重置到 defaultValues 并收起高级区。AWTableFilters 只发 onReset，父控制器负责同步 draft/applied/expanded；不要同时调用 onSubmit 再产生第二次查询。
6. 重置是否同时恢复排序、页大小由父控制器声明。资源包参考配置采用 initialQuery 的排序/页大小和 page=1，保留当前机构/contextKey；通用筛选组件不擅自切机构或清除外部业务范围。

列表的显式重置同时清理选择与字段错误，即使 query 已是默认值；此时只恢复草稿/展开并清选择，不发读取。重置后的 query 确有变化才调度一次读取，不再额外提交搜索。

正在提交或对应查询仍 pending 时，搜索入口防止重复触发；结果完成或失败后可以再次搜索以重新加载。父适配层向筛选组件传入真实提交状态，不能只锁定同步回调的几个微任务；搜索入口和请求协调器共同保证一次受理的搜索只有一次请求。允许在 pending 时继续编辑草稿的页面，编辑不得改变已经发出的搜索快照。

日期段默认要求两个有效端点、开始不晚于结束；仅填一个端点时不把它默默当作完整范围。允许开放区间的业务必须显式提供验证、计数及适配规则。组件可以用日期控件展示，但查询接口使用日期还是 instant、日首/日尾含义、时区、闭区间或半开区间都由领域适配器决定，遵循源日期契约，不把资源包的无 offset 字符串推广为默认。

### 组合用例

标准、上下文、紧凑是同一个 AWTableFilters 的组合示例，不新增平行的 FilterPanel 组件或模式开关。公共组件与设计系统示例复用以下规则；示例字段不成为领域契约。

| 组合 | 用法 | 共同约束 |
| --- | --- | --- |
| 标准 | 业务 schema 提供基础与高级字段，按内容需要配置关键词或日期跨列；适用于普通查询列表 | 共享跨行轨道、16px 面板与字段间距、显式搜索、已应用计数 |
| 上下文 | 页面在筛选区之前组合当前机构等范围；机构树或“含子机构”由业务适配器决定是否出现与如何更新 | 不内置机构字段/权限，不把外部范围计入字段计数，重置不擅自切机构 |
| 紧凑 | 字段较少的查询列表，只展示业务实际需要的字段；无高级字段时不生成展开入口 | 不凑满两行、不缩小内边距和触控目标；保留底栏左计数、右重置/搜索 |

三种组合都不显示独立筛选标题行；本地化名称供辅助技术识别。具体业务字段、机构范围和权限仍由后端/OpenAPI 与已批准产品流程提供。

```tsx
const [draft, setDraft] = useState(defaultFilters);
const [expanded, setExpanded] = useState(false);
const table = useAWTableState({ initialQuery, contextKey });

const filters = (
  <AWTableFilters
    id="resource-filters"
    title={t('common.filters')}
    fields={resourceFilterSchema}
    draft={draft}
    applied={table.query.filters}
    defaultValues={defaultFilters}
    onDraftChange={setDraft}
    expanded={expanded}
    onExpandedChange={setExpanded}
    onSubmit={(values) => table.search(values)}
    submitting={resultPending}
    onReset={(values) => {
      if (!table.reset({ filters: values }).accepted) return;
      setDraft(values);
      setExpanded(false);
      // 本场景 reset 恢复 initialQuery 的 sort/pageSize 与 page=1，保留 contextKey。
    }}
  />
);

return <AWTableRegion filters={filters}>{resultView}</AWTableRegion>;
// 同一个 filters 也可独立渲染在其他结果区之前，无需创建 AWTable。
```

上述 `resourceFilterSchema` 是页面适配器，仅示范资源包的基础/高级结构；组件不以 key 名判断“机型”“状态”或“版本”。代码为待消费者实现的目标接口，静态文档站预览控制器不是 React 导出。

当前文档站通过独立 `project/demos/aw-table-filters.js` 控制器演示文本/选择/日期段、显式搜索、同步日期校验、计数、折叠保值与重置，并由 AWTable 示例组合使用。异步校验、自定义控件、远程选项、上下文恢复和六语言消费者接入属于上述目标契约，尚未在此静态控制器实现或验收。

## 行操作契约

### 数量、顺序与危险操作

用户进一步确认：每行最多显示 3 个操作入口，“更多”占用其中 1 个。AWTable 将数量策略明确为：

| 可见动作 | 空间足够时的结果 |
| --- | --- |
| 无动作 | 不生成空按钮或空菜单 |
| 1–3 项普通动作，且无其他菜单项 | 全部直接显示 |
| 4 项及以上普通动作 | 前 2 项直接显示，其余进入“更多”；共 3 个入口 |
| 存在危险项或其他需收纳项 | 最多 2 项直接显示＋“更多”；第 3 项普通动作也收入菜单 |
| 危险动作 | 默认放在菜单底部，与普通动作分组 |
| 只有危险动作 | 允许只有“更多”入口 |
| 经过登记的危险动作例外 | 按其例外呈现；仍执行同一确认和防重复机制 |

“普通动作数量”指经过权限与业务适用性过滤后全部可见的非危险动作数；禁用但仍有解释价值的动作保留并参与数量、宽度计算。普通动作不能通过“仅菜单”等配置跳过 1–3 项直接展示规则。“更多”与普通动作共用 3 个可见入口名额；危险动作、登记的直接展示例外、禁用动作均不得突破此上限。存在菜单时最多 2 项直接显示；菜单项数量不受此上限限制，“更多”入口的实际宽度仍参与空间判断。动作顺序由调用方稳定声明，最多一个主操作；主操作优先保留，其余按声明顺序收纳。

现有 `group-membership-removal` 是已登记的危险动作直接展示例外。新增例外需在源契约登记用途和适用范围，不能通过任意 `forceInline` 绕过规则。未经声明的破坏性操作不得伪装成普通动作。

### 文字与反馈

- 表格行内、更多菜单、表格工具栏和批量条的业务动作使用文字，不增加业务图标；动作定义不提供装饰性 `icon` 接口。
- 下拉箭头、排序指示、勾选框、展开标识、加载和状态反馈是必要交互标识，予以保留；不把本规则扩展为删除全站导航或返回图标。
- 动作文字单行、不省略、不压缩字体。相邻动作使用统一间距；是否采用分隔线由共享样式决定，页面不得混用自定义间距。
- 只有一个安全动作时直接显示。打开菜单本身不提交动作；菜单项点击、键盘激活走同一执行入口。
- 禁用动作提供可访问的原因，不能只依赖颜色或不可聚焦的 hover 提示。
- 需要确认的动作由共享确认入口执行一次，默认焦点在取消；菜单关闭与确认打开有连续焦点管理。调用方不能再叠加第二层同义确认。
- 执行中同一行同一动作不能重复触发。加载标识预留空间，避免列宽改变；需要互斥的其他动作由调用方返回禁用状态，不默认冻结全表。
- 成功、失败、部分成功由调用方返回业务结果并决定刷新/选择处理；共享层不推断“删除”“重试”等动作的领域效果。失败恢复可执行状态并保留必要上下文。

### 空间不足的折叠顺序

1. 先按数量和危险性形成候选组合。
2. 使用当前语言、字体和密度测量整组宽度；“更多”文字与箭头一起计入。
3. 空间不足时，从末尾收纳非主动作，允许 `3 项（无更多）→ 2 项＋更多 → 1 项＋更多`；原本 1–3 项的普通操作也适用。
4. 只剩主动作与“更多”仍放不下时，扩大动作列最低宽度，按冻结预算解除固定并保留表格局部横向滚动。不得继续裁切主动作、截断文字或覆盖相邻列。
5. 没有主动作时保留排序最前的普通动作；仅有危险动作时保留“更多”。语言切换、容器变化后的结果必须满足同一算法，不使用页面专有的硬编码断点。

## 列宽、密度与滚动

### 列描述和基准

每列都有稳定 `id`、语义类型、最小宽度、首选宽度、可选最大宽度、弹性权重与固定优先级。`id` 用于排序、声明式配置和查询恢复，不能使用翻译后的标题。页面不手写操作列、不重复拼装 `scroll.x`。

| 项目 | 源规范与 AWTable 处理 |
| --- | --- |
| 单元格横向留白 | 左右各 16px，宽度计算包含合计 32px |
| 标识/名称列 | 以现有 160px 作为常见起点，允许按字段内容和已批准界面设定 min/preferred/max |
| 状态列 | 以现有 96px 作为常见起点，必须容纳当前语言的完整状态表达 |
| 选择列 | 40px 作为起点，同时验证选择控件实际点击区域 |
| 时间、金额、数值 | 按显示格式与头部控件测量；普通数值和时间左对齐，金额右对齐，数字使用 tabular-nums |
| 长文本 | 可分配剩余空间，超出后按列配置省略并提供完整值访问；主操作不适用省略 |
| 操作列 | 根据最终行内组合测宽，不能把 140px/160px 等作为所有表格的固定值 |
| 行密度 | 沿用紧凑/默认/宽松 32/40/48px 单行基准；多行内容、控件和缩放允许增高，不以固定高度裁切 |
| 控件高度 | 沿用源密度契约中的 24/28/32/40px，不自动使用 AntD compactAlgorithm |

基准不是新字段规则，也不是强制所有表格采用相同列宽。排序/筛选指示、展开控件、选择控件都必须计入实际规划。

### 列规划算法

1. 解析当前语言、字体、密度及调用方声明的列配置，先应用经校验的列显隐，再收集必要头部、内容和操作测量；显示列入口位于表格外，不占表头列宽预算。等待字体就绪后再校正，避免首次弹跳。本阶段不提供拖拽列顺序或手动调宽控件。
2. `minWidth` 是可读性下限。为当前语言长标签扩展最小宽度，不为中文页面永久预留六语言中的最大值。六语言最长组合用于验收，不替代当前语言计算。
3. 按列的首选宽度分配，容器还有剩余空间时仅由声明为弹性的列按权重吸收。达到最大宽度后继续分配给其他弹性列；操作列不吸收无意义的剩余空间。
4. 总最小宽度超过容器时保持各列下限并启用局部横滚，不把列压到内容不可读。包含选择、展开和其他系统列的最终数值宽度之和形成 `scroll.x`。
5. 使用固定表格布局时由规划器输出已解析的数值宽度；不能假设仅向原生列传 `minWidth` 就一定约束固定布局。虚拟化需要数值型 `scroll.x` 与 `scroll.y`。
6. 列配置变化、语言/密度变化、字体加载和容器尺寸变化触发统一重算；内容刷新或行执行中状态不能无理由改变操作列宽。

### 操作列稳定宽度

```text
actionColumnWidth = 32px 单元格横向留白
                  + 外露文字按钮实际宽度之和
                  + 共享按钮间距/分隔线宽度
                  + 存在菜单时的“更多”入口实际宽度
```

调用方声明该表可能出现的有效动作组合（例如只读、可编辑、审核态），共享层在同一容器预算下对组合计算并取最大值。组合来源于页面的动作契约，不是扫描当前页数据；因此翻页、空页、权限不同的行不会使列宽跳动。未声明组合的动态动作不得悄悄溢出；开发环境报告遗漏，运行时保守扩宽并重新规划局部滚动。

共享测量以标签、字体、密度、语言和相关呈现配置作为缓存键；一个表格容器集中观察，不让每一行独立创建 ResizeObserver。测量与渲染分阶段更新，宽度变化应用稳定阈值以避免观察器循环；阈值是实现细节，不允许造成可见裁切。

### 固定列退让

固定列必须保留一块可阅读的非固定数据区域。预算为至少一个关键非固定数据列的最小可读宽度；不使用文档演示曾出现的 64px 作为通用规范。没有非固定列时，仍按关键数据列最小宽度评估冻结是否还有价值。

当 `左固定宽度 + 右固定宽度 + 最小数据阅读区 > 实际表格容器宽度`：先解除次要左固定列，再解除右侧操作列，最后解除身份列固定；每一步重算预算。主数据和操作始终存在，只改变固定状态。机构树、抽屉、内嵌区域会改变表格容器宽度，不能仅用 window 宽度判断。

宽屏/窄屏结构沿用源断点；固定列、动作收纳采用真实容器预算。任何情况下只允许表格区域横滚，不产生整个页面横向溢出。

## 查询、分页与请求契约

### 统一查询模型

```ts
type AWTableQuery<F> = {
  page: number;           // 从 1 开始
  pageSize: number;
  filters: F;             // 已应用条件，领域结构由调用方定义
  sort: Array<{ columnId: string; order: 'ascend' | 'descend' }>;
};

type AWTableQueryEvent = {
  reason: 'page' | 'pageSize' | 'sort' | 'filter' | 'reset' | 'restore' | 'correctPage';
  source: 'table' | 'filterBar' | 'pagination' | 'controller';
};
```

`onQueryChange(nextQuery, event)` 是有效查询状态变化的唯一出口；`search(values)` 是用户显式搜索意图的唯一入口。状态变化与重新加载分开定义：条件变化需要更新 query，同条件搜索不必更新 query，但必须发出一次重新加载意图。不能同时转发 AntD `Table.onChange` 和 `pagination.onChange` 再各自触发请求，也不能以 query 的 no-op 吞掉搜索。

控制器按两个互斥路径实现搜索：条件改变时更新 query（完整 filters＋page=1），保持 refreshVersion 不变；条件未变时保持 query 和当前页不变，只推进内部 refreshVersion。请求层订阅统一的查询键与刷新版本，每次受理的搜索仅调度一次读取。禁止先更新 query 再额外调用 refresh，造成同一次搜索双请求。采用显式请求协调器时也必须保持这一单次调度语义。

内部 `refresh()`/`retry()` 可用于同条件搜索、错误重试或业务操作成功后的重取；它们不是独立工具栏按钮。业务成功后重取保留已应用条件，不提交尚未搜索的草稿；用户主动搜索则必须先验证完整草稿。

- 默认每页 20，标准选项为 20/50/100/200。业务确需其他值时显式声明并在页面验收中记录，不从旧页面偶然值推导全局默认。
- 改变每页数量、已应用筛选或排序时，默认将页码与变化内容合并为一次第 1 页查询；相同条件搜索保留当前页并重新加载，恢复已保存状态使用经过校验的页码。
- 显式搜索模式下，输入和选择先更新草稿；搜索或回车一次性提交。即时模式下，每次有效改变一次提交；文本防抖配置只属于即时模式。
- 草稿由筛选适配层在页面本地持有，通过 AWTableFilters 的 draft/onDraftChange 控制；`useAWTableState` 只持有已应用查询，`search(nextFilters)` 是显式表单提交入口。切换 contextKey 或执行重置时，调用方按声明策略同步草稿。不要让表单草稿和查询 Hook 各保存一份可独立变化的“已应用条件”。
- 重置使用调用方提供的默认条件；机构是否重置是业务上下文策略，不能在通用层猜测。内部 refresh 和错误 retry 保留已应用条件，不顺带提交草稿；用户点击搜索始终读取并验证完整草稿，再决定变条件查询或同条件当前页重取。
- 排序默认升序 → 降序 → 未排序。远程模式必须使用服务端排序；仅完整加载的本地集合允许客户端排序/筛选/分页。多列排序是可选能力，后端不支持时不得显示伪多列状态。
- 删除当前末页最后一条后，可进行一次合法页码校正与补查。未知总数的游标接口使用显式游标适配，不伪造页数、总数或跳页能力。
- 内置分页单页时可隐藏无作用的页码导航，但按场景保留总数和每页数量选择；分页的空态不遮蔽表格错误。
- 分页将总数放左侧，页码、页大小与跳页控件放右侧；窄容器自然换行，保留可读文案和操作区域。表格与卡片模式使用相同呈现，不增加第二个事件所有者；不额外套白底卡片或新增装饰层。

### 请求与状态

`useAWTableRequest` 是可选能力；已有查询框架可传受控 rows/status/error，AWTable 本体不提供 request/load 接口，也不发起请求。一个实例只能选择外部查询框架或 `useAWTableRequest` 作为数据所有者，不得把两者同时订阅同一查询。可选 Hook 接受调用方的 `load(query, { signal, contextKey })`，将请求取消信号与上下文交给调用方；不直接知道后端 URL、鉴权或参数命名。

请求 Hook 还接收 `gate: AWRequestGate`，由领域适配器提供 ready / waiting / blocked。waiting 或 blocked 时不调用 load，分别返回同名 status 和本地化 statusMessage；gate 原样可读。独立表可显式使用 ready，机构范围未准备好或无授权范围不得默认 ready。gate 恢复 ready 时与当前 query/contextKey 合并调度一次，不额外手动 refresh。已有请求框架提供等价行为即可。

| 状态 | 展示与行为 |
| --- | --- |
| 依赖等待 / 阻断 | waiting 展示范围等依赖正在准备；blocked 展示具体原因。两者都不发列表请求、不展示成功空态；依赖重试由适配器负责 |
| 首次加载 | 表头结构稳定；展示与表格密度匹配的加载占位；无真实空态文案 |
| 已有结果的分页 / 搜索 / 刷新 | 保留结果布局，以表内 loading 和 aria-busy 表达读取；不在表格上方插入可见加载文字条。加载说明仅向辅助技术播报，不增加布局高度，不把旧结果宣称为新结果 |
| 查询或业务上下文变化 | 查询 pending 期间如保留旧结果，通过表内 loading、aria-busy 与辅助技术说明其归属，禁用旧结果写动作与选择；不新增可见状态行。contextKey 改变时立即清除旧上下文结果 |
| 首次请求失败 | 展示错误与一次重试入口；不伪装成“0 条” |
| 刷新失败 | 可保留旧结果，明确“刷新失败/显示上次结果”并可重试 |
| 初始无数据 | 展示本域空态，创建入口只在调用方授权时存在 |
| 筛选无结果 | 保留筛选条件并提供清除/重置入口 |
| 无权限 | 展示权限状态，不渲染受限数据或动作；安全导航由页面提供 |
| 行动作执行中 | 只标记相关动作/行的必要互斥状态，不默认阻塞整个表格 |

每次请求拥有递增序号和 contextKey；只有当前序号与上下文的响应可以提交 rows、total、error 和 loading 结束。取消不保证服务端停止执行，因此同样必须忽略过期成功、过期失败和过期 finally。组件卸载、上下文切换和新查询使旧读请求失效；写操作不可通过自动重试造成重复提交。

“一次事件”与“一次 HTTP 请求”分别验收：控制器对每次受理的有效搜索调度一次读取，其中变化条件才发 query change，相同条件只发内部重新加载意图。数据适配层保证单订阅执行，并在开发严格模式等重复挂载场景下取消/隔离旧读请求。不能仅凭回调次数或 React 批处理推断真实网络次数。

## 选择、展开与持久化

选择依赖稳定 rowKey。Snowflake 等业务 ID 保持字符串，不转换为 Number。选择数据与领域对象缓存分离，不能认为页面外已选对象仍拥有最新状态。

| 选择范围 | 约束 |
| --- | --- |
| 当前页 | 页码或查询上下文改变时清理离页选择，表头全选只影响当前可选行 |
| 同查询跨页 | 翻页保留，筛选/排序改变时按明确策略重置；显示“已选 N 项（跨页）” |
| 同业务上下文 | 用于明确批准的跨搜索挑选场景，调用方提供 contextKey 和保留策略 |
| 全部匹配结果 | 仅后端有查询快照/选择令牌支持时启用；不拉取全部数据假装实现全选 |

切租户、机构或业务对象导致 contextKey 变化时，清理不再适用的选择和关联操作状态。保留选择属于显式策略，不由 `preserveSelectedRowKeys` 单独决定。批量执行前由调用方重新核验权限和对象状态；部分成功后按返回结果移除成功项、保留可重试失败项，不能一律清空或一律保留。

展开行只在业务提供内容时启用，展开按钮与详情链接分开。不默认整行点击跳转，也不引入双击必需动作。展开数量上限由场景和性能约束声明，不全局强制最多 3 行；嵌套表格可关闭不需要的工具栏和分页。

查询恢复键包含应用、表格标识、schema 版本和必要的用户/租户范围。查询使用经过白名单筛选的 URL 或会话存储；选择默认只在当前控制器生命周期内保留，不保存后端全部匹配令牌。只持久化明确允许的轻量界面状态，不保存鉴权信息、整行业务数据、pending 或打开的弹窗。恢复需校验列 id、页码、排序能力与上下文；存储不可用或损坏时回退默认值，不能阻塞列表。列显隐偏好独立保存隐藏列 id，规则见“结果工具栏右侧的显示列”；不与业务查询或旧 OTA 缓存合并。

## 公共 API 内容

下面是目标 API 的字段契约；消费者实现时根据锁定的 React/AntD 版本补齐导出类型和编译测试。不得把以下示例描述为已经可导入的包。

| 字段 | 内容和约束 |
| --- | --- |
| `id` | 稳定表格标识，用于查询恢复、测量和测试 |
| `contextKey` | 调用方提供的租户/机构/对象上下文标识；不包含 Token |
| `rowKey` | 返回稳定 string key 的函数或已验证字符串字段 |
| `mode` | 必填 `remote` 或 `local`；local 的 rows 必须是完整集合 |
| `rows` / `total` | 受控数据；remote 的页码分页在成功结果中需要 total，首次加载/失败时允许尚无 total；local 由完整 rows 推导 |
| `columns` | 稳定 id、title、semantic、width 策略、render、排序能力、完整值访问等 |
| `columnSettings` | 可选 `{ schemaVersion: number; scopeKey: string }`；启用结果工具栏右侧的列显隐入口，版本与账号/租户范围由调用方声明；缺省不显示入口 |
| `query` / `onQueryChange` | 受控已应用查询与唯一变更出口；省略时只允许明确的非查询静态表 |
| `status` / `statusMessage` / `error` / `onRetry` | 外部或可选请求 Hook 提供的状态；waiting/blocked 必须有本地化 statusMessage，依赖重试由状态 slot 提供，不能用列表 retry 绕过 gate；错误不能折叠为空数据 |
| `actions` | 动作 definitions、有效 combinations、按行解析的可见/禁用状态、执行入口与必要确认内容 |
| `selection` | `scope`、受控 `value: AWSelectionValue`、`onChange(value, event)`、按行可选状态、保留/失效策略；关闭时无选择列 |
| `pagination` | `false`、`internal` 或 `external`；外置时 AWTable 不创建第二个分页出口 |
| `density` | 受控密度或继承应用密度；不是另起一套主题 |
| `layout` | 语义宽度覆盖、冻结优先级、滚动高度和虚拟化等能力开关 |
| `localFilter` | 仅 local 模式可用的 `(record, appliedFilters) => boolean`，在完整 rows 上执行 |
| `slots` | 可选 summary（结果工具栏左侧摘要）、toolbar（右侧业务动作/视图切换）、batchBar、empty、error、expandedRow 等受控扩展；显示列由 AWTable 在右侧 toolbar 内容之后统一生成，不能绕过动作契约 |
| `className/style/classNames/styles` | 根容器和 AntD Semantic DOM 样式透传，消费者实现核对锁定版本 |
| `aria-*` / `data-*` | 根区域透传；区域有本地化可访问名称 |

原生 Table 扩展通过受限 `tableProps` 适配。`columns/dataSource/rowKey/loading/pagination/rowSelection/onChange/scroll` 由 AWTable 持有，不能通过透传再次覆盖。其余能力按 AntD 锁定版本白名单开放；未知能力先补契约，避免无边界的 `any` 逃生口。

### 关键数据结构

```ts
type AWColumnWidth = {
  min?: number;
  preferred?: number;
  max?: number;
  flex?: number; // 默认 0；大于 0 时参与剩余空间分配
};

type AWTableColumnSettings = {
  schemaVersion: number;
  scopeKey: string; // 稳定用户/租户标识，不含凭据；与表格 id、版本共同隔离
};

// AWColumn 的可选字段；其他列字段沿用现有列契约。
// hideable?: boolean;
// identity 默认 false，其余业务列默认 true；首个 identity/无 identity 时首列始终保留。

type AWActionDefinition<T> = {
  id: string;
  label: string; // 已本地化纯文字，用于真实测宽与无障碍名称
  primary?: boolean;
  danger?: boolean;
  inlineException?: 'group-membership-removal';
  confirmation?: (record: T) => {
    title: string;
    description?: string;
    confirmLabel: string;
    cancelLabel: string;
  };
};

type AWActionAvailability = {
  id: string;
  visible: boolean;
  disabled?: boolean;
  disabledReason?: string;
};

type AWTableActionsConfig<T> = {
  definitions: readonly AWActionDefinition<T>[];
  combinations: readonly (readonly string[])[];
  resolve: (record: T) => readonly AWActionAvailability[];
  onExecute: (actionId: string, record: T) => void | Promise<void>;
};

type AWTableStatus =
  | 'idle' | 'waiting' | 'blocked' | 'initialLoading' | 'ready' | 'refreshing'
  | 'error' | 'refreshError' | 'forbidden';

type AWRequestGate =
  | { state: 'ready' }
  | { state: 'waiting'; message: string }
  | { state: 'blocked'; reason: 'scope-error' | 'no-scope' | 'forbidden'; message: string };

type AWKeySelection = {
  kind: 'keys';
  keys: readonly string[];
};

type AWMatchingSelection = {
  kind: 'matching';
  token: string; // 后端选择快照，不是客户端自己生成的“全选”标记
  queryFingerprint: string;
  excludedKeys: readonly string[];
};

type AWSelectionValue = AWKeySelection | AWMatchingSelection;
```

运行时与类型测试应拒绝重复动作 id、不存在的组合 id、多个主动作和无原因的禁用动作。危险动作必须提供一次确认内容；`inlineException` 仅能用于对应已登记的危险动作，只改变位置、不取消确认。`pending` 由执行管理器按行 key＋动作 id 持有，不由每行另建未协调的 loading。

`AWTableStatus` 与 rows/total 共同决定展示：`ready` 且 rows 为空时，再根据已应用筛选判断初始空态或无匹配；不是把所有空数组视为成功。未知 total 不展示为 0；有已确认旧结果的刷新阶段沿用明确标记的旧 total。`matching` 选择值只能在调用方同时提供后端适配器时启用，且不能与 key 列表计数混淆。

`selection.scope` 为 `page | query | context`；`selection.value` 使用上面的判别联合，而不是同时暴露互相竞争的 selectedKeys 和全选布尔值。`selection.onChange` 事件携带原因（行选择、当前页全选、清空、上下文失效），一次选择交互只发一次变更。全部匹配结果还需显式提供 `matchingAdapter`，由调用方负责创建/验证后端快照及计算匹配数量；没有适配器不得接受 `kind: 'matching'`。

动作组合按 definitions 的稳定顺序解析，最多一个主操作；隐藏动作不参加计划，禁用动作保留。组合描述的是所有可见动作 id（含危险项），不能只列行内项；规划器由此推导菜单是否出现及其宽度，不要求调用方另外提交 actionWidth。开发环境检查组合完整性，生产回退策略见“操作列稳定宽度”。

`useAWTableState` 至少返回 `query`、`onQueryChange`、`search`、`reset`、`requestCoordinator` 及内部使用的 `refresh`/`refreshVersion`；`search(values)` 具备本节规定的同条件当前页重取、变条件回首页、pending 防重复和单次请求调度语义。`useAWTableRequest` 至少返回 `rows`、`total`、`status`、`statusMessage`、`gate`、`error` 与 `retry`。Hook 导出类型必须与 AWTable 受控 props 一致，不能要求调用方重复转换同一份查询状态；内部刷新方法不生成独立 UI 入口。

两个可选 Hook 通过稳定的 `requestCoordinator` 共享同步准入/执行锁，由请求所有者登记 gate、消费查询意图并结束对应 requestId。它是控制器句柄，不是第二份响应式 query。search/reset/page/sort/retry 必须先原子受理再更新 query 或 refreshVersion，React 的 submitting 布尔只反映状态，不能充当唯一防重。协调器只调度一次读取，不能既订阅 query effect 又直接调用同一 load。完整接线、外部请求框架和生命周期见 [交互细则第 1 节](aw-table-interactions.md#1-组件边界与唯一所有者)。

`search` / `reset` 等命令同步返回 `{ accepted: boolean }`，只说明意图是否受理，不表示网络或业务成功。外层需要联动 draft/expanded/selection 时，先检查受理结果，再在同一次事务内更新；被 pending/gate 拒绝的重置不能只清草稿却保留旧 query。相同默认 query 的 reset 仍可被受理并清选择/草稿，只是不产生读取。

### React 用例：远程列表与外部请求

以下代码用于说明组件内容和接入职责，引用的是目标 API。`loadRows`、`resolveActions`、文案及业务类型由页面提供，不在 Design System 中定义领域接口。

```tsx
function ResourceList({ contextKey, requestGate, loadRows, resolveActions, executeAction }) {
  const defaultFilters = { keyword: '' };
  const [draft, setDraft] = useState(defaultFilters);
  const [expanded, setExpanded] = useState(false);
  const table = useAWTableState({
    initialQuery: { page: 1, pageSize: 20, filters: defaultFilters, sort: [] },
    contextKey,
  });
  const request = useAWTableRequest({
    coordinator: table.requestCoordinator,
    query: table.query,
    refreshVersion: table.refreshVersion,
    contextKey,
    gate: requestGate, // 页面从机构/身份准备状态计算，不把空范围当成全部。
    load: loadRows, // load(query, { signal, contextKey }) -> { rows, total }
  });

  return (
    <AWTableRegion
      filters={<AWTableFilters id="resources-filter" title={t('common.filters')}
        fields={filterSchema} draft={draft} applied={table.query.filters}
        defaultValues={defaultFilters} onDraftChange={setDraft}
        expanded={expanded} onExpandedChange={setExpanded}
        onSubmit={table.search}
        disabled={request.gate.state !== 'ready'}
        submitting={request.status === 'initialLoading' || request.status === 'refreshing'}
        onReset={(values) => {
          if (!table.reset({ filters: values }).accepted) return;
          setDraft(values); setExpanded(false);
        }} />}
    >
      <AWTable
        id="resources"
        contextKey={contextKey}
        rowKey={(row) => row.id}
        mode="remote"
        rows={request.rows}
        total={request.total}
        query={table.query}
        onQueryChange={table.onQueryChange}
        status={request.status}
        statusMessage={request.statusMessage}
        error={request.error}
        onRetry={request.retry}
        columns={[
          { id: 'name', title: t('resource.name'), semantic: 'identity',
            width: { min: 160, preferred: 220, flex: 1 },
            render: (row) => <DetailLink row={row} /> },
          { id: 'updatedAt', title: t('common.updatedAt'), semantic: 'dateTime',
            sortable: true, render: (row) => formatDateTime(row.updatedAt) },
        ]}
        actions={{
          definitions: [
            { id: 'view', label: t('common.view'), primary: true },
            { id: 'edit', label: t('common.edit') },
            { id: 'download', label: t('common.download') },
            { id: 'copy', label: t('common.copy') },
          ],
          combinations: [['view'], ['view', 'download'], ['view', 'edit', 'download', 'copy']],
          resolve: resolveActions, // [{ id, visible, disabled, disabledReason }]
          onExecute: executeAction,
        }}
        pagination="internal"
        aria-label={t('resource.list')}
      />
    </AWTableRegion>
  );
}
```

动作 combinations 必须覆盖调用方可能返回的有效组合；示例中“查看”作为主动作只是演示，不强制所有页面必须有查看。需要危险动作时 definitions 声明 `danger: true` 与确认内容，执行入口收到已完成一次确认的动作，不再次弹同义确认。

此示例中的协调器在 Hook 之间绑定同一请求锁；filters 的 submitting 是展示反馈。真实实现需按交互细则保证同帧双击、程序性提交和多个入口不能绕过锁。无需这两个 Hook 的页面可直接使用受控 AWTable 和自己的单一协调器，不必引入另一套请求调度。

### 其他接入方式

```tsx
// 已有数据查询框架：直接传受控结果，不使用 useAWTableRequest。
<AWTable id="records" mode="remote" rowKey={(row) => row.id}
  rows={result.rows} total={result.total} query={query}
  onQueryChange={setQueryFromEvent} status={status} columns={columns} />

// 详情中的完整小集合：显式 local，可关闭查询和外围能力。
<AWTable id="members-preview" mode="local" rowKey={(row) => row.id}
  rows={allMembers} columns={staticColumns} pagination={false} />

// 表格/卡片共享 table.query 和 request；分页只由外部控制器管理。
<AWTableRegion toolbar={viewSwitcher} pagination={sharedPagination}>
  {view === 'table'
    ? <AWTable {...sharedTableProps} pagination="external" />
    : <ResourceCards rows={request.rows} actions={sharedActions} />}
</AWTableRegion>
```

local 模式启用排序时列需提供 `localCompare(a, b)`，启用筛选时调用方需提供 `localFilter(record, appliedFilters)`；执行顺序为完整集合筛选 → 排序 → 分页。remote 模式禁止使用这两个本地转换入口，共享层不能按翻译后的文字猜测领域排序。无 query 的静态示例中 `staticColumns` 不声明排序，也不启用筛选或分页；一旦需要查询交互就必须传 query 与 onQueryChange。remote 与 local 的输入契约应以 TypeScript 判别联合实现，防止把服务端一页数据当成完整集合。

## 国际化、主题与无障碍

- 消费者统一走现有六语言资源与 ConfigProvider locale，按钮、空态、错误、区域名称、禁用原因和选择范围均需本地化。当前文档站仍是中英双语言，不复制六套页面。
- 颜色、字重、间距、背景、边框、焦点和悬浮跟随 `--aw-*` 与现有组件 token。Light/Dark 不使用暗色算法派生，也不在页面硬编码颜色。
- Table 保持原生表格语义；只对确需复合网格键盘导航的能力使用对应 ARIA 模式，不给普通 table 随意添加 grid 角色。
- 横滚区域有本地化名称并可键盘进入；有溢出时可使用键盘滚动，不引入无意义的额外 Tab 停靠点。
- 菜单触发器有可访问名称、展开状态和关联关系；支持 Enter/Space 打开、方向键选择、Escape 关闭并返回触发器。菜单挂载位置不能被表格 overflow 或固定列遮挡。
- 排序头宣布当前排序方向；表头复选框可表达半选态。动作、详情链接和选择彼此不触发。
- 省略内容提供键盘和触屏可访问的完整值，不依赖 hover。禁用原因使用可聚焦说明入口或相应 ARIA 关联。
- 刷新说明通过不占布局高度的屏幕阅读器 live region 宣布，已有结果加载时不插入可见文字提示条；结果数量同样克制播报，避免每个单元格重复播报。选择条出现、状态更新和菜单操作不抢走正在输入的焦点。
- 遵循 reduced-motion；不以动画表达唯一状态。200% 缩放下按钮和关键内容仍可操作。

## 验收矩阵与守护

| 维度 | 必须覆盖 |
| --- | --- |
| 动作 | 0/1/2/3/4/多项；只有危险项；危险＋普通；禁用；权限与状态不同的行；加载反馈 |
| 宽度 | 1–3 项不误折叠；4 项默认 2＋更多；3 普通＋危险项也为 2＋更多；逐级收纳；主操作＋更多无法容纳；语言切换；空页和翻页稳定宽度 |
| 列 | 声明式配置与最小可读宽度；固定列退让；选择/展开列计入 scroll.x；无整页横向溢出；显示列入口与视图切换同组且独立于表头，窄屏入口可达 |
| 列显隐 | 默认全列；必选列不可隐藏；草稿应用/取消/恢复默认；0 请求、页码/排序不变；身份/表格/版本隔离；坏缓存降级；新增列可见；忽略旧 OTA 缓存 |
| 主题与语言 | Light/Dark；zh_CN/en/es/pt/fr/ru；最长动作和表头；三档密度；200% 缩放 |
| 尺寸 | 390/480/576/768/1024/1280/1366/1440/1920px，同时验证机构树、抽屉与内嵌表的实际内容宽度 |
| 查询事件 | 翻页、pageSize、排序、重置最多发一次有效 query change；变条件搜索完整提交并回第 1 页；相同条件搜索保留当前页并重取；每次有效搜索恰好一次请求；pending 重搜防重复，结束后可重搜；校验失败不刷新旧条件；无独立刷新按钮；末页校正最多一次 |
| 筛选 | 基础/高级字段；draft 改变不动 applied 计数；更多展开不提交；收起字段保留且完整提交；0/false、多选及完整日期段计数；隐藏高级字段校验、IME 回车、异步验证过期、非空默认重置、机构保留、跨详情恢复 |
| 筛选布局 | 标准/上下文/紧凑三种组合；基础/高级行共享等宽列边界及跨列对齐；普通轨道默认 224–320px、最多 4 列，少量字段不拉满；两个分组的 span 占用共同规划列数，高级区展开不改变列宽；显式 minWidth 按跨度统一提高下限与上限，旧 flex 不改变比例；四边 16px、字段行列间距 16px；字段数量不强制；32px 桌面与粗指针/不超过 575px 容器的至少 44px 点击高度；窄区长标签、日期段与右侧操作完整可达 |
| 请求 | 慢响应乱序、旧失败/旧 finally、新上下文、取消、卸载、首次错误、刷新失败、重试 |
| 选择 | 当前页、同查询跨页、明确跨搜索策略；切机构/租户清理；不可选行；部分成功；后端不支持时不显示全部匹配全选 |
| 恢复 | 详情返回、URL/会话查询无效值、排序列失效、上下文不匹配、存储不可用 |
| 键盘 | Tab 顺序、菜单开启/关闭/返回焦点、排序、选择、全文访问、搜索与重试 |
| 多形态 | 简单内嵌表、普通分页、外置分页、表格/卡片切换、带机构树、展开行；虚拟化只在实际启用时专项验证 |

源规范检查、文档站示例检查、消费者合成验证和真实业务验收分别记录结果，不能互相替代。至少补充事件和布局行为测试，不能只靠源码字符串匹配证明交互正确。

完成迁移的页面应通过自动检查阻止重新出现重复操作列、独立分页转发和手算滚动总宽；确需例外须声明原因、边界和测试，不使用泛化忽略关闭整仓检查。

## 实施顺序

1. **源规范与可审查示例**：先更新文档、机器契约和源仓校验；明确静态示例已演示能力与消费者新增能力的差别。
2. **消费者基础组件**（按已批准范围）：实现 AWTable、AWTableFilters、动作与列规划、统一事件接口及可选控制器；先验证简单列表和远程分页，修复现有分页重复转发，并验证折叠高级字段仍完整提交。
3. **重点列表迁移**：OTA、资源包及推送任务列表，覆盖状态动作、宽度、表格/卡片与外置分页；随后迁移账户、角色和机构等长译文场景。
4. **复杂上下文迁移**：设备台账、分组成员、跨搜索选择、展开行、详情返回恢复；逐页验收后删除旧封装与重复 CSS。
5. **收口**：全页面清单对账、必要例外登记、文档与测试一致；没有性能证据不默认启用虚拟化、无限加载或第二套表格引擎。

应用安装任务与 OTA 包列表按已批准范围实施；其他页面迁移仍需明确任务范围。不把现有 AppTable 自动改名视为完成统一组件，不因规范同步自动提交、合并或部署。

## 结果工具栏右侧的显示列：仅显隐

`columnSettings` 为可选配置，启用后默认显示全部业务列。“显示列”使用 32×32px 浅底图标按钮，位于表格上方现有结果工具栏的右侧，与表格/卡片视图切换并排成组；没有视图切换时仍位于右侧。任一时刻只有一个入口，不在表头重复放置，不随列固定、显隐或表格横向滚动迁移。直接复用现有工具栏行，机构/总数等结果摘要仍在左侧；卡片视图隐藏仅作用于表格的显示列入口。

入口使用 ControlOutlined 调节图标，尺寸为 16px，与表格视图图标区分；按钮为 32×32px，静止背景/前景使用 `--aw-fill-1` / `--aw-text-2`，悬停使用 `--aw-fill-2` / `--aw-primary-text`，展开使用 `--aw-primary-bg` / `--aw-primary-text`。悬停或键盘聚焦时显示本地化“显示列” Tooltip，按钮同时具有相同的 aria-label；展开后隐藏 Tooltip，并通过 aria-expanded 表示状态。键盘焦点环保留，Escape 可关闭 Tooltip 且不移动按钮焦点。此入口是表格显示工具，业务操作的纯文字规则保持。点击、Enter 或 Space 只打开列设置；表头排序仍保持原有独立可访问操作目标。浮层不被滚动容器裁切，有清晰标题、可滚动复选框列表和底部操作；长名称完整可读。

`AWColumn.hideable?: boolean` 声明业务列是否允许隐藏。identity 默认必选，其他业务列默认可隐藏；显式 `hideable: false` 将列设为必选，`hideable: true` 可放开其他 identity 列。首个 identity（不存在时首个业务列）始终必选，不受覆盖影响。系统生成的操作列始终必选；必选项只显示列名与勾选的禁用复选框，不增加附注文案，不允许通过缓存隐藏。

- 打开时从当前已应用显隐复制草稿。勾选只改变草稿，不立即改变表格或发起查询。
- “应用”一次提交草稿并关闭；仅重算可见列和宽度，保留筛选、排序、页码、页大小与选择，不触发读取。已隐藏排序列也不自动取消排序。
- “取消”、Escape、点击外部均丢弃草稿；再次打开恢复当前已应用值。关闭后仅向仍有效的入口归还焦点，不能抢走用户主动移动的焦点。
- “恢复默认”只将草稿改为全列显示，仍需“应用”生效；随后取消不会改变现有列显隐。
- `contextKey`、表格 id、scopeKey 或版本改变时关闭浮层、丢弃草稿；机构选择可改变 contextKey，但不改变同一用户/租户/表格的列偏好。

偏好使用独立的 localStorage 命名空间，缓存键包含应用、用户/租户范围 `scopeKey`、表格 id 和 `schemaVersion`。payload 为 `{ schemaVersion, hiddenIds }`，只保存可隐藏业务列的稳定 id，不保存全量可见列、顺序、宽度、行数据、凭据或查询。恢复时校验 JSON 类型与版本，未知/重复/必选 id 被移除；新增列默认可见。非法 JSON、混合类型 hiddenIds 或版本不匹配时回退全列，存储不可用不阻塞当次呈现。不读取或迁移旧 OTA 专有列缓存。

拖拽列顺序、用户调整列宽及其持久化继续延后；列的声明式配置、自动宽度规划与固定列退让规则保持适用。

## 本地评审入口

- 文档站：打开 `project/index.html#/table`；已有表格章节现命名为 AWTable，不增加重复路由。
- 开发入口：`project/index.html#/table` 在发布页面内提供只读小表、标准远程列表、机构与批量组合三类目标 API 用例，以及属性、事件、插槽和规则导航。代码可复制；自动复制不可用时仍可手动选择。示例不包含虚构包导入，领域适配器由调用方实现。
- 交互预览：演示配置可切换普通动作数、危险项、容器宽度、密度与状态；复杂场景围绕同一个本地请求模拟器展示查询与已接受结果的区别。布局演示使用声明的列与动作组合，示例数值不升级为统一常量。搜索承担同条件重新加载；静态预览提供结果工具栏右侧的显示列入口及草稿/取消/应用/恢复默认交互；消费者还须独立验证账号/租户作用域、业务列与列宽规划，不以演示替代。全部是演示数据，不发起业务请求。
- 场景预设：普通交互、范围等待、权限阻断、机构请求乱序、刷新失败、选项失败、批量部分失败、批量未知结果核对、末页删除。每个场景给出操作步骤和预期请求次数；观察区显示请求归属、列表读取数和列宽。运行预设会重置本地演示草稿与选择，单纯切换下拉选项不会执行场景。
- 预览验证记录见 [本次决策](../decisions/specs/2026-10-21-aw-table.md#本次源仓验证记录)。预览覆盖主要呈现与交互边界；本文定义的 React 导出、可选请求 Hook、查询恢复适配器及全页面迁移仍需在用户确认后实现和验收。此前包含独立刷新与列设置的历史检查不替代当前修订的验证。
