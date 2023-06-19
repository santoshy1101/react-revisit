import React, { useEffect, useReducer, useState } from 'react'
import From from './From'
import ShowList from './Showlist'

const taskDb = [
  {
    id: 1,
    title: 'react',
    duration: '2min',
  },
  {
    id: 2,
    title: 'redux',
    duration: '5min',
  },
]

const ControlForm = () => {
  const [editableData, setEditableData] = useState(null)

  const taskReducer = (data, action) => {
    switch (action.type) {
      case 'ADD':
        return [...data, { ...action.payload, id: data.length + 1 }]

      case 'DELETE':
        return data.filter((ele) => ele.id !== action.payload)

      case 'UPDATE':
        const index = data.findIndex((ele) => ele.id === action.payload.id)
        const newData = [...data]
        newData.splice(index, 1, action.payload)

        return newData

      default:
        return data
    }
  }

  const [data, dispatch] = useReducer(taskReducer, taskDb)
  // const [data, setData] = useState(taskDb)

  // function addData(taskObj) {
  //   dispatch({type:"ADD",payload:taskObj})
  //   // setData([...data, { ...taskObj, id: data.length + 1 }])
  // }

  // function deleteData(id) {
  //   dispatch({type : "DELETE" , payload : id})
  //   // setData(data.filter(ele=>ele.id!==id))
  // }

  function editData(id) {
    setEditableData(data.find((ele) => ele.id === id))
  }
  // function updateData(updatedTask) {
  //   dispatch({type:"UPDATE", payload : updatedTask})
  //   // const index = data.findIndex(ele=>ele.id===updatedTask.id);
  //   // const newData = [...data];
  //   // newData.splice(index,1,updatedTask)
  //   // setData(newData)

  // }

  return (
    <div>
      <h1>ControlForm</h1>

      <From editableData={editableData} dispatch={dispatch} />

      <ul>
        {data.map((list) => (
          <ShowList
            key={list.id}
            {...list}
            dispatch={dispatch}
            editData={editData}
          />
        ))}
      </ul>
    </div>
  )
}

export default ControlForm
