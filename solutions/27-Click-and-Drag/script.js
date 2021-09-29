const itemContainer = document.querySelector('.items')
let isClicked = false;

function handleClick() {
  isClicked = true;
  this.classList.add('active');
}

function handleUnClick() {
  isClicked = false;
  this.classList.remove('active');
}

function handleDrag(e) {
  if (!isClicked) {
    return;
  }

  if (e.target.classList.contains('item')) {
    this.scrollBy(-e.movementX, 0)
  }
}

itemContainer.addEventListener('mousedown', handleClick)
itemContainer.addEventListener('mousemove', handleDrag)
itemContainer.addEventListener('mouseup', handleUnClick)
itemContainer.addEventListener('mouseout', handleUnClick)