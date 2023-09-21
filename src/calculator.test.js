const calculator = require("./calculator")

test("1+1 = 2", ()=>{
  const result = calculator.add(1, 1)
  expect(result).toBe(2)
})

test("3-1 = 2", ()=>{
  const result = calculator.subtract(3, 1)
  expect(result).toBe(2)
})

test("2*2 = 4", ()=>{
  const result = calculator.multiply(2, 2)
  expect(result).toBe(4)
})

test("8/4 = 2", ()=>{
  const result = calculator.divide(8, 4)
  expect(result).toBe(2)
})