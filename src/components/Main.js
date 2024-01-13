import React from "react";
import logo from '../logo.svg';

const Main = () => {
    return (
        <div className="App">
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" color="green"/>
        <p>
          Mi Primer Portafolio
        </p>
        <p>
          Hola Mundo!
        </p>
        <a
          className="App-link"
          href="https://github.com/AlePatata"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Pincha acá
        </a>
        <button>Click me</button>

      </header>
    </div>
    )
};

export default Main;