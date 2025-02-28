/*
do a progam to see if a person has 18 and can drive or no

alert("test");
let born = Number(prompt("put the year when you born"));
let age = 2025;

let ageCalculate = age - born;
if ((ageCalculate) >= 18) {
  console.log(`You has ${ageCalculate} years and can drive`);
} else {
  console.log(`You has ${ageCalculate} years and can not drive :(`);
}
Now do a program who calculate if a student pass with 7
*/
let note1 = Number(prompt("put you first note"))
let note2 = Number(prompt("put you second note"))

let calcuNote = (note1 + note2) / 2;

if(calcuNote >= 7){
  console.log(`Contratulations your note is ${calcuNote} and you pass`)
}
else{
  console.log(`your note is ${calcuNote} and you not pass :(`)
}