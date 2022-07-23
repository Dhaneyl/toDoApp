import React from 'react'

export const ToDoItem = ({todo, onDeleteToDo,  onToggleToDo} ) => {
  return (
    <li className='list-group-item d-flex justify-content-between mt-2'>
    <span className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
     onClick={() => onToggleToDo(todo.id)}>
     {todo.description} 
    </span>
    <button className='btn btn-outline-danger' onClick={() => onDeleteToDo(todo.id)}> 
    <span className="material-symbols-outlined">delete</span>
    </button>
    </li>
  )
}
