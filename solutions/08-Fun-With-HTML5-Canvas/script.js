const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineWidth = 100;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let hue = 0;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

function draw({ offsetX, offsetY }) {
  if (!isDrawing) {
    return;
  }

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(offsetX, offsetY);
  ctx.stroke();

  if (hue >= 360) {
    hue = 0;
  } else {
    hue++;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  direction ? ctx.lineWidth++ : ctx.lineWidth--;
  
  lastX = offsetX;
  lastY = offsetY;
}

canvas.addEventListener('mousedown', ({ offsetX, offsetY }) => {
  isDrawing = true
  lastX = offsetX;
  lastY = offsetY;
})
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)


