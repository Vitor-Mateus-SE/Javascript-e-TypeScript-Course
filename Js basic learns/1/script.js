let readline = require("readline-sync");

let userName = readline.question("Hi, may I can get your name?");

console.log(`your name is ${userName}`);

let number = readline.questionFloat("How old are you?");

console.log(`your age is ${number}`);
