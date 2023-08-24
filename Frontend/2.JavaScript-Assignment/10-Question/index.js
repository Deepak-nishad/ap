console.log(4 < 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false

const word1 = "python";
const word2 = "jargon";

if (word1.length < word2.length) {
  console.log("This statement is falsy.");
} else {
  console.log("This statement is not falsy.");
}
