
it('should calculate the monthly rate correctly', function () {
  const val = calculateMonthlyPayment({
    amount: 1000,
    years: 1,
    rate: 3
  })

  expect(val).toEqual("84.69")
});


it("should return a result with 2 decimal places", function() {
  const val = calculateMonthlyPayment({
    amount: 1000,
    years: 1,
    rate: 3
  })

  expect(val.length).toEqual(5)
  expect(val.includes(".")).toEqual(true)
});

it('should return a string', function () {
  
  const val = calculateMonthlyPayment({
    amount: 1000,
    years: 1,
    rate: 3
  })

  expect(typeof val).toEqual("string")
});

