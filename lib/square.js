const Shapes = require('./shapes.js');

class Square extends Shapes {
  constructor (height, color, text, textColor, textSize, x, y) {
    super(height, height, color, text, textColor, textSize);
    this.x = x;
    this.y = y;
  }
  draw () {
    this.setMaxTextSize();
    let textStr = '';
    if (this.text) {
      textStr = `<text x="${this.height / 2}" y="${this.height /2}" text-anchor="middle" style="${this.style()}">${this.text}</text>`;
    }
    return `<svg><rect x="${this.x}" y="${this.y}" width="${this.height}" height="${this.height}" style="${this.style()}"/>${textStr}</svg>`;
  }
}

module.exports = Square;