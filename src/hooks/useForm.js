import React, { useState } from 'react'

export const useForm = (initialForm={}) => {

    const [formState, setFormState] = useState(initialForm)

    

    //Funcion para detectar eventos

    const onInputChange = ({target})=>{
        const {name, value} = target;
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const onResetForm = ()=>{
        setFormState(initialForm)
    }
  

    return{
        ...formState, //para extraer las variables de username, email y password
        formState,
        onInputChange,
        onResetForm
    }
}
