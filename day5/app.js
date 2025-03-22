'use strict'
const choices = ['rock', 'paper', 'scissors']
const cpuDisplay = document.querySelector('#cpu')
const playerMenu = document.querySelector('.player')
/*

let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
});
*/



playerMenu.addEventListener('click', (e) => {
    let target = e.target

    switch (target.id) {
        case 'rock':
            checkRound(target.id)
            break
        case 'paper':
            checkRound(target.id)
            break
        case 'scissors':
            checkRound(target.id)
            break
    }
})


const checkRound = function (userInput) {
    const cpuInput = choices[Math.floor((Math.random() * choices.length))]
    cpuDisplay.textContent = cpuInput

    switch (userInput) {
        case 'rock':
            if (cpuInput == 'rock') {
                return 'Draw'
            }
    }

    console.log(cpuInput, userInput);
}
