# AngelWatch TMS AI 设计系统入口

本文件是未来 AI 编程、页面设计和组件实现的首读入口。目标是让 AI 不需要猜测项目约束，直接按当前设计系统范式开发。

## 先读顺序

> `CLAUDE.md` 与 `AGENTS.md` 是仓库操作规则权威（两者内容一致，分别供 Claude Code / Codex 等 agent 自动加载），其中已含指向本文件的 AI 入口段。本文件是设计意图首读入口，二者互补。

1. `AI_DESIGN_SYSTEM.md`：当前入口，说明权威顺序、页面范式和验收命令。
2. `CLAUDE.md` / `AGENTS.md`：仓库架构、静态 SPA 规则、禁用模式、运行校验、落地链接三体职责。
3. `docs/ai-coding-design-reference.md`：Figma 业务证据、模块字段、组件选择、实现提示。
4. `brand-spec.md`：品牌 token、字体、布局姿态和证据摘要（含证据 token → `--aw-*` 运行时映射）。
5. `docs/superpowers/audits/2026-07-08-figma-project-diff-conflicts.md`：Figma 与当前项目差异、冲突和处理决定。
6. `docs/superpowers/audits/2026-07-09-angelwatch-external-design-system-audit.md`：`design-system-angelwatch` 外部品牌包与当前项目的合并边界。

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
4. 线上旧 Vue 2 / Element UI 实现不能覆盖当前 React 19 + Vite 8 + AntD v6 约束。
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
| 国际化 | zh-CN / en-US / es-419 / pt-BR 四语言与 Intl.*Format 格式化 | `#/i18n`, `docs/ai-coding-design-reference.md` |

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
按 AngelWatch TMS 设计系统实现 [模块名] 页面。先读取 AI_DESIGN_SYSTEM.md、AGENTS.md 和 docs/ai-coding-design-reference.md。使用当前 project/pages 的页面范式和 project/styles 的 --aw-* token，不复制旧 Vue/Element 代码，不使用 Pro Components，不硬编码业务颜色。页面必须包含筛选、表格或卡片、详情或抽屉、状态、批量操作、空 / 加载 / 错误 / 部分成功状态，并通过静态 SPA 校验。
```

实现组件时的提示词：

```text
按 AngelWatch TMS 组件规范实现 [组件名]。API 支持 className / style / data-* / aria-* 透传，受控与非受控模式清晰，文案走 i18n，主题走 --aw-* token 和 ConfigProvider。状态表达必须同时使用颜色、文案和形状。破坏性操作默认焦点不得落在确认按钮。
```

## 提交前校验

在当前仓库运行：

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
- 新文案不得包含 Figma 的占位词、测试 ID、废案名或临时方案名。
