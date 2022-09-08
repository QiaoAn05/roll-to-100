//buttons
const btnRoll = document.querySelector('#roll-dice');
const btnHold = document.querySelector('#hold');
const btnNewGame = document.querySelector('#new-game');

//variables
let player;
let random;
let current = document.querySelector(`#current${player}`);
let score = document.querySelector(`#score${player}`);
let active1 = document.querySelector(`#active1`);
let active2 = document.querySelector(`#active2`);
let currentNumb;
let scoreNumb1;
let scoreNumb2;

//new Game init after load and function
newGame()

function newGame() {
    btnRoll.style.display = 'inline-block';
    btnHold.style.display = 'inline-block';
    document.querySelector('#image').style.display = 'inline-block';
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
    active2.style.visibility = 'hidden';
    active1.style.visibility = 'visible';
};

//function to change player
function playerTurn() {
  if (player == 1) {
    player = 2;
    current = document.querySelector(`#current${player}`);
    score = document.querySelector(`#score${player}`);
    active1.style.visibility = 'hidden';
    active2.style.visibility = 'visible';
  } else if (player == 2) {
    player = 1;
    current = document.querySelector(`#current${player}`);
    score = document.querySelector(`#score${player}`);
    active2.style.visibility = 'hidden';
    active1.style.visibility = 'visible';
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
  if (scoreNumb1 >= 10) {
    //document.querySelector('#victory-box').style.display = 'inline-block';
    //var x = document.getElementById('victory-box');
    document.querySelector('#victory').style.display = 'inline-block';
    document.querySelector('#victory').innerHTML = "Player 1 wins !";

    document.querySelector('#image').style.display = 'none';
    btnRoll.style.display = 'none';
    btnHold.style.display = 'none';
    
  } else if (scoreNumb2 >= 10) {
    document.querySelector('#victory').style.display = 'inline-block';
    document.querySelector('#victory').innerHTML = "Player 2 wins !";

    document.querySelector('#image').style.display = 'none';
    btnRoll.style.display = 'none';
    btnHold.style.display = 'none';
  };
};