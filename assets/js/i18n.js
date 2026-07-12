/* ============================================================
   i18n.js — tiny translation engine (no build step, GitHub Pages safe)
   Language dictionaries are plain JS files (assets/js/lang/*.js) that
   each do:  window.I18N = window.I18N || {}; window.I18N.fr = {...};
   Loading them as <script> tags avoids fetch()/CORS problems when a
   user opens the site directly from disk instead of a real server.
   ============================================================ */

(function () {
  var SUPPORTED = ['fr', 'en', 'de', 'it', 'es'];
  var DEFAULT_LANG = 'fr';

  function getPath(obj, path) {
    return path.split('.').reduce(function (acc, k) {
      return acc && acc[k] !== undefined ? acc[k] : undefined;
    }, obj);
  }

  function getUrlLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var l = params.get('lang');
      return (l && SUPPORTED.indexOf(l) !== -1) ? l : null;
    } catch (e) { return null; }
  }

  function detectLang() {
    var urlLang = getUrlLang();
    if (urlLang) return urlLang;
    var stored = null;
    try { stored = localStorage.getItem('cc-lang'); } catch (e) {}
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || navigator.userLanguage || 'fr').substring(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : DEFAULT_LANG;
  }

  function isInternalLink(href) {
    if (!href) return false;
    if (href.indexOf('://') !== -1) return false;
    if (href.indexOf('mailto:') === 0) return false;
    if (href.indexOf('tel:') === 0) return false;
    if (href.charAt(0) === '#') return false;
    return true;
  }

  function syncInternalLinks(lang) {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!isInternalLink(href)) return;
      var hashIdx = href.indexOf('#');
      var hash = hashIdx !== -1 ? href.slice(hashIdx) : '';
      var base = hashIdx !== -1 ? href.slice(0, hashIdx) : href;
      var qIdx = base.indexOf('?');
      var path = qIdx !== -1 ? base.slice(0, qIdx) : base;
      a.setAttribute('href', path + '?lang=' + lang + hash);
    });
    // Also keep the browser URL itself in sync, without adding history entries
    try {
      var url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState(null, '', url.toString());
    } catch (e) {}
  }

  function applyLang(lang) {
    var dict = (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N[DEFAULT_LANG]) || {};

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = getPath(dict, el.getAttribute('data-i18n'));
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = getPath(dict, el.getAttribute('data-i18n-html'));
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      try {
        var map = JSON.parse(el.getAttribute('data-i18n-attr'));
        Object.keys(map).forEach(function (attr) {
          var val = getPath(dict, map[attr]);
          if (val !== undefined) el.setAttribute(attr, val);
        });
      } catch (e) {}
    });

    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem('cc-lang', lang); } catch (e) {}
    syncInternalLinks(lang);
    window.dispatchEvent(new CustomEvent('cc:langchange', { detail: { lang: lang } }));
  }

  function initLangSwitcher() {
    var lang = detectLang();
    applyLang(lang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  }

  window.CC_I18N = { applyLang: applyLang, detectLang: detectLang, SUPPORTED: SUPPORTED };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangSwitcher);
  } else {
    initLangSwitcher();
  }
})();
