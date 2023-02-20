const inquirer = require("inquirer");
const {Manager, Engineer, Intern} = require("./lib/manager");
// const {Engineer} = require("./lib/employee.js");

const team = [];
function generateManager () {
    inquirer
    .prompt ([
     
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
            name: 'managerOfficeNum',
        },
        
       
    ])
       .then((answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.managerOfficeNum
        )
        team.push(manager);
        addMember();
       })
}
function addMember () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Select Team Member:',
            name: 'selectedTeam',
            choices: ['Engineer', 'Intern', 'Finished selecting Team'],
        },
    ])
    .then((answers) => {
        if(answers.selectedTeam === 'Engineer') {
            generateEngineer();
        }else if(answers.selectedTeam === 'Intern'){
            generateIntern();
        }else{
            // This is where the generate html goes
            
            console.log(team);
        }
    })
}

generateManager();

function generateEngineer() {
    inquirer.prompt([
        // Engineer Prompts
        {
            type: 'input',
            message: 'Enter Engineers name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter Engineers employee I.D:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter Engineers Email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter GitHub Username:',
            name: 'github',
        },
    ])
        .then((engineerAnswers) => {
            const engineer = new Engineer(
                engineerAnswers.name,
                engineerAnswers.id,
                engineerAnswers.email,
                engineerAnswers.github,
            )
            team.push(engineer);
            addMember();
        })
}
function generateIntern () {
    inquirer.prompt ([
          {
            type: 'input',
            message: 'Enter Interns name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter Interns employee I.D:',
            name: 'id', 
        },
        {
            type: 'input',
            message: 'Enter Interns Email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter Interns School:',
            name: 'school',
        },
    ]) .then((answers) => {
        const intern = new Intern (
            answers.name,
            answers.id,
            answers.email,
            answers.github,
        )
        team.push(intern);
        addMember();
    })
   
}



// 
//        .then((answers) => {
//         if(answers.selectedTeam === 'Engineer') {
//             inquirer
//                 .prompt([
        
       
//         // Engineer Prompts
//         {
//             type: 'input',
//             message: 'Enter Engineers name:',
//             name: 'name',
//         },
//         {
//             type: 'input',
//             message: 'Enter Engineers employee I.D:',
//             name: 'engineersId', 
//         },
//         {
//             type: 'input',
//             message: 'Enter Engineers Email address:',
//             name: 'engineersEmail',
//         },
//         {
//             type: 'input',
//             message: 'Enter GitHub Username:',
//             name: 'engineersGitHub',
//         },
//         {
//             type: 'list',
//             message: 'Select Team Member:',
//             name: 'selectedTeam',
//             choices: ['Engineer', 'Intern', 'Finished selecting Team'],
//         },
//                 ])
//                 .then((engineerAnswers) => {
//                     const engineer = new Engineer(
//                         engineerAnswers.name,
//                         engineerAnswers.id,
//                         engineerAnswers.email,
//                         engineerAnswers.github,
//                     )
//                     const engineerhtml = engineer.generateCard()
//                     console.log( "second", engineerhtml);
//                 })
//                 }
//             })
        
       
// //          // Intern Prompts

//          {
//             type: 'input',
//             message: 'Enter Interns name:',
//             name: 'name',
//         },
//         {
//             type: 'input',
//             message: 'Enter Interns employee I.D:',
//             name: 'internId', 
//         },
//         {
//             type: 'input',
//             message: 'Enter Interns Email address:',
//             name: 'internEmail',
//         },
//         {
//             type: 'input',
//             message: 'Enter Interns School:',
//             name: 'internSchool',
//         },
//         {
//             type: 'list',
//             message: 'Select Team Member:',
//             name: 'selectedTeam',
//             choices: ['Engineer', 'Intern', 'Finished selecting Team'],
//         },
// ])
// .then((answers) => {
// //    Creates new employee(manager)
  
    
//     // Creates HTML using generateCard method/ other roles need extended classes/
//     const managerhtml = manager.generateCard();
//     console.log("first", managerhtml);

//     const engineer = new Engineer(
//         answers.name,
//         answers.id,
//         answers.email,
//         answers.github,
//     )
//     const engineerhtml = engineer.generateCard()
//     console.log( "second", engineerhtml);
// })





// module.exports = inquirer
