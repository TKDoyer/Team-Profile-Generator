const managerPrompts = [
    {
        type: 'input',
        message: 'Manager Name?',
        name: 'name',
    }, {
        type: 'input',
        message: 'ID?',
        name: 'ID',
    }, {
        type: 'input',
        message: 'Email?',
        name: 'Email',
    }, {
        type: 'input',
        message: 'Office Number?',
        name: 'Office Number',
    }
]

module.exports = managerPrompts

const engineerPrompts = [

    {
        type: 'input',
        message: 'Employee Name?',
        name: 'name',
    }, {
        type: 'input',
        message: 'ID?',
        name: 'ID',
    }, {
        type: 'input',
        message: 'Email?',
        name: 'Email',

    }, {
        type: 'input',
        message: 'Github Username?',
        name: 'Github Username',
    }
]
module.exports = engineerPrompts;

const internPrompts = [
    {
        type: 'input',
        message: 'Intern Name?',
        name: 'name',
    }, {
        type: 'input',
        message: 'ID?',
        name: 'ID',
    }, {
        type: 'input',
        message: 'Email?',
        name: 'Email',
    }, {
        type: 'input',
        message: 'School?',
        name: 'School',
    }
];
module.exports = internPrompts