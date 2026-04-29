/* AngelWatch Design System — page: upload (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["upload"] = `
<div class="content">
<section class="section" id="upload">
  <p class="section-eyebrow">Components · 上传</p>
  <h2>Upload</h2>
  <p class="lede">固件包上传、批量导入设备 CSV——大文件场景。支持拖拽，显示进度与校验和。</p>

  <div class="surface">
    <div class="upload-drop">
<div class="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg></div>
<div class="title">点击或拖拽固件包到此处上传</div>
<div class="sub">支持 .zip / .bin · 单个文件不超过 500 MB · 仅限内网</div>
    </div>
    <div class="upload-list">
<div class="upload-item success">
  <div class="file-ico">ZIP</div>
  <div class="meta"><div class="name">angelwatch-firmware-v3.5.0-stable.zip</div><div class="info">218.4 MB · sha256: a3f2d8…b7c1 · 已校验</div></div>
  <div class="actions"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--aw-success)" stroke-width="2.5"><path d="M5 12l5 5 9-11"/></svg></div>
</div>
<div class="upload-item">
  <div class="file-ico">ZIP</div>
  <div class="meta">
    <div class="name">angelwatch-firmware-v3.5.0-rc1.zip</div>
    <div class="progress" style="margin-top:2px"><div class="track"><div class="fill" style="width:67%"></div></div><div class="pct" style="font-size:11px">67%</div></div>
  </div>
  <div class="actions"><span style="cursor:pointer;font-size:14px">×</span></div>
</div>
<div class="upload-item">
  <div class="file-ico" style="background:var(--aw-danger-bg);color:var(--aw-danger)">CSV</div>
  <div class="meta"><div class="name">devices-batch-import.csv</div><div class="info" style="color:var(--aw-danger)">校验失败：第 14 行格式错误</div></div>
  <div class="actions"><span style="cursor:pointer;color:var(--aw-primary);font-size:12px">重试</span></div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3>形态 · 4 种</h3>
    <div class="up-form-grid">
      <div class="upf-card">
        <div class="upf-cap">①  单文件 · 简洁选择器</div>
        <div class="upf-body">
          <div class="up-inline">
            <div class="up-inline-name"><span class="file-ico">ZIP</span><div><div class="name">angelwatch-firmware-v3.5.0-stable.zip</div><div class="info">218.4 MB</div></div></div>
            <button class="btn btn-sm">替换</button>
          </div>
        </div>
      </div>
      <div class="upf-card">
        <div class="upf-cap">②  多文件 · 列表</div>
        <div class="upf-body">
          <div class="up-inline"><div class="up-inline-name"><span class="file-ico">PNG</span><div><div class="name">device-photo-001.png</div><div class="info">1.2 MB</div></div></div><span class="x">×</span></div>
          <div class="up-inline"><div class="up-inline-name"><span class="file-ico">PNG</span><div><div class="name">device-photo-002.png</div><div class="info">1.4 MB</div></div></div><span class="x">×</span></div>
          <div class="up-inline"><div class="up-inline-name"><span class="file-ico">PNG</span><div><div class="name">device-photo-003.png</div><div class="info">982 KB</div></div></div><span class="x">×</span></div>
          <button class="btn btn-sm" style="width:100%;margin-top:6px">+ 添加图片（最多 9 张）</button>
        </div>
      </div>
      <div class="upf-card">
        <div class="upf-cap">③  拖拽区 · 多文件</div>
        <div class="upf-body">
          <div class="upload-drop dragover">
            <div class="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg></div>
            <div class="title">松开鼠标上传 12 个文件</div>
            <div class="sub">将自动识别 APK / OTA 包 / CSV 类型</div>
          </div>
        </div>
      </div>
      <div class="upf-card">
        <div class="upf-cap">④  内嵌行内 · 表单字段</div>
        <div class="upf-body">
          <div class="lr-field"><div class="ls-lab">证书文件</div>
            <div class="up-inline-row">
              <div class="up-inline-empty">未选择文件 (.pem / .crt / .key)</div>
              <button class="btn btn-sm">选择文件</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>大文件分片 · 续传 / 并发</h3>
    <p class="lede" style="margin-bottom:12px">&gt; 100 MB 文件自动切片。分片大小 5 MB，并发 3 个 chunk。中断后下次选同一文件自动恢复（按 sha256 + 文件大小匹配 chunk 索引）。</p>
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
          <div class="info" style="margin-top:6px">10 / 20 分片完成 · 3 并发 · 上传中 · 7.2 MB/s · 剩余约 1m 12s</div>
        </div>
        <div class="up-chunk-act">
          <button class="btn btn-sm">暂停</button>
          <button class="btn btn-sm btn-ghost-danger">取消</button>
        </div>
      </div>
      <div class="up-chunk-row" style="margin-top:10px">
        <span class="file-ico" style="background:var(--aw-warning-bg);color:var(--aw-warning)">BIN</span>
        <div class="up-chunk-meta">
          <div class="name">angelwatch-firmware-v3.5.0-rc2.bin <span class="tag-meta" style="background:var(--aw-warning-bg);color:#D48806;margin-left:4px">已暂停</span></div>
          <div class="up-chunk-bar">
            <div class="chk done"></div><div class="chk done"></div><div class="chk done"></div><div class="chk done"></div>
            <div class="chk paused"></div>
            <div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div><div class="chk"></div>
          </div>
          <div class="info" style="margin-top:6px">4 / 20 分片完成 · 网络中断后已自动暂停，点击"继续"将从 chunk 5 开始</div>
        </div>
        <div class="up-chunk-act">
          <button class="btn btn-sm btn-primary">继续</button>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>进度态 · 进度环</h3>
    <p class="lede" style="margin-bottom:12px">行内场景（如设备卡片头像替换），用 24px 进度环替代横条。点击中心 × 取消上传。</p>
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
    <h3>失败重试</h3>
    <div class="surface">
      <div class="up-fail-row">
        <span class="file-ico" style="background:var(--aw-danger-bg);color:var(--aw-danger)">CSV</span>
        <div class="meta">
          <div class="name">devices-batch-import.csv <span class="tag-meta" style="background:var(--aw-danger-bg);color:var(--aw-danger);margin-left:4px">失败</span></div>
          <div class="info" style="color:var(--aw-danger)">第 14 行 SN 字段格式错误（不应包含空格）</div>
          <div class="info" style="font-family:var(--aw-font-mono);font-size:11px;color:var(--aw-text-3);margin-top:2px">err_code=CSV_INVALID_FORMAT · trace=4f8a-2c1b</div>
        </div>
        <div class="up-fail-act">
          <button class="btn btn-sm">查看错误行</button>
          <button class="btn btn-sm btn-primary">重试</button>
        </div>
      </div>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong>重试策略：</strong>仅失败 chunk 重传；超过 3 次自动停止并提示用户检查网络。错误码必须暴露 traceId，便于 SRE 拉日志。</div></div>
  </div>

  <div class="subsection">
    <h3>多类型预览 · 4 类高频</h3>
    <div class="up-prev-grid">
      <div class="upp-card">
        <div class="upp-cap">①  图像 · 缩略图 + 双击放大</div>
        <div class="upp-body">
          <div class="upp-thumb-row">
            <div class="upp-thumb"><div class="t-img" style="background:linear-gradient(135deg,#0052CC,#7B2CBF)"></div><div class="t-name">device-1.png</div></div>
            <div class="upp-thumb"><div class="t-img" style="background:linear-gradient(135deg,#52C41A,#FAAD14)"></div><div class="t-name">device-2.png</div></div>
            <div class="upp-thumb"><div class="t-img" style="background:linear-gradient(135deg,#722ED1,#13C2C2)"></div><div class="t-name">device-3.png</div></div>
          </div>
        </div>
      </div>
      <div class="upp-card">
        <div class="upp-cap">②  音频 · 内嵌 player</div>
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
        <div class="upp-cap">③  应用 APK · 包元信息</div>
        <div class="upp-body">
          <div class="upp-apk">
            <div class="upp-apk-icn">A</div>
            <div class="upp-apk-meta">
              <div class="name">com.angelwatch.terminal</div>
              <div class="info">v3.5.0 (build 5024) · ARM64 · 28.4 MB</div>
              <div class="info" style="margin-top:2px">权限 12 项 · minSdk 24 · targetSdk 34</div>
            </div>
            <button class="btn btn-sm">详情</button>
          </div>
        </div>
      </div>
      <div class="upp-card">
        <div class="upp-cap">④  OTA 包 · 校验和</div>
        <div class="upp-body">
          <div class="upp-ota">
            <div class="upp-ota-row"><div class="k">版本</div><div class="v">v3.5.0-stable</div></div>
            <div class="upp-ota-row"><div class="k">设备机型</div><div class="v">AW-Pro 5 / AW-Pro 5 Plus</div></div>
            <div class="upp-ota-row"><div class="k">大小</div><div class="v">218.4 MB</div></div>
            <div class="upp-ota-row"><div class="k">SHA-256</div><div class="v" style="font-family:var(--aw-font-mono);font-size:11px">a3f2d8c4e7b9...b7c1</div></div>
            <div class="upp-ota-row"><div class="k">签名</div><div class="v"><span class="status-dot online">已校验</span></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>约束提示文案 · 标准模板</h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:130px">约束</th><th style="width:280px">提示文案</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td>容量上限</td><td>单个文件不超过 500 MB</td><td>明确数字，禁止用"较大文件"等模糊词</td></tr>
          <tr><td>容量超限</td><td>所选文件 720 MB 超过 500 MB 限制</td><td>同时显示"实际"与"限制"</td></tr>
          <tr><td>格式限定</td><td>支持 .zip / .bin · 不支持 .tar.gz</td><td>支持 + 不支持都列出，避免反复试错</td></tr>
          <tr><td>数量上限</td><td>最多上传 9 张图片（已选 9 张）</td><td>实时反馈已选数量</td></tr>
          <tr><td>分辨率约束</td><td>建议 ≥ 800 × 600，过低会自动放大模糊</td><td>软约束用"建议"，硬约束用"必须"</td></tr>
          <tr><td>权限不足</td><td>仅项目管理员可上传 OTA 包，请联系管理员</td><td>含解决路径，不止于"权限不足"</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3>反例</h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong>不要在大文件上传时阻塞 UI：</strong>必须 worker 异步切片 + 后台续传，主线程 freeze 用户必须放弃。</div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>不要在失败时只显示"上传失败"四个字：</strong>必须给出原因 + traceId + 下一步动作（重试 / 修改文件 / 联系支持）。</div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong>不要在拖拽区使用 hover 态做"高亮可放下"判断：</strong>用 dragover 的 dragenter/dragleave 事件，否则用户点击进入再移开会误以为已经上传。</div></div>
  </div>

  <div class="subsection">
    <h3>涉及变量</h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div>--aw-primary (进度填充) · --aw-success / --aw-warning / --aw-danger (状态)</div>
      <div style="margin-top:4px">--aw-fill-1 / -2 (拖拽区底色) · --aw-border-1 / -2 (边框)</div>
      <div style="margin-top:4px">分片大小 5 MB · 并发 3 · 重试上限 3 次（业务 const）</div>
    </div>
  </div>
</section>
</div>
`;
