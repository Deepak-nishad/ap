const express = require('express');
const router =express.Router();


router.get('/', (req,res)=>{
    // console.log(req.body);
    const user = user(req.body);
    user.save()
    res.send(req.body);

})

module.exports =router