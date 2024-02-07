function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    switch (true) {
      case i % 15 === 0:
        console.log(i, 'FizzBuzz');
        break;
      case i % 3 === 0:
        console.log(i, 'Fizz');
        break;
      case i % 5 == 0:
        console.log(i, 'Buzz');
        break;
      default:
        console.log(i);
    }
  }
}

fizzBuzz();
