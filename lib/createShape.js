const Circle = require('./Circle.js');
const Square = require('./Square.js');
const Triangle = require('./Triangle.js');

function createShape(response) {
  let userShape;

  switch (response.logoShape) {
    case 'Circle':
      userShape = new Circle(response.shapeColor, response.logoText, response.textColor);
      break;
    case 'Square':
      userShape = new Square(response.shapeColor, response.logoText, response.textColor);
      break;
    case 'Triangle':
      userShape = new Triangle(response.shapeColor, response.logoText, response.textColor);
      break;
    default:
      // Handle unrecognized shape
      throw new Error('Unrecognized shape: ' + response.logoShape);
  }

  return userShape.render();
}

module.exports = createShape;