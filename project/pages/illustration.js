/* AngelWatch Design System — page: illustration (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["illustration"] = `
<div class="content">
<section class="section" id="illustration">
  <p class="section-eyebrow"><span data-i18n="illustration:t001">设计基础 · 图形化</span></p>
  <h2 role="heading" aria-level="1"><span data-i18n="illustration:t002">图形化规则 Illustration</span></h2>
  <p class="lede"><span data-i18n="illustration:t003">企业级中后台应限制装饰性插画。当前消费者的图形化实现集中在：</span><b><span data-i18n="illustration:t004">登录页</span></b><span data-i18n="illustration:t005">使用 token 化、代码内的 NetworkRing；</span><b><span data-i18n="illustration:t006">异常页</span></b><span data-i18n="illustration:t007">由 ErrorPage 封装 antd Result。数据空态由 TMSEmpty 使用简版 SVG。未来独立资源必须随包自托管，禁止运行时外链；下方线性 / 单色是新增独立资产的目标约束，不把现状例外写成已合规。</span></p>

  <div class="subsection">
    <h3><span data-i18n="illustration:t008">使用场景与当前实现</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="illustration:t009">场景 · 01</span></div>
        <h3 style="margin:0 0 10px;font-size:14px"><span data-i18n="illustration:t010">LoginPage 主视觉</span></h3>
        <div class="illust-frame">
          <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--aw-primary-text);width:100%;height:auto">
            <rect x="20" y="30" width="160" height="100" rx="6"/>
            <rect x="35" y="50" width="60" height="14" rx="2"/>
            <rect x="35" y="74" width="130" height="14" rx="2"/>
            <rect x="35" y="98" width="130" height="14" rx="2"/>
            <circle cx="155" cy="40" r="3" fill="currentColor"/>
            <circle cx="145" cy="40" r="3"/>
            <circle cx="135" cy="40" r="3"/>
            <path d="M70 130 Q100 110 130 130" stroke-dasharray="3 3"/>
          </svg>
        </div>
        <p style="margin:10px 0 0;font-size:12px;color:var(--aw-text-3);line-height:1.7"><span data-i18n="illustration:t011">当前 LoginPage 使用 NetworkRing.tsx 的代码内 SVG / CSS，以登录语义 token 表达「设备 + 连接 + 守护」，不是外置插画包。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="illustration:t012">场景 · 02</span></div>
        <h3 style="margin:0 0 10px;font-size:14px">ErrorPage(404 / 403 / 500)</h3>
        <div class="illust-frame">
          <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--aw-text-3);width:100%;height:auto">
            <text x="100" y="80" text-anchor="middle" font-size="48" font-weight="600" fill="currentColor" stroke="none">404</text>
            <path d="M40 110 L160 110" stroke-dasharray="2 4"/>
            <circle cx="60" cy="125" r="4"/>
            <circle cx="100" cy="125" r="4"/>
            <circle cx="140" cy="125" r="4"/>
            <path d="M50 35 L60 25 M150 35 L140 25 M100 25 L100 15"/>
          </svg>
        </div>
        <p style="margin:10px 0 0;font-size:12px;color:var(--aw-text-3);line-height:1.7"><span data-i18n="illustration:t013">当前 ErrorPage 把 404 / 403 / 500 / Network 映射到 antd Result；上图是未来自定义错误资产的风格参考，不代表消费者已存在对应 SVG。</span></p>
      </div>
    </div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="illustration:t014">明确禁止：</span></b><span data-i18n="illustration:t015">仪表盘 / 列表 / 详情 / 表单 / 设置等业务页禁止使用装饰性插画占位。数据空态使用 TMSEmpty；路由、权限和系统异常使用 ErrorPage。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="illustration:t016">风格规范</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:22%"><span data-i18n="illustration:t017">维度</span></th><th style="width:32%"><span data-i18n="illustration:t018">规则</span></th><th><span data-i18n="illustration:t019">说明</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="illustration:t020">风格</span></td><td><span data-i18n="illustration:t021">线性 (Outlined) + 单色</span></td><td><span data-i18n="illustration:t022">不用渐变 / 不用阴影 / 不用 3D 透视</span></td></tr>
        <tr><td><span data-i18n="illustration:t023">描边</span></td><td>1.5px stroke + round cap/join</td><td><span data-i18n="illustration:t024">与图标系统一致，避免视觉断层</span></td></tr>
        <tr><td><span data-i18n="illustration:t025">颜色</span></td><td><code>currentColor</code> <span data-i18n="illustration:t026">单色</span></td><td><span data-i18n="illustration:t027">登录用</span> <code>--aw-primary</code><span data-i18n="illustration:t028">；错误页用</span> <code>--aw-text-3</code> <span data-i18n="illustration:t029">灰阶</span></td></tr>
        <tr><td><span data-i18n="illustration:t030">底</span></td><td><span data-i18n="illustration:t031">透明</span></td><td><span data-i18n="illustration:t032">不带白底；浮于卡片上自动适配 light/dark</span></td></tr>
        <tr><td><span data-i18n="illustration:t033">构图</span></td><td><span data-i18n="illustration:t034">居中 + 留白</span></td><td><span data-i18n="illustration:t035">16:9 视图盒，主形象不超过 70% 高度</span></td></tr>
        <tr><td><span data-i18n="illustration:t036">抽象度</span></td><td><span data-i18n="illustration:t037">象征性，不写实</span></td><td><span data-i18n="illustration:t038">设备 = 方形 + 圆角 + 线条，不画具体型号</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="illustration:t039">尺寸规范</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:24%"><span data-i18n="illustration:t040">用途</span></th><th style="width:28%"><span data-i18n="illustration:t041">尺寸</span></th><th><span data-i18n="illustration:t042">说明</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="illustration:t043">登录主视觉</span></td><td>480 × 360 px</td><td><span data-i18n="illustration:t044">左侧栏 50% 区域，竖屏自适应不溢出</span></td></tr>
        <tr><td><span data-i18n="illustration:t045">错误页插画</span></td><td>320 × 240 px</td><td><span data-i18n="illustration:t046">页面中央上方</span></td></tr>
        <tr><td><span data-i18n="illustration:t047">移动端缩略</span></td><td><span data-i18n="illustration:t048">240 × 180 px（错误页）</span></td><td><span data-i18n="illustration:t049">窗口 ≤ 768px 自动切换</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="illustration:t050">主题适配 · Light / Dark</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="illustration:t051">新增独立线性 SVG 内部优先使用</span> <code>currentColor</code><span data-i18n="illustration:t052">，外层只引用语义 token 控色。</span> <span data-i18n="illustration:t053">Light / Dark 使用各自显式 token 值，不通过 filter 推导颜色。</span></p>
    <div class="theme-compare">
      <div class="tc-col" data-theme="light">
        <div class="tc-tag">☀ Light</div>
        <div class="tc-stack">
          <div style="text-align:center;padding:24px 0">
            <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--aw-primary-text);width:120px;height:auto">
              <rect x="10" y="20" width="80" height="50" rx="4"/>
              <rect x="20" y="30" width="30" height="6" rx="1"/>
              <rect x="20" y="42" width="60" height="6" rx="1"/>
              <rect x="20" y="54" width="60" height="6" rx="1"/>
              <circle cx="78" cy="26" r="2" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="tc-col theme-dark" data-theme="dark">
        <div class="tc-tag">🌙 Dark</div>
        <div class="tc-stack">
          <div style="text-align:center;padding:24px 0">
            <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--aw-primary-text);width:120px;height:auto">
              <rect x="10" y="20" width="80" height="50" rx="4"/>
              <rect x="20" y="30" width="30" height="6" rx="1"/>
              <rect x="20" y="42" width="60" height="6" rx="1"/>
              <rect x="20" y="54" width="60" height="6" rx="1"/>
              <circle cx="78" cy="26" r="2" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="illustration:t054">覆盖 antd 默认插画</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="illustration:t055">antd 自带的</span> <code>Empty</code> / <code>Result</code> <span data-i18n="illustration:t056">组件默认渲染</span><b><span data-i18n="illustration:t057">彩色插画</span></b><span data-i18n="illustration:t058">（success / info / warning / 404 / 403 / 500）。当前消费者已用 TMSEmpty 替换 Empty，但 ErrorPage 仍封装 antd Result 且未统一自定义 icon；下表同时记录现状与后续约束，不能把未实现项标成已覆盖。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:24%"><span data-i18n="illustration:t059">组件</span></th><th style="width:24%"><span data-i18n="illustration:t060">antd 默认</span></th><th style="width:24%"><span data-i18n="illustration:t061">TMS 替换</span></th><th><span data-i18n="illustration:t062">实现</span></th></tr></thead>
      <tbody>
        <tr><td><code>&lt;Empty /&gt;</code></td><td><span data-i18n="illustration:t063">彩色"找不到"插画</span></td><td><code>Empty.PRESENTED_IMAGE_SIMPLE</code> <span data-i18n="illustration:t064">简版</span></td><td><code>ConfigProvider.renderEmpty</code> <span data-i18n="illustration:t065">全局替换 (见 empty-state 页)</span></td></tr>
        <tr><td><code>&lt;Result status="success" /&gt;</code></td><td><span data-i18n="illustration:t066">彩色对勾插画</span></td><td><span data-i18n="illustration:t067">当前消费者无共享成功态封装</span></td><td><span data-i18n="illustration:t068">需要时在业务内显式传 icon；</span> <span data-i18n="illustration:t069">提取共享组件前先评审契约</span></td></tr>
        <tr><td><code>&lt;Result status="info" /&gt;</code></td><td><span data-i18n="illustration:t070">彩色 i 插画</span></td><td><span data-i18n="illustration:t071">TMS Info icon (单色蓝)</span></td><td><span data-i18n="illustration:t072">同上</span></td></tr>
        <tr><td><code>&lt;Result status="warning" /&gt;</code></td><td><span data-i18n="illustration:t073">彩色三角插画</span></td><td><span data-i18n="illustration:t074">TMS Warning icon (单色金)</span></td><td><span data-i18n="illustration:t075">同上</span></td></tr>
        <tr><td><code>&lt;Result status="error" /&gt;</code></td><td><span data-i18n="illustration:t076">彩色叉号插画</span></td><td><span data-i18n="illustration:t077">TMS Danger icon (单色红)</span></td><td><span data-i18n="illustration:t078">同上</span></td></tr>
        <tr><td><code>&lt;Result status="404" /&gt;</code></td><td><span data-i18n="illustration:t079">彩色 404 插画</span></td><td><code>&lt;ErrorPage status="404" /&gt;</code> <span data-i18n="illustration:t080">（当前实现）</span></td><td><span data-i18n="illustration:t081">ErrorPage 统一映射到 antd Result</span></td></tr>
        <tr><td><code>&lt;Result status="403" /&gt;</code></td><td><span data-i18n="illustration:t082">彩色 403 插画</span></td><td><code>&lt;ErrorPage status="403" /&gt;</code></td><td><span data-i18n="illustration:t083">同一组件契约</span></td></tr>
        <tr><td><code>&lt;Result status="500" /&gt;</code></td><td><span data-i18n="illustration:t084">彩色 500 插画</span></td><td><code>&lt;ErrorPage status="500" /&gt;</code></td><td><span data-i18n="illustration:t085">同一组件契约</span></td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="illustration:t086">代码集中：</span></b><span data-i18n="illustration:t087">数据空态位于</span> <code>tms2.5-web-ui/src/components/TMSEmpty/TMSEmpty.tsx</code><span data-i18n="illustration:t088">；路由、权限和系统异常位于</span> <code>tms2.5-web-ui/src/components/ErrorPage/ErrorPage.tsx</code><span data-i18n="illustration:t089">。消费者复用这两个真实入口，不再新增平行封装或独立插画包。详见</span> <a href="#/config-provider" style="color: var(--aw-primary-text)"><span data-i18n="illustration:t090">ConfigProvider 全局配置</span></a>.</p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="illustration:t091">资产 / 命名 / 接入</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:30%"><span data-i18n="illustration:t092">规则</span></th><th><span data-i18n="illustration:t093">具体</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="illustration:t094">路径</span></td><td><code>tms2.5-web-ui/src/pages/login/NetworkRing.tsx</code></td></tr>
        <tr><td><span data-i18n="illustration:t095">命名</span></td><td><code>NetworkRing</code> · <code>TMSEmpty</code> · <code>ErrorPage</code></td></tr>
        <tr><td><span data-i18n="illustration:t096">导出</span></td><td><span data-i18n="illustration:t097">React TSX 组件与所属页面 / 公共组件共置；当前没有独立 illustrations 包</span></td></tr>
        <tr><td><span data-i18n="illustration:t098">引入</span></td><td><code>import NetworkRing from './NetworkRing';</code></td></tr>
        <tr><td>license</td><td><span data-i18n="illustration:t099">自创资产或采用 MIT/Apache 授权的开源插画库</span></td></tr>
        <tr><td><span data-i18n="illustration:t100">优化</span></td><td><span data-i18n="illustration:t101">代码内 SVG / CSS 由构建链处理；未来新增独立 SVG 时先记录来源与许可证，再做可验证的优化</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="illustration:t102">规则 · Do &amp; Don'ts</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="illustration:t103">插画仅用于登录页 + 错误页</span></li>
          <li><span data-i18n="illustration:t104">新增独立插画使用线性 + 单色 + 1.5px stroke</span></li>
          <li><span data-i18n="illustration:t105">使用</span> <code>currentColor</code><span data-i18n="illustration:t106">，外层 CSS 控色</span></li>
          <li><span data-i18n="illustration:t107">运行时资源随应用打包；独立 SVG 采用可验证工具优化</span></li>
          <li><span data-i18n="illustration:t108">Dark 模式视觉重量与 Light 等效</span></li>
          <li><span data-i18n="illustration:t109">抽象表达"设备 / 连接 / 守护"主题</span></li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="illustration:t110">不要在仪表盘 / 列表 / 详情 用装饰性插画</span></li>
          <li><span data-i18n="illustration:t111">不要写实风（具体设备型号 / 人物形象）</span></li>
          <li><span data-i18n="illustration:t112">不要渐变 / 阴影 / 3D 透视</span></li>
          <li><span data-i18n="illustration:t113">不要外链 CDN（如 undraw / unsplash）</span></li>
          <li><span data-i18n="illustration:t114">不要 PNG / JPG（必用 SVG 矢量）</span></li>
          <li><span data-i18n="illustration:t115">不要超过 5 个色值（保持单色克制）</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
