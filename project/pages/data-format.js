/* AngelWatch Design System — page: data-format (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["data-format"] = `
<div class="content">
<section class="section" id="data-format">
  <p class="section-eyebrow">Specs · 数据格式</p>
  <h2>Data Format · 数据格式</h2>
  <p class="lede">数字、日期、设备标识、文件大小、敏感数据、空值、错误 —— 七类高频展示数据的格式收口规范。所有格式化必须走 <code>Intl.*</code> API 或 <code>@tms/format</code> 工具包，禁止手写 <code>toLocaleString</code> 散落在业务代码。</p>

  <div class="subsection">
    <h3>数字 · Number</h3>
    <table class="map-table">
      <thead><tr><th style="width:18%">场景</th><th style="width:28%">格式</th><th style="width:22%">示例</th><th>规则</th></tr></thead>
      <tbody>
        <tr><td>大数字</td><td>千分位（半角逗号）</td><td><span class="mono">12,486</span></td><td>≥ 1000 必须分隔；表格右对齐 + 等宽字符（<code>font-feature-settings: "tnum"</code>）</td></tr>
        <tr><td>百分比</td><td>数字 + <span class="mono">%</span> · 固定 2 位小数</td><td><span class="mono">98.20%</span></td><td>不补 0 会让"98%"和"98.5%"对不齐；趋势用 ↑↓ 配独立列</td></tr>
        <tr><td>带单位</td><td>数字 + 半角空格 + 单位</td><td><span class="mono">123,220 kg</span></td><td>单位 lowercase；常用单位收口到表头，单元格只放数字</td></tr>
        <tr><td>表格数字</td><td>右对齐 + tnum</td><td><span class="mono">12,486</span></td><td>同列同位数对齐；带单位列在表头标注（如 "心跳间隔 (秒)"）</td></tr>
        <tr><td>大数缩写</td><td>1.2k / 12.5k / 1.2M</td><td><span class="mono">12.5k</span></td><td>仅在 DataCard / 仪表盘中使用，详情 / 表格保留完整数字</td></tr>
        <tr><td>趋势数字</td><td>带正负号 + 图形</td><td><span class="mono">↑ +248</span> / <span class="mono">↓ -12</span></td><td>正数永远显式 + 号；颜色：增长视语义用 success / 也可用品牌灰</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>日期与时间 · Date &amp; Time</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">系统统一 ISO 8601 风格 <code>yyyy-MM-dd HH:mm:ss</code>，24 小时制。运维场景必须显示秒（故障定位精度）。时区显式标注 UTC 偏移 <code>+08:00</code>，多租户跨时区场景必标，禁止默认浏览器时区。</p>
    <table class="map-table">
      <thead><tr><th style="width:24%">场景</th><th style="width:34%">格式</th><th>使用规则</th></tr></thead>
      <tbody>
        <tr><td>完整日期时间</td><td><span class="mono">2026-04-28 14:32:18 +08:00</span></td><td>故障日志 / 审计 / 推送时间 / 操作记录 —— 一切需要精确定位的场景</td></tr>
        <tr><td>仅日期</td><td><span class="mono">2026-04-28</span></td><td>报表 / 筛选条件 / 截止日期</td></tr>
        <tr><td>仅时间</td><td><span class="mono">14:32:18</span></td><td>同日内的事件序列；秒位非必须时省略 <span class="mono">14:32</span></td></tr>
        <tr><td>相对时间</td><td>"刚刚 / 5 分钟前 / 2 小时前 / 昨天 14:32"</td><td>实时性 ≤ 7 天的列表；超 7 天回退绝对时间。tooltip 始终显示绝对时间</td></tr>
        <tr><td>当日切换</td><td>"今天 14:32" / "昨天 14:32"</td><td>设备最近心跳 / 最近上线 等高频比对场景</td></tr>
        <tr><td>时间区间</td><td><span class="mono">2026-04-01 ~ 2026-04-28</span></td><td>RangePicker 默认分隔符波浪号；半角破折号 - 易与负号混淆</td></tr>
        <tr><td>持续时长</td><td>"3天 5小时 12分" / "5h 12m" / "23s"</td><td>OTA 累计耗时 / 离线时长 / 升级用时；超 24h 用"天/小时/分"，否则用 <span class="mono">h/m/s</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>设备标识 · Device Identifier</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">所有设备标识强制 monospace（<code>--aw-font-mono</code>）+ 分组分隔，便于运维口头复述与肉眼比对。</p>
    <table class="map-table">
      <thead><tr><th style="width:18%">类型</th><th style="width:30%">格式</th><th style="width:24%">示例</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>设备 SN</td><td><span class="mono">DEV-XXXXXXXX</span></td><td><span class="mono">DEV-86420075</span></td><td>固定前缀 + 8 位数字；列表展示完整，详情顶部突出</td></tr>
        <tr><td>IMEI</td><td>15 位，4-6-5 分组</td><td><span class="mono">8642 007512 34567</span></td><td>口头读出友好；展示用空格，复制粘贴回退到无空格</td></tr>
        <tr><td>IPv4</td><td>四段，半角点分</td><td><span class="mono">10.0.42.118</span></td><td>不补 0；私网外显示 ASN / 国家</td></tr>
        <tr><td>MAC 地址</td><td>6 段，半角冒号</td><td><span class="mono">A8:5E:45:9F:11:02</span></td><td>大写；复制时保持冒号格式</td></tr>
        <tr><td>固件版本</td><td>SemVer · v 前缀</td><td><span class="mono">v3.4.2</span></td><td>主.次.补；预发布 <span class="mono">v3.4.2-rc.1</span>；列表展示精确到 patch</td></tr>
        <tr><td>批次号</td><td>日期 + 序号</td><td><span class="mono">PUSH-20260428-007</span></td><td>推送批次 / 升级任务 / 导入任务统一前缀，便于检索</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>敏感数据脱敏 · Masking</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">用户隐私数据列表 / 详情页默认脱敏，仅在管理员"查看完整"操作 + 服务端二次校验后展示原文。脱敏规则与服务端一致，前端不能"假脱敏"（DOM 中能拿到完整值）。</p>
    <table class="map-table">
      <thead><tr><th style="width:18%">类型</th><th style="width:30%">脱敏规则</th><th style="width:26%">示例</th><th>展示方式</th></tr></thead>
      <tbody>
        <tr><td>手机</td><td>前 3 + 4 星 + 后 4</td><td><span class="mono">186 **** 1402</span></td><td>统一空格分组；点击"查看"调审计接口</td></tr>
        <tr><td>邮箱</td><td>首字母 + 3 星 + @域名</td><td><span class="mono">d***@example.com</span></td><td>域名不脱敏</td></tr>
        <tr><td>身份证</td><td>前 3 + 8 星 + 后 4</td><td><span class="mono">213***...***203</span></td><td>仅高敏页面默认显示</td></tr>
        <tr><td>用户名</td><td>首字 + 星</td><td><span class="mono">张***</span></td><td>列表中两位以下姓名只展示首字 + 星</td></tr>
        <tr><td>设备 IP</td><td>段 3 / 段 4 脱敏</td><td><span class="mono">10.0.***.118</span></td><td>仅供应商租户场景脱敏；自营运维不脱敏</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>空值 / 加载中 / 错误</h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">空值</div>
        <h3 style="margin:0 0 8px;font-size:14px">展示为 <span class="mono">—</span>（em dash）</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">字段值为 <code>null</code> / <code>undefined</code> / 空字符串统一渲染 <span class="mono">—</span>（U+2014），颜色 <code>--aw-text-3</code>。禁用 "N/A" / "无" / "暂无" 等多种写法并存。</p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">加载中</div>
        <h3 style="margin:0 0 8px;font-size:14px">Skeleton（不显示文字）</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">表格 / 卡片用 antd <code>Skeleton</code>；表内单格用 <span class="mono">⋯</span>（省略号）+ shimmer。禁止占位为"加载中..."文本（视觉跳动）。</p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">错误</div>
        <h3 style="margin:0 0 8px;font-size:14px"><span class="mono">--</span> + tooltip 错误码</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">字段获取失败显示 <span class="mono">--</span>（双连字符）+ hover tooltip 给出错误码 / 重试按钮。整表失败用 ErrorPage，不在表格内堆叠错误行。</p>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>文件大小 · File Size</h3>
    <table class="map-table">
      <thead><tr><th style="width:22%">范围</th><th style="width:24%">单位</th><th style="width:24%">示例</th><th>规则</th></tr></thead>
      <tbody>
        <tr><td>&lt; 1 KB</td><td>B</td><td><span class="mono">896 B</span></td><td>整数</td></tr>
        <tr><td>1 KB ~ 1 MB</td><td>KB</td><td><span class="mono">128.4 KB</span></td><td>1 位小数</td></tr>
        <tr><td>1 MB ~ 1 GB</td><td>MB</td><td><span class="mono">12.8 MB</span></td><td>1 位小数；固件包典型范围</td></tr>
        <tr><td>≥ 1 GB</td><td>GB</td><td><span class="mono">2.4 GB</span></td><td>1 位小数；批量日志导出场景</td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">单位制：</b>固件 / 日志统一用 1024 进制（KiB/MiB），用户可见时简写为 KB/MB；网络传输统计用 1000 进制（kbps），不与文件大小混。</p>
  </div>

  <div class="subsection">
    <h3>货币 / 金额（用户管理 / 计费场景）</h3>
    <table class="map-table">
      <thead><tr><th style="width:24%">场景</th><th style="width:30%">格式</th><th style="width:22%">示例</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>本币（CNY 默认）</td><td><span class="mono">¥</span> + 数字 + 千分位</td><td><span class="mono">¥1,234.00</span></td><td>固定 2 位小数；货币符号紧贴数字</td></tr>
        <tr><td>多币种</td><td>ISO 代码 + 空格 + 数字</td><td><span class="mono">USD 1,234.00</span></td><td>国际场景禁用 $ / £ / € 等歧义符号</td></tr>
        <tr><td>正式文档</td><td>大写中文金额</td><td>壹仟贰佰叁拾肆元整</td><td>合同 / 发票场景；前端不实现，调用后端 <code>/format/cny</code></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>规则 · Do &amp; Don'ts</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>所有数字 / 日期通过 <code>@tms/format</code> 包格式化</li>
          <li>表格数字列右对齐 + <code>font-variant-numeric: tabular-nums</code></li>
          <li>跨时区场景显式标注 <code>+HH:mm</code> 偏移</li>
          <li>设备 SN / IMEI / IP / MAC 一律 monospace</li>
          <li>空值统一用 em dash <span class="mono">—</span></li>
          <li>脱敏规则前后端一致（前端不能能解还原）</li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>不要在业务代码写 <code>new Date().toLocaleString()</code></li>
          <li>不要用 12 小时制 + AM/PM（运维场景容易出错）</li>
          <li>不要并存"暂无 / N/A / 无 / 空"多种空值表达</li>
          <li>不要用 <span class="mono">$</span> 表示 CNY，用 <span class="mono">¥</span> 或 ISO 代码</li>
          <li>不要在表格内换行展示长 ID（用 monospace + ellipsis + tooltip）</li>
          <li>不要在前端二次脱敏后端已脱敏字段（双重星号）</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
