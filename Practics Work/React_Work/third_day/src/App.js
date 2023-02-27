import React, { useState } from 'react'
import Card from './card'
import axios from 'axios';
function App() {

  const [ details, setdetails] =useState({})
   
  const fetchDetails = async () =>{
    const {data}= await axios.get('https://randomuser.me/api/')
    console.log("Respose", data);

    const details = data.results[0]
    setdetails(details)
  }

  let list =["Akku ","Deepak","Vishal"]
  return (
    <>
    <div>App</div>
    <Card myname="Deepak"  list={list} details={details}/>

  <button onClick={fetchDetails}>Get dateils</button>

    </>
  )
}


export default App