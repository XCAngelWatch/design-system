/* AngelWatch Design System — page: ota-page */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["ota-page"] = `
<div class="content">
<section class="section" id="ota-page">
  <p class="section-eyebrow"><span data-i18n="ota-page:text.001">页面蓝图 · OTA 升级</span></p>
  <h2><span data-i18n="ota-page:text.002">OTA 升级 OtaPage</span></h2>
  <p class="lede"><span data-i18n="ota-page:text.003">OTA 升级页管理升级文件、基线版本、适配机型、更新推送和推送固件包。所有文案必须前置版本、机型、范围和风险，避免只写“更新”或“执行”。</span></p>

  <div class="surface" style="padding:0;overflow:hidden">
    <div style="display:flex;align-items:stretch;height:560px">
      <!-- 左:机构树(对应旧 simpleTree, store_list) -->
      <div class="ota-tree">
        <div class="ot-h">
          <strong><span data-i18n="ota-page:text.004">机构列表</span></strong>
          <button class="btn btn-text btn-sm" style="padding:0 4px">⟳</button>
        </div>
        <div class="ot-search"><input class="input" placeholder="搜索机构" data-i18n-placeholder="ota-page:text.005" /></div>
        <div class="ot-list">
          <div class="ot-row"><span class="ot-arrow">▾</span><span><span data-i18n="ota-page:text.006">集团总部</span></span><span class="ot-count">128</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▾</span><span><span data-i18n="ota-page:text.007">华东大区</span></span><span class="ot-count">42</span></div>
          <div class="ot-row sub2 act"><span><span data-i18n="ota-page:text.008">上海运营中心</span></span><span class="ot-count">12</span></div>
          <div class="ot-row sub2"><span><span data-i18n="ota-page:text.009">杭州分中心</span></span><span class="ot-count">8</span></div>
          <div class="ot-row sub2"><span><span data-i18n="ota-page:text.010">南京营业厅</span></span><span class="ot-count">6</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▸</span><span><span data-i18n="ota-page:text.011">华北大区</span></span><span class="ot-count">38</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▸</span><span><span data-i18n="ota-page:text.012">华南大区</span></span><span class="ot-count">30</span></div>
          <div class="ot-row sub"><span class="ot-arrow">▸</span><span><span data-i18n="ota-page:text.013">西南大区</span></span><span class="ot-count">18</span></div>
        </div>
      </div>

      <!-- 右:OTA 包列表 -->
      <div class="ota-main">
        <!-- 搜索表单 -->
        <div class="lp-toolbar">
          <div class="row" style="gap:12px;flex:1;min-width:0">
            <div style="min-width:140px"><label><span data-i18n="ota-page:text.014">名称</span></label><input class="input" placeholder="OTA 包名称" data-i18n-placeholder="ota-page:text.015" /></div>
            <div style="min-width:140px"><label><span data-i18n="ota-page:text.016">新版本</span></label><input class="input" placeholder="如 v3.5.0" data-i18n-placeholder="ota-page:text.017" /></div>
            <div style="min-width:140px"><label><span data-i18n="ota-page:text.018">基线版本</span></label><input class="input" placeholder="如 v3.4.2" data-i18n-placeholder="ota-page:text.019" /></div>
            <button class="btn btn-primary btn-sm"><span data-i18n="ota-page:text.020">查询</span></button>
            <button class="btn btn-sm"><span data-i18n="ota-page:text.021">重置</span></button>
          </div>
        </div>

        <!-- 工具栏 -->
        <div class="lp-actions">
          <div class="row" style="gap:6px">
            <button class="btn btn-primary btn-sm"><span data-i18n="ota-page:text.022">+ 添加升级包</span></button>
            <button class="btn btn-sm"><span data-i18n="ota-page:text.023">推送固件包</span></button>
            <button class="btn btn-sm"><span data-i18n="ota-page:text.024">推送日志</span></button>
          </div>
          <div class="row" style="gap:6px">
            <button class="btn-icn" title="刷新" data-i18n-title="ota-page:text.025">⟳</button>
            <button class="btn-icn act" title="表格视图" data-i18n-title="ota-page:text.026">☰</button>
            <button class="btn-icn" title="卡片视图" data-i18n-title="ota-page:text.027">⊞</button>
            <button class="btn-icn" title="列设置" data-i18n-title="ota-page:text.028">⚙</button>
          </div>
        </div>

        <!-- 列:name / store / new_version / base_version / size / adapter_model / create_time / state / operate -->
        <div class="table-wrap" style="border:0;border-radius:0;flex:1;overflow:auto">
          <table class="dt">
            <thead>
              <tr>
                <th><span data-i18n="ota-page:text.029">名称</span></th>
                <th style="width:120px"><span data-i18n="ota-page:text.030">机构</span></th>
                <th style="width:120px"><span data-i18n="ota-page:text.031">新版本</span></th>
                <th style="width:120px"><span data-i18n="ota-page:text.032">基线版本</span></th>
                <th style="width:80px"><span data-i18n="ota-page:text.033">大小</span></th>
                <th style="width:120px"><span data-i18n="ota-page:text.034">适配机型</span></th>
                <th style="width:140px"><span data-i18n="ota-page:text.035">创建时间</span></th>
                <th style="width:100px"><span data-i18n="ota-page:text.036">状态</span></th>
                <th style="width:140px" class="colactions"><span data-i18n="ota-page:text.037">操作</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong><span data-i18n="ota-page:text.038">v3.5.0 灰度包</span></strong></td>
                <td><span data-i18n="ota-page:text.039">上海运营中心</span></td>
                <td><code style="color:var(--aw-primary)">v3.5.0</code></td>
                <td><code>v3.4.2</code></td>
                <td>245 MB</td>
                <td>AW-Pro 5</td>
                <td>2026-04-27 09:12</td>
                <td><span class="status-dot upgrading"><span data-i18n="ota-page:text.040">审核中</span></span></td>
                <td class="colactions"><button class="btn btn-link"><span data-i18n="ota-page:text.041">详情</span></button><button class="btn btn-link"><span data-i18n="ota-page:text.042">撤回</span></button></td>
              </tr>
              <tr>
                <td><strong><span data-i18n="ota-page:text.043">v3.4.2 全量包</span></strong></td>
                <td><span data-i18n="ota-page:text.044">集团总部</span></td>
                <td><code>v3.4.2</code></td>
                <td><code>v3.4.1</code></td>
                <td>198 MB</td>
                <td>AW-Pro 5/7</td>
                <td>2026-04-26 02:00</td>
                <td><span class="status-dot online"><span data-i18n="ota-page:text.045">已上架</span></span></td>
                <td class="colactions"><button class="btn btn-link"><span data-i18n="ota-page:text.046">详情</span></button><button class="btn btn-link"><span data-i18n="ota-page:text.047">推送</span></button></td>
              </tr>
              <tr>
                <td><strong><span data-i18n="ota-page:text.048">v3.5.0 定期上架包</span></strong></td>
                <td><span data-i18n="ota-page:text.049">上海运营中心</span></td>
                <td><code>v3.5.0</code></td>
                <td><code>v3.4.2</code></td>
                <td>245 MB</td>
                <td>AW-Pro 5</td>
                <td>2026-04-25 18:30</td>
                <td><span class="status-dot maint"><span data-i18n="ota-page:text.050">定期上架</span></span></td>
                <td class="colactions"><button class="btn btn-link"><span data-i18n="ota-page:text.051">详情</span></button><button class="btn btn-link"><span data-i18n="ota-page:text.052">编辑</span></button></td>
              </tr>
              <tr>
                <td><strong><span data-i18n="ota-page:text.053">v3.4.0 回滚包</span></strong></td>
                <td><span data-i18n="ota-page:text.054">华南大区</span></td>
                <td><code style="color:var(--aw-danger)">v3.4.0</code></td>
                <td><code>v3.4.1</code></td>
                <td>195 MB</td>
                <td>AW-Pro 7</td>
                <td>2026-04-24 21:55</td>
                <td><span class="status-dot fault"><span data-i18n="ota-page:text.055">已拒绝</span></span></td>
                <td class="colactions"><button class="btn btn-link"><span data-i18n="ota-page:text.056">详情</span></button><button class="btn btn-link"><span data-i18n="ota-page:text.057">重新提交</span></button></td>
              </tr>
              <tr>
                <td><strong><span data-i18n="ota-page:text.058">AW-Mini 适配包</span></strong></td>
                <td><span data-i18n="ota-page:text.059">集团总部</span></td>
                <td><code>v2.8.5</code></td>
                <td><code>v2.8.4</code></td>
                <td>134 MB</td>
                <td>AW-Mini</td>
                <td>2026-04-23 11:08</td>
                <td><span class="status-dot offline"><span data-i18n="ota-page:text.060">已下架</span></span></td>
                <td class="colactions"><button class="btn btn-link"><span data-i18n="ota-page:text.061">详情</span></button><button class="btn btn-link"><span data-i18n="ota-page:text.062">推送</span></button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="lp-pager">
          <span class="meta"><span data-i18n="ota-page:text.063">共 38 条</span></span>
          <div class="pager"><button class="page">‹</button><button class="page is-active">1</button><button class="page">2</button><button class="page">3</button><button class="page">›</button></div>
        </div>
      </div>
    </div>
  </div>

  <div class="surface" style="margin-top:24px">
    <h3 class="card-title"><span data-i18n="ota-page:text.064">视图切换 · 表格 / 卡片</span></h3>
    <p style="font-size:13px;color:var(--aw-text-3);margin:0 0 14px"><span data-i18n="ota-page:text.065">工具栏右侧</span> <code>☰ ⊞</code> <span data-i18n="ota-page:text.066">切换视图模式。卡片视图把每条 OTA 包渲染为带封面 + 元数据的卡(适合现场调研一眼扫过几十条版本),用户偏好持久化到 localStorage。</span></p>
    <div class="ota-card-grid">
      <div class="ota-card">
        <div class="oc-cover"><span class="oc-version">v3.5.0</span><span class="status-dot upgrading" style="margin-top:6px"><span data-i18n="ota-page:text.067">审核中</span></span></div>
        <div class="oc-body">
          <strong><span data-i18n="ota-page:text.068">v3.5.0 灰度包</span></strong>
          <div class="oc-row"><span class="oc-l"><span data-i18n="ota-page:text.069">基线</span></span><code>v3.4.2</code></div>
          <div class="oc-row"><span class="oc-l"><span data-i18n="ota-page:text.070">机型</span></span>AW-Pro 5</div>
          <div class="oc-row"><span class="oc-l"><span data-i18n="ota-page:text.071">大小</span></span>245 MB</div>
          <div class="oc-foot"><a><span data-i18n="ota-page:text.072">详情</span></a><a><span data-i18n="ota-page:text.073">撤回</span></a></div>
        </div>
      </div>
      <div class="ota-card">
        <div class="oc-cover oc-success"><span class="oc-version">v3.4.2</span><span class="status-dot online" style="margin-top:6px"><span data-i18n="ota-page:text.074">已上架</span></span></div>
        <div class="oc-body">
          <strong><span data-i18n="ota-page:text.075">v3.4.2 全量包</span></strong>
          <div class="oc-row"><span class="oc-l"><span data-i18n="ota-page:text.076">基线</span></span><code>v3.4.1</code></div>
          <div class="oc-row"><span class="oc-l"><span data-i18n="ota-page:text.077">机型</span></span>AW-Pro 5 / 7</div>
          <div class="oc-row"><span class="oc-l"><span data-i18n="ota-page:text.078">大小</span></span>198 MB</div>
          <div class="oc-foot"><a><span data-i18n="ota-page:text.079">详情</span></a><a><span data-i18n="ota-page:text.080">推送</span></a></div>
        </div>
      </div>
      <div class="ota-card">
        <div class="oc-cover oc-warn"><span class="oc-version">v3.5.0</span><span class="status-dot maint" style="margin-top:6px"><span data-i18n="ota-page:text.081">定期上架</span></span></div>
        <div class="oc-body">
          <strong><span data-i18n="ota-page:text.082">v3.5.0 定期上架包</span></strong>
          <div class="oc-row"><span class="oc-l"><span data-i18n="ota-page:text.083">基线</span></span><code>v3.4.2</code></div>
          <div class="oc-row"><span class="oc-l"><span data-i18n="ota-page:text.084">机型</span></span>AW-Pro 5</div>
          <div class="oc-row"><span class="oc-l"><span data-i18n="ota-page:text.085">大小</span></span>245 MB</div>
          <div class="oc-foot"><a><span data-i18n="ota-page:text.086">详情</span></a><a><span data-i18n="ota-page:text.087">编辑</span></a></div>
        </div>
      </div>
      <div class="ota-card">
        <div class="oc-cover oc-danger"><span class="oc-version">v3.4.0</span><span class="status-dot fault" style="margin-top:6px"><span data-i18n="ota-page:text.088">已拒绝</span></span></div>
        <div class="oc-body">
          <strong><span data-i18n="ota-page:text.089">v3.4.0 回滚包</span></strong>
          <div class="oc-row"><span class="oc-l"><span data-i18n="ota-page:text.090">基线</span></span><code>v3.4.1</code></div>
          <div class="oc-row"><span class="oc-l"><span data-i18n="ota-page:text.091">机型</span></span>AW-Pro 7</div>
          <div class="oc-row"><span class="oc-l"><span data-i18n="ota-page:text.092">大小</span></span>195 MB</div>
          <div class="oc-foot"><a><span data-i18n="ota-page:text.093">详情</span></a><a><span data-i18n="ota-page:text.094">重新提交</span></a></div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
`;
