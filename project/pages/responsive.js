/* AngelWatch Design System — page: responsive (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["responsive"] = `
<div class="content">
<section class="section" id="responsive">
  <p class="section-eyebrow">Foundations · 响应式</p>
  <h2>Responsive · 响应式断点</h2>
  <p class="lede">TMS 是<b>桌面优先</b>的运维工具，不支持手机。但 ≥ 1280 ~ ≥ 1920 范围内有 4 倍像素差异，组件必须做适配。本页固化目标分辨率、各组件在每档断点的行为、不支持移动端的明示边界。</p>

  <div class="subsection">
    <h3>4 个目标分辨率</h3>
    <table class="map-table">
      <thead><tr><th style="width:18%">断点</th><th style="width:22%">视口宽度</th><th style="width:22%">典型设备</th><th>占比 / 适配优先级</th></tr></thead>
      <tbody>
        <tr><td><b>XL</b></td><td>≥ 1920px</td><td>27" 4K 显示器 / 监控大屏</td><td>~ 18% · Dashboard 优先 · 容器最大 1680</td></tr>
        <tr><td><b>L · 默认</b></td><td>≥ 1440px</td><td>16" MacBook Pro / 27" 2K</td><td>~ 42% · 设计稿基准 · 容器 1440</td></tr>
        <tr><td><b>M</b></td><td>≥ 1366px</td><td>15" Windows 笔记本</td><td>~ 28% · 容器 1280 + 侧栏可折叠</td></tr>
        <tr><td><b>S</b></td><td>≥ 1280px</td><td>13" 笔记本 / 旧显示器</td><td>~ 12% · 容器 1024 + 侧栏强制折叠 + 表格隐藏次要列</td></tr>
        <tr><td><b>下限</b></td><td>&lt; 1024px</td><td>iPad / 手机</td><td>0% · 显示 ErrorPage 提示"请使用桌面浏览器"</td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">不支持移动端的理由：</b>1) 运维场景需要多窗口 + 表格交互，触屏体验差；2) 所有破坏性操作（推送 / 重启 / 删除）需要二次校验，触屏误触风险高；3) 移动端无法满足 4.5h 连续工作。</p>
  </div>

  <div class="subsection">
    <h3>各组件断点行为</h3>
    <table class="map-table">
      <thead><tr><th style="width:18%">组件</th><th style="width:18%">XL · ≥1920</th><th style="width:18%">L · ≥1440</th><th style="width:18%">M · ≥1366</th><th>S · ≥1280</th></tr></thead>
      <tbody>
        <tr><td><b>Sidebar</b></td><td>展开 240px</td><td>展开 240px</td><td>展开 240px (可折叠)</td><td><b>强制折叠 64px</b></td></tr>
        <tr><td><b>主内容</b></td><td>居中 1680 max</td><td>居中 1440 max</td><td>1280 max</td><td>1024 max</td></tr>
        <tr><td><b>Dashboard cols</b></td><td>4 列卡片</td><td>4 列卡片</td><td>3 列</td><td>2 列</td></tr>
        <tr><td><b>Table 列</b></td><td>显示全部 8 列</td><td>显示全部 8 列</td><td>隐藏 1 列 (次要)</td><td>隐藏 2 列 + 横向滚</td></tr>
        <tr><td><b>Form labelCol</b></td><td>120px 左对齐</td><td>120px 左对齐</td><td>100px 左对齐</td><td>顶部对齐 (vertical)</td></tr>
        <tr><td><b>Modal</b></td><td>720px</td><td>640px</td><td>520px</td><td>480px</td></tr>
        <tr><td><b>Drawer</b></td><td>720px</td><td>640px</td><td>520px</td><td>480px (满屏 80%)</td></tr>
        <tr><td><b>Tabs</b></td><td>水平展开</td><td>水平展开</td><td>水平展开</td><td>水平展开 + 横向滚</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>Sidebar 折叠规则</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">运维场景下用户经常 <kbd>Cmd</kbd>+<kbd>B</kbd> 临时折叠侧栏看更多设备。系统在 S 断点（&lt; 1366px）<b>强制折叠</b>，但用户偏好仍记录到 <code>localStorage</code>，回到 L 断点恢复。</p>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">展开 · 240px</div>
        <h3 style="margin:0 0 8px;font-size:14px">完整 · L+ 默认</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">icon + 文字 + 二级菜单。鼠标悬停二级展开。</p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">折叠 · 64px</div>
        <h3 style="margin:0 0 8px;font-size:14px">仅 icon · S 强制</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">仅顶级 icon，hover 弹 tooltip + 二级菜单浮层。</p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">隐藏 · 0</div>
        <h3 style="margin:0 0 8px;font-size:14px">沉浸 · 大屏 only</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">仅 Dashboard / 监控大屏；用户主动开关，不自动。</p>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>Table 列优先级</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">设备表 8 列。每列在 column 定义时声明 <code>priority</code>，系统按优先级在窄屏隐藏低优先级列。隐藏不删 —— "更多列" 按钮可临时打开。</p>
    <table class="map-table">
      <thead><tr><th style="width:14%">列</th><th style="width:14%">priority</th><th style="width:18%">隐藏断点</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>勾选框</td><td>1</td><td>从不</td><td>批量操作必备</td></tr>
        <tr><td>设备名</td><td>1</td><td>从不</td><td>主标识</td></tr>
        <tr><td>状态</td><td>1</td><td>从不</td><td>核心信息</td></tr>
        <tr><td>SN</td><td>2</td><td>从不</td><td>运维高频引用</td></tr>
        <tr><td>固件版本</td><td>3</td><td>S 隐藏</td><td>详情页可见</td></tr>
        <tr><td>最近心跳</td><td>3</td><td>S 隐藏</td><td>详情页可见</td></tr>
        <tr><td>所属站点</td><td>4</td><td>M+S 隐藏</td><td>详情页可见</td></tr>
        <tr><td>操作</td><td>1</td><td>从不</td><td>固定右侧 + 浮层</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>实现约定 · Container Query Friendly</h3>
    <div class="code-block"><pre><code>/* tokens.css —— 4 个断点统一 token */
:root {
  --aw-bp-xl: 1920px;
  --aw-bp-l:  1440px;
  --aw-bp-m:  1366px;
  --aw-bp-s:  1280px;
  --aw-bp-min: 1024px;   /* 低于此显示 ErrorPage */
}

/* 媒体查询 —— 优先 min-width 桌面优先 */
@media (max-width: 1366px) {
  .app-side { width: 64px; }                /* 强制折叠 */
  .app-side .menu-label { display: none; }
}

@media (max-width: 1280px) {
  .app-main { padding: 16px; }              /* 收缩边距 */
  .table-col-priority-3 { display: none; }  /* 隐藏 priority 3+ 列 */
}

@media (max-width: 1023px) {
  /* 不再适配 —— 渲染 &lt;ResolutionGuard /&gt; 拦截 */
  body { display: none; }
  .resolution-guard { display: flex; }
}</code></pre></div>
  </div>

  <div class="subsection">
    <h3>分辨率守卫 · ResolutionGuard</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">视口 &lt; 1024px 时全屏显示守卫页 —— 不试图自适应。文案明确告知用户使用桌面浏览器。</p>
    <div class="surface" style="text-align:center;padding:30px 20px;background:var(--aw-fill-1)">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--aw-text-3);margin:0 auto 14px;display:block"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
      <div style="font-size:16px;font-weight:600;color:var(--aw-text-1);margin-bottom:6px">请使用桌面浏览器</div>
      <div style="font-size:13px;color:var(--aw-text-3);max-width:420px;margin:0 auto;line-height:1.7">AngelWatch TMS 面向运维 / IT 管理员设计，需要 ≥ 1280px 宽度的桌面浏览器。当前视口 <span class="mono">820 × 600</span>，建议在台式机或笔记本访问。</div>
    </div>
  </div>

  <div class="subsection">
    <h3>规则 · Do &amp; Don'ts</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>设计稿基准 1440px</li>
          <li>所有断点用同一套 token</li>
          <li>表格列声明 <code>priority</code> 优先级</li>
          <li>Sidebar 在 S 断点强制折叠</li>
          <li>低于 1024px 显示守卫页</li>
          <li>保留用户 sidebar 偏好（跨断点）</li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>不要试图适配手机 / 平板</li>
          <li>不要在 S 断点继续展开 Sidebar（挤压主内容）</li>
          <li>不要直接删 Table 列（用 priority + 临时打开）</li>
          <li>不要硬编码 px 断点（用 token）</li>
          <li>不要在小屏依赖 hover（保留点击 fallback）</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
