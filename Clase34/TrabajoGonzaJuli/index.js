const inputPeso = document.getElementById("inputPeso");
const inputPatente = document.getElementById("inputPatente");
const botonAgregar = document.getElementById("botonAuto");
const cajaAutos = document.getElementById("autos");

let autosCamion = [];
const pesoMaxCamion = 20000;
let pesoActual = 0;
console.log(pesoActual);

botonAgregar.addEventListener("click", agregarAuto);

function agregarAuto(e) {
  e.preventDefault();
  // autosCamion.patenteC.map()

  const patentesIngresadas = autosCamion.map((valor) => valor.patente);

  const filterFunction = (valor) => valor.patente === inputPatente.value;

  const patentesIngresadasSome = autosCamion.some(filterFunction);

  if (pesoActual + parseInt(inputPeso.value) <= pesoMaxCamion) {
    const pesoIngresado = parseInt(inputPeso.value);
    const patenteIngresado = inputPatente.value;

    pesoActual += pesoIngresado;

    if (!patentesIngresadasSome) {
      autosCamion.push({
        patente: patenteIngresado,
        peso: pesoIngresado,
        id: autosCamion.length + 1,
      });

      console.log({ autosCamion });
    } else {
      alert("patente ya ingresada");
    }
    mostrarAutos(autosCamion);
  } else {
    alert("Peso excedido");
  }
}

function mostrarAutos(array) {
  const nuevoArray = array.map((valor) => {
    return `<li key=${valor.id}>patente :${valor.patente} peso: ${valor.peso}`;
  });
  const arrayJoin = nuevoArray.join("");

  cajaAutos.innerHTML = arrayJoin;
}
