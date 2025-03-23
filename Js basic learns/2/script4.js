let readline = require("readline-sync");

console.log("lanchonete:");
let pedido = readline.questionInt(
  "10 - x all \n 11 - bomb \n 12 - french fries"
);

switch (pedido) {
  case 10:
    console.log("lunch order x all");
    break;
  case 11:
    console.log("lunch order bomb");
    break;

  case 12:
    console.log("lunch order french fries");
    break;
  default:
    console.log("doesn´t have it");
}
