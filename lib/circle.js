const Shapes = require('./shapes.js');

class Circle extends Shapes {
  constructor(svgHeight, svgWidth, color, text, textColor, textSize) {
    super(svgHeight, svgWidth, color, text, textColor, textSize);
    this.cx = svgWidth / 2;
    this.cy = svgHeight / 2;
    this.radius = svgWidth / 2;
  }

  draw() {
    const circleStyle = this.shapeStyle();
    let circleSvg = `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" style="${circleStyle}"/>`;
    if (this.text) {
      const textStyle = this.textStyle();
      circleSvg += `<text x="${this.width / 2}" y="${this.height / 2}" text-anchor="middle" style="${textStyle}">${this.text}</text>`;
    }

    return `<svg height="${this.height}" width="${this.width}">${circleSvg}</svg>`;
  }
}


module.exports = Circle;