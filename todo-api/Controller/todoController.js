const express = require('express')
const Todo = require('../Models/todoModel')



const displayAll = (req, res, next) => {
  Todo.find()
    .then(response => {
      res.json({
        response
      })
    })
    .catch(error => {
      res.json({
        message: 'error occured'
      })
    })
}


const insert = (req, res, next) => {
  let todo = new Todo({
    todoitem: req.body.todoitem,
    status: req.body.status,
  })
  todo.save()
    .then(response => {
      res.json({
        response
      })
    })
    .catch(error => {
      res.json({
        message: 'error occured'
      })
    })
}


const update =(req,res,next)=>{
  let TodoId=req.body.id
  let updatedTodo ={
    todoitem: req.body.todoitem,
    status: req.body.status,
  }
  Todo.findByIdAndUpdate(TodoId,{$set:updatedTodo})
  .then(response=>{
    res.json({
      response
    })
  })
  .catch(error=>{
    res.json({
      msg:"error occured"
    })
  })
}


const remove = (req,res,next)=>{
  let TodoId=req.body._id
  Todo.findByIdAndRemove(TodoId)
  .then(response=>{
    res.json({
      response
    })
  })
  .catch(error=>{
    res.json({
      msg:"error occured"
    })
  })
}

module.exports = { displayAll,insert,update,remove }