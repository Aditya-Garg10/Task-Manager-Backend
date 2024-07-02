
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true,
        unique : false
    },
    password:{
        type:String,
        required: false 
    },
    date :{
        type: Date,
        default:  Date.now
    }
  },{timestamps: true});


const User = mongoose.model('users', userSchema);
module.exports = User;