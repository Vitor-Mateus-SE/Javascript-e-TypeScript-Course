let readline = require("readline-sync");

let number = readline.questionInt("type a number");
if( number % 2 == 0 ){
    console.log(`${number} is a par`)
} else{
    console.log(`${number} is not a par`)

}
