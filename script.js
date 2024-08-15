'use strict';

console.log(document.querySelector('.message').textContent);

let secretNumbe = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightcore = 0;

const numberElement = document.querySelector('.number');
const guessElement = document.querySelector('.guess');
const messageElement = document.querySelector('.message');
const bodyElement = document.querySelector('body');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');

function init() {
  messageElement.textContent = 'Start guessing...';
  scoreElement.textContent = score;
  numberElement.textContent = '?';
  highscoreElement.textContent = 0;
  guessElement.value = '';
  bodyElement.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
  secretNumbe = Math.trunc(Math.random() * 20) + 1;

  console.log(secretNumbe);
}

const displayMessage = message => {
  messageElement.textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(guessElement.value);

  if (!guess) {
    displayMessage('No number!');
    return;
  }

  if (guess === secretNumbe) {
    displayMessage('Correct number!');

    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';
    numberElement.textContent = secretNumbe;

    if (score > hightcore) {
      hightcore = score;
      highscoreElement.textContent = hightcore;
    }

    return;
  }

  if (guess !== secretNumbe) {
    if (score > 1) {
      const message = guess > secretNumbe ? 'Too hight!' : 'To low';
      displayMessage(message);
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage(' You lost the game. Try again');
      scoreElement.textContent = 0;
    }
    return;
  }
});

document.querySelector('.btn').addEventListener('click', () => {
  init();
});

init();
