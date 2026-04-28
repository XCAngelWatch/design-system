/* AngelWatch Design System — page: empty-state (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["empty-state"] = `
<div class="content">
<section class="section" id="empty-state">
  <p class="section-eyebrow">业务组件 · 空状态</p>
  <h2>Empty State · 空状态</h2>
  <p class="lede">空状态不只是"暂无数据"。三类空态对应三类下一步动作 —— 必须可执行、必须有路径。Result 组件强制传 <code>extra</code> prop（CI 阶段拦截），杜绝出现"留白 + 暂无"的死页面。</p>

  <div class="subsection">
    <h3>三类空态</h3>
    <div class="demo-grid cols-3">
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px">类型 · 01</div>
        <h3 style="margin:0 0 8px;font-size:14px">首次空 · First-run</h3>
        <p style="margin:0 0 12px;font-size:13px;color:var(--aw-text-2);line-height:1.7">系统中尚无数据，引导用户创建首条记录。</p>
        <div class="empty-mock">
          <svg viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:var(--aw-text-3);width:48px;height:auto;margin:0 auto 8px;display:block">
            <rect x="10" y="5" width="40" height="38" rx="3"/>
            <path d="M20 18h20M20 24h20M20 30h12"/>
          </svg>
          <div class="em-title">还没有设备</div>
          <div class="em-sub">添加首台设备开始管理</div>
          <button class="btn btn-primary" style="margin-top:10px">+ 添加设备</button>
        </div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px">类型 · 02</div>
        <h3 style="margin:0 0 8px;font-size:14px">筛选空 · No Match</h3>
        <p style="margin:0 0 12px;font-size:13px;color:var(--aw-text-2);line-height:1.7">数据库非空，但当前筛选条件无匹配。</p>
        <div class="empty-mock">
          <svg viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:var(--aw-text-3);width:48px;height:auto;margin:0 auto 8px;display:block">
            <circle cx="26" cy="22" r="14"/>
            <path d="M37 33l8 8M19 22l14 0M26 15l0 14" opacity="0.4"/>
          </svg>
          <div class="em-title">无匹配设备</div>
          <div class="em-sub">当前筛选条件下查不到设备</div>
          <button class="btn" style="margin-top:10px">清除筛选</button>
        </div>
      </div>
      <div class="surface">
        <div class="tag-meta" style="margin-bottom:10px">类型 · 03</div>
        <h3 style="margin:0 0 8px;font-size:14px">错误空 · Failure</h3>
        <p style="margin:0 0 12px;font-size:13px;color:var(--aw-text-2);line-height:1.7">请求失败 —— 网络 / 后端 / 鉴权异常。</p>
        <div class="empty-mock">
          <svg viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:var(--aw-danger);width:48px;height:auto;margin:0 auto 8px;display:block">
            <circle cx="30" cy="25" r="20"/>
            <path d="M30 16v12M30 32v0.01"/>
          </svg>
          <div class="em-title">加载失败</div>
          <div class="em-sub">网络超时，请检查网关连通性 · <span class="mono">[E_TIMEOUT]</span></div>
          <div style="margin-top:10px;display:flex;gap:8px;justify-content:center"><button class="btn btn-primary">重试</button><button class="btn">联系管理员</button></div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>三类对应的视觉差异</h3>
    <table class="map-table">
      <thead><tr><th style="width:18%">维度</th><th style="width:26%">首次空</th><th style="width:26%">筛选空</th><th>错误空</th></tr></thead>
      <tbody>
        <tr><td>图标颜色</td><td><code>--aw-text-3</code> 灰</td><td><code>--aw-text-3</code> 灰</td><td><code>--aw-danger</code> 红</td></tr>
        <tr><td>主按钮</td><td><b>+ 添加设备</b>（primary）</td><td>清除筛选（default）</td><td>重试（primary）</td></tr>
        <tr><td>次操作</td><td>查看示例 / 文档</td><td>调整筛选</td><td>联系管理员 / 复制错误码</td></tr>
        <tr><td>图标</td><td>Device + 加号</td><td>放大镜 + 斜线</td><td>感叹号 / 警告</td></tr>
        <tr><td>文案模板</td><td>"还没有 X / 添加首条..."</td><td>"无匹配 X / 当前筛选..."</td><td>"加载失败 / 原因 + 错误码"</td></tr>
        <tr><td>错误码</td><td>—</td><td>—</td><td>必带 <code>[E_*]</code> 方括号 + tooltip</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>使用位置</h3>
    <table class="map-table">
      <thead><tr><th style="width:24%">空态触发位</th><th style="width:24%">推荐组件</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>整页空</td><td><code>Result</code> 组件 + 默认 illust</td><td>ListPage / DetailPage 数据全空</td></tr>
        <tr><td>表格内空</td><td><code>Empty</code> 组件 + 自定义 description</td><td>分页空 / 筛选空，保留表头</td></tr>
        <tr><td>卡片内空</td><td>简化文案 + 图标</td><td>DataCard / Stat 卡片，避免太大占位</td></tr>
        <tr><td>下拉空</td><td>"未找到 X" + 触发新建</td><td>Select / Cascader / TreeSelect 内部</td></tr>
        <tr><td>搜索空</td><td>关键词 + 建议（拼音 / 同义词）</td><td>全局搜索 / 筛选输入框</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>覆盖 antd 默认 Empty</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">antd 内置的 <code>Empty</code> 组件 / <code>Select</code> 下拉空 / <code>Table</code> 空数据 默认渲染一张<b>彩色插画</b>（<code>Empty.PRESENTED_IMAGE_DEFAULT</code>），与 illustration 页"插画仅用于登录 / 错误页"规则冲突。必须在 ConfigProvider 全局 <code>renderEmpty</code> 替换。</p>
    <div class="code-block"><pre><code>// packages/web/src/components/Empty.tsx
import { Empty } from 'antd';

export const TMSEmpty: FC&lt;{ description?: string; extra?: ReactNode }&gt; = ({
  description = '暂无数据',
  extra,
}) =&gt; (
  &lt;Empty
    image={Empty.PRESENTED_IMAGE_SIMPLE}    // ← 切到 antd 内置的简版 (单色 SVG)
    imageStyle={{ height: 56 }}
    description={&lt;span style={{ color: 'var(--aw-text-3)', fontSize: 13 }}&gt;{description}&lt;/span&gt;}
  &gt;
    {extra}
  &lt;/Empty&gt;
);

// AntdConfig 注入
&lt;ConfigProvider renderEmpty={() =&gt; &lt;TMSEmpty /&gt;}&gt;
  &lt;App /&gt;
&lt;/ConfigProvider&gt;</code></pre></div>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">作用范围：</b>renderEmpty 同时覆盖 <code>Table</code> / <code>List</code> / <code>Select</code> / <code>TreeSelect</code> / <code>Cascader</code> / <code>Empty</code> 全部空态。整页空态用 <code>&lt;Result /&gt;</code> 而非 Empty，因为前者强制 <code>extra</code> prop。</p>
  </div>

  <div class="subsection">
    <h3>API 约束 · Result 组件强制 extra</h3>
    <div class="code-block"><pre><code>// packages/web/src/components/Result.tsx
// 强制类型: extra 不能为 undefined
type ResultProps = {
  status: 'empty' | 'no-match' | 'error';
  title: string;
  description?: string;
  extra: ReactNode;          // ← 必填,不允许 undefined
  errorCode?: string;        // ← status === 'error' 时必填
};

// 用法 —— 三类空态
&lt;Result status="empty" title="还没有设备" description="添加首台设备开始管理"
  extra={&lt;Button type="primary"&gt;+ 添加设备&lt;/Button&gt;} /&gt;

&lt;Result status="no-match" title="无匹配设备" description="当前筛选条件下查不到设备"
  extra={&lt;Button onClick={clearFilter}&gt;清除筛选&lt;/Button&gt;} /&gt;

&lt;Result status="error" title="加载失败" description="网络超时,请检查网关连通性"
  errorCode="E_TIMEOUT"
  extra={&lt;&gt;&lt;Button type="primary" onClick={retry}&gt;重试&lt;/Button&gt;
    &lt;Button onClick={contactAdmin}&gt;联系管理员&lt;/Button&gt;&lt;/&gt;} /&gt;</code></pre></div>
  </div>

  <div class="subsection">
    <h3>规则 · Do &amp; Don'ts</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ DO</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>每个空态必须给可执行下一步</li>
          <li>区分首次空 / 筛选空 / 错误空 三类</li>
          <li>错误空必带错误码（方括号 + monospace）</li>
          <li>文案前置对象，"X 还没有 / X 加载失败"</li>
          <li>Result 组件强制 extra prop</li>
          <li>空态图标用 32~48px，不要过大</li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ DON'T</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>不要只显示"暂无数据" / "N/A"</li>
          <li>不要混用空态类型（筛选空显示"添加设备"按钮）</li>
          <li>不要在错误空隐藏错误码</li>
          <li>不要在空态用装饰性插画</li>
          <li>不要让空态留白超过 60% 视口高度</li>
          <li>不要在弹层 / 抽屉内显示完整 Result（用 Empty 简化版）</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</div>
`;
