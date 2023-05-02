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
    when: (answers) => answers.shape !== 'Circle',
  },
  {
    type: 'input',
    name: 'height',
    message: 'How tall should it be?',
    when: (answers) => answers.shape !== 'Circle',
  },
  {
    type: 'input',
    name: 'radius',
    message: 'How big should the radius be?',
    when: (answers) => answers.shape === 'Circle',
  },
  {
    type: 'input',
    name: 'color',
    message: 'What color should it be?',
  },
  {
    type: 'input',
    name: 'text',
    message: 'What text should it have?',
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
    name: 'x1',
    message: 'What is the x1 coordinate?',
    when: (answers) => answers.shape !== 'Circle',
  },
  {
    type: 'input',
    name: 'y1',
    message: 'What is the y1 coordinate?',
    when: (answers) => answers.shape !== 'Circle',
  },
  {
    type: 'input',
    name: 'x2',
    message: 'What is the x2 coordinate?',
    when: (answers) => answers.shape === 'Triangle',
  },
  {
    type: 'input',
    name: 'y2',
    message: 'What is the y2 coordinate?',
    when: (answers) => answers.shape === 'Triangle',
  },
  {
    type: 'input',
    name: 'x3',
    message: 'What is the x3 coordinate?',
    when: (answers) => answers.shape === 'Triangle',
  },
  {
    type: 'input',
    name: 'y3',
    message: 'What is the y3 coordinate?',
    when: (answers) => answers.shape === 'Triangle',
  },
  {
    type: 'input',
    name: 'cx',
    message: 'What is the x coordinate?',
    when: (answers) => answers.shape === 'Circle',
  },

  {
    type: 'input',
    name: 'cy',
    message: 'What is the y coordinate?',
    when: (answers) => answers.shape === 'Circle',
  },
  {
    type: 'input',
    name: 'fileName',
    message: 'What is the name of the file?',
  },
  ])
  .then((answers) => {
    console.log(answers);
  })