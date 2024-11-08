import seccion from '../assets/landing/seccion.jpg';
import sobre from '../assets/sobre.jpg';
import '../css/style.css';
import { useState, useEffect } from 'react';
import { información } from '../assets/service/informacion';
import ButtonCustom from '../Components/ButtonCustom';
import virtual from '../assets/control.png';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';


function LadingPageTest() {

  // estado para el manejo de la ventana
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [isMobil, setIsMobil] = useState(window.innerWidth > 770);
  const navigate = useNavigate();

  //manejador de ventana
  useEffect(() => {
    const handleSize = () => {
      setIsDesktop(window.innerWidth > 1024);
      setIsMobil(window.innerWidth > 770);
    }

    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    }
  })

  return (
    <div className="flex flex-col w-full h-full bg-black ">
      <div className="flex flex-col md:flex-row w-full h-screen items-center justify-center overflow-hidden">
        <div className='px-5 md:px-36'>
          <h1 className='w-30 text-xs md:text-xl md:w-52 relative bg-gradient-to-r from-second_color to-transparent text-center text-white font-lilita py-3 rounded-s-lg animate-float'>
            Life - Gammer
          </h1>

          <h1 className="text-[30px] sm:text-[50px] md:text-[80px] lg:text-[100px] font-bold mb-4 font-lilita text-white">Capibara Trading Cards</h1>
          <h2 className="text-sm md:text-2xl mb-6 text-second_color font-bold">Collect, trade and enjoy the adventure.</h2>
          <ButtonCustom text='Start now' onClick={() => {
            navigate('/login')
          }} />
        </div>
        <img src={seccion} className={`object-cover h-[350px]  md:h-[400px] lg:h-[600px] xl:h-[800px] shadow-2xl ${isMobil ? 'rounded-s-full' : 'rounded-full'}  mt-10 md:mt-0`} />
      </div>

      <section className='flex flex-col justify-center items-center w-full h-auto  py-20 md:py-40 lg:py-52' style={{ backgroundImage: 'url(src/assets/hero-background.jpg)' }}>
        <h1 className='font-lilita text-[30px] md:text-[50px] mb-10 text-white'>The Adventure Starts Here</h1>

        <div className='grid md: grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-10'>

          <div className='object-cover px-2 py-2 bg-gradient-to-tr from-second_color to-black rounded-3xl shadow-2xl animate-float'>
            <img src={sobre} className='w-[350px] md:w-[400px] rounded-3xl' />
          </div>

          <div className='object-cover px-2 py-2 bg-gradient-to-tr from-second_color to-black rounded-3xl shadow-2xl animate-float'>
            <img src={sobre} className='w-[350px] md:w-[400px]  rounded-3xl' />
          </div>

          <div className='object-cover px-2 py-2 bg-gradient-to-tr from-second_color to-black rounded-3xl shadow-2xl animate-float'>
            <img src={sobre} className='w-[350px] md:w-[400px] rounded-3xl' />
          </div>

        </div>
      </section>

      <section className='flex w-full h-auto items-center justify-center px-10 md:px-20 lg:px-36 py-20 md:py-40 lg:py-52'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col items-start justify-center gap-y-5'>
            <h1 className='font-lilita text-3xl md:text-4xl lg:text-5xl text-second_color'>Lorem ipsum dolor, sit amet consectetur</h1>
            <div
              class="overflow-hidden before:ease-in-out after:ease-in-out bg-primary group cursor-pointer relative flex flex-col gap-4 justify-between border hover:after:w-full border-white-222 hover:border-[#7b2bfc] duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5 after:bg-before:duration-300 before:-z-1 before:bg-[#7b2bfc] before:absolute before:top-0 before:left-0"
            >
              <h4
                class="font-medium text-lg duration-300 text-white group-hover:z-[5]"
              >
                Hover me to get awesome result
              </h4>
            </div>
            <div className='w-full h-2 bg-gradient-to-r from-second_color to-pink-700'></div>

            <p className='text-white font-extralight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laborum odit ipsa tempore suscipit in quia temporibus id. Facere doloremque,
              sequi consequuntur maiores provident hic neque soluta
              quas obcaecati distinctio?
            </p>

            <p className='text-white font-extralight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laborum odit ipsa tempore suscipit in quia temporibus id. Facere doloremque,
              sequi consequuntur maiores provident hic neque soluta
              quas obcaecati distinctio?
            </p>

            <p className='text-white font-extralight '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laborum odit ipsa tempore suscipit in quia temporibus id. Facere doloremque,
              sequi consequuntur maiores provident hic neque soluta
              quas obcaecati distinctio?
            </p>

          </div>

          <div className='flex w-full h-full items-center justify-center'>

            <div class="duration-500  hover:-rotate-0 group [transform:rotate3d(1_,-1,_1,_60deg)]  overflow-hidden rounded-2xl relative h-[300px] w-[200px] md:h-[450px] md:w-[250px] lg:h-[500px] lg:w-[350px] bg-gradient-to-r from-second_color to-pink-700 p-5 flex flex-col items-start gap-4">
              <div class="text-gray-50">
                <span class="font-bold text-5xl">Lorem </span>
                <p class="text-xs">Lorem ipsum dolor</p>
              </div>

              <img src={virtual} width={1440} />

            </div>

          </div>

        </div>

      </section>
      <Footer />

    </div>
  )
}

export default LadingPageTest

