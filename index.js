const fs = require("fs");
const inquirer = require("inquirer");
const createShape = require("./lib/createShape");
const questions = require("./lib/questions");

// Function to create a new SVG file titled "logo.svg" using inquirer response
function saveLogoToFile(logoData) {
  const svg = createShape(logoData);
  fs.writeFile("logo.svg", svg, "utf-8", function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("Logo.svg created successfully.");
    }
  });
}

// Function to ask questions and create logo
function createLogo() {
  inquirer.prompt(questions).then(function (answers) {
    saveLogoToFile(answers);
  });
}

// Function to initialize the app
function init() {
  createLogo();
}

// Function call to initialize the app
init();