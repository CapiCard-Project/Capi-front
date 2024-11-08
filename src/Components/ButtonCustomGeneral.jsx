import React from 'react'

function ButtonCustomGeneral({text, onClickProp}) {
  return (
    <button
    onClick={onClickProp} 
    className='w-full text-white text-xs font-bold bg-gradient-to-br from-second_color to-pink-700 py-3 rounded-3xl'>
      {text}
    </button>
  )
}

export default ButtonCustomGeneral
