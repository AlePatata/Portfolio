import React, {useState, useEffect} from "react";
import Proyects from "./Proyects";
import Contact from "./Contact";

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Ajusta el valor según sea necesario para controlar cuándo se muestra el componente
      const threshold = 100;

      if (scrollPosition > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el evento del scroll cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header" >
        <img src={process.env.PUBLIC_URL + '/rainfrog2.png'} className="App-logo" alt="logo" color="green"/>
        <p>
          Mi Primer Portafolio
        </p>
        <p>
          Hola Mundo!
        </p>
        <div>
        <a
          className="App-link"
          href="https://github.com/AlePatata"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
          src={process.env.PUBLIC_URL + '/rainfrog.png'}
          alt='si'
          style={{ width: '150px', height: '100px' }}
          />
        </a>

        </div>
      </header>
      {isVisible && (
        <div style={{ position: 'fixed', top: 0, left: 0, background: 'white', padding: '10px' }}>
          Soy visible al hacer scroll hacia abajo
        </div>
      )}
      <div style={{ height: '1000px', background: '#f0f0f0' }}>
        <Proyects/>
        <div style={{margin: '100px'}} />
        <Contact/>
        
      </div>
    </div>
  )
};

export default Main;