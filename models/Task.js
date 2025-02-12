const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        unique: false
    },
    title:{
        type: String,
        required: true 
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        default: 'pending'
    },
    date :{
        type: Date,
        default:  Date.now
    }
  },{timestamps: true});

const Task =   mongoose.model('task', taskSchema)
  module.exports = Task;