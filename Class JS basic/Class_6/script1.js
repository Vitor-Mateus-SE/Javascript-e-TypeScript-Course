// make a ICM calculate
const name = prompt("Whats your name?");
const age = prompt("How old are you?");
const height = prompt("whats your actual height? (just 2 numbers, kg");
const hight = prompt("whats your hight? (in m with . please)");

let actualAge = 2024 - age;
let icm = height / (hight * hight);
console.log(`${name}, born in ${actualAge} and your actual icm is ${icm}`);
