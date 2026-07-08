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
- Brand primary remains `#0052CC` per repository guidance; OpenDesign's historic `#165DFF` must not be imported as the new primary.
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

### Exclusions

Exclude old-system, discarded, and temporary Figma content:

- `001界面设计-用户端`
- `废弃页面/功能`
- `002界面设计-运营端`
- `临时-账户信息模块相关`
- `临时 - 方案对比`
- Frames marked as `❌ 废案`

Historic Vue 2 / Element UI observations from the OpenDesign package are useful evidence, but must not override current Ant Design v6 tokens, naming, architecture, or rules.

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

### Tokens

Preserve the current `--aw-*` token model and Ant Design v6 mapping approach. If implementation touches primary-color documentation or tokens, align with the repository rule that the brand primary is `#0052CC`, not OpenDesign's historic `#165DFF`.

Rules:

- Do not replace the primary token with OpenDesign's historic Vue/Element source.
- Do not make Figma's raw fills authoritative when they conflict with current tokens.
- Use Figma colors as source observations, state examples, or aliases only when they do not conflict.
- Continue using `var(--aw-*)` in examples.
- Avoid hardcoded hex values in new CSS except where the existing style layer intentionally documents a color swatch.

### Assets

Copy only necessary assets into the project, preferably under:

- `project/assets/opendesign/`

Asset rules:

- Keep references local and `file://` compatible.
- Do not add runtime CDN dependencies.
- Do not copy all 119 assets unless a page uses them.
- Prefer CSS/HTML reconstructions for generic UI; use image assets only for logos, screenshots, or visual evidence that cannot be represented cleanly.

## Styling Plan

Follow the existing CSS layering:

- `tokens.css` for token additions only.
- `components.css` for core AntD-like component mocks.
- `components-extras.css` for reusable extension patterns and shell-level additions.
- `layout.css` for page skeleton and grid patterns.
- Existing `*-pro.css` files for specialized component enhancements.

If module blueprints need a substantial amount of shared module-specific styling, add one responsibility-named file:

- `business-blueprints.css`

Then link it in `project/index.html` after the existing business extension files. Do not use versioned CSS filenames.

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
m = re.search(r'var ROUTES = \\[([\\s\\S]*?)\\];', js)
ids_in_js = set(re.findall(r\"\\['([^']+)',\", m.group(1)))
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
grep -rnE 'class="new-tag"|class="v">v[0-9]+\\.[0-9]+ *</span>|state-machine|sm-graph|sm-legend|sm-rules|"v1\\.0/|撤回 v1|（同 v1' project/
```

Also open the site locally and inspect:

- New routes render.
- Sidebar and toolbar still work.
- Light/dark theme switching still works.
- New pages remain readable on desktop and mobile.
- No old-system or discarded Figma content appears.

## Implementation Phases

### Phase 1: Source Index And Coverage Matrix

Add coverage documentation to 导览/规范:

- Business module coverage.
- Source files and paths.
- Exclusion list.
- Mapping from Figma modules to design-system pages.

### Phase 2: Module Blueprint Pages

Add and route the module blueprint pages:

- `market-page`
- `device-center-page`
- `map-page`
- `service-page`
- `ops-page`

### Phase 3: Existing Page Backfill

Enhance the existing component and template pages listed in this spec so the module pages can point to shared rules instead of duplicating every detail.

### Phase 4: Style And Asset Consolidation

Add necessary CSS and local assets while preserving current token and CSS layering rules.

### Phase 5: Verification And Delivery Notes

Run validation commands, inspect key pages, and summarize coverage, changed files, and residual limitations.

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
- The module blueprint pages cover the major Figma domains: app market, OTA, push tasks, device center, device map, account/operations, data statistics, value-added services, and system management.
- Existing component/template pages are enriched with the cross-cutting patterns from Figma.
- Runtime remains static, local, buildless, and `file://` compatible.
- Static validation passes.
- The site contains no prohibited version-badge, old state-machine, or old-system regression content.
