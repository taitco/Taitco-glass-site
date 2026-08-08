document.getElementById('year').textContent = new Date().getFullYear();

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
