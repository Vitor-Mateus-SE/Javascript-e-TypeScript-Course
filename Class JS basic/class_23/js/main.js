let form = document.querySelector(".form");
function calculate() {
  const weweightigh = form.querySelector(".weight");
  const height = form.querySelector(".height");
  let weightCalc = weight.value;
  let heightCalc = height.value;
  let calc = weightCalc / (heightCalc * heightCalc);
  let calc2 = weightCalc / (heightCalc * heightCalc);
  if (calc <= 18.5) {
    calc2 = "Underweight";
  } else if (calc > 18.5 && calc <= 24.9) {
    calc2 = "Normal weight";
  } else if (calc > 24.9 && calc <= 29.9) {
    calc2 = "Overweight";
  } else if (calc > 29.9 && calc <= 34.9) {
    calc2 = "Obesity grade 1";
  } else if (calc > 34.9 && calc <= 39.9) {
    calc2 = "Obesity grade 2";
  } else if (calc >= 40) {
    calc2 = "Obesity grade 3";
  }
  return alert(`Your actual IMC is ${calc} and is this ${calc2}`);
}
