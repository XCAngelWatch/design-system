/* AngelWatch Design System — page: form-page (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["form-page"] = `
<div class="content">
<!-- FORM PAGE -->
<section class="section" id="form-page">
  <p class="section-eyebrow">Patterns · FormPage</p>
  <h2>FormPage · 表单页</h2>
  <p class="lede">头部（返回 + 标题）→ 主体（分组表单，每组带标题分割线 + 双列字段网格） → 底部固定操作栏（取消 + 保存）。用于新建 / 编辑设备、固件、机构等。</p>
  <div class="frame">
    <div class="frame-head">📐 FormPage</div>
    <div class="frame-body" style="padding:24px;background:var(--aw-bg-page)">
<div class="formpage-mock">
  <div class="head">
    <button class="btn btn-text">← 返回</button>
    <h3 style="margin:0;font-size:18px">新建设备</h3>
    <span class="tag">草稿</span>
  </div>
  <div class="body">
    <div class="fp-section">
      <div class="ttl">基础信息</div>
      <div class="fp-grid">
        <div><label style="font-size:12px;color:var(--aw-text-2);display:block;margin-bottom:6px"><span style="color:var(--aw-danger)">*</span> 设备名称</label><input class="input" placeholder="例如：终端-上海-001" /></div>
        <div><label style="font-size:12px;color:var(--aw-text-2);display:block;margin-bottom:6px"><span style="color:var(--aw-danger)">*</span> 设备 SN</label><input class="input" placeholder="DEV-XXXXXXXX" /></div>
        <div><label style="font-size:12px;color:var(--aw-text-2);display:block;margin-bottom:6px"><span style="color:var(--aw-danger)">*</span> 设备型号</label><div class="select" style="width:100%"><span style="color:var(--aw-text-4)">请选择型号</span></div></div>
        <div><label style="font-size:12px;color:var(--aw-text-2);display:block;margin-bottom:6px">IMEI</label><input class="input" placeholder="可选" /></div>
      </div>
    </div>
    <div class="fp-section">
      <div class="ttl">归属与分组</div>
      <div class="fp-grid">
        <div><label style="font-size:12px;color:var(--aw-text-2);display:block;margin-bottom:6px"><span style="color:var(--aw-danger)">*</span> 所属机构</label><div class="select" style="width:100%"><span>上海 / 黄浦营业厅</span></div></div>
        <div><label style="font-size:12px;color:var(--aw-text-2);display:block;margin-bottom:6px">分组标签</label><div class="row" style="padding:5px 11px;border:1px solid var(--aw-border-1);border-radius:6px;min-height:32px"><span class="tag tag-blue">VIP 网点</span><span class="tag">实验组</span></div></div>
      </div>
    </div>
    <div class="fp-section" style="margin-bottom:0">
      <div class="ttl">权限与策略</div>
      <div class="fp-grid">
        <div><label style="font-size:12px;color:var(--aw-text-2);display:block;margin-bottom:6px">允许远程控制</label><div class="row"><span class="switch is-on"></span><span style="font-size:13px;color:var(--aw-text-2)">开启</span></div></div>
        <div><label style="font-size:12px;color:var(--aw-text-2);display:block;margin-bottom:6px">心跳间隔</label><div class="select" style="width:100%"><span>30 秒</span></div></div>
        <div style="grid-column:span 2"><label style="font-size:12px;color:var(--aw-text-2);display:block;margin-bottom:6px">备注</label><input class="input" placeholder="选填，最多 200 字符" /></div>
      </div>
    </div>
  </div>
  <div class="foot"><button class="btn">取消</button><button class="btn">保存草稿</button><button class="btn btn-primary">保存并激活</button></div>
</div>
    </div>
  </div>
</section>
</div>
`;
