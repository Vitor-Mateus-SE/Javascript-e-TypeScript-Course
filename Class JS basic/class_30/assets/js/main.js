//write a function whos recive 2 numbers and return the bigger between then

function bigger() {
  const num1 = Math.random().toFixed(3);
  const num2 = Math.random().toFixed(3);
  if (num1 > num2) {
    console.log(`${num1} is bigger than ${num2}`);
  } else if ((num1 = num2)) {
    bigger();
  } else {
    console.log(`${num2} is bigger than ${num1}`);
  }
}
bigger();
