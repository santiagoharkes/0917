import React, { useState, useReducer } from "react";

function Contador() {
  const [numerito, setNumerito] = useState(0);
  const [mensajeDeError, setMensajeDeError] = useState("");

  const restarNumero = () => {
    if (numerito === 0) {
      setMensajeDeError("NOP");
      return;
    }

    setNumerito(numerito - 1);
  };

  const sumarNumero = () => {
    setNumerito(numerito + 1);
    setMensajeDeError("");
  };

  return (
    <div>
      <h1>Funcional</h1>
      <button onClick={restarNumero}>Restar</button>
      <p>{numerito} </p>
      <p
        style={{
          fontSize: "16px",
          color: "red",
        }}
      >
        {mensajeDeError && mensajeDeError}
      </p>
      <button onClick={sumarNumero}>Sumar</button>
    </div>
  );
}

export default Contador;
