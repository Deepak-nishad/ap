// const number=[1,2,3,4,5,6];
// const nums=number.map((val)=>val*5);
// console.log(nums);

// const count = ["India","finland","srilanka","Ireland"];

// const valueget= count.filter( val => val.includes("land"));

// console.log(valueget);

// const num1=[1,2,3,4,5,6];

// const sum= num1.reduce((acc , cur) =>acc+cur,0);
// console.log(sum);

const makePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const arrone = ["HTML", "CSS", "JAVASCRIPT", "TAILWIND"];
    if (arrone.length > 0) {
      resolve("Complted");
    } else {
      reject("incomplete");
    }
  }, 2000);
});

makePromise
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

// fetch Api


const url = "https://restcountries.com/v3.1/all"; // Countries

fetch(url)
  .then((response) => response.json()) 
  .then((data) => console.log(data))
  .catch((error) => console.log(error));