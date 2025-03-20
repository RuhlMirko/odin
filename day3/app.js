'use strict'
const player1 = document.querySelector('button')
const title = document.querySelector('h1')
const items = ['rock', 'paper', 'scissors'];
const pcChoice = document.querySelector('span');
let userInput = ''


player1.addEventListener('click', () => {
  userInput = prompt('Enter your choice: rock, paper, or scissors').trim().toLowerCase();
  title.textContent = checkWinner();
})

function checkWinner() {
  const actualChoice = items[Math.floor(Math.random() * items.length)]
  pcChoice.textContent = actualChoice;
  if (userInput === actualChoice) {
    return 'It\'s a tie!';
  } else if (userInput === 'rock' && actualChoice === 'scissors') {
    return 'You win!';
  } else if (userInput === 'paper' && actualChoice === 'rock') {
    return 'You win!';
  } else if (userInput === 'scissors' && actualChoice === 'paper') {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}



console.log(userInput)