let name = ["hitesh sir",'Anurag ', 'surya','Anirudh','updadhya'];
console.log(name);
console.log(name.length);
console.log(name[4]);
console.log(name[5]);
console.log(name[name.length-1]);
name[1]='amit';
console.log(name);
// push
name.push('vyom');
console.log(name);
// slice
console.log(name.slice(1,3));

// splice
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");
console.log(myFish);