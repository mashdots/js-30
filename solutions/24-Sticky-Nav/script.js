const navBar = document.querySelector('nav');
const logo = document.querySelector('nav .logo')
const originalOffset = navBar.offsetTop;

function handleNavbarUpdate() {
  if (this.scrollY >= originalOffset) {
    logo.style.maxWidth = "100%"
    document.body.classList.add('sticky-nav');
    navBar.style.paddingTop = '64px';
  } else {
    logo.style.maxWidth = 0
    document.body.classList.remove('sticky-nav');
    navBar.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', handleNavbarUpdate);