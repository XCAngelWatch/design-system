# AngelWatch Design System

设备终端管理 (TMS) 的统一视觉与交互语言。基于 Ant Design v6,覆盖品牌色 / 排版 /
间距 / 圆角 / 动效 / 国际化 / 暗色主题 / 多租户白标 / 35+ 核心 & 业务组件 /
8 页面模板 / 10 大复杂场景生态集成方案。共 43 个 section,按 `导览(1) / 基础(8) /
通用组件(13) / 业务组件(9) / 页面模板(8) / 生态(2) / 规范(2)` 7 组分类。

## 入口

**在线访问**:<https://xcangelwatch.github.io/design-system/>(主分支自动部署)

直链路由也可用,例如:
- <https://xcangelwatch.github.io/design-system/#/color>
- <https://xcangelwatch.github.io/design-system/#/buttons>
- <https://xcangelwatch.github.io/design-system/#/ecosystem>

设计系统是 **静态 SPA(单页面应用)**,通过 hash 路由(`#/color`、`#/buttons` 等)
按需用动态 `<script>` 注入各 section 片段。**无需 HTTP 服务器,直接打开就能用**:

```bash
open project/index.html
# 或:浏览器拖入 project/index.html

# 浏览器直接进入 #/overview。直链 #/color、#/buttons 等也可工作。
```

放进任何静态服务器(Nginx / Apache / Caddy / 内网 CDN)同样可分发。无构建,无 NPM 依赖。

## 部署

通过 `.github/workflows/pages.yml` 自动部署到 GitHub Pages:

- **触发**:push 到 `main` 自动跑;也可在 Actions 页面手动 `workflow_dispatch`
- **发布范围**:仅 `project/` 目录,部署后 `index.html` 位于站点根
- **一次性配置**:仓库 Settings → Pages → Build and deployment 的 Source 选 **GitHub Actions**

部署状态见 <https://github.com/XCAngelWatch/design-system/actions>。

## 结构

```
design-system/
├── README.md                          (本文件)
├── CLAUDE.md                          Claude Code 工作指南
├── .github/workflows/pages.yml        GitHub Pages 自动部署 (push main 触发)
└── project/
    ├── index.html                     SPA shell — 15 个 CSS link + 路由器入口
    ├── pages/                         (43 个 fragment + 1 个 router,共 44 文件)
    │   ├── _router.js                 路由器 + sidebar/toolbar 模板 + 主题持久化
    │   ├── overview.js                Hero + 设计原则                       (导览 1)
    │   ├── color.js ~ palette.js      色 / 字 / 距 / 圆角 / 阴影 / 动效…   (基础 8)
    │   ├── buttons.js ~ skeleton.js   按钮 / 输入 / 表格 / 反馈 / 上传…    (通用 13)
    │   ├── status-matrix.js ~ row-actions.js  设备 / 状态 / 行操作 …       (业务 9)
    │   ├── shell.js ~ dash-page.js    Login / List / Detail / Form / …     (模板 8)
    │   ├── ecosystem.js / tech-stack.js                                     (生态 2)
    │   └── do-dont.js / whitelabel.js                                       (规范 2)
    └── styles/                        (15 文件,基础骨架 7 + 业务扩展 8)
        ├── tokens.css                 设计 token (色 / 字 / 距 / 圆角 / 阴影 / 动效)
        ├── system.css                 全局 reset 与基础排版
        ├── components.css             核心组件样式 (按钮 / 输入 / 表格 / 模态等)
        ├── components-extras.css      扩展组件 + SPA shell 样式
        ├── foundations-extras.css     基础规范扩展 (Token 三层架构 / 密度三档 /
        │                              嵌套主题 / WCAG 徽章 / 8 色 palette / i18n)
        ├── layout.css                 布局 (24 栅格 / 4 档断点 / 5 种页面骨架)
        ├── ecosystem.css              生态库集成示意 + 技术栈速查表
        ├── login-states.css           登录 6 态变体 + blockPuzzle 滑块拼图
        ├── row-actions.css            行操作图标库 + 折叠下拉
        ├── table-pro.css              密度三档 + 列冻结 + 列宽拖 + 批量条 + 分页三态
        ├── upload-pro.css             4 形态 + 大文件分片 + 进度环 + 多类型预览
        ├── modal-pro.css              Modal 复杂内嵌 (tabs / 表单分组 / 全屏)
        ├── tree-pro.css               搜索高亮 / 懒加载 / 选择模式 / 拖拽
        ├── toast-pro.css              富 Notification (按钮 / 进度 / 折叠展开)
        └── result-pro.css             Result 部分成功 (失败明细 + CSV 下载)
```

**共用 vs 差异**:`index.html` + `_router.js` + 15 个 CSS 是共用骨架,所有 section 内容
独立放在 `pages/<id>.js` —— 改一个 section 不影响别的。

加载顺序基于"基础 → 拓展 → 布局 → 业务"分层,在 `index.html` 的 `<head>` 中按
此顺序声明 `<link>`。

## 落地

设计系统不是组件库,所有规范最终通过以下方式落地到 `packages/web` 应用代码:

1. **Token** — `@aw/design-tokens` 输出 CSS 变量,被 `ConfigProvider.theme.token`
   消费(antd 内置组件)与项目自身组件 (`var(--aw-*)`) 共用
2. **核心组件** — 直接使用 antd v6 + `theme.components` 定向覆盖
3. **扩展组件** — 业务团队封装,但 token / 命名 / 交互规则严格按本文档
4. **生态集成** — 复杂场景(地图 / 终端 / 拖拽 / 节点编辑器 / 虚拟表格 /
   动态表单 / 代码编辑器 等)优先用成熟 NPM 包,套用本系统的 token,不自建

### 组件选型优先级(必须遵守)

写新页面 / 新组件时,按以下顺序选型,**不能跳级**:

1. **antd v6 原生**:首选 <https://ant.design/components/overview-cn>。Form / Table /
   Layout / Menu / Modal / Drawer / Select / Cascader 等 50+ 组件覆盖绝大多数中后台场景
2. **业务自建**(`src/components/`):antd 没有覆盖的场景再考虑自建,封装时严格走 token,
   命名以业务语义为主(`ChartCard` / `KpiCard` / `SliderCaptcha` 等)
3. **第三方 NPM 包**:仅"生态集成"白名单内(参见 tech-stack 速查表)。license 必须
   ∈ MIT / Apache-2.0 / BSD / ISC

> 已弃:**`@ant-design/pro-components`**(ProForm / ProTable / ProLayout / ProCard)
> 不再维护对 antd v6 的兼容,峰会评审通过后于 2026-04 全量退役,统一改为 antd 原生 + 业务封装。

## 使用规则

- **所有颜色** 通过 CSS 变量引用,禁止硬编码 hex
- **所有可见文本** 通过 `t('namespace.key')` 包裹,禁止硬编码字符串
- **`!important`** 触发 stylelint 报错,禁用
- **新引入第三方包** license 必须 ∈ MIT / Apache-2.0 / BSD / ISC,其他需法务确认
- **第三方资源**(字体 / 图标 / Monaco loader / Leaflet 瓦片) 必须自托管,禁运行时 CDN

完整的 Do / Don't 清单见 `index.html` 末尾"规范红线"章节。
