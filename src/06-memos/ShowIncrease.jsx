import React from 'react'

export const ShowIncrease = ({increase}) => {
  return (
  <button className='btn btn-primary' onClick={()=>{increase(5)}}> increase</button>
  )
}
