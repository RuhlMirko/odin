'use strict'

function plusSev(num) {
  return num + 7;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function lastLetter(str) {
  return str.charAt(str.length - 1);
}


console.log(plusSev(3)); // 10
console.log(multiply(10,2)); // 20 
console.log(capitalize('null')); // 19
console.log(lastLetter('hello')); // o
