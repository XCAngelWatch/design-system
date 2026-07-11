/* AngelWatch Design System — page: data-format (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["data-format"] = `
<div class="content">
<section class="section" id="data-format">
<p class="section-eyebrow"><span data-i18n="data-format:t001">工程落地 · 数据格式</span></p>
<h2><span data-i18n="data-format:t002">数据格式 Data Format</span></h2>
<p class="lede"><span data-i18n="data-format:t003">数字、日期、设备标识、文件大小、敏感数据、空值、错误 —— 七类高频展示数据的格式收口规范。所有格式化必须走</span> <code>Intl.*</code> <span data-i18n="data-format:t004">API 或</span> <code>@tms/format</code> <span data-i18n="data-format:t005">工具包，禁止手写</span> <code>toLocaleString</code> <span data-i18n="data-format:t006">散落在业务代码。</span></p>
<div class="subsection">
<h3><span data-i18n="data-format:t007">数字 · Number</span></h3>
<table class="map-table">
<thead><tr><th style="width:18%"><span data-i18n="data-format:t008">场景</span></th><th style="width:28%"><span data-i18n="data-format:t009">格式</span></th><th style="width:22%"><span data-i18n="data-format:t010">示例</span></th><th><span data-i18n="data-format:t011">规则</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="data-format:t012">大数字</span></td><td><span data-i18n="data-format:t013">千分位（半角逗号）</span></td><td><span class="mono">12,486</span></td><td><span data-i18n="data-format:t014">≥ 1000 必须分隔；表格右对齐 + 等宽字符（</span><code>font-feature-settings: "tnum"</code><span data-i18n="data-format:t176">）</span></td></tr>
<tr><td><span data-i18n="data-format:t015">百分比</span></td><td><span data-i18n="data-format:t016">数字 +</span> <span class="mono">%</span> <span data-i18n="data-format:t017">· 固定 2 位小数</span></td><td><span class="mono">98.20%</span></td><td><span data-i18n="data-format:t018">不补 0 会让"98%"和"98.5%"对不齐；趋势用 ↑↓ 配独立列</span></td></tr>
<tr><td><span data-i18n="data-format:t019">带单位</span></td><td><span data-i18n="data-format:t020">数字 + 半角空格 + 单位</span></td><td><span class="mono">123,220 kg</span></td><td><span data-i18n="data-format:t021">单位 lowercase；常用单位收口到表头，单元格只放数字</span></td></tr>
<tr><td><span data-i18n="data-format:t022">表格数字</span></td><td><span data-i18n="data-format:t023">右对齐 + tnum</span></td><td><span class="mono">12,486</span></td><td><span data-i18n="data-format:t024">同列同位数对齐；带单位列在表头标注（如 "心跳间隔 (秒)"）</span></td></tr>
<tr><td><span data-i18n="data-format:t025">大数缩写</span></td><td>1.2k / 12.5k / 1.2M</td><td><span class="mono">12.5k</span></td><td><span data-i18n="data-format:t026">仅在 DataCard / 仪表盘中使用，详情 / 表格保留完整数字</span></td></tr>
<tr><td><span data-i18n="data-format:t027">趋势数字</span></td><td><span data-i18n="data-format:t028">带正负号 + 图形</span></td><td><span class="mono">↑ +248</span> / <span class="mono">↓ -12</span></td><td><span data-i18n="data-format:t029">正数永远显式 + 号；颜色：增长视语义用 success / 也可用品牌灰</span></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="data-format:t030">日期与时间 · Date &amp; Time</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="data-format:t031">系统统一 ISO 8601 风格</span> <code>yyyy-MM-dd HH:mm:ss</code><span data-i18n="data-format:t032">，24 小时制。运维场景必须显示秒（故障定位精度）。时区显式标注 UTC 偏移</span> <code>+08:00</code><span data-i18n="data-format:t033">，多租户跨时区场景必标，禁止默认浏览器时区。</span></p>
<table class="map-table">
<thead><tr><th style="width:24%"><span data-i18n="data-format:t034">场景</span></th><th style="width:34%"><span data-i18n="data-format:t035">格式</span></th><th><span data-i18n="data-format:t036">使用规则</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="data-format:t037">完整日期时间</span></td><td><span class="mono">2026-04-28 14:32:18 +08:00</span></td><td><span data-i18n="data-format:t038">故障日志 / 审计 / 推送时间 / 操作记录 —— 一切需要精确定位的场景</span></td></tr>
<tr><td><span data-i18n="data-format:t039">仅日期</span></td><td><span class="mono">2026-04-28</span></td><td><span data-i18n="data-format:t040">报表 / 筛选条件 / 截止日期</span></td></tr>
<tr><td><span data-i18n="data-format:t041">仅时间</span></td><td><span class="mono">14:32:18</span></td><td><span data-i18n="data-format:t042">同日内的事件序列；秒位非必须时省略</span> <span class="mono">14:32</span></td></tr>
<tr><td><span data-i18n="data-format:t043">相对时间</span></td><td><span data-i18n="data-format:t044">"刚刚 / 5 分钟前 / 2 小时前 / 昨天 14:32"</span></td><td><span data-i18n="data-format:t045">实时性 ≤ 7 天的列表；超 7 天回退绝对时间。tooltip 始终显示绝对时间</span></td></tr>
<tr><td><span data-i18n="data-format:t046">当日切换</span></td><td><span data-i18n="data-format:t047">"今天 14:32" / "昨天 14:32"</span></td><td><span data-i18n="data-format:t048">设备最近心跳 / 最近上线 等高频比对场景</span></td></tr>
<tr><td><span data-i18n="data-format:t049">时间区间</span></td><td><span class="mono">2026-04-01 ~ 2026-04-28</span></td><td><span data-i18n="data-format:t050">RangePicker 默认分隔符波浪号；半角破折号 - 易与负号混淆</span></td></tr>
<tr><td><span data-i18n="data-format:t051">持续时长</span></td><td><span data-i18n="data-format:t052">"3天 5小时 12分" / "5h 12m" / "23s"</span></td><td><span data-i18n="data-format:t053">OTA 累计耗时 / 离线时长 / 升级用时；超 24h 用"天/小时/分"，否则用</span> <span class="mono">h/m/s</span></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="data-format:t054">设备标识 · Device Identifier</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="data-format:t055">所有设备标识强制 monospace（</span><code>--aw-font-mono</code><span data-i18n="data-format:t056">）+ 分组分隔，便于运维口头复述与肉眼比对。</span></p>
<table class="map-table">
<thead><tr><th style="width:18%"><span data-i18n="data-format:t057">类型</span></th><th style="width:30%"><span data-i18n="data-format:t058">格式</span></th><th style="width:24%"><span data-i18n="data-format:t059">示例</span></th><th><span data-i18n="data-format:t060">说明</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="data-format:t061">设备 SN</span></td><td><span class="mono">DEV-XXXXXXXX</span></td><td><span class="mono">DEV-86420075</span></td><td><span data-i18n="data-format:t062">固定前缀 + 8 位数字；列表展示完整，详情顶部突出</span></td></tr>
<tr><td>IMEI</td><td><span data-i18n="data-format:t063">15 位，4-6-5 分组</span></td><td><span class="mono">8642 007512 34567</span></td><td><span data-i18n="data-format:t064">口头读出友好；展示用空格，复制粘贴回退到无空格</span></td></tr>
<tr><td>IPv4</td><td><span data-i18n="data-format:t065">四段，半角点分</span></td><td><span class="mono">10.0.42.118</span></td><td><span data-i18n="data-format:t066">不补 0；私网外显示 ASN / 国家</span></td></tr>
<tr><td><span data-i18n="data-format:t067">MAC 地址</span></td><td><span data-i18n="data-format:t068">6 段，半角冒号</span></td><td><span class="mono">A8:5E:45:9F:11:02</span></td><td><span data-i18n="data-format:t069">大写；复制时保持冒号格式</span></td></tr>
<tr><td><span data-i18n="data-format:t070">固件版本</span></td><td><span data-i18n="data-format:t071">SemVer · v 前缀</span></td><td><span class="mono">v3.4.2</span></td><td><span data-i18n="data-format:t072">主.次.补；预发布</span> <span class="mono">v3.4.2-rc.1</span><span data-i18n="data-format:t073">；列表展示精确到 patch</span></td></tr>
<tr><td><span data-i18n="data-format:t074">批次号</span></td><td><span data-i18n="data-format:t075">日期 + 序号</span></td><td><span class="mono">PUSH-20260428-007</span></td><td><span data-i18n="data-format:t076">推送批次 / 升级任务 / 导入任务统一前缀，便于检索</span></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="data-format:t077">敏感数据脱敏 · Masking</span></h3>
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="data-format:t078">用户隐私数据列表 / 详情页默认脱敏，仅在管理员"查看完整"操作 + 服务端二次校验后展示原文。脱敏规则与服务端一致，前端不能"假脱敏"（DOM 中能拿到完整值）。</span></p>
<table class="map-table">
<thead><tr><th style="width:18%"><span data-i18n="data-format:t079">类型</span></th><th style="width:30%"><span data-i18n="data-format:t080">脱敏规则</span></th><th style="width:26%"><span data-i18n="data-format:t081">示例</span></th><th><span data-i18n="data-format:t082">展示方式</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="data-format:t083">手机</span></td><td><span data-i18n="data-format:t084">前 3 + 4 星 + 后 4</span></td><td><span class="mono">186 **** 1402</span></td><td><span data-i18n="data-format:t085">统一空格分组；点击"查看"调审计接口</span></td></tr>
<tr><td><span data-i18n="data-format:t086">邮箱</span></td><td><span data-i18n="data-format:t087">首字母 + 3 星 + @域名</span></td><td><span class="mono">d***@example.com</span></td><td><span data-i18n="data-format:t088">域名不脱敏</span></td></tr>
<tr><td><span data-i18n="data-format:t089">身份证</span></td><td><span data-i18n="data-format:t090">前 3 + 8 星 + 后 4</span></td><td><span class="mono">213***...***203</span></td><td><span data-i18n="data-format:t091">仅高敏页面默认显示</span></td></tr>
<tr><td><span data-i18n="data-format:t092">用户名</span></td><td><span data-i18n="data-format:t093">首字 + 星</span></td><td><span class="mono"><span data-i18n="data-format:t094">张***</span></span></td><td><span data-i18n="data-format:t095">列表中两位以下姓名只展示首字 + 星</span></td></tr>
<tr><td><span data-i18n="data-format:t096">设备 IP</span></td><td><span data-i18n="data-format:t097">段 3 / 段 4 脱敏</span></td><td><span class="mono">10.0.***.118</span></td><td><span data-i18n="data-format:t098">仅供应商租户场景脱敏；自营运维不脱敏</span></td></tr>
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
<h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="data-format:t107">Skeleton（不显示文字）</span></h3>
<p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="data-format:t108">表格 / 卡片用 antd</span> <code>Skeleton</code><span data-i18n="data-format:t109">；表内单格用</span> <span class="mono">⋯</span><span data-i18n="data-format:t110">（省略号）+ shimmer。禁止占位为"加载中..."文本（视觉跳动）。</span></p>
</div>
<div class="surface">
<div class="tag-meta" style="margin-bottom:8px"><span data-i18n="data-format:t111">错误</span></div>
<h3 style="margin:0 0 8px;font-size:14px"><span class="mono">--</span> <span data-i18n="data-format:t112">+ tooltip 错误码</span></h3>
<p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="data-format:t113">字段获取失败显示</span> <span class="mono">--</span><span data-i18n="data-format:t114">（双连字符）+ hover tooltip 给出错误码 / 重试按钮。整表失败用 ErrorPage，不在表格内堆叠错误行。</span></p>
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
<tr><td><span data-i18n="data-format:t131">本币（CNY 默认）</span></td><td><span class="mono">¥</span> <span data-i18n="data-format:t132">+ 数字 + 千分位</span></td><td><span class="mono">¥1,234.00</span></td><td><span data-i18n="data-format:t133">固定 2 位小数；货币符号紧贴数字</span></td></tr>
<tr><td><span data-i18n="data-format:t134">多币种</span></td><td><span data-i18n="data-format:t135">ISO 代码 + 空格 + 数字</span></td><td><span class="mono">USD 1,234.00</span></td><td><span data-i18n="data-format:t136">国际场景禁用 $ / £ / € 等歧义符号</span></td></tr>
<tr><td><span data-i18n="data-format:t137">正式文档</span></td><td><span data-i18n="data-format:t138">大写中文金额</span></td><td><span data-i18n="data-format:t139">壹仟贰佰叁拾肆元整</span></td><td><span data-i18n="data-format:t140">合同 / 发票场景；前端不实现，调用后端</span> <code>/format/cny</code></td></tr>
</tbody>
</table>
</div>
<div class="subsection">
<h3><span data-i18n="data-format:t141">规则 · Do &amp; Don'ts</span></h3>
<div class="demo-grid cols-2">
<div class="surface" style="border-left:3px solid var(--aw-success)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
<li><span data-i18n="data-format:t142">所有数字 / 日期通过</span> <code>@tms/format</code> <span data-i18n="data-format:t143">包格式化</span></li>
<li><span data-i18n="data-format:t144">表格数字列右对齐 +</span> <code>font-variant-numeric: tabular-nums</code></li>
<li><span data-i18n="data-format:t145">跨时区场景显式标注</span> <code>+HH:mm</code> <span data-i18n="data-format:t146">偏移</span></li>
<li><span data-i18n="data-format:t147">设备 SN / IMEI / IP / MAC 一律 monospace</span></li>
<li><span data-i18n="data-format:t148">空值统一用 em dash</span> <span class="mono">—</span></li>
<li><span data-i18n="data-format:t149">脱敏规则前后端一致（前端不能能解还原）</span></li>
</ul>
</div>
<div class="surface" style="border-left:3px solid var(--aw-danger)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
<li><span data-i18n="data-format:t150">不要在业务代码写</span> <code>new Date().toLocaleString()</code></li>
<li><span data-i18n="data-format:t151">不要用 12 小时制 + AM/PM（运维场景容易出错）</span></li>
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
<p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="data-format:t159">以下字典纳入</span> <code>@tms/dict</code><span data-i18n="data-format:t160">,用对象数组 schema,不用扁平 string[]。</span></p>
<table class="map-table">
<thead><tr><th><span data-i18n="data-format:t161">字典</span></th><th><span data-i18n="data-format:t162">旧 schema</span></th><th><span data-i18n="data-format:t163">升级方向</span></th><th><span data-i18n="data-format:t164">样例</span></th></tr></thead>
<tbody>
<tr><td><span data-i18n="data-format:t165">时区 zone</span></td><td><code>string[]</code> <span data-i18n="data-format:t166">UTC±HH:MM,15 分钟粒度,113 项(含 UTC-13:45)</span></td><td><span data-i18n="data-format:t167">对象数组 + IANA 名映射,供 timezone select</span></td><td><span class="mono">UTC+08:00 / UTC-05:00 / UTC+00:00</span></td></tr>
<tr><td><span data-i18n="data-format:t168">错误码 errorCode</span></td><td><code>{code→message}</code> + <code>default</code> <span data-i18n="data-format:t169">兜底</span></td><td><span data-i18n="data-format:t170">扩 OTA/推送/设备领域 + 接 i18n(旧仅英文写死)</span></td><td><span class="mono">401/404/429 + default</span></td></tr>
<tr><td><span data-i18n="data-format:t171">国家 country</span></td><td><code>string[]</code> <span data-i18n="data-format:t172">ISO-3166 alpha-2,240+ 项</span></td><td><code>{code, name_en, name_zh}</code> <span data-i18n="data-format:t173">对象数组</span></td><td><span class="mono">CN / US / JP / DE / BR</span></td></tr>
</tbody>
</table>
<p style="font-size:12px;color:var(--aw-text-3);margin:12px 0 0"><span data-i18n="data-format:t174">语言名不进字典池,用</span> <code>Intl.DisplayNames(locale, {'{type:"language"}'}).of(code)</code><span data-i18n="data-format:t175">。时区 15 分钟粒度比标准 IANA 更适合"运维手动选偏移"场景。</span></p>
</div>
</section>
</div>
`;
