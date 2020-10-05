const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./assets/utils/employees/employee");
const Engineer = require("./assets/utils/employees/Engineer");
const Intern = require("./assets/utils/employees/intern");
const Manager = require("./assets/utils/employees/Manager");
const HTML = require("./assets/utils/generate.html");

//Write out the file
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamstr = ``;


async function main() {
     try {
          await prompt()
          //input length 
          for (let i = 0; i < teamArray.length; i++) {
               
               teamstr = teamstr + html.generateCard(teamArray[i]);
          }

          let finalHTML = html.generateHTML(teamstr)
          //Log input
          console.log(teamstr)
          //execute input
          writeFileAsync("", finalHTML)
          //create HTML file

     } catch (err) {
          return console.log(err);
     }

};
// Questions and Prompts
async function prompt() {
    let responseDone = "";
    do {
         try {
              response = await inquirer.prompt([

                   {
                        type: "input",
                        name: "name",
                        message: "What is the employee's name?: "
                   },
                   {
                        type: "input",
                        name: "id",
                        message: "Enter the employee's ID: "
                   },
                   {
                        type: "input",
                        name: "email",
                        message: "Enter the employee's email address: "
                   },
                   {
                        type: "list",
                        name: "role",
                        message: "What what is the employee's role:",
                        choices: [
                             "Engineer",
                             "Intern",
                             "Manager"
                        ]
                   }
              ]);

              let inputofuser = ""


              if (response.role === "Engineer") {
                   inputofuser = await inquirer.prompt([{
                        type: "input",
                        name: "x",
                        message: "What is the employee's github username?:",
                   }, ]);

                   const engineer = new Engineer(response.name, response.id, response.email, inputofuser.x);
                   teamArray.push(engineer);
              } else if (response.role === "Intern") {
                   inputofuser = await inquirer.prompt([{
                        type: "input",


                        name: "x",
                        message: "What school is the employee attending?:",
                   }, ]);

                   const intern = new Intern(response.name, response.id, response.email, inputofuser.x);
                   teamArray.push(intern);
              } else if (response.role === "Manager") {
                   inputofuser = await inquirer.prompt([{
                        type: "input",
                        name: "x",
                        message: "What is the employee's office number?:",
                   }, ]);

                   const manager = new Manager(response.name, response.id, response.email, inputofuser.x);
                   teamArray.push(manager);
              }
         } catch (err) {
              return console.log(err);
         }
         console.log(teamArray)

         responseDone = await inquirer.prompt([{
              type: "list",
              name: "finish",
              message: "Do you want to continue?: ",
              choices: [
                   "Yes",
                   "No"
              ]
         }, ]);


    } while (responseDone.finish === "Yes");
}

