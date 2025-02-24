/*
Operadores Relacionais
> = bigger
< = lesser
>= = bigger or equal
<= =lesser or equal
= = equal
<> = diff from
*/
/*
Operadores Lógicos
and && (two values trues) 
or || (one or other true)
not ! (inversion)
*/

let l1 = prompt("digite o valor 1");
let l2 = prompt("write the second value");
let l3 = prompt("write the thirsd value");

if (l1 == l2 && l2 == l3) {
  console.log("They´re all equal");
} else if (l1 != l2 && l2 != l3 && l3 != l1) {
  console.log("They´re all diff");
}
else if(l1 < (l2+l3) && l2 < (l1+l3) && l3 < (l1+l2)){
    console.log("Thats a triangle")
}
