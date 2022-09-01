const btnRoll = document.querySelector('#roll-dice');
const btnHold = document.querySelector('#hold');

let player = 1;
let random;
let current = document.querySelector(`#current${player}`);
let score = document.querySelector(`#score${player}`);
let currentNumb = 0;
let scoreNumb1 = 0;
let scoreNumb2 = 0;

function playerTurn() {
  if (player == 1) {
    player = 2;
  } else player = 1;
};

btnRoll.addEventListener('click', () => {
  random = Math.floor(Math.random() * 6 + 1);
  if (random == 1) {
    currentNumb = 0;
    playerTurn();
  } else if (random != 1) {
    currentNumb += random;
    current.innerHTML = currentNumb;
  }; 

  current = document.querySelector(`#current${player}`);
  score = document.querySelector(`#score${player}`);
});

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

