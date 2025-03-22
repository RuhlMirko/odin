'use strict'

const addBtn = document.querySelector('button')
const unorgList = document.querySelector('ul')
const deleteBtns = []
let itemList = document.querySelectorAll('li')

addBtn.addEventListener('click', function () {
    let newLi = document.createElement('li');
    let newBtn = document.createElement('button');
    newBtn.textContent = 'Delete';
    newBtn.setAttribute('class', 'delete');
    newLi.textContent = document.querySelector('input').value;

    // Append the new elements
    unorgList.appendChild(newLi);
    newLi.appendChild(newBtn);

    // Add the event listener directly to the new button
    newBtn.addEventListener('click', () => {
        console.log(newLi); // Log the corresponding list item
        newLi.remove(); // Remove the list item when the button is clicked
    });
});

deleteBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
        console.log(itemList[index]);
    });
})

