import React from "react";
import "./App.css";

import Botoncito from "./components/Botoncito";
import Lista from "./components/Lista";

function App() {
  const pepito = () => {
    console.log("pepito");
  };

  const pepitoDos = () => {
    console.log("Estoy haciendo otra cosa");
  };

  const masterChef = "Son todos piolas";

  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <Titulo
            claseCheta="todoRojo"
            manuelitaViviaEnPehuajo="aaaaaaahjsdfsjdfnsdfjsndjn"
          />
          <Titulo claseCheta="todoOro" manuelitaViviaEnPehuajo="Otro texto" /> */}
          <Botoncito unaProp={pepito} textoCheto={masterChef} />
          <Botoncito unaProp={pepitoDos} textoCheto={"Mate"} mostrar={true} />
          <Botoncito unaProp={pepitoDos} textoCheto={"Cafe"} mostrar={true} />
          <Botoncito unaProp={pepitoDos} textoCheto={"Harina"} />
          <Botoncito
            unaProp={pepitoDos}
            textoCheto={"Palmitos"}
            mostrar={true}
          />
          <Lista
            soyUnObjeto={[
              { id: 1, nombre: "Pepito", edad: 18 },
              { id: 2, nombre: "Adalverto", edad: 7 },
              { id: 3, nombre: "Mascarpone", edad: 22 },
            ]}
          />
        </header>
      </div>
    </>
  );
}

export default App;
