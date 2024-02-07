function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '&':
      return num1 & num2;
      break;
    default:
      return 'invalid operator';
  }
}

console.log(calculator(10, 5, '0'));
