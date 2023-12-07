const excercise4 = require('../src/Excercises/Excercise4')

test('It should return true when box fit and are sorted', () => {
    const boxes = [
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 }
    ]
    expect(excercise4(boxes)).toEqual(true)
})

test('It should return false when box does not fit', () => {
    const boxes = [
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 }
      ]
    expect(excercise4(boxes)).toEqual(false)
})

test('It should return true when box does fit and is not sorted', () => {
    const boxes = [
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
      ]      
    expect(excercise4(boxes)).toEqual(true)
})
