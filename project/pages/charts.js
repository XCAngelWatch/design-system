/* AngelWatch Design System — page: charts (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["charts"] = `
<div class="content">
<section class="section" id="charts">
  <p class="section-eyebrow">Components · 图表与可视化</p>
  <h2>Charts · 数据可视化</h2>
  <p class="lede">统一使用 <code>echarts</code> + <code>echarts-for-react</code>(v6 · Apache 2.0) 作为唯一图表方案，覆盖业务统计、复杂场景（拓扑 / 桑基 / 关系图）与大屏需求。所有图表通过 <code>setOption</code> 注入 design tokens —— 8 色业务序列、状态色直接复用、坐标轴 / 网格 / Tooltip 视觉一致。</p>

  <div class="subsection">
    <h3>选型决策树</h3>
    <table class="map-table">
      <thead><tr><th style="width:18%">数据关系</th><th style="width:24%">推荐图表</th><th style="width:30%">业务场景</th><th>选型原因</th></tr></thead>
      <tbody>
        <tr><td><b>占比</b></td><td>Pie / Donut</td><td>设备状态分布（在线 / 离线 / 升级中）</td><td>类目 ≤ 6 个；超过 6 类用条形图</td></tr>
        <tr><td><b>趋势</b></td><td>Line</td><td>过去 30 天每日心跳率</td><td>连续时间轴；多系列 ≤ 5 条</td></tr>
        <tr><td><b>对比</b></td><td>Bar / Column</td><td>不同地区设备数</td><td>类目 ≥ 6 个用横向 Bar，≤ 6 用 Column</td></tr>
        <tr><td><b>分布</b></td><td>Histogram / Box</td><td>升级耗时分布</td><td>看离群值用 Box；看密度用 Histogram</td></tr>
        <tr><td><b>关系</b></td><td>Scatter / Heatmap</td><td>心跳频率 × 故障率相关性</td><td>双连续变量 Scatter；密度大用 Heatmap</td></tr>
        <tr><td><b>构成</b></td><td>Stacked Bar / Area</td><td>每日推送结果（成功 / 失败 / 跳过）</td><td>看总量趋势 Area；看占比变化 Stacked Bar</td></tr>
        <tr><td><b>层级</b></td><td>Treemap / Sunburst</td><td>地区 → 站点 → 设备 三级数量</td><td>不超过 3 级；4 级以上用 Tree 组件</td></tr>
        <tr><td><b>流向</b></td><td>Sankey</td><td>升级版本迁移路径（v3.4.1 → v3.4.2）</td><td>echarts <code>series.type="sankey"</code></td></tr>
        <tr><td><b>地理</b></td><td>Map（自托管 GeoJSON）</td><td>设备地理分布热力</td><td>禁用百度 / Google Map JS（需自托管 leaflet + 瓦片）</td></tr>
        <tr><td><b>实时</b></td><td>Gauge / 数字统计</td><td>当前在线数 / 当前推送速率</td><td>数字 + 趋势箭头比 gauge 更易快速读</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>业务序列色板 · 8 色</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">图表序列专属 8 色，<b>独立于</b> <a href="#/palette" style="color:var(--aw-primary)">palette 页</a>的标签色板 —— 标签色板优化"文字 / 底色对比度 + 业务语义"，图表色板优化"序列间区分度 + 色弱可达"。两者职责不同，token 也分离：标签用 <code>--aw-{hue}-{step}</code>，图表用 <code>--aw-chart-1..8</code>。多系列图表按下表顺序取色，dark 模式自动切提亮变体。</p>
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
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">状态分布特例：</b>设备状态饼图 / 堆叠柱用<b>状态色直接映射</b>（success 绿 / warning 黄 / danger 红 / 灰中性），不取业务序列色 —— 保持与列表 status pill 视觉同色。</p>
  </div>

  <div class="subsection">
    <h3>视觉规范</h3>
    <table class="map-table">
      <thead><tr><th style="width:22%">元素</th><th style="width:34%">规则</th><th>token</th></tr></thead>
      <tbody>
        <tr><td>主轴</td><td>1px solid <code>--aw-border-1</code></td><td><span class="mono">#D9D9D9</span></td></tr>
        <tr><td>网格线</td><td>1px solid <code>--aw-border-3</code>，dashed 可选</td><td><span class="mono">#F0F0F0</span></td></tr>
        <tr><td>轴标</td><td>12px <code>--aw-text-3</code></td><td><span class="mono">#6B7280</span></td></tr>
        <tr><td>数字格式</td><td>千分位 + 单位置后</td><td>对接 data-format 页</td></tr>
        <tr><td>Tooltip</td><td>暗底 + 白字 + <code>--aw-shadow-2</code></td><td>即使 light 模式也用暗 tooltip，对比清晰</td></tr>
        <tr><td>图例</td><td>位置默认下方居中</td><td>类目 ≥ 6 个用右侧纵向</td></tr>
        <tr><td>圆角</td><td>柱状图顶部圆角 2px</td><td>对接 <code>--aw-radius-sm</code></td></tr>
        <tr><td>动画</td><td>入场 320ms / 实时刷新 ≤ 200ms</td><td>对接 motion 页 ease 曲线</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>视觉示例</h3>
    <div class="demo-grid cols-2">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px">趋势 · Line</div>
        <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
          <line x1="30" y1="20" x2="30" y2="120" stroke="#D9D9D9"/>
          <line x1="30" y1="120" x2="270" y2="120" stroke="#D9D9D9"/>
          <line x1="30" y1="40" x2="270" y2="40" stroke="#F0F0F0" stroke-dasharray="2 3"/>
          <line x1="30" y1="80" x2="270" y2="80" stroke="#F0F0F0" stroke-dasharray="2 3"/>
          <polyline points="30,90 70,72 110,80 150,55 190,38 230,48 270,30" fill="none" stroke="#1677FF" stroke-width="2" stroke-linejoin="round"/>
          <polyline points="30,100 70,95 110,88 150,70 190,72 230,60 270,55" fill="none" stroke="#5AD8A6" stroke-width="2" stroke-linejoin="round"/>
          <text x="20" y="125" font-size="10" fill="#6B7280">0</text>
          <text x="20" y="85" font-size="10" fill="#6B7280">5k</text>
          <text x="15" y="45" font-size="10" fill="#6B7280">10k</text>
          <text x="30" y="135" font-size="10" fill="#6B7280">04-22</text>
          <text x="240" y="135" font-size="10" fill="#6B7280">04-28</text>
        </svg>
        <div style="margin-top:8px;font-size:12px;color:var(--aw-text-3);display:flex;gap:14px"><span><span style="display:inline-block;width:10px;height:2px;background:#1677FF;margin-right:4px;vertical-align:middle"></span>在线设备</span><span><span style="display:inline-block;width:10px;height:2px;background:#5AD8A6;margin-right:4px;vertical-align:middle"></span>心跳数</span></div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px">占比 · Donut</div>
        <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
          <circle cx="80" cy="70" r="42" fill="none" stroke="#389E0D" stroke-width="22" stroke-dasharray="180 264"/>
          <circle cx="80" cy="70" r="42" fill="none" stroke="#D48806" stroke-width="22" stroke-dasharray="38 264" stroke-dashoffset="-180"/>
          <circle cx="80" cy="70" r="42" fill="none" stroke="#CF1322" stroke-width="22" stroke-dasharray="20 264" stroke-dashoffset="-218"/>
          <circle cx="80" cy="70" r="42" fill="none" stroke="#6B7280" stroke-width="22" stroke-dasharray="26 264" stroke-dashoffset="-238"/>
          <text x="80" y="68" font-size="14" font-weight="600" text-anchor="middle" fill="#1F2937">12,486</text>
          <text x="80" y="84" font-size="10" text-anchor="middle" fill="#6B7280">总数</text>
          <g transform="translate(160,30)" font-size="11" fill="#4B5563">
            <circle cx="0" cy="0" r="4" fill="#389E0D"/><text x="10" y="4">在线 8,856</text>
            <circle cx="0" cy="20" r="4" fill="#D48806"/><text x="10" y="24">升级 1,872</text>
            <circle cx="0" cy="40" r="4" fill="#CF1322"/><text x="10" y="44">故障 984</text>
            <circle cx="0" cy="60" r="4" fill="#6B7280"/><text x="10" y="64">离线 774</text>
          </g>
        </svg>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px">对比 · Bar</div>
        <svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
          <line x1="60" y1="20" x2="60" y2="120" stroke="#D9D9D9"/>
          <line x1="60" y1="120" x2="270" y2="120" stroke="#D9D9D9"/>
          <rect x="60" y="32" width="180" height="14" rx="2" fill="#1677FF"/>
          <rect x="60" y="52" width="140" height="14" rx="2" fill="#1677FF"/>
          <rect x="60" y="72" width="100" height="14" rx="2" fill="#1677FF"/>
          <rect x="60" y="92" width="60" height="14" rx="2" fill="#1677FF"/>
          <text x="55" y="42" font-size="10" text-anchor="end" fill="#4B5563">华东</text>
          <text x="55" y="62" font-size="10" text-anchor="end" fill="#4B5563">华南</text>
          <text x="55" y="82" font-size="10" text-anchor="end" fill="#4B5563">华北</text>
          <text x="55" y="102" font-size="10" text-anchor="end" fill="#4B5563">西部</text>
          <text x="245" y="42" font-size="10" fill="#1F2937">5,420</text>
          <text x="205" y="62" font-size="10" fill="#1F2937">3,210</text>
          <text x="165" y="82" font-size="10" fill="#1F2937">2,180</text>
          <text x="125" y="102" font-size="10" fill="#1F2937">1,676</text>
        </svg>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px">实时 · Number + Trend</div>
        <div style="text-align:center;padding:14px 0">
          <div style="font-size:11px;color:var(--aw-text-3);text-transform:uppercase;letter-spacing:0.5px">当前推送速率</div>
          <div style="font-size:38px;font-weight:600;color:var(--aw-text-1);line-height:1.1;margin:6px 0;font-feature-settings:'tnum'">128 <span style="font-size:16px;font-weight:400;color:var(--aw-text-3)">台/分</span></div>
          <div style="font-size:12px;color:var(--aw-success)">↑ +12 较上一分钟</div>
        </div>
        <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
          <polyline points="0,28 20,24 40,30 60,18 80,22 100,16 120,12 140,18 160,10 180,14 200,8" fill="none" stroke="#1677FF" stroke-width="1.5" stroke-linejoin="round"/>
          <linearGradient id="trendG" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#1677FF" stop-opacity="0.18"/><stop offset="100%" stop-color="#1677FF" stop-opacity="0"/></linearGradient>
          <polygon points="0,28 20,24 40,30 60,18 80,22 100,16 120,12 140,18 160,10 180,14 200,8 200,40 0,40" fill="url(#trendG)"/>
        </svg>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>空数据 / 加载 / 错误</h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">空数据</div>
        <h3 style="margin:0 0 8px;font-size:14px">Result 组件</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">不渲染空白图表。Result 组件 + 文案"暂无数据，先添加首批设备" + 主按钮。</p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">加载</div>
        <h3 style="margin:0 0 8px;font-size:14px">Skeleton + 占位坐标轴</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">先画灰色坐标 + 网格，避免布局跳动。数据到位后 320ms 入场动画补上线条。</p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">错误</div>
        <h3 style="margin:0 0 8px;font-size:14px">Alert + 重试</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">不在图表内显示错误。整块替换为 Alert 组件 + 错误码 + 重试按钮，与表格一致。</p>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>echarts v6 集成 · Integration</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 14px">echarts v6 + echarts-for-react v3 是 TMS 唯一图表方案。下面四步把 design tokens 注入 echarts 主题 —— 业务方写图表只关心 <code>series</code> 和 <code>data</code>，不关心颜色 / 字体 / 网格。所有图表共用 <code>tms-light</code> / <code>tms-dark</code> 两个注册主题，theme 切换<b>不</b>需要重新 setOption。</p>

    <h4 style="font-size:13px;font-weight:600;margin:18px 0 8px;color:var(--aw-text-1)">1. 按需引入 · Tree-shake</h4>
    <p style="font-size:12px;color:var(--aw-text-3);margin:0 0 8px;line-height:1.7">echarts v6 全量约 1.2 MB；按需引入压到 ~120 KB。在 <code>packages/charts/src/echarts.ts</code> 集中声明用到的模块，业务方<b>不</b>直接 import echarts。</p>
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
  CanvasRenderer,   // 业务默认 Canvas;打印/SSR/svg 主题用 SVG
]);

export default echarts;</code></pre></div>

    <h4 style="font-size:13px;font-weight:600;margin:18px 0 8px;color:var(--aw-text-1)">2. 注册 TMS 主题</h4>
    <p style="font-size:12px;color:var(--aw-text-3);margin:0 0 8px;line-height:1.7">把 design tokens 通过 <code>registerTheme</code> 注入 echarts。Light / Dark 各注册一份，主题切换时切 theme 名称即可。</p>
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
      backgroundColor: '#14171D',                       // 暗底无视 light/dark
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

// 监听主题切换 + 跨标签同步,重新注册主题
window.addEventListener('storage', (e) =&gt; {
  if (e.key === 'aw-theme') {
    echarts.registerTheme('tms-' + e.newValue, buildTMSTheme(e.newValue));
  }
});</code></pre></div>

    <h4 style="font-size:13px;font-weight:600;margin:18px 0 8px;color:var(--aw-text-1)">3. React 包装 · TMSChart</h4>
    <p style="font-size:12px;color:var(--aw-text-3);margin:0 0 8px;line-height:1.7">业务代码统一通过 <code>&lt;TMSChart /&gt;</code> 调用，<b>禁止</b>直接引 <code>echarts-for-react</code>。包装层处理：主题切换 / loading / 空态 / 错误重试 / 容器尺寸变化。</p>
    <div class="code-block"><pre><code>// packages/charts/src/TMSChart.tsx
import ReactECharts from 'echarts-for-react/lib/core';
import echarts from './echarts';
import { useTheme } from '@tms/web/hooks';
import { Empty, Skeleton, Alert } from 'antd';

export function TMSChart({ option, height = 320, loading, error, onRetry, ...rest }) {
  const { mode } = useTheme();           // 'light' | 'dark'

  if (loading) return &lt;Skeleton.Image active style={{ width: '100%', height }} /&gt;;
  if (error)   return &lt;Alert type="error" message="加载失败" description={error.code}
                       action={&lt;button onClick={onRetry}&gt;重试&lt;/button&gt;} /&gt;;
  if (!option?.series?.length) return &lt;Empty description="暂无数据" /&gt;;

  return (
    &lt;ReactECharts
      echarts={echarts}
      option={option}
      theme={'tms-' + mode}
      style={{ height, width: '100%' }}
      opts={{ renderer: 'canvas' }}     // 大屏 SVG: opts={{ renderer: 'svg' }}
      notMerge={false}
      lazyUpdate={true}
      onChartReady={rest.onChartReady}
    /&gt;
  );
}</code></pre></div>

    <h4 style="font-size:13px;font-weight:600;margin:18px 0 8px;color:var(--aw-text-1)">4. 业务调用</h4>
    <p style="font-size:12px;color:var(--aw-text-3);margin:0 0 8px;line-height:1.7">业务代码<b>只描述数据</b>。颜色 / 字体 / 网格 / Tooltip 全部由主题接管。</p>
    <div class="code-block"><pre><code>// 趋势 —— Line
&lt;TMSChart option={{
  xAxis: { type: 'category', data: ['04-22','04-23','04-24','04-25','04-26','04-27','04-28'] },
  yAxis: { type: 'value' },
  series: [
    { name: '在线设备', type: 'line', data: [9856, 10082, 9923, 11104, 11920, 11628, 12486] },
    { name: '心跳数',   type: 'line', data: [85420, 86120, 84920, 91200, 95400, 93120, 98860] },
  ],
  tooltip: { trigger: 'axis' },
  legend: {},
}} /&gt;

// 占比 —— Donut + 状态色
&lt;TMSChart option={{
  series: [{
    type: 'pie', radius: ['55%', '80%'],
    label: { show: false },
    data: [
      { value: 8856, name: '在线',   itemStyle: { color: 'var(--aw-success)' } },
      { value: 1872, name: '升级中', itemStyle: { color: 'var(--aw-warning)' } },
      { value:  984, name: '故障',   itemStyle: { color: 'var(--aw-danger)' } },
      { value:  774, name: '离线',   itemStyle: { color: 'var(--aw-text-3)' } },
    ],
  }],
  tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
  legend: { bottom: 0 },
}} /&gt;</code></pre></div>
  </div>

  <div class="subsection">
    <h3>渲染器选型 · Canvas vs SVG</h3>
    <table class="map-table">
      <thead><tr><th style="width:18%">渲染器</th><th style="width:24%">推荐场景</th><th style="width:24%">优势</th><th>限制</th></tr></thead>
      <tbody>
        <tr><td><b>Canvas · 默认</b></td><td>大屏 / Dashboard / 实时刷新</td><td>≥ 5,000 数据点性能更好；GPU 加速</td><td>不可 SEO；放大模糊；导出 PNG only</td></tr>
        <tr><td><b>SVG</b></td><td>报表 / 打印 / 导出 PDF / 精度优先</td><td>矢量无损；DOM 可调试；导出 SVG/PDF</td><td>≥ 1,000 节点 DOM 卡顿</td></tr>
        <tr><td><b>SSR</b></td><td>服务端预渲染 (Node)</td><td>首屏快；SEO 友好</td><td>需 echarts <code>renderToSVGString</code>；动效失效</td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">默认策略：</b>所有图表 Canvas；导出 / 打印场景临时切 SVG（<code>opts.renderer = 'svg'</code> 或包一层 <code>&lt;PrintableChart /&gt;</code>）；监控大屏 ≥ 4 块图表 + 全部实时刷新场景必 Canvas。</p>
  </div>

  <div class="subsection">
    <h3>v6 关键变更 · 升级要点</h3>
    <table class="map-table">
      <thead><tr><th style="width:24%">特性</th><th style="width:34%">v6 行为</th><th>影响 / 处理</th></tr></thead>
      <tbody>
        <tr><td><b>TypeScript 类型重构</b></td><td>所有 option 字段类型导出更精确</td><td>从 v5 升要把 <code>EChartsOption</code> import 路径调整到 <code>echarts/types/dist/echarts</code></td></tr>
        <tr><td><b>tree-shake 改进</b></td><td>features 模块单独提取（<code>LabelLayout</code> / <code>UniversalTransition</code>）</td><td>必须显式 <code>echarts.use()</code>，否则 label / 过渡失效</td></tr>
        <tr><td><b>暗色模式</b></td><td>内置 <code>dark</code> 主题；默认背景透明</td><td>TMS 仍用自注册主题，不用 <code>dark</code> 内置（值差异太大）</td></tr>
        <tr><td><b>动画系统</b></td><td>UniversalTransition 默认开启</td><td>切换 <code>option</code> 时数据流转动画自动；可关闭 <code>animationDuration: 0</code></td></tr>
        <tr><td><b>无障碍</b></td><td>新增 <code>aria.enabled</code> 默认描述图表内容</td><td>TMS 强制 <code>aria.enabled: true</code>，对接 a11y 页 SR 规范</td></tr>
        <tr><td><b>性能</b></td><td>大数据集 (≥ 100k 点) 渲染提速 30-50%</td><td>大屏可去掉 sampling，直出原始数据</td></tr>
        <tr><td><b>移除项</b></td><td>v6 不再维护 <code>echarts/lib/*</code> 子路径</td><td>所有 import 走 <code>echarts/core</code> + <code>echarts/charts</code> 等顶级目录</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>实时数据动效</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">大屏 / Dashboard 高频刷新（&lt; 5 秒）必须遵循"克制"动效原则 —— 不抢焦点。</p>
    <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
      <li>数字翻牌动画时长 ≤ 200ms，对接 <code>--aw-dur-base</code></li>
      <li>新数据点入场用 fade，不用 bounce / scale</li>
      <li>实时折线图新点 append + 旧点滑出，不重绘整图</li>
      <li>状态色变化（绿→红）禁闪烁，用 0.6s 渐变 + 同步音效（可选）</li>
      <li>滚动 / hover 不打断后台刷新</li>
    </ul>
  </div>

  <div class="subsection">
    <h3>规则 · Do &amp; Don'ts</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>统一通过 <code>&lt;TMSChart /&gt;</code> 调用，禁止业务直接 import echarts-for-react</li>
          <li>echarts 模块通过 <code>echarts.use([...])</code> 集中按需引入</li>
          <li>theme 走 <code>registerTheme('tms-light' / 'tms-dark')</code>，不在每次 setOption 重写颜色</li>
          <li>状态分布图用 status 色（绿 / 黄 / 红）；多系列按 8 色业务序列顺序</li>
          <li>Tooltip 统一暗底；数字格式遵循 data-format 页</li>
          <li>大屏 / Dashboard 用 Canvas；导出 / 打印用 SVG</li>
          <li>空 / 错误 / 加载在 <code>&lt;TMSChart /&gt;</code> 包装层处理</li>
          <li>echarts <code>aria.enabled: true</code> 强制开启</li>
          <li>地图用自托管 leaflet + GeoJSON 瓦片</li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>不要从 CDN 加载 echarts / 地图瓦片</li>
          <li>不要全量 <code>import * from 'echarts'</code>（包体爆炸 1.2 MB）</li>
          <li>不要用 echarts v5 子路径 <code>echarts/lib/*</code>（v6 已移除）</li>
          <li>不要引入其他图表库（<code>@ant-design/charts</code> / <code>chart.js</code> / <code>recharts</code> / d3 直绘）—— 统一 echarts，避免取色 / 主题分裂</li>
          <li>不要在 series 内硬编码 hex（用 token 或 status 色变量）</li>
          <li>不要切主题后重新 setOption（用 theme 名切换即可）</li>
          <li>不要在一张图用 ≥ 7 种色相 / 不要 3D 饼图 / 立体柱状图</li>
          <li>不要让动画 ≥ 600ms / 不要省略 Y 轴零点</li>
          <li>不要用红绿表达"上升 / 下降"（色弱不友好），配 ↑↓ 图形</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
