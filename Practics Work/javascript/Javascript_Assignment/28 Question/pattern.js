
// triangle pattern 
let string ="";
for(let i=0;i<3;i++)
{
    for(let j=0;j<=i;j++)
    {
       string +="* ";
    }
    string +="\n";
}
console.log(string);

let  rectangle="";
for(let i=0;i<3;i++)
{
    for(let j=0;j<=3;j++)
    {
       rectangle +="* ";
    }
    rectangle +="\n";
}
console.log(rectangle);