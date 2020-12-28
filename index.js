const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
//const jest = require("jest");

//const Employee = require("./assets/utils/employees/employee");
const Engineer = require("./assets/utils/employees/Engineer");
const Intern = require("./assets/utils/employees/intern");
const Manager = require("./assets/utils/employees/Manager");
// const generate = require("./assets/utils/generate.html");

var uniqueId = 0;
var teamArray = [];

function promptUser(answers) {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "what is your role?",
            choices: ["Engineer", "Intern", "Manager"]
        },
    ]).then(function (res) {
        // should use switch case instead of if/else starting here
        console.log(res)
        if (res.role === "Engineer") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "github",
                    type: "input",
                    message: "What is your github Username?"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                }
            ]).then(function (engineerRes) {
                var newEngineer = new Engineer(engineerRes.name, engineerRes.email, uniqueId, engineerRes.github);
                uniqueId = uniqueId + 1; // could be "uniqueId++"
                console.log(newEngineer);
                // run promptUser (called recursion) so that you can add multiple Engineers and id changes incrementally
                teamArray.push(newEngineer);
                addUser();
                
            });

        } else if (res.role === "Intern") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
                {
                    name: "school",
                    type: "input",
                    message: "Where did you graduate from college?"
                }
            ]).then(function (internRes) {
                var newIntern = new Intern(internRes.name, internRes.email, uniqueId, internRes.school);
                uniqueId = uniqueId + 1; // could be "uniqueId++"
                console.log(newIntern)
                teamArray.push(newIntern);
                addUser();
            });
        } else if (res.role === "Manager") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
                {
                    name: "office",
                    type: "input",
                    message: "What is your office number?"
                }
            ]).then(function (managerRes) {
                var newManager = new Manager(managerRes.name, managerRes.email, uniqueId, managerRes.office);
                uniqueId = uniqueId + 1; // could be "uniqueId++"
                console.log(newManager);
                teamArray.push(newManager);
                addUser();
            });
        };
        // should use switch case instead of if/else up until this point

    })
        .catch(function (err) {
            console.log(err);
        });

};



function generateHTML() {
    // put html here
    
    console.log(teamArray)

    function renderManager() {

    };
    function renderIntern() {

    };
    function renderEngineer() {

    };

};

function addUser(){
    inquirer.prompt([
        {   
            name: "continue",
            message: "Do you want to add another team member?",
            type: "confirm"
        }
    ]).then(function(confirmRes){
        confirmRes.continue ? promptUser() : generateHTML()
    })
};




promptUser();