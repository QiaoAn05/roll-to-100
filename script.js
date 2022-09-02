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
    document.querySelector(`#score2`).innerHTML = 0;
    player = 1;
    current = document.querySelector(`#current${player}`);
    score = document.querySelector(`#score${player}`);
    currentNumb = 0;
    scoreNumb1 = 0;
    scoreNumb2 = 0;
    current.innerHTML = currentNumb;
    score.innerHTML = scoreNumb1;
    document.querySelector('#image').src = `./img/logo.png`;
    document.querySelector('#victory').style.display = 'none';
};

//function to change player
function playerTurn() {
  if (player == 1) {
    player = 2;
    current = document.querySelector(`#current${player}`);
    score = document.querySelector(`#score${player}`);
  } else if (player == 2) {
    player = 1;
    current = document.querySelector(`#current${player}`);
    score = document.querySelector(`#score${player}`);
  };
};

//button rolling-dice to roll the dice and increase the current score
btnRoll.addEventListener('click', () => {

  //random number
  random = Math.floor(Math.random() * 6 + 1);

  //dice face display
  document.querySelector('#image').src = `./img/d${random}.png`;

  //gameplay
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
    victory();
});


//button new game
btnNewGame.addEventListener('click', () => {
    newGame();
});

//victory condition
function victory() {
  if (scoreNumb1 >= 20) {
    //document.querySelector('#victory-box').style.display = 'inline-block';
    //var x = document.getElementById('victory-box');
    document.querySelector('#victory').style.display = 'inline-block';
    document.querySelector('#victory').innerHTML = "Player 1 wins !";
    
    //newGame();
  } else if (scoreNumb2 >= 20) {
    document.querySelector('#victory').style.display = 'inline-block';
    document.querySelector('#victory').innerHTML = "Player 2 wins !";
  };
};