let inquirer = require('inquirer');
// const jest = require('jest');
const fs = require('fs');

inquirer
  .prompt([
    /* Pass your questions in here */
   {
    type: 'input',
    name: 'text-input',
    message: 'What text would you like to add to the logo? (Max 3 characters)'
  }
])
.then()