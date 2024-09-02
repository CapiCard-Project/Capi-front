import NavBar from "../Components/NavBar"
import CardReveal from "../Components/CardReveald"
import { useState } from "react"

function Tienda() {
    
    //variables de texto
    const [text, setText] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="flex flex-col bg-gradient-to-bl from-primary via-primary/95 to-black w-full h-screen">
            <NavBar />

            <div className="flex w-full h-full justify-end">
                <div className="flex flex-col w-10/12 h-auto bg-black my-24 bg-opacity-30 rounded-s-3xl justify-center">

                    <div>
                        <h1 className="text-second_color font-extrabold text-xl md:text-5xl ml-10 mb-5">{text}</h1>
                        <span className="text-white font-extralight ml-20">{description}</span>

                    </div>
                    <div className="flex flex-row w-full h-auto justify-center items-center gap-x-5 mt-5">
                        <CardReveal Price="100" text='Sobre de Bronce' setDescription={setDescription} setText={setText} descripcion='Este sobre contiene capibaras comunes, perfectas para comenzar tu colección.'/>
                        <CardReveal Price="100" text='Sobre de Plata' setDescription={setDescription} setText={setText} descripcion='Este sobre ofrece una mezcla equilibrada de capibaras de rareza media, con una pequeña posibilidad de obtener capibaras raras.'/>
                        <CardReveal Price="100" text='Sobre de Oro' setDescription={setDescription} setText={setText} descripcion='Este sobre contiene capibaras de alta rareza, incluyendo las más especiales y únicas.'/>
                    </div>




                </div>

            </div>

        </div>
    )
}

export default Tienda
