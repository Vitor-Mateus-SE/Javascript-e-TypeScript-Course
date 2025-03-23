/* 
do while, do something when other thing is true
do {
} while ( as long as a situation is true )
*/
let c = 1;
let sum = 0;
let readline = require("readline-sync");
let name = readline.question("name:");
do {
  let note = readline.questionFloat(`Note ${c}:`);
  while (note < 0 || note > 10) {
    note = readline.questionFloat("need to be between 0 and 10");
  }
  sum = sum + note;
  c++;
} while (c <= 4);
let mean = sum / 4;
console.log(`Student: ${name} Mean: ${mean.toFixed(1)}`);

/* when use while and do while: 
while has the condition on the start of the loop,
the do while, has the condition at the end, so he do that thing at least 1x
*/