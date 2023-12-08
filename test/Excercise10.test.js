const excercise10 = require('../src/Excercises/Excercise10')

test('It should return true if result is an integer', () => {
    const input = 4
    expect(excercise10(input)).toEqual(true)
})

test('It should return false if input is negative', () => {
    const input = -1
    expect(excercise10(input)).toEqual(false)
})