class Shapes {
  constructor(height, width, color, text, textColor, textSize) {
    this.height = height;
    this.width = width;
    this.color = color;
    this.text = text;
    this.textColor = textColor;
    this.textSize = textSize;
  }
  draw() {
  }
  style() {
    let styleStr = '';
    if (this.color) {
      styleStr += `fill:${this.color};`;
    }
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

// class Triangle extends Shapes {
//   constructor(x1, y1, x2, y2, x3, y3) {
//     super(height, width, color, text, textColor, textSize);
//     this.x1 = x1;
//     this.y1 = y1;
//     this.x2 = x2;
//     this.y2 = y2;
//     this.x3 = x3;
//     this.y3 = y3;
//   }
//   draw() {
//     const points = `${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}`;
//     return `<polygon points="${points}" style="fill:lime;stroke:purple;stroke-width:1" />`;
//   }

module.exports = Shapes;