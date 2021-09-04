const HOUR_PER_CLOCK_CYCLE = 12;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;

const handleRotate = (el, d) => {
  el.style.transform = `rotate(${d + 90}deg)`; 
  el.style.transformOrigin = "100%";
};

setInterval(() => {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegrees = ((second / SECONDS_PER_MINUTE) * 360);
  handleRotate(document.querySelector('.second-hand'), secondDegrees);

  const minute = now.getMinutes();
  const minuteDegrees = ((minute / MINUTES_PER_HOUR) * 360) + (second / 60 * 6);
  handleRotate(document.querySelector('.min-hand'), minuteDegrees);
  
  const hourDegrees = ((now.getHours() / HOUR_PER_CLOCK_CYCLE) * 360) + (minute / 60 * 30);
  handleRotate(document.querySelector('.hour-hand'), hourDegrees);
}, 1000);
