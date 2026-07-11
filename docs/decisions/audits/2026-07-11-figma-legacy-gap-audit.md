# Figma / 旧系统业务缺口与隔离审计

## 结论

本轮在现有 66 路由一致性修正之上，补充 Figma、导出 `.fig` 与旧 `tms_web_ui` 的三源证据治理。当前设计系统继续作为工程契约权威；Figma 决定当前业务页面族；旧 Vue 系统只证明字段、状态、边界和流程，不决定组件实现、视觉、导航或技术栈。

核心决定：保持 66 个路由，不按旧系统菜单新增 MDM、Resource Package、Watch System、Focus、Kiosk 或 Launcher 页面。旧系统独有内容默认 `pending` 或 `exclude`，只有被当前有效 Figma 或现行业务契约再次证明时才能进入核心蓝图。

## 已核对来源

| 来源 | 可确认内容 | 限制 |
| --- | --- | --- |
| 当前仓库 | 66 路由、`--aw-*`、AntD v6、静态 SPA、字段锚点、现有组件契约 | 是最终工程权威 |
| Figma URL `node-id=3089-210609` | 文件与页面目录可访问；确认基础样式、登录、首页、九个业务域、国外版翻译、临时方案和内部组件页面 | 公共查看模式未暴露完整 frame ID 和全部文本节点 |
| 导出 `.fig` | 30MB ZIP，含 `canvas.fig`、缩略图、meta 与 120 个图片资源；导出时间为 2026-07-08 | `canvas.fig` 为 Kiwi 二进制，普通文本扫描不能可靠恢复节点树 |
| 既有 OpenDesign tree 审计 | 263 个新界面 / 页面帧、54 个状态帧和模块级词汇清单 | 本机当前无原 tree cache；以仓库内审计结果作为可复查快照 |
| 旧 `tms_web_ui` | 设备远控、应用、OTA、推送、地图、账户、批量分配和告警处置的真实边界 | Vue 2 / Element UI、旧路由和旧文案不可迁入 |

机器可读证据见 `docs/evidence/figma-frame-manifest.json` 与 `docs/evidence/angelwatch-business-capabilities.json`。

## Figma 采用边界

- `adopt`：应用市场、OTA、推送、数据中心、设备地图、账户信息、数据统计、增值服务、系统管理和国外版翻译。
- `adapt`：基础样式、登录和首页。视觉只转译为轻盈、冷静、洁净和效率，不复制大面积玻璃、金属或发光效果。
- `exclude`：封面/目录、临时方案、内部组件工作区、废案、占位图层、测试文件名与 mock ID。
- `pending`：无法在当前有效 Figma 中确认、只存在于旧系统的独立业务域。

## 旧系统可借鉴流程

| 流程 | 采用内容 | 不采用内容 | 当前落点 |
| --- | --- | --- | --- |
| 设备诊断 / 远控 | 等待设备、连接中、拒绝、超时、中断、结束、会话日志 | iframe 外部控制台、隐藏凭据、1 秒轮询、jQuery | `device-center-page`, `progress`, `feedback` |
| 配置 / 设备分配 | 机构树、设备列表、批量导入、冲突来源、覆盖或跳过 | `tms-*` 组件和旧权限分发 | `tree-list`, `cascader`, `user-mgmt-page` |
| 文件分发 | 上传、解析、校验、目标范围、审核、推送、结果 | 前端 ZIP/APK/证书解析、旧 Resource Package 导航 | `advanced-form`, `upload`, `ota-page`, `market-page` |
| 告警处置 | 设备、告警时间、处理方式、处理人、处理时间、结果 | Watch System 命名和旧菜单 | `map-page`, `device-center-page`, `ops-page` |
| 推送闭环 | 批次、设备明细、失败原因、重试、终止、下载清单 | 待执行、取消等与当前四态契约冲突的旧文案 | `push-page`, `avatar-result` |

## 明确隔离内容

- MDM 独立子系统：保留设备详情中的 MDM 配置版本字段，不恢复旧模块。
- Resource Package：保留资源包版本字段和通用文件分发模式，不恢复旧导航与状态页。
- Watch System / Focus Resources：不恢复旧名称和模块；围栏告警、硬件告警只复用通用处置模式。
- Kiosk / Launcher / 旧证书管理：等待当前 Figma 或现行业务契约确认。
- 旧远控 iframe：完全排除；新规范只定义安全的会话状态、反馈和审计边界。

## 需要同步的页面

- 通用 / 模式：`advanced-form`, `tree-list`, `progress`, `avatar-result`, `status-matrix`。
- 业务蓝图：`device-center-page`, `market-page`, `ota-page`, `push-page`, `map-page`, `service-page`, `user-mgmt-page`, `ops-page`。
- AI 入口：`AI_DESIGN_SYSTEM.md`, `docs/ai-coding-design-reference.md`, `ai-reference`, `cases`。

## 验收

1. 所有采用能力均有字段、状态、动作、权限、确认、反馈和路由。
2. 所有旧系统候选均有 `pending/exclude` 结论且 `corePageAllowed=false`。
3. 页面中不出现旧路由、Vue/Element 组件、外部远控 iframe、运行时 CDN 或旧模块导航。
4. Figma 263 个界面帧和 54 个状态帧在 manifest 汇总值中保持一致。
5. 66 路由、双主题、zh-CN/en-US、`file://` 与零依赖约束不变。
