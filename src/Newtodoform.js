import React from 'react'
import { useState } from 'react'
import {v4 as uuid } from 'uuid'
import './Todolist.css'


const Newtodoform = ({ createtodo }) => {
    const [userinput,setuserinput] = useState({})

    const handlechange = (event) =>{

        setuserinput({ [event.target.name]: event.target.value })

    }

    const handlesubmit = (event) => {

        event.preventDefault();
        
        if(userinput.task === '')
{
    alert("please enter the task")
}
else{
     const newTodo = {id:uuid(), task: userinput.task }
     createtodo(newTodo)
     setuserinput({ task: '' })
}   
    }

  return (
    <form onSubmit={handlesubmit}>
        <div>
        <input className  ="todoinput" value ={userinput.task}
        onChange ={handlechange}
        type ="text"
        name = "task"
        placeholder='new todo'
        />
        </div>
        

        <button className='add'>Add Task</button>
    </form>
  )
}

export default Newtodoform