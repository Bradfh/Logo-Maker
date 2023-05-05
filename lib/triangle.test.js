// Tests for the Triangle class

const Triangle = require('./triangle.js');

describe('Triangle', () => {
  it('should use height and width to create 3 triangle vertices', () => {
    const triangle = new Triangle(150, 150, 'blue', 'Hello World', 'white', 20);
    expect(triangle.height).toEqual(150);
    expect(triangle.width).toEqual(150);

  });

  describe('draw', () => {
    it('should return a string with SVG markup', () => {
      const triangle = new Triangle(150, 150, 'blue', 'Hello World', 'white', 20, 0, 0, 150, 150, 150, 0);
      expect(triangle.draw()).toEqual('<svg height="150" width="150"><polygon points="75,0 150,150 0,150" style="fill:blue;"/><text x="75" y="100" text-anchor="middle" style="font-size:20;fill:white;">Hello World</text></svg>');
    });
  });
});
