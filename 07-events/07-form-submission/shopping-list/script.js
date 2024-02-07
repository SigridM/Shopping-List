const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault(); // keeps page from submiting to the file

  // Get value with .value
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    // input validation
    alert('Please fill in all fields');
    return;
  }

  console.log(item, priority);
}

// Using the FormData Object
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form); // form is in the global scope

  // Get individual items
  const item = formData.get('item'); // uses the name in the html
  const priority = formData.get('priority');

  console.log(item, priority);

  // Get all entries as an Iterator
  const entries = formData.entries();
  console.log(entries);

  // Loop through entries
  for (let entry of entries) {
    console.log(entry[1]);
  }
}

form.addEventListener('submit', onSubmit2);
