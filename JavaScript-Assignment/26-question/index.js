const number = parseInt(
  prompt("Enter a number to generate its multiplication table:")
);

if (isNaN(number)) {
  console.log("Please enter a valid number.");
} else {
  console.log(`Multiplication table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} * ${i} = ${result}`);
  }
}
