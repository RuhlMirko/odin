'use strict'

// selects the #container div (don't worry about the syntax, we'll get there)
const container = document.querySelector("#container");
// selects the .controls div
const controls = document.querySelector(".controls");
// selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);  // <div class="display"></div>



