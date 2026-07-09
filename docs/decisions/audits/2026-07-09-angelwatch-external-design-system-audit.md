# design-system-angelwatch 外部参考审计

生成日期：2026-07-09

## 结论

`/Users/david/Documents/workspaces/xctech/tms25/code/design-system-angelwatch` 是 customertest / AngelWatch 旧站抽取出的品牌包、token 包和应用 kit。它对当前 design-system 的价值是补充“真实旧站视觉姿态”和“品牌抽取证据”，不是替代当前项目。

本轮处理决定：

1. 当前仓库继续作为最高权威：静态 SPA、`file://` 可用、AntD v6、React 19 目标、`--aw-*` token、无运行时 CDN。
2. 本地 Figma / OpenDesign 继续作为业务字段、页面族、状态和国外版翻译的主要证据。
3. `design-system-angelwatch` 只合并 token 对照、布局尺寸、信息密度和中后台页面姿态。
4. 旧 Vue 2 / Element UI 代码、营销生成物、被排除的旧 Figma 页面不迁入当前项目。

## 外部目录结构摘要

| 外部路径 | 内容 | 当前处理 |
| --- | --- | --- |
| `index.html` | 单页品牌资料站，包含结构、代码位置、颜色、字体等说明 | 作为“AI 可浏览文档站”形态参考，不复制内容结构 |
| `colors_and_type.css` | 旧站抽取的 CSS 变量和工具类 | 对照 token 命名与 Light / Dark，当前仍使用 `--aw-*` |
| `customertest-brand/README.md` | 品牌包使用说明、来源、排除 Figma 页面列表 | 合并到 AI 参考文档的权威顺序和排除边界 |
| `customertest-brand/DESIGN.md` | 色彩、字体、布局、组件尺寸、表格表单密度 | 作为可合并核心证据 |
| `customertest-brand/BRAND.md` | 品牌语气、视觉、技术来源 | 与 `brand-spec.md` 对齐，避免重复发散 |
| `customertest-brand/system/theme.json` | Ant Design token 草案 | 仅作为 token 对照，不覆盖当前 tokens.css |
| `customertest-brand/system/kit.html` | Light 主题组件展示 | 作为组件姿态参考，不引入运行时资源 |
| `customertest-brand/system/kit.dark.html` | Dark 主题组件展示 | 对照暗色主题，不覆盖当前暗色规则 |
| `customertest-brand/ui_kits/app` | 应用界面 kit：侧栏、顶栏、筛选、表格、分页 | 合并为页面范式描述 |
| `customertest-brand/system/artifacts/*` | landing、deck、poster、email、newsletter、form | 不作为 TMS 后台页面依据 |

## 可合并规则

| 规则 | 外部证据 | 当前落点 |
| --- | --- | --- |
| 页面背景使用浅灰，面板白底 | `DESIGN.md`, `colors_and_type.css` | `project/styles/tokens.css`, `brand-spec.md` |
| 主文字、次级文字、弱提示形成四级灰阶 | `DESIGN.md` | `color`, `type`, `copywriting` 页面 |
| 主色用于按钮、链接、选中态和信息提示，不大面积铺底 | `README.md`, `DESIGN.md` | `color`, `do-dont`, `AI_DESIGN_SYSTEM.md` |
| 4px 网格、4px 到 8px 圆角、1px 边框 | `DESIGN.md`, `theme.json` | `radius`, `layout`, `components.css` |
| 顶栏 60px、侧栏 67px 折叠 / 220px 展开 | `DESIGN.md`, `ui_kits/app` | `shell`, `layout`, `ai-reference` |
| 默认控件高度 32px，紧凑 28px，大尺寸 40px | `DESIGN.md`, `theme.json` | `buttons`, `inputs`, `table` |
| 表格为主的数据展示，配筛选栏、分页、批量操作 | `DESIGN.md`, `ui_kits/app` | `table`, `list-page`, `dash-page` |
| 表单字段按业务宽度与分组组织 | `DESIGN.md` | `form-page`, `advanced-form`, `user-mgmt-page` |
| Light / Dark 双主题是基础能力 | `DESIGN.md`, `variables.dark.css` | `dark`, `config-provider` |

## 冲突与处理

| 冲突 | 外部参考 | 当前项目 | 处理决定 |
| --- | --- | --- | --- |
| 技术栈不同 | 旧站是 Vue 2 + Element UI | 当前目标是 React 19 + AntD v6 | 只迁移视觉规则和业务范式，不迁移代码 |
| token 命名不同 | 外部使用 `--brand-*` 和旧变量 | 当前使用 `--aw-*` | 只做语义映射，当前变量体系不改名 |
| 主色来源不同 | 外部品牌包主色来自旧站抽取 | 当前站点还有 Figma 与 AntD v6 映射 | 当前主色仍以现有 token 和品牌规范为准 |
| 生成物类型过宽 | 外部包含 landing / deck / poster / email | 当前是 TMS 设计系统知识库 | 不把营销生成物作为后台页面范式 |
| 排除页面边界 | README 明确排除旧系统、废弃、临时页面 | Figma 仍可看到部分旧页面名称 | 继续排除，审计保留来源说明 |

## 本轮落地

1. 新增 `AI_DESIGN_SYSTEM.md`，作为 AI 可直接读取的 Markdown 总入口。
2. 新增 `project/pages/ai-reference.js`，作为网页端 AI 开发入口。
3. 在 `_router.js` 注册 `AI 开发入口` 到“规范”分组。
4. 更新 `overview`，将 AI Markdown 和网页入口放进概览页。
5. 更新 `docs/ai-coding-design-reference.md`，补充 `design-system-angelwatch` 合并边界。
6. 保留现有组件和样式实现，不引入外部旧代码。

## 后续使用建议

未来 AI 在实现新页面时，应按以下顺序查证：

1. 从 `AI_DESIGN_SYSTEM.md` 确认权威顺序和目标范式。
2. 从 `project/index.html#/ai-reference` 进入对应网页路由。
3. 从 `docs/ai-coding-design-reference.md` 找业务字段、状态和组件选择。
4. 从 `brand-spec.md` 与 `project/styles/tokens.css` 确认 token。
5. 如果需要旧站姿态，再参考 `design-system-angelwatch/customertest-brand/DESIGN.md` 和 `ui_kits/app/README.md`，但不复制旧实现。
