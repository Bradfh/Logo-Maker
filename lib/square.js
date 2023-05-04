const Shapes = require('./shapes.js');

class Square extends Shapes {
  constructor (svgWidth, svgHeight, color, text, textColor, textSize){
    super(svgHeight, svgWidth, color, text, textColor, textSize);
    this.width = svgWidth;
    this.height = svgHeight;
  }
  draw () {
    const squareStyle = this.shapeStyle();
    let squareSvg = `<rect height="${this.height}" width="${this.width}" x="0" y="0" style="${squareStyle}"/>`
    if (this.text) {
      const textStyle = this.textStyle();
      squareSvg += `<text x="${this.width / 2}" y="${this.height / 2}" text-anchor="middle" style="${textStyle}">${this.text}</text>`;
    }

    return `<svg height="${this.height}" width="${this.width}">${squareSvg}</svg>`;
  }
}


module.exports = Square;