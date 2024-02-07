let amount = '100';

// Convert string to number
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

console.log(amount, typeof amount)

// Convert number to string
amount = amount.toString();
amount = String(amount);
console.log(amount, typeof amount)

// Convert string to decimal
amount = parseFloat(amount);
console.log(amount, typeof amount)

// Convert number to boolean
amount = Boolean(amount);
console.log(amount, typeof amount)

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

amount = 'hello'
amount = Number(amount)
console.log(amount, typeof amount);
