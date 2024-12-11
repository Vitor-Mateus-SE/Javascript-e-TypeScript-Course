//  + - * /
let num1 = 2;
let num2 = 10;
console.log(num1 + num2);
num2 = "10";
console.log(num1 + num2);
num2 = 10;
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
// use ** for pothent
console.log(num1 ** num2);
// use % for rest
num1 = 10;
num2 = 3;
console.log(num1 % num2);
//use ++ for add 1
console.log(num2);
num2++;
console.log(num2);
num2++;
console.log(num2);
// use ++ before for do the add first than the count, use after for add after the count
let counter = 1;
console.log(counter++);
console.log(counter);
counter = 1;
console.log(++counter);
// use parseInt, parseFloat and (better ->) Number for make a string a number
let numN1 = 10;
let numN2 = parseInt("5");
console.log(typeof numN2);
numN2 = parseFloat("5.5");
console.log(typeof numN2);
numN2 = Number("5.5123213");
console.log(typeof numN2);
