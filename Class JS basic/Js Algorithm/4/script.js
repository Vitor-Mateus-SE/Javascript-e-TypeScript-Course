/*

--- know idade
let ageActual = prompt("Em que anos nós estamos?");
let ageBorn = prompt("Em que ano você nasceu");

let age = ageActual - ageBorn;
console.log(`your age is ${age}`);

--- know transfer dolar to real
let oneDolar = Number(5.73);
let real = Number(prompt("how mutch Money I will transform to dolar?"));
let change = real / oneDolar;
console.log(change)

--- know temperature firenh to celsius
let firenh = Number(prompt("Qual a temperatura atual?"));
let calculateCelsius = (firenh - 32) / 1.8;
console.log(
  `Temperature in Firehaint is ${firenh} and in Celsius is ${calculateCelsius} `
);

--- know tax value
let preco = Number(prompt("whats the produtcts value?"));
let imposto = (preco * 60) / 100;
let precoTotal = preco + imposto;
console.log(
  `the impostos will be ${imposto} and the total value is ${precoTotal} `
);
*/
let valueTake = Number(prompt("how mutch you wanna?"));
let parcelate = Number(prompt("how mutch time you wanna to pay it?"));
let taxa = (valueTake * 20) / 100;
let valueTotal = taxa + valueTake;
let taxaPerMonth =  valueTotal / parcelate;
console.log(`You gonna take ${valueTake} and gonna pay at tottal ${valueTotal} in ${parcelate}, this is gonna be ${taxaPerMonth} per month`)