const form = document.querySelector("#formId");
form.addEventListener("submit", function (e) {
  // e from event
  e.preventDefault();
  const inputWeight = e.target.querySelector("#weight");
  const inputHeight = e.target.querySelector("#height");

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (!weight) {
    setResult("Weight false", false);
    return;
  }
  if (!height) {
    setResult("Height false", false);
    return;
  }

  const imc = getImc(weight, height);
  const levelImc = getLevelImc(imc);
  const msg = `Your IMC is ${imc} (${levelImc}) `;
  setResult(msg, true);
});

function getImc(weight, height) {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

function getLevelImc(imc) {
  const level = [
    "Underweight",
    "Normal weight",
    "Overweight",
    "Obesity grade 1",
    "Obesity grade 2",
    "Obesity grade 3",
  ];

  if (imc >= 39.9) return level[5];
  if (imc >= 34.9) return level[4];
  if (imc >= 29.9) return level[3];
  if (imc >= 24.9) return level[2];
  if (imc >= 18.5) return level[1];
  if (imc < 18.5) return level[0];
}

function createP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";

  const p = createP();
  if (isValid) {
    p.classList.add("paragraphResultTrue");
  } else {
    p.classList.add("paragraphResultFalse");
  }
  p.innerHTML = msg;
  result.appendChild(p);
}
