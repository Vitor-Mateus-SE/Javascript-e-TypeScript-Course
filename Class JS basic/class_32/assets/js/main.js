//write a function who recive a nubmer and return:
// if is divisible per 3 = Fizz
// if is divisible per 5 = Buzz
// if is divisible per 3 and 5 = FizzBuzz
//if isn´t divisible per 3 or 5 = return the number
//check if this is a nubmer
// use function with numbers starting from 0 and max is 100

/* function fizzBuzz(n) {
  if (n.typeoff != "number") {
    if (n < 0 || n > 100) {
      return console.log(
        `${n} is not a valible number, select one between 0 and 100`
      );
    }
    if (n % 3 === 0 && n % 5 != 0) {
      return console.log("Fizz");
    }
    if (n % 5 === 0 && n % 3 != 0) {
      return console.log("Buzz");
    }

    if (n % 5 === 0 && n % 3 === 0) {
      return console.log("FizzBuzz");
    }
    return console.log(n);
  }
}
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}; */
// upper is my code, lower is the teacher code :p
function fizzBuzz(number) {
  if (typeof number !== "number") return number + NaN;
  if (number % 5 === 0 && number % 3 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return number;
}
console.log("a", fizzBuzz("a"));
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
