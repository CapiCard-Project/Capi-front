
import React from 'react'

function MenuButton({onPressed, text}) {
    return (
        <div onClick={onPressed} 
        className ="relative group mb-10">
            <div
                className ="relative w-36 h-10 opacity-90 overflow-hidden rounded-xl bg-black z-10"
            >
                <div
                    className ="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"
                ></div>

                <div
                    className ="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black"
                >
                    <button
                        type='submit'
                        name="text"
                        className ="input font-semibold text-xs h-full opacity-90 w-full px-5 py-3 rounded-xl bg-black"
                    >
                        {text}
                    </button>
                </div>
                <div
                    className ="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-second_color to-pink-600 blur-[30px]"
                ></div>
            </div>
        </div>

    )
}

export default MenuButton
