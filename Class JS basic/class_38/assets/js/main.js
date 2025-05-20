/*function func() {
  let total = 0;
  for (let argument of arguments) {
    total += argument;
  }
  console.log(total);
}
func(1, 2, 3, 4, 5, 6, 7,"a","b","c");
 */
function func(...args){
  console.log(args);
}
func('+',1,20,30,50,40)