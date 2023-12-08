const toJadenCase = require('../src/Excercises/Excercise12')

test('It should return text to Jaden style', () => {
    const toCapitalize = `How can mirrors be real if our eyes aren't real`

    expect(toJadenCase.call(toCapitalize)).toEqual(`How Can Mirrors Be Real If Our Eyes Aren't Real`)
})