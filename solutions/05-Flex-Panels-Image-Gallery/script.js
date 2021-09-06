function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

document.querySelectorAll('.panel').forEach(
  panel => {
    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', toggleActive);
  }
)
