const controls = document.querySelectorAll('.controls input');

function handleUpdate() {
  const { dataset, name, value } = this;
  const suffix = dataset.sizing || '';

  document.documentElement.style.setProperty(`--${name}`, value + suffix)
}

controls.forEach(input => {
  input.addEventListener('input', handleUpdate)
})
