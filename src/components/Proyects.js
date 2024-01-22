import './Proyects.css';
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";


const Proyects = () => {
  const [mostrarMas, setMostrarMas] = useState(false);

  const imagenes = [
    'Logo_Peq.png',
    'Ouros.png',
    'orangeJuice.png',
    // Añade más rutas de imágenes según sea necesario
  ];

  const mostrarMasImagenes = () => {
    setMostrarMas(true);
  };

  return (
    <div className='Proyects'>
      <div className="contenedor-imagenes">
        {imagenes.map((imagen, index) => (
          <div key={index} className="imagen-contenedor">
            <img
              src={imagen}
              alt={`Imagen ${index + 1}`}
              className={mostrarMas ? 'visible' : 'oculto'}
            />
          </div>
        ))}
        <button className='flecha-mostrar-mas'
        onClick={mostrarMasImagenes}
        style={{
          backgroundColor: '#4CAF50', /* Color de fondo */
          border: 'none', /* Remueve el borde */
          color: 'white', /* Color del texto */
          padding: '15px 20px', /* Espacio alrededor del texto */
          textAlign: 'center', /* Alineación del texto */
          textDecoration: 'none', /* Remueve la decoración del texto */
          display: 'inline-block',
          fontSize: '20px',
          margin: '4px 2px',
          cursor: 'pointer', /* Cambia el cursor al pasar el mouse */
      }}>
      <FaArrowRight/>  
      </button>
      </div>

      
      
    </div>
  );
};

export default Proyects;