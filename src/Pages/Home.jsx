
import NavBar from "../Components/NavBar"

import { useEffect, useState, useContext } from "react"

//contexto
import { CapiPointsContext } from "../Provider/CapiPointsProvider"

//componentes
import ShineText from "../Components/ShineText"
import MenuButton from "../Components/MenuButton"

// consultas a la api
import { getCardsForSale, buyCardApi } from "../api/apiMarket"

// import slider de los assets
import slider1 from "../assets/slider1.jpg"
import slider2 from "../assets/fondoLogin.jpeg"
import slider3 from "../assets/fondoRegister.jpeg"
import start from "../assets/start.png"
import toast from "react-hot-toast"

function Home() {

  const [cards, setCards] = useState([])

  //contexto
  const { setCapiPoints, capiPoints } = useContext(CapiPointsContext)

  useEffect(() => {
    handleGetCards();
  }, [])

  const handleGetCards = async () => { 

    const response = await getCardsForSale()
    console.log(response)
    if (response.status === 200) {
      setCards(response.cards)
    } else {
      console.log('Error al obtener las cartas')
    }

  }

  const handleBuyCard = async (id_market, id_card, id_user, price) => {

    if (capiPoints >= price) {
      const response = await buyCardApi(id_market, id_card, id_user, price)

      if (response.status === 200) {
        setCapiPoints(capiPoints - price)
        window.location.href = '/home'
        toast.success('Card purchased successfully')
      }

    } else {
      toast.error('You do not have enough points')
    }
  }

  return (
    <div className="flex flex-col bg-black w-full h-full min-h-screen">
      <NavBar />
      <div className="flex flex-row w-ful max-h-[500px] items-center bg-black">
        {/* Contenedor izquierdo: oculto en pantallas pequeñas */}
        <div className="hidden md:flex md:w-1/4 h-full bg-black">
            <img src={slider3} alt="" />
        </div>

        {/* Contenedor central: ocupa todo el ancho en pantallas pequeñas y es el más grande en pantallas grandes */}
        <div className="relative w-full md:w-2/4 h-full  flex flex-wrap items-center justify-center">
          <img src={slider1}  className="w-full max-h-[480px] object-contain" />
        </div>

        {/* Contenedor derecho: oculto en pantallas pequeñas */}
        <div className="hidden md:flex md:w-1/4 h-full bg-black">
            <img src={slider2} alt="" />
        </div>
      </div>

      <div className="flex justify-center w-full h-auto">
        <div className="flex flex-col w-full md:w-1/2  h-auto p-5">
        <h3 className="text-pink-600 font-lilita text-xl md:text-3xl">Cards available</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2">
            {
              cards.map((card, index) => (
                <div key={index} className="flex flex-col w-auto h-auto">
                  <img src={card.image} className="rounded-3xl" />
                  <h3 className="font-lilita text-white">{card.name}</h3>
                  <ShineText text={card.description}/>
                  <div className="flex w-full justify-end gap-x-2">
                  {Array.from({length: card.rarity}).map((_, index) => (
                    <img key={index} src={start} className="w-5"/>
                  ))}
                  </div>
                  <h1 className="text-right text-pink-600 font-lilita my-2">{card.price}</h1>
                  <div className="flex w-full justify-center">
                    <MenuButton text="Buy" onPressed={() => {
                      handleBuyCard(card.id_market, card.id_card, card.id_user, card.price)
                    }} />
                  </div>

                </div>
              ))
            }

          </div>


        </div>

      </div>

    </div>


  )
}

export default Home