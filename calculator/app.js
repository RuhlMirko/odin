"use strict";
const diplay = "";

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, item) => acc + item, 0);
};

const multiply = function (nums) {
  return nums.reduce((acc, item) => (acc *= item), 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let product = 1;
  for (let i = 1; i <= a; i++) {
    product *= i;
  }
  return product;
};
