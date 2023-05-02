const Circle = require('./circle.js');

describe('Circle', () => {
  it('should set the starting point of the circle (cx, cy) and set radius', () => {
    const circle = new Circle(150, 150, 75, 'blue', 'Hello World', 'white', 20, 10, 15);
    expect(circle.cx).toEqual(10);
    expect(circle.cy).toEqual(15);
    expect(circle.radius).toEqual(75);
  });

  describe('draw', () => {
    it('should return a string withe the SVG markup for our circle', () => {
      const circle = new Circle(150, 150, 75,'blue', 'Hello World', 'white', 20, 10, 15,);
      expect(circle.draw()).toEqual('<svg height="150" width="150"><circle cx="10" cy="15" r="75" style="fill:blue;font-size:20;fill:white;"/><text x="10" y="15" text-anchor="middle" style="fill:blue;font-size:20;fill:white;">Hello World</text></svg>');
    });
  });
});