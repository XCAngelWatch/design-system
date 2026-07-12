/* AngelWatch Design System — page: a11y (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["a11y"] = `
<div class="content">
<section class="section" id="a11y">
  <p class="section-eyebrow"><span data-i18n="a11y:t001">设计基础 · 无障碍</span></p>
  <h2><span data-i18n="a11y:t002">无障碍 Accessibility</span></h2>
  <p class="lede"><span data-i18n="a11y:t003">运维与 IT 管理员中包含视障 / 色弱 / 键盘优先用户。系统目标 WCAG 2.1 AA 全量合规、关键路径 AAA 合规，CI 阶段通过 axe-core + Pa11y 自动扫描，PR 不达标会被拦。本页固化七大维度的硬约束。</span></p>

  <div class="subsection">
    <h3><span data-i18n="a11y:t004">键盘可达 · Keyboard</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="a11y:t005">所有交互组件必须可仅用键盘完成全部操作 —— 不依赖鼠标。Tab 顺序按视觉阅读顺序（左→右、上→下）。键盘或程序化焦点必须显示 focus ring，并</span><b><span data-i18n="a11y:t006">使用</span></b> <code>:focus-visible</code>.</p>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="a11y:t007">按键</span></th><th style="width:30%"><span data-i18n="a11y:t008">行为</span></th><th><span data-i18n="a11y:t009">语境</span></th></tr></thead>
      <tbody>
        <tr><td><kbd>Tab</kbd> / <kbd>Shift+Tab</kbd></td><td><span data-i18n="a11y:t010">前进 / 后退聚焦</span></td><td><span data-i18n="a11y:t011">所有交互元素；隐藏元素</span> <code>tabindex="-1"</code></td></tr>
        <tr><td><kbd>Enter</kbd></td><td><span data-i18n="a11y:t012">确认 / 提交 / 触发主动作</span></td><td><span data-i18n="a11y:t013">按钮、链接；表单内不在 textarea 中提交</span></td></tr>
        <tr><td><kbd>Space</kbd></td><td><span data-i18n="a11y:t014">勾选 / 触发按钮</span></td><td>Checkbox / Switch / Button</td></tr>
        <tr><td><kbd>Esc</kbd></td><td><span data-i18n="a11y:t015">关闭浮层 / 取消编辑</span></td><td><span data-i18n="a11y:t016">Modal、Drawer、Popover、Dropdown 必须响应</span></td></tr>
        <tr><td><kbd>↑</kbd> / <kbd>↓</kbd></td><td><span data-i18n="a11y:t017">上下导航</span></td><td><span data-i18n="a11y:t018">Select、Menu、Table 行、Tree、AutoComplete</span></td></tr>
        <tr><td><kbd>←</kbd> / <kbd>→</kbd></td><td><span data-i18n="a11y:t019">左右导航</span></td><td><span data-i18n="a11y:t020">Tabs、Steps、Pagination、Calendar 日期格</span></td></tr>
        <tr><td><kbd>Home</kbd> / <kbd>End</kbd></td><td><span data-i18n="a11y:t021">跳到首 / 末</span></td><td><span data-i18n="a11y:t022">Select、Menu、Table（首行 / 末行）</span></td></tr>
        <tr><td><kbd>PageUp</kbd> / <kbd>PageDown</kbd></td><td><span data-i18n="a11y:t023">翻页</span></td><td><span data-i18n="a11y:t024">Table 分页、Calendar 月切换</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="a11y:t025">13 条全局快捷键</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:24%"><span data-i18n="a11y:t026">快捷键</span></th><th style="width:30%"><span data-i18n="a11y:t027">动作</span></th><th><span data-i18n="a11y:t028">说明</span></th></tr></thead>
      <tbody>
        <tr><td><kbd>Cmd</kbd>+<kbd>K</kbd> / <kbd>Ctrl</kbd>+<kbd>K</kbd></td><td><span data-i18n="a11y:t029">全局搜索（Command Palette）</span></td><td><span data-i18n="a11y:t030">跨设备 / 账号 / 操作 / 页面统一搜索</span></td></tr>
        <tr><td><kbd>Cmd</kbd>+<kbd>B</kbd></td><td><span data-i18n="a11y:t031">切换侧边栏折叠</span></td><td><span data-i18n="a11y:t032">临时扩展工作区域</span></td></tr>
        <tr><td><kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd></td><td><span data-i18n="a11y:t033">切换 Light / Dark 主题</span></td><td><span data-i18n="a11y:t034">对接 motion 页主题切换流程</span></td></tr>
        <tr><td><kbd>?</kbd></td><td><span data-i18n="a11y:t035">打开快捷键参考</span></td><td><span data-i18n="a11y:t036">任意非输入框聚焦时</span></td></tr>
        <tr><td><kbd>g</kbd> <kbd>d</kbd></td><td><span data-i18n="a11y:t037">跳转设备列表</span></td><td><span data-i18n="a11y:t038">Vim 式两键序列</span></td></tr>
        <tr><td><kbd>g</kbd> <kbd>p</kbd></td><td><span data-i18n="a11y:t039">跳转推送页</span></td><td></td></tr>
        <tr><td><kbd>g</kbd> <kbd>o</kbd></td><td><span data-i18n="a11y:t040">跳转 OTA 页</span></td><td></td></tr>
        <tr><td><kbd>g</kbd> <kbd>u</kbd></td><td><span data-i18n="a11y:t041">跳转账号权限</span></td><td></td></tr>
        <tr><td><kbd>g</kbd> <kbd>h</kbd></td><td><span data-i18n="a11y:t042">回到首页 / 仪表盘</span></td><td></td></tr>
        <tr><td><kbd>/</kbd></td><td><span data-i18n="a11y:t043">聚焦当前页搜索框</span></td><td><span data-i18n="a11y:t044">列表 / 表格</span></td></tr>
        <tr><td><kbd>n</kbd></td><td><span data-i18n="a11y:t045">"+ 添加" 主操作</span></td><td><span data-i18n="a11y:t046">当前页有添加按钮时</span></td></tr>
        <tr><td><kbd>r</kbd></td><td><span data-i18n="a11y:t047">刷新当前数据</span></td><td><span data-i18n="a11y:t048">不刷整页，仅 React Query invalidate</span></td></tr>
        <tr><td><kbd>Esc</kbd></td><td><span data-i18n="a11y:t049">关闭浮层 / 退出编辑</span></td><td><span data-i18n="a11y:t050">层级最深的浮层先关</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="a11y:t051">焦点管理 · Focus Management</span></h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="a11y:t052">焦点环</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="a11y:t053">键盘导航可见</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="a11y:t054">2px outline + 2px offset，颜色</span> <code>--aw-primary</code>. <b><span data-i18n="a11y:t055">使用</span></b> <code>:focus-visible</code><span data-i18n="a11y:t056">，仅在键盘或程序化焦点时显示</span><span data-i18n="a11y:t057">；鼠标点击不额外显示焦点环。Dark 模式自动跟随 token 提亮。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="a11y:t058">焦点陷阱</span></div>
        <h3 style="margin:0 0 8px;font-size:14px">Modal / Drawer</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="a11y:t059">浮层打开后 Tab 焦点必须循环在浮层内。最后一个元素 Tab 回到第一个，反之亦然。关闭后焦点自动还原到触发按钮。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="a11y:t060">默认焦点</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="a11y:t061">破坏性 → 取消</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="a11y:t062">删除 / 推送 / 重启 / 回滚 等不可逆操作的 Modal 默认焦点在</span><b><span data-i18n="a11y:t063">取消</span></b><span data-i18n="a11y:t064">，禁止落在确认。普通表单首字段聚焦。</span></p>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="a11y:t065">ARIA 语义</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="a11y:t066">优先用语义 HTML（</span><code>&lt;button&gt;</code> / <code>&lt;nav&gt;</code> / <code>&lt;table&gt;</code><span data-i18n="a11y:t067">），不可避免时补 ARIA。常见组件的必备 ARIA 如下表。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:22%"><span data-i18n="a11y:t068">组件</span></th><th style="width:34%"><span data-i18n="a11y:t069">必备 ARIA</span></th><th><span data-i18n="a11y:t070">原因</span></th></tr></thead>
      <tbody>
        <tr><td>Modal</td><td><code>role="dialog"</code> · <code>aria-labelledby</code> · <code>aria-modal="true"</code></td><td><span data-i18n="a11y:t071">SR 宣读对话框 + 标题</span></td></tr>
        <tr><td>Toast</td><td><code>role="status"</code> · <code>aria-live="polite"</code></td><td><span data-i18n="a11y:t072">瞬时反馈不打断当前阅读</span></td></tr>
        <tr><td><span data-i18n="a11y:t073">Notification 错误</span></td><td><code>role="alert"</code> · <code>aria-live="assertive"</code></td><td><span data-i18n="a11y:t074">错误 / 告警立即宣读</span></td></tr>
        <tr><td>Tabs</td><td><code>role="tablist"</code> · <code>role="tab"</code> · <code>aria-selected</code></td><td><span data-i18n="a11y:t075">SR 宣读"3 个 Tab 中第 1 个"</span></td></tr>
        <tr><td>Tooltip</td><td><code>aria-describedby</code> <span data-i18n="a11y:t076">关联 tooltip id</span></td><td><span data-i18n="a11y:t077">触发元素 SR 读出 tooltip 内容</span></td></tr>
        <tr><td><span data-i18n="a11y:t078">icon-only 按钮</span></td><td><code>aria-label="Search"</code></td><td><span data-i18n="a11y:t079">无文字按钮 SR 完全失效</span></td></tr>
        <tr><td><span data-i18n="a11y:t080">表单字段</span></td><td><code>&lt;label htmlFor&gt;</code> + <code>aria-required</code> + <code>aria-invalid</code> + <code>aria-describedby</code> <span data-i18n="a11y:t081">关联错误</span></td><td><span data-i18n="a11y:t082">SR 朗读"必填 / 错误 / 错误内容"</span></td></tr>
        <tr><td>Loading</td><td><code>aria-busy="true"</code> + <code>aria-live="polite"</code></td><td><span data-i18n="a11y:t083">内容加载中宣读"加载中…"</span></td></tr>
        <tr><td><span data-i18n="a11y:t084">分页</span></td><td><code>aria-current="page"</code> · <code>nav role="navigation"</code></td><td><span data-i18n="a11y:t085">SR 知道当前页</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="a11y:t086">色弱 / 色盲支持 · Color-blind</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="a11y:t087">~ 8% 男性是某种色觉缺陷（红绿色盲最常见）。状态信息</span><b><span data-i18n="a11y:t088">禁止仅依靠颜色</span></b><span data-i18n="a11y:t089">表达 —— 必须色 + 形 + 文字三重编码。</span></p>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)"><span data-i18n="a11y:t090">✓ 三重编码</span></h3>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;align-items:center;gap:8px;font-size:13px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--aw-success);box-shadow:0 0 0 2px var(--aw-success-bg)"></span><span style="color:var(--aw-success);font-weight:500"><span data-i18n="a11y:t091">在线</span></span><span style="color:var(--aw-text-3);font-size:11px"><span data-i18n="a11y:t092">· 圆点 + 绿色 + 文字</span></span></div>
          <div style="display:flex;align-items:center;gap:8px;font-size:13px"><span style="display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:8px solid var(--aw-warning)"></span><span style="color:var(--aw-warning);font-weight:500"><span data-i18n="a11y:t093">升级中</span></span><span style="color:var(--aw-text-3);font-size:11px"><span data-i18n="a11y:t094">· 三角 + 黄色 + 文字</span></span></div>
          <div style="display:flex;align-items:center;gap:8px;font-size:13px"><span style="display:inline-block;width:8px;height:8px;background:var(--aw-danger);transform:rotate(45deg)"></span><span style="color:var(--aw-danger);font-weight:500"><span data-i18n="a11y:t095">故障</span></span><span style="color:var(--aw-text-3);font-size:11px"><span data-i18n="a11y:t096">· 方形 + 红色 + 文字</span></span></div>
        </div>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)"><span data-i18n="a11y:t097">✕ 仅色编码</span></h3>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;align-items:center;gap:8px;font-size:13px"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--aw-success)"></span><span style="color:var(--aw-text-3);font-size:11px"><span data-i18n="a11y:t098">— 红绿色盲完全失效</span></span></div>
          <div style="display:flex;align-items:center;gap:8px;font-size:13px"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--aw-warning)"></span><span style="color:var(--aw-text-3);font-size:11px"><span data-i18n="a11y:t099">— 看上去与"在线"等价</span></span></div>
          <div style="display:flex;align-items:center;gap:8px;font-size:13px"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--aw-danger)"></span><span style="color:var(--aw-text-3);font-size:11px"><span data-i18n="a11y:t100">— 红与黄难辨</span></span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="a11y:t101">降低动效 · Reduced Motion</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="a11y:t102">前庭功能障碍 / 偏头痛用户对动画敏感。系统响应 OS</span> <code>prefers-reduced-motion: reduce</code><span data-i18n="a11y:t103">，把所有过渡 / 动画压到 ≤ 1ms（保留 token 不删 transition 属性，避免组件假"无 hover"）。</span></p>
    <div class="code-block"><pre><code>/* Global reduced-motion response */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}

/* Large screens / dashboards keep essential new-data flashes even when reduced motion is enabled */
.realtime-pulse {
  animation: pulse 600ms;  /* not gated by reduced-motion */
}</code></pre></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="a11y:t104">对比度 · Contrast</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:30%"><span data-i18n="a11y:t105">对比对象</span></th><th style="width:24%"><span data-i18n="a11y:t106">最低要求</span></th><th><span data-i18n="a11y:t107">规则</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="a11y:t108">正文文本 vs 底色</span></td><td>4.5:1(AA)</td><td><span data-i18n="a11y:t109">所有</span> <code>--aw-text-1</code> / <code>--aw-text-2</code></td></tr>
        <tr><td><span data-i18n="a11y:t110">大文本 (≥18px or ≥14px bold)</span></td><td>3:1(AA)</td><td><span data-i18n="a11y:t111">H1 / H2 / 卡片标题</span></td></tr>
        <tr><td><span data-i18n="a11y:t112">关键 CTA / 大字</span></td><td>7:1(AAA)</td><td><span data-i18n="a11y:t113">主操作按钮文字、统计数字</span></td></tr>
        <tr><td><span data-i18n="a11y:t114">UI 组件 / 图标</span></td><td>3:1(AA)</td><td><span data-i18n="a11y:t115">边框、icon、focus ring vs 底色</span></td></tr>
        <tr><td><span data-i18n="a11y:t116">状态文字</span></td><td>4.5:1</td><td><span data-i18n="a11y:t117">所有 status 色文本（已通过验证）</span></td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="a11y:t118">校验：</span></b><span data-i18n="a11y:t119">详见</span> <a href="#/color" style="color:var(--aw-primary)"><span data-i18n="a11y:t120">色彩页 WCAG 标注</span></a><span data-i18n="a11y:t121">。本仓库无构建链路，提交前按色彩页标注人工抽检；业务仓库可再接入自动化对比度校验。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="a11y:t122">SR 测试矩阵 · Screen Reader</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:26%">SR</th><th style="width:24%"><span data-i18n="a11y:t123">浏览器</span></th><th style="width:18%">OS</th><th><span data-i18n="a11y:t124">覆盖范围</span></th></tr></thead>
      <tbody>
        <tr><td><b>NVDA</b> <span data-i18n="a11y:t125">· 必测</span></td><td>Firefox / Chrome</td><td>Windows</td><td><span data-i18n="a11y:t126">≥ 70% 国内用户基础</span></td></tr>
        <tr><td>JAWS</td><td>Chrome</td><td>Windows</td><td><span data-i18n="a11y:t127">企业 / 政府客户</span></td></tr>
        <tr><td>VoiceOver</td><td>Safari</td><td>macOS / iOS</td><td><span data-i18n="a11y:t128">设计师 / 部分管理员</span></td></tr>
        <tr><td>TalkBack</td><td>Chrome</td><td>Android</td><td><span data-i18n="a11y:t129">移动场景（不是 TMS 默认场景）</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="a11y:t130">规则 · Do &amp; Don'ts</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="a11y:t131">所有交互组件键盘可达，键盘或程序化焦点始终显示 focus ring</span></li>
          <li><span data-i18n="a11y:t132">icon-only 按钮必带</span> <code>aria-label</code></li>
          <li><span data-i18n="a11y:t133">表单字段</span> <code>&lt;label htmlFor&gt;</code> <span data-i18n="a11y:t134">关联</span></li>
          <li><span data-i18n="a11y:t135">状态信息色 + 形 + 文字三重编码</span></li>
          <li><span data-i18n="a11y:t136">错误用</span> <code>role="alert"</code> + <code>aria-live="assertive"</code></li>
          <li><span data-i18n="a11y:t137">响应</span> <code>prefers-reduced-motion</code></li>
          <li><span data-i18n="a11y:t138">CI 阶段跑 axe-core + Pa11y 扫描</span></li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="a11y:t139">不要用</span> <code>:focus-visible</code> <span data-i18n="a11y:t140">only —— 鼠标点击后焦点也应可见</span></li>
          <li><span data-i18n="a11y:t141">不要用</span> <code>div onClick</code> <span data-i18n="a11y:t142">替代</span> <code>&lt;button&gt;</code></li>
          <li><span data-i18n="a11y:t143">不要仅靠颜色表达状态</span></li>
          <li><span data-i18n="a11y:t144">不要在 Modal 不实现焦点陷阱</span></li>
          <li><span data-i18n="a11y:t145">不要让 Esc 不关浮层</span></li>
          <li><span data-i18n="a11y:t146">不要把不可逆操作 default focus 在确认按钮</span></li>
          <li><span data-i18n="a11y:t147">不要用 placeholder 替代 label</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
