function showHour() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}
/* setInterval(function () {
  console.log(showHour());
}, 1000); */
const timer = setInterval(function () {
  console.log(showHour());
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 10000);

setTimeout(function () {
  console.log("Hello World");
}, 10000);
