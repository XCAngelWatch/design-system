/* AngelWatch Design System — page: copywriting (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["copywriting"] = `
<div class="content">
<section class="section" id="copywriting">
  <p class="section-eyebrow">Specs · 文案</p>
  <h2>Copywriting · 文案规范</h2>
  <p class="lede">UI 文案是产品的口头表达 —— 一致、精简、有用，比"漂亮"更重要。本页固化术语锁定表、人称、按钮文案、错误文案、空状态文案、标点与中英混排的全部约定。所有可见字符串必须通过 <code>t('namespace.key')</code> 包裹，硬编码字符串在 stylelint / lint 阶段会被拒。</p>

  <div class="subsection">
    <h3>七项文案原则</h3>
    <div class="demo-grid cols-2">
      <div class="surface"><div class="tag-meta" style="margin-bottom:6px">01 · 立足点</div><div style="font-size:13px;color:var(--aw-text-2);line-height:1.7">关注用户能用产品做什么 —— "推送固件"而非"系统正在为您完成固件分发"。</div></div>
      <div class="surface"><div class="tag-meta" style="margin-bottom:6px">02 · 精简</div><div style="font-size:13px;color:var(--aw-text-2);line-height:1.7">删掉一切可删的虚词。"请确认是否要删除该项设备"→"删除 1 台设备?"</div></div>
      <div class="surface"><div class="tag-meta" style="margin-bottom:6px">03 · 一致</div><div style="font-size:13px;color:var(--aw-text-2);line-height:1.7">同一对象同一术语贯穿全系统。"设备 / 终端 / 装置"不混用 —— 锁定为"设备"。</div></div>
      <div class="surface"><div class="tag-meta" style="margin-bottom:6px">04 · 易懂</div><div style="font-size:13px;color:var(--aw-text-2);line-height:1.7">用运维人员熟悉的语言。避免"鉴权失败"，用"登录已过期，请重新登录"。</div></div>
      <div class="surface"><div class="tag-meta" style="margin-bottom:6px">05 · 突出</div><div style="font-size:13px;color:var(--aw-text-2);line-height:1.7">关键信息前置。"删除 28 台设备 (含 3 台在线)"前置数量。</div></div>
      <div class="surface"><div class="tag-meta" style="margin-bottom:6px">06 · 完整</div><div style="font-size:13px;color:var(--aw-text-2);line-height:1.7">说清楚后果。错误信息三层："做了什么 + 为什么 + 怎么办"。</div></div>
      <div class="surface" style="grid-column:span 2"><div class="tag-meta" style="margin-bottom:6px">07 · 精准</div><div style="font-size:13px;color:var(--aw-text-2);line-height:1.7">时间 / 数字 / 状态字面量与系统数据一致。"刚刚"在 i18n 中是 30 秒内，超出严格回退到"X 分钟前"，不模糊处理。</div></div>
    </div>
  </div>

  <div class="subsection">
    <h3>TMS 术语锁定表</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">下表为系统级专有名词，跨四语 zh-CN / en / es / pt 锁定。新增术语必须先 PR 到 <code>@tms/i18n</code> 词表，再在业务代码引用。</p>
    <table class="map-table">
      <thead><tr><th>对象</th><th>zh-CN</th><th>en</th><th>es</th><th>pt</th></tr></thead>
      <tbody>
        <tr><td>设备实体</td><td>设备</td><td>Device</td><td>Dispositivo</td><td>Dispositivo</td></tr>
        <tr><td>设备状态</td><td>在线 / 离线 / 升级中 / 锁定 / 故障 / 已退役</td><td>Online / Offline / Upgrading / Locked / Faulty / Retired</td><td>En línea / Sin conexión / Actualizando / Bloqueado / Fallo / Retirado</td><td>Online / Offline / Atualizando / Bloqueado / Falha / Aposentado</td></tr>
        <tr><td>固件</td><td>固件</td><td>Firmware</td><td>Firmware</td><td>Firmware</td></tr>
        <tr><td>升级包</td><td>升级包</td><td>OTA Package</td><td>Paquete OTA</td><td>Pacote OTA</td></tr>
        <tr><td>推送批次</td><td>推送批次</td><td>Push Batch</td><td>Lote de envío</td><td>Lote de envio</td></tr>
        <tr><td>心跳</td><td>心跳</td><td>Heartbeat</td><td>Latido</td><td>Pulso</td></tr>
        <tr><td>租户</td><td>租户</td><td>Tenant</td><td>Inquilino</td><td>Inquilino</td></tr>
        <tr><td>角色</td><td>管理员 / 运维 / 只读</td><td>Admin / Operator / Viewer</td><td>Admin / Operador / Lector</td><td>Admin / Operador / Leitor</td></tr>
        <tr><td>动作</td><td>推送 / 解绑 / 锁定 / 重启 / 回滚 / 退役</td><td>Push / Unbind / Lock / Reboot / Rollback / Retire</td><td>Enviar / Desvincular / Bloquear / Reiniciar / Revertir / Retirar</td><td>Enviar / Desvincular / Bloquear / Reiniciar / Reverter / Aposentar</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>人称与语气</h3>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ 推荐</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>用「你」和「我」拉近距离，不用"您"</li>
          <li>主动语态："已推送"、"已删除"</li>
          <li>引导而非命令："建议先备份"</li>
          <li>错误信息陈述事实 + 给路径："网络超时，请检查网关连通性"</li>
          <li>系统主语多用第一人称："我已为你保留草稿"</li>
        </ul>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ 避免</h3>
        <ul style="margin:0;padding-left:18px;font-size:13px;color:var(--aw-text-2);line-height:1.9">
          <li>过于客气的"您"（运维场景反而疏远）</li>
          <li>被动模糊："系统出错"、"操作失败"</li>
          <li>命令式："不能" / "禁止" / "不要"（用"暂不支持"、"先 X 再 Y"）</li>
          <li>绝对化："绝不"、"永远不"、"必然"</li>
          <li>双关 / 网络梗 / 拟人卖萌（运维场景严肃）</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>按钮文案 · Button Copy</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">动词在前 + 对象明示。破坏性按钮必须含数量 / 对象，不允许"确定"、"是"这种空话。</p>
    <table class="map-table">
      <thead><tr><th style="width:24%">场景</th><th style="width:30%">推荐</th><th style="width:30%">避免</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>添加</td><td>+ 添加设备</td><td>新增 / 创建</td><td>动词锁定"添加"，对象明示</td></tr>
        <tr><td>删除单条</td><td>删除</td><td>移除 / 清除</td><td>词锁定"删除"</td></tr>
        <tr><td>批量删除</td><td>删除 28 台设备</td><td>批量删除 / 删除选中</td><td>必须含数量与对象</td></tr>
        <tr><td>推送</td><td>推送至 28 台</td><td>开始 / 执行</td><td>带目标范围</td></tr>
        <tr><td>取消</td><td>取消</td><td>返回 / 关闭</td><td>取消 vs 返回 vs 关闭语义不同</td></tr>
        <tr><td>确认（破坏性）</td><td>确认删除</td><td>确定 / 是</td><td>动作明示，不让用户回想前文</td></tr>
        <tr><td>提交表单</td><td>保存设置 / 完成创建</td><td>提交 / 确认</td><td>结果导向，告诉用户做了啥</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>错误文案三层结构</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">所有错误必须包含三个要素：<b>做了什么</b>（用户感知的操作）+ <b>为什么</b>（具体原因）+ <b>怎么办</b>（下一步可执行动作）。错误码作为第四要素 tooltip 暴露，便于运维定位。</p>
    <div class="demo-grid cols-2">
      <div class="surface" style="border-left:3px solid var(--aw-success)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-success)">✓ 完整三层</h3>
        <div style="font-size:13px;color:var(--aw-text-2);line-height:1.8;background:var(--aw-fill-1);padding:12px;border-radius:4px">
          <div><b>推送失败</b> · 网关 GW-007 离线超过 5 分钟。</div>
          <div style="margin-top:6px;color:var(--aw-text-3);font-size:12px">先恢复网关连接，或选择其他设备重试 · <span class="mono">[E_PUSH_GW_OFFLINE]</span></div>
        </div>
      </div>
      <div class="surface" style="border-left:3px solid var(--aw-danger)">
        <h3 style="margin:0 0 12px;font-size:14px;color:var(--aw-danger)">✕ 避免</h3>
        <div style="font-size:13px;color:var(--aw-text-2);line-height:1.8;background:var(--aw-fill-1);padding:12px;border-radius:4px">
          <div>操作失败，请稍后重试。</div>
          <div style="margin-top:6px;color:var(--aw-text-3);font-size:12px">— 没有"做了什么"，没有"为什么"，没有"怎么办"，运维只能猜</div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>空状态文案 · Empty Copy</h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px">空状态必须给"下一步"，不能只说"暂无数据"。三种空态对应不同文案模板。</p>
    <table class="map-table">
      <thead><tr><th style="width:22%">空态类型</th><th style="width:32%">推荐文案</th><th>下一步操作</th></tr></thead>
      <tbody>
        <tr><td><b>首次空</b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">用户尚无数据</div></td><td>"还没有设备 / 添加首台设备开始管理"</td><td><span class="mono">+ 添加设备</span> 主按钮</td></tr>
        <tr><td><b>筛选空</b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">条件无匹配</div></td><td>"当前筛选条件下无匹配设备"</td><td><span class="mono">清除筛选</span> 次按钮</td></tr>
        <tr><td><b>错误空</b><div style="font-size:11px;color:var(--aw-text-3);margin-top:2px">请求失败</div></td><td>"加载失败，请检查网络"</td><td><span class="mono">重试</span> + <span class="mono">联系管理员</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>标点 / 大小写 / 中英混排</h3>
    <table class="map-table">
      <thead><tr><th style="width:28%">规则</th><th style="width:32%">推荐</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>标题不加句号</td><td>"设备列表" 而非 "设备列表。"</td><td>标签 / 标题 / 占位提示统一省句号</td></tr>
        <tr><td>感叹号克制</td><td>仅"成功 / 完成"等强情感场景</td><td>不在错误 / 警告 / 默认提示用</td></tr>
        <tr><td>省略号半角</td><td><span class="mono">…</span>（U+2026）</td><td>不用三个英文点 <span class="mono">...</span></td></tr>
        <tr><td>中英文之间空格</td><td>"运行 antd v6 框架"</td><td>数字 / 英文 / 单位 与中文之间半角空格</td></tr>
        <tr><td>专有名词大小写</td><td>Ant Design / antd / OTA / SN / IMEI</td><td>全称首字母大写，缩写全大写</td></tr>
        <tr><td>统计数字阿拉伯</td><td>"在线 28 台" 而非 "在线二十八台"</td><td>所有可比对的数字用阿拉伯</td></tr>
        <tr><td>百分号紧贴数字</td><td><span class="mono">98.20%</span></td><td>不空格</td></tr>
        <tr><td>列表项末尾</td><td>不加标点</td><td>统一对齐</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3>时间戳文案</h3>
    <table class="map-table">
      <thead><tr><th style="width:28%">距现在</th><th style="width:34%">展示</th><th>说明</th></tr></thead>
      <tbody>
        <tr><td>≤ 30 秒</td><td>"刚刚"</td><td>实时性场景；超 30 秒严格切换</td></tr>
        <tr><td>30 秒 ~ 1 小时</td><td>"5 分钟前"</td><td>整数分钟</td></tr>
        <tr><td>1 ~ 24 小时</td><td>"3 小时前"</td><td>整数小时</td></tr>
        <tr><td>当日</td><td>"今天 14:32"</td><td>同日内统一前缀</td></tr>
        <tr><td>昨天</td><td>"昨天 14:32"</td><td>跨日内统一前缀</td></tr>
        <tr><td>2 ~ 7 天前</td><td>"3 天前 · 14:32"</td><td>本周内</td></tr>
        <tr><td>≥ 7 天</td><td>"2026-04-15"</td><td>回退绝对日期</td></tr>
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--aw-text-3);margin:14px 0 0;line-height:1.7"><b style="color:var(--aw-text-2)">Tooltip：</b>所有相对时间 hover 后显示完整 ISO 时间 <span class="mono">2026-04-28 14:32:18 +08:00</span>，便于精确定位。</p>
  </div>
</section>
</div>
`;
