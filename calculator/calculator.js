window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    update();
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
  document.getElementById("loan-amount").value = '20000.00';
  document.getElementById("loan-years").value = '12';
  document.getElementById("loan-rate").value = '5'
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const monthlyPayment = calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(monthlyPayment)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
   const {amount, rate, years} = values 
   const P = amount;
   const i = rate / (12 * 100)
   const n = years * 12
   //console.log(P, rate, years, i, n);
   const monthlyPayment = P * i / (1 - (Math.pow(1/(1 + i), n)));
   console.log(monthlyPayment);
   return (monthlyPayment.toFixed(2))
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  console.log(monthly);
  document.getElementById("monthly-payment").innerText = "$"+monthly;
}
