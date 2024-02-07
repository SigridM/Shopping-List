// remove() Method
function removeClearButton() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}

// removeChild() Method
function removeFirstItem() {
  // const ul = document.querySelector('ul'); // by type
  // const ul = document.querySelector('.items'); // by class, use dot
  const ul = document.querySelector('#item-list'); // by id, use hashtag
  // const li = document.querySelector('li:first-child');
  const li = ul.children[0];
  // console.log(li);

  ul.removeChild(li);
}

// Other examples

function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li);
}

function removeItem3(itemNumber) {
  const li = document.querySelectorAll('li');
  li[itemNumber - 1].remove();
}

// shorter way of doing the above
const removeItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

removeClearButton();
removeFirstItem();
// removeItem(2);
// removeItem4(2);
