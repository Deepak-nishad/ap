// Get user input using prompt
const number = parseInt(prompt("Enter a number:"));

if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else if (number % 2 === 0) {
  console.log(`${number} is an even number.`);
} else {
  console.log(`${number} is an odd number.`);
}
