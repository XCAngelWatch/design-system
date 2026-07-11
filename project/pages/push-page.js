/* AngelWatch Design System — page: push-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["push-page"] = `
<div class="content">
<section class="section" id="push-page">
  <p class="section-eyebrow"><span data-i18n="push-page:text.001">页面蓝图 · 推送任务</span></p>
  <h2><span data-i18n="push-page:text.002">推送任务 PushPage</span></h2>
  <p class="lede"><span data-i18n="push-page:text.003">推送任务页记录每个推送批次的时间、方式、目标设备和结果统计。成功、失败、部分成功都要给出可执行的下一步。</span></p>

  <div class="surface" style="padding:0;overflow:hidden">
    <!-- 工具栏 + 搜索 -->
    <div class="lp-toolbar">
      <div class="row" style="gap:12px;flex:1;min-width:0">
        <div style="min-width:160px"><label>SN</label><input class="input" placeholder="设备 SN 反查" data-i18n-placeholder="push-page:text.004" /></div>
        <div style="min-width:140px"><label><span data-i18n="push-page:text.005">状态</span></label><div class="select"><span><span data-i18n="push-page:text.006">全部 ▾</span></span></div></div>
        <button class="btn btn-primary btn-sm"><span data-i18n="push-page:text.007">查询</span></button>
        <button class="btn btn-sm"><span data-i18n="push-page:text.008">重置</span></button>
      </div>
      <button class="btn btn-text btn-sm" style="flex-shrink:0"><span data-i18n="push-page:text.009">← 返回</span></button>
    </div>

    <!-- 列:batchId / targetMode / createBy / pushTime / batchState / 操作 -->
    <div class="table-wrap" style="border:0;border-radius:0">
      <table class="dt">
        <thead>
          <tr>
            <th><span data-i18n="push-page:text.010">批次号</span></th>
            <th style="width:160px"><span data-i18n="push-page:text.011">推送方式</span></th>
            <th style="width:120px"><span data-i18n="push-page:text.012">操作人</span></th>
            <th style="width:160px"><span data-i18n="push-page:text.013">推送时间</span></th>
            <th style="width:100px"><span data-i18n="push-page:text.014">状态</span></th>
            <th style="width:140px" class="colactions"><span data-i18n="push-page:text.015">操作</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>BATCH-202604271425-A82F</code></td>
            <td><span data-i18n="push-page:text.016">按机型</span></td>
            <td><span data-i18n="push-page:text.017">运维-上海</span></td>
            <td>2026-04-27 14:25</td>
            <td><span class="status-dot online"><span data-i18n="push-page:text.018">已完成</span></span></td>
            <td class="colactions"><button class="btn btn-link"><span data-i18n="push-page:text.019">详情</span></button><button class="btn btn-link"><span data-i18n="push-page:text.020">设备清单</span></button></td>
          </tr>
          <tr>
            <td><code>BATCH-202604271418-7C03</code></td>
            <td><span data-i18n="push-page:text.021">按分组</span></td>
            <td><span data-i18n="push-page:text.022">运维-上海</span></td>
            <td>2026-04-27 14:18</td>
            <td><span class="status-dot upgrading"><span data-i18n="push-page:text.023">推送中</span></span></td>
            <td class="colactions"><button class="btn btn-link"><span data-i18n="push-page:text.024">详情</span></button><button class="btn btn-link"><span data-i18n="push-page:text.025">取消</span></button></td>
          </tr>
          <tr>
            <td><code>BATCH-202604271402-D419</code></td>
            <td><span data-i18n="push-page:text.026">当前及子机构</span></td>
            <td><span data-i18n="push-page:text.027">运维-北京</span></td>
            <td>2026-04-27 14:02</td>
            <td><span class="status-dot online"><span data-i18n="push-page:text.028">已完成</span></span></td>
            <td class="colactions"><button class="btn btn-link"><span data-i18n="push-page:text.029">详情</span></button><button class="btn btn-link"><span data-i18n="push-page:text.030">设备清单</span></button></td>
          </tr>
          <tr>
            <td><code>BATCH-202604271350-F88B</code></td>
            <td><span data-i18n="push-page:text.031">单设备</span></td>
            <td><span data-i18n="push-page:text.032">运维-广州</span></td>
            <td>2026-04-27 13:50</td>
            <td><span class="status-dot fault"><span data-i18n="push-page:text.033">部分失败</span></span></td>
            <td class="colactions"><button class="btn btn-link"><span data-i18n="push-page:text.034">详情</span></button><button class="btn btn-link"><span data-i18n="push-page:text.035">失败诊断</span></button></td>
          </tr>
          <tr>
            <td><code>BATCH-202604271320-2A14</code></td>
            <td><span data-i18n="push-page:text.036">全部</span></td>
            <td><span data-i18n="push-page:text.037">系统调度</span></td>
            <td>2026-04-27 13:20</td>
            <td><span class="status-dot online"><span data-i18n="push-page:text.038">已完成</span></span></td>
            <td class="colactions"><button class="btn btn-link"><span data-i18n="push-page:text.039">详情</span></button><button class="btn btn-link"><span data-i18n="push-page:text.040">设备清单</span></button></td>
          </tr>
          <tr>
            <td><code>BATCH-202604271215-9B7E</code></td>
            <td><span data-i18n="push-page:text.041">按设备号</span></td>
            <td><span data-i18n="push-page:text.042">运维-成都</span></td>
            <td>2026-04-27 12:15</td>
            <td><span class="status-dot offline"><span data-i18n="push-page:text.043">已撤回</span></span></td>
            <td class="colactions"><button class="btn btn-link"><span data-i18n="push-page:text.044">详情</span></button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="lp-pager">
      <span class="meta"><span data-i18n="push-page:text.045">共 1,284 条</span></span>
      <div class="pager"><button class="page">‹</button><button class="page is-active">1</button><button class="page">2</button><button class="page">3</button><button class="page">…</button><button class="page">25</button><button class="page">›</button></div>
    </div>
  </div>

  <div class="surface" style="margin-top:24px">
    <h3 class="card-title"><span data-i18n="push-page:text.046">设备推送结果统计</span></h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 12px"><span data-i18n="push-page:text.047">每个推送批次必须展示总数、执行中、成功、失败、已过期、已终止六态统计(对应后端 processingCount/successCount/failCount/expiredCount/terminatedCount)。统计区配 echarts 比例环,点击进入推送设备详情并默认筛选对应状态。</span></p>
    <div class="bp-grid">
      <div class="bp-card"><h4><span data-i18n="push-page:text.048">总数</span></h4><p><span class="mono">1,284</span> <span data-i18n="push-page:text.049">台目标设备。用于核对批次影响范围。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="push-page:text.050">成功</span></h4><p><span class="mono">1,216</span> <span data-i18n="push-page:text.051">台已确认接收。允许查看设备清单和导出结果。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="push-page:text.052">失败</span></h4><p><span class="mono">28</span> <span data-i18n="push-page:text.053">台执行失败。必须提供失败原因、重试失败项(</span><code>push_task_rePush</code> <span data-i18n="push-page:text.054">权限)和下载失败清单。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="push-page:text.055">已过期</span></h4><p><span class="mono">6</span> <span data-i18n="push-page:text.056">台超时未送达。不可重试,仅查看与导出。</span></p></div>
      <div class="bp-card"><h4><span data-i18n="push-page:text.057">已终止</span></h4><p><span class="mono">4</span> <span data-i18n="push-page:text.058">台被管理员终止(</span><code>push_task_terminate</code> <span data-i18n="push-page:text.059">权限)。已终止设备不可重试,任务状态可能从"已终止"再次变更,需明示。</span></p></div>
    </div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:12px 0 0"><span data-i18n="push-page:text.060">批量操作:选中设备后可</span> <b><span data-i18n="push-page:text.061">重新推送</span></b><span data-i18n="push-page:text.062">(仅失败/已过期生效)与</span> <b><span data-i18n="push-page:text.063">终止推送</span></b><span data-i18n="push-page:text.064">(仅执行中生效);取消推送仅对待执行生效。边界规则见</span> <a href="#/copywriting"><span data-i18n="push-page:text.065">文案规范</span></a><span data-i18n="push-page:text.086">。</span></p>
  </div>

  <div class="surface" style="margin-top:24px">
    <h3 class="card-title"><span data-i18n="push-page:text.066">推送方式 · targetMode 枚举</span></h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 12px"><span data-i18n="push-page:text.067">8 种 targetMode 定义"指令的目标范围"。前端按 batchState 渲染状态点,按 targetMode 渲染人类可读标签。</span></p>
    <table class="dt">
      <thead>
        <tr><th style="width:80px">key</th><th style="width:200px">value</th><th style="width:140px"><span data-i18n="push-page:text.068">显示标签</span></th><th><span data-i18n="push-page:text.069">语义 / 触发位置</span></th></tr>
      </thead>
      <tbody>
        <tr><td><code>0</code></td><td><code>device_no</code></td><td><span data-i18n="push-page:text.070">单设备</span></td><td><span data-i18n="push-page:text.071">设备详情页内的"快捷指令"按钮(单条)</span></td></tr>
        <tr><td><code>1</code></td><td><code>all</code></td><td><span data-i18n="push-page:text.072">全部</span></td><td><span data-i18n="push-page:text.073">系统级广播(慎用,仅超管)</span></td></tr>
        <tr><td><code>2</code></td><td><code>device_number</code></td><td><span data-i18n="push-page:text.074">按设备号</span></td><td><span data-i18n="push-page:text.075">多选设备列表勾选后批量</span></td></tr>
        <tr><td><code>3</code></td><td><code>device_model</code></td><td><span data-i18n="push-page:text.076">按机型</span></td><td><span data-i18n="push-page:text.077">OTA 升级最常用,定向某型号</span></td></tr>
        <tr><td><code>4</code></td><td><code>sys_version</code></td><td><span data-i18n="push-page:text.078">按系统版本</span></td><td><span data-i18n="push-page:text.079">定向某 Android 版本(灰度)</span></td></tr>
        <tr><td><code>5</code></td><td><code>group_device</code></td><td><span data-i18n="push-page:text.080">按分组</span></td><td><span data-i18n="push-page:text.081">按设备分组(部门 / 用途)</span></td></tr>
        <tr><td><code>6</code></td><td><code>current_includes_store</code></td><td><span data-i18n="push-page:text.082">当前及子机构</span></td><td><span data-i18n="push-page:text.083">含子机构递归</span></td></tr>
        <tr><td><code>7</code></td><td><code>current_store</code></td><td><span data-i18n="push-page:text.084">仅当前机构</span></td><td><span data-i18n="push-page:text.085">不含子机构</span></td></tr>
      </tbody>
    </table>
  </div>
</section>
</div>
`;
