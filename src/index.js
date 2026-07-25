// === VARIABLES === //

const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const score = document.querySelector('#score'); // Gets the score element
const timerDisplay = document.querySelector('#timer'); // Gets the timer element
const difficultySelect = document.querySelector('#difficulty'); // Gets the difficulty select element

const sound = new Audio('https://github.com/marcusdavisjr/final-capstone/blob/main/assets/alt/shot.mp3'); // Creates a new Audio object for the sound effect

let time = 0;
let timer;
let lastHole = 0;
let points = 0;
let difficulty = "easy";
let isRunning = false; // Flag to track if the game is running


// === DIFFICULTY CONTROLS === //

/** RANDOM INTEGER FUNCTION
 * 
 * Generates a random integer within a range.
 *
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** SET DELAY FUNCTION
 * 
 * Sets the time delay given a difficulty parameter.
 */
function setDelay(difficulty) {
  // TODO: Write your code here.
  if (difficulty === "easy") {
    return 1500;
  } else if (difficulty === "normal") {
    return 1000;
  } else {
    return randomInteger(600, 1200);
  }
}

/** SELECT DIFFICULTY EVENT LISTENER
 * 
 * This event listener listens for a change in the difficulty select element. 
 */
difficultySelect.addEventListener('change', (event) => {
  difficulty = event.target.value;
}); 


// === GRID BEHAVIORS === //

/** CHOOSING HOLE FUNCTION
 * 
 * Chooses a random hole from a list of holes.
 */
function chooseHole(holes) {
  const index = randomInteger(0, 8);
  const hole = holes[index];
  if (hole === lastHole) {
    return chooseHole(holes);
  }
  lastHole = hole;
  return hole;
}

/** GAME OVER FUNCTION
*
* Calls the showUp function if time > 0 and stops the game if time = 0.
*/
function gameOver() {
  if (time > 0) {
    const timeoutId = showUp();
    return timeoutId;
  } else {
    const gameStopped = stopGame();
    return gameStopped;
  }
}

/** SHOW UP FUNCTION
*
* Calls the showAndHide() function with a specific delay and a hole.
*/
function showUp() {
  let delay = setDelay(difficulty);
  const hole = chooseHole(holes);
  return showAndHide(hole, delay);
}

/** SHOW AND HIDE FUNCTION
*
* The purpose of this function is to show and hide the mole given
* a delay time and the hole where the mole is hidden.
*/
function showAndHide(hole, delay){
  toggleVisibility(hole);
  const timeoutID = setTimeout(() => {
    toggleVisibility(hole);
    gameOver();
  }, delay);
  return timeoutID;
}

/** TOGGLE VISIBILITY FUNCTION
*
* Adds or removes the 'show' class that is defined in styles.css to 
* a given hole. It returns the hole.
*
*/
function toggleVisibility(hole){
  hole.classList.toggle('show');
  return hole;
}


// === SCORE AND TIMER === //

/** UPDATE SCORE FUNCTION
*
* This function increments the points global variable and updates the scoreboard.
*/
function updateScore() {
  points++;
  score.textContent = points;
  return points;
}

/** CLEAR SCORE FUNCTION
*
* This function clears the score by setting `points = 0`. 
*/
function clearScore() {
  points = 0;
  score.textContent = points;
  return points;
}

/** UPDATE TIMER FUNCTION
*
* Updates the control board with the timer if time > 0
*/
function updateTimer() {
  if (time > 0) {
    time--;
    timerDisplay.textContent = time;
  }
  return time;
}

/** START TIMER FUNCTION
*
* Starts the timer using setInterval.
*/
function startTimer() {
  timer = setInterval(updateTimer, 1000);
  return timer;
}


// === WHACK EVENT === //

/** WHACK EVENT
*
* This is the event handler that gets called when a player
* clicks on a mole.
*/
function whack(event) {
  sound.currentTime = 0; // Reset the sound to the beginning
  sound.play();
  updateScore();
  return points;
}

/** SET EVENT LISTENERS FUNCTION
*
* Adds the 'click' event listeners to the moles.
*/
function setEventListeners(){
  moles.forEach(mole => {
    mole.addEventListener('click', whack);
  });
  return moles;
}


// === GAME CONTROLS === //

/** BUTTON TOGGLE STATES
* 
* Allows the button to be toggled to start and stop the game. 
*/
function setStartState() {
  startButton.textContent = 'START';
}

function setStopState() {
  startButton.textContent = 'STOP';
}

/** SET DURATION FUNCTION
*
* This function sets the duration of the game.
*/
function setDuration(duration) {
  time = duration;
  return time;
}

/** STOP GAME FUNCTION
*
* This function stops the game when the button is click while the game is running.
*/
function stopGame(){
  if (isRunning === false) return;
  setStartState();
  setDuration(0);
  clearInterval(timer);
  timerDisplay.textContent = 0;
  isRunning = false;
  return "game stopped";
}

/** START GAME FUNCTION
* 
* This function starts the game when the `startButton` is clicked and initializes the game. 
*/
function startGame(){
  if (isRunning !== false) return;
  setStopState();
  clearScore();
  setDuration(20);
  setEventListeners();
  startTimer();
  showUp();
  isRunning = true;
  return "game started";
}

startButton.addEventListener("click", (event) => {
  if (isRunning === false) {
    startGame();
  } else {
    stopGame();
  }
});


// Please do not modify the code below.
// Used for testing purposes.
window.randomInteger = randomInteger;
window.chooseHole = chooseHole;
window.setDelay = setDelay;
window.startGame = startGame;
window.gameOver = gameOver;
window.showUp = showUp;
window.holes = holes;
window.moles = moles;
window.showAndHide = showAndHide;
window.points = points;
window.updateScore = updateScore;
window.clearScore = clearScore;
window.whack = whack;
window.time = time;
window.setDuration = setDuration;
window.toggleVisibility = toggleVisibility;
window.setEventListeners = setEventListeners;
