let inquirer = require('inquirer');
// const jest = require('jest');
const fs = require('fs');
const { title } = require('process');
const {Shape, Circle, Triangle, Square} = require('./lib/shapes');

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
 let logoText = answers.textInput;
 let textColor = answers.textColorInput;
 answers.shapeInput; // this is the shape the user has selected.
 let logoColor = answers.shapeColorInput;
console.log(logoColor, logoText, textColor);

if (answers.shapeInput === 'Circle') {
  logoShape = new Circle().render();
}


console.log(logoShape);

svgElement = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
\n\n
<text x="150" y="125" text-anchor="middle" fill="${textColor}">${logoText}</text>
\n\n

</svg>
\n\n

`;



 
// let completedLogo = `${}`

 fs.writeFile('logo.svg', svgElement, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('Logo created successfully.');
});



});



