# AngelWatch TMS 设计系统 AI 编程参考

本文件给未来 AI 编程使用。目标是让 AI 在实现 TMS 2.5 页面、组件或原型时，能直接引用当前设计系统规则和 Figma 业务证据，少走偏。

## AI 读取入口

优先读取：

1. `AI_DESIGN_SYSTEM.md`：最短路径入口，说明权威顺序、页面范式、外部参考边界和提交前校验。
2. `project/index.html#/ai-reference`：网页端 AI 开发入口，适合从浏览器直接跳到列表、统计、账户权限、地图、推送和 i18n 范式。
3. `brand-spec.md`：品牌 token、字体、布局姿态和证据摘要。
4. `docs/superpowers/audits/2026-07-08-figma-project-diff-conflicts.md`：Figma 与当前项目差异 / 冲突清单。
5. `docs/superpowers/audits/2026-07-09-angelwatch-external-design-system-audit.md`：`design-system-angelwatch` 外部品牌包与当前项目的合并边界。

## 一句话定位

AngelWatch TMS 是面向 Android 终端管理的后台系统，核心是设备全生命周期管理、安全可控的应用 / 固件 / 策略分发，以及数据驱动的运营监控。

## 依据优先级

1. 当前仓库规则最高：`AGENTS.md`、`project/pages/`、`project/styles/`、`--aw-*` token、Ant Design v6、`file://` 静态 SPA。
2. 本地 Figma / OpenDesign 是业务证据来源：模块、页面族、字段、状态、操作流以 Figma 为准。
3. Figma 中明确标记为旧系统、废案、临时方案、占位图层、测试数据的内容不得进入最终规范。
4. 线上旧 Vue 2 / Element UI 只能作为历史参考，不能覆盖 TMS 2.5 的 React 19 + Vite 8 + AntD v6 约束。

## design-system-angelwatch 合并边界

外部目录 `/Users/david/Documents/workspaces/xctech/tms25/code/design-system-angelwatch` 是旧站抽取出的品牌包、token 包和界面 kit。它可以帮助校准视觉姿态，但不能替代当前设计系统。

| 外部内容 | 可合并规则 | 不可合并内容 |
| --- | --- | --- |
| `customertest-brand/DESIGN.md` | 页面背景、文本层级、4px 网格、32px 控件、60px 顶栏、67px / 220px 侧栏、表格和表单密度 | 旧 Vue 2 / Element UI 实现细节 |
| `customertest-brand/system/theme.json` | Ant Design token 对照：主色、字体、控件高度、圆角、动效、链接色 | 直接覆盖当前 `project/styles/tokens.css` |
| `customertest-brand/colors_and_type.css` | 旧站变量命名、Light / Dark 对照和工具类语义 | 复制旧变量体系到当前项目 |
| `customertest-brand/ui_kits/app` | 侧边栏、顶部工具栏、筛选栏、表格、分页的应用范式 | 旧 HTML / JS 交互代码 |
| `customertest-brand/system/artifacts/*` | 可作为品牌包生成能力的背景证据 | 营销页、海报、邮件等不作为 TMS 后台页面依据 |

处理原则：

- 当前项目继续以 `--aw-*` token、AntD v6 和静态 SPA 为准。
- 外部品牌包只补充尺寸、密度、布局姿态和旧站来源说明。
- 旧 Vue 2 / Element UI 代码、旧 Figma 排除页面、临时方案和废案不进入当前设计系统。
- 如果外部品牌包与当前 Figma 证据冲突，业务字段和页面族以 Figma 为准，工程落地以当前仓库为准。

## 视觉系统

| Token | 值 | 用途 |
| --- | --- | --- |
| 页面背景 | `#F7F8FA` | 应用主背景、设计系统内容区 |
| 面板背景 | `#FFFFFF` | 卡片、表格、抽屉、Modal |
| 主文字 | `#1D2129` | 标题、正文主信息 |
| 次级文字 | `#4E5969` / `#86909C` | 描述、辅助信息、占位提示 |
| 边框 | `#E5E6EB` / `#C9CDD4` | 表格线、卡片线、分割线 |
| 主色 | `#165DFF` | 主按钮、选中态、链接、sidebar indicator |
| 辅助强调 | `#0FC6C2` | 少量状态、图表或业务强调 |
| 暗色主色 | `#4080FF` | 暗色主题主操作和选中态 |

> 上表 hex 为旧站 / Figma 溯源值。**运行时实现以 `project/styles/tokens.css` 的 `--aw-*` 为唯一值**（如页面底色 `--aw-bg-page: #F5F7FA`、主文字 `--aw-text-1: #1F2937`，与上表略有差异）。落地时一律 `var(--aw-*)`，不硬编码上表 hex。证据 token 到 `--aw-*` 的映射见 `brand-spec.md`。

规则：

- 业务 CSS 不硬编码 hex，使用 `var(--aw-*)`。
- 主色是高信号颜色，不做大面积蓝色铺底。
- 圆角以 4px、6px、8px 为主；不要做 16px 以上的营销卡片感。
- 默认信息密度偏高：表格、筛选栏、分页、批量操作、抽屉、详情页是主要结构。

## 产品信息架构

Figma 产品导航词汇：

| 产品模块 | 设计系统落点 | 页面 / 组件参考 |
| --- | --- | --- |
| 主页 | Dashboard / Shell | `dash-page`, `shell`, `charts`, `data-cards` |
| 应用市场 | 应用、广告、分类、版本、审核、安装明细 | `market-page`, `table`, `data-cards`, `feedback`, `upload` |
| OTA升级管理 | 升级文件、基线版本、适配机型、更新推送 | `ota-page`, `upload`, `feedback`, `progress` |
| 推送任务 | 批次号、推送方式、目标设备、结果统计 | `push-page`, `status-matrix`, `avatar-result`, `toast` |
| 数据中心 | 设备管理、设备分组、型号、参数、联机方案、远程控制 | `device-center-page`, `drawer`, `table`, `data-cards` |
| 设备地图 | 设备查询、定位查询、轨迹查询、围栏管理、围栏警告 | `map-page`, `tech-stack`, `datepicker` |
| 账户信息 | 机构、运营商、角色、账号、配置权限、重置密码 | `user-mgmt-page`, `ops-page`, `tree-comp`, `cascader` |
| 数据统计 | 活跃设备、激活设备、固件统计、统计详情 | `dash-page`, `charts`, `ops-page` |
| 增值服务 | 日志、锁定解锁、流量、密码、恢复出厂、文件、APN、WIFI、黑白名单 | `service-page`, `push-page`, `feedback`, `drawer` |
| 系统管理 | OSS 节点、操作日志、字典、菜单 | `ops-page`, `user-mgmt-page`, `table`, `tree-comp` |

## 组件选择规则

| 场景 | 首选组件 | 说明 |
| --- | --- | --- |
| 长列表、筛选、分页 | `Table` | 表头浅灰、40px 默认行高、操作列右对齐 |
| 小屏巡检 / 卡片视图 | `DataCard` | 与表格同字段同操作，状态用顶部色条，不用整卡背景 |
| 创建 / 编辑 8 个字段以内 | `Modal + Form` | 阻塞式、短流程 |
| 创建 / 编辑超过 8 个字段 | `Drawer + Form` | 保留列表上下文，适合设备、分组、参数、应用分类 |
| 批量 / 不可逆操作 | `Modal.confirm` | 明示数量、对象和后果，默认焦点在取消 |
| 单行可逆或轻量确认 | `Popconfirm` | 附着在行操作旁 |
| 异步批量终态 | `Result` | 必须给失败项、重试、下载失败清单、查看日志 |
| 远程任务详情 | `Drawer` 或任务详情页 | 进行中任务关闭后必须能从任务列表继续追踪 |
| 组织 / 权限 / 设备分配 | `Tree`, `Transfer`, `Cascader` | 支持搜索、懒加载、半选态、冲突说明 |
| 地图 / 轨迹 / 围栏 | 成熟地图库 | 不自建地图；瓦片和资源必须自托管 |

## 模块字段锚点

### 应用市场

必须优先使用：应用管理、广告管理、应用分类、版本管理、包名、版本号、安装包、下载数、审核、上架、下架、安装明细、所属机构、操作人、更新时间。

实现提示：

- 应用列表必须支持表格和卡片视图。
- 待审核状态显示“审核 / 驳回”；已上架显示“版本 / 下架 / 推送安装”；已下架显示“重新上架 / 修改”。
- 上传安装包走 `Upload`；审核走 `Modal`；安装结果走 `Result`。

### OTA升级管理

必须优先使用：升级文件、版本号、基线版本、适配机型、安卓版本、大小、是否强制、可见范围、更新推送、配置文件、推送固件包。

实现提示：

- 升级文件详情必须展示基线版本、适配机型、安卓版本和大小。
- 更新推送前必须说明目标范围和风险。
- 推送中禁用删除；部分成功进入失败明细。

### 推送任务

必须优先使用：批次号、推送时间、推送方式、消息类型、指定设备编号、推送目标、设备推送结果统计、推送设备详情、成功、失败、总数。

实现提示：

- 任务列表展示批次、目标、状态、成功 / 失败 / 总数。
- 任务详情包含目标设备明细和失败原因。
- 部分失败必须支持重试失败项。

### 数据中心

必须优先使用：设备管理、设备详情、设备分组、型号管理、参数管理、参数模板、联机方案、设备型号、系统版本、固件版本、电池电量、IP地址、DSN、IMEI-IMSI-icc_id、位置上报、欠费设备。

实现提示：

- 设备详情首屏展示状态、SN、所属机构、最后心跳、系统 / 固件版本。
- 在线设备开放远程控制；离线设备禁用即时推送、实时定位和远程控制。
- 参数模板和联机方案属于配置资产，需支持分配设备和导入设备。

### 增值服务

必须优先使用：获取设备日志、锁定解锁设备、数据流量控制、重置设备密码、恢复出厂设置、推送文件到设备、APN设置、WIFI设置、应用黑白名单、推送记录、推送设备详情。

实现提示：

- 所有服务动作都要说明“推送到设备”或“从设备删除”。
- 恢复出厂、锁定、解锁、删除配置属于强副作用操作，必须二次确认。
- 推送记录和推送设备详情复用 `push-page` 的结果结构。

### 设备地图

必须优先使用：设备查询、定位查询、轨迹查询、围栏管理、围栏警告、开始时间、结束时间、起点、终点。

实现提示：

- 地图页不是普通表格页，主视图应是地图 + 右侧/底部结果面板。
- 时间范围用 `DatePicker / TimePicker`。
- 围栏绘制必须有保存、取消、编辑、删除和警告详情。

### 国外版翻译 / i18n

Figma 证据来源于“国外版翻译” canvas，包含设备地图轨迹查询、围栏绘制、应用管理、数据中心设备管理、设备详情和国外版侧边栏。

必须优先覆盖：

- 轨迹查询：Track Query、Start Time、End Time、Start Point、End Point、Device Location。
- 围栏绘制：Fence Management、Fence Alert、Add / Save / Cancel / Edit / Delete。
- 应用管理状态：Draft、Released、Removed。
- 数据中心：Device Management、Device Grouping、Model Management、Parameter Management、Online Scheme、Overdue Devices。
- 导航：Home、Application Management、OTA Management、Push Task、Data Center、Account Information、Device Map、Statistics、Value-added Services、System Management。

实现提示：

- 每个国外版对照页面都要生成 zh-CN / en-US / es-419 / pt-BR 四列回归截图。
- 日期、数字、货币、坐标、百分比必须走 `Intl.*Format`，不得字符串拼接。
- 设备详情字段拆成 label key 与 value formatter；不要把“固件版本 vX / 电量 20%”写成一个翻译字符串。
- 英文可将 Figma 的 `WIFI设置` 翻译为 Wi-Fi Settings，但中文业务词继续保留 WIFI。

### 数据统计

必须优先使用：数据统计、设备活跃数据、活跃设备、活跃设备数、设备激活数据、激活设备、设备激活数、固件统计、统计详情、升级文件统计详情、近7日、当日活跃、七天内活跃、30天内活跃、当日激活、七天内激活、30天内激活。

实现提示：

- 首页 `dash-page` 只展示概览和异常入口；统计详情页负责筛选、趋势、明细、导出。
- 活跃设备详情包含设备编号、机构、最后活跃时间、活跃天数、在线时长、位置上报状态。
- 激活设备详情包含设备编号、激活时间、所属机构、设备型号、系统版本、激活来源。
- 固件统计详情包含固件版本、升级文件、适配机型、目标设备、成功、失败、升级中、失败原因。
- 点击图表点位或柱条后，详情表必须同步筛选，并显示当前筛选条件。
- 导出报表必须写入统计口径、时间范围、机构、操作者和导出时间。

### 系统 / 运营

必须优先使用：机构管理、运营商管理、角色管理、账号管理、配置权限、OSS节点、操作日志、字典管理、菜单管理。

实现提示：

- 机构 / 角色 / 菜单适合树结构，配置权限必须支持半选态和冲突提示。
- 机构管理字段：机构编码、机构名称、上级机构、所属运营商、设备数量。
- 运营商管理字段：运营商名称、运营商别名、网络定位类型、定位应用SHA1值、定位Key值、显示地图Key值。
- 账号管理字段：登录账号、账号名称、姓名、电子邮箱、角色、机构、状态、备注。
- 重置密码、停用账号、删除角色必须二次确认；默认焦点不得落在确认按钮。
- 分配设备支持筛选、批量勾选、导入和冲突设备提示。
- 操作日志必须包含操作人、时间、请求地址、请求方式、操作方法、请求参数、状态。
- 字典管理需要字典类型、字典名称、字典标签、字典键值、字典排序。

## Figma 词汇规范化

| Figma 原词 | 最终规范用词 | 说明 |
| --- | --- | --- |
| 登陆页 | 登录页 | 产品 UI 统一用“登录” |
| 记住登陆状态 | 记住登录状态 | 修正常用字 |
| 参数模版 | 参数模板 | UI 和文档统一为“模板” |
| OTA升级管理 | OTA升级管理 / OTA 升级 | 产品导航可无空格，设计系统说明可加空格 |
| WIFI设置 | WIFI设置 | 按 Figma 业务词保留；英文 i18n 可转 Wi-Fi |
| mock 文件名 / 包名 / 技术 ID | 不进入最终文案 | 只作为结构证据 |
| `❌ 废案` | 排除 | 明确标记废案，不迁移 |

## AI 编程提示词模板

实现新页面时可使用：

```text
按 AngelWatch TMS 设计系统实现 [模块名] 页面。优先遵循 docs/ai-coding-design-reference.md、AGENTS.md 和 project/pages 中已有模式。业务词汇以 Figma 证据为准，但不得复制旧系统、废案、临时方案或占位图层。使用 --aw-* token，不硬编码业务颜色。组件优先使用 AntD v6 原生 + 项目封装，不使用 Pro Components。页面需要包含筛选、表格/卡片、详情/抽屉、状态、批量操作、空/加载/错误/部分成功状态，并通过现有静态 SPA 校验。
```

实现组件时可使用：

```text
按 AngelWatch TMS 组件规范实现 [组件名]。API 需支持 className/style/data-*/aria-* 透传，受控/非受控模式清晰，文案走 i18n，主题走 --aw-* token 和 ConfigProvider。状态必须用颜色 + 文案 + 形状，不只靠颜色。破坏性操作默认焦点不得落在确认按钮。
```

## 提交前验收

必须运行：

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

必须扫描：

```bash
python3 - <<'PY'
from pathlib import Path
import re, sys
bad = []
for path in Path('project').rglob('*'):
    if not path.is_file() or path.suffix not in {'.html', '.js', '.css', '.md'}:
        continue
    text = path.read_text(encoding='utf-8', errors='ignore')
    for term in ['state-machine', 'sm-graph', 'sm-legend', 'sm-rules', '撤回 v1', '（同 v1']:
        if term in text:
            bad.append((str(path), term))
    for label, pattern in [
        ('class new-tag', re.compile(r'class=["\\'][^"\\']*\\bnew-tag\\b[^"\\']*["\\']')),
        ('class="v">vX.X</span>', re.compile(r'class="v">v[0-9]+\\.[0-9]+ *</span>')),
    ]:
        if pattern.search(text):
            bad.append((str(path), label))
if bad:
    for path, term in bad:
        print(f'{path}: forbidden pattern {term}')
    sys.exit(1)
print('forbidden patterns clear ✓')
PY
```

```bash
python3 - <<'PY'
from pathlib import Path
import re
placeholder = re.compile(r'2rd-level-title|Button Text|>\\s*title\\s*<|>\\s*text\\s*<|>\\s*input\\s*<')
legacy = []
placeholders = []
for path in list(Path('project/pages').glob('*.js')) + list(Path('project/styles').glob('*.css')):
    text = path.read_text(encoding='utf-8', errors='ignore')
    if '#0052CC' in text:
        legacy.append(str(path))
    if path.suffix == '.js' and placeholder.search(text):
        placeholders.append(str(path))
if legacy:
    print('legacy #0052CC found:')
    print('\\n'.join(legacy))
    raise SystemExit(1)
if placeholders:
    print('figma placeholders found:')
    print('\\n'.join(placeholders))
    raise SystemExit(1)
print('legacy primary and figma placeholder scans clear ✓')
PY
```
