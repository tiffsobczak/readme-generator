//creates license badge based on user "license" input
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![license-badge](https://img.shields.io/badge/license-${license}-blue) <br/>`
}

//produces link to license on page given the user's "license" input
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return "- [License](#license)"
}

//creates the "License" section based on user's "license" input
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }

  return `
## License
This project is covered under the ${license} license.
  `
}

// Generates markdown for Readme
function generateMarkdown(answers) {
  return `
# ${answers.title}
${renderLicenseBadge(answers.license)}
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(answers.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}
## Usage
${answers.usage}
${renderLicenseSection(answers.license)}
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
${answers.questions}<br/>
[Author's GitHub Profile](https://github.com/${answers.username})<br/>
For any additional information, you can reach me at ${answers.email}
`;
}

module.exports = generateMarkdown;
