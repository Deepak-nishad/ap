import mongoose from "mongoose";
import app from './app.js';

import config from "./config/index.js";

( async () => {
   
    try{
        await  mongoose.connect(config.MONGODB_URL);
        console.log("DB connected ");
 
        // before listening  we must something app is not facing  Any Error.
       app.on('error', (err) =>{
         console.error("Error : ", err);
         throw err
       })
     
       // Listening on port

       const onlistening = () =>{
         console.log(`Listening on port ${config.PORT}`);
       }
       app.listen(config.PORT, onlistening);
 
     }
     catch (err){
         console.error("Error " , err)
         throw err
     }

}) () 