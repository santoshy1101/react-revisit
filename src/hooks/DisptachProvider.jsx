import { createContext, useReducer } from "react";

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

export const dispatchContext = createContext(null)

const DispatchProvider =({children})=>{

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

    return <dispatchContext.Provider value={{data,dispatch}}>{children}</dispatchContext.Provider>
}

export default DispatchProvider;