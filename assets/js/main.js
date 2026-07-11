/* ============================================================
   main.js — motion & interaction layer
   - scroll reveal (.reveal)
   - "redaction reveal" signature animation (.redact)
   - animated vote scoreboard bars (.bar-fill)
   - active nav link highlighting
   ============================================================ */

(function () {
  function markActiveNav() {
    var here = (location.pathname.split('/').pop() || 'index.html');
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      var target = a.getAttribute('href');
      if (target === here || (here === '' && target === 'index.html')) {
        a.classList.add('active');
      }
    });
  }

  function setupObservers() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
      document.querySelectorAll('.redact').forEach(function (el) { el.classList.add('revealed'); });
      document.querySelectorAll('.bar-fill').forEach(function (el) {
        el.style.width = el.getAttribute('data-value') + '%';
      });
      return;
    }

    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });

    var redactObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = parseInt(el.getAttribute('data-delay') || '0', 10);
          setTimeout(function () { el.classList.add('revealed'); }, delay);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('.redact').forEach(function (el, i) {
      el.setAttribute('data-delay', i * 130);
      redactObserver.observe(el);
    });

    var barObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          requestAnimationFrame(function () {
            el.style.width = el.getAttribute('data-value') + '%';
          });
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.bar-fill').forEach(function (el) { barObserver.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    markActiveNav();
    setupObservers();
  });

  window.CC_reobserve = function () {
    // re-run for any newly injected .reveal/.bar-fill nodes not yet handled
    document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { el.classList.add('in'); });
  };
})();
