/* AngelWatch Design System — page: empty-state (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["empty-state"] = `
<div class="content">
<section class="section" id="empty-state">
  <p class="section-eyebrow"><span data-i18n="empty-state:text.001">业务模式 · 空状态</span></p>
  <h2><span data-i18n="empty-state:text.002">空状态 Empty State</span></h2>
  <p class="lede"><span data-i18n="empty-state:text.003">空状态不只是"当前没有可显示的数据"。三类空态对应三类下一步动作 —— 必须可执行、必须有路径。Result 组件强制传 </span><code>extra</code><span data-i18n="empty-state:text.004"> prop（CI 阶段拦截），杜绝出现"留白 + 暂无"的死页面。</span></p>

  <div class="subsection">
    <h3><span data-i18n="empty-state:text.005">三类空态</span></h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px"><span data-i18n="empty-state:text.006">类型 · 01</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="empty-state:text.007">首次空 · First-run</span></h3>
        <p style="margin:0 0 12px;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="empty-state:text.008">系统中尚无数据，引导管理员添加首条记录。</span></p>
        <div class="empty-mock">
          <svg viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:var(--aw-text-3);width:48px;height:auto;margin:0 auto 8px;display:block">
            <rect x="10" y="5" width="40" height="38" rx="3"/>
            <path d="M20 18h20M20 24h20M20 30h12"/>
          </svg>
          <div class="em-title"><span data-i18n="empty-state:text.009">还没有设备</span></div>
          <div class="em-sub"><span data-i18n="empty-state:text.010">添加首台设备开始管理</span></div>
          <button class="btn btn-primary" style="margin-top:10px"><span data-i18n="empty-state:text.011">+ 添加设备</span></button>
        </div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px"><span data-i18n="empty-state:text.012">类型 · 02</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="empty-state:text.013">筛选空 · No Match</span></h3>
        <p style="margin:0 0 12px;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="empty-state:text.014">数据库非空，但当前筛选条件无匹配。</span></p>
        <div class="empty-mock">
          <svg viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:var(--aw-text-3);width:48px;height:auto;margin:0 auto 8px;display:block">
            <circle cx="26" cy="22" r="14"/>
            <path d="M37 33l8 8M19 22l14 0M26 15l0 14" opacity="0.4"/>
          </svg>
          <div class="em-title"><span data-i18n="empty-state:text.015">无匹配设备</span></div>
          <div class="em-sub"><span data-i18n="empty-state:text.016">当前筛选条件下查不到设备</span></div>
          <button class="btn" style="margin-top:10px"><span data-i18n="empty-state:text.017">清除筛选</span></button>
        </div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px"><span data-i18n="empty-state:text.018">类型 · 03</span></div>
        <h3 style="margin:0 0 8px;font-size:14px"><span data-i18n="empty-state:text.019">错误空 · Failure</span></h3>
        <p style="margin:0 0 12px;font-size:13px;color:var(--aw-text-2);line-height:1.7"><span data-i18n="empty-state:text.020">请求失败 —— 网络 / 后端 / 鉴权异常。</span></p>
        <div class="empty-mock">
          <svg viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:var(--aw-danger);width:48px;height:auto;margin:0 auto 8px;display:block">
            <circle cx="30" cy="25" r="20"/>
            <path d="M30 16v12M30 32v0.01"/>
          </svg>
          <div class="em-title"><span data-i18n="empty-state:text.021">加载失败</span></div>
          <div class="em-sub"><span data-i18n="empty-state:text.022">网络超时，请检查终端连通性 · </span><span class="mono">[E_TIMEOUT]</span></div>
          <div style="margin-top:10px;display:flex;gap:8px;justify-content:center"><button class="btn btn-primary"><span data-i18n="empty-state:text.023">重试</span></button><button class="btn"><span data-i18n="empty-state:text.024">联系系统管理员</span></button></div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="empty-state:text.025">三类对应的视觉差异</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="empty-state:text.026">维度</span></th><th style="width:26%"><span data-i18n="empty-state:text.027">首次空</span></th><th style="width:26%"><span data-i18n="empty-state:text.028">筛选空</span></th><th><span data-i18n="empty-state:text.029">错误空</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="empty-state:text.030">图标颜色</span></td><td><code>--aw-text-3</code><span data-i18n="empty-state:text.031"> 灰</span></td><td><code>--aw-text-3</code><span data-i18n="empty-state:text.032"> 灰</span></td><td><code>--aw-danger</code><span data-i18n="empty-state:text.033"> 红</span></td></tr>
        <tr><td><span data-i18n="empty-state:text.034">主按钮</span></td><td><b><span data-i18n="empty-state:text.035">+ 添加设备</span></b><span data-i18n="empty-state:text.036">（primary）</span></td><td><span data-i18n="empty-state:text.037">清除筛选（default）</span></td><td><span data-i18n="empty-state:text.038">重试（primary）</span></td></tr>
        <tr><td><span data-i18n="empty-state:text.039">次操作</span></td><td><span data-i18n="empty-state:text.040">查看示例 / 文档</span></td><td><span data-i18n="empty-state:text.041">调整筛选</span></td><td><span data-i18n="empty-state:text.042">联系系统管理员 / 复制错误码</span></td></tr>
        <tr><td><span data-i18n="empty-state:text.043">图标</span></td><td><span data-i18n="empty-state:text.044">Device + 加号</span></td><td><span data-i18n="empty-state:text.045">放大镜 + 斜线</span></td><td><span data-i18n="empty-state:text.046">感叹号 / 警告</span></td></tr>
        <tr><td><span data-i18n="empty-state:text.047">文案模板</span></td><td><span data-i18n="empty-state:text.048">"还没有 X / 添加首条..."</span></td><td><span data-i18n="empty-state:text.049">"无匹配 X / 当前筛选..."</span></td><td><span data-i18n="empty-state:text.050">"加载失败 / 原因 + 错误码"</span></td></tr>
        <tr><td><span data-i18n="empty-state:text.051">错误码</span></td><td>—</td><td>—</td><td><span data-i18n="empty-state:text.052">必带 </span><code>[E_*]</code><span data-i18n="empty-state:text.053"> 方括号 + tooltip</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="empty-state:text.054">使用位置</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:24%"><span data-i18n="empty-state:text.055">空态触发位</span></th><th style="width:24%"><span data-i18n="empty-state:text.056">推荐组件</span></th><th><span data-i18n="empty-state:text.057">说明</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="empty-state:text.058">整页空</span></td><td><code>Result</code><span data-i18n="empty-state:text.059"> 组件 + 默认 illust</span></td><td><span data-i18n="empty-state:text.060">ListPage / DetailPage 数据全空</span></td></tr>
        <tr><td><span data-i18n="empty-state:text.061">表格内空</span></td><td><code>Empty</code><span data-i18n="empty-state:text.062"> 组件 + 自定义 description</span></td><td><span data-i18n="empty-state:text.063">分页空 / 筛选空，保留表头</span></td></tr>
        <tr><td><span data-i18n="empty-state:text.064">卡片内空</span></td><td><span data-i18n="empty-state:text.065">简化文案 + 图标</span></td><td><span data-i18n="empty-state:text.066">DataCard / Stat 卡片，避免太大占位</span></td></tr>
        <tr><td><span data-i18n="empty-state:text.067">下拉空</span></td><td><span data-i18n="empty-state:text.068">"未找到 X" + 触发新建</span></td><td><span data-i18n="empty-state:text.069">Select / Cascader / TreeSelect 内部</span></td></tr>
        <tr><td><span data-i18n="empty-state:text.070">搜索空</span></td><td><span data-i18n="empty-state:text.071">关键词 + 建议（拼音 / 同义词）</span></td><td><span data-i18n="empty-state:text.072">全局搜索 / 筛选输入框</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="empty-state:text.073">覆盖 antd 默认 Empty</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="empty-state:text.074">antd 内置的 </span><code>Empty</code><span data-i18n="empty-state:text.075"> 组件 / </span><code>Select</code><span data-i18n="empty-state:text.076"> 下拉空 / </span><code>Table</code><span data-i18n="empty-state:text.077"> 空数据 默认渲染一张</span><b><span data-i18n="empty-state:text.078">彩色插画</span></b><span data-i18n="empty-state:text.079">（</span><code>Empty.PRESENTED_IMAGE_DEFAULT</code><span data-i18n="empty-state:text.080">），与 illustration 页"插画仅用于登录 / 错误页"规则冲突。必须在 ConfigProvider 全局 </span><code>renderEmpty</code><span data-i18n="empty-state:text.081"> 替换。</span></p>
    <div class="code-block"><pre><code>// packages/web/src/components/Empty.tsx
import { Empty } from 'antd';

export const TMSEmpty: FC&lt;{ description?: string; extra?: ReactNode }&gt; = ({
  description = 'No data to display',
  extra,
}) =&gt; (
  &lt;Empty
    image={Empty.PRESENTED_IMAGE_SIMPLE}    // Use antd simple monochrome SVG
    imageStyle={{ height: 56 }}
    description={&lt;span style={{ color: 'var(--aw-text-3)', fontSize: 13 }}&gt;{description}&lt;/span&gt;}
  &gt;
    {extra}
  &lt;/Empty&gt;
);

// Inject through AntdConfig
&lt;ConfigProvider renderEmpty={() =&gt; &lt;TMSEmpty /&gt;}&gt;
  &lt;App /&gt;
&lt;/ConfigProvider&gt;</code></pre></div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)"><span data-i18n="empty-state:text.082">作用范围：</span></b><span data-i18n="empty-state:text.083">renderEmpty 同时覆盖 </span><code>Table</code><span data-i18n="empty-state:text.084"> / </span><code>List</code><span data-i18n="empty-state:text.085"> / </span><code>Select</code><span data-i18n="empty-state:text.086"> / </span><code>TreeSelect</code><span data-i18n="empty-state:text.087"> / </span><code>Cascader</code><span data-i18n="empty-state:text.088"> / </span><code>Empty</code><span data-i18n="empty-state:text.089"> 全部空态。整页空态用 </span><code>&lt;Result /&gt;</code><span data-i18n="empty-state:text.090"> 而非 Empty，因为前者强制 </span><code>extra</code><span data-i18n="empty-state:text.091"> prop。</span></p>
  </div>

  <div class="subsection">
    <h3><span data-i18n="empty-state:text.092">API 约束 · Result 组件强制 extra</span></h3>
    <div class="code-block"><pre><code>// packages/web/src/components/Result.tsx
// Required type: extra cannot be undefined
type ResultProps = {
  status: 'empty' | 'no-match' | 'error';
  title: string;
  description?: string;
  extra: ReactNode;          // Required; undefined is not allowed
  errorCode?: string;        // Required when status === 'error'
};

// Usage: three empty-state categories
&lt;Result status="empty" title="No Devices Yet" description="Add the first device to start management"
  extra={&lt;Button type="primary"&gt;+ Add Device&lt;/Button&gt;} /&gt;

&lt;Result status="no-match" title="No Matching Devices" description="No devices match the current filters"
  extra={&lt;Button onClick={clearFilter}&gt;Clear Filters&lt;/Button&gt;} /&gt;

&lt;Result status="error" title="Load Failed" description="Network timeout. Check terminal connectivity."
  errorCode="E_TIMEOUT"
  extra={&lt;&gt;&lt;Button type="primary" onClick={retry}&gt;Retry&lt;/Button&gt;
    &lt;Button onClick={contactAdmin}&gt;Contact Administrator&lt;/Button&gt;&lt;/&gt;} /&gt;</code></pre></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="empty-state:text.093">规则 · Do &amp; Don'ts</span></h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)"><span data-i18n="empty-state:text.106">✓ DO</span></h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="empty-state:text.094">每个空态必须给可执行下一步</span></li>
          <li><span data-i18n="empty-state:text.095">区分首次空 / 筛选空 / 错误空 三类</span></li>
          <li><span data-i18n="empty-state:text.096">错误空必带错误码（方括号 + monospace）</span></li>
          <li><span data-i18n="empty-state:text.097">文案前置对象，"X 还没有 / X 加载失败"</span></li>
          <li><span data-i18n="empty-state:text.098">Result 组件强制 extra prop</span></li>
          <li><span data-i18n="empty-state:text.099">空态图标用 32~48px，不要过大</span></li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)"><span data-i18n="empty-state:text.107">✕ DON'T</span></h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li><span data-i18n="empty-state:text.100">不要只显示"当前没有可显示的数据" / "N/A"</span></li>
          <li><span data-i18n="empty-state:text.101">不要混用空态类型（筛选空显示"添加设备"按钮）</span></li>
          <li><span data-i18n="empty-state:text.102">不要在错误空隐藏错误码</span></li>
          <li><span data-i18n="empty-state:text.103">不要在空态用装饰性插画</span></li>
          <li><span data-i18n="empty-state:text.104">不要让空态留白超过 60% 视口高度</span></li>
          <li><span data-i18n="empty-state:text.105">不要在弹层 / 抽屉内显示完整 Result（用 Empty 简化版）</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
