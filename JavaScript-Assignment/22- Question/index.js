const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find median age
const middleIndex = Math.floor(ages.length / 2);
const medianAge =
  ages.length % 2 === 0
    ? (ages[middleIndex - 1] + ages[middleIndex]) / 2
    : ages[middleIndex];

// Find average age
const sumAges = ages.reduce((sum, age) => sum + age, 0);
const averageAge = sumAges / ages.length;

// Find range of ages
const ageRange = maxAge - minAge;

// Compare (min - average) and (max - average)
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

console.log("Sorted Ages:", ages);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Age Range:", ageRange);
console.log("Difference (min - average):", diffMinAverage);
console.log("Difference (max - average):", diffMaxAverage);
