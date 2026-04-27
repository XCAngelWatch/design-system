/* AngelWatch Design System — page: data-cards (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["data-cards"] = `
<div class="content">
<!-- DATA CARDS -->
<section class="section" id="data-cards">
  <p class="section-eyebrow">Components · 设备卡片</p>
  <h2>DataCard · 设备卡片视图</h2>
  <p class="lede">仅 ListPage 表格视图无法满足现场调研：班组长在小屏（笔记本）下扫一排状态比扫表更高效。新增 DataCard 作为 ListPage 的第二种视图（顶部工具栏 <span class="mono">⊞ ☰</span> 切换）。状态色作为顶部色条而非整卡背景，避免视觉过载。</p>
  <div class="datacard-grid">
    <div class="datacard">
<div class="topbar"></div>
<div class="head"><div class="ico">DV</div><div class="meta"><div class="nm">终端-上海-001</div><div class="sn">DEV-86420075</div></div></div>
<div class="body"><span class="l">状态</span><span class="v"><span class="status-dot online">在线</span></span><span class="l">固件</span><span class="l">所在组</span><span class="v">华东一区 / 仓配</span><span class="l">最后心跳</span><span class="v">12 秒前</span></div>
<div class="foot"><a>详情</a><a>下发指令</a><a>升级</a></div>
    </div>
    <div class="datacard upgrading">
<div class="topbar"></div>
<div class="head"><div class="ico">DV</div><div class="meta"><div class="nm">终端-北京-014</div><div class="sn">DEV-86420112</div></div></div>
<div class="body"><span class="l">状态</span><span class="v"><span class="status-dot upgrading">升级中 · 64%</span></span><span class="l">固件</span><span class="v">v3.4.1 → v3.4.2</span><span class="l">所在组</span><span class="v">华北二区 / 配送</span><span class="l">推送时间</span><span class="v">3 分钟前</span></div>
<div class="foot"><a>查看进度</a><a>取消升级</a><a>日志</a></div>
    </div>
    <div class="datacard fault">
<div class="topbar"></div>
<div class="head"><div class="ico">DV</div><div class="meta"><div class="nm">终端-广州-007</div><div class="sn">DEV-86420198</div></div></div>
<div class="body"><span class="l">状态</span><span class="v"><span class="status-dot fault">故障 · 自检失败</span></span><span class="l">固件</span><span class="l">所在组</span><span class="v">华南一区 / 仓配</span><span class="l">异常时间</span><span class="v">2 小时前</span></div>
<div class="foot"><a>诊断</a><a>远程重启</a><a>上报工单</a></div>
    </div>
    <div class="datacard offline">
<div class="topbar"></div>
<div class="head"><div class="ico">DV</div><div class="meta"><div class="nm">终端-成都-022</div><div class="sn">DEV-86420244</div></div></div>
<div class="body"><span class="l">状态</span><span class="v"><span class="status-dot offline">离线</span></span><span class="l">固件</span><span class="l">所在组</span><span class="v">西南一区 / 仓配</span><span class="l">最后在线</span><span class="v">1 天 4 小时</span></div>
<div class="foot"><a>历史</a><a style="color:var(--aw-text-disabled);cursor:not-allowed">下发</a><a style="color:var(--aw-text-disabled);cursor:not-allowed">升级</a></div>
    </div>
  </div>
  <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0">▸ 卡片宽 = (容器宽 − 12 × (n−1)) / n，n ∈ {2,3,4,5,6}；当 n=6 时仅显示前两条 body 字段，详情移入 hover 浮层。</p>
</section>
</div>
`;
