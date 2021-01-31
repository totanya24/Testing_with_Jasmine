it("should calculate the monthly rate correctly", function () {
  const values = { amount: 20000, years: 12, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual("184.98");
});

it("should return a result with 2 decimal places", function () {
  const values = { amount: 20000, years: 12, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual("184.98");
});

/// etc
