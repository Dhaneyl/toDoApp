import React, { useMemo } from 'react'
import { useCounter } from '../hooks'

const heavyStuff = (iteationNumber = 50) => {
    for (let i = 0; i < iteationNumber; i++){
        console.log('Ahi vamos');
    }
    return `${iteationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {
    const{counter, increase, decrease} = useCounter(20);
   const memorizedValue = useMemo(()=>heavyStuff(counter), [counter]);

  return <>
    <h1>Counter: <small>{counter}</small></h1>
    <hr/>
    <h4>{memorizedValue}</h4>

    <button className='btn btn-primary' onClick={()=>increase(1)}> +1</button>
    <button className='btn btn-primary' onClick={()=>decrease(1)}> -1</button>
  </>
}
