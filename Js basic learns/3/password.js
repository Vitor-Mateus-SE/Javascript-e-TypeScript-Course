let readline = require("readline-sync");
let correctPassword = 123;

for (let c = 1; c <= 3; c++) {
  let password = readline.question("Put the password>");
  if (password == correctPassword) {
    console.log("Succefull login");
    break;
  } else if (password != correctPassword) {
    console.log("isn´t the correct password :(");
  }
  if (password != correctPassword && c == 3) {
    console.log("blocked, call the adm");
  }
}
