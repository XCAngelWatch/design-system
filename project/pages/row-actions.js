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
  <p class="section-eyebrow">业务组件 · 行内操作</p>
  <h2>RowActions · 行操作图标库</h2>
  <p class="lede">表格 / 卡片每条记录的尾列动作。统一图标集合 + tooltip + 危险确认阈值，避免每个业务页各写各的图标和文案。</p>

  <div class="subsection">
    <h3>标准动作集合</h3>
    <div class="surface">
      <div class="ra-grid">
        <div class="ra-cell"><div class="ra-icn">${ICN.detail}</div><div class="ra-name">详情</div><code>view</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.edit}</div><div class="ra-name">编辑</div><code>edit</code></div>
        <div class="ra-cell danger"><div class="ra-icn">${ICN.del}</div><div class="ra-name">删除</div><code>delete</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.push}</div><div class="ra-name">推送</div><code>push</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.upgrade}</div><div class="ra-name">升级</div><code>upgrade</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.log}</div><div class="ra-name">日志</div><code>log</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.copy}</div><div class="ra-name">复制</div><code>copy</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.toggle}</div><div class="ra-name">启停</div><code>toggle</code></div>
        <div class="ra-cell warn"><div class="ra-icn">${ICN.reset}</div><div class="ra-name">重置</div><code>reset</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.download}</div><div class="ra-name">下载</div><code>download</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.exp}</div><div class="ra-name">导出</div><code>export</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.more}</div><div class="ra-name">更多</div><code>more</code></div>
      </div>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong>视觉规范：</strong>16×16 SVG 单色图标 · 6px 间距 · 图标默认 <code>--aw-text-2</code>，hover 转 <code>--aw-primary</code>，danger 类型 hover 转 <code>--aw-danger</code>。Tooltip hover 200ms 延迟出现。</div></div>
  </div>

  <div class="subsection">
    <h3>表格内嵌示例</h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="ra-table">
        <thead>
          <tr><th style="width:140px">设备名称</th><th style="width:120px">SN</th><th style="width:90px">状态</th><th style="width:80px">版本</th><th>所属</th><th style="width:160px">操作</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>终端-上海-001</td><td><code>DEV-86420075</code></td>
            <td><span class="status-dot online">在线</span></td>
            <td>v3.4.2</td><td>AngelWatch / 华东 / 上海</td>
            <td>
              <div class="ra-row">
                <button class="ra-btn" title="详情">${ICN.detail}</button>
                <button class="ra-btn" title="编辑">${ICN.edit}</button>
                <button class="ra-btn" title="推送">${ICN.push}</button>
                <button class="ra-btn" title="日志">${ICN.log}</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>终端-北京-014</td><td><code>DEV-86420089</code></td>
            <td><span class="status-dot upgrading">升级中</span></td>
            <td>v3.4.1</td><td>AngelWatch / 华北 / 北京</td>
            <td>
              <div class="ra-row">
                <button class="ra-btn" title="详情">${ICN.detail}</button>
                <button class="ra-btn" title="编辑">${ICN.edit}</button>
                <button class="ra-btn dim" title="推送（升级中不可用）" disabled>${ICN.push}</button>
                <button class="ra-btn" title="日志">${ICN.log}</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>终端-广州-007</td><td><code>DEV-86420112</code></td>
            <td><span class="status-dot offline">离线</span></td>
            <td>v3.3.8</td><td>AngelWatch / 华南 / 广州</td>
            <td>
              <div class="ra-row">
                <button class="ra-btn" title="详情">${ICN.detail}</button>
                <button class="ra-btn" title="编辑">${ICN.edit}</button>
                <button class="ra-btn warn" title="重置">${ICN.reset}</button>
                <button class="ra-btn danger" title="删除">${ICN.del}</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3>危险确认阈值 · 4 档</h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:200px">场景</th><th style="width:160px">交互形态</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td>单条 · 非破坏性<br/><small style="color:var(--aw-text-3)">查看日志、复制 SN、下载</small></td><td><span class="tag-meta">直接执行</span></td><td>无确认 · 仅 toast 反馈结果</td></tr>
          <tr><td>单条 · 可逆<br/><small style="color:var(--aw-text-3)">启停、重置缓存</small></td><td><span class="tag-meta" style="background:#FAF4E0;color:#AD6800">Popconfirm</span></td><td>悬浮 popover · 一句话确认 · 单击外部取消</td></tr>
          <tr><td>单条 · 不可逆<br/><small style="color:var(--aw-text-3)">删除设备、注销证书</small></td><td><span class="tag-meta" style="background:#FAE3E3;color:#A8071A">Modal</span></td><td>阻塞确认 · 必须列出影响范围 · 红色危险按钮</td></tr>
          <tr><td>批量 · 任意操作<br/><small style="color:var(--aw-text-3)">批量启停、批量推送、批量删除</small></td><td><span class="tag-meta" style="background:#FAE3E3;color:#A8071A">Modal · 含明细</span></td><td>必须显示选中数量与影响范围；删除类需二次输入"确认"或勾选确认框</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3>折叠态 · 操作 &gt; 4 时</h3>
    <p class="lede" style="margin-bottom:12px">前 3 个动作明示，第 4+ 个收入 ⋯ 下拉。设备核心动作（详情、编辑、推送）固定在前 3 位，不进下拉。</p>
    <div class="surface">
      <div class="ra-row">
        <button class="ra-btn" title="详情">${ICN.detail}</button>
        <button class="ra-btn" title="编辑">${ICN.edit}</button>
        <button class="ra-btn" title="推送">${ICN.push}</button>
        <div class="ra-divider"></div>
        <div class="ra-more-wrap">
          <button class="ra-btn" title="更多">${ICN.more}</button>
          <div class="ra-menu">
            <div class="ra-mit">${ICN.log}<span>查看日志</span></div>
            <div class="ra-mit">${ICN.copy}<span>复制 SN</span></div>
            <div class="ra-mit">${ICN.download}<span>下载证书</span></div>
            <div class="ra-mit">${ICN.toggle}<span>停用设备</span></div>
            <div class="ra-mdiv"></div>
            <div class="ra-mit warn">${ICN.reset}<span>重置出厂</span></div>
            <div class="ra-mit danger">${ICN.del}<span>删除设备</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong>下拉中 destructive 动作必须置底，</strong>且与上方安全动作之间用 1px 分割线隔开，避免误触。</div></div>
  </div>

  <div class="subsection">
    <h3>反例</h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong>不要把"删除"做成主色按钮：</strong>主色 <code>#0052CC</code> 是积极动作（提交 / 确认），删除应走 ghost-danger 或纯红 icon。</div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>不要在表格行尾列堆超过 6 个图标：</strong>横向滚动一定让其中几个失踪。超过 4 个用折叠。</div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>不要把"详情"做成超链接文字而其他做成图标：</strong>形态混用导致动作权重不可识别，统一图标 + tooltip。</div></div>
  </div>

  <div class="subsection">
    <h3>涉及变量</h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div>--aw-text-2 (默认) · --aw-primary (hover) · --aw-danger / --aw-warning (语义) · --aw-text-disabled (禁用)</div>
      <div style="margin-top:4px">--aw-radius (按钮) · --aw-shadow-2 (下拉) · --aw-dur-fast (过渡)</div>
    </div>
  </div>
</section>
</div>
`;
})();
