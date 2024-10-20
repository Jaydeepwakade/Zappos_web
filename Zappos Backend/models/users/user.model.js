
const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
    Name:{type:String, required:true},
    email:{type:String,required:true},
    phone:{type:Number, requires:true},
    isVip:{type:Boolean, default:false},
    password:{type:String,required:true},
    address:{type:String, default:""}

})

const userModel = mongoose.model('user',UserSchema)

module.exports = userModel