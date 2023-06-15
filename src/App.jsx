import React, { useState } from "react"
import Form from "./components/Form"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import MiniProjects from "./components/MiniProjects"
import MajProjects from "./components/MajProjects"
import Navbar from "./Navbar"
import Protected from "./components/Protected"

export default function App() {
  const [count, setCount] = useState("");
  
  return (
    <div className="text-3xl font-extrabold ">
      Hello world! {count}
      <button className="px-4 py-1 bg-gray-800 text-slate-100" onClick={()=>setCount(pre=>pre+1)}>+1</button>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/miniProjects" element={<MiniProjects/>}/>
      <Route path="/majProjects" element={<Protected Component={MajProjects} />}/>
      <Route path="/login" element={<Form/>}/>
      </Routes>
    </div>
  )
}