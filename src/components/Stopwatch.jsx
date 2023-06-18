import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [time,setTime] = useState(0);
    const [start,setStart] = useState(false)

    let id;
    useEffect(()=>{
        if(start){
            id = setInterval(()=>{
                setTime(pre=>pre+1)
            },1000)
        }
        

        return ()=>clearInterval(id)
    },[time,start])
  return (
    <>
    <div>Stopwatch {time}</div>
    <button onClick={()=>setStart(!start)} className='px-4 py-1 rounded-lg bg-cyan-800 text-slate-200'>{ start ?  "End" :"start"  } </button>
    </>
  )
}

export default Stopwatch