/* AngelWatch Design System — page: i18n (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["i18n"] = `
<div class="content">
<!-- I18N -->
<section class="section" id="i18n">
  <p class="section-eyebrow"><span data-i18n="i18n:t001">设计基础 · 国际化</span></p>
  <h2><span data-i18n="i18n:t002">多语言 Internationalization</span></h2>
  <p class="lede"><span data-i18n="i18n:t003">本静态文档站支持 zh-CN / en-US 双语言，站点自身使用无依赖 data-i18n runtime 与 route catalog；业务 React 落地再使用</span> <span class="mono">ConfigProvider locale</span><span data-i18n="i18n:t004">与</span> <span class="mono">react-i18next</span> <span data-i18n="i18n:t005">。所有可见文本必须通过 leaf-only data-i18n 或业务侧</span> <span class="mono">t('namespace.key')</span> <span data-i18n="i18n:t006">管理，禁止硬编码。</span></p>

  <div class="subsection">
    <h3><span data-i18n="i18n:t007">翻译覆盖</span></h3>
    <div class="i18n-grid">
      <div class="i18n-card">
        <div class="lang-tag"><span><span data-i18n="i18n:t008">zh-CN · 简体中文</span></span><span class="flag">CN</span></div>
        <div class="stat-mini"><div class="ml"><span data-i18n="i18n:t009">已翻译 keys</span></div><div class="mn">6,289 / 6,289</div></div>
        <div class="stat-mini"><div class="ml"><span data-i18n="i18n:t010">覆盖率</span></div><div class="mn" style="color:var(--aw-success)">100%</div></div>
        <div class="stat-mini"><div class="ml"><span data-i18n="i18n:t011">来源</span></div><div class="mn" style="font-size:12px;font-weight:400;color:var(--aw-text-2)"><span data-i18n="i18n:t012">基准语言</span></div></div>
      </div>
      <div class="i18n-card">
        <div class="lang-tag"><span>en-US · English</span><span class="flag">US</span></div>
        <div class="stat-mini"><div class="ml"><span data-i18n="i18n:t013">已翻译 keys</span></div><div class="mn">6,289 / 6,289</div></div>
        <div class="stat-mini"><div class="ml"><span data-i18n="i18n:t014">覆盖率</span></div><div class="mn" style="color:var(--aw-success)">100%</div></div>
        <div class="stat-mini"><div class="ml"><span data-i18n="i18n:t015">维护人</span></div><div class="mn" style="font-size:12px;font-weight:400;color:var(--aw-text-2)">Localization Team</div></div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="i18n:t024">组件级中英对照 · Bilingual Component Showcase</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="i18n:t025">同一组件在 zh-CN 与 en-US 下的视觉对照。英文在导航、按钮、表头和表单 label 中通常更长，因此布局必须允许扩展，不能靠缩写牺牲词义(Mgt ✗ → Management ✓)。按钮 / 表头 / 表单 label / 状态用 Title Case;句子用 sentence case。</span></p>
    <div class="demo-grid cols-2">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px">Button</div>
        <div class="i18n-pair-grid">
          <div>
            <div style="font-size:11px;color:var(--aw-text-3);margin-bottom:6px">zh-CN</div>
            <div class="row"><button class="btn btn-primary"><span data-i18n="i18n:t026">保存</span></button><button class="btn"><span data-i18n="i18n:t027">取消</span></button><button class="btn btn-ghost-danger"><span data-i18n="i18n:t028">删除</span></button></div>
          </div>
          <div>
            <div style="font-size:11px;color:var(--aw-text-3);margin-bottom:6px">en-US</div>
            <div class="row"><button class="btn btn-primary">Save</button><button class="btn">Cancel</button><button class="btn btn-ghost-danger">Delete</button></div>
          </div>
        </div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px">Table Header</div>
        <div class="i18n-pair-grid">
          <div>
            <div style="font-size:11px;color:var(--aw-text-3);margin-bottom:6px">zh-CN</div>
            <table class="dt"><thead><tr><th><span data-i18n="i18n:t029">设备</span></th><th><span data-i18n="i18n:t030">所属机构</span></th><th><span data-i18n="i18n:t031">状态</span></th><th class="colactions"><span data-i18n="i18n:t032">操作</span></th></tr></thead></table>
          </div>
          <div>
            <div style="font-size:11px;color:var(--aw-text-3);margin-bottom:6px">en-US</div>
            <table class="dt"><thead><tr><th>Device</th><th>Organization</th><th>Status</th><th class="colactions">Actions</th></tr></thead></table>
          </div>
        </div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px">Status Tag</div>
        <div class="i18n-pair-grid">
          <div>
            <div style="font-size:11px;color:var(--aw-text-3);margin-bottom:6px">zh-CN</div>
            <div class="row"><span class="status-dot online"><span data-i18n="i18n:t033">在线</span></span><span class="status-dot offline"><span data-i18n="i18n:t034">离线</span></span><span class="status-dot fault"><span data-i18n="i18n:t035">故障</span></span><span class="status-dot is-neutral"><span data-i18n="i18n:t036">屏幕锁定</span></span></div>
          </div>
          <div>
            <div style="font-size:11px;color:var(--aw-text-3);margin-bottom:6px">en-US</div>
            <div class="row"><span class="status-dot online">Online</span><span class="status-dot offline">Offline</span><span class="status-dot fault">Faulty</span><span class="status-dot is-neutral">Screen Locked</span></div>
          </div>
        </div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px">Form Label</div>
        <div class="i18n-pair-grid">
          <div>
            <div style="font-size:11px;color:var(--aw-text-3);margin-bottom:6px">zh-CN</div>
            <div class="form-demo"><div class="form-row"><div class="lbl"><span class="req">*</span><span data-i18n="i18n:t037">设备名称</span></div><div><input class="input" placeholder="请输入设备名称"  data-i18n-placeholder="i18n:a038"/></div></div></div>
          </div>
          <div>
            <div style="font-size:11px;color:var(--aw-text-3);margin-bottom:6px">en-US</div>
            <div class="form-demo"><div class="form-row"><div class="lbl"><span class="req">*</span>Device Name</div><div><input class="input" placeholder="Enter device name" /></div></div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="surface" style="margin-top:12px;padding:14px">
      <h4 style="margin:0 0 8px;font-size:14px"><span data-i18n="i18n:t039">英文排版规范 English Typography Rules</span></h4>
      <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
        <li><b><span data-i18n="i18n:t040">大小写</span></b><span data-i18n="i18n:t041">:按钮 / 表头 / 表单 label / 状态标签用 Title Case(Save Changes、Last Online、Device Name);说明文 / placeholder / 错误信息用 sentence case(Enter device name)。</span></li>
        <li><b><span data-i18n="i18n:t042">不缩写</span></b><span data-i18n="i18n:t043">:Mgt ✗ → Management ✓;Conf ✗ → Configuration ✓;Desc ✗ → Description ✓;Operate(动词)作列名 → Actions(名词)✓;Detail(单数)作列名 → Details(复数)✓。</span></li>
        <li><b><span data-i18n="i18n:t044">标点</span></b><span data-i18n="i18n:t045">:英文用半角(</span><code>. , : ? !</code><span data-i18n="i18n:t046">)与半角空格;禁止全角(</span><code>,。:</code><span data-i18n="i18n:t047">)混入英文。中英混排时中英文之间加半角空格(“</span><code>AngelWatch 设计系统</code><span data-i18n="i18n:t048">”而非“</span><code>AngelWatch设计系统</code>").</li>
        <li><b><span data-i18n="i18n:t049">复数</span></b><span data-i18n="i18n:t050">:列表列名 / 计数用复数(Devices、Push Tasks、Applications);单数仅用于明确单实体(Device Detail、Account Information)。</span></li>
        <li><b><span data-i18n="i18n:t051">动词</span></b><span data-i18n="i18n:t052">:操作按钮用动词原形(Save、Cancel、Delete、Export);不用 -ing 做按钮(Saving ✗)。状态可用 -ing(Upgrading、Syncing)。</span></li>
        <li><b><span data-i18n="i18n:t053">专有词</span></b><span data-i18n="i18n:t054">:OTA、WIFI、IMEI、SN、APN 全大写保留;Wi-Fi Settings(英文用 Wi-Fi,中文业务词保留 WIFI)。</span></li>
      </ul>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="i18n:t055">Figma 国外版翻译证据 · 页面级对照</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="i18n:t056">Figma 的“国外版翻译”不是单纯词典，而是中文页面与英文页面的并排证据。实现时必须按页面族做 zh-CN / en-US 双语回归，不能只确认 key 存在。</span></p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:210px"><span data-i18n="i18n:t057">Figma 对照帧</span></th><th style="width:220px"><span data-i18n="i18n:t058">必须覆盖的 key 域</span></th><th><span data-i18n="i18n:t059">翻译与布局要求</span></th></tr></thead>
        <tbody>
          <tr><td><span data-i18n="i18n:t060">设备地图-设备查询-轨迹查询 / 已搜索</span></td><td><code>map.track.*</code>, <code>map.deviceLocation.*</code></td><td><span data-i18n="i18n:t061">保留“轨迹查询、开始时间、结束时间、起点、终点、设备编号”语义；国外版用 Track History / Start Time / End Time / Start Point / End Point，日期和坐标必须走 Intl 与数字格式化。</span></td></tr>
          <tr><td><span data-i18n="i18n:t062">设备地图-围栏管理-绘制围栏</span></td><td><code>map.fence.draw.*</code>, <code>map.fence.alert.*</code></td><td><span data-i18n="i18n:t063">绘制围栏是强操作流程，按钮必须区分 Save / Cancel / Edit / Delete；围栏名称、告警范围、关联设备要保留 tooltip，避免英文长文案溢出。</span></td></tr>
          <tr><td><span data-i18n="i18n:t064">应用市场-应用管理</span></td><td><code>market.app.*</code>, <code>market.version.*</code></td><td><span data-i18n="i18n:t065">Figma 国外版给出 Draft / Published / Removed 对照。状态词进入统一枚举，不允许每个页面自行翻译“草稿、已上架、已下架”。</span></td></tr>
          <tr><td><span data-i18n="i18n:t066">数据中心-设备管理</span></td><td><code>device.list.*</code>, <code>device.overdue.*</code></td><td><span data-i18n="i18n:t067">Device Management、Device Grouping、Model Management、Parameter Management、Online Scheme、Overdue Devices 是侧边栏和表格联动词；表头按最长译文设置最小宽度。</span></td></tr>
          <tr><td><span data-i18n="i18n:t068">数据中心-设备管理-设备详情</span></td><td><code>device.detail.*</code>, <code>device.telemetry.*</code></td><td><span data-i18n="i18n:t069">设备详情字段多且单位密集：系统版本、固件版本、电池电量、IP地址、DSN、IMEI-IMSI-icc_id 必须拆成 label key 与 value formatter，不能拼字符串。</span></td></tr>
          <tr><td><span data-i18n="i18n:t070">用户端-主页-主题-侧边栏</span></td><td><code>nav.*</code>, <code>shell.notice.*</code></td><td><span data-i18n="i18n:t071">英文导航证据包含 Home、Application Management、OTA Management、Push Task、Data Center、Account Information、Device Map、Statistics、Value-added Services、System Management。产品导航翻译由 nav namespace 统一维护。</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="i18n:t072">国外版验收口径：</span></strong><span data-i18n="i18n:t073">每个被 Figma 标记为国外版的页面必须保存 zh-CN / en-US 双列截图，并核对导航、表头、按钮、状态、日期、数字、单位六类文本。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="i18n:t074">Key 命名约定</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 14px;max-width:720px;line-height:1.6"><span class="mono">route:key / namespace.module.element.state</span><span data-i18n="i18n:t075">。静态站 namespace 与 route id 一致，英文 catalog 放在 i18n/en-US/&lt;route&gt;.js；业务仓库可继续使用模块化 key。每条 key 必须有 zh-CN 与 en-US，PR 阶段用 i18n lint 阻断缺失 key。</span></p>
    <div class="i18n-keys"><span class="c"><span data-i18n="i18n:t076">// locales/en-US/device.json — 节选</span></span>
{
  <span class="k">"device.list.title"</span>: <span class="v">"Device Management"</span>,
  <span class="k">"device.list.search.placeholder"</span>: <span class="v">"Search by SN, name or owner"</span>,
  <span class="k">"device.list.column.sn"</span>: <span class="v">"Serial Number"</span>,
  <span class="k">"device.list.column.status"</span>: <span class="v">"Status"</span>,
  <span class="k">"device.list.column.lastOnline"</span>: <span class="v">"Last Online"</span>,
  <span class="k">"device.list.action.batchUpgrade"</span>: <span class="v">"Batch Upgrade"</span>,
  <span class="k">"device.detail.tab.telemetry"</span>: <span class="v">"Telemetry"</span>,
  <span class="k">"device.detail.alert.lowBattery"</span>: <span class="v">"Battery below threshold (current: {{<span class="k">value</span>}}%)"</span>,
  <span class="k">"device.status.online"</span>: <span class="v">"Online"</span>,
  <span class="k">"device.status.upgrading"</span>: <span class="v">"Upgrading"</span>,
  <span class="k">"device.status.fault"</span>: <span class="v">"Faulty"</span>,
  <span class="k">"device.status.offline"</span>: <span class="v">"Offline"</span>,
  <span class="k">"device.status.locked"</span>: <span class="v">"Locked"</span>,
  <span class="c"><span data-i18n="i18n:t077">// 复数：i18next 自动选取 _one / _other</span></span>
  <span class="k">"device.batch.confirm_one"</span>: <span class="v">"Upgrade {{<span class="k">count</span>}} device?"</span>,
  <span class="k">"device.batch.confirm_other"</span>: <span class="v">"Upgrade {{<span class="k">count</span>}} devices?"</span>
}</div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="i18n:t078">溢出与对齐 · 三大常见陷阱</span></h3>
    <div class="i18n-overflow">
      <div class="surface" style="padding:14px">
        <h4><span data-i18n="i18n:t079">1. 按钮文本长度</span></h4>
        <div class="bad-row"><span class="lbl-tag bad">BAD</span><button class="btn btn-primary" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px">Realizar atu…</button></div>
        <div class="good-row"><span class="lbl-tag good">GOOD</span><button class="btn btn-primary" style="height:auto;white-space:normal;line-height:1.3;padding:6px 12px">Realizar<br/>atualização</button></div>
        <p style="font-size:11px;color:var(--aw-text-3);margin:6px 0 0"><span data-i18n="i18n:t080">允许两行；最小高度 32 px → 48 px。</span></p>
      </div>
      <div class="surface" style="padding:14px">
        <h4><span data-i18n="i18n:t081">2. 表单标签宽度</span></h4>
        <div class="bad-row"><span class="lbl-tag bad">BAD</span><span style="font-size:12px;width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--aw-text-2)">Número de seri…</span><span style="font-size:12px;color:var(--aw-text-3)">DEV-86420</span></div>
        <div class="good-row"><span class="lbl-tag good">GOOD</span><span style="font-size:12px;color:var(--aw-text-2);max-width:180px;line-height:1.4">Número de série</span><span style="font-size:12px;color:var(--aw-text-3)">DEV-86420</span></div>
        <p style="font-size:11px;color:var(--aw-text-3);margin:6px 0 0"><span data-i18n="i18n:t082">表单宽度 ≥ 最长译文 + 24 px。</span></p>
      </div>
      <div class="surface" style="padding:14px">
        <h4><span data-i18n="i18n:t083">3. 日期 / 数字格式</span></h4>
        <div style="font-family:var(--aw-font-mono);font-size:11px;display:grid;grid-template-columns:50px 1fr;gap:4px 8px;color:var(--aw-text-2)">
          <span style="color:var(--aw-text-3)">zh-CN</span><span>2026/04/12 14:30:08 · 12,486</span>
          <span style="color:var(--aw-text-3)">en-US</span><span>04/12/2026 2:30 PM · 12,486</span>
        </div>
        <p style="font-size:11px;color:var(--aw-text-3);margin:8px 0 0"><span data-i18n="i18n:t084">必须用</span> <span class="mono">Intl.DateTimeFormat / NumberFormat</span><span data-i18n="i18n:t085">，禁止字符串拼接。</span></p>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="i18n:t086">长文本溢出 · 三处常见兜底</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="i18n:t087">侧栏菜单、按钮、表头是 i18n 长文本灾区。每处的兜底策略不同。</span></p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:140px"><span data-i18n="i18n:t088">位置</span></th><th style="width:200px"><span data-i18n="i18n:t089">兜底策略</span></th><th><span data-i18n="i18n:t090">说明</span></th></tr></thead>
        <tbody>
          <tr><td><span data-i18n="i18n:t091">侧栏菜单</span></td><td><span data-i18n="i18n:t092">截断 + tooltip</span></td><td><span data-i18n="i18n:t093">菜单项最大宽度 200px (展开态)；超出 ellipsis；hover 200ms 后浮出 tooltip 显示完整文案</span></td></tr>
          <tr><td><span data-i18n="i18n:t094">按钮</span></td><td><span data-i18n="i18n:t095">自适应宽度，最长 12 字符后换行降级</span></td><td><span data-i18n="i18n:t096">≤ 12 char 单行；&gt; 12 char 允许两行（line-height 1.3，按钮高度由 32 → 48 自动撑开）；&gt; 24 char 必须改 i18n key（行话）</span></td></tr>
          <tr><td><span data-i18n="i18n:t097">表头</span></td><td><span data-i18n="i18n:t098">截断 + tooltip</span></td><td><span data-i18n="i18n:t099">列宽固定时表头超出 ellipsis；hover 浮 tooltip。表头用最短描述（如 "时间" 而非 "最后心跳时间"），完整描述放 tooltip</span></td></tr>
          <tr><td><span data-i18n="i18n:t100">表单 label</span></td><td><span data-i18n="i18n:t101">固定宽度，自动右对齐</span></td><td><span data-i18n="i18n:t102">label 区域宽度按最长译文设定（lint 阶段计算）；过长时改两行</span></td></tr>
          <tr><td>Tag / Status</td><td><span data-i18n="i18n:t103">不允许换行</span></td><td><span data-i18n="i18n:t104">状态标签必须保持一行。如 pt 翻译过长需要重新选词或缩写（与本地化团队协商）</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="i18n:t105">ICU MessageFormat · 复数与变量</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="i18n:t106">英文复数使用 one/other 两态；中文无复数变化。i18next 内置复数后缀选择；如采用 ICU MessageFormat，需额外插件 / 配置。全部复数 key 用</span> <code>_one</code> / <code>_other</code> <span data-i18n="i18n:t107">后缀。</span></p>
    <div class="surface" style="padding:14px">
      <div style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
        <div style="color:var(--aw-text-3)">// locales/<lang>/device.json</div>
        <div><b style="color:var(--aw-primary)">zh-CN</b>:  <span style="color:var(--aw-success)">"upgrade.confirm"</span>: <span style="color:#CF1322"><span data-i18n="i18n:t108">"升级 {{count}} 台设备？"</span></span>  <span style="color:var(--aw-text-4)"><span data-i18n="i18n:t109">// 中文不区分单复数</span></span></div>
        <div style="margin-top:6px"><b style="color:var(--aw-primary)">en-US</b>:</div>
        <div style="padding-left:16px"><span style="color:var(--aw-success)">"upgrade.confirm_one"</span>: <span style="color:#CF1322">"Upgrade 1 device?"</span></div>
        <div style="padding-left:16px"><span style="color:var(--aw-success)">"upgrade.confirm_other"</span>: <span style="color:#CF1322">"Upgrade {{count}} devices?"</span></div>
        <div style="margin-top:8px;color:var(--aw-text-3)"><span data-i18n="i18n:t110">// 调用</span></div>
        <div>t(<span style="color:var(--aw-success)">'upgrade.confirm'</span>, { count })  <span style="color:var(--aw-text-4)"><span data-i18n="i18n:t111">// i18next 自动取 _one / _other</span></span></div>
      </div>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="i18n:t112">变量插值用 {{var}}</span></strong><span data-i18n="i18n:t113">（i18next 风格），不要用 ES template literal。变量值不允许 HTML，需要富文本走 Trans 组件。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="i18n:t114">Intl 完整样例 · 日期 / 数字 / 货币</span></h3>
    <div class="surface" style="padding:14px">
      <div style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.85;color:var(--aw-text-2)">
        <div style="color:var(--aw-text-3)"><span data-i18n="i18n:t115">// 日期</span></div>
        <div>new <b>Intl.DateTimeFormat</b>(locale, { dateStyle: <span style="color:#CF1322">'medium'</span>, timeStyle: <span style="color:#CF1322">'short'</span> }).format(d)</div>
        <div style="padding-left:16px;color:var(--aw-text-4)"><span data-i18n="i18n:t116">→ zh-CN: 2026年4月12日 14:30 · en-US: Apr 12, 2026, 2:30 PM</span></div>
        <div style="margin-top:8px;color:var(--aw-text-3)"><span data-i18n="i18n:t117">// 数字 (千分位)</span></div>
        <div>new <b>Intl.NumberFormat</b>(locale).format(12486)</div>
        <div style="padding-left:16px;color:var(--aw-text-4)">→ zh-CN/en-US: 12,486</div>
        <div style="margin-top:8px;color:var(--aw-text-3)"><span data-i18n="i18n:t118">// 货币</span></div>
        <div>new <b>Intl.NumberFormat</b>(locale, { style: <span style="color:#CF1322">'currency'</span>, currency: <span style="color:#CF1322">'USD'</span> }).format(1234.5)</div>
        <div style="padding-left:16px;color:var(--aw-text-4)">→ zh-CN: US$1,234.50 · en-US: $1,234.50</div>
        <div style="margin-top:8px;color:var(--aw-text-3)"><span data-i18n="i18n:t119">// 相对时间</span></div>
        <div>new <b>Intl.RelativeTimeFormat</b>(locale, { numeric: <span style="color:#CF1322">'auto'</span> }).format(-2, <span style="color:#CF1322">'minute'</span>)</div>
        <div style="padding-left:16px;color:var(--aw-text-4)"><span data-i18n="i18n:t120">→ zh-CN: 2 分钟前 · en-US: 2 minutes ago</span></div>
      </div>
    </div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong><span data-i18n="i18n:t121">禁止字符串拼接：</span></strong><code>&#96;&#36;{y}-&#36;{m}-&#36;{d}&#96;</code> <span data-i18n="i18n:t122">在不同 locale 下顺序错乱。所有日期 / 数字必须经 Intl 输出。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="i18n:t123">双语回归对照 · 同一界面 2 列</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="i18n:t124">每次添加 / 修改 i18n key 后，对照 zh-CN 与 en-US 的长度差异。英文通常更长，按钮、表头和侧栏是主要溢出风险。</span></p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:120px"><span data-i18n="i18n:t125">位置 / Key</span></th><th>zh-CN</th><th>en-US</th></tr></thead>
        <tbody>
          <tr><td>nav.devices</td><td><span data-i18n="i18n:t126">设备管理</span></td><td>Devices</td></tr>
          <tr><td>nav.ota</td><td><span data-i18n="i18n:t127">OTA 升级</span></td><td>OTA Upgrade</td></tr>
          <tr><td>action.batchUpgrade</td><td><span data-i18n="i18n:t128">批量升级</span></td><td>Batch Upgrade</td></tr>
          <tr><td>btn.saveSettings</td><td><span data-i18n="i18n:t129">保存设置</span></td><td>Save Settings</td></tr>
          <tr><td>col.lastOnline</td><td><span data-i18n="i18n:t130">最后心跳</span></td><td>Last Heartbeat</td></tr>
          <tr><td>status.upgrading</td><td><span data-i18n="i18n:t131">升级中</span></td><td>Upgrading</td></tr>
          <tr><td>placeholder.search</td><td><span data-i18n="i18n:t132">搜索 SN / 名称 / 负责人</span></td><td>Search by SN, name, or owner</td></tr>
          <tr><td>tooltip.battery</td><td><span data-i18n="i18n:t133">电池电量低于 20%</span></td><td>Battery below 20%</td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="i18n:t134">提交 PR 时附双列截图</span></strong><span data-i18n="i18n:t135">（业务仓库接入 Storybook / CI 后，可自动生成 zh-CN / en-US 的同一组件截图并上传到 PR 评论）。设计 + 本地化双方 review。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="i18n:t136">反例</span></h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong><span data-i18n="i18n:t137">禁止</span> <code>'已删除 ' + n + ' 台设备'</code> <span data-i18n="i18n:t138">这样的字符串拼接：</span></strong><span data-i18n="i18n:t139">无法翻译为复数语言；改用 i18next 复数 key 与</span> <code>{{count}}</code> <span data-i18n="i18n:t140">占位符。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="i18n:t141">禁止把字段名写死成英文：</span></strong><span data-i18n="i18n:t142">如</span> <code>label: "Battery"</code><span data-i18n="i18n:t143">。所有用户可见文本必须</span> <code>t('field.battery')</code><span data-i18n="i18n:t144">，包括 placeholder、tooltip、错误信息。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="i18n:t145">禁止从浏览器 Date 拼日期：</span></strong><code>d.toLocaleDateString()</code> <span data-i18n="i18n:t146">看似支持 i18n 但格式不可控（不同浏览器输出不同）。一律 Intl。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="i18n:t147">涉及变量 / 工具</span></h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div>react-i18next · ICU MessageFormat · Intl.DateTimeFormat / NumberFormat / RelativeTimeFormat</div>
      <div style="margin-top:4px"><span data-i18n="i18n:t148">CI 检查：未包裹的中文字面量扫描 · key 缺失检测 · 双语长度差异告警</span></div>
      <div style="margin-top:4px"><span data-i18n="i18n:t149">UI 兜底：max-width + ellipsis + tooltip · button 自适应高度 · table column min-width</span></div>
    </div>
  </div>
</section>
</div>
`;
