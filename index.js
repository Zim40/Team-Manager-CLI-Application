const inquirer = require("inquirer");
const managers = require("./lib/manager");
const Employee = require("./lib/employee.js");
const Engineer = require("./lib/employee.js");
const Intern = require("./lib/employee.js");

const option = [
    {name: 'Intern'},
    {name: 'Engineer'},
    {name: 'Finish Building Team'},
];



 inquirer
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
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter Managers employee I.D:',
            name: 'id', 
        },
        {
            type: 'input',
            message: 'Enter Managers Email address:',
            name: 'email',
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
            name: 'name',
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
        {
            type: 'list',
            message: 'Select Team Member:',
            name: 'selectedTeam',
            choices: option,
        },
        // Engineer Prompts
        {
            type: 'input',
            message: 'Enter Engineers name:',
            name: 'name',
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
        {
            type: 'list',
            message: 'Select Team Member:',
            name: 'selectedTeam',
            choices: ['Engineer', 'Intern', 'Finished selecting Team'],
        },
])
.then((answers) => {
//    Creates new employee(manager)
    const manager = new managers(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumb
    )
    // Creates HTML using generateCard method/ other roles need extended classes/
    const managerhtml = manager.generateCard();
    console.log("first", managerhtml);

    const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github,
    )
    const engineerhtml = engineer.generateEnginCard(Engineer)
    console.log( "second", engineerhtml);
})





module.exports = inquirer;
