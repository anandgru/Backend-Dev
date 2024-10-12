const express=require('express');
const app=express.Router();
app.get('/',(req,res,next)=>{
    res.send('<h1>Anand is Lullu</h1>');
});
module.exports=app;