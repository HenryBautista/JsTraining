const excercise2 = require('../src/Excercises/Excercise2')

test('should Count all holidays and ignore not work days', () => {
    const holidays = ['01/06', '04/01', '12/25']
    const year = 2022
    expect(excercise2(year, holidays)).toEqual(4)
})