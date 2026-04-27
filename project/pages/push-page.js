/* AngelWatch Design System — page: push-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["push-page"] = `
<div class="content">
<section class="section" id="push-page">
  <p class="section-eyebrow">Patterns · 推送日志</p>
  <h2>PushPage · 推送批次记录</h2>
  <p class="lede">TMS 所有"批量下发"操作(40+ 子指令:Wi-Fi 配置 / GPS 开关 / 应用安装 / 文件下发 / 重启 / 远程清除 …)统一汇聚到一张<b>批次日志表</b>。每条记录对应一次"按 X 推送指令到 N 台设备"的事务,运维通过 batchId 反查任意推送的设备清单 / 成功率 / 失败原因。本页是<b>只读审计视图</b>,创建推送在各子指令模块自身。</p>

  <div class="surface" style="padding:0;overflow:hidden">
    <!-- 工具栏 + 搜索 -->
    <div class="lp-toolbar">
      <div class="row" style="gap:12px;flex:1;min-width:0">
        <div style="min-width:160px"><label>SN</label><input class="input" placeholder="设备 SN 反查" /></div>
        <div style="min-width:140px"><label>状态</label><div class="select"><span>全部 ▾</span></div></div>
        <button class="btn btn-primary btn-sm">查询</button>
        <button class="btn btn-sm">重置</button>
      </div>
      <button class="btn btn-text btn-sm" style="flex-shrink:0">← 返回</button>
    </div>

    <!-- 列严格沿袭旧项目 push/components/log.vue 的 columns: batchId / targetMode / createBy / pushTime / batchState / 操作 -->
    <div class="table-wrap" style="border:0;border-radius:0">
      <table class="dt">
        <thead>
          <tr>
            <th>批次 ID</th>
            <th style="width:160px">推送方式</th>
            <th style="width:120px">操作人</th>
            <th style="width:160px">推送时间</th>
            <th style="width:100px">状态</th>
            <th style="width:140px" class="colactions">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>BATCH-202604271425-A82F</code></td>
            <td>按机型</td>
            <td>运维-上海</td>
            <td>2026-04-27 14:25</td>
            <td><span class="status-dot online">已完成</span></td>
            <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">设备清单</button></td>
          </tr>
          <tr>
            <td><code>BATCH-202604271418-7C03</code></td>
            <td>按分组</td>
            <td>运维-上海</td>
            <td>2026-04-27 14:18</td>
            <td><span class="status-dot upgrading">推送中</span></td>
            <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">取消</button></td>
          </tr>
          <tr>
            <td><code>BATCH-202604271402-D419</code></td>
            <td>当前及子站点</td>
            <td>调度-北京</td>
            <td>2026-04-27 14:02</td>
            <td><span class="status-dot online">已完成</span></td>
            <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">设备清单</button></td>
          </tr>
          <tr>
            <td><code>BATCH-202604271350-F88B</code></td>
            <td>单设备</td>
            <td>运维-广州</td>
            <td>2026-04-27 13:50</td>
            <td><span class="status-dot fault">部分失败</span></td>
            <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">失败诊断</button></td>
          </tr>
          <tr>
            <td><code>BATCH-202604271320-2A14</code></td>
            <td>全部</td>
            <td>系统调度</td>
            <td>2026-04-27 13:20</td>
            <td><span class="status-dot online">已完成</span></td>
            <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">设备清单</button></td>
          </tr>
          <tr>
            <td><code>BATCH-202604271215-9B7E</code></td>
            <td>按设备号</td>
            <td>运维-成都</td>
            <td>2026-04-27 12:15</td>
            <td><span class="status-dot offline">已撤回</span></td>
            <td class="colactions"><button class="btn btn-link">详情</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="lp-pager">
      <span class="meta">共 1,284 条</span>
      <div class="pager"><button class="page">‹</button><button class="page is-active">1</button><button class="page">2</button><button class="page">3</button><button class="page">…</button><button class="page">25</button><button class="page">›</button></div>
    </div>
  </div>

  <div class="surface" style="margin-top:24px">
    <h3 class="card-title">推送方式 · targetMode 枚举</h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 12px">沿袭旧项目 <code>push/components/pushMap.js</code> 的 8 种 targetMode,定义"指令的目标范围"。前端按 batchState 渲染状态点,按 targetMode 渲染人类可读标签。</p>
    <table class="dt">
      <thead>
        <tr><th style="width:80px">key</th><th style="width:200px">value</th><th style="width:140px">中文</th><th>语义 / 触发位置</th></tr>
      </thead>
      <tbody>
        <tr><td><code>0</code></td><td><code>device_no</code></td><td>单设备</td><td>设备详情页内的"快捷指令"按钮(单条)</td></tr>
        <tr><td><code>1</code></td><td><code>all</code></td><td>全部</td><td>系统级广播(慎用,仅超管)</td></tr>
        <tr><td><code>2</code></td><td><code>device_number</code></td><td>按设备号</td><td>多选设备列表勾选后批量</td></tr>
        <tr><td><code>3</code></td><td><code>device_model</code></td><td>按机型</td><td>OTA 升级最常用,定向某型号</td></tr>
        <tr><td><code>4</code></td><td><code>sys_version</code></td><td>按系统版本</td><td>定向某 Android 版本(灰度)</td></tr>
        <tr><td><code>5</code></td><td><code>group_device</code></td><td>按分组</td><td>按设备分组(部门 / 用途)</td></tr>
        <tr><td><code>6</code></td><td><code>current_includes_store</code></td><td>当前及子站点</td><td>含子站点递归</td></tr>
        <tr><td><code>7</code></td><td><code>current_store</code></td><td>仅当前站点</td><td>不含子站点</td></tr>
      </tbody>
    </table>
  </div>
</section>
</div>
`;
