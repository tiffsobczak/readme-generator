const inquirer = require('inquirer');
const required = (attr, input) => {
    if (input) {
        return true;
    } else {
        console.log(`Please enter valid input for ${attr}`);
        return false;
    }
}

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your readme?',
    validate: input => required("title", input)
  }, {
    type: 'input',
    name: 'description',
    message: 'What is the description of your readme?',
    validate: input => required("description", input)
  }, {
    type: 'input',
    name: 'installation',
    message: 'What are the directions for installation?',
    validate: input => required("installation", input)
  }, {
    type: 'input',
    name: 'usage',
    message: 'Describe how consumers will use your project?',
    validate: input => required("usage", input)
  }, {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['None', 'MIT', 'GPL', 'Apache', 'Apache 2']
  }, {
    type: 'input',
    name: 'contributing',
    message: 'How should users contribute to your project?',
    validate: input => required("contributing", input)
  }, {
    type: 'input',
    name: 'tests',
    message: 'How are tests run for your project?',
    validate: input => required("tests", input)
  }, {
    type: 'input',
    name: 'questions',
    message: 'What do you anticipate frequently asked questions would be?',
    validate: input => required("questions", input)
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
      });
    }

// Function call to initialize app
init();
