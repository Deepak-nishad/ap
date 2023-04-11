function sum(arr){
    let sum=0;
    console.log(arr.length);
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+i;
    }
    return sum;
}

let sumarray = [1,2,3,4,5];
let output=sum(sumarray);
console.log(output);