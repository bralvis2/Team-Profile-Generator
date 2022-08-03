const fs = require('fs');
const { prompt } = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = []
// Array of Prompts
function startApp() {
    // After adding employee, asks to add more or to be done.
    function newEmployee() {
        prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Select which employee role you would like to add.',
                choices: ['Engineer', 'Intern','Done']

            }
        ]).then((choice) => {
             // compares answer to a swtich statement to add another employee
            switch (choice.role) {
                case 'Engineer':
                    addEngineer()
                    break;
                case 'Intern':
                    addIntern()
                    break;
                case 'Done':
                    buildTeam()
                    break;
            }
        })

    }

 // Manager function using inquierer to ask prompts. 
    const addManager = () => {
        prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter the manager's name.",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter the manager's ID number.",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the manager's email.",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Enter the manager's office number.",
            }
        ]).then(managerInfo => {
            // adds manager as a new constant with new info from user
            const manager = new Manager(managerInfo.name, managerInfo.Id, managerInfo.email, managerInfo.OfficeNumber)
            // Pushes answers into an array
            teamArray.push(manager)
             // compares answer to a swtich statement above to add another employee
            newEmployee()
        })
    }
 
    const addEngineer = () => {
        prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the engineer's ID number.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's github.",
        },
        
    ]).then(engineerInfo => {
        const engineer = new Engineer(engineerInfo.name, engineerInfo.Id, engineerInfo.email, engineerInfo.github)
        teamArray.push(engineer)
        newEmployee()
    })

}

    const addIntern = () => 
    prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the intern's ID number.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email.",
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school.",
        },
    ]).then(internInfo => {
        const intern = new Intern (internInfo.name, internInfo.Id, internInfo.email, internInfo.school)
        teamArray.push(intern)
        newEmployee()
    })
    
    addManager()

}
startApp()


