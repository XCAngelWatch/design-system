# 2026-07-09 项目逻辑与 AI 可读性审计

> 范围:整个 design-system 仓库的逻辑一致性、作为系统设计的完整度、以及"把 GitHub 链接给一个全新 AI agent,能否独立分析出系统设计并执行"的就绪度评估。审计分三维度:**A 逻辑/结构**、**B 系统设计完整度**、**C AI 独立执行可读性**。本文档同时记录本轮已现场修复项与遗留待办。

## 结论速览

| 维度 | 评级 | 说明 |
| --- | --- | --- |
| A 逻辑/结构 | 良好(已修) | 5 项内置校验全过;主要问题是文档与代码的页数/数字漂移,已修复 |
| B 系统设计完整度 | 良好 | token 体系/分层/暗色覆盖/禁用模式均自洽;CSS 局部硬编码 hex 为可接受展示物,部分已转 token |
| C AI 独立执行就绪度 | 6.5/10 → 修复后约 7.5/10 | 入口链断裂、落地三体职责矛盾、token 文档/运行时不一致均已修复;遗留:sibling 仓库不可达、本地绝对路径、Pages 上 .md 链接 404 |

内置 5 项校验(页注册 / 路由磁盘一致 / index.html 标签平衡 / 禁用模式回归 / legacy 色)本轮全部通过。

---

## A. 逻辑 / 结构

### A1. 页数漂移(已修复)

- **问题**:`CLAUDE.md` / `AGENTS.md` / `README.md` 通篇写"62 个 section(页面模板 13 / 规范 6)",但 `_router.js` ROUTES 实际 66 条,磁盘 66 个 fragment。实际分组:`导览 2 / 基础 13 / 通用组件 14 / 业务组件 12 / 页面模板 16 / 生态 2 / 规范 7`。页面模板新增 `map-page` / `service-page` / `ops-page`,规范新增 `ai-reference`。`_router.js` 注释已更新到 66,但三份权威指令文件未跟上。
- **影响**:AI 拿这些数字做规模判断或校验时会出错。
- **修复**:三份文档 + 文件图 + "当前 N 个文件均干净" + sidebar 导航计数全部同步到 66;`overview.js` hero meta `240 设计 Token` → `120`(tokens.css 实际 120 条声明 / 66 唯一变量),`10 页面模式` → `16 页面模板`,lede `10 个页面模板` → `16`。

### A2. 跨片段链接完整性(通过)

- 全部 38 个 `href="#/<id>"` 引用的 id 均存在于 ROUTES,**无 404 / 侧边栏缺项**。
- 注册 key / 文件名 / `<section id>` **三处一致**(66/66)。
- 模板字面量无破坏字符:`api.js:127` 的反引号已转义;`i18n.js:169` 的 `${...}` 为有意插值(合法但脆弱,见 D1);`row-actions.js` 是唯一 IIFE 包裹结构(其余 65 个为裸赋值)。
- 禁用模式回归扫描:**无命中**(`new-tag` / 版本徽章 / `state-machine` / `撤回 v1` 均清;`upload.js` / `data-cards.js` 的 `class="v"` 为合法固件 mock value,非版本徽章)。

### A3. 孤立路由(28 个,非阻断)

28 个路由无任何跨片段链入,仅靠侧边栏可达。多数为基础/通用组件叶子页(合理),但其中几个是核心导览/入口页,建议从 `overview.js` / `ai-reference.js` 至少各加一条入链以改善发现性:

- `cases`(导览组核心实践案例页,零入链)
- `ecosystem` / `api` / `do-dont`(规范/生态入口页,零入链)
- `a11y` / `responsive` / `layout` / `type` 等基础章节

> 本轮未改动(避免过度编辑 overview);列为 P2 待办。

### A4. 双重 sidebar token 命名(维护性 smell,非运行时 bug)

- **现象**:`tokens.css` 与 `foundations-extras.css` 都定义侧边栏 token,命名词序不一致(`--aw-sidebar-bg-hover` vs `--aw-sidebar-hover-bg`、`border` vs `divider`、`indicator` vs `icon-active`),且 `hover-bg` 值 `#F5F7FA` vs `#F4F6F9` 不同。
- **核实(降低严重性)**:foundations-extras 的那套 token **只在 foundations-extras 自身的 sidebar-states demo 段被消费**(每个仅 1 文件引用 = 自身);`_router.js` 渲染的真实侧边栏用的是 `tokens.css` 的 `--aw-sidebar-bg-hover` / `--aw-sidebar-bg-active` / `--aw-sidebar-text-active`。两套变量名不同、CSS 层面不碰撞,**无运行时 bug**。
- **定性**:命名一致性 / 可维护性 smell,非功能缺陷。
- **建议(未执行)**:把 foundations-extras 的 demo 侧边栏 token 回收到 `tokens.css` 单源,全局固定 `-bg-hover` / `-bg-active` 词序。属较大重构,列为 P2。

---

## B. 系统设计完整度

### B1. token 体系(良好)

- `tokens.css`:66 唯一 `--aw-*` 变量 / 120 条声明(浅+深),命名族清晰(`primary*` / `{success,warning,danger,info}{,-bg,-border}` / `text-{1..4}` / `border-{1..4}` / `fill-{1..4}` / `bg{,-page,-elevated,-spotlight,-mask}` / `sidebar-*` / `chart-{1..8}` / `radius` / `shadow` / `ease` / `dur` / `h-*`)。
- 暗色覆盖完整:背景 / 前景 / 主色(`#4080FF`)/ 状态色 / 边框 / 侧边栏 / 阴影 / 图表全覆盖。
- 品牌主色 `#165DFF`(浅)/ `#4080FF`(深)与规范一致;旧蓝 `#0052CC` / `#1677FF` 仅 `--aw-chart-1` 作图表序列色(有注释说明,合规)。
- CSS 分层 7 基础 + 9 业务扩展,职责清晰。

### B2. CSS 硬编码 hex(部分展示物,部分已转 token)

`tokens.css` / `foundations-extras.css` token 定义块内的 hex 合法。组件选择器内的硬编码分两类:

1. **真实组件 mock(应转 token,本轮已修部分)**:
   - `components.css:877` `.login-mock .panel-left` 品牌渐变 `#0E42D2/#165DFF/#4080FF` → 已转 `var(--aw-primary-active/primary/primary-hover)`。
2. **展示物 / demo 用色(可接受,留作 P2)**:
   - `foundations-extras.css` 的 token-pyramid 图例、sidebar-states demo、嵌套主题 demo、WCAG 色板:这些是**展示 token 体系本身**的可视化,部分色(如"暗色主色 `#4080FF`"图例)是固定参考色,不应跟随主题。
   - `ecosystem.css` 的 license 徽章(`lic.mit/apache/bsd/isc`):有完整的浅/暗成对覆盖,自洽工作,dark 用 rgba tint 无对应 token。
   - `components-extras.css` 的 avatar 配色板、mac 红黄绿点、代码语法高亮:装饰/示意色,无对应 token。
   - 状态色硬编码(`tag-green` border、`alert` border、`ota-card` cover 等):有对应 `--aw-*-border` token,可转,列为 P2。

> 规则澄清:"禁止硬编码 hex"针对**真实组件样式**;设计系统展示页里"展示色板/图例/语法高亮"等 demo 用色属合理 placeholder。后续可在 `CLAUDE.md` 显式写明这条边界,避免审计误判。

### B3. foundations-extras.css 过载(已知)

42KB,承载 8+ 职责(token 三层 / 密度 / 嵌套主题 / WCAG / sidebar states / 主题切换器 / i18n / token-pyramid)。建议把 `sidebar-states`(行 239–360)与 `nested-theme`(行 490–810)独立成文件。列为 P2。

---

## C. AI 独立执行可读性

### C1. 入口链断裂(已修复)

- **问题**:`CLAUDE.md`(Claude Code 自动加载)不提及 `AI_DESIGN_SYSTEM.md`;`AI_DESIGN_SYSTEM.md` 先读顺序只引 `AGENTS.md` 不引 `CLAUDE.md`。一个 Claude Code agent 加载 `CLAUDE.md` 后可能完全不知道 AI 专用入口存在。
- **修复**:
  - `CLAUDE.md` / `AGENTS.md` 新增"## AI 入口(先读这里)"段,指向 `AI_DESIGN_SYSTEM.md` + `#/ai-reference` + `docs/ai-coding-design-reference.md` + `brand-spec.md` + audits,并写明权威顺序。
  - `AI_DESIGN_SYSTEM.md` 先读顺序补 `CLAUDE.md`(标注 CLAUDE/AGENTS 等价、互补),闭合双向链。
  - `README.md` 新增"## AI 编程入口"段,并在结构树补 `AI_DESIGN_SYSTEM.md` / `brand-spec.md`。

### C2. 落地文件三体职责矛盾(已修复)

- **问题**:`README.md` 说 `antd.ts` 同时收口 `theme.token` 与 `theme.components`,而 `color.js` 说 `components.ts` 管 `theme.components` —— 矛盾。`antd.ts` / `components.ts` / `AntdConfig.tsx` 三者职责从无统一说明。
- **修复**:`CLAUDE.md` / `AGENTS.md` / `README.md` 统一为:`antd.ts`=`theme.token`、`components.ts`=`theme.components`、`AntdConfig.tsx`=消费入口,并加职责切分约束。

### C3. token 文档与运行时不一致(已修复)

- **问题**:`brand-spec.md` 与 `ai-coding-design-reference.md` 的视觉 token 表写旧 customertest/Arco 值(页底 `#F7F8FA`、主文字 `#1D2129`、次级 `#4E5969/#86909C`、边框 `#E5E6EB`),而 `tokens.css` 用 antd v6 neutral ramp(`--aw-bg-page: #F5F7FA`、`--aw-text-1: #1F2937`、`--aw-text-2: #4B5563`、`--aw-border-2: #E5E7EB`)。AI 照文档写色会与运行时对不上。
- **修复**:
  - `brand-spec.md` 新增"证据 token → 运行时 `--aw-*` 映射"表,逐项对应并声明"以 tokens.css 为唯一实现值"。
  - `ai-coding-design-reference.md` 视觉系统表加溯源说明:上表 hex 为旧站溯源,运行时以 `tokens.css --aw-*` 为唯一值。

### C4. 双重 token 命名(已缓解)

- `brand-spec.md` 用 `--bg/--surface/--fg/--muted/--border/--accent`(oklch),运行时用 `--aw-*`。C3 的映射表已消除困惑:明确 brand-spec 变量为证据 token,运行时一律 `--aw-*`。

### C5. 本地绝对路径(已声明,无法消除)

- `brand-spec.md` / `AI_DESIGN_SYSTEM.md` / `ai-coding-design-reference.md` / 多份 audit/spec 引用 `/Users/david/...`、`.fig` 文件、OpenDesign app 数据目录。GitHub-only AI 无法访问,Figma 业务证据不在仓库内。
- **缓解**:`AI_DESIGN_SYSTEM.md` 外部参考段加声明:本地路径仅本机可用,可合并结论已提炼内联到文档与 `pages/*.js`,AI 直接读内联结论即可。`brand-spec.md` 原有的绝对路径免责声明保留。
- **遗留(结构性)**:Figma / OpenDesign 源不在仓库。若要 AI 能"看到"业务证据,需把提取出的 evidence(`tokens.json` / `tree.json` 摘要 / 字段清单)作为仓库内文件提交。列为 P1 建议。

### C6. Pages 上 AI 入口页 .md 链接 404(已知,未改)

- `overview.js` / `ai-reference.js` 用 `../AI_DESIGN_SYSTEM.md` / `../brand-spec.md` / `../docs/...` 链接根目录 `.md`。`pages.yml` `path: project` 只发布 `project/`,根目录 `.md` 不在线上;且 `../` 在 Pages(`project/` 即站点根)会逃出站点根 → 线上 404。
- **未改原因**:这些链接在 `file://`(主开发模式)与 AI 读仓库时均正确;改路径或换 GitHub blob URL 会破坏 file:// 离线体验或需改部署结构。属部署决策,需用户确认。
- **可选修法**(任选其一,需确认):
  1. 工作流加一步把根 `.md` 拷进 `project/` 并改链接为站点内相对路径(会改变 file:// 行为,需同步本地)。
  2. 链接改 GitHub blob URL(线上 + AI 可用,但 file:// 离线失效)。
  3. 接受现状(AI 直接读仓库 .md,网页 404 仅影响人类点链接)。

---

## D. 其它待办

- **D1** `i18n.js:169` 用 `${'`...`'}` 插值渲染反例代码,合法但易被静态扫描误判,建议改 HTML 转义显式书写。P2。
- **D2** `row-actions.js` 是唯一 IIFE 包裹 fragment,若引入统一生成器需注意该特例。P2。
- **D3** `overview.js` hero `33+ 核心组件` / `10 生态集成` 未逐一核对,`33+` 用 `+` 号留有余地可接受;`10 生态` 待核。P3。

---

## 本轮已修复清单

| # | 文件 | 修复 |
| --- | --- | --- |
| 1 | `CLAUDE.md` `AGENTS.md` `README.md` | 页数 62→66、分组页面模板 13→16 / 规范 6→7、文件图成员补全 |
| 2 | `CLAUDE.md` `AGENTS.md` | 新增"AI 入口(先读这里)"段,桥接 `AI_DESIGN_SYSTEM.md` 双向断裂 |
| 3 | `CLAUDE.md` `AGENTS.md` `README.md` | 落地三体职责统一(antd.ts=token / components.ts=components / AntdConfig.tsx=消费入口) |
| 4 | `README.md` | 结构树补 `AI_DESIGN_SYSTEM.md` / `brand-spec.md`;新增"AI 编程入口"段 |
| 5 | `AI_DESIGN_SYSTEM.md` | 先读顺序补 `CLAUDE.md`;外部参考段加本地路径免责声明 |
| 6 | `brand-spec.md` | 新增证据 token → `--aw-*` 运行时映射表 |
| 7 | `docs/ai-coding-design-reference.md` | 视觉系统表加"以 tokens.css 为准"溯源说明 |
| 8 | `project/pages/overview.js` | hero meta 240→120、10 页面模式→16 页面模板、lede 同步 |
| 9 | `project/styles/components.css` | `.login-mock` 品牌渐变硬编码 → `var(--aw-primary-*)` |
| 10 | `AGENTS.md` | 修正 "Codex (Codex.ai/code)" 措辞 |

## 遗留待办(P0→P3)

- **P1**(结构性):C5 —— 把 Figma/OpenDesign 提取的 evidence 作为仓库内文件提交,让 GitHub-only AI 能看到业务证据。
- **P1**(部署决策):C6 —— Pages 上 AI 入口页 .md 链接 404,需用户选修法。
- **P2**:A3 孤立路由入链;A4 sidebar token 单源化 + 词序统一;B2 状态色硬编码转 token;B3 foundations-extras 拆分;D1 i18n 反例代码转义。
- **P3**:D2 row-actions IIFE 特例;D3 hero 数字核对。

## 修复后 AI 独立执行就绪度

修复前 6.5/10 → 修复后约 **7.5/10**。一个全新 AI agent 拿到 GitHub 仓库后:能被 `CLAUDE.md` 引导到 `AI_DESIGN_SYSTEM.md`;能读到权威顺序、页面范式、落地三体职责;能用 `--aw-*` token 与 `brand-spec` 映射写出与运行时一致的色值;能从 `config-provider.js` / `color.js` 拿到 antd 覆盖可复制示例。剩余摩擦:sibling 仓库落地代码不可达(需跨仓库)、Figma 业务证据不在仓库内(需提交 evidence)、Pages 网页 .md 链接 404(需部署决策)。

## 2026-07-09 复评(P0/P1/P2 业务知识落地 + 去过程化 + 业务知识锚点索引后)

本轮又做了三件提升 AI 可读性的事:

1. **业务知识落地**:`docs/ai-coding-design-reference.md` 9 个模块字段锚点段全部补齐真实字段/状态机/枚举(设备 35 字段 + 16 指令、应用四段表单 + 版本包签名态、OTA 文件生命周期、推送批次/设备状态含已过期/已终止、27 operationType + 扫码授权子机、围栏 shape/eventType/数据结构、账号 MFA/时区 + 角色 dsType、操作日志真实列);`pages/*.js` mock 同步;`copywriting.js` 状态枚举四语 + 术语锁定;`data-format.js` 领域字典(时区/错误码/国家);`brand-spec.md` spacing scale + shell 尺寸。AI 现在能从仓库直接读到**权威业务字段与状态**,不必臆造。
2. **去过程化**:清除 49 处"对齐旧系统/真实后端/采纳生产/弃糟粕/证据指针/P0-P2/前瞻字段/机翻错译"等中间判断措辞,参考内容现为最终权威表述。
3. **业务知识锚点索引**:`AI_DESIGN_SYSTEM.md` 新增"业务知识锚点"表(模块→权威内容→文件),`CLAUDE.md`/`AGENTS.md`/`README.md` AI 入口段把 `ai-coding-design-reference.md` 标注为"字段/状态机/枚举/operationType/领域字典权威"并指向索引表。AI 一步就能定位每个模块的权威字段在哪。

**复评就绪度:约 8.5/10**。剩余阻碍(均为结构性,非内容):
- sibling 仓库 `tms2.5-web-react` 落地代码不在本仓库(AI 只能以本仓库为契约,跨仓库对齐需另行接入)。
- Figma/OpenDesign 业务证据源不在仓库内(已用 `ai-coding-reference.md` 内联结论缓解,但原始证据仍需提交 evidence 文件才能让 AI"看到"帧级细节)。
- GitHub Pages 上 AI 入口页的 `../X.md` 链接 404(只影响人类网页浏览;**AI clone 仓库后直接读根 .md,不受影响**)。
- 文档引用本地绝对路径(`/Users/david/...`、`.fig`、OpenDesign 数据目录)——已声明"本地不可达、结论已内联",AI 读内联结论即可。

结论:一个全新 AI 拿到 GitHub 链接 → `CLAUDE.md` 自动加载 → 指向 `AI_DESIGN_SYSTEM.md` → "业务知识锚点"表定位到 `ai-coding-reference.md` 对应段 + `pages/*.js` mock → 拿到权威字段/状态机/枚举/operationType + `--aw-*` token + `config-provider.js` 可复制示例 → 可独立实现业务页面。内容层 AI 可读性已足够;剩余阻碍在"跨仓库落地代码"与"原始 Figma 证据"两个仓库外因素。
