import React, { useCallback, useState } from "react";

import Listita from "./Components/Listita";

function UseCallback() {
  const [contador, setContador] = useState(0);
  const [dark, setDark] = useState(false);

  const sumarNumero = () => {
    setContador(contador + 1);
  };

  const restarNumero = () => {
    setContador(contador - 1);
  };

  // useCallback
  // useCallback memoriza funciones
  // useCallback(()=> {}, [])

  //   const pintarNumeritos = () => {
  //     return [contador, contador + 1, contador + 2];
  //   };

  const pintarNumeritos = useCallback(() => {
    return [contador, contador + 1, contador + 2];
  }, [contador]);

  const estilitos = {
    backgroundColor: dark ? "black" : "gray",
    color: dark ? "white" : "black",
    width: "100%",
    height: "20px",
    margin: "0 auto",
  };

  return (
    <div>
      <div style={estilitos}></div>
      <button onClick={restarNumero}>Restar</button>
      <p>{contador}</p>
      <button onClick={sumarNumero}>Sumar</button>

      <button onClick={() => setDark(!dark)}>Cambiar tema</button>

      <Listita pintarNumeritos={pintarNumeritos} />
    </div>
  );
}

export default UseCallback;
