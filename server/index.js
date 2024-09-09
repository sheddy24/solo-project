import express from 'express'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import authRoutes from './routes/authRoutes.js'
import productRoutes from "./routes/productRoutes.js"


const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:3000"
}))

// app.get("/",(req,res)=>{
//     res.send("testing this thing oh i keep on coming back")
// })

app.use("/test",authRoutes)
app.use('/',productRoutes)


mongoose.connect('mongodb://localhost:27017/soloproject')
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("not connected");
})


app.listen(3006,(err)=>{
    if(err) console.log(err);
    console.log("server listening to port 3006 ");
    
})