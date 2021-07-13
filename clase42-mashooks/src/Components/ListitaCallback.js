import React, { useEffect, useState } from "react";

function Listita({ pintarNumeritos }) {
  const [numeritos, setNumeritos] = useState([]);

  useEffect(() => {
    setNumeritos(pintarNumeritos());
    console.log("Estoy ejecutando el useEffect de listita");
  }, [pintarNumeritos]);

  return (
    <div>
      {numeritos.map((valor, index) => (
        <h2 key={index}>{valor}</h2>
      ))}
    </div>
  );
}

export default Listita;
