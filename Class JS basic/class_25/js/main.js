//const threeHour = 60 * 60 * 3 * 1000;
//const oneDay = 60 * 60 * 24 * 1000;
//const date = new Date(0 + threeHour + oneDay); //01/01/1970 Timestamp unix
//year, month, day, hour, minute, seconds, ms (all numbers)
// and months start from 0, 0-11
//const date = new Date(2025, 9, 11, 15, 14, 60);
//const date = new Date("2025-10-11 12:00:00");
/*
const date = new Date("2025-10-11 12:30:15.50");
console.log("Day", date.getDate());
console.log("Month", date.getMonth() + 1); // start from 0, 0-11
console.log("Year", date.getFullYear());
console.log("hour", date.getHours());
console.log("minutes", date.getMinutes());
console.log("seconds", date.getSeconds());
console.log("ms", date.getMilliseconds());
console.log("day week", date.getDay()); //0 is sunday and 6 is saturday
console.log(date.toString());
//console.log(Date.now());

const date2 = new Date(1744627560888);
console.log(date2.toString());
*/
function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`;
}
function dateformat(date) {
  const day = zeroLeft(date.getDate());
  const month = zeroLeft(date.getMonth() + 1);
  const year = zeroLeft(date.getFullYear());
  const hour = zeroLeft(date.getHours());
  const minute = zeroLeft(date.getMinutes());
  const seconds = zeroLeft(date.getSeconds());
  return `${day}/${month}/${year} ${hour}:${minute}:${seconds}`;
}
const dateFromFunction = new Date();
const dateBrasil = dateformat(dateFromFunction);
console.log(dateBrasil);
