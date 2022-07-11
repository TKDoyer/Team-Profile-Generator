const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const managerPrompts = require('./ProfilePrompts/Questions.js');
const engineerPrompts = require('./ProfilePrompts/Questions.js');
const internPrompts = require('./ProfilePrompts/Questions.js');

function init() {
    inquirer.prompt(managerPrompts, internPrompts, engineerPrompts).then(answer => {
        console.log(answer)
    })

};

init();

function writeToFile(fileName, reject) {
    fs.writeFile(error => {
        if (error) {
            console.log("An error has occurred");
            return callback(error);
        }
    })
};