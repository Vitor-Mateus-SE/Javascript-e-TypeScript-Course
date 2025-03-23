let readline = require("readline-sync");
let number1 = readline.questionFloat("put the first number:");

for (let c = 1; c <= 10; c++) {
  let calculate = c * number1;
  console.log(`${c} x ${number1} = ` + calculate);
}
