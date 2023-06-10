let inquirer = require('inquirer');
// const jest = require('jest');
const fs = require('fs');
const { title } = require('process');
inquirer.prompt([
    /* Pass your questions in here */
   {
    type: 'input',
    name: 'textInput',
    message: 'What three characters would you like to add to the logo?'
  },
  {
    type: 'input',
    name: 'textColorInput',
    message: 'What color would you like the text inside the logo to be?'
  },
  {
    type: 'list',
    name: 'shapeInput',
    message: 'What text would you like to add to the logo? (Max 3 characters)',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    name: 'shapeColorInput',
    message: 'What color would you like the logo to be?'
  }
])
.then((answers) => {
 logoText = answers.textInput;
 logoTextColor = answers.textColor;
 logoShape = answers.shapeInput;
 logoColor = answers.shapeColorInput;
console.log(logoColor, logoShape, logoText, logoTextColor);

 

/*fs.writeFile('logo.svg', completedLogo, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('Logo created successfully.');
});*/
console.log('')
});

