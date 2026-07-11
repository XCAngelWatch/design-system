# AngelWatch TMS AI 设计系统入口

本文件是未来 AI 编程、页面设计和组件实现的首读入口。目标是让 AI 不需要猜测项目约束，直接按当前设计系统范式开发。

## 先读顺序

> `CLAUDE.md` 与 `AGENTS.md` 是仓库操作规则权威，分别供 Claude Code / Codex 等 agent 自动加载；本文件是设计意图首读入口，三者互补。

1. `AI_DESIGN_SYSTEM.md`：当前入口，说明权威顺序、页面范式和验收命令。
2. `CLAUDE.md` / `AGENTS.md`：仓库架构、静态 SPA 规则、禁用模式、运行校验、落地链接三体职责。
3. `docs/ai-coding-design-reference.md`：业务字段、状态机、枚举、operationType 词汇、领域字典与组件选择的权威锚点(详见下方"业务知识锚点")。
4. `docs/evidence/angelwatch-business-capabilities.json`：机器可读的字段、状态、动作、权限、确认、反馈和路由契约。
5. `docs/evidence/figma-frame-manifest.json`：Figma canvas 覆盖、路由映射和 adopt / adapt / exclude / pending 结论。
6. `brand-spec.md`：品牌 token、字体、布局姿态和证据摘要（含证据 token → `--aw-*` 运行时映射）。
7. `docs/decisions/audits/2026-07-11-figma-legacy-gap-audit.md`：Figma 与旧系统的业务缺口、可借鉴流程和 TMS 1.0 隔离决定。

网页入口：

- `project/index.html#/ai-reference`：AI 开发入口页。
- `project/index.html#/overview`：设计系统概览。
- `project/index.html#/cases`：Figma / OpenDesign 证据到页面蓝图的映射。
- `project/index.html#/color`、`#/dark`、`#/i18n`：视觉 token、暗色主题、多语言规则。
- `project/index.html#/table`、`#/drawer`、`#/feedback`、`#/tree-comp`：高频组件范式。
- `project/index.html#/dash-page`、`#/charts`、`#/user-mgmt-page`、`#/map-page`、`#/service-page`、`#/ops-page`：业务页面范式。

## 权威顺序

1. 当前仓库规则最高：`project/pages/`、`project/styles/`、`--aw-*` token、Ant Design v6、静态 SPA、`file://` 可用。
2. 本地 Figma / OpenDesign 是业务证据来源：模块、字段、页面族、状态和操作流以它为准。
3. `design-system-angelwatch` 是旧站抽取出的品牌包和界面 kit，只用于补充 token、尺寸、密度和页面姿态。
4. 线上旧 Vue 2 / Element UI 实现不能覆盖业务仓库当前的 React + AntD v6 约束。
5. Figma 中明确标记为旧系统、废案、临时方案、占位图层、测试数据的内容不得进入最终规范。

## 当前产品定位

AngelWatch TMS 是面向 Android 终端管理的后台系统。核心场景是设备全生命周期管理、安全可控的应用 / 固件 / 策略分发，以及数据驱动的运营监控。

界面气质：专业、可信赖、清晰、高效、现代。不要做营销化大卡片、装饰插画或低密度展示页。

## 页面开发范式

| 场景 | 首选页面 | 必看参考 |
| --- | --- | --- |
| 数据列表 | 筛选栏 + 表格 + 批量条 + 分页 | `project/index.html#/list-page`, `#/table`, `#/row-actions` |
| 设备 / 应用详情 | 详情页或抽屉，保留列表上下文 | `#/detail-page`, `#/drawer`, `#/data-cards` |
| 统计分析 | 概览卡 + 图表 + 详情表 + 导出 | `#/dash-page`, `#/charts`, `#/ops-page` |
| 账户权限 | 树结构、角色、账号、权限矩阵、半选态 | `#/user-mgmt-page`, `#/tree-comp`, `#/cascader` |
| 推送 / OTA / 增值服务 | 任务列表 + 结果统计 + 失败明细 + 重试 | `#/push-page`, `#/ota-page`, `#/service-page`, `#/avatar-result` |
| 地图 / 围栏 / 轨迹 | 地图主视图 + 条件查询 + 结果面板 | `#/map-page`, `#/datepicker`, `#/tech-stack` |
| 国际化 | 静态站 zh-CN / en-US 双语言、一套页面结构、Intl.*Format 与 React/AntD 落地约束 | `#/i18n`, `docs/ai-coding-design-reference.md` |

## 国际化边界

当前静态文档站支持 `zh-CN` / `en-US`，并且只维护一套 `project/pages/<id>.js` 页面结构。中文 HTML 是默认 fallback；英文通过 `project/i18n/en-US/<id>.js` route catalog 覆盖。新增页面或文案时必须：

- 为普通可见文本使用 leaf-only `data-i18n="<route>:<key>"`，不得把 `data-i18n` 放在含子元素的容器上。
- 为 `placeholder` / `title` / `aria-label` / `alt` / `value` 使用对应 `data-i18n-*` 属性。
- 同步维护 `project/i18n/en-US/<route>.js`，namespace 与 route id 一致。
- 运行 `node scripts/check-i18n.js --routes=<route>`；完成前运行 `node scripts/check-i18n.js`。
- 业务 React / AntD 应用按同一术语契约落地到 `ConfigProvider locale` + i18next / react-i18next，可扩展更多 locale，但不得复制第二套页面。

## 业务知识锚点(字段 / 状态机 / 枚举权威)

实现业务页面前,先到 `docs/ai-coding-design-reference.md` 的"模块字段锚点"段 + 对应 `project/pages/*.js` mock 查权威字段与状态,不要自己臆造。

| 模块 | 权威内容 | 文件 |
| --- | --- | --- |
| 设备 / 数据中心 | 设备列表列、详情 35 字段、详情 Tab、设备状态三字段(onlineFlag/state/registeredFlag)、远程控制快捷指令、参数模板字段 | `docs/ai-coding-design-reference.md` 数据中心段 + `pages/device-center-page.js` |
| 应用市场 | 应用列表列(版本总数/下载总数)、版本包状态(含签名子态)、添加应用四段表单、自动安装/更新、应用分类排序 | `docs/ai-coding-design-reference.md` 应用市场段 + `pages/market-page.js` |
| OTA | OTA 文件生命周期(草稿/审核中/已上架/已拒绝/驳回/已下架/定期上架)、推送弹窗三段(code/force/dataHint/delayPush)、targetValue 校验 | `docs/ai-coding-design-reference.md` OTA 段 + `pages/ota-page.js` |
| 推送任务 | 批次状态(执行中/成功/部分成功/失败)、设备级状态(追加已过期/已终止)、六态统计+比例环、批量重试/终止权限 | `docs/ai-coding-design-reference.md` 推送段 + `pages/push-page.js` + `pages/status-matrix.js` |
| 增值服务 | 27+ operationType 词汇表、扫码授权 8 态子状态机 | `docs/ai-coding-design-reference.md` 增值服务段 + `pages/service-page.js` |
| 设备地图 | 围栏 shape/eventType/deviceCount、circle/polygon 数据结构、门店管理 | `docs/ai-coding-design-reference.md` 设备地图段 + `pages/map-page.js` |
| 账户 / 权限 | 账号字段(含时区 timeZone + MFA mfaSecretKey + 自动生成密码)、角色数据权限 dsType、账号状态 code('0'/'9') | `docs/ai-coding-design-reference.md` 系统段 + `pages/user-mgmt-page.js` |
| 系统 / 运营 | 操作日志列(类型/机构/操作人/标题/IP/时间)、机构可选扩展字段 | `docs/ai-coding-design-reference.md` 系统段 + `pages/ops-page.js` |
| 远程会话 | 等待设备/连接/进行/拒绝/超时/中断/结束、操作者、会话日志和安全边界 | `docs/evidence/angelwatch-business-capabilities.json` + `pages/device-center-page.js` + `pages/progress.js` |
| 分配与告警 | 设备/机构/权限分配冲突、覆盖权限、围栏/硬件告警处置和审计链 | `docs/evidence/angelwatch-business-capabilities.json` + `pages/tree-list.js` + `pages/ops-page.js` |
| 状态枚举四语 | 推送/告警/电池健康/监控触发时机枚举的 zh/en/es/pt | `pages/copywriting.js` 术语锁定补充 + 状态枚举四语 |
| 领域字典 | 时区(UTC±HH:MM 113 项)/错误码(code→message+default)/国家(ISO-3166) | `pages/data-format.js` 领域字典源 |
| 术语锁定 | Geofence / Published / Unpublished / Original Version / Build Number 等四语锁定 | `pages/copywriting.js` |
| 布局姿态 | spacing scale(4px base)、shell 尺寸、表头底色、tab strip 克制 | `brand-spec.md` Spacing & shell |

## 外部参考合并边界

> 以下 `/Users/david/...`、`.fig`、OpenDesign app 数据目录路径是**本机本地源**,不在本仓库内,线上 / 其他机器 / 仅拿到 GitHub 链接的 AI **无法访问**。这些源的可合并结论已提炼并内联到本文件、`docs/ai-coding-design-reference.md` 与 `pages/*.js` 范式中;AI 落地时直接读这些内联结论即可,不需要访问本地源。`brand-spec.md` 同样含本地源路径,其 `--aw-*` 运行时映射已在该文件给出。

`/Users/david/Documents/workspaces/xctech/tms25/code/design-system-angelwatch` 里可使用的内容：

- `customertest-brand/DESIGN.md`：颜色、字体、4px 网格、32px 控件、60px 顶栏、67px / 220px 侧栏、表格和表单密度。
- `customertest-brand/system/theme.json`：旧站抽取的 Ant Design token 草案，映射到当前 `--aw-*` 和 AntD v6。
- `customertest-brand/colors_and_type.css`：旧站变量命名和视觉姿态，只作为对照，不直接复制到当前项目。
- `customertest-brand/ui_kits/app/README.md`：固定侧栏、顶部工具栏、筛选栏、表格、分页的应用范式。

不要使用的内容：

- 不复制旧 Vue 2 / Element UI 代码。
- 不恢复 Figma 中排除的旧系统、废案和临时方案。
- 不使用 `design-system-angelwatch` 的营销页面、海报、邮件等生成物作为 TMS 后台实现依据。
- 不新增运行时 CDN、构建步骤或 HTTP server 依赖。

## 实现新页面时的提示词

```text
按 AngelWatch TMS 设计系统实现 [模块名] 页面。先读取 AI_DESIGN_SYSTEM.md、AGENTS.md、docs/ai-coding-design-reference.md 和 docs/evidence/angelwatch-business-capabilities.json。使用当前 project/pages 的页面范式和 project/styles 的 --aw-* token，不复制旧 Vue/Element 代码，不使用 Pro Components，不硬编码业务颜色。页面必须包含筛选、表格或卡片、详情或抽屉、状态、批量操作、空 / 加载 / 错误 / 部分成功状态，并通过静态 SPA 校验。
```

实现组件时的提示词：

```text
按 AngelWatch TMS 组件规范实现 [组件名]。API 支持 className / style / data-* / aria-* 透传，受控与非受控模式清晰，文案走 i18n，主题走 --aw-* token 和 ConfigProvider。状态表达必须同时使用颜色、文案和形状。破坏性操作默认焦点不得落在确认按钮。
```

## 提交前校验

在当前仓库运行：

```bash
node scripts/check-i18n.js
node scripts/i18n-runtime.test.js
node scripts/i18n-contract.test.js
node scripts/check-consistency.js
node scripts/check-evidence.js
```

```bash
node -e "
global.window = {};
const fs = require('fs');
const files = fs.readdirSync('project/pages').filter(f => f.endsWith('.js') && f !== '_router.js');
let ok = 0;
for (const f of files) {
  delete require.cache[require.resolve('./project/pages/' + f)];
  require('./project/pages/' + f);
  if (window.__AW_PAGES__[f.slice(0,-3)]) ok++;
}
console.log(ok + ' / ' + files.length + ' pages registered ✓');
"
```

```bash
python3 -c "
import re, glob
js = open('project/pages/_router.js').read()
m = re.search(r'var ROUTES = \\[([\\s\\S]*?)\\];', js)
ids_in_js = set(re.findall(r\"\\['([^']+)',\", m.group(1)))
files = {p.split('/')[-1].rsplit('.',1)[0] for p in glob.glob('project/pages/*.js') if not p.endswith('_router.js')}
print('only in router:', ids_in_js - files)
print('only on disk:  ', files - ids_in_js)
print('match ✓' if ids_in_js == files else 'MISMATCH ✗')
"
```

再确认：

- `project/` 不出现版本徽章、状态机图、旧 TMS 1.0 回归内容。
- `project/pages` 与 `project/styles` 不重新引入旧主色作为主色依据。
- 新页面只链接到已有组件 / 页面范式，不复制一套独立规则。
- 新业务能力必须在 `angelwatch-business-capabilities.json` 中有字段、状态、动作、权限、确认、反馈和路由契约。
- `pending` / `exclude` 的旧系统候选不得进入核心页面或产品导航。
- 新页面文案必须同步 `data-i18n` 与 `project/i18n/en-US/<id>.js`，并通过 `check-i18n`。
- 新文案不得包含 Figma 的占位词、测试 ID、废案名或临时方案名。
