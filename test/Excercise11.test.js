const excercise11 = require('../src/Excercises/Excercise11')

test('It should return false if word contains repeated vowels', () => {
    const input = 'aba'

    expect(excercise11(input)).toEqual(false)
})

test('It should return true if word is an isogram', () => {
    const input = 'Dermatoglyphics'

    expect(excercise11(input)).toEqual(true)
})