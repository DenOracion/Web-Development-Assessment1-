//Select DOM elements
const targetColor = document.getElementById('target-color');
const colorOptions = document.querySelector('.color-options');
const feedback = document.getElementById('feedback');
const livesDisplay = document.getElementById('lives');
const endgame = document.getElementById('endgame');
const finalScore = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

let correctColor;
let lives = 3;
let score = 0;

//Generate a random RGB color string
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

//Generate and display new color choices
function setupRound() {
  colorOptions.innerHTML = '';
  feedback.textContent = '';

  //Create an array of color choices
  const colors = [generateRandomColor(), generateRandomColor(), generateRandomColor()];
  correctColor = colors[Math.floor(Math.random() * colors.length)];

  //Display the RGB value the user must guess
  targetColor.textContent = correctColor.toUpperCase();

  //Create and display each color box
  colors.forEach(color => {
    const box = document.createElement('div');
    box.classList.add('color-box');
    box.style.backgroundColor = color;
    box.addEventListener('click', () => handleGuess(color));
    colorOptions.appendChild(box);
  });
}

//Handle user's guess
function handleGuess(selectedColor) {
  if (selectedColor === correctColor) {
    feedback.textContent = 'Correct!';
    score++;
    setupRound();
  } else {
    feedback.textContent = 'Incorrect!';
    lives--;
    updateLives();
    if (lives === 0) {
      endGame();
    }
  }
}

//Update lives display
function updateLives() {
  livesDisplay.textContent = `Lives Remaining: ${lives}`;
}

//End the game
function endGame() {
  colorOptions.innerHTML = '';
  targetColor.textContent = '';
  feedback.textContent = '';
  endgame.classList.remove('hidden');
  finalScore.textContent = `Game Over! Your score: ${score}`;
}

//Restart the game
restartBtn.addEventListener('click', () => {
  lives = 3;
  score = 0;
  endgame.classList.add('hidden');
  updateLives();
  setupRound();
});

//Initialize the game
updateLives();
setupRound();