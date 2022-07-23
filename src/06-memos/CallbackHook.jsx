import React, { useCallback, useState } from 'react'
import { ShowIncrease } from './ShowIncrease'

export const CallbackHook = () => {

   const [counter, setcounter] = useState(10)   

   const increase = useCallback(
    (value) => {
       setcounter((c)=>c + value)
    },
    [],
  )
  return <>
    <h1>useCallback hook: {counter}</h1>
    <hr/>
    <ShowIncrease increase={increase}/>
  </>
}
