// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { createLogo } = require("./lib/createLogo");
const { questions } = require("./lib/questions");

// Function to ask questions
function askQuestions() {
    inquirer.prompt(questions).then(function (answers) {
      fs.appendFile(
        "logo.svg",
        createLogo(answers),
        "utf-8",
        function (err) {
          console.error(err);
        }
      );
    });
  }
  
  // Function to initialize app
  function init() {
    askQuestions();
  }
  
  // // Function call to initialize app
  init();
  