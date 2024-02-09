const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const defaultItemDisplayStyle = Array.from(
  document.styleSheets[1].cssRules
).find((e) => e.selectorText == '.items li').style.display;

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  addItemToDOM(newItem);
  addItemToStorage(newItem);
  checkUI();

  itemInput.value = '';
}
function addItemToDOM(item) {
  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  // add the list item to the unordered list
  itemList.appendChild(li);
}

function addItemToStorage(item) {
  let itemsFromStorage;

  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }

  // Add new item to array
  itemsFromStorage.push(item);

  // Convert to JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  // console.log(e.target.parentElement);
  if (e.target.parentElement.classList.contains('remove-item')) {
    // console.log(e.target.parentElement.classList);
    // console.log(e.target.parentElement.parentElement);
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
    checkUI();
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

function filterItems() {
  const filterValue = itemFilter.value.toLowerCase();
  const itemArray = Array.from(itemList.children);

  for (eachItem of itemArray) {
    if (eachItem.innerText.toLowerCase().includes(filterValue)) {
      eachItem.style.display = defaultItemDisplayStyle;
    } else {
      eachItem.style.display = 'none';
    }
  }
}

function filterItemsTraversy(e) {
  const items = itemList.querySelectorAll('li'); // not an HTMLCollection; does not need to be converted to an Array
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) != -1) {
      // indexOf() returns -1 if not found
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function checkUI() {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}
// Event Listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);

checkUI();
