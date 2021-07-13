import React, { useState, useMemo } from "react";

function UseMemo() {
  const [contador, setContador] = useState(0);
  const [dark, setDark] = useState(false);

  const sumarNumero = () => {
    setContador(contador + 1);
  };

  const restarNumero = () => {
    setContador(contador - 1);
  };

  // useMemo
  // El useMemo memoriza valores
  // useMemo(() => {}, [])

  const funcionRecontraLenta = (numero) => {
    for (let i = 0; i <= 10000000000; i++) {} // Esto emula un calculo re contra complejo

    return numero * 2;
  };

  //   const numeroMultiplicado = funcionRecontraLenta(contador);
  const numeroMultiplicado = useMemo(
    () => funcionRecontraLenta(contador),
    [contador]
  );

  const estilitos = {
    backgroundColor: dark ? "black" : "gray",
    color: dark ? "white" : "black",
    width: "300px",
    height: "300px",
  };

  return (
    <div>
      <button onClick={restarNumero}>Restar</button>
      <p>{contador}</p>
      <button onClick={sumarNumero}>Sumar</button>

      <button onClick={() => setDark(!dark)}>Cambiar tema</button>

      <div style={estilitos}>{numeroMultiplicado}</div>
    </div>
  );
}

export default UseMemo;
