const excercise14 = require('../src/Excercises/Excercise14')

test('should first', () => {
    const walk = ['n','s','n','s','n','s','n','s','n','s']
    
    expect(excercise14(walk)).toEqual(true)
})