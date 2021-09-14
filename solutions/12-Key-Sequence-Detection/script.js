const keyPresses = [];
const secretCode = 'josh'

const konami = ({key}) => {
  keyPresses.push(key);
  keyPresses.splice(-secretCode.length - 1, keyPresses.length - secretCode.length)
  
  if (keyPresses.join('').includes(secretCode)) {
    cornify_add()
  }
}

window.addEventListener('keyup', konami)