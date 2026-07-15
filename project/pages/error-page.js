/* AngelWatch Design System — page: error-page (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["error-page"] = `
<div class="content">
<!-- ERROR PAGE -->
<section class="section" id="error-page">
  <p class="section-eyebrow"><span data-i18n="error-page:text.001">业务模式 · 错误页</span></p>
  <h2><span data-i18n="error-page:text.002">错误页 ErrorPage</span></h2>
  <p class="lede"><span data-i18n="error-page:text.003">三种正式错误页使用统一的极简线性插画。按钮不全部移除：每个错误页只保留能真正恢复流程的主操作，辅助动作降为次要按钮或文字按钮。</span></p>
  <div class="errorpage-grid">
    <div class="errorpage-card">
<svg class="ep-illust" viewBox="0 0 132 100" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="20" y="20" width="92" height="60" rx="3"/><line x1="20" y1="34" x2="112" y2="34"/><circle cx="28" cy="27" r="1.6"/><circle cx="34" cy="27" r="1.6"/><circle cx="40" cy="27" r="1.6"/><text x="66" y="62" text-anchor="middle" font-family="monospace" font-size="20" font-weight="600" fill="currentColor" stroke="none">404</text></svg>
<div class="ep-code"><span data-i18n="error-page:text.018">ERROR · 404</span></div>
<h4><span data-i18n="error-page:text.004">页面不存在</span></h4>
<p class="ep-sub"><span data-i18n="error-page:text.005">请检查 URL，或从左侧菜单重新进入。如果是分享链接已失效，请联系发送者。</span></p>
<div class="ep-actions"><button class="btn btn-primary"><span data-i18n="error-page:text.006">返回首页</span></button></div>
    </div>
    <div class="errorpage-card">
<svg class="ep-illust" viewBox="0 0 132 100" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="50" y="40" width="32" height="28" rx="2"/><path d="M56 40 V32 a10 10 0 0 1 20 0 V40"/><circle cx="66" cy="54" r="2.5" fill="currentColor"/><line x1="66" y1="56" x2="66" y2="62"/></svg>
<div class="ep-code"><span data-i18n="error-page:text.019">ERROR · 403</span></div>
<h4><span data-i18n="error-page:text.008">无权限访问</span></h4>
<p class="ep-sub"><span data-i18n="error-page:text.009">该页面需要 </span><code>device.manage</code><span data-i18n="error-page:text.010"> 权限。请联系空间管理员申请，或切换组织。</span></p>
<div class="ep-actions"><button class="btn btn-primary"><span data-i18n="error-page:text.011">申请权限</span></button><button class="btn"><span data-i18n="error-page:text.012">切换组织</span></button></div>
<p class="ep-sub"><span data-i18n="error-page:text.021">此示例假设审批流可用且存在其他可访问组织；条件不满足时隐藏对应按钮。</span></p>
    </div>
    <div class="errorpage-card">
<svg class="ep-illust" viewBox="0 0 132 100" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="36" y="32" width="60" height="40" rx="3"/><line x1="36" y1="46" x2="96" y2="46"/><line x1="44" y1="56" x2="64" y2="56"/><line x1="44" y1="62" x2="58" y2="62"/><circle cx="84" cy="59" r="6"/><line x1="84" y1="56" x2="84" y2="60"/><circle cx="84" cy="62.5" r="0.6" fill="currentColor"/></svg>
<div class="ep-code"><span data-i18n="error-page:text.020">ERROR · 500</span></div>
<h4><span data-i18n="error-page:text.013">服务异常</span></h4>
<p class="ep-sub"><span data-i18n="error-page:text.014">服务端发生未知错误。Trace ID：</span><code>5f3a-91bc-4422</code><span data-i18n="error-page:text.015"> · 请复制后联系运维。</span></p>
<div class="ep-actions"><button class="btn btn-primary"><span data-i18n="error-page:text.016">重试</span></button><button class="btn"><span data-i18n="error-page:text.017">复制 Trace ID</span></button></div>
    </div>
  </div>
  <div class="subsection">
    <h3><span data-i18n="error-page:text.022">操作可用性契约</span></h3>
    <div class="surface" style="padding:0;overflow:auto">
      <table class="tech-table">
        <thead><tr><th><span data-i18n="error-page:text.023">场景</span></th><th><span data-i18n="error-page:text.024">操作</span></th><th><span data-i18n="error-page:text.025">显示条件</span></th></tr></thead>
        <tbody>
          <tr><td>404</td><td><span data-i18n="error-page:text.026">返回首页</span></td><td><span data-i18n="error-page:text.027">始终提供稳定的站内恢复路径。</span></td></tr>
          <tr><td>404 / 500</td><td><span data-i18n="error-page:text.028">联系支持</span></td><td><span data-i18n="error-page:text.029">仅在产品已配置有效支持链接或联系方式时显示，不渲染装饰性按钮。</span></td></tr>
          <tr><td>403</td><td><span data-i18n="error-page:text.030">申请权限 / 切换组织</span></td><td><span data-i18n="error-page:text.031">分别要求可用的权限审批流程，以及至少一个其他可访问组织；能力不存在时隐藏。</span></td></tr>
          <tr><td>500</td><td><span data-i18n="error-page:text.032">重试 / 复制 Trace ID</span></td><td><span data-i18n="error-page:text.033">重试必须安全且可恢复；仅在服务端返回 Trace ID 时提供复制动作。</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="error-page:text.034">原则：</span></strong><span data-i18n="error-page:text.035">错误页动作来自运行时能力与上下文，不通过错误码硬编码一组固定按钮。</span></div></div>
  </div>
</section>
</div>
`;
