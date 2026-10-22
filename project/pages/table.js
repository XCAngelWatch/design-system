/* AngelWatch Design System — page: table (auto-generated from HTML fragment) */
(window.__AW_PAGES__ = window.__AW_PAGES__ || {})["table"] = `
<div class="content">
<section class="section" id="table">
  <h2 role="heading" aria-level="1"><span data-i18n="table:text.002">AWTable · 统一表格</span></h2>
  <p class="lede"><span data-i18n="table:text.003">本地交互原型；React 实现由消费者按已确认范围交付，未发布运行时包。</span></p>

<nav class="aw-table-quick-nav" aria-label="本页导航" data-i18n-aria-label="table:dev.navigation"><a data-aw-doc-link href="#aw-table-preview"><span data-i18n="table:dev.nav.try">体验组件</span></a><a data-aw-doc-link href="#aw-filter-compositions"><span data-i18n="table:filterExamples.nav">筛选组合</span></a><a data-aw-doc-link href="#aw-table-development"><span data-i18n="table:dev.nav.develop">开发接入</span></a><a data-aw-doc-link href="#aw-table-rules"><span data-i18n="table:dev.nav.rules">查阅规则</span></a></nav>
  <div class="aw-table-demo" id="aw-table-preview" tabindex="-1" data-aw-table-demo>
    <h3 class="aw-table-preview-heading visually-hidden"><span data-i18n="table:aw.previewTitle">AWTable 组件预览</span></h3>
<details class="aw-table-demo-settings" data-aw-demo-settings><summary><span data-i18n="table:dev.settings">切换场景与演示配置</span></summary><div class="aw-table-scenario-toolbar"><label><span data-i18n="table:scenario.label">交互场景</span><select data-aw-scenario><option value="normal" data-i18n="table:scenario.option.normal">基础操作</option><option value="waiting" data-i18n="table:scenario.option.waiting">范围未就绪</option><option value="blocked" data-i18n="table:scenario.option.blocked">无读取权限</option><option value="context-race" data-i18n="table:scenario.option.context-race">切机构与乱序响应</option><option value="refresh-error" data-i18n="table:scenario.option.refresh-error">刷新失败保留旧结果</option><option value="options-error" data-i18n="table:scenario.option.options-error">筛选选项加载失败</option><option value="batch-partial" data-i18n="table:scenario.option.batch-partial">批量部分失败</option><option value="batch-unknown" data-i18n="table:scenario.option.batch-unknown">批量结果待核对</option><option value="delete-last" data-i18n="table:scenario.option.delete-last">删除末页最后一项</option></select></label><button type="button" class="btn btn-sm" data-aw-command="runScenario"><span data-i18n="table:scenario.run">运行场景</span></button></div><p class="aw-table-note" data-aw-scenario-help></p>
<div class="aw-table-controls">
      <label><span data-i18n="table:aw.normalCount">普通操作数量</span><select data-aw-count><option>0</option><option>1</option><option>2</option><option selected>3</option><option>4</option><option>5</option></select></label>
      <label><span data-i18n="table:aw.dangerToggle">包含危险操作</span><input type="checkbox" data-aw-danger></label><label><span data-i18n="table:aw.narrow">窄容器</span><input type="checkbox" data-aw-narrow></label>
      <label><span data-i18n="table:aw.density">密度</span><select data-aw-density><option value="middle" data-i18n="table:aw.middle">默认</option><option value="dense" data-i18n="table:aw.dense">紧凑</option><option value="loose" data-i18n="table:aw.loose">宽松</option></select></label>
      <label><span data-i18n="table:aw.state">演示状态</span><select data-aw-state><option value="ready" data-i18n="table:aw.ready">正常</option><option value="loading" data-i18n="table:aw.loading">首次加载</option><option value="refreshing" data-i18n="table:aw.refreshing">刷新中</option><option value="error" data-i18n="table:aw.errorOption">加载失败</option><option value="empty" data-i18n="table:aw.emptyOption">无数据</option></select></label>
<label><span data-i18n="table:scenario.mixed">各行动作不同</span><input type="checkbox" data-aw-mixed-actions></label><label><span data-i18n="table:scenario.long">长操作文案</span><input type="checkbox" data-aw-long-labels></label></div></details>
<p class="aw-table-note" data-aw-scenario-status role="status"></p>
    <div class="aw-table-region" data-aw-region>
    <form class="aw-table-filters" data-aw-filters novalidate aria-labelledby="aw-table-filters-title">
      <span class="visually-hidden" id="aw-table-filters-title" data-i18n="table:aw.filtersTitle">筛选条件</span>
      <div class="aw-table-filter-primary">
        <label class="aw-table-filter-keyword"><span data-i18n="table:aw.searchLabel">综合关键词</span><input data-aw-search data-aw-filter="search" placeholder="名称 / 备注 / 资源包版本" data-i18n-placeholder="table:aw.searchHint"></label>
        <div class="aw-table-filter-model"><label><span data-i18n="table:aw.model">生效机型</span><select data-aw-filter="model"><option value="" data-i18n="table:aw.all">全部</option><option>K1352</option><option>P10</option></select></label><div class="aw-table-options-error" data-aw-options-error hidden><p><span data-i18n="table:scenario.optionsError">机型选项加载失败；当前表格数据保留。</span></p><button type="button" class="btn btn-sm" data-aw-command="retryOptions"><span data-i18n="table:scenario.retryOptions">重试选项</span></button></div></div>
        <label><span data-i18n="table:aw.status">状态</span><select data-aw-status data-aw-filter="status"><option value="" data-i18n="table:aw.all">全部</option><option value="published" data-i18n="table:aw.published">已上架</option><option value="draft" data-i18n="table:aw.draft">草稿</option></select></label>
      </div>
      <div class="aw-table-filter-advanced" id="aw-table-filter-advanced" data-aw-filter-advanced hidden>
        <label><span data-i18n="table:aw.packageVersion">资源包版本</span><input data-aw-filter="version" placeholder="例如 1.2.1" data-i18n-placeholder="table:aw.versionHint"></label>
        <fieldset class="aw-table-filter-range aw-table-filter-span-2"><legend data-i18n="table:aw.createdRange">创建日期</legend><div>
          <label><span class="visually-hidden" data-i18n="table:aw.startDate">开始日期</span><input type="date" data-aw-filter="createdRange"></label><span aria-hidden="true">—</span><label><span class="visually-hidden" data-i18n="table:aw.endDate">结束日期</span><input type="date" data-aw-filter="createdRange"></label>
        </div></fieldset>
      </div>
      <p class="aw-table-filter-errors" id="aw-table-filter-errors" data-aw-filter-errors role="alert" hidden></p>
      <div class="aw-table-filter-footer">
        <span class="aw-table-filter-count" data-aw-filter-count aria-live="polite"></span>
        <div class="aw-table-filter-buttons"><button type="button" class="aw-table-filter-toggle" data-aw-filter-toggle aria-expanded="false" aria-controls="aw-table-filter-advanced"><svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12"><path d="m2 4 4 4 4-4" fill="none" stroke="currentColor"/></svg><span data-i18n="table:aw.expandFilters">更多筛选</span></button><div class="aw-table-filter-submit-actions"><button type="button" class="btn btn-sm" data-aw-command="reset" data-aw-filter-reset><span data-i18n="table:aw.reset">重置</span></button><button type="submit" class="btn btn-primary btn-sm" data-aw-command="search"><span data-i18n="table:aw.search">搜索</span></button></div></div>
      </div>
    </form>
    <div class="aw-table-results-toolbar"><div class="aw-table-note" data-aw-applied></div><div class="aw-table-results-actions"><span class="aw-table-columns-control" data-aw-columns-control><button type="button" class="aw-table-columns-trigger" data-aw-command="columns" aria-label="显示列" data-i18n-aria-label="table:aw.columns" aria-expanded="false" aria-haspopup="dialog" aria-controls="aw-table-columns-panel"><svg aria-hidden="true" width="16" height="16" viewBox="64 64 896 896" fill="currentColor"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM340 683v77c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-77c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198V264c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v221c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8s0 .1.1.1a36.18 36.18 0 015.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8 0 0 0 .1-.1.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7zM620 539v221c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V539c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198v-77c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v77c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8v.1a36.18 36.18 0 015.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8v.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7z"/></svg></button><span class="aw-table-columns-tooltip" id="aw-table-columns-tooltip" role="tooltip" data-aw-columns-tooltip hidden data-i18n="table:aw.columns">显示列</span></span>
    <div class="aw-table-columns-panel" id="aw-table-columns-panel" data-aw-columns-panel role="dialog" aria-labelledby="aw-table-columns-title" hidden><strong id="aw-table-columns-title" data-i18n="table:aw.columns">显示列</strong><div class="aw-table-column-options" data-aw-column-options></div><div class="aw-table-columns-footer"><button type="button" class="aw-table-action" data-aw-command="columnsReset"><span data-i18n="table:aw.columnsReset">恢复默认</span></button><div><button type="button" class="btn btn-sm" data-aw-command="columnsCancel"><span data-i18n="table:aw.cancel">取消</span></button><button type="button" class="btn btn-primary btn-sm" data-aw-command="columnsApply"><span data-i18n="table:aw.columnsApply">应用</span></button></div></div></div></div></div>
    <div class="aw-table-batch" data-aw-batch hidden><span></span><button type="button" class="btn btn-sm" data-aw-command="batchRun"><span data-i18n="table:scenario.batchRun">演示批量执行</span></button><button type="button" class="btn btn-sm" data-aw-command="batchRetry" hidden><span data-i18n="table:scenario.batchRetry">仅重试失败项</span></button><button type="button" class="btn btn-sm" data-aw-command="clearSelection" ><span data-i18n="table:aw.clearSelection">清空选择</span></button></div>
    <p class="aw-table-note" data-aw-batch-result role="status"></p>
    <p class="visually-hidden" data-aw-refreshing hidden role="status"><span data-i18n="table:aw.refreshNotice">正在加载数据。</span></p>
    <div class="aw-table-viewport" data-aw-viewport><div class="aw-table-scroll" data-aw-body role="region" tabindex="0" aria-label="资源包表格，可横向滚动" data-i18n-aria-label="table:aw.scrollLabel"></div></div>
    <div class="aw-table-footer"><span data-aw-summary></span><button type="button" class="btn btn-sm" data-aw-command="previous" ><span data-i18n="table:aw.previous">上一页</span></button><button type="button" class="btn btn-sm" data-aw-command="next" ><span data-i18n="table:aw.next">下一页</span></button><label><span data-i18n="table:aw.pageSize">每页条数</span><select data-aw-page-size><option>20</option><option>50</option><option>100</option><option>200</option></select></label></div>
    <p class="aw-table-note" data-aw-feedback role="status" aria-live="polite"></p><details class="aw-table-observation" data-aw-observation><summary><span data-i18n="table:scenario.observe">场景观察与布局测量</span></summary><p class="aw-table-note" data-aw-metrics></p><p class="aw-table-note" data-aw-layout></p><p class="aw-table-note" data-aw-request-log></p></details>
    </div>
<div hidden><span data-aw-scenario-help-label="normal" data-i18n="table:scenario.help.normal">运行恢复默认演示草稿与选择，并读取 1 次。编辑后搜索：变条件回第 1 页，同条件保留当前页；每次有效搜索读取 1 次。</span><span data-aw-scenario-help-label="waiting" data-i18n="table:scenario.help.waiting">运行会重置演示草稿与选择。范围未就绪时搜索不可用、列表读取为 0；点击“模拟范围恢复”后只读取一次。</span><span data-aw-scenario-help-label="blocked" data-i18n="table:scenario.help.blocked">运行会重置演示草稿与选择。无读取权限时不展示旧结果、不发送列表读取；点击“模拟范围恢复”后读取一次。</span><span data-aw-scenario-help-label="context-race" data-i18n="table:scenario.help.context-race">运行重置演示草稿与选择，并发出机构 A、B 两次读取。B 先成功；A 晚到的失败被忽略，结果仍属于 B。</span><span data-aw-scenario-help-label="refresh-error" data-i18n="table:scenario.help.refresh-error">运行会重置演示草稿与选择，并模拟更新失败。旧结果保留且明确标记；点击重试只读取已应用条件一次，不提交新草稿。</span><span data-aw-scenario-help-label="options-error" data-i18n="table:scenario.help.options-error">运行重置演示草稿与选择，机型选项失败，列表读取 0 次。“重试选项”只发 1 次选项读取，不重取表格、不清空已应用条件。</span><span data-aw-scenario-help-label="batch-partial" data-i18n="table:scenario.help.batch-partial">运行重置草稿并选中前三项，不读写列表。批量执行发 1 次模拟写入、成功后重取 1 次；成功项移出选择，失败项保留，仅重试失败项。</span><span data-aw-scenario-help-label="batch-unknown" data-i18n="table:scenario.help.batch-unknown">运行重置草稿并选中前三项。执行发 1 次模拟写入，结果未确认时不重取、不自动重试。先核对结果（1 次核对读取及 1 次列表读取、0 次写入），再仅重试确认失败项。</span><span data-aw-scenario-help-label="delete-last" data-i18n="table:scenario.help.delete-last">运行重置草稿与选择，准备末页最后一项，不发送读写。从“更多”删除并确认一次：1 次模拟写入、1 次当前页读取，页码越界仅补 1 次校正读取。</span></div>
<div hidden><span data-aw-label="resumeScope" data-i18n="table:aw.resumeScope">模拟范围恢复</span><span data-aw-label="verifyOutcome" data-i18n="table:aw.verifyOutcome">核对模拟结果</span><span data-aw-label="verificationDone" data-i18n="table:aw.verificationDone">核对完成：已确认成功项移出选择，失败项可重试。</span><span data-aw-label="totalUnknown" data-i18n="table:aw.totalUnknown">总数待确认</span><span data-aw-label="gateWaiting" data-i18n="table:aw.gateWaiting">机构范围尚未就绪，未发起查询。</span><span data-aw-label="gateBlocked" data-i18n="table:aw.gateBlocked">当前范围无读取权限，未发起查询。</span><span data-aw-label="contextA" data-i18n="table:aw.contextA">演示机构 A</span><span data-aw-label="contextB" data-i18n="table:aw.contextB">演示机构 B</span><span data-aw-label="requestStarted" data-i18n="table:aw.requestStarted">请求 {id} · {context} · 第 {page} 页：开始</span><span data-aw-label="requestAccepted" data-i18n="table:aw.requestAccepted">请求 {id}：已接受结果</span><span data-aw-label="requestIgnored" data-i18n="table:aw.requestIgnored">请求 {id}：过期响应已忽略</span><span data-aw-label="requestFailed" data-i18n="table:aw.requestFailed">请求 {id}：失败</span><span data-aw-label="staleResults" data-i18n="table:aw.staleResults">更新失败，保留上次成功结果。</span><span data-aw-label="optionsFailed" data-i18n="table:aw.optionsFailed">机型选项加载失败；表格数据保留。</span><span data-aw-label="optionsRecovered" data-i18n="table:aw.optionsRecovered">机型选项已恢复，未重取表格。</span><span data-aw-label="scenarioReady" data-i18n="table:aw.scenarioReady">已载入本地场景；所有请求与写入均为模拟。</span><span data-aw-label="batchOutcome" data-i18n="table:aw.batchOutcome">本次 {total} 项：成功 {success}，失败 {failed}，待核对 {unknown}。</span><span data-aw-label="batchUnknown" data-i18n="table:aw.batchUnknown">结果未确认，请先核对；不会自动重新执行。</span><span data-aw-label="batchFailure" data-i18n="table:aw.batchFailure">演示失败，可重试</span><span data-aw-label="batchProcessing" data-i18n="table:aw.batchProcessing">正在处理冻结的 {total} 项选择…</span><span data-aw-label="lastPageReady" data-i18n="table:aw.lastPageReady">末页仅 1 项；从“更多”删除并确认，观察一次页码校正。</span><span data-aw-label="pageCorrected" data-i18n="table:aw.pageCorrected">总数减少，页码已校正为 {page}；仅补发一次读取。</span><span data-aw-label="layoutMetrics" data-i18n="table:aw.layoutMetrics">容器 {container}px · 表格 {total}px · 操作列 {actions}px · 固定操作列：{fixed}</span><span data-aw-label="yes" data-i18n="table:aw.yes">是</span><span data-aw-label="no" data-i18n="table:aw.no">否</span><span data-aw-label="longDetails" data-i18n="table:aw.longDetails">查看资源包完整详情</span><span data-aw-label="longEdit" data-i18n="table:aw.longEdit">编辑资源包元数据</span><span data-aw-label="longDownload" data-i18n="table:aw.longDownload">下载原始资源包文件</span><span data-aw-label="noActions" data-i18n="table:aw.noActions">无可用操作</span><span data-aw-label="resultMismatch" data-i18n="table:aw.resultMismatch">正在查询新条件，暂时显示上次成功结果。</span><span data-aw-doc-label="copied" data-i18n="table:dev.copied">已复制</span><span data-aw-doc-label="copyFailed" data-i18n="table:dev.copyFailed">无法自动复制，请选择代码后按 Ctrl+C 或 ⌘C。</span></div>
    <div hidden><span data-aw-label="columns" data-i18n="table:aw.columns">显示列</span><span data-aw-label="dateInvalidError" data-i18n="table:aw.dateInvalidError">请输入有效的日期。</span><span data-aw-label="filtersTitle" data-i18n="table:aw.filtersTitle">筛选条件</span><span data-aw-label="enabledCount" data-i18n="table:aw.enabledCount">已启用 {count} 项</span><span data-aw-label="model" data-i18n="table:aw.model">生效机型</span><span data-aw-label="packageVersion" data-i18n="table:aw.packageVersion">资源包版本</span><span data-aw-label="versionHint" data-i18n="table:aw.versionHint">例如 1.2.1</span><span data-aw-label="createdRange" data-i18n="table:aw.createdRange">创建日期</span><span data-aw-label="startDate" data-i18n="table:aw.startDate">开始日期</span><span data-aw-label="endDate" data-i18n="table:aw.endDate">结束日期</span><span data-aw-label="expandFilters" data-i18n="table:aw.expandFilters">更多筛选</span><span data-aw-label="collapseFilters" data-i18n="table:aw.collapseFilters">收起筛选</span><span data-aw-label="dateIncompleteError" data-i18n="table:aw.dateIncompleteError">请填写完整的开始和结束日期。</span><span data-aw-label="dateOrderError" data-i18n="table:aw.dateOrderError">结束日期不能早于开始日期。</span><span data-aw-label="previewTitle" data-i18n="table:aw.previewTitle">AWTable 组件预览</span><span data-aw-label="previewIntro" data-i18n="table:aw.previewIntro">本地演示数据；请求与写入均为模拟，不调用业务接口。</span><span data-aw-label="normalCount" data-i18n="table:aw.normalCount">普通操作数量</span><span data-aw-label="dangerToggle" data-i18n="table:aw.dangerToggle">包含危险操作</span><span data-aw-label="narrow" data-i18n="table:aw.narrow">窄容器</span><span data-aw-label="density" data-i18n="table:aw.density">密度</span><span data-aw-label="dense" data-i18n="table:aw.dense">紧凑</span><span data-aw-label="middle" data-i18n="table:aw.middle">默认</span><span data-aw-label="loose" data-i18n="table:aw.loose">宽松</span><span data-aw-label="state" data-i18n="table:aw.state">演示状态</span><span data-aw-label="ready" data-i18n="table:aw.ready">正常</span><span data-aw-label="loading" data-i18n="table:aw.loading">首次加载</span><span data-aw-label="refreshing" data-i18n="table:aw.refreshing">刷新中</span><span data-aw-label="errorOption" data-i18n="table:aw.errorOption">加载失败</span><span data-aw-label="emptyOption" data-i18n="table:aw.emptyOption">无数据</span><span data-aw-label="searchLabel" data-i18n="table:aw.searchLabel">综合关键词</span><span data-aw-label="searchHint" data-i18n="table:aw.searchHint">名称 / 备注 / 资源包版本</span><span data-aw-label="search" data-i18n="table:aw.search">搜索</span><span data-aw-label="reset" data-i18n="table:aw.reset">重置</span><span data-aw-label="status" data-i18n="table:aw.status">状态</span><span data-aw-label="all" data-i18n="table:aw.all">全部</span><span data-aw-label="published" data-i18n="table:aw.published">已上架</span><span data-aw-label="draft" data-i18n="table:aw.draft">草稿</span><span data-aw-label="version" data-i18n="table:aw.version">版本</span><span data-aw-label="updated" data-i18n="table:aw.updated">更新时间</span><span data-aw-label="clearSelection" data-i18n="table:aw.clearSelection">清空选择</span><span data-aw-label="previous" data-i18n="table:aw.previous">上一页</span><span data-aw-label="next" data-i18n="table:aw.next">下一页</span><span data-aw-label="pageSize" data-i18n="table:aw.pageSize">每页条数</span><span data-aw-label="name" data-i18n="table:aw.name">名称</span><span data-aw-label="actions" data-i18n="table:aw.actions">操作</span><span data-aw-label="details" data-i18n="table:aw.details">详情</span><span data-aw-label="edit" data-i18n="table:aw.edit">编辑</span><span data-aw-label="download" data-i18n="table:aw.download">下载</span><span data-aw-label="copy" data-i18n="table:aw.copy">复制</span><span data-aw-label="history" data-i18n="table:aw.history">历史记录</span><span data-aw-label="delete" data-i18n="table:aw.delete">删除</span><span data-aw-label="more" data-i18n="table:aw.more">更多</span><span data-aw-label="cancel" data-i18n="table:aw.cancel">取消</span><span data-aw-label="retry" data-i18n="table:aw.retry">重试</span><span data-aw-label="sample" data-i18n="table:aw.sample">示例资源包 {n}</span><span data-aw-label="selectPage" data-i18n="table:aw.selectPage">选择当前页</span><span data-aw-label="selectRow" data-i18n="table:aw.selectRow">选择 {name}</span><span data-aw-label="caption" data-i18n="table:aw.caption">AWTable 交互示例资源包列表</span><span data-aw-label="selected" data-i18n="table:aw.selected">已选 {n} 项（同查询跨页）</span><span data-aw-label="summary" data-i18n="table:aw.summary">共 {total} 项 · 第 {page} / {pages} 页</span><span data-aw-label="noMatches" data-i18n="table:aw.noMatches">没有匹配结果，请调整或重置筛选条件。</span><span data-aw-label="empty" data-i18n="table:aw.empty">暂无演示数据，可使用搜索重新加载。</span><span data-aw-label="error" data-i18n="table:aw.error">列表加载失败，请重试。</span><span data-aw-label="metrics" data-i18n="table:aw.metrics">操作列 {width}px · 查询变更 {queries} 次 · 模拟列表请求 {requests} 次</span><span data-aw-label="applied" data-i18n="table:aw.applied">已应用 {count} 项筛选条件</span><span data-aw-label="noFilters" data-i18n="table:aw.noFilters">未应用筛选条件</span><span data-aw-label="confirmDelete" data-i18n="table:aw.confirmDelete">确认删除此演示记录？</span><span data-aw-label="synthetic" data-i18n="table:aw.synthetic">此操作仅影响当前预览中的演示数据。</span><span data-aw-label="processing" data-i18n="table:aw.processing">正在演示：{action}</span><span data-aw-label="executed" data-i18n="table:aw.executed">已演示：{action}，未调用业务接口。</span><span data-aw-label="scrollLabel" data-i18n="table:aw.scrollLabel">资源包表格，可横向滚动</span><span data-aw-label="refreshNotice" data-i18n="table:aw.refreshNotice">正在加载数据。</span><span data-aw-label="architectureTitle" data-i18n="table:aw.architectureTitle">AWTable 的完整组成</span><span data-aw-label="architectureBody" data-i18n="table:aw.architectureBody">筛选区、工具栏、批量操作条、数据表格、分页与状态视图共用查询状态。列定义与动作定义提供给 AWTable；领域 API、权限、机构树、业务表单留在页面适配层。</span><span data-aw-label="queryRule" data-i18n="table:aw.queryRule">草稿与已应用筛选分离。每次有效搜索只发起一次请求：条件相同保留当前页重新获取，条件变化回第 1 页；请求处理中防止重复提交。换页大小与排序变化默认回第 1 页。旧响应不能覆盖新查询；远程分页数据不再次本地切片。</span><span data-aw-label="widthRule" data-i18n="table:aw.widthRule">当前语言测宽，操作列按整表动作组合稳定分配。主操作与更多仍放不下时扩列、解除固定并局部横滚；不得裁切、缩小文字或按每行单独变化。</span></div>
  </div>


<section class="aw-filter-compositions" id="aw-filter-compositions" tabindex="-1" aria-labelledby="aw-filter-compositions-title">
  <h3 id="aw-filter-compositions-title"><span data-i18n="table:filterExamples.title">AWTableFilters · 三种组合</span></h3>
  <p><span data-i18n="table:filterExamples.intro">标准、上下文和紧凑组合复用同一筛选组件。字段数量、分组和机构范围由业务配置，不强制凑满两行；下列示例独立保存本页演示状态，不调用业务接口。</span></p>
  <p class="aw-table-note"><span data-i18n="table:filterExamples.layout">基础区与高级区共用列轨道，标签置于控件上方；关键词和日期范围可跨列。卡片四周统一 16px，窄容器或触控设备的交互目标至少 44px。已应用计数始终在底栏左侧。</span></p>
  <article class="aw-filter-example" data-aw-filter-example="standard" aria-labelledby="aw-filter-standard-heading">
    <h4 id="aw-filter-standard-heading"><span data-i18n="table:filterExamples.standard.title">标准组合 · 常用条件与高级条件</span></h4>
    <p><span data-i18n="table:filterExamples.standard.body">常用条件直接展示，低频条件按需展开。编辑不改变已应用计数；有效搜索后更新计数，折叠保留输入，重置恢复默认值并收起高级区。</span></p>
    <div class="aw-table-region">
      <form class="aw-table-filters" data-aw-example-form novalidate aria-labelledby="aw-filter-standard-heading aw-filter-standard-title">
        <span class="visually-hidden" id="aw-filter-standard-title" data-i18n="table:aw.filtersTitle">筛选条件</span>
        <div class="aw-table-filter-primary">
          <label class="aw-table-filter-keyword"><span data-i18n="table:aw.searchLabel">综合关键词</span><input data-aw-filter="search" placeholder="名称 / 备注 / 资源包版本" data-i18n-placeholder="table:aw.searchHint"></label>
          <label class="aw-table-filter-model"><span data-i18n="table:aw.model">生效机型</span><select data-aw-filter="model"><option value="" data-i18n="table:aw.all">全部</option><option value="K1352">K1352</option><option value="P10">P10</option></select></label>
          <label><span data-i18n="table:aw.status">状态</span><select data-aw-filter="status"><option value="" data-i18n="table:aw.all">全部</option><option value="published" data-i18n="table:aw.published">已上架</option><option value="draft" data-i18n="table:aw.draft">草稿</option></select></label>
        </div>
        <div class="aw-table-filter-advanced" id="aw-filter-standard-advanced" data-aw-filter-advanced hidden>
          <label><span data-i18n="table:aw.packageVersion">资源包版本</span><input data-aw-filter="version" placeholder="例如 1.2.1" data-i18n-placeholder="table:aw.versionHint"></label>
          <fieldset class="aw-table-filter-range aw-table-filter-span-2"><legend data-i18n="table:aw.createdRange">创建日期</legend><div><label><span class="visually-hidden" data-i18n="table:aw.startDate">开始日期</span><input type="date" data-aw-filter="createdRange"></label><span aria-hidden="true">—</span><label><span class="visually-hidden" data-i18n="table:aw.endDate">结束日期</span><input type="date" data-aw-filter="createdRange"></label></div></fieldset>
        </div>
        <p class="aw-table-filter-errors" id="aw-filter-standard-errors" data-aw-filter-errors role="alert" hidden></p>
        <div class="aw-table-filter-footer">
          <span class="aw-table-filter-count" data-aw-filter-count aria-live="polite"></span>
          <div class="aw-table-filter-buttons"><button type="button" class="aw-table-filter-toggle" data-aw-filter-toggle aria-expanded="false" aria-controls="aw-filter-standard-advanced"><svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12"><path d="m2 4 4 4 4-4" fill="none" stroke="currentColor"/></svg><span data-i18n="table:aw.expandFilters">更多筛选</span></button><div class="aw-table-filter-submit-actions"><button type="button" class="btn btn-sm" data-aw-filter-reset><span data-i18n="table:aw.reset">重置</span></button><button type="submit" class="btn btn-primary btn-sm"><span data-i18n="table:aw.search">搜索</span></button></div></div>
        </div>
      </form>
    </div>
    <p class="aw-table-note aw-filter-example-result" data-aw-example-result role="status"><span data-i18n="table:filterExamples.ready">编辑条件后搜索，查看本地应用结果。</span></p>
    <div hidden><span data-aw-example-label="enabledCount" data-i18n="table:aw.enabledCount">已启用 {count} 项</span><span data-aw-example-label="expandFilters" data-i18n="table:aw.expandFilters">更多筛选</span><span data-aw-example-label="collapseFilters" data-i18n="table:aw.collapseFilters">收起筛选</span><span data-aw-example-label="dateInvalidError" data-i18n="table:aw.dateInvalidError">请输入有效的日期。</span><span data-aw-example-label="dateIncompleteError" data-i18n="table:aw.dateIncompleteError">请填写完整的开始和结束日期。</span><span data-aw-example-label="dateOrderError" data-i18n="table:aw.dateOrderError">结束日期不能早于开始日期。</span><span data-aw-example-label="applied" data-i18n="table:filterExamples.applied">已在此示例应用 {count} 项条件，未调用业务接口。</span><span data-aw-example-label="reset" data-i18n="table:filterExamples.reset">已恢复此示例默认条件。</span></div>
  </article>
  <article class="aw-filter-example" data-aw-filter-example="context" aria-labelledby="aw-filter-context-heading">
    <h4 id="aw-filter-context-heading"><span data-i18n="table:filterExamples.context.title">上下文组合 · 机构范围由调用方提供</span></h4>
    <p><span data-i18n="table:filterExamples.context.body">页面按需在筛选卡外组合机构与查询范围。范围不计入筛选项数量，也不是所有列表的必备项；机构选项、权限和切换策略由业务页面提供。</span></p>
    <div class="aw-table-region">
      <div class="aw-filter-example-context" role="group" aria-label="演示查询范围" data-i18n-aria-label="table:filterExamples.context.label">
        <label><span data-i18n="table:filterExamples.context.organization">演示机构</span><select data-aw-example-context="organization"><option value="org-a" data-i18n="table:aw.contextA">演示机构 A</option><option value="org-b" data-i18n="table:aw.contextB">演示机构 B</option></select></label>
        <label><span data-i18n="table:filterExamples.context.scope">查询范围</span><select data-aw-example-context="scope"><option value="current" data-i18n="table:filterExamples.context.current">仅当前级</option><option value="descendants" data-i18n="table:filterExamples.context.descendants">含子机构</option></select></label>
      </div>
      <form class="aw-table-filters" data-aw-example-form novalidate aria-labelledby="aw-filter-context-heading aw-filter-context-title">
        <span class="visually-hidden" id="aw-filter-context-title" data-i18n="table:aw.filtersTitle">筛选条件</span>
        <div class="aw-table-filter-primary">
          <label class="aw-table-filter-keyword"><span data-i18n="table:aw.searchLabel">综合关键词</span><input data-aw-filter="search" placeholder="名称 / 备注 / 资源包版本" data-i18n-placeholder="table:aw.searchHint"></label>
          <label><span data-i18n="table:aw.status">状态</span><select data-aw-filter="status"><option value="" data-i18n="table:aw.all">全部</option><option value="published" data-i18n="table:aw.published">已上架</option><option value="draft" data-i18n="table:aw.draft">草稿</option></select></label>
        </div>
        <div class="aw-table-filter-advanced" id="aw-filter-context-advanced" data-aw-filter-advanced hidden></div>
        <p class="aw-table-filter-errors" id="aw-filter-context-errors" data-aw-filter-errors role="alert" hidden></p>
        <div class="aw-table-filter-footer">
          <span class="aw-table-filter-count" data-aw-filter-count aria-live="polite"></span>
          <div class="aw-table-filter-buttons"><button type="button" class="aw-table-filter-toggle" data-aw-filter-toggle aria-expanded="false" aria-controls="aw-filter-context-advanced" hidden><svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12"><path d="m2 4 4 4 4-4" fill="none" stroke="currentColor"/></svg><span data-i18n="table:aw.expandFilters">更多筛选</span></button><div class="aw-table-filter-submit-actions"><button type="button" class="btn btn-sm" data-aw-filter-reset><span data-i18n="table:aw.reset">重置</span></button><button type="submit" class="btn btn-primary btn-sm"><span data-i18n="table:aw.search">搜索</span></button></div></div>
        </div>
      </form>
    </div>
    <p class="aw-table-note aw-filter-example-result" data-aw-example-result role="status"><span data-i18n="table:filterExamples.ready">编辑条件后搜索，查看本地应用结果。</span></p>
    <div hidden><span data-aw-example-label="enabledCount" data-i18n="table:aw.enabledCount">已启用 {count} 项</span><span data-aw-example-label="expandFilters" data-i18n="table:aw.expandFilters">更多筛选</span><span data-aw-example-label="collapseFilters" data-i18n="table:aw.collapseFilters">收起筛选</span><span data-aw-example-label="applied" data-i18n="table:filterExamples.applied">已在此示例应用 {count} 项条件，未调用业务接口。</span><span data-aw-example-label="reset" data-i18n="table:filterExamples.reset">已恢复此示例默认条件。</span><span data-aw-example-label="scopeChanged" data-i18n="table:filterExamples.scopeChanged">已切换演示范围；范围由调用方维护，不计入筛选项数量。</span></div>
  </article>
  <article class="aw-filter-example" data-aw-filter-example="compact" aria-labelledby="aw-filter-compact-heading">
    <h4 id="aw-filter-compact-heading"><span data-i18n="table:filterExamples.compact.title">紧凑组合 · 按实际字段收敛</span></h4>
    <p><span data-i18n="table:filterExamples.compact.body">只有一个或两个条件时，保留正常的标签、16px 留白和底栏，无需补齐字段或添加高级筛选。紧凑表示字段更少，触控目标仍至少 44px。</span></p>
    <div class="aw-table-region">
      <form class="aw-table-filters" data-aw-example-form novalidate aria-labelledby="aw-filter-compact-heading aw-filter-compact-title">
        <span class="visually-hidden" id="aw-filter-compact-title" data-i18n="table:aw.filtersTitle">筛选条件</span>
        <div class="aw-table-filter-primary"><label class="aw-table-filter-keyword"><span data-i18n="table:aw.searchLabel">综合关键词</span><input data-aw-filter="search" placeholder="名称 / 备注 / 资源包版本" data-i18n-placeholder="table:aw.searchHint"></label></div>
        <div class="aw-table-filter-advanced" id="aw-filter-compact-advanced" data-aw-filter-advanced hidden></div>
        <p class="aw-table-filter-errors" id="aw-filter-compact-errors" data-aw-filter-errors role="alert" hidden></p>
        <div class="aw-table-filter-footer">
          <span class="aw-table-filter-count" data-aw-filter-count aria-live="polite"></span>
          <div class="aw-table-filter-buttons"><button type="button" class="aw-table-filter-toggle" data-aw-filter-toggle aria-expanded="false" aria-controls="aw-filter-compact-advanced" hidden><svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12"><path d="m2 4 4 4 4-4" fill="none" stroke="currentColor"/></svg><span data-i18n="table:aw.expandFilters">更多筛选</span></button><div class="aw-table-filter-submit-actions"><button type="button" class="btn btn-sm" data-aw-filter-reset><span data-i18n="table:aw.reset">重置</span></button><button type="submit" class="btn btn-primary btn-sm"><span data-i18n="table:aw.search">搜索</span></button></div></div>
        </div>
      </form>
    </div>
    <p class="aw-table-note aw-filter-example-result" data-aw-example-result role="status"><span data-i18n="table:filterExamples.ready">编辑条件后搜索，查看本地应用结果。</span></p>
    <div hidden><span data-aw-example-label="enabledCount" data-i18n="table:aw.enabledCount">已启用 {count} 项</span><span data-aw-example-label="expandFilters" data-i18n="table:aw.expandFilters">更多筛选</span><span data-aw-example-label="collapseFilters" data-i18n="table:aw.collapseFilters">收起筛选</span><span data-aw-example-label="applied" data-i18n="table:filterExamples.applied">已在此示例应用 {count} 项条件，未调用业务接口。</span><span data-aw-example-label="reset" data-i18n="table:filterExamples.reset">已恢复此示例默认条件。</span></div>
  </article>
</section>

<details class="aw-table-guide" id="aw-table-development" data-aw-guide="development">
<summary><span class="aw-table-guide-heading"><span data-i18n="table:dev.title">开发接入与接口速查</span><span data-i18n="table:dev.hint">3 种组合、核心参数、事件与扩展区域</span></span>
</summary>
<div class="aw-table-guide-body">
<p><span data-i18n="table:dev.boundary">下列代码展示目标 API，不是已发布包的可运行教程。消费者需先实现这些导出；示例不提供虚构 import。业务字段、权限、文案和 loadRows 由调用方提供。</span>
</p>
<details class="aw-table-code-example">
<summary><span data-i18n="table:dev.example.local.title">只读小表</span>
</summary>
<p><span data-i18n="table:dev.example.local.body">适用于详情内的完整小集合。staticColumns 不声明排序；省略查询、选择与动作。需要筛选或分页时，再接入受控 query。</span>
</p>
<div class="aw-table-code-toolbar"><button type="button" class="btn btn-sm" data-aw-copy="aw-table-code-local"><span data-i18n="table:dev.copy">复制代码</span></button><span data-aw-copy-feedback="aw-table-code-local" role="status"></span>
</div>
<pre class="aw-table-code" tabindex="0" aria-label="只读小表" data-i18n-aria-label="table:dev.example.local.title"><code id="aw-table-code-local" data-i18n-ignore>function ReadOnlyTable({ allRows, staticColumns, label }) {
  return &lt;AWTable
    id=&quot;members-preview&quot; mode=&quot;local&quot;
    rowKey={(row) =&gt; row.id}
    rows={allRows} columns={staticColumns}
    status="ready" pagination={false} aria-label={label}
  /&gt;;
}</code>
</pre>
</details>
<details class="aw-table-code-example">
<summary><span data-i18n="table:dev.example.remote.title">标准远程列表</span>
</summary>
<p><span data-i18n="table:dev.example.remote.body">一个查询控制器与一个请求所有者。loadRows(query, { signal, contextKey }) 返回 { rows, total }；不要另加订阅 query 的请求 effect。同条件搜索保留当前页，条件变化回首页。</span>
</p>
<div class="aw-table-code-toolbar"><button type="button" class="btn btn-sm" data-aw-copy="aw-table-code-remote"><span data-i18n="table:dev.copy">复制代码</span></button><span data-aw-copy-feedback="aw-table-code-remote" role="status"></span>
</div>
<pre class="aw-table-code" tabindex="0" aria-label="标准远程列表" data-i18n-aria-label="table:dev.example.remote.title"><code id="aw-table-code-remote" data-i18n-ignore>function RemoteList({ contextKey, gate, loadRows, fields,
  defaultFilters, columns, actions, labels }) {
  const [draft, setDraft] = useState(defaultFilters);
  const [expanded, setExpanded] = useState(false);
  const table = useAWTableState({ contextKey, initialQuery: {
    page: 1, pageSize: 20, filters: defaultFilters, sort: [],
  }});
  const request = useAWTableRequest({
    coordinator: table.requestCoordinator,
    query: table.query, refreshVersion: table.refreshVersion,
    contextKey, gate, load: loadRows,
  });
  return &lt;AWTableRegion filters={
    &lt;AWTableFilters id=&quot;records-filter&quot; title={labels.filters}
      fields={fields} draft={draft} applied={table.query.filters}
      defaultValues={defaultFilters} onDraftChange={setDraft}
      expanded={expanded} onExpandedChange={setExpanded}
      disabled={request.gate.state !== &#x27;ready&#x27;}
      submitting={[&#x27;initialLoading&#x27;, &#x27;refreshing&#x27;].includes(request.status)}
      onSubmit={table.search} onReset={(values) =&gt; {
        if (!table.reset({ filters: values }).accepted) return;
        setDraft(values); setExpanded(false);
      }} /&gt;
  }&gt;
    &lt;AWTable id=&quot;records&quot; mode=&quot;remote&quot; contextKey={contextKey}
      rowKey={(row) =&gt; row.id} columns={columns} actions={actions}
      rows={request.rows} total={request.total}
      query={table.query} onQueryChange={table.onQueryChange}
      status={request.status} statusMessage={request.statusMessage}
      error={request.error} onRetry={request.retry}
      pagination=&quot;internal&quot; aria-label={labels.table} /&gt;
  &lt;/AWTableRegion&gt;;
}</code>
</pre>
</details>
<details class="aw-table-code-example">
<summary><span data-i18n="table:dev.example.scope.title">机构与批量列表</span>
</summary>
<p><span data-i18n="table:dev.example.scope.body">此例接入已有的外部请求层：result、query 和 selection 由同一页面控制器提供。机构未就绪不读取；切机构清理旧选择与结果。batchBar 使用冻结的选择快照，只移除成功项，保留失败项；待核对结果不自动重试。</span>
</p>
<div class="aw-table-code-toolbar"><button type="button" class="btn btn-sm" data-aw-copy="aw-table-code-scope"><span data-i18n="table:dev.copy">复制代码</span></button><span data-aw-copy-feedback="aw-table-code-scope" role="status"></span>
</div>
<pre class="aw-table-code" tabindex="0" aria-label="机构与批量列表" data-i18n-aria-label="table:dev.example.scope.title"><code id="aw-table-code-scope" data-i18n-ignore>function ScopedBatchList({ contextKey, orgTree, filters, batchBar,
  query, onQueryChange, result, columns, actions,
  selectedKeys, onSelectionChange, label }) {
  return &lt;section&gt;
    {orgTree}
    &lt;AWTableRegion filters={filters} batchBar={batchBar}&gt;
      &lt;AWTable id=&quot;scoped-records&quot; mode=&quot;remote&quot;
        contextKey={contextKey} rowKey={(row) =&gt; row.id}
        rows={result.rows} total={result.total}
        status={result.status} statusMessage={result.statusMessage}
        error={result.error} onRetry={result.retry}
        query={query} onQueryChange={onQueryChange}
        columns={columns} actions={actions}
        selection={{ scope: &#x27;query&#x27;,
          value: { kind: &#x27;keys&#x27;, keys: selectedKeys },
          onChange: onSelectionChange,
        }}
        pagination=&quot;internal&quot; aria-label={label} /&gt;
    &lt;/AWTableRegion&gt;
  &lt;/section&gt;;
}</code>
</pre>
</details>
<h3 id="aw-table-api-props" tabindex="-1"><span data-i18n="table:dev.api.props">核心参数与默认行为</span>
</h3>
<div class="aw-table-guide-scroll i18n-table-scroll" role="region" tabindex="0" aria-labelledby="aw-table-api-props">
<table class="map-table aw-table-guide-matrix aw-table-api-matrix">
<thead>
<tr>
<th scope="col"><span data-i18n="table:dev.api.props.h0">参数</span>
</th>
<th scope="col"><span data-i18n="table:dev.api.props.h1">必填 / 默认</span>
</th>
<th scope="col"><span data-i18n="table:dev.api.props.h2">职责与约束</span>
</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row"><code>id / rowKey / mode</code>
</th>
<td><span data-i18n="table:dev.api.props.r0c1">调用方必填</span>
</td>
<td><span data-i18n="table:dev.api.props.r0c2">稳定 id 与字符串 rowKey；显式 remote / local。local 必须传完整集合。</span>
</td>
</tr>
<tr>
<th scope="row"><code>rows / total / status</code>
</th>
<td><span data-i18n="table:dev.api.props.r1c1">外部受控；无推断</span>
</td>
<td><span data-i18n="table:dev.api.props.r1c2">远程成功需要 total；首次未知不显示为 0。刷新失败保留旧结果并标明未更新。</span>
</td>
</tr>
<tr>
<th scope="row"><code>columns / actions</code>
</th>
<td><span data-i18n="table:dev.api.props.r2c1">列必填；无 actions 则无操作列</span>
</td>
<td><span data-i18n="table:dev.api.props.r2c2">列提供 id / title / semantic / width / render；动作提供 definitions / combinations / resolve / onExecute。无菜单时普通 1–3 项直露；有菜单时最多 2 项＋更多，总入口不超过 3；窄容器可继续收纳。</span>
</td>
</tr>
<tr>
<th scope="row"><code>query / onQueryChange</code>
</th>
<td><span data-i18n="table:dev.api.props.r3c1">有查询交互时成对提供</span>
</td>
<td><span data-i18n="table:dev.api.props.r3c2">已应用条件的唯一出口。默认每页 20；选项 20 / 50 / 100 / 200。换页大小或排序回第 1 页。</span>
</td>
</tr>
<tr>
<th scope="row"><code>pagination / selection</code>
</th>
<td><span data-i18n="table:dev.api.props.r4c1">分页显式配置；选择省略即关闭</span>
</td>
<td><span data-i18n="table:dev.api.props.r4c2">pagination 为 false / internal / external；外置时无第二套分页。选择声明 page / query / context 范围和受控 value。</span>
</td>
</tr>
<tr>
<th scope="row"><code>contextKey / request gate</code>
</th>
<td><span data-i18n="table:dev.api.props.r5c1">领域上下文与准入由外层提供</span>
</td>
<td><span data-i18n="table:dev.api.props.r5c2">gate 只传给请求层；waiting / blocked 不调用 load。contextKey 不含凭据，旧响应与旧 finally 不能回填新上下文。</span>
</td>
</tr>
<tr>
<th scope="row"><code>layout / density</code>
</th>
<td><span data-i18n="table:dev.api.props.r6c1">语义宽度；继承应用密度</span>
</td>
<td><span data-i18n="table:dev.api.props.r6c2">实测内容盒；密度基线 32 / 40 / 48px，内容可增高。空间不足逐级解除固定并局部横滚。显示列位于结果工具栏右侧，与视图切换同组；不占用表头。</span>
</td>
</tr>
</tbody>
</table>
</div>
<h3 id="aw-table-api-events" tabindex="-1"><span data-i18n="table:dev.api.events">事件与请求所有权</span>
</h3>
<div class="aw-table-guide-scroll i18n-table-scroll" role="region" tabindex="0" aria-labelledby="aw-table-api-events">
<table class="map-table aw-table-guide-matrix aw-table-api-matrix">
<thead>
<tr>
<th scope="col"><span data-i18n="table:dev.api.events.h0">入口</span>
</th>
<th scope="col"><span data-i18n="table:dev.api.events.h1">默认行为</span>
</th>
<th scope="col"><span data-i18n="table:dev.api.events.h2">责任边界</span>
</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row"><code>onDraftChange / onExpandedChange</code>
</th>
<td><span data-i18n="table:dev.api.events.r0c1">只改草稿 / 展开；0 次读取</span>
</td>
<td><span data-i18n="table:dev.api.events.r0c2">收起保值；已启用计数读取 applied。</span>
</td>
</tr>
<tr>
<th scope="row"><code>onSubmit → search</code>
</th>
<td><span data-i18n="table:dev.api.events.r1c1">校验通过后受理一次</span>
</td>
<td><span data-i18n="table:dev.api.events.r1c2">同条件保留页码重取，变条件回首页；同步锁拒绝 pending 重复提交。</span>
</td>
</tr>
<tr>
<th scope="row"><code>onReset → reset</code>
</th>
<td><span data-i18n="table:dev.api.events.r2c1">先检查 accepted，再更新草稿</span>
</td>
<td><span data-i18n="table:dev.api.events.r2c2">查询变化才读取；清选择和错误，不改机构。不能额外触发 onSubmit。</span>
</td>
</tr>
<tr>
<th scope="row"><code>onQueryChange / onRetry</code>
</th>
<td><span data-i18n="table:dev.api.events.r3c1">每次有效事件最多读取一次</span>
</td>
<td><span data-i18n="table:dev.api.events.r3c2">分页和排序共用出口；重试只使用 applied，不提交新 draft。</span>
</td>
</tr>
<tr>
<th scope="row"><code>actions.onExecute</code>
</th>
<td><span data-i18n="table:dev.api.events.r4c1">同步锁定；必要时确认一次</span>
</td>
<td><span data-i18n="table:dev.api.events.r4c2">只在领域声明数据失效时重取；原上下文已失效则只反馈，不更新新列表。</span>
</td>
</tr>
<tr>
<th scope="row"><code>selection.onChange</code>
</th>
<td><span data-i18n="table:dev.api.events.r5c1">受控值＋变化原因</span>
</td>
<td><span data-i18n="table:dev.api.events.r5c2">一次交互发一次事件；批量提交捕获快照，不从随时变化的选择重算目标。</span>
</td>
</tr>
</tbody>
</table>
</div>
<h3 id="aw-table-api-slots" tabindex="-1"><span data-i18n="table:dev.api.slots">组合区域与扩展</span>
</h3>
<div class="aw-table-guide-scroll i18n-table-scroll" role="region" tabindex="0" aria-labelledby="aw-table-api-slots">
<table class="map-table aw-table-guide-matrix aw-table-api-matrix">
<thead>
<tr>
<th scope="col"><span data-i18n="table:dev.api.slots.h0">位置</span>
</th>
<th scope="col"><span data-i18n="table:dev.api.slots.h1">用途</span>
</th>
<th scope="col"><span data-i18n="table:dev.api.slots.h2">约束</span>
</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row"><code>AWTableRegion</code>
</th>
<td><span data-i18n="table:dev.api.slots.r0c1">filters / toolbar / batchBar / children / pagination</span>
</td>
<td><span data-i18n="table:dev.api.slots.r0c2">可选布局，不持有第二份数据。无内容不占空白。机构树、弹窗与导出仍由页面组合。</span>
</td>
</tr>
<tr>
<th scope="row"><code>AWTable.slots</code>
</th>
<td><span data-i18n="table:dev.api.slots.r1c1">summary / toolbar / batchBar / empty / error / expandedRow</span>
</td>
<td><span data-i18n="table:dev.api.slots.r1c2">summary 为左侧结果摘要，toolbar 为右侧业务动作与视图切换；组件在其后生成显示列。空槽位不占空间；不能绕过动作确认、查询 gate 或选择语义。</span>
</td>
</tr>
<tr>
<th scope="row"><code>tableProps / semantic styles</code>
</th>
<td><span data-i18n="table:dev.api.slots.r2c1">白名单原生能力与样式透传</span>
</td>
<td><span data-i18n="table:dev.api.slots.r2c2">不能覆盖 columns / dataSource / rowKey / loading / pagination / rowSelection / onChange / scroll；避免双重所有者。</span>
</td>
</tr>
</tbody>
</table>
</div>
<p class="aw-table-guide-document"><span data-i18n="table:dev.moreRules">宽度算法、键盘和状态边界继续查看：</span> <a data-aw-doc-link href="#aw-table-rules"><span data-i18n="table:dev.nav.rules">查阅规则</span></a> · <a data-aw-doc-link href="#aw-table-reference"><span data-i18n="table:dev.nav.reference">分项规范</span></a>
</p>
</div>
</details>
<details class="aw-table-guide" id="aw-table-sources" data-aw-guide="sources"><summary><span class="aw-table-guide-heading"><span data-i18n="table:guide.sourcesSection.title">可复用的组成与源码依据</span><span data-i18n="table:guide.sourcesSection.hint">8 类现有能力，区分复用与必须调整</span></span></summary><div class="aw-table-guide-body">  <div class="subsection" id="aw-table-component">
    <h3><span data-i18n="table:aw.architectureTitle">AWTable 的完整组成</span></h3><p><span data-i18n="table:aw.architectureBody">筛选区、工具栏、批量操作条、数据表格、分页与状态视图共用查询状态。列定义与动作定义提供给 AWTable；领域 API、权限、机构树、业务表单留在页面适配层。</span></p>
    <p><span data-i18n="table:aw.queryRule">草稿与已应用筛选分离。每次有效搜索只发起一次请求：条件相同保留当前页重新获取，条件变化回第 1 页；请求处理中防止重复提交。换页大小与排序变化默认回第 1 页。旧响应不能覆盖新查询；远程分页数据不再次本地切片。</span></p><p><span data-i18n="table:aw.widthRule">当前语言测宽，操作列按整表动作组合稳定分配。主操作与更多仍放不下时扩列、解除固定并局部横滚；不得裁切、缩小文字或按每行单独变化。</span></p>
  </div><p><span data-i18n="table:guide.sourcesIntro">保留已经解决通用问题的实现，把页面偶然行为和历史限制留在适配层。以下是迁移方向，不是直接复制现有组件。</span></p><div class="aw-table-guide-scroll i18n-table-scroll" role="region" tabindex="0" aria-labelledby="guide.sources-label"><table class="map-table aw-table-guide-matrix"><caption id="guide.sources-label" class="visually-hidden"><span data-i18n="table:guide.sources.label">能力与规则</span></caption><thead><tr><th scope="col"><span data-i18n="table:guide.sources.head0">能力</span></th><th scope="col"><span data-i18n="table:guide.sources.head1">当前源码</span></th><th scope="col"><span data-i18n="table:guide.sources.head2">值得吸收</span></th><th scope="col"><span data-i18n="table:guide.sources.head3">封装时补齐</span></th></tr></thead><tbody><tr><th scope="row"><span data-i18n="table:guide.sources.r0c0">基础表格与可访问性</span></th><td><code>src/components/AppTable/AppTable.tsx</code></td><td><span data-i18n="table:guide.sources.r0c2">复用：AntD 原生 Table、Semantic DOM 合并、滚动区名称与键盘入口、隐藏测量行不可聚焦。</span></td><td><span data-i18n="table:guide.sources.r0c3">调整：分页和排序统一为一个事件所有者；保留调用方扩展，防止重复回调。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.sources.r1c0">分页</span></th><td><code>src/components/AppPagination/pager.ts</code></td><td><span data-i18n="table:guide.sources.r1c2">复用：默认 20；20 / 50 / 100 / 200；改变页大小回第 1 页。</span></td><td><span data-i18n="table:guide.sources.r1c3">补齐：未知总数、删除后越界、内外置分页的同一事件语义。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.sources.r2c0">筛选与查询</span></th><td><code>src/pages/resource-packages/ResourcePackagesPage.tsx</code></td><td><span data-i18n="table:guide.sources.r2c2">吸收：草稿 / 已应用条件分离、主要 / 高级字段、已启用计数与独立底栏。</span></td><td><span data-i18n="table:guide.sources.r2c3">调整：同条件搜索仍请求一次；字段 schema、校验与上下文由统一控制器协调，领域参数留给适配器。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.sources.r3c0">操作与测宽</span></th><td><code>src/components/RowActions/RowActions.tsx</code></td><td><span data-i18n="table:guide.sources.r3c2">吸收：按当前文案测宽、观察容器变化、受控异步操作与菜单。</span></td><td><span data-i18n="table:guide.sources.r3c3">调整：整表稳定列宽；无菜单时普通 1–3 项外露；有菜单时最多 2 项＋更多；危险项同样占入口预算，窄容器可继续收纳；业务按钮纯文字。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.sources.r4c0">固定列预算</span></th><td><code>src/utils/useTableColumnFreeze.ts</code></td><td><span data-i18n="table:guide.sources.r4c2">复用：测量容器内容盒，排除 padding / border，使用 ResizeObserver。</span></td><td><span data-i18n="table:guide.sources.r4c3">调整：从单阈值升级为左右固定列与中间内容的预算；容器不足时按优先级解除固定。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.sources.r5c0">状态与反馈</span></th><td><code>src/components/TMSEmpty/</code><br><code>src/components/StatusIndicator/</code></td><td><span data-i18n="table:guide.sources.r5c2">复用：统一空态表达、状态文字与颜色组合、六语言资源入口。</span></td><td><span data-i18n="table:guide.sources.r5c3">补齐：首次加载、保留旧结果加载、无数据、无匹配、请求失败与权限限制分别表达；状态枚举由业务提供。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.sources.r6c0">危险确认与焦点</span></th><td><code>src/utils/confirmDestructiveAction.tsx</code><br><code>src/utils/modalReturnFocus.ts</code></td><td><span data-i18n="table:guide.sources.r6c2">复用：统一确认入口、捕获操作触发器、避免延迟回焦抢走用户焦点。</span></td><td><span data-i18n="table:guide.sources.r6c3">补齐：只确认一次；行删除或按钮失效后回到合理位置；部分失败保留失败项。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.sources.r7c0">恢复与机构范围</span></th><td><code>src/utils/listStatePersistence.ts</code><br><code>src/utils/organizationScope.ts</code><br><code>src/utils/useOrganizationScope.ts</code></td><td><span data-i18n="table:guide.sources.r7c2">吸收：存储异常降级、详情返回恢复、显式机构上下文与范围工具。</span></td><td><span data-i18n="table:guide.sources.r7c3">必须加固：schema 与用户 / 租户作用域校验；切范围使旧请求、选择失效。机构规则留在页面，不写入通用表格。</span></td></tr></tbody></table></div></div></details>
<details class="aw-table-guide" id="aw-table-rules" data-aw-guide="interactions"><summary><span class="aw-table-guide-heading"><span data-i18n="table:guide.interactionsSection.title">交互事件与边界规则</span><span data-i18n="table:guide.interactionsSection.hint">每个事件明确状态、请求、选择与焦点</span></span></summary><div class="aw-table-guide-body"><p><span data-i18n="table:guide.interactionsIntro">以下规则是 React 消费实现的验收依据。上方场景可观察模拟请求、机构切换和批量结果；真实取消、恢复和领域权限仍需消费者验证。</span></p><div class="aw-table-guide-scroll i18n-table-scroll" role="region" tabindex="0" aria-labelledby="guide.events-label"><table class="map-table aw-table-guide-matrix"><caption id="guide.events-label" class="visually-hidden"><span data-i18n="table:guide.events.label">事件与规则</span></caption><thead><tr><th scope="col"><span data-i18n="table:guide.events.head0">事件</span></th><th scope="col"><span data-i18n="table:guide.events.head1">状态变化</span></th><th scope="col"><span data-i18n="table:guide.events.head2">请求约束</span></th><th scope="col"><span data-i18n="table:guide.events.head3">选择与焦点</span></th></tr></thead><tbody><tr><th scope="row"><span data-i18n="table:guide.events.r0c0">输入 / 收起高级筛选</span></th><td><span data-i18n="table:guide.events.r0c1">只改草稿或展开态；隐藏值保留，已启用计数仍来自已应用条件。</span></td><td><span data-i18n="table:guide.events.r0c2">0 次</span></td><td><span data-i18n="table:guide.events.r0c3">保留选择和输入焦点；收起前保证焦点不留在隐藏字段。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.events.r1c0">同条件搜索 / 回车</span></th><td><span data-i18n="table:guide.events.r1c1">完整校验；页码、排序与页大小不变。</span></td><td><span data-i18n="table:guide.events.r1c2">1 次；处理中阻止重复提交。</span></td><td><span data-i18n="table:guide.events.r1c3">同查询选择保留；不把焦点移入表格；宣布加载和结果。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.events.r2c0">变条件搜索</span></th><td><span data-i18n="table:guide.events.r2c1">原子提交完整草稿，回第 1 页。</span></td><td><span data-i18n="table:guide.events.r2c2">1 次；旧响应、旧错误与旧 finally 失效。</span></td><td><span data-i18n="table:guide.events.r2c3">默认清理旧查询选择；无效字段展开并聚焦，且不请求。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.events.r3c0">重置</span></th><td><span data-i18n="table:guide.events.r3c1">草稿与已应用值同时回默认；此参考恢复默认排序、20 条及第 1 页，机构不变。</span></td><td><span data-i18n="table:guide.events.r3c2">查询变化时 1 次；已是默认查询则 0 次，搜索承担主动重取。</span></td><td><span data-i18n="table:guide.events.r3c3">重置清理选择与字段错误；是否读取取决于查询是否变化；焦点留在重置入口。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.events.r4c0">翻页 / 改页大小</span></th><td><span data-i18n="table:guide.events.r4c1">翻页只改 page；改 size 回第 1 页，不提交未搜索的草稿。</span></td><td><span data-i18n="table:guide.events.r4c2">1 次；只有一个分页回调所有者。</span></td><td><span data-i18n="table:guide.events.r4c3">按声明范围保留同查询选择；不跨机构保留；控件位置稳定。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.events.r5c0">排序</span></th><td><span data-i18n="table:guide.events.r5c1">升序 → 降序 → 业务默认；回第 1 页。</span></td><td><span data-i18n="table:guide.events.r5c2">1 次；远程数据由服务端排序。</span></td><td><span data-i18n="table:guide.events.r5c3">按查询选择策略失效；焦点保留在排序头，更新 aria-sort。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.events.r6c0">切机构 / 租户</span></th><td><span data-i18n="table:guide.events.r6c1">更换 contextKey；校验可保留条件并同步草稿 / 已应用值，回第 1 页。</span></td><td><span data-i18n="table:guide.events.r6c2">依赖与权限 gate 就绪后 1 次；未就绪、无范围或失败不请求，也不解释为全部范围。</span></td><td><span data-i18n="table:guide.events.r6c3">清理不适用选择和菜单；进行中的写操作仍属于原上下文，不回填新列表；保留范围控件焦点。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.events.r7c0">失败 / 重试</span></th><td><span data-i18n="table:guide.events.r7c1">区分首次失败与旧结果更新失败；重试使用已应用查询，不提交草稿。</span></td><td><span data-i18n="table:guide.events.r7c2">每次有效重试 1 次；不自动重试写操作。</span></td><td><span data-i18n="table:guide.events.r7c3">保留条件；旧结果须标明未更新；重试失败后保留可操作入口。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.events.r8c0">更多 / 执行操作</span></th><td><span data-i18n="table:guide.events.r8c1">只在有收纳项时显示；行内与菜单来自同一动作定义。</span></td><td><span data-i18n="table:guide.events.r8c2">开关菜单 0 次；动作执行由业务返回结果。</span></td><td><span data-i18n="table:guide.events.r8c3">方向键 / Home / End 导航，Escape 回触发器；pending 防重复且可说明禁用原因。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.events.r9c0">危险操作 / 删除</span></th><td><span data-i18n="table:guide.events.r9c1">危险确认一次；默认聚焦取消；执行前复核对象状态和权限。</span></td><td><span data-i18n="table:guide.events.r9c2">确认后写请求 1 次；成功再按当前查询更新，末页越界可补 1 次校正读请求。</span></td><td><span data-i18n="table:guide.events.r9c3">取消回原按钮；删除后选择移除该项，回邻近可用入口；批量部分失败保留失败项。</span></td></tr><tr><th scope="row"><span data-i18n="table:guide.events.r10c0">详情返回 / 视图切换</span></th><td><span data-i18n="table:guide.events.r10c1">恢复合法查询和视图；表格 / 卡片共用数据与动作；敏感状态不写 URL。</span></td><td><span data-i18n="table:guide.events.r10c2">恢复由唯一数据所有者按缓存策略获取；切视图不重复请求。</span></td><td><span data-i18n="table:guide.events.r10c3">选择按 scope 复核；回到原行或稳定列表入口，不保存已打开的弹窗。</span></td></tr></tbody></table></div></div></details>
<details class="aw-table-guide" id="aw-table-implementation" data-aw-guide="implementation"><summary><span class="aw-table-guide-heading"><span data-i18n="table:guide.implementationSection.title">实现顺序与交付清单</span><span data-i18n="table:guide.implementationSection.hint">页面负责业务，共享层负责一致的交互</span></span></summary><div class="aw-table-guide-body"><ol class="aw-table-implementation"><li><strong><span data-i18n="table:guide.check0.title">先选组合方式</span></strong><p><span data-i18n="table:guide.check0.body">完整列表组合筛选、工具栏、批量条、表格与分页；弹窗内小表仅用 AWTable。无内容的区域不占位。</span></p></li><li><strong><span data-i18n="table:guide.check1.title">确定唯一数据所有者</span></strong><p><span data-i18n="table:guide.check1.body">外部查询框架或可选请求 Hook 二选一；AWTable 接收受控 rows / status / query，不自己猜 API 或重复切分页。</span></p></li><li><strong><span data-i18n="table:guide.check2.title">声明列、动作与选择范围</span></strong><p><span data-i18n="table:guide.check2.body">列提供语义、上下限与全文访问；动作提供可见 / 禁用原因与结果；稳定 rowKey 保持字符串，声明 page / query / context 选择范围。</span></p></li><li><strong><span data-i18n="table:guide.check3.title">接入领域适配器</span></strong><p><span data-i18n="table:guide.check3.body">页面决定机构、权限、状态枚举、日期时区与 API 参数；共享层统一布局、事件去重、过期响应保护和状态呈现。</span></p></li><li><strong><span data-i18n="table:guide.check4.title">验证完整交互链</span></strong><p><span data-i18n="table:guide.check4.body">覆盖空 / 错 / 加载、同条件搜索、重置、跨页选择、末页删除、并发返回、键盘焦点，以及六语言和明暗主题下的真实容器宽度。</span></p></li><li><strong><span data-i18n="table:guide.check5.title">分阶段替换旧封装</span></strong><p><span data-i18n="table:guide.check5.body">先简单只读表，再标准列表，再复杂机构和批量场景；逐页验收后删除重复代码。已批准的结果工具栏列显隐按需接入，拖拽列序与手动调宽继续延后。</span></p></li></ol><p class="aw-table-guide-document"><span data-i18n="table:dev.documents">本页提供可发布的接口、用例与交互规则：</span> <a data-aw-doc-link href="#aw-table-development"><span data-i18n="table:dev.nav.develop">开发接入</span></a> · <a data-aw-doc-link href="#aw-table-rules"><span data-i18n="table:dev.nav.rules">查阅规则</span></a> · <a data-aw-doc-link href="#aw-table-sources"><span data-i18n="table:dev.nav.sources">源码取舍</span></a></p></div></details>
<details class="aw-table-guide aw-table-reference" id="aw-table-reference" data-aw-guide="reference"><summary><span class="aw-table-guide-heading"><span data-i18n="table:guide.referenceTitle">分项规范与示意参考</span><span data-i18n="table:guide.referenceHint">按需展开：列宽、密度、状态、冻结、批量、分页与反例</span></span></summary><div class="aw-table-guide-body">
  <p class="lede"><span data-i18n="table:examples.scope">下方是静态结构与视觉示意：按钮不执行查询或业务操作。实际交互请使用上方组件预览；示例像素宽度不作为所有页面的固定值。</span></p>

  <div class="table-wrap">
    <table class="dt">
<thead>
  <tr>
    <th scope="col" class="colselect" style="width:40px"><span class="visually-hidden" data-i18n="table:text.329">选择列</span><label class="check"><input type="checkbox" /><span class="box"></span></label></th>
    <th><span data-i18n="table:text.004">设备名称</span></th>
    <th>SN</th>
    <th><span data-i18n="table:text.005">状态</span></th>
    <th><span data-i18n="table:text.006">OTA 版本</span></th>
    <th><span data-i18n="table:text.007">所属机构</span></th>
    <th><span data-i18n="table:text.008">最后心跳</span></th>
    <th class="colactions" style="width:160px"><span data-i18n="table:text.009">操作</span></th>
  </tr>
</thead>
<tbody>
  <tr><td class="colselect"><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td><td><span data-i18n="table:text.010">终端-上海-001</span></td><td><code>DEV-86420075</code></td><td><span class="status-dot online"><span data-i18n="table:text.011">在线</span></span></td><td>v3.4.2</td><td><span data-i18n="table:text.012">上海 / 黄浦</span></td><td><span data-i18n="table:text.013">刚刚</span></td><td class="colactions"><button class="btn btn-link"><span data-i18n="table:text.014">详情</span></button><button class="btn btn-link"><span data-i18n="table:text.015">更多</span></button></td></tr>
  <tr><td class="colselect"><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="table:text.016">终端-北京-014</span></td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading"><span data-i18n="table:text.017">升级中</span></span></td><td>v3.4.1 → v3.5.0</td><td><span data-i18n="table:text.018">北京 / 海淀</span></td><td><span data-i18n="table:text.019">2 分钟前</span></td><td class="colactions"><button class="btn btn-link"><span data-i18n="table:text.020">详情</span></button><button class="btn btn-link"><span data-i18n="table:text.021">更多</span></button></td></tr>
  <tr><td class="colselect"><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="table:text.022">终端-广州-007</span></td><td><code>DEV-86420112</code></td><td><span class="status-dot offline"><span data-i18n="table:text.023" style="color:var(--aw-text-3)">离线</span></span></td><td>v3.3.8</td><td><span data-i18n="table:text.024">广州 / 天河</span></td><td><span data-i18n="table:text.025">12 分钟前</span></td><td class="colactions"><button class="btn btn-link"><span data-i18n="table:text.026">详情</span></button><button class="btn btn-link"><span data-i18n="table:text.027">更多</span></button></td></tr>
  <tr><td class="colselect"><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="table:text.028">终端-成都-022</span></td><td><code>DEV-86420144</code></td><td><span class="status-dot fault"><span data-i18n="table:text.029">故障</span></span></td><td>v3.4.0</td><td><span data-i18n="table:text.030">成都 / 高新</span></td><td><span data-i18n="table:text.031">1 小时前</span></td><td class="colactions"><button class="btn btn-link"><span data-i18n="table:text.032">详情</span></button><button class="btn btn-link"><span data-i18n="table:text.033">更多</span></button></td></tr>
  <tr><td class="colselect"><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="table:text.034">终端-深圳-031</span></td><td><code>DEV-86420178</code></td><td><span class="status-dot online"><span data-i18n="table:text.035">在线</span></span></td><td>v3.4.2</td><td><span data-i18n="table:text.036">深圳 / 南山</span></td><td><span data-i18n="table:text.037">刚刚</span></td><td class="colactions"><button class="btn btn-link"><span data-i18n="table:text.038">详情</span></button><button class="btn btn-link"><span data-i18n="table:text.039">更多</span></button></td></tr>
</tbody>
    </table>
  </div>

  <div class="row" style="margin-top:14px;justify-content:space-between">
    <div style="font-size:13px;color:var(--aw-text-3)"><span data-i18n="table:text.040">已选 1 / 共 12,486 项</span></div>
    <div class="pager" data-total-pages="625">
<span class="total"><span data-i18n="table:text.041">共 12,486 项</span></span>
<button class="page" disabled aria-label="上一页" data-i18n-aria-label="common:paginationPrevious">‹</button>
<button class="page is-active">1</button>
<button class="page">2</button>
<button class="page">3</button>
<span class="page" aria-hidden="true">…</span>
<button class="page">625</button>
<button class="page">›</button>
<div class="select" style="margin-left:8px;min-width:96px"><span><span data-i18n="table:text.042">20 条/页</span></span></div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.043">表格状态 · Loading / Empty / Error</span></h3>
    <div class="demo-grid">
<div>
  <div style="font-size:13px;color:var(--aw-text-3);margin-bottom:8px"><span data-i18n="table:text.044">Loading · 骨架屏占位</span></div>
  <div class="table-wrap">
    <table class="dt">
      <thead><tr><th scope="col" class="colselect" style="width:40px"><span class="visually-hidden" data-i18n="table:text.329">选择列</span></th><th><span data-i18n="table:text.045">设备名称</span></th><th>SN</th><th><span data-i18n="table:text.046">状态</span></th><th><span data-i18n="table:text.047">OTA 版本</span></th><th class="colactions"><span data-i18n="table:text.048">操作</span></th></tr></thead>
      <tbody>
        <tr><td class="colselect"><div class="skel" style="height:14px;width:14px;border-radius:3px"></div></td><td><div class="skel mid"></div></td><td><div class="skel short"></div></td><td><div class="skel" style="width:60px"></div></td><td><div class="skel short"></div></td><td class="colactions"><div class="skel short" style="margin-left:0"></div></td></tr>
        <tr><td class="colselect"><div class="skel" style="height:14px;width:14px;border-radius:3px"></div></td><td><div class="skel mid"></div></td><td><div class="skel short"></div></td><td><div class="skel" style="width:60px"></div></td><td><div class="skel short"></div></td><td class="colactions"><div class="skel short" style="margin-left:0"></div></td></tr>
        <tr><td class="colselect"><div class="skel" style="height:14px;width:14px;border-radius:3px"></div></td><td><div class="skel mid"></div></td><td><div class="skel short"></div></td><td><div class="skel" style="width:60px"></div></td><td><div class="skel short"></div></td><td class="colactions"><div class="skel short" style="margin-left:0"></div></td></tr>
        <tr><td class="colselect"><div class="skel" style="height:14px;width:14px;border-radius:3px"></div></td><td><div class="skel mid"></div></td><td><div class="skel short"></div></td><td><div class="skel" style="width:60px"></div></td><td><div class="skel short"></div></td><td class="colactions"><div class="skel short" style="margin-left:0"></div></td></tr>
      </tbody>
    </table>
  </div>
</div>

<div>
  <div style="font-size:13px;color:var(--aw-text-3);margin-bottom:8px"><span data-i18n="table:text.049">Empty · 无数据</span></div>
  <div class="table-wrap">
    <table class="dt">
      <thead><tr><th scope="col" class="colselect" style="width:40px"><span class="visually-hidden" data-i18n="table:text.329">选择列</span></th><th><span data-i18n="table:text.050">设备名称</span></th><th>SN</th><th><span data-i18n="table:text.051">状态</span></th><th><span data-i18n="table:text.052">OTA 版本</span></th><th class="colactions"><span data-i18n="table:text.053">操作</span></th></tr></thead>
    </table>
    <div style="padding:48px 24px;text-align:center;background:var(--aw-bg)">
      <div style="width:56px;height:56px;margin:0 auto 14px;border-radius:50%;background:var(--aw-fill-2);display:grid;place-items:center;color:var(--aw-text-4)">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      </div>
      <div style="font-size:14px;color:var(--aw-text-2);margin-bottom:4px;font-weight:500"><span data-i18n="table:text.054">未找到匹配的设备</span></div>
      <div style="font-size:12px;color:var(--aw-text-3);margin-bottom:14px"><span data-i18n="table:text.055">尝试调整筛选条件，或清空所有筛选项重新查询</span></div>
      <div class="row" style="justify-content:center"><button class="btn btn-sm"><span data-i18n="table:text.056">清空筛选</span></button><button class="btn btn-primary btn-sm"><span data-i18n="table:text.057">添加设备</span></button></div>
    </div>
  </div>
</div>

<div>
  <div style="font-size:13px;color:var(--aw-text-3);margin-bottom:8px"><span data-i18n="table:text.058">Error · 加载失败</span></div>
  <div class="table-wrap">
    <table class="dt">
      <thead><tr><th scope="col" class="colselect" style="width:40px"><span class="visually-hidden" data-i18n="table:text.329">选择列</span></th><th><span data-i18n="table:text.059">设备名称</span></th><th>SN</th><th><span data-i18n="table:text.060">状态</span></th><th><span data-i18n="table:text.061">OTA 版本</span></th><th class="colactions"><span data-i18n="table:text.062">操作</span></th></tr></thead>
    </table>
    <div style="padding:48px 24px;text-align:center;background:var(--aw-bg)">
      <div style="width:56px;height:56px;margin:0 auto 14px;border-radius:50%;background:var(--aw-danger-bg);display:grid;place-items:center;color:var(--aw-danger)">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
      </div>
      <div style="font-size:14px;color:var(--aw-text-1);margin-bottom:4px;font-weight:500"><span data-i18n="table:text.063">无法加载设备列表</span></div>
      <div style="font-size:12px;color:var(--aw-text-3);margin-bottom:14px;font-family:var(--aw-font-mono)"><span data-i18n="table:text.064">net::ERR_CONNECTION_TIMEOUT · 请检查网络或稍后重试</span></div>
      <button class="btn btn-primary btn-sm"><span data-i18n="table:text.065">重新加载</span></button>
    </div>
  </div>
</div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.066">密度三档 · Dense / Middle / Loose</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="table:text.067">用户按信息密度切换 Dense / Middle / Loose。32 / 40 / 48px 是单行最小基准，不是强制行高；多行内容、操作按钮、触控与缩放不得被裁切。Middle 为默认。密度偏好按产品声明的用户范围持久化，例如 </span><code>aw.table.density</code><span data-i18n="table:text.326">。</span></p>
    <div class="dens-grid">
      <div class="dens-card">
        <div class="dens-cap"><span class="tag-meta">Dense · 32px</span></div>
        <table class="dt dt-dense">
          <thead><tr><th><span data-i18n="table:text.068">设备</span></th><th><span data-i18n="table:text.069">状态</span></th><th><span data-i18n="table:text.070">OTA 版本</span></th></tr></thead>
          <tbody>
            <tr><td>SH-001</td><td><span class="status-dot online"><span data-i18n="table:text.071">在线</span></span></td><td>v3.4.2</td></tr>
            <tr><td>BJ-014</td><td><span class="status-dot upgrading"><span data-i18n="table:text.072">升级中</span></span></td><td>v3.4.1</td></tr>
            <tr><td>GZ-007</td><td><span class="status-dot offline"><span data-i18n="table:text.073" style="color:var(--aw-text-3)">离线</span></span></td><td>v3.3.8</td></tr>
            <tr><td>CD-022</td><td><span class="status-dot fault"><span data-i18n="table:text.074">故障</span></span></td><td>v3.4.0</td></tr>
          </tbody>
        </table>
      </div>
      <div class="dens-card">
        <div class="dens-cap"><span class="tag-meta"><span data-i18n="table:text.075">Middle · 40px (默认)</span></span></div>
        <table class="dt">
          <thead><tr><th><span data-i18n="table:text.076">设备</span></th><th><span data-i18n="table:text.077">状态</span></th><th><span data-i18n="table:text.078">OTA 版本</span></th></tr></thead>
          <tbody>
            <tr><td>SH-001</td><td><span class="status-dot online"><span data-i18n="table:text.079">在线</span></span></td><td>v3.4.2</td></tr>
            <tr><td>BJ-014</td><td><span class="status-dot upgrading"><span data-i18n="table:text.080">升级中</span></span></td><td>v3.4.1</td></tr>
            <tr><td>GZ-007</td><td><span class="status-dot offline"><span data-i18n="table:text.081" style="color:var(--aw-text-3)">离线</span></span></td><td>v3.3.8</td></tr>
          </tbody>
        </table>
      </div>
      <div class="dens-card">
        <div class="dens-cap"><span class="tag-meta">Loose · 48px</span></div>
        <table class="dt dt-loose">
          <thead><tr><th><span data-i18n="table:text.082">设备</span></th><th><span data-i18n="table:text.083">状态</span></th><th><span data-i18n="table:text.084">OTA 版本</span></th></tr></thead>
          <tbody>
            <tr><td>SH-001</td><td><span class="status-dot online"><span data-i18n="table:text.085">在线</span></span></td><td>v3.4.2</td></tr>
            <tr><td>BJ-014</td><td><span class="status-dot upgrading"><span data-i18n="table:text.086">升级中</span></span></td><td>v3.4.1</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.110">列冻结 · 左 / 右 / 双向</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="table:text.111">依据表格容器实测宽度决定固定列，不按列数或浏览器宽度直接判断。为中间数据列保留阅读空间；预算不足时先解除次要左侧列，再解除右侧操作列，必要时解除主标识列固定。操作仍可通过局部横滚到达。固定分隔阴影仅在确有被遮挡的滚动内容时出现。</span></p>
    <div class="surface responsive-table" style="padding:0">
      <div class="frozen-table-wrap">
        <table class="dt">
          <thead><tr>
            <th class="freeze-l" style="width:160px"><span data-i18n="table:text.112">设备名称</span></th>
            <th class="freeze-l" style="width:160px">SN</th>
            <th><span data-i18n="table:text.113">状态</span></th><th><span data-i18n="table:text.114">OTA 版本</span></th><th><span data-i18n="table:text.115">所属机构</span></th><th><span data-i18n="table:text.116">设备型号</span></th><th><span data-i18n="table:text.117">入网时间</span></th>
            <th><span data-i18n="table:text.118">最后心跳</span></th><th><span data-i18n="table:text.119">电池</span></th><th><span data-i18n="table:text.120">信号</span></th><th><span data-i18n="table:text.121">系统</span></th>
            <th class="freeze-r colactions"><span data-i18n="table:text.122">操作</span></th>
          </tr></thead>
          <tbody>
            <tr>
              <td class="freeze-l"><span data-i18n="table:text.123">终端-上海-001</span></td>
              <td class="freeze-l"><code>DEV-86420075</code></td>
              <td><span class="status-dot online"><span data-i18n="table:text.124">在线</span></span></td>
              <td>v3.4.2</td><td><span data-i18n="table:text.125">上海/黄浦</span></td><td>AW-Pro 5</td><td>2025-08-12</td>
              <td><span data-i18n="table:text.126">刚刚</span></td><td>92%</td><td>-67dBm</td><td>Android 13</td>
              <td class="freeze-r colactions"><button class="btn btn-link"><span data-i18n="table:text.127">详情</span></button></td>
            </tr>
            <tr>
              <td class="freeze-l"><span data-i18n="table:text.128">终端-北京-014</span></td>
              <td class="freeze-l"><code>DEV-86420089</code></td>
              <td><span class="status-dot upgrading"><span data-i18n="table:text.129">升级中</span></span></td>
              <td>v3.4.1</td><td><span data-i18n="table:text.130">北京/海淀</span></td><td>AW-Pro 5</td><td>2025-09-04</td>
              <td>2m</td><td>78%</td><td>-72dBm</td><td>Android 13</td>
              <td class="freeze-r colactions"><button class="btn btn-link"><span data-i18n="table:text.131">详情</span></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div style="font-size:12px;color:var(--aw-text-3);margin-top:8px;font-family:var(--aw-font-mono)"><span data-i18n="table:text.132">↑ 拖动横向滚动条观察冻结效果。冻结列阴影：</span><code>0 0 4px rgba(0,0,0,0.06)</code></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.133">列宽调整 · 扩展参考</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="table:text.134">当前 AWTable 按列定义与内容计算宽度，不启用用户调宽。下方为未来扩展参考：上下限应来自列语义，不能统一限制为 60–480px；若增加拖拽，必须同时提供键盘、触屏可操作的数值调整与恢复默认入口。</span></p>
    <div class="surface responsive-table" style="padding:0">
      <table class="dt dt-resizable">
        <thead><tr>
          <th style="width:160px"><span data-i18n="table:text.135">设备名称</span><div class="col-resizer"></div></th>
          <th style="width:140px">SN<div class="col-resizer dragging"></div></th>
          <th style="width:120px"><span data-i18n="table:text.136">状态</span><div class="col-resizer"></div></th>
          <th><span data-i18n="table:text.137">OTA 版本</span><div class="col-resizer"></div></th>
          <th><span data-i18n="table:text.138">所属机构</span></th>
        </tr></thead>
        <tbody>
          <tr><td><span data-i18n="table:text.139">终端-上海-001</span></td><td><code>DEV-86420075</code></td><td><span class="status-dot online"><span data-i18n="table:text.140">在线</span></span></td><td>v3.4.2</td><td><span data-i18n="table:text.141">上海/黄浦</span></td></tr>
          <tr><td><span data-i18n="table:text.142">终端-北京-014</span></td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading"><span data-i18n="table:text.143">升级中</span></span></td><td>v3.4.1</td><td><span data-i18n="table:text.144">北京/海淀</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="table:text.145">适应内容宽度</span></strong><span data-i18n="table:text.146">提供文字按钮，可用键盘与触屏触发；根据当前语言、表头与内容计算，并遵守列的最小 / 最大宽度。双击分隔条只能作为可选快捷方式。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.147">批量操作条 · sticky 进出动效</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="table:text.148">勾选至少 1 行时显示批量条，并明示当前页或跨页选择范围。取消所有选择后收起；全部成功后按业务声明清理，部分失败保留失败项与重试入口。批量条不得遮挡聚焦控件和表头；可用 sticky 与 120ms 动效，尊重减少动态效果设置。</span></p>
    <div class="surface responsive-table" style="padding:0">
      <div class="batch-bar">
        <div class="bb-l"><b><span data-i18n="table:text.149">已选 4 项</span></b><span class="bb-sub"><span data-i18n="table:text.150" style="color:var(--aw-text-2)">/ 12,486 总计 · 跨页选中</span></span></div>
        <div class="bb-r">
          <button class="btn btn-sm"><span data-i18n="table:text.151">批量推送</span></button>
          <button class="btn btn-sm"><span data-i18n="table:text.152">批量启停</span></button>
          <button class="btn btn-sm"><span data-i18n="table:text.153">批量导出</span></button>
          <button class="btn btn-sm"><span data-i18n="table:batch.more">更多</span></button>
          <button class="btn btn-link bb-clear"><span data-i18n="table:text.155">取消选择</span></button>
        </div>
      </div>
      <table class="dt" style="border-radius:0">
        <thead><tr>
          <th scope="col"><span class="visually-hidden" data-i18n="table:text.329">选择列</span><label class="check"><input type="checkbox" checked /><span class="box"></span></label></th>
          <th><span data-i18n="table:text.156">设备名称</span></th><th>SN</th><th><span data-i18n="table:text.157">状态</span></th><th><span data-i18n="table:text.158">OTA 版本</span></th>
        </tr></thead>
        <tbody>
          <tr><td class="colselect"><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td><td><span data-i18n="table:text.159">终端-上海-001</span></td><td><code>DEV-86420075</code></td><td><span class="status-dot online"><span data-i18n="table:text.160">在线</span></span></td><td>v3.4.2</td></tr>
          <tr><td class="colselect"><label class="check"><input type="checkbox" checked /><span class="box"></span></label></td><td><span data-i18n="table:text.161">终端-北京-014</span></td><td><code>DEV-86420089</code></td><td><span class="status-dot upgrading"><span data-i18n="table:text.162">升级中</span></span></td><td>v3.4.1</td></tr>
          <tr><td class="colselect"><label class="check"><input type="checkbox" /><span class="box"></span></label></td><td><span data-i18n="table:text.163">终端-广州-007</span></td><td><code>DEV-86420112</code></td><td><span class="status-dot offline"><span data-i18n="table:text.164" style="color:var(--aw-text-3)">离线</span></span></td><td>v3.3.8</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.165">渲染与虚拟化策略</span></h3>
    <div class="surface responsive-table" style="padding:0">
      <table class="tech-table">
        <thead><tr><th style="width:160px"><span data-i18n="table:text.166">数据场景</span></th><th style="width:200px"><span data-i18n="table:text.167">渲染策略</span></th><th><span data-i18n="table:text.168">说明</span></th></tr></thead>
        <tbody>
          <tr><td><span data-i18n="table:text.169">常规分页数据</span></td><td><span class="tag-meta"><span data-i18n="table:text.170">标准 AWTable</span></span></td><td><span data-i18n="table:text.171">使用 antd Table 默认渲染；固定列通过 </span><code>fixed: 'left' / 'right'</code><span data-i18n="table:text.172"> 配置</span></td></tr>
          <tr><td><span data-i18n="table:text.173">固定行高的大数据</span></td><td><span class="tag-meta" style="background:var(--aw-warning-bg);color:var(--aw-warning)"><span data-i18n="table:text.174">antd 原生 virtual</span></span></td><td><span data-i18n="table:text.175">开启 </span><code>virtual + scroll.x + scroll.y</code><span data-i18n="table:text.176">，x/y 必须是数值；继续复用固定列、选择和展开能力</span></td></tr>
          <tr><td><span data-i18n="table:text.177">超大远程数据集</span></td><td><span class="tag-meta" style="background:var(--aw-danger-bg);color:var(--aw-danger)"><span data-i18n="table:text.178">服务端分页</span></span></td><td><span data-i18n="table:text.179">按性能测试决定分页大小和虚拟化；禁止一次性加载全部数据，跨页选择必须明示范围</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="alert warning" style="margin-top:12px"><div class="ico">!</div><div class="content"><strong><span data-i18n="table:text.180">稳定渲染策略：</span></strong><span data-i18n="table:text.181">AWTable 按能力声明与性能测量选择原生渲染或虚拟化，不按 </span><code>data.length</code><span data-i18n="table:text.182"> 自动跨档切换内核或整表 reload。页码、选择、展开与滚动恢复规则必须明确。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.183">Pagination · 三态</span></h3>
    <p class="lede" style="margin-bottom:16px"><span data-i18n="table:text.184">完整态用于桌面 ListPage，简洁态用于卡片 / Dialog 内表，窄容器态用于横向空间受限的容器。</span></p>

    <div class="page-tri-card">
      <div class="ptc-cap"><span data-i18n="table:text.185">完整态 · 桌面默认</span></div>
      <div class="ptc-body">
        <div class="pager" data-current-page="5" data-total-pages="625">
          <span class="total"><span data-i18n="table:text.186">共 12,486 条 · 第 5 / 625 页</span></span>
          <button class="page">‹</button>
          <button class="page">1</button>
          <span class="page" aria-hidden="true">…</span>
          <button class="page">3</button>
          <button class="page">4</button>
          <button class="page is-active">5</button>
          <button class="page">6</button>
          <button class="page">7</button>
          <span class="page" aria-hidden="true">…</span>
          <button class="page">625</button>
          <button class="page">›</button>
          <div class="select" style="margin-left:8px;min-width:96px"><span><span data-i18n="table:text.187">20 条/页 ▾</span></span></div>
          <span class="goto"><span data-i18n="table:text.188">跳至 </span><input class="input" style="width:48px;height:28px;padding:0 8px;font-size:12px" value="5" aria-label="跳转页码" data-i18n-aria-label="table:text.328" /><span data-i18n="table:text.189"> 页</span></span>
        </div>
      </div>
    </div>

    <div class="page-tri-card" style="margin-top:14px">
      <div class="ptc-cap"><span data-i18n="table:text.190">简洁态 · 卡片 / Dialog 内表</span></div>
      <div class="ptc-body">
        <div class="pager pager-simple" data-current-page="5" data-total-pages="625">
          <span class="total"><span data-i18n="table:text.041">共 12,486 项</span></span>
          <button class="page">‹</button>
          <span class="cur">5 / 625</span>
          <button class="page">›</button>
          <div class="select"><span data-i18n="table:text.042">20 条/页</span></div>
        </div>
      </div>
    </div>

    <div class="page-tri-card" style="margin-top:14px">
      <div class="ptc-cap"><span data-i18n="table:text.191">窄容器态</span></div>
      <div class="ptc-body" style="background:var(--aw-bg-page)">
        <div class="pager-mobile">
          <div class="pm-prev"><span data-i18n="table:text.192">‹ 上一页</span></div>
          <span data-i18n="table:pagination.current">第 5 / 625 页</span>
          <div class="pm-next"><span data-i18n="table:text.193">下一页 ›</span></div>
        </div>
        <div class="row" style="justify-content:space-between;margin-top:12px"><span data-i18n="table:text.041">共 12,486 项</span><div class="select"><span data-i18n="table:text.042">20 条/页</span></div></div>
      </div>
    </div>

    <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><strong><span data-i18n="table:text.194">中文化文案：</span></strong><span data-i18n="table:text.195">"共 12,486 条 · 第 5 / 625 页"。数字必须千分位（用 </span><code>Intl.NumberFormat(locale)</code><span data-i18n="table:text.196">），不要硬编码逗号。</span></div></div>
    <div class="alert warning" style="margin-top:8px"><div class="ico">!</div><div class="content"><span data-i18n="table:text.197">窄容器分页保留上一页、下一页、当前页 / 总页数和总条数；每页数量可换行。圆点只能作为辅助视觉，不得代替可读页码与键盘可访问的控件。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.198">反例</span></h3>
    <div class="alert error"><div class="ico">×</div><div class="content"><strong><span data-i18n="table:text.199">不要在虚拟列表中使用 colspan 跨行：</span></strong><span data-i18n="table:text.200">虚拟化只渲染可视区，跨行单元格在滚动时会撕裂。改用普通行 + 视觉分组（hr 分隔）。</span></div></div>
    <div class="alert error" style="margin-top:8px"><div class="ico">×</div><div class="content"><strong><span data-i18n="table:text.201">操作列按可见文案核算宽度：</span></strong><span data-i18n="table:text.202">无菜单且空间足够时普通操作 1–3 项直接显示；有菜单时最多保留 2 项＋更多，总入口不超过 3。4 项起的其余动作进入菜单。危险操作默认放入菜单底部分组，空间不足可提前收纳辅助动作。行内、菜单与工具栏业务按钮均用文字，不加业务图标；保留下拉、排序、选择和加载等必要标识。完整规则见 </span><a href="#/row-actions" style="color: var(--aw-primary-text)"><span data-i18n="table:text.203">RowActions 折叠态</span></a><span data-i18n="table:text.326">。</span></div></div>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.204">涉及变量</span></h3>
    <div class="surface" style="font-family:var(--aw-font-mono);font-size:12px;line-height:1.7;color:var(--aw-text-2)">
      <div><span data-i18n="table:text.205">--aw-fill-1 (表头底)、--aw-border-2 (列边)、--aw-border-3 (行间)、--aw-primary (active page)</span></div>
      <div style="margin-top:4px"><span data-i18n="table:text.206">三档密度：32 / 40 / 48px 为单行最小基准；实际高度由内容、行高、上下内边距与控件共同决定，不得固定高度裁切内容。</span></div>
      <div style="margin-top:4px"><span data-i18n="table:text.207">列冻结阴影：0 0 4px rgba(0,0,0,0.06) light · 0 0 4px rgba(0,0,0,0.32) dark</span></div>
    </div>
  </div>

  <div class="subsection" id="awtable-columns">
    <h3><span data-i18n="table:text.208">列定义规范 · Column Spec</span></h3>
    <p style="font-size:13px;color:var(--aw-text-2);max-width:720px;line-height:1.7;margin:0 0 12px"><span data-i18n="table:text.209">业务列必须有稳定 </span><code>key</code> / <code>dataIndex</code> / <code>render</code><span data-i18n="table:text.327">；</span><code>title?: ColumnTitle&lt;RecordType&gt;</code><span data-i18n="table:text.210"> 为可选底层配置；AWTable 业务列提供清晰标题和可访问名称。</span><code>width</code> / <code>fixed</code> / <code>align</code> / <code>priority</code><span data-i18n="table:text.211"> 是结构信息；AWTable 根据当前语言与容器计算最终宽度和固定状态，</span><code>sorter</code> / <code>filters</code><span data-i18n="table:text.212"> 是能力声明。下表数值为起始建议，不能当成跨语言固定宽度；选择 / 展开列也计入总宽度。</span></p>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="table:text.213">列类型</span></th><th style="width:14%">align</th><th style="width:14%">width</th><th style="width:18%">priority</th><th><span data-i18n="table:text.214">特殊规则</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="table:text.215">勾选框</span></td><td>center</td><td>40</td><td><span data-i18n="table:text.216">1（不隐藏）</span></td><td><code>fixed: 'left'</code><span data-i18n="table:text.217"> 仅在容器预算允许时跟随主标识列冻结</span></td></tr>
        <tr><td><span data-i18n="table:text.218">主标识（设备名）</span></td><td>left</td><td>auto</td><td><span data-i18n="table:text.219">1（不隐藏）</span></td><td><code>ellipsis: true</code> + Tooltip<span data-i18n="table:text.327">；</span><code>fixed: 'left'</code></td></tr>
        <tr><td>SN / IMEI / IP</td><td>left</td><td>160</td><td>2</td><td><span data-i18n="table:text.220">等宽字体；复制入口同时支持 hover、键盘聚焦和触屏</span></td></tr>
        <tr><td><span data-i18n="table:text.221">状态</span></td><td>left</td><td>96</td><td><span data-i18n="table:text.222">1（不隐藏）</span></td><td><span data-i18n="table:text.223">状态色 + 圆点 + 文字；按当前语言状态文案扩展宽度</span></td></tr>
        <tr><td><span data-i18n="table:text.224">普通数值 / 时间戳</span></td><td>left</td><td><span data-i18n="table:width.measured">按内容计算</span></td><td>3</td><td><code>tabular-nums</code><span data-i18n="table:text.225">；按当前语言完整数值 / 日期格式测宽；相对时间提供绝对时间全文访问</span></td></tr>
        <tr><td><span data-i18n="table:text.226">操作</span></td><td>left</td><td><span data-i18n="table:width.measured">按内容计算</span></td><td><span data-i18n="table:text.227">1（不隐藏）</span></td><td><code>fixed: 'right'</code><span data-i18n="table:text.228"> 仅在预算允许时启用；按外露动作组合测宽，含左右各 16px、间距、分隔线和“更多”；无菜单时普通 1–3 项直接显示，有菜单时最多 2 项 + 更多，总入口不超过 3</span></td></tr>
        <tr><td><span data-i18n="table:text.330">金额</span></td><td>right</td><td>120-160</td><td>2</td><td><code>colamount</code><span data-i18n="table:text.331">；货币符号、金额和小数位保持右对齐</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="alert info" style="margin-top:12px"><div class="ico">i</div><div class="content"><span data-i18n="table:width.finalFit">操作列宽度 = 外露按钮实际宽度 + 间距 / 分隔线 + 更多入口 + 32px 单元格留白。整表按已声明的动作组合预留稳定宽度，不逐行变化；当前语言测量，六语言分别验收。若“主操作 + 更多”仍放不下，增加最低宽度并解除固定以支持局部横滚，不能裁切、缩字或换行动作。可见列、选择列和展开列求和生成 scroll.x；语言、字体、密度及容器变化时统一重算与缓存。</span></div></div>

  <div class="subsection">
    <h3><span data-i18n="table:text.229">排序 · Sorting</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="table:text.230">维度</span></th><th style="width:30%"><span data-i18n="table:text.231">规则</span></th><th><span data-i18n="table:text.232">说明</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="table:text.233">触发位</span></td><td><span data-i18n="table:text.234">列标题点击</span></td><td><span data-i18n="table:text.235">排序入口可点击并可通过键盘操作，显示 aria-sort；不依赖图标 hover</span></td></tr>
        <tr><td><span data-i18n="table:text.236">循环顺序</span></td><td><span data-i18n="table:text.237">asc → desc → 无序</span></td><td><span data-i18n="table:text.238">三态循环；清除后回到明确的业务默认排序</span></td></tr>
        <tr><td><span data-i18n="table:text.239">多列排序</span></td><td><kbd>Shift</kbd><span data-i18n="table:text.240"> 可作为已声明的快捷键</span></td><td><span data-i18n="table:text.241">仅在数据源支持时开启；声明列数上限、优先级和无需快捷键的入口，视觉序号与可访问名称一致</span></td></tr>
        <tr><td><span data-i18n="table:text.242">排序场景</span></td><td><span data-i18n="table:text.243">远程与完整本地集合分别声明</span></td><td><span data-i18n="table:text.246">远程分页必须由服务端排序；完整加载且规模合适的本地集合可本地排序。禁止只排序当前页并伪装成全量排序</span></td></tr>
        <tr><td><span data-i18n="table:text.247">持久化</span></td><td>URL query string</td><td><code>?sort=lastHeartbeat:desc,sn:asc</code><span data-i18n="table:text.248"> —— 仅保存可公开的字段与合法值；刷新 / 返回恢复，敏感筛选不写 URL</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.249">AWTableFilters · 统一筛选区</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="table:text.250">类型</span></th><th style="width:30%"><span data-i18n="table:text.251">触发方式</span></th><th><span data-i18n="table:text.252">布局与行为</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="table:text.253">列内筛选</span></td><td><span data-i18n="table:text.254">列标题筛选入口</span></td><td><span data-i18n="table:text.255">仅作为已声明的可选入口，与 AWTableFilters 共用已应用查询；不得为同一条件维护另一份状态或重复提交。选项较多时提供搜索或远程加载。</span></td></tr>
        <tr><td><span data-i18n="table:text.256">筛选面板</span></td><td><span data-i18n="table:text.257">主要字段 → 高级字段 → 分隔线 → 左计数 / 右展开、重置、搜索</span></td><td><span data-i18n="table:text.258">按字段声明的主要 / 高级分组与顺序布局，不固定外露 4 项。依据真实容器宽度换列，关键词与日期范围优先保留完整宽度；不显示独立标题行，保留区域可访问名称；底栏左侧已启用计数，右侧依次为更多筛选、重置、搜索。0 项也显示，窄容器操作组可换行右对齐，计数保持左对齐且不挤压按钮。</span></td></tr>
        <tr><td><span data-i18n="table:text.259">高级筛选</span></td><td><span data-i18n="table:text.260">更多筛选 / 收起筛选</span></td><td><span data-i18n="table:text.261">存在高级字段时才显示入口，并提供 aria-expanded 与 aria-controls。展开 / 收起不查询、不清值；隐藏字段的草稿和已应用条件仍保留，参与后续提交、计数与恢复。</span></td></tr>
        <tr><td><span data-i18n="table:text.262">计数与可选摘要</span></td><td><span data-i18n="table:text.263">已应用条件计数；摘要标签可选</span></td><td><span data-i18n="table:text.264">计数在底栏左侧独立显示，0 项也保留；右侧的更多筛选、重置、搜索成组排列。按字段计算，完整日期范围算 1 项，空白文本不计，0 等有效值不得漏计；编辑草稿不改变计数。若提供可关闭标签，须明确移除后提交一次或仅修改草稿，不混用两种模式。</span></td></tr>
        <tr><td><span data-i18n="table:text.247">持久化</span></td><td>URL / session</td><td><span data-i18n="table:text.265">草稿、已应用条件与展开态分别恢复；仅白名单公开字段可写 URL，其余使用适当作用域的会话状态。</span></td></tr>
        <tr><td><span data-i18n="table:text.266">提交、重置与组合</span></td><td><span data-i18n="table:text.267">显式搜索为默认，领域查询契约决定语义</span></td><td><span data-i18n="table:text.268">搜索 / 回车校验完整草稿后只发起一次请求；条件相同保留当前页重新获取，条件变化回第 1 页，请求处理中防止重复提交。重置同步恢复草稿与已应用默认值，机构范围、排序和每页数量按明确策略处理。AND / OR、日期时区及起止边界由领域适配器决定。</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.269">分页 · Pagination</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:24%"><span data-i18n="table:text.270">规则</span></th><th><span data-i18n="table:text.271">具体</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="table:text.272">默认条数</span></td><td><span data-i18n="table:text.273">默认 20 / 页；20 / 50 / 100 / 200 为统一选项。特殊场景须显式声明选项与理由，不按固定行高推导分页大小</span></td></tr>
        <tr><td><span data-i18n="table:text.274">可选条数</span></td><td>20 / 50 / 100 / 200</td></tr>
        <tr><td><span data-i18n="table:text.275">跳页</span></td><td><span data-i18n="table:text.276">≥ 5 页时显示"跳到第 __ 页"输入框</span></td></tr>
        <tr><td><span data-i18n="table:text.277">边界态</span></td><td><span data-i18n="table:text.278">仅 1 页可隐藏页码导航，但保留总数和每页数量；总条数 0 时保留上下文并区分无数据、筛选无结果与请求失败</span></td></tr>
        <tr><td><span data-i18n="table:text.279">大数据集</span></td><td><span data-i18n="table:text.280">总量稳定且支持 count：服务端页码分页，可跳页；高频变更或深分页成本高：游标分页，不提供随机跳页</span></td></tr>
        <tr><td><span data-i18n="table:text.281">选中态跨页</span></td><td><span data-i18n="table:text.282">明示当前页、同一查询跨页或指定业务上下文；全量匹配选择必须有后端支持。切换租户 / 机构 / 查询时按声明失效；保留例外需明确提示与执行前复核</span></td></tr>
        <tr><td><span data-i18n="table:text.283">持久化</span></td><td>URL <code>?page=3&amp;pageSize=50</code></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.284">行交互 · Row Interaction</span></h3>
    <table class="map-table">
      <thead><tr><th style="width:18%"><span data-i18n="table:text.285">交互</span></th><th style="width:24%"><span data-i18n="table:text.286">触发</span></th><th><span data-i18n="table:text.287">行为</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="table:text.288">hover 高亮</span></td><td><span data-i18n="table:text.289">鼠标悬停</span></td><td><span data-i18n="table:text.290">背景 </span><code>--aw-fill-1</code><span data-i18n="table:text.291">；不触发任何动作</span></td></tr>
        <tr><td><span data-i18n="table:text.292">行点击</span></td><td><span data-i18n="table:text.293">点击非操作列</span></td><td><b><span data-i18n="table:text.294">禁用</span></b><span data-i18n="table:text.295"> "点行进详情" —— 用专门的"详情"按钮，避免误点</span></td></tr>
        <tr><td><span data-i18n="table:text.296">双击</span></td><td>—</td><td><span data-i18n="table:text.297">不绑定（误触风险）</span></td></tr>
        <tr><td><span data-i18n="table:text.298">勾选</span></td><td><span data-i18n="table:text.299">勾选框点击 / Space</span></td><td><span data-i18n="table:text.300">触发批量条；跨页选中明示 "+ 跨页 28 项"</span></td></tr>
        <tr><td><span data-i18n="table:text.301">展开</span></td><td><span data-i18n="table:text.302">可聚焦的展开按钮</span></td><td><span data-i18n="table:text.303">嵌套子表 / 详细字段；按场景和性能声明同时展开上限，不统一限制为 3 行；保持键盘与焦点访问</span></td></tr>
        <tr><td><span data-i18n="table:text.304">右键</span></td><td>—</td><td><span data-i18n="table:text.305">不绑定（用浏览器原生菜单）</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <h3><span data-i18n="table:text.306">业务列表模式 · 表格与卡片双视图</span></h3>
    <p class="lede" style="margin-bottom:12px"><span data-i18n="table:text.307">应用、广告、设备、设备分组、推送任务复用同一套列表骨架：筛选区先行、批量条只在勾选后出现、表格/卡片视图保留同一操作语义。</span></p>
    <table class="blueprint-table">
      <thead><tr><th><span data-i18n="table:text.308">模式</span></th><th><span data-i18n="table:text.309">出现模块</span></th><th><span data-i18n="table:text.310">规则</span></th></tr></thead>
      <tbody>
        <tr><td><span data-i18n="table:text.311">筛选区</span></td><td><span data-i18n="table:text.312">应用管理 / OTA / 设备管理 / 推送任务</span></td><td><span data-i18n="table:text.313">复用 AWTableFilters：主要 / 高级分组、已应用计数、独立底栏和容器适配。关键词通常靠前，实际顺序由业务声明；收起不丢值。搜索同条件保留当前页重新获取，条件变化回第 1 页；每次有效搜索仅一次请求，处理中防重复。业务按钮使用纯文字。</span></td></tr>
        <tr><td><span data-i18n="table:text.314">表格视图</span></td><td><span data-i18n="table:text.315">应用列表 / 设备列表 / 日志 / 字典</span></td><td><span data-i18n="table:text.316">状态列靠近主对象；按容器预算决定操作列是否固定右侧。复用 AWTable 行操作规则：无菜单时普通 1–3 项直接显示；有菜单时最多 2 项 + 更多，总入口不超过 3；危险项与窄容器例外明确，业务操作不加图标。</span></td></tr>
        <tr><td><span data-i18n="table:text.317">卡片视图</span></td><td><span data-i18n="table:text.318">应用管理 / 广告管理 / 设备管理 / 设备分组</span></td><td><span data-i18n="table:text.319">仅在业务需要时提供卡片视图；与 AWTable 共用查询、选择和动作定义，不因窄屏自动切换卡片。卡片保留主状态、关键字段和选择入口。</span></td></tr>
        <tr><td><span data-i18n="table:text.320">批量条</span></td><td><span data-i18n="table:text.321">分配设备 / 推送设备 / 导出日志</span></td><td><span data-i18n="table:text.322">只在选中后出现，显示范围、已选数量与清空入口；常用动作按可用空间收纳，危险项默认进更多。部分失败保留失败项和重试，不一律清空选择。</span></td></tr>
        <tr><td><span data-i18n="table:text.323">状态列</span></td><td><span data-i18n="table:text.324">应用审核 / OTA 推送 / 设备在线 / 任务结果</span></td><td><span data-i18n="table:text.325">状态文案与操作可用性绑定；不能只改变颜色而不改变可操作项。</span></td></tr>
      </tbody>
    </table>
  </div>
  <div class="subsection"><h3><span data-i18n="common:component.usedBy">页面蓝图使用场景</span></h3><div class="blueprint-notes"><span><a href="#/list-page">ListPage</a></span><span><a href="#/device-center-page">DeviceCenterPage</a></span><span><a href="#/market-page">MarketPage</a></span><span><a href="#/push-page">PushPage</a></span></div></div>
</div></details>
</section>
</div>
`;
