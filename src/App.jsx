import React from "react";
import Bienvenida from "./components/Bienvenida";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <h1>Hola</h1>
      <Bienvenida nombre="alguien"/>
      <Bienvenida nombre="nadie"/>
      <div className="row">
        <div className="col">
          <Cards 
            imagen = "https://dummyimage.com/600x400/000/fff"
            titulo = "Titulo card 1"
            texto ="texto bla bla bla card 1"
          />
        </div>
        <div className="col">
        <Cards 
            imagen = "https://dummyimage.com/600x400/000/fff"
            titulo = "Titulo card 2"
            texto ="texto bla bla bla card 2"
          />
        </div>
        <div className="col">
        <Cards 
            imagen = "https://dummyimage.com/600x400/000/fff"
            titulo = "Titulo card 3"
            texto ="texto bla bla bla card 3"
          />
        </div>
      </div>
    </div>
  );
}

export default App;