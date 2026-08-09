/* ---------- Theme: day / night ---------- */
function setTheme(t){
  document.documentElement.setAttribute('data-theme', t);
  var d = document.getElementById('btnDay');
  var n = document.getElementById('btnNight');
  if (d) d.classList.toggle('on', t === 'day');
  if (n) n.classList.toggle('on', t === 'night');
  try { localStorage.setItem('taitco-theme', t); } catch(e) {}
}

(function initTheme(){
  var saved = null;
  try { saved = localStorage.getItem('taitco-theme'); } catch(e) {}
  if (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    saved = 'day';
  }
  if (saved) setTheme(saved);
})();

/* ---------- Footer year ---------- */
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Mobile nav ---------- */
var navToggle = document.getElementById('navToggle');
var mobileNav = document.getElementById('mobileNav');
if (navToggle && mobileNav) {
  navToggle.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('open');
    });
  });
}

/* ---------- Form placeholders ---------- */
var quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks — this form is a placeholder. Once the Omega EDI quoter is connected, this will submit a live quote request.');
  });
}

var dealerForm = document.getElementById('dealer-form');
if (dealerForm) {
  dealerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks — this form is a placeholder. Submissions will route to your dealer account inbox once connected.');
  });
}
