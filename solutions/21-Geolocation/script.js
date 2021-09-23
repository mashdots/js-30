const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(({ coords }) => {
  const { heading, speed: velocity } = coords;
 
  arrow.style.transform = `rotate(${heading}deg)`;
  speed.innerText = velocity;
}, (e) => console.error(e));

