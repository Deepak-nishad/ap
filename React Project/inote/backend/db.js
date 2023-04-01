const mongoose = require('mongoose');

const express= require("express")
const app=express();

mongoose.connect('mongodb://127.0.0.1:27017/test');

const port= 8000;
app.listen(port , ()=>{
    console.log(`app is running at ${port}`);
})
+