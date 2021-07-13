import React, { useEffect, memo } from "react";

import Item from "./Item";

function Listita({ genteRara }) {
  useEffect(() => {
    console.log("Estoy renderizando LA LISTITA");
  });

  return genteRara.map((persona, index) => (
    <Item key={index} persona={persona} />
  ));
}

export default memo(Listita);
