
const mongoose = require('mongoose')
const Schema =mongoose.Schema

const todoSchema =new Schema({
  todoitem:{
    type: String
  },
  status:{
    type:String
  }

},{timeStamp:true})

const Todo=mongoose.model('Todorecord',todoSchema)
module.exports=Todo