/* AngelWatch Design System — page: datepicker (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["datepicker"] = `
<div class="content">
<section class="section" id="datepicker">
  <p class="section-eyebrow"><span data-i18n="datepicker:text.001">通用组件 · 日期 / 时间选择</span></p>
  <h2><span data-i18n="datepicker:text.002">DatePicker / TimePicker · 日期时间选择</span></h2>
  <p class="lede"><span data-i18n="datepicker:text.003">日志查询、告警过滤、统计区间、OTA 执行窗口——所有时间范围筛选的入口。日期、时间、日期时间范围都必须支持快捷项与明确确认，降低误操作。</span></p>

  <div class="demo-grid cols-2">
    <div class="surface">
<h3 style="margin:0 0 12px;font-size:14px"><span data-i18n="datepicker:text.004">输入态 · 可点击预览</span></h3>
<div style="display:flex;flex-direction:column;gap:12px">
  <div class="dp"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg><span class="placeholder"><span data-i18n="datepicker:text.005">选择日期</span></span></div>
  <div class="dp"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg><span class="val" data-demo-output="date">2026-04-20</span></div>
  <div class="dp"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span class="val" data-demo-output="time">02:00</span></div>
  <div class="dp dp-range"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg><span class="val" data-demo-output="range-start">2026-03-21</span><span class="sep">→</span><span class="val" data-demo-output="range-end">2026-04-20</span></div>
  <div class="dp dp-range"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span class="val" data-demo-output="datetime-start">2026-04-20 02:00</span><span class="sep">→</span><span class="val" data-demo-output="datetime-end">06:00</span></div>
</div>
<h3 style="margin:18px 0 10px;font-size:14px"><span data-i18n="datepicker:text.006">快捷范围</span></h3>
<div class="dp-quick">
  <button class="chip" data-demo-action="quick-range" data-range-start="2026-04-27" data-range-end="2026-04-27"><span data-i18n="datepicker:text.007">今日</span></button>
  <button class="chip" data-demo-action="quick-range" data-range-start="2026-04-26" data-range-end="2026-04-26"><span data-i18n="datepicker:text.008">昨日</span></button>
  <button class="chip active" data-demo-action="quick-range" data-range-start="2026-04-21" data-range-end="2026-04-27"><span data-i18n="datepicker:text.009">近 7 天</span></button>
  <button class="chip" data-demo-action="quick-range" data-range-start="2026-03-29" data-range-end="2026-04-27"><span data-i18n="datepicker:text.010">近 30 天</span></button>
  <button class="chip" data-demo-action="quick-range" data-range-start="2026-04-01" data-range-end="2026-04-30"><span data-i18n="datepicker:text.011">本月</span></button>
  <button class="chip" data-demo-action="quick-range" data-range-start="2026-04-01" data-range-end="2026-06-30"><span data-i18n="datepicker:text.012">本季度</span></button>
</div>
<div class="alert info" style="margin-top:14px"><div class="ico">i</div><div class="content"><span data-i18n="datepicker:text.013">点击 chip、日期格、时间项会更新上方输入态。此站点只模拟状态切换，不持久化业务数据。</span></div></div>
    </div>
    <div class="surface">
<h3 style="margin:0 0 12px;font-size:14px"><span data-i18n="datepicker:text.014">日历面板</span></h3>
<div class="calendar">
  <div class="head"><button class="nav-btn" data-demo-action="month-prev">‹</button><span data-demo-output="month-label"><span data-i18n="datepicker:text.015">2026 年 4 月</span></span><button class="nav-btn" data-demo-action="month-next">›</button></div>
  <div class="grid">
    <div class="dow"><span data-i18n="datepicker:text.016">日</span></div><div class="dow"><span data-i18n="datepicker:text.017">一</span></div><div class="dow"><span data-i18n="datepicker:text.018">二</span></div><div class="dow"><span data-i18n="datepicker:text.019">三</span></div><div class="dow"><span data-i18n="datepicker:text.020">四</span></div><div class="dow"><span data-i18n="datepicker:text.021">五</span></div><div class="dow"><span data-i18n="datepicker:text.022">六</span></div>
    <div class="day muted">29</div><div class="day muted">30</div><div class="day muted">31</div>
    <button class="day" data-demo-action="date-select" data-date="2026-04-01">1</button><button class="day" data-demo-action="date-select" data-date="2026-04-02">2</button><button class="day" data-demo-action="date-select" data-date="2026-04-03">3</button><button class="day" data-demo-action="date-select" data-date="2026-04-04">4</button>
    <button class="day" data-demo-action="date-select" data-date="2026-04-05">5</button><button class="day" data-demo-action="date-select" data-date="2026-04-06">6</button><button class="day" data-demo-action="date-select" data-date="2026-04-07">7</button><button class="day" data-demo-action="date-select" data-date="2026-04-08">8</button><button class="day" data-demo-action="date-select" data-date="2026-04-09">9</button><button class="day" data-demo-action="date-select" data-date="2026-04-10">10</button><button class="day" data-demo-action="date-select" data-date="2026-04-11">11</button>
    <button class="day" data-demo-action="date-select" data-date="2026-04-12">12</button><button class="day" data-demo-action="date-select" data-date="2026-04-13">13</button><button class="day in-range" data-demo-action="date-select" data-date="2026-04-14">14</button><button class="day in-range" data-demo-action="date-select" data-date="2026-04-15">15</button><button class="day in-range" data-demo-action="date-select" data-date="2026-04-16">16</button><button class="day in-range" data-demo-action="date-select" data-date="2026-04-17">17</button><button class="day in-range" data-demo-action="date-select" data-date="2026-04-18">18</button>
    <button class="day in-range" data-demo-action="date-select" data-date="2026-04-19">19</button><button class="day selected" data-demo-action="date-select" data-date="2026-04-20">20</button><button class="day" data-demo-action="date-select" data-date="2026-04-21">21</button><button class="day" data-demo-action="date-select" data-date="2026-04-22">22</button><button class="day" data-demo-action="date-select" data-date="2026-04-23">23</button><button class="day" data-demo-action="date-select" data-date="2026-04-24">24</button><button class="day" data-demo-action="date-select" data-date="2026-04-25">25</button>
    <button class="day" data-demo-action="date-select" data-date="2026-04-26">26</button><button class="day today" data-demo-action="date-select" data-date="2026-04-27">27</button><button class="day" data-demo-action="date-select" data-date="2026-04-28">28</button><button class="day" data-demo-action="date-select" data-date="2026-04-29">29</button><button class="day" data-demo-action="date-select" data-date="2026-04-30">30</button><div class="day muted">1</div><div class="day muted">2</div>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="datepicker:text.023">时间选择 · TimePicker</span></h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <h3 style="margin:0 0 12px;font-size:14px"><span data-i18n="datepicker:text.024">常用执行时间</span></h3>
        <div class="time-list">
          <button class="time-option active" data-demo-action="time-select" data-time="02:00">02:00 <span><span data-i18n="datepicker:text.025">低峰默认</span></span></button>
          <button class="time-option" data-demo-action="time-select" data-time="06:00">06:00 <span><span data-i18n="datepicker:text.026">晨间窗口</span></span></button>
          <button class="time-option" data-demo-action="time-select" data-time="12:30">12:30 <span><span data-i18n="datepicker:text.027">午间巡检</span></span></button>
          <button class="time-option" data-demo-action="time-select" data-time="22:00">22:00 <span><span data-i18n="datepicker:text.028">夜间维护</span></span></button>
        </div>
      </div>
      <div class="surface">
        <h3 style="margin:0 0 12px;font-size:14px"><span data-i18n="datepicker:text.029">三列滚轮面板</span></h3>
        <div class="time-picker">
          <div class="time-col">
            <button data-demo-action="time-part" data-part="hour">00</button>
            <button class="active" data-demo-action="time-part" data-part="hour">02</button>
            <button data-demo-action="time-part" data-part="hour">06</button>
            <button data-demo-action="time-part" data-part="hour">22</button>
          </div>
          <div class="time-col">
            <button class="active" data-demo-action="time-part" data-part="minute">00</button>
            <button data-demo-action="time-part" data-part="minute">15</button>
            <button data-demo-action="time-part" data-part="minute">30</button>
            <button data-demo-action="time-part" data-part="minute">45</button>
          </div>
          <div class="time-col">
            <button class="active" data-demo-action="time-part" data-part="second">00</button>
            <button data-demo-action="time-part" data-part="second">10</button>
            <button data-demo-action="time-part" data-part="second">30</button>
            <button data-demo-action="time-part" data-part="second">59</button>
          </div>
        </div>
      </div>
      <div class="surface">
        <h3 style="margin:0 0 12px;font-size:14px"><span data-i18n="datepicker:text.030">日期时间范围</span></h3>
        <div class="dt-summary">
          <div><span><span data-i18n="datepicker:text.031">开始</span></span><strong data-demo-output="datetime-start">2026-04-20 02:00</strong></div>
          <div><span><span data-i18n="datepicker:text.032">结束</span></span><strong data-demo-output="datetime-end">06:00</strong></div>
          <div><span><span data-i18n="datepicker:text.033">策略</span></span><strong><span data-i18n="datepicker:text.034">超时延后到次日同窗口</span></strong></div>
        </div>
        <div class="dt-actions">
          <button class="btn btn-sm" data-demo-action="clear-picker"><span data-i18n="datepicker:text.035">清空</span></button>
          <button class="btn btn-primary btn-sm" data-demo-action="confirm-picker"><span data-i18n="datepicker:text.036">确认时间</span></button>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
`;
