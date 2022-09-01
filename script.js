const btnAdd = document.querySelector('#roll-dice');

let random;

btnAdd.addEventListener('click', () => {
    random = Math.floor(Math.random() * 6 + 1);
});