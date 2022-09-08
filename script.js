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
let name1 = document.querySelector('#name1');
let name2 = document.querySelector('#name2');

//sound
const select = new Audio('./audio/Cursor.ogg');
const decision = new Audio('./audio/Decision.ogg');
const faceOne = new Audio('./audio/One.ogg');
const newGameAudio = new Audio('./audio/NewGame.ogg');
const victoryAudio = new Audio('./audio/Victory.ogg');

function wrongName1() {
  if (name1.innerHTML.length <= 0) {
    name1.innerHTML = "Player 1";
  } else if (name1.innerHTML.length > 8) {
    alert('Please to enter a name with 8 caracters maximum.');
    name1.innerHTML = prompt('Choose a name for player 1:');
    return wrongName1();
  }
};
function wrongName2() {
  if (name2.innerHTML.length <= 0) {
    name2.innerHTML = "Player 2";
  } else if (name2.innerHTML.length >= 8) {
    alert('Please to enter a name with 8 caracters maximum.');
    name2.innerHTML = prompt('Choose a name for player 2:');
    return wrongName2();
  }
};


//new Game init after load and function
newGame()

function newGame() {
    newGameAudio.play();
    name1.innerHTML = prompt('Choose a name for player 1:');
    wrongName1()
    name2.innerHTML = prompt('Choose a name for player 2:');
    wrongName2()
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

  select.play();

  //random number
  random = Math.floor(Math.random() * 6 + 1);

  //dice face display
  document.querySelector('#image').src = `./img/d${random}.png`;

  //gameplay
  if (random == 1) {
    faceOne.play();
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
    decision.play();
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
  if (scoreNumb1 >= 100) {
    victoryAudio.play();
    document.querySelector('#victory').style.display = 'inline-block';
    document.querySelector('#victory').innerHTML = `${name1.innerHTML} wins !`;

    document.querySelector('#image').style.display = 'none';
    btnRoll.style.display = 'none';
    btnHold.style.display = 'none';
    
  } else if (scoreNumb2 >= 100) {
    victoryAudio.play();
    document.querySelector('#victory').style.display = 'inline-block';
    document.querySelector('#victory').innerHTML = `${name2.innerHTML} wins !`;

    document.querySelector('#image').style.display = 'none';
    btnRoll.style.display = 'none';
    btnHold.style.display = 'none';
  };
};