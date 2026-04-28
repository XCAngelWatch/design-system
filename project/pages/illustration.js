/* AngelWatch Design System — page: illustration (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["illustration"] = `
<div class="content">
<section class="section" id="illustration">
  <p class="section-eyebrow">Foundations · 图形化</p>
  <h2>Illustration · 图形化系统</h2>
  <p class="lede">企业级中后台不依赖装饰性插画 —— TMS 仅在两个场景使用图形化资产：<b>登录页</b>主视觉与<b>异常页</b>（404 / 403 / 500 / Network）。所有插画线性 + 单色，与界面 token 保持一致；自托管 SVG，禁外链。</p>

  <div class="subsection">
    <h3>使用场景 · 仅两处</h3>
    <div class="demo-grid cols-2">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">场景 · 01</div>
        <h3 style="margin:0 0 10px;font-size:14px">LoginPage 主视觉</h3>
        <div class="illust-frame">
          <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--aw-primary);width:100%;height:auto">
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
        <p style="margin:10px 0 0;font-size:12px;color:var(--aw-text-3);line-height:1.7">登录左侧主视觉 480×360。表达「设备 + 链接 + 守护」主题，单色品牌蓝。</p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">场景 · 02</div>
        <h3 style="margin:0 0 10px;font-size:14px">ErrorPage（404 / 403 / 500）</h3>
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
        <p style="margin:10px 0 0;font-size:12px;color:var(--aw-text-3);line-height:1.7">错误页中央插画 320×240。区分四种状态：404 找不到 / 403 无权限 / 500 服务异常 / Network 离线。</p>
      </div>
    </div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">明确禁止：</b>仪表盘 / 列表 / 详情 / 表单 / 设置 等业务页禁止使用插画占位。空状态用 Result 组件 + 图标，不用插画。</p>
  </div>

  <div class="subsection">
    <h3>风格规范</h3>
    <table class="map-table">
      <thead><tr><th style="width:22%">维度</th><th style="width:32%">规则</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>风格</td><td>线性 (Outlined) + 单色</td><td>不用渐变 / 不用阴影 / 不用 3D 透视</td></tr>
        <tr><td>描边</td><td>1.5px stroke + round cap/join</td><td>与图标系统一致，避免视觉断层</td></tr>
        <tr><td>颜色</td><td><code>currentColor</code> 单色</td><td>登录用 <code>--aw-primary</code>；错误页用 <code>--aw-text-3</code> 灰阶</td></tr>
        <tr><td>底</td><td>透明</td><td>不带白底；浮于卡片上自动适配 light/dark</td></tr>
        <tr><td>构图</td><td>居中 + 留白</td><td>16:9 视图盒，主形象不超过 70% 高度</td></tr>
        <tr><td>抽象度</td><td>象征性，不写实</td><td>设备 = 方形 + 圆角 + 线条，不画具体型号</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>尺寸规范</h3>
    <table class="map-table">
      <thead><tr><th style="width:24%">用途</th><th style="width:28%">尺寸</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>登录主视觉</td><td>480 × 360 px</td><td>左侧栏 50% 区域，竖屏自适应不溢出</td></tr>
        <tr><td>错误页插画</td><td>320 × 240 px</td><td>页面中央上方</td></tr>
        <tr><td>移动端缩略</td><td>240 × 180 px（错误页）</td><td>窗口 ≤ 768px 自动切换</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>主题适配 · Light / Dark</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">SVG 内部所有颜色使用 <code>currentColor</code>，外层通过 CSS 控制色值。Dark 模式用 <code>filter: brightness(0.92)</code> 或 token 替换达到与 light 等效的视觉重量。</p>
    <div class="theme-compare">
      <div class="tc-col">
        <div class="tc-tag">☀ Light</div>
        <div class="tc-stack">
          <div style="text-align:center;padding:24px 0">
            <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:#0052CC;width:120px;height:auto">
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
            <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:#4A8BE0;width:120px;height:auto">
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
    <h3>覆盖 antd 默认插画</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">antd 自带的 <code>Empty</code> / <code>Result</code> 组件默认渲染<b>彩色插画</b>（success / info / warning / 404 / 403 / 500 各一张），与 TMS 单色线性风格冲突。必须在两个层级覆盖：</p>
    <table class="map-table">
      <thead><tr><th style="width:24%">组件</th><th style="width:24%">antd 默认</th><th style="width:24%">TMS 替换</th><th>实现</th></tr></thead>
      <tbody>
        <tr><td><code>&lt;Empty /&gt;</code></td><td>彩色"找不到"插画</td><td><code>Empty.PRESENTED_IMAGE_SIMPLE</code> 简版</td><td><code>ConfigProvider.renderEmpty</code> 全局替换 (见 empty-state 页)</td></tr>
        <tr><td><code>&lt;Result status="success" /&gt;</code></td><td>彩色对勾插画</td><td>TMS Success icon (单色绿)</td><td><code>&lt;Result icon={&lt;CheckCircleFilled /&gt;} /&gt;</code> + 包一层 <code>&lt;TMSResult /&gt;</code> 默认</td></tr>
        <tr><td><code>&lt;Result status="info" /&gt;</code></td><td>彩色 i 插画</td><td>TMS Info icon (单色蓝)</td><td>同上</td></tr>
        <tr><td><code>&lt;Result status="warning" /&gt;</code></td><td>彩色三角插画</td><td>TMS Warning icon (单色金)</td><td>同上</td></tr>
        <tr><td><code>&lt;Result status="error" /&gt;</code></td><td>彩色叉号插画</td><td>TMS Danger icon (单色红)</td><td>同上</td></tr>
        <tr><td><code>&lt;Result status="404" /&gt;</code></td><td>彩色 404 插画</td><td>TMS <code>illust-404.svg</code> (本页规范)</td><td>ErrorPage 直接传 <code>icon</code> prop</td></tr>
        <tr><td><code>&lt;Result status="403" /&gt;</code></td><td>彩色 403 插画</td><td>TMS <code>illust-403.svg</code></td><td>同上</td></tr>
        <tr><td><code>&lt;Result status="500" /&gt;</code></td><td>彩色 500 插画</td><td>TMS <code>illust-500.svg</code></td><td>同上</td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">代码集中：</b>包一层 <code>&lt;TMSResult&gt;</code> 在 <code>packages/web/src/components/Result.tsx</code>，业务代码只用 TMSResult 不直接用 antd Result 即可避开默认彩色插画。详见 <a href="#/config-provider" style="color:var(--aw-primary)">ConfigProvider 全局配置</a>。</p>
  </div>

  <div class="subsection">
    <h3>资产 / 命名 / 接入</h3>
    <table class="map-table">
      <thead><tr><th style="width:30%">规则</th><th>具体</th></tr></thead>
      <tbody>
        <tr><td>路径</td><td><code>packages/illustrations/src/svg/</code></td></tr>
        <tr><td>命名</td><td><code>illust-login.svg</code> · <code>illust-404.svg</code> · <code>illust-403.svg</code> · <code>illust-500.svg</code> · <code>illust-network.svg</code></td></tr>
        <tr><td>导出</td><td>SVGR → React 组件 <code>IllustLogin</code> · <code>Illust404</code> ...</td></tr>
        <tr><td>引入</td><td><code>import { Illust404 } from '@tms/illustrations';</code></td></tr>
        <tr><td>license</td><td>自创资产或采用 MIT/Apache 授权的开源插画库</td></tr>
        <tr><td>压缩</td><td>SVGO --multipass，去 ID / 去注释 / 路径量化 1px</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>规则 · Do &amp; Don'ts</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>插画仅用于登录页 + 错误页</li>
          <li>线性 + 单色 + 1.5px stroke</li>
          <li>使用 <code>currentColor</code>，外层 CSS 控色</li>
          <li>SVG 自托管 + SVGO 压缩</li>
          <li>Dark 模式视觉重量与 Light 等效</li>
          <li>抽象表达"设备 / 连接 / 守护"主题</li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>不要在仪表盘 / 列表 / 详情 用装饰性插画</li>
          <li>不要写实风（具体设备型号 / 人物形象）</li>
          <li>不要渐变 / 阴影 / 3D 透视</li>
          <li>不要外链 CDN（如 undraw / unsplash）</li>
          <li>不要 PNG / JPG（必用 SVG 矢量）</li>
          <li>不要超过 5 个色值（保持单色克制）</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
