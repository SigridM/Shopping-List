const clearBtn = document.querySelector('#clear');

function onClear() {
  // const itemList = document.querySelector('ul');
  const itemList = document.querySelector('#item-list');

  // const items = itemList.querySelectorAll('li');
  const items = itemList.children;

  // itemList.innerHTML = '';

  // items.forEach((item) => item.remove());

  // this is apparently the most performant way
  while (itemList.firstChild) {
    // if there's a first child, there's a list item
    itemList.removeChild(itemList.firstChild);
  }
}

// JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () { // overrides first one; can only have one onclick
//   console.log('Clear Items');
// };

// addEventListener()
// clearBtn.addEventListener('click', () => alert('Clear Items'));

// Use named function
clearBtn.addEventListener('click', onClear); // no parens; that would call it

// removeEventListener()
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Fire off event from JS after 5 seconds
// setTimeout(() => clearBtn.click(), 5000);
