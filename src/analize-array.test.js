const analizeArray = require("./analize-array")

test("object check", () => {
  const result = analizeArray([1, 2, 3, 4])
  expect(result).toStrictEqual({ average: 2.5, max: 4, min: 1, length: 4 })
})
