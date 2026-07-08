# Brand Spec

## Source

- Figma file: `/Users/david/Documents/workspaces/xctech/tms25/code/Angelwatch体验重构-设计执行 去除tms1.0内容.fig`
- OpenDesign package: `/Users/david/Library/Application Support/Open Design/namespaces/release-stable/data/projects/brand-customertest-3a5d64/`
- Extracted evidence: `figma/tokens.json`, `figma/tree.json`, `brand.json`, and `docs/superpowers/audits/2026-07-08-figma-language-inventory.md`

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
