const inquirer = require('inquirer');
const fs = require('fs');

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: "What is your project's name?",
      validate: (value) => {
        if(value) {
          return true;
        }
        console.log('Please enter the name of your project!')
        return false;
      },
    },
    {
      type: 'input',
      name: 'gitUser',
      message: 'Enter your GitHub Username:',
      validate: (value) => {
        if(value) {
          return true;
        }
        console.log('Please enter your GitHub username!')
        return false;
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email:',
      validate: (value) => {
        if(value) {
          return true;
        }
        console.log('Please enter your email!')
        return false;
      },
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for you project:',
      validate: (value) => {
        if(value) {
          return true;
        }
        console.log('Please enter a brief description of your app!')
        return false;
      },
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your app?',
      validate: (value) => {
        if(value) {
          return true;
        }
        console.log('Please enter instructions on how to install your app!')
        return false;
      },
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your app?',
      validate: (value) => {
        if(value) {
          return true;
        }
        console.log('Please enter instructions on how to use your app!')
        return false;
      },
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Any collaborators, third-party assets that require attribution, tutorials that you used?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Any licenses?',
      choices: ["MIT License", "GPL 3.0", "Apache 2.0", "BSD 3", "N/A"]
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter some instructions on how others can contribute to your project!',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please write some instructions on how to test your app.',
      validate: (value) => {
        if(value) {
          return true;
        }
        console.log('Please enter instructions on how to test your app!')
        return false;
      },
    }
  ]).then(({
    // User input
    projectName,
    gitUser,
    email,
    description,
    installation,
    usage,
    credits,
    license,
    contribution,
    tests}) => {
    const template = `
# ${projectName}

## Description
${description}
    
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contribution)
* [Tests](#tests)
* [Questions](#questions)

# Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
This project is licensed under:
${license}

## Contributing
${contribution}

## Tests
${tests}

## Questions
If you have any questions, please contact me on [GitHub](https://github.com/${gitUser}) or email me at ${email}.

![picture](https://github.com/${gitUser}.png?size=50)`;
    generateReadME(projectName, template);
  });
  function generateReadME(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`, data, (err) => {
    if(err) throw new Error(err);

    console.log('Your README has been generated!');
  });
}};

promptUser();