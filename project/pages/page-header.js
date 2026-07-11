/* AngelWatch Design System — page: page-header (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["page-header"] = `
<div class="content">
<section class="section" id="page-header">
  <p class="section-eyebrow"><span data-i18n="page-header:text.001">业务模式 · 页头</span></p>
  <h2><span data-i18n="page-header:text.002">页头 PageHeader</span></h2>
  <p class="lede"><span data-i18n="page-header:text.003">每个业务页的顶部都是相同骨架 —— 面包屑 + 主标题 + 副标题 / 状态 + 主次操作。这套结构由 </span><code>PageHeader</code><span data-i18n="page-header:text.004"> 组件统一封装，保证 100% 一致。运维切换业务页时不用重新找“主操作在哪”。</span></p>

  <div class="alert warning" style="margin:10px 0 18px"><div class="ico">!</div><div class="content"><strong><span data-i18n="page-header:text.005">这是 TMS 自建组件，不是 antd 提供。</span></strong><span data-i18n="page-header:text.006">antd v4 曾内置 </span><code>&lt;PageHeader /&gt;</code><span data-i18n="page-header:text.007">，v5 起官方移除（迁移到 </span><code>@ant-design/pro-components</code><span data-i18n="page-header:text.008"> 的 </span><code>&lt;ProPageHeader /&gt;</code><span data-i18n="page-header:text.009">）。TMS 在 do-dont 页禁用 ProComponents（peer-dep 冲突），因此</span><b><span data-i18n="page-header:text.010">必须自建</span></b><span data-i18n="page-header:text.011">。代码集中在 </span><code class="mono">packages/web/src/components/PageHeader.tsx</code><span data-i18n="page-header:text.012">。新人查 antd 官方文档找不到 PageHeader 是正常的。</span></div></div>

  <div class="subsection">
    <h3><span data-i18n="page-header:text.013">结构 · 6 个槽位</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="page-header:text.014">从上到下：面包屑（可选）→ 标题行（标题 + 状态 + 操作）→ 副标题 / 描述 → 关键字段（可选）→ 底部 Tabs（可选）。每槽位独立可见性控制，但顺序固定。</span></p>
    <div class="ph-anatomy">
      <div class="ph-row" style="background:var(--aw-fill-1);font-size:11px;color:var(--aw-text-3);padding:6px 14px"><span style="font-family:var(--aw-font-mono)">crumbs</span><span data-i18n="page-header:text.015"> · 跨级位置</span></div>
      <div class="ph-row" style="font-size:11px;color:var(--aw-text-3);padding:6px 14px;border-bottom:1px dashed var(--aw-border-3)"><span class="mono">data-center / device-list / DEV-86420075</span></div>
      <div class="ph-row ph-titlerow">
        <div>
          <div class="ph-slot" data-slot="title"><b style="font-size:16px;color:var(--aw-text-1)"><span data-i18n="page-header:text.016">终端-上海-001</span></b><span class="status-dot online" style="margin-left:8px"><span data-i18n="page-header:text.017">在线</span></span></div>
          <div class="ph-slot" data-slot="subtitle" style="margin-top:6px;font-size:12px;color:var(--aw-text-3)">SN <code>DEV-86420075</code><span data-i18n="page-header:text.018"> · 上海 / 黄浦营业厅 · v3.4.2</span></div>
        </div>
        <div class="ph-actions">
          <button class="btn" data-i18n="page-header:text.019">导出</button>
          <button class="btn" data-i18n="page-header:text.020">操作 ▾</button>
          <button class="btn btn-primary" data-i18n="page-header:text.021">推送 OTA 包</button>
        </div>
      </div>
      <div class="ph-row ph-tabs">
        <span class="active" data-i18n="page-header:text.022">基础信息</span>
        <span data-i18n="page-header:text.023">实时状态</span>
        <span data-i18n="page-header:text.024">操作日志</span>
        <span data-i18n="page-header:text.025">告警</span>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="page-header:text.026">4 种页面变体</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="page-header:text.027">页面类型</span></th><th style="width:24%"><span data-i18n="page-header:text.028">面包屑</span></th><th style="width:22%"><span data-i18n="page-header:text.029">主标题</span></th><th style="width:18%"><span data-i18n="page-header:text.030">操作</span></th><th><span data-i18n="page-header:text.031">底部 Tabs</span></th></tr></thead>
      <tbody>
        <tr><td><b>ListPage</b></td><td><span data-i18n="page-header:text.032">1 级 (e.g. “设备管理”)</span></td><td><span data-i18n="page-header:text.033">资源类目名 + 总数</span></td><td><span data-i18n="page-header:text.034">主：+ 添加 / 次：导入 / 导出</span></td><td><span data-i18n="page-header:text.035">视图切换 (Tab)</span></td></tr>
        <tr><td><b>DetailPage</b></td><td><span data-i18n="page-header:text.036">2-3 级 + 当前对象名</span></td><td><span data-i18n="page-header:text.037">对象名 + 状态</span></td><td><span data-i18n="page-header:text.038">对象动作（编辑 / 删除 / 推送）</span></td><td><span data-i18n="page-header:text.039">视图（基础 / 状态 / 日志 / 告警 / OTA）</span></td></tr>
        <tr><td><b>FormPage</b></td><td><span data-i18n="page-header:text.040">2 级 + “新建” / “编辑”</span></td><td><span data-i18n="page-header:text.041">“新建 X” / “编辑 X”</span></td><td><span data-i18n="page-header:text.042">主：保存 / 次：取消 / 草稿</span></td><td><span data-i18n="page-header:text.043">无</span></td></tr>
        <tr><td><b>DashboardPage</b></td><td><span data-i18n="page-header:text.044">无 (顶级)</span></td><td><span data-i18n="page-header:text.045">“仪表盘” + 时间范围</span></td><td><span data-i18n="page-header:text.046">右：时间范围切换 / 刷新</span></td><td><span data-i18n="page-header:text.047">主题切换 (Tab)</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="page-header:text.048">4 种变体视觉示例</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="padding:0">
        <div class="tag-meta" style="margin:14px 14px 0">ListPage</div>
        <div class="ph-mock">
          <div class="ph-cm" data-i18n="page-header:text.049">设备管理</div>
          <div class="ph-tm">
            <div><b><span data-i18n="page-header:text.050">全部设备</span></b><span class="ph-meta" data-i18n="page-header:text.051">12,486 台 · 在线 8,856</span></div>
            <div class="ph-acts"><button class="btn" data-i18n="page-header:text.052">导入</button><button class="btn btn-primary" data-i18n="page-header:text.053">+ 添加设备</button></div>
          </div>
        </div>
      </div>
      <div class="surface" style="padding:0">
        <div class="tag-meta" style="margin:14px 14px 0">DetailPage</div>
        <div class="ph-mock">
          <div class="ph-cm"><span data-i18n="page-header:text.054">设备 / 终端-上海-001</span></div>
          <div class="ph-tm">
            <div><b><span data-i18n="page-header:text.055">终端-上海-001</span></b> <span class="status-dot online"><span data-i18n="page-header:text.056">在线</span></span><span class="ph-meta">DEV-86420075 · v3.4.2</span></div>
            <div class="ph-acts"><button class="btn" data-i18n="page-header:text.057">编辑</button><button class="btn btn-primary" data-i18n="page-header:text.058">推送</button></div>
          </div>
        </div>
      </div>
      <div class="surface" style="padding:0">
        <div class="tag-meta" style="margin:14px 14px 0">FormPage</div>
        <div class="ph-mock">
          <div class="ph-cm"><span data-i18n="page-header:text.059">设备 / 新建</span></div>
          <div class="ph-tm">
            <div><b><span data-i18n="page-header:text.060">新建设备</span></b><span class="ph-meta" data-i18n="page-header:text.061">填写设备基础信息</span></div>
            <div class="ph-acts"><button class="btn" data-i18n="page-header:text.062">取消</button><button class="btn" data-i18n="page-header:text.063">保存草稿</button><button class="btn btn-primary" data-i18n="page-header:text.064">保存</button></div>
          </div>
        </div>
      </div>
      <div class="surface" style="padding:0">
        <div class="tag-meta" style="margin:14px 14px 0">DashboardPage</div>
        <div class="ph-mock">
          <div class="ph-tm" style="border-top:0">
            <div><b><span data-i18n="page-header:text.065">仪表盘</span></b><span class="ph-meta" data-i18n="page-header:text.066">最近 7 天</span></div>
            <div class="ph-acts"><button class="btn" data-i18n="page-header:text.067">最近 7 天 ▾</button><button class="btn" data-i18n="page-header:text.068">刷新</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="page-header:text.069">Sticky 行为</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="page-header:text.070">长滚动页面（Detail / Form / Dashboard）的 PageHeader 顶部 sticky —— 滚动时折叠为</span><b><span data-i18n="page-header:text.071">紧凑模式</span></b><span data-i18n="page-header:text.072">（标题 + 主操作）。Tabs 仍保留，便于快速切换视图。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:24%"><span data-i18n="page-header:text.073">滚动距离</span></th><th style="width:30%"><span data-i18n="page-header:text.074">PageHeader 状态</span></th><th><span data-i18n="page-header:text.075">视觉变化</span></th></tr></thead>
      <tbody>
        <tr><td>0 ~ 60px</td><td><span data-i18n="page-header:text.076">完整态</span></td><td><span data-i18n="page-header:text.077">面包屑 + 标题 + 副标题 + 操作 + Tabs</span></td></tr>
        <tr><td>≥ 60px</td><td><span data-i18n="page-header:text.078">紧凑态 (sticky)</span></td><td><span data-i18n="page-header:text.079">面包屑隐藏 / 副标题隐藏 / 标题缩 14px / 仅保留主次操作 + Tabs</span></td></tr>
        <tr><td><span data-i18n="page-header:text.080">滚回顶部</span></td><td><span data-i18n="page-header:text.081">200ms 还原</span></td><td><span data-i18n="page-header:text.082">对接 motion 页 ease 曲线</span></td></tr>
      </tbody>
    </table>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="page-header:text.083">不 sticky 的场景：</span></strong><span data-i18n="page-header:text.084">ListPage 的 PageHeader 不 sticky —— 因为表格本身有独立 sticky header，重叠会割裂视觉。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="page-header:text.085">动作排列规则</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="page-header:text.086">从左到右：次操作 → 中性操作 → 主操作。最右一定是 Primary。≥ 4 个动作必须折叠到 </span><span class="mono" data-i18n="page-header:text.113">操作 ▾</span><span data-i18n="page-header:text.087"> 下拉。破坏性动作（删除 / 解绑 / 重启）不放页头，下沉到 Tab “更多” 或详情底部。</span></p>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px" data-i18n="page-header:text.088">2-3 个操作</div>
        <div style="display:flex;gap:8px"><button class="btn" data-i18n="page-header:text.089">导出</button><button class="btn" data-i18n="page-header:text.090">操作 ▾</button><button class="btn btn-primary" data-i18n="page-header:text.091">推送 OTA 包</button></div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="page-header:text.092">≥ 4 个操作 · 折叠</span></div>
        <div style="display:flex;gap:8px"><button class="btn" data-i18n="page-header:text.093">操作 ▾</button><button class="btn btn-primary" data-i18n="page-header:text.094">推送 OTA 包</button></div>
        <div style="margin-top:8px;font-size:11px;color:var(--aw-text-3)" data-i18n="page-header:text.095">下拉 4-8 项；超过分组</div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px"><span data-i18n="page-header:text.096">破坏性 · 不在页头</span></div>
        <div style="display:flex;gap:8px;flex-direction:column"><div style="font-size:12px;color:var(--aw-text-3)"><span data-i18n="page-header:text.097">删除 / 解绑 / 重启 → 下沉到详情底部“危险区域”</span></div></div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="page-header:text.098">规则 · Do &amp; Don'ts</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)"><span data-i18n="page-header:text.111">✓ DO</span></h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="page-header:text.099">所有业务页用统一 PageHeader 组件</span></li>
          <li><span data-i18n="page-header:text.100">同一类型页面（List / Detail / Form / Dashboard）槽位一致</span></li>
          <li><span data-i18n="page-header:text.101">每页只 1 个 Primary 操作</span></li>
          <li><span data-i18n="page-header:text.102">≥ 4 个操作折叠到下拉</span></li>
          <li><span data-i18n="page-header:text.103">长页 sticky + 紧凑态自动切换</span></li>
          <li><span data-i18n="page-header:text.104">面包屑最后一段不可点（当前位）</span></li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)"><span data-i18n="page-header:text.112">✕ DON'T</span></h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="page-header:text.105">不要业务页自造页头</span></li>
          <li><span data-i18n="page-header:text.106">不要把破坏性按钮放页头</span></li>
          <li><span data-i18n="page-header:text.107">不要 ≥ 2 个 Primary 操作并存</span></li>
          <li><span data-i18n="page-header:text.108">不要在 ListPage sticky PageHeader（与表格 sticky header 冲突）</span></li>
          <li><span data-i18n="page-header:text.109">不要让面包屑超过 5 级（用“…”折叠）</span></li>
          <li><span data-i18n="page-header:text.110">不要把状态 Tag 放主标题之外的位置</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
