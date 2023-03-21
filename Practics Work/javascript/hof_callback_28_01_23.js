
// function a(){
//     console.log("I was called by a funtion");
// }

// function b(){
//     a();
// }

// b();

// const arr= ["hi","hello","amit","sumit","namsaty"];

// arr.forEach(address);

// function address(val){
//     console.log(val);
// }


// when we talk about callback we take arrow function 
// const arr= ["hi","hello","amit","sumit","namsaty"];

// arr.forEach((val) => {
//   console.log(val);  
// });

// setTimeout(()=>{
//     console.log("hello amit");
// },5000)

// setInterval(()=>{
//     console.log("`😂`");
// },1000);

// map
// const num= [1,2,3,4,5];
// const squre=num.map((num)=> {
//     return num*num;
// })
// console.log(squre);

// filter

// const count= [
//     "india",
//     "india",
//     "india",
//     "india",
//     "india",
//     "india",
//     "india",
//     "finland",
//     "indland"
// ];

// const store =count.filter((val)=>{
//     return val.includes("land")
// }) 
// console.log(store);

//reduce 

const num1= [1,2,3,4,5,6,7];
const sum1= num1.reduce((acc,curr)=>{
    // console.log(acc,curr);
    return acc+curr+1;
})
console.log( sum1);


// const num= [1,2,3,4,5,6,7];
// const sum= num.reduce((acc,curr)=> acc+curr, 1)


//  console.log( sum);

//sort

// const names =["Amit","sumit","Aman","Deepak"];
// console.log(names.sort());
// console.log(names.reverse());

// Destructuring  spread and rest


// spread
// function someone(x,y)
// {
//      return x + y;
// }

// let vari = [9, 7];
// console.log(vari);

// console.log(someone(...vari));

// rest

// function sum(... args){
//     console.log(args); // rest making the array
//     let sum=0;
//     for(const x of args){
//         sum=sum+x;
//     }
// return sum;
// }

// console.log(sum(1,2,3,5,6,48,9,10)); 









