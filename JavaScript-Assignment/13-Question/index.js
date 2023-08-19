// Get user input using prompt
const age = parseInt(prompt("Enter your age:"));

if (isNaN(age)) {
  console.log("Invalid input. Please enter a valid age.");
} else if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  const yearsToWait = 18 - age;
  console.log(
    `You are too young to drive. Please wait ${yearsToWait} year(s) to turn 18.`
  );
}
