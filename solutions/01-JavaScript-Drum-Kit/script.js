const keyNodes = document.querySelectorAll('.key');

window.addEventListener(
  "keydown",
  (e) => {
    const audioNode = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const audio = new Audio(audioNode.src);

    audio.play();
  }
)

keyNodes.forEach(keyNode => keyNode.addEventListener(
  'click',
  () => {
    const { key: dataSet } = keyNode.dataset;
    const audioNode = document.querySelector(`audio[data-key="${dataSet}"]`);
    const audio = new Audio(audioNode.src);

    audio.play();
  }
))
