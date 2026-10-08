/* AngelWatch Design System — page: row-actions */
(function () {
  // Shared AngelWatch icon symbols — one canonical geometry source for all component demos.
  var ICN = {
    detail:   '<svg class="aw-icon" aria-hidden="true"><use href="#aw-icon-eye"></use></svg>',
    edit:     '<svg class="aw-icon" aria-hidden="true"><use href="#aw-icon-edit"></use></svg>',
    del:      '<svg class="aw-icon" aria-hidden="true"><use href="#aw-icon-trash"></use></svg>',
    push:     '<svg class="aw-icon" aria-hidden="true"><use href="#aw-icon-send"></use></svg>',
    upgrade:  '<svg class="aw-icon" aria-hidden="true"><use href="#aw-icon-arrow-up"></use></svg>',
    log:      '<svg class="aw-icon" aria-hidden="true"><use href="#aw-icon-file-text"></use></svg>',
    copy:     '<svg class="aw-icon" aria-hidden="true"><use href="#aw-icon-copy"></use></svg>',
    toggle:   '<svg class="aw-icon" aria-hidden="true"><use href="#aw-icon-power"></use></svg>',
    reset:    '<svg class="aw-icon" aria-hidden="true"><use href="#aw-icon-refresh"></use></svg>',
    download: '<svg class="aw-icon" aria-hidden="true"><use href="#aw-icon-cloud-download"></use></svg>',
    exp:      '<svg class="aw-icon" aria-hidden="true"><use href="#aw-icon-arrow-up"></use></svg>',
    more:     '<svg class="aw-icon" aria-hidden="true"><use href="#aw-icon-more"></use></svg>'
  };

  (window.__AW_PAGES__ = window.__AW_PAGES__ || {})["row-actions"] = `
<div class="content">
<section class="section" id="row-actions">
  <p class="section-eyebrow"><span data-i18n="row-actions:text.001">业务模式 · 行操作</span></p>
  <h2 role="heading" aria-level="1"><span data-i18n="row-actions:text.002">行操作 RowActions</span></h2>
  <p class="lede"><span data-i18n="row-actions:text.003">表格和卡片最多直接展示 1 个主操作与 1 个常用辅助操作；窄容器保留主操作，其余收入更多。只有一个普通操作时直接展示。主次由业务用途与状态指定，危险操作分隔后置底。</span></p>

  <div class="subsection">
    <h3><span data-i18n="row-actions:text.004">动作词汇与语义</span></h3>
    <div class="surface">
      <div class="ra-grid">
        <div class="ra-cell"><div class="ra-icn">${ICN.detail}</div><div class="ra-name"><span data-i18n="row-actions:text.005">详情</span></div><code>view</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.edit}</div><div class="ra-name"><span data-i18n="row-actions:text.006">编辑</span></div><code>edit</code></div>
        <div class="ra-cell danger"><div class="ra-icn">${ICN.del}</div><div class="ra-name"><span data-i18n="row-actions:text.007">删除</span></div><code>delete</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.push}</div><div class="ra-name"><span data-i18n="row-actions:text.008">推送</span></div><code>push</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.upgrade}</div><div class="ra-name"><span data-i18n="row-actions:text.009">升级</span></div><code>upgrade</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.log}</div><div class="ra-name"><span data-i18n="row-actions:text.010">日志</span></div><code>log</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.copy}</div><div class="ra-name"><span data-i18n="row-actions:text.011">复制</span></div><code>copy</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.toggle}</div><div class="ra-name"><span data-i18n="row-actions:text.012">启停</span></div><code>toggle</code></div>
        <div class="ra-cell warn"><div class="ra-icn">${ICN.reset}</div><div class="ra-name"><span data-i18n="row-actions:text.013">重置</span></div><code>reset</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.download}</div><div class="ra-name"><span data-i18n="row-actions:text.014">下载</span></div><code>download</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.exp}</div><div class="ra-name"><span data-i18n="row-actions:text.015">导出</span></div><code>export</code></div>
        <div class="ra-cell"><div class="ra-icn">${ICN.more}</div><div class="ra-name"><span data-i18n="row-actions:text.016">更多</span></div><code>more</code></div>
      </div>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="row-actions:text.017">使用边界：</span></strong><span data-i18n="row-actions:text.018">上方图标仅用于动作词汇和开发映射；表格尾列使用文字按钮，紧凑卡片才允许 16×16 单色图标。危险动作使用 </span><code>--aw-danger</code><span data-i18n="row-actions:text.019">，禁用态使用 </span><code>--aw-text-disabled</code><span data-i18n="row-actions:text.020">，图标按钮必须提供 Tooltip 和 aria-label</span><span data-i18n="row-actions:text.021">。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="row-actions:text.022">表格内嵌示例</span></h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="ra-table">
        <thead>
          <tr><th style="width:140px"><span data-i18n="row-actions:text.023">设备名称</span></th><th style="width:120px">SN</th><th style="width:90px"><span data-i18n="row-actions:text.024">状态</span></th><th style="width:80px"><span data-i18n="row-actions:text.025">版本</span></th><th><span data-i18n="row-actions:text.026">所属</span></th><th style="width:240px" class="colactions"><span data-i18n="row-actions:text.027">操作</span></th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span data-i18n="row-actions:text.028">终端-上海-001</span></td><td><code>DEV-86420075</code></td>
            <td><span class="status-dot online"><span data-i18n="row-actions:text.029">在线</span></span></td>
            <td>v3.4.2</td><td><span data-i18n="row-actions:text.030">AngelWatch / 华东 / 上海</span></td>
            <td class="colactions">
              <div class="ra-row">
                <button class="btn btn-link"><span data-i18n="row-actions:text.005">详情</span></button>
                <button class="btn btn-link" data-row-secondary><span data-i18n="row-actions:text.006">编辑</span></button>
                <span class="ra-more-wrap">
                  <button class="btn btn-link ra-more-trigger" type="button" aria-haspopup="menu" aria-expanded="false"><span data-i18n="row-actions:text.016">更多</span></button>
                  <div class="ra-menu" role="menu" hidden>
                    <button class="ra-mit" type="button" role="menuitem"><span data-i18n="row-actions:text.058">查看日志</span></button>
                    <div class="ra-mdiv" role="separator"></div>
                    <button class="ra-mit danger" type="button" role="menuitem" data-demo-confirm><span data-i18n="row-actions:text.063">删除设备</span></button>
                  </div>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td><span data-i18n="row-actions:text.031">终端-北京-014</span></td><td><code>DEV-86420089</code></td>
            <td><span class="status-dot upgrading"><span data-i18n="row-actions:text.032">升级中</span></span></td>
            <td>v3.4.1</td><td><span data-i18n="row-actions:text.033">AngelWatch / 华北 / 北京</span></td>
            <td class="colactions">
              <div class="ra-row">
                <button class="btn btn-link"><span data-i18n="row-actions:text.005">详情</span></button>
                <button class="btn btn-link" data-row-secondary><span data-i18n="row-actions:text.006">编辑</span></button>
                <span class="ra-more-wrap">
                  <button class="btn btn-link ra-more-trigger" type="button" aria-haspopup="menu" aria-expanded="false"><span data-i18n="row-actions:text.016">更多</span></button>
                  <div class="ra-menu" role="menu" hidden>
                    <button class="ra-mit" type="button" role="menuitem"><span data-i18n="row-actions:text.058">查看日志</span></button>
                    <div class="ra-mdiv" role="separator"></div>
                    <button class="ra-mit danger" type="button" role="menuitem" data-demo-confirm><span data-i18n="row-actions:text.063">删除设备</span></button>
                  </div>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td><span data-i18n="row-actions:text.035">终端-广州-007</span></td><td><code>DEV-86420112</code></td>
            <td><span class="status-dot offline"><span data-i18n="row-actions:text.036">离线</span></span></td>
            <td>v3.3.8</td><td><span data-i18n="row-actions:text.037">AngelWatch / 华南 / 广州</span></td>
            <td class="colactions">
              <div class="ra-row">
                <button class="btn btn-link"><span data-i18n="row-actions:text.005">详情</span></button>
                <span class="ra-more-wrap">
                  <button class="btn btn-link ra-more-trigger" type="button" aria-haspopup="menu" aria-expanded="false"><span data-i18n="row-actions:text.016">更多</span></button>
                  <div class="ra-menu" role="menu" hidden>
                    <button class="ra-mit" type="button" role="menuitem"><span data-i18n="row-actions:text.058">查看日志</span></button>
                    <div class="ra-mdiv" role="separator"></div>
                    <button class="ra-mit danger" type="button" role="menuitem" data-demo-confirm><span data-i18n="row-actions:text.063">删除设备</span></button>
                  </div>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="row-actions:text.038">危险确认阈值 · 4 档</span></h3>
    <div class="surface" style="padding:0;overflow:hidden">
      <table class="tech-table">
        <thead><tr><th style="width:200px"><span data-i18n="row-actions:text.039">场景</span></th><th style="width:160px"><span data-i18n="row-actions:text.040">交互形态</span></th><th><span data-i18n="row-actions:text.041">说明</span></th></tr></thead>
        <tbody>
          <tr><td><span data-i18n="row-actions:text.042">单条 · 非破坏性</span><br/><small style="color:var(--aw-text-3)"><span data-i18n="row-actions:text.043">查看日志、复制 SN、下载</span></small></td><td><span class="tag-meta"><span data-i18n="row-actions:text.044">直接执行</span></span></td><td><span data-i18n="row-actions:text.045">无确认 · 仅 toast 反馈结果</span></td></tr>
          <tr><td><span data-i18n="row-actions:text.046">单条 · 可逆</span><br/><small style="color:var(--aw-text-3)"><span data-i18n="row-actions:text.047">启停、重置缓存</span></small></td><td><span class="tag-meta" style="background:var(--aw-warning-bg);color:var(--aw-warning)">Modal</span></td><td><span data-i18n="row-actions:text.048">行内与菜单统一一次 Modal 确认；写明对象与后果，默认聚焦取消。</span></td></tr>
          <tr><td><span data-i18n="row-actions:text.049">单条 · 不可逆</span><br/><small style="color:var(--aw-text-3)"><span data-i18n="row-actions:text.050">删除设备、注销证书</span></small></td><td><span class="tag-meta" style="background:var(--aw-danger-bg);color:var(--aw-danger)">Modal</span></td><td><span data-i18n="row-actions:text.051">阻塞确认 · 必须列出影响范围 · 红色危险按钮</span></td></tr>
          <tr><td><span data-i18n="row-actions:text.052">批量 · 任意操作</span><br/><small style="color:var(--aw-text-3)"><span data-i18n="row-actions:text.053">批量启停、批量推送、批量删除</span></small></td><td><span class="tag-meta" style="background:var(--aw-danger-bg);color:var(--aw-danger)"><span data-i18n="row-actions:text.054">Modal · 含明细</span></span></td><td><span data-i18n="row-actions:text.055">必须显示选中数量与影响范围；删除类需二次输入"确认"或勾选确认框</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="row-actions:text.056">按用途与可用宽度收纳</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="row-actions:text.057">表格与紧凑卡片最多明示 2 个普通动作。1 个主操作位置稳定，第 2 个常用辅助操作仅在容器与完整文案宽度允许时展示；其余进入更多。只剩一个普通操作时不套更多。危险操作默认收纳，成员移出等明确单用途例外必须登记。</span></p>
    <div class="surface">
      <div class="ra-row">
        <button class="ra-btn" title="详情" data-i18n-title="row-actions:text.005">${ICN.detail}</button>
        <button class="ra-btn" data-row-secondary title="编辑" data-i18n-title="row-actions:text.006">${ICN.edit}</button>
        <div class="ra-divider"></div>
        <div class="ra-more-wrap">
          <button class="ra-btn ra-more-trigger" type="button" aria-haspopup="menu" aria-expanded="false" title="更多" data-i18n-title="row-actions:text.016">${ICN.more}</button>
          <div class="ra-menu" role="menu" hidden>
            <button class="ra-mit" type="button" role="menuitem">${ICN.log}<span><span data-i18n="row-actions:text.058">查看日志</span></span></button>
            <button class="ra-mit" type="button" role="menuitem">${ICN.copy}<span><span data-i18n="row-actions:text.059">复制 SN</span></span></button>
            <button class="ra-mit" type="button" role="menuitem">${ICN.download}<span><span data-i18n="row-actions:text.060">下载证书</span></span></button>
            <div class="ra-mdiv" role="separator"></div>
            <button class="ra-mit danger" type="button" role="menuitem" data-demo-confirm>${ICN.toggle}<span><span data-i18n="row-actions:text.061">停用设备</span></span></button>
            <button class="ra-mit warn" type="button" role="menuitem" data-demo-confirm>${ICN.reset}<span><span data-i18n="row-actions:text.062">重置出厂</span></span></button>
            <button class="ra-mit danger" type="button" role="menuitem" data-demo-confirm>${ICN.del}<span><span data-i18n="row-actions:text.063">删除设备</span></span></button>
          </div>
        </div>
      </div>
    </div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong><span data-i18n="row-actions:text.064">下拉中 destructive 动作必须置底，</span></strong><span data-i18n="row-actions:text.065">并与普通操作用分隔线区分。确认由统一执行器负责，不因位置变化漏确认或重复确认；请求期间禁止重复触发。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="row-actions:text.066">反例</span></h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong><span data-i18n="row-actions:text.067">不要把"删除"做成主色按钮：</span></strong><span data-i18n="row-actions:text.068">主色 </span><code>#165DFF</code><span data-i18n="row-actions:text.069"> 是积极动作（提交 / 确认），删除应走 ghost-danger 或纯红 icon。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="row-actions:text.070">不要按数组顺序机械折叠：</span></strong><span data-i18n="row-actions:text.071">显式标记主操作、辅助操作和菜单项。两项普通操作能放下时直接展示；窄容器收纳辅助操作。禁用项说明原因，不把删除提升为主操作。菜单按钮声明展开状态，键盘打开后焦点进入菜单，关闭后返回触发器。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="row-actions:text.072">不要在同一操作列混用文字与图标：</span></strong><span data-i18n="row-actions:text.073">表格统一文字按钮；只有紧凑卡片允许统一图标 + Tooltip。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="row-actions:text.074">涉及变量</span></h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div data-i18n="row-actions:text.075">--aw-text-2 (默认) · --aw-primary (hover) · --aw-danger / --aw-warning (语义) · --aw-text-disabled (禁用)</div>
      <div style="margin-top:4px" data-i18n="row-actions:text.076">--aw-radius (按钮) · --aw-shadow-2 (下拉) · --aw-dur-fast (过渡)</div>
    </div>
  </div>
  <div class="subsection"><h3><span data-i18n="common:component.usedBy">页面蓝图使用场景</span></h3><div class="blueprint-notes"><span><a href="#/list-page">ListPage</a></span><span><a href="#/device-center-page">DeviceCenterPage</a></span><span><a href="#/user-mgmt-page">UserMgmtPage</a></span></div></div>
</section>
</div>
`;
})();
