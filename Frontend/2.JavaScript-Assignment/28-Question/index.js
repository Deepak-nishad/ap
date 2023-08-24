const input = parseInt(prompt("Enter a number:"));

if (isNaN(input) || input <= 0) {
  console.log("Please enter a valid positive number.");
} else {
  console.log("Triangle Pattern:");
  for (let i = 1; i <= input; i++) {
    console.log("*".repeat(i));
  }

  console.log("Square Pattern:");
  for (let i = 1; i <= input; i++) {
    console.log("*".repeat(input));
  }

  console.log("Pyramid Pattern:");
  for (let i = 1; i <= input; i++) {
    const spaces = " ".repeat(input - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}
