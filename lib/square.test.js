const Square = require("./Square");

describe("Square", () => {
  const shapeColor = "green";
  const logoText = "Logo";
  const textColor = "white";

  test("renders a square SVG with the correct properties", () => {
    const square = new Square(shapeColor, logoText, textColor);
    const expectedSvg = `
      <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="${shapeColor}"/>
          <text x="100" y="125" font-size="70" text-anchor="middle" fill="${textColor}">${logoText}</text>
      </svg>
    `;

    expect(square.render()).toBe(expectedSvg);
  });
});
