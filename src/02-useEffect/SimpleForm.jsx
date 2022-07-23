import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Dhanibel',
        email: 'diosa@gmail.com'
    })

    const {username, email} = formState

    //Funcion para detectar eventos

    const onInputChange = ({target})=>{
        const {name, value} = target;
        setFormState({
            ...formState,
            [name] : value
        })
    }

    useEffect(()=>{
        console.log('UseEffect was used');
    })

    
    

  return <>
    <h1>Simple Form </h1>

    <hr/>
    
    {/* Text input */}
    <input 
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}

    />

    {/* Email input */}
    <input 
        type='email'
        className='form-control mt-2'
        placeholder='diosa@gmail.com'
        name='email'
        value={email}
        onChange={onInputChange}

    />
    {
        (username === 'Dhanibel2') && <Message/>
    }

  </>
}
