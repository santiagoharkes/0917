import { useRef } from "react";
import "./App.css";

function App() {
  // esquema principal del useRef
  // const algo = useRef(valorInicial)

  const algunaReferencia = useRef();

  const hacerFoquito = () => {
    // algunaReferencia = {
    //   current: input
    // }

    algunaReferencia.current.focus();
  };

  return (
    <div className="App">
      <input type="text" ref={algunaReferencia} />
      <button onClick={hacerFoquito}>Hacer foco</button>
    </div>
  );
}

export default App;

// qué cosas principalmente hace useState?
// 1) guarda el estado, y lo persiste entre renderizados
// 2) genera un nuevo renderizado cada vez que un estado cambie

// useRef
// Nos devuelve un objeto con la propiedad current
// {current: }

// 1) Guardar un valor y lo va a persistir entre renderizados
// PEROOOOOO no va a generar un nuevo re-render cada vez que este cambie
// 2) Hacer refencia a algun elemento del DOM
