const excercise3 = require('../src/Excercises/Excercise3')

test('It should carry only two gifts', () => {
    const packOfGifts = ["book", "doll", "ball"]
    const reindeers = ["dasher", "dancer"]

    expect(excercise3(packOfGifts, reindeers)).toEqual(2)
})
