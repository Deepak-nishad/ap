// const express = require('express')
import { Express } from "express";
import dateFormat, { masks } from "dateformat";
const app = express()
const port = 3000 || process.env.PORT

app.get('/', (req, res) => {
  res.status(201).send('Hello akku! dee')
})

app.get("/api/v1/instagram", (req, res) =>{
    const instasocial={
        username: "Deepak",
        folowers: 66,
        follows: 70,
        date :dateFormat("Jun 9 2007", "fullDate"),
    };




  res.status(200).json({instasocial}); 
  
// direct
// res.status(200).json({
//     username: "Deepak",
//         folowers: 66,
//         follows: 70,
//         date : Date.now(),
//   });

})
    
app.get("/api/v1/facebook", (req, res) =>{
    const instasocial={
        username: "facebook",
        folowers: 66,
        follows: 70,
        date : Date.now(),
    };
    res.status(200).json({instasocial}); 
})
    
app.get("/api/v1/linkedin", (req, res) =>{
    const instasocial={
        username: "linkind",
        folowers: 66,
        follows: 70,
        date : Date.now(),
    };
    res.status(200).json({instasocial}); 
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})