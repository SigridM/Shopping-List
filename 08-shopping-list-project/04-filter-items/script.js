const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  // add the list item to the unordered list
  itemList.appendChild(li);
  checkUI();

  itemInput.value = '';
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
  // console.log('Hello world'.includes('world'), typeof 'Hello world');

  const filterValue = itemFilter.value;
  // console.log('itemList: ', itemList.children);
  const itemArray = Array.from(itemList.children);
  // console.log('filterValue: ', filterValue, typeof filterValue);
  // console.log('itemArray: ', itemArray);
  // const matchingItems = itemArray.filter(
  //   (eachItem) =>
  //     // console.log(eachItem.innerText, typeof eachItem.innerText);
  //     eachItem.innerText.includes(filterValue)
  //   // false;
  // );
  // console.log('matchingItems: ', matchingItems);
  for (eachItem of itemArray) {
    if (eachItem.innerText.includes(filterValue)) {
      eachItem.style.display = 'block';
    } else {
      eachItem.style.display = 'none';
    }
  }
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
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);

checkUI();
