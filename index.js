const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const {baseHtml, memberHtml, endHtml} = require("./lib/htmlGen.js")

function init() {
    baseHtml();
    addManager();
}

function addManager () {
    inquirer.prompt([{
        message: "Enter team manager name.",
        name: "name"
    },
    {
        message: "Enter employee id",
        name: "id"
    },
    {
        message: "Enter employee email address",
        name: "email"
    },
    {
        message: "Enter office number",
        name: "officeNumber"
    }
    ])
    .then(function({name, id, email, officeNumber}) {
        let manager = new Manager(name, id, email, officeNumber)
        memberHtml(manager)
            .then(memberPrompt());
    })
}


function memberPrompt() {
    inquirer.prompt([{
        type: "confirm", 
        message: "Add more members?",
        default: false,
        name: "moreMembers"
    }])
    .then(function({moreMembers}) {

        if (moreMembers === true) {
            addMember();
        } else {
            endHtml();
        }
    })
}

function addMember () {
    inquirer.prompt([
        {
            message: "Enter team member name.",
            name: "name"
        },
        {
        type: "list",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern"
        ],
        name: "role"
        },
        {
            message: "Enter employee id",
            name: "id"
        },
        {
            message: "Enter employee email address",
            name: "email"
        }
    ])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "Github username";
        } else {
            roleInfo = "School name";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        }])
        .then(function({roleInfo}) {
            let member;
            if (role === "Engineer") {
                member = new Engineer(name, id, email, roleInfo);
            } else {
                member = new Intern(name, id, email, roleInfo);
            }
            memberHtml(member, role);
            memberPrompt();
        }) 
    })
}




init()