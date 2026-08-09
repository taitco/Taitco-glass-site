document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
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

const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks — this form is a placeholder. Once the Omega EDI quoter is connected, this will submit a live quote request.');
  });
}

const dealerForm = document.getElementById('dealer-form');
if (dealerForm) {
  dealerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks — this form is a placeholder. Submissions will route to your dealer account inbox once connected.');
  });
}
