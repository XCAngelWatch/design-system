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
</section>
</div>
`;
