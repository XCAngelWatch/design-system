# Figma Copy Design Language Merge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the visible copy across the static AngelWatch design-system SPA so it consistently reflects the Figma/OpenDesign language for an Android terminal management system.

**Architecture:** Keep the current static SPA unchanged: `project/index.html` is the shell, `project/pages/_router.js` owns navigation labels, and each `project/pages/<id>.js` registers an HTML fragment in `window.__AW_PAGES__`. Implement copy changes through deterministic text updates, small evidence sections, and validation scripts; do not rename routes, files, or registration keys.

**Tech Stack:** Plain HTML-in-JS fragments, vanilla router, Python one-off rewrite/audit scripts, Node fragment registration checks. No NPM install, build step, runtime CDN, or HTTP server dependency.

---

## Current Dirty-Tree Notes

The main worktree currently has unrelated or already-user-requested local changes:

- `.gitignore` modified
- `project/index.html` modified for favicon insertion
- `AGENTS.md` untracked
- `project/favicon.ico` untracked

Do not stage these files during this plan unless a task explicitly modifies them. This plan should primarily stage `project/pages/*.js` and generated audit/spec/plan documentation.

## Source Spec

Implement from:

- `docs/superpowers/specs/2026-07-08-figma-copy-design-language-design.md`

Canonical product positioning:

```text
Angel Watch TMS 是面向安卓设备的终端管理系统，支撑 Android 终端的设备管理、应用分发、OTA 升级、推送任务、数据监控、账户权限和系统配置。
```

## File Structure

Create:

- `docs/superpowers/audits/2026-07-08-figma-language-inventory.md` — generated Figma text inventory and module vocabulary evidence.

Modify:

- `project/pages/_router.js` — sidebar labels only; keep route ids and groups unchanged.
- `project/pages/copywriting.js` — canonical language system and module vocabulary rules.
- `project/pages/do-dont.js` — language red lines and Android terminal positioning red lines.
- Priority module/spec pages:
  - `project/pages/overview.js`
  - `project/pages/cases.js`
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
- Secondary sweep: any remaining `project/pages/*.js` file with visible copy that fails the validation scans.

Do not modify:

- Route ids, filenames, `window.__AW_PAGES__` keys, `<section id="...">` ids.
- CSS colors or tokens unless a text string in CSS comments is inaccurate.
- `project/index.html`, except it may already be dirty from the favicon task and must be left untouched by this plan.

## Validation Commands

### Page Registration

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
if (ok !== files.length) process.exit(1);
"
```

### Router Consistency

```bash
python3 -c "
import re, glob
js = open('project/pages/_router.js').read()
m = re.search(r'var ROUTES = \[([\s\S]*?)\];', js)
ids_in_js = set(re.findall(r\"\['([^']+)',\", m.group(1)))
files = {p.split('/')[-1].rsplit('.',1)[0] for p in glob.glob('project/pages/*.js') if not p.endswith('_router.js')}
print('only in router:', ids_in_js - files)
print('only on disk:  ', files - ids_in_js)
print('match ✓' if ids_in_js == files else 'MISMATCH ✗')
if ids_in_js != files:
    raise SystemExit(1)
"
```

### HTML Balance

```bash
python3 -c "
from html.parser import HTMLParser
class C(HTMLParser):
    def __init__(self):super().__init__();self.s={}
    def handle_starttag(self,t,a):self.s[t]=(self.s.get(t,(0,0))[0]+1,self.s.get(t,(0,0))[1])
    def handle_endtag(self,t):self.s[t]=(self.s.get(t,(0,0))[0],self.s.get(t,(0,0))[1]+1)
void={'meta','link','br','hr','img','input','source','track','wbr','area','base','col','embed','param','circle','rect','path','line','polygon','ellipse','use','marker','stop','text','image','tspan'}
p=C();p.feed(open('project/index.html').read())
ok=all(o==c for t,(o,c) in p.s.items() if t not in void)
print('balanced ✓' if ok else 'UNBALANCED ✗')
if not ok:
    raise SystemExit(1)
"
```

### Forbidden Pattern Check

```bash
python3 - <<'PY'
from pathlib import Path
import re, sys
forbidden_terms = ['state-machine','sm-graph','sm-legend','sm-rules','撤回 v1','（同 v1']
forbidden_regexes = [
    ('class new-tag', re.compile(r'class=["\'][^"\']*\bnew-tag\b[^"\']*["\']')),
    ('class="v">vX.X</span>', re.compile(r'class="v">v[0-9]+\.[0-9]+ *</span>')),
]
checked_suffixes = {'.html', '.js', '.css', '.md'}
bad = []
for path in Path('project').rglob('*'):
    if not path.is_file() or path.suffix not in checked_suffixes:
        continue
    text = path.read_text(encoding='utf-8', errors='ignore')
    for term in forbidden_terms:
        if term in text:
            bad.append((str(path), term))
    for label, pattern in forbidden_regexes:
        if pattern.search(text):
            bad.append((str(path), label))
if bad:
    for path, term in bad:
        print(f'{path}: forbidden pattern {term}')
    sys.exit(1)
print('forbidden patterns clear ✓')
PY
```

### Product Language Scan

```bash
python3 - <<'PY'
from pathlib import Path
import re, sys
bad_terms = ['运输', '物流', 'fleet', 'transportation', 'logistics']
allowed_files = {
    'docs/superpowers/specs/2026-07-08-figma-copy-design-language-design.md',
    'docs/superpowers/plans/2026-07-08-figma-copy-design-language-merge.md',
}
bad = []
for path in Path('project/pages').glob('*.js'):
    text = path.read_text(encoding='utf-8', errors='ignore')
    for term in bad_terms:
        if re.search(re.escape(term), text, flags=re.I):
            bad.append((str(path), term))
if bad:
    for path, term in bad:
        print(f'{path}: inaccurate positioning term {term}')
    sys.exit(1)
print('android terminal positioning clear ✓')
PY
```

### Figma Placeholder Scan

```bash
python3 - <<'PY'
from pathlib import Path
import re, sys
patterns = [
    ('2rd-level-title', re.compile(r'2rd-level-title')),
    ('Button Text', re.compile(r'Button Text')),
    ('visible title placeholder', re.compile(r'>\s*title\s*<')),
    ('visible text placeholder', re.compile(r'>\s*text\s*<')),
    ('visible input placeholder', re.compile(r'>\s*input\s*<')),
]
allowed = {
    'project/pages/type.js',
    'project/pages/inputs.js',
    'project/pages/api.js',
    'project/pages/config-provider.js',
}
bad = []
for path in Path('project/pages').glob('*.js'):
    if str(path) in allowed:
        continue
    text = path.read_text(encoding='utf-8', errors='ignore')
    for label, pattern in patterns:
        if pattern.search(text):
            bad.append((str(path), label))
if bad:
    for path, label in bad:
        print(f'{path}: placeholder-like copy {label}')
    sys.exit(1)
print('figma placeholder copy clear ✓')
PY
```

### Primary Color Regression Scan

```bash
python3 - <<'PY'
from pathlib import Path
import sys
bad = []
for root in ['project/pages', 'project/styles']:
    for path in Path(root).rglob('*'):
        if path.is_file() and path.suffix in {'.js', '.css', '.html'}:
            if '#0052CC' in path.read_text(encoding='utf-8', errors='ignore'):
                bad.append(str(path))
if bad:
    for path in bad:
        print(path)
    sys.exit(1)
print('legacy primary clear ✓')
PY
```

---

### Task 0: Dirty-Tree Guard And Baseline

**Files:**
- Read only: repository status and current validation output.

- [ ] **Step 1: Inspect status**

Run:

```bash
git status --short --branch
```

Expected: it may show `.gitignore`, `project/index.html`, `AGENTS.md`, and `project/favicon.ico`. Do not stage these files in this plan.

- [ ] **Step 2: Confirm current branch**

Run:

```bash
git branch --show-current
```

Expected:

```text
main
```

- [ ] **Step 3: Run baseline validations**

Run the Page Registration, Router Consistency, HTML Balance, Forbidden Pattern, and Primary Color Regression commands from the Validation Commands section.

Expected current baseline:

```text
62 / 62 pages registered ✓
match ✓
balanced ✓
forbidden patterns clear ✓
legacy primary clear ✓
```

If baseline fails because of existing dirty `project/index.html`, inspect before continuing and do not overwrite the favicon change.

---

### Task 1: Generate Figma Language Inventory

**Files:**
- Create: `docs/superpowers/audits/2026-07-08-figma-language-inventory.md`

- [ ] **Step 1: Generate inventory from local OpenDesign tree**

Run:

```bash
mkdir -p docs/superpowers/audits
python3 - <<'PY'
import json, collections, re
from pathlib import Path
root = Path('/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64')
tree = root / 'figma/tree.json'
out = Path('docs/superpowers/audits/2026-07-08-figma-language-inventory.md')
targets = ['登陆页','首页','应用市场','OTA升级管理','推送任务','数据中心','设备地图','账户信息','数据统计','增值服务','系统管理']
if not tree.exists():
    out.write_text('# Figma Language Inventory\n\nLocal OpenDesign tree was not found. Use the module vocabulary from the approved spec.\n')
    raise SystemExit(0)
nodes = json.loads(tree.read_text())
by_id = {n['id']: n for n in nodes}
def child_ids(node_id):
    return by_id[node_id].get('children', [])
def collect_text(canvas):
    stack = list(child_ids(canvas['id']))
    texts = []
    while stack:
        node_id = stack.pop(0)
        node = by_id[node_id]
        if node.get('type') == 'TEXT':
            text = (node.get('characters') or node.get('name') or '').strip()
            if text and len(text) <= 64 and not re.fullmatch(r'[0-9.:%/ -]+', text):
                texts.append(text)
        stack.extend(child_ids(node_id))
    return collections.Counter(texts)
lines = [
    '# Figma Language Inventory',
    '',
    'Source: local OpenDesign `figma/tree.json` for `brand-customertest-3a5d64`.',
    '',
    'This inventory is evidence for rewriting visible copy into Android terminal management language. Placeholder design labels such as `title`, `text`, `input`, `2rd-level-title`, and `Button Text` are evidence of structure only and must not be copied as final UI text.',
]
canvases = {n.get('name'): n for n in nodes if n.get('type') == 'CANVAS'}
for name in targets:
    canvas = canvases.get(name)
    if not canvas:
        lines += ['', f'## {name}', '', 'Canvas not found.']
        continue
    counter = collect_text(canvas)
    filtered = [(text, count) for text, count in counter.most_common(80) if text not in {'title','text','input','2rd-level-title','Button Text','Text'}]
    lines += ['', f'## {name}', '', '| Text | Count |', '| --- | ---: |']
    for text, count in filtered[:40]:
        safe = text.replace('|', '\\|')
        lines.append(f'| {safe} | {count} |')
out.write_text('\n'.join(lines) + '\n')
print(out)
PY
```

Expected: `docs/superpowers/audits/2026-07-08-figma-language-inventory.md` is created and includes sections for the 11 Figma modules.

- [ ] **Step 2: Review inventory headings**

Run:

```bash
rg -n '^## ' docs/superpowers/audits/2026-07-08-figma-language-inventory.md
```

Expected headings include:

```text
## 登陆页
## 首页
## 应用市场
## OTA升级管理
## 推送任务
## 数据中心
## 设备地图
## 账户信息
## 数据统计
## 增值服务
## 系统管理
```

- [ ] **Step 3: Commit inventory**

Run:

```bash
git add docs/superpowers/audits/2026-07-08-figma-language-inventory.md
git commit -m "docs: add figma language inventory"
```

Expected: one commit with only the generated audit file.

---

### Task 2: Add Canonical Language System To Copywriting

**Files:**
- Modify: `project/pages/copywriting.js`

- [ ] **Step 1: Insert canonical positioning and module vocabulary block**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
p = Path('project/pages/copywriting.js')
s = p.read_text()
old_lede = '  <p class="lede">UI 文案是产品的口头表达 —— 一致、精简、有用，比"漂亮"更重要。本页固化术语锁定表、人称、按钮文案、错误文案、空状态文案、标点与中英混排的全部约定。所有可见字符串必须通过 <code>t(\'namespace.key\')</code> 包裹，硬编码字符串在 stylelint / lint 阶段会被拒。</p>'
new_lede = '  <p class="lede">Angel Watch TMS 是面向安卓设备的终端管理系统。文案必须围绕设备管理、应用分发、OTA 升级、推送任务、数据监控、账户权限和系统配置展开；设计系统保留必要英文组件名，但业务对象优先使用中文。</p>'
if old_lede in s:
    s = s.replace(old_lede, new_lede, 1)
block = '''

  <div class="subsection">
    <h3>Figma 语言锚点 · Android 终端管理</h3>
    <table class="map-table">
      <thead><tr><th style="width:22%">模块</th><th style="width:32%">使用词汇</th><th>写作规则</th></tr></thead>
      <tbody>
        <tr><td>登录 / 首页</td><td>账号、密码、验证码、语言切换、主题配置、欢迎回来、设备总数、激活设备、活跃设备</td><td>强调进入系统和快速扫读，不写营销口号。</td></tr>
        <tr><td>应用市场</td><td>应用管理、广告管理、应用分类、版本管理、包名、版本号、下载数、审核、上架、下架</td><td>应用相关动作必须说明对象和状态，例如“审核应用”“下架版本”。</td></tr>
        <tr><td>OTA 升级</td><td>升级文件、更新推送、基线版本、适配机型、OTA 包、推送策略、下载文件</td><td>版本、机型、范围和风险前置，避免只写“更新”。</td></tr>
        <tr><td>推送任务</td><td>批次号、推送时间、推送方式、指定设备编号、成功、失败、总数、推送设备详情</td><td>异步任务必须展示批次和结果，部分成功要给下一步。</td></tr>
        <tr><td>数据中心</td><td>设备管理、设备详情、设备分组、型号、参数模板、联机方案、远程控制、软件信息</td><td>围绕 Android 终端生命周期写，不写运输、物流或车队。</td></tr>
        <tr><td>账户 / 系统</td><td>账号、机构、权限、配置权限、重置密码、组织树、菜单、字典、操作日志</td><td>权限文案要说明作用域和后果。</td></tr>
        <tr><td>增值服务</td><td>APN、WIFI、黑白名单、文件推送、恢复出厂、日志、锁定、解锁</td><td>远程服务动作必须说明“推送到设备”或“从设备删除”。</td></tr>
      </tbody>
    </table>
  </div>
'''
if 'Figma 语言锚点 · Android 终端管理' not in s:
    s = s.replace(new_lede, new_lede + block, 1)
p.write_text(s)
PY
```

Expected: `copywriting.js` contains the new `Figma 语言锚点 · Android 终端管理` subsection.

- [ ] **Step 2: Run page registration**

Run the Page Registration command.

Expected: all pages register.

- [ ] **Step 3: Commit copywriting language system**

Run:

```bash
git add project/pages/copywriting.js
git commit -m "docs(copy): add android terminal language system"
```

Expected: one commit containing only `copywriting.js`.

---

### Task 3: Rewrite Router Labels And Page H2 Headings

**Files:**
- Modify: `project/pages/_router.js`
- Modify: all `project/pages/*.js` files listed in the `H2_LABELS` mapping below.

- [ ] **Step 1: Apply route and H2 label mapping**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
import re
ROUTE_LABELS = {
    'overview': '设计系统概览',
    'cases': '终端管理实践案例',
    'color': '色彩 Token',
    'dark': '暗色主题',
    'i18n': '多语言',
    'type': '字体与字号',
    'space': '间距',
    'radius': '圆角与阴影',
    'motion': '动效',
    'layout': '布局栅格',
    'palette': '扩展色板',
    'icons': '图标',
    'illustration': '图形化规则',
    'a11y': '无障碍',
    'responsive': '响应式断点',
    'buttons': '按钮 Button',
    'inputs': '输入与表单 Input',
    'tags': '标签与状态 Tag',
    'table': '表格 Table',
    'nav-comp': '导航与标签页',
    'menu': '菜单 Menu',
    'feedback': '反馈 Feedback',
    'progress': '进度与步骤',
    'datepicker': '日期选择',
    'upload': '上传 Upload',
    'tree-comp': '树 Tree',
    'drawer': '抽屉 Drawer',
    'toast': '提示 Toast',
    'skeleton': '骨架屏 Skeleton',
    'status-matrix': '终端状态矩阵',
    'data-cards': '设备卡片 DataCard',
    'cascader': '级联与穿梭',
    'advanced-form': '数字输入与校验',
    'tab-variants': 'Tabs 与 Popconfirm',
    'avatar-result': '头像 / 结果 / 描述',
    'empty-state': '空状态 Empty',
    'page-header': '页头 PageHeader',
    'error-page': '错误页 ErrorPage',
    'loading-levels': '加载层次 Loading',
    'row-actions': '行操作 RowActions',
    'charts': '数据图表 Charts',
    'shell': '应用外壳 Shell',
    'login-page': '登录页 LoginPage',
    'list-page': '列表页 ListPage',
    'detail-page': '详情页 DetailPage',
    'form-page': '表单页 FormPage',
    'tree-list': '树列表 TreeListLayout',
    'wizard-page': '向导页 WizardPage',
    'dash-page': '首页仪表盘 Dashboard',
    'push-page': '推送任务 PushPage',
    'ota-page': 'OTA 升级 OtaPage',
    'user-mgmt-page': '账户权限 UserMgmtPage',
    'market-page': '应用市场 MarketPage',
    'device-center-page': '数据中心 DeviceCenterPage',
    'ecosystem': '生态库集成',
    'tech-stack': '技术栈速查',
    'do-dont': '规范红线',
    'whitelabel': '白标与租户主题',
    'data-format': '数据格式',
    'copywriting': '文案规范',
    'api': '组件 API 约定',
    'config-provider': '全局配置 ConfigProvider',
}
H2_LABELS = {
    'overview': 'Angel Watch TMS 设计系统',
    'cases': '终端管理实践案例',
    'color': '色彩 Token',
    'dark': '暗色主题 Dark Mode',
    'i18n': '多语言 Internationalization',
    'type': '字体与字号 Typography',
    'space': '间距 Spacing',
    'radius': '圆角与阴影 Radius & Elevation',
    'motion': '动效 Motion',
    'layout': '布局栅格 Layout',
    'palette': '扩展色板 Extended Palette',
    'icons': '图标系统 Icons',
    'illustration': '图形化规则 Illustration',
    'a11y': '无障碍 Accessibility',
    'responsive': '响应式断点 Responsive',
    'buttons': '按钮 Button',
    'inputs': '输入与表单 Input',
    'tags': '标签与状态 Tag',
    'table': '表格 Table',
    'nav-comp': '导航与标签页 Navigation',
    'menu': '菜单 Menu',
    'feedback': '反馈 Feedback',
    'progress': '进度与步骤 Progress',
    'datepicker': '日期选择 DatePicker',
    'upload': '上传 Upload',
    'tree-comp': '树 Tree',
    'drawer': '抽屉 Drawer',
    'toast': '提示 Toast / Tooltip / Popover',
    'skeleton': '骨架屏 Skeleton',
    'status-matrix': '终端状态矩阵',
    'data-cards': '设备卡片 DataCard',
    'cascader': '级联与穿梭 Cascader / Transfer',
    'advanced-form': '数字输入与校验态',
    'tab-variants': 'Tabs 变体与 Popconfirm',
    'avatar-result': '头像 / 结果 / 描述 Avatar / Result / Description',
    'empty-state': '空状态 Empty State',
    'page-header': '页头 PageHeader',
    'error-page': '错误页 ErrorPage',
    'loading-levels': '加载层次 Loading',
    'row-actions': '行操作 RowActions',
    'charts': '数据图表 Charts',
    'shell': '应用外壳 Shell',
    'login-page': '登录页 LoginPage',
    'list-page': '列表页 ListPage',
    'detail-page': '详情页 DetailPage',
    'form-page': '表单页 FormPage',
    'tree-list': '树列表 TreeListLayout',
    'wizard-page': '向导页 WizardPage',
    'dash-page': '首页仪表盘 DashboardPage',
    'push-page': '推送任务 PushPage',
    'ota-page': 'OTA 升级 OtaPage',
    'user-mgmt-page': '账户权限 UserMgmtPage',
    'market-page': '应用市场 MarketPage',
    'device-center-page': '数据中心 DeviceCenterPage',
    'ecosystem': '生态库集成 Ecosystem',
    'tech-stack': '技术栈速查 Tech Stack',
    'do-dont': '规范红线 Do & Don\'t',
    'whitelabel': '白标与租户主题 White-label',
    'data-format': '数据格式 Data Format',
    'copywriting': '文案规范 Copywriting',
    'api': '组件 API 约定',
    'config-provider': '全局配置 ConfigProvider',
}
router = Path('project/pages/_router.js')
text = router.read_text()
for route, label in ROUTE_LABELS.items():
    text = re.sub(r"(\['" + re.escape(route) + r"',\s*)'[^']+'", r"\1'" + label + "'", text)
router.write_text(text)
for route, h2 in H2_LABELS.items():
    path = Path('project/pages') / f'{route}.js'
    if not path.exists():
        raise SystemExit(f'missing page: {path}')
    page = path.read_text()
    page, count = re.subn(r'<h2>[\s\S]*?</h2>', f'<h2>{h2}</h2>', page, count=1)
    if count != 1:
        raise SystemExit(f'h2 not replaced: {path}')
    path.write_text(page)
PY
```

Expected: route labels and H2 headings use Chinese business language with necessary English component names.

- [ ] **Step 2: Verify route consistency and page registration**

Run the Router Consistency and Page Registration commands.

Expected: route/disk match and all pages register.

- [ ] **Step 3: Commit labels and headings**

Run:

```bash
git add project/pages/_router.js project/pages/*.js
git commit -m "docs(copy): align navigation and page titles"
```

Expected: one commit containing `_router.js` and page heading changes only.

---

### Task 4: Rewrite Product Positioning And Priority Page Ledes

**Files:**
- Modify: `project/pages/overview.js`
- Modify: `project/pages/cases.js`
- Modify: `project/pages/shell.js`
- Modify: `project/pages/login-page.js`
- Modify: `project/pages/dash-page.js`
- Modify: `project/pages/market-page.js`
- Modify: `project/pages/device-center-page.js`
- Modify: `project/pages/ota-page.js`
- Modify: `project/pages/push-page.js`
- Modify: `project/pages/user-mgmt-page.js`

- [ ] **Step 1: Replace first lead paragraph on priority pages**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
import re
LEDES = {
    'overview': 'Angel Watch TMS 是面向安卓设备的终端管理系统。本设计系统把设备管理、应用分发、OTA 升级、推送任务、数据监控、账户权限和系统配置沉淀为可复用的页面、组件和文案规范。',
    'cases': '实践案例用于说明 Android 终端管理的端到端流程：选择设备、推送应用或 OTA 包、跟踪结果、处理失败项、审计操作记录。复杂场景出现争议时，优先回到这里看完整链路。',
    'shell': '应用外壳承载终端管理系统的全局导航、租户/机构切换、主题配置、语言切换和用户入口。它必须让用户快速回到设备、应用、OTA、推送和系统管理等核心模块。',
    'login-page': '登录页服务于 Android 终端管理后台，重点是安全进入系统、选择语言、记住账号和处理验证码。视觉上保持冷静、轻盈、科技感，不使用营销化大段文案。',
    'dash-page': '首页仪表盘用于快速扫读 Android 终端运行概况：设备总数、激活设备、活跃设备、锁定设备、推送结果和近期告警。它不是营销看板，而是运维入口。',
    'market-page': '应用市场覆盖应用管理、广告管理、应用分类、版本管理、审核和安装明细。它把 Figma 中的应用市场页面族抽象为列表、卡片、审核、版本与明细规则。',
    'device-center-page': '数据中心覆盖设备管理、设备详情、设备分组、型号、参数模板、联机方案与远程控制。核心目标是一套 Android 终端生命周期页面族：查找设备、判断状态、分配机构、远程处理、追踪结果。',
    'ota-page': 'OTA 升级页管理升级文件、基线版本、适配机型和更新推送。所有文案必须前置版本、机型、范围和风险，避免只写“更新”或“执行”。',
    'push-page': '推送任务页记录每个推送批次的时间、方式、目标设备和结果统计。成功、失败、部分成功都要给出可执行的下一步。',
    'user-mgmt-page': '账户权限页管理账号、机构、角色、菜单权限和数据权限。权限文案必须说明作用域、影响对象和保存后的结果。',
}
for route, lede in LEDES.items():
    path = Path('project/pages') / f'{route}.js'
    text = path.read_text()
    replacement = f'<p class="lede">{lede}</p>'
    text, count = re.subn(r'<p class="lede">[\s\S]*?</p>', replacement, text, count=1)
    if count != 1:
        raise SystemExit(f'lede not replaced: {path}')
    path.write_text(text)
PY
```

Expected: first lead paragraph in each priority page uses Android terminal management positioning.

- [ ] **Step 2: Remove inaccurate product positioning from priority pages**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
replacements = {
    '企业级设备与应用分发管理平台': '面向安卓设备的终端管理系统',
    '运输与物流': '安卓设备终端管理',
    '运输': '终端管理',
    '物流': '终端管理',
    'fleet': 'Android terminal',
    'transportation': 'Android terminal management',
    'logistics': 'terminal operations',
}
changed = []
for path in Path('project/pages').glob('*.js'):
    text = path.read_text()
    new = text
    for old, value in replacements.items():
        new = new.replace(old, value)
    if new != text:
        path.write_text(new)
        changed.append(str(path))
for path in changed:
    print(path)
PY
```

Expected: any broad logistics/transportation positioning is replaced with Android terminal language.

- [ ] **Step 3: Run product language scan**

Run the Product Language Scan command.

Expected:

```text
android terminal positioning clear ✓
```

- [ ] **Step 4: Run page registration**

Run the Page Registration command.

Expected: all pages register.

- [ ] **Step 5: Commit positioning changes**

Run:

```bash
git add project/pages/*.js
git commit -m "docs(copy): rewrite product positioning for android terminals"
```

Expected: one commit containing product-positioning text changes only.

---

### Task 5: Rewrite Module-Specific Priority Copy

**Files:**
- Modify: `project/pages/table.js`
- Modify: `project/pages/data-cards.js`
- Modify: `project/pages/status-matrix.js`
- Modify: `project/pages/feedback.js`
- Modify: `project/pages/drawer.js`
- Modify: `project/pages/empty-state.js`
- Modify: `project/pages/page-header.js`
- Modify: `project/pages/market-page.js`
- Modify: `project/pages/device-center-page.js`
- Modify: `project/pages/ota-page.js`
- Modify: `project/pages/push-page.js`

- [ ] **Step 1: Apply module vocabulary replacements**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
replacements = {
    '固件管理': 'OTA 升级管理',
    '固件版本': 'OTA 版本',
    '推送固件': '推送 OTA 包',
    '推送 v3.4.2': '推送 OTA 包',
    '回滚到 v3.4.1': '回滚 OTA 版本',
    '设备卡片视图': 'Android 终端卡片视图',
    '设备状态矩阵': '终端状态矩阵',
    '用户管理': '账户权限管理',
    '用户列表': '账户列表',
    '租户主题': '租户主题',
    '组织': '机构',
    '站点': '机构',
    '网关': '终端',
    'GW-007': 'DEV-86420075',
    'ListPage 选设备': 'ListPage 选择终端',
    'PushPage 实时': 'PushPage 跟踪推送结果',
    'DashboardPage 监控': 'DashboardPage 查看终端概况',
    '查看故障日志': '查看设备日志',
    '联系管理员': '联系系统管理员',
    '下载 CSV': '下载失败清单',
}
targets = [
    'table.js','data-cards.js','status-matrix.js','feedback.js','drawer.js','empty-state.js','page-header.js',
    'market-page.js','device-center-page.js','ota-page.js','push-page.js','cases.js','dash-page.js'
]
for name in targets:
    path = Path('project/pages') / name
    text = path.read_text()
    new = text
    for old, value in replacements.items():
        new = new.replace(old, value)
    if new != text:
        path.write_text(new)
        print(path)
PY
```

Expected: module terms align with Figma module vocabulary and Android terminal management.

- [ ] **Step 2: Add module language matrix to `do-dont.js`**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
p = Path('project/pages/do-dont.js')
s = p.read_text()
block = '''

  <div class="subsection">
    <h3>Figma 模块语言 · 必须统一</h3>
    <table class="map-table">
      <thead><tr><th style="width:24%">场景</th><th style="width:32%">推荐</th><th>禁止</th></tr></thead>
      <tbody>
        <tr><td>产品定位</td><td>面向安卓设备的终端管理系统</td><td>运输平台、物流平台、车队系统、泛企业平台</td></tr>
        <tr><td>设备对象</td><td>Android 终端、设备、设备分组、设备型号</td><td>车辆、网关、装置、机器混用</td></tr>
        <tr><td>应用市场</td><td>应用管理、应用分类、版本管理、安装明细</td><td>软件商城、资源市场、下载中心混用</td></tr>
        <tr><td>OTA</td><td>升级文件、基线版本、适配机型、更新推送</td><td>只写“更新”“执行”“开始”</td></tr>
        <tr><td>推送任务</td><td>批次号、推送方式、指定设备编号、推送设备详情</td><td>任务编号、目标列表等无业务指向的泛词</td></tr>
        <tr><td>远程服务</td><td>推送到设备、从设备删除、恢复出厂、取回日志</td><td>处理、操作、执行等缺少对象和后果的按钮</td></tr>
      </tbody>
    </table>
  </div>
'''
if 'Figma 模块语言 · 必须统一' not in s:
    s = s.replace('\n</section>', block + '\n</section>', 1)
p.write_text(s)
PY
```

Expected: `do-dont.js` includes a `Figma 模块语言 · 必须统一` subsection.

- [ ] **Step 3: Run placeholder scan and product language scan**

Run the Figma Placeholder Scan and Product Language Scan commands.

Expected both scans pass, or only report allowed component-spec files. If any priority module page is reported, replace the visible placeholder text with the module vocabulary from this task before continuing.

- [ ] **Step 4: Run page registration**

Run the Page Registration command.

Expected: all pages register.

- [ ] **Step 5: Commit module vocabulary rewrite**

Run:

```bash
git add project/pages/table.js project/pages/data-cards.js project/pages/status-matrix.js project/pages/feedback.js project/pages/drawer.js project/pages/empty-state.js project/pages/page-header.js project/pages/market-page.js project/pages/device-center-page.js project/pages/ota-page.js project/pages/push-page.js project/pages/cases.js project/pages/dash-page.js project/pages/do-dont.js
git commit -m "docs(copy): align module vocabulary with figma"
```

Expected: one commit containing priority module vocabulary updates.

---

### Task 6: Sweep Remaining Visible Copy

**Files:**
- Modify: any remaining `project/pages/*.js` that contains inaccurate positioning, Figma placeholders, or vague module language.

- [ ] **Step 1: Generate residual copy audit**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
import re
terms = {
    'inaccurate positioning': re.compile(r'运输|物流|fleet|transportation|logistics', re.I),
    'figma placeholders': re.compile(r'2rd-level-title|Button Text|>\s*title\s*<|>\s*text\s*<|>\s*input\s*<'),
    'vague failure': re.compile(r'操作失败，请稍后重试|系统异常|执行失败'),
    'vague action': re.compile(r'>确定<|>执行<|>开始<'),
}
for path in sorted(Path('project/pages').glob('*.js')):
    if path.name == '_router.js':
        continue
    text = path.read_text(encoding='utf-8', errors='ignore')
    hits = []
    for label, pattern in terms.items():
        if pattern.search(text):
            hits.append(label)
    if hits:
        print(f'{path}: ' + ', '.join(hits))
PY
```

Expected: no output for inaccurate positioning. Placeholder output may appear in component-spec pages; inspect each line before editing.

- [ ] **Step 2: Apply final safe replacements**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
safe_replacements = {
    '操作失败，请稍后重试。': '推送失败，请查看原因后重试。',
    '系统异常': '服务暂时不可用',
    '执行失败': '任务处理失败',
    '>确定<': '>确认保存<',
    '>执行<': '>推送到设备<',
    '>开始<': '>开始推送<',
    '暂无数据': '当前没有可显示的数据',
    '新增': '添加',
    '创建用户': '添加账号',
    '用户': '账号',
}
changed = []
for path in Path('project/pages').glob('*.js'):
    text = path.read_text()
    new = text
    for old, value in safe_replacements.items():
        new = new.replace(old, value)
    if new != text:
        path.write_text(new)
        changed.append(str(path))
for path in changed:
    print(path)
PY
```

Expected: only visible copy changes. If replacing `用户` makes a phrase awkward in `用户体验` or `用户输入`, restore that local phrase to `用户` before committing; acceptable terms are `用户体验`, `用户输入`, and `用户感知` when discussing general UX.

- [ ] **Step 3: Review broad replacement diff**

Run:

```bash
git diff -- project/pages | sed -n '1,260p'
```

Expected: no route ids, filenames, registration keys, or hash links changed. If any `window.__AW_PAGES__` key or `<section id="...">` changed, revert that specific line manually.

- [ ] **Step 4: Run all copy scans**

Run Product Language Scan, Figma Placeholder Scan, and Primary Color Regression Scan.

Expected:

```text
android terminal positioning clear ✓
figma placeholder copy clear ✓
legacy primary clear ✓
```

- [ ] **Step 5: Run page registration and router consistency**

Run Page Registration and Router Consistency commands.

Expected: all pages register and route/disk match.

- [ ] **Step 6: Commit final sweep**

Run:

```bash
git add project/pages/*.js
git commit -m "docs(copy): sweep visible copy for terminal language"
```

Expected: one commit with remaining visible-copy updates only.

---

### Task 7: Full Validation And Delivery Check

**Files:**
- Verify: all implementation files.

- [ ] **Step 1: Run all validation commands**

Run these commands from the Validation Commands section:

1. Page Registration
2. Router Consistency
3. HTML Balance
4. Forbidden Pattern Check
5. Product Language Scan
6. Figma Placeholder Scan
7. Primary Color Regression Scan

Expected all pass.

- [ ] **Step 2: Verify key routes statically**

Run:

```bash
node - <<'NODE'
global.window = {};
const routes = ['overview','copywriting','do-dont','cases','table','data-cards','status-matrix','feedback','drawer','market-page','device-center-page','ota-page','push-page','user-mgmt-page'];
for (const id of routes) {
  require('./project/pages/' + id + '.js');
  const html = window.__AW_PAGES__[id];
  if (!html || !html.includes('<section class="section" id="' + id + '"')) {
    throw new Error(id + ' missing registered section');
  }
  const h2 = (html.match(/<h2>([\s\S]*?)<\/h2>/) || [,''])[1].replace(/<[^>]+>/g, '').trim();
  console.log(id + ': ' + h2);
}
console.log('key route copy checks ✓');
NODE
```

Expected: each listed route prints a Chinese-first heading and the script ends with `key route copy checks ✓`.

- [ ] **Step 3: Inspect final git status**

Run:

```bash
git status --short --branch
```

Expected: implementation files are committed. Pre-existing `.gitignore`, `project/index.html`, `AGENTS.md`, and `project/favicon.ico` may remain dirty or untracked.

- [ ] **Step 4: Create validation-fix commit if needed**

If any validation fix was needed after Task 6, stage only implementation files and commit:

```bash
git add project/pages/*.js docs/superpowers/audits/2026-07-08-figma-language-inventory.md
git commit -m "test: validate figma copy language merge"
```

Expected: no commit is created if no validation fixes were needed.

## Rollback

Each task produces a small commit. To rollback one task:

```bash
git revert <commit-sha>
```

Revert newest first when undoing multiple tasks.

## Completion Notes

After implementation and validation, tell the user:

- Which modules were rewritten.
- Which validation commands passed.
- That route ids and file names were preserved.
- That existing favicon / `.gitignore` local changes were not part of this copy-language plan.
