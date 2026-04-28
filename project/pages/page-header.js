/* AngelWatch Design System — page: page-header (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["page-header"] = `
<div class="content">
<section class="section" id="page-header">
  <p class="section-eyebrow">业务组件 · 页头</p>
  <h2>PageHeader · 页头</h2>
  <p class="lede">每个业务页的顶部都是相同骨架 —— 面包屑 + 主标题 + 副标题 / 状态 + 主次操作。这套结构由 <code>PageHeader</code> 组件统一封装，保证 100% 一致。运维切换业务页时不用重新找"主操作在哪"。</p>

  <div class="alert warning" style="margin:10px 0 18px"><div class="ico">!</div><div class="content"><strong>这是 TMS 自建组件，不是 antd 提供。</strong>antd v4 曾内置 <code>&lt;PageHeader /&gt;</code>，v5 起官方移除（迁移到 <code>@ant-design/pro-components</code> 的 <code>&lt;ProPageHeader /&gt;</code>）。TMS 在 do-dont 页禁用 ProComponents（peer-dep 冲突），因此<b>必须自建</b>。代码集中在 <code class="mono">packages/web/src/components/PageHeader.tsx</code>。新人查 antd 官方文档找不到 PageHeader 是正常的。</div></div>

  <div class="subsection">
    <h3>结构 · 6 个槽位</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">从上到下：面包屑（可选）→ 标题行（标题 + 状态 + 操作）→ 副标题 / 描述 → 关键字段（可选）→ 底部 Tabs（可选）。每槽位独立可见性控制，但顺序固定。</p>
    <div class="ph-anatomy">
      <div class="ph-row" style="background:var(--aw-fill-1);font-size:11px;color:var(--aw-text-3);padding:6px 14px"><span style="font-family:var(--aw-font-mono)">crumbs</span> · 跨级位置</div>
      <div class="ph-row" style="font-size:11px;color:var(--aw-text-3);padding:6px 14px;border-bottom:1px dashed var(--aw-border-3)"><span class="mono">data-center / device-list / DEV-86420075</span></div>
      <div class="ph-row ph-titlerow">
        <div>
          <div class="ph-slot" data-slot="title"><b style="font-size:16px;color:var(--aw-text-1)">终端-上海-001</b><span class="status-dot online" style="margin-left:8px">在线</span></div>
          <div class="ph-slot" data-slot="subtitle" style="margin-top:6px;font-size:12px;color:var(--aw-text-3)">SN <code>DEV-86420075</code> · 上海 / 黄浦营业厅 · v3.4.2</div>
        </div>
        <div class="ph-actions">
          <button class="btn">导出</button>
          <button class="btn">操作 ▾</button>
          <button class="btn btn-primary">推送固件</button>
        </div>
      </div>
      <div class="ph-row ph-tabs">
        <span class="active">基础信息</span>
        <span>实时状态</span>
        <span>操作日志</span>
        <span>告警</span>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>4 种页面变体</h3>
    <table class="map-table">
      <thead><tr><th style="width:18%">页面类型</th><th style="width:24%">面包屑</th><th style="width:22%">主标题</th><th style="width:18%">操作</th><th>底部 Tabs</th></tr></thead>
      <tbody>
        <tr><td><b>ListPage</b></td><td>1 级 (e.g. "设备管理")</td><td>资源类目名 + 总数</td><td>主：+ 添加 / 次：导入 / 导出</td><td>视图切换 (Tab)</td></tr>
        <tr><td><b>DetailPage</b></td><td>2-3 级 + 当前对象名</td><td>对象名 + 状态</td><td>对象动作（编辑 / 删除 / 推送）</td><td>视图（基础 / 状态 / 日志 / 告警 / 固件）</td></tr>
        <tr><td><b>FormPage</b></td><td>2 级 + "新建" / "编辑"</td><td>"新建 X" / "编辑 X"</td><td>主：保存 / 次：取消 / 草稿</td><td>无</td></tr>
        <tr><td><b>DashboardPage</b></td><td>无 (顶级)</td><td>"仪表盘" + 时间范围</td><td>右：时间范围切换 / 刷新</td><td>主题切换 (Tab)</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>4 种变体视觉示例</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="padding:0">
        <div class="tag-meta" style="margin:14px 14px 0">ListPage</div>
        <div class="ph-mock">
          <div class="ph-cm">设备管理</div>
          <div class="ph-tm">
            <div><b>全部设备</b><span class="ph-meta">12,486 台 · 在线 8,856</span></div>
            <div class="ph-acts"><button class="btn">导入</button><button class="btn btn-primary">+ 添加设备</button></div>
          </div>
        </div>
      </div>
      <div class="surface" style="padding:0">
        <div class="tag-meta" style="margin:14px 14px 0">DetailPage</div>
        <div class="ph-mock">
          <div class="ph-cm">设备 / 终端-上海-001</div>
          <div class="ph-tm">
            <div><b>终端-上海-001</b> <span class="status-dot online">在线</span><span class="ph-meta">DEV-86420075 · v3.4.2</span></div>
            <div class="ph-acts"><button class="btn">编辑</button><button class="btn btn-primary">推送</button></div>
          </div>
        </div>
      </div>
      <div class="surface" style="padding:0">
        <div class="tag-meta" style="margin:14px 14px 0">FormPage</div>
        <div class="ph-mock">
          <div class="ph-cm">设备 / 新建</div>
          <div class="ph-tm">
            <div><b>新建设备</b><span class="ph-meta">填写设备基础信息</span></div>
            <div class="ph-acts"><button class="btn">取消</button><button class="btn">保存草稿</button><button class="btn btn-primary">保存</button></div>
          </div>
        </div>
      </div>
      <div class="surface" style="padding:0">
        <div class="tag-meta" style="margin:14px 14px 0">DashboardPage</div>
        <div class="ph-mock">
          <div class="ph-tm" style="border-top:0">
            <div><b>仪表盘</b><span class="ph-meta">最近 7 天</span></div>
            <div class="ph-acts"><button class="btn">最近 7 天 ▾</button><button class="btn">刷新</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>Sticky 行为</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">长滚动页面（Detail / Form / Dashboard）的 PageHeader 顶部 sticky —— 滚动时折叠为<b>紧凑模式</b>（标题 + 主操作）。Tabs 仍保留，便于快速切换视图。</p>
    <table class="map-table">
      <thead><tr><th style="width:24%">滚动距离</th><th style="width:30%">PageHeader 状态</th><th>视觉变化</th></tr></thead>
      <tbody>
        <tr><td>0 ~ 60px</td><td>完整态</td><td>面包屑 + 标题 + 副标题 + 操作 + Tabs</td></tr>
        <tr><td>≥ 60px</td><td>紧凑态 (sticky)</td><td>面包屑隐藏 / 副标题隐藏 / 标题缩 14px / 仅保留主次操作 + Tabs</td></tr>
        <tr><td>滚回顶部</td><td>200ms 还原</td><td>对接 motion 页 ease 曲线</td></tr>
      </tbody>
    </table>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong>不 sticky 的场景：</strong>ListPage 的 PageHeader 不 sticky —— 因为表格本身有独立 sticky header，重叠会割裂视觉。</div></div>
  </div>

  <div class="subsection">
    <h3>动作排列规则</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">从左到右：次操作 → 中性操作 → 主操作。最右一定是 Primary。≥ 4 个动作必须折叠到 <code>"操作 ▾"</code> 下拉。破坏性动作（删除 / 解绑 / 重启）不放页头，下沉到 Tab "更多" 或详情底部。</p>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">2-3 个操作</div>
        <div style="display:flex;gap:8px"><button class="btn">导出</button><button class="btn">操作 ▾</button><button class="btn btn-primary">推送固件</button></div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">≥ 4 个操作 · 折叠</div>
        <div style="display:flex;gap:8px"><button class="btn">操作 ▾</button><button class="btn btn-primary">推送固件</button></div>
        <div style="margin-top:8px;font-size:11px;color:var(--aw-text-3)">下拉 4-8 项；超过分组</div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">破坏性 · 不在页头</div>
        <div style="display:flex;gap:8px;flex-direction:column"><div style="font-size:12px;color:var(--aw-text-3)">删除 / 解绑 / 重启 → 下沉到详情底部"危险区域"</div></div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>规则 · Do &amp; Don'ts</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>所有业务页用统一 PageHeader 组件</li>
          <li>同一类型页面（List / Detail / Form / Dashboard）槽位一致</li>
          <li>每页只 1 个 Primary 操作</li>
          <li>≥ 4 个操作折叠到下拉</li>
          <li>长页 sticky + 紧凑态自动切换</li>
          <li>面包屑最后一段不可点（当前位）</li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>不要业务页自造页头</li>
          <li>不要把破坏性按钮放页头</li>
          <li>不要 ≥ 2 个 Primary 操作并存</li>
          <li>不要在 ListPage sticky PageHeader（与表格 sticky header 冲突）</li>
          <li>不要让面包屑超过 5 级（用"…"折叠）</li>
          <li>不要把状态 Tag 放主标题之外的位置</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
