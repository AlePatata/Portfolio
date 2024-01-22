import './Proyects.css';
import React, { useState } from 'react';


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
      </div>

      {!mostrarMas && (
        <div className="flecha-mostrar-mas" onClick={mostrarMasImagenes}>
          {'>'}
        </div>
      )}
    </div>
  );
};

export default Proyects;