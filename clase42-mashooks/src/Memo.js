import React, { useEffect, useState } from "react";

import Listita from "./Components/Listita";

function Memo() {
  const gentuza = [
    {
      nombre: "Dani",
    },
    {
      nombre: "Solcito",
    },
    {
      nombre: "Tooooonga",
    },
    {
      nombre: "Tade",
    },
  ];

  useEffect(() => {
    console.log("Estoy renderizando la APP ENTERA");
  });

  const [loDelInput, setLoDelInput] = useState("");
  const [genteRara, setGenteRara] = useState(gentuza);

  const onAgregarRarite = (e) => {
    e.preventDefault();

    setGenteRara([...genteRara, { nombre: loDelInput }]);
    setLoDelInput("");
  };

  return (
    <div>
      <form action="" onSubmit={onAgregarRarite}>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setLoDelInput(e.target.value)}
          value={loDelInput}
        />
        <button type="submit">Agregar</button>
      </form>

      <Listita genteRara={genteRara} />
    </div>
  );
}

export default Memo;
