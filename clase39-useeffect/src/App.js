import { useState } from "react";
import "./App.css";
import Cuadrito from "./components/Cuadrito";

function App() {
  const [mostrarCuadrito, setMostrarCuadrito] = useState(true);

  const handleClick = () => {
    setMostrarCuadrito(!mostrarCuadrito);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>
        {mostrarCuadrito ? "Ocultar cuadrito" : "Mostrar cuadrito"}
      </button>
      {mostrarCuadrito ? <Cuadrito /> : null}
    </div>
  );
}

export default App;
