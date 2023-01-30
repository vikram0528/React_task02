import React from 'react'
import { useState } from 'react'
import './Todolist.css'

const Todo = ({todo, remove, update}) => {

    const [isediting, setisediting] = useState(false)
    const [task, settask] = useState(todo.task)

    const handleClick = e => {
        console.log("todo", e.target.id)
        remove(e.target.id)
    }

    const toggleform = () =>{
        setisediting(!isediting)
    }

   const handleChange = (event) =>{
 
    settask(event.target.value)

   }

   const handleUpdate = e => {
    e.preventDefault()
    update(todo.id,task)
    toggleform()
   }

    let result;

    if(isediting) {
result = (
    <div className='updatetodo'>
        <form onSubmit={handleUpdate}>
            <input className  ="todoinput" value = {task} onChange = {handleChange}/>
            <button className='button' >save</button>
        </form>
    </div>
)
    }
    else{
        result = (
            <div className='updatetodo'>
                <div className ="div1">
<li className='todoli'
                id = {todo.id}>{todo.task}</li>
           
                </div>
                <div className='div2'>
                <button className='button' onClick={toggleform}>edit </button>
            <button className='button' id = {todo.id} onClick={handleClick}>Delete</button>
          
                </div>
          
            
            </div>
        
        )
    }

    return result
    }
  

export default Todo