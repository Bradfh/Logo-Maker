const Shapes = require('./shapes.js');

class Circle extends Shapes {
  constructor(radius, color, text, textColor, textSize, cx, cy) {
    super(radius * 2, radius * 2, color, text, textColor, textSize);
    this.radius = radius;
    this.cx = cx;
    this.cy = cy;
  }

  draw() {
    this.setMaxTextSize();
    let textStr = '';
    if (this.text) {
      textStr = `<text x="${this.cx}" y="${this.cy}" text-anchor="middle" style="${this.style()}">${this.text}</text>`;
    }
    return `<svg><circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" style="${this.style()}"/>${textStr}</svg>`;
  }
}

module.exports = Circle;