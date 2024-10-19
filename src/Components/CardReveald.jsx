import React, { useEffect, useState, useContext } from "react";
import imageUrl from "../assets/sobre.jpg";
import coint from "../assets/coint.png";
import { getCard } from "../api/apiTienda";
import toast from "react-hot-toast";
import { CapiPointsContext } from "../Provider/CapiPointsProvider";
import { updateCapiPoints } from "../api/apiTienda";

const CardReveal = ({ Price, setDescription, setText, text, descripcion, probabilityProps }) => {

  const [isRevealed, setIsRevealed] = useState(false);

  //variable para manejar la propabilidad de las cartas
  const [probability, setprobability] = useState(0)

  //estado de la carta
  const [card, setCard] = useState({});

  // capi points del usuario
  const { capiPoints, setCapiPoints } = useContext(CapiPointsContext);

  const handleClick = async (probability) => {
    await getCard(probability, setCard);
  };

  useEffect(() => {
    if (Object.keys(card).length > 0) {
      setIsRevealed(true);
    }

  }, [card]);

  // funcion para manejar la actualizacion de los capi points
  const handleCapiPoints = async (PriceItem, capiPointsItem) => {
    if (capiPointsItem >= PriceItem) {
      setCapiPoints(capiPointsItem - PriceItem)
      localStorage.setItem('capipoins', capiPointsItem - PriceItem)

      // probabilityProps
      setprobability(probabilityProps),
      await handleClick(probabilityProps)
      await updateCapiPoints(capiPointsItem - PriceItem)
    } else {
      toast.error('No tienes suficientes capi points')
    }

  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-40 md:w-52 2xl:w-80 h-96 cursor-pointer overflow-hidden ${isRevealed ? "hover:shadow-lg" : "hover:shadow-lg"
          }`}
      >
        <div
          className={`absolute inset-0 transition-transform duration-700 ${isRevealed ? "-translate-y-full" : "translate-y-0"
            }`}
        >
          <div
            className="w-full h-full bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage: `url(${imageUrl})`,
              clipPath:
                "polygon(50% 0%, 95% 8%, 100% 87%, 50% 100%, 0 85%, 5% 9%)",
            }}
            onClick={() => {
              setText(text),
                setDescription(descripcion)
            }}
          ></div>
        </div>

        {/* The same image that will be revealed */}
        <div
          className={`absolute inset-0 transform transition-transform duration-700 ${isRevealed ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${card.image})`,
              clipPath:
                "polygon(50% 0%, 95% 8%, 100% 87%, 50% 100%, 0 85%, 5% 9%)",
            }}
          ></div>
        </div>
      </div>

      {/* Aquí puedes agregar más contenido debajo de la imagen */}
      <div className=" flex mt-4 w-full justify-center items-center">
        <img src={coint} className="w-14" />
        <button className=" px-8 py-1 bg-second_color text-white rounded-lg"
          onClick={async () => {
            const PriceItem = parseInt(Price)
            const capiPointsItem = parseInt(capiPoints)

            await handleCapiPoints(PriceItem, capiPointsItem)

          }}
        >
          {Price}
        </button>
      </div>
    </div>
  );
};

export default CardReveal;
