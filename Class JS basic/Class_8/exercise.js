/* write this sentence using let or const, Vitor Mateus has 23 years old, weighs 80 kg and has 1.79 HighInM and
your IMC is (calculate)*/
const name = "Vitor Mateus";
const years = 23;
const heightInKg = 80;
const highInM = 1.79;
let imcCalculated = heightInKg / (highInM * highInM);
let yearBorn = 2024 - years;
/*console.log(
  name,
  "has",
  years,
  "old, wheighs",
  heightInKg,
  "kg and has",
  highInM,
  "HighInM and your IMC is ",
  imcCalculated,
  "and was born in ",
  yearBorn
); */
// using template strings
console.log(
  `${name} has ${years}, old, wheighs ${heightInKg}kg and has ${highInM} HighInM and your IMC is ${imcCalculated} and was born in ${yearBorn}`
);
