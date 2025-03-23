let readline = require("readline-sync");

let name = readline.question("your name");
let not1 = readline.questionFloat("note 1:");
let not2 = readline.questionFloat("note 2:");
let media = (not1 + not2) / 2;

if (media >= 6) {
  console.log(` ${name} your medium is ${media} and you pass`);
} else if (media <= 5 && media != 0) {
  console.log(`${name} your medium is ${media} and you not pass but is close`);
} else {
  console.log("Who are you?");
}
