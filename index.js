
const inquirer = require('inquirer');
const fs=require('fs');
const generateMarkdown= require('./utils/generateMarkdown')

//creates template for user input 
const required = (attr, input) => {
    if (input) {
        return true;
        //when there is no input
    } else {
        console.log(`Please enter valid input for ${attr}`);
        return false;
    }
}



// Array of questions for user input
const questions = [{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
    validate: input => required("username", input)
  }, {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    validate: input => required("email", input)
  }, {
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

// Creates readME
function writeToFile(fileName, data) {
    return new Promise((resolve, reject)=>{
        fs.writeFile( `./dist/${fileName}`, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
            }
      
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
              ok: true,
              message: 'File created!'
            });
          });
    });
}

// initializes app
function init() {
    return inquirer.prompt(questions)
    .then(answers => {
        const readme=generateMarkdown(answers); 
        return writeToFile('README.md', readme)
    })
    .then(()=> {
        console.log("complete")
    });
}

// Function call to initialize app
init();
