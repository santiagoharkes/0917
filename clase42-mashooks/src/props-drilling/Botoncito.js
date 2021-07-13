import React, { useContext } from "react";

import MiContextoPiola from "../Context";

function Botoncito() {
  const mabel = useContext(MiContextoPiola);

  console.log(mabel);

  return <button style={{ color: mabel.color }}>{mabel.edad}</button>;
}

export default Botoncito;
