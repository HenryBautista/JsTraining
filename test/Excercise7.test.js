const excercise7 = require('../src/Excercises/Excercise7')

test('It Should remove all vowels including Mayus', () => {
    const text = 'This website is for losers LOL!'
    const expectedResult = 'Ths wbst s fr lsrs LL!'

    expect(excercise7(text)).toEqual(expectedResult)
})

test('It Should remove all vowels except Y', () => {
    const text = "No offense but,\nYour writing is among the worst I've ever read"
    const expectedResult = `N ffns bt,\nYr wrtng s mng th wrst 'v vr rd`

    expect(excercise7(text)).toEqual(expectedResult)
})