import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDoList = ({toDo =[], onDeleteToDo,  onToggleToDo}) => {
  return (
  
   <ul className='list-group '>

  { toDo.map(todo =>(
     <ToDoItem key={todo.id} todo={todo} onDeleteToDo={ onDeleteToDo}  onToggleToDo={ onToggleToDo}/>
  ))

  }

   </ul>
  )
}
