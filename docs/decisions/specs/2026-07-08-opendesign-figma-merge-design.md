# OpenDesign Figma Merge Design

## Goal

Merge the local OpenDesign-generated system for `brand-customertest-3a5d64` into the current AngelWatch design-system reference site, using the offline-parsed Figma file `Angelwatch体验重构-设计执行 去除tms1.0内容.fig` as the visual source, while preserving the existing Ant Design v6 design-system rules and static SPA architecture.

## Approved Direction

Use a module-level coverage approach:

- Treat OpenDesign and Figma as supplemental coverage sources, not as a replacement design system.
- Keep the current site as a standards/reference site, not a Figma screenshot directory.
- Cover the new Figma content by business module, not by recreating all 263 new frames one by one.
- Add a small number of module blueprint pages and enhance existing foundation, component, and page-template pages.

## Source Contract

### Primary Project Rules

The current repository rules have the highest priority:

- Static SPA stays buildless and dependency-free.
- `index.html`, `pages/_router.js`, `pages/<id>.js`, and layered CSS stay the core architecture.
- All routes must work under `file://` through dynamic script injection.
- Existing Ant Design v6 token mapping approach and `--aw-*` CSS variable conventions remain authoritative.
- Brand primary is `#165DFF` for this merge, per the user decision to make OpenDesign/Figma the visual authority for primary color. This supersedes earlier `#0052CC` guidance for the implementation scope.
- Use local assets only; do not add runtime CDN dependencies.
- Keep evergreen documentation; do not add changelog-style version badges or release timelines.
- Do not restore the removed state-machine chapter or state-transition graph.

### OpenDesign/Figma Sources

Use these local sources as evidence:

- `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/figma/tree.json`
- `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/figma/tokens.json`
- `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/figma/assets/`
- `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/figma/DESIGN-context.md`
- `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/brand.json`
- `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/system/`

Use this Figma file as the binding visual source:

- `/Users/david/Documents/workspaces/xctech/tms25/code/Angelwatch体验重构-设计执行 去除tms1.0内容.fig`

These absolute paths are local evidence sources for implementation only. The runtime site must not depend on them; after merge, the site may reference only repository files such as `project/pages/`, `project/styles/`, and copied assets under `project/assets/opendesign/`.

### Exclusions

Exclude old-system, discarded, and temporary Figma content:

- `001界面设计-用户端`
- `废弃页面/功能`
- `002界面设计-运营端`
- `临时-账户信息模块相关`
- `临时 - 方案对比`
- Frames marked as `❌ 废案`

Historic Vue 2 / Element UI observations from the OpenDesign package are useful evidence, but must not override current Ant Design v6 tokens, naming, architecture, or rules.

## Current Project Inventory Requirement

Before changing runtime pages or CSS, implementation must inventory the current design-system project and record the findings in the implementation notes or a committed source/coverage page. This prevents overwriting existing standards while merging the OpenDesign material.

The inventory must cover:

- Route inventory: every `project/pages/*.js` fragment, its `__AW_PAGES__` key, corresponding `_router.js` route, label, and group.
- Existing coverage: which routes already cover foundation, general components, business components, page templates, ecosystem, and standards.
- CSS inventory: each `project/styles/*.css` file, its responsibility, and whether new rules should extend it or require a new responsibility-named CSS file.
- Token inventory: current `tokens.css` light/dark values, hardcoded color swatches used only for documentation, and any mismatch with `AGENTS.md` guidance that must be corrected or explicitly left untouched.
- Asset inventory: existing local assets, external references kept only for legacy reasons, and any new asset destinations needed for OpenDesign imports.
- Prohibited-pattern baseline: current matches for version badges, state-machine classes, old TMS 1.0 copy, runtime CDN additions, and hardcoded colors outside documentation swatches.

This inventory is a design input, not a new runtime dependency. It may be summarized in a section of the Figma coverage page instead of shipping a large generated report.

The primary-token inventory must explicitly check `project/styles/tokens.css`. As of this spec review, `--aw-primary` in light mode is measured as `#165DFF`, which matches the user-approved OpenDesign/Figma primary. Phase 1 must treat remaining `#0052CC` references in documentation, examples, and swatches as legacy design-system copy to align with `#165DFF`, while keeping dark `--aw-primary` mapped to `#4080FF`.

## Information Architecture

Keep the existing seven navigation groups. Do not create a second parallel design system.

### 导览

Enhance `overview` or `cases` with a Figma coverage matrix:

- Covered business modules.
- Source paths.
- Excluded content.
- Mapping from Figma page families to design-system pages.

### 业务组件

Enhance current business component pages with patterns found repeatedly in the new Figma file:

- Status labels and status columns.
- Table/card view switching.
- Batch operation bars.
- Device metric cards.
- App, OTA, and task cards.
- Permission trees and device assignment patterns.
- Push-result and install-detail tables.

### 页面模板

Enhance existing page templates and add a small set of module blueprint pages:

- `market-page`: app market, app management, ad management, categories, version management, review, install detail.
- `device-center-page`: device management, device detail, groups, models, parameters, connection plans, remote control.
- `map-page`: device search, location query, fence management, fence warnings.
- `service-page`: logs, lock/unlock, data-flow control, reset password, factory reset, file push, APN, WIFI, allow/deny lists.
- `ops-page`: organizations, operators, data statistics, OSS nodes, operation logs, dictionaries, menu management.

Names can be refined during implementation, but each page id, route id, and `__AW_PAGES__` key must match.

### 规范

Add or enhance a source/coverage page that records:

- The OpenDesign package path.
- The `.fig` source path.
- Included modules.
- Excluded old-system content.
- The rule that Figma augments but does not replace the current AntD v6 system.

### 基础 / 通用组件 / 生态

Only backfill evidence where it improves the current system:

- Spacing, radius, neutral tiers, and state examples.
- Table, form, modal, drawer, upload, tree, and card state patterns.
- No broad token rewrite.

## Page And Component Design

### Existing Page Enhancements

Enhance these pages with Figma-derived patterns:

- `table`: status columns, action columns, batch bars, pagination states, table/card view switching.
- `data-cards`: device cards, app cards, OTA file cards, task summary cards.
- `status-matrix`: business-domain status mapping; do not add state-machine transitions.
- `row-actions`: detail, edit, delete, push, export, sync, and overflow grouping rules.
- `upload`: add upgrade-file, import-device, and progress-dialog patterns.
- `tree-comp`: add permission tree, device assignment tree, lazy/search states.
- `feedback` / `drawer`: add modal, drawer, confirmation, and remote-control dialog patterns.
- `ota-page`: align with Figma OTA file list, file details, update push, and card view patterns.
- `push-page`: align with push task list, task detail, target-device detail, and result states.
- `user-mgmt-page`: align with organization/operator/account/permission assignment patterns.

### New Module Blueprint Pages

Each blueprint page should include:

- Coverage card: which Figma page families are represented.
- Primary list surface: table/filter/action/header structure.
- Card-view variant when Figma contains one.
- Detail surface: drawer, modal, or full page depending on information density.
- Create/edit surface: form layout, validation, upload, or assignment pattern.
- Status set: labels, colors through tokens, and operation availability.
- Operation strategy: row actions, batch actions, confirm flows.
- Empty, loading, partial-success, and failure states when relevant.
- Mapping back to existing component pages.

Blueprint pages should be written as design-system examples, not pixel-perfect screenshots.

## Data And Token Handling

### Extraction

Use OpenDesign's generated JSON as offline evidence. Do not ship large source JSON files in the runtime site.

Recommended implementation workflow:

- Read `figma/tree.json` to generate a local working inventory of canvases, sections, new frames, and state frames.
- Read `figma/tokens.json` to confirm common colors, spacing, and radius values.
- Manually translate the useful patterns into static `pages/<id>.js` fragments.
- Keep generated working notes out of runtime unless they become intentional documentation.

Use a small local helper to summarize `tree.json` instead of reading it by hand:

```bash
python3 - <<'PY'
import collections, json
from pathlib import Path

tree = Path('/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/figma/tree.json')
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
    print(f"\n# {canvas['name']} ({canvas['id']})")
    print(f"sections={len(sections)} new_frames={len(new_frames)} state_frames={len(state_frames)}")
    for section in sections:
        frames = [n for n in descendants(section['id']) if n.get('type') == 'FRAME' and ('【新界面】' in n.get('name','') or '【新页面】' in n.get('name','') or '【状态】' in n.get('name',''))]
        print(f"  - {section['name']}: {len(frames)} relevant frames")
        for frame in frames[:8]:
            print(f"      * {frame['name']} [{frame['id']}]")
        if len(frames) > 8:
            print(f"      ... +{len(frames)-8} more")
PY
```

OpenDesign-generated `figma-tokens.js`, `figma-tokens.css`, and `figma-design-system.html` are reference drafts only. Do not copy them directly into `project/`; final pages must be rewritten as static design-system fragments registered through `window.__AW_PAGES__`.

### Tokens

Preserve the current `--aw-*` token model and Ant Design v6 mapping approach. If implementation touches primary-color documentation or tokens, align with the user-approved rule that the brand primary is `#165DFF`.

Rules:

- Do not replace the `#165DFF` primary token with the older design-system `#0052CC` documentation value.
- Do not make Figma's raw fills authoritative when they conflict with current tokens.
- Use Figma colors as source observations, state examples, or aliases only when they do not conflict.
- Continue using `var(--aw-*)` in examples.
- Avoid hardcoded hex values in new CSS except where the existing style layer intentionally documents a color swatch.

Primary-color mapping must be explicit:

- `#165DFF` is the canonical light-mode brand primary. It maps to light `--aw-primary`, AntD `colorPrimary`, primary buttons, active links, selected states, sidebar active text, and sidebar indicator.
- `#4080FF` is the dark-surface primary adaptation. It maps to dark `[data-theme="dark"] --aw-primary`, dark AntD `colorPrimary`, dark selected states, and dark sidebar indicator.
- `#4080FF` must not be described as a separate brand color; it is the accessible dark-mode rendering of the same primary role.
- Older `#0052CC` references map to legacy design-system documentation only. For primary affordances in new documentation, translate them to `#165DFF` in light mode and `#4080FF` in dark mode through tokens.
- New HTML/CSS examples must reference these through `var(--aw-primary)` and related variables. Raw hex is allowed only inside documentation swatches that are explicitly showing token values.
- For success, warning, danger, and info in dark mode, prefer the existing dark token values. If Figma provides only light-mode evidence for a semantic color, mark the dark variant as "待确认" in documentation rather than inventing a new dark color.

### Assets

Copy only necessary assets into the project, preferably under:

- `project/assets/opendesign/`

Asset rules:

- Keep references local and `file://` compatible.
- Do not add runtime CDN dependencies.
- Do not copy all 119 assets unless a page uses them.
- Prefer CSS/HTML reconstructions for generic UI; use image assets only for logos, screenshots, or visual evidence that cannot be represented cleanly.
- Record asset provenance for every copied file in `project/assets/opendesign/PROVENANCE.md`.
- Each provenance row must include destination path, original OpenDesign path, source Figma node/frame or asset filename when known, and intended page/use. Add SHA-256 only for assets that are likely to drift, be replaced, or need tamper checks.

## Styling Plan

Follow the existing CSS layering:

- `tokens.css` for token additions only.
- `components.css` for core AntD-like component mocks.
- `components-extras.css` for reusable extension patterns and shell-level additions.
- `layout.css` for page skeleton and grid patterns.
- Existing `*-pro.css` files for specialized component enhancements.

If module blueprints need a substantial amount of shared module-specific styling, add one responsibility-named `*-pro.css` file:

- `blueprints-pro.css`

Then link it in `project/index.html` after `result-pro.css` with the same cache-busting query pattern as the existing stylesheets. Do not use versioned CSS filenames.

## Validation Plan

Run the existing static checks after implementation:

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
ids_in_js = set(re.findall(r"\['([^']+)',", m.group(1)))
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

Then run a local preview with no server dependency:

```bash
open project/index.html
```

Inspect representative hash routes directly in the opened browser:

- `#/overview` or `#/cases` for the coverage matrix.
- `#/table`, `#/data-cards`, `#/status-matrix`, and `#/row-actions` for shared component backfill.
- `#/market-page`, `#/device-center-page`, `#/map-page`, `#/service-page`, and `#/ops-page` for new module blueprints.
- `#/ota-page`, `#/push-page`, and `#/user-mgmt-page` for existing module templates enhanced from Figma.

During preview, verify:

- New routes render.
- Sidebar and toolbar still work.
- Light/dark theme switching still works.
- New pages remain readable on desktop and mobile.
- No old-system or discarded Figma content appears.

## Implementation Phases

### Phase 1: Inventory, Source Index, And Coverage Matrix

Inventory the current design-system project, then add coverage documentation to 导览/规范:

- Current route, CSS, token, asset, and prohibited-pattern baseline.
- Explicit primary-documentation correction from legacy `#0052CC` references to the measured and user-approved light `#165DFF`, with dark `#4080FF` kept as the dark-surface primary adaptation.
- Business module coverage.
- Source files and paths.
- Exclusion list.
- Mapping from Figma modules to design-system pages.

### Phase 2: Shared Component And Template Backfill

Enhance existing foundation, component, business-component, and template pages first, so module blueprints can point to shared rules instead of duplicating them. A single implementation round must deliver the must-have items first; nice-to-have items can move to a follow-up if the round would otherwise become too broad.

Must-have:

- `table`
- `data-cards`
- `status-matrix`
- `feedback` / `drawer`

Nice-to-have:

- `row-actions`
- `upload`
- `tree-comp`
- `ota-page`
- `push-page`
- `user-mgmt-page`

### Phase 3: Module Blueprint Pages

Add and route the module blueprint pages, aligned to the approved module coverage. A single implementation round must deliver the must-have blueprints first; nice-to-have blueprints can move to a follow-up if needed.

Must-have:

- `market-page`
- `device-center-page`

Nice-to-have:

- `map-page`
- `service-page`
- `ops-page`

Keep the existing `ota-page`, `push-page`, and `user-mgmt-page` as module-level templates rather than duplicating them as new blueprint pages.

Blueprints and templates have different roles:

- Blueprint: a cross-page business-domain abstraction focused on patterns, state sets, decision rules, and component mappings.
- Template: a reusable single-page HTML skeleton focused on structure that product teams can copy.

### Phase 4: Style, Asset, And Provenance Consolidation

Add necessary CSS and local assets while preserving current token and CSS layering rules. If assets are copied, add `project/assets/opendesign/PROVENANCE.md` in the same phase.

### Phase 5: Local Preview, Verification, Rollback, And Delivery Notes

Run validation commands, inspect key routes through `open project/index.html`, and summarize coverage, changed files, asset provenance, rollback path, and residual limitations. Keep implementation changes in reviewable commits; if validation fails after a commit, rollback should be possible with a single `git revert <commit>` for the failing implementation commit.

## Out Of Scope

- Do not modify `tms2.5-web-react` or publish design-token package changes.
- Do not turn the site into a one-page-per-frame Figma catalog.
- Do not introduce NPM, a build step, or a required HTTP server.
- Do not use external runtime fonts, scripts, icons, maps, or image CDNs.
- Do not restore TMS 1.0 content.
- Do not restore the removed state-machine graph.

## Success Criteria

The work is successful when:

- The current AntD v6 design-system rules remain intact.
- The Figma/OpenDesign new interface coverage is visible by business module.
- Shared component/template pages are enriched before module blueprints depend on them.
- The blueprint/template module list is covered as follows: `market-page` for app market; `ota-page` for OTA; `push-page` for push tasks; `device-center-page` for device center; `map-page` for device map; `service-page` for value-added services; `ops-page` for account/operations, data statistics, and system management; `user-mgmt-page` for detailed user-management examples linked from operations.
- `#165DFF` and `#4080FF` are mapped only through the approved light/dark primary token roles, and `#0052CC` is not reintroduced as a primary.
- Runtime remains static, local, buildless, and `file://` compatible.
- Local preview instructions are documented and verified.
- Copied OpenDesign assets, if any, have provenance records.
- Static validation passes.
- The site contains no prohibited version-badge, old state-machine, or old-system regression content.
