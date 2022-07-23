import React, { useEffect, useReducer } from 'react'
import { ToDoAdd } from './ToDoAdd'
import { ToDoList } from './ToDoList'
import { useToDo } from './useToDo'





export const ToDoApp = () => {
   const{toDo, handleDeleteToDo, handleNewToDo, handleToggleToDo, toDoCounter, toDoCounterPending} = useToDo()
  return <>
    <h1 className='display-1 text-center'><strong>ToDoApp</strong></h1>
    <hr className='mb-5 h1Line'/>
    <h3 className='mb-5 text-center display-6'><strong>ToDo</strong>: {toDoCounter} <small><strong>Pending:</strong> {toDoCounterPending}</small></h3>

    <div className='row'> 

        <div className='col-7'>
         <ToDoList toDo={toDo} onDeleteToDo={handleDeleteToDo}  onToggleToDo={handleToggleToDo}/>

        </div>

        <div className='col-5'>

            <h4 className='text-center'>Add toDo to your list</h4>
            <hr/>
           <ToDoAdd onNewTodo={handleNewToDo} />
        </div>
    </div>


    
  </>
}
