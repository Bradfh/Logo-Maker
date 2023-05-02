const Shapes = require('./shapes.js');

class Square extends Shapes {
  constructor (svgHeight, svgWidth, color, text, textColor, textSize, x, y) {
    super(svgHeight, svgWidth, color, text, textColor, textSize);
    this.x = x;
    this.y = y;
  }
  draw () {
    const squareStyle = this.shapeStyle();
    let squareSvg = `<rect height="${this.height}" width="${this.width}" x="${this.x}" y="${this.y}" style="${squareStyle}"/>`
    if (this.text) {
      const textStyle = this.textStyle();
      squareSvg += `<text x="${this.x + this.width / 2}" y="${this.y + this.height / 2}" text-anchor="middle" style="${textStyle}">${this.text}</text>`;
    }

    return `<svg height="${this.height}" width="${this.width}">${squareSvg}</svg>`;
  }
}


module.exports = Square;