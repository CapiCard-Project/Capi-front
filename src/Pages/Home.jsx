
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
    <div className="flex flex-col bg-gradient-to-b from-black to-slate-900 w-full h-screen">
      <NavBar />
      <div className="flex flex-row w-full max-h-[500px] items-center">

        <div className="flex w-full h-full">
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

      </div>
    </div>


  )
}

export default Home
