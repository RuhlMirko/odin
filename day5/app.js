'use strict'
const choices = ['rock', 'paper', 'scissors']
const cpuDisplay = document.querySelector('#cpu')
const playerMenu = document.querySelector('.player')
let score = 0
let round = 0
const scoreDisplay = document.querySelector('#score')
const roundDisplay = document.querySelector('#rounds')
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
    roundDisplay.textContent = ++round

    if (userInput == cpuInput) {
        cpuDisplay.textContent += ' (Draw)'
    } else if (userInput === 'rock' && cpuInput === 'scissors') {
        cpuDisplay.textContent += ' (You win!)'
        score++
    } else if (userInput === 'paper' && cpuInput === 'rock') {
        cpuDisplay.textContent += ' (You win!)'
        score++
    } else if (userInput === 'scissors' && cpuInput === 'paper') {
        cpuDisplay.textContent += ' (You win!)'
        score++
    } else {
        cpuDisplay.textContent += ' (You lost!)'
    }

    scoreDisplay.textContent = score
    if (round === 5) {
        checkWinner()
    }
    console.log(cpuInput, userInput);
}

const checkWinner = function () {
    if (score >= 3) {
        cpuDisplay.textContent = 'Player wins!'
    } else {
        cpuDisplay.textContent = 'CPU wins!'
    }
}