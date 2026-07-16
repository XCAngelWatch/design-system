/* AngelWatch Design System — page: responsive (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["responsive"] = `
<div class="content">
<section class="section" id="responsive">
  <p class="section-eyebrow"><span data-i18n="responsive:t001">设计基础 · 响应式</span></p>
  <h2><span data-i18n="responsive:t002">响应式断点 Responsive</span></h2>
  <p class="lede"><span data-i18n="responsive:t003">TMS 是</span><b><span data-i18n="responsive:t004">桌面优先</span></b><span data-i18n="responsive:t005">的运维工具，不支持手机。但 ≥ 1280 ~ ≥ 1920 范围内有 4 倍像素差异，组件必须做适配。本页固化目标分辨率、各组件在每档断点的行为、不支持移动端的明示边界。</span></p>

  <div class="subsection">
    <h3><span data-i18n="responsive:t006">4 个目标分辨率</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="responsive:t007">断点</span></th><th style="width:22%"><span data-i18n="responsive:t008">视口宽度</span></th><th style="width:22%"><span data-i18n="responsive:t009">典型设备</span></th><th><span data-i18n="responsive:t010">占比 / 适配优先级</span></th></tr></thead>
      <tbody>
        <tr><td><b>XL</b></td><td>≥ 1920px</td><td><span data-i18n="responsive:t011">27" 4K 显示器 / 监控大屏</span></td><td><span data-i18n="responsive:t012">~ 18% · Dashboard 优先 · 容器最大 1680</span></td></tr>
        <tr><td><b><span data-i18n="responsive:t013">L · 默认</span></b></td><td>≥ 1440px</td><td>16" MacBook Pro / 27" 2K</td><td><span data-i18n="responsive:t014">~ 42% · 设计稿基准 · 容器 1440</span></td></tr>
        <tr><td><b>M</b></td><td>≥ 1366px</td><td><span data-i18n="responsive:t015">15" Windows 笔记本</span></td><td><span data-i18n="responsive:t016">~ 28% · 容器 1280 + 侧栏可折叠</span></td></tr>
        <tr><td><b>S</b></td><td>≥ 1280px</td><td><span data-i18n="responsive:t017">13" 笔记本 / 旧显示器</span></td><td><span data-i18n="responsive:t018">~ 12% · 容器 1024 + 侧栏强制折叠 + 表格隐藏次要列</span></td></tr>
        <tr><td><b><span data-i18n="responsive:t019">下限</span></b></td><td>&lt; 1024px</td><td><span data-i18n="responsive:t020">iPad / 手机</span></td><td><span data-i18n="responsive:t021">0% · 显示 ErrorPage 提示"请使用桌面浏览器"</span></td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="responsive:t022">不支持移动端的理由：</span></b><span data-i18n="responsive:t023">1) 运维场景需要多窗口 + 表格交互，触屏体验差；2) 所有破坏性操作（推送 / 重启 / 删除）需要二次校验，触屏误触风险高；3) 移动端无法满足 4.5h 连续工作。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="responsive:t024">各组件断点行为</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="responsive:t025">组件</span></th><th style="width:18%">XL · ≥1920</th><th style="width:18%">L · ≥1440</th><th style="width:18%">M · ≥1366</th><th>S · ≥1280</th></tr></thead>
      <tbody>
        <tr><td><b>Sidebar</b></td><td><span data-i18n="responsive:t026">展开 240px</span></td><td><span data-i18n="responsive:t027">展开 240px</span></td><td><span data-i18n="responsive:t028">展开 240px (可折叠)</span></td><td><b><span data-i18n="responsive:t029">强制折叠 64px</span></b></td></tr>
        <tr><td><b><span data-i18n="responsive:t030">主内容</span></b></td><td><span data-i18n="responsive:t031">居中 1680 max</span></td><td><span data-i18n="responsive:t032">居中 1440 max</span></td><td>1280 max</td><td>1024 max</td></tr>
        <tr><td><b>Dashboard cols</b></td><td><span data-i18n="responsive:t033">4 列卡片</span></td><td><span data-i18n="responsive:t034">4 列卡片</span></td><td><span data-i18n="responsive:t035">3 列</span></td><td><span data-i18n="responsive:t036">2 列</span></td></tr>
        <tr><td><b><span data-i18n="responsive:t037">Table 列</span></b></td><td><span data-i18n="responsive:t038">显示全部 8 列</span></td><td><span data-i18n="responsive:t039">显示全部 8 列</span></td><td><span data-i18n="responsive:t040">隐藏 1 列 (次要)</span></td><td><span data-i18n="responsive:t041">隐藏 2 列 + 横向滚</span></td></tr>
        <tr><td><b>Form labelCol</b></td><td><span data-i18n="responsive:t042">120px 左对齐</span></td><td><span data-i18n="responsive:t043">120px 左对齐</span></td><td><span data-i18n="responsive:t044">100px 左对齐</span></td><td><span data-i18n="responsive:t045">顶部对齐 (vertical)</span></td></tr>
        <tr><td><b>Modal</b></td><td>720px</td><td>640px</td><td>520px</td><td>480px</td></tr>
        <tr><td><b>Drawer</b></td><td>720px</td><td>640px</td><td>520px</td><td><span data-i18n="responsive:t046">480px (满屏 80%)</span></td></tr>
        <tr><td><b>Tabs</b></td><td><span data-i18n="responsive:t047">水平展开</span></td><td><span data-i18n="responsive:t048">水平展开</span></td><td><span data-i18n="responsive:t049">水平展开</span></td><td><span data-i18n="responsive:t050">水平展开 + 横向滚</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="responsive:t051">Sidebar 折叠规则</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="responsive:t052">运维场景下用户经常</span> <kbd>Cmd</kbd>+<kbd>B</kbd> <span data-i18n="responsive:t053">临时折叠侧栏看更多设备。系统在 S 断点（&lt; 1366px）</span><b><span data-i18n="responsive:t054">强制折叠</span></b><span data-i18n="responsive:t055">，但用户偏好仍记录到</span> <code>localStorage</code><span data-i18n="responsive:t056">，回到 L 断点恢复。</span></p>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="responsive:t057">展开 · 240px</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="responsive:t058">完整 · L+ 默认</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="responsive:t059">icon + 文字 + 二级菜单。鼠标悬停二级展开。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="responsive:t060">折叠 · 64px</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="responsive:t061">仅 icon · S 强制</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="responsive:t062">仅顶级 icon，hover 弹 tooltip + 二级菜单浮层。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="responsive:t063">隐藏 · 0</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="responsive:t064">沉浸 · 大屏 only</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="responsive:t065">仅 Dashboard / 监控大屏；用户主动开关，不自动。</span></p>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="responsive:t066">Table 列优先级</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="responsive:t067">设备表 8 列。每列在 column 定义时声明</span> <code>priority</code><span data-i18n="responsive:t068">，系统按优先级在窄屏隐藏低优先级列。隐藏不删 —— "更多列" 按钮可临时打开。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:14%"><span data-i18n="responsive:t069">列</span></th><th style="width:14%">priority</th><th style="width:18%"><span data-i18n="responsive:t070">隐藏断点</span></th><th><span data-i18n="responsive:t071">说明</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="responsive:t072">勾选框</span></td><td>1</td><td><span data-i18n="responsive:t073">从不</span></td><td><span data-i18n="responsive:t074">批量操作必备</span></td></tr>
        <tr><td><span data-i18n="responsive:t075">设备名</span></td><td>1</td><td><span data-i18n="responsive:t076">从不</span></td><td><span data-i18n="responsive:t077">主标识</span></td></tr>
        <tr><td><span data-i18n="responsive:t078">状态</span></td><td>1</td><td><span data-i18n="responsive:t079">从不</span></td><td><span data-i18n="responsive:t080">核心信息</span></td></tr>
        <tr><td>SN</td><td>2</td><td><span data-i18n="responsive:t081">从不</span></td><td><span data-i18n="responsive:t082">运维高频引用</span></td></tr>
        <tr><td><span data-i18n="responsive:t083">OTA 版本</span></td><td>3</td><td><span data-i18n="responsive:t084">S 隐藏</span></td><td><span data-i18n="responsive:t085">详情页可见</span></td></tr>
        <tr><td><span data-i18n="responsive:t086">最近心跳</span></td><td>3</td><td><span data-i18n="responsive:t087">S 隐藏</span></td><td><span data-i18n="responsive:t088">详情页可见</span></td></tr>
        <tr><td><span data-i18n="responsive:t089">所属机构</span></td><td>4</td><td><span data-i18n="responsive:t090">M+S 隐藏</span></td><td><span data-i18n="responsive:t091">详情页可见</span></td></tr>
        <tr><td><span data-i18n="responsive:t092">操作</span></td><td>1</td><td><span data-i18n="responsive:t093">从不</span></td><td><span data-i18n="responsive:t094">固定右侧 + 浮层</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="responsive:t095">实现约定 · Container Query Friendly</span></h3>
    <div class="code-block"><pre><code>/* tokens.css -- unified tokens for 4 breakpoints */
:root {
  --aw-bp-xl: 1920px;
  --aw-bp-l:  1440px;
  --aw-bp-m:  1366px;
  --aw-bp-s:  1280px;
  --aw-bp-min: 1024px;   /* show ErrorPage below this width */
}

/* Media queries -- desktop-first, prefer min-width in production */
@media (max-width: 1366px) {
  .app-side { width: 64px; }                /* force collapse */
  .app-side .menu-label { display: none; }
}

@media (max-width: 1280px) {
  .app-main { padding: 16px; }              /* reduce page padding */
  .table-col-priority-3 { display: none; }  /* hide priority 3+ columns */
}

@media (max-width: 1023px) {
  /* stop adapting -- render &lt;ResolutionGuard /&gt; instead */
  body { display: none; }
  .resolution-guard { display: flex; }
}</code></pre></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="responsive:t096">分辨率守卫 · ResolutionGuard</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="responsive:t097">视口 &lt; 1024px 时全屏显示守卫页 —— 不试图自适应。文案明确告知用户使用桌面浏览器。</span></p>
    <div class="surface" style="text-align:center;padding:30px 20px;background:var(--aw-fill-1)">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--aw-text-3);margin:0 auto 14px;display:block"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
      <div style="font-size:16px;font-weight:600;color:var(--aw-text-1);margin-bottom:6px"><span data-i18n="responsive:t098">请使用桌面浏览器</span></div>
      <div style="font-size:13px;color:var(--aw-text-3);max-width:420px;margin:0 auto;line-height:1.7"><span data-i18n="responsive:t099">AngelWatch TMS 面向运维 / IT 管理员设计，需要 ≥ 1280px 宽度的桌面浏览器。当前视口</span> <span class="mono">820 × 600</span><span data-i18n="responsive:t100">，建议在台式机或笔记本访问。</span></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="responsive:t101">规则 · Do &amp; Don'ts</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="responsive:t102">设计稿基准 1440px</span></li>
          <li><span data-i18n="responsive:t103">所有断点用同一套 token</span></li>
          <li><span data-i18n="responsive:t104">表格列声明</span> <code>priority</code> <span data-i18n="responsive:t105">优先级</span></li>
          <li><span data-i18n="responsive:t106">Sidebar 在 S 断点强制折叠</span></li>
          <li><span data-i18n="responsive:t107">低于 1024px 显示守卫页</span></li>
          <li><span data-i18n="responsive:t108">保留用户 sidebar 偏好（跨断点）</span></li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="responsive:t109">不要试图适配手机 / 平板</span></li>
          <li><span data-i18n="responsive:t110">不要在 S 断点继续展开 Sidebar（挤压主内容）</span></li>
          <li><span data-i18n="responsive:t111">不要直接删 Table 列（用 priority + 临时打开）</span></li>
          <li><span data-i18n="responsive:t112">不要硬编码 px 断点（用 token）</span></li>
          <li><span data-i18n="responsive:t113">不要在小屏依赖 hover（保留点击 fallback）</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
