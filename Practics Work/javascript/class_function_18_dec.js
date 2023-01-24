function sum(value1 , value2){
    let value=value1+value2;
    return value;
}
let add =sum(10,25);
// console.log(add);

// string 
function add1(url, domain){
    let con='https://';
    let result=con+url+domain;
    return result;
}
let result=add1('deepak','.me');
// console.log(result);

function nihal(){
let sum=0;
console.log(arguments);
for(let i=0; i<arguments.length;i++)
{
    sum=sum+arguments[i];
}
return sum;
}
// console.log(nihal(1,2,3,5,8,9));

// Arrow function
let manish = (val1,val2)=> {
    console.log('main mainsh hun', val1,val2);
}
// manish(1,2);

//object 
let userName = {
    firstname: 'deepak',
    lastname:'nishad',
    role:'admin',
    logincount:25,
};
// console.log(userName);
// console.log(userName.logincount);

for(let x in userName)
{
    console.log(x);
}
for(let x in userName)
{
   
    console.log(userName[x]);
}
