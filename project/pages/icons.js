/* AngelWatch Design System — page: icons (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["icons"] = `
<div class="content">
<section class="section" id="icons">
  <p class="section-eyebrow">Foundations · 图标</p>
  <h2>Icons · 图标系统</h2>
  <p class="lede">直接采用 <code>@ant-design/icons</code> 作为基础图标库（覆盖 ~700 个通用图标）。在此之上补充约 24 个 TMS 业务专属图标 —— 设备 / 心跳 / 固件 / 推送 / 解绑 / 锁定 / 重启 / 故障态等。所有 SVG 自托管 + tree-shake，禁运行时 CDN。</p>

  <div class="subsection">
    <h3>尺寸阶梯</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">三档主用尺寸，对齐 8-pt 网格。所有图标使用 <code>currentColor</code> 跟随父级文字色，禁多色描边或内嵌色块。</p>
    <div class="icon-size-grid">
      <div class="icon-tile">
        <div class="icon-shape sz-16"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg></div>
        <div class="size-label">16px</div>
        <div class="size-use">表内联 / Tag / 表头排序</div>
      </div>
      <div class="icon-tile">
        <div class="icon-shape sz-24"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg></div>
        <div class="size-label">24px · 默认</div>
        <div class="size-use">按钮 / 菜单 / 面包屑</div>
      </div>
      <div class="icon-tile">
        <div class="icon-shape sz-32"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg></div>
        <div class="size-label">32px</div>
        <div class="size-use">空状态 / Avatar 大尺寸</div>
      </div>
      <div class="icon-tile">
        <div class="icon-shape sz-48"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg></div>
        <div class="size-label">48px · 大</div>
        <div class="size-use">仅 Hero / Result 顶部</div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>风格规范 · Outlined / Filled / Two-tone</h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">默认 · Outlined</div>
        <h3 style="margin:0 0 8px;font-size:14px">线性 · 1.5px stroke</h3>
        <p style="margin:0 0 10px;font-size:13px;color:var(--aw-text-2);line-height:1.7">业务场景 90% 用线性。描边宽度统一 <b>1.5px</b>，圆角终端 + 圆角连接（<code>line-cap: round</code>）。视觉重量轻、识别度高，跟字号自然伸缩。</p>
        <div style="display:flex;gap:14px;color:var(--aw-text-2)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:8px">强调 · Filled</div>
        <h3 style="margin:0 0 8px;font-size:14px">面性 · 实色填充</h3>
        <p style="margin:0 0 10px;font-size:13px;color:var(--aw-text-2);line-height:1.7">仅用于状态徽章（在线 / 离线 / 告警圆点）+ 选中态导航 + 通知红点。同一界面 Outlined / Filled 比例 ≥ 5:1，避免视觉抢焦。</p>
        <div style="display:flex;gap:14px;color:var(--aw-primary)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="3"/></svg>
        </div>
      </div>
      <div class="surface" style="background:var(--aw-fill-1)">
        <div class="tag-meta" style="margin-bottom:8px">禁用 · Two-tone</div>
        <h3 style="margin:0 0 8px;font-size:14px">双色变体 · 不使用</h3>
        <p style="margin:0 0 10px;font-size:13px;color:var(--aw-text-2);line-height:1.7">系统层面禁用 antd v6 的 two-tone 双色变体 —— TMS 通过 <code>currentColor</code> + <code>opacity</code> 表达层级，避免双色与品牌定制白标冲突。</p>
        <div style="display:flex;gap:14px;color:var(--aw-text-3);opacity:0.55;text-decoration:line-through">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3z" opacity="0.3"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>业务图标库 · 24 个 TMS 专属图标</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">设计稿在 Figma 共享库（<code>@tms/icons</code>），前端按需导入，tree-shake 后体积仅含实际用到的图标。</p>
    <div class="icon-lib-grid">
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h3"/></svg><span>Device</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="12" r="9"/></svg><span>DeviceOnline</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/></svg><span>DeviceOffline</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c2-3 5-5 9-5s7 2 9 5c-2 3-5 5-9 5s-7-2-9-5z"/><path d="M3 6l3 3M21 6l-3 3"/></svg><span>Heartbeat</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v14M5 9l7-7 7 7M3 22h18"/></svg><span>OtaPush</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M7 6V4M17 6V4"/></svg><span>Firmware</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg><span>Lock</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0"/></svg><span>Unlock</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6M12 22a9 9 0 1 0-9-9"/></svg><span>Reboot</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg><span>Alert</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg><span>Warning</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg><span>Success</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg><span>Search</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg><span>Audit</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg><span>Recent</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg><span>Monitor</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18"/><circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7c2 0 4 1 5 2M22 12s-3 7-10 7c-2 0-4-1-5-2"/></svg><span>Hidden</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg><span>Upload</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg><span>Download</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/></svg><span>Operator</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/><circle cx="12" cy="9" r="2.5"/></svg><span>Site</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h12"/></svg><span>Filter</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8M3 14h18l-2 6H5l-2-6z"/></svg><span>Recycle</span></div>
      <div class="ilib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M16 12h-4"/></svg><span>Add</span></div>
    </div>
  </div>

  <div class="subsection">
    <h3>命名规范</h3>
    <table class="map-table">
      <thead><tr><th style="width:24%">规则</th><th style="width:34%">示例</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td><b>PascalCase</b></td><td><code>DeviceOnlineFilled</code></td><td>React 组件名，不连字符</td></tr>
        <tr><td><b>语义 + 风格后缀</b></td><td><code>SearchOutlined</code> · <code>HeartbeatFilled</code></td><td>主语义置前，风格后缀显式标注 Outlined / Filled</td></tr>
        <tr><td><b>状态字面量同 API</b></td><td><code>DeviceOffline</code> 而非 <code>DeviceLost</code></td><td>对应后端 <code>device.status === "offline"</code>，避免设计 / 数据词汇分裂</td></tr>
        <tr><td><b>动词 / 名词分离</b></td><td><code>OtaPush</code>（动作）· <code>Firmware</code>（实体）</td><td>动作图标用动词；实体图标用名词。Confirm 选用上一致</td></tr>
        <tr><td><b>SVG 文件名</b></td><td><code>device-online-filled.svg</code></td><td>kebab-case 与 PascalCase 对应，SVGR 自动生成 React 组件</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>接入流程</h3>
    <div class="code-block"><pre><code>// 1. 设计师导出 SVG (24×24 viewBox, 1.5px stroke, currentColor)
//    放入 packages/icons/src/svg/device-online-filled.svg

// 2. SVGR 自动转 React 组件
//    yarn build:icons → packages/icons/dist/index.js
//    每个 SVG 一个独立 export, tree-shake 友好

// 3. 业务代码按需引入
import { DeviceOnlineFilled, OtaPushOutlined } from '@tms/icons';

// 4. 与 antd 图标共存,统一通过 antd Icon 组件渲染
import Icon from '@ant-design/icons';
&lt;Icon component={DeviceOnlineFilled} /&gt;

// 5. 颜色 / 大小通过 CSS 控制,SVG 内部不携带样式
.icon-active { color: var(--aw-primary); font-size: 24px; }</code></pre></div>
  </div>

  <div class="subsection">
    <h3>规则 · Do &amp; Don'ts</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>所有图标用 <code>currentColor</code>，跟随父级文字色</li>
          <li>尺寸用 <code>1em</code> 跟字号；或显式 16/24/32/48 px</li>
          <li>状态图标必须配文字（"色 + icon + 文字"三重编码，色弱可辨）</li>
          <li>新业务图标先 review 是否能用 antd-icons 现有的 700 个之一</li>
          <li>SVG 全部自托管，集中在 <code>@tms/icons</code> 包</li>
          <li>描边宽度统一 1.5px，圆角终端 + 圆角连接</li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>不要混用多种描边宽度</li>
          <li>不要在 SVG 内嵌色块，颜色一律 <code>currentColor</code></li>
          <li>不要用 antd v6 默认的 two-tone 双色 icon</li>
          <li>不要从 CDN 加载图标字体（如 iconfont.cn）</li>
          <li>不要为单一业务页造一套全新图标库（先复用，再加业务专属）</li>
          <li>不要用 emoji 替代图标（视觉不一致 + i18n 渲染差异）</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
