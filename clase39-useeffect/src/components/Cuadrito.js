import React, { useEffect, useState } from "react";

// #aec9ff

function Cuadrito() {
  const [color, setColor] = useState("#ffaeae");
  const [otroEstado, setOtroEstado] = useState("#ffaeae");

  // Esquema principal
  // useEffect(() => {}, [])

  useEffect(() => {
    function movimientoMouse(e) {
      if (e.clientX < window.innerWidth / 2) {
        setColor("#aec9ff");
      } else {
        setColor("#ffaeae");
      }
    }

    window.addEventListener("mousemove", movimientoMouse);

    // Este return va a ser ejecutado cada vez que el componente se demonta
    return () => {
      console.log("Se desmontó el componente");
      window.removeEventListener("mousemove", movimientoMouse);
    };
  }, []);

  // useEffect(() => {
  //     fetch(url)
  //     .then(valor => valor.json())
  //     .then(resp => setOtroEstado(resp))
  //     .catch()
  // }, [input])

  return (
    <div
      style={{
        height: "90vh",
        backgroundColor: color,
      }}
    >
      <h1>Holis</h1>
      {/* {
          otroEstado.map(valor => <Card />)
      } */}
    </div>
  );
}

export default Cuadrito;
