import React from 'react'
import { Link } from 'react-router-dom'

const Links =[
  {path:"/",name:"Home"}, 
  {path:"/miniProjects",name:"MiniProject"}, 
  {path:"/majProjects",name:"MajProjects"}, 
  {path:"/login",name:"Login"}, 
  {path:"/stopwatch",name:"Stopwatch"}, 
  {path:"/controledFrom",name:"ControledFrom"}, 
]

const Navbar = () => {
  return (
    <ul className='flex justify-around px-10 py-2 bg-neutral-600 rounded-2xl'>
    {
      Links.map((ele,ind)=>(
        <Link key={ind} className='px-3 py-1 rounded-lg hover:bg-blue-500 hover:text-slate-100' to={ele.path} >{ele.name}</Link>

      ))
    }
    
    </ul>
  )
}

export default Navbar