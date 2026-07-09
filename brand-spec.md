# Brand Spec

## Source

- Figma file: `/Users/david/Documents/workspaces/xctech/tms25/code/Angelwatch体验重构-设计执行 去除tms1.0内容.fig`
- OpenDesign package: `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/`
- Extracted evidence: `figma/tokens.json`, `figma/tree.json`, `brand.json`, and `docs/decisions/audits/2026-07-08-figma-language-inventory.md`

This file is an implementation note for the design-system repository. Runtime pages must continue to reference repository files and `--aw-*` variables only; they must not depend on the local absolute paths above.

## Core Tokens

```css
:root {
  --bg: oklch(97.89% 0.0029 264.54);
  --surface: oklch(100.00% 0.0000 89.88);
  --fg: oklch(24.72% 0.0164 264.21);
  --muted: oklch(64.92% 0.0214 252.95);
  --border: oklch(92.56% 0.0068 277.16);
  --accent: oklch(54.94% 0.2490 263.05);
}
```

Reference hex values from the source package:

- `--bg`: `#F7F8FA`
- `--surface`: `#FFFFFF`
- `--fg`: `#1D2129`
- `--muted`: `#86909C`
- `--border`: `#E5E6EB`
- `--accent`: `#165DFF`
- Secondary accent observed in the source package: `#0FC6C2`
- Dark primary adaptation retained by the current site: `#4080FF`

### Runtime mapping（落地时用 --aw-*，不要用本文件的证据变量名）

本文件的 `--bg / --surface / --fg / --muted / --border / --accent` 是**证据 token**，仅用于记录品牌来源。运行时页面与 sibling 仓库实现一律使用 `project/styles/tokens.css` 的 `--aw-*` 体系。对应关系：

| 证据 token | 运行时 `--aw-*` | 说明 |
| --- | --- | --- |
| `--bg` (`#F7F8FA`) | `--aw-bg-page` | 页面底色；运行时实际值为 `#F5F7FA`（antd v6 neutral，以 tokens.css 为准） |
| `--surface` (`#FFFFFF`) | `--aw-bg` / `--aw-bg-elevated` | 卡片 / 面板 / 抽屉底 |
| `--fg` (`#1D2129`) | `--aw-text-1` | 主文字；运行时实际值为 `#1F2937` |
| `--muted` (`#86909C`) | `--aw-text-2` / `--aw-text-3` | 次级 / 辅助文字 |
| `--border` (`#E5E6EB`) | `--aw-border-2` / `--aw-border-3` | 表格线 / 卡片线 / 分割线 |
| `--accent` (`#165DFF`) | `--aw-primary` | 主色（主按钮 / 选中态 / 链接 / sidebar indicator） |
| (secondary `#0FC6C2`) | 暂无对应 `--aw-*` | 辅助强调，仅图表 / 少量状态用，按需在 tokens.css 扩展 |
| (dark `#4080FF`) | `--aw-primary`（`[data-theme="dark"]`） | 暗色主色已在 tokens.css 深色块覆盖 |

> 若本文件 hex 与 `tokens.css` 不一致，**以 `tokens.css` 为唯一实现值**；本文件 hex 仅作旧站溯源。状态色（success / warning / danger / info）见 `tokens.css` 的 `--aw-success*` / `--aw-warning*` / `--aw-danger*` / `--aw-info*`，均为 antd v6 "-7" 阶企业克制色。

## Fonts

- Display: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif`
- Body: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif`
- Mono: `SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace`

## Layout Posture

- Use a neutral product canvas: page background `#F7F8FA`, white surfaces, and 1px borders.
- Keep corners restrained: 4px for compact controls, 6px to 8px for cards, tables, drawers, and buttons.
- Treat `#165DFF` as a high-signal primary for selected states, primary actions, links, and the sidebar indicator; do not use it as a large decorative wash.
- Prefer dense information surfaces: filter bars, tables, cards, drawers, and result details are the dominant UI structures.
- Translate Figma evidence into reusable module rules. Do not recreate every frame, import old-system pages, or restore removed status-transition content.

### Spacing & shell 数值

- **Spacing scale**:4px base unit —— `4 / 8 / 12 / 16 / 20 / 24`(+ `10 / 15 / 30 / 40` 衍生)。运行时用 `--aw-*` 或 antd 4px 步长,不硬编码像素。
- **Shell 尺寸**:侧栏展开 ~240–247px / 折叠 64px / 顶栏 60px / 菜单项 40px(展开 logo 200×50 / 折叠 40×40)。
- **表格密度**:单元格 padding ~`9px 16px`、表头底色用 `--aw-fill-2` 非纯白、分页器 32×32 按钮。
- **Tab 标签栏**:企业 TMS 后台用"仅面包屑,无 tab strip";面包屑 + 侧栏定位通常足够,tab strip 为可选增量。

