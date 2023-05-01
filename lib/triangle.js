const Shapes = require('./shapes.js');

class Triangle extends Shapes {
  constructor (height, width, color, text, textColor, textSize, x1, y1, x2, y2, x3, y3) {
    super(height, width, color, text, textColor, textSize);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    
  }
  draw() {
    this.setMaxTextSize();
    let textStr = '';
    if (this.text) {
      textStr = `<text x="${this.width / 2}" y="${this.height / 2}" text-anchor="middle" style="${this.style()}">${this.text}</text>`;
    }
    return `<svg height="${this.height}" width="${this.width}"><polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" style="${this.style()}"/>${textStr}</svg>`;
  }
}




module.exports = Triangle;