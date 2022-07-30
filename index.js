const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Array of Prompts
const startApp = 
        {
            type: 'list',
            name: 'Role',
            message: 'Let us start building your team. Select which employee role you would like to begin adding.',
            choices: ['Manager', 'Engineer', 'Intern']

        };


const addManager = [
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID number.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the employee's office number.",
        },
        {
            type: 'list',
            name: 'add more',
            message: 'Select which employee role you would like to add.',
            choices: ['Manager', 'Engineer', 'Intern', "I'm done building my team"]
        }
    ];

    const addEngineer = [
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID number.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's github.",
        },
        {
            type: 'list',
            name: 'add more',
            message: 'Select which employee role you would like to add.',
            choices: ['Manager', 'Engineer', 'Intern', "I'm done building my team"]
        }
    ];

    const addIntern = [
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID number.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email.",
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the employee's school.",
        },
        {
            type: 'list',
            name: 'add more',
            message: 'Select which employee role you would like to add.',
            choices: ['Manager', 'Engineer', 'Intern', "I'm done building my team"]
        }
    ];