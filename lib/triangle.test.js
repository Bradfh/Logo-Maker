const Triangle = require('./triangle.js');

describe('Triangle', () => {
  it('should set 6 points (x1, y1, x2, y2, x3, y3) to be used as the vertices of the triangle', () => {
    const triangle = new Triangle(150, 150, 'blue', 'Hello World', 'white', 20, 0, 0, 150, 150, 150, 0);
    expect(triangle.x1).toEqual(0);
    expect(triangle.y1).toEqual(0);
    expect(triangle.x2).toEqual(150);
    expect(triangle.y2).toEqual(150);
    expect(triangle.x3).toEqual(150);
    expect(triangle.y3).toEqual(0);
  });

  describe('draw', () => {
    it('should return a string with SVG markup', () => {
      const triangle = new Triangle(150, 150, 'blue', 'Hello World', 'white', 20, 0, 0, 150, 150, 150, 0);
      expect(triangle.draw()).toEqual('<svg height="150" width="150"><polygon points="0,0 150,150 150,0" style="fill:blue;font-size:20;fill:white;"/><text x="75" y="75" text-anchor="middle" style="fill:blue;font-size:20;fill:white;">Hello World</text></svg>');
    });
  });
});
