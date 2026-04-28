/* AngelWatch Design System — page: a11y (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["a11y"] = `
<div class="content">
<section class="section" id="a11y">
  <p class="section-eyebrow">Foundations · 无障碍</p>
  <h2>Accessibility · 无障碍设计</h2>
  <p class="lede">运维与 IT 管理员中包含视障 / 色弱 / 键盘优先用户。系统目标 WCAG 2.1 AA 全量合规、关键路径 AAA 合规，CI 阶段通过 axe-core + Pa11y 自动扫描，PR 不达标会被拦。本页固化七大维度的硬约束。</p>

  <div class="subsection">
    <h3>键盘可达 · Keyboard</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">所有交互组件必须可仅用键盘完成全部操作 —— 不依赖鼠标。Tab 顺序按视觉阅读顺序（左→右、上→下）。focus ring 永远可见，<b>非</b> <code>:focus-visible</code> only。</p>
    <table class="map-table">
      <thead><tr><th style="width:18%">按键</th><th style="width:30%">行为</th><th>语境</th></tr></thead>
      <tbody>
        <tr><td><kbd>Tab</kbd> / <kbd>Shift+Tab</kbd></td><td>前进 / 后退聚焦</td><td>所有交互元素；隐藏元素 <code>tabindex="-1"</code></td></tr>
        <tr><td><kbd>Enter</kbd></td><td>确认 / 提交 / 触发主动作</td><td>按钮、链接；表单内不在 textarea 中提交</td></tr>
        <tr><td><kbd>Space</kbd></td><td>勾选 / 触发按钮</td><td>Checkbox、Switch、Button</td></tr>
        <tr><td><kbd>Esc</kbd></td><td>关闭浮层 / 取消编辑</td><td>Modal、Drawer、Popover、Dropdown 必须响应</td></tr>
        <tr><td><kbd>↑</kbd> / <kbd>↓</kbd></td><td>上下导航</td><td>Select、Menu、Table 行、Tree、AutoComplete</td></tr>
        <tr><td><kbd>←</kbd> / <kbd>→</kbd></td><td>左右导航</td><td>Tabs、Steps、Pagination、Calendar 日期格</td></tr>
        <tr><td><kbd>Home</kbd> / <kbd>End</kbd></td><td>跳到首 / 末</td><td>Select、Menu、Table（首行 / 末行）</td></tr>
        <tr><td><kbd>PageUp</kbd> / <kbd>PageDown</kbd></td><td>翻页</td><td>Table 分页、Calendar 月切换</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>13 条全局快捷键</h3>
    <table class="map-table">
      <thead><tr><th style="width:24%">快捷键</th><th style="width:30%">动作</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><kbd>Cmd</kbd>+<kbd>K</kbd> / <kbd>Ctrl</kbd>+<kbd>K</kbd></td><td>全局搜索（Command Palette）</td><td>跨设备 / 用户 / 操作 / 页面统一搜索</td></tr>
        <tr><td><kbd>Cmd</kbd>+<kbd>B</kbd></td><td>切换侧边栏折叠</td><td>临时扩展工作区域</td></tr>
        <tr><td><kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd></td><td>切换 Light / Dark 主题</td><td>对接 motion 页主题切换流程</td></tr>
        <tr><td><kbd>?</kbd></td><td>打开快捷键参考</td><td>任意非输入框聚焦时</td></tr>
        <tr><td><kbd>g</kbd> <kbd>d</kbd></td><td>跳转设备列表</td><td>Vim 式两键序列</td></tr>
        <tr><td><kbd>g</kbd> <kbd>p</kbd></td><td>跳转推送页</td><td></td></tr>
        <tr><td><kbd>g</kbd> <kbd>o</kbd></td><td>跳转 OTA 页</td><td></td></tr>
        <tr><td><kbd>g</kbd> <kbd>u</kbd></td><td>跳转用户管理</td><td></td></tr>
        <tr><td><kbd>g</kbd> <kbd>h</kbd></td><td>回到首页 / 仪表盘</td><td></td></tr>
        <tr><td><kbd>/</kbd></td><td>聚焦当前页搜索框</td><td>列表 / 表格</td></tr>
        <tr><td><kbd>n</kbd></td><td>"+ 添加" 主操作</td><td>当前页有添加按钮时</td></tr>
        <tr><td><kbd>r</kbd></td><td>刷新当前数据</td><td>不刷整页，仅 React Query invalidate</td></tr>
        <tr><td><kbd>Esc</kbd></td><td>关闭浮层 / 退出编辑</td><td>层级最深的浮层先关</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>焦点管理 · Focus Management</h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">焦点环</div>
        <h3 style="margin:0 0 8px;font-size:14px">永远可见</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">2px outline + 2px offset，颜色 <code>--aw-primary</code>。<b>不</b>限定 <code>:focus-visible</code>，因鼠标 + 键盘混用用户也需可见。Dark 模式自动跟随 token 提亮。</p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">焦点陷阱</div>
        <h3 style="margin:0 0 8px;font-size:14px">Modal / Drawer</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">浮层打开后 Tab 焦点必须循环在浮层内。最后一个元素 Tab 回到第一个，反之亦然。关闭后焦点自动还原到触发按钮。</p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">默认焦点</div>
        <h3 style="margin:0 0 8px;font-size:14px">破坏性 → 取消</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">删除 / 推送 / 重启 / 回滚 等不可逆操作的 Modal 默认焦点在<b>取消</b>，禁止落在确认。普通表单首字段聚焦。</p>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>ARIA 语义</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">优先用语义 HTML（<code>&lt;button&gt;</code>、<code>&lt;nav&gt;</code>、<code>&lt;table&gt;</code>），不可避免时补 ARIA。常见组件的必备 ARIA 如下表。</p>
    <table class="map-table">
      <thead><tr><th style="width:22%">组件</th><th style="width:34%">必备 ARIA</th><th>原因</th></tr></thead>
      <tbody>
        <tr><td>Modal</td><td><code>role="dialog"</code> · <code>aria-labelledby</code> · <code>aria-modal="true"</code></td><td>SR 宣读对话框 + 标题</td></tr>
        <tr><td>Toast</td><td><code>role="status"</code> · <code>aria-live="polite"</code></td><td>瞬时反馈不打断当前阅读</td></tr>
        <tr><td>Notification 错误</td><td><code>role="alert"</code> · <code>aria-live="assertive"</code></td><td>错误 / 告警立即宣读</td></tr>
        <tr><td>Tabs</td><td><code>role="tablist"</code> · <code>role="tab"</code> · <code>aria-selected</code></td><td>SR 宣读"3 个 Tab 中第 1 个"</td></tr>
        <tr><td>Tooltip</td><td><code>aria-describedby</code> 关联 tooltip id</td><td>触发元素 SR 读出 tooltip 内容</td></tr>
        <tr><td>icon-only 按钮</td><td><code>aria-label="搜索"</code></td><td>无文字按钮 SR 完全失效</td></tr>
        <tr><td>表单字段</td><td><code>&lt;label htmlFor&gt;</code> + <code>aria-required</code> + <code>aria-invalid</code> + <code>aria-describedby</code> 关联错误</td><td>SR 朗读"必填 / 错误 / 错误内容"</td></tr>
        <tr><td>Loading</td><td><code>aria-busy="true"</code> + <code>aria-live="polite"</code></td><td>内容加载中宣读"加载中…"</td></tr>
        <tr><td>分页</td><td><code>aria-current="page"</code> · <code>nav role="navigation"</code></td><td>SR 知道当前页</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>色弱 / 色盲支持 · Color-blind</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">~ 8% 男性是某种色觉缺陷（红绿色盲最常见）。状态信息<b>禁止仅依靠颜色</b>表达 —— 必须色 + 形 + 文字三重编码。</p>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ 三重编码</h3>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;align-items:center;gap:8px;font-size:13px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--aw-success);box-shadow:0 0 0 2px var(--aw-success-bg)"></span><span style="color:var(--aw-success);font-weight:500">在线</span><span style="color:var(--aw-text-3);font-size:11px">· 圆点 + 绿色 + 文字</span></div>
          <div style="display:flex;align-items:center;gap:8px;font-size:13px"><span style="display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:8px solid var(--aw-warning)"></span><span style="color:var(--aw-warning);font-weight:500">升级中</span><span style="color:var(--aw-text-3);font-size:11px">· 三角 + 黄色 + 文字</span></div>
          <div style="display:flex;align-items:center;gap:8px;font-size:13px"><span style="display:inline-block;width:8px;height:8px;background:var(--aw-danger);transform:rotate(45deg)"></span><span style="color:var(--aw-danger);font-weight:500">故障</span><span style="color:var(--aw-text-3);font-size:11px">· 方形 + 红色 + 文字</span></div>
        </div>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ 仅色编码</h3>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;align-items:center;gap:8px;font-size:13px"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--aw-success)"></span><span style="color:var(--aw-text-3);font-size:11px">— 红绿色盲完全失效</span></div>
          <div style="display:flex;align-items:center;gap:8px;font-size:13px"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--aw-warning)"></span><span style="color:var(--aw-text-3);font-size:11px">— 看上去与"在线"等价</span></div>
          <div style="display:flex;align-items:center;gap:8px;font-size:13px"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--aw-danger)"></span><span style="color:var(--aw-text-3);font-size:11px">— 红与黄难辨</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>降低动效 · Reduced Motion</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">前庭功能障碍 / 偏头痛用户对动画敏感。系统响应 OS <code>prefers-reduced-motion: reduce</code>，把所有过渡 / 动画压到 ≤ 1ms（保留 token 不删 transition 属性，避免组件假"无 hover"）。</p>
    <div class="code-block"><pre><code>/* 全局响应 reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}

/* 大屏 / Dashboard 实时刷新 即使用户关动效也保留必要的"新数据闪现" */
.realtime-pulse {
  animation: pulse 600ms;  /* not gated by reduced-motion */
}</code></pre></div>
  </div>

  <div class="subsection">
    <h3>对比度 · Contrast</h3>
    <table class="map-table">
      <thead><tr><th style="width:30%">对比对象</th><th style="width:24%">最低要求</th><th>规则</th></tr></thead>
      <tbody>
        <tr><td>正文文本 vs 底色</td><td>4.5:1（AA）</td><td>所有 <code>--aw-text-1</code> / <code>--aw-text-2</code></td></tr>
        <tr><td>大文本 (≥18px or ≥14px bold)</td><td>3:1（AA）</td><td>H1 / H2 / 卡片标题</td></tr>
        <tr><td>关键 CTA / 大字</td><td>7:1（AAA）</td><td>主操作按钮文字、统计数字</td></tr>
        <tr><td>UI 组件 / 图标</td><td>3:1（AA）</td><td>边框、icon、focus ring vs 底色</td></tr>
        <tr><td>状态文字</td><td>4.5:1</td><td>所有 status 色文本（已通过验证）</td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">校验：</b>详见 <a href="#/color" style="color:var(--aw-primary)">色彩页 WCAG 标注</a>。所有 token 在 <code>tokens.css</code> 提交时通过 stylelint plugin 自动校验对比度。</p>
  </div>

  <div class="subsection">
    <h3>SR 测试矩阵 · Screen Reader</h3>
    <table class="map-table">
      <thead><tr><th style="width:26%">SR</th><th style="width:24%">浏览器</th><th style="width:18%">OS</th><th>覆盖范围</th></tr></thead>
      <tbody>
        <tr><td><b>NVDA</b> · 必测</td><td>Firefox / Chrome</td><td>Windows</td><td>≥ 70% 国内用户基础</td></tr>
        <tr><td>JAWS</td><td>Chrome</td><td>Windows</td><td>企业 / 政府客户</td></tr>
        <tr><td>VoiceOver</td><td>Safari</td><td>macOS / iOS</td><td>设计师 / 部分管理员</td></tr>
        <tr><td>TalkBack</td><td>Chrome</td><td>Android</td><td>移动场景（不是 TMS 默认场景）</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>规则 · Do &amp; Don'ts</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>所有交互组件键盘可达 + focus ring 永远可见</li>
          <li>icon-only 按钮必带 <code>aria-label</code></li>
          <li>表单字段 <code>&lt;label htmlFor&gt;</code> 关联</li>
          <li>状态信息色 + 形 + 文字三重编码</li>
          <li>错误用 <code>role="alert"</code> + <code>aria-live="assertive"</code></li>
          <li>响应 <code>prefers-reduced-motion</code></li>
          <li>CI 阶段跑 axe-core + Pa11y 扫描</li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>不要用 <code>:focus-visible</code> only —— 鼠标点击后焦点也应可见</li>
          <li>不要用 <code>div onClick</code> 替代 <code>&lt;button&gt;</code></li>
          <li>不要仅靠颜色表达状态</li>
          <li>不要在 Modal 不实现焦点陷阱</li>
          <li>不要让 Esc 不关浮层</li>
          <li>不要把不可逆操作 default focus 在确认按钮</li>
          <li>不要用 placeholder 替代 label</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
