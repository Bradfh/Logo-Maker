const Square = require('./square.js');

describe('Square', () => {
  it('should set the starting point of the square (x, y) and set height and width to the same value', () => {
    const square = new Square(150, 'blue', 'Hello World', 'white', 20, 10, 15);
    expect(square.x).toEqual(10);
    expect(square.y).toEqual(15);
  });

  describe('draw', () => {
    it('should return a string withe the SVG markup for our square', () => {
      const square = new Square(150,'blue', 'Hello World', 'white', 20, 10, 15,);
      expect(square.draw()).toEqual('<svg><rect x="10" y="15" width="150" height="150" style="fill:blue;font-size:20;fill:white;"/><text x="75" y="75" text-anchor="middle" style="fill:blue;font-size:20;fill:white;">Hello World</text></svg>');
    });
  });
});
