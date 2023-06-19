import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'

const ShowList = ({ title, id, duration, editData, dispatch }) => {
  return (
    <ul className="flex m-auto w-[400px] mb-2 justify-around bg-slate-800 text-slate-50">
      <li className="px-4 py-1 mb-2 font-semibold ">{title}</li>
      {duration && (
        <li className="px-4 py-1 mb-2 font-semibold ">{duration}</li>
      )}
      <button onClick={() => editData(id)}>
        <FaEdit size={40} />
      </button>
      <button onClick={() => dispatch({ type: 'DELETE', payload: id })}>
        <MdDeleteForever size={40} />
      </button>
    </ul>
  )
}

export default ShowList
