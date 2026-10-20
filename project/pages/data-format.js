/* AngelWatch Design System — page: data-format (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["data-format"] = `
<div class="content">
<section class="section" id="data-format">
<p class="section-eyebrow"><span data-i18n="data-format:t001">工程落地 · 数据格式</span></p>
<h2 role="heading" aria-level="1"><span data-i18n="data-format:t002">数据格式 Data Format</span></h2>
<p class="lede"><span data-i18n="data-format:t003">数字、日期、设备标识、文件大小、敏感数据、空值、错误 —— 七类高频展示数据的格式收口规范。所有用户展示格式必须走</span> <code>Intl.*</code> <span data-i18n="data-format:t004">API 或消费者仓库的</span> <code>src/utils/format.ts</code> <span data-i18n="data-format:t005">统一工具，禁止手写</span> <code>toLocaleString</code> <span data-i18n="data-format:t006">散落在业务代码。</span></p>
<div class="subsection">
<h3><span data-i18n="data-format:t007">数字 · Number</span></h3>
<table class="map-table">
<thead><tr><th style="width:18%"><span data-i18n="data-format:t008">场景</span></th><th style="width:28%"><span data-i18n="data-format:t009">格式</span></th><th style="width:22%"><span data-i18n="data-format:t010">示例</span></th><th><span data-i18n="data-format:t011">规则</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="data-format:t012">大数字</span></td><td><span data-i18n="data-format:t013">按 locale 数字分组</span></td><td><span class="mono">12,486</span></td><td><span data-i18n="data-format:t014">分隔符由 Intl 决定，不固定为逗号；普通数值左对齐、金额右对齐，数字用等宽字符（</span><code>font-feature-settings: "tnum"</code><span data-i18n="data-format:t176">）</span></td></tr>
<tr><td><span data-i18n="data-format:t015">百分比</span></td><td><span data-i18n="data-format:t016">按 locale 显示</span> <span class="mono">%</span> <span data-i18n="data-format:t017">· 业务字段决定精度</span></td><td><span class="mono">98.20%</span></td><td><span data-i18n="data-format:t018">同一指标精度一致；通过 Intl percent 格式化并核验输入是 0–1 比率还是 0–100 数值</span></td></tr>
<tr><td><span data-i18n="data-format:t019">带单位</span></td><td><span data-i18n="data-format:t020">本地化数字与标准单位</span></td><td><span class="mono">123,220 kg</span></td><td><span data-i18n="data-format:t021">单位保留标准大小写（如 kg、MB、MHz）；公共单位可置于表头，不随意改写大小写</span></td></tr>
<tr><td><span data-i18n="data-format:t022">表格数字</span></td><td><span data-i18n="data-format:t023">普通数值左对齐；金额右对齐 + tnum</span></td><td><span class="mono">12,486</span></td><td><span data-i18n="data-format:t024">普通数值、时间与操作列左对齐；金额列右对齐。带单位列在表头标注（如 "心跳间隔 (秒)"）</span></td></tr>
<tr><td><span data-i18n="data-format:t025">大数缩写</span></td><td>1.2k / 12.5k / 1.2M</td><td><span class="mono">12.5k</span></td><td><span data-i18n="data-format:t026">仅在 DataCard / 仪表盘中使用，详情 / 表格保留完整数字</span></td></tr>
<tr><td><span data-i18n="data-format:t027">趋势数字</span></td><td><span data-i18n="data-format:t028">带正负号 + 图形</span></td><td><span class="mono">↑ +248</span> / <span class="mono">↓ -12</span></td><td><span data-i18n="data-format:t029">正数永远显式 + 号；颜色：增长视语义用 success / 也可用品牌灰</span></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="data-format:t030">日期与时间 · Date &amp; Time</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="data-format:t031">时间解析须先核验接口的格式与时区。无歧义的时间点示例采用 RFC 3339 UTC instant，如</span> <code>2026-04-28T06:32:18Z</code><span data-i18n="data-format:t032">；计划任务与用户展示偏好宜使用 IANA 时区，如</span> <code>Asia/Shanghai</code><span data-i18n="data-format:t033">。消费者必须声明展示时区策略：优先用户 / 租户 IANA zone；尚未配置时可显式采用 Intl.DateTimeFormat().resolvedOptions().timeZone 作为 IANA fallback，无法解析再回退 UTC。不得用固定偏移冒充 IANA / DST 规则。</span></p>
<table class="map-table">
<thead><tr><th style="width:24%"><span data-i18n="data-format:t034">场景</span></th><th style="width:34%"><span data-i18n="data-format:t035">格式</span></th><th><span data-i18n="data-format:t036">使用规则</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="data-format:t037">传输 / 存储时间点</span></td><td><span class="mono">2026-04-28T06:32:18Z</span></td><td><span data-i18n="data-format:t038">先核验服务端字段是 UTC、带偏移时间点还是无时区本地时间；缺少语义时反馈接口问题，不通过前端固定加减小时掩盖</span></td></tr>
<tr><td><span data-i18n="data-format:t178">用户完整日期时间</span></td><td><span class="mono">zh-CN: 2026/04/28 14:32:18 GMT+8<br/>en-US: Apr 28, 2026, 2:32:18 PM GMT+8</span></td><td><span data-i18n="data-format:t179">故障日志 / 审计 / 推送 / 操作记录使用 Intl 与策略解析出的 IANA timeZone；需要精确定位时显示秒和时区名 / 偏移</span></td></tr>
<tr><td><span data-i18n="data-format:t039">仅日期</span></td><td><span class="mono">zh-CN: 2026/04/28<br/>en-US: Apr 28, 2026</span></td><td><span data-i18n="data-format:t040">报表 / 筛选条件 / 截止日期使用 Intl dateStyle；不要手拼固定顺序</span></td></tr>
<tr><td><span data-i18n="data-format:t041">仅时间</span></td><td><span class="mono">zh-CN: 14:32<br/>en-US: 2:32 PM</span></td><td><span data-i18n="data-format:t042">同日事件序列使用 Intl timeStyle / hourCycle；秒位只在精度场景保留</span></td></tr>
<tr><td><span data-i18n="data-format:t043">相对时间</span></td><td><span data-i18n="data-format:t044">"刚刚 / 5 分钟前 / 2 小时前 / 昨天 14:32"</span></td><td><span data-i18n="data-format:t045">相对与绝对时间的切换阈值由消费项目统一；完整时间与展示时区必须能通过键盘访问</span></td></tr>
<tr><td><span data-i18n="data-format:t046">当日切换</span></td><td><span data-i18n="data-format:t047">"今天 14:32" / "昨天 14:32"</span></td><td><span data-i18n="data-format:t048">设备最近心跳 / 最近上线 等高频比对场景</span></td></tr>
<tr><td><span data-i18n="data-format:t049">时间区间</span></td><td><span class="mono">Intl.DateTimeFormat(...).formatRange(start, end)</span></td><td><span data-i18n="data-format:t050">优先使用 locale 感知的 formatRange；组件分隔符不得代替日期本身的本地化</span></td></tr>
<tr><td><span data-i18n="data-format:t051">持续时长</span></td><td><span data-i18n="data-format:t052">"3天 5小时 12分" / "5h 12m" / "23s"</span></td><td><span data-i18n="data-format:t053">OTA 累计耗时 / 离线时长 / 升级用时；超 24h 用"天/小时/分"，否则用</span> <span class="mono">h/m/s</span></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="data-format:t054">设备标识 · Device Identifier</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="data-format:t055">所有设备标识强制 monospace（</span><code>--aw-font-mono</code><span data-i18n="data-format:t056">）；分组仅用于展示，复制应保留 API 原始标识。</span></p>
<table class="map-table">
<thead><tr><th style="width:18%"><span data-i18n="data-format:t057">类型</span></th><th style="width:30%"><span data-i18n="data-format:t058">格式</span></th><th style="width:24%"><span data-i18n="data-format:t059">示例</span></th><th><span data-i18n="data-format:t060">说明</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="data-format:t061">设备 SN</span></td><td><span class="mono">API string</span></td><td><span class="mono">DEV-86420075</span></td><td><span data-i18n="data-format:t062">左侧仅示例；实际前缀与长度由设备契约决定，不补前缀、不截断或转为数字</span></td></tr>
<tr><td>IMEI</td><td><span data-i18n="data-format:t063">15 位，4-6-5 分组</span></td><td><span class="mono">8642 007512 34567</span></td><td><span data-i18n="data-format:t064">口头读出友好；展示用空格，复制粘贴回退到无空格</span></td></tr>
<tr><td>IPv4</td><td><span data-i18n="data-format:t065">四段，半角点分</span></td><td><span class="mono">10.0.42.118</span></td><td><span data-i18n="data-format:t066">不补 0；ASN / 国家仅在接口提供且产品需要时展示</span></td></tr>
<tr><td><span data-i18n="data-format:t067">MAC 地址</span></td><td><span data-i18n="data-format:t068">6 段，半角冒号</span></td><td><span class="mono">A8:5E:45:9F:11:02</span></td><td><span data-i18n="data-format:t069">大写；复制时保持冒号格式</span></td></tr>
<tr><td><span data-i18n="data-format:t070">固件版本</span></td><td><span data-i18n="data-format:t071">按 API 原值展示</span></td><td><span class="mono">v3.4.2</span></td><td><span data-i18n="data-format:t072">若领域采用 SemVer，可显示如</span> <span class="mono">v3.4.2-rc.1</span><span data-i18n="data-format:t073">；其他版本格式不强制添加 v 或补齐 patch</span></td></tr>
<tr><td><span data-i18n="data-format:t074">批次号</span></td><td><span data-i18n="data-format:t075">领域定义的任务标识</span></td><td><span class="mono">PUSH-20260428-007</span></td><td><span data-i18n="data-format:t076">示例不规定真实前缀；保留服务端标识以便查询与复制</span></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="data-format:t077">敏感数据脱敏 · Masking</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="data-format:t078">以下脱敏样式仅为展示示例，哪些字段可看、可复制或可解密由后端权限与数据契约决定。不得把原文仅用 CSS 隐藏当作脱敏；前端不重复处理已脱敏值。</span></p>
<table class="map-table">
<thead><tr><th style="width:18%"><span data-i18n="data-format:t079">类型</span></th><th style="width:30%"><span data-i18n="data-format:t080">脱敏规则</span></th><th style="width:26%"><span data-i18n="data-format:t081">示例</span></th><th><span data-i18n="data-format:t082">展示方式</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="data-format:t083">手机</span></td><td><span data-i18n="data-format:t084">前 3 + 4 星 + 后 4</span></td><td><span class="mono">186 **** 1402</span></td><td><span data-i18n="data-format:t085">统一空格分组；点击"查看"调审计接口</span></td></tr>
<tr><td><span data-i18n="data-format:t086">邮箱</span></td><td><span data-i18n="data-format:t087">首字母 + 3 星 + @域名</span></td><td><span class="mono">d***@example.com</span></td><td><span data-i18n="data-format:t088">域名不脱敏</span></td></tr>
<tr><td><span data-i18n="data-format:t089">身份证</span></td><td><span data-i18n="data-format:t090">前 3 + 8 星 + 后 4</span></td><td><span class="mono">213***...***203</span></td><td><span data-i18n="data-format:t091">仅高敏页面默认显示</span></td></tr>
<tr><td><span data-i18n="data-format:t092">用户名</span></td><td><span data-i18n="data-format:t093">首字 + 星</span></td><td><span class="mono"><span data-i18n="data-format:t094">张***</span></span></td><td><span data-i18n="data-format:t095">列表中两位以下姓名只展示首字 + 星</span></td></tr>
<tr><td><span data-i18n="data-format:t096">设备 IP</span></td><td><span data-i18n="data-format:t097">段 3 / 段 4 脱敏</span></td><td><span class="mono">10.0.***.118</span></td><td><span data-i18n="data-format:t098">是否显示或脱敏须由数据权限契约确定，不按租户名称推断</span></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="data-format:t099">空值 / 加载中 / 错误</span></h3>
<div class="demo-grid cols-3">
<div class="surface">
<div class="tag-meta" style="margin-bottom:8px"><span data-i18n="data-format:t100">空值</span></div>
<h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="data-format:t101">展示为</span> <span class="mono">—</span><span data-i18n="data-format:t177">（em dash）</span></h3>
<p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="data-format:t102">字段值为</span> <code>null</code> / <code>undefined</code> <span data-i18n="data-format:t103">/ 空字符串统一渲染</span> <span class="mono">—</span><span data-i18n="data-format:t104">（U+2014），颜色</span> <code>--aw-text-3</code><span data-i18n="data-format:t105">。禁用 "N/A" / "无" / "暂无" 等多种写法并存。</span></p>
</div>
<div class="surface">
<div class="tag-meta" style="margin-bottom:8px"><span data-i18n="data-format:t106">加载中</span></div>
<h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="data-format:t107">保留布局的加载状态</span></h3>
<p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="data-format:t108">首次加载可用 antd</span> <code>Skeleton</code><span data-i18n="data-format:t109">；已有内容刷新可保留内容并显示 loading，不仅使用</span> <span class="mono">⋯</span><span data-i18n="data-format:t110">等视觉符号，需让辅助技术也能获知加载状态。</span></p>
</div>
<div class="surface">
<div class="tag-meta" style="margin-bottom:8px"><span data-i18n="data-format:t111">错误</span></div>
<h3 style="margin:0 0 8px;font-size:14px"><span class="mono">--</span> <span data-i18n="data-format:t112">+ 可见失败说明</span></h3>
<p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="data-format:t113">字段获取失败可显示</span> <span class="mono">--</span><span data-i18n="data-format:t114">并附可见失败说明与键盘可达的重试。列表加载或刷新失败用持续 Alert/Result，不强制跳页或将失败伪装为空数据。</span></p>
</div>
</div>
</div>
<div class="subsection">
<h3><span data-i18n="data-format:t115">文件大小 · File Size</span></h3>
<table class="map-table">
<thead><tr><th style="width:22%"><span data-i18n="data-format:t116">范围</span></th><th style="width:24%"><span data-i18n="data-format:t117">单位</span></th><th style="width:24%"><span data-i18n="data-format:t118">示例</span></th><th><span data-i18n="data-format:t119">规则</span></th></tr></thead>
<tbody>
<tr><td>&lt; 1 KB</td><td>B</td><td><span class="mono">896 B</span></td><td><span data-i18n="data-format:t120">整数</span></td></tr>
<tr><td>1 KB ~ 1 MB</td><td>KB</td><td><span class="mono">128.4 KB</span></td><td><span data-i18n="data-format:t121">1 位小数</span></td></tr>
<tr><td>1 MB ~ 1 GB</td><td>MB</td><td><span class="mono">12.8 MB</span></td><td><span data-i18n="data-format:t122">1 位小数；固件包典型范围</span></td></tr>
<tr><td>≥ 1 GB</td><td>GB</td><td><span class="mono">2.4 GB</span></td><td><span data-i18n="data-format:t123">1 位小数；批量日志导出场景</span></td></tr>
</tbody>
</table>
<p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="data-format:t124">单位制：</span></b><span data-i18n="data-format:t125">固件 / 日志统一用 1024 进制（KiB/MiB），用户可见时简写为 KB/MB；网络传输统计用 1000 进制（kbps），不与文件大小混。</span></p>
</div>
<div class="subsection">
<h3><span data-i18n="data-format:t126">货币 / 金额（账户权限 / 计费场景）</span></h3>
<table class="map-table">
<thead><tr><th style="width:24%"><span data-i18n="data-format:t127">场景</span></th><th style="width:30%"><span data-i18n="data-format:t128">格式</span></th><th style="width:22%"><span data-i18n="data-format:t129">示例</span></th><th><span data-i18n="data-format:t130">说明</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="data-format:t131">币种示例（CNY）</span></td><td><span class="mono">¥</span> <span data-i18n="data-format:t132">等符号由 Intl 生成</span></td><td><span class="mono">¥1,234.00</span></td><td><span data-i18n="data-format:t133">币种与精度依据业务契约；符号、分隔符和小数位使用 Intl currency 格式化</span></td></tr>
<tr><td><span data-i18n="data-format:t134">多币种</span></td><td><span data-i18n="data-format:t135">Intl currencyDisplay: code</span></td><td><span class="mono">USD 1,234.00</span></td><td><span data-i18n="data-format:t136">可能歧义时显示 ISO 币种代码，顺序与空格由 locale 决定</span></td></tr>
<tr><td><span data-i18n="data-format:t137">正式文档</span></td><td><span data-i18n="data-format:t138">大写中文金额</span></td><td><span data-i18n="data-format:t139">壹仟贰佰叁拾肆元整</span></td><td><span data-i18n="data-format:t140">按已核验的财务或后端能力实现，不假定存在通用金额转换接口。</span></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="data-format:t141">规则 · Do &amp; Don'ts</span></h3>
<div class="demo-grid cols-2">
<div class="surface" style="border-left:3px solid var(--aw-success)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
<li><span data-i18n="data-format:t142">所有数字 / 日期通过</span> <code>Intl.*</code> / <code>src/utils/format.ts</code> <span data-i18n="data-format:t143">统一格式化</span></li>
<li><span data-i18n="data-format:t144">表格普通数字左对齐、金额右对齐，数字统一使用</span> <code>font-variant-numeric: tabular-nums</code></li>
<li><span data-i18n="data-format:t145">消费者声明展示时区策略：</span> <code>user / tenant IANA → resolvedOptions().timeZone → UTC</code> <span data-i18n="data-format:t146">，并按目标 instant 派生当时偏移</span></li>
<li><span data-i18n="data-format:t147">设备 SN / IMEI / IP / MAC 一律 monospace</span></li>
<li><span data-i18n="data-format:t148">空值统一用 em dash</span> <span class="mono">—</span></li>
<li><span data-i18n="data-format:t149">脱敏规则前后端一致（前端不能能解还原）</span></li>
</ul>
</div>
<div class="surface" style="border-left:3px solid var(--aw-danger)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
<li><span data-i18n="data-format:t150">不要在业务代码写</span> <code>new Date().toLocaleString()</code></li>
<li><span data-i18n="data-format:t151">不要强制所有 locale 使用 24 小时制；遵循 locale / 用户 hourCycle，审计导出可另定 24 小时机器格式</span></li>
<li><span data-i18n="data-format:t152">不要并存"暂无 / N/A / 无 / 空"多种空值表达</span></li>
<li><span data-i18n="data-format:t153">不要用</span> <span class="mono">$</span> <span data-i18n="data-format:t154">表示 CNY，用</span> <span class="mono">¥</span> <span data-i18n="data-format:t155">或 ISO 代码</span></li>
<li><span data-i18n="data-format:t156">不要在表格内换行展示长 ID（用 monospace + ellipsis + tooltip）</span></li>
<li><span data-i18n="data-format:t157">不要在前端二次脱敏后端已脱敏字段（双重星号）</span></li>
</ul>
</div>
</div>
</div>
<div class="subsection">
<h3><span data-i18n="data-format:t158">领域字典源</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="data-format:t159">领域值由 API / 后端契约或国际标准维护；前端只在类型化模块中保存稳定 code 与 UI 映射，</span><span data-i18n="data-format:t160">不复制一份自封闭的扁平字符串字典。</span></p>
<table class="map-table">
<thead><tr><th><span data-i18n="data-format:t161">字典</span></th><th><span data-i18n="data-format:t162">旧 schema</span></th><th><span data-i18n="data-format:t163">升级方向</span></th><th><span data-i18n="data-format:t164">样例</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="data-format:t165">时区 zone</span></td><td><code>UTC±HH:MM string[]</code> <span data-i18n="data-format:t166">固定偏移（不含 DST / 历史规则）</span></td><td><span data-i18n="data-format:t167">存 IANA zone id；显示当前偏移时按目标 instant 动态派生</span></td><td><span class="mono">Asia/Shanghai / America/New_York / Etc/UTC</span></td></tr>
<tr><td><span data-i18n="data-format:t168">错误码 errorCode</span></td><td><code>{code→message}</code> + <code>default</code> <span data-i18n="data-format:t169">兜底</span></td><td><span data-i18n="data-format:t170">扩 OTA/推送/设备领域 + 接 i18n(旧仅英文写死)</span></td><td><span class="mono">401/404/429 + default</span></td></tr>
<tr><td><span data-i18n="data-format:t171">国家 country</span></td><td><code>{code, name_en, name_zh}</code> <span data-i18n="data-format:t172">手工复制多语言名称</span></td><td><code>ISO-3166 alpha-2 code</code> + <code>Intl.DisplayNames</code> <span data-i18n="data-format:t173">按 locale 展示</span></td><td><span class="mono">CN / US / JP / DE / BR</span></td></tr>
</tbody>
</table>
<p style="font-size:12px;color:var(--aw-text-3);margin:12px 0 0"><span data-i18n="data-format:t174">语言名 / 国家名优先用</span> <code>Intl.DisplayNames</code><span data-i18n="data-format:t175">。时区选择值必须是 IANA zone id；未配置时把运行时 resolvedOptions().timeZone 作为显式 IANA fallback，无法解析再用 UTC。UTC 偏移只是某个 instant 下的派生展示值，不能作为时区身份。</span></p>
</div>
</section>
</div>
`;
