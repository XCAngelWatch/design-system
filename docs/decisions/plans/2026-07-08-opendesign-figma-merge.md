# OpenDesign Figma Merge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Merge the OpenDesign/Figma evidence into the static AngelWatch design-system site as module-level coverage while preserving the existing Ant Design v6, `file://`, and evergreen documentation rules.

**Architecture:** Keep the current static SPA: `project/index.html` links CSS, `project/pages/_router.js` registers route metadata, and each `project/pages/<id>.js` registers HTML in `window.__AW_PAGES__`. The first implementation round delivers the approved must-have scope: inventory/source matrix, primary-standard alignment, four shared component/template backfills, and two business blueprint pages.

**Tech Stack:** Plain HTML fragments in JavaScript template literals, CSS variables in layered CSS files, vanilla JS router, Python/Node one-off validation commands. No NPM install, build step, runtime CDN, or HTTP server dependency.

---

## Scope

Implement must-have scope only:

- Phase 1: inventory/source coverage and primary-standard alignment.
- Phase 2 must-have: `table`, `data-cards`, `status-matrix`, `feedback` / `drawer`.
- Phase 3 must-have: `market-page`, `device-center-page`.
- Phase 4/5: shared CSS, route registration, validation, local preview.

Defer nice-to-have scope to a separate follow-up plan:

- `row-actions`, `upload`, `tree-comp`, `ota-page`, `push-page`, `user-mgmt-page`.
- `map-page`, `service-page`, `ops-page`.
- Copying Figma image assets. The must-have implementation uses CSS/HTML mockups only, so `project/assets/opendesign/PROVENANCE.md` is not required unless an executor chooses to copy assets.

## File Structure

Create or modify these files:

- Read `project/styles/tokens.css`: verify light primary is already `#165DFF`; keep dark primary `#4080FF`.
- Modify `project/styles/foundations-extras.css`: align any remaining legacy `#0052CC` helper values to the `#165DFF` primary family.
- Create `project/styles/blueprints-pro.css`: reusable layout classes for Figma coverage matrix and module blueprint mockups.
- Modify `project/index.html`: add the `blueprints-pro.css?v=1777279768` link immediately after `result-pro.css`.
- Modify `project/pages/cases.js`: add OpenDesign/Figma coverage matrix and implementation inventory summary.
- Modify `project/pages/color.js` and other primary-color documentation examples: align legacy `#0052CC` references to `#165DFF`.
- Modify `project/pages/table.js`: add OpenDesign list/table pattern backfill.
- Modify `project/pages/data-cards.js`: add module card pattern backfill.
- Modify `project/pages/status-matrix.js`: add business-domain status families without state transitions.
- Modify `project/pages/feedback.js`: add modal/confirm/result patterns from Figma evidence.
- Modify `project/pages/drawer.js`: add drawer/remote-control patterns from Figma evidence.
- Create `project/pages/market-page.js`: app market module blueprint.
- Create `project/pages/device-center-page.js`: device center module blueprint.
- Modify `project/pages/_router.js`: add `market-page` and `device-center-page` routes in `页面模板`.

Do not stage or modify unrelated working-tree changes such as `.gitignore`, `.idea/`, `AGENTS.md`, or `customertest-brand/` unless the user explicitly asks.

## Validation Commands

Use these commands after relevant tasks:

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
m = re.search(r'var ROUTES = \[([\s\S]*?)\];', js)
ids_in_js = set(re.findall(r\"\['([^']+)',\", m.group(1)))
files = {p.split('/')[-1].rsplit('.',1)[0] for p in glob.glob('project/pages/*.js') if not p.endswith('_router.js')}
print('only in router:', ids_in_js - files)
print('only on disk:  ', files - ids_in_js)
print('match ✓' if ids_in_js == files else 'MISMATCH ✗')
"
```

```bash
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
```

```bash
python3 - <<'PY'
from pathlib import Path
import re, sys

forbidden_terms = [
    'state-machine',
    'sm-graph',
    'sm-legend',
    'sm-rules',
    '撤回 v1',
    '（同 v1',
]
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

### Task 0: Branch And Dirty-Tree Guard

**Files:**
- Read only: repository status.

- [ ] **Step 1: Inspect current status**

Run:

```bash
git status --short
```

Expected: it may show unrelated `.gitignore`, `.idea/`, `AGENTS.md`, or `customertest-brand/` changes. Do not stage them.

- [ ] **Step 2: Create or switch to implementation branch**

Run:

```bash
git switch -c codex/opendesign-figma-merge
```

Expected: `Switched to a new branch 'codex/opendesign-figma-merge'`. If the branch already exists, run `git switch codex/opendesign-figma-merge` and confirm the same unrelated working-tree changes remain unstaged.

- [ ] **Step 3: Record ignore list for commits**

Use this staging rule for every commit:

```bash
git add project/styles/tokens.css project/styles/foundations-extras.css project/styles/blueprints-pro.css project/index.html project/pages/cases.js project/pages/color.js project/pages/table.js project/pages/data-cards.js project/pages/status-matrix.js project/pages/feedback.js project/pages/drawer.js project/pages/market-page.js project/pages/device-center-page.js project/pages/_router.js
```

Expected: only files touched by this implementation are staged.

### Task 1: Inventory And Coverage Matrix

**Files:**
- Modify: `project/pages/cases.js`
- Read optionally: `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/figma/tree.json`
- Read: `project/pages/_router.js`
- Read: `project/styles/tokens.css`

- [ ] **Step 1: Run Figma inventory helper when local evidence exists**

Run:

```bash
python3 - <<'PY'
import json
from pathlib import Path

tree = Path('/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/figma/tree.json')
if not tree.exists():
    print(f'SKIP: local OpenDesign tree not found: {tree}')
    print('Use the hardcoded coverage matrix in Step 3 and continue.')
    raise SystemExit(0)

nodes = json.loads(tree.read_text())
by_id = {n['id']: n for n in nodes}

def descendants(root_id):
    stack = list(by_id[root_id].get('children', []))
    while stack:
        node_id = stack.pop(0)
        node = by_id[node_id]
        yield node
        stack.extend(node.get('children', []))

for canvas in [n for n in nodes if n.get('type') == 'CANVAS']:
    desc = list(descendants(canvas['id']))
    sections = [n for n in desc if n.get('type') == 'SECTION']
    new_frames = [n for n in desc if n.get('type') == 'FRAME' and ('【新界面】' in n.get('name','') or '【新页面】' in n.get('name',''))]
    state_frames = [n for n in desc if n.get('type') == 'FRAME' and '【状态】' in n.get('name','')]
    print(f"{canvas['name']}: sections={len(sections)} new_frames={len(new_frames)} state_frames={len(state_frames)}")
PY
```

Expected output includes these important lines or close equivalents when the local OpenDesign file exists. If the command prints `SKIP: local OpenDesign tree not found`, continue with Step 3; the matrix content below is already the implementation source of truth for this plan.

```text
应用市场: sections=7 new_frames=32 state_frames=12
OTA升级管理: sections=1 new_frames=13 state_frames=4
推送任务: sections=1 new_frames=10 state_frames=3
数据中心: sections=8 new_frames=72 state_frames=16
设备地图: sections=3 new_frames=18 state_frames=0
账户信息: sections=2 new_frames=18 state_frames=3
数据统计: sections=3 new_frames=11 state_frames=2
增值服务: sections=8 new_frames=74 state_frames=10
系统管理: sections=5 new_frames=15 state_frames=4
```

- [ ] **Step 2: Confirm primary-token source**

Run:

```bash
grep -n 'aw-primary' project/styles/tokens.css
```

Expected current source of truth:

```text
16:  --aw-primary: #165DFF;
118:  --aw-primary: #4080FF;
```

- [ ] **Step 3: Insert coverage matrix in `project/pages/cases.js`**

Add this subsection immediately after the opening `Cases · 实践案例` lede paragraph:

The `#/market-page` and `#/device-center-page` links point to pages created later in this plan. They are forward links during intermediate task commits and must resolve after Task 7.

```html
  <div class="subsection figma-coverage">
    <h3>OpenDesign / Figma 覆盖矩阵</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:820px;line-height:1.7;margin:0 0 12px">本轮合入以本地 OpenDesign 离线解析为证据源，按业务模块沉淀设计规则，而不是逐帧复刻 Figma。运行时站点只依赖仓库内文件；本地绝对路径只用于实施期读取。</p>
    <table class="coverage-table">
      <thead><tr><th>业务域</th><th>Figma 证据</th><th>落地页面</th><th>覆盖策略</th></tr></thead>
      <tbody>
        <tr><td>应用市场</td><td>应用管理 / 广告管理 / 应用分类 / 版本管理</td><td><a href="#/market-page">market-page</a> + <a href="#/table">table</a> + <a href="#/data-cards">data-cards</a></td><td>主列表、卡片视图、审核、版本、安装明细</td></tr>
        <tr><td>OTA 升级</td><td>升级文件、更新推送、详情、状态帧</td><td><a href="#/ota-page">ota-page</a> + <a href="#/feedback">feedback</a></td><td>沿用模板页，抽取上传、确认、推送结果规则</td></tr>
        <tr><td>推送任务</td><td>任务列表、任务详情、推送设备详情</td><td><a href="#/push-page">push-page</a> + <a href="#/status-matrix">status-matrix</a></td><td>沿用模板页，抽取批量状态与结果明细</td></tr>
        <tr><td>数据中心</td><td>设备管理、设备详情、设备分组、型号、参数、联机方案、远程控制</td><td><a href="#/device-center-page">device-center-page</a></td><td>主蓝图页，覆盖设备生命周期与远程控制</td></tr>
        <tr><td>设备地图</td><td>设备查询、定位查询、围栏管理、围栏警告</td><td>follow-up: map-page</td><td>本轮记录证据，后续建地图蓝图</td></tr>
        <tr><td>账户 / 运营 / 统计 / 系统</td><td>机构、运营商、账号、统计详情、OSS、日志、字典、菜单</td><td>follow-up: ops-page + <a href="#/user-mgmt-page">user-mgmt-page</a></td><td>本轮记录证据，后续建运营蓝图</td></tr>
        <tr><td>增值服务</td><td>日志、锁定、流量、密码、恢复、文件、APN、WIFI、黑白名单</td><td>follow-up: service-page</td><td>本轮记录证据，后续建服务蓝图</td></tr>
      </tbody>
    </table>
    <div class="coverage-notes">
      <span>排除：老系统页面、废案、临时方案</span>
      <span>Token：light primary = #165DFF，dark primary = #4080FF</span>
      <span>资产：本轮不复制图片素材</span>
    </div>
  </div>
```

- [ ] **Step 4: Run page registration check**

Run the Node page registration command from the validation section.

Expected: all pages register, with the current count unchanged.

- [ ] **Step 5: Commit inventory and coverage matrix**

Run:

```bash
git add project/pages/cases.js
git commit -m "docs: add opendesign coverage matrix"
```

Expected: one commit containing only `project/pages/cases.js`.

### Task 2: Primary Standard Alignment

**Files:**
- Read: `project/styles/tokens.css`
- Modify: `project/pages/api.js`
- Modify: `project/pages/color.js`
- Modify: `project/pages/config-provider.js`
- Modify: `project/pages/dark.js`
- Modify: `project/pages/dash-page.js`
- Modify: `project/pages/ecosystem.js`
- Modify: `project/pages/illustration.js`
- Modify: `project/pages/login-page.js`
- Modify: `project/pages/palette.js`
- Modify: `project/pages/row-actions.js`
- Modify: `project/pages/shell.js`
- Modify: `project/pages/upload.js`
- Modify: `project/pages/whitelabel.js`
- Modify: `project/styles/components.css`
- Modify: `project/styles/ecosystem.css`
- Modify: `project/styles/foundations-extras.css`

- [ ] **Step 1: Verify runtime primary tokens already match the chosen source**

Run:

```bash
grep -n 'aw-primary' project/styles/tokens.css
```

Expected:

```text
16:  --aw-primary: #165DFF;
17:  --aw-primary-hover: #4080FF;
18:  --aw-primary-active: #0E42D2;
118:  --aw-primary: #4080FF;
```

Do not change the light `--aw-primary` away from `#165DFF`. It is the user-approved OpenDesign/Figma primary for this merge.

- [ ] **Step 2: Rewrite legacy primary examples from `#0052CC` to the `#165DFF` token family**

Run this script from the repository root. It only rewrites `project/pages/*.js` and `project/styles/*.css`, leaving the source `tokens.css` primary intact.

```bash
python3 - <<'PY'
from pathlib import Path

paths = list(Path('project/pages').glob('*.js')) + list(Path('project/styles').glob('*.css'))
replacements = {
    '#0052CC': '#165DFF',
    '#003D99': '#0E42D2',
    '#1A6BDB': '#4080FF',
    '#2868E0': '#4080FF',
    '#E6EFFB': '#E8F3FF',
    '#E6F0FF': '#E8F3FF',
    '#CCE0F7': '#BEDAFF',
    '#99BFEF': '#94BFFF',
    '#4A8BE0': '#4080FF',
    '#6BA3E8': '#6AA1FF',
    '#0E2748': '#0F2A52',
}

changed = []
for path in paths:
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

Expected: the script prints files that previously referenced the older `#0052CC` family, such as `project/pages/color.js`, `project/pages/config-provider.js`, `project/pages/palette.js`, `project/pages/dark.js`, `project/pages/whitelabel.js`, and related visual examples.

- [ ] **Step 3: Restore the intended `tokens.css` light token values if the script touched swatch comments only**

Run:

```bash
grep -n 'aw-primary' project/styles/tokens.css
```

Expected values remain:

```text
16:  --aw-primary: #165DFF;
17:  --aw-primary-hover: #4080FF;
18:  --aw-primary-active: #0E42D2;
19:  --aw-primary-bg: #E8F3FF;
20:  --aw-primary-bg-hover: #BEDAFF;
21:  --aw-primary-border: #94BFFF;
118:  --aw-primary: #4080FF;
```

If any of these values changed, edit `project/styles/tokens.css` back to the expected values before continuing.

- [ ] **Step 4: Verify no runtime project file still presents `#0052CC` as primary**

Run:

```bash
rg -n '#0052CC' project/pages project/styles
```

Expected: no matches. If there are matches, inspect each one; convert primary examples to the `#165DFF` family unless the text explicitly documents historical migration.

- [ ] **Step 5: Run page registration check**

Run the Node page registration command from the validation section.

Expected: all pages register.

- [ ] **Step 6: Commit primary standard alignment**

Run:

```bash
git add project/pages project/styles
git commit -m "docs: align primary color references to opendesign blue"
```

Expected: one commit containing only primary-color documentation/example updates under `project/pages` and `project/styles`.

### Task 3: Shared Blueprint CSS

**Files:**
- Create: `project/styles/blueprints-pro.css`
- Modify: `project/index.html`

- [ ] **Step 1: Create `project/styles/blueprints-pro.css`**

Create the file with this content:

```css
/* AngelWatch Design System — business blueprint coverage
   Shared styles for OpenDesign/Figma module coverage pages. */

.figma-coverage .coverage-table,
.blueprint-table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border: 1px solid var(--aw-border-3);
  border-radius: var(--aw-radius);
  background: var(--aw-bg);
}

.figma-coverage .coverage-table th,
.figma-coverage .coverage-table td,
.blueprint-table th,
.blueprint-table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--aw-border-3);
  text-align: left;
  vertical-align: top;
  font-size: 12px;
}

.figma-coverage .coverage-table th,
.blueprint-table th {
  background: var(--aw-fill-1);
  color: var(--aw-text-2);
  font-weight: 600;
}

.figma-coverage .coverage-table tr:last-child td,
.blueprint-table tr:last-child td {
  border-bottom: 0;
}

.coverage-notes,
.blueprint-notes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.coverage-notes span,
.blueprint-notes span,
.bp-pill {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 3px 8px;
  border: 1px solid var(--aw-border-2);
  border-radius: 999px;
  background: var(--aw-fill-1);
  color: var(--aw-text-2);
  font-size: 12px;
}

.bp-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.bp-card {
  border: 1px solid var(--aw-border-3);
  border-radius: var(--aw-radius-lg);
  background: var(--aw-bg);
  padding: 14px;
  box-shadow: var(--aw-shadow-1);
}

.bp-card h4 {
  margin: 0 0 6px;
  color: var(--aw-text-1);
  font-size: 14px;
}

.bp-card p {
  margin: 0;
  color: var(--aw-text-2);
  font-size: 12px;
  line-height: 1.7;
}

.bp-flow {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.bp-step {
  position: relative;
  border: 1px solid var(--aw-border-3);
  border-radius: var(--aw-radius);
  background: var(--aw-fill-1);
  padding: 12px;
}

.bp-step .num {
  display: inline-grid;
  place-items: center;
  width: 22px;
  height: 22px;
  margin-bottom: 8px;
  border-radius: 50%;
  background: var(--aw-primary);
  color: var(--aw-bg);
  font-size: 11px;
  font-weight: 700;
}

.bp-step .name {
  color: var(--aw-text-1);
  font-weight: 600;
  font-size: 13px;
}

.bp-step .desc {
  margin-top: 4px;
  color: var(--aw-text-2);
  font-size: 12px;
  line-height: 1.6;
}

.bp-shell {
  overflow: hidden;
  border: 1px solid var(--aw-border-3);
  border-radius: var(--aw-radius-lg);
  background: var(--aw-bg-page);
  box-shadow: var(--aw-shadow-1);
}

.bp-shell-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-bottom: 1px solid var(--aw-border-3);
  background: var(--aw-bg);
}

.bp-shell-body {
  display: grid;
  grid-template-columns: 180px 1fr;
  min-height: 360px;
}

.bp-side {
  padding: 12px;
  border-right: 1px solid var(--aw-border-3);
  background: var(--aw-bg);
}

.bp-nav-item {
  padding: 8px 10px;
  border-radius: var(--aw-radius-sm);
  color: var(--aw-text-2);
  font-size: 12px;
}

.bp-nav-item.active {
  background: var(--aw-primary-bg);
  color: var(--aw-primary);
  font-weight: 600;
}

.bp-main {
  padding: 14px;
}

.bp-toolbar {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 12px;
}

.bp-toolbar .input {
  flex: 1;
}

.bp-status-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 960px) {
  .bp-grid,
  .bp-flow {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .bp-shell-body {
    grid-template-columns: 1fr;
  }

  .bp-side {
    border-right: 0;
    border-bottom: 1px solid var(--aw-border-3);
  }
}

@media (max-width: 640px) {
  .bp-grid,
  .bp-flow {
    grid-template-columns: 1fr;
  }

  .bp-toolbar {
    align-items: stretch;
    flex-direction: column;
  }
}
```

- [ ] **Step 2: Link the CSS in `project/index.html`**

Add this line immediately after `styles/result-pro.css?v=1777279768` in `project/index.html`:

```html
  <link rel="stylesheet" href="styles/blueprints-pro.css?v=1777279768" />
```

Expected: CSS loads under `file://` because it uses a relative path.

- [ ] **Step 3: Verify `index.html` balance**

Run the HTML balance command from the validation section.

Expected: `balanced ✓`.

- [ ] **Step 4: Commit shared blueprint CSS**

Run:

```bash
git add project/styles/blueprints-pro.css project/index.html
git commit -m "feat(styles): add business blueprint styles"
```

Expected: one commit containing the CSS file and `index.html`.

### Task 4: Must-Have Shared Page Backfill

**Files:**
- Modify: `project/pages/table.js`
- Modify: `project/pages/data-cards.js`
- Modify: `project/pages/status-matrix.js`
- Modify: `project/pages/feedback.js`
- Modify: `project/pages/drawer.js`

- [ ] **Step 1: Add table/list patterns to `project/pages/table.js`**

Insert this subsection before the final `</section>` of the table page:

```html
  <div class="subsection">
    <h3>OpenDesign 列表模式 · 表格与卡片双视图</h3>
    <p class="lede" style="margin-bottom:12px">Figma 新界面中，应用、广告、设备、设备分组、推送任务都复用同一套列表骨架：筛选区先行、批量条只在勾选后出现、表格/卡片视图保留同一操作语义。</p>
    <table class="blueprint-table">
      <thead><tr><th>模式</th><th>出现模块</th><th>规则</th></tr></thead>
      <tbody>
        <tr><td>筛选区</td><td>应用管理 / OTA / 设备管理 / 推送任务</td><td>常用 3-4 字段直接展示，高级筛选折叠；搜索字段永远在第一位。</td></tr>
        <tr><td>表格视图</td><td>应用列表 / 设备列表 / 日志 / 字典</td><td>状态列靠近主对象；操作列固定右侧；超过 4 个动作交给 RowActions。</td></tr>
        <tr><td>卡片视图</td><td>应用管理 / 广告管理 / 设备管理 / 设备分组</td><td>卡片保留主状态、关键字段、最近操作；批量勾选入口在左上角。</td></tr>
        <tr><td>批量条</td><td>分配设备 / 推送设备 / 导出日志</td><td>只在选中后出现，显示已选数量、清空入口和 2-3 个高频批量动作。</td></tr>
        <tr><td>状态列</td><td>应用审核 / OTA 推送 / 设备在线 / 任务结果</td><td>状态文案与操作可用性绑定；不能只改变颜色而不改变可操作项。</td></tr>
      </tbody>
    </table>
  </div>
```

- [ ] **Step 2: Add card patterns to `project/pages/data-cards.js`**

Insert this subsection before the final `</section>`:

```html
  <div class="subsection">
    <h3>OpenDesign 卡片族 · 应用 / OTA / 设备</h3>
    <div class="bp-grid">
      <div class="bp-card"><h4>应用卡片</h4><p>用于应用市场卡片视图。主信息是应用名、包名、版本、审核/上架状态；动作保持查看、审核、版本、更多。</p></div>
      <div class="bp-card"><h4>OTA 文件卡片</h4><p>用于升级文件卡片视图。主信息是文件名、机型、版本、大小、上传人；状态决定是否允许更新推送。</p></div>
      <div class="bp-card"><h4>设备卡片</h4><p>用于设备管理和设备分组。主信息是设备名、SN、在线状态、所属组织；远程控制、日志、升级动作随状态启停。</p></div>
    </div>
    <div class="blueprint-notes"><span>卡片不是替代表格，而是高频巡检视图</span><span>卡片动作必须与表格操作列一致</span><span>禁用态要展示原因</span></div>
  </div>
```

- [ ] **Step 3: Add business status families to `project/pages/status-matrix.js`**

Insert this subsection after the existing status matrix table and before `</section>`:

```html
  <div class="subsection">
    <h3>业务域状态族 · 来自 Figma 新界面</h3>
    <p class="lede" style="margin-bottom:12px">这些状态用于列表、卡片、详情和结果页。这里只定义状态族与操作可用性，不定义状态转换图。</p>
    <table class="blueprint-table">
      <thead><tr><th>状态族</th><th>典型状态</th><th>适用模块</th><th>操作规则</th></tr></thead>
      <tbody>
        <tr><td>应用审核</td><td>待审核 / 已通过 / 已驳回 / 已上架 / 已下架</td><td>应用市场</td><td>待审核显示审核动作；已上架显示下架和版本；驳回显示修改后再提交。</td></tr>
        <tr><td>OTA 文件</td><td>待上传 / 已上传 / 推送中 / 部分成功 / 失败</td><td>OTA 升级</td><td>推送中禁用删除；部分成功进入 Result 明细；失败保留重试和下载失败清单。</td></tr>
        <tr><td>推送任务</td><td>草稿 / 等待中 / 执行中 / 完成 / 部分失败</td><td>推送任务、增值服务</td><td>执行中显示进度；完成只允许查看和导出；部分失败允许重试失败项。</td></tr>
        <tr><td>设备连接</td><td>在线 / 离线 / 锁定 / 故障 / 维护中</td><td>数据中心、设备地图</td><td>离线禁用远程控制；锁定只允许解锁；故障优先诊断与日志。</td></tr>
        <tr><td>权限分配</td><td>未分配 / 部分分配 / 已分配 / 冲突</td><td>账户、组织、设备分组</td><td>冲突状态必须展示来源，不允许只给红色标签。</td></tr>
      </tbody>
    </table>
  </div>
```

- [ ] **Step 4: Add modal/result patterns to `project/pages/feedback.js`**

Insert this subsection before the final `</section>` in `project/pages/feedback.js`:

```html
  <div class="subsection">
    <h3>OpenDesign 反馈模式 · 批量动作与部分成功</h3>
    <div class="bp-flow">
      <div class="bp-step"><div class="num">1</div><div class="name">动作前确认</div><div class="desc">推送、删除、重置、恢复出厂等强副作用操作使用 Modal.confirm，并明示影响数量。</div></div>
      <div class="bp-step"><div class="num">2</div><div class="name">执行中进度</div><div class="desc">大批量任务使用进度弹窗或任务详情页；Toast 只做启动成功提示。</div></div>
      <div class="bp-step"><div class="num">3</div><div class="name">终态 Result</div><div class="desc">完成、失败、部分成功都进入 Result 或详情卡；部分成功必须列出失败项。</div></div>
      <div class="bp-step"><div class="num">4</div><div class="name">下一步动作</div><div class="desc">提供重试失败项、下载 CSV、查看日志、返回列表，不让用户猜下一步。</div></div>
    </div>
  </div>
```

- [ ] **Step 5: Add remote-control drawer patterns to `project/pages/drawer.js`**

Insert this subsection before the existing `反例` subsection in `project/pages/drawer.js` (verified by `rg -n '反例' project/pages/drawer.js`):

```html
  <div class="subsection">
    <h3>OpenDesign 抽屉模式 · 详情、编辑、远程控制</h3>
    <table class="blueprint-table">
      <thead><tr><th>抽屉类型</th><th>宽度</th><th>典型内容</th><th>关闭规则</th></tr></thead>
      <tbody>
        <tr><td>快速详情</td><td>480px</td><td>设备基础信息、最近心跳、当前状态、操作入口</td><td>可 Esc / 点击遮罩关闭，不产生数据变更。</td></tr>
        <tr><td>编辑表单</td><td>480-720px</td><td>设备、分组、应用分类、参数模板的创建与修改</td><td>有未保存变更时关闭前二次确认。</td></tr>
        <tr><td>远程控制</td><td>720px 或全屏</td><td>应用程序、设备信息、定位、轨迹、上传进度</td><td>离线设备禁用入口；进行中任务关闭后转入任务详情。</td></tr>
        <tr><td>分配设备</td><td>720px</td><td>树筛选、表格勾选、导入设备、已选列表</td><td>提交前展示已选数量，失败进入部分成功 Result。</td></tr>
      </tbody>
    </table>
  </div>
```

- [ ] **Step 6: Run page registration check**

Run the Node page registration command.

Expected: all pages register.

- [ ] **Step 7: Commit shared page backfill**

Run:

```bash
git add project/pages/table.js project/pages/data-cards.js project/pages/status-matrix.js project/pages/feedback.js project/pages/drawer.js
git commit -m "docs(pages): backfill opendesign shared patterns"
```

Expected: one commit containing only the five listed page files.

### Task 5: App Market Blueprint Page

**Files:**
- Create: `project/pages/market-page.js`

- [ ] **Step 1: Create `project/pages/market-page.js`**

Create the file with this content:

```javascript
/* AngelWatch Design System — page: market-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["market-page"] = `
<div class="content">
<section class="section" id="market-page">
  <p class="section-eyebrow">页面模板 · 业务蓝图</p>
  <h2>MarketPage · 应用市场蓝图</h2>
  <p class="lede">覆盖 Figma 新界面中的应用管理、广告管理、应用分类、版本管理、审核、安装明细。它不是截图目录，而是把应用市场页面族抽象成可复用的列表、卡片、审核、版本与明细模式。</p>

  <div class="subsection">
    <h3>覆盖范围</h3>
    <table class="blueprint-table">
      <thead><tr><th>页面族</th><th>关键界面</th><th>规范落点</th></tr></thead>
      <tbody>
        <tr><td>应用管理</td><td>添加、详情、修改、审核、卡片视图</td><td>列表骨架、表单校验、审核反馈、卡片视图</td></tr>
        <tr><td>版本管理</td><td>版本管理、版本升级、安装明细、升级历史</td><td>版本表格、上传文件、推送结果、安装明细</td></tr>
        <tr><td>广告管理</td><td>主页、卡片视图、详情、新增、修改</td><td>媒体卡片、上下架状态、时间窗口</td></tr>
        <tr><td>应用分类</td><td>主页面、添加、修改、状态帧</td><td>轻量表单、排序、禁用态、删除确认</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>主列表结构</h3>
    <div class="bp-shell">
      <div class="bp-shell-head"><strong>应用市场 / 应用管理</strong><div class="row"><button class="btn">导出</button><button class="btn btn-primary">+ 添加应用</button></div></div>
      <div class="bp-shell-body">
        <div class="bp-side">
          <div class="bp-nav-item active">应用管理</div>
          <div class="bp-nav-item">广告管理</div>
          <div class="bp-nav-item">应用分类</div>
          <div class="bp-nav-item">版本审核</div>
        </div>
        <div class="bp-main">
          <div class="bp-toolbar"><input class="input" placeholder="搜索应用名 / 包名" /><div class="select"><span>全部状态 ▾</span></div><div class="select"><span>全部分类 ▾</span></div><button class="btn">筛选</button></div>
          <table class="dt">
            <thead><tr><th>应用</th><th>包名</th><th>版本</th><th>分类</th><th>状态</th><th>更新时间</th><th>操作</th></tr></thead>
            <tbody>
              <tr><td><b>Fleet Guard</b></td><td><code>com.aw.guard</code></td><td>3.5.0</td><td>安全</td><td><span class="status-dot online">已上架</span></td><td>今天 09:12</td><td><a>详情</a> · <a>版本</a> · <a>下架</a></td></tr>
              <tr><td><b>Route Sync</b></td><td><code>com.aw.route</code></td><td>2.8.1</td><td>导航</td><td><span class="status-dot upgrading">待审核</span></td><td>昨天 18:44</td><td><a>审核</a> · <a>修改</a> · <a>驳回</a></td></tr>
              <tr><td><b>Device Tools</b></td><td><code>com.aw.tools</code></td><td>1.9.4</td><td>工具</td><td><span class="status-dot offline">已下架</span></td><td>周一 11:03</td><td><a>详情</a> · <a>重新上架</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>状态与操作矩阵</h3>
    <table class="blueprint-table">
      <thead><tr><th>状态</th><th>主操作</th><th>禁用操作</th><th>反馈组件</th></tr></thead>
      <tbody>
        <tr><td>待审核</td><td>审核通过 / 驳回</td><td>下架、推送安装</td><td>Modal 表单，必须填写审核意见</td></tr>
        <tr><td>已上架</td><td>版本管理 / 下架 / 推送安装</td><td>删除</td><td>Popconfirm 或 Modal.confirm</td></tr>
        <tr><td>已下架</td><td>重新上架 / 修改</td><td>推送安装</td><td>Toast 只提示操作结果</td></tr>
        <tr><td>版本升级中</td><td>查看进度 / 安装明细</td><td>删除版本包</td><td>Result 部分成功承接失败设备</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>组件映射</h3>
    <div class="blueprint-notes"><span><a href="#/table">Table</a>：列表和安装明细</span><span><a href="#/data-cards">DataCard</a>：应用卡片视图</span><span><a href="#/feedback">Feedback</a>：审核和上下架确认</span><span><a href="#/upload">Upload</a>：版本包上传</span></div>
  </div>
</section>
</div>
`;
```

- [ ] **Step 2: Run page registration check**

Run the Node page registration command.

Expected before route registration: `market-page` registers and count increases by 1.

- [ ] **Step 3: Commit app market blueprint**

Run:

```bash
git add project/pages/market-page.js
git commit -m "feat(pages): add market blueprint"
```

Expected: one commit containing only `project/pages/market-page.js`.

### Task 6: Device Center Blueprint Page

**Files:**
- Create: `project/pages/device-center-page.js`

- [ ] **Step 1: Create `project/pages/device-center-page.js`**

Create the file with this content:

```javascript
/* AngelWatch Design System — page: device-center-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["device-center-page"] = `
<div class="content">
<section class="section" id="device-center-page">
  <p class="section-eyebrow">页面模板 · 业务蓝图</p>
  <h2>DeviceCenterPage · 数据中心蓝图</h2>
  <p class="lede">覆盖 Figma 新界面中的设备管理、设备详情、设备分组、型号、参数、联机方案与远程控制。核心目标是一套设备生命周期页面族：查找设备、判断状态、分配组织、远程处理、追踪结果。</p>

  <div class="subsection">
    <h3>覆盖范围</h3>
    <div class="bp-grid">
      <div class="bp-card"><h4>设备管理</h4><p>列表、卡片视图、添加设备、设备导入、修改设备、软件信息与设备详情。</p></div>
      <div class="bp-card"><h4>设备分组</h4><p>分组列表、分配设备、卡片布局、导入设备、选中态与冲突处理。</p></div>
      <div class="bp-card"><h4>远程控制</h4><p>设备连接、上传进度、应用程序、设备定位、设备轨迹、设备信息。</p></div>
      <div class="bp-card"><h4>基础资料</h4><p>型号管理、应用参数、参数管理、参数模板、联机方案。</p></div>
      <div class="bp-card"><h4>详情指标</h4><p>心跳、电池、充电、数据流量、存储、RAM、CPU、亮度、音量、IP 地址。</p></div>
      <div class="bp-card"><h4>状态治理</h4><p>在线、离线、故障、锁定、维护中、未激活、已退役的可操作性差异。</p></div>
    </div>
  </div>

  <div class="subsection">
    <h3>主列表结构</h3>
    <div class="bp-shell">
      <div class="bp-shell-head"><strong>数据中心 / 设备管理</strong><div class="row"><button class="btn">导入设备</button><button class="btn btn-primary">+ 添加设备</button></div></div>
      <div class="bp-shell-body">
        <div class="bp-side">
          <div class="bp-nav-item active">设备管理</div>
          <div class="bp-nav-item">设备分组</div>
          <div class="bp-nav-item">型号管理</div>
          <div class="bp-nav-item">参数模板</div>
          <div class="bp-nav-item">联机方案</div>
        </div>
        <div class="bp-main">
          <div class="bp-toolbar"><input class="input" placeholder="搜索设备名称 / SN / IMEI" /><div class="select"><span>全部状态 ▾</span></div><div class="select"><span>所属组织 ▾</span></div><button class="btn">筛选</button></div>
          <table class="dt">
            <thead><tr><th>设备</th><th>SN</th><th>所属组织</th><th>状态</th><th>电量</th><th>最后心跳</th><th>操作</th></tr></thead>
            <tbody>
              <tr><td><b>终端-上海-001</b></td><td><code>DEV-86420075</code></td><td>上海 / 黄浦</td><td><span class="status-dot online">在线</span></td><td>86%</td><td>28 秒前</td><td><a>详情</a> · <a>远程</a> · <a>日志</a></td></tr>
              <tr><td><b>终端-广州-007</b></td><td><code>DEV-86420112</code></td><td>华南 / 仓配</td><td><span class="status-dot fault">故障</span></td><td>32%</td><td>8 分钟前</td><td><a>诊断</a> · <a>日志</a> · <a>工单</a></td></tr>
              <tr><td><b>终端-成都-022</b></td><td><code>DEV-86420244</code></td><td>西南 / 仓配</td><td><span class="status-dot offline">离线</span></td><td>未知</td><td>1 天前</td><td><a>历史</a> · <span style="color:var(--aw-text-disabled)">远程</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>设备详情信息架构</h3>
    <div class="bp-flow">
      <div class="bp-step"><div class="num">1</div><div class="name">状态摘要</div><div class="desc">顶部固定设备名、SN、在线状态、所属组织、最后心跳和主操作。</div></div>
      <div class="bp-step"><div class="num">2</div><div class="name">运行指标</div><div class="desc">电池、充电、流量、存储、RAM、CPU、亮度、音量、IP 一屏可扫读。</div></div>
      <div class="bp-step"><div class="num">3</div><div class="name">远程控制</div><div class="desc">在线才开放应用程序、定位、轨迹、设备信息和上传进度入口。</div></div>
      <div class="bp-step"><div class="num">4</div><div class="name">审计记录</div><div class="desc">推送、修改、锁定、解锁、重置等写操作都要能追溯操作者和时间。</div></div>
    </div>
  </div>

  <div class="subsection">
    <h3>状态驱动操作</h3>
    <table class="blueprint-table">
      <thead><tr><th>设备状态</th><th>允许操作</th><th>禁用操作</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>在线</td><td>远程控制、推送、升级、日志、修改分组</td><td>无</td><td>高风险动作仍需二次确认。</td></tr>
        <tr><td>离线</td><td>查看历史、操作记录、修改归属</td><td>远程控制、即时推送、实时定位</td><td>禁用项必须显示离线原因。</td></tr>
        <tr><td>故障</td><td>诊断、日志、上报工单、远程重启</td><td>批量升级</td><td>故障优先级高于普通推送任务。</td></tr>
        <tr><td>锁定</td><td>解锁、查看审计</td><td>安装应用、OTA、恢复出厂</td><td>锁定是保护态，不是错误态。</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>组件映射</h3>
    <div class="blueprint-notes"><span><a href="#/table">Table</a>：设备列表和软件信息</span><span><a href="#/data-cards">DataCard</a>：设备卡片视图</span><span><a href="#/drawer">Drawer</a>：编辑与远程控制</span><span><a href="#/status-matrix">Status Matrix</a>：设备状态规则</span></div>
  </div>
</section>
</div>
`;
```

- [ ] **Step 2: Run page registration check**

Run the Node page registration command.

Expected before route registration: `device-center-page` registers and count increases by 1.

- [ ] **Step 3: Commit device center blueprint**

Run:

```bash
git add project/pages/device-center-page.js
git commit -m "feat(pages): add device center blueprint"
```

Expected: one commit containing only `project/pages/device-center-page.js`.

### Task 7: Route Registration

**Files:**
- Modify: `project/pages/_router.js`

- [ ] **Step 1: Add routes in `project/pages/_router.js`**

Insert these rows in the `页面模板` group after `user-mgmt-page`:

```javascript
    ['market-page',      'MarketPage 应用市场蓝图',        '页面模板'],
    ['device-center-page', 'DeviceCenterPage 数据中心蓝图', '页面模板'],
```

Keep array formatting aligned with nearby rows.

- [ ] **Step 2: Run route consistency check**

Run the Python route consistency command from the validation section.

Expected:

```text
only in router: set()
only on disk:   set()
match ✓
```

- [ ] **Step 3: Run page registration check**

Run the Node page registration command.

Expected: all pages register and count includes the two new page files.

- [ ] **Step 4: Commit route registration**

Run:

```bash
git add project/pages/_router.js
git commit -m "feat(router): register business blueprint pages"
```

Expected: one commit containing only `_router.js`.

### Task 8: Full Validation And Local Preview

**Files:**
- No planned modifications.
- Verify: all implementation files.

- [ ] **Step 1: Run page registration check**

Run the Node page registration command.

Expected: every file in `project/pages` except `_router.js` registers.

- [ ] **Step 2: Run route consistency check**

Run the Python route consistency command.

Expected:

```text
only in router: set()
only on disk:   set()
match ✓
```

- [ ] **Step 3: Run `index.html` balance check**

Run the HTML balance command.

Expected:

```text
balanced ✓
```

- [ ] **Step 4: Run forbidden pattern check**

Run the Python forbidden pattern command.

Expected:

```text
forbidden patterns clear ✓
```

- [ ] **Step 5: Preview locally**

Run:

```bash
open project/index.html
```

Manually inspect these hash routes in the opened browser:

```text
#/cases
#/color
#/table
#/data-cards
#/status-matrix
#/feedback
#/drawer
#/market-page
#/device-center-page
```

Expected: each page renders, sidebar active state follows route, toolbar breadcrumb updates, and light/dark theme toggle works.

- [ ] **Step 6: Final git status check**

Run:

```bash
git status --short
```

Expected: only pre-existing unrelated changes remain, or no changes remain. If implementation files are still modified, review and commit them before delivery.

- [ ] **Step 7: Delivery commit if validation fixes were needed**

If validation required final fixes, commit only those implementation files:

```bash
git add project/styles/tokens.css project/styles/foundations-extras.css project/styles/blueprints-pro.css project/index.html project/pages/cases.js project/pages/color.js project/pages/table.js project/pages/data-cards.js project/pages/status-matrix.js project/pages/feedback.js project/pages/drawer.js project/pages/market-page.js project/pages/device-center-page.js project/pages/_router.js
git commit -m "test: validate opendesign blueprint merge"
```

Expected: either a validation-fix commit is created, or no final commit is needed because earlier task commits already contain all changes.

## Rollback

Each task produces a small commit. If one task breaks the site, rollback that task with:

```bash
git revert <commit-sha>
```

If multiple task commits must be reverted, revert newest first.

## Follow-Up Plan Inputs

After the must-have implementation passes validation, create a separate plan for:

- `map-page`: device query, location query, fence management, fence warning.
- `service-page`: logs, lock/unlock, data flow, reset password, factory reset, file push, APN, WIFI, allow/deny lists.
- `ops-page`: organizations, operators, accounts, data statistics, OSS nodes, operation logs, dictionaries, menu management.
- Nice-to-have backfills: `row-actions`, `upload`, `tree-comp`, `ota-page`, `push-page`, `user-mgmt-page`.
- Replace the historical external `BRAND_LOGO` URL in `project/pages/_router.js` with a copied local asset such as `project/assets/angle.png`, then record its provenance.
