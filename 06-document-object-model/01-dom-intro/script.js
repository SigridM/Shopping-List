// Global window object
// console.log(window);

// The document object is part of the window object
// console.dir(window.document);
// console.dir(document) // also works

// We can access DOM elements directly with properties
// console.log(document.body);
// console.log(document.body.innerHTML);
// console.log(document.body.innerText);
// console.log(document.links[0]);

// // We can set properties of elements
// document.body.innerHTML = '<h1>Hello from body</h1>';

// // The document object has a ton of methods. One is `document.write()`, which will write something to the document
// document.write('Hello from JS');

// // We also have methods to select elements more directly

const main = document.getElementById('main');
console.log(main);
console.log((main.innerHTML = '<h1>Hello from main</h1>'));

const mainH1 = document.querySelector('#main h1');
mainH1.innerText = 'Hello';
