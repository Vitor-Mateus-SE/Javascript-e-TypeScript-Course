/*
primitive (immutable values)- strings, number, boolean,undefined,null - value
example
let a = "Vitor";
let b = a;
console.log(a,b) will return Vitor Vitor
if I change the a letter, b will be the same:
a = "Mateus"
console.log(a,b) will return Mateus Vitor

and I cant change a value like this:
a[0] = "L" - this don´t change the "Vitor" value

reference(mutables) - array, object, function
let a = [1,2,3];
let b = a;
console.log(a,b) will return [1,2,3] [1,2,3]

if i do a.push(4), will change there both because in this cause b only os pointing to a value, they are the ``same´´ variable
console.log(a,b) will return [1,2,3,4] [1,2,3,4]

and if i make b.pop() who will remove the number 4, will affect a and b 
console.log(a,b) will return [1,2,3] [1,2,3]

for copy a value you use 
let a = [1,2,3];
let b = [...a];
*/
