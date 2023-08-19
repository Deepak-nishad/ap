const now = new Date();

// What is the year today?
const year = now.getFullYear();
console.log("Year:", year);

// What is the month today as a number?
const month = now.getMonth(); // Note: Months are zero-indexed (0-11)
console.log("Month:", month);

// What is the date today?
const date = now.getDate();
console.log("Date:", date);

// What is the day today as a number?
const day = now.getDay(); // Note: Days are zero-indexed (0-Sunday, 6-Saturday)
console.log("Day:", day);

// What is the hours now?
const hours = now.getHours();
console.log("Hours:", hours);

// What is the minutes now?
const minutes = now.getMinutes();
console.log("Minutes:", minutes);

// Find out the number of seconds elapsed from January 1, 1970, to now.
const secondsElapsed = Math.floor(now.getTime() / 1000); // Convert milliseconds to seconds
console.log("Seconds elapsed since January 1, 1970:", secondsElapsed);
