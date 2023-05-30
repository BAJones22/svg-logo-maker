// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter 1-3 characters you want displayed as your logo text:",
    name: "logoText",
    validate: (answer) => {
      if (answer.length <= 3 && answer.length > 0) {
        return true;
      } else {
        return 'Please enter at least one character but no more than three';
      }
    }
  },
  {
    type: "input",
    message: "Please enter your desired text color (color may be entered as a keyword or hexadecimal):",
    name: "textColor",
  },
  {
    type: "list",
    message: "Please select your desired logo shape:",
    choices: ['Circle', 'Triangle', 'Square'],
    name: "logoShape",
  },
  {
    type: "input",
    message: "Please enter your desired shape color (color may be entered as a keyword or hexadecimal):",
    name: "shapeColor",
  },
];

module.exports = questions;