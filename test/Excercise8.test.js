const excercise8 = require('../src/Excercises/Excercise8')

test('It should return the square of each digit', () => {
    const input = 9119
    const expectedResult = 811181
    expect(excercise8(input)).toEqual(expectedResult)
})

test('It should return a number type', () => {
    const input = 9119
    const expectedResult = 811181
    expect(typeof(excercise8(input))).toBe('number')
})
