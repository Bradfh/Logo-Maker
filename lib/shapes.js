//JS to create the shapes class.  All specific shapes will inherit from this class.
//The reason for the different names (height vs svgHeight) is due to a relic from when I was trying to set the size of the 
//svg box and ALSO set the size of the shape within the box.  I ended up just setting the svg box to the size of the shape.

class Shapes {
  constructor(svgHeight, svgWidth, color, text, textColor, textSize) {
    this.height = svgHeight;
    this.width = svgWidth;
    this.color = color;
    this.text = text;
    this.textColor = textColor;
    this.textSize = textSize;
  }
  draw() {
  }
  shapeStyle() {
    let styleStr = '';

    if (this.color) {
      styleStr += `fill:${this.color};`;
    }
    return styleStr;
  }

  textStyle() {
    let styleStr = '';
    if (this.text) {
      styleStr += `font-size:${this.textSize};fill:${this.textColor};`;
    }
    return styleStr;
  }

  setMaxTextSize() {
    if (!this.text) {
      this.textSize = 0;
    } else {
      const maxTextSize = Math.min(this.height, this.width) * 0.8;
      if (this.textSize > maxTextSize) {
        this.textSize = maxTextSize;
      }
    }
  }
}


module.exports = Shapes;