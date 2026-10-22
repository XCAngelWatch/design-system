/* AngelWatch Design System — page: inputs (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["inputs"] = `
<div class="content">
<section class="section" id="inputs">
  <p class="section-eyebrow"><span data-i18n="inputs:text.001">通用组件 · 输入与表单</span></p>
  <h2 role="heading" aria-level="1"><span data-i18n="inputs:text.002">输入与表单 Input</span></h2>
  <p class="lede"><span data-i18n="inputs:text.003">输入控件高度 32px（middle 密度）。focus 态采用 2px 主色光晕，避免使用粗边框。</span></p>

  <div class="demo-grid cols-2">
    <div class="surface">
<h3 style="margin:0 0 12px;font-size:14px"><span data-i18n="inputs:text.004">输入态</span></h3>
<div style="display:flex;flex-direction:column;gap:10px">
  <input class="input" placeholder="请输入设备 SN" data-i18n-placeholder="inputs:attr.005.placeholder" aria-label="设备 SN" data-i18n-aria-label="inputs:attr.030.ariaLabel" />
  <input class="input" value="DEV-86420075-IMEI" aria-label="设备标识" data-i18n-aria-label="inputs:attr.031.ariaLabel" />
  <div><input class="input is-error" value="格式错误" data-i18n-value="inputs:attr.006.value" aria-label="格式错误示例" data-i18n-aria-label="inputs:attr.032.ariaLabel" aria-invalid="true" aria-describedby="inputs-format-error" /><div id="inputs-format-error" class="help" style="color:var(--aw-danger)" data-i18n="inputs:validation.identifier">请输入有效的设备标识。</div></div>
  <input class="input" disabled placeholder="已禁用" data-i18n-placeholder="inputs:attr.007.placeholder" aria-label="禁用输入" data-i18n-aria-label="inputs:attr.033.ariaLabel" />
  <input class="input" readonly value="DEV-86420075-IMEI" aria-label="只读设备标识" data-i18n-aria-label="inputs:readonly.identifier" />
  <div class="help" data-i18n="inputs:readonly.rule">只读字段仍可聚焦、选择与复制；禁用字段不参与键盘操作或表单提交。</div>
  <div class="input-group">
    <span class="addon">https://</span>
    <input class="input" value="tms.angelwatch.io" aria-label="域名" data-i18n-aria-label="inputs:attr.034.ariaLabel" />
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
  <div style="display:flex;flex-direction:column;gap:10px">
    <div style="display:flex;gap:10px;align-items:center"><button type="button" class="switch is-on" id="sw1" role="switch" aria-checked="true" aria-label="允许远程控制" data-i18n-aria-label="inputs:text.014"></button><span style="font-size:13px;color:var(--aw-text-2)"><span data-i18n="inputs:text.014">允许远程控制</span></span></div>
    <div style="display:flex;gap:10px;align-items:center"><button type="button" class="switch" role="switch" aria-checked="false" aria-label="允许设备截屏" data-i18n-aria-label="inputs:text.025"></button><span style="font-size:13px;color:var(--aw-text-2)"><span data-i18n="inputs:text.025">允许设备截屏</span></span></div>
    <div style="display:flex;gap:10px;align-items:center"><button type="button" class="switch" role="switch" aria-checked="false" aria-label="策略锁定" data-i18n-aria-label="inputs:text.026" disabled></button><span style="font-size:13px;color:var(--aw-text-3)"><span data-i18n="inputs:text.026">策略锁定（不可修改）</span></span></div>
    <div style="display:flex;gap:10px;align-items:center"><button type="button" class="switch is-on is-loading" role="switch" aria-checked="true" aria-label="正在保存设置" data-i18n-aria-label="inputs:text.027" disabled></button><span style="font-size:13px;color:var(--aw-text-3)"><span data-i18n="inputs:text.027">正在保存设置</span></span></div>
  </div>
</div>
    </div>
  </div>

  <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="inputs:text.028">异步开关必须受控：</span></strong><span data-i18n="inputs:text.029">提交期间进入 loading 并禁止重复点击；服务端失败时回滚到原状态，同时给出失败原因和重试入口。</span></div></div>

  <div class="subsection">
    <h3><span data-i18n="inputs:text.015">表单布局</span></h3>
    <div class="surface">
<div class="form-demo">
  <div class="form-row"><div class="lbl"><span class="req">*</span><span data-i18n="inputs:text.016">设备名称</span></div><div><input class="input" value="终端-上海-01" data-i18n-value="inputs:attr.017.value" aria-label="设备名称" data-i18n-aria-label="inputs:attr.035.ariaLabel" /></div></div>
  <div class="form-row"><div class="lbl"><span class="req">*</span><span data-i18n="inputs:text.018">所属机构</span></div><div><div class="select" style="width:100%"><span><span data-i18n="inputs:text.019">上海 / 黄浦运营</span></span></div></div></div>
  <div class="form-row"><div class="lbl"><span data-i18n="inputs:text.020">备注</span></div><div><input class="input" placeholder="选填，最多 100 字" data-i18n-placeholder="inputs:attr.021.placeholder" aria-label="备注" data-i18n-aria-label="inputs:attr.036.ariaLabel" /><div class="help"><span data-i18n="inputs:text.022">用于内部识别，不会推送到设备。</span></div></div></div>
  <div class="form-row"><div class="lbl"></div><div class="row"><button class="btn btn-primary"><span data-i18n="inputs:text.023">保存</span></button><button class="btn"><span data-i18n="inputs:text.024">取消</span></button></div></div>
</div>
    </div>
  </div>
  <div class="subsection">
    <h3><span data-i18n="inputs:filters.title">列表筛选组合</span></h3>
    <div class="surface">
      <p><span data-i18n="inputs:filters.layout">列表筛选使用 AWTableFilters 的标准、上下文或紧凑组合。卡片四周统一 16px；基础区与高级区共用列轨道，标签在控件上方，关键词与日期范围可按需跨列。保留底栏左侧计数与右侧操作，不增加可见标题行。</span></p>
      <p><span data-i18n="inputs:filters.touch">桌面控件以 32px 为默认高度；窄容器与粗指针触控设备将输入、选择、展开及操作按钮的目标尺寸提升至至少 44px，操作区自然换行。</span></p>
      <p><span data-i18n="inputs:filters.behavior">编辑草稿不改变已应用计数，校验通过后搜索才应用；折叠保留输入，重置恢复业务默认值。字段数量、分组和机构范围由业务配置，机构范围按需放在筛选卡外，不计入筛选项数量。</span></p>
      <a href="#/table"><span data-i18n="inputs:filters.link">查看 AWTableFilters 三种组合与交互示例</span></a>
    </div>
  </div>
  <div class="subsection"><h3><span data-i18n="common:component.usedBy">页面蓝图使用场景</span></h3><div class="blueprint-notes"><span><a href="#/login-page">LoginPage</a></span><span><a href="#/list-page">ListPage</a></span><span><a href="#/form-page">FormPage</a></span><span><a href="#/user-mgmt-page">UserMgmtPage</a></span></div></div>
</section>
</div>
`;
