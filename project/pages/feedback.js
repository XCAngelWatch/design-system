/* AngelWatch Design System — page: feedback */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["feedback"] = `
<div class="content">
<section class="section" id="feedback">
  <p class="section-eyebrow">Components · 反馈</p>
  <h2>Feedback</h2>
  <p class="lede">提示横条用于持续性的状态信息；toast / message 用于瞬时操作反馈；modal 用于阻塞性的二次确认。下表是"什么时候用什么" 的决策表 —— PR review 出现"应该用 Toast 还是 Modal" 争议时回到这里。</p>

  <div class="subsection">
    <h3>反馈层级决策表</h3>
    <table class="map-table">
      <thead><tr><th style="width:18%">类型</th><th style="width:22%">触发场景</th><th style="width:18%">是否阻塞</th><th style="width:18%">消失方式</th><th>选用条件</th></tr></thead>
      <tbody>
        <tr><td><b>Toast / Message</b></td><td>瞬时反馈 —— 保存成功 / 复制成功 / 已收藏</td><td>否</td><td>3 秒自动消失</td><td>结果是<b>成功</b>且<b>无需阅读</b>；视觉位置顶部居中</td></tr>
        <tr><td><b>Notification</b></td><td>系统主动推送 —— 告警 / 完成回报 / 提醒</td><td>否</td><td>需手动关闭</td><td>用户没在等结果但需要知道；右上角栈，可堆 ≤ 3 条</td></tr>
        <tr><td><b>Alert 横条</b></td><td>持续状态 —— 系统升级中 / 试用期剩余 / 限制提示</td><td>否</td><td>常驻直到状态变更</td><td>整页或区域级横条；不阻塞操作</td></tr>
        <tr><td><b>Inline 校验</b></td><td>表单字段错误 —— 邮箱格式 / 密码强度</td><td>否</td><td>用户修正后消失</td><td>字段下方红色文案 + icon；表单提交时聚焦首个错误</td></tr>
        <tr><td><b>Popconfirm</b></td><td>行内可逆操作 —— 删除一行 / 解绑单条</td><td>是（行内）</td><td>用户确认或取消</td><td>影响范围 = 1 条记录；附在触发按钮旁</td></tr>
        <tr><td><b>Modal.confirm</b></td><td>批量 / 不可逆 —— 删除 28 台 / 推送固件</td><td>是（页面级）</td><td>用户输入数量 + 确认</td><td>影响 ≥ 2 条 或 不可逆；焦点默认在"取消"</td></tr>
        <tr><td><b>Modal · 表单</b></td><td>需要填写信息 —— 新建 / 编辑</td><td>是</td><td>提交或关闭</td><td>字段 ≤ 8 个；超过用 Drawer 或独立页面</td></tr>
        <tr><td><b>Result 页</b></td><td>异步终态 —— 推送完成 / 部分成功 / 完全失败</td><td>是（占位）</td><td>用户确认或继续</td><td>耗时 ≥ 5 秒的批量动作；必带 extra prop 给下一步</td></tr>
        <tr><td><b>ErrorPage</b></td><td>整页失败 —— 404 / 403 / 500 / 离线</td><td>是（替换）</td><td>用户重试或导航</td><td>请求层错误；带 traceId 便于审计</td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">三条硬规则：</b>1) 错误结果<b>禁用</b> Toast，必须 Modal / Result / ErrorPage；2) 不可逆操作<b>禁用</b> Toast 替代 Modal.confirm；3) Notification 同时存在 ≤ 3 条，超出折叠。</p>
  </div>

  <div class="demo-stack">
    <div class="surface">
      <h3 class="card-title">Alert · 提示横条</h3>
      <div class="demo-grid">
        <div class="alert info"><div class="ico">i</div><div class="content"><strong>OTA 计划已生成</strong>共影响 1,284 台设备，将于今晚 02:00 开始推送。</div></div>
        <div class="alert success"><div class="ico">✓</div><div class="content"><strong>推送成功</strong>1,284 台设备已收到更新通知。</div></div>
        <div class="alert warning"><div class="ico">!</div><div class="content"><strong>低电量预警</strong>当前批次中 18 台设备电量低于 20%，可能升级失败。</div></div>
        <div class="alert error"><div class="ico">×</div><div class="content"><strong>推送失败</strong>34 台设备未确认接收，请稍后重试或查看故障日志。</div></div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">Modal · 弹窗</h3>
      <div class="modal-stage">
        <div class="modal-demo">
          <div class="head"><h4>确认删除设备</h4><span style="color:var(--aw-text-3);cursor:pointer;font-size:18px">×</span></div>
          <div class="body">将删除 <strong>终端-上海-001</strong> 及其所有历史数据。此操作不可撤销，确认继续？</div>
          <div class="foot"><button class="btn">取消</button><button class="btn btn-danger">确认删除</button></div>
        </div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">Empty · 空状态</h3>
      <div class="empty">
        <div class="glyph"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M12 8v8"/></svg></div>
        <div class="title">暂无设备</div>
        <div class="sub">尚未注册任何终端设备，先添加一台开始监控。</div>
        <button class="btn btn-primary">+ 添加设备</button>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>Modal · 复杂内嵌变体</h3>
    <p class="lede" style="margin-bottom:16px">日常确认场景用 360px 简单 Modal，业务复杂场景需要 ≥ 600px 含 tabs / 表单分组 / 内嵌选择 / 全屏。底部 action 始终右对齐，主按钮在最右。</p>

    <div class="modal-var-grid">
      <div class="mv-card">
        <div class="mv-cap">①  内嵌 Tabs · 设备详情快查</div>
        <div class="mv-body">
          <div class="modal-demo" style="width:560px;max-width:100%">
            <div class="head"><h4>设备详情 · 终端-上海-001</h4><span style="cursor:pointer;color:var(--aw-text-3);font-size:18px">×</span></div>
            <div class="tabs" style="padding:0 14px;border-bottom:1px solid var(--aw-border-3)">
              <div class="tab is-active">基础信息</div>
              <div class="tab">实时状态</div>
              <div class="tab">操作日志 <span class="tag-meta" style="margin-left:4px">12</span></div>
              <div class="tab">告警 <span class="tag-meta" style="margin-left:4px;background:#FFF1F0;color:#CF1322">3</span></div>
            </div>
            <div class="body">
              <div class="form-demo">
                <div class="form-row"><div class="lbl">SN</div><div><code>DEV-86420075</code></div></div>
                <div class="form-row"><div class="lbl">机型</div><div>AW-Pro 5</div></div>
                <div class="form-row"><div class="lbl">所属</div><div>上海 / 黄浦营业厅</div></div>
                <div class="form-row"><div class="lbl">系统版本</div><div>Android 13 · Patch 2025-09</div></div>
              </div>
            </div>
            <div class="foot"><button class="btn">关闭</button><button class="btn btn-primary">查看完整详情</button></div>
          </div>
        </div>
      </div>

      <div class="mv-card">
        <div class="mv-cap">②  内嵌表单分组 · 多 collapse panel</div>
        <div class="mv-body">
          <div class="modal-demo" style="width:560px;max-width:100%">
            <div class="head"><h4>新建 OTA 策略</h4><span style="cursor:pointer;color:var(--aw-text-3);font-size:18px">×</span></div>
            <div class="body" style="max-height:280px;overflow:auto">
              <div class="cps-h"><span class="ar">▾</span>基础信息<span class="cps-sub">名称 / 描述 / 适用机型</span></div>
              <div class="cps-c">
                <div class="form-row"><div class="lbl"><span class="req">*</span>名称</div><div><input class="input" value="v3.5.0 灰度推送" /></div></div>
                <div class="form-row"><div class="lbl">描述</div><div><input class="input" placeholder="可选" /></div></div>
              </div>
              <div class="cps-h"><span class="ar">▾</span>推送窗口<span class="cps-sub">时段 / 并发 / 重试</span></div>
              <div class="cps-c">
                <div class="form-row"><div class="lbl">时段</div><div>02:00 - 06:00 (运维窗口)</div></div>
                <div class="form-row"><div class="lbl">并发</div><div>200 台/批 · 3 批</div></div>
              </div>
              <div class="cps-h collapsed"><span class="ar">▸</span>失败处理<span class="cps-sub">重试 / 跳过 / 通知</span></div>
            </div>
            <div class="foot"><button class="btn">取消</button><button class="btn">保存草稿</button><button class="btn btn-primary">下一步</button></div>
          </div>
        </div>
      </div>

      <div class="mv-card">
        <div class="mv-cap">③  内嵌表格选择 · 批量挑选设备</div>
        <div class="mv-body">
          <div class="modal-demo" style="width:680px;max-width:100%">
            <div class="head"><h4>选择目标设备</h4><span style="cursor:pointer;color:var(--aw-text-3);font-size:18px">×</span></div>
            <div class="body" style="padding:0">
              <div style="padding:12px 16px;border-bottom:1px solid var(--aw-border-3);display:flex;gap:8px">
                <input class="input" placeholder="搜索设备名称 / SN" style="flex:1" />
                <div class="select" style="min-width:120px"><span>全部状态 ▾</span></div>
              </div>
              <table class="dt" style="border-radius:0;border:0">
                <thead><tr><th style="width:36px"><label class="check"><input type="checkbox" checked /><span class="box"></span></label></th><th>设备名称</th><th>SN</th><th>状态</th></tr></thead>
                <tbody>
                  <tr><td><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td><td>终端-上海-001</td><td><code>DEV-86420075</code></td><td><span class="status-dot online">在线</span></td></tr>
                  <tr><td><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td><td>终端-北京-014</td><td><code>DEV-86420089</code></td><td><span class="status-dot online">在线</span></td></tr>
                  <tr><td><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td>终端-广州-007</td><td><code>DEV-86420112</code></td><td><span class="status-dot offline">离线</span></td></tr>
                </tbody>
              </table>
              <div style="padding:8px 16px;border-top:1px solid var(--aw-border-3);font-size:12px;color:var(--aw-text-3)">已选 2 / 共 12,486 项 · 跨页选中</div>
            </div>
            <div class="foot"><button class="btn">取消</button><button class="btn btn-primary">确定（2）</button></div>
          </div>
        </div>
      </div>

      <div class="mv-card">
        <div class="mv-cap">④  全屏 Modal · 沉浸式编辑</div>
        <div class="mv-body">
          <div class="full-modal-frame">
            <div class="fm-h">
              <div class="fm-title">编辑 OTA 策略 · v3.5.0 灰度推送</div>
              <div class="fm-acts">
                <button class="btn">关闭</button>
                <button class="btn">保存草稿</button>
                <button class="btn btn-primary">发布</button>
              </div>
            </div>
            <div class="fm-body">
              <div class="fm-mock-graph">[策略流程图编辑区域 · @xyflow/react]</div>
            </div>
          </div>
        </div>
      </div>

      <div class="mv-card">
        <div class="mv-cap">⑤  多步 Modal · Wizard 在 Modal 内</div>
        <div class="mv-body">
          <div class="modal-demo" style="width:560px;max-width:100%">
            <div class="head"><h4>批量推送向导</h4><span style="cursor:pointer;color:var(--aw-text-3);font-size:18px">×</span></div>
            <div style="padding:14px 16px 0">
              <div class="ls-steps">
                <div class="st done">①  选择策略</div><div class="st-line"></div>
                <div class="st act">②  确认目标</div><div class="st-line"></div>
                <div class="st">③  发布</div>
              </div>
            </div>
            <div class="body">
              <div style="font-size:13px;color:var(--aw-text-2);margin-bottom:12px">将向 <b>1,284 台设备</b> 推送 <b>v3.5.0 灰度策略</b>。</div>
              <div class="alert warning" style="margin:0"><div class="ico">!</div><div class="content"><strong>影响：</strong>低电量设备 18 台将延后推送。当前批次预计耗时 4 小时。</div></div>
            </div>
            <div class="foot"><button class="btn">‹ 上一步</button><button class="btn btn-primary">下一步 ›</button></div>
          </div>
        </div>
      </div>
    </div>

    <div class="alert info" style="margin-top:14px"><div class="ico">i</div><div class="content"><strong>底部按钮顺序：</strong>左到右 = 取消 / 次操作（保存草稿 / 上一步）/ 主操作（提交 / 下一步）。主操作始终最右、primary 色。</div></div>
    <div class="alert warning" style="margin-top:8px"><div class="ico">!</div><div class="content"><strong>Modal 内 Modal：</strong>原则禁止。如必须二次确认（如"确定要放弃当前编辑吗？"），用 Popconfirm 嵌入到主 Modal 关闭按钮上。</div></div>
    <div class="alert info" style="margin-top:8px"><div class="ico">i</div><div class="content">详细 Modal vs Drawer 取舍参见 <a href="#/drawer" style="color:var(--aw-primary)">Drawer 章节</a>。</div></div>
  </div>
</section>
</div>
`;
