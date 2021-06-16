import React from "react";

function Titulo({ manuelitaViviaEnPehuajo, claseCheta }) {
  return (
    <h1 className={claseCheta}>
      El titulo que recibo de las propiedades es:
      {manuelitaViviaEnPehuajo}
    </h1>
  );
}

export default Titulo;
