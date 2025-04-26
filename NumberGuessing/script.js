let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsText = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');

guessBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);

function checkGuess() {
  const userGuess = parseInt(guessInput.value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    message.style.color = 'red';
    return;
  }

  attempts++;
  attemptsText.textContent = `Attempts: ${attempts}`;

  if (userGuess === randomNumber) {
    message.textContent = `Correct! The number was ${randomNumber}`;
    message.style.color = 'green';
    guessBtn.disabled = true;
    guessInput.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low. Try again!';
    message.style.color = 'blue';
  } else {
    message.textContent = 'Too high. Try again!';
    message.style.color = 'blue';
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.value = '';
  message.textContent = '';
  attemptsText.textContent = '';
  guessBtn.disabled = false;
  guessInput.disabled = false;
}
