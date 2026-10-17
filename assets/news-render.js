/* Renders window.NEWS into any element with id="news-list".
   data-limit="3" shows only the newest items; data-hide="id" removes that
   element when there is no news (used on the home page). */
(function () {
  var box = document.getElementById('news-list');
  if (!box) return;
  var items = (window.NEWS || []).filter(function (n) { return n && n.title; });
  items.sort(function (a, b) { return String(b.date || '').localeCompare(String(a.date || '')); });
  var limit = parseInt(box.getAttribute('data-limit') || '0', 10);
  if (limit > 0) items = items.slice(0, limit);
  if (!items.length) {
    var hide = box.getAttribute('data-hide');
    if (hide) { var el = document.getElementById(hide); if (el) el.remove(); return; }
    box.innerHTML = '<p class="muted" style="padding:24px 4px;margin:0">News and announcements from the lab will be posted here.</p>';
    return;
  }
  function fmt(d) { return String(d || '').replace(/-/g, '.'); }
  box.innerHTML = items.map(function (n) {
    var tag = n.link ? 'a' : 'div';
    var href = n.link ? ' href="' + n.link + '"' : '';
    return '<' + tag + ' class="pub"' + href + '>' +
      '<div class="pub-meta"><b>' + fmt(n.date) + '</b>' + (n.type ? '<span>' + n.type + '</span>' : '') + '</div>' +
      '<div class="pub-main"><div class="pub-title">' + n.title + '</div>' +
      (n.text ? '<div class="pub-authors">' + n.text + '</div>' : '') + '</div>' +
      (n.link ? '<span class="pub-arrow" aria-hidden="true">↗</span>' : '') +
      '</' + tag + '>';
  }).join('');
})();
