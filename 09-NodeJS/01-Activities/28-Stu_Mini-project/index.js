const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([

{
    type: "input",
    message: "What is your name, human?",
    name: "Human_Name",
},

{
    type: "input",
    message: "Where are you located within the local solar system?",
    name: "Location",
},

{
    type: "input",
    message: "Tell me about yourself in the form of a biography.",
    name: "Bio",
},

{
    type: "input",
    message: "What is your LinkedIn URL?",
    name: "LinkedIn",
},

{
    type: "input",
    message: "What is your GitHub URL?",
    name: "GitHub",
}

]).then((response)=> {

console.log(response);

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
    <body>
        <h1 class="text-center p-4">Hi, My name is {response.name}</h1>
        <div class="d-flex justify-content-center">
            <div class="card" style="width: 18rem">
                <div class="card-body">
                    <h5 class="card-title">{response.name}</h5>
                    <p class="card-text">{response.bio}</p>
                    <p class="card-text">I live in {response.location}</p>
                    <a href="{response.LinkedInURL}" class="btn btn-primary">LinkedIn</a>
                    <a href="{response.GitHubURL}" class="btn btn-primary">GitHub</a>
                </div>
            </div>
        </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
</html>
`

})