const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

const defaultItemDisplayStyle = Array.from(
  document.styleSheets[1].cssRules
).find((e) => e.selectorText == '.items li').style.display;

/* Load all of the items in local storage to the item list in the DOM; happens on page load
 */
function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUI();
}

/* The user has triggered a submit event from the add form. This will either add a brand
new item to the list or increase the quantity of an item of that name already in the list.
If an item is added, it must be added to the DOM and to storage. Otherwise, the DOM should
be updated. Either way, clear the form afterwards.
*/
function onAddItemSubmit(e) {
  e.preventDefault();

  const newItemText = itemInput.value;

  // Validate Input
  if (newItemText === '') {
    alert('Please add an item');
    return;
  }

  const itemToAdd = addItemToStorage(newItemText);
  if (itemToAdd !== null) {
    addItemToDOM(itemToAdd);
  }

  checkUI();

  itemInput.value = '';
}

/* Add a brand new item to the DOM, either because the user has added a new one or
because the DOM is loaded for the first time and all of the items are retrieved from
local storage. 

Parameters: item is an object containing a name (string) and a quantity (integer).
*/
function addItemToDOM(item) {
  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item.name));

  li.appendChild(createItemQuantityBox(item.quantity, 'quantity'));
  li.appendChild(quantityInput); //  createTextNode(` (${item.quantity})`));

  const button = createRemoveButton('remove-item btn-link text-red');
  li.appendChild(button);

  // add the list item to the unordered list
  itemList.appendChild(li);
}

/* In local storage, change the quantity of an item in the Shopping List to a new amount.

Parameters: 
  itemText (string) is the text of the item whose quantity is changing
  amount (integer) is the new amount to be stored for that item
*/
function changeQuantityInStorageOf(itemText, amount) {
  const itemsFromStorage = getItemsFromStorage();
  const itemIndex = itemsFromStorage.findIndex((each) => each.name == itemText);
  let itemToChange = itemsFromStorage[itemIndex];
  itemToChange.quantity = amount;
  itemsFromStorage[itemIndex] = itemToChange;
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

/* The user changed the quantity of an item in the shopping list. Make sure
that change shows up in the user interface.
Parameters: 
  itemText (string) - the item whose quantity changed.
  amount - the new quantity to be displayed.
 */
function changeQuantityInDOMOf(itemText, amount) {
  listItem = Array.from(itemList.children).find(
    (each) => each.textContent == itemText
  );
  quantityBox = listItem.querySelector('input');
  quantityBox.value = amount;
}

/* The user has attempted to add an item to the list. Check to see if the item is already
in the list. If so, ask if they want to increase the quantity of that item. If they say
okay to that, increase the quantity by one, otherwise, assume they made a mistake and
don't want to add the item at all.
If the item is not already in the list, simply add it.
Either way, update the list and/or quantity in local storage
Parameters: itemText (string) - the item to be added to the Shopping List
Return: either the item added (if it's a new item) or null (if it's an increase or cancel)
 */
function addItemToStorage(itemText) {
  const itemsFromStorage = getItemsFromStorage();
  const itemIndex = itemsFromStorage.findIndex((each) => each.name == itemText);

  if (itemIndex > -1) {
    // item exists; check if increase is desired
    if (
      confirm(
        `You already have ${itemText} in the list. Do you want to increase the quantity?`
      )
    ) {
      // Yes, increase
      const itemToIncrease = itemsFromStorage[itemIndex];
      let currentAmount = itemToIncrease.quantity;
      currentAmount++;

      changeQuantityInStorageOf(itemText, currentAmount);
      changeQuantityInDOMOf(itemText, currentAmount);
    }
    return null;
  }
  // Add new item to array
  const itemToAdd = {
    name: itemText,
    quantity: 1,
  };
  itemsFromStorage.push(itemToAdd);

  // Convert to JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
  return itemToAdd;
}

/* Create and return the part of the shopping list item that displays the quantity for that 
item.
Parameters: 
  quantity (integer) - the quantity of that item to display
  classes (string) - space-separated css classes

Return: the input element that displays the quantity
*/
function createItemQuantityBox(quantity, classes) {
  quantityInput = document.createElement('input');
  quantityInput.setAttribute('type', 'number');
  quantityInput.setAttribute('class', classes);
  quantityInput.value = quantity;
  return quantityInput;
}

/* Create and return the part of the shopping list item that is the remove button for 
removing that item from the shopping list
Parameters: classes (string) - space-separated css classes
Return: the newly-created remove button element
 */
function createRemoveButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createRemoveIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

/* Create and return the part of the remove button that shows the 'X' icon.
Parameters: classes (string) - space-separated list of css classes
Return: the newly-created icon element
*/
function createRemoveIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

/* Retrieve and return the objects from local storage that should appear in the 
shopping list. Each item consists of a name and a quantity.
Return: the Array of items from local storage, where each item has a name and quantity
*/
function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }

  return itemsFromStorage;
}

/* Remove from the DOM the given listItem from the list of shopping list items.
Parameters: listItem - the li to be removed from the DOM.
*/
function removeItemFromDOM(listItem) {
  listItem.remove();
}

/* Remove from local storage the given listItem from the list of shopping list items.
  Parameters: listItem - the li whose textContent is to be removed from local storage.
 */
function removeItemFromStorage(textToRemove) {
  let itemsFromStorage = getItemsFromStorage();

  // Traversy version; use filter
  itemsFromStorage = itemsFromStorage.filter(
    (each) => each.name != textToRemove
  );
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));

  // my version
  // const index = itemsFromStorage.findIndex(
  //   (each) => each.name == textToRemove
  // );
  // if (index > -1) { // found
  //   itemsFromStorage.splice(index, 1);
  //   localStorage.setItem('items', JSON.stringify(itemsFromStorage));
  // }
}

/* The user either clicked on the icon button to remove a specific item
from the shopping list, or reduced the quantity of an item to zero. Put up 
a dialog to see if they really want to remove the item from the list. If so,
remove it. Either way, return a boolean saying whether it was removed.
Parameters: listItem - the li requested to be removed.
Return: a Boolean saying whether the removal happened.
*/
function confirmToRemove(listItem) {
  const itemText = listItem.textContent;
  if (confirm(`Are you sure you want to remove ${itemText} from the list?`)) {
    removeItemFromStorage(listItem.textContent);
    removeItemFromDOM(listItem);
    return true;
  }
  return false;
}
/* The user has clicked somewhere in the list item. This could be either in the remove icon
or in the quantity box. Either remove the item from the DOM and from storage, or change
its quantity in the DOM and in storage, accordingly.
Parameter: e - the event that triggered this method
*/
function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    const listItem = e.target.parentElement.parentElement;
    confirmToRemove(listItem);
  } else if (e.target.classList.contains('quantity')) {
    const listItem = e.target.parentElement;
    const itemText = listItem.textContent;
    const quantity = e.target.value;
    if (quantity == 0) {
      if (!confirmToRemove(listItem)) {
        e.target.value = 1;
      }
    } else {
      changeQuantityInStorageOf(itemText, e.target.value);
    }
  } else {
    setItemToEdit(e.target);
  }
  checkUI();
}

function setItemToEdit(listItem) {
  isEditMode = true;
  itemList
    .querySelectorAll('li')
    .forEach((eachItem) => eachItem.classList.remove('edit-mode'));
  listItem.classList.add('edit-mode');

  formBtn.innerHTML = '<i class = "fa-solid fa-pen"></i> Update Item';
  formBtn.style.backgroundColor = '#228B22';
  itemInput.value = listItem.textContent;
}
/* The user clicked on the Clear All button. Remove all of the items in
the shopping list. */
function clearItems() {
  if (!confirm(`Are you sure you want to remove all items from the list?`)) {
    return;
  }

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  localStorage.setItem('items', JSON.stringify([]));
  // Traversy version
  // localStorage.removeItem('items');
  checkUI();
}

/* As the user types characters into the filter text input, find only
those items in the shopping list that match the string that is typed and 
show only those. */
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

/* Brad Traversy's version of filterItems() */
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

/* After each significant change to the contents of the shopping list,
check to see if it's empty, and if so, remove the clear button and item filter.
*/
function checkUI() {
  const items = itemList.children; //querySelectorAll('li');

  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

/* Initialize the app */
function init() {
  // Event Listeners
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearBtn.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);

  checkUI();
}
init();
