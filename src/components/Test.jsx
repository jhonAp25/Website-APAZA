import React, { useState } from 'react'
import '../assets/styles/test.css'
// https://i.imgur.com/yHzA4u1.png

const Test = () => {
    const [lupaStyle, setLupaStyle] = useState({
        visibility: 'hidden',
        left: 0,
        top: 0,
      });
    
      const handleMouseMove = (e) => {
        setLupaStyle({
          ...lupaStyle,
          visibility: 'visible',
          left: e.clientX - 50, // 50 es la mitad del tamaño de la lupa
          top: e.clientY - 50,
        });
      };
    
      const handleMouseLeave = () => {
        setLupaStyle({
          ...lupaStyle,
          visibility: 'hidden',
        });
      };
    
      return (
        <div>
          <div
            className="imagen-container"
            id="contenedorImagen"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://i.imgur.com/yHzA4u1.png" // Ajusta la ruta de la imagen
              alt="Descripción de la imagen"
              id="imagen"
              className="imagen"
            />
            <div className="lupa" style={lupaStyle}></div>
          </div>
        </div>
      );
    }   
export default Test