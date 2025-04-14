//(ternary operation)  ? :    (condition) ? "valor for true" : "value for false"
const pontUser = 1999;
const userLevel = pontUser >= 1000 ? "User Vip" : "User Not a vip";

const userColor = null;
const defaultColor = userColor || "red";
console.log(userLevel, defaultColor);
/*
if (pontUser >= 1000) {
  console.log("User Vip");
} else {
  console.log("User not a Vip");
}
*/
