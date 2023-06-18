import React, { useEffect, useState } from 'react'
const initState = {
  title: '',
  duration: '',
}
const From = ({ addData, editableData, updateData }) => {
  const [task, setTask] = useState(initState)
  const [editMode, setEditMode] = useState(false)

//   update task
  function handleChange(e) {
    setTask({ ...task, [e.target.title]: e.target.value })
  }
// form submit
  function handleSubmit(e) {
    e.preventDefault()
    // console.log(task)
    if (editMode) {
      updateData(task)
    } 
    else {
        console.log(task)
      addData(task)
    }
    setTask(initState)
    setEditMode(false)
  }

//    
  useEffect(() => {
    if (editableData) {
      setTask(editableData)
      setEditMode(true)
    }
  }, [editableData])

  return (
    <form
      className="flex justify-around px-2 py-2 bg-green-700"
      onSubmit={handleSubmit}
    >
      <input
        value={task.title}
        type="text"
        title="title"
        placeholder="Enter Task"
        onChange={handleChange}
      />
      <input
        value={task.duration}
        type="text"
        title="duration"
        placeholder="Enter duration"
        onChange={handleChange}
      />
      <button className="px-4 py-1 bg-indigo-700 text-slate-100">
        {editMode ? 'Edit Task' : 'Add Task'}
      </button>
    </form>
  )
}

export default From
