const inquirer = require("inquirer");
const Employee = require("./employee");
const option = [
    {name: 'Intern'},
    {name: 'Engineer'},
    {name: 'Finish Building Team'},
];

class Manager extends Employee {
    constructor(name, id, email, managerOfficeNum) {
        super(name, id, email);
        this.managerOfficeNum = managerOfficeNum;
    }
  
    generateCard() {
        const managerhtml =`
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
          <title>Document</title>
        </head>
        
        <body>
        
          <h1>Welcome</h1>
          
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col"></div>
               <div class="card">
                  <div class="card-body">
                    <h2 class="card-title">Manager</h2>
                    <p class="card-subtitle mb-2 text-muted">Name: ${this.name}</p>
                    <p class="card-subtitle mb-2 text-muted">Manager I.D: ${this.id}</p>
                    <p class="card-subtitle mb-2 text-muted">Office Number: ${this.managerOfficeNum}</p>
                    <a href="#" class="card-link">Email: ${this.email}</a>
                  </div>
               </div>
             
              `
       
        return managerhtml;
        
    }
    
    
 }



class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    
    generateCard() {
        const engineerhtml = `
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Engineer</h2>
              <p class="card-subtitle mb-2 text-muted">Name: ${this.name}</p>
              <p class="card-subtitle mb-2 text-muted"> i.d: ${this.id}</p>
              <p class="card-subtitle mb-2 text-muted">Github: ${this.github}</p>
              <a href="#" class="card-link">Email: ${this.email}</a>
            </div>
          </div>
        </div>
          `
  
 
        return engineerhtml;
    }
 }



class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
    }
    getSchool(){
    return this.school
    }
    
    generateCard() {
        const internhtml = `
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Intern</h2>
              <p class="card-subtitle mb-2 text-muted">Name: ${this.name}</p>
              <p class="card-subtitle mb-2 text-muted">i.d: ${this.id}</p>
              <p class="card-subtitle mb-2 text-muted">School: ${this.school}</p>
              <a href="#" class="card-link">Email: ${this.email}</a>
            </div>
          </div>
        </div>
        
   `
            return internhtml;
    }
 }

module.exports = { Manager,
 Engineer,
 Intern,
 
}
