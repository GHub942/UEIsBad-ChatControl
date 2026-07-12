/* ============================================================
   render.js — builds data-driven blocks (arrays/loops) that the
   simple text-substitution i18n engine can't handle on its own.
   Runs once on load and again whenever the language changes.
   ============================================================ */

(function () {
  function t(lang, path) {
    var dict = (window.I18N && window.I18N[lang]) || {};
    return path.split('.').reduce(function (acc, k) { return acc && acc[k] !== undefined ? acc[k] : undefined; }, dict);
  }

  function esc(s) { return (s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---------- Fact cards ---------- */
  function renderFacts(lang) {
    var host = document.querySelector('[data-render="facts"]');
    if (!host) return;
    var f = t(lang, 'facts');
    if (!f) return;
    var items = [[f.f1t, f.f1b], [f.f2t, f.f2b], [f.f3t, f.f3b], [f.f4t, f.f4b], [f.f5t, f.f5b], [f.f6t, f.f6b], [f.f7t, f.f7b], [f.f8t, f.f8b]];
    host.innerHTML = items.map(function (it, i) {
      return '<div class="fact-card reveal"><span class="fact-icon">' + (i + 1).toString().padStart(2, '0') + '</span><h4>' + esc(it[0]) + '</h4><p>' + esc(it[1]) + '</p></div>';
    }).join('');
  }

  /* ---------- Timeline table ---------- */
  function renderTimeline(lang) {
    var host = document.querySelector('[data-render="timeline"]');
    if (!host) return;
    var tl = t(lang, 'status.timeline');
    if (!tl) return;
    var rows = tl.rows.map(function (r) {
      return '<tr><td class="date">' + esc(r.date) + '</td><td><strong>' + esc(r.title) + '</strong></td><td>' + esc(r.detail) + '</td><td><span class="pill ' + r.cls + '">' + esc(r.pill) + '</span></td></tr>';
    }).join('');
    host.innerHTML =
      '<table class="timeline"><thead><tr><th>' + esc(tl.th1) + '</th><th>' + esc(tl.th2) + '</th><th>' + esc(tl.th3) + '</th><th>' + esc(tl.th4) + '</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }

  /* ---------- Europe map: real geographic map (eumap.js) with grid fallback ---------- */
  function renderMap(lang) {
    if (window.CC_renderEuroMap) { window.CC_renderEuroMap(lang); return; }
    renderMapGridFallback(lang);
  }

  function renderMapGridFallback(lang) {
    var host = document.querySelector('[data-render="hexmap"]');
    var legendHost = document.querySelector('[data-render="map-legend"]');
    if (!host || !window.CC_COUNTRIES) return;
    var countryNames = t(lang, 'countries') || {};
    var m = t(lang, 'map') || {};

    var tiles = window.CC_COUNTRIES.map(function (c) {
      var name = countryNames[c.code] || c.code;
      return '<div class="hex-tile" data-status="' + c.status + '" data-code="' + c.code + '" style="grid-column:' + c.col + ';grid-row:' + c.row + '">' +
        c.code + '<span class="hex-tip">' + esc(name) + '</span></div>';
    }).join('');
    host.innerHTML = '<div class="hexmap-grid-wrap"><div class="hexmap-grid">' + tiles + '</div></div>';

    if (legendHost) {
      var groups = { against: [], for: [], undecided: [] };
      window.CC_COUNTRIES.forEach(function (c) { groups[c.status].push(countryNames[c.code] || c.code); });
      function group(status, label) {
        return '<div class="map-legend-group" data-status="' + status + '"><div class="map-legend-head"><span class="map-legend-dot ' + status + '"></span>' + esc(label) + '</div><div class="map-legend-list">' + groups[status].sort().join(' · ') + '</div></div>';
      }
      legendHost.innerHTML = group('against', m.legendAgainst) + group('for', m.legendFor) + group('undecided', m.legendUndecided);

      var activeFilter = null;
      legendHost.querySelectorAll('.map-legend-group').forEach(function (g) {
        g.addEventListener('click', function () {
          var status = g.getAttribute('data-status');
          activeFilter = (activeFilter === status) ? null : status;
          legendHost.querySelectorAll('.map-legend-group').forEach(function (x) {
            x.classList.toggle('active', activeFilter && x.getAttribute('data-status') === activeFilter);
          });
          host.querySelectorAll('.hex-tile').forEach(function (tile) {
            var match = !activeFilter || tile.getAttribute('data-status') === activeFilter;
            tile.classList.toggle('dimmed', !match);
          });
        });
      });
    }
  }

  /* ---------- Contact / email tool ---------- */
  function renderContact(lang) {
    var host = document.querySelector('[data-render="contact"]');
    if (!host) return;
    var c = t(lang, 'contact');
    if (!c) return;

    var mailto = 'mailto:?subject=' + encodeURIComponent(c.subject) + '&body=' + encodeURIComponent(c.body);

    host.innerHTML =
      '<div class="contact-field-label">' + esc('Subject / Objet / Betreff') + '</div>' +
      '<div class="contact-subject">' + esc(c.subject) + '</div>' +
      '<div class="contact-field-label">' + esc('Message') + '</div>' +
      '<div class="contact-body-box" id="cc-contact-body">' + esc(c.body) + '</div>' +
      '<div class="contact-row">' +
        '<button class="btn btn-gold" id="cc-copy-btn" type="button">' + esc(c.copyBtn) + '</button>' +
        '<a class="btn btn-primary" href="' + mailto + '">' + esc(c.mailtoBtn) + '</a>' +
        '<span class="copy-feedback" id="cc-copy-feedback">' + esc(c.copiedMsg) + '</span>' +
      '</div>' +
      '<div class="howto-box">' +
        '<div class="howto-col"><h4>' + esc(c.howToTitle) + '</h4><p>' + esc(c.howToBody) + '</p>' +
          '<a class="link-accent" href="https://www.europarl.europa.eu/meps/en/home" target="_blank" rel="noopener">' + esc(c.meplookupLabel) + ' ↗</a></div>' +
        '<div class="howto-col"><h4>' + esc(c.haveYourSayTitle) + '</h4><p>' + esc(c.haveYourSayBody) + '</p>' +
          '<a class="link-accent" href="https://have-your-say.ec.europa.eu/index_en" target="_blank" rel="noopener">' + esc(c.haveYourSayLabel) + ' ↗</a></div>' +
      '</div>';

    var copyBtn = document.getElementById('cc-copy-btn');
    var feedback = document.getElementById('cc-copy-feedback');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var text = c.subject + '\n\n' + c.body;
        var done = function () {
          feedback.classList.add('show');
          setTimeout(function () { feedback.classList.remove('show'); }, 2200);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
        } else {
          fallbackCopy(text, done);
        }
      });
    }
  }

  function fallbackCopy(text, cb) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.focus(); ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    cb();
  }

  /* ---------- Protection blacklists ---------- */
  function renderBlacklists(lang) {
    ['A', 'B', 'C'].forEach(function (tier) {
      var host = document.querySelector('[data-render="blacklist-' + tier + '"]');
      if (!host) return;
      var d = t(lang, 'protection.' + tier);
      if (!d || !d.bl) return;
      host.innerHTML =
        '<h4>⛔ ' + esc(d.blTitle) + '</h4>' +
        d.bl.map(function (item) {
          return '<div class="bl-item"><span class="bl-x">✕</span><div><b>' + esc(item.n) + '.</b> <span class="r">' + esc(item.r) + '</span></div></div>';
        }).join('');
    });
  }

  /* ---------- Apps directory (protection page sidebar) ---------- */
  var CAT_ORDER = ['messaging', 'cloud', 'browser', 'mobileos', 'vpn', 'dns', 'appstore', 'email'];

  function buildAppList(items, categories) {
    var byCat = {};
    items.forEach(function (it) { (byCat[it.cat] = byCat[it.cat] || []).push(it); });
    return CAT_ORDER.filter(function (c) { return byCat[c]; }).map(function (cat) {
      var label = categories[cat] || cat;
      var rows = byCat[cat].map(function (it) {
        var initial = it.name.trim().charAt(0).toUpperCase();
        return '<div class="app-item">' +
          '<span class="app-badge" style="background:var(--cat-' + cat + ')">' + esc(initial) + '</span>' +
          '<span><span class="app-name">' + esc(it.name) + '</span><span class="app-note">' + esc(it.note) + '</span></span>' +
          '</div>';
      }).join('');
      return '<div class="apps-cat-group">' +
        '<span class="apps-cat-label" style="background:var(--cat-' + cat + ')"><span class="dot"></span>' + esc(label) + '</span>' +
        rows + '</div>';
    }).join('');
  }

  function renderAppsDirectory(lang) {
    var useHost = document.querySelector('[data-render="apps-use"]');
    var avoidHost = document.querySelector('[data-render="apps-avoid"]');
    if (!useHost && !avoidHost) return;
    var apps = t(lang, 'apps');
    if (!apps) return;
    if (useHost) useHost.innerHTML = buildAppList(apps.use, apps.categories);
    if (avoidHost) avoidHost.innerHTML = buildAppList(apps.avoid, apps.categories);
  }

  function renderAll() {
    var lang = window.CC_I18N ? window.CC_I18N.detectLang() : 'fr';
    renderFacts(lang);
    renderTimeline(lang);
    renderMap(lang);
    renderContact(lang);
    renderBlacklists(lang);
    renderAppsDirectory(lang);
    if (window.CC_reobserve) window.CC_reobserve();
  }

  window.addEventListener('cc:langchange', function (e) {
    var lang = e.detail.lang;
    renderFacts(lang);
    renderTimeline(lang);
    renderMap(lang);
    renderContact(lang);
    renderBlacklists(lang);
    renderAppsDirectory(lang);
    if (window.CC_reobserve) window.CC_reobserve();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAll);
  } else {
    renderAll();
  }
})();
