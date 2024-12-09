// type of data, string, number, undefined, null, boolean
const name = "Vitor";
const name1 = "Vitor";
const name2 = `Vitor`;
const num1 = 10; //number
const num2 = 10.52; //number
let nameStudent; //undefined = don´t have anyone local in memory
let lastNameStudent = null; // Null -> don´t habe anyone local in memory too
const pass = (boolean = true); //just true or false
const pass1 = (boolean = false); //just true or false
// can use typeof (let) for see what type is
console.log(typeof num1, num1);
console.log(typeof name, name);

let a = 2;
let b = a;
console.log(a, b);
a = 3;
console.log(a, b);
b = 4;
console.log(a, b);
