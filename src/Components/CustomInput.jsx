

import React from 'react'

function CustomInput({placeholder, type, set}) {
  return (
    <input 
        type={type} 
        placeholder={placeholder}
        onChange={(e) => set(e.target.value)}
        className="w-full placeholder:text-white bg-primary placeholder:text-xs py-3 px-5 rounded-3xl border-2 border-white text-white text-sm"
    />
  )
}

export default CustomInput
