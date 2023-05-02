const Square = require('./square.js');

describe('Square', () => {
  it('should set the starting point of the square (x, y) and set height and width to the same value', () => {
    const square = new Square(150, 150, 'blue', 'Hello World', 'white', 20, 10, 15);
    expect(square.x).toEqual(10);
    expect(square.y).toEqual(15);
  });

  describe('draw', () => {
    it('should return a string withe the SVG markup for our square', () => {
      const square = new Square(150, 150, 'blue', 'Hello World', 'white', 20, 10, 15);
      expect(square.draw()).toEqual('<svg height="150" width="150"><rect height="150" width="150" x="10" y="15" style="fill:blue;"/><text x="85" y="90" text-anchor="middle" style="font-size:20;fill:white;">Hello World</text></svg>');
    });
  });
});
