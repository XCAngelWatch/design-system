/* AngelWatch Design System — page: toast (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["toast"] = `
<div class="content">
<section class="section" id="toast">
  <p class="section-eyebrow">Components · 瞬时反馈</p>
  <h2>Toast / Tooltip / Popover</h2>
  <p class="lede">Toast 浮于右上角，自动消失 (3s)，用于操作结果。Tooltip 用于解释行内文字。Popover 承载结构化补充内容。</p>

  <div class="demo-grid cols-2">
    <div class="surface">
<h3 style="margin:0 0 12px;font-size:14px">Toast / Notification</h3>
<div class="toast-stack">
  <div class="toast success"><div class="ico">✓</div><div class="body"><strong>已保存</strong>设备配置已生效</div><div class="close">×</div></div>
  <div class="toast info"><div class="ico">i</div><div class="body"><strong>OTA 推送已发起</strong><small>共 1,284 台设备 · 预计 02:12 完成</small></div><div class="close">×</div></div>
  <div class="toast warning"><div class="ico">!</div><div class="body"><strong>低电量预警</strong>批次中 18 台设备电量 &lt; 20%</div><div class="close">×</div></div>
  <div class="toast error"><div class="ico">×</div><div class="body"><strong>推送失败</strong>34 台设备未确认接收</div><div class="close">×</div></div>
</div>
    </div>
    <div class="surface">
<h3 style="margin:0 0 12px;font-size:14px">Tooltip &amp; Popover</h3>
<div style="padding:16px 0 0">
  <div class="tip-demo">
    <span style="border-bottom:1px dotted var(--aw-text-3)">SHA-256 校验和</span>
    <div class="tip">服务端会比对此值，一致才允许下发到设备</div>
  </div>
</div>
<div style="padding:60px 0 0;position:relative;height:200px">
  <div style="position:relative;display:inline-block">
    <span class="status-dot fault" style="cursor:pointer;border-bottom:1px dotted var(--aw-danger)">故障</span>
    <div class="popover">
      <div class="ttl">故障详情 · DEV-86420144</div>
      <div style="font-size:12px;color:var(--aw-text-2);line-height:1.6">
        <div style="display:flex;justify-content:space-between"><span>错误码</span><code class="mono">E-AGT-0142</code></div>
        <div style="display:flex;justify-content:space-between"><span>触发时间</span><span>1 小时前</span></div>
        <div style="display:flex;justify-content:space-between"><span>看门狗</span><span style="color:var(--aw-danger)">无响应</span></div>
      </div>
      <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--aw-border-3)"><button class="btn btn-link btn-sm" style="padding:0">查看完整日志 →</button></div>
    </div>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3>Notification 体系 · 位置 / 栈 / 时长</h3>
    <p class="lede" style="margin-bottom:12px">Toast / Message / Notification 在 antd v6 中各有职责。本节统一规约 TMS 内 4 类瞬时反馈的位置、栈策略与自动消失时长。</p>

    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead>
          <tr><th style="width:120px">类型</th><th style="width:140px">默认位置</th><th style="width:100px">栈上限</th><th style="width:120px">自动消失</th><th>典型场景</th></tr>
        </thead>
        <tbody>
          <tr><td>Message<br/><small style="color:var(--aw-text-3)">轻量横条</small></td><td>页面顶部居中</td><td>3 条</td><td>1.5s 成功 / 2s info</td><td>"已保存" / "已复制" / "已撤销"</td></tr>
          <tr><td>Toast (Notification)<br/><small style="color:var(--aw-text-3)">右上角卡片</small></td><td>topRight (默认)<br/><small>可配 topLeft / bottomRight</small></td><td>3 条</td><td>3s 成功 / 4.5s info / 6s 警告 / 手动关闭 错误</td><td>OTA 推送启动、批量结果摘要</td></tr>
          <tr><td>富 Notification<br/><small style="color:var(--aw-text-3)">含按钮 / 进度</small></td><td>topRight / bottomRight</td><td>2 条</td><td>不自动消失</td><td>升级进度、待确认动作</td></tr>
          <tr><td>Tooltip<br/><small style="color:var(--aw-text-3)">hover 浮层</small></td><td>跟随触发元素</td><td>1 条 (单)</td><td>移开即消</td><td>截断文本完整内容、icon 含义解释</td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong>位置规则：</strong>同一会话内不同时使用 topRight + bottomRight。新 Toast 入场动画 200ms 滑入；超过栈上限时最旧者立即消失（不动画），新 Toast 滑入。</div></div>
  </div>

  <div class="subsection">
    <h3>边界对照 · Toast / Alert / Modal / Result</h3>
    <p class="lede" style="margin-bottom:12px">"用户该不该停下手上的事？操作是不是终结？"两个问题决定用哪个。</p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:140px">类型</th><th style="width:140px">是否阻塞</th><th style="width:140px">是否需要决策</th><th style="width:140px">是否页面级</th><th>使用场景</th></tr></thead>
        <tbody>
          <tr><td><b>Toast / Message</b></td><td>否</td><td>否</td><td>否（浮层）</td><td>非阻塞、轻量结果反馈、可忽略</td></tr>
          <tr><td><b>Alert (页面内)</b></td><td>否</td><td>否</td><td>是（嵌入内容）</td><td>与上下文相关的持续性提示，不消失</td></tr>
          <tr><td><b>Modal</b></td><td>是</td><td>是</td><td>否（叠层）</td><td>必须现在决策的阻塞确认</td></tr>
          <tr><td><b>Result</b></td><td>否（已是结果）</td><td>否（操作完成）</td><td>是（整页）</td><td>异步 / 批量操作的终态展示</td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong>不要混用：</strong>错误用 Toast 而不是 Alert → 用户错过即丢失；失败用 Modal 而不是 Toast → 频繁打断流程；批量结果用 Toast 而不是 Result → 失败明细列不下。</div></div>
  </div>

  <div class="subsection">
    <h3>富 Notification · 3 类</h3>
    <p class="lede" style="margin-bottom:12px">超出"标题 + 副文案"的复杂瞬时反馈。带按钮 / 进度条 / 折叠展开。</p>
    <div class="rich-toast-grid">

      <div class="rt-card">
        <div class="rt-cap">①  含操作按钮 · 异步任务发起后</div>
        <div class="rt-body">
          <div class="toast info" style="position:relative;width:100%">
            <div class="ico">i</div>
            <div class="body">
              <strong>OTA 推送已发起</strong>
              <small>共 1,284 台设备 · 预计 02:12 完成</small>
              <div class="rt-acts">
                <button class="btn btn-link btn-sm" style="padding:0">查看进度 →</button>
                <button class="btn btn-link btn-sm" style="padding:0;color:var(--aw-text-3)">取消推送</button>
              </div>
            </div>
            <div class="close">×</div>
          </div>
        </div>
      </div>

      <div class="rt-card">
        <div class="rt-cap">②  含进度条 · 长任务跟随</div>
        <div class="rt-body">
          <div class="toast info" style="position:relative;width:100%">
            <div class="ico">⟳</div>
            <div class="body">
              <strong>批量推送中</strong>
              <small>已完成 384 / 1,284 台 · 30%</small>
              <div class="rt-progress" style="margin-top:6px">
                <div class="track"><div class="fill" style="width:30%"></div></div>
              </div>
            </div>
            <div class="close">−</div>
          </div>
        </div>
      </div>

      <div class="rt-card">
        <div class="rt-cap">③  折叠展开 · 错误明细</div>
        <div class="rt-body">
          <div class="toast error expanded" style="position:relative;width:100%">
            <div class="ico">×</div>
            <div class="body">
              <strong>34 台设备推送失败</strong>
              <small>详情见下方明细</small>
              <div class="rt-detail">
                <div class="rd-row"><span>DEV-86420075</span><span class="er">网络超时</span></div>
                <div class="rd-row"><span>DEV-86420089</span><span class="er">设备离线</span></div>
                <div class="rd-row"><span>DEV-86420112</span><span class="er">磁盘满</span></div>
                <div class="rd-row" style="opacity:0.6">还有 31 条…</div>
              </div>
              <div class="rt-acts">
                <button class="btn btn-link btn-sm" style="padding:0">下载完整列表</button>
                <button class="btn btn-link btn-sm" style="padding:0">重试失败项</button>
              </div>
            </div>
            <div class="close">×</div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="subsection">
    <h3>反例</h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong>不要用 Toast 显示需要用户做选择的内容：</strong>Toast 自动消失，用户来不及反应。需要决策走 Modal。</div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>不要让 4 个 Toast 堆叠遮挡 topbar：</strong>同方向超过 3 个时挤掉最旧的；超过 5 个考虑改 Notification Center 入口（topbar 铃铛图标）。</div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>不要用错误 Toast 而不展示 traceId：</strong>用户截图给 SRE 时缺少定位信息。错误必须含 traceId 或错误码。</div></div>
  </div>

  <div class="subsection">
    <h3>涉及变量</h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div>--aw-success / --aw-info / --aw-warning / --aw-danger (语义) · 对应 _bg 浅色底</div>
      <div style="margin-top:4px">--aw-shadow-2 (Toast) · --aw-radius (容器) · --aw-dur-base (滑入)</div>
      <div style="margin-top:4px">栈上限：Toast 3 / Notification 富 2 / Message 3</div>
    </div>
  </div>
</section>
</div>
`;
