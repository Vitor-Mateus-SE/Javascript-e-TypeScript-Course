/*
when use if else or switch
use if else when need a true or false result.
use switch when has choose options like numbers, names etc. 
-----------------------------------------------
while, for the limit we use a (var counter)
Var counter is

let start = 1;
while (start <= 10) {
  console.log(start);
  start++;
}
*/
let c = 1;
let readline = require("readline-sync");
let name = readline.question("Name:");
let sum = 0;

while (c <= 4) {
  let note = readline.questionFloat(`note ${c}`);
  sum += note;
  c++;
  console.log(sum);
}
let media = sum / 4;
console.log(media);
