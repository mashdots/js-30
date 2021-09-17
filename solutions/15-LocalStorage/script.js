const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

const itemIdFilter = /(\W|\d)*/gi;

/**
 * Translate localStorage objects into 
 */
const populateItems = () => {
  Object.keys(window.localStorage).forEach(item => {
    const tapasItem = { itemName: item, isChecked: window.localStorage[item] === 'checked' };
    items.push(tapasItem);
  })
}

const refreshItemList = () => {
  items.length = 0;
  populateItems();

  if (items.length) {
    const newList = items.map(({ itemName, isChecked }) => {
      return (`
        <li>
          <input type="checkbox" ${isChecked ? "checked" : ''} />
          <label>${itemName}</label>
        </li>
      `)
    })
    
    itemsList.innerHTML = newList.join('');
  }

  document.querySelectorAll('.plates li').forEach(li => li.addEventListener('click', function() {
    const isChecked = this.children[0].checked;
    window.localStorage[this.children[1].innerText] = isChecked ? 'unchecked' : 'checked';
    this.children[0].checked = !isChecked;
  }))

  return 'Refreshed!'
}

const addItem = (newItem) => {
  if ((items.some(
    ({ itemName }) => itemName.toLowerCase() === newItem.toLowerCase()
  ))) {
    return false;
  }

  if (!newItem.replace(itemIdFilter, '').length) {
    return false;
  }

  window.localStorage.setItem(newItem, 'unchecked');
  return true;
}

addItems.addEventListener('submit', function(e) {
  e.preventDefault()
  const newItem = this[0].value;

  if (addItem(newItem)) {
    refreshItemList();
  }
  this.reset();
})

document.querySelector('h2').addEventListener('click', () => {
  window.localStorage.clear();
  items.length = 0;
  refreshItemList();
  itemsList.innerHTML = '<li>Loading Tapas...</li>';
})

refreshItemList();
