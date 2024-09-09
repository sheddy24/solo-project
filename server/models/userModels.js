import mongoose from 'mongoose'

const UserSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please enter product name"]
        },

        email:{
            type:String,
            required:[true,"please enter product name"]
        },

        password:{
            type:String,
            required:[true,"please enter product name"]
        }


    }
)

const User=mongoose.model('User',UserSchema)
export default User