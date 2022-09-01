//buttons
const btnRoll = document.querySelector('#roll-dice');
const btnHold = document.querySelector('#hold');
const btnNewGame = document.querySelector('#new-game');

//variables
let player;
let random;
let current = document.querySelector(`#current${player}`);
let score = document.querySelector(`#score${player}`);
let currentNumb;
let scoreNumb1;
let scoreNumb2;

//new Game init after load and function
newGame()

function newGame() {
    player = 1;
    current = document.querySelector(`#current${player}`);
    score = document.querySelector(`#score${player}`);
    currentNumb = 0;
    scoreNumb1 = 0;
    scoreNumb2 = 0;
};

//function to change player
function playerTurn() {
  if (player == 1) {
    player = 2;
    current = document.querySelector(`#current${player}`);
    score = document.querySelector(`#score${player}`);
  } else if (player ==2) {
    player = 1;
    current = document.querySelector(`#current${player}`);
    score = document.querySelector(`#score${player}`);
  };
};

//button rolling-dice to roll the dice and increase the current score
btnRoll.addEventListener('click', () => {
  random = Math.floor(Math.random() * 6 + 1);
  if (random == 1) {
    currentNumb = 0;
    current.innerHTML = currentNumb;
    playerTurn();
  } else if (random != 1) {
    currentNumb += random;
    current.innerHTML = currentNumb;
  }; 
});

//button hold to keep the score
btnHold.addEventListener('click', () => {
    if (player == 1) {
        scoreNumb1 += currentNumb;
        score.innerHTML = scoreNumb1;
    } else if (player == 2) {
        scoreNumb2 += currentNumb;
        score.innerHTML = scoreNumb2;
    };
    currentNumb = 0;
    current.innerHTML = currentNumb;
    playerTurn();
    current = document.querySelector(`#current${player}`);
    score = document.querySelector(`#score${player}`);
    
});


//button new game
btnNewGame.addEventListener('click', () => {
    newGame();
});