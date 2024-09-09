import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/soloproject')
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("not connected");
})