//Circle class that extends Shapes class.  Uses different syntax (cx, cy) due to how SVG is written.  Not necessary other than for
//my brain.  Also circle width and height are the same, so I just double used width even though user is prompted for height and width.
const Shapes = require('./shapes.js');

class Circle extends Shapes {
  constructor(svgWidth, color, text, textColor, textSize) {
    super(svgWidth, svgWidth, color, text, textColor, textSize);
    this.cx = svgWidth / 2;
    this.cy = svgWidth / 2;
    this.radius = svgWidth / 2;
  }

  draw() {
    const circleStyle = this.shapeStyle();
    let circleSvg = `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" style="${circleStyle}"/>`;
    if (this.text) {
      const textStyle = this.textStyle();
      circleSvg += `<text x="${this.width / 2}" y="${this.width / 2}" text-anchor="middle" style="${textStyle}">${this.text}</text>`;
    }

    return `<svg height="${this.width}" width="${this.width}">${circleSvg}</svg>`;
  }
}


module.exports = Circle;