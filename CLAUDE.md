# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static design-system reference site for AngelWatch TMS (设备终端管理系统),组织成 **静态 SPA(单页面应用)**:`index.html` 是 shell,所有 43 个 section(导览 1 / 基础 8 / 通用组件 13 / 业务组件 9 / 页面模板 8 / 生态 2 / 规范 2)拆为 `pages/<id>.js` 片段(每个文件就是一段把 HTML 字符串注册到 `window.__AW_PAGES__` 的 JS),通过 hash 路由(`#/color`、`#/buttons` 等)由 `pages/_router.js` 用动态 `<script>` 注入而非 fetch 加载。

**Pure HTML + CSS + 一份 vanilla JS 路由器,无构建,无 NPM 依赖,无 HTTP 服务器要求 —— `file://` 直接打开 `index.html` 即可。** 共用部分(品牌区 / 侧边栏 / toolbar / 主题切换 / 路由)在 `pages/_router.js`,差异部分(每个 section 的 HTML 内容)在 `pages/<id>.js`。

设计系统本身不是组件库 —— 它的样式与规范最终通过 `@tms/design-tokens` + `ConfigProvider.theme` 落地到 sibling 仓库 `tms2.5-web-react` 的 `packages/web` 应用代码。

## Deployment

线上地址:<https://xcangelwatch.github.io/design-system/>。`.github/workflows/pages.yml` 在 push 到 `main` 时把 `project/` 目录发布到 GitHub Pages(Source 已设为 GitHub Actions)。手动触发用 Actions 页的 `workflow_dispatch`。无 build,artifact 即 `project/` 原文件。

## Common commands

没有 build / install / test step。

```bash
# 1. 在浏览器打开(双击 / open / file:// 都可以)
open project/index.html

# 2. 全部 41 page fragments 加载 + 注册校验(无浏览器,Node 静默测试)
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

# 3. 路由器 ROUTES 与磁盘 fragments 一致(漏一个就会侧边栏缺项 + 该路由 404)
python3 -c "
import re, glob
js = open('project/pages/_router.js').read()
m = re.search(r'var ROUTES = \[([\s\S]*?)\];', js)
ids_in_js = set(re.findall(r\"\['([^']+)',\", m.group(1)))
files = {p.split('/')[-1].rsplit('.',1)[0] for p in glob.glob('project/pages/*.js') if not p.endswith('_router.js')}
print('only in router:', ids_in_js - files)
print('only on disk:  ', files - ids_in_js)
print('match ✓' if ids_in_js == files else 'MISMATCH ✗')
"

# 4. index.html 结构平衡(在 Edit shell 后跑)
python3 -c "
from html.parser import HTMLParser
class C(HTMLParser):
    def __init__(self):super().__init__();self.s={}
    def handle_starttag(self,t,a):self.s[t]=(self.s.get(t,(0,0))[0]+1,self.s.get(t,(0,0))[1])
    def handle_endtag(self,t):self.s[t]=(self.s.get(t,(0,0))[0],self.s.get(t,(0,0))[1]+1)
void={'meta','link','br','hr','img','input','source','track','wbr','area','base','col','embed','param','circle','rect','path','line','polygon','ellipse','use','marker','stop','text','image','tspan'}
p=C();p.feed(open('project/index.html').read())
print('balanced ✓' if all(o==c for t,(o,c) in p.s.items() if t not in void) else 'UNBALANCED ✗')
"

# 5. 禁止模式回归(以下任何一条命中都说明把版本时间线 / 状态机找回来了)
# firmware mock 中的 `<span class="v">v3.4.1 → v3.4.2</span>` 是合法 value,
# 用更精确的正则只匹配单段版本号紧跟 </span> 的"版本徽章"模式
grep -rnE 'class="new-tag"|class="v">v[0-9]+\.[0-9]+ *</span>|state-machine|sm-graph|sm-legend|sm-rules|"v1\.0/|撤回 v1|（同 v1' project/
```

## Architecture & file map

```
project/
├── index.html             SPA shell (~34 行) — 7 个 CSS link + 早期主题恢复脚本 +
│                          空 sidebar/toolbar/slot 容器 + <script src="pages/_router.js">
├── pages/                 43 个 fragment + 1 个 router
│   ├── _router.js         共用 (~270 行) — ROUTES 表 / sidebar / toolbar 渲染 /
│   │                      hash 路由 / 动态 <script> 加载 / 主题持久化(localStorage)
│   ├── overview.js        Hero + Principles                                  (导览 1)
│   ├── color.js ~ palette.js          色 / 字 / 距 / 圆角 / 阴影 / 动效…    (基础 8)
│   ├── buttons.js ~ skeleton.js       按钮 / 输入 / 表格 / 反馈 / 上传…    (通用 13)
│   ├── status-matrix.js ~ row-actions.js  设备 / 状态 / 行操作 …           (业务 9)
│   ├── shell.js ~ dash-page.js        Login / List / Detail / Form / …     (模板 8)
│   ├── ecosystem.js / tech-stack.js                                          (生态 2)
│   └── do-dont.js / whitelabel.js                                            (规范 2)
└── styles/                15 个 CSS — 7 基础骨架 + 8 业务扩展(*-pro.css)
    ├── tokens.css         设计 token (色/字/距/圆角/阴影/动效) — :root + [data-theme="dark"]
    ├── system.css         全局 reset + 基础排版 + 应用 grid (.app, .app-side, .app-main)
    ├── components.css     核心组件 mock (Button / Input / Select / Table / Modal / Form / Tag 等)
    ├── components-extras.css   扩展组件 mock + SPA shell 样式 (.app-main.comp-page,
    │                           .comp-toolbar, .theme-toggle-fixed, #app-slot)
    ├── foundations-extras.css  Token 三层金字塔 / 密度三档 / 嵌套主题 / WCAG / 8 色 palette /
    │                           Sidebar 渲染规范 / Theme compare / Interaction principles / i18n
    ├── layout.css         24 栅格 + 4 断点 + 容器宽度 + 5 种页面骨架
    ├── ecosystem.css      生态库集成 10 卡 mock + 技术栈速查表
    │   ── (以下为业务扩展,服务单个 page fragment) ──
    ├── login-states.css   登录 6 态变体 + blockPuzzle 滑块拼图(login-page)
    ├── row-actions.css    行操作图标库 + 折叠下拉(row-actions)
    ├── table-pro.css      密度三档 + 列冻结 + 列宽拖 + 批量条 + 分页三态(table)
    ├── upload-pro.css     4 形态 + 大文件分片 + 进度环 + 多类型预览(upload)
    ├── modal-pro.css      Modal 复杂内嵌 (tabs / 表单分组 / 全屏)(feedback)
    ├── tree-pro.css       搜索高亮 / 懒加载 / 选择模式 / 拖拽(tree-comp)
    ├── toast-pro.css      富 Notification (按钮 / 进度 / 折叠展开)(toast)
    └── result-pro.css     Result 部分成功 (失败明细 + CSV 下载)(avatar-result)
```

**SPA 工作机制**(关键:不需要 HTTP 服务器):

1. `index.html` 加载,`<head>` inline script 立即从 `localStorage('aw-theme')` 恢复主题(避免 FOUC)
2. `<body>` 含空容器:`<aside id="app-side">` / `<div id="app-toolbar">` / `<div id="app-slot">`
3. `<script src="pages/_router.js">` 执行,渲染 sidebar(品牌区 + 43 条 7 组导航,链接形如 `#/X`)+ toolbar(面包屑 + 主题切换)
4. 监听 `hashchange`:`#/color` → 动态 `<script src="pages/color.js">` 注入到 `<head>` → script 执行后 `window.__AW_PAGES__['color']` 已注册 → 取出 HTML 字符串 inject 到 `#app-slot`
5. 已加载的 script(标签 + 全局变量)永久缓存,二次访问无重复加载
6. 因为是 `<script>` 注入而非 `fetch()`,**完全在 file:// 下工作**

每个 `pages/<id>.js` 文件结构:
```javascript
/* page: <id> (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["<id>"] = `
<div class="content">
  <section class="section" id="<id>">...</section>
</div>
`;
```

## When extending

### 新增/修改一个 section

1. 编辑 `pages/<id>.js`:`pages/<id>.js` 中模板字面量包裹的 HTML 部分。**只改字符串里的 HTML,别动 `(window.__AW_PAGES__ = ...)` 那行**
2. HTML 内禁止出现 `` ` ``(backtick)、`${...}`、`\` —— 否则破坏 template literal。当前 43 个文件均干净
3. 跨片段链接用 `href="#/other-id"`(注意带 `/`,纯 `#xxx` 是 in-page 锚点,路由不会拦截)
4. 用 `var(--aw-*)` 引用所有颜色,Light/Dark 自动跟随

### 新增一个 route

1. 在 `pages/` 创建 `<id>.js`,内容:
   ```javascript
   (window.__AW_PAGES__ = window.__AW_PAGES__ || {})["<id>"] = `
   <div class="content">
     <section class="section" id="<id>">
       <p class="section-eyebrow">分组 · 标签</p>
       <h2>组件名</h2>
       ...
     </section>
   </div>
   `;
   ```
2. 在 `pages/_router.js` 的 `ROUTES` 数组追加 `['<id>', '<中文标签>', '<分组名>']`(分组必须是已有的 7 类:导览/基础/通用组件/业务组件/页面模板/生态/规范)
3. 跑上方 step 3 的"路由器/磁盘一致性"校验

### 新增 CSS

按"基础 → 拓展 → 业务"分层挑文件。**不要**按时间线新建 CSS 文件。

**优先复用基础骨架**(7 文件):
1. 改 token 值 → `tokens.css`
2. 新增"核心组件"mock(antd v6 自带的) → `components.css`
3. 新增"扩展组件"mock(业务封装) → `components-extras.css`
4. 新增"基础规范"展示物 → `foundations-extras.css`
5. 新增"页面骨架"或栅格示意 → `layout.css`
6. 新增"复杂场景生态"mock(指向 NPM 库的视觉示意) → `ecosystem.css`

**业务扩展**(`*-pro.css`):仅当某个 page fragment 引入大量专属新类(>30 行 CSS)且仅自己用时,才新建一个 `<page>-pro.css`,在 `index.html` 末尾追加 `<link>`。当前 8 个:`login-states / row-actions / table-pro / upload-pro / modal-pro / tree-pro / toast-pro / result-pro`。新增前先看是否已有匹配文件可扩展。

## Conventions(违反会被设计审查打回)

### 命名 / 文件名
- **CSS 文件名按职责命名**,**不要带版本号**
- **CSS 类名**保持职责语义。`.search-mock-v2` 这种是 class 标识符(并列版本),不是 design system 版本徽章,可保留
- **page 文件名**与其 route id / `<section>` id / `__AW_PAGES__` 注册 key **三处一致**

### Evergreen,不是 changelog
- **禁止**任何 `<span class="new-tag">vX.X</span>` / `<span class="v">vX.X</span>` 标签
- **禁止**"v1.0 仅 X、v1.1 扩展到 Y"类比较句式叙述
- **禁止** Hero / Footer 出现具体版本号(`v1.3.0`、`2026-05` 等)
- 如需表达稳定性,文案用 "持续维护",不写日期或版本号
- 任何业务 mock 数据(如 DataCard 里的 `v3.4.2` 固件版本)是合法 placeholder,**保留**

### 颜色 / 主题
- **品牌主色** `#0052CC`,不是 antd 默认 `#1677FF` 也不是旧 Arco `#165DFF`
- **状态色**(success / warning / danger / info)是 muted enterprise tones,深于 antd 默认。在 `pages/color.js` 内有 antd token 映射表,改 token 时同步
- **Sidebar**:Light = 白底 + 3px 品牌蓝 indicator bar(参考 Linear / Notion);Dark = `#0F1115 → #1A1D23` 深色渐变。token 收口在 `tokens.css` 与 `foundations-extras.css` 顶部
- 所有颜色通过 `var(--aw-*)` 引用,**禁止硬编码 hex**
- Dark mode 通过 `[data-theme="dark"]` 覆盖,toolbar 右上角切换器持久化到 `<html data-theme>` + `localStorage('aw-theme')`

### 离线 / 自托管
- 所有第三方资源(字体 / 图标 / loader / 瓦片) 必须自托管,**禁运行时 CDN**(品牌 logo 目前仍引 CDN URL,属于历史遗留,新内容不要再加)
- license 必须 ∈ MIT / Apache-2.0 / BSD / ISC。已在 `pages/tech-stack.js` 表里固化

### 已弃功能(不要恢复)
- **State Machine 章节**(设备状态转换图)已被移除,不要重新引入。理由:定位过窄,不属于通用设计系统
- 8 状态的**矩阵**(Device Status Matrix in `pages/status-matrix.js`)是保留的;只是状态机图(state transitions)被删除

## 落地链接(信息性)

- 设计 token → `packages/design-tokens/` in `tms2.5-web-react`
- antd `theme.components` 覆盖 → `packages/design-tokens/src/antd.ts`
- 应用消费 → `packages/web`

设计系统改动后,如果同步 `@tms/design-tokens` 的 `tokens.json`,同一仓库的 `packages/web` 会自动跟随。
