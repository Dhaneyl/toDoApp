import React, { useEffect, useReducer } from 'react'
import { toDoReducer } from './ToDoReducer'

const initialState = [];
const init = () =>{
    return JSON.parse(localStorage.getItem('toDo')) || []
}
export const useToDo = () => {
    const [toDo, dispatch] = useReducer(toDoReducer, initialState, init)
    

    useEffect(() => {
      localStorage.setItem('toDo', JSON.stringify(toDo))
    }, [toDo])
    

    const handleNewToDo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch(action)
    }

    const handleDeleteToDo = (id) => {
        //dispatch es el que cambia el estado y es el que va a disparar la accion de borrar
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
        
    }

    const handleToggleToDo = (id) =>{
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
        
    }


  return {
    toDo, 
    toDoCounter: toDo.length,
    toDoCounterPending: toDo.filter(todo=> !todo.done).length,
    handleNewToDo,
    handleDeleteToDo,
    handleToggleToDo,

  }
}
