import React from 'react'
import './Todolist.css'
import { useState } from 'react'
import Newtodoform from './Newtodoform'
import Todo from './Todo'
const Todolist = () => {

  const[todos,setodos] = useState([])

  const remove = id =>
  {
    console.log(id)
    setodos(todos.filter(todo => todo.id !== id))
  }

  const update = (id, updatetask) => {
  
    const updatetodos = todos.map( todo => {

        if(todo.id === id) {
            
            return {...todo, task:updatetask}
        }
        return todo
  })
setodos(updatetodos)
  }

  const create = newtodo =>{
    setodos([...todos, newtodo])

  }

  console.log(todos)

  const todolist = todos.map(todo => (
    <Todo
    
    key = {todo.id}
    remove ={remove}
    update ={update}
    todo ={todo}
    />
  ))

  return(

    <div className='todoframe'>
        <div className='todoframediv'>
            <h1>React Todo List</h1>
           <Newtodoform createtodo ={create}/>
            <ul>{todolist}</ul>
        </div>
        
    </div>
  )
  
}

export default Todolist