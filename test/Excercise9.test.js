const excercise9 = require('../src/Excercises/Excercise9')

test('It should return an filtered array of only numbers', () => {
    const input = [1,2,'a','b']
    const expectedResult = [ 1, 2 ]

    expect(excercise9(input)).toEqual(expectedResult)
})