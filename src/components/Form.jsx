import React, { useRef } from 'react'

const Form = () => {
    const nameRef = useRef("");
    const passRef = useRef("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const loginData = {name:nameRef.current.value,password:passRef.current.value}

        console.log(loginData)
    }

  return (
    <div className='h-[100vh] bg-gray-500 text-center'>
      <h1 className="text-3xl font-bold">Login</h1>

      <form className='border-2 m-auto border-cyan-300 w-[500px] p-4 mt-10' onSubmit={handleSubmit}>
        <input className='bg-purple-600 ' type="text" ref={nameRef} />
        <br /> 
        <br /> 
        <input className='bg-purple-600 ' type="password" ref={passRef} />
        <br />
        <br />
        <input className='bg-cyan-400 text-slate-100 px-4 py-1 rounded-lg ' value="Login" type="submit" />
      </form>


    </div>
  )
}

export default Form
