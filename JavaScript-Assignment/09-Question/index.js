const truthyString = "Hello, world!";
if (truthyString) {
  console.log("This statement is truth.");
}

const truthyNumber = 42;
if (truthyNumber) {
  console.log("This statement is truth.");
}

const truthyArray = [1, 2, 3];
if (truthyArray) {
  console.log("This statement is truth.");
}

const falsyString = "";
if (!falsyString) {
  console.log("This statement is false.");
}

const falsyNumber = 0;
if (!falsyNumber) {
  console.log("This statement is false.");
}

const falsyNull = null;
if (!falsyNull) {
  console.log("This statement is false.");
}
