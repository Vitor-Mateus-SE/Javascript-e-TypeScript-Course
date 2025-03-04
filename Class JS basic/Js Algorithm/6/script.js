/*

*/
let note1 = Number(prompt("put you first note"));
let note2 = Number(prompt("put you second note"));

let calculate = ((note1 + note2) / 2) * 100;
if (calculate >= 900) {
  console.log(
    `your medium note is ${calculate} and you has A, congratulations`
  );
} else if (calculate <= 890 && calculate >= 800) {
  console.log(
    `your medium note is ${calculate} and you has B, congratulations but you can do better`
  );
} else if (calculate <= 790 && calculate >= 700) {
  console.log(
    `your medium note is ${calculate} and you has C, :( you can do better`
  );
}else if (calculate <= 690 && calculate >= 600) {
  console.log(
    `your medium note is ${calculate} and you has D, :( you can do better`
  );
}else if (calculate <= 590 && calculate >= 500) {
  console.log(
    `your medium note is ${calculate} and you has E, :( you can do better`
  );
}else  {
  console.log(
    `your medium note F, :*( do better`
  );
}



