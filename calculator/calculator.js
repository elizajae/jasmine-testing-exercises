window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmount = document.getElementById("loan-amount");
  let loanYears = document.getElementById("loan-years");
  let loanRate = document.getElementById("loan-rate");
  loanAmount.value = '1000';
  loanYears.value = '1';
  loanRate.value = '3';
  update(calculateMonthlyPayment(getCurrentUIValues()));
}

// Get the current values from the UI
// Update the monthly payment
function update() {
 const values = getCurrentUIValues();
 updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = (values.rate /100) / 12;
  let n = values.years * 12;

  const calculation = ( i * p) / (1 - Math.pow((1 + i), -n));

  return calculation.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
   let total = document.getElementById('monthly-payment');
   total.textContent = monthly;
}
