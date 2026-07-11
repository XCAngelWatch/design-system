/* AngelWatch Design System — page: charts (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["charts"] = `
<div class="content">
<section class="section" id="charts">
  <p class="section-eyebrow"><span data-i18n="charts:text.001">业务模式 · 图表与可视化</span></p>
  <h2><span data-i18n="charts:text.002">数据图表 Charts</span></h2>
  <p class="lede"><span data-i18n="charts:text.003">统一使用 </span><code>echarts</code> + <code>echarts-for-react</code><span data-i18n="charts:text.004">(v6 · Apache 2.0) 作为唯一图表方案，覆盖业务统计、复杂场景（拓扑 / 桑基 / 关系图）与大屏需求。所有图表通过 </span><code>setOption</code><span data-i18n="charts:text.005"> 注入 design tokens —— 8 色业务序列、状态色直接复用、坐标轴 / 网格 / Tooltip 视觉一致。</span></p>

  <div class="subsection">
    <h3><span data-i18n="charts:text.006">选型决策树</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="charts:text.007">数据关系</span></th><th style="width:24%"><span data-i18n="charts:text.008">推荐图表</span></th><th style="width:30%"><span data-i18n="charts:text.009">业务场景</span></th><th><span data-i18n="charts:text.010">选型原因</span></th></tr></thead>
      <tbody>
        <tr><td><b><span data-i18n="charts:text.011">占比</span></b></td><td>Pie / Donut</td><td><span data-i18n="charts:text.012">设备状态分布（在线 / 离线 / 升级中）</span></td><td><span data-i18n="charts:text.013">类目 ≤ 6 个；超过 6 类用条形图</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.014">趋势</span></b></td><td>Line</td><td><span data-i18n="charts:text.015">过去 30 天每日心跳率</span></td><td><span data-i18n="charts:text.016">连续时间轴；多系列 ≤ 5 条</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.017">对比</span></b></td><td>Bar / Column</td><td><span data-i18n="charts:text.018">不同地区设备数</span></td><td><span data-i18n="charts:text.019">类目 ≥ 6 个用横向 Bar，≤ 6 用 Column</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.020">分布</span></b></td><td>Histogram / Box</td><td><span data-i18n="charts:text.021">升级耗时分布</span></td><td><span data-i18n="charts:text.022">看离群值用 Box；看密度用 Histogram</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.023">关系</span></b></td><td>Scatter / Heatmap</td><td><span data-i18n="charts:text.024">心跳频率 × 故障率相关性</span></td><td><span data-i18n="charts:text.025">双连续变量 Scatter；密度大用 Heatmap</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.026">构成</span></b></td><td>Stacked Bar / Area</td><td><span data-i18n="charts:text.027">每日推送结果（成功 / 失败 / 跳过）</span></td><td><span data-i18n="charts:text.028">看总量趋势 Area；看占比变化 Stacked Bar</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.029">层级</span></b></td><td>Treemap / Sunburst</td><td><span data-i18n="charts:text.030">机构 → 设备分组 → 设备 三级数量</span></td><td><span data-i18n="charts:text.031">不超过 3 级；4 级以上用 Tree 组件</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.032">流向</span></b></td><td>Sankey</td><td><span data-i18n="charts:text.033">升级版本迁移路径（v3.4.1 → v3.4.2）</span></td><td>echarts <code>series.type="sankey"</code></td></tr>
        <tr><td><b><span data-i18n="charts:text.034">地理</span></b></td><td><span data-i18n="charts:text.035">Map（自托管 GeoJSON）</span></td><td><span data-i18n="charts:text.036">设备地理分布热力</span></td><td><span data-i18n="charts:text.037">禁用百度 / Google Map JS（需自托管 leaflet + 瓦片）</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.038">实时</span></b></td><td><span data-i18n="charts:text.039">Gauge / 数字统计</span></td><td><span data-i18n="charts:text.040">当前在线数 / 当前推送速率</span></td><td><span data-i18n="charts:text.041">数字 + 趋势箭头比 gauge 更易快速读</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="charts:text.042">Figma 统计详情模式 · 活跃 / 激活 / 固件</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:760px;line-height:1.7;margin:0 0 12px"><span data-i18n="charts:text.043">Figma 数据统计 canvas 明确拆成三条统计流：活跃设备、激活设备、固件统计。它们不是只放一张图，而是“概览指标 → 近7日趋势 → 统计详情 → 列表视图 / 导出”的闭环。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="charts:text.044">统计流</span></th><th style="width:22%"><span data-i18n="charts:text.045">Figma 证据词</span></th><th style="width:28%"><span data-i18n="charts:text.046">图表组合</span></th><th><span data-i18n="charts:text.047">详情表字段</span></th></tr></thead>
      <tbody>
        <tr><td><b><span data-i18n="charts:text.048">活跃设备</span></b></td><td><span data-i18n="charts:text.049">当日活跃、七天内活跃、30天内活跃、设备活跃数据、近7日、活跃设备数</span></td><td><span data-i18n="charts:text.050">KPI Cards + Line + Bar；默认近7日，可切 30 日</span></td><td><span data-i18n="charts:text.051">设备编号、机构、最后活跃时间、活跃天数、在线时长、位置上报状态</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.052">激活设备</span></b></td><td><span data-i18n="charts:text.053">当日激活、七天内激活、30天内激活、设备激活数据、激活设备、设备激活数</span></td><td><span data-i18n="charts:text.054">KPI Cards + Line + Region Bar；按机构 / 机型下钻</span></td><td><span data-i18n="charts:text.055">设备编号、激活时间、所属机构、设备型号、系统版本、激活来源</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.056">固件统计</span></b></td><td><span data-i18n="charts:text.057">固件统计、升级文件统计详情、详情、列表视图</span></td><td><span data-i18n="charts:text.058">Stacked Bar + Donut + Detail Table；状态色映射成功 / 失败 / 进行中</span></td><td><span data-i18n="charts:text.059">固件版本、升级文件、适配机型、目标设备、成功、失败、升级中、失败原因</span></td></tr>
      </tbody>
    </table>
    <div class="demo-grid cols-3" style="margin-top:12px">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="charts:text.060">入口</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="charts:text.061">概览卡可点击</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="charts:text.062">Dashboard 的“活跃设备 / 激活设备 / 固件统计”卡片进入统计详情，保留当前日期范围和机构筛选。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="charts:text.063">分析</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="charts:text.064">图表与表格同步</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="charts:text.065">点击折线点或柱条后，详情表同步筛选；表格顶部显示当前筛选条件，支持一键清除。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="charts:text.066">交付</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="charts:text.067">导出带审计条件</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="charts:text.068">导出 CSV / XLSX 时必须写入统计口径、时间范围、机构、操作者和导出时间，避免离线报表失真。</span></p>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="charts:text.069">业务序列色板 · 8 色</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="charts:text.070">图表序列专属 8 色，</span><b><span data-i18n="charts:text.071">独立于</span></b> <a href="#/palette" style="color:var(--aw-primary)"><span data-i18n="charts:text.072">palette 页</span></a><span data-i18n="charts:text.073">的标签色板 —— 标签色板优化"文字 / 底色对比度 + 业务语义"，图表色板优化"序列间区分度 + 色弱可达"。两者职责不同，token 也分离：标签用 </span><code>--aw-{hue}-{step}</code><span data-i18n="charts:text.074">，图表用 </span><code>--aw-chart-1..8</code><span data-i18n="charts:text.075">。多系列图表按下表顺序取色，dark 模式自动切提亮变体。</span></p>
    <div class="chart-color-bar">
      <div style="background:var(--aw-chart-1)"><span>① Blue</span></div>
      <div style="background:var(--aw-chart-2)"><span>② Aqua</span></div>
      <div style="background:var(--aw-chart-3)"><span>③ Indigo</span></div>
      <div style="background:var(--aw-chart-4)"><span>④ Gold</span></div>
      <div style="background:var(--aw-chart-5)"><span>⑤ Coral</span></div>
      <div style="background:var(--aw-chart-6)"><span>⑥ Cyan</span></div>
      <div style="background:var(--aw-chart-7)"><span>⑦ Plum</span></div>
      <div style="background:var(--aw-chart-8)"><span>⑧ Orange</span></div>
    </div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="charts:text.076">状态分布特例：</span></b><span data-i18n="charts:text.077">设备状态饼图 / 堆叠柱用</span><b><span data-i18n="charts:text.078">状态色直接映射</span></b><span data-i18n="charts:text.079">（success 绿 / warning 黄 / danger 红 / 灰中性），不取业务序列色 —— 保持与列表 status pill 视觉同色。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="charts:text.080">视觉规范</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:22%"><span data-i18n="charts:text.081">元素</span></th><th style="width:34%"><span data-i18n="charts:text.082">规则</span></th><th>token</th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="charts:text.083">主轴</span></td><td>1px solid <code>--aw-border-1</code></td><td><span class="mono">#D9D9D9</span></td></tr>
        <tr><td><span data-i18n="charts:text.084">网格线</span></td><td>1px solid <code>--aw-border-3</code><span data-i18n="charts:text.085">，dashed 可选</span></td><td><span class="mono">#F0F0F0</span></td></tr>
        <tr><td><span data-i18n="charts:text.086">轴标</span></td><td>12px <code>--aw-text-3</code></td><td><span class="mono">#6B7280</span></td></tr>
        <tr><td><span data-i18n="charts:text.087">数字格式</span></td><td><span data-i18n="charts:text.088">千分位 + 单位置后</span></td><td><span data-i18n="charts:text.089">对接 data-format 页</span></td></tr>
        <tr><td>Tooltip</td><td><span data-i18n="charts:text.090">暗底 + 白字 + </span><code>--aw-shadow-2</code></td><td><span data-i18n="charts:text.091">即使 light 模式也用暗 tooltip，对比清晰</span></td></tr>
        <tr><td><span data-i18n="charts:text.092">图例</span></td><td><span data-i18n="charts:text.093">位置默认下方居中</span></td><td><span data-i18n="charts:text.094">类目 ≥ 6 个用右侧纵向</span></td></tr>
        <tr><td><span data-i18n="charts:text.095">圆角</span></td><td><span data-i18n="charts:text.096">柱状图顶部圆角 2px</span></td><td><span data-i18n="charts:text.097">对接 </span><code>--aw-radius-sm</code></td></tr>
        <tr><td><span data-i18n="charts:text.098">动画</span></td><td><span data-i18n="charts:text.099">入场 320ms / 实时刷新 ≤ 200ms</span></td><td><span data-i18n="charts:text.100">对接 motion 页 ease 曲线</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="charts:text.101">视觉示例</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px"><span data-i18n="charts:text.102">趋势 · Line</span></div>
        <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
          <line x1="30" y1="20" x2="30" y2="120" stroke="#D9D9D9"/>
          <line x1="30" y1="120" x2="270" y2="120" stroke="#D9D9D9"/>
          <line x1="30" y1="40" x2="270" y2="40" stroke="#F0F0F0" stroke-dasharray="2 3"/>
          <line x1="30" y1="80" x2="270" y2="80" stroke="#F0F0F0" stroke-dasharray="2 3"/>
          <polyline points="30,90 70,72 110,80 150,55 190,38 230,48 270,30" fill="none" stroke="var(--aw-chart-1)" stroke-width="2" stroke-linejoin="round"/>
          <polyline points="30,100 70,95 110,88 150,70 190,72 230,60 270,55" fill="none" stroke="var(--aw-chart-2)" stroke-width="2" stroke-linejoin="round"/>
          <text x="20" y="125" font-size="10" fill="#6B7280">0</text>
          <text x="20" y="85" font-size="10" fill="#6B7280">5k</text>
          <text x="15" y="45" font-size="10" fill="#6B7280">10k</text>
          <text x="30" y="135" font-size="10" fill="#6B7280">04-22</text>
          <text x="240" y="135" font-size="10" fill="#6B7280">04-28</text>
        </svg>
        <div style="margin-top:8px;font-size:12px;color:var(--aw-text-3);display:flex;gap:14px"><span><span style="display:inline-block;width:10px;height:2px;background:var(--aw-chart-1);margin-right:4px;vertical-align:middle"></span><span data-i18n="charts:text.103">在线设备</span></span><span><span style="display:inline-block;width:10px;height:2px;background:var(--aw-chart-2);margin-right:4px;vertical-align:middle"></span><span data-i18n="charts:text.104">心跳数</span></span></div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px"><span data-i18n="charts:text.105">占比 · Donut</span></div>
        <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
          <circle cx="80" cy="70" r="42" fill="none" stroke="var(--aw-success)" stroke-width="22" stroke-dasharray="180 264"/>
          <circle cx="80" cy="70" r="42" fill="none" stroke="var(--aw-warning)" stroke-width="22" stroke-dasharray="38 264" stroke-dashoffset="-180"/>
          <circle cx="80" cy="70" r="42" fill="none" stroke="var(--aw-danger)" stroke-width="22" stroke-dasharray="20 264" stroke-dashoffset="-218"/>
          <circle cx="80" cy="70" r="42" fill="none" stroke="#6B7280" stroke-width="22" stroke-dasharray="26 264" stroke-dashoffset="-238"/>
          <text x="80" y="68" font-size="14" font-weight="600" text-anchor="middle" fill="#1F2937">12,486</text>
          <text x="80" y="84" font-size="10" text-anchor="middle" fill="#6B7280"><tspan data-i18n="charts:text.106">总数</tspan></text>
          <g transform="translate(160,30)" font-size="11" fill="#4B5563">
            <circle cx="0" cy="0" r="4" fill="#389E0D"/><text x="10" y="4"><tspan data-i18n="charts:text.107">在线 8,856</tspan></text>
            <circle cx="0" cy="20" r="4" fill="#D48806"/><text x="10" y="24"><tspan data-i18n="charts:text.108">升级 1,872</tspan></text>
            <circle cx="0" cy="40" r="4" fill="#CF1322"/><text x="10" y="44"><tspan data-i18n="charts:text.109">故障 984</tspan></text>
            <circle cx="0" cy="60" r="4" fill="#6B7280"/><text x="10" y="64"><tspan data-i18n="charts:text.110">离线 774</tspan></text>
          </g>
        </svg>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px"><span data-i18n="charts:text.111">对比 · Bar</span></div>
        <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
          <line x1="60" y1="20" x2="60" y2="120" stroke="#D9D9D9"/>
          <line x1="60" y1="120" x2="270" y2="120" stroke="#D9D9D9"/>
          <rect x="60" y="32" width="180" height="14" rx="2" fill="var(--aw-chart-1)"/>
          <rect x="60" y="52" width="140" height="14" rx="2" fill="var(--aw-chart-1)"/>
          <rect x="60" y="72" width="100" height="14" rx="2" fill="var(--aw-chart-1)"/>
          <rect x="60" y="92" width="60" height="14" rx="2" fill="var(--aw-chart-1)"/>
          <text x="55" y="42" font-size="10" text-anchor="end" fill="#4B5563"><tspan data-i18n="charts:text.112">华东</tspan></text>
          <text x="55" y="62" font-size="10" text-anchor="end" fill="#4B5563"><tspan data-i18n="charts:text.113">华南</tspan></text>
          <text x="55" y="82" font-size="10" text-anchor="end" fill="#4B5563"><tspan data-i18n="charts:text.114">华北</tspan></text>
          <text x="55" y="102" font-size="10" text-anchor="end" fill="#4B5563"><tspan data-i18n="charts:text.115">西部</tspan></text>
          <text x="245" y="42" font-size="10" fill="#1F2937">5,420</text>
          <text x="205" y="62" font-size="10" fill="#1F2937">3,210</text>
          <text x="165" y="82" font-size="10" fill="#1F2937">2,180</text>
          <text x="125" y="102" font-size="10" fill="#1F2937">1,676</text>
        </svg>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px"><span data-i18n="charts:text.116">实时 · Number + Trend</span></div>
        <div style="text-align:center;padding:14px 0">
          <div style="font-size:11px;color:var(--aw-text-3);text-transform:uppercase;letter-spacing:0.5px"><span data-i18n="charts:text.117">当前推送速率</span></div>
          <div style="font-size:38px;font-weight:600;color:var(--aw-text-1);line-height:1.1;margin:6px 0;font-feature-settings:'tnum'">128 <span style="font-size:16px;font-weight:400;color:var(--aw-text-3)"><span data-i18n="charts:text.118">台/分</span></span></div>
          <div style="font-size:12px;color:var(--aw-success)"><span data-i18n="charts:text.119">↑ +12 较上一分钟</span></div>
        </div>
        <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
          <polyline points="0,28 20,24 40,30 60,18 80,22 100,16 120,12 140,18 160,10 180,14 200,8" fill="none" stroke="var(--aw-chart-1)" stroke-width="1.5" stroke-linejoin="round"/>
          <linearGradient id="trendG" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="var(--aw-chart-1)" stop-opacity="0.18"/><stop offset="100%" stop-color="var(--aw-chart-1)" stop-opacity="0"/></linearGradient>
          <polygon points="0,28 20,24 40,30 60,18 80,22 100,16 120,12 140,18 160,10 180,14 200,8 200,40 0,40" fill="url(#trendG)"/>
        </svg>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="charts:text.120">空数据 / 加载 / 错误</span></h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="charts:text.121">空数据</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="charts:text.122">Result 组件</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="charts:text.123">不渲染空白图表。Result 组件 + 文案"当前没有可显示的数据，先添加首批设备" + 主按钮。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="charts:text.124">加载</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="charts:text.125">Skeleton + 占位坐标轴</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="charts:text.126">先画灰色坐标 + 网格，避免布局跳动。数据到位后 320ms 入场动画补上线条。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="charts:text.127">错误</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="charts:text.128">Alert + 重试</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="charts:text.129">不在图表内显示错误。整块替换为 Alert 组件 + 错误码 + 重试按钮，与表格一致。</span></p>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="charts:text.130">echarts v6 集成 · Integration</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 14px"><span data-i18n="charts:text.131">echarts v6 + echarts-for-react v3 是 TMS 唯一图表方案。下面四步把 design tokens 注入 echarts 主题 —— 业务方写图表只关心 </span><code>series</code><span data-i18n="charts:text.132"> 和 </span><code>data</code><span data-i18n="charts:text.133">，不关心颜色 / 字体 / 网格。所有图表共用 </span><code>tms-light</code> / <code>tms-dark</code><span data-i18n="charts:text.134"> 两个注册主题，theme 切换</span><b><span data-i18n="charts:text.135">不</span></b><span data-i18n="charts:text.136">需要重新 setOption。</span></p>

    <h4 style="font-size:13px;font-weight:600;margin:18px 0 8px;color:var(--aw-text-1)"><span data-i18n="charts:text.137">1. 按需引入 · Tree-shake</span></h4>
    <p style="font-size:12px;color:var(--aw-text-3);margin:0 0 8px;line-height:1.7"><span data-i18n="charts:text.138">echarts v6 全量约 1.2 MB；按需引入压到 ~120 KB。在 </span><code>packages/charts/src/echarts.ts</code><span data-i18n="charts:text.139"> 集中声明用到的模块，业务方</span><b><span data-i18n="charts:text.140">不</span></b><span data-i18n="charts:text.141">直接 import echarts。</span></p>
    <div class="code-block"><pre><code>// packages/charts/src/echarts.ts
import * as echarts from 'echarts/core';
import {
  LineChart, BarChart, PieChart, ScatterChart,
  HeatmapChart, SankeyChart, TreemapChart, GaugeChart,
} from 'echarts/charts';
import {
  GridComponent, TooltipComponent, LegendComponent,
  TitleComponent, ToolboxComponent, DataZoomComponent,
  MarkLineComponent, MarkAreaComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers';

echarts.use([
  LineChart, BarChart, PieChart, ScatterChart,
  HeatmapChart, SankeyChart, TreemapChart, GaugeChart,
  GridComponent, TooltipComponent, LegendComponent,
  TitleComponent, ToolboxComponent, DataZoomComponent,
  MarkLineComponent, MarkAreaComponent,
  LabelLayout, UniversalTransition,
  CanvasRenderer,   // Default to Canvas; use SVG for print, SSR, or SVG themes
]);

export default echarts;</code></pre></div>

    <h4 style="font-size:13px;font-weight:600;margin:18px 0 8px;color:var(--aw-text-1)"><span data-i18n="charts:text.142">2. 注册 TMS 主题</span></h4>
    <p style="font-size:12px;color:var(--aw-text-3);margin:0 0 8px;line-height:1.7"><span data-i18n="charts:text.143">把 design tokens 通过 </span><code>registerTheme</code><span data-i18n="charts:text.144"> 注入 echarts。Light / Dark 各注册一份，主题切换时切 theme 名称即可。</span></p>
    <div class="code-block"><pre><code>// packages/charts/src/theme.ts
import echarts from './echarts';

const cssVar = (name) =&gt;
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

function buildTMSTheme(mode) {
  const isDark = mode === 'dark';
  return {
    color: [
      cssVar('--aw-chart-1'),  // antd blue-6   #1677FF / dark: #4096FF
      cssVar('--aw-chart-2'),  // aqua green    #5AD8A6
      cssVar('--aw-chart-3'),  // indigo gray   #5D7092
      cssVar('--aw-chart-4'),  // gold          #F6BD16
      cssVar('--aw-chart-5'),  // coral         #E8684A
      cssVar('--aw-chart-6'),  // light cyan    #6DC8EC
      cssVar('--aw-chart-7'),  // plum          #9270CA
      cssVar('--aw-chart-8'),  // soft orange   #FF9D4D
    ],
    backgroundColor: 'transparent',
    textStyle: {
      fontFamily: cssVar('--aw-font'),
      color: cssVar('--aw-text-2'),
      fontSize: 12,
    },
    title: {
      textStyle: { color: cssVar('--aw-text-1'), fontWeight: 600 },
      subtextStyle: { color: cssVar('--aw-text-3') },
    },
    tooltip: {
      backgroundColor: '#14171D',                       // Dark tooltip in both light and dark modes
      borderColor: '#14171D',
      textStyle: { color: 'rgba(255,255,255,0.92)', fontSize: 12 },
      extraCssText: 'box-shadow: 0 4px 12px rgba(0,0,0,0.5); border-radius: 6px;',
    },
    grid: { left: 60, right: 24, top: 40, bottom: 40, containLabel: true },
    xAxis: {
      axisLine:  { lineStyle: { color: cssVar('--aw-border-1') } },
      axisLabel: { color: cssVar('--aw-text-3'), fontSize: 12 },
      splitLine: { show: false },
    },
    yAxis: {
      axisLine:  { show: false },
      axisLabel: { color: cssVar('--aw-text-3'), fontSize: 12 },
      splitLine: { lineStyle: { color: cssVar('--aw-border-3'), type: [3, 3] } },
    },
    legend: {
      bottom: 0, icon: 'circle', itemWidth: 8, itemHeight: 8, itemGap: 16,
      textStyle: { color: cssVar('--aw-text-2'), fontSize: 12 },
    },
    line: { smooth: true, symbol: 'none', lineStyle: { width: 2 } },
    bar:  { itemStyle: { borderRadius: [2, 2, 0, 0] } },
    pie:  { itemStyle: { borderColor: cssVar('--aw-bg'), borderWidth: 2 } },
    animation: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    animationDuration: 320,
    animationEasing: 'cubicOut',
  };
}

echarts.registerTheme('tms-light', buildTMSTheme('light'));
echarts.registerTheme('tms-dark',  buildTMSTheme('dark'));

// Re-register the theme when theme state syncs across tabs.
window.addEventListener('storage', (e) =&gt; {
  if (e.key === 'aw-theme') {
    echarts.registerTheme('tms-' + e.newValue, buildTMSTheme(e.newValue));
  }
});</code></pre></div>

    <h4 style="font-size:13px;font-weight:600;margin:18px 0 8px;color:var(--aw-text-1)"><span data-i18n="charts:text.145">3. React 包装 · TMSChart</span></h4>
    <p style="font-size:12px;color:var(--aw-text-3);margin:0 0 8px;line-height:1.7"><span data-i18n="charts:text.146">业务代码统一通过 </span><code>&lt;TMSChart /&gt;</code><span data-i18n="charts:text.147"> 调用，</span><b><span data-i18n="charts:text.148">禁止</span></b><span data-i18n="charts:text.149">直接引 </span><code>echarts-for-react</code><span data-i18n="charts:text.150">。包装层处理：主题切换 / loading / 空态 / 错误重试 / 容器尺寸变化。</span></p>
    <div class="code-block"><pre><code>// packages/charts/src/TMSChart.tsx
import ReactECharts from 'echarts-for-react/lib/core';
import echarts from './echarts';
import { useTheme } from '@tms/web/hooks';
import { Empty, Skeleton, Alert } from 'antd';

export function TMSChart({ option, height = 320, loading, error, onRetry, ...rest }) {
  const { mode } = useTheme();           // 'light' | 'dark'

  if (loading) return &lt;Skeleton.Image active style={{ width: '100%', height }} /&gt;;
  if (error)   return &lt;Alert type="error" message="Loading failed" description={error.code}
                       action={&lt;button onClick={onRetry}&gt;Retry&lt;/button&gt;} /&gt;;
  if (!option?.series?.length) return &lt;Empty description="No data available" /&gt;;

  return (
    &lt;ReactECharts
      echarts={echarts}
      option={option}
      theme={'tms-' + mode}
      style={{ height, width: '100%' }}
      opts={{ renderer: 'canvas' }}     // Large-screen SVG: opts={{ renderer: 'svg' }}
      notMerge={false}
      lazyUpdate={true}
      onChartReady={rest.onChartReady}
    /&gt;
  );
}</code></pre></div>

    <h4 style="font-size:13px;font-weight:600;margin:18px 0 8px;color:var(--aw-text-1)"><span data-i18n="charts:text.151">4. 业务调用</span></h4>
    <p style="font-size:12px;color:var(--aw-text-3);margin:0 0 8px;line-height:1.7"><span data-i18n="charts:text.152">业务代码</span><b><span data-i18n="charts:text.153">只描述数据</span></b><span data-i18n="charts:text.154">。颜色 / 字体 / 网格 / Tooltip 全部由主题接管。</span></p>
    <div class="code-block"><pre><code>// Trend — Line
&lt;TMSChart option={{
  xAxis: { type: 'category', data: ['04-22','04-23','04-24','04-25','04-26','04-27','04-28'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'Online devices', type: 'line', data: [9856, 10082, 9923, 11104, 11920, 11628, 12486] },
    { name: 'Heartbeats',      type: 'line', data: [85420, 86120, 84920, 91200, 95400, 93120, 98860] },
  ],
  tooltip: { trigger: 'axis' },
  legend: {},
}} /&gt;

// Share — Donut + status colors
&lt;TMSChart option={{
  series: [{
    type: 'pie', radius: ['55%', '80%'],
    label: { show: false },
    data: [
      { value: 8856, name: 'Online',    itemStyle: { color: 'var(--aw-success)' } },
      { value: 1872, name: 'Upgrading', itemStyle: { color: 'var(--aw-warning)' } },
      { value:  984, name: 'Fault',     itemStyle: { color: 'var(--aw-danger)' } },
      { value:  774, name: 'Offline',   itemStyle: { color: 'var(--aw-text-3)' } },
    ],
  }],
  tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
  legend: { bottom: 0 },
}} /&gt;</code></pre></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="charts:text.155">渲染器选型 · Canvas vs SVG</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="charts:text.156">渲染器</span></th><th style="width:24%"><span data-i18n="charts:text.157">推荐场景</span></th><th style="width:24%"><span data-i18n="charts:text.158">优势</span></th><th><span data-i18n="charts:text.159">限制</span></th></tr></thead>
      <tbody>
        <tr><td><b><span data-i18n="charts:text.160">Canvas · 默认</span></b></td><td><span data-i18n="charts:text.161">大屏 / Dashboard / 实时刷新</span></td><td><span data-i18n="charts:text.162">≥ 5,000 数据点性能更好；GPU 加速</span></td><td><span data-i18n="charts:text.163">不可 SEO；放大模糊；导出 PNG only</span></td></tr>
        <tr><td><b>SVG</b></td><td><span data-i18n="charts:text.164">报表 / 打印 / 导出 PDF / 精度优先</span></td><td><span data-i18n="charts:text.165">矢量无损；DOM 可调试；导出 SVG/PDF</span></td><td><span data-i18n="charts:text.166">≥ 1,000 节点 DOM 卡顿</span></td></tr>
        <tr><td><b>SSR</b></td><td><span data-i18n="charts:text.167">服务端预渲染 (Node)</span></td><td><span data-i18n="charts:text.168">首屏快；SEO 友好</span></td><td><span data-i18n="charts:text.169">需 echarts </span><code>renderToSVGString</code><span data-i18n="charts:text.170">；动效失效</span></td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="charts:text.171">默认策略：</span></b><span data-i18n="charts:text.172">所有图表 Canvas；导出 / 打印场景临时切 SVG（</span><code>opts.renderer = 'svg'</code><span data-i18n="charts:text.173"> 或包一层 </span><code>&lt;PrintableChart /&gt;</code><span data-i18n="charts:text.174">）；监控大屏 ≥ 4 块图表 + 全部实时刷新场景必 Canvas。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="charts:text.175">当前集成约束</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:24%"><span data-i18n="charts:text.176">特性</span></th><th style="width:34%"><span data-i18n="charts:text.177">当前约束</span></th><th><span data-i18n="charts:text.178">实现方式</span></th></tr></thead>
      <tbody>
        <tr><td><b><span data-i18n="charts:text.179">TypeScript 类型</span></b></td><td><span data-i18n="charts:text.180">所有 option 字段使用官方导出类型</span></td><td><span data-i18n="charts:text.181">统一从公开入口导入 </span><code>EChartsOption</code><span data-i18n="charts:text.182">，禁止依赖内部文件结构</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.183">tree-shake 改进</span></b></td><td><span data-i18n="charts:text.184">features 模块单独提取（</span><code>LabelLayout</code> / <code>UniversalTransition</code><span data-i18n="charts:text.242">）</span></td><td><span data-i18n="charts:text.185">必须显式 </span><code>echarts.use()</code><span data-i18n="charts:text.186">，否则 label / 过渡失效</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.187">暗色模式</span></b></td><td><span data-i18n="charts:text.188">内置 </span><code>dark</code><span data-i18n="charts:text.189"> 主题；默认背景透明</span></td><td><span data-i18n="charts:text.190">TMS 仍用自注册主题，不用 </span><code>dark</code><span data-i18n="charts:text.191"> 内置（值差异太大）</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.192">动画系统</span></b></td><td><span data-i18n="charts:text.193">UniversalTransition 默认开启</span></td><td><span data-i18n="charts:text.194">切换 </span><code>option</code><span data-i18n="charts:text.195"> 时数据流转动画自动；可关闭 </span><code>animationDuration: 0</code></td></tr>
        <tr><td><b><span data-i18n="charts:text.196">无障碍</span></b></td><td><span data-i18n="charts:text.197">添加 </span><code>aria.enabled</code><span data-i18n="charts:text.198"> 默认描述图表内容</span></td><td><span data-i18n="charts:text.199">TMS 强制 </span><code>aria.enabled: true</code><span data-i18n="charts:text.200">，对接 a11y 页 SR 规范</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.201">性能</span></b></td><td><span data-i18n="charts:text.202">大数据集 (≥ 100k 点) 渲染提速 30-50%</span></td><td><span data-i18n="charts:text.203">大屏可去掉 sampling，直出原始数据</span></td></tr>
        <tr><td><b><span data-i18n="charts:text.204">导入路径</span></b></td><td><span data-i18n="charts:text.205">不使用 </span><code>echarts/lib/*</code><span data-i18n="charts:text.206"> 内部子路径</span></td><td><span data-i18n="charts:text.207">所有 import 走 </span><code>echarts/core</code> + <code>echarts/charts</code><span data-i18n="charts:text.208"> 等公开目录</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="charts:text.209">实时数据动效</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="charts:text.210">大屏 / Dashboard 高频刷新（&lt; 5 秒）必须遵循"克制"动效原则 —— 不抢焦点。</span></p>
    <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
      <li><span data-i18n="charts:text.211">数字翻牌动画时长 ≤ 200ms，对接 </span><code>--aw-dur-base</code></li>
      <li><span data-i18n="charts:text.212">新数据点入场用 fade，不用 bounce / scale</span></li>
      <li><span data-i18n="charts:text.213">实时折线图新点 append + 旧点滑出，不重绘整图</span></li>
      <li><span data-i18n="charts:text.214">状态色变化（绿→红）禁闪烁，用 0.6s 渐变 + 同步音效（可选）</span></li>
      <li><span data-i18n="charts:text.215">滚动 / hover 不打断后台刷新</span></li>
    </ul>
  </div>

  <div class="subsection">
    <h3><span data-i18n="charts:text.216">规则 · Do &amp; Don'ts</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="charts:text.217">统一通过 </span><code>&lt;TMSChart /&gt;</code><span data-i18n="charts:text.218"> 调用，禁止业务直接 import echarts-for-react</span></li>
          <li><span data-i18n="charts:text.219">echarts 模块通过 </span><code>echarts.use([...])</code><span data-i18n="charts:text.220"> 集中按需引入</span></li>
          <li><span data-i18n="charts:text.221">theme 走 </span><code>registerTheme('tms-light' / 'tms-dark')</code><span data-i18n="charts:text.222">，不在每次 setOption 重写颜色</span></li>
          <li><span data-i18n="charts:text.223">状态分布图用 status 色（绿 / 黄 / 红）；多系列按 8 色业务序列顺序</span></li>
          <li><span data-i18n="charts:text.224">Tooltip 统一暗底；数字格式遵循 data-format 页</span></li>
          <li><span data-i18n="charts:text.225">大屏 / Dashboard 用 Canvas；导出 / 打印用 SVG</span></li>
          <li><span data-i18n="charts:text.226">空 / 错误 / 加载在 </span><code>&lt;TMSChart /&gt;</code><span data-i18n="charts:text.227"> 包装层处理</span></li>
          <li>echarts <code>aria.enabled: true</code><span data-i18n="charts:text.228"> 强制开启</span></li>
          <li><span data-i18n="charts:text.229">地图用自托管 leaflet + GeoJSON 瓦片</span></li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="charts:text.230">不要从 CDN 加载 echarts / 地图瓦片</span></li>
          <li><span data-i18n="charts:text.231">不要全量 </span><code>import * from 'echarts'</code><span data-i18n="charts:text.232">（包体爆炸 1.2 MB）</span></li>
          <li><span data-i18n="charts:text.233">不要使用内部子路径 </span><code>echarts/lib/*</code><span data-i18n="charts:text.234">，统一从稳定公开入口导入</span></li>
          <li><span data-i18n="charts:text.235">不要引入其他图表库（</span><code>@ant-design/charts</code> / <code>chart.js</code> / <code>recharts</code><span data-i18n="charts:text.236"> / d3 直绘）—— 统一 echarts，避免取色 / 主题分裂</span></li>
          <li><span data-i18n="charts:text.237">不要在 series 内硬编码 hex（用 token 或 status 色变量）</span></li>
          <li><span data-i18n="charts:text.238">不要切主题后重新 setOption（用 theme 名切换即可）</span></li>
          <li><span data-i18n="charts:text.239">不要在一张图用 ≥ 7 种色相 / 不要 3D 饼图 / 立体柱状图</span></li>
          <li><span data-i18n="charts:text.240">不要让动画 ≥ 600ms / 不要省略 Y 轴零点</span></li>
          <li><span data-i18n="charts:text.241">不要用红绿表达"上升 / 下降"（色弱不友好），配 ↑↓ 图形</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
