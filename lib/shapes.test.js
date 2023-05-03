const Shapes = require('./shapes');

describe('Shapes', () => {
  describe('constructor', () => {
    it('should set the height, width, color, text, textColor, and textSize properties', () => {
      const shapes = new Shapes(150, 150 , 'blue', 'Hello World', 'white', 20);
      expect(shapes.height).toEqual(150);
      expect(shapes.width).toEqual(150);
      expect(shapes.color).toEqual('blue');
      expect(shapes.text).toEqual('Hello World');
      expect(shapes.textColor).toEqual('white');
      expect(shapes.textSize).toEqual(20);
    });
  });
  
  describe('shapeStyle', () => {
    it('should return a string with the style properties', () => {
      const shapes = new Shapes(150, 150 , 'blue', 'Hello World', 'white', 20);
      expect(shapes.shapeStyle()).toEqual('fill:blue;');
    });

    it('should return an empty string if no color or text is provided', () => {
      const shapes = new Shapes(150, 150, null, null, null, null);
      expect(shapes.textStyle()).toEqual('');
    });
  });

  describe('textStyle', () => {
    it('should return a string with the style properties', () => {
      const shapes = new Shapes(150, 150 , 'blue', 'Hello World', 'white', 20);
      expect(shapes.textStyle()).toEqual('font-size:20;fill:white;');
    });
    it('should return an empty string if no text is provided', () => {
      const shapes = new Shapes(150, 150, null, null, null, null);
      expect(shapes.textStyle()).toEqual('');
    });
  });

  describe('setMaxTextSize', () => {
    it('should adjust the textSize property if it is larger than 80% of the height or width', () => {
      const shapes = new Shapes(150, 150, null, 'Hello World', null, 200);
      shapes.setMaxTextSize();
      expect(shapes.textSize).toEqual(120);
    });
    it('should set the textSize property to 0 if no text is provided', () => {
      const shapes = new Shapes(150, 150, null, null, null, 200);
      shapes.setMaxTextSize();
      expect(shapes.textSize).toEqual(0);
    });
  });
});
