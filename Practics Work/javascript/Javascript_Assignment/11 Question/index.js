const today= new Date();
// console.log(today);

// get full year        
console.log(today.getFullYear()); 

// get month
console.log(today.getMonth()); 

console.log(today.getDate()); 

console.log(today.getDay()); 

console.log(today.getHours()); 

console.log(today.getMinutes()); 

var x = new Date("Jun 1, 1970 22:30:25");
var y = new Date("Feb 7, 2023 22:30:25");
let seconds = Math.abs(x.getTime() - y.getTime())/1000;
console.log(seconds);
