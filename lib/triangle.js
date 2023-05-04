const Shapes = require('./shapes.js');

class Triangle extends Shapes {
  constructor (svgWidth, svgHeight, color, text, textColor, textSize) {
    super(svgWidth, svgHeight, color, text, textColor, textSize);
    this.width = svgWidth;
    this.height = svgHeight;
        
  }
  draw() {
    const triangleStyle = this.shapeStyle();
    let triangleSvg = `<polygon points="${this.width / 2},0 ${this.width},${this.height} 0,${this.height}" style="${triangleStyle}"/>`;
    if (this.text) {
      const centeredX = this.width / 2;
      const centeredY = (this.height * 2) / 3;
      const textStyle = this.textStyle();
      triangleSvg += `<text x="${centeredX}" y="${centeredY}" text-anchor="middle" style="${textStyle}">${this.text}</text>`;
    }
    return `<svg height="${this.height}" width="${this.width}">${triangleSvg}</svg>`;
  }
}




module.exports = Triangle;