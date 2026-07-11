# AngelWatch Design System

本项目是 AngelWatch TMS（设备终端管理系统）的 **AI-first 设计系统参考文档站**，用静态 SPA 的形式沉淀系统设计、页面蓝图、组件规范、设计 token、交互约束与落地规则。它的目标不是发布运行时组件库，而是为 AI 与开发者在业务系统设计和开发时提供可检索、可引用、可对齐的设计知识库。

当前站点覆盖设计 token、设计基础、通用组件、业务模式、页面蓝图与工程落地规则，共 **66 个 section**，按 `导览(3) / 设计基础(13) / 通用组件(14) / 业务模式(12) / 页面蓝图(16) / 工程落地(8)` 组织。

站点是 **纯静态 SPA**：`project/index.html` 是 shell，`project/pages/<id>.js` 是页面片段，`project/pages/_router.js` 通过 hash 路由和动态 `<script>` 注入加载片段。无构建、无 NPM 依赖、无 HTTP 服务器要求，`file://` 直接打开即可。

## 入口

**在线访问**：[https://xcangelwatch.github.io/design-system/](https://xcangelwatch.github.io/design-system/)

常用直链：

- [概览](https://xcangelwatch.github.io/design-system/#/overview)
- [色彩](https://xcangelwatch.github.io/design-system/#/color)
- [按钮](https://xcangelwatch.github.io/design-system/#/buttons)
- [实践案例](https://xcangelwatch.github.io/design-system/#/cases)
- [ConfigProvider 全局配置](https://xcangelwatch.github.io/design-system/#/config-provider)

本地查看：

```bash
open project/index.html
# 或将 project/index.html 拖入浏览器
```

放进任何静态服务器（Nginx / Apache / Caddy / 内网 CDN）也可分发；部署产物就是 `project/` 原文件。

## AI 编程入口

本仓库是 AI-first 的。AI agent 拿到仓库后先读 [`AI_DESIGN_SYSTEM.md`](AI_DESIGN_SYSTEM.md)（权威顺序、页面范式、**业务知识锚点索引**、外部参考边界、提交前校验），再按需进入 [`docs/ai-coding-design-reference.md`](docs/ai-coding-design-reference.md)（**业务字段 / 状态机 / 枚举 / operationType / 领域字典权威**）和 [`brand-spec.md`](brand-spec.md)（品牌 token 与布局姿态）。网页端 AI 导航页：`project/index.html#/ai-reference`。落地代码在 sibling 仓库 `tms2.5-web-react`（不在本仓库），AI 以本仓库的 `--aw-*` token 与 `pages/*.js` 范式为契约到 sibling 仓库对齐。

## 部署

`.github/workflows/pages.yml` 在 push 到 `main` 时把 `project/` 发布到 GitHub Pages，也支持在 Actions 页面手动 `workflow_dispatch`。

- **Source**：GitHub Actions
- **Artifact**：`project/`
- **部署状态**：[GitHub Actions](https://github.com/XCAngelWatch/design-system/actions)

## 结构

```text
design-system/
├── README.md                         说明文档
├── AI_DESIGN_SYSTEM.md               AI 编程首读入口（权威顺序 / 页面范式 / 业务知识锚点 / 验收）
├── brand-spec.md                     品牌 token 与布局姿态证据
├── CLAUDE.md                         Claude Code 工作指南
├── AGENTS.md                         Codex / 通用 agent 工作指南
├── docs/                             参考与决策记录
│   ├── ai-coding-design-reference.md 业务字段 / 状态机 / 枚举 / operationType / 领域字典权威
│   └── decisions/                    审计 / 计划 / 规格（过程记录，历史存档）
├── .github/workflows/pages.yml       GitHub Pages 自动部署
└── project/
    ├── index.html                    SPA shell：favicon、CSS link、主题/语言恢复脚本、i18n runtime、路由器入口
    ├── favicon.ico                   站点图标
    ├── i18n/                         zh-CN fallback + en-US 词典运行时
    │   ├── runtime.js                无依赖 i18n runtime：locale、catalog、DOM 文本/属性应用
    │   ├── common.en-US.js           shell / 导航 / toolbar / 通用交互英文词典
    │   └── en-US/<id>.js             66 个 route 的英文词典，一页一个 namespace
    ├── pages/                        66 个 fragment + 1 个 router
    │   ├── _router.js                ROUTES 表、sidebar、toolbar、hash 路由、主题持久化
    │   ├── overview.js / ai-reference.js / cases.js
    │   │                             导览：概览、AI 开发入口、实践案例
    │   ├── color.js ... responsive.js
    │   │                             设计基础：色彩、暗色、多语言、字体、间距、圆角、动效、布局、响应式、色板、图标、图形化、无障碍
    │   ├── buttons.js ... skeleton.js
    │   │                             通用组件：按钮、输入、菜单、导航、表格、标签、反馈、进度、日期、上传、树、抽屉、Toast、骨架屏
    │   ├── status-matrix.js ... page-header.js
    │   │                             业务模式：状态矩阵、DataCard、RowActions、Charts、级联/穿梭、表单校验、Tabs、Result、空/错/加载、页头
    │   ├── shell.js ... ops-page.js
    │   │                             页面蓝图：应用外壳、登录、列表、详情、表单、树列表、向导、仪表盘、数据中心、市场、OTA、推送、账户、地图、增值服务、运营
    │   └── ecosystem.js ... do-dont.js
    │                                 工程落地：生态、技术栈、ConfigProvider、组件 API、数据格式、文案、白标、规范红线
    └── styles/                       16 个 CSS：基础骨架 7 + 业务扩展 9
        ├── tokens.css                设计 token：:root + [data-theme="dark"]
        ├── system.css                全局 reset、排版、应用 grid
        ├── components.css            核心组件 mock
        ├── components-extras.css     扩展组件 mock + SPA shell 样式
        ├── foundations-extras.css    设计基础展示物
        ├── layout.css                栅格、断点、页面骨架
        ├── ecosystem.css             生态库集成与技术栈表
        ├── login-states.css          登录状态与验证码
        ├── row-actions.css           行操作折叠
        ├── table-pro.css             表格高级态
        ├── upload-pro.css            上传高级态
        ├── modal-pro.css             Modal 复杂内嵌
        ├── tree-pro.css              Tree 高级态
        ├── toast-pro.css             富 Notification
        ├── result-pro.css            Result 部分成功
        └── blueprints-pro.css        业务蓝图页共享样式
```

## SPA 工作机制

1. `index.html` 先从 `localStorage('aw-theme')` 和 `localStorage('aw-locale')` 恢复 `<html data-theme lang>`，避免主题和语言闪烁。
2. shell 只保留空容器：`#app-side`、`#app-toolbar`、`#app-slot`。
3. `project/i18n/runtime.js` 与 `common.en-US.js` 先加载，`_router.js` 再渲染 sidebar、toolbar、主题切换和语言切换。
4. hash 变化后，路由器动态插入 `<script src="pages/<id>.js">`；英文模式下同时加载 `i18n/en-US/<id>.js`。
5. fragment 执行后把 HTML 注册到 `window.__AW_PAGES__[id]`，英文词典注册到 `window.__AW_I18N__`，路由器再注入并翻译 `#app-slot`。
6. 已加载的 fragment 和 locale catalog 会留在全局缓存中，二次访问不重复加载。

因为加载方式是 `<script>` 注入，不是 `fetch()`，所以 `file://` 下也能完整工作。

每个 fragment 的结构：

```javascript
/* AngelWatch Design System — page: <id> */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["<id>"] = `
<div class="content">
  <section class="section" id="<id>">...</section>
</div>
`;
```

## 国际化架构

静态文档站当前支持 `zh-CN` / `en-US` 双语言，仍保持一套页面结构：中文 HTML 是默认 fallback，英文通过 route 级 catalog 覆盖。

- `project/i18n/runtime.js`：无依赖运行时，负责 locale 规范化、catalog 注册、文本 / 属性翻译和 `Intl` 辅助。
- `project/i18n/common.en-US.js`：导航分组、route 标题、toolbar、加载失败、主题 / 语言切换等 shell 文案。
- `project/i18n/en-US/<id>.js`：每个 page fragment 一个英文 namespace，与 `project/pages/<id>.js` 一一对应。
- `project/pages/<id>.js`：只保留一套 HTML，通过 leaf-only `data-i18n="<id>:key"` 标记文本，通过 `data-i18n-placeholder` / `data-i18n-title` / `data-i18n-aria-label` / `data-i18n-alt` / `data-i18n-value` 标记属性。
- 业务 React / AntD 落地时使用 `ConfigProvider locale` + i18next / react-i18next；本静态站不引入 React runtime，也不复制第二套页面。

新增或修改页面文案后必须运行 `node scripts/check-i18n.js --routes=<id>`；全量验收运行 `node scripts/check-i18n.js`。

## 落地关系

设计系统不是发布到业务侧的组件库；它是视觉与交互契约，最终通过 sibling 仓库 `tms2.5-web-react` 中的代码落地：

1. **Token**：`@tms/design-tokens` / `packages/design-tokens/` 生成 CSS 变量与 antd token。
2. **antd 覆盖**：`packages/design-tokens/src/antd.ts` 收口 `ConfigProvider.theme.token`（主色 / 字号 / 圆角 / 间距）；`packages/design-tokens/src/components.ts` 收口 `theme.components`（Button / Tag / Table / Menu 等组件级覆盖）。两者分层，不要把 `theme.components` 写进 `antd.ts`。
3. **应用消费**：`packages/web/src/app/AntdConfig.tsx` 是 `<ConfigProvider>` 消费入口（参考 `project/pages/config-provider.js` 可复制示例）；业务页面用 antd v6 原生 + `src/components/` 业务封装。
4. **生态集成**：图表、地图、虚拟表格、代码编辑器等复杂能力优先采用白名单 NPM 包，再套用本系统 token。

### 组件选型优先级

1. **antd v6 原生**：Form、Table、Layout、Menu、Modal、Drawer、Select、Cascader 等优先使用原生组件。
2. **业务自建**：antd 不覆盖的场景再封装 `src/components/`，命名以业务语义为主。
3. **第三方 NPM 包**：仅限生态白名单；license 必须属于 MIT / Apache-2.0 / BSD / ISC。

`@ant-design/pro-components` 不作为新页面选型；统一采用 antd 原生能力 + 业务封装。

## 常用校验

仓库没有 build / install / test step。改文档或页面片段后按需运行以下校验：

```bash
# 1. 国际化覆盖 / runtime / shell contract
node scripts/check-i18n.js
node scripts/i18n-runtime.test.js
node scripts/i18n-contract.test.js
node scripts/check-consistency.js

# 2. 全部 page fragments 加载 + 注册校验（无浏览器）
node -e "
global.window = {};
const fs = require('fs');
const files = fs.readdirSync('project/pages').filter(f => f.endsWith('.js') && f !== '_router.js');
let ok = 0;
for (const f of files) {
  delete require.cache[require.resolve('./project/pages/' + f)];
  require('./project/pages/' + f);
  if (window.__AW_PAGES__[f.slice(0, -3)]) ok++;
}
console.log(ok + ' / ' + files.length + ' pages registered ✓');
"

# 3. ROUTES 与磁盘 fragments 一致
python3 -c "
import re, glob
js = open('project/pages/_router.js').read()
m = re.search(r'var ROUTES = \[([\s\S]*?)\];', js)
ids_in_js = set(re.findall(r\"\['([^']+)',\", m.group(1)))
files = {p.split('/')[-1].rsplit('.', 1)[0] for p in glob.glob('project/pages/*.js') if not p.endswith('_router.js')}
print('only in router:', ids_in_js - files)
print('only on disk:  ', files - ids_in_js)
print('match ✓' if ids_in_js == files else 'MISMATCH ✗')
"

# 4. index.html 结构平衡
python3 -c "
from html.parser import HTMLParser
class C(HTMLParser):
    def __init__(self): super().__init__(); self.s = {}
    def handle_starttag(self, t, a): self.s[t] = (self.s.get(t, (0, 0))[0] + 1, self.s.get(t, (0, 0))[1])
    def handle_endtag(self, t): self.s[t] = (self.s.get(t, (0, 0))[0], self.s.get(t, (0, 0))[1] + 1)
void = {'meta','link','br','hr','img','input','source','track','wbr','area','base','col','embed','param','circle','rect','path','line','polygon','ellipse','use','marker','stop','text','image','tspan'}
p = C(); p.feed(open('project/index.html').read())
print('balanced ✓' if all(o == c for t, (o, c) in p.s.items() if t not in void) else 'UNBALANCED ✗')
"

# 5. 禁止模式回归：版本时间线 / 状态机图 / 版本徽章
grep -rnE 'class="new-tag"|class="v">v[0-9]+\.[0-9]+ *</span>|state-machine|sm-graph|sm-legend|sm-rules|"v1\.0/|撤回 v1|（同 v1' project/
```

## 扩展规则

### 修改一个 section

1. 编辑 `project/pages/<id>.js` 中模板字面量包裹的 HTML。
2. 不要改 `(window.__AW_PAGES__ = ...)` 注册行。
3. HTML 内避免出现反引号、`${...}` 或未转义反斜杠，避免破坏 template literal。
4. 跨片段链接用 `href="#/other-id"`；纯 `#xxx` 只作为页面内锚点。
5. 颜色、间距、圆角、阴影优先引用 `var(--aw-*)`。
6. 新增或修改可见文案时，同步 leaf-only `data-i18n` 标记和 `project/i18n/en-US/<id>.js`；不要用 `data-i18n-ignore` 跳过普通业务文案。
7. 运行 `node scripts/check-i18n.js --routes=<id>`。

### 新增一个 route

1. 新建 `project/pages/<id>.js`。
2. 在 `_router.js` 的 `ROUTES` 中追加 `['<id>', '<中文标签>', '<分组名>']`。
3. 分组必须属于已有 6 类：导览、设计基础、通用组件、业务模式、页面蓝图、工程落地。
4. 新建 `project/i18n/en-US/<id>.js`，namespace 必须与 route id 一致。
5. 运行 ROUTES 与磁盘 fragments 一致性校验和 `node scripts/check-i18n.js --routes=<id>`。

### 新增 CSS

按职责放入已有 CSS，避免按时间线新建文件：

- token 值：`tokens.css`
- 核心组件 mock：`components.css`
- 扩展组件 mock / shell：`components-extras.css`
- 设计基础展示物：`foundations-extras.css`
- 布局、栅格、断点：`layout.css`
- 生态集成示意：`ecosystem.css`
- 单页大体量业务样式：对应 `*-pro.css`

只有当某个 page fragment 引入大量专属样式且难以复用时，才新增 `<page>-pro.css` 并在 `index.html` 中追加 `<link>`。

## 约定红线

- **Evergreen**：站点是现行规范，不写 changelog；不要加入版本徽章、版本比较句式或具体发布时间线。
- **主色**：当前 token 锚点为 `#165DFF`，暗色主色为 `#4080FF`；业务实现必须通过 `var(--aw-primary)` 或 antd token 使用。
- **状态机**：设备状态矩阵保留，State Machine 转换图不要恢复。
- **主题**：Light / Dark 通过 `[data-theme="dark"]` 覆盖，切换器持久化到 `localStorage('aw-theme')`。
- **离线**：新增第三方字体、图标、loader、瓦片等必须自托管，不引入运行时 CDN。
- **国际化**：参考站用一套 HTML + `data-i18n` + route catalog；业务应用中的可见文本必须走 `t('namespace.key')` / `Trans`，不得硬编码。
- **样式优先级**：避免 `!important`；确有必要时加豁免注释并说明原因。
