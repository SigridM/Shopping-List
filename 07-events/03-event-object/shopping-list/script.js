const logo = document.querySelector('img');

function onClick(e) {
  // Event properties
  // console.log(e.target);
  // console.log(e.currentTarget);
  // e.target.style.backgroundColor = 'black';
  // console.log(e.type); // click
  // console.log(e.timeStamp);
  // console.log(e.clientX); // mouse click relative to the window
  // console.log(e.clientY);
  // console.log(e.offsetX); // relative to the element
  // console.log(e.offsetY);
  // console.log(e.pageX); // relative to the page
  // console.log(e.pageY);
  // console.log(e.screenX); // relative to the monitors
  // console.log(e.screenY);
}

function onDrag(e) {
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);

// if you click on something lower level, like an li
// the target and currentTarget are different; the currentTarget
// is the documment body, and the target is the li
document.body.addEventListener('click', function (e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
});

// e.preventDefault() method prevents the default behavior
document.querySelector('a').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Link was clicked');
});

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/
