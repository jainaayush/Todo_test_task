const express =require('express');
const mongoose =require('mongoose');
const morgan =require('morgan');
var cors = require('cors')
const TodoRoutes = require('./Routes/todoRoutes')

mongoose.connect('mongodb://127.0.0.1:27017/todo',{useNewUrlParser:true,useUnifiedTopology:true})
const db =mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log("connection establish")
})

const app=express()
app.use(cors());

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT =process.env.PORT || 3080
app.use('/api',TodoRoutes)
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})