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

  <div class="subsection">
    <h3>长文本溢出 · 三处常见兜底</h3>
    <p class="lede" style="margin-bottom:12px">侧栏菜单、按钮、表头是 i18n 长文本灾区。每处的兜底策略不同。</p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:140px">位置</th><th style="width:200px">兜底策略</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td>侧栏菜单</td><td>截断 + tooltip</td><td>菜单项最大宽度 200px (展开态)；超出 ellipsis；hover 200ms 后浮出 tooltip 显示完整文案</td></tr>
          <tr><td>按钮</td><td>自适应宽度，最长 12 字符后换行降级</td><td>≤ 12 char 单行；&gt; 12 char 允许两行（line-height 1.3，按钮高度由 32 → 48 自动撑开）；&gt; 24 char 必须改 i18n key（行话）</td></tr>
          <tr><td>表头</td><td>截断 + tooltip</td><td>列宽固定时表头超出 ellipsis；hover 浮 tooltip。表头用最短描述（如 "时间" 而非 "最后心跳时间"），完整描述放 tooltip</td></tr>
          <tr><td>表单 label</td><td>固定宽度，自动右对齐</td><td>label 区域宽度按最长译文设定（lint 阶段计算）；过长时改两行</td></tr>
          <tr><td>Tag / Status</td><td>不允许换行</td><td>状态标签必须保持一行。如 pt 翻译过长需要重新选词或缩写（与本地化团队协商）</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3>ICU MessageFormat · 复数与变量</h3>
    <p class="lede" style="margin-bottom:12px">英文复数仅 one/other 两态；es / pt 也是 one/other（不同于俄文 one/few/many/other）；中文无复数变化。i18next 默认支持 ICU，全部复数 key 用 <code>_one</code> / <code>_other</code> 后缀。</p>
    <div class="surface" style="padding:14px">
      <div style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
        <div style="color:var(--aw-text-3)">// locales/<lang>/device.json</div>
        <div><b style="color:var(--aw-primary)">zh-CN</b>:  <span style="color:var(--aw-success)">"upgrade.confirm"</span>: <span style="color:#A8071A">"升级 {{count}} 台设备？"</span>  <span style="color:var(--aw-text-4)">// 中文不区分单复数</span></div>
        <div style="margin-top:6px"><b style="color:var(--aw-primary)">en-US</b>:</div>
        <div style="padding-left:16px"><span style="color:var(--aw-success)">"upgrade.confirm_one"</span>: <span style="color:#A8071A">"Upgrade 1 device?"</span></div>
        <div style="padding-left:16px"><span style="color:var(--aw-success)">"upgrade.confirm_other"</span>: <span style="color:#A8071A">"Upgrade {{count}} devices?"</span></div>
        <div style="margin-top:6px"><b style="color:var(--aw-primary)">es-419</b>:</div>
        <div style="padding-left:16px"><span style="color:var(--aw-success)">"upgrade.confirm_one"</span>: <span style="color:#A8071A">"¿Actualizar 1 dispositivo?"</span></div>
        <div style="padding-left:16px"><span style="color:var(--aw-success)">"upgrade.confirm_other"</span>: <span style="color:#A8071A">"¿Actualizar {{count}} dispositivos?"</span></div>
        <div style="margin-top:6px"><b style="color:var(--aw-primary)">pt-BR</b>:</div>
        <div style="padding-left:16px"><span style="color:var(--aw-success)">"upgrade.confirm_one"</span>: <span style="color:#A8071A">"Atualizar 1 dispositivo?"</span></div>
        <div style="padding-left:16px"><span style="color:var(--aw-success)">"upgrade.confirm_other"</span>: <span style="color:#A8071A">"Atualizar {{count}} dispositivos?"</span></div>
        <div style="margin-top:8px;color:var(--aw-text-3)">// 调用</div>
        <div>t(<span style="color:var(--aw-success)">'upgrade.confirm'</span>, { count })  <span style="color:var(--aw-text-4)">// i18next 自动取 _one / _other</span></div>
      </div>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong>变量插值用 {{var}}</strong>（i18next 风格），不要用 ES template literal。变量值不允许 HTML，需要富文本走 Trans 组件。</div></div>
  </div>

  <div class="subsection">
    <h3>Intl 完整样例 · 日期 / 数字 / 货币</h3>
    <div class="surface" style="padding:14px">
      <div style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.85;color:var(--aw-text-2)">
        <div style="color:var(--aw-text-3)">// 日期</div>
        <div>new <b>Intl.DateTimeFormat</b>(locale, { dateStyle: <span style="color:#A8071A">'medium'</span>, timeStyle: <span style="color:#A8071A">'short'</span> }).format(d)</div>
        <div style="padding-left:16px;color:var(--aw-text-4)">→ zh-CN: 2026年4月12日 14:30 · en-US: Apr 12, 2026, 2:30 PM</div>
        <div style="margin-top:8px;color:var(--aw-text-3)">// 数字 (千分位)</div>
        <div>new <b>Intl.NumberFormat</b>(locale).format(12486)</div>
        <div style="padding-left:16px;color:var(--aw-text-4)">→ zh-CN/en-US: 12,486 · es-419/pt-BR: 12.486</div>
        <div style="margin-top:8px;color:var(--aw-text-3)">// 货币</div>
        <div>new <b>Intl.NumberFormat</b>(locale, { style: <span style="color:#A8071A">'currency'</span>, currency: <span style="color:#A8071A">'USD'</span> }).format(1234.5)</div>
        <div style="padding-left:16px;color:var(--aw-text-4)">→ en-US: $1,234.50 · es-419: US$ 1.234,50 · pt-BR: US$ 1.234,50</div>
        <div style="margin-top:8px;color:var(--aw-text-3)">// 相对时间</div>
        <div>new <b>Intl.RelativeTimeFormat</b>(locale, { numeric: <span style="color:#A8071A">'auto'</span> }).format(-2, <span style="color:#A8071A">'minute'</span>)</div>
        <div style="padding-left:16px;color:var(--aw-text-4)">→ zh-CN: 2 分钟前 · en-US: 2 minutes ago · pt-BR: há 2 minutos</div>
      </div>
    </div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong>禁止字符串拼接：</strong><code>${'`${y}-${m}-${d}`'}</code> 在不同 locale 下顺序错乱。所有日期 / 数字必须经 Intl 输出。</div></div>
  </div>

  <div class="subsection">
    <h3>多语种回归对照 · 同一界面 4 列</h3>
    <p class="lede" style="margin-bottom:12px">每次新增 / 修改 i18n key 后，对照 4 语种长度差异。en 与 zh 较短，es / pt 长 20-40%，是溢出风险来源。</p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:120px">位置 / Key</th><th>zh-CN</th><th>en-US</th><th>es-419</th><th>pt-BR</th></tr></thead>
        <tbody>
          <tr><td>nav.devices</td><td>设备管理</td><td>Devices</td><td>Dispositivos</td><td>Dispositivos</td></tr>
          <tr><td>nav.ota</td><td>OTA 升级</td><td>OTA Upgrade</td><td>Actualización OTA</td><td>Atualização OTA</td></tr>
          <tr><td>action.batchUpgrade</td><td>批量升级</td><td>Batch Upgrade</td><td>Actualización masiva</td><td>Atualização em lote</td></tr>
          <tr><td>btn.confirm</td><td>确定</td><td>Confirm</td><td>Confirmar</td><td>Confirmar</td></tr>
          <tr><td>col.lastOnline</td><td>最后心跳</td><td>Last Online</td><td>Última conexión</td><td>Última conexão</td></tr>
          <tr><td>status.upgrading</td><td>升级中</td><td>Upgrading</td><td>Actualizando</td><td>Atualizando</td></tr>
          <tr><td>placeholder.search</td><td>搜索 SN / 名称 / 负责人</td><td>Search by SN, name, owner</td><td>Buscar por SN, nombre o responsable</td><td>Pesquisar por SN, nome ou responsável</td></tr>
          <tr><td>tooltip.battery</td><td>电池电量低于 20%</td><td>Battery below 20%</td><td>Batería por debajo del 20%</td><td>Bateria abaixo de 20%</td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong>提交 PR 时附 4 列截图</strong>（自动化在 Storybook 中生成 4 个 locale 的同一组件截图，CI 上传到 PR 评论）。设计 + 本地化双方 review。</div></div>
  </div>

  <div class="subsection">
    <h3>反例</h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong>禁止 <code>'已删除 ' + n + ' 台设备'</code> 这样的字符串拼接：</strong>无法翻译为复数语言；改用 ICU 的 <code>{{count}}</code> 占位符。</div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>禁止把字段名写死成英文：</strong>如 <code>label: "Battery"</code>。所有用户可见文本必须 <code>t('field.battery')</code>，包括 placeholder、tooltip、错误信息。</div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>禁止从浏览器 Date 拼日期：</strong><code>d.toLocaleDateString()</code> 看似支持 i18n 但格式不可控（不同浏览器输出不同）。一律 Intl。</div></div>
  </div>

  <div class="subsection">
    <h3>涉及变量 / 工具</h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div>react-i18next · ICU MessageFormat · Intl.DateTimeFormat / NumberFormat / RelativeTimeFormat</div>
      <div style="margin-top:4px">CI 检查：未包裹的中文字面量扫描 · key 缺失检测 · 4 语种长度差异告警</div>
      <div style="margin-top:4px">UI 兜底：max-width + ellipsis + tooltip · button 自适应高度 · table column min-width</div>
    </div>
  </div>
</section>
</div>
`;
