// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


let newP = document.createElement('p')
newP.textContent = "Hey I'm red!"
newP.style.color = 'red'
container.appendChild(newP)

let newh3 = document.createElement('h3')
newh3.textContent = "I'm a blue h3!"
newh3.style.color = 'blue'
container.appendChild(newh3)

let newDiv = document.createElement('div')
newDiv.style.border = 'solid 1px black'
newDiv.style.backgroundColor = 'pink'
let insideH1 = document.createElement('h1')
insideH1.textContent = "I'm inside a div!"
let insideP = document.createElement('p')
insideP.textContent = 'Me too!'


newDiv.appendChild(insideH1)
newDiv.appendChild(insideP)
container.appendChild(newDiv)

const btn = document.querySelectorAll("button");

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});




