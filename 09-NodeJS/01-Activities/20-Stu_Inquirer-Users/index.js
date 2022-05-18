const inquirer = require('inquirer');
const CheckboxPrompt = require('inquirer/lib/prompts/checkbox');

inquirer.prompt([
    {
        type: "input",
        name: "Human_Name",
        message: "What do humans call you?",
    },
    {
        type: "checkbox",
        name: "languages",
        message: "Whish of the three real languages have you learned?",
        choices: ["English", "British", "Australian"]
    },
    {
        type: "list",
        name: "communication",
        message: "What is your prefered method of communication with other humans?",
        choices: ["Texting", "Calling", "Telepathy", "Divide and conquer"],
    }
]).then((response)=>{

// console.log(Object.values[0])

});