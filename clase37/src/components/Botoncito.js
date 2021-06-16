function Botoncito(props) {
  return props.mostrar ? (
    <button onClick={props.unaProp}>{props.textoCheto}</button>
  ) : null;
}

export default Botoncito;
