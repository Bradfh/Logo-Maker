const Circle = require('./circle.js');

describe('Circle', () => {
  it('should set the starting point of the circle (cx, cy) and set radius', () => {
    const circle = new Circle(150, 150, 'blue', 'Hello World', 'white', 20, 10, 15);
    expect(circle.cx).toEqual(75);
    expect(circle.cy).toEqual(75);
    expect(circle.radius).toEqual(75);
  });

  describe('draw', () => {
    it('should return a string withe the SVG markup for our circle', () => {
      const circle = new Circle(150, 150,'blue', 'Hello World', 'white', 20);
      expect(circle.draw()).toEqual('<svg height="150" width="150"><circle cx="75" cy="75" r="75" style="fill:blue;"/><text x="75" y="75" text-anchor="middle" style="font-size:20;fill:white;">Hello World</text></svg>');
    });
  });
});