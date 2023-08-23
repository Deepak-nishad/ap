function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  if (number <= 3) {
    return true;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  // Check for prime using 6k +/- 1 rule
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

const userInput = parseInt(prompt("Enter a number:"));

if (isNaN(userInput)) {
  console.log("Please enter a valid number.");
} else {
  const result = isPrime(userInput);
  if (result) {
    console.log(`${userInput} is a prime number.`);
  } else {
    console.log(`${userInput} is not a prime number.`);
  }
}
