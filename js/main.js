// aktiven Menüpunkt markieren
(() => {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.endsWith(here)) a.classList.add('active');
  });
})();
