import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul className='flex justify-around px-10 py-2 bg-neutral-600'>
    <Link to="/" >Home</Link>
    <Link to="miniProjects">MiniProject</Link>
    <Link to="majProjects">MajProjects</Link>
    </ul>
  )
}

export default Navbar