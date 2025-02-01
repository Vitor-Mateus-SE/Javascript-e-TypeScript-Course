let varA = "A"; // finger (or pointer) to B
let varB = "B"; // finger (or pointer) to C
let varC = "C"; // finger (or pointer) to A
console.log(varA, varB, varC);
const newVarA = varA;
const newVarB = varB;
const newVarC = varC;
varA = newVarB;
varB = newVarC;
varC = newVarA;
console.log(varA, varB, varC);
//or use this new method
// [varA, varB, varC] = [varB, varC, varA];
