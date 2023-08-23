function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "Cannot divide by zero.";
  }
  return x / y;
}

const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please enter valid numeric values.");
} else {
  console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
  console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);
  console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
  console.log(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`);
}
