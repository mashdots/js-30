const buttons = document.querySelectorAll('button.timer__button');
const timeRemaining = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');
const form = document.querySelector('#custom');

let timer;

/**
 * Takes a time section (hours, seconds, minutes) and returns it as itself, or
 * with the proper amount of zeroes.
 * 
 * @param {number} number - The number in a time section.
 * @returns {string | number}
 */
function formatNumberWithZeros(number) {
  if (number > 0 && number < 10) {
    return `0${number}`
  } else if (number <= 0) {
    return '00'
  }

  return number;
}

/**
 * Converts a number representing seconds into a hours, minutes, and seconds.
 * 
 * @param {number} time - initial value in seconds
 * @returns {Object} - with `minutes`, `hours`, and `seconds` properties
 */
 const toTimerTime = (time) => {
  const minutesFromTime = Math.floor(time / 60);

  const hour = formatNumberWithZeros(Math.floor(minutesFromTime / 60));
  const minutes = formatNumberWithZeros(minutesFromTime % 60);
  const seconds = formatNumberWithZeros(Math.round(time % 60));

  return `${hour > 0 ? hour + ':' : ''}${minutes}:${seconds}`;
}

/**
 * Takes a number and converts it to a formatted time string with AM or PM.
 * 
 * @param {number} time The time to format to a normalized time.
 * @returns {string}
 */
function toEndTime(time) {
  const { 0: h, 1: m, 2: s } = new Date(time).toTimeString().replace(/\s.*/, '').split(':');

  return `${h > 12 ? h - 12 : h}:${m}:${s} ${h > 12 ? 'PM' : 'AM'}`;
}

function stopTimer() {
  clearInterval(timer);
  timeRemaining.textContent = '00:00'
  timeEnd.textContent = '';
}

function startTimer(timeInSeconds) {
  stopTimer();

  const expireTime = Date.now() + timeInSeconds * 1000;
  timeRemaining.textContent = toTimerTime(timeInSeconds);
  timeEnd.textContent = toEndTime(expireTime);

  timer = setInterval(function() {
    const now = Date.now();

    if (now < expireTime) {
      const remainingTime = expireTime - now;
      timeRemaining.textContent = toTimerTime(remainingTime / 1000);
    } else {
      stopTimer();
    }
  }, 1000)
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    startTimer(this.dataset.time)
  })
})

form.addEventListener('submit', function(e){
  e.preventDefault();

  const enteredMinutes = parseInt(`${this[0].value}`.replace(/\D/, ''));

  if (enteredMinutes > 0) {
    startTimer(enteredMinutes * 60);
  }

  this.reset();
})