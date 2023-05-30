const Circle = require("./Circle");

describe("Circle", () => {
  const shapeColor = "red";
  const logoText = "Logo";
  const textColor = "white";

  test("renders a circle SVG with the correct properties", () => {
    const circle = new Circle(shapeColor, logoText, textColor);
    const expectedSvg = `
      <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="100" fill="${shapeColor}" />
          <text x="150" y="125" font-size="70" text-anchor="middle" fill="${textColor}">${logoText}</text>
      </svg>
    `;

    expect(circle.render()).toBe(expectedSvg);
  });
});
