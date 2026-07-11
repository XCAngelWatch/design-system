/* AngelWatch Design System — page: advanced-form (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["advanced-form"] = `
<div class="content">
<!-- ADVANCED FORM -->
<section class="section" id="advanced-form">
  <p class="section-eyebrow"><span data-i18n="advanced-form:text.001">业务模式 · 表单校验</span></p>
  <h2><span data-i18n="advanced-form:text.002">数字输入与校验态</span></h2>

  <div class="subsection">
    <h3><span data-i18n="advanced-form:text.003">NumberInput · 数字输入（带步进 + 单位）</span></h3>
    <div style="display:flex;gap:24px;flex-wrap:wrap">
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px"><span data-i18n="advanced-form:text.004">心跳间隔</span></label>
  <div class="num-input"><input value="30" /><div class="step"><button>▲</button><button>▼</button></div><span class="suffix" data-i18n="advanced-form:text.005">秒</span></div>
</div>
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px"><span data-i18n="advanced-form:text.006">告警阈值（电量）</span></label>
  <div class="num-input"><input value="15" /><div class="step"><button>▲</button><button>▼</button></div><span class="suffix">%</span></div>
</div>
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px"><span data-i18n="advanced-form:text.007">超时时间（错误态）</span></label>
  <div class="num-input is-error"><input value="9999" /><div class="step"><button>▲</button><button>▼</button></div><span class="suffix">ms</span></div>
  <div class="help-err"><span data-i18n="advanced-form:text.008">超过最大允许值 5000 ms</span></div>
</div>
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px"><span data-i18n="advanced-form:text.009">禁用</span></label>
  <div class="num-input" style="background:var(--aw-fill-2);opacity:0.6"><input value="50" disabled /><div class="step"><button>▲</button><button>▼</button></div><span class="suffix" data-i18n="advanced-form:text.010">个</span></div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="advanced-form:text.011">校验四态 · success / warning / error / info</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 14px;max-width:720px;line-height:1.6"><span data-i18n="advanced-form:text.012">表单输入呈现 4 种校验态：default（无）、success（异步唯一性校验通过）、warning（值落在边界但允许）、error（必填或格式错），另有 info 用于辅助提示文案。</span></p>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:18px;max-width:780px">
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px"><span data-i18n="advanced-form:text.013">设备 SN</span> <span style="color:var(--aw-danger)">*</span></label>
  <input class="input is-success" value="DEV-86420075" />
  <div class="help-msg success"><span data-i18n="advanced-form:text.014">✓ SN 可用，未被注册</span></div>
</div>
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px"><span data-i18n="advanced-form:text.015">终端组名称</span> <span style="color:var(--aw-danger)">*</span></label>
  <input class="input is-warning" value="OTA 灰度组" data-i18n-value="advanced-form:text.016" />
  <div class="help-msg warning"><span data-i18n="advanced-form:text.017">⚠ 已有 3 个同名组，建议加区域后缀以便区分</span></div>
</div>
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px"><span data-i18n="advanced-form:text.018">推送时间窗</span></label>
  <input class="input is-error" value="02:00 - 01:30" />
  <div class="help-msg error"><span data-i18n="advanced-form:text.019">✗ 结束时间早于开始时间</span></div>
</div>
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px"><span data-i18n="advanced-form:text.020">备注</span> <span style="color:var(--aw-text-3);font-weight:400" data-i18n="advanced-form:text.021">（选填）</span></label>
  <input class="input" placeholder="请输入备注…" data-i18n-placeholder="advanced-form:text.022" />
  <div class="help-msg" style="color:var(--aw-text-3)"><span data-i18n="advanced-form:text.023">最多 200 字符；支持 Markdown 链接</span></div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="advanced-form:text.024">表单完成度 / 提交锁</span></h3>
    <div class="surface" style="padding:18px;display:flex;justify-content:space-between;align-items:center;gap:24px">
<div style="flex:1;min-width:0">
  <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:6px"><strong style="font-size:14px"><span data-i18n="advanced-form:text.025">新建终端组</span></strong><span style="font-size:12px;color:var(--aw-text-3);font-variant-numeric:tabular-nums" data-i18n="advanced-form:text.026">5 / 8 必填项</span></div>
  <div style="height:6px;background:var(--aw-fill-2);border-radius:3px;overflow:hidden"><div style="width:62.5%;height:100%;background:var(--aw-warning);border-radius:3px"></div></div>
  <p style="font-size:11px;color:var(--aw-text-3);margin:6px 0 0"><span data-i18n="advanced-form:text.027">▸ 缺：所属区域、推送时间窗、灰度比例</span></p>
</div>
<div style="display:flex;gap:8px;flex-shrink:0">
  <button class="btn btn-text"><span data-i18n="advanced-form:text.028">取消</span></button>
  <button class="btn" disabled><span data-i18n="advanced-form:text.029">保存草稿</span></button>
  <button class="btn btn-primary" disabled><span data-i18n="advanced-form:text.030">提交</span></button>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="advanced-form:text.031">校验时机 · Validation Trigger</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="advanced-form:text.032">不同字段的校验时机不同 —— 实时校验对快速反馈友好，但过早校验会让用户在还在输入时就看到红字。下表给出"什么字段什么时候校验"。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:22%"><span data-i18n="advanced-form:text.033">字段类型</span></th><th style="width:24%"><span data-i18n="advanced-form:text.034">触发时机</span></th><th><span data-i18n="advanced-form:text.035">原因</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="advanced-form:text.036">必填检查</span></td><td><code>onBlur</code></td><td><span data-i18n="advanced-form:text.037">用户离开字段才提示，避免一来就红</span></td></tr>
        <tr><td><span data-i18n="advanced-form:text.038">格式校验（邮箱 / SN）</span></td><td><code>onBlur</code></td><td><span data-i18n="advanced-form:text.039">同上；输入完整再校验</span></td></tr>
        <tr><td><span data-i18n="advanced-form:text.040">长度限制</span></td><td><code>onChange</code><span data-i18n="advanced-form:text.041"> + 计数器</span></td><td><span data-i18n="advanced-form:text.042">实时显示 </span><code>15 / 20</code><span data-i18n="advanced-form:text.043"> 字符计数</span></td></tr>
        <tr><td><span data-i18n="advanced-form:text.044">密码强度</span></td><td><code>onChange</code></td><td><span data-i18n="advanced-form:text.045">实时反馈帮助用户调整</span></td></tr>
        <tr><td><span data-i18n="advanced-form:text.046">异步校验（用户名查重）</span></td><td><code>onBlur</code><span data-i18n="advanced-form:text.047"> + 300ms debounce</span></td><td><span data-i18n="advanced-form:text.048">避免输入中频繁请求</span></td></tr>
        <tr><td><span data-i18n="advanced-form:text.049">跨字段（确认密码）</span></td><td><code>onBlur</code><span data-i18n="advanced-form:text.050"> 第二个字段</span></td><td><span data-i18n="advanced-form:text.051">第一个改了第二个跟着重校验</span></td></tr>
        <tr><td><span data-i18n="advanced-form:text.052">提交前最终校验</span></td><td><code>onSubmit</code></td><td><span data-i18n="advanced-form:text.053">所有字段重新校验，聚焦首个错误字段</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="advanced-form:text.054">Label 位置 · LabelCol</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:22%"><span data-i18n="advanced-form:text.055">布局</span></th><th style="width:24%">labelCol / wrapperCol</th><th style="width:18%"><span data-i18n="advanced-form:text.056">使用场景</span></th><th><span data-i18n="advanced-form:text.057">说明</span></th></tr></thead>
      <tbody>
        <tr><td><b><span data-i18n="advanced-form:text.058">顶部对齐</span></b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">vertical</div></td><td><span data-i18n="advanced-form:text.059">label 上、控件下</span></td><td><span data-i18n="advanced-form:text.060">窄屏 / Modal / Drawer</span></td><td><span data-i18n="advanced-form:text.061">S 断点（&lt; 1366）强制；标签换行不影响对齐</span></td></tr>
        <tr><td><b><span data-i18n="advanced-form:text.062">右对齐</span></b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px"><span data-i18n="advanced-form:text.063">horizontal · 默认</span></div></td><td><span data-i18n="advanced-form:text.064">4 : 20 / 6 : 18 等</span></td><td><span data-i18n="advanced-form:text.065">FormPage / Modal 主布局</span></td><td><span data-i18n="advanced-form:text.066">label 100-120px 右对齐，控件左对齐；视觉对齐严</span></td></tr>
        <tr><td><b><span data-i18n="advanced-form:text.067">左对齐</span></b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">horizontal · left</div></td><td>4 : 20</td><td><span data-i18n="advanced-form:text.068">查询条 / 简单筛选</span></td><td><span data-i18n="advanced-form:text.069">label 短，左对齐节省宽度</span></td></tr>
        <tr><td><b>inline</b></td><td><span data-i18n="advanced-form:text.070">label / 控件 同行</span></td><td><span data-i18n="advanced-form:text.071">顶部筛选条</span></td><td><span data-i18n="advanced-form:text.072">每行 4 字段以内；窄屏退化到 vertical</span></td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="advanced-form:text.073">必填星号：</span></b><span data-i18n="advanced-form:text.074">红色 </span><code>*</code><span data-i18n="advanced-form:text.075"> 在 label 前置（中文习惯）；可选字段标 </span><span class="mono" data-i18n="advanced-form:text.125">（可选）</span><span data-i18n="advanced-form:text.076"> 在 label 后小灰字。星号右侧 4px 间距对齐。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="advanced-form:text.077">异步校验 · Async Validation</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="advanced-form:text.078">用户名 / SN 查重等场景需要后端校验。校验过程中显示 </span><b>validating</b><span data-i18n="advanced-form:text.079"> 态（spinner + "校验中…"），结果到位后切到 success / error。300ms debounce 避免抖动。</span></p>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">validating</div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="advanced-form:text.080">校验中</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="advanced-form:text.081">右侧旋转 spinner + "校验中…"灰字；提交按钮 disabled，避免用户绕过校验提交。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">success</div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="advanced-form:text.082">校验通过</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="advanced-form:text.083">仅在</span><b><span data-i18n="advanced-form:text.084">关键</span></b><span data-i18n="advanced-form:text.085">字段（用户名 / SN）显式正绿色 ✓；普通字段不做正反馈，避免视觉噪音。</span></p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">error</div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="advanced-form:text.086">校验失败</span></h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="advanced-form:text.087">红边框 + 错误码 tooltip + 字段下方红字。错误文案三层（做了什么 / 为什么 / 怎么办）。</span></p>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="advanced-form:text.088">提交反馈 · Submit Feedback</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:24%"><span data-i18n="advanced-form:text.089">阶段</span></th><th style="width:30%"><span data-i18n="advanced-form:text.090">UI 状态</span></th><th><span data-i18n="advanced-form:text.091">规则</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="advanced-form:text.092">提交前</span></td><td><span data-i18n="advanced-form:text.093">主按钮 disabled 直到必填全填</span></td><td><span data-i18n="advanced-form:text.094">避免用户尝试提交未完成表单</span></td></tr>
        <tr><td><span data-i18n="advanced-form:text.095">提交中</span></td><td><span data-i18n="advanced-form:text.096">主按钮 loading + 文字变 "保存中…"</span></td><td><span data-i18n="advanced-form:text.097">整个表单 disabled 防止重复提交；不要 mask 整页（用户还能看上下文）</span></td></tr>
        <tr><td><span data-i18n="advanced-form:text.098">校验失败</span></td><td><span data-i18n="advanced-form:text.099">聚焦首个错误字段 + 滚到可见</span></td><td><span data-i18n="advanced-form:text.100">不要 Toast 错误概览，因为用户看不到具体哪个字段错</span></td></tr>
        <tr><td><span data-i18n="advanced-form:text.101">提交成功</span></td><td><span data-i18n="advanced-form:text.102">Toast "已保存" + 跳转</span></td><td><span data-i18n="advanced-form:text.103">列表场景跳回列表；详情场景留在当前页刷新数据</span></td></tr>
        <tr><td><span data-i18n="advanced-form:text.104">提交失败</span></td><td><span data-i18n="advanced-form:text.105">顶部 Alert（持续）+ 失败字段红边</span></td><td><span data-i18n="advanced-form:text.106">禁用 Toast；用户必须能看到错误内容才能修</span></td></tr>
        <tr><td><span data-i18n="advanced-form:text.107">网络异常</span></td><td><span data-i18n="advanced-form:text.108">主按钮还原 + Modal "网络异常,本地保留草稿"</span></td><td><span data-i18n="advanced-form:text.109">localStorage 自动存草稿，刷新后恢复</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="advanced-form:text.110">规则 · Do &amp; Don'ts</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)"><span data-i18n="advanced-form:text.111">✓ DO</span></h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="advanced-form:text.112">必填检查 onBlur（用户离开字段后）</span></li>
          <li><span data-i18n="advanced-form:text.113">异步校验 300ms debounce</span></li>
          <li><span data-i18n="advanced-form:text.114">提交失败用顶部 Alert 持续显示</span></li>
          <li><span data-i18n="advanced-form:text.115">网络异常自动存草稿到 localStorage</span></li>
          <li><span data-i18n="advanced-form:text.116">聚焦首个错误字段 + 滚到可见</span></li>
          <li><span data-i18n="advanced-form:text.117">必填星号在 label 前置</span></li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)"><span data-i18n="advanced-form:text.118">✕ DON'T</span></h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="advanced-form:text.119">不要 onChange 校验必填（用户还在输入时就红）</span></li>
          <li><span data-i18n="advanced-form:text.120">不要用 Toast 显示提交失败</span></li>
          <li><span data-i18n="advanced-form:text.121">不要 mask 整页阻挡用户看表单</span></li>
          <li><span data-i18n="advanced-form:text.122">不要在每个字段都加正绿色 ✓（视觉噪音）</span></li>
          <li><span data-i18n="advanced-form:text.123">不要让 Submit 按钮在提交中保持可点</span></li>
          <li><span data-i18n="advanced-form:text.124">不要把异步校验放 onChange 不 debounce</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
