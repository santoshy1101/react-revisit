import React, { useEffect, useState } from 'react'
import From from './From'

import ShowList from './Showlist'
const ControlForm = () => {
  const [data, setData] = useState([
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
  ])

  const [editableData,setEditableData] = useState(null)

  function addData(taskObj) {
    setData([...data, { ...taskObj, id: data.length + 1 }])
  }

  
  function deleteData(id) {
    
    setData(data.filter(ele=>ele.id!==id))
  }

  
  function editData(id) {
    
    setEditableData(data.find(ele=>ele.id===id));
    
  }
  function updateData(updatedTask) {
    const index = data.findIndex(ele=>ele.id===updatedTask.id);
    const newData = [...data];
    newData.splice(index,1,updatedTask)
    setData(newData)
    
  }

  
  


  
  return (
    <div>
      <h1>ControlForm</h1>

      <From editableData={editableData} updateData={updateData} addData={addData} />
      
      <ul>
        {data.map((list) => <ShowList key={list.id} {...list} deleteData={deleteData} editData={editData} />)}
      </ul>
    </div>
  )
}

export default ControlForm
