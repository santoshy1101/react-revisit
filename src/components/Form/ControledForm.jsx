import React, { useContext, useEffect, useReducer, useState } from 'react'
import From from './From'
import ShowList from './Showlist'
import { dispatchContext } from '../../hooks/DisptachProvider'



const ControlForm = () => {
  const [editableData, setEditableData] = useState(null)
const {data } = useContext(dispatchContext)

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
    <>
      <h1>ControlForm</h1>

      <From editableData={editableData}  />

      <ul>
        {data.map((list) => (
          <ShowList
            key={list.id}
            {...list}
            editData={editData}
          />
        ))}
      </ul>
    </>
  )
}

export default ControlForm
