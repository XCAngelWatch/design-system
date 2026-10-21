/* Documentation controls only; the examples describe a target React API. */
(function (global) {
  'use strict';
  var cleanup;

  function mount(slot) {
    if (cleanup) cleanup();
    var host = slot.querySelector('#table');
    if (!host) return;
    var alive = true;
    var pendingCopies = new WeakSet();

    function describeScenario() {
      var select = host.querySelector('[data-aw-scenario]');
      var help = host.querySelector('[data-aw-scenario-help]');
      if (!select || !help) return;
      var source = Array.from(host.querySelectorAll('[data-aw-scenario-help-label]')).find(function (element) {
        return element.getAttribute('data-aw-scenario-help-label') === select.value;
      });
      help.textContent = source ? source.textContent : '';
    }

    function label(key) {
      var element = host.querySelector('[data-aw-doc-label="' + key + '"]');
      return element ? element.textContent : '';
    }

    function jump(link) {
      var id = link.getAttribute('href').slice(1);
      var target = document.getElementById(id);
      if (!target || !host.contains(target)) return;
      var ancestor = target;
      while (ancestor && ancestor !== host) {
        if (ancestor.tagName === 'DETAILS') ancestor.open = true;
        ancestor = ancestor.parentElement;
      }
      var focusTarget = target.tagName === 'DETAILS' ? target.querySelector('summary') : target;
      if (focusTarget) {
        if (!focusTarget.matches('a, button, input, select, summary, [tabindex]')) focusTarget.setAttribute('tabindex', '-1');
        focusTarget.focus({ preventScroll: true });
      }
      target.scrollIntoView({ block: 'start', behavior: 'instant' });
    }

    async function copy(button) {
      if (pendingCopies.has(button)) return;
      var id = button.getAttribute('data-aw-copy');
      var code = document.getElementById(id);
      if (!code || !host.contains(code)) return;
      var feedback = Array.from(host.querySelectorAll('[data-aw-copy-feedback]')).find(function (element) {
        return element.getAttribute('data-aw-copy-feedback') === id;
      });
      pendingCopies.add(button);
      button.setAttribute('aria-busy', 'true');
      if (feedback) feedback.textContent = '';
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(code.textContent);
        if (alive && feedback) feedback.textContent = label('copied');
      } catch (_) {
        if (!alive) return;
        // Do not steal focus if the user moved on while permission was pending.
        if (document.activeElement === button) {
          var range = document.createRange();
          range.selectNodeContents(code);
          var selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
        }
        if (feedback) feedback.textContent = label('copyFailed');
      } finally {
        pendingCopies.delete(button);
        if (alive) button.removeAttribute('aria-busy');
      }
    }

    function onClick(event) {
      var link = event.target.closest('[data-aw-doc-link]');
      if (link && host.contains(link) && /^#[^/]/.test(link.getAttribute('href') || '')) {
        event.preventDefault();
        event.stopPropagation();
        jump(link);
        return;
      }
      var button = event.target.closest('[data-aw-copy]');
      if (button && host.contains(button)) {
        event.preventDefault();
        event.stopPropagation();
        copy(button);
      }
    }
    host.addEventListener('click', onClick, true);
    function onChange(event) {
      if (event.target.matches('[data-aw-scenario]')) describeScenario();
    }
    host.addEventListener('change', onChange);
    describeScenario();
    cleanup = function () {
      alive = false;
      host.removeEventListener('click', onClick, true);
      host.removeEventListener('change', onChange);
      cleanup = null;
    };
  }
  global.AWTableGuide = { mount: mount };
})(window);
