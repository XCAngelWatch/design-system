# 2026-07-09 旧 tms_web_ui 取其精华去其糟粕 — 借鉴审计

> 源:`/Users/david/Documents/workspaces/xctech/tms/code/tms_web_ui`(旧 Vue 2.6 + Element UI 2.15 + vuex4 + echarts5.4 + sass,118 条路由)。目标是对照当前 design-system(React 19 + AntD v6 + `--aw-*`),提取**真实落地、与新栈不冲突**的业务知识精华,弃除 Vue2/Element 实现糟粕。依据优先级:当前仓库规范 > 旧 tms_web_ui 代码 > Figma 视觉证据。

## 结论速览

| 维度 | 精华价值 | 优先级 |
| --- | --- | --- |
| **状态机纠正** | 新系统 status-matrix 多处状态**写错**(OTA/推送/应用),旧系统是后端真实枚举 | **P0(正确性 bug)** |
| 业务字段补充 | 设备详情 35 字段、应用四段表单、围栏结构、参数配置、账号 MFA/时区 | P1 |
| operationType 词汇表 | 增值服务真实 27+ 种,新系统只列 9 类 | P1 |
| i18n 四语真实文案 | 围栏/设备/推送/应用/机构/告警 已落地四语,**生产措辞比 Figma 更专业** | P1 |
| 业务流闭环 | OTA 推送三段弹窗、推送结果闭环、上下架审批、围栏绘制 | P2 |
| token/字典/姿态 | brand-spec 证据链确认无误;补 spacing scale、shell 尺寸、时区/错误码/国家字典 | P2 |
| 路由广度 gap | MDM 子系统、9 类推送策略、kiosk/launcher/广告/证书、resourcePackage 新系统未覆盖 | P2(取舍) |

---

## P0 — 状态机纠正(最高优先级,新系统有正确性 bug)

> 旧系统状态是后端真实 code 枚举,新系统部分状态"想当然"。以下为新系统现状 → 旧系统真实值,证据见 `tms_web_ui/src/views/`。

### 1. OTA 文件生命周期(新系统写错)
- **新系统现状** `status-matrix.js:32`:OTA 文件 = 待上传 / 已上传 / 推送中 / 部分成功 / 失败。**这是推送任务状态,张冠李戴到 OTA 文件**。
- **旧系统真实**(`views/ota/index.vue:182-405` `state` 字段):

| code | 中文 | EN | 允许操作 |
| --- | --- | --- | --- |
| -1 | 草稿 | Draft | 编辑/删除/申请上架 |
| 0 | 审核中 | Reviewing | 上架审核 |
| 1 | 已上架 | Published | 下架/推送到设备 |
| 2 | 已拒绝 | Rejected | 编辑/删除/申请上架 |
| 3 | 驳回 | Reject | 编辑/删除/申请上架 |
| 4 | 已下架 | Unpublished | 编辑/删除/重新上架 |
| 9 | 定期上架 | Regular Publish | 排程态 |

- **应改**:`status-matrix.js:32` OTA 文件行 + `ota-page.js` 状态列 + `ai-coding-design-reference.md` OTA 段。上下架操作均走二次确认(`ota/index.vue:407-495`)。

### 2. 推送批次状态(新系统枚举错误)
- **新系统** `status-matrix.js:33`:草稿 / 等待中 / 执行中 / 完成 / 部分失败。
- **旧系统真实**(`views/push/components/log.vue:13-15` `batchState`,下拉顺序 `[2,4,1,3]`):

| code | 中文 | EN |
| --- | --- | --- |
| 1 | 执行中 | In processing |
| 2 | 成功 | Succeeded |
| 3 | 部分成功 | Completed with failures |
| 4 | 失败 | Failed |

真实**只有 4 态,无草稿/等待中**;新系统把"成功"和"部分成功"合并成"完成/部分失败"是错的。

### 3. 推送设备状态(新系统缺 2 态 + 缺闭环能力)
- **新系统** `push-page.js:97-99` 统计卡只有 总数/成功/失败。
- **旧系统真实**(`views/push/components/deviceDetail.vue:97,113-114,178-184`):

| code | 中文 | EN | 统计字段 |
| --- | --- | --- | --- |
| 1 | 执行中 | In processing | processingCount |
| 2 | 成功 | Succeeded | successCount |
| 3 | 失败 | Failed | failCount |
| 4 | 已过期 | Expired | expiredCount |
| 5 | 已终止 | Terminated | terminatedCount(部分 operationType) |

- **应补**:push-page 统计卡补**已过期/已终止**两卡 + echarts 比例环 + 批量**重新推送 rePush**(`push_task_rePush` 权限)+ **终止推送 stopPush**(`push_task_terminate` 权限);state=5 已终止不可重试。

### 4. 应用版本包状态(新系统缺签名子状态)
- **新系统** `market-page.js:619-629`:待审核/已上架/已下架/版本升级中。
- **旧系统真实**(`views/app/manage/versionList.vue:202-239` `appPackageStatus`):含 **-5 kpp签名错误 / -4 kpp签名中 / -3 签名错误 / -2 签名中 / -1 草稿 / 0 审核中 / 1 已上架 / 2 已拒绝 / 3 取消上架 / 4 已下架**。应用有签名流程(谷歌/AW/证书链),签名态是真实业务,新系统全缺。

### 5. 扫码授权子状态机(新系统完全缺失)
- **旧系统**(`views/push/components/deviceDetail.vue:16-19,154-162` `scanCodeLicenseState`,operationType=33):0 未激活 / 1 正在激活 / 2 已激活 / 3 无效 / 4 网络不通 / 5 已过期 / 6 服务器异常 / -1 未知。是增值服务独立子流程,`service-page.js` 未提。

### 6. 设备状态语义纠正
- **旧系统**(`views/device/deviceMgt/index.vue:226-327`)设备状态是**三个独立字段**,不是一个枚举:
  - `onlineFlag`(bool):在线(在线({0}h内),`onlineTime` 插值)/ 离线
  - `state`('0'/'1'):0 解锁 / 1 锁定 —— **标签是"屏幕状态/Screen Lock"**,非"设备锁定"
  - `registeredFlag`(bool):已激活 / 未激活
- 新系统 8 态里的"维护中/已退役"旧系统不存在(Figma 前瞻,可保留);"在线/离线/锁定/未激活"对应这三字段组合。注意旧系统"锁定"是屏幕锁,语义偏轻。

### 7. 账号状态 + 操作日志列(小修正)
- 账号 `lockFlag`(`views/admin/user/index.vue:108-117`):'0' 正常 / '9' 禁用 —— **code 是 9 不是 1**。
- 操作日志(`views/admin/log/index.vue:75-120`)真实列:**类型 logType / 机构 deptName / 操作人 createBy / 标题 title / 请求地址 remoteAddr(IP) / 创建时间 createTime**,无"请求方式/操作方法/请求参数"。新系统 `ops-page.js:528` 与 `ai-coding-design-reference.md:205` 均需改回。

---

## P1 — 业务字段补充清单(按模块)

### 设备 / 数据中心
- **设备列表真实列**(`views/device/deviceMgt/index.vue:204-327`):selection → SN(logo+sn,fixed,点击进详情) → 备注 remark → 在线状态 → 机构 → 型号 → 系统版本 → 上线时间(可排序) → 锁屏状态 → IMEI-IMSI-icc_id → 操作。新系统 `device-center-page.js:282` 列无备注/型号/系统版本/IMEI/锁屏态(且旧系统列表**无电量/心跳**,这些在详情页)。
- **设备详情 35 字段**(`views/device/deviceMgt/detail.vue:256-394`):新系统严重缺失——基带版本 modemVersion / 内核版本 kernelVersion / 编译信息 buildInfo / KSN / 到期时间 expireTime / 客户名 tenantName / 资源包版本 / MDM 配置版本 / 主子 SDK 版本 / 经纬度 / wifi SSID / 蓝牙地址。详情 Tab:`状态信息 / 基本信息 / 应用信息 / 位置信息(地图 lazy) / 用户证书信息(lazy) / 硬件告警(lazy)`。
- **设备远程控制快捷指令 16 项**(`detail.vue:144-250` pushLogMap):软件信息 / 流量控制 / 设备日志 / 应用安装 / 应用卸载 / 设备密码 / 设备锁定 / 全部刷新 / 恢复出厂 / WIFI设置 / 调试开关 / 清警告 / 蓝牙开关 / 修改型号 / 消息通知 / 查找设备 / logcat。新系统 service-page 只列 9 类。

### 应用市场
- **列表真实列**(`views/app/manage/index.vue:108-135`):name(logo) / 机构 / packageName / **版本总数 versionCount** / **下载总数 downloadCount**。新系统 market-page 列是"应用/包名/版本/分类/状态/更新时间"——旧系统列表**无分类/状态/更新时间**,真实区分字段是版本总数+下载总数。
- **添加应用四段表单**(`addApp.vue`):① 基础信息(APK 包自动解析 packageName+versionCode+versionName / logo / 9:16 截图 / 分类 / 开发者 / 简介)② 权限(**禁止卸载 uninstallFlag** / **禁止清除数据 clearDataFlag**)③ 签名(needSigner / certificateType:1 谷歌 /2 AW /3 证书链 / certificateId / usingDeptId)④ 规则(适配机型多选 / 可见范围 ruleType 0-7)。
- **应用分类**(`views/app/classify/index.vue:55-73`)有 **ordinal 排序**字段,新系统缺。
- **自动安装/自动更新开关**(`versionList.vue:27-55`)开启需二次确认。

### OTA
- **列表缺列**:`ota/index.vue:117-222` 有 **最后操作时间 updateTime** 列,新系统 `ota-page.js:185-194` 缺。
- **推送弹窗三段**(`views/ota/dialogUp.vue`):① 基本信息(disabled,含 **code 升级包标识 ap/sp/appc/univ** / androidVersion / upgradeNote)② 推送范围(targetMode 0-7 + targetValue:5 分组多选/6,7 机构树/其他 textarea)③ 推送类型(**force 是否强制** / **dataHint 数据初始化提示** 仅 force=true 且有权限 / **delayPushFlag 延迟推送** + pushTime)。
- **targetValue 校验**(`dialogUp.vue:165-211`):禁中文逗号 / 去重 / 模式 2 支持 "start-end" 范围且校验数字+区间重叠。新系统全无。

### 围栏 / 地图
- **围栏列表**(`views/map/fence/index.vue:56-114`):name / **shape 类型(circle 圆形/polygon 多边形)** / **eventType(enter 进/leave 出/enter_leave 进出)** / 机构 / remark / **deviceCount 关联设备数** / 操作(设置权限/修改/删除)。顶部有**告警数 badge**跳转告警日志。
- **围栏数据结构**(`changeMap.vue:5-41`):circle=`{radius, center:{longitude,latitude}}`;polygon=`{vertices:[{latitude,longitude}]}`。
- **门店管理**(`views/map/store/`):add/change/log,新系统 map-page 未覆盖门店。

### 参数管理
- **参数配置列表**(`views/params/config/index.vue:85-114`):configName / remark / **version 版本** / **operator 操作人** / createTime / updateTime / 操作(设置设备/修改/**复制**/导入设备/删除)。顶部 **唯一参数配置开关 deviceOnlyOneParamConfigFlag**(开启二次确认)。新系统 device-center-page 参数模板缺 version/operator/复制/唯一开关。

### 账户 / 机构 / 角色
- **账号表单**(`views/admin/user/dialogForm.vue`):username(5-30) / role(多选) / **timeZone 时区**(zone select) / name / email(编辑掩码跳过校验) / **mfaSecretKey 谷歌验证器 MFA**(可解绑,二次确认) / remark。新增后弹密码对话框展示**自动生成密码+一键复制**。新系统 user-mgmt-page 缺时区 + MFA + 自动生成密码流程。
- **角色数据权限**(`views/admin/role/dialogForm.vue`):**dsType 数据权限范围**(0 全部/1 自定义/2 本级及子级/3 本级/4 本人)+ dsScope 机构树。新系统 ops-page "配置权限"缺此枚举(旧系统 v-if=false 隐藏但枚举在)。
- **机构管理**(`views/admin/dept/index.vue`):真实只有 name+id,**无机构编码/运营商/设备数量列**(可能是 Figma 前瞻)。自身机构禁用所有操作。新系统 ops-page:500 的"机构编码/所属运营商/设备数量"应标注为前瞻字段。

### 数据统计
- 活跃/激活/固件统计(`views/data/`):7/30 天筛选;固件统计有 **update_file_type(1 系统版本/2 固件版本)** 筛选。新系统缺。
- ⚠ 旧系统 active/activation 列名互换(命名 bug),新系统**不要照抄**。

---

## P1 — operationType 增值服务词汇表(新系统只列 9 类,真实 27+)

旧系统推送模块按 `operationType` 组织(`views/push/*/index.vue`),共用 `log.vue` + `deviceDetail.vue`。完整映射:

| op | 服务 | | op | 服务 |
| --- | --- | --- | --- | --- |
| 1 | 设备日志 | | 25 | 消息通知 |
| 2 | 设备锁定 | | 29 | 调试开关 |
| 3 | 设备密码 | | 30 | 查找设备 |
| 5 | 流量控制 | | 31 | logcat |
| 6 | 恢复出厂 | | 33 | 扫码授权(独立子状态机) |
| 7 | 文件推送 | | 38 | 壁纸 |
| 12 | 清警告 | | 40 | 热点 |
| 13 | 全部刷新 | | 43 | 上报用户证书 |
| 14 | OTA 日志 | | 48 | 清除应用数据 |
| 15 | 软件信息 | | 49 | 电源模式 |
| 17 | 应用安装 | | 51 | 设备名称 |
| 19 | 应用卸载 | | 52 | GPS 开关 |
| 20 | 蓝牙开关 | | 53 | 电源键开关 |
| 24 | 修改型号 | | 54 | logcat 配置 |

另有复合型:apnSetting / wifiSetting / appHidden / bootInterface / desktopShortcut / filePush / peripheral / scanCode / screenSaver / statusBarPanelConfig / userCert / focus(46,47)。新系统 `service-page.js` 应补全并注明这是**同一推送引擎的不同实例**,UI 用人类标签但保留 code 映射。

---

## P1 — i18n 四语真实文案精华

> 新系统 `i18n.js` 仅规范页(无翻译文件),`copywriting.js:66-79` 术语表仅 9 行。旧系统 `src/language/{zh_CN,en,es,pt}.js` 有 700+ 业务 key 四语。**关键决策:采纳生产措辞,优于 Figma 推导**。

### 术语决策(Figma vs 生产,采纳生产)
| 概念 | Figma 推 | 生产真实(采纳) | 理由 |
| --- | --- | --- | --- |
| 围栏 | Fence | **Geofence / Geocerca / Cerca geográfica** | 更专业 |
| 已上架 | Released | **Published / Publicado** | 行业标准 |
| 已下架 | Removed | **Unpublished / Não publicado** | 行业标准 |
| 基线版本 | Baseline | **Original Version** | 需统一决策 |
| 系统版本 | System Version | **Build Number** | 安卓领域惯例 |

应在 `copywriting.js` 术语锁定表显式记录此决策,防 Figma 推导回潮。

### 状态枚举四语(新系统完全缺,高价值)
- `push_status_0..5`:未推送/执行中/成功/失败/已过期/已终止 — 四语齐全
- `batch_status`:待执行/执行中/成功/部分成功/失败/已取消
- `alarm_level_1..4`:通知/一般/重要/紧急(Notification/Generally/Important/Urgent)
- `watch_time_desc_1..6`:开机时/亮屏/灭屏/每N分钟/网络切换/收到推送时执行 — **监控触发时机分类法**
- `bat_heal_status_1..5`:正常/预警/建议更换/严重老化/未知 — 电池健康枚举
- `server_handle_0..4` / `fix_type_0..4`:无需处理/已修复/未修复/后续OTA修复/已推送修复命令 — 漏洞处理五态

### 业务规则文案(新系统无,高价值)
- `push_message_cancel_dialog`:取消推送仅对待执行生效;重新推送仅对失败与过期生效;终止推送仅对执行中生效 — 四语。
- `stop_push_other`:终止推送边界条件与状态回退说明。
- `store_icon_desc`:机构层级向下管理,数据隔离,母机构管理子机构 — **机构数据隔离规则**。
- `eff_obj` / `eff_message_includes`:指定机构及子机构(含子) vs 指定机构(不含子)作用域对照。
- `up_app_dialog_message`:同应用不同版本高版本优先显示。
- `need_sign_title`:更新应用版本时签名须一致。

### i18n key 规范建议(对照新系统 `i18n.js:61`)
1. 旧扁平 JSON 无 namespace → 新用点号 `map.fence.manage.title`(新系统已规划,方向对)。
2. 旧 `<state>_<n>` 数字枚举 → 新语义化 `push.status.notPushed` / `alarm.level.urgent`。
3. label / value formatter 强制分离(新系统 `ai-coding-design-reference.md:177` 已要求):`firmware_version`="固件版本" 拆为 `device.field.firmwareVersion.label` + formatter。
4. 机构作用域文案入 `org.scope.includesSubOrg` / `.directOnly` / `.isolationRule` namespace。
5. 二次确认 `AW00002..06` → `confirm.deleteRole` / `.deleteUser` 配 ICU `{{name}}`。
6. 语言名走 `Intl.DisplayNames`,不进 key 池(旧 250+ `lan_*` 是反模式)。
7. **es/pt 必须人工复审**:旧系统 es 混入葡语、机翻错译(`title`→en "Titile"/es "Noble";`save`→es "Ahorrar"=省钱;`password` 用 "bits";`close`→es "Cerca"=附近)。覆盖≠质量。
8. **Track Query 轨迹查询**:旧系统完全无此 key(`grep 轨迹`=0),新系统 `ai-coding-design-reference.md:167` 的 Track Query/Start Point/End Point 只能基于 Figma 新建,需独立四语本地化。

---

## P2 — token / 字典 / 姿态精华

### brand-spec 证据链确认(无需改)
旧 `styles/theme.scss` 的 Arco 色阶(`#F7F8FA`/`#1D2129`/`#E5E6EB`/`#165DFF`/`#E8F3FF`)与 `brand-spec.md` 证据 hex 一一对应,溯源链完整。新系统 tokens.css 的"证据→antd v6 运行时"映射(#F7F8FA→#F5F7FA, #1D2129→#1F2937)正确,**无需修正 brand-spec**。dark 模式"白透明度阶梯"与新系统一致,新系统 dark 更优。

### 可补 brand-spec(姿态数值锚点)
- **spacing scale**(`common.scss`):4px base unit — 4/8/12/16/20/24(+10/15/30/40)。brand-spec 未显式声明 spacing scale,可补。
- **shell 尺寸**(`pages/layout/index.vue`):侧栏展开 247px / 折叠 64px / 顶栏 60px / logo 200×50(展开) 40×40(折叠) / 菜单项 40px。可作 layout posture 锚点。
- **表格表头底色**(`elementReset/tableReset.scss` `.bac_1`=#F2F3F5):新系统表格表头应映射 `--aw-fill-2`,非纯白。
- **旧系统最终选"仅面包屑,无 tab strip"**(`layout/index.vue` tagList 存 store 但未渲染):新系统 shell.js 决策 tab 标签栏时可参考此克制姿态。

### 可补 data-format.js(领域字典)
- **时区** `const/zone.js`:`UTC±HH:MM` 15 分钟粒度,113 项(含 UTC-13:45 查塔姆群岛)。data-format:26-38 要求跨时区标 `+HH:mm` 但无选项源 → 纳入 `@tms/dict`,可补 IANA 名映射。
- **错误码** `const/errorCode.js`:扁平 `{code→message}` + `default` 兜底(401/404/429...)。新系统应扩 OTA/推送/设备领域错误码 + 接 i18n。
- **国家码** `const/country.js`:ISO-3166 alpha-2,240+ 项。升级为 `{code, name_en, name_zh}` 对象数组。

### charts.js(无需补,新系统已超越)
旧系统图表**无统一主题**,全单色蓝(`this.theme`)+ `#fff` area 终止色硬编码,多系列无法区分,不适配 dark。实际只用 Pie + Line 两类。新系统 8 色 `--aw-chart-1..8` 序列 + registerTheme + LabelLayout/UniversalTransition 已全面超越。唯一可确认:area "主色→透明"垂直渐变模式(新系统用 `stop-opacity` 更优)。

### whitelabel.js(可参考字段分类)
`const/website.js` 字段分四类:① 品牌资源(title/logo/background/imgUrl)② 运行开关(whiteList/websocket/dynamicCodeCache...)③ 登录 client(formLogin/smsLogin/socialLogin)④ 首页/菜单 props。新系统 whitelabel 可沿用此分类。**糟粕**:`encPassword` 前端硬编码密钥 + 外部 S3 URL(`uitmss3.eu.aw-iot.com`),弃。

---

## P2 — 路由广度 gap(新系统未覆盖的业务域)

旧系统 118 路由揭示的子域,新系统 16 页面模板未充分编码(取舍:不必照搬页面,但字段/词汇应收纳):

- **MDM 子系统**(`/mdm/`):mdmConfigList / mdmApp / mdmAppConfig / mdmotaConfig / mdmDeviceConfig — 新系统无 MDM 页。
- **9 类推送策略**(`/push/`):wifi / apnSetting / filePush / otaPer / bootInterface / appHidden / desktopShortcut / userCert / screenSaver(各 add/change/detail)。
- **应用子域**(`/app/`):kioskApp / launcher / advManage(广告)/ cert(证书)。
- **resourcePackage** 资源包(壁纸/铃声?):add/change/detail/log/audio。
- **focus** 焦点资源。
- **设备诊断/远程控制**:`/device/deviceMgt/diagnosis` / `diagnosisControl` / `control`。
- **门店管理** `/map/store/`。

---

## 糟粕禁入清单(不要迁移)

| 糟粕 | 证据 | 不迁移原因 |
| --- | --- | --- |
| Vue2 SFC + Element UI(el-table/el-form/tms-*) | 全部 .vue | AntD v6 范式不同 |
| vuex `mapGetters(['permissions'])` 权限分发 | 各 index.vue | 权限模型应重设计 |
| `$strings`/`$tms_confirm`/`v-emoji` 指令 | 全部 .vue | 旧 i18n 与确认机制实现 |
| `elementReset/*.scss`(7 文件) | styles/elementReset/ | 针对 element-ui v2,AntD 无关,零价值 |
| SCSS `@extend` + class 主题(`.light`/`.dark`) | theme.scss | 新系统用 CSS variables + `[data-theme]` |
| 硬编码冲突色 `#F56C6C`/`#F53F3F`/`#0D7BFF` | inputReset/common.scss | element 默认红,与品牌系不搭 |
| 图表单色蓝硬编码 + `#fff` area 终止 | echartsCircle/Home.vue | 不支持多系列,不适配 dark |
| avue-crud `option()` DSL | setting/logs/index.js | Vue2+avue 专属,不兼容 |
| `encPassword` 前端硬编码密钥 | website.js | 安全隐患 |
| 外部 S3 资源 URL | website.js | 新系统自托管 |
| i18n 扁平无 namespace + 250+ `lan_*` | language/*.js | 新系统用 namespace + Intl.DisplayNames |
| i18n `{0}` 位置占位 / `AW0000x` code key | language/*.js | 新用 `{{var}}` ICU + 语义 key |
| i18n 拼写错误 key(self_veriffy/copy_sucss/deivce_count...) | zh_CN.js | 不可迁移 |
| i18n 译错(Titile/Noble/Ahorrar/bits/es 混 pt) | en/es/pt.js | 必须人工重译 |
| i18n key 爆炸(able/unable/ban/dis_ban;off/unline/online 5 key 表 2 态) | language/*.js | 新系统合并 |
| uninstallFlag/clearDataFlag active=false 反转 | addApp.vue:106-120 | 后端 quirk,新系统正常 active=true |
| device detail hiddenMap 硬编码客户(ktq/NICEVAN) | detail.vue:252-255 | 客户定制 hack |
| active/activation 列名互换 | data/active|activation | 命名 bug |
| 前端 JSZip+node-forge 解析 APK 签名 | addApp.vue:226-231 | 应后端解析 |
| operationType 数值 code 直接暴露 | push 各 index.vue | UI 用人类标签(但映射关系保留) |

---

## 建议执行顺序

- **P0(正确性,应立即改)**:status-matrix.js 三行状态机纠正(OTA 文件 / 推送任务 / 应用审核)+ push-page 统计卡补已过期/已终止 + ops-page 操作日志列改回 + ai-coding-design-reference.md 对应段同步。这是"把推送任务状态当 OTA 文件状态"的硬错,会误导 AI 与开发者。
- **P1(业务完整度)**:device 详情 35 字段 + 快捷指令 16 项;market 列表改回版本总数/下载总数 + 四段表单;service 补 27 operationType + 扫码授权子状态机;围栏 shape/eventType/数据结构;账号时区+MFA;角色 dsType;copywriting 术语锁定表补"生产措辞决策" + 状态枚举四语 + 机构作用域文案。
- **P2(姿态/字典)**:brand-spec 补 spacing scale + shell 尺寸 + 表头底色;data-format 补时区/错误码/国家字典;whitelabel 参考 website.js 字段分类;路由广度 gap 评估是否新增 MDM/资源包页。
- **P3(规范)**:i18n key 规范按 7 条建议落地;es/pt 人工复审计划。

> 所有精华均以"业务知识"形态(字段/状态/词汇/流程/字典)收入 design-system 的 `pages/*.js` mock 与 `docs/ai-coding-design-reference.md` 锚点,**不迁移任何 Vue2/Element 代码**。落地到 sibling 仓库 `tms2.5-web-react` 时用 AntD v6 原生 + `src/components` 封装 + `--aw-*` token。
