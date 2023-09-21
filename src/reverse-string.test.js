const reverseString = require("./reverse-string")

test("get the inputted string in reverse order", () => {
    const input = "hello"
    const expectedOutput = "olleh"

    const result = reverseString(input)

    expect(result).toBe(expectedOutput)
})