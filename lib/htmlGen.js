const fs = require("fs");

function baseHtml() {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <title>Team Profiles</title>
    </head>
    
    <body>
        <header class="bg-secondary text-center text-light">
            <h1 class="fs-1">My Team</h1>
        </header>

        <div class="container">
            <div class="row">

    `
    fs.writeFile("./dist/index.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Base html written!")
};

function memberHtml(member, role) {
    let html = "";
    return new Promise(function(resolve, reject) {
        if (role === "Engineer") {
            html = `
            <div class="col-6">
                <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
                    <div class="bg-danger">
                        <h5 class="card-title text-white p-3">${member.name}</br> Engineer</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush border">
                            <li class="list-group-item border">ID: ${member.id}</li>
                            <li class="list-group-item border">Email: <a href="${member.email}">${member.email}</a></li>
                            <li class="list-group-item border">Github: <a href=https://github.com/${member.github} target="_blank">${member.github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        } else if (role === "Intern") {
            html = `
            <div class="col-6">
                <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
                    <div class="bg-danger ">    
                        <h5 class="card-title text-white p-3">${member.name}</br> Engineer</h5>
                    </div>    
                    <div class="card-body">
                        <ul class="list-group list-group-flush border">
                            <li class="list-group-item border">ID: ${member.id}</li>
                            <li class="list-group-item border">Email: <a href="${member.email}">${member.email}</a></li>
                            <li class="list-group-item border">School:${member.school}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        } else {
            html = `
            <div class="col-6">
                <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
                    <div class="bg-danger">    
                        <h5 class="card-title text-white p-3">${member.name}</br> Manager</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush border">
                            <li class="list-group-item border">ID: ${member.id}</li>
                            <li class="list-group-item border">Email: <a href="${member.email}">${member.email}</a></li>
                            <li class="list-group-item border">Office Number:${member.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        };
        fs.appendFile("./dist/index.html", html, function(err) {
            if (err) {
                return reject(err);
            };
            console.log("Member added!")
            return resolve();
        })
    })
};

function endHtml() {
    const html = `</div>
    </div>
    </body>
    </html>`;
    fs.appendFile("./dist/index.html", html, function(err) {
        if (err) {
            console.log(err)
        }
    });
    console.log("Your website is now ready!");
}

module.exports = {baseHtml, memberHtml, endHtml}