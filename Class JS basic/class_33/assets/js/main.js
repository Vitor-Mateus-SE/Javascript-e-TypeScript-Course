/* try {
  console.log(dontexist);
} catch (err) {
  console.log("dont exist");
  console.log(err);
} */

function sum(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new ReferenceError("x and y need to be numbers");
  }
  return x + y;
}
try {
  console.log(sum(2, 2));
  console.log(sum(2, "2"));
} catch (error) {
 // console.log(error);
}
