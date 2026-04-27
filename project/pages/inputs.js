/* AngelWatch Design System — page: inputs (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["inputs"] = `
<div class="content">
<section class="section" id="inputs">
  <p class="section-eyebrow">Components · 输入与表单</p>
  <h2>Inputs &amp; Forms</h2>
  <p class="lede">输入控件高度 32px（middle 密度）。focus 态采用 2px 主色光晕，避免使用粗边框。</p>

  <div class="demo-grid cols-2">
    <div class="surface">
<h3 style="margin:0 0 12px;font-size:14px">输入态</h3>
<div style="display:flex;flex-direction:column;gap:10px">
  <input class="input" placeholder="请输入设备 SN" />
  <input class="input" value="DEV-86420075-IMEI" />
  <input class="input is-error" value="格式错误" />
  <input class="input" disabled placeholder="只读" />
  <div class="input-group">
    <span class="addon">https://</span>
    <input class="input" value="tms.angelwatch.io" />
  </div>
</div>
    </div>
    <div class="surface">
<h3 style="margin:0 0 12px;font-size:14px">选择 &amp; 开关</h3>
<div style="display:flex;flex-direction:column;gap:14px">
  <div class="select"><span style="color:var(--aw-text-1)">华东 · 节点 03</span></div>
  <div style="display:flex;gap:18px">
    <label class="check"><input type="checkbox" checked /><span class="box"></span>启用 OTA</label>
    <label class="check"><input type="checkbox" /><span class="box"></span>强制升级</label>
  </div>
  <div style="display:flex;gap:18px">
    <label class="check radio"><input type="checkbox" checked /><span class="box"></span>立即推送</label>
    <label class="check radio"><input type="checkbox" /><span class="box"></span>定时推送</label>
  </div>
  <div style="display:flex;gap:14px;align-items:center">
    <span class="switch is-on" id="sw1"></span>
    <span style="font-size:13px;color:var(--aw-text-2)">允许远程控制</span>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3>表单布局</h3>
    <div class="surface">
<div class="form-demo">
  <div class="form-row"><div class="lbl"><span class="req">*</span>设备名称</div><div><input class="input" value="终端-上海-01" /></div></div>
  <div class="form-row"><div class="lbl"><span class="req">*</span>所属机构</div><div><div class="select" style="width:100%"><span>上海 / 黄浦运营</span></div></div></div>
  <div class="form-row"><div class="lbl">备注</div><div><input class="input" placeholder="选填，最多 100 字" /><div class="help">用于内部识别，不会推送到设备。</div></div></div>
  <div class="form-row"><div class="lbl"></div><div class="row"><button class="btn btn-primary">保存</button><button class="btn">取消</button></div></div>
</div>
    </div>
  </div>
</section>
</div>
`;
