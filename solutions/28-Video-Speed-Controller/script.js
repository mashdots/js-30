const speedContainer = document.querySelector('.speed');
const speedController = document.querySelector('.speed-bar');
const video = document.querySelector('video');

let initialValue = speedController.clientHeight;
let isClicked = false;
let startY;

function handleClick(e) {
  isClicked = true;
  startY = e.pageY - speedController.offsetTop;
}

function handleUnClick() {
  isClicked = false;
}

function handleDrag(e) {
  if (!isClicked) {
    return;
  }

  const y = e.pageY - speedController.offsetTop;

  if (y < speedContainer.clientHeight || y > 0) {
    speedController.style.height = `${y}px`

    const calculatedRate = (y / initialValue).toFixed(1);
    video.playbackRate = calculatedRate;
    speedController.textContent = `${calculatedRate}x`
  }
}

speedContainer.addEventListener('mousedown', handleClick)
speedContainer.addEventListener('mouseup', handleUnClick)
speedContainer.addEventListener('mouseleave', handleUnClick)
speedContainer.addEventListener('mousemove', handleDrag)