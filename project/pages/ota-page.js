/* AngelWatch Design System — page: ota-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["ota-page"] = `
<div class="content">
<section class="section" id="ota-page">
  <p class="section-eyebrow">Patterns · OTA 升级</p>
  <h2>OtaPage · 固件管理</h2>
  <p class="lede">沿袭旧 <code>views/ota/index.vue</code>:<b>左侧站点树 + 右侧固件列表</b>,支持<b>列表/卡片视图切换</b>。每条固件记录(name / 站点 / 新版本 / 基线版本 / 大小 / 适配机型 / 状态)对应一次推送任务的源,通过工具栏"推送日志"按钮跳到 PushPage 查看历史批次。</p>

  <div class="surface" style="padding:0;overflow:hidden">
    <div style="display:flex;align-items:stretch;height:560px">
      <!-- 左:站点树(对应旧 simpleTree, store_list) -->
      <div class="ota-tree">
        <div class="ot-h">
          <strong>站点列表</strong>
          <button class="btn btn-text btn-sm" style="padding:0 4px">⟳</button>
        </div>
        <div class="ot-search"><input class="input" placeholder="搜索站点" /></div>
        <div class="ot-list">
          <div class="ot-row"><span class="ot-arrow">▾</span><span>集团总部</span><span class="ot-count">128</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▾</span><span>华东大区</span><span class="ot-count">42</span></div>
          <div class="ot-row sub2 act"><span>上海运营中心</span><span class="ot-count">12</span></div>
          <div class="ot-row sub2"><span>杭州分中心</span><span class="ot-count">8</span></div>
          <div class="ot-row sub2"><span>南京营业厅</span><span class="ot-count">6</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▸</span><span>华北大区</span><span class="ot-count">38</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▸</span><span>华南大区</span><span class="ot-count">30</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▸</span><span>西南大区</span><span class="ot-count">18</span></div>
        </div>
      </div>

      <!-- 右:固件列表 -->
      <div class="ota-main">
        <!-- 搜索表单 -->
        <div class="lp-toolbar">
          <div class="row" style="gap:12px;flex:1;min-width:0">
            <div style="min-width:140px"><label>名称</label><input class="input" placeholder="固件名称" /></div>
            <div style="min-width:140px"><label>新版本</label><input class="input" placeholder="如 v3.5.0" /></div>
            <div style="min-width:140px"><label>基线版本</label><input class="input" placeholder="如 v3.4.2" /></div>
            <button class="btn btn-primary btn-sm">查询</button>
            <button class="btn btn-sm">重置</button>
          </div>
        </div>

        <!-- 工具栏 -->
        <div class="lp-actions">
          <div class="row" style="gap:6px">
            <button class="btn btn-primary btn-sm">+ 新增</button>
            <button class="btn btn-sm">推送日志</button>
          </div>
          <div class="row" style="gap:6px">
            <button class="btn-icn" title="刷新">⟳</button>
            <button class="btn-icn act" title="表格视图">☰</button>
            <button class="btn-icn" title="卡片视图">⊞</button>
            <button class="btn-icn" title="列设置">⚙</button>
          </div>
        </div>

        <!-- 表格(沿袭旧项目 columns: name / store / new_version / base_version / size / adapter_model / create_time / state / operate) -->
        <div class="table-wrap" style="border:0;border-radius:0;flex:1;overflow:auto">
          <table class="dt">
            <thead>
              <tr>
                <th>名称</th>
                <th style="width:120px">站点</th>
                <th style="width:120px">新版本</th>
                <th style="width:120px">基线版本</th>
                <th style="width:80px">大小</th>
                <th style="width:120px">适配机型</th>
                <th style="width:140px">创建时间</th>
                <th style="width:100px">状态</th>
                <th style="width:140px" class="colactions">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>v3.5.0 灰度推送</strong></td>
                <td>上海运营中心</td>
                <td><code style="color:var(--aw-primary)">v3.5.0</code></td>
                <td><code>v3.4.2</code></td>
                <td>245 MB</td>
                <td>AW-Pro 5</td>
                <td>2026-04-27 09:12</td>
                <td><span class="status-dot upgrading">推送中</span></td>
                <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">推送</button></td>
              </tr>
              <tr>
                <td><strong>v3.4.2 全量包</strong></td>
                <td>集团总部</td>
                <td><code>v3.4.2</code></td>
                <td><code>v3.4.1</code></td>
                <td>198 MB</td>
                <td>AW-Pro 5/7</td>
                <td>2026-04-26 02:00</td>
                <td><span class="status-dot online">已完成</span></td>
                <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">推送</button></td>
              </tr>
              <tr>
                <td><strong>v3.5.0 测试机</strong></td>
                <td>上海运营中心</td>
                <td><code>v3.5.0</code></td>
                <td><code>v3.4.2</code></td>
                <td>245 MB</td>
                <td>AW-Pro 5</td>
                <td>2026-04-25 18:30</td>
                <td><span class="status-dot maint">已排程</span></td>
                <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">编辑</button></td>
              </tr>
              <tr>
                <td><strong>v3.4.0 紧急回滚</strong></td>
                <td>华南大区</td>
                <td><code style="color:var(--aw-danger)">v3.4.0</code></td>
                <td><code>v3.4.1</code></td>
                <td>195 MB</td>
                <td>AW-Pro 7</td>
                <td>2026-04-24 21:55</td>
                <td><span class="status-dot fault">告警</span></td>
                <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">推送</button></td>
              </tr>
              <tr>
                <td><strong>AW-Mini 适配包</strong></td>
                <td>集团总部</td>
                <td><code>v2.8.5</code></td>
                <td><code>v2.8.4</code></td>
                <td>134 MB</td>
                <td>AW-Mini</td>
                <td>2026-04-23 11:08</td>
                <td><span class="status-dot online">已完成</span></td>
                <td class="colactions"><button class="btn btn-link">详情</button><button class="btn btn-link">推送</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="lp-pager">
          <span class="meta">共 38 条</span>
          <div class="pager"><button class="page">‹</button><button class="page is-active">1</button><button class="page">2</button><button class="page">3</button><button class="page">›</button></div>
        </div>
      </div>
    </div>
  </div>

  <div class="surface" style="margin-top:24px">
    <h3 class="card-title">视图切换 · 表格 / 卡片</h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 14px">工具栏右侧 <code>☰ ⊞</code> 切换视图模式。卡片视图把每条固件渲染为带封面 + 元数据的卡(适合现场调研一眼扫过几十条版本),用户偏好持久化到 localStorage。</p>
    <div class="ota-card-grid">
      <div class="ota-card">
        <div class="oc-cover"><span class="oc-version">v3.5.0</span><span class="status-dot upgrading" style="margin-top:6px">推送中</span></div>
        <div class="oc-body">
          <strong>v3.5.0 灰度推送</strong>
          <div class="oc-row"><span class="oc-l">基线</span><code>v3.4.2</code></div>
          <div class="oc-row"><span class="oc-l">机型</span>AW-Pro 5</div>
          <div class="oc-row"><span class="oc-l">大小</span>245 MB</div>
          <div class="oc-foot"><a>详情</a><a>推送</a></div>
        </div>
      </div>
      <div class="ota-card">
        <div class="oc-cover oc-success"><span class="oc-version">v3.4.2</span><span class="status-dot online" style="margin-top:6px">已完成</span></div>
        <div class="oc-body">
          <strong>v3.4.2 全量包</strong>
          <div class="oc-row"><span class="oc-l">基线</span><code>v3.4.1</code></div>
          <div class="oc-row"><span class="oc-l">机型</span>AW-Pro 5 / 7</div>
          <div class="oc-row"><span class="oc-l">大小</span>198 MB</div>
          <div class="oc-foot"><a>详情</a><a>推送</a></div>
        </div>
      </div>
      <div class="ota-card">
        <div class="oc-cover oc-warn"><span class="oc-version">v3.5.0</span><span class="status-dot maint" style="margin-top:6px">已排程</span></div>
        <div class="oc-body">
          <strong>v3.5.0 测试机</strong>
          <div class="oc-row"><span class="oc-l">基线</span><code>v3.4.2</code></div>
          <div class="oc-row"><span class="oc-l">机型</span>AW-Pro 5</div>
          <div class="oc-row"><span class="oc-l">大小</span>245 MB</div>
          <div class="oc-foot"><a>详情</a><a>编辑</a></div>
        </div>
      </div>
      <div class="ota-card">
        <div class="oc-cover oc-danger"><span class="oc-version">v3.4.0</span><span class="status-dot fault" style="margin-top:6px">告警</span></div>
        <div class="oc-body">
          <strong>v3.4.0 紧急回滚</strong>
          <div class="oc-row"><span class="oc-l">基线</span><code>v3.4.1</code></div>
          <div class="oc-row"><span class="oc-l">机型</span>AW-Pro 7</div>
          <div class="oc-row"><span class="oc-l">大小</span>195 MB</div>
          <div class="oc-foot"><a>详情</a><a>推送</a></div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
`;
