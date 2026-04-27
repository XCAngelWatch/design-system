/* AngelWatch Design System — page: ota-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["ota-page"] = `
<div class="content">
<section class="section" id="ota-page">
  <p class="section-eyebrow">Patterns · OTA 升级</p>
  <h2>OtaPage · OTA 固件管理</h2>
  <p class="lede">OTA(Over-The-Air)固件升级是 TMS 第二高频操作,关乎现网设备稳定。需呈现:固件包仓库 → 推送策略 → 设备级进度 → 失败回滚。本模板覆盖列表 + 详情两态 +"逐设备进度"实时面板。</p>

  <div class="demo-stack">
    <div class="surface" style="padding:0;overflow:hidden">
      <div style="padding:14px 18px;border-bottom:1px solid var(--aw-border-3);display:flex;justify-content:space-between;align-items:center">
        <h3 class="card-title" style="margin:0">OTA 任务列表</h3>
        <div class="row" style="gap:6px">
          <button class="btn btn-primary btn-sm">+ 创建升级任务</button>
          <button class="btn btn-sm">📦 固件仓库</button>
        </div>
      </div>

      <div class="table-wrap" style="border:0;border-radius:0">
        <table class="dt">
          <thead>
            <tr>
              <th>任务 / 版本</th>
              <th style="width:100px">机型</th>
              <th style="width:120px">目标设备</th>
              <th style="width:140px">推送策略</th>
              <th style="width:140px">总进度</th>
              <th style="width:100px">状态</th>
              <th style="width:140px" class="colactions">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>v3.5.0 灰度推送</strong>
                <div style="font-size:11px;color:var(--aw-text-3)">v3.4.2 → <span style="color:var(--aw-primary)">v3.5.0</span> · 245 MB</div>
              </td>
              <td>AW-Pro 5</td>
              <td>1,284 台</td>
              <td>分批 · 200 台/批</td>
              <td>
                <div class="progress" style="margin:0"><div class="track"><div class="fill" style="width:42%"></div></div><div class="pct">42%</div></div>
                <div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">540 ✓ · 18 ✕ · 726 ⏳</div>
              </td>
              <td><span class="status-dot upgrading">推送中</span></td>
              <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">暂停</button></td>
            </tr>
            <tr>
              <td>
                <strong>v3.4.2 全量</strong>
                <div style="font-size:11px;color:var(--aw-text-3)">v3.4.1 → v3.4.2 · 198 MB</div>
              </td>
              <td>AW-Pro 5 / 7</td>
              <td>12,486 台</td>
              <td>立即 · 无并发上限</td>
              <td>
                <div class="progress" style="margin:0"><div class="track"><div class="fill success" style="width:100%"></div></div><div class="pct">100%</div></div>
                <div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">12,438 ✓ · 48 ✕</div>
              </td>
              <td><span class="status-dot online">已完成</span></td>
              <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">回滚</button></td>
            </tr>
            <tr>
              <td>
                <strong>v3.5.0 测试机预热</strong>
                <div style="font-size:11px;color:var(--aw-text-3)">v3.4.2 → v3.5.0 · 245 MB</div>
              </td>
              <td>AW-Pro 5</td>
              <td>5 台</td>
              <td>定时 · 02:00 启动</td>
              <td><div style="font-size:12px;color:var(--aw-text-3)">⏰ 6 小时后开始</div></td>
              <td><span class="status-dot maint">已排程</span></td>
              <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">取消</button></td>
            </tr>
            <tr>
              <td>
                <strong>v3.4.0 紧急回滚</strong>
                <div style="font-size:11px;color:var(--aw-text-3)">v3.4.1 → <span style="color:var(--aw-danger)">v3.4.0</span> · 195 MB</div>
              </td>
              <td>AW-Pro 7</td>
              <td>34 台</td>
              <td>立即 · 应急通道</td>
              <td>
                <div class="progress" style="margin:0"><div class="track"><div class="fill danger" style="width:23%"></div></div><div class="pct">23%</div></div>
                <div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">7 ✓ · 17 ✕ · 10 ⏳</div>
              </td>
              <td><span class="status-dot fault">告警</span></td>
              <td class="colactions"><button class="btn btn-link">诊断</button><button class="btn btn-link">取消</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">任务详情 · 逐设备进度</h3>
      <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 14px">点击列表"详情"进入。摘要 + 5 个 Tab(基础信息 / 设备清单 / 实时进度 / 失败诊断 / 操作日志)。</p>

      <div class="surface" style="padding:18px;background:var(--aw-fill-1);margin-bottom:14px">
        <div class="row" style="gap:18px;align-items:flex-start">
          <div style="width:48px;height:48px;border-radius:8px;background:var(--aw-primary-bg);color:var(--aw-primary);display:grid;place-items:center;font-size:20px;font-weight:600">📦</div>
          <div style="flex:1">
            <div class="row" style="margin-bottom:8px">
              <strong style="font-size:16px">v3.5.0 灰度推送</strong>
              <span class="status-dot upgrading">推送中</span>
              <span class="tag tag-blue">AW-Pro 5</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px 24px;font-size:13px;color:var(--aw-text-2)">
              <div><div style="color:var(--aw-text-3);font-size:11px">目标版本</div>v3.4.2 → <code style="color:var(--aw-primary)">v3.5.0</code></div>
              <div><div style="color:var(--aw-text-3);font-size:11px">推送策略</div>分批 200/批</div>
              <div><div style="color:var(--aw-text-3);font-size:11px">设备总数</div>1,284 台</div>
              <div><div style="color:var(--aw-text-3);font-size:11px">已开始</div>2 分钟前</div>
              <div><div style="color:var(--aw-text-3);font-size:11px">成功</div><span style="color:var(--aw-success)">540 台</span></div>
              <div><div style="color:var(--aw-text-3);font-size:11px">失败</div><span style="color:var(--aw-danger)">18 台</span></div>
              <div><div style="color:var(--aw-text-3);font-size:11px">进行中</div>206 台</div>
              <div><div style="color:var(--aw-text-3);font-size:11px">待处理</div>520 台</div>
            </div>
          </div>
          <div class="row" style="gap:8px">
            <button class="btn btn-sm">暂停</button>
            <button class="btn btn-sm btn-danger">立即终止</button>
          </div>
        </div>
      </div>

      <div class="tabs">
        <a class="active">实时进度</a>
        <a>基础信息</a>
        <a>设备清单 (1284)</a>
        <a>失败诊断 <span class="tag-meta" style="margin-left:4px;background:#FAE3E3;color:#A8071A">18</span></a>
        <a>操作日志</a>
      </div>

      <div style="padding:14px 0 0">
        <div style="display:flex;flex-direction:column;gap:10px">
          <div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px"><span><strong>下载固件包</strong> · 245 MB</span><span class="mono" style="color:var(--aw-text-3)">540 / 540 · 100%</span></div><div class="progress" style="margin:0"><div class="track"><div class="fill success" style="width:100%"></div></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px"><span><strong>校验签名</strong> · SHA-256</span><span class="mono" style="color:var(--aw-text-3)">540 / 540 · 100%</span></div><div class="progress" style="margin:0"><div class="track"><div class="fill success" style="width:100%"></div></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px"><span><strong>安装升级</strong> · 重启中</span><span class="mono" style="color:var(--aw-text-3)">540 / 1,284 · 42%</span></div><div class="progress" style="margin:0"><div class="track"><div class="fill" style="width:42%"></div></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px"><span style="color:var(--aw-danger)"><strong>失败:</strong> 17 台校验失败 / 1 台空间不足</span><a style="color:var(--aw-primary);cursor:pointer">查看诊断 →</a></div><div class="progress" style="margin:0"><div class="track"><div class="fill danger" style="width:1.4%"></div></div></div></div>
        </div>
      </div>
    </div>

    <div class="surface">
      <h3 class="card-title">固件仓库视图</h3>
      <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 14px">左:版本树(按机型 / 通道分组),右:版本详情 + 下游推送任务。沿袭 TreeListLayout pattern。</p>
      <div class="row" style="gap:0;align-items:stretch;border:1px solid var(--aw-border-2);border-radius:6px;overflow:hidden">
        <div style="flex:0 0 220px;background:var(--aw-fill-1);border-right:1px solid var(--aw-border-2);padding:12px 0;font-size:12px">
          <div style="padding:6px 14px;font-weight:600;color:var(--aw-text-2)">▾ AW-Pro 5</div>
          <div style="padding:4px 28px;color:var(--aw-text-2)">▸ Stable</div>
          <div style="padding:4px 28px;background:var(--aw-primary-bg);color:var(--aw-primary);font-weight:500">▾ Beta</div>
          <div style="padding:3px 42px;color:var(--aw-primary)"><strong>v3.5.0</strong> <span class="tag-meta" style="background:#FAE3E3;color:#A8071A">最新</span></div>
          <div style="padding:3px 42px;color:var(--aw-text-2)">v3.4.2</div>
          <div style="padding:3px 42px;color:var(--aw-text-2)">v3.4.1</div>
          <div style="padding:6px 14px;font-weight:600;color:var(--aw-text-2)">▸ AW-Pro 7</div>
          <div style="padding:6px 14px;font-weight:600;color:var(--aw-text-2)">▸ AW-Mini</div>
        </div>
        <div style="flex:1;padding:14px 18px">
          <div class="row" style="margin-bottom:10px"><strong style="font-size:15px">v3.5.0 (Beta)</strong><span class="tag tag-orange">Beta</span><span class="tag-meta">2026-04-25 发布</span></div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px 24px;font-size:12px;color:var(--aw-text-2);margin-bottom:14px">
            <div><div style="color:var(--aw-text-3);font-size:11px">机型</div>AW-Pro 5</div>
            <div><div style="color:var(--aw-text-3);font-size:11px">大小</div>245 MB</div>
            <div><div style="color:var(--aw-text-3);font-size:11px">SHA-256</div><code style="font-size:10px">a3f2c8b1e9d4…</code></div>
            <div><div style="color:var(--aw-text-3);font-size:11px">关联推送任务</div>3 个</div>
            <div><div style="color:var(--aw-text-3);font-size:11px">已升级设备</div>540 / 1,284</div>
            <div><div style="color:var(--aw-text-3);font-size:11px">回滚率</div><span style="color:var(--aw-warning)">1.4%</span></div>
          </div>
          <div class="row" style="gap:6px"><button class="btn btn-primary btn-sm">+ 创建推送任务</button><button class="btn btn-sm">下载</button><button class="btn btn-sm btn-ghost-danger">下架</button></div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
`;
