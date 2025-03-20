'use strict'
const player1 = document.querySelector('button')
const title = document.querySelector('h1')
const items = ['rock', 'paper', 'scissors'];
const pcChoice = document.querySelector('span');
let userInput = ''
let score = 0;
const scoreElement = document.getElementById('score');

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
    score++;
    scoreElement.textContent = score;
    return 'You win!';
  } else if (userInput === 'paper' && actualChoice === 'rock') {
    score++;
    scoreElement.textContent = score;
    return 'You win!';
  } else if (userInput === 'scissors' && actualChoice === 'paper') {
    score++;
    scoreElement.textContent = score;
    return 'You win!';
  } else {
    score--;
    scoreElement.textContent = score;
    return 'You lose!';
  }
}