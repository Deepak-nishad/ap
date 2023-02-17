let user=prompt("Enter the Age :- ");
if(user>=18)
{
    console.log("You are old enough to drive ");
}
else{
    let getage= 18-user;
    console.log(` Wait for ${getage} driving`);
}