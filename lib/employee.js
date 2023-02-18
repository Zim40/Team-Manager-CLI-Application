const inquirer = require("inquirer");


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
// Generate card creates HTML
 generateCard() {
    const employeehtml = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${this.id}</h6>
      <a href="#" class="card-link">Email: ${this.email}</a>
    </div>
  </div>`

  return employeehtml;
 }
};


module.exports = Employee;