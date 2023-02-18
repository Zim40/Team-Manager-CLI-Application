const { default: inquirer } = require("inquirer");

const option = [
    {name: 'Intern'},
    {name: 'Engineer'},
    {name: 'Finish Building Team'},
];



const questions = inquirer
.prompt ([
    {
        type: 'confirm',
        message: 'Would you like to create your Team?',
        default: true,
        name: 'Team',

    },
    // Manager Prompts
    {
        type: 'input',
        message: 'Enter Managers name:',
        name: 'Manager',
    },
    {
        type: 'input',
        message: 'Enter Managers employee I.D:',
        name: 'managerId', 
    },
    {
        type: 'input',
        message: 'Enter Managers Email address:',
        name: 'mangerEmail',
    },
    {
        type: 'input',
        message: 'Enter office number:',
        name: 'mangerOfficeNum',
    },
    // Team Selection
    {
        type: 'list',
        message: 'Select Team Member:',
        name: 'selectedTeam',
        choices: option,
    },
    // Intern Prompts
    {
        type: 'input',
        message: 'Enter Interns name:',
        name: 'Intern',
    },
    {
        type: 'input',
        message: 'Enter Interns employee I.D:',
        name: 'internId', 
    },
    {
        type: 'input',
        message: 'Enter Interns Email address:',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'Enter Interns School:',
        name: 'internSchool',
    },
    // Engineer Prompts
    {
        type: 'input',
        message: 'Enter Engineers name:',
        name: 'engineer',
    },
    {
        type: 'input',
        message: 'Enter Engineers employee I.D:',
        name: 'engineersId', 
    },
    {
        type: 'input',
        message: 'Enter Engineers Email address:',
        name: 'engineersEmail',
    },
    {
        type: 'input',
        message: 'Enter GitHub Username:',
        name: 'engineersGitHub',
    },
    

])