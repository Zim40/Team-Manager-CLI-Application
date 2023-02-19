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
        this.officeNumber = managerOfficeNum;
    }


    getOfficeNumber() {
        return this.officeNumber;
    }




    generateManagerCard() {
        const managerhtml = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title">Manager: ${this.name}</h2>
      <h3 class="card-subtitle mb-2 text-muted">Manager I.D: ${this.id}</h3>
      <h3 class="card-subtitle mb-2 text-muted">Manager Office Number: ${this.officeNumber}</h3>
      <a href="#" class="card-link">Email: ${this.email}</a>
    </div>
  </div>`;
        return managerhtml;
        
    }
    
}
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    generateEnginCard() {
        const engineerhtml = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title">Manager: ${this.name}</h2>
      <h3 class="card-subtitle mb-2 text-muted">Manager I.D: ${this.id}</h3>
      <h3 class="card-subtitle mb-2 text-muted">Manager Office Number: ${this.github}</h3>
      <a href="#" class="card-link">Email: ${this.email}</a>
    </div>
  </div>`;
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
    
    generateInterCard() {
        const internhtml = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">Manager: ${this.name}</h2>
          <h3 class="card-subtitle mb-2 text-muted">Manager I.D: ${this.id}</h3>
          <h3 class="card-subtitle mb-2 text-muted">Manager Office Number: ${this.school}</h3>
          <a href="#" class="card-link">Email: ${this.email}</a>
        </div>
      </div>`;
            return internhtml;
    }
}
module.exports = Manager,
module.exports = Engineer,
module.exports = Intern
