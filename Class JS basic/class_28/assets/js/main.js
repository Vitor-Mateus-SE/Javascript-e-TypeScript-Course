let parag = document.querySelector(".paragraph");
let pS = document.querySelectorAll("p");

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;
//rgb(1, 67, 129)

for (let p of pS) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "white";
}
