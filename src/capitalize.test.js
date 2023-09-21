const capitalize = require("./capitalize")

test("capitalize first letter of string", () => {
    const input = "hello"
    const expectedOutput = "Hello"

    const result = capitalize(input)

    expect(result).toBe(expectedOutput)
})