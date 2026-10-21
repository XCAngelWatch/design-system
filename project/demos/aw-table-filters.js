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
  function mount(form, options) {
    var fields = options.fields;
    var expanded = options.expanded === true, busy = false, externalBusy = false, alive = true;
    var applied = normalize(fields, options.applied || options.defaults || {});
    var toggle = form.querySelector('[data-aw-filter-toggle]');
    var advanced = form.querySelector('[data-aw-filter-advanced]');
    var count = form.querySelector('[data-aw-filter-count]');
    var summary = form.querySelector('[data-aw-filter-errors]');
    function controls(field) { return Array.from(form.querySelectorAll('[data-aw-filter="' + field.id + '"]')); }
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
      destroy: function () { alive = false; form.removeEventListener('submit', submit); form.removeEventListener('click', click); form.removeEventListener('input', input); form.removeEventListener('keydown', keydown); }
    };
  }
  return { normalize: normalize, countActive: countActive, validateRanges: validateRanges, mount: mount };
});
