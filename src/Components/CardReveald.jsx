import React, { useState } from "react";
import imageUrl from "../assets/sobre.jpg";
import coint from "../assets/coint.png";

const CardReveal = ({Price, setDescription, setText, text, descripcion}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    setIsRevealed(true);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-40 md:w-52 2xl:w-80 h-96 cursor-pointer overflow-hidden ${
          isRevealed ? "hover:shadow-lg" : "hover:shadow-lg"
        }`}
      >
        <div
          className={`absolute inset-0 transition-transform duration-700 ${
            isRevealed ? "-translate-y-full" : "translate-y-0"
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
          className={`absolute inset-0 transform transition-transform duration-700 ${
            isRevealed ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageUrl})`,
              clipPath:
                "polygon(50% 0%, 95% 8%, 100% 87%, 50% 100%, 0 85%, 5% 9%)",
            }}
          ></div>
        </div>
      </div>

      {/* Aquí puedes agregar más contenido debajo de la imagen */}
      <div className=" flex mt-4 w-full justify-center items-center">
        <img src={coint} className="w-14"/>
        <button className=" px-8 py-1 bg-second_color text-white rounded-lg"
        onClick={handleClick}
        >
         {Price}
        </button>
      </div>
    </div>
  );
};

export default CardReveal;
