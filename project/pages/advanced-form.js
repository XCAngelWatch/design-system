/* AngelWatch Design System — page: advanced-form (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["advanced-form"] = `
<div class="content">
<!-- ADVANCED FORM -->
<section class="section" id="advanced-form">
  <p class="section-eyebrow">Components · 表单进阶</p>
  <h2>NumberInput · 校验四态 · 表单完成度</h2>

  <div class="subsection">
    <h3>NumberInput · 数字输入（带步进 + 单位）</h3>
    <div style="display:flex;gap:24px;flex-wrap:wrap">
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px">心跳间隔</label>
  <div class="num-input"><input value="30" /><div class="step"><button>▲</button><button>▼</button></div><span class="suffix">秒</span></div>
</div>
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px">告警阈值（电量）</label>
  <div class="num-input"><input value="15" /><div class="step"><button>▲</button><button>▼</button></div><span class="suffix">%</span></div>
</div>
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px">超时时间（错误态）</label>
  <div class="num-input is-error"><input value="9999" /><div class="step"><button>▲</button><button>▼</button></div><span class="suffix">ms</span></div>
  <div class="help-err">超过最大允许值 5000 ms</div>
</div>
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px">禁用</label>
  <div class="num-input" style="background:var(--aw-fill-2);opacity:0.6"><input value="50" disabled /><div class="step"><button>▲</button><button>▼</button></div><span class="suffix">个</span></div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3>校验四态 · success / warning / error / info</h3>
    <p style="font-size:13px;color:var(--aw-text-2);margin:0 0 14px;max-width:720px;line-height:1.6">表单输入呈现 4 种校验态：default（无）、success（异步唯一性校验通过）、warning（值落在边界但允许）、error（必填或格式错），另有 info 用于辅助提示文案。</p>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:18px;max-width:780px">
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px">设备 SN <span style="color:var(--aw-danger)">*</span></label>
  <input class="input is-success" value="DEV-86420075" />
  <div class="help-msg success">✓ SN 可用，未被注册</div>
</div>
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px">终端组名称 <span style="color:var(--aw-danger)">*</span></label>
  <input class="input is-warning" value="OTA 灰度组" />
  <div class="help-msg warning">⚠ 已有 3 个同名组，建议加区域后缀以便区分</div>
</div>
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px">推送时间窗</label>
  <input class="input is-error" value="02:00 - 01:30" />
  <div class="help-msg error">✗ 结束时间早于开始时间</div>
</div>
<div>
  <label style="font-size:12px;color:var(--aw-text-3);display:block;margin-bottom:4px">备注 <span style="color:var(--aw-text-3);font-weight:400">（选填）</span></label>
  <input class="input" placeholder="请输入备注…" />
  <div class="help-msg" style="color:var(--aw-text-3)">最多 200 字符；支持 Markdown 链接</div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3>表单完成度 / 提交锁</h3>
    <div class="surface" style="padding:18px;display:flex;justify-content:space-between;align-items:center;gap:24px">
<div style="flex:1;min-width:0">
  <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:6px"><strong style="font-size:14px">新建终端组</strong><span style="font-size:12px;color:var(--aw-text-3);font-variant-numeric:tabular-nums">5 / 8 必填项</span></div>
  <div style="height:6px;background:var(--aw-fill-2);border-radius:3px;overflow:hidden"><div style="width:62.5%;height:100%;background:var(--aw-warning);border-radius:3px"></div></div>
  <p style="font-size:11px;color:var(--aw-text-3);margin:6px 0 0">▸ 缺：所属区域、推送时间窗、灰度比例</p>
</div>
<div style="display:flex;gap:8px;flex-shrink:0">
  <button class="btn btn-text">取消</button>
  <button class="btn" disabled>保存草稿</button>
  <button class="btn btn-primary" disabled>提交</button>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3>校验时机 · Validation Trigger</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">不同字段的校验时机不同 —— 实时校验对快速反馈友好，但过早校验会让用户在还在输入时就看到红字。下表给出"什么字段什么时候校验"。</p>
    <table class="map-table">
      <thead><tr><th style="width:22%">字段类型</th><th style="width:24%">触发时机</th><th>原因</th></tr></thead>
      <tbody>
        <tr><td>必填检查</td><td><code>onBlur</code></td><td>用户离开字段才提示，避免一来就红</td></tr>
        <tr><td>格式校验（邮箱 / SN）</td><td><code>onBlur</code></td><td>同上；输入完整再校验</td></tr>
        <tr><td>长度限制</td><td><code>onChange</code> + 计数器</td><td>实时显示 <code>15 / 20</code> 字符计数</td></tr>
        <tr><td>密码强度</td><td><code>onChange</code></td><td>实时反馈帮助用户调整</td></tr>
        <tr><td>异步校验（用户名查重）</td><td><code>onBlur</code> + 300ms debounce</td><td>避免输入中频繁请求</td></tr>
        <tr><td>跨字段（确认密码）</td><td><code>onBlur</code> 第二个字段</td><td>第一个改了第二个跟着重校验</td></tr>
        <tr><td>提交前最终校验</td><td><code>onSubmit</code></td><td>所有字段重新校验，聚焦首个错误字段</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>Label 位置 · LabelCol</h3>
    <table class="map-table">
      <thead><tr><th style="width:22%">布局</th><th style="width:24%">labelCol / wrapperCol</th><th style="width:18%">使用场景</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><b>顶部对齐</b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">vertical</div></td><td>label 上、控件下</td><td>窄屏 / Modal / Drawer</td><td>S 断点（&lt; 1366）强制；标签换行不影响对齐</td></tr>
        <tr><td><b>右对齐</b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">horizontal · 默认</div></td><td>4 : 20 / 6 : 18 等</td><td>FormPage / Modal 主布局</td><td>label 100-120px 右对齐，控件左对齐；视觉对齐严</td></tr>
        <tr><td><b>左对齐</b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">horizontal · left</div></td><td>4 : 20</td><td>查询条 / 简单筛选</td><td>label 短，左对齐节省宽度</td></tr>
        <tr><td><b>inline</b></td><td>label / 控件 同行</td><td>顶部筛选条</td><td>每行 4 字段以内；窄屏退化到 vertical</td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">必填星号：</b>红色 <code>*</code> 在 label 前置（中文习惯）；可选字段标 <code>(可选)</code> 在 label 后小灰字。星号右侧 4px 间距对齐。</p>
  </div>

  <div class="subsection">
    <h3>异步校验 · Async Validation</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">用户名 / SN 查重等场景需要后端校验。校验过程中显示 <b>validating</b> 态（spinner + "校验中…"），结果到位后切到 success / error。300ms debounce 避免抖动。</p>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">validating</div>
        <h3 style="margin:0 0 8px;font-size:14px">校验中</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">右侧旋转 spinner + "校验中…"灰字；提交按钮 disabled，避免用户绕过校验提交。</p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">success</div>
        <h3 style="margin:0 0 8px;font-size:14px">校验通过</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">仅在<b>关键</b>字段（用户名 / SN）显式正绿色 ✓；普通字段不做正反馈，避免视觉噪音。</p>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">error</div>
        <h3 style="margin:0 0 8px;font-size:14px">校验失败</h3>
        <p style="margin:0;font-size:13px;color:var(--aw-text-2);line-height:1.7">红边框 + 错误码 tooltip + 字段下方红字。错误文案三层（做了什么 / 为什么 / 怎么办）。</p>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>提交反馈 · Submit Feedback</h3>
    <table class="map-table">
      <thead><tr><th style="width:24%">阶段</th><th style="width:30%">UI 状态</th><th>规则</th></tr></thead>
      <tbody>
        <tr><td>提交前</td><td>主按钮 disabled 直到必填全填</td><td>避免用户尝试提交未完成表单</td></tr>
        <tr><td>提交中</td><td>主按钮 loading + 文字变 "保存中…"</td><td>整个表单 disabled 防止重复提交；不要 mask 整页（用户还能看上下文）</td></tr>
        <tr><td>校验失败</td><td>聚焦首个错误字段 + 滚到可见</td><td>不要 Toast 错误概览，因为用户看不到具体哪个字段错</td></tr>
        <tr><td>提交成功</td><td>Toast "已保存" + 跳转</td><td>列表场景跳回列表；详情场景留在当前页刷新数据</td></tr>
        <tr><td>提交失败</td><td>顶部 Alert（持续）+ 失败字段红边</td><td>禁用 Toast；用户必须能看到错误内容才能修</td></tr>
        <tr><td>网络异常</td><td>主按钮还原 + Modal "网络异常,本地保留草稿"</td><td>localStorage 自动存草稿，刷新后恢复</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>规则 · Do &amp; Don'ts</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>必填检查 onBlur（用户离开字段后）</li>
          <li>异步校验 300ms debounce</li>
          <li>提交失败用顶部 Alert 持续显示</li>
          <li>网络异常自动存草稿到 localStorage</li>
          <li>聚焦首个错误字段 + 滚到可见</li>
          <li>必填星号在 label 前置</li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>不要 onChange 校验必填（用户还在输入时就红）</li>
          <li>不要用 Toast 显示提交失败</li>
          <li>不要 mask 整页阻挡用户看表单</li>
          <li>不要在每个字段都加正绿色 ✓（视觉噪音）</li>
          <li>不要让 Submit 按钮在提交中保持可点</li>
          <li>不要把异步校验放 onChange 不 debounce</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
