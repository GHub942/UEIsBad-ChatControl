/* ============================================================
   main.js — motion & interaction layer
   - scroll reveal (.reveal)
   - "redaction reveal" signature animation (.redact)
   - animated vote scoreboard bars (.bar-fill)
   - active nav link highlighting
   ============================================================ */

(function () {
  function markActiveNav() {
    var here = (location.pathname.split('/').pop() || 'home.html');
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      var target = (a.getAttribute('href') || '').split('?')[0].split('#')[0];
      if (target === here || (here === '' && target === 'home.html')) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
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
      document.querySelectorAll('.range-bar-fill').forEach(function (el) {
        el.style.width = el.getAttribute('data-max') + '%';
      });
      document.querySelectorAll('.range-bar-marker').forEach(function (el) {
        el.style.left = el.getAttribute('data-pos') + '%';
        el.classList.add('is-set');
      });
      document.querySelectorAll('.range-bar-tag-end').forEach(function (el) {
        el.style.left = el.getAttribute('data-pos') + '%';
        el.classList.add('is-set');
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

    var rangeFillObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var max = el.getAttribute('data-max');
          requestAnimationFrame(function () { el.style.width = max + '%'; });
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.range-bar-fill').forEach(function (el) { rangeFillObserver.observe(el); });

    var rangeMarkObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var pos = el.getAttribute('data-pos');
          requestAnimationFrame(function () {
            el.style.left = pos + '%';
            el.classList.add('is-set');
          });
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.range-bar-marker, .range-bar-tag-end').forEach(function (el) { rangeMarkObserver.observe(el); });
  }

  function setupNavToggle() {
    var btn = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (!btn || !links) return;
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    markActiveNav();
    setupObservers();
    setupNavToggle();
  });

  window.CC_reobserve = function () {
    // re-run for any newly injected .reveal/.bar-fill nodes not yet handled
    document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { el.classList.add('in'); });
  };
})();
