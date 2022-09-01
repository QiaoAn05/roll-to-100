const btnRoll = document.querySelector('#roll-dice');

let player = 1;
let random;
let current = document.querySelector(`#current${player}`);
let currentNumb = 0;

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
  } else currentNumb += random;
  current.innerHTML = currentNumb;

  current = document.querySelector(`#current${player}`);
});

