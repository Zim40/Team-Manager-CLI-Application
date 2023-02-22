const inquirer = require("inquirer");


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
// Generate card creates HTML
//  generateCard() {
//     const employeehtml = `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <link  rel="stylesheet"  href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
//       <title>Document</title>
//     </head>
//     <body>
      
//         <h1>Welcome</h1>
//         <div class="card" style="width: 18rem;">
//           <div class="card-body">
//             <h2 class="card-title">${this.name}</h2>
//             <h3 class="card-subtitle mb-2 text-muted">${this.id}</h3>
//             <a href="#" class="card-link">Email: ${this.email}</a>
//           </div>
//         </div>
      
//     </body>
//     </html>`

//   return employeehtml;
//  }
};


module.exports = Employee;