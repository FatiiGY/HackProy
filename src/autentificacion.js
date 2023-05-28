export const handleLeftButtonClick = () => {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <html>
        <head>
          <title>Nueva Pestaña</title>
          <link rel="stylesheet" type="text/css" href="./App.css">
        </head>
        <body>
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
                    <button className="left-button" onClick={handleLeftButtonClick}>Botón Izquierdo</button>
                    <button className="right-button">Botón Derecho</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `);
    newWindow.document.close();
  };
  