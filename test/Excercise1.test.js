const excercise1 = require('../src/Excercises/Excercise1')


test('It should wrap the gifts', () => {
    expect(excercise1(['cat', 'game', 'socks'])).toEqual([
        `*****\n*cat*\n*****`,
        `******\n*game*\n******`,
        `*******\n*socks*\n*******`
      ]);
});
