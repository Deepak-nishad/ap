// Get user input using prompt
const score = parseFloat(prompt("Enter your score:"));

if (isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid input. Please enter a valid score between 0 and 100.");
} else if (score >= 80) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else if (score >= 50) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
