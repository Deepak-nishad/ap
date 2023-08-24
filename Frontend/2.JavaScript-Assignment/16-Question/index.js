// Get user input using prompt
const month = prompt("Enter a month:").toLowerCase();

switch (month) {
  case "september":
  case "october":
  case "november":
    console.log("The season is Autumn.");
    break;
  case "december":
  case "january":
  case "february":
    console.log("The season is Winter.");
    break;
  case "march":
  case "april":
  case "may":
    console.log("The season is Spring.");
    break;
  case "june":
  case "july":
  case "august":
    console.log("The season is Summer.");
    break;
  default:
    console.log("Invalid input. Please enter a valid month.");
}
