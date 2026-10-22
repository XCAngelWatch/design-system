/* Static filter interaction reference. Date adapters use ISO calendar dates;
 * validate is synchronous here, not the full React consumer validation API. */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.AWTableFiltersDemo = api;
})(typeof window === 'undefined' ? null : window, function () {
  'use strict';
  function validDate(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value) || Number(value.slice(0, 4)) === 0) return false;
    var date = new Date(value + 'T00:00:00Z');
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
  }
  function normalize(fields, values) {
    var result = {};
    fields.forEach(function (field) {
      var value = values[field.id];
      result[field.id] = field.normalize ? field.normalize(value)
        : field.kind === 'range' ? (Array.isArray(value) ? value.slice(0, 2) : ['', ''])
        : typeof value === 'string' ? value.trim() : value;
    });
    return result;
  }
  function isActive(field, value) {
    if (field.isActive) return field.isActive(value);
    if (field.kind === 'range') return Array.isArray(value) && value.length === 2 && value.every(validDate) && value[0] <= value[1];
    return Array.isArray(value) ? value.length > 0 : value !== '' && value != null;
  }
  function countActive(fields, values, advancedOnly) {
    return fields.filter(function (field) { return (!advancedOnly || field.advanced) && isActive(field, values[field.id]); }).length;
  }
  function validateRanges(fields, values) {
    var errors = {};
    fields.filter(function (field) { return field.kind === 'range'; }).forEach(function (field) {
      var value = values[field.id] || [];
      var hasStart = value[0] !== '' && value[0] != null;
      var hasEnd = value[1] !== '' && value[1] != null;
      if (hasStart !== hasEnd) errors[field.id] = 'incomplete';
      else if (hasStart && (!validDate(value[0]) || !validDate(value[1]))) errors[field.id] = 'invalid';
      else if (hasStart && value[0] > value[1]) errors[field.id] = 'order';
    });
    return errors;
  }
  // Keep both groups on one bounded, equal-width grid. Legacy flex values do not
  // change column proportions; only an explicit span makes a field wider.
  function planLayout(fields, width) {
    var gap = 16;
    var requested = Math.max(1, Math.max.apply(null, [false, true].map(function (advanced) {
      return fields.filter(function (field) { return Boolean(field.advanced) === advanced; }).reduce(function (sum, field) {
        return sum + (field.layout && field.layout.span === 'full' ? 0 : field.layout && field.layout.span || 1);
      }, 0);
    })));
    var maximum = width <= 575 ? 1 : Math.min(4, requested);
    for (var columns = maximum; columns >= 1; columns -= 1) {
      var spans = {}, minimum = 224;
      fields.forEach(function (field) {
        var layout = field.layout || {};
        var span = layout.span === 'full' ? columns : Math.min(columns, layout.span || 1);
        spans[field.id] = layout.span === 'full' ? 'full' : span;
        if (Number.isFinite(layout.minWidth) && layout.minWidth > 0) minimum = Math.max(minimum, (layout.minWidth - gap * (span - 1)) / span);
      });
      if (columns === 1 || columns * minimum + gap * (columns - 1) <= width) {
        var trackWidth = Math.max(0, Math.min(Math.max(320, minimum), (width - gap * (columns - 1)) / columns));
        return { columns: columns, spans: spans, template: width <= 575 ? 'minmax(0, 1fr)' : 'repeat(' + columns + ', minmax(0, ' + trackWidth + 'px))' };
      }
    }
  }
  function mount(form, options) {
    var fields = options.fields;
    var expanded = options.expanded === true, busy = false, externalBusy = false, alive = true;
    var applied = normalize(fields, options.applied || options.defaults || {});
    var toggle = form.querySelector('[data-aw-filter-toggle]');
    var advanced = form.querySelector('[data-aw-filter-advanced]');
    var count = form.querySelector('[data-aw-filter-count]');
    var summary = form.querySelector('[data-aw-filter-errors]');
    function controls(field) { return Array.from(form.querySelectorAll('[data-aw-filter="' + field.id + '"]')); }
    var primary = form.querySelector('.aw-table-filter-primary');
    var layoutFields = fields.map(function (field) {
      var cell = controls(field)[0];
      while (cell.parentElement && cell.parentElement !== primary && cell.parentElement !== advanced) cell = cell.parentElement;
      var layout = Object.assign({}, field.layout);
      if (layout.span == null && cell.classList.contains('aw-table-filter-span-full')) layout.span = 'full';
      else if (layout.span == null && cell.classList.contains('aw-table-filter-span-2')) layout.span = 2;
      return { id: field.id, advanced: Boolean(field.advanced), layout: layout, cell: cell };
    });
    function updateLayout() {
      if (!alive) return;
      var computed = window.getComputedStyle(form);
      var width = form.clientWidth - parseFloat(computed.paddingLeft) - parseFloat(computed.paddingRight);
      var plan = planLayout(layoutFields, Math.max(0, width));
      form.style.setProperty('--aw-filter-tracks', plan.template);
      layoutFields.forEach(function (field) {
        field.cell.style.gridColumn = plan.spans[field.id] === 'full' ? '1 / -1' : 'span ' + plan.spans[field.id];
      });
    }
    var resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(updateLayout);
    if (resizeObserver) resizeObserver.observe(form);
    else window.addEventListener('resize', updateLayout);
    updateLayout();
    function read() {
      var values = {};
      fields.forEach(function (field) {
        var inputs = controls(field);
        values[field.id] = field.kind === 'range' ? inputs.map(function (input) { return input.value; }) : inputs[0].value;
      });
      return normalize(fields, values);
    }
    function write(values) {
      fields.forEach(function (field) {
        controls(field).forEach(function (input, index) {
          var value = field.kind === 'range' ? (values[field.id] || [])[index] : values[field.id];
          input.value = value == null ? '' : String(value);
        });
      });
    }
    function clearErrors() {
      summary.hidden = true; summary.textContent = '';
      fields.forEach(function (field) { controls(field).forEach(function (input) { input.removeAttribute('aria-invalid'); input.removeAttribute('aria-describedby'); }); });
    }
    function paint() {
      var advancedCount = countActive(fields, applied, true);
      count.textContent = options.text('enabledCount', { count: countActive(fields, applied) });
      form.dataset.appliedCount = String(countActive(fields, applied));
      toggle.hidden = !fields.some(function (field) { return field.advanced; });
      advanced.hidden = !expanded;
      toggle.setAttribute('aria-expanded', String(expanded));
      toggle.querySelector('span').textContent = options.text(expanded ? 'collapseFilters' : 'expandFilters') + (advancedCount ? ' (' + advancedCount + ')' : '');
      form.querySelector('[type="submit"]').disabled = busy || externalBusy;
      form.querySelector('[data-aw-filter-reset]').disabled = busy || externalBusy;
      form.setAttribute('aria-busy', String(busy || externalBusy));
    }
    function setExpanded(value) {
      if (!value && advanced.contains(document.activeElement)) toggle.focus();
      expanded = value; paint();
      if (options.onExpandedChange) options.onExpandedChange(value);
    }
    async function submit(event) {
      event.preventDefault(); event.stopPropagation();
      if (busy || externalBusy) return;
      clearErrors();
      var draft = read();
      var errors = options.validate ? options.validate(draft) : validateRanges(fields, draft);
      fields.forEach(function (field) {
        if (controls(field).some(function (input) { return input.validity && input.validity.badInput; })) errors[field.id] = 'invalid';
      });
      var invalid = fields.find(function (field) { return errors[field.id]; });
      if (invalid) {
        if (invalid.advanced) setExpanded(true);
        summary.textContent = options.text(errors[invalid.id] === 'order' ? 'dateOrderError' : errors[invalid.id] === 'invalid' ? 'dateInvalidError' : 'dateIncompleteError');
        summary.hidden = false;
        controls(invalid).forEach(function (input) { input.setAttribute('aria-invalid', 'true'); input.setAttribute('aria-describedby', summary.id); });
        controls(invalid)[0].focus(); return;
      }
      var submitButton = form.querySelector('[type="submit"]');
      var returnFocus = document.activeElement === submitButton;
      busy = true; paint();
      try { await options.onApply(draft); }
      finally { if (alive) { busy = false; paint(); if (returnFocus && document.activeElement === document.body) submitButton.focus(); } }
    }
    function click(event) {
      if (event.target.closest('[data-aw-filter-toggle]')) { event.preventDefault(); setExpanded(!expanded); }
      if (event.target.closest('[data-aw-filter-reset]') && !busy && !externalBusy) {
        event.preventDefault(); clearErrors(); write(options.defaults || {}); setExpanded(false);
        options.onReset(normalize(fields, options.defaults || {}));
      }
    }
    function input() { clearErrors(); if (options.onDraftChange) options.onDraftChange(read()); }
    function keydown(event) {
      if (event.key === 'Enter' && (event.isComposing || event.keyCode === 229)) event.preventDefault();
    }
    form.addEventListener('submit', submit);
    form.addEventListener('click', click);
    form.addEventListener('input', input);
    form.addEventListener('keydown', keydown);
    write(options.draft || options.applied || options.defaults || {}); paint();
    return {
      readDraft: read,
      setApplied: function (value) { applied = normalize(fields, value); paint(); },
      setSubmitting: function (value) { externalBusy = Boolean(value); paint(); },
      destroy: function () { alive = false; if (resizeObserver) resizeObserver.disconnect(); else window.removeEventListener('resize', updateLayout); form.removeEventListener('submit', submit); form.removeEventListener('click', click); form.removeEventListener('input', input); form.removeEventListener('keydown', keydown); }
    };
  }
  var exampleDisposers = [];
  function mountExamples(root) {
    exampleDisposers.forEach(function (dispose) { dispose(); });
    exampleDisposers = [];
    root.querySelectorAll('[data-aw-filter-example]').forEach(function (example) {
      var form = example.querySelector('[data-aw-example-form]');
      var result = example.querySelector('[data-aw-example-result]');
      var fields = [], defaults = {};
      form.querySelectorAll('[data-aw-filter]').forEach(function (control) {
        var id = control.dataset.awFilter;
        if (fields.some(function (field) { return field.id === id; })) return;
        var range = control.type === 'date';
        fields.push({ id: id, kind: range ? 'range' : 'text', advanced: !!control.closest('[data-aw-filter-advanced]') });
        defaults[id] = range ? ['', ''] : '';
      });
      function text(key, values) {
        var label = example.querySelector('[data-aw-example-label="' + key + '"]');
        return (label ? label.textContent : key).replace(/\{(\w+)\}/g, function (_, name) { return values && values[name] != null ? values[name] : ''; });
      }
      var controller = mount(form, {
        fields: fields, defaults: defaults, text: text,
        onApply: function (values) {
          controller.setApplied(values);
          result.textContent = text('applied', { count: countActive(fields, values) });
        },
        onReset: function (values) {
          controller.setApplied(values);
          result.textContent = text('reset');
        }
      });
      function contextChanged(event) {
        if (event.target.matches('[data-aw-example-context]')) result.textContent = text('scopeChanged');
      }
      example.addEventListener('change', contextChanged);
      exampleDisposers.push(function () { controller.destroy(); example.removeEventListener('change', contextChanged); });
    });
  }
  return { normalize: normalize, countActive: countActive, validateRanges: validateRanges, planLayout: planLayout, mount: mount, mountExamples: mountExamples };
});
