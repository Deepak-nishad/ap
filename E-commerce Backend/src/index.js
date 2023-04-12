import mongoose from "mongoose";
import app from './app.js';

( async () => {
   
    try{
        await  mongoose.connect('mongodb://localhost:27017/ecomm');
        console.log("DB connected ");
 
        // before listening  we must something app is not facing  Any Error.
       app.on('error', (err) =>{
         console.error("Error : ", err);
         throw err
       })
     
       // Listening on port

       const onlistening = () =>{
         console.log(`Listening on port 5000 `);
       }
       app.listen(5000, onlistening);
 
     }
     catch (err){
         console.error("Error " , err)
         throw err
     }

}) () 