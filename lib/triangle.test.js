const Triangle = require("./Triangle");

describe("Triangle", () => {
  const shapeColor = "blue";
  const logoText = "Logo";
  const textColor = "white";

  test("renders a triangle SVG with the correct properties", () => {
    const triangle = new Triangle(shapeColor, logoText, textColor);
    const expectedSvg = `
      <svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <polygon points="100, 15 200, 200 0, 200" fill="${shapeColor}"/>
          <text x="100" y="165" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>
      </svg>
    `;

    expect(triangle.render()).toBe(expectedSvg);
  });
});
