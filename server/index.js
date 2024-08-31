import express from 'express'

const app=express();

app.get("/",(req,res)=>{
    res.send("testing this thing oh i keep on coming back")
})


app.listen(3006,(err)=>{
    if(err) console.log(err);
    console.log("server listening to port 3006 ");
    
})