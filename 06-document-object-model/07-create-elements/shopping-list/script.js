const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';

// These work the same as the above
// div.setAttribute('class', 'my-element');
// div.setAttribute('id', 'my-element');

div.setAttribute('title', 'My Element');

// div.innerText = 'Hello World'; // not the recommended method; create a node first

const text = document.createTextNode('Hello World');
div.appendChild(text); // puts the text inside the div
console.log(div);

// document.body.appendChild(div); // puts at the end of the page

document.querySelector('ul').appendChild(div); // puts in the list
