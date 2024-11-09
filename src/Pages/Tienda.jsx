import NavBar from "../Components/NavBar"
import CardReveal from "../Components/CardReveald"
import MenuButton from "../Components/MenuButton"
import store from "../assets/store.png"
import React, { useEffect, useState } from "react"

function Tienda() {

    const [isDesktopState, setIsDesktopState] = useState(window.innerWidth > 768);

    //state para abrir modal
    const [isOpen, setIsOpen] = useState(false);

    //state de posicion
    const [position, setPosition] = useState({ x: 0, y: 0 });

    //Obtener la posicion del click
    const handleClick = (e) => {
        setIsOpen(!isOpen);
        setPosition({
             x: e.clientX,
             y: e.clientY });
    } 


    useEffect(() => {
        const handleResize = () => {
            setIsDesktopState(window.innerWidth > 768);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [])


    const isPhone = () => {
        return (

            <div className="flex flex-col items-start justify-center py-8 px-5">

                    <button
                        onClick={handleClick}
                        className="cursor-pointer bg-second_color px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
                    >

                    <svg
                        className="w-5 h-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                    </svg>
                </button>

                <div className="flex flex-col gap-y-5 mt-5">
                    <div className="flex flex-col bg-gradient-to-t from-second_color to-pink-600 w-auto h-auto py-5 px-5 rounded-3xl gap-y-5 items-center">
                        <h3 className="text-white font-bold text-xl">PLAY YOUR WAY EXPERIENCE OF GAMING</h3>
                        <h3 className="text-white font-extralight sm:text-xs text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, modi veniam culpa voluptatibus ea architecto? Eos laudantium quo atque voluptatibus, ad ipsa! Accusamus assumenda ipsum</h3>
                        <img src={store} className="h-[200px]" />
                    </div>

                    <h1 className="text-white mt-5 font-lilita text-3xl">Pack Open</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-5">
                        <CardReveal Price="500" probabilityProps={1} />
                        <CardReveal Price="1000" probabilityProps={2} />
                        <CardReveal Price="2500" probabilityProps={5} />
                    </div>



                </div>
                {
                    isOpen && (
                    <div
                        style={{ top: position.y, left: position.x }}
                        className="absolute bg-black rounded-3xl py-5 px-5 gap-y-5 z-50"
                    >
                        <MenuButton />
                        <MenuButton />
                        <MenuButton />
                        <MenuButton />
                    </div>
                    )
                }
            </div>

        )
    }

    const isDesktop = () => {

        return (
            <div className="flex items-start justify-between w-full h-full py-10 px-10 gap-x-5">
                <div className="flex flex-col">
                    <MenuButton />
                    <MenuButton />
                    <MenuButton />
                    <MenuButton />
                </div>

                <div className="flex flex-col">
                    <div className="flex bg-gradient-to-t from-second_color to-pink-600 w-full h-auto rounded-3xl justify-center items-center py-8 px-5">
                        <div className="flex flex-col h-full justify-center gap-y-5">
                            <h3 className="text-white font-bold text-xl">PLAY YOUR WAY EXPERIENCE OF GAMING</h3>
                            <h3 className="text-white font-extralight sm:text-xs text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, modi veniam culpa voluptatibus ea architecto? Eos laudantium quo atque voluptatibus, ad ipsa! Accusamus assumenda ipsum</h3>
                        </div>

                        <img src={store} className="sm:h-[100px] md:h-[200px] lg:h-[300px]" />
                    </div>

                    <h1 className="text-white mt-5 font-lilita text-3xl">Pack Open</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-x-10 px-5">
                        <CardReveal Price="500" probabilityProps={1} />
                        <CardReveal Price="1000" probabilityProps={2} />
                        <CardReveal Price="2500" probabilityProps={5} />
                    </div>

                </div>



            </div>
        )

    }

    return (
        <div className="flex flex-col bg-gradient-to-b from-black to-slate-900 w-full min-h-screen">
            <NavBar />
            {
                isDesktopState ? isDesktop() : isPhone()
            }






        </div>
    )
}

export default Tienda
