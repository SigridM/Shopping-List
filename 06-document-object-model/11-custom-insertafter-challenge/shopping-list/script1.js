function insertAfter(newEl, existingEl) {
  const parentEl = existingEl.parentElement;
  //   const nextEl = existingEl.nextElementSibling; // both work
  const nextEl = existingEl.nextSibling;

  parentEl.insertBefore(newEl, nextEl);
}

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:last-child');

console.log(firstItem);
// Our custom function

// Iterate through all properties of the window object
for (let prop in document) {
  // Check if the property is a function
  if (typeof document[prop] === 'function') {
    console.dir(prop);
  }
}

insertAfter(li, firstItem);
