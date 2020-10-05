const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./assets/utils/employees/employee");
const Engineer = require("./assets/utils/employees/Engineer");
const Intern = require("./assets/utils/employees/intern");
const Manager = require("./assets/utils/employees/Manager");
const HTML = require("./assets/utils/generate.html");

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
  }