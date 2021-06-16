import React, { useState } from "react";

import Numerito from "../numerito/numerito";

import styles from "../numerito/Numerito.module.css";

import UnaImagenPiola from "../../img/fotografo-paisajes.jpg";

function Contador({ numeroEspecialmenteMagico }) {
  // esquema basico de useState
  // const [estado, setEstado] = useState(estadoInicial)
  // const [estadoReCheto, setEstadoReCheto] = useState(estadoInicial)

  //   const [numerito, setNumerito] = useState(numeroEspecialmenteMagico);
  //   const [mensajito, setMensajito] = useState("");

  const [estadoNuevo, setEstadoNuevo] = useState({
    numerito: numeroEspecialmenteMagico,
    mensajito: "",
  });

  const restarNumero = () => {
    if (estadoNuevo.numerito === 0) {
      setEstadoNuevo({
        ...estadoNuevo,
        mensajito: "NOP",
      });
      return;
    }

    setEstadoNuevo({
      ...estadoNuevo,
      numerito: estadoNuevo.numerito - 1,
    });
  };

  const sumarNumero = () => {
    setEstadoNuevo({
      ...estadoNuevo,
      numerito: estadoNuevo.numerito + 1,
      mensajito: "",
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <img src={UnaImagenPiola} alt="" className={styles.imagenPiola} />
      <h1 className={styles.numerito}>Funcional</h1>
      <button onClick={restarNumero}>Restar</button>
      <Numerito numeroPiola={estadoNuevo.numerito} />
      <p
        style={{
          fontSize: "16px",
          color: "red",
        }}
      >
        {estadoNuevo.mensajito && estadoNuevo.mensajito}
      </p>
      <button onClick={sumarNumero}>Sumar</button>
    </div>
  );
}

export default Contador;
