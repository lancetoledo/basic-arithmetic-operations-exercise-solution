//Write a function that does the following for the given values:
//Add, subtract, divide and multiply
//This is simply referred to as the basic arithmetic operations.
//Use some if conditions, and apply the arithmetic operation.
//The numbers and operation are given as a string and should result to an integer value.

function operation(a, b, op) {
  a = parseInt(a);
  b = parseInt(b);
  if (op == '+') {
    return a + b;
  } else if (op == '-') {
    return a - b;
  } else if (op == '/') {
    if (b === 0) {
      return 'undefined';
    }
    return a / b;
  } else if (op == '*') {
    return a * b;
  } else {
    return 'op not found';
  }
}

console.log(operation(5, 2, '-'));

// Example 1:
// Input: 5,2, "+"
// Output: 7

// Example 2:
// Input: 5,2, "-"
// Output: 3

// Example 3:
// Input: 23,3, "*"
// Output: 69

// Example 4:
// Input: 24,2, "/"
// Output: 12
