/* AngelWatch Design System — page: row-actions */
(function () {
  // Inline SVG library — 16x16 stroke icons
  var ICN = {
    detail:   '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    edit:     '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    del:      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>',
    push:     '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12m0 0l-4-4m4 4l4-4"/><path d="M4 20h16"/></svg>',
    upgrade:  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V8m0 0l-4 4m4-4l4 4"/><path d="M4 4h16"/></svg>',
    log:      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13h6M9 17h6"/></svg>',
    copy:     '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    toggle:   '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="9" width="18" height="6" rx="3"/><circle cx="8" cy="12" r="2"/></svg>',
    reset:    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
    download: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><path d="M12 15V3"/></svg>',
    exp:      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    more:     '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>'
  };

  (window.__AW_PAGES__ = window.__AW_PAGES__ || {})["row-actions"] = `
<div class="content">
<section class="section" id="row-actions">
  <p class="section-eyebrow"><span data-i18n="row-actions:text.001">业务模式 · 行操作</span></p>
  <h2><span data-i18n="row-actions:text.002">行操作 RowActions</span></h2>
  <p class="lede"><span data-i18n="row-actions:text.003">表格 / 卡片每条记录的尾列动作。统一图标集合 + tooltip + 危险确认阈值，避免每个业务页各写各的图标和文案。</span></p>

  <div class="subsection">
    <h3><span data-i18n="row-actions:text.004">标准动作集合</span></h3>
    <div class="surface">
      <div class="ra-grid">
        <div class="ra-cell"><div class="ra-icn">${ICN.detail}</div><div class="ra-name"><span data-i18n="row-actions:text.005">详情</span></div><code>view</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.edit}</div><div class="ra-name"><span data-i18n="row-actions:text.006">编辑</span></div><code>edit</code></div>
        <div class="ra-cell danger"><div class="ra-icn">${ICN.del}</div><div class="ra-name"><span data-i18n="row-actions:text.007">删除</span></div><code>delete</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.push}</div><div class="ra-name"><span data-i18n="row-actions:text.008">推送</span></div><code>push</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.upgrade}</div><div class="ra-name"><span data-i18n="row-actions:text.009">升级</span></div><code>upgrade</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.log}</div><div class="ra-name"><span data-i18n="row-actions:text.010">日志</span></div><code>log</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.copy}</div><div class="ra-name"><span data-i18n="row-actions:text.011">复制</span></div><code>copy</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.toggle}</div><div class="ra-name"><span data-i18n="row-actions:text.012">启停</span></div><code>toggle</code></div>
        <div class="ra-cell warn"><div class="ra-icn">${ICN.reset}</div><div class="ra-name"><span data-i18n="row-actions:text.013">重置</span></div><code>reset</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.download}</div><div class="ra-name"><span data-i18n="row-actions:text.014">下载</span></div><code>download</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.exp}</div><div class="ra-name"><span data-i18n="row-actions:text.015">导出</span></div><code>export</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.more}</div><div class="ra-name"><span data-i18n="row-actions:text.016">更多</span></div><code>more</code></div>
      </div>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="row-actions:text.017">视觉规范：</span></strong><span data-i18n="row-actions:text.018">16×16 SVG 单色图标 · 6px 间距 · 图标默认 </span><code>--aw-text-2</code><span data-i18n="row-actions:text.019">，hover 转 </span><code>--aw-primary</code><span data-i18n="row-actions:text.020">，danger 类型 hover 转 </span><code>--aw-danger</code><span data-i18n="row-actions:text.021">。Tooltip hover 200ms 延迟出现。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="row-actions:text.022">表格内嵌示例</span></h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="ra-table">
        <thead>
          <tr><th style="width:140px"><span data-i18n="row-actions:text.023">设备名称</span></th><th style="width:120px">SN</th><th style="width:90px"><span data-i18n="row-actions:text.024">状态</span></th><th style="width:80px"><span data-i18n="row-actions:text.025">版本</span></th><th><span data-i18n="row-actions:text.026">所属</span></th><th style="width:160px"><span data-i18n="row-actions:text.027">操作</span></th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span data-i18n="row-actions:text.028">终端-上海-001</span></td><td><code>DEV-86420075</code></td>
            <td><span class="status-dot online"><span data-i18n="row-actions:text.029">在线</span></span></td>
            <td>v3.4.2</td><td><span data-i18n="row-actions:text.030">AngelWatch / 华东 / 上海</span></td>
            <td>
              <div class="ra-row">
                <button class="ra-btn" title="详情" data-i18n-title="row-actions:text.005">${ICN.detail}</button>
                <button class="ra-btn" title="编辑" data-i18n-title="row-actions:text.006">${ICN.edit}</button>
                <button class="ra-btn" title="推送" data-i18n-title="row-actions:text.008">${ICN.push}</button>
                <button class="ra-btn" title="日志" data-i18n-title="row-actions:text.010">${ICN.log}</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><span data-i18n="row-actions:text.031">终端-北京-014</span></td><td><code>DEV-86420089</code></td>
            <td><span class="status-dot upgrading"><span data-i18n="row-actions:text.032">升级中</span></span></td>
            <td>v3.4.1</td><td><span data-i18n="row-actions:text.033">AngelWatch / 华北 / 北京</span></td>
            <td>
              <div class="ra-row">
                <button class="ra-btn" title="详情" data-i18n-title="row-actions:text.005">${ICN.detail}</button>
                <button class="ra-btn" title="编辑" data-i18n-title="row-actions:text.006">${ICN.edit}</button>
                <button class="ra-btn dim" title="推送（升级中不可用）" data-i18n-title="row-actions:text.034" disabled>${ICN.push}</button>
                <button class="ra-btn" title="日志" data-i18n-title="row-actions:text.010">${ICN.log}</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><span data-i18n="row-actions:text.035">终端-广州-007</span></td><td><code>DEV-86420112</code></td>
            <td><span class="status-dot offline"><span data-i18n="row-actions:text.036">离线</span></span></td>
            <td>v3.3.8</td><td><span data-i18n="row-actions:text.037">AngelWatch / 华南 / 广州</span></td>
            <td>
              <div class="ra-row">
                <button class="ra-btn" title="详情" data-i18n-title="row-actions:text.005">${ICN.detail}</button>
                <button class="ra-btn" title="编辑" data-i18n-title="row-actions:text.006">${ICN.edit}</button>
                <button class="ra-btn" title="日志" data-i18n-title="row-actions:text.010">${ICN.log}</button>
                <button class="ra-btn danger" title="删除" data-i18n-title="row-actions:text.007">${ICN.del}</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="row-actions:text.038">危险确认阈值 · 4 档</span></h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:200px"><span data-i18n="row-actions:text.039">场景</span></th><th style="width:160px"><span data-i18n="row-actions:text.040">交互形态</span></th><th><span data-i18n="row-actions:text.041">说明</span></th></tr></thead>
        <tbody>
          <tr><td><span data-i18n="row-actions:text.042">单条 · 非破坏性</span><br/><small style="color:var(--aw-text-3)"><span data-i18n="row-actions:text.043">查看日志、复制 SN、下载</span></small></td><td><span class="tag-meta"><span data-i18n="row-actions:text.044">直接执行</span></span></td><td><span data-i18n="row-actions:text.045">无确认 · 仅 toast 反馈结果</span></td></tr>
          <tr><td><span data-i18n="row-actions:text.046">单条 · 可逆</span><br/><small style="color:var(--aw-text-3)"><span data-i18n="row-actions:text.047">启停、重置缓存</span></small></td><td><span class="tag-meta" style="background:#FFFBE6;color:#D48806">Popconfirm</span></td><td><span data-i18n="row-actions:text.048">悬浮 popover · 一句话确认 · 单击外部取消</span></td></tr>
          <tr><td><span data-i18n="row-actions:text.049">单条 · 不可逆</span><br/><small style="color:var(--aw-text-3)"><span data-i18n="row-actions:text.050">删除设备、注销证书</span></small></td><td><span class="tag-meta" style="background:#FFF1F0;color:#CF1322">Modal</span></td><td><span data-i18n="row-actions:text.051">阻塞确认 · 必须列出影响范围 · 红色危险按钮</span></td></tr>
          <tr><td><span data-i18n="row-actions:text.052">批量 · 任意操作</span><br/><small style="color:var(--aw-text-3)"><span data-i18n="row-actions:text.053">批量启停、批量推送、批量删除</span></small></td><td><span class="tag-meta" style="background:#FFF1F0;color:#CF1322"><span data-i18n="row-actions:text.054">Modal · 含明细</span></span></td><td><span data-i18n="row-actions:text.055">必须显示选中数量与影响范围；删除类需二次输入"确认"或勾选确认框</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="row-actions:text.056">折叠态 · 操作 &gt; 4 时</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="row-actions:text.057">前 3 个动作明示，第 4+ 个收入 ⋯ 下拉。设备核心动作（详情、编辑、推送）固定在前 3 位，不进下拉。</span></p>
    <div class="surface">
      <div class="ra-row">
        <button class="ra-btn" title="详情" data-i18n-title="row-actions:text.005">${ICN.detail}</button>
        <button class="ra-btn" title="编辑" data-i18n-title="row-actions:text.006">${ICN.edit}</button>
        <button class="ra-btn" title="推送" data-i18n-title="row-actions:text.008">${ICN.push}</button>
        <div class="ra-divider"></div>
        <div class="ra-more-wrap">
          <button class="ra-btn" title="更多" data-i18n-title="row-actions:text.016">${ICN.more}</button>
          <div class="ra-menu">
            <div class="ra-mit">${ICN.log}<span><span data-i18n="row-actions:text.058">查看日志</span></span></div>
            <div class="ra-mit">${ICN.copy}<span><span data-i18n="row-actions:text.059">复制 SN</span></span></div>
            <div class="ra-mit">${ICN.download}<span><span data-i18n="row-actions:text.060">下载证书</span></span></div>
            <div class="ra-mit">${ICN.toggle}<span><span data-i18n="row-actions:text.061">停用设备</span></span></div>
            <div class="ra-mdiv"></div>
            <div class="ra-mit warn">${ICN.reset}<span><span data-i18n="row-actions:text.062">重置出厂</span></span></div>
            <div class="ra-mit danger">${ICN.del}<span><span data-i18n="row-actions:text.063">删除设备</span></span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong><span data-i18n="row-actions:text.064">下拉中 destructive 动作必须置底，</span></strong><span data-i18n="row-actions:text.065">且与上方安全动作之间用 1px 分割线隔开，避免误触。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="row-actions:text.066">反例</span></h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong><span data-i18n="row-actions:text.067">不要把"删除"做成主色按钮：</span></strong><span data-i18n="row-actions:text.068">主色 </span><code>#165DFF</code><span data-i18n="row-actions:text.069"> 是积极动作（提交 / 确认），删除应走 ghost-danger 或纯红 icon。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="row-actions:text.070">不要在表格行尾列堆超过 6 个图标：</span></strong><span data-i18n="row-actions:text.071">横向滚动一定让其中几个失踪。超过 4 个用折叠。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="row-actions:text.072">不要把"详情"做成超链接文字而其他做成图标：</span></strong><span data-i18n="row-actions:text.073">形态混用导致动作权重不可识别，统一图标 + tooltip。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="row-actions:text.074">涉及变量</span></h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div data-i18n="row-actions:text.075">--aw-text-2 (默认) · --aw-primary (hover) · --aw-danger / --aw-warning (语义) · --aw-text-disabled (禁用)</div>
      <div style="margin-top:4px" data-i18n="row-actions:text.076">--aw-radius (按钮) · --aw-shadow-2 (下拉) · --aw-dur-fast (过渡)</div>
    </div>
  </div>
</section>
</div>
`;
})();
