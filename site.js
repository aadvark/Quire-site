// Slide-out menu for phones: opens from the right, closes on the scrim, the X, Escape or a link.
(function () {
  var btn = document.querySelector('.menu-btn'), drawer = document.getElementById('drawer'), scrim = document.querySelector('.scrim');
  if (!btn || !drawer) return;
  function set(open) {
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open);
    drawer.toggleAttribute('inert', !open);
    if (open) drawer.querySelector('button').focus(); else btn.focus();
  }
  drawer.setAttribute('inert', '');
  btn.addEventListener('click', function () { set(true); });
  drawer.querySelector('button').addEventListener('click', function () { set(false); });
  scrim.addEventListener('click', function () { set(false); });
  drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { document.body.classList.remove('menu-open'); btn.setAttribute('aria-expanded', false); drawer.setAttribute('inert', ''); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && document.body.classList.contains('menu-open')) set(false); });
})();
