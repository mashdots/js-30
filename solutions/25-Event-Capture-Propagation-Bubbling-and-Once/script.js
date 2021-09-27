const divs = document.querySelectorAll('div')

function logText(e) {
  // prevents event bubbling going up (three)
  // Using in conjunction with `capture = true` will go the opposite direction
  // but prevent the continuing of the capture (one)
  e.stopPropagation();
  // Bubbling - clicking a div will "click" the parent values all the way up. (three, two, one)
  // With `capture` set to `true`, it will go down, versus bubbling up the nesting. (one, two, three)
  console.log(this.classList.value);
}

divs.forEach(div => {
  div.addEventListener('click', logText, {
    capture: false,
    // `once` will "unbind" itself so there are no further addEventListener events
    once: true
  });
})