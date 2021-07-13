import React, { useEffect, useRef, useState } from "react";

function App() {
  const [escribirAlgo, setEscribirAlgo] = useState();

  const pepito = useRef(1);

  const hacerAlgo = () => {
    pepito.current = pepito.current + 1;
  };

  useEffect(() => {
    // console.log(
    //   "%cSE RENDERIZÓ EL COMPONENTE!",
    //   "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
    // );
    console.log(
      "%c SE RENDERIZÓ EL COMPONENTE!",
      "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
    );
  });

  // Cuando se ejecuta el useEffect?
  // Monta

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setEscribirAlgo(e.target.value)}
      />
      <p>Hola mi nombre es: {escribirAlgo} </p>
      <p>La propiedad current es {pepito.current}</p>
      <button onClick={hacerAlgo}>Sumale uno a current</button>
    </div>
  );
}

export default App;
