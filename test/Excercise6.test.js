const excercise6 = require('../src/Excercises/Excercise6')

test('It should return doll and pc', () => {
    const a1 = ['bike', 'car', 'bike', 'bike']
    const a2 = ['car', 'bike', 'doll', 'car']
    const a3 = ['bike', 'pc', 'pc']
    const expectedResult = ['doll', 'pc']

    expect(excercise6(a1, a2, a3)).toEqual(expectedResult)
})
