//write a function whos recive 2 numbers and return the bigger between then
/*
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
*/
function max(x, y) {
  //way 1
  //if (x > y) return x;
  //return y;
  //way 2
  // return x >y ? x : y;
  //way 3
  /*  const max2 = (x, y) => {
    return x > y ? x : y;
  }; */
  const max2 = (x, y) => (x > y ? x : y);
}
console.log(max2(10, 2));
