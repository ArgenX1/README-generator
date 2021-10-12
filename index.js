// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Any special installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage information?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Contribution guidelines?',
        },
        {
           type: 'input',
           name: 'test',
           message: 'Test instructions?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license do you want?',
            choices: ['MIT']
        },

    ]);
};
console.log(questions);

// function to write README file

 const generateMarkdown = ({username, email, project, description, installation, usage, contribution, test, license}) => 
 `# <${project}>

 ## Description

 ${description}

 ## Table of Contents

 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [License](#license)
 - [Questions](#questions)

 ## Installation

 ${installation}

 ## Usage

 ${usage}
 
 example of how to do a screenshot:
 ![alt text](assets/images/screenshot.png)

 ## Credits

 List your collaborators, if any, or any external resources used.

 ## License

 ${license}

 ## How to Contribute

 ${contribution}

 ## Tests

 ${test}
 
 ##Questions

 If you have any further questions, message me on:

  - GitHub: ${username}
  - Email: ${email}
 
 `

//function to initialize app

const init = () => {
    questions()
    .then((answers) => fs.writeFileSync('TestREADME.md', generateMarkdown(answers)))
    .then(() => console.log('OH JOY! YOUR README IS DONE!'))
    .catch((err) => console.log(err));
};

// Function call to initialize app
init();
