//creating functions
function hello(name) {
  return `Good morning ${name}`;
}
let client = hello("Vitor");
console.log(client);

function sum(x = 1, y = 1) {
  const result = x + y;
  return result;
}
const result = sum(10, 5);
console.log(result);
console.log(sum());

//second way to create
const root = function (n) {
  return n ** 0.5;
};
console.log(root(9));

//third way, more advanced actually, the arrow function, easyleer
const root2 = n => {n ** 0.5};
console.log(root2(9));
