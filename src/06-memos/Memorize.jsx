import React from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small';

export const Memorize = () => {
    const{counter, increase, decrease} = useCounter();
  return <>
    <h1>Counter: <Small value={counter}/></h1>
    <hr/>

    <button className='btn btn-primary' onClick={()=>increase(1)}> +1</button>
    <button className='btn btn-primary' onClick={()=>decrease(1)}> -1</button>
  </>
}
