import React, { useEffect } from 'react';

const textStyle = {
  color: "#fff",
  background: "linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%)",
  backgroundPosition: "0",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shine 3s infinite linear",
  animationFillMode: "forwards",
  fontWeight: 600,
  fontSize: "10px",
  textDecoration: "none",
  fontFamily: "'Poppins', sans-serif",
};

const ShineText = ({text}) => {
  useEffect(() => {
    // Crea una etiqueta de estilo para insertar los keyframes
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes shine {
        0% {
          background-position: 0;
        }
        60% {
          background-position: 180px;
        }
        100% {
          background-position: 180px;
        }
      }
    `;
    document.head.appendChild(style);

    // Limpia el estilo cuando el componente se desmonte
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      <a style={textStyle} className="shine-text">
        {text}
      </a>
    </div>
  );
};

export default ShineText;
