let varA = "A"; //b
let varB = "B"; //C
let varC = "C"; //A

console.log(varA, varB, varC);
/*
let changeA = varA;
let changeB = varB;
let changeC = varC;

varA = changeB;
varB = changeC;
varC = changeA;

console.log(varA, varB, varC);
*/
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
