// Sky Bridge Consultancy: small vanilla script (no framework needed).
// It never relies on class names that React controls: reveal state lives in a data-in attribute,
// new page content (client-side navigation) is picked up with a MutationObserver, and form/menu
// handling uses event delegation so it keeps working on every page.
(function () {
  var root = document.documentElement;

  // 0) Hide the airplane loader once the page is ready (shown once per browser session)
  var loader = document.getElementById('loader');
  if (loader) {
    var start = Date.now();
    var hide = function () {
      var wait = Math.max(0, 900 - (Date.now() - start));
      setTimeout(function () { loader.classList.add('done'); loader.setAttribute('data-done', ''); }, wait);
      try { sessionStorage.setItem('sb-loaded', '1'); } catch (e) {}
    };
    if (document.readyState === 'complete') hide(); else window.addEventListener('load', hide);
  }

  // 1) Reveal sections as they scroll into view
  var show = function (el) { el.setAttribute('data-in', ''); };
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) : null;

  var watched = typeof WeakSet === 'function' ? new WeakSet() : null;
  var scan = function () {
    var items = [].filter.call(document.querySelectorAll('.reveal:not([data-in]), .flow:not([data-in])'), function (el) {
      return !watched || !watched.has(el);
    });
    items.forEach(function (el) {
      if (watched) watched.add(el);
      if (io) io.observe(el); else show(el);
    });
    // Safety net: never leave content hidden
    setTimeout(function () { items.forEach(show); }, 3500);
  };
  // Start after the page has hydrated, so React and this script never fight over the same markup
  var startReveal = function () {
    scan();
    if ('MutationObserver' in window) {
      var pending = false;
      new MutationObserver(function () {
        if (pending) return; pending = true;
        requestAnimationFrame(function () { pending = false; scan(); });
      }).observe(document.body, { childList: true, subtree: true });
    }
  };
  var later = function () { setTimeout(startReveal, 150); };
  if (document.readyState === 'complete') later(); else window.addEventListener('load', later);

  // 2) Close the mobile menu after choosing a link
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('header details a');
    if (a) { var d = a.closest('details'); if (d) d.removeAttribute('open'); }
  });

  // 3) Inquiry forms send a ready-made WhatsApp message (works on every page)
  document.addEventListener('submit', function (ev) {
    var form = ev.target;
    if (!form.matches || !form.matches('form[data-whatsapp]')) return;
    ev.preventDefault();
    var err = form.querySelector('[data-error]');
    var get = function (n) { var f = form.elements.namedItem(n); return f ? String(f.value || '').trim() : ''; };
    var name = get('name'), phone = get('phone');
    var agree = form.elements.namedItem('agree');
    var msg = '';
    if (!name) msg = 'Please enter your name.';
    else if (!/^[+0-9\s-]{10,16}$/.test(phone)) msg = 'Please enter a valid phone number, e.g. 0300 1234567.';
    else if (agree && !agree.checked) msg = 'Please accept the Terms & Conditions.';
    if (msg) { if (err) { err.textContent = msg; err.hidden = false; } return; }
    if (err) err.hidden = true;

    var lines = ['Hello Sky Bridge, I would like a free consultation.', '', 'Name: ' + name, 'Phone: ' + phone];
    ['service', 'country', 'program'].forEach(function (k) {
      var v = get(k); if (v) lines.push(k.charAt(0).toUpperCase() + k.slice(1) + ': ' + v);
    });
    var note = get('message'); if (note) lines.push('Message: ' + note);
    var url = 'https://wa.me/' + form.getAttribute('data-whatsapp') + '?text=' + encodeURIComponent(lines.join('\n'));
    var ok = form.querySelector('[data-success]');
    if (ok) { ok.hidden = false; var l = ok.querySelector('a'); if (l) l.href = url; }
    window.open(url, '_blank', 'noopener');
  });
  document.addEventListener('input', function (ev) {
    var form = ev.target.closest && ev.target.closest('form[data-whatsapp]');
    var err = form && form.querySelector('[data-error]');
    if (err) err.hidden = true;
  });

  root.setAttribute('data-ready', '');
})();
