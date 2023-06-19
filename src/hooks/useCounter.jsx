
import React, { useState } from 'react'

const useCounter = () => {
    const [count,setCount] = useState(0);

    const increment =()=>{
        console.log("count",count)
        setCount(pre=>pre+1)
    }
    const decrement =()=>{
        setCount(pre=>pre-1)
    }
  return {count,increment,decrement}
}

export default useCounter