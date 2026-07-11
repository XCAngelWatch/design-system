/* AngelWatch Design System — page: feedback */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["feedback"] = `
<div class="content">
<section class="section" id="feedback">
  <p class="section-eyebrow"><span data-i18n="feedback:text.001">通用组件 · 反馈</span></p>
  <h2><span data-i18n="feedback:text.002">反馈 Feedback</span></h2>
  <p class="lede"><span data-i18n="feedback:text.003">提示横条用于持续性的状态信息；toast / message 用于瞬时操作反馈；modal 用于阻塞性的二次确认。下表是"什么时候用什么" 的决策表 —— PR review 出现"应该用 Toast 还是 Modal" 争议时回到这里。</span></p>

  <div class="subsection">
    <h3><span data-i18n="feedback:text.004">反馈层级决策表</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="feedback:text.005">类型</span></th><th style="width:22%"><span data-i18n="feedback:text.006">触发场景</span></th><th style="width:18%"><span data-i18n="feedback:text.007">是否阻塞</span></th><th style="width:18%"><span data-i18n="feedback:text.008">消失方式</span></th><th><span data-i18n="feedback:text.009">选用条件</span></th></tr></thead>
      <tbody>
        <tr><td><b>Toast / Message</b></td><td><span data-i18n="feedback:text.010">瞬时反馈 —— 保存成功 / 复制成功 / 已收藏</span></td><td><span data-i18n="feedback:text.011">否</span></td><td><span data-i18n="feedback:text.012">3 秒自动消失</span></td><td><span data-i18n="feedback:text.013">结果是</span><b><span data-i18n="feedback:text.014">成功</span></b><span data-i18n="feedback:text.015">且</span><b><span data-i18n="feedback:text.016">无需阅读</span></b><span data-i18n="feedback:text.017">；视觉位置顶部居中</span></td></tr>
        <tr><td><b>Notification</b></td><td><span data-i18n="feedback:text.018">系统主动推送 —— 告警 / 完成回报 / 提醒</span></td><td><span data-i18n="feedback:text.019">否</span></td><td><span data-i18n="feedback:text.020">需手动关闭</span></td><td><span data-i18n="feedback:text.021">用户没在等结果但需要知道；右上角栈，可堆 ≤ 3 条</span></td></tr>
        <tr><td><b><span data-i18n="feedback:text.022">Alert 横条</span></b></td><td><span data-i18n="feedback:text.023">持续状态 —— 系统升级中 / 试用期剩余 / 限制提示</span></td><td><span data-i18n="feedback:text.024">否</span></td><td><span data-i18n="feedback:text.025">常驻直到状态变更</span></td><td><span data-i18n="feedback:text.026">整页或区域级横条；不阻塞操作</span></td></tr>
        <tr><td><b><span data-i18n="feedback:text.027">Inline 校验</span></b></td><td><span data-i18n="feedback:text.028">表单字段错误 —— 邮箱格式 / 密码强度</span></td><td><span data-i18n="feedback:text.029">否</span></td><td><span data-i18n="feedback:text.030">用户修正后消失</span></td><td><span data-i18n="feedback:text.031">字段下方红色文案 + icon；表单提交时聚焦首个错误</span></td></tr>
        <tr><td><b>Popconfirm</b></td><td><span data-i18n="feedback:text.032">行内可逆操作 —— 删除一行 / 解绑单条</span></td><td><span data-i18n="feedback:text.033">是（行内）</span></td><td><span data-i18n="feedback:text.034">用户确认或取消</span></td><td><span data-i18n="feedback:text.035">影响范围 = 1 条记录；附在触发按钮旁</span></td></tr>
        <tr><td><b>Modal.confirm</b></td><td><span data-i18n="feedback:text.036">批量 / 不可逆 —— 删除 28 台 / 推送 OTA 包</span></td><td><span data-i18n="feedback:text.037">是（页面级）</span></td><td><span data-i18n="feedback:text.038">用户输入数量 + 确认</span></td><td><span data-i18n="feedback:text.039">影响 ≥ 2 条 或 不可逆；焦点默认在"取消"</span></td></tr>
        <tr><td><b><span data-i18n="feedback:text.040">Modal · 表单</span></b></td><td><span data-i18n="feedback:text.041">需要填写信息 —— 新建 / 编辑</span></td><td><span data-i18n="feedback:text.042">是</span></td><td><span data-i18n="feedback:text.043">提交或关闭</span></td><td><span data-i18n="feedback:text.044">字段 ≤ 8 个；超过用 Drawer 或独立页面</span></td></tr>
        <tr><td><b><span data-i18n="feedback:text.045">Result 页</span></b></td><td><span data-i18n="feedback:text.046">异步终态 —— 推送完成 / 部分成功 / 完全失败</span></td><td><span data-i18n="feedback:text.047">是（占位）</span></td><td><span data-i18n="feedback:text.048">用户确认或继续</span></td><td><span data-i18n="feedback:text.049">耗时 ≥ 5 秒的批量动作；必带 extra prop 给下一步</span></td></tr>
        <tr><td><b>ErrorPage</b></td><td><span data-i18n="feedback:text.050">整页失败 —— 404 / 403 / 500 / 离线</span></td><td><span data-i18n="feedback:text.051">是（替换）</span></td><td><span data-i18n="feedback:text.052">用户重试或导航</span></td><td><span data-i18n="feedback:text.053">请求层错误；带 traceId 便于审计</span></td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="feedback:text.054">三条硬规则：</span></b><span data-i18n="feedback:text.055">1) 错误结果</span><b><span data-i18n="feedback:text.056">禁用</span></b><span data-i18n="feedback:text.057"> Toast，必须 Modal / Result / ErrorPage；2) 不可逆操作</span><b><span data-i18n="feedback:text.058">禁用</span></b><span data-i18n="feedback:text.059"> Toast 替代 Modal.confirm；3) Notification 同时存在 ≤ 3 条，超出折叠。</span></p>
  </div>

  <div class="demo-stack">
    <div class="surface">
      <h3 class="card-title"><span data-i18n="feedback:text.060">Alert · 提示横条</span></h3>
      <div class="demo-grid">
        <div class="alert info"><div class="ico">i</div><div class="content"><strong><span data-i18n="feedback:text.061">OTA 计划已生成</span></strong><span data-i18n="feedback:text.062">共影响 1,284 台设备，将于今晚 02:00 开始推送。</span></div></div>
        <div class="alert success"><div class="ico">✓</div><div class="content"><strong><span data-i18n="feedback:text.063">推送成功</span></strong><span data-i18n="feedback:text.064">1,284 台设备已收到更新通知。</span></div></div>
        <div class="alert warning"><div class="ico">!</div><div class="content"><strong><span data-i18n="feedback:text.065">低电量预警</span></strong><span data-i18n="feedback:text.066">当前批次中 18 台设备电量低于 20%，可能升级失败。</span></div></div>
        <div class="alert error"><div class="ico">×</div><div class="content"><strong><span data-i18n="feedback:text.067">推送失败</span></strong><span data-i18n="feedback:text.068">34 台设备未确认接收，请稍后重试或查看设备日志。</span></div></div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title"><span data-i18n="feedback:text.069">Modal · 弹窗</span></h3>
      <div class="modal-stage">
        <div class="modal-demo">
          <div class="head"><h4><span data-i18n="feedback:text.070">确认删除设备</span></h4><span style="color:var(--aw-text-3);cursor:pointer;font-size:18px">×</span></div>
          <div class="body"><span data-i18n="feedback:text.071">将删除 </span><strong><span data-i18n="feedback:text.072">终端-上海-001</span></strong><span data-i18n="feedback:text.073"> 及其所有历史数据。此操作不可撤销，确认继续？</span></div>
          <div class="foot"><button class="btn"><span data-i18n="feedback:text.074">取消</span></button><button class="btn btn-danger"><span data-i18n="feedback:text.075">确认删除</span></button></div>
        </div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title"><span data-i18n="feedback:text.076">Empty · 空状态</span></h3>
      <div class="empty">
        <div class="glyph"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M12 8v8"/></svg></div>
        <div class="title"><span data-i18n="feedback:text.077">暂无设备</span></div>
        <div class="sub"><span data-i18n="feedback:text.078">尚未注册任何终端设备，先添加一台开始监控。</span></div>
        <button class="btn btn-primary"><span data-i18n="feedback:text.079">+ 添加设备</span></button>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="feedback:text.080">Modal · 复杂内嵌变体</span></h3>
    <p class="lede" style="margin-bottom:16px"><span data-i18n="feedback:text.081">日常确认场景用 360px 简单 Modal，业务复杂场景需要 ≥ 600px 含 tabs / 表单分组 / 内嵌选择 / 全屏。底部 action 始终右对齐，主按钮在最右。</span></p>

    <div class="modal-var-grid">
      <div class="mv-card">
        <div class="mv-cap"><span data-i18n="feedback:text.082">①  内嵌 Tabs · 设备详情快查</span></div>
        <div class="mv-body">
          <div class="modal-demo" style="width:560px;max-width:100%">
            <div class="head"><h4><span data-i18n="feedback:text.083">设备详情 · 终端-上海-001</span></h4><span style="cursor:pointer;color:var(--aw-text-3);font-size:18px">×</span></div>
            <div class="tabs" style="padding:0 14px;border-bottom:1px solid var(--aw-border-3)">
              <div class="tab is-active"><span data-i18n="feedback:text.084">基础信息</span></div>
              <div class="tab"><span data-i18n="feedback:text.085">实时状态</span></div>
              <div class="tab"><span data-i18n="feedback:text.086">操作日志 </span><span class="tag-meta" style="margin-left:4px">12</span></div>
              <div class="tab"><span data-i18n="feedback:text.087">告警 </span><span class="tag-meta" style="margin-left:4px;background:#FFF1F0;color:#CF1322">3</span></div>
            </div>
            <div class="body">
              <div class="form-demo">
                <div class="form-row"><div class="lbl">SN</div><div><code>DEV-86420075</code></div></div>
                <div class="form-row"><div class="lbl"><span data-i18n="feedback:text.088">机型</span></div><div>AW-Pro 5</div></div>
                <div class="form-row"><div class="lbl"><span data-i18n="feedback:text.089">所属</span></div><div><span data-i18n="feedback:text.090">上海 / 黄浦营业厅</span></div></div>
                <div class="form-row"><div class="lbl"><span data-i18n="feedback:text.091">系统版本</span></div><div>Android 13 · Patch 2025-09</div></div>
              </div>
            </div>
            <div class="foot"><button class="btn"><span data-i18n="feedback:text.092">关闭</span></button><button class="btn btn-primary"><span data-i18n="feedback:text.093">查看完整详情</span></button></div>
          </div>
        </div>
      </div>

      <div class="mv-card">
        <div class="mv-cap"><span data-i18n="feedback:text.094">②  内嵌表单分组 · 多 collapse panel</span></div>
        <div class="mv-body">
          <div class="modal-demo" style="width:560px;max-width:100%">
            <div class="head"><h4><span data-i18n="feedback:text.095">新建 OTA 策略</span></h4><span style="cursor:pointer;color:var(--aw-text-3);font-size:18px">×</span></div>
            <div class="body" style="max-height:280px;overflow:auto">
              <div class="cps-h"><span class="ar">▾</span><span data-i18n="feedback:text.096">基础信息</span><span class="cps-sub"><span data-i18n="feedback:text.097">名称 / 描述 / 适用机型</span></span></div>
              <div class="cps-c">
                <div class="form-row"><div class="lbl"><span class="req">*</span><span data-i18n="feedback:text.098">名称</span></div><div><input class="input" value="v3.5.0 灰度推送" data-i18n-value="feedback:attr.099.value" /></div></div>
                <div class="form-row"><div class="lbl"><span data-i18n="feedback:text.100">描述</span></div><div><input class="input" placeholder="可选" data-i18n-placeholder="feedback:attr.101.placeholder" /></div></div>
              </div>
              <div class="cps-h"><span class="ar">▾</span><span data-i18n="feedback:text.102">推送窗口</span><span class="cps-sub"><span data-i18n="feedback:text.103">时段 / 并发 / 重试</span></span></div>
              <div class="cps-c">
                <div class="form-row"><div class="lbl"><span data-i18n="feedback:text.104">时段</span></div><div><span data-i18n="feedback:text.105">02:00 - 06:00 (运维窗口)</span></div></div>
                <div class="form-row"><div class="lbl"><span data-i18n="feedback:text.106">并发</span></div><div><span data-i18n="feedback:text.107">200 台/批 · 3 批</span></div></div>
              </div>
              <div class="cps-h collapsed"><span class="ar">▸</span><span data-i18n="feedback:text.108">失败处理</span><span class="cps-sub"><span data-i18n="feedback:text.109">重试 / 跳过 / 通知</span></span></div>
            </div>
            <div class="foot"><button class="btn"><span data-i18n="feedback:text.110">取消</span></button><button class="btn"><span data-i18n="feedback:text.111">保存草稿</span></button><button class="btn btn-primary"><span data-i18n="feedback:text.112">下一步</span></button></div>
          </div>
        </div>
      </div>

      <div class="mv-card">
        <div class="mv-cap"><span data-i18n="feedback:text.113">③  内嵌表格选择 · 批量挑选设备</span></div>
        <div class="mv-body">
          <div class="modal-demo" style="width:680px;max-width:100%">
            <div class="head"><h4><span data-i18n="feedback:text.114">选择目标设备</span></h4><span style="cursor:pointer;color:var(--aw-text-3);font-size:18px">×</span></div>
            <div class="body" style="padding:0">
              <div style="padding:12px 16px;border-bottom:1px solid var(--aw-border-3);display:flex;gap:8px">
                <input class="input" placeholder="搜索设备名称 / SN" style="flex:1" data-i18n-placeholder="feedback:attr.115.placeholder" />
                <div class="select" style="min-width:120px"><span><span data-i18n="feedback:text.116">全部状态 ▾</span></span></div>
              </div>
              <table class="dt" style="border-radius:0;border:0">
                <thead><tr><th style="width:36px"><label class="check"><input type="checkbox" checked /><span class="box"></span></label></th><th><span data-i18n="feedback:text.117">设备名称</span></th><th>SN</th><th><span data-i18n="feedback:text.118">状态</span></th></tr></thead>
                <tbody>
                  <tr><td><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td><td><span data-i18n="feedback:text.119">终端-上海-001</span></td><td><code>DEV-86420075</code></td><td><span class="status-dot online"><span data-i18n="feedback:text.120">在线</span></span></td></tr>
                  <tr><td><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td><td><span data-i18n="feedback:text.121">终端-北京-014</span></td><td><code>DEV-86420089</code></td><td><span class="status-dot online"><span data-i18n="feedback:text.122">在线</span></span></td></tr>
                  <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="feedback:text.123">终端-广州-007</span></td><td><code>DEV-86420112</code></td><td><span class="status-dot offline"><span data-i18n="feedback:text.124">离线</span></span></td></tr>
                </tbody>
              </table>
              <div style="padding:8px 16px;border-top:1px solid var(--aw-border-3);font-size:12px;color:var(--aw-text-3)"><span data-i18n="feedback:text.125">已选 2 / 共 12,486 项 · 跨页选中</span></div>
            </div>
            <div class="foot"><button class="btn"><span data-i18n="feedback:text.126">取消</span></button><button class="btn btn-primary"><span data-i18n="feedback:text.127">确定（2）</span></button></div>
          </div>
        </div>
      </div>

      <div class="mv-card">
        <div class="mv-cap"><span data-i18n="feedback:text.128">④  全屏 Modal · 沉浸式编辑</span></div>
        <div class="mv-body">
          <div class="full-modal-frame">
            <div class="fm-h">
              <div class="fm-title"><span data-i18n="feedback:text.129">编辑 OTA 策略 · v3.5.0 灰度推送</span></div>
              <div class="fm-acts">
                <button class="btn"><span data-i18n="feedback:text.130">关闭</span></button>
                <button class="btn"><span data-i18n="feedback:text.131">保存草稿</span></button>
                <button class="btn btn-primary"><span data-i18n="feedback:text.132">发布</span></button>
              </div>
            </div>
            <div class="fm-body">
              <div class="fm-mock-graph"><span data-i18n="feedback:text.133">[策略流程图编辑区域 · @xyflow/react]</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="mv-card">
        <div class="mv-cap"><span data-i18n="feedback:text.134">⑤  多步 Modal · Wizard 在 Modal 内</span></div>
        <div class="mv-body">
          <div class="modal-demo" style="width:560px;max-width:100%">
            <div class="head"><h4><span data-i18n="feedback:text.135">批量推送向导</span></h4><span style="cursor:pointer;color:var(--aw-text-3);font-size:18px">×</span></div>
            <div style="padding:14px 16px 0">
              <div class="ls-steps">
                <div class="st done"><span data-i18n="feedback:text.136">①  选择策略</span></div><div class="st-line"></div>
                <div class="st act"><span data-i18n="feedback:text.137">②  确认目标</span></div><div class="st-line"></div>
                <div class="st"><span data-i18n="feedback:text.138">③  发布</span></div>
              </div>
            </div>
            <div class="body">
              <div style="font-size:13px;color:var(--aw-text-2);margin-bottom:12px"><span data-i18n="feedback:text.139">将向 </span><b><span data-i18n="feedback:text.140">1,284 台设备</span></b><span data-i18n="feedback:text.141"> 推送 </span><b><span data-i18n="feedback:text.142">v3.5.0 灰度策略</span></b><span data-i18n="feedback:text.162">。</span></div>
              <div class="alert warning" style="margin:0"><div class="ico">!</div><div class="content"><strong><span data-i18n="feedback:text.143">影响：</span></strong><span data-i18n="feedback:text.144">低电量设备 18 台将延后推送。当前批次预计耗时 4 小时。</span></div></div>
            </div>
            <div class="foot"><button class="btn"><span data-i18n="feedback:text.145">‹ 上一步</span></button><button class="btn btn-primary"><span data-i18n="feedback:text.146">下一步 ›</span></button></div>
          </div>
        </div>
      </div>
    </div>

    <div class="alert info" style="margin-top:14px"><div class="ico">i</div><div class="content"><strong><span data-i18n="feedback:text.147">底部按钮顺序：</span></strong><span data-i18n="feedback:text.148">左到右 = 取消 / 次操作（保存草稿 / 上一步）/ 主操作（提交 / 下一步）。主操作始终最右、primary 色。</span></div></div>
    <div class="alert warning" style="margin-top:8px"><div class="ico">!</div><div class="content"><strong><span data-i18n="feedback:text.149">Modal 内 Modal：</span></strong><span data-i18n="feedback:text.150">原则禁止。如必须二次确认（如"确定要放弃当前编辑吗？"），用 Popconfirm 嵌入到主 Modal 关闭按钮上。</span></div></div>
    <div class="alert info" style="margin-top:8px"><div class="ico">i</div><div class="content"><span data-i18n="feedback:text.151">详细 Modal vs Drawer 取舍参见 </span><a href="#/drawer" style="color:var(--aw-primary)"><span data-i18n="feedback:text.152">Drawer 章节</span></a><span data-i18n="feedback:text.162">。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="feedback:text.153">反馈模式 · 批量动作与部分成功</span></h3>
    <div class="bp-flow">
      <div class="bp-step"><div class="num">1</div><div class="name"><span data-i18n="feedback:text.154">动作前确认</span></div><div class="desc"><span data-i18n="feedback:text.155">推送、删除、重置、恢复出厂等强副作用操作使用 Modal.confirm，并明示影响数量。</span></div></div>
      <div class="bp-step"><div class="num">2</div><div class="name"><span data-i18n="feedback:text.156">执行中进度</span></div><div class="desc"><span data-i18n="feedback:text.157">大批量任务使用进度弹窗或任务详情页；Toast 只做启动成功提示。</span></div></div>
      <div class="bp-step"><div class="num">3</div><div class="name"><span data-i18n="feedback:text.158">终态 Result</span></div><div class="desc"><span data-i18n="feedback:text.159">完成、失败、部分成功都进入 Result 或详情卡；部分成功必须列出失败项。</span></div></div>
      <div class="bp-step"><div class="num">4</div><div class="name"><span data-i18n="feedback:text.160">下一步动作</span></div><div class="desc"><span data-i18n="feedback:text.161">提供重试失败项、下载失败清单、查看日志、返回列表，不让用户猜下一步。</span></div></div>
    </div>
  </div>
</section>
</div>
`;
