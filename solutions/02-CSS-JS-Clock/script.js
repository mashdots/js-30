const HOUR_PER_CLOCK_CYCLE = 12;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;

const handleRotate = (el, d) => {
  const deg = `rotate(${d}deg)`;

  el.style.webkitTransform = deg; 
  el.style.mozTransform = deg; 
  el.style.msTransform = deg; 
  el.style.oTransform = deg; 
  el.style.transform = deg; 
  el.style.transformOrigin = "100%";
};

setInterval(() => {
  const now = new Date();

  // (Seconds / Minute) * 360 degrees + 90 degrees
  const seconds = ((now.getSeconds() / SECONDS_PER_MINUTE) * 360) + 90;
  handleRotate(document.querySelector('.second-hand'), seconds)

  // (Minutes / Hour) * 360 degrees + 90 degrees
  const minutes = ((now.getMinutes() / MINUTES_PER_HOUR) * 360) + 90;
  handleRotate(document.querySelector('.min-hand'), minutes);
  
  // (Hours / Clock cycle) * 360 degrees + 90 degrees
  const hours = ((now.getHours() / HOUR_PER_CLOCK_CYCLE) * 360) + 90;
  handleRotate(document.querySelector('.hour-hand'), hours);
}, 1000);