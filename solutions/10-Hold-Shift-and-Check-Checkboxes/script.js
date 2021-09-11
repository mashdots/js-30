var lastChecked = null;

const checkboxes = document.querySelectorAll('input[type="checkbox"');

const handleCheck = (start, end, isChecked) => {
  // Used to control the direction of the box-checking
  const normalDirection = start < end;

  for (let i = normalDirection ? start : end; normalDirection ? i < end : i < start; i++) {
    checkboxes[i].checked = isChecked;
  }
}

checkboxes.forEach((box, key) => {
  box.addEventListener('click', function({ shiftKey, target }) {
    if (shiftKey) {
      handleCheck(lastChecked, key, target.checked)
    }
    
    lastChecked = key;
  })
})
