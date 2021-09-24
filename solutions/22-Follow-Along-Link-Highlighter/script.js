const links = document.querySelectorAll('a');

let highlight = document.createElement('span');
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightLink() {
  const { left, top, width, height } = this.getBoundingClientRect();
  const { scrollY, scrollX } = window;

  const destination = {
    x: left - 2 + scrollX,
    y: top - 2 + scrollY,
  }

  highlight.style.transform = `translate(${destination.x}px, ${destination.y}px)`;
  highlight.style.width = `${width + 4}px`;
  highlight.style.height = `${height + 4}px`;
}

links.forEach(link => {
  link.addEventListener('mouseover', highlightLink)
})
