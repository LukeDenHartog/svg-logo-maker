const inquirer = require('inquirer');

const fs = require('fs');
const { title } = require('process');
const { Circle, Triangle, Square } = require('./lib/shapes');

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
    let logoShape = ''
    let logoText = answers.textInput; // this is the text entered by the user.
    let textColor = answers.textColorInput; // this is the text color selected by the user.
    let shape = answers.shapeInput; // this is the shape the user has selected.
    let logoColor = answers.shapeColorInput;  // this is the shapes color selected by the user.
   
  
    if (answers.shapeInput === 'Circle') {
      shape = "circle"
    logoShape = new Circle(logoColor, textColor, logoText, shape);
    } else if (answers.shapeInput === 'Square') {
      shape = "rect"
      logoShape = new Square(logoColor, textColor, logoText, shape);
    } else if (answers.shapeInput === 'Triangle') {
      shape = "polygon"
      logoShape = new Triangle(logoColor, textColor, logoText, shape);
    } else {
      console.log('There was an error rendering the shape');
    }
  
    // Below is the SVG canvas followed by the new shape class named "logoshape" which is then followed by the text input and text color.

    fs.writeFile('logo.svg', logoShape.render(), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
    });
  });




