/*function sayPhrase(start) {
  function sayRest(rest) {
    return start + " " + rest;
  }
  return sayRest;
}

const helloWorld = sayPhrase("hello");
const rests = helloWorld("world");
console.log(rests);

 
function duplicate(n) {
  return n * 2;
}
function triples(n) {
  return n * 3;
}
function quadruple(n) {
  return n * 4;
}*/
function createMultiplier(multi) {
  return function (n) {
    return n * multi;
  };
}
const x2 = createMultiplier(2);
const x3 = createMultiplier(3);
const x4 = createMultiplier(4);
//called function closer
console.log(x2(2));
console.log(x3(2));
console.log(x4(2));
