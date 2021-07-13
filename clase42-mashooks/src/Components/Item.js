import React, { useEffect, memo } from "react";

function Item({ persona }) {
  useEffect(() => {
    console.log("Estoy renderizando un ITEM");
  });

  return <div>{persona.nombre}</div>;
}

export default memo(Item);
