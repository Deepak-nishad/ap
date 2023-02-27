import React from "react";

function Card( { myname ,list}){
    // console.log(props);
    return(
        <>
        This is  a card 
        <div>My name</div>
        <ul>
            {
                list.map(l =>(
                    <li>{l}</li>
                ))}
        </ul>
        
        </>
    )
}

export default Card