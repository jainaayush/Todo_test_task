import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Add,Remove,Show,Update} from '../Actions'
import {postdata,getdata} from '../Services/fetchServices'

function TodoList () {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.TodoReducer.Allrecord)
  const [todoitem, setTodoitem] = React.useState('');
  const [status, setStatus] = React.useState("pending");
  const inputDivClassName= "fontSize-large border padding"

  function handleInputChange(e) {
    setTodoitem(e.target.value)
  }

  async function handleSubmit () {
    const body = {todoitem, status}
    const url = "api/insert"
    const result =await postdata(body,url)
    dispatch(Add(result))
    setTodoitem('')

  }

  async function handleRemove(todo) {
    const url = "api/remove"
    await postdata(todo,url)
    dispatch(Remove(todo._id))
  }

  async function handleUpdateStatus(todo) {
    const url = "api/update"
    let updateStatus 
    {todo.status === "pending" ? updateStatus = "completed" : updateStatus = "pending"}
    const body = {todoitem:todo.todoitem,status:updateStatus,id:todo._id}
    await postdata(body,url)
    dispatch(Update(body))
  }

  async function fetchData () {
    const result =await getdata()
    dispatch(Show(result))
  }

  React.useEffect(()=>{
    fetchData()
  },[])

    return(
        <div className='center'>
            <div className='container'>
              <div><h1>To Do</h1></div>
              <div style={{display:'flex',padding:'20px 0'}}>
                  <input type='text' className={`w-100 radiusleft ${inputDivClassName}`} placeholder="Whats needs to be done?" name='todoInput' onChange={(e)=>{handleInputChange(e)}}/>
                  <button type='button' className={`addButton radiusright ${inputDivClassName}`} onClick={()=>{handleSubmit()}}>Add</button>
              </div>
              <div className="scroll">
              {apiData.map((todo,index)=>{
                return(
                  <div className='todolist' key={index}>
                    {todo.status !== "completed" ?
                      <p className='ptag fontSize-large' onClick={()=>{handleUpdateStatus(todo)}}>{todo.todoitem}</p>
                      :
                      <s className='ptag fontSize-large' style={{color:'gray'}} onClick={()=>{handleUpdateStatus(todo)}}>{todo.todoitem}</s>
                    }
                      {todo.status !== "completed" && <button type='button' className='todoListButton borderNone fontSize-large radiusbutton' onClick={()=>{handleRemove(todo)}}>Remove</button>}
                  </div>
                )
              })}
              </div>
            </div>
        </div>
    )
}
export default TodoList