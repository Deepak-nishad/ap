let countries = ["United States", "Canada", "Mexico", "Brazil", "China"];

// Check if 'Ethiopia' exists in the array
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
  console.log(countries);
}
