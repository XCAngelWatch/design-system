/* AngelWatch Design System — page: table (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["table"] = `
<div class="content">
<section class="section" id="table">
  <p class="section-eyebrow"><span data-i18n="table:text.001">通用组件 · 表格 / 分页</span></p>
  <h2><span data-i18n="table:text.002">表格 Table</span></h2>
  <p class="lede"><span data-i18n="table:text.003">设备列表的核心组件。行高 40px（含 padding），表头浅灰背景，hover 高亮。操作列右对齐，使用文字按钮。</span></p>

  <div class="table-wrap">
    <table class="dt">
<thead>
  <tr>
    <th style="width:36px"><label class="check"><input type="checkbox" /><span class="box"></span></label></th>
    <th><span data-i18n="table:text.004">设备名称</span></th>
    <th>SN</th>
    <th><span data-i18n="table:text.005">状态</span></th>
    <th><span data-i18n="table:text.006">OTA 版本</span></th>
    <th><span data-i18n="table:text.007">所属机构</span></th>
    <th><span data-i18n="table:text.008">最后心跳</span></th>
    <th class="colactions"><span data-i18n="table:text.009">操作</span></th>
  </tr>
</thead>
<tbody>
  <tr><td><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td><td><span data-i18n="table:text.010">终端-上海-001</span></td><td><code>DEV-86420075</code></td><td><span class="status-dot online"><span data-i18n="table:text.011">在线</span></span></td><td>v3.4.2</td><td><span data-i18n="table:text.012">上海 / 黄浦</span></td><td><span data-i18n="table:text.013">刚刚</span></td><td class="colactions"><button class="btn btn-link"><span data-i18n="table:text.014">详情</span></button><button class="btn btn-link"><span data-i18n="table:text.015">推送</span></button></td></tr>
  <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="table:text.016">终端-北京-014</span></td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading"><span data-i18n="table:text.017">升级中</span></span></td><td>v3.4.1 → v3.5.0</td><td><span data-i18n="table:text.018">北京 / 海淀</span></td><td><span data-i18n="table:text.019">2 分钟前</span></td><td class="colactions"><button class="btn btn-link"><span data-i18n="table:text.020">详情</span></button><button class="btn btn-link"><span data-i18n="table:text.021">推送</span></button></td></tr>
  <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="table:text.022">终端-广州-007</span></td><td><code>DEV-86420112</code></td><td><span class="status-dot offline"><span data-i18n="table:text.023">离线</span></span></td><td>v3.3.8</td><td><span data-i18n="table:text.024">广州 / 天河</span></td><td><span data-i18n="table:text.025">12 分钟前</span></td><td class="colactions"><button class="btn btn-link"><span data-i18n="table:text.026">详情</span></button><button class="btn btn-link"><span data-i18n="table:text.027">推送</span></button></td></tr>
  <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="table:text.028">终端-成都-022</span></td><td><code>DEV-86420144</code></td><td><span class="status-dot fault"><span data-i18n="table:text.029">故障</span></span></td><td>v3.4.0</td><td><span data-i18n="table:text.030">成都 / 高新</span></td><td><span data-i18n="table:text.031">1 小时前</span></td><td class="colactions"><button class="btn btn-link"><span data-i18n="table:text.032">详情</span></button><button class="btn btn-link"><span data-i18n="table:text.033">推送</span></button></td></tr>
  <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="table:text.034">终端-深圳-031</span></td><td><code>DEV-86420178</code></td><td><span class="status-dot online"><span data-i18n="table:text.035">在线</span></span></td><td>v3.4.2</td><td><span data-i18n="table:text.036">深圳 / 南山</span></td><td><span data-i18n="table:text.037">刚刚</span></td><td class="colactions"><button class="btn btn-link"><span data-i18n="table:text.038">详情</span></button><button class="btn btn-link"><span data-i18n="table:text.039">推送</span></button></td></tr>
</tbody>
    </table>
  </div>

  <div class="row" style="margin-top:14px;justify-content:space-between">
    <div style="font-size:13px;color:var(--aw-text-3)"><span data-i18n="table:text.040">已选 1 / 共 12,486 项</span></div>
    <div class="pager">
<span class="total"><span data-i18n="table:text.041">共 12,486 项</span></span>
<button class="page">‹</button>
<button class="page is-active">1</button>
<button class="page">2</button>
<button class="page">3</button>
<button class="page">…</button>
<button class="page">250</button>
<button class="page">›</button>
<div class="select" style="margin-left:8px;min-width:96px"><span><span data-i18n="table:text.042">20 条/页</span></span></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.043">表格状态 · Loading / Empty / Error</span></h3>
    <div class="demo-grid">
<div>
  <div style="font-size:13px;color:var(--aw-text-3);margin-bottom:8px"><span data-i18n="table:text.044">Loading · 骨架屏占位</span></div>
  <div class="table-wrap">
    <table class="dt">
      <thead><tr><th style="width:36px"></th><th><span data-i18n="table:text.045">设备名称</span></th><th>SN</th><th><span data-i18n="table:text.046">状态</span></th><th><span data-i18n="table:text.047">OTA 版本</span></th><th class="colactions"><span data-i18n="table:text.048">操作</span></th></tr></thead>
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
  <div style="font-size:13px;color:var(--aw-text-3);margin-bottom:8px"><span data-i18n="table:text.049">Empty · 无数据</span></div>
  <div class="table-wrap">
    <table class="dt">
      <thead><tr><th style="width:36px"></th><th><span data-i18n="table:text.050">设备名称</span></th><th>SN</th><th><span data-i18n="table:text.051">状态</span></th><th><span data-i18n="table:text.052">OTA 版本</span></th><th class="colactions"><span data-i18n="table:text.053">操作</span></th></tr></thead>
    </table>
    <div style="padding:48px 24px;text-align:center;background:var(--aw-bg)">
      <div style="width:56px;height:56px;margin:0 auto 14px;border-radius:50%;background:var(--aw-fill-2);display:grid;place-items:center;color:var(--aw-text-4)">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      </div>
      <div style="font-size:14px;color:var(--aw-text-2);margin-bottom:4px;font-weight:500"><span data-i18n="table:text.054">未找到匹配的设备</span></div>
      <div style="font-size:12px;color:var(--aw-text-4);margin-bottom:14px"><span data-i18n="table:text.055">尝试调整筛选条件，或清空所有筛选项重新查询</span></div>
      <div class="row" style="justify-content:center"><button class="btn btn-sm"><span data-i18n="table:text.056">清空筛选</span></button><button class="btn btn-primary btn-sm"><span data-i18n="table:text.057">+ 添加设备</span></button></div>
    </div>
  </div>
</div>

<div>
  <div style="font-size:13px;color:var(--aw-text-3);margin-bottom:8px"><span data-i18n="table:text.058">Error · 加载失败</span></div>
  <div class="table-wrap">
    <table class="dt">
      <thead><tr><th style="width:36px"></th><th><span data-i18n="table:text.059">设备名称</span></th><th>SN</th><th><span data-i18n="table:text.060">状态</span></th><th><span data-i18n="table:text.061">OTA 版本</span></th><th class="colactions"><span data-i18n="table:text.062">操作</span></th></tr></thead>
    </table>
    <div style="padding:48px 24px;text-align:center;background:var(--aw-bg)">
      <div style="width:56px;height:56px;margin:0 auto 14px;border-radius:50%;background:var(--aw-danger-bg);display:grid;place-items:center;color:var(--aw-danger)">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
      </div>
      <div style="font-size:14px;color:var(--aw-text-1);margin-bottom:4px;font-weight:500"><span data-i18n="table:text.063">无法加载设备列表</span></div>
      <div style="font-size:12px;color:var(--aw-text-3);margin-bottom:14px;font-family:var(--aw-font-mono)"><span data-i18n="table:text.064">net::ERR_CONNECTION_TIMEOUT · 请检查网络或稍后重试</span></div>
      <button class="btn btn-primary btn-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" style="margin-right:4px"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg><span data-i18n="table:text.065">重新加载</span></button>
    </div>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.066">密度三档 · Dense / Middle / Loose</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="table:text.067">用户根据信息密度需要切换。Dense 适合长列表 / Dashboard，Middle 是默认，Loose 适合详情 / 报告导出。当前选择持久化到 localStorage </span><code>aw.table.density</code><span data-i18n="table:text.326">。</span></p>
    <div class="dens-grid">
      <div class="dens-card">
        <div class="dens-cap"><span class="tag-meta">Dense · 32px</span></div>
        <table class="dt dt-dense">
          <thead><tr><th><span data-i18n="table:text.068">设备</span></th><th><span data-i18n="table:text.069">状态</span></th><th><span data-i18n="table:text.070">OTA 版本</span></th></tr></thead>
          <tbody>
            <tr><td>SH-001</td><td><span class="status-dot online"><span data-i18n="table:text.071">在线</span></span></td><td>v3.4.2</td></tr>
            <tr><td>BJ-014</td><td><span class="status-dot upgrading"><span data-i18n="table:text.072">升级中</span></span></td><td>v3.4.1</td></tr>
            <tr><td>GZ-007</td><td><span class="status-dot offline"><span data-i18n="table:text.073">离线</span></span></td><td>v3.3.8</td></tr>
            <tr><td>CD-022</td><td><span class="status-dot fault"><span data-i18n="table:text.074">故障</span></span></td><td>v3.4.0</td></tr>
          </tbody>
        </table>
      </div>
      <div class="dens-card">
        <div class="dens-cap"><span class="tag-meta"><span data-i18n="table:text.075">Middle · 40px (默认)</span></span></div>
        <table class="dt">
          <thead><tr><th><span data-i18n="table:text.076">设备</span></th><th><span data-i18n="table:text.077">状态</span></th><th><span data-i18n="table:text.078">OTA 版本</span></th></tr></thead>
          <tbody>
            <tr><td>SH-001</td><td><span class="status-dot online"><span data-i18n="table:text.079">在线</span></span></td><td>v3.4.2</td></tr>
            <tr><td>BJ-014</td><td><span class="status-dot upgrading"><span data-i18n="table:text.080">升级中</span></span></td><td>v3.4.1</td></tr>
            <tr><td>GZ-007</td><td><span class="status-dot offline"><span data-i18n="table:text.081">离线</span></span></td><td>v3.3.8</td></tr>
          </tbody>
        </table>
      </div>
      <div class="dens-card">
        <div class="dens-cap"><span class="tag-meta">Loose · 48px</span></div>
        <table class="dt dt-loose">
          <thead><tr><th><span data-i18n="table:text.082">设备</span></th><th><span data-i18n="table:text.083">状态</span></th><th><span data-i18n="table:text.084">OTA 版本</span></th></tr></thead>
          <tbody>
            <tr><td>SH-001</td><td><span class="status-dot online"><span data-i18n="table:text.085">在线</span></span></td><td>v3.4.2</td></tr>
            <tr><td>BJ-014</td><td><span class="status-dot upgrading"><span data-i18n="table:text.086">升级中</span></span></td><td>v3.4.1</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.087">列设置 · 显隐 + 拖拽排序 + 持久化</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="table:text.088">表头右上 ⚙ 触发抽屉。用户开关列、拖拽排序后写入 </span><code>localStorage['aw.table.&lt;tableId&gt;.cols']</code><span data-i18n="table:text.089">。新部署服务时旧字段被移除则自动剔除，新字段自动追加到末尾。</span></p>
    <div class="surface" style="padding:0;display:grid;grid-template-columns:1fr 280px;gap:0">
      <table class="dt" style="border-radius:0;border-right:1px solid var(--aw-border-2)">
        <thead><tr>
          <th><label class="check"><input type="checkbox" /><span class="box"></span></label></th>
          <th><span data-i18n="table:text.090">设备名称</span></th><th>SN</th><th><span data-i18n="table:text.091">状态</span></th><th><span data-i18n="table:text.092">OTA 版本</span></th>
          <th class="colactions"><span data-i18n="table:text.093">⚙ 列设置</span></th>
        </tr></thead>
        <tbody>
          <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="table:text.094">终端-上海-001</span></td><td><code>DEV-86420075</code></td><td><span class="status-dot online"><span data-i18n="table:text.095">在线</span></span></td><td>v3.4.2</td><td></td></tr>
          <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="table:text.096">终端-北京-014</span></td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading"><span data-i18n="table:text.097">升级中</span></span></td><td>v3.4.1</td><td></td></tr>
        </tbody>
      </table>
      <div class="col-cfg-panel">
        <div class="ccp-h"><span data-i18n="table:text.098">列设置 </span><span style="float:right;color:var(--aw-text-3);font-weight:400;cursor:pointer">×</span></div>
        <div class="ccp-l"><span data-i18n="table:text.099">已选 5 / 共 8 列 · 拖拽排序</span></div>
        <div class="ccp-list">
          <div class="ccp-it locked"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" checked disabled /><span class="box"></span></label><span class="nm"><span data-i18n="table:text.100">设备名称</span></span><span class="lock"><span data-i18n="table:text.101">锁定</span></span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" checked /><span class="box"></span></label><span class="nm">SN</span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" checked /><span class="box"></span></label><span class="nm"><span data-i18n="table:text.102">状态</span></span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" checked /><span class="box"></span></label><span class="nm"><span data-i18n="table:text.103">OTA 版本</span></span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" /><span class="box"></span></label><span class="nm"><span data-i18n="table:text.104">所属机构</span></span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" /><span class="box"></span></label><span class="nm"><span data-i18n="table:text.105">最后心跳</span></span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" /><span class="box"></span></label><span class="nm"><span data-i18n="table:text.106">设备型号</span></span></div>
          <div class="ccp-it"><span class="grip">⋮⋮</span><label class="check"><input type="checkbox" /><span class="box"></span></label><span class="nm"><span data-i18n="table:text.107">入网时间</span></span></div>
        </div>
        <div class="ccp-foot"><button class="btn btn-sm"><span data-i18n="table:text.108">恢复默认</span></button><button class="btn btn-primary btn-sm"><span data-i18n="table:text.109">应用</span></button></div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.110">列冻结 · 左 / 右 / 双向</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="table:text.111">业务表格列数多时（10+），左侧冻结"设备名称 / SN"作为锚定，右侧冻结"操作"列保证可达。冻结列与正常列之间有 1px 阴影分隔，滚动时阴影加深。</span></p>
    <div class="surface" style="padding:0;overflow:hidden">
      <div class="frozen-table-wrap">
        <table class="dt">
          <thead><tr>
            <th class="freeze-l"><span data-i18n="table:text.112">设备名称</span></th>
            <th class="freeze-l">SN</th>
            <th><span data-i18n="table:text.113">状态</span></th><th><span data-i18n="table:text.114">OTA 版本</span></th><th><span data-i18n="table:text.115">所属机构</span></th><th><span data-i18n="table:text.116">设备型号</span></th><th><span data-i18n="table:text.117">入网时间</span></th>
            <th><span data-i18n="table:text.118">最后心跳</span></th><th><span data-i18n="table:text.119">电池</span></th><th><span data-i18n="table:text.120">信号</span></th><th><span data-i18n="table:text.121">系统</span></th>
            <th class="freeze-r colactions"><span data-i18n="table:text.122">操作</span></th>
          </tr></thead>
          <tbody>
            <tr>
              <td class="freeze-l"><span data-i18n="table:text.123">终端-上海-001</span></td>
              <td class="freeze-l"><code>DEV-86420075</code></td>
              <td><span class="status-dot online"><span data-i18n="table:text.124">在线</span></span></td>
              <td>v3.4.2</td><td><span data-i18n="table:text.125">上海/黄浦</span></td><td>AW-Pro 5</td><td>2025-08-12</td>
              <td><span data-i18n="table:text.126">刚刚</span></td><td>92%</td><td>-67dBm</td><td>Android 13</td>
              <td class="freeze-r colactions"><button class="btn btn-link"><span data-i18n="table:text.127">详情</span></button></td>
            </tr>
            <tr>
              <td class="freeze-l"><span data-i18n="table:text.128">终端-北京-014</span></td>
              <td class="freeze-l"><code>DEV-86420089</code></td>
              <td><span class="status-dot upgrading"><span data-i18n="table:text.129">升级中</span></span></td>
              <td>v3.4.1</td><td><span data-i18n="table:text.130">北京/海淀</span></td><td>AW-Pro 5</td><td>2025-09-04</td>
              <td>2m</td><td>78%</td><td>-72dBm</td><td>Android 13</td>
              <td class="freeze-r colactions"><button class="btn btn-link"><span data-i18n="table:text.131">详情</span></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div style="font-size:12px;color:var(--aw-text-3);margin-top:8px;font-family:var(--aw-font-mono)"><span data-i18n="table:text.132">↑ 拖动横向滚动条观察冻结效果。冻结列阴影：</span><code>0 0 4px rgba(0,0,0,0.06)</code></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.133">列宽拖拽</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="table:text.134">表头分隔条 hover 出现拖拽 cursor，按住拖动调整宽度。最小 60px，最大 480px。释放后写入 localStorage。</span></p>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="dt dt-resizable">
        <thead><tr>
          <th style="width:160px"><span data-i18n="table:text.135">设备名称</span><div class="col-resizer"></div></th>
          <th style="width:140px">SN<div class="col-resizer dragging"></div></th>
          <th style="width:90px"><span data-i18n="table:text.136">状态</span><div class="col-resizer"></div></th>
          <th><span data-i18n="table:text.137">OTA 版本</span><div class="col-resizer"></div></th>
          <th><span data-i18n="table:text.138">所属机构</span></th>
        </tr></thead>
        <tbody>
          <tr><td><span data-i18n="table:text.139">终端-上海-001</span></td><td><code>DEV-86420075</code></td><td><span class="status-dot online"><span data-i18n="table:text.140">在线</span></span></td><td>v3.4.2</td><td><span data-i18n="table:text.141">上海/黄浦</span></td></tr>
          <tr><td><span data-i18n="table:text.142">终端-北京-014</span></td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading"><span data-i18n="table:text.143">升级中</span></span></td><td>v3.4.1</td><td><span data-i18n="table:text.144">北京/海淀</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="table:text.145">双击分隔条</span></strong><span data-i18n="table:text.146">自动 fit 到该列内容最大宽度（capped at 480px）。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.147">批量操作条 · sticky 进出动效</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="table:text.148">勾选 ≥ 1 行时，操作条从表格顶部 120ms 滑入；取消所有选择 / 完成操作后滑出。位置 sticky top:0，覆盖表头但保留下拉阴影。</span></p>
    <div class="surface" style="padding:0;overflow:hidden">
      <div class="batch-bar">
        <div class="bb-l"><b><span data-i18n="table:text.149">已选 4 项</span></b><span class="bb-sub"><span data-i18n="table:text.150">/ 12,486 总计 · 跨页选中</span></span></div>
        <div class="bb-r">
          <button class="btn btn-sm"><span data-i18n="table:text.151">批量推送</span></button>
          <button class="btn btn-sm"><span data-i18n="table:text.152">批量启停</span></button>
          <button class="btn btn-sm"><span data-i18n="table:text.153">批量导出</span></button>
          <button class="btn btn-sm btn-ghost-danger"><span data-i18n="table:text.154">批量删除</span></button>
          <span class="bb-clear"><span data-i18n="table:text.155">取消选择</span></span>
        </div>
      </div>
      <table class="dt" style="border-radius:0">
        <thead><tr>
          <th><label class="check"><input type="checkbox" checked /><span class="box"></span></label></th>
          <th><span data-i18n="table:text.156">设备名称</span></th><th>SN</th><th><span data-i18n="table:text.157">状态</span></th><th><span data-i18n="table:text.158">OTA 版本</span></th>
        </tr></thead>
        <tbody>
          <tr><td><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td><td><span data-i18n="table:text.159">终端-上海-001</span></td><td><code>DEV-86420075</code></td><td><span class="status-dot online"><span data-i18n="table:text.160">在线</span></span></td><td>v3.4.2</td></tr>
          <tr><td><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td><td><span data-i18n="table:text.161">终端-北京-014</span></td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading"><span data-i18n="table:text.162">升级中</span></span></td><td>v3.4.1</td></tr>
          <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="table:text.163">终端-广州-007</span></td><td><code>DEV-86420112</code></td><td><span class="status-dot offline"><span data-i18n="table:text.164">离线</span></span></td><td>v3.3.8</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.165">虚拟化降级策略</span></h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:160px"><span data-i18n="table:text.166">行数</span></th><th style="width:200px"><span data-i18n="table:text.167">渲染策略</span></th><th><span data-i18n="table:text.168">说明</span></th></tr></thead>
        <tbody>
          <tr><td><span data-i18n="table:text.169">&lt; 1,000 行</span></td><td><span class="tag-meta"><span data-i18n="table:text.170">原生 DOM</span></span></td><td><span data-i18n="table:text.171">antd Table 默认行为，性能足够。开启 </span><code>fixed: 'left' / 'right'</code><span data-i18n="table:text.172"> 即可冻结</span></td></tr>
          <tr><td><span data-i18n="table:text.173">1,000 – 50,000 行</span></td><td><span class="tag-meta" style="background:#FFFBE6;color:#D48806"><span data-i18n="table:text.174">虚拟列表</span></span></td><td><span data-i18n="table:text.175">切换到 </span><code>@tanstack/react-virtual</code><span data-i18n="table:text.176">，仅渲染可视区 + buffer。冻结列单独渲染层</span></td></tr>
          <tr><td><span data-i18n="table:text.177">&gt; 50,000 行</span></td><td><span class="tag-meta" style="background:#FFF1F0;color:#CF1322"><span data-i18n="table:text.178">服务端分页</span></span></td><td><span data-i18n="table:text.179">禁用全选跨页，分页大小默认 100。提示文案："数据量过大，请使用筛选缩小范围"</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong><span data-i18n="table:text.180">切换标准：</span></strong><span data-i18n="table:text.181">由 AppTable Facade 内部决定，业务方不直接操作。当 </span><code>data.length</code><span data-i18n="table:text.182"> 跨档时整页 reload table，避免运行时切换引发的滚动跳变。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.183">Pagination · 三态</span></h3>
    <p class="lede" style="margin-bottom:16px"><span data-i18n="table:text.184">完整态用于桌面 ListPage，简洁态用于卡片 / Dialog 内表，窄容器态用于横向空间受限的容器。</span></p>

    <div class="page-tri-card">
      <div class="ptc-cap"><span data-i18n="table:text.185">完整态 · 桌面默认</span></div>
      <div class="ptc-body">
        <div class="pager">
          <span class="total"><span data-i18n="table:text.186">共 12,486 条 · 第 5 / 625 页</span></span>
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
          <div class="select" style="margin-left:8px;min-width:96px"><span><span data-i18n="table:text.187">20 条/页 ▾</span></span></div>
          <span class="goto"><span data-i18n="table:text.188">跳至 </span><input class="input" style="width:48px;height:28px;padding:0 8px;font-size:12px" value="5" /><span data-i18n="table:text.189"> 页</span></span>
        </div>
      </div>
    </div>

    <div class="page-tri-card" style="margin-top:14px">
      <div class="ptc-cap"><span data-i18n="table:text.190">简洁态 · 卡片 / Dialog 内表</span></div>
      <div class="ptc-body">
        <div class="pager pager-simple">
          <button class="page">‹</button>
          <span class="cur">5 / 625</span>
          <button class="page">›</button>
        </div>
      </div>
    </div>

    <div class="page-tri-card" style="margin-top:14px">
      <div class="ptc-cap"><span data-i18n="table:text.191">窄容器态</span></div>
      <div class="ptc-body" style="background:#F0F2F5">
        <div class="pager-mobile">
          <div class="pm-prev"><span data-i18n="table:text.192">‹ 上一页</span></div>
          <div class="pm-dots"><span class="d"></span><span class="d"></span><span class="d"></span><span class="d cur"></span><span class="d"></span><span class="d"></span><span class="d"></span></div>
          <div class="pm-next"><span data-i18n="table:text.193">下一页 ›</span></div>
        </div>
      </div>
    </div>

    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="table:text.194">中文化文案：</span></strong><span data-i18n="table:text.195">"共 12,486 条 · 第 5 / 625 页"。数字必须千分位（用 </span><code>Intl.NumberFormat(locale)</code><span data-i18n="table:text.196">），不要硬编码逗号。</span></div></div>
    <div class="alert warning" style="margin-top:8px"><div class="ico">!</div><div class="content"><span data-i18n="table:text.197">窄容器态使用上一页 / 下一页和圆点替代完整页码。跨度 &gt; 7 时只显示 7 个圆点（首末固定 + 当前居中）。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.198">反例</span></h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong><span data-i18n="table:text.199">不要在虚拟列表中使用 colspan 跨行：</span></strong><span data-i18n="table:text.200">虚拟化只渲染可视区，跨行单元格在滚动时会撕裂。改用普通行 + 视觉分组（hr 分隔）。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="table:text.201">不要把"操作"列设宽超过 240px：</span></strong><span data-i18n="table:text.202">会让横滚出现且与冻结右列冲突。&gt; 4 个动作走 </span><a href="#/row-actions" style="color:var(--aw-primary)"><span data-i18n="table:text.203">RowActions 折叠态</span></a><span data-i18n="table:text.326">。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.204">涉及变量</span></h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div><span data-i18n="table:text.205">--aw-fill-1 (表头底)、--aw-border-2 (列边)、--aw-border-3 (行间)、--aw-primary (active page)</span></div>
      <div style="margin-top:4px"><span data-i18n="table:text.206">三档密度：32 (dense) / 40 (middle) / 48 (loose) — 单元格 line-height = 高度 - 2 × padding</span></div>
      <div style="margin-top:4px"><span data-i18n="table:text.207">列冻结阴影：0 0 4px rgba(0,0,0,0.06) light · 0 0 4px rgba(0,0,0,0.32) dark</span></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.208">列定义规范 · Column Spec</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="table:text.209">列定义至少明确 </span><code>key</code> / <code>dataIndex</code> / <code>render</code><span data-i18n="table:text.327">；</span><code>title?: ColumnTitle&lt;RecordType&gt;</code><span data-i18n="table:text.210"> 为可选列头配置，本规范建议业务列提供清晰 title。</span><code>width</code> / <code>fixed</code> / <code>align</code> / <code>priority</code><span data-i18n="table:text.211"> 是结构性，</span><code>sorter</code> / <code>filters</code><span data-i18n="table:text.212"> 是交互性。下表给出 6 类常见列的标准定义。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="table:text.213">列类型</span></th><th style="width:14%">align</th><th style="width:14%">width</th><th style="width:18%">priority</th><th><span data-i18n="table:text.214">特殊规则</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="table:text.215">勾选框</span></td><td>center</td><td>40</td><td><span data-i18n="table:text.216">1（不隐藏）</span></td><td><code>fixed: 'left'</code><span data-i18n="table:text.217"> 跟随首列冻结</span></td></tr>
        <tr><td><span data-i18n="table:text.218">主标识（设备名）</span></td><td>left</td><td>auto</td><td><span data-i18n="table:text.219">1（不隐藏）</span></td><td><code>ellipsis: true</code> + Tooltip<span data-i18n="table:text.327">；</span><code>fixed: 'left'</code></td></tr>
        <tr><td>SN / IMEI / IP</td><td>left</td><td>160</td><td>2</td><td><span data-i18n="table:text.220">monospace + 复制按钮 hover 显</span></td></tr>
        <tr><td><span data-i18n="table:text.221">状态</span></td><td>left</td><td>96</td><td><span data-i18n="table:text.222">1（不隐藏）</span></td><td><span data-i18n="table:text.223">状态色 + 圆点 + 文字三重编码</span></td></tr>
        <tr><td><span data-i18n="table:text.224">数字 / 时间戳</span></td><td>right</td><td>100-140</td><td>3</td><td><code>tabular-nums</code><span data-i18n="table:text.225">；时间戳带 tooltip 绝对时间</span></td></tr>
        <tr><td><span data-i18n="table:text.226">操作</span></td><td>right</td><td>140</td><td><span data-i18n="table:text.227">1（不隐藏）</span></td><td><code>fixed: 'right'</code><span data-i18n="table:text.228">；≤ 3 个直接展示，≥ 4 折叠</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.229">排序 · Sorting</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="table:text.230">维度</span></th><th style="width:30%"><span data-i18n="table:text.231">规则</span></th><th><span data-i18n="table:text.232">说明</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="table:text.233">触发位</span></td><td><span data-i18n="table:text.234">列标题点击</span></td><td><span data-i18n="table:text.235">整列标题可点；不要靠图标 hover</span></td></tr>
        <tr><td><span data-i18n="table:text.236">循环顺序</span></td><td><span data-i18n="table:text.237">asc → desc → 无序</span></td><td><span data-i18n="table:text.238">三态循环；无序回归后端默认排序</span></td></tr>
        <tr><td><span data-i18n="table:text.239">多列排序</span></td><td><kbd>Shift</kbd><span data-i18n="table:text.240">+ 列标题点击</span></td><td><span data-i18n="table:text.241">最多 3 列；视觉用数字角标 ① ② ③</span></td></tr>
        <tr><td><span data-i18n="table:text.242">排序场景</span></td><td><span data-i18n="table:text.243">仅</span><b><span data-i18n="table:text.244">服务端</span></b><span data-i18n="table:text.245">排序</span></td><td><span data-i18n="table:text.246">禁前端排序大数据集，与分页 / 筛选一起走 API</span></td></tr>
        <tr><td><span data-i18n="table:text.247">持久化</span></td><td>URL query string</td><td><code>?sort=lastHeartbeat:desc,sn:asc</code><span data-i18n="table:text.248"> —— 刷新 / 分享 URL 保持</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.249">筛选 · Filtering</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="table:text.250">类型</span></th><th style="width:30%"><span data-i18n="table:text.251">触发方式</span></th><th><span data-i18n="table:text.252">典型字段</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="table:text.253">列内筛选</span></td><td><span data-i18n="table:text.254">列标题 ▾ 弹层</span></td><td><span data-i18n="table:text.255">状态 / 机构 / OTA 版本（枚举值 ≤ 20）</span></td></tr>
        <tr><td><span data-i18n="table:text.256">顶部筛选条</span></td><td><span data-i18n="table:text.257">表格上方独立区域</span></td><td><span data-i18n="table:text.258">关键词搜索 + 时间范围 + 主要枚举（4 字段先露）</span></td></tr>
        <tr><td><span data-i18n="table:text.259">高级筛选</span></td><td><span data-i18n="table:text.260">顶部筛选条 "高级 ▾" 展开</span></td><td><span data-i18n="table:text.261">≥ 5 个字段时折叠，"清除全部" 按钮显式</span></td></tr>
        <tr><td><span data-i18n="table:text.262">筛选标签</span></td><td><span data-i18n="table:text.263">表头下方 Tag 序列</span></td><td><span data-i18n="table:text.264">每条筛选 = 1 个可关闭 Tag；点击 × 单独移除</span></td></tr>
        <tr><td><span data-i18n="table:text.265">持久化</span></td><td>URL query string</td><td><code>?status=online,offline&amp;org=sh-001</code></td></tr>
        <tr><td><span data-i18n="table:text.266">组合规则</span></td><td><span data-i18n="table:text.267">同字段 OR、跨字段 AND</span></td><td><span data-i18n="table:text.268">状态 = (在线 OR 升级中) AND 机构 = 上海</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.269">分页 · Pagination</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:24%"><span data-i18n="table:text.270">规则</span></th><th><span data-i18n="table:text.271">具体</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="table:text.272">默认条数</span></td><td><span data-i18n="table:text.273">20 / 页（中密度 40px 行 × 20 = ~800px 主区域）</span></td></tr>
        <tr><td><span data-i18n="table:text.274">可选条数</span></td><td>10 / 20 / 50 / 100</td></tr>
        <tr><td><span data-i18n="table:text.275">跳页</span></td><td><span data-i18n="table:text.276">≥ 5 页时显示"跳到第 __ 页"输入框</span></td></tr>
        <tr><td><span data-i18n="table:text.277">边界态</span></td><td><span data-i18n="table:text.278">仅 1 页：隐藏 pager；总条 0：仅显示"共 0 项"</span></td></tr>
        <tr><td><span data-i18n="table:text.279">大数据集</span></td><td><span data-i18n="table:text.280">≥ 10,000 条：游标分页 (cursor-based)，禁随机跳页</span></td></tr>
        <tr><td><span data-i18n="table:text.281">选中态跨页</span></td><td><span data-i18n="table:text.282">"已选 28 / 共 12,486 项 · 跨页选中"明示</span></td></tr>
        <tr><td><span data-i18n="table:text.283">持久化</span></td><td>URL <code>?page=3&amp;pageSize=50</code></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.284">行交互 · Row Interaction</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="table:text.285">交互</span></th><th style="width:24%"><span data-i18n="table:text.286">触发</span></th><th><span data-i18n="table:text.287">行为</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="table:text.288">hover 高亮</span></td><td><span data-i18n="table:text.289">鼠标悬停</span></td><td><span data-i18n="table:text.290">背景 </span><code>--aw-fill-1</code><span data-i18n="table:text.291">；不触发任何动作</span></td></tr>
        <tr><td><span data-i18n="table:text.292">行点击</span></td><td><span data-i18n="table:text.293">点击非操作列</span></td><td><b><span data-i18n="table:text.294">禁用</span></b><span data-i18n="table:text.295"> "点行进详情" —— 用专门的"详情"按钮，避免误点</span></td></tr>
        <tr><td><span data-i18n="table:text.296">双击</span></td><td>—</td><td><span data-i18n="table:text.297">不绑定（误触风险）</span></td></tr>
        <tr><td><span data-i18n="table:text.298">勾选</span></td><td><span data-i18n="table:text.299">勾选框点击 / Space</span></td><td><span data-i18n="table:text.300">触发批量条；跨页选中明示 "+ 跨页 28 项"</span></td></tr>
        <tr><td><span data-i18n="table:text.301">展开</span></td><td><span data-i18n="table:text.302">左侧 ▸ icon</span></td><td><span data-i18n="table:text.303">嵌套子表 / 详细字段；同时 ≤ 3 行展开</span></td></tr>
        <tr><td><span data-i18n="table:text.304">右键</span></td><td>—</td><td><span data-i18n="table:text.305">不绑定（用浏览器原生菜单）</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.306">业务列表模式 · 表格与卡片双视图</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="table:text.307">应用、广告、设备、设备分组、推送任务复用同一套列表骨架：筛选区先行、批量条只在勾选后出现、表格/卡片视图保留同一操作语义。</span></p>
    <table class="blueprint-table">
      <thead><tr><th><span data-i18n="table:text.308">模式</span></th><th><span data-i18n="table:text.309">出现模块</span></th><th><span data-i18n="table:text.310">规则</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="table:text.311">筛选区</span></td><td><span data-i18n="table:text.312">应用管理 / OTA / 设备管理 / 推送任务</span></td><td><span data-i18n="table:text.313">常用 3-4 字段直接展示，高级筛选折叠；搜索字段永远在第一位。</span></td></tr>
        <tr><td><span data-i18n="table:text.314">表格视图</span></td><td><span data-i18n="table:text.315">应用列表 / 设备列表 / 日志 / 字典</span></td><td><span data-i18n="table:text.316">状态列靠近主对象；操作列固定右侧；超过 4 个动作交给 RowActions。</span></td></tr>
        <tr><td><span data-i18n="table:text.317">卡片视图</span></td><td><span data-i18n="table:text.318">应用管理 / 广告管理 / 设备管理 / 设备分组</span></td><td><span data-i18n="table:text.319">卡片保留主状态、关键字段、最近操作；批量勾选入口在左上角。</span></td></tr>
        <tr><td><span data-i18n="table:text.320">批量条</span></td><td><span data-i18n="table:text.321">分配设备 / 推送设备 / 导出日志</span></td><td><span data-i18n="table:text.322">只在选中后出现，显示已选数量、清空入口和 2-3 个高频批量动作。</span></td></tr>
        <tr><td><span data-i18n="table:text.323">状态列</span></td><td><span data-i18n="table:text.324">应用审核 / OTA 推送 / 设备在线 / 任务结果</span></td><td><span data-i18n="table:text.325">状态文案与操作可用性绑定；不能只改变颜色而不改变可操作项。</span></td></tr>
      </tbody>
    </table>
  </div>
</section>
</div>
`;
