/* AngelWatch Design System — page: upload (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["upload"] = `
<div class="content">
<section class="section" id="upload">
  <p class="section-eyebrow"><span data-i18n="upload:text.001">通用组件 · 上传</span></p>
  <h2><span data-i18n="upload:text.002">上传 Upload</span></h2>
  <p class="lede"><span data-i18n="upload:text.003">固件包上传、批量导入设备 CSV——大文件场景。支持拖拽，显示进度与校验和。</span></p>

  <div class="surface">
    <div class="upload-drop">
<div class="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg></div>
<div class="title"><span data-i18n="upload:text.004">点击或拖拽固件包到此处上传</span></div>
<div class="sub"><span data-i18n="upload:text.005">支持 .zip / .bin · 单个文件不超过 500 MB · 仅限内网</span></div>
    </div>
    <div class="upload-list">
<div class="upload-item success">
  <div class="file-ico">ZIP</div>
  <div class="meta"><div class="name">angelwatch-firmware-v3.5.0-stable.zip</div><div class="info"><span data-i18n="upload:text.006">218.4 MB · sha256: a3f2d8…b7c1 · 已校验</span></div></div>
  <div class="upload-file-actions">
    <span class="upload-complete"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5 9-11"/></svg><span data-i18n="upload:text.084">已完成</span></span>
    <button type="button" class="inline-action upload-download"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M5 20h14"/></svg><span data-i18n="upload:text.083">下载</span></button>
  </div>
</div>
<div class="upload-item">
  <div class="file-ico">ZIP</div>
  <div class="meta">
    <div class="name">angelwatch-firmware-v3.5.0-rc1.zip</div>
    <div class="progress" style="margin-top:2px"><div class="track"><div class="fill" style="width:67%"></div></div><div class="pct" style="font-size:11px">67%</div></div>
  </div>
  <div class="actions"><button class="dialog-close" aria-label="关闭" data-i18n-aria-label="common:close">×</button></div>
</div>
<div class="upload-item">
  <div class="file-ico" style="background:var(--aw-danger-bg);color:var(--aw-danger)">CSV</div>
  <div class="meta"><div class="name">devices-batch-import.csv</div><div class="info" style="color:var(--aw-danger)"><span data-i18n="upload:text.007">校验失败：第 14 行格式错误</span></div></div>
  <div class="actions"><button class="inline-action"><span data-i18n="upload:text.008">重试</span></button></div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="upload:text.085">下载动作 · 状态与能力契约</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="upload:text.086">“上传完成”不等于“允许下载”。下载入口必须由服务端持久化状态、当前用户权限和资源有效性共同决定。</span></p>
    <div class="surface" style="padding:0;overflow:auto">
      <table class="tech-table">
        <thead><tr><th><span data-i18n="upload:text.087">文件状态</span></th><th><span data-i18n="upload:text.088">下载呈现</span></th><th><span data-i18n="upload:text.089">交互与数据契约</span></th></tr></thead>
        <tbody>
          <tr><td><span data-i18n="upload:text.090">仅在本地选择</span></td><td><span data-i18n="upload:text.091">不显示下载</span></td><td><span data-i18n="upload:text.092">浏览器本地对象只用于预览；服务端未持久化前不得伪装成可下载资源。</span></td></tr>
          <tr><td><span data-i18n="upload:text.093">已持久化且有权限</span></td><td><span data-i18n="upload:text.094">显示“下载”</span></td><td><span data-i18n="upload:text.095">仅在服务端明确返回可下载能力后显示，不能只根据上传成功状态推断。</span></td></tr>
          <tr><td><span data-i18n="upload:text.096">准备中 / 下载中</span></td><td><span data-i18n="upload:text.097">Loading 并禁用重复点击</span></td><td><span data-i18n="upload:text.098">一次只发起一个请求；失败后恢复可操作态，并展示可执行的重试原因。</span></td></tr>
          <tr><td><span data-i18n="upload:text.099">权限不足</span></td><td><span data-i18n="upload:text.100">按场景隐藏或禁用并说明原因</span></td><td><span data-i18n="upload:text.101">接口拒绝后刷新下载能力，禁止继续复用旧地址或仅依赖前端权限判断。</span></td></tr>
          <tr><td><span data-i18n="upload:text.102">已删除 / 已过期</span></td><td><span data-i18n="upload:text.103">移除入口或禁用并给出恢复路径</span></td><td><span data-i18n="upload:text.104">下载时重新获取短时有效地址，不在页面状态或本地存储中长期保存。</span></td></tr>
          <tr><td><span data-i18n="upload:text.105">完整性与有效期</span></td><td><span data-i18n="upload:text.106">按业务显示摘要、版本与有效期</span></td><td><span data-i18n="upload:text.107">具体字段名先进入业务能力契约；下载完成后按服务端提供的摘要校验文件完整性。</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="upload:text.009">形态 · 4 种</span></h3>
    <div class="up-form-grid">
      <div class="upf-card">
        <div class="upf-cap"><span data-i18n="upload:text.010">①  单文件 · 简洁选择器</span></div>
        <div class="upf-body">
          <div class="up-inline">
            <div class="up-inline-name"><span class="file-ico">ZIP</span><div><div class="name">angelwatch-firmware-v3.5.0-stable.zip</div><div class="info">218.4 MB</div></div></div>
            <button class="btn btn-sm"><span data-i18n="upload:text.011">替换</span></button>
          </div>
        </div>
      </div>
      <div class="upf-card">
        <div class="upf-cap"><span data-i18n="upload:text.012">②  多文件 · 列表</span></div>
        <div class="upf-body">
          <div class="up-inline"><div class="up-inline-name"><span class="file-ico">PNG</span><div><div class="name">device-photo-001.png</div><div class="info">1.2 MB</div></div></div><span class="x">×</span></div>
          <div class="up-inline"><div class="up-inline-name"><span class="file-ico">PNG</span><div><div class="name">device-photo-002.png</div><div class="info">1.4 MB</div></div></div><span class="x">×</span></div>
          <div class="up-inline"><div class="up-inline-name"><span class="file-ico">PNG</span><div><div class="name">device-photo-003.png</div><div class="info">982 KB</div></div></div><span class="x">×</span></div>
          <button class="btn btn-sm" style="width:100%;margin-top:6px"><span data-i18n="upload:text.013">+ 添加图片（最多 9 张）</span></button>
        </div>
      </div>
      <div class="upf-card">
        <div class="upf-cap"><span data-i18n="upload:text.014">③  拖拽区 · 多文件</span></div>
        <div class="upf-body">
          <div class="upload-drop dragover">
            <div class="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg></div>
            <div class="title"><span data-i18n="upload:text.015">松开鼠标上传 12 个文件</span></div>
            <div class="sub"><span data-i18n="upload:text.016">将自动识别 APK / OTA 包 / CSV 类型</span></div>
          </div>
        </div>
      </div>
      <div class="upf-card">
        <div class="upf-cap"><span data-i18n="upload:text.017">④  内嵌行内 · 表单字段</span></div>
        <div class="upf-body">
          <div class="lr-field"><div class="ls-lab"><span data-i18n="upload:text.018">证书文件</span></div>
            <div class="up-inline-row">
              <div class="up-inline-empty"><span data-i18n="upload:text.019">未选择文件 (.pem / .crt / .key)</span></div>
              <button class="btn btn-sm"><span data-i18n="upload:text.020">选择文件</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="upload:text.021">大文件分片 · 续传 / 并发</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="upload:text.022">&gt; 100 MB 文件自动切片。分片大小 5 MB，并发 3 个 chunk。中断后下次选同一文件自动恢复（按 sha256 + 文件大小匹配 chunk 索引）。</span></p>
    <div class="surface">
      <div class="up-chunk-row">
        <span class="file-ico">BIN</span>
        <div class="up-chunk-meta">
          <div class="name">angelwatch-firmware-v3.5.0-rc1.bin</div>
          <div class="up-chunk-bar">
            <div class="chk done"></div><div class="chk done"></div><div class="chk done"></div><div class="chk done"></div><div class="chk done"></div>
            <div class="chk done"></div><div class="chk done"></div><div class="chk done"></div><div class="chk done"></div><div class="chk done"></div>
            <div class="chk active"></div><div class="chk active"></div><div class="chk active"></div>
            <div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div>
          </div>
          <div class="info" style="margin-top:6px"><span data-i18n="upload:text.023">10 / 20 分片完成 · 3 并发 · 上传中 · 7.2 MB/s · 剩余约 1m 12s</span></div>
        </div>
        <div class="up-chunk-act">
          <button class="btn btn-sm"><span data-i18n="upload:text.024">暂停</span></button>
          <button class="btn btn-sm btn-ghost-danger"><span data-i18n="upload:text.025">取消</span></button>
        </div>
      </div>
      <div class="up-chunk-row" style="margin-top:10px">
        <span class="file-ico" style="background:var(--aw-warning-bg);color:var(--aw-warning)">BIN</span>
        <div class="up-chunk-meta">
          <div class="name">angelwatch-firmware-v3.5.0-rc2.bin <span class="tag-meta" style="background:var(--aw-warning-bg);color:var(--aw-warning);margin-left:4px"><span data-i18n="upload:text.026">已暂停</span></span></div>
          <div class="up-chunk-bar">
            <div class="chk done"></div><div class="chk done"></div><div class="chk done"></div><div class="chk done"></div>
            <div class="chk paused"></div>
            <div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div>
          </div>
          <div class="info" style="margin-top:6px"><span data-i18n="upload:text.027">4 / 20 分片完成 · 网络中断后已自动暂停，点击"继续"将从 chunk 5 开始</span></div>
        </div>
        <div class="up-chunk-act">
          <button class="btn btn-sm btn-primary"><span data-i18n="upload:text.028">继续</span></button>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="upload:text.029">进度态 · 进度环</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="upload:text.030">行内场景（如设备卡片头像替换），用 24px 进度环替代横条。点击中心 × 取消上传。</span></p>
    <div class="surface">
      <div class="row" style="gap:24px;align-items:center">
        <div class="up-ring" style="--p:18">
          <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" class="bg"/><circle cx="16" cy="16" r="14" class="fg" style="stroke-dasharray:88;stroke-dashoffset:72"/></svg>
          <div class="pct">18%</div>
        </div>
        <div class="up-ring">
          <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" class="bg"/><circle cx="16" cy="16" r="14" class="fg" style="stroke-dasharray:88;stroke-dashoffset:35"/></svg>
          <div class="pct">60%</div>
        </div>
        <div class="up-ring done">
          <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" class="bg"/><circle cx="16" cy="16" r="14" class="fg done" style="stroke-dasharray:88;stroke-dashoffset:0"/></svg>
          <div class="pct">✓</div>
        </div>
        <div class="up-ring err">
          <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" class="bg"/><circle cx="16" cy="16" r="14" class="fg err" style="stroke-dasharray:88;stroke-dashoffset:48"/></svg>
          <div class="pct">×</div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="upload:text.031">失败重试</span></h3>
    <div class="surface">
      <div class="up-fail-row">
        <span class="file-ico" style="background:var(--aw-danger-bg);color:var(--aw-danger)">CSV</span>
        <div class="meta">
          <div class="name">devices-batch-import.csv <span class="tag-meta" style="background:var(--aw-danger-bg);color:var(--aw-danger);margin-left:4px"><span data-i18n="upload:text.032">失败</span></span></div>
          <div class="info" style="color:var(--aw-danger)"><span data-i18n="upload:text.033">第 14 行 SN 字段格式错误（不应包含空格）</span></div>
          <div class="info" style="font-family:var(--aw-font-mono);font-size:11px;color:var(--aw-text-3);margin-top:2px">err_code=CSV_INVALID_FORMAT · trace=4f8a-2c1b</div>
        </div>
        <div class="up-fail-act">
          <button class="btn btn-sm"><span data-i18n="upload:text.034">查看错误行</span></button>
          <button class="btn btn-sm btn-primary"><span data-i18n="upload:text.035">重试</span></button>
        </div>
      </div>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="upload:text.036">重试策略：</span></strong><span data-i18n="upload:text.037">仅失败 chunk 重传；超过 3 次自动停止并提示用户检查网络。错误码必须暴露 traceId，便于 SRE 拉日志。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="upload:text.038">多类型预览 · 4 类高频</span></h3>
    <div class="up-prev-grid">
      <div class="upp-card">
        <div class="upp-cap"><span data-i18n="upload:text.039">①  图像 · 缩略图 + 双击放大</span></div>
        <div class="upp-body">
          <div class="upp-thumb-row">
            <div class="upp-thumb"><div class="t-img" style="background:linear-gradient(135deg,#165DFF,#7B2CBF)"></div><div class="t-name">device-1.png</div></div>
            <div class="upp-thumb"><div class="t-img" style="background:linear-gradient(135deg,#52C41A,#FAAD14)"></div><div class="t-name">device-2.png</div></div>
            <div class="upp-thumb"><div class="t-img" style="background:linear-gradient(135deg,#722ED1,#13C2C2)"></div><div class="t-name">device-3.png</div></div>
          </div>
        </div>
      </div>
      <div class="upp-card">
        <div class="upp-cap"><span data-i18n="upload:text.040">②  音频 · 内嵌 player</span></div>
        <div class="upp-body">
          <div class="upp-audio">
            <button class="upp-play">▶</button>
            <div class="upp-wave"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
            <div class="upp-time">00:14 / 02:48</div>
          </div>
          <div class="info" style="font-size:11px;color:var(--aw-text-3);margin-top:6px">notification-tone-default.mp3 · 320 kbps · 6.8 MB</div>
        </div>
      </div>
      <div class="upp-card">
        <div class="upp-cap"><span data-i18n="upload:text.041">③  应用 APK · 包元信息</span></div>
        <div class="upp-body">
          <div class="upp-apk">
            <div class="upp-apk-icn">A</div>
            <div class="upp-apk-meta">
              <div class="name">com.angelwatch.terminal</div>
              <div class="info">v3.5.0 (build 5024) · ARM64 · 28.4 MB</div>
              <div class="info" style="margin-top:2px"><span data-i18n="upload:text.042">权限 12 项 · minSdk 24 · targetSdk 34</span></div>
            </div>
            <button class="btn btn-sm"><span data-i18n="upload:text.043">详情</span></button>
          </div>
        </div>
      </div>
      <div class="upp-card">
        <div class="upp-cap"><span data-i18n="upload:text.044">④  OTA 包 · 校验和</span></div>
        <div class="upp-body">
          <div class="upp-ota">
            <div class="upp-ota-row"><div class="k"><span data-i18n="upload:text.045">版本</span></div><div class="v">v3.5.0-stable</div></div>
            <div class="upp-ota-row"><div class="k"><span data-i18n="upload:text.046">设备机型</span></div><div class="v">AW-Pro 5 / AW-Pro 5 Plus</div></div>
            <div class="upp-ota-row"><div class="k"><span data-i18n="upload:text.047">大小</span></div><div class="v">218.4 MB</div></div>
            <div class="upp-ota-row"><div class="k">SHA-256</div><div class="v" style="font-family:var(--aw-font-mono);font-size:11px">a3f2d8c4e7b9...b7c1</div></div>
            <div class="upp-ota-row"><div class="k"><span data-i18n="upload:text.048">签名</span></div><div class="v"><span class="status-dot online"><span data-i18n="upload:text.049">已校验</span></span></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="upload:text.050">约束提示文案 · 标准模板</span></h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:130px"><span data-i18n="upload:text.051">约束</span></th><th style="width:280px"><span data-i18n="upload:text.052">提示文案</span></th><th><span data-i18n="upload:text.053">说明</span></th></tr></thead>
        <tbody>
          <tr><td><span data-i18n="upload:text.054">容量上限</span></td><td><span data-i18n="upload:text.055">单个文件不超过 500 MB</span></td><td><span data-i18n="upload:text.056">明确数字，禁止用"较大文件"等模糊词</span></td></tr>
          <tr><td><span data-i18n="upload:text.057">容量超限</span></td><td><span data-i18n="upload:text.058">所选文件 720 MB 超过 500 MB 限制</span></td><td><span data-i18n="upload:text.059">同时显示"实际"与"限制"</span></td></tr>
          <tr><td><span data-i18n="upload:text.060">格式限定</span></td><td><span data-i18n="upload:text.061">支持 .zip / .bin · 不支持 .tar.gz</span></td><td><span data-i18n="upload:text.062">支持 + 不支持都列出，避免反复试错</span></td></tr>
          <tr><td><span data-i18n="upload:text.063">数量上限</span></td><td><span data-i18n="upload:text.064">最多上传 9 张图片（已选 9 张）</span></td><td><span data-i18n="upload:text.065">实时反馈已选数量</span></td></tr>
          <tr><td><span data-i18n="upload:text.066">分辨率约束</span></td><td><span data-i18n="upload:text.067">建议 ≥ 800 × 600，过低会自动放大模糊</span></td><td><span data-i18n="upload:text.068">软约束用"建议"，硬约束用"必须"</span></td></tr>
          <tr><td><span data-i18n="upload:text.069">权限不足</span></td><td><span data-i18n="upload:text.070">仅项目管理员可上传 OTA 包，请联系管理员</span></td><td><span data-i18n="upload:text.071">含解决路径，不止于"权限不足"</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="upload:text.072">反例</span></h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong><span data-i18n="upload:text.073">不要在大文件上传时阻塞 UI：</span></strong><span data-i18n="upload:text.074">必须 worker 异步切片 + 后台续传，主线程 freeze 用户必须放弃。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="upload:text.075">不要在失败时只显示"上传失败"四个字：</span></strong><span data-i18n="upload:text.076">必须给出原因 + traceId + 下一步动作（重试 / 修改文件 / 联系支持）。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="upload:text.077">不要在拖拽区使用 hover 态做"高亮可放下"判断：</span></strong><span data-i18n="upload:text.078">用 dragover 的 dragenter/dragleave 事件，否则用户点击进入再移开会误以为已经上传。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="upload:text.079">涉及变量</span></h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div><span data-i18n="upload:text.080">--aw-primary (进度填充) · --aw-success / --aw-warning / --aw-danger (状态)</span></div>
      <div style="margin-top:4px"><span data-i18n="upload:text.081">--aw-fill-1 / -2 (拖拽区底色) · --aw-border-1 / -2 (边框)</span></div>
      <div style="margin-top:4px"><span data-i18n="upload:text.082">分片大小 5 MB · 并发 3 · 重试上限 3 次（业务 const）</span></div>
    </div>
  </div>
  <div class="subsection"><h3><span data-i18n="common:component.usedBy">页面蓝图使用场景</span></h3><div class="blueprint-notes"><span><a href="#/market-page">MarketPage</a></span><span><a href="#/ota-page">OtaPage</a></span></div></div>
</section>
</div>
`;
