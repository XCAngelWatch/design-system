/* AngelWatch Design System — page: push-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["push-page"] = `
<div class="content">
<section class="section" id="push-page">
  <p class="section-eyebrow">Patterns · 推送中心</p>
  <h2>PushPage · 消息推送</h2>
  <p class="lede">TMS 最高频的批量操作页面。沿袭旧 Vue 项目 40+ 推送指令(Wi-Fi / GPS / 应用安装 / 文件下发 / 密码 / 重启 / 远程清除 等)。统一为 <b>选择目标设备 → 选择指令类型 → 配置参数 → 执行 → 跟踪结果</b> 五步流程,降低运维心智负担。</p>

  <div class="demo-stack">
    <div class="surface" style="padding:0;overflow:hidden">
      <div style="padding:14px 18px;border-bottom:1px solid var(--aw-border-3);display:flex;justify-content:space-between;align-items:center">
        <div style="display:flex;gap:10px;align-items:center">
          <h3 class="card-title" style="margin:0">推送任务列表</h3>
          <span class="tag-meta">共 1,284 条</span>
        </div>
        <div class="row" style="gap:6px">
          <button class="btn btn-primary btn-sm">+ 新建推送</button>
          <button class="btn btn-sm">批量取消</button>
          <button class="btn btn-sm">⊞ 列设置</button>
        </div>
      </div>

      <div style="padding:12px 18px;background:var(--aw-fill-1);display:grid;grid-template-columns:repeat(5,1fr) auto;gap:10px;align-items:end;border-bottom:1px solid var(--aw-border-3)">
        <div><label style="font-size:11px;color:var(--aw-text-3);display:block;margin-bottom:4px">任务名称</label><input class="input" placeholder="搜索任务名 / ID" /></div>
        <div><label style="font-size:11px;color:var(--aw-text-3);display:block;margin-bottom:4px">指令类型</label><div class="select"><span>全部 ▾</span></div></div>
        <div><label style="font-size:11px;color:var(--aw-text-3);display:block;margin-bottom:4px">状态</label><div class="select"><span>全部 ▾</span></div></div>
        <div><label style="font-size:11px;color:var(--aw-text-3);display:block;margin-bottom:4px">创建人</label><input class="input" placeholder="工号 / 姓名" /></div>
        <div><label style="font-size:11px;color:var(--aw-text-3);display:block;margin-bottom:4px">时间范围</label><div class="select"><span>近 7 天 ▾</span></div></div>
        <div class="row" style="gap:6px"><button class="btn btn-sm">重置</button><button class="btn btn-primary btn-sm">查询</button></div>
      </div>

      <div class="table-wrap" style="border:0;border-radius:0">
        <table class="dt">
          <thead>
            <tr>
              <th style="width:36px"><label class="check"><input type="checkbox" /><span class="box"></span></label></th>
              <th>任务名称</th>
              <th style="width:110px">指令类型</th>
              <th style="width:100px">目标设备</th>
              <th style="width:120px">进度</th>
              <th style="width:100px">状态</th>
              <th style="width:120px">创建人 · 时间</th>
              <th style="width:160px" class="colactions">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td>
              <td><strong>v3.5.0 灰度推送</strong><div style="font-size:11px;color:var(--aw-text-3)">PUSH-2026-04-27-001</div></td>
              <td><span class="tag tag-blue">OTA 升级</span></td>
              <td>1,284 台</td>
              <td><div class="progress" style="margin:0"><div class="track"><div class="fill" style="width:42%"></div></div><div class="pct">42%</div></div></td>
              <td><span class="status-dot upgrading">推送中</span></td>
              <td>运维-上海<div style="font-size:11px;color:var(--aw-text-3)">2 分钟前</div></td>
              <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">取消</button><button class="btn btn-link">日志</button></td>
            </tr>
            <tr>
              <td><label class="check"><input type="checkbox" /><span class="box"></span></label></td>
              <td><strong>晨会广播</strong><div style="font-size:11px;color:var(--aw-text-3)">PUSH-2026-04-27-002</div></td>
              <td><span class="tag tag-purple">消息推送</span></td>
              <td>3,058 台</td>
              <td><div class="progress" style="margin:0"><div class="track"><div class="fill success" style="width:100%"></div></div><div class="pct">100%</div></div></td>
              <td><span class="status-dot online">已完成</span></td>
              <td>调度-北京<div style="font-size:11px;color:var(--aw-text-3)">10 分钟前</div></td>
              <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">回放</button></td>
            </tr>
            <tr>
              <td><label class="check"><input type="checkbox" /><span class="box"></span></label></td>
              <td><strong>关闭蓝牙</strong><div style="font-size:11px;color:var(--aw-text-3)">PUSH-2026-04-27-003</div></td>
              <td><span class="tag tag-cyan">外设控制</span></td>
              <td>86 台</td>
              <td><div class="progress" style="margin:0"><div class="track"><div class="fill warning" style="width:78%"></div></div><div class="pct">78%</div></div></td>
              <td><span class="status-dot upgrading">推送中</span></td>
              <td>运维-广州<div style="font-size:11px;color:var(--aw-text-3)">12 分钟前</div></td>
              <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">取消</button></td>
            </tr>
            <tr>
              <td><label class="check"><input type="checkbox" /><span class="box"></span></label></td>
              <td><strong>清除应用数据 · 微信</strong><div style="font-size:11px;color:var(--aw-text-3)">PUSH-2026-04-27-004</div></td>
              <td><span class="tag tag-orange">应用管理</span></td>
              <td>4 台</td>
              <td><div class="progress" style="margin:0"><div class="track"><div class="fill danger" style="width:25%"></div></div><div class="pct">25%</div></div></td>
              <td><span class="status-dot fault">3 台失败</span></td>
              <td>运维-成都<div style="font-size:11px;color:var(--aw-text-3)">1 小时前</div></td>
              <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">重试</button></td>
            </tr>
            <tr>
              <td><label class="check"><input type="checkbox" /><span class="box"></span></label></td>
              <td><strong>v3.4.2 全量推送</strong><div style="font-size:11px;color:var(--aw-text-3)">PUSH-2026-04-26-128</div></td>
              <td><span class="tag tag-blue">OTA 升级</span></td>
              <td>12,486 台</td>
              <td><div class="progress" style="margin:0"><div class="track"><div class="fill success" style="width:100%"></div></div><div class="pct">100%</div></div></td>
              <td><span class="status-dot online">已完成</span></td>
              <td>系统调度<div style="font-size:11px;color:var(--aw-text-3)">昨日 02:00</div></td>
              <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">回放</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="padding:10px 18px;display:flex;justify-content:space-between;align-items:center">
        <div style="font-size:12px;color:var(--aw-text-3)">已选 1 项 · 共 1,284 条</div>
        <div class="pager"><span class="total">共 1,284 项</span><button class="page">‹</button><button class="page is-active">1</button><button class="page">2</button><button class="page">3</button><button class="page">…</button><button class="page">25</button><button class="page">›</button></div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">指令类型 · 沿袭旧项目 40+ 命令</h3>
      <div class="cmd-grid">
        <div class="cmd-cat"><div class="cmd-cat-h">📱 应用管理</div><div class="cmd-list"><span>静默安装</span><span>静默卸载</span><span>清除数据</span><span>隐藏应用</span><span>启停应用</span></div></div>
        <div class="cmd-cat"><div class="cmd-cat-h">📡 网络外设</div><div class="cmd-list"><span>Wi-Fi 配置</span><span>蓝牙开关</span><span>GPS 开关</span><span>热点设置</span><span>流量控制</span></div></div>
        <div class="cmd-cat"><div class="cmd-cat-h">🔧 系统控制</div><div class="cmd-list"><span>重启</span><span>恢复出厂</span><span>远程清除</span><span>桌面快捷</span><span>状态栏</span></div></div>
        <div class="cmd-cat"><div class="cmd-cat-h">📥 文件 / 升级</div><div class="cmd-list"><span>OTA 升级</span><span>文件下发</span><span>资源包</span><span>固件回滚</span></div></div>
        <div class="cmd-cat"><div class="cmd-cat-h">🔒 安全 / 凭证</div><div class="cmd-list"><span>设备密码</span><span>用户证书</span><span>权限申请</span><span>清除告警</span></div></div>
        <div class="cmd-cat"><div class="cmd-cat-h">💬 信息推送</div><div class="cmd-list"><span>消息广播</span><span>音频广播</span><span>设备查找</span><span>扫码授权</span></div></div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">新建推送 · Modal 嵌 Wizard</h3>
      <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 14px">推送是不可逆操作,必须通过 4 步向导:选目标 → 选指令 → 配参数 → 确认。底部 Step 实时反馈,允许返回修改。</p>
      <div class="modal-stage" style="padding:24px">
        <div class="modal-demo" style="width:680px;max-width:100%">
          <div class="head"><h4>新建推送任务</h4><span style="cursor:pointer;color:var(--aw-text-3);font-size:18px">×</span></div>
          <div style="padding:14px 16px 0;border-bottom:1px solid var(--aw-border-3)">
            <div class="ls-steps">
              <div class="st done">①  选择目标</div><div class="st-line"></div>
              <div class="st done">②  选择指令</div><div class="st-line"></div>
              <div class="st act">③  配置参数</div><div class="st-line"></div>
              <div class="st">④  确认提交</div>
            </div>
          </div>
          <div class="body">
            <div class="form-demo">
              <div class="form-row"><div class="lbl"><span class="req">*</span>指令类型</div><div><div class="select" style="width:100%"><span>OTA 升级 ▾</span></div></div></div>
              <div class="form-row"><div class="lbl"><span class="req">*</span>固件包</div><div><input class="input" value="firmware-v3.5.0.zip · 245 MB" /><div class="help">选择 .zip 包,系统会自动校验签名</div></div></div>
              <div class="form-row"><div class="lbl">推送窗口</div><div><div class="select" style="width:100%"><span>立即推送 ▾</span></div></div></div>
              <div class="form-row"><div class="lbl">并发上限</div><div><input class="input" value="200 台/批" /><div class="help">分批推送降低服务器压力,建议 ≤ 200</div></div></div>
              <div class="form-row"><div class="lbl">失败重试</div><div><div class="select" style="width:100%"><span>尝试 3 次 · 间隔 5 分钟 ▾</span></div></div></div>
            </div>
            <div class="alert warning" style="margin:12px 0 0"><div class="ico">!</div><div class="content"><strong>影响范围:</strong>已选 1,284 台设备,其中 18 台电量低于 20%(将延后推送)、12 台离线(跳过)。</div></div>
          </div>
          <div class="foot">
            <button class="btn">‹ 上一步</button>
            <button class="btn">保存草稿</button>
            <button class="btn btn-primary">下一步 ›</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
`;
