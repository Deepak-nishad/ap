// promise

// pending
// fullfilled
// rejected

// Event Loop

// const userOne = () =>{
//     console.log("hello One");
// }

// const userTwo= () =>{
   
//     setTimeout(()=>{
//         console.log("I am inside ");
//     },3000)
//     console.log("hello Two");
// }

// const userThree = () =>{
//     console.log("hello Three");
// }

// userOne();
// userTwo();
// userThree();

// Promise

// const one = () =>{
//     return "I am one ";
// };

// const Two = () =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//                     resolve("crendintial correct")
//                 },3000);
//     });
// };

// const Three = () =>{
//     return "I am three ";
// };

// const callMe = async () =>{

//     letvalOne = one();
//     console.log(letvalOne);

//     letvalTwo = await Two();
//     console.log(letvalTwo);

//     letvalthree = Three();
//     console.log(letvalthree);
// }

// callMe();

// async function example

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f(); 




