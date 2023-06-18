import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext, AuthProvider } from '../hooks/AuthProvider'

const Protected = (props) => {
  const {isAuth} = useContext(AuthContext)
  console.log(isAuth)
    const {Component} = props
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isAuth){
            navigate("/login")
        }
    }) 
  return (
    <div>
    <Component/>
    </div>
  )
}

export default Protected