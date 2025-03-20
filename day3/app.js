'use strict'
const player1 = document.querySelector('button')
const title = document.querySelector('h1')
const items = ['rock', 'paper', 'scissors'];
const pcChoice = document.querySelector('span');
let userInput = ''
let score = 0;
let rounds = 0
const scoreElement = document.getElementById('score');
const roundElement = document.getElementById('rounds');


player1.addEventListener('click', () => {
  userInput = prompt('Enter your choice: rock, paper, or scissors').trim().toLowerCase();
  title.textContent = checkRound();
})

function checkRound() {
  const actualChoice = items[Math.floor(Math.random() * items.length)]
  pcChoice.textContent = actualChoice;
  rounds++;
  roundElement.textContent = rounds;

  if (userInput === actualChoice) {
    return 'It\'s a tie!';
  } else if (userInput === 'rock' && actualChoice === 'scissors') {
    updateScore()
    return 'You win!';
  } else if (userInput === 'paper' && actualChoice === 'rock') {
    updateScore()
    return 'You win!';
  } else if (userInput === 'scissors' && actualChoice === 'paper') {
    updateScore();
    return 'You win!';
  } else {
    score--;
    scoreElement.textContent = score;
    checkWinner();
    return 'You lose!';
  }
}

function checkWinner() {
  if (score >= 3) {
    title.textContent = 'You win the game!';
    player1.disabled = true;
    console.log('case 1')
  } else if (rounds === 5) {
    title.textContent = 'You lost the game'
    player1.disabled = true;
    console.log('case 2')
  }

}


function updateScore() {
  score++;
  scoreElement.textContent = score;
  checkWinner();
}