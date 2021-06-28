import React, { useReducer } from "react";

const SUMAR_NUMERO = "SUMAR_NUMERO";
const RESTAR_NUMERO = "RESTAR_NUMERO";
const CAMBIAR_TITULO = "CAMBIAR_TITULO";

function ContadorReducer() {
  // Esquema basico del useReducer
  // const [estado, dispatch] = useReducer(reducer, estadoInicial)

  const reducer = (state, action) => {
    switch (action.type) {
      case SUMAR_NUMERO:
        return {
          ...state,
          contador: state.contador + 1,
        };

      case RESTAR_NUMERO:
        return {
          ...state,
          contador: state.contador - 1,
        };

      case CAMBIAR_TITULO:
        return {
          ...state,
          titulo: action.payload,
        };

      default:
        return state;
    }
  };

  const initialState = {
    contador: 0,
    mensajito: "",
    titulo: "Contador con reducer",
  };

  const [estado, dispatch] = useReducer(reducer, initialState);

  const sumarNumero = () => {
    dispatch({ type: SUMAR_NUMERO });
  };

  const restarNumero = () => {
    dispatch({ type: RESTAR_NUMERO });
  };

  const cambiarTitulo = (payload) => {
    dispatch({ type: CAMBIAR_TITULO, payload });
  };

  return (
    <div>
      <h1>{estado.titulo}</h1>
      <button
        onClick={() =>
          cambiarTitulo("Esto es un nuevo titulo puesto por cosas")
        }
      >
        Cambiar titulo
      </button>
      <button onClick={restarNumero}>Restar</button>
      <p>{estado.contador} </p>
      {/* <p
        style={{
          fontSize: "16px",
          color: "red",
        }}
      >
        {mensajeDeError && mensajeDeError}
      </p> */}
      <button onClick={sumarNumero}>Sumar</button>
    </div>
  );
}

export default ContadorReducer;
