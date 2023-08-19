// Get user input using prompt
const month = parseInt(prompt("Enter a month (1-12):"));
const year = parseInt(prompt("Enter a year:"));

if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
  console.log("Invalid input. Please enter a valid month (1-12) and year.");
} else {
  let daysInMonth;

  switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
      daysInMonth = 31;
      break;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
      daysInMonth = 30;
      break;
    case 2: // February
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth = 29; // Leap year
      } else {
        daysInMonth = 28;
      }
      break;
    default:
      console.log("Invalid input. Please enter a valid month (1-12).");
      return;
  }

  console.log(
    `There are ${daysInMonth} days in month ${month} of year ${year}.`
  );
}
