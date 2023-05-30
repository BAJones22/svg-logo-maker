const Shape = require("./logoShape");

class Triangle extends Shape {
  constructor(shapeColor, logoText, textColor) {
    super(shapeColor, logoText, textColor);
  }

  render() {
    return `
      <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
          <text x="105" y="165" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
      </svg>
    `;
  }
}

module.exports = Triangle;