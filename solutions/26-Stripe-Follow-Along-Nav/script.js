const menuLinks = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')
let timer;

function handleEnter() {
  clearTimeout(timer);
  this.classList.add('trigger-enter')
  timer = setTimeout(() => this.classList.add('trigger-enter-active'), 150);

  const { top: navTop, left: navLeft } = nav.getBoundingClientRect();
  const { left, top, width, height } = this.children[1].getBoundingClientRect();

  background.style.transform = `translate(${left - navLeft}px ${top - navTop}px)`;
  background.style.top = `${top - navTop}px`;
  background.style.left = `${left}px`;
  background.style.width = `${width}px`;
  background.style.height = `${height}px`;
  background.classList.add('open');
}

function handleLeave() {
  this.classList.remove('trigger-enter')
  this.classList.remove('trigger-enter-active')

  background.classList.remove('open')
}

menuLinks.forEach(link => {
  link.addEventListener('mouseenter', handleEnter)
  link.addEventListener('mouseleave', handleLeave)
})