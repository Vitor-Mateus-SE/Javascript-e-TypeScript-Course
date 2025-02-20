//Algorithm is instructions in a order and logic for solve a problem
// make a script for solve second gradu equation
let a = Number(prompt("number one"));
let b = Number(prompt("number two"));
let c = Number(prompt("number three"));

let delta = b ** 2 - 4 * a * c;
console.log(delta);

if (delta > 0) {
  console.log(`delta is equal ${delta}, exists two numbers`);
  let raizDelta = Math.sqrt(delta);
  let cal1 = (-b + raizDelta) / (2 * a);
  let cal2 = (-b - raizDelta) / (2 * a);
  console.log(cal1, cal2);
} else if (delta === 0) {
  console.log(`Delta is 0, ${delta} so only one root`);
} else {
  console.log(
    `delta value is ${delta} and dont exist resulth for negative delta`
  );
}

