import { useState } from "react";

import Contador from "./components/contador/Contador";

function App() {
  const [otroNumero, setOtroNumero] = useState(0);

  return (
    <div className="App">
      <Contador numeroEspecialmenteMagico={otroNumero} />
    </div>
  );
}

export default App;
