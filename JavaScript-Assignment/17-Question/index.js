// Get user input using prompt
const monthName = prompt("Enter a month:").toLowerCase();
const year = parseInt(prompt("Enter a year:"));

if (isNaN(year)) {
  console.log("Invalid input. Please enter a valid year.");
} else {
  let daysInMonth;

  switch (monthName) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      daysInMonth = 31;
      break;
    case "april":
    case "june":
    case "september":
    case "november":
      daysInMonth = 30;
      break;
    case "february":
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth = 29; // Leap year
      } else {
        daysInMonth = 28;
      }
      break;
    default:
      console.log("Invalid input. Please enter a valid month.");
      return;
  }

  console.log(`There are ${daysInMonth} days in ${monthName} ${year}.`);
}
