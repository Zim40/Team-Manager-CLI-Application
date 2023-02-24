const inquirer = require("inquirer");
const Employee = require("./employee");



class Manager extends Employee {
    constructor(name, id, email, managerOfficeNum, selectedTeam) {
        super(name, id, email);
        this.managerOfficeNum = managerOfficeNum;
        this.selectedTeam = selectedTeam;
    }
    getOffice() { 
      return this.managerOfficeNum;
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
          <link rel="stylesheet" href="./style/style.css">
          <title>Team Manager</title>
        </head>
        
        <body>
        
          <h1>Welcome to the Team!</h1>
        <div class="container">
          <div class="row row-cols-1 row-cols-md-4 g-4">
            
              <div class="col col-6 col-md-3">
                <div class="card ">
                  <div class="card-body">
                    <h2 class="card-title">Manager</h2>
                    <p class="card-subtitle mb-2 text-muted">Name: ${this.name}</p>
                    <p class="card-subtitle mb-2 text-muted">Manager I.D: ${this.id}</p>
                    <p class="card-subtitle mb-2 text-muted">Office Number: ${this.getOffice()}</p>
                    <a href="mailto:${this.email}" class="card-link">Contact</a>
                  </div>
                </div>  
              </div>
          `
              
       
        return managerhtml;
        
    }
    
    
    
 }



class Engineer extends Employee {
    constructor(name, id, email, github, selectedTeam) {
        super(name, id, email);
        this.github = github;
        this.selectedTeam = selectedTeam;
    }
    getGithub() {
      return this.github
    }
   
    
    generateCard() {
        const engineerhtml = `
        <div class="col col-6 col-md-3">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Engineer</h2>
              <p class="card-subtitle mb-2 text-muted">Name: ${this.name}</p>
              <p class="card-subtitle mb-2 text-muted"> i.d: ${this.id}</p>
              <p class="card-subtitle mb-2 text-muted">Github: ${this.getGithub()}</p>
              <a href="mailto:${this.email}" class="card-link">Contact</a>
            </div>
          </div>
        </div>
          `
  
 
        return engineerhtml;
    }
 }



class Intern extends Employee {
    constructor(name, id, email, school, selectedTeam) {
        super(name, id, email);
        this.school = school;
        this.selectedTeam = selectedTeam;
    }
    getSchool(){
    return this.school;
    }

    
    generateCard() {
        const internhtml = `
        <div class="col col-6 col-md-3">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Intern</h2>
              <p class="card-subtitle mb-2 text-muted">Name: ${this.name}</p>
              <p class="card-subtitle mb-2 text-muted">i.d: ${this.id}</p>
              <p class="card-subtitle mb-2 text-muted">School: ${this.getSchool()}</p>
              <a href="mailto:${this.email}" class="card-link">Contact</a>
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
