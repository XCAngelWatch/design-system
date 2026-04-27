/* AngelWatch Design System — page: table (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["table"] = `
<div class="content">
<section class="section" id="table">
  <p class="section-eyebrow">Components · 表格 / 分页</p>
  <h2>Tables</h2>
  <p class="lede">设备列表的核心组件。行高 40px（含 padding），表头浅灰背景，hover 高亮。操作列右对齐，使用文字按钮。</p>

  <div class="table-wrap">
    <table class="dt">
<thead>
  <tr>
    <th style="width:36px"><label class="check"><input type="checkbox" /><span class="box"></span></label></th>
    <th>设备名称</th>
    <th>SN</th>
    <th>状态</th>
    <th>固件版本</th>
    <th>所属机构</th>
    <th>最后心跳</th>
    <th class="colactions">操作</th>
  </tr>
</thead>
<tbody>
  <tr><td><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td><td>终端-上海-001</td><td><code>DEV-86420075</code></td><td><span class="status-dot online">在线</span></td><td>v3.4.2</td><td>上海 / 黄浦</td><td>刚刚</td><td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">推送</button></td></tr>
  <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td>终端-北京-014</td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading">升级中</span></td><td>v3.4.1 → v3.5.0</td><td>北京 / 海淀</td><td>2 分钟前</td><td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">推送</button></td></tr>
  <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td>终端-广州-007</td><td><code>DEV-86420112</code></td><td><span class="status-dot offline">离线</span></td><td>v3.3.8</td><td>广州 / 天河</td><td>12 分钟前</td><td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">推送</button></td></tr>
  <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td>终端-成都-022</td><td><code>DEV-86420144</code></td><td><span class="status-dot fault">故障</span></td><td>v3.4.0</td><td>成都 / 高新</td><td>1 小时前</td><td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">推送</button></td></tr>
  <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td>终端-深圳-031</td><td><code>DEV-86420178</code></td><td><span class="status-dot online">在线</span></td><td>v3.4.2</td><td>深圳 / 南山</td><td>刚刚</td><td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">推送</button></td></tr>
</tbody>
    </table>
  </div>

  <div class="row" style="margin-top:14px;justify-content:space-between">
    <div style="font-size:13px;color:var(--aw-text-3)">已选 1 / 共 12,486 项</div>
    <div class="pager">
<span class="total">共 12,486 项</span>
<button class="page">‹</button>
<button class="page is-active">1</button>
<button class="page">2</button>
<button class="page">3</button>
<button class="page">…</button>
<button class="page">250</button>
<button class="page">›</button>
<div class="select" style="margin-left:8px;min-width:96px"><span>20 条/页</span></div>
    </div>
  </div>

  <div class="subsection">
    <h3>表格状态 · Loading / Empty / Error</h3>
    <div class="demo-grid">
<div>
  <div style="font-size:13px;color:var(--aw-text-3);margin-bottom:8px">Loading · 骨架屏占位</div>
  <div class="table-wrap">
    <table class="dt">
      <thead><tr><th style="width:36px"></th><th>设备名称</th><th>SN</th><th>状态</th><th>版本</th><th class="colactions">操作</th></tr></thead>
      <tbody>
        <tr><td><div class="skel" style="height:14px;width:14px;border-radius:3px"></div></td><td><div class="skel mid"></div></td><td><div class="skel short"></div></td><td><div class="skel" style="width:60px"></div></td><td><div class="skel short"></div></td><td class="colactions"><div class="skel short" style="margin-left:auto"></div></td></tr>
        <tr><td><div class="skel" style="height:14px;width:14px;border-radius:3px"></div></td><td><div class="skel mid"></div></td><td><div class="skel short"></div></td><td><div class="skel" style="width:60px"></div></td><td><div class="skel short"></div></td><td class="colactions"><div class="skel short" style="margin-left:auto"></div></td></tr>
        <tr><td><div class="skel" style="height:14px;width:14px;border-radius:3px"></div></td><td><div class="skel mid"></div></td><td><div class="skel short"></div></td><td><div class="skel" style="width:60px"></div></td><td><div class="skel short"></div></td><td class="colactions"><div class="skel short" style="margin-left:auto"></div></td></tr>
        <tr><td><div class="skel" style="height:14px;width:14px;border-radius:3px"></div></td><td><div class="skel mid"></div></td><td><div class="skel short"></div></td><td><div class="skel" style="width:60px"></div></td><td><div class="skel short"></div></td><td class="colactions"><div class="skel short" style="margin-left:auto"></div></td></tr>
      </tbody>
    </table>
  </div>
</div>

<div>
  <div style="font-size:13px;color:var(--aw-text-3);margin-bottom:8px">Empty · 无数据</div>
  <div class="table-wrap">
    <table class="dt">
      <thead><tr><th style="width:36px"></th><th>设备名称</th><th>SN</th><th>状态</th><th>版本</th><th class="colactions">操作</th></tr></thead>
    </table>
    <div style="padding:48px 24px;text-align:center;background:var(--aw-bg)">
      <div style="width:56px;height:56px;margin:0 auto 14px;border-radius:50%;background:var(--aw-fill-2);display:grid;place-items:center;color:var(--aw-text-4)">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      </div>
      <div style="font-size:14px;color:var(--aw-text-2);margin-bottom:4px;font-weight:500">未找到匹配的设备</div>
      <div style="font-size:12px;color:var(--aw-text-4);margin-bottom:14px">尝试调整筛选条件，或清空所有筛选项重新查询</div>
      <div class="row" style="justify-content:center"><button class="btn btn-sm">清空筛选</button><button class="btn btn-primary btn-sm">+ 添加设备</button></div>
    </div>
  </div>
</div>

<div>
  <div style="font-size:13px;color:var(--aw-text-3);margin-bottom:8px">Error · 加载失败</div>
  <div class="table-wrap">
    <table class="dt">
      <thead><tr><th style="width:36px"></th><th>设备名称</th><th>SN</th><th>状态</th><th>版本</th><th class="colactions">操作</th></tr></thead>
    </table>
    <div style="padding:48px 24px;text-align:center;background:var(--aw-bg)">
      <div style="width:56px;height:56px;margin:0 auto 14px;border-radius:50%;background:var(--aw-danger-bg);display:grid;place-items:center;color:var(--aw-danger)">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
      </div>
      <div style="font-size:14px;color:var(--aw-text-1);margin-bottom:4px;font-weight:500">无法加载设备列表</div>
      <div style="font-size:12px;color:var(--aw-text-3);margin-bottom:14px;font-family:var(--aw-font-mono)">net::ERR_CONNECTION_TIMEOUT · 请检查网络或稍后重试</div>
      <button class="btn btn-primary btn-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" style="margin-right:4px"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>重新加载</button>
    </div>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3>密度三档 · Dense / Middle / Loose</h3>
    <p class="lede" style="margin-bottom:12px">用户根据信息密度需要切换。Dense 适合长列表 / Dashboard，Middle 是默认，Loose 适合详情 / 报告导出。当前选择持久化到 localStorage <code>aw.table.density</code>。</p>
    <div class="dens-grid">
      <div class="dens-card">
        <div class="dens-cap"><span class="tag-meta">Dense · 32px</span></div>
        <table class="dt dt-dense">
          <thead><tr><th>设备</th><th>状态</th><th>版本</th></tr></thead>
          <tbody>
            <tr><td>SH-001</td><td><span class="status-dot online">在线</span></td><td>v3.4.2</td></tr>
            <tr><td>BJ-014</td><td><span class="status-dot upgrading">升级中</span></td><td>v3.4.1</td></tr>
            <tr><td>GZ-007</td><td><span class="status-dot offline">离线</span></td><td>v3.3.8</td></tr>
            <tr><td>CD-022</td><td><span class="status-dot fault">故障</span></td><td>v3.4.0</td></tr>
          </tbody>
        </table>
      </div>
      <div class="dens-card">
        <div class="dens-cap"><span class="tag-meta">Middle · 40px (默认)</span></div>
        <table class="dt">
          <thead><tr><th>设备</th><th>状态</th><th>版本</th></tr></thead>
          <tbody>
            <tr><td>SH-001</td><td><span class="status-dot online">在线</span></td><td>v3.4.2</td></tr>
            <tr><td>BJ-014</td><td><span class="status-dot upgrading">升级中</span></td><td>v3.4.1</td></tr>
            <tr><td>GZ-007</td><td><span class="status-dot offline">离线</span></td><td>v3.3.8</td></tr>
          </tbody>
        </table>
      </div>
      <div class="dens-card">
        <div class="dens-cap"><span class="tag-meta">Loose · 48px</span></div>
        <table class="dt dt-loose">
          <thead><tr><th>设备</th><th>状态</th><th>版本</th></tr></thead>
          <tbody>
            <tr><td>SH-001</td><td><span class="status-dot online">在线</span></td><td>v3.4.2</td></tr>
            <tr><td>BJ-014</td><td><span class="status-dot upgrading">升级中</span></td><td>v3.4.1</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>列设置 · 显隐 + 拖拽排序 + 持久化</h3>
    <p class="lede" style="margin-bottom:12px">表头右上 ⚙ 触发抽屉。用户开关列、拖拽排序后写入 <code>localStorage['aw.table.&lt;tableId&gt;.cols']</code>。新部署服务时旧字段被移除则自动剔除，新字段自动追加到末尾。</p>
    <div class="surface" style="padding:0;display:grid;grid-template-columns:1fr 280px;gap:0">
      <table class="dt" style="border-radius:0;border-right:1px solid var(--aw-border-2)">
        <thead><tr>
          <th><label class="check"><input type="checkbox" /><span class="box"></span></label></th>
          <th>设备名称</th><th>SN</th><th>状态</th><th>版本</th>
          <th class="colactions">⚙ 列设置</th>
        </tr></thead>
        <tbody>
          <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td>终端-上海-001</td><td><code>DEV-86420075</code></td><td><span class="status-dot online">在线</span></td><td>v3.4.2</td><td></td></tr>
          <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td>终端-北京-014</td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading">升级中</span></td><td>v3.4.1</td><td></td></tr>
        </tbody>
      </table>
      <div class="col-cfg-panel">
        <div class="ccp-h">列设置 <span style="float:right;color:var(--aw-text-3);font-weight:400;cursor:pointer">×</span></div>
        <div class="ccp-l">已选 5 / 共 8 列 · 拖拽排序</div>
        <div class="ccp-list">
          <div class="ccp-it locked"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" checked disabled /><span class="box"></span></label><span class="nm">设备名称</span><span class="lock">锁定</span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" checked /><span class="box"></span></label><span class="nm">SN</span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" checked /><span class="box"></span></label><span class="nm">状态</span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" checked /><span class="box"></span></label><span class="nm">固件版本</span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" /><span class="box"></span></label><span class="nm">所属机构</span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" /><span class="box"></span></label><span class="nm">最后心跳</span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" /><span class="box"></span></label><span class="nm">设备型号</span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" /><span class="box"></span></label><span class="nm">入网时间</span></div>
        </div>
        <div class="ccp-foot"><button class="btn btn-sm">恢复默认</button><button class="btn btn-primary btn-sm">应用</button></div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>列冻结 · 左 / 右 / 双向</h3>
    <p class="lede" style="margin-bottom:12px">业务表格列数多时（10+），左侧冻结"设备名称 / SN"作为锚定，右侧冻结"操作"列保证可达。冻结列与正常列之间有 1px 阴影分隔，滚动时阴影加深。</p>
    <div class="surface" style="padding:0;overflow:hidden">
      <div class="frozen-table-wrap">
        <table class="dt">
          <thead><tr>
            <th class="freeze-l">设备名称</th>
            <th class="freeze-l">SN</th>
            <th>状态</th><th>固件版本</th><th>所属机构</th><th>设备型号</th><th>入网时间</th>
            <th>最后心跳</th><th>电池</th><th>信号</th><th>系统</th>
            <th class="freeze-r colactions">操作</th>
          </tr></thead>
          <tbody>
            <tr>
              <td class="freeze-l">终端-上海-001</td>
              <td class="freeze-l"><code>DEV-86420075</code></td>
              <td><span class="status-dot online">在线</span></td>
              <td>v3.4.2</td><td>上海/黄浦</td><td>AW-Pro 5</td><td>2025-08-12</td>
              <td>刚刚</td><td>92%</td><td>-67dBm</td><td>Android 13</td>
              <td class="freeze-r colactions"><button class="btn btn-link">详情</button></td>
            </tr>
            <tr>
              <td class="freeze-l">终端-北京-014</td>
              <td class="freeze-l"><code>DEV-86420089</code></td>
              <td><span class="status-dot upgrading">升级中</span></td>
              <td>v3.4.1</td><td>北京/海淀</td><td>AW-Pro 5</td><td>2025-09-04</td>
              <td>2m</td><td>78%</td><td>-72dBm</td><td>Android 13</td>
              <td class="freeze-r colactions"><button class="btn btn-link">详情</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div style="font-size:12px;color:var(--aw-text-3);margin-top:8px;font-family:var(--aw-font-mono)">↑ 拖动横向滚动条观察冻结效果。冻结列阴影：<code>0 0 4px rgba(0,0,0,0.06)</code></div>
  </div>

  <div class="subsection">
    <h3>列宽拖拽</h3>
    <p class="lede" style="margin-bottom:12px">表头分隔条 hover 出现拖拽 cursor，按住拖动调整宽度。最小 60px，最大 480px。释放后写入 localStorage。</p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="dt dt-resizable">
        <thead><tr>
          <th style="width:160px">设备名称<div class="col-resizer"></div></th>
          <th style="width:140px">SN<div class="col-resizer dragging"></div></th>
          <th style="width:90px">状态<div class="col-resizer"></div></th>
          <th>版本<div class="col-resizer"></div></th>
          <th>所属机构</th>
        </tr></thead>
        <tbody>
          <tr><td>终端-上海-001</td><td><code>DEV-86420075</code></td><td><span class="status-dot online">在线</span></td><td>v3.4.2</td><td>上海/黄浦</td></tr>
          <tr><td>终端-北京-014</td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading">升级中</span></td><td>v3.4.1</td><td>北京/海淀</td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong>双击分隔条</strong>自动 fit 到该列内容最大宽度（capped at 480px）。</div></div>
  </div>

  <div class="subsection">
    <h3>批量操作条 · sticky 进出动效</h3>
    <p class="lede" style="margin-bottom:12px">勾选 ≥ 1 行时，操作条从表格顶部 120ms 滑入；取消所有选择 / 完成操作后滑出。位置 sticky top:0，覆盖表头但保留下拉阴影。</p>
    <div class="surface" style="padding:0;overflow:hidden">
      <div class="batch-bar">
        <div class="bb-l"><b>已选 4 项</b><span class="bb-sub">/ 12,486 总计 · 跨页选中</span></div>
        <div class="bb-r">
          <button class="btn btn-sm">批量推送</button>
          <button class="btn btn-sm">批量启停</button>
          <button class="btn btn-sm">批量导出</button>
          <button class="btn btn-sm btn-ghost-danger">批量删除</button>
          <span class="bb-clear">取消选择</span>
        </div>
      </div>
      <table class="dt" style="border-radius:0">
        <thead><tr>
          <th><label class="check"><input type="checkbox" checked /><span class="box"></span></label></th>
          <th>设备名称</th><th>SN</th><th>状态</th><th>版本</th>
        </tr></thead>
        <tbody>
          <tr><td><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td><td>终端-上海-001</td><td><code>DEV-86420075</code></td><td><span class="status-dot online">在线</span></td><td>v3.4.2</td></tr>
          <tr><td><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td><td>终端-北京-014</td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading">升级中</span></td><td>v3.4.1</td></tr>
          <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td>终端-广州-007</td><td><code>DEV-86420112</code></td><td><span class="status-dot offline">离线</span></td><td>v3.3.8</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3>虚拟化降级策略</h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:160px">行数</th><th style="width:200px">渲染策略</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td>&lt; 1,000 行</td><td><span class="tag-meta">原生 DOM</span></td><td>antd Table 默认行为，性能足够。开启 <code>fixed: 'left' / 'right'</code> 即可冻结</td></tr>
          <tr><td>1,000 – 50,000 行</td><td><span class="tag-meta" style="background:#FAF4E0;color:#AD6800">虚拟列表</span></td><td>切换到 <code>@tanstack/react-virtual</code>，仅渲染可视区 + buffer。冻结列单独渲染层</td></tr>
          <tr><td>&gt; 50,000 行</td><td><span class="tag-meta" style="background:#FAE3E3;color:#A8071A">服务端分页</span></td><td>禁用全选跨页，分页大小默认 100。提示文案："数据量过大，请使用筛选缩小范围"</td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong>切换标准：</strong>由 AppTable Facade 内部决定，业务方不直接操作。当 <code>data.length</code> 跨档时整页 reload table，避免运行时切换引发的滚动跳变。</div></div>
  </div>

  <div class="subsection">
    <h3>Pagination · 三态</h3>
    <p class="lede" style="margin-bottom:16px">完整态用于桌面 ListPage，简洁态用于卡片 / Dialog 内表，移动态用于 ≤ 768px。</p>

    <div class="page-tri-card">
      <div class="ptc-cap">完整态 · 桌面默认</div>
      <div class="ptc-body">
        <div class="pager">
          <span class="total">共 12,486 条 · 第 5 / 625 页</span>
          <button class="page">‹</button>
          <button class="page">1</button>
          <button class="page">…</button>
          <button class="page">3</button>
          <button class="page">4</button>
          <button class="page is-active">5</button>
          <button class="page">6</button>
          <button class="page">7</button>
          <button class="page">…</button>
          <button class="page">625</button>
          <button class="page">›</button>
          <div class="select" style="margin-left:8px;min-width:96px"><span>20 条/页 ▾</span></div>
          <span class="goto">跳至 <input class="input" style="width:48px;height:28px;padding:0 8px;font-size:12px" value="5" /> 页</span>
        </div>
      </div>
    </div>

    <div class="page-tri-card" style="margin-top:14px">
      <div class="ptc-cap">简洁态 · 卡片 / Dialog 内表</div>
      <div class="ptc-body">
        <div class="pager pager-simple">
          <button class="page">‹</button>
          <span class="cur">5 / 625</span>
          <button class="page">›</button>
        </div>
      </div>
    </div>

    <div class="page-tri-card" style="margin-top:14px">
      <div class="ptc-cap">移动态 · ≤ 768px</div>
      <div class="ptc-body" style="background:#F0F2F5">
        <div class="pager-mobile">
          <div class="pm-prev">‹ 上一页</div>
          <div class="pm-dots"><span class="d"></span><span class="d"></span><span class="d"></span><span class="d cur"></span><span class="d"></span><span class="d"></span><span class="d"></span></div>
          <div class="pm-next">下一页 ›</div>
        </div>
      </div>
    </div>

    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong>中文化文案：</strong>"共 12,486 条 · 第 5 / 625 页"。数字必须千分位（用 <code>Intl.NumberFormat(locale)</code>），不要硬编码逗号。</div></div>
    <div class="alert warning" style="margin-top:8px"><div class="ico">!</div><div class="content">移动态左右滑动手势 ↔ 切页；不显示具体页码，用圆点指示当前位置。跨度 &gt; 7 时只显示 7 个圆点（首末固定 + 当前居中）。</div></div>
  </div>

  <div class="subsection">
    <h3>反例</h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong>不要在虚拟列表中使用 colspan 跨行：</strong>虚拟化只渲染可视区，跨行单元格在滚动时会撕裂。改用普通行 + 视觉分组（hr 分隔）。</div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>不要把"操作"列设宽超过 240px：</strong>会让横滚出现且与冻结右列冲突。&gt; 4 个动作走 <a href="#/row-actions" style="color:var(--aw-primary)">RowActions 折叠态</a>。</div></div>
  </div>

  <div class="subsection">
    <h3>涉及变量</h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div>--aw-fill-1 (表头底)、--aw-border-2 (列边)、--aw-border-3 (行间)、--aw-primary (active page)</div>
      <div style="margin-top:4px">三档密度：32 (dense) / 40 (middle) / 48 (loose) — 单元格 line-height = 高度 - 2 × padding</div>
      <div style="margin-top:4px">列冻结阴影：0 0 4px rgba(0,0,0,0.06) light · 0 0 4px rgba(0,0,0,0.32) dark</div>
    </div>
  </div>
</section>
</div>
`;
