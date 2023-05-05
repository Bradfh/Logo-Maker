// Tests for the Square class

const Square = require('./square.js');

describe('Square', () => {
  it('should create a square with the starting point in the top left corner', () => {
    const square = new Square(150, 150, 'blue', 'Hello World', 'white', 20);
    expect(square.height).toEqual(150);
    expect(square.width).toEqual(150);
  });

  describe('draw', () => {
    it('should return a string withe the SVG markup for our square', () => {
      const square = new Square(150, 150, 'blue', 'Hello World', 'white', 20);
      expect(square.draw()).toEqual('<svg height="150" width="150"><rect height="150" width="150" x="0" y="0" style="fill:blue;"/><text x="75" y="75" text-anchor="middle" style="font-size:20;fill:white;">Hello World</text></svg>');
    });
  });
});
