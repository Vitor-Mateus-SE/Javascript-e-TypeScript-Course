let readline = require("readline-sync");
let sex = readline.question(
  "Whats is your sex: \n 'M' for male \n and \n 'F' for female "
);
let sexUpper = sex.toUpperCase();
switch (sexUpper) {
  case "F":
    console.log("Sex Feminine");
    break;
  case "M":
    console.log("Sex Masculine");
    break;
  default:
    console.log("You are a helicopter?");
}
