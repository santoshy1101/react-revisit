import React, { useContext } from 'react'
import { AuthContext } from '../hooks/AuthProvider'
import useCounter from '../hooks/useCounter'

const MiniProjects = () => {
  const {count,increment,decrement} = useCounter()
  return (
    <div>
    <h1>MiniProjects</h1>
    <button className='px-2 py-1 bg-slate-700 text-slate-100' onClick={increment}>increment</button>
    <h2 >{count}</h2>
    <button className='px-2 py-1 bg-slate-700 text-slate-100' onClick={decrement}>decrement</button>
    </div>
  )
}

export default MiniProjects