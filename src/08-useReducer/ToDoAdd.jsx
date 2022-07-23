import React from 'react'
import { useForm } from '../hooks/useForm'

export const ToDoAdd = ({onNewTodo}) => {
  const {description, onInputChange, onResetForm} = useForm({ description: ''});

  const onFormSubmit = (event)=>{
    event.preventDefault();
    if(description.length <= 1) return;

    const newToDo = {
        id: new Date().getTime(),
        description,
        done: false,
    }
    onNewTodo(newToDo)
    onResetForm();

  }

  return (
    <form onSubmit={onFormSubmit}>
    <input 
        type='text'
        placeholder="What's up to do?"
        className="form-control"
        value={description}
        name="description"
        onChange={onInputChange}
    />
    <button type='submit' className='btn btn-outline-primary mt-1'>Add Item</button>
    </form>
  )
}
