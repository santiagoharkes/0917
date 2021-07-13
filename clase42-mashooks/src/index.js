import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import MiContextoPiola from "./Context";

ReactDOM.render(
  <MiContextoPiola.Provider
    value={{
      pepito: "Gomez",
      edad: 40,
      color: "red",
    }}
  >
    <App />
  </MiContextoPiola.Provider>,

  document.getElementById("root")
);
