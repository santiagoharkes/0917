import "./Lista.css";

import Tarjetita from "./Tarjetita";

function Lista(props) {
  return (
    <div className="listaContenedor">
      {props.soyUnObjeto.map((valor) => (
        <Tarjetita
          key={valor.id}
          kunAguero={valor.nombre}
          sdjfnsdjfndsf={valor.edad}
        />
      ))}
    </div>
  );
}

export default Lista;
