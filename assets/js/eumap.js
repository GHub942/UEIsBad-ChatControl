/* ============================================================
   eumap.js — renders a real geographic map of the EU-27, coloured
   by Council position, using D3 (d3-geo) + topojson-client and the
   "world-atlas" TopoJSON dataset (ISC-licensed, derived from Natural
   Earth, loaded at runtime from a CDN — see status.html for the
   <script> tags). Falls back to the schematic hex-grid map if D3 or
   the CDN data can't be loaded (e.g. offline preview, blocked CDN).
   ============================================================ */

(function () {
  var TOPOJSON_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
  var loadedFeatures = null; // cached GeoJSON features for EU countries once fetched

  function t(lang, path) {
    var dict = (window.I18N && window.I18N[lang]) || {};
    return path.split('.').reduce(function (acc, k) { return acc && acc[k] !== undefined ? acc[k] : undefined; }, dict);
  }
  function esc(s) { return (s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function isoMatch(featureId, iso) {
    return Number(featureId) === Number(iso);
  }

  function fetchEuFeatures(callback) {
    if (loadedFeatures) { callback(loadedFeatures); return; }
    if (typeof d3 === 'undefined' || typeof topojson === 'undefined') { callback(null); return; }
    d3.json(TOPOJSON_URL).then(function (world) {
      if (!world || !world.objects || !world.objects.countries) { callback(null); return; }
      var all = topojson.feature(world, world.objects.countries).features;
      var byIso = {};
      all.forEach(function (f) { byIso[Number(f.id)] = f; });
      var features = window.CC_COUNTRIES.map(function (c) {
        var f = byIso[Number(c.iso)];
        if (!f) return null;
        return { type: "Feature", geometry: f.geometry, properties: { code: c.code, status: c.status } };
      }).filter(Boolean);
      // Defensive check: if most countries failed to match (unexpected dataset
      // shape, CDN serving something else, etc.), prefer the reliable
      // schematic fallback over a sparse/broken-looking real map.
      if (features.length < window.CC_COUNTRIES.length - 4) { callback(null); return; }
      loadedFeatures = features;
      callback(features);
    }).catch(function () { callback(null); });
  }

  function renderHexFallback(host, legendHost, lang) {
    var countryNames = t(lang, 'countries') || {};
    var m = t(lang, 'map') || {};
    host.innerHTML = '<div class="hexmap-grid-wrap"><div class="hexmap-grid">' + window.CC_COUNTRIES.map(function (c) {
      var name = countryNames[c.code] || c.code;
      return '<div class="hex-tile" data-status="' + c.status + '" data-code="' + c.code + '" style="grid-column:' + c.col + ';grid-row:' + c.row + '">' +
        c.code + '<span class="hex-tip">' + esc(name) + '</span></div>';
    }).join('') + '</div></div>';
    bindLegendFilter(host, legendHost, '.hex-tile', lang);
  }

  function bindLegendFilter(host, legendHost, tileSelector, lang) {
    var countryNames = t(lang, 'countries') || {};
    var m = t(lang, 'map') || {};
    if (!legendHost) return;
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
        host.querySelectorAll(tileSelector).forEach(function (tile) {
          var match = !activeFilter || tile.getAttribute('data-status') === activeFilter;
          tile.classList.toggle('dimmed', !match);
        });
      });
    });
  }

  function renderGeoMap(features, host, legendHost, lang) {
    var countryNames = t(lang, 'countries') || {};
    var containerWidth = host.getBoundingClientRect ? host.getBoundingClientRect().width : 0;
    if (!containerWidth) containerWidth = host.clientWidth || host.offsetWidth || 0;
    var width = Math.max(320, Math.round(containerWidth) || 700);
    // Aspect ratio tuned for a Mercator projection of the fixed Europe bounding
    // box below (lon -25..45, lat 34..71): comes out close to square.
    var height = Math.round(width * 0.82);

    host.innerHTML = '';
    var svg = d3.select(host).append('svg')
      .attr('viewBox', '0 0 ' + width + ' ' + height)
      .attr('width', width)
      .attr('height', height)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .attr('class', 'euromap-svg')
      .attr('role', 'img');

    // Fit the projection to a FIXED Europe bounding box rather than to the
    // actual feature geometries: some countries' shapes in the source dataset
    // include far-flung overseas territories (e.g. France's geometry can
    // include French Guiana / Réunion), which would otherwise blow out the
    // computed bounds and shrink the entire map to a tiny corner.
    var europeBounds = {
      type: "Feature",
      geometry: { type: "Polygon", coordinates: [[[-25, 34], [45, 34], [45, 71], [-25, 71], [-25, 34]]] }
    };
    var projection = d3.geoMercator().fitExtent([[18, 18], [width - 18, height - 18]], europeBounds);
    var path = d3.geoPath(projection);

    var g = svg.append('g');

    g.selectAll('path.country-shape')
      .data(features)
      .enter().append('path')
      .attr('class', 'country-shape')
      .attr('data-status', function (d) { return d.properties.status; })
      .attr('data-code', function (d) { return d.properties.code; })
      .attr('d', path)
      .append('title')
      .text(function (d) { return countryNames[d.properties.code] || d.properties.code; });

    // Code labels centred on each country's projected centroid
    g.selectAll('text.country-label')
      .data(features)
      .enter().append('text')
      .attr('class', 'country-label')
      .attr('x', function (d) { return path.centroid(d)[0]; })
      .attr('y', function (d) { return path.centroid(d)[1]; })
      .attr('text-anchor', 'middle')
      .attr('dy', '0.32em')
      .text(function (d) { return d.properties.code; });

    svg.selectAll('path.country-shape').on('click', function (event, d) {
      var status = d.properties.status;
      var active = svg.node().getAttribute('data-active-filter');
      var next = (active === status) ? null : status;
      svg.node().setAttribute('data-active-filter', next || '');
      svg.selectAll('path.country-shape').each(function (dd) {
        var el = d3.select(this);
        var match = !next || dd.properties.status === next;
        el.classed('dimmed', !match);
      });
      if (legendHost) {
        legendHost.querySelectorAll('.map-legend-group').forEach(function (g2) {
          g2.classList.toggle('active', next && g2.getAttribute('data-status') === next);
        });
      }
    });

    bindLegendFilter(host, legendHost, '.country-shape', lang);
  }

  window.CC_renderEuroMap = function (lang) {
    var host = document.querySelector('[data-render="hexmap"]');
    var legendHost = document.querySelector('[data-render="map-legend"]');
    if (!host || !window.CC_COUNTRIES) return;

    fetchEuFeatures(function (features) {
      if (features && features.length) {
        renderGeoMap(features, host, legendHost, lang);
      } else {
        renderHexFallback(host, legendHost, lang);
      }
    });
  };
})();
