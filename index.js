const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const Circle = require('./lib/circle.js');

const shapes = ['Triangle', 'Square', 'Circle'];

inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like to draw?',
      choices: shapes,
    },
    {
      type: 'input',
      name: 'width',
      message: 'How wide should it be?',
    },
    {
      type: 'input',
      name: 'height',
      message: 'How tall should it be?',
    },
    {
      type: 'input',
      name: 'color',
      message: 'What color should it be? (name or hex)',
    },
    {
      type: 'input',
      name: 'text',
      message: 'What text should it have? Please limit to 3 characters.',
      validate: function (input) {
        const regex = /^[a-zA-Z0-9]{0,3}$/;
        if (regex.test(input)) {
          return true;
        } else {
          return 'Please enter 3 or less characters.';
        }
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What color should the text be?',
    },
    {
      type: 'input',
      name: 'textSize',
      message: 'How big should the text be?',
    },
    {
      type: 'input',
      name: 'fileName',
      message: 'What is the name of the file?',
    },
  ])
  .then((answers) => {
    console.log(answers);
    let shape;
    if (answers.shape === 'Triangle') {
      shape = new Triangle(answers.width, answers.height, answers.color, answers.text, answers.textColor, answers.textSize);
    }
    else if (answers.shape === 'Square') {
      shape = new Square(answers.height, answers.width, answers.color, answers.text, answers.textColor, answers.textSize);
    }
    else if (answers.shape === 'Circle') {
      shape = new Circle(answers.width, answers.color, answers.text, answers.textColor, answers.textSize);
    }


    const svg = shape.draw();
    const fileName = answers.fileName;
    const filePath = path.join(__dirname, 'examples', `${fileName}.svg`);
    fs.writeFile(filePath, svg, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

    const htmlPath = path.join(__dirname, 'examples', 'index.html');
    fs.readFile(htmlPath, 'utf8', (err, data) => {
      if (err) throw err;
      const newData = data.replace(/(<div class="svg-container">)([\s\S]*?)(<\/div>)/,
        `$1\n${svg}\n$3`);
      fs.writeFile(htmlPath, newData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    });
  });
