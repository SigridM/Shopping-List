// Loop through objects
const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
};

for (key in colorObj) {
  // in for objects uses the key
  console.log(key, colorObj[key]);
}

// Loop through arrays
const colorArr = ['red', 'green', 'blue', 'yellow'];

for (key in colorArr) {
  // in for arrays uses the index
  console.log(colorArr[key]);
}

for (color of colorArr) {
  // of for arrays uses the value
  console.log(color);
}
