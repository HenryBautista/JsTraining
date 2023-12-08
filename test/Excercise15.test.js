const excercise15 = require('../src/Excercises/Excercise15')

test('It should return the ncessary candies', () => {
    
    const input = [5,8,6,4]
    const expectedResult = 9

    expect(excercise15(input)).toEqual(expectedResult)
})

test('It should return -1 when there is no kids', () => {
    
    const input = []
    const expectedResult = -1

    expect(excercise15(input)).toEqual(expectedResult)
})

test('It should return -1 when there is only one kid', () => {
    
    const input = [10]
    const expectedResult = -1

    expect(excercise15(input)).toEqual(expectedResult)
})