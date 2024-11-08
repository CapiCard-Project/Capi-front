import NavBar from "../Components/NavBar"
import CardReveal from "../Components/CardReveald"
import { useState } from "react"

function Tienda() {
    
    //variables de texto
    const [text, setText] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="flex flex-col bg-gradient-to-b from-black to-slate-900 w-full min-h-screen">
            <NavBar />

            <div className="flex w-full h-full justify-end">
                <div className="flex flex-col w-full md:w-10/12 h-auto bg-black my-24 bg-opacity-30 rounded-s-3xl justify-center ">

                    <div>
                        <h1 className="text-second_color font-extrabold text-xl md:text-5xl ml-10 mb-5">{text}</h1>
                        <span className="text-white font-extralight ml-20">{description}</span>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 px-5">
                        <CardReveal Price="500" text='Bronze pack' setDescription={setDescription} setText={setText} descripcion='This pack contains common capybaras, perfect for starting your collection.' probabilityProps={1}/>
                        <CardReveal Price="1000" text='Silver pack' setDescription={setDescription} setText={setText} descripcion='This pack offers a balanced mix of medium rarity capybaras, with a small chance of obtaining rare capybaras.' probabilityProps={2}/>
                        <CardReveal Price="2500" text='Gold pack' setDescription={setDescription} setText={setText} descripcion='This pack contains high rarity capybaras, including the most special and unique ones.' probabilityProps={5}/>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Tienda
