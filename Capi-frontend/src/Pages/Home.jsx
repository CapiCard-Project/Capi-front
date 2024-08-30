
import NavBar from "../Components/NavBar"

import { useEffect, useState } from "react"
import Carousel from "../Components/Carousel"
// import slider de los assets
import slider1 from "../assets/slider1.jpg"
import slider2 from "../assets/slider2.jpg"
import slider3 from "../assets/slider3.jpg"
import fondo from '../assets/fondoPaisaje.jpg'

const slider = [
  slider1,
  slider2,
  slider3



]

function Home() {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024)

  useEffect(() => {

    const handleResize = () => {
      setIsDesktop(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize
      )
    }

  })
  return (
    <div className="flex flex-col bg-primary w-full h-screen">
      <NavBar />
      <div className="flex flex-row w-full max-h-[500px] items-center">

        <div className="flex w-0 md:w-4/12 h-full">
          <img src={fondo} alt="fondo" />

        </div>

        <div className="flex w-full sm:w-2/3 h-full">
          <Carousel autoSlide={true} autoSlideInterval={5000}>
            {slider.map((slide, i) => (
              <img
                key={i}
                src={slide}
                alt={`slide ${i}`}
                className="w-full h-auto object-cover"
              />
            ))}
          </Carousel>
        </div>


        <div className="hidden md:flex flex-col w-4/12 h-full bg-gradient-to-bl from-[#000000] items-center justify-center">
          <p className="flex flex-col text-white font-bold text-md md:text-xl xl:text-5xl gap-y-3">
            Capibarimania <span className="text-xl xl:text-3xl font-extralight">
              Ha vuelto
            </span>
          </p>

          <button className="bg-second_color py-3 px-10 mt-3 font-semibold rounded-xl shadow-xl">
            Ver más
          </button>

        </div>



      </div>
    </div>


  )
}

export default Home
