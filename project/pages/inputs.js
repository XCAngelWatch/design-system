/* AngelWatch Design System — page: inputs (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["inputs"] = `
<div class="content">
<section class="section" id="inputs">
  <p class="section-eyebrow"><span data-i18n="inputs:text.001">通用组件 · 输入与表单</span></p>
  <h2><span data-i18n="inputs:text.002">输入与表单 Input</span></h2>
  <p class="lede"><span data-i18n="inputs:text.003">输入控件高度 32px（middle 密度）。focus 态采用 2px 主色光晕，避免使用粗边框。</span></p>

  <div class="demo-grid cols-2">
    <div class="surface">
<h3 style="margin:0 0 12px;font-size:14px"><span data-i18n="inputs:text.004">输入态</span></h3>
<div style="display:flex;flex-direction:column;gap:10px">
  <input class="input" placeholder="请输入设备 SN" data-i18n-placeholder="inputs:attr.005.placeholder" />
  <input class="input" value="DEV-86420075-IMEI" />
  <input class="input is-error" value="格式错误" data-i18n-value="inputs:attr.006.value" />
  <input class="input" disabled placeholder="只读" data-i18n-placeholder="inputs:attr.007.placeholder" />
  <div class="input-group">
    <span class="addon">https://</span>
    <input class="input" value="tms.angelwatch.io" />
  </div>
</div>
    </div>
    <div class="surface">
<h3 style="margin:0 0 12px;font-size:14px"><span data-i18n="inputs:text.008">选择 &amp; 开关</span></h3>
<div style="display:flex;flex-direction:column;gap:14px">
  <div class="select"><span style="color:var(--aw-text-1)"><span data-i18n="inputs:text.009">华东 · 节点 03</span></span></div>
  <div style="display:flex;gap:18px">
    <label class="check"><input type="checkbox" checked /><span class="box"></span><span data-i18n="inputs:text.010">启用 OTA</span></label>
    <label class="check"><input type="checkbox" /><span class="box"></span><span data-i18n="inputs:text.011">强制升级</span></label>
  </div>
  <div style="display:flex;gap:18px">
    <label class="check radio"><input type="radio" name="push-timing" checked /><span class="box"></span><span data-i18n="inputs:text.012">立即推送</span></label>
    <label class="check radio"><input type="radio" name="push-timing" /><span class="box"></span><span data-i18n="inputs:text.013">定时推送</span></label>
  </div>
  <div style="display:flex;gap:14px;align-items:center">
    <button class="switch is-on" id="sw1" aria-label="允许远程控制" data-i18n-aria-label="inputs:text.014"></button>
    <span style="font-size:13px;color:var(--aw-text-2)"><span data-i18n="inputs:text.014">允许远程控制</span></span>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="inputs:text.015">表单布局</span></h3>
    <div class="surface">
<div class="form-demo">
  <div class="form-row"><div class="lbl"><span class="req">*</span><span data-i18n="inputs:text.016">设备名称</span></div><div><input class="input" value="终端-上海-01" data-i18n-value="inputs:attr.017.value" /></div></div>
  <div class="form-row"><div class="lbl"><span class="req">*</span><span data-i18n="inputs:text.018">所属机构</span></div><div><div class="select" style="width:100%"><span><span data-i18n="inputs:text.019">上海 / 黄浦运营</span></span></div></div></div>
  <div class="form-row"><div class="lbl"><span data-i18n="inputs:text.020">备注</span></div><div><input class="input" placeholder="选填，最多 100 字" data-i18n-placeholder="inputs:attr.021.placeholder" /><div class="help"><span data-i18n="inputs:text.022">用于内部识别，不会推送到设备。</span></div></div></div>
  <div class="form-row"><div class="lbl"></div><div class="row"><button class="btn btn-primary"><span data-i18n="inputs:text.023">保存</span></button><button class="btn"><span data-i18n="inputs:text.024">取消</span></button></div></div>
</div>
    </div>
  </div>
  <div class="subsection"><h3><span data-i18n="common:component.usedBy">页面蓝图使用场景</span></h3><div class="blueprint-notes"><span><a href="#/login-page">LoginPage</a></span><span><a href="#/list-page">ListPage</a></span><span><a href="#/form-page">FormPage</a></span><span><a href="#/user-mgmt-page">UserMgmtPage</a></span></div></div>
</section>
</div>
`;
