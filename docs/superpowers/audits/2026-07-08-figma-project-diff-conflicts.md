# Figma 与当前设计系统差异 / 冲突清单

生成日期：2026-07-08

## 结论

本轮以本地 Figma / OpenDesign 证据作为业务覆盖、词汇和页面族来源，同时保留当前 design-system 的运行架构与工程约束：静态 SPA、`file://` 可用、Ant Design v6、`--aw-*` token、常青文档、无运行时 CDN。

Figma 当前有效业务证据覆盖 263 个新界面 / 新页面帧与 54 个状态帧。当前项目已经覆盖应用市场、OTA、推送任务、数据中心、设备地图、增值服务、账户运营、数据统计和系统管理的主干模式。本轮新增 `map-page`、`service-page`、`ops-page` 三张蓝图页，并继续深化 `i18n` 的国外版翻译证据、`charts` / `dash-page` 的统计详情模式，以及 `user-mgmt-page` 的账户权限细节。

## 证据源

| 来源 | 路径 | 用途 |
| --- | --- | --- |
| 本地 Figma 文件 | `/Users/david/Documents/workspaces/xctech/tms25/code/Angelwatch体验重构-设计执行 去除tms1.0内容.fig` | 业务模块、页面族、视觉语言的人工源 |
| OpenDesign tree | `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/figma/tree.json` | 统计 canvas、section、新界面帧、状态帧 |
| OpenDesign tokens | `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/figma/tokens.json` | 核对主色、背景、文字、边框和暗色主色 |
| Figma 文案清单 | `docs/superpowers/audits/2026-07-08-figma-language-inventory.md` | 模块词汇、字段名、状态名、排除样例 |
| 当前站点 | `project/pages/`, `project/styles/`, `project/pages/_router.js` | 实际可引用的设计系统页面和样式 |

## Figma 模块规模

| Figma canvas | Section | 新界面 / 新页面帧 | 状态帧 | 当前项目状态 |
| --- | ---: | ---: | ---: | --- |
| 登陆页 | 1 | 0 | 0 | 已有 `login-page`，需补 Figma 词汇细节 |
| 首页 | 0 | 0 | 0 | 已有 `dash-page`，需补最近访问 / 产品动态 / 活跃设备语言 |
| 应用市场 | 7 | 32 | 12 | 已有 `market-page` 主蓝图 |
| OTA升级管理 | 1 | 13 | 4 | 已有 `ota-page`，本轮补“推送固件包”术语 |
| 推送任务 | 1 | 10 | 3 | 已有 `push-page`，本轮补“设备推送结果统计” |
| 数据中心 | 8 | 72 | 13 | 已有 `device-center-page` 主蓝图，本轮补欠费设备 / 位置上报 |
| 设备地图 | 3 | 13 | 0 | 本轮新增 `map-page` 蓝图 |
| 账户信息 | 2 | 18 | 6 | `user-mgmt-page` + 本轮新增 `ops-page` 覆盖运营商 / 机构 / 角色 / 账号 |
| 数据统计 | 3 | 11 | 1 | `dash-page` / `charts` + 本轮新增 `ops-page` 覆盖统计详情入口 |
| 增值服务 | 9 | 74 | 9 | 本轮新增 `service-page` 蓝图 |
| 系统管理 | 5 | 15 | 6 | 本轮新增 `ops-page` 蓝图 |
| 国外版翻译 | 0 | 5 | 0 | 已在 `i18n` 补页面级对照证据和四语种回归口径 |

## 当前项目覆盖盘点

| 设计系统区域 | 已覆盖内容 | 缺口 |
| --- | --- | --- |
| 导览 / 案例 | `cases` 已有模块覆盖矩阵、来源转译边界和三张新增蓝图入口 | 后续保持矩阵与路由同步 |
| 基础 | `color`, `dark`, `i18n`, `responsive`, `layout` 已覆盖主系统规则 | 需把 Figma 的“轻盈、科技感、洁净、冷静、效率”转译到视觉原则，不做装饰化复刻 |
| 通用组件 | `table`, `feedback`, `drawer`, `upload`, `tree-comp`, `datepicker` 已有主规则 | 后续可继续补地图围栏绘制、推送记录详情的更细组件态 |
| 业务组件 | `status-matrix`, `data-cards`, `row-actions`, `charts` 已可承载设备、任务和图表；`charts` 已补统计详情闭环 | 后续可补服务任务卡和异常详情的更细状态 |
| 页面模板 | 已有 `market-page`, `device-center-page`, `ota-page`, `push-page`, `user-mgmt-page`, `map-page`, `service-page`, `ops-page`；`dash-page` 已补统计详情入口 | 后续可继续补真实路由到统计详情页的实现示例 |
| 规范 | `copywriting`, `do-dont`, `api`, `config-provider` 已有基础规则；本轮新增 AI 编程引用文档 | 后续将新规则同步进更多页面示例 |

## 术语命中与缺失

| 模块 | 当前项目已命中 | 当前项目缺失 |
| --- | --- | --- |
| 应用市场 | 应用管理、广告管理、应用分类、版本管理、安装明细、审核、上架、下架 | 无关键缺失 |
| OTA升级管理 | 升级文件、基线版本、适配机型、更新推送、配置文件、推送固件包 | 无关键缺失 |
| 推送任务 | 批次号、推送方式、指定设备编号、推送设备详情、设备推送结果统计 | 无关键缺失 |
| 数据中心 | 设备管理、设备分组、型号管理、参数管理、联机方案、远程控制、欠费设备、位置上报 | 无关键缺失 |
| 设备地图 | 设备地图、围栏、起点、终点、开始时间、结束时间 | 无关键缺失 |
| 账户信息 | 机构管理、角色管理、账号管理、运营商管理、配置权限、重置密码 | 无关键缺失 |
| 数据统计 | 数据统计、设备活跃数据、近7日、活跃设备 | 无关键缺失 |
| 增值服务 | 增值服务、APN、WIFI、黑白名单、恢复出厂、文件推送、锁定、解锁 | 无关键缺失 |
| 系统管理 | 系统管理、操作日志、菜单、字典、OSS、系统配置 | 无关键缺失 |

## 冲突清单与处理决定

| 优先级 | 冲突 | Figma 证据 | 当前项目状态 | 处理决定 |
| --- | --- | --- | --- | --- |
| P0 | 业务覆盖不足 | 增值服务 74 个新界面帧、9 个状态帧 | 本轮前仅在文案和状态矩阵中提到 | 已新增 `service-page`，覆盖日志、锁定解锁、数据流量、重置密码、恢复出厂、文件推送、APN、WIFI、黑白名单 |
| P0 | 设备地图缺蓝图 | 设备地图 13 个新界面帧 | 本轮前仅在 shell/menu/tech-stack 中提到 | 已新增 `map-page`，覆盖设备查询、定位查询、轨迹查询、围栏管理、围栏警告 |
| P0 | 系统 / 运营缺蓝图 | 系统管理 15 个新界面帧、账户信息 18 个新界面帧、数据统计 11 个新页面帧 | 本轮前 `user-mgmt-page` 只覆盖账户权限一部分 | 已新增 `ops-page`，合并机构、运营商、账号、角色、OSS、操作日志、字典、菜单、统计详情 |
| P1 | Figma 页面名是产品导航，当前站点导航是设计系统导航 | Figma 反复出现“主页、应用市场、OTA升级管理、推送任务、数据中心、账户信息、设备地图、数据统计、增值服务、系统管理” | 当前 `_router.js` 是设计系统分组：导览 / 基础 / 通用组件 / 业务组件 / 页面模板 / 生态 / 规范 | 不替换设计系统导航。产品导航进入 `shell`、模块蓝图和 AI 参考文档 |
| P1 | “登陆页”与“登录页”用字不同 | Figma canvas 名为“登陆页”，可见文案有“记住登陆状态” | 当前项目多用“登录页” | 面向产品文案统一用“登录”。审计中保留 Figma 原名以便追溯 |
| P1 | “参数模版”与“参数模板”不一致 | Figma 数据中心含“参数模版” | 当前项目使用“参数模板” | 规范统一用“参数模板”；把“参数模版”记录为 Figma 别名，不进入最终 UI |
| P1 | Figma 有玻璃、金属、发光信号，当前系统是企业后台 | Figma 语言信号含“白色半透玻璃、蓝色渐变玻璃、高反射银色金属点缀、蓝色发光” | 当前系统强调白底、细边框、信息密度和克制主色 | 转译为轻量状态高亮、图表强调和登录页少量氛围，不扩散为大面积渐变或装饰 |
| P1 | Figma 有 `❌ 废案` frame | 应用市场 section 下存在 `❌ 废案` | 当前规范禁止恢复废案 | 即使以 Figma 为准，也排除明确标记的废案和临时方案 |
| P1 | Figma 出现 mock 文件名、测试 ID、样例指标 | 文案清单明确排除 `*.apk`, `*.jpg`, `FAE_OMNI_CONTROL`, `OTPL_ITS_*`, demo metric row | 当前项目中部分示例仍使用 mock SN / 版本号 | 示例数据可保留为业务 mock；不得把测试 ID 当作规范词汇 |
| P2 | “OTA升级管理”是否保留无空格 | Figma 导航无空格 | 当前页面多写“OTA 升级” | 产品导航可写“OTA升级管理”；设计系统标题和说明可用“OTA 升级”提升可读性 |
| P2 | “WIFI”与“Wi-Fi” | Figma 使用“WIFI设置” | 当前文案用“WIFI” | 按 Figma 业务词保留“WIFI”，i18n 英文再处理为 Wi-Fi |
| P2 | 国外版翻译有 5 个新界面帧 | Figma canvas “国外版翻译”包含轨迹查询、围栏绘制、应用管理、设备管理、设备详情和侧边栏对照 | 当前已有 `i18n` 基础规范 | 已在 `i18n` 和 AI 参考文档中说明跨语言重点页面、导航词、状态词和四语种回归口径 |

## 本轮已完成

1. 新增 `docs/ai-coding-design-reference.md`，作为未来 AI 编程的入口说明。
2. 新增 `map-page`、`service-page`、`ops-page` 三张页面模板，并在 `_router.js` 注册。
3. 更新 `cases`：把原 follow-up 模块改为实际蓝图入口。
4. 更新 `copywriting`：补充 Figma 冲突词的规范化映射，例如 登陆→登录、参数模版→参数模板。
5. 更新 `do-dont`：补充“Figma-first 但不逐帧照抄”的冲突处理顺序。
6. 更新 `i18n`：补国外版翻译页面级证据，覆盖轨迹查询、围栏绘制、应用管理、设备管理、设备详情和国外版侧边栏。
7. 更新 `charts` / `dash-page`：补活跃设备、激活设备、固件统计的统计详情闭环。
8. 更新 `user-mgmt-page`：补机构、运营商、账号、角色和配置权限的字段矩阵与页面状态。
9. 更新 `docs/ai-coding-design-reference.md`：把本轮深化规则转成未来 AI 编程可直接引用的 Markdown。

## 后续深化建议

1. 若进入代码实现阶段，可在 React 应用中把统计详情拆成独立路由：活跃设备详情、激活设备详情、固件统计详情。
2. 可继续为 `user-mgmt-page` 增加真实权限树交互原型，例如半选态、冲突提示、保存前 diff。
3. 可为国外版翻译建立截图回归清单，覆盖 Figma 已出现的 6 类对照页面。

## 验收规则

- `project/pages` 与 `_router.js` 路由一致。
- `project/pages/*.js` 能在 Node 下全部注册到 `window.__AW_PAGES__`。
- `project/` 不出现版本徽章、状态机图、旧 TMS 1.0 回归内容。
- `project/pages` 和 `project/styles` 不重新引入 `#0052CC` 作为主色。
- Figma 占位词不进入最终页面可见文案。
- 新增蓝图页必须链接到已有组件页，而不是复制一套独立规则。
