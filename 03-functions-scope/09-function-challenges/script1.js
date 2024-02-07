function getCelsius(fahrenheight) {
  return ((fahrenheight - 32) * 5) / 9;
}

// console.log(getCelsius(95));

const fahrenheight = 32;

const getCelsiusArrow = (fahrenheight) => ((fahrenheight - 32) * 5) / 9;

console.log(
  `The temperature is ${fahrenheight} \xB0F or ${getCelsiusArrow(
    fahrenheight
  )} \xB0C`
);

const minMax = (...nums) => {
  return {
    min: Math.min(...nums),
    max: Math.max(...nums),
  };
};

console.log(minMax(1, 2, 3, 4, 5));

const myRect = {
  width: 20,
  height: 30,
};

(function (rect) {
  console.log(
    `Rect width is ${rect.width} and height is ${rect.height}, and area is ${
      rect.width * rect.height
    }.`
  );
})(myRect);
