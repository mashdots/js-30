const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let points = 0;
let timeUp = false;

function getRandomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomHole(holes) {
  const randomHoleIndex = Math.floor(Math.random() * holes.length);

  if (lastHole !== randomHoleIndex) {
    lastHole = randomHoleIndex;
    return holes[randomHoleIndex];
  }
  
  console.log('we already did that hole tho');
  return getRandomHole(holes);
}

function showRandomMole() {
  const randomHole = getRandomHole(holes);
  const time = getRandomTime(200, 1000);

  randomHole.classList.add('up');

  setTimeout(() => {
    randomHole.classList.remove('up');

    if (!timeUp) {
      showRandomMole();
    }
  }, time);
}

function hideMole(index) {
  if (holes[index].classList.contains('up')) {
    holes[index].classList.remove('up');

    points += 1;
    scoreBoard.textContent = points;
  }
}

moles.forEach((mole, index) => {
  mole.addEventListener('click', () => hideMole(index), { capture: true })
})

function startGame() {
  points = 0;
  scoreBoard.textContent = points;
  timeUp = false;
  showRandomMole();

  setTimeout(() => timeUp = true, 10000)
}
