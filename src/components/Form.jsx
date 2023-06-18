import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../hooks/AuthProvider';

const Form = () => {
    const emailRef = useRef("");
    const passRef = useRef("");
    const navigate = useNavigate()
    const user = useContext(AuthContext)
  console.log(user)

    const getData=async()=>{
     const response= await fetch("http://localhost:4000/admin")
      const data = await response.json();
      return data
      
    }

   
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        const loginData = {email:emailRef.current.value,password:passRef.current.value}

        console.log(loginData)
        getData().then(data=>{
          if(data[0].email===loginData.email && data[0].password===loginData.password){
            // localStorage.setItem("login",true)
            user.handleLogin(data)
            
            navigate("/majProjects")

            console.log("login Succes")
          }
          else{
            alert("Enter valid credential")
          }
        })
        
    }

   

  return (
    <div className='h-[100vh] bg-gray-500 text-center'>
      <h1 className="text-3xl font-bold">Login</h1>

      <form className='border-8 m-auto  w-[500px] p-4 mt-10' onSubmit={handleSubmit}>
        <input className='px-2 py-1 bg-purple-600' type="email" ref={emailRef} placeholder='Enter Email' />
        <br /> 
        <br /> 
        <input className='px-2 py-1 bg-purple-600 ' type="password" ref={passRef} placeholder='Enter Password' />
        <br />
        <br />
        <input className='px-4 py-1 rounded-lg bg-cyan-400 text-slate-100 ' value="Login" type="submit" />
      </form>


    </div>
  )
}

export default Form
