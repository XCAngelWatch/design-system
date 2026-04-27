/* AngelWatch Design System — page: do-dont (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["do-dont"] = `
<div class="content">
<!-- DO / DON'T -->
<section class="section" id="do-dont">
  <p class="section-eyebrow">Specs · 规范红线</p>
  <h2>Do &amp; Don't</h2>
  <p class="lede">这些是 stylelint / 设计审查中会被直接打回的硬约束，覆盖 Token 三层架构、Sidebar 规范、扩展色板与交互守则。</p>
  <div class="demo-grid cols-2">
    <div class="surface" style="border-left:3px solid var(--aw-success)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
  <li>使用 antd v6 原生组件</li>
  <li>所有颜色通过 CSS 变量引用</li>
  <li>radius 统一 6px（仅 sm/lg 例外）</li>
  <li>侧边栏：Light <span class="mono">#FFFFFF</span> 白底 + 3px <span class="mono">#0052CC</span> indicator bar / Dark <span class="mono">#1A1D23</span> 渐变</li>
  <li>Inter + Source Han Sans CN 自托管</li>
  <li>状态以「点 + 文字 + 形状」三重编码（色弱可辨）</li>
  <li>键盘可达（tab 顺序 + focus 可见）+ 13 个全局快捷键</li>
  <li>所有可见文本通过 <span class="mono">t('namespace.key')</span> 包裹</li>
  <li>组件必须同时通过 Light + Dark 视觉回归</li>
  <li>批量 / 不可逆操作用 Modal，单条用 Popconfirm</li>
  <li>日期 / 数字格式必须用 <span class="mono">Intl.*</span> API</li>
  <li>异常态返回 ErrorPage（404/403/500）+ traceId</li>
  <li>异步/批量操作给到 Result 终态页</li>
  <li>组件只消费 Alias Token，不直接引 Seed/Map（<code>colorBgContainer</code> ✓ ／ <code>colorPrimary</code> ✗）</li>
  <li>Sidebar Active 必须用 <b>3px 品牌蓝 indicator bar</b>，不能仅靠背景色</li>
  <li>业务标签优先用扩展色板的 25/700 双阶（保 AA 对比）</li>
  <li>所有文本色块必须通过自动 WCAG 对比度测试（≥ 4.5:1）</li>
  <li>组件级覆盖统一收口在 <code>theme.components</code>，禁止散落在业务代码</li>
  <li>复杂场景（地图/终端/拖拽/节点图/虚拟表/Schema 表单/代码编辑）优先用成熟 NPM 包，不自建</li>
  <li>新引入的第三方包必须 license ∈ MIT / Apache-2.0 / BSD / ISC，其他需法务确认</li>
  <li>破坏性操作必须经服务端二次校验，非法操作返回 422 并记录审计</li>
  <li>所有第三方资源（字体 / 图标 / Monaco loader / leaflet 瓦片）必须自托管，禁运行时 CDN</li>
</ul>
    </div>
    <div class="surface" style="border-left:3px solid var(--aw-danger)">
<h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
<ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
  <li>不要使用 <span class="mono">!important</span>（stylelint 报错）</li>
  <li>不要使用 Tailwind utility（仅 CSS Modules）</li>
  <li>不要使用 Pro Components（peer-dep 冲突）</li>
  <li>不要使用 Arco 旧主色 <span class="mono">#165DFF</span></li>
  <li>不要使用过亮的强调色（饱和度 ≤ 80%）</li>
  <li>不要在登录页之外使用装饰性插画（错误页线性插画除外）</li>
  <li>不要从 CDN 加载字体或图标</li>
  <li>不要硬编码用户可见字符串（即使是英文）</li>
  <li>不要在 Dark 模式用纯黑 <span class="mono">#000</span> 或纯白文本（用 token）</li>
  <li>不要用整卡背景色表达状态（用 4px 顶部色条）</li>
  <li>不要用 Toast 显示错误结果（用 Result 页或 Modal）</li>
  <li>不要用纯色彩表达状态（必须 + 文字 / 形状）</li>
  <li>不要在业务代码中写 hex（<code>#0052CC</code> ✗ ／ <code>var(--aw-primary)</code> ✓）</li>
  <li>不要在 Sidebar 用品牌蓝铺底色（仅作 3px indicator）</li>
  <li>不要在一屏内并存 &gt; 5 种色相，避免视觉嘈杂</li>
  <li>不要为破坏性操作默认聚焦"确认"按钮（焦点必须落在"取消"）</li>
  <li>不要在不可逆操作上做乐观更新（推送、删除、重启）</li>
  <li>不要自建图表 / 地图 / 终端 / 节点编辑器 / 虚拟表（成熟库已经够用）</li>
  <li>不要在 Sidebar 用品牌蓝铺底色（仅作 3px indicator + 浅蓝 active 底）</li>
  <li>不要直接套 antd <code>compactAlgorithm</code>(24px)，本系统 Compact = 28px 中间值</li>
  <li>不要把"已退役"作为可恢复状态（终态不可逆，只允许审计查看）</li>
</ul>
    </div>
  </div>
</section>
</div>
`;
