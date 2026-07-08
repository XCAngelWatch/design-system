# Figma Copy And Design Language Merge Design

## Goal

Merge Figma / OpenDesign language evidence into the current AngelWatch design-system site by rewriting visible copy across the static SPA. The work should make the design system read like a product-specific Android terminal management system, not a generic enterprise logistics or transportation dashboard.

This design covers the copy and language strategy only. Implementation will happen in a later plan.

## Product Positioning

Canonical positioning:

> Angel Watch TMS 是面向安卓设备的终端管理系统，支撑 Android 终端的设备管理、应用分发、OTA 升级、推送任务、数据监控、账户权限和系统配置。

Use this positioning as the semantic anchor for all page intros, module descriptions, examples, and mock data.

Replace inaccurate positioning such as:

- 面向运输与物流场景
- fleet management
- transportation platform
- logistics dashboard
- 企业级设备与应用分发管理平台, when it implies a broader non-terminal platform

Keep product capability terms that match the Figma modules:

- 安卓设备 / Android 终端
- 终端管理
- 设备管理
- 应用分发
- OTA 升级
- 推送任务
- 数据监控
- 账户与权限
- 增值服务
- 系统管理

## Source Evidence

Primary local evidence source:

- `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/figma/tree.json`
- `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/BRAND.md`
- `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/figma-design-system.html`

The current design-system repository remains the implementation target:

- `/Users/david/Documents/workspaces/xctech/tms25/code/design-system/project`

Local absolute paths are implementation-time evidence only. The published site must depend only on files under `project/`.

## Scope

Rewrite visible text across the design-system SPA:

- Sidebar labels in `project/pages/_router.js`
- Page titles and section headings
- Lead paragraphs and rule explanations
- Do / Don't guidance
- Table fields and mapping labels
- Button labels and operation names
- Status names and feedback messages
- Empty-state examples
- Mock data shown in tables, cards, drawers, modals, dashboards, and blueprint pages

Do not rename route ids, filenames, registration keys, or section ids. Links must remain stable.

Do not restore old TMS 1.0 content, state-machine pages, version timeline copy, or temporary Figma方案 pages.

## Language Style

Use Chinese business language first, with necessary English component names retained.

Examples:

- `表格 Table`
- `抽屉 Drawer`
- `应用市场蓝图 MarketPage`
- `数据中心蓝图 DeviceCenterPage`
- `空状态 Empty State`

Tone rules:

- Short, operational, and task-oriented.
- Use Android terminal management vocabulary instead of marketing slogans.
- Prefer concrete object + action: `推送 OTA 包`, `重置终端密码`, `查看推送设备详情`.
- Prefer result-oriented button copy: `保存设置`, `推送到设备`, `下载失败清单`.
- Avoid vague copy: `确定`, `执行`, `操作失败`, `系统异常` when a concrete action or cause is available.
- Avoid Figma placeholder text as final copy: `title`, `text`, `input`, `2rd-level-title`, `Button Text`.

## Figma Module Mapping

Use the Figma module language as the mapping layer for full-site copy rewriting.

### 登录页 / 首页

Use for:

- `login-page`
- `shell`
- `dash-page`
- related overview examples

Language themes:

- 登录、账号、密码、验证码、记住密码
- 语言切换、主题配置、欢迎回来
- 设备总数、激活设备、活跃设备、锁定设备、解锁设备
- 首页统计、趋势图、列表

Do not keep old footer or demo copy that implies a non-current product version.

### 应用市场

Use for:

- `market-page`
- `table`
- `data-cards`
- `upload`
- related feedback and copy examples

Language themes:

- 应用管理、广告管理、应用分类、版本管理
- 包名、版本号、下载数、设备型号、更新时间、操作人
- 审核、上架、下架、安装明细、版本升级
- 上传中、上传失败、上传成功

### OTA 升级管理

Use for:

- `ota-page`
- `feedback`
- `upload`
- `avatar-result`
- `status-matrix`

Language themes:

- 升级文件、更新推送、基线版本、适配机型、大小、最后操作时间
- 下载文件、查看详情、下线、删除、更新推送
- OTA 包、推送策略、强制推送、灰度推送

### 推送任务

Use for:

- `push-page`
- `feedback`
- `status-matrix`
- `charts`

Language themes:

- 批次号、推送时间、推送方式、指定设备编号
- 设备推送结果统计、成功、失败、总数
- 查看详情、查看推送设备详情
- 部分成功、重试失败项、下载失败清单

### 数据中心 / 设备管理

Use for:

- `device-center-page`
- `data-cards`
- `drawer`
- `status-matrix`
- `detail-page`
- `list-page`

Language themes:

- 设备管理、设备详情、设备分组、型号、参数模板、联机方案
- 设备型号、系统版本、联机时间、状态、机构、IMEI / IMSI / ICCID
- 远程控制、软件信息、设备日志、取回日志、清空日志
- 在线、离线、锁定、解锁、故障、维护中

### 设备地图

Use for future follow-up pages and current examples that mention location:

- 设备查询、定位查询、起点、终点、围栏管理、围栏警告
- Avoid logistics route language unless the feature is explicitly device location tracking.

### 账户信息

Use for:

- `user-mgmt-page`
- `whitelabel`
- `config-provider`
- permission and tenant examples

Language themes:

- 账号、机构、权限、配置权限、重置密码、组织树
- 角色、菜单权限、数据权限、操作权限

### 数据统计

Use for:

- `dash-page`
- `charts`
- `data-format`

Language themes:

- 激活设备、活跃设备、锁定设备、解锁设备
- 趋势图、列表、全部导出、详情
- Use dashboard language for monitoring Android terminal status, not fleet logistics metrics.

### 增值服务

Use for:

- future `service-page`
- existing feedback/table/action examples where relevant

Language themes:

- APN、WIFI、黑白名单、文件推送、恢复出厂、日志、锁定、解锁
- 推送到设备、从设备删除、从设备端取消保存

### 系统管理

Use for:

- `do-dont`
- `copywriting`
- `config-provider`
- admin examples

Language themes:

- 字典、菜单、操作日志、OSS、排序、时间日期、配置表单
- Keep this as admin configuration language, not user-facing marketing language.

## Target Pages

Priority pages for implementation:

- `project/pages/copywriting.js`
- `project/pages/do-dont.js`
- `project/pages/color.js`
- `project/pages/palette.js`
- `project/pages/feedback.js`
- `project/pages/empty-state.js`
- `project/pages/page-header.js`
- `project/pages/table.js`
- `project/pages/data-cards.js`
- `project/pages/drawer.js`
- `project/pages/shell.js`
- `project/pages/login-page.js`
- `project/pages/dash-page.js`
- `project/pages/market-page.js`
- `project/pages/device-center-page.js`
- `project/pages/ota-page.js`
- `project/pages/push-page.js`
- `project/pages/user-mgmt-page.js`
- `project/pages/_router.js`

Secondary sweep pages:

- All remaining `project/pages/*.js` fragments with visible text.

## Rewrite Rules

1. Keep all route ids, filenames, `window.__AW_PAGES__` keys, and hash links stable.
2. Keep component names when they are part of design-system vocabulary, but pair them with Chinese business labels where helpful.
3. Replace generic or logistics wording with Android terminal management wording.
4. Convert vague mock copy into module-specific copy backed by Figma terms.
5. Keep examples evergreen. Do not introduce version timeline badges or release-history phrasing.
6. Do not introduce `#0052CC` or hard-coded color guidance while rewriting text.
7. Do not copy placeholder Figma labels directly into final copy.
8. Do not add runtime dependencies, network assets, or build requirements.
9. If a Figma text is a designer note rather than product UI copy, translate it into a rule, not a user-facing string.
10. Preserve existing design-system structure and visual language unless text changes require a small layout adjustment.

## Validation

Implementation must pass:

- Page registration for every `project/pages/*.js` fragment except `_router.js`.
- Router-to-disk consistency.
- `project/index.html` HTML balance.
- Forbidden pattern check for removed state-machine and version timeline patterns.
- Search checks confirming inaccurate positioning is removed from `project/pages`:
  - `运输`
  - `物流`
  - `fleet`
  - `transportation`
  - `logistics`
- Search check confirming Figma placeholders are not introduced as final visible copy where inappropriate:
  - `2rd-level-title`
  - `Button Text`
  - standalone `title` / `text` / `input` in user-facing examples, except where a component spec intentionally discusses an input component.
- Search check confirming `#0052CC` is not reintroduced under `project/pages` or `project/styles`.

## Success Criteria

- The design system consistently describes Angel Watch TMS as an Android terminal management system.
- Sidebar labels, page headings, examples, and mock data use the same product language.
- Figma module language is represented across the existing design-system pages without importing old-system or temporary-page content.
- Component documentation remains useful as a design system, not only as a Figma screenshot catalog.
- Existing static SPA behavior remains unchanged under `file://`.
