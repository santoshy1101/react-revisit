import React from "react"
import Form from "./components/Form"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import MiniProjects from "./components/MiniProjects"
import MajProjects from "./components/MajProjects"
import Navbar from "./Navbar"
import Protected from "./components/Protected"

export default function App() {
  return (
    <div className="text-3xl font-extrabold ">
      Hello world!
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