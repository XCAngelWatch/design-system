/* AngelWatch Design System — page: i18n (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["i18n"] = `
<div class="content">
<!-- I18N -->
<section class="section" id="i18n">
  <p class="section-eyebrow">Foundations · 国际化</p>
  <h2>Internationalization · 多语言</h2>
  <p class="lede">客户在欧美与拉美的 OEM 业务量增长，IT admin 需要英文/西班牙文/葡萄牙文界面。基于 Ant Design <span class="mono">ConfigProvider locale</span>，搭配 <span class="mono">react-i18next</span> 作为 key-value 层。所有可见文本必须经 <span class="mono">t('namespace.key')</span> 包裹，禁止硬编码。</p>

  <div class="subsection">
    <h3>翻译覆盖</h3>
    <div class="i18n-grid">
      <div class="i18n-card">
        <div class="lang-tag"><span>zh-CN · 简体中文</span><span class="flag">CN</span></div>
        <div class="stat-mini"><div class="ml">已翻译 keys</div><div class="mn">2,418 / 2,418</div></div>
        <div class="stat-mini"><div class="ml">覆盖率</div><div class="mn" style="color:var(--aw-success)">100%</div></div>
        <div class="stat-mini"><div class="ml">来源</div><div class="mn" style="font-size:12px;font-weight:400;color:var(--aw-text-2)">基准语言</div></div>
      </div>
      <div class="i18n-card">
        <div class="lang-tag"><span>en-US · English</span><span class="flag">US</span></div>
        <div class="stat-mini"><div class="ml">已翻译 keys</div><div class="mn">2,418 / 2,418</div></div>
        <div class="stat-mini"><div class="ml">覆盖率</div><div class="mn" style="color:var(--aw-success)">100%</div></div>
        <div class="stat-mini"><div class="ml">维护人</div><div class="mn" style="font-size:12px;font-weight:400;color:var(--aw-text-2)">Localization Team</div></div>
      </div>
      <div class="i18n-card">
        <div class="lang-tag"><span>es-419 · Español</span><span class="flag">LA</span></div>
        <div class="stat-mini"><div class="ml">已翻译 keys</div><div class="mn">2,386 / 2,418</div></div>
        <div class="stat-mini"><div class="ml">覆盖率</div><div class="mn" style="color:var(--aw-warning)">98.7%</div></div>
        <div class="stat-mini"><div class="ml">缺失</div><div class="mn" style="font-size:12px;font-weight:400;color:var(--aw-text-2)">32 keys（新增）</div></div>
      </div>
      <div class="i18n-card">
        <div class="lang-tag"><span>pt-BR · Português</span><span class="flag">BR</span></div>
        <div class="stat-mini"><div class="ml">已翻译 keys</div><div class="mn">2,386 / 2,418</div></div>
        <div class="stat-mini"><div class="ml">覆盖率</div><div class="mn" style="color:var(--aw-warning)">98.7%</div></div>
        <div class="stat-mini"><div class="ml">缺失</div><div class="mn" style="font-size:12px;font-weight:400;color:var(--aw-text-2)">32 keys（新增）</div></div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>Key 命名约定</h3>
    <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 14px;max-width:720px;line-height:1.6"><span class="mono">namespace.module.element.state</span>。namespace 与左侧菜单一一对应；模块名小写驼峰；不允许英文单词大写或下划线。每条 key 必须有 zh-CN 与 en-US，否则 lint 阻断 PR。</p>
    <div class="i18n-keys"><span class="c">// locales/en-US/device.json — 节选</span>
{
  <span class="k">"device.list.title"</span>: <span class="v">"Device Management"</span>,
  <span class="k">"device.list.search.placeholder"</span>: <span class="v">"Search by SN, name or owner"</span>,
  <span class="k">"device.list.column.sn"</span>: <span class="v">"Serial Number"</span>,
  <span class="k">"device.list.column.status"</span>: <span class="v">"Status"</span>,
  <span class="k">"device.list.column.lastOnline"</span>: <span class="v">"Last Online"</span>,
  <span class="k">"device.list.action.batchUpgrade"</span>: <span class="v">"Batch Upgrade"</span>,
  <span class="k">"device.detail.tab.telemetry"</span>: <span class="v">"Telemetry"</span>,
  <span class="k">"device.detail.alert.lowBattery"</span>: <span class="v">"Battery below threshold (current: {<span class="k">value</span>}%)"</span>,
  <span class="k">"device.status.online"</span>: <span class="v">"Online"</span>,
  <span class="k">"device.status.upgrading"</span>: <span class="v">"Upgrading"</span>,
  <span class="k">"device.status.fault"</span>: <span class="v">"Fault"</span>,
  <span class="k">"device.status.offline"</span>: <span class="v">"Offline"</span>,
  <span class="k">"device.status.locked"</span>: <span class="v">"Locked"</span>,
  <span class="c">// 复数：i18next 自动选取 _one / _other</span>
  <span class="k">"device.batch.confirm_one"</span>: <span class="v">"Upgrade {<span class="k">count</span>} device?"</span>,
  <span class="k">"device.batch.confirm_other"</span>: <span class="v">"Upgrade {<span class="k">count</span>} devices?"</span>
}</div>
  </div>

  <div class="subsection">
    <h3>溢出与对齐 · 三大常见陷阱</h3>
    <div class="i18n-overflow">
      <div class="surface" style="padding:14px">
        <h4>1. 按钮文本长度</h4>
        <div class="bad-row"><span class="lbl-tag bad">BAD</span><button class="btn btn-primary" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px">Realizar atu…</button></div>
        <div class="good-row"><span class="lbl-tag good">GOOD</span><button class="btn btn-primary" style="height:auto;white-space:normal;line-height:1.3;padding:6px 12px">Realizar<br/>atualização</button></div>
        <p style="font-size:11px;color:var(--aw-text-3);margin:6px 0 0">允许两行；最小高度 32 px → 48 px。</p>
      </div>
      <div class="surface" style="padding:14px">
        <h4>2. 表单标签宽度</h4>
        <div class="bad-row"><span class="lbl-tag bad">BAD</span><span style="font-size:12px;width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--aw-text-2)">Número de seri…</span><span style="font-size:12px;color:var(--aw-text-3)">DEV-86420</span></div>
        <div class="good-row"><span class="lbl-tag good">GOOD</span><span style="font-size:12px;color:var(--aw-text-2);max-width:180px;line-height:1.4">Número de série</span><span style="font-size:12px;color:var(--aw-text-3)">DEV-86420</span></div>
        <p style="font-size:11px;color:var(--aw-text-3);margin:6px 0 0">表单宽度 ≥ 最长译文 + 24 px。</p>
      </div>
      <div class="surface" style="padding:14px">
        <h4>3. 日期 / 数字格式</h4>
        <div style="font-family:var(--aw-font-mono);font-size:11px;display:grid;grid-template-columns:50px 1fr;gap:4px 8px;color:var(--aw-text-2)">
          <span style="color:var(--aw-text-3)">zh-CN</span><span>2026/04/12 14:30:08 · 12,486</span>
          <span style="color:var(--aw-text-3)">en-US</span><span>04/12/2026 2:30 PM · 12,486</span>
          <span style="color:var(--aw-text-3)">es-419</span><span>12/04/2026 14:30 · 12.486</span>
          <span style="color:var(--aw-text-3)">pt-BR</span><span>12/04/2026 14:30 · 12.486</span>
        </div>
        <p style="font-size:11px;color:var(--aw-text-3);margin:8px 0 0">必须用 <span class="mono">Intl.DateTimeFormat / NumberFormat</span>，禁止字符串拼接。</p>
      </div>
    </div>
  </div>
</section>
</div>
`;
