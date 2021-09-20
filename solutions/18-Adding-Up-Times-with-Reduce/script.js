const videos = Array.from(document.querySelectorAll('[data-time]'));

/**
 * Reducer function. Takes a node with a `time` dataset and adds it to an
 * initial `total` value.
 * 
 * @param {number} total - Initial value
 * @param {Node} video - The `li` node
 * @returns {number} - the initial value plus the timestamp parsed into seconds.
 */
function processTime(total, video) {
  const [minutes, seconds] = video.dataset.time.split(':');

  return total + (parseInt(minutes) * 60) + parseInt(seconds)
}

/**
 * Converts a number representing seconds into a hours, minutes, and seconds.
 * 
 * @param {number} time - initial value in seconds
 * @returns {Object} - with `minutes`, `hours`, and `seconds` properties
 */
const processSeconds = (time) => {
  const minutesFromTime = Math.floor(time / 60);

  return {
    hours: Math.floor(minutesFromTime / 60),
    minutes: minutesFromTime % 60,
    seconds: time % 60
  };
}

const totalSeconds = videos.reduce(processTime, 0);

const { minutes, hours, seconds } = processSeconds(totalSeconds)

console.info(`Formatted time: ${hours}:${minutes}:${seconds}`);
