import React from 'react';
import './App.css';
import { handleLeftButtonClick } from './autentificacion.js';

function App() {
  const nombre = "Fati"; // Cambia el nombre aquí

  return (
    <div className="App">
      <div className="banner">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.discordapp.com/attachments/1100071048394834023/1112172326100942898/Banorte_logo2x.png" alt="logo" className="logo" />
        </a>
      </div>
      <div className="content">
        <div className="image-container">
          <div className="circle"></div>
        </div>
        <div className="text-container">
          <div className="center-container">
            <h1 className="tit">¡Hola {nombre}!</h1>
            <p className="subti">En qué te puedo ayudar?</p>
            <div className="button-container">
              <button className="left-button" onClick={handleLeftButtonClick}>Asistente</button>
              <button className="right-button">Ver Opciones</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
