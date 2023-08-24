const sentence =
  "This is a simple example sentence, with multiple occurrences of the word example.";

const searchWord = "example";
const lastIndex = sentence.lastIndexOf(searchWord);
console.log(lastIndex);

// if (lastIndex !== -1) {
//   console.log(
//     `The last occurrence of "${searchWord}" starts at index ${lastIndex}`
//   );
// } else {
//   console.log(`"${searchWord}" not found in the string.`);
// }
