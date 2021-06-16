const inputPeso = document.getElementById("peso_auto");
const inputPatente = document.getElementById("patente_auto");
const botonSubmit = document.getElementById("boton_submit");
const listaAutos = document.getElementById("lista_autos");

const camion = {
  pesoMaximo: 50000,
  autosCargados: [],

  agregarAuto: function (auto) {
    this.autosCargados.push(auto);
  },

  chequearPeso(pesoAuto) {
    // Lo que busca este reduce, es: de todos los autos en el array autosCargados, traeme la suma del peso de cada auto.
    const pesoTotal = this.autosCargados.reduce((acum, valor) => {
      return acum + Number(valor.peso);
    }, 0);

    if (pesoTotal + pesoAuto <= this.pesoMaximo) {
      return true;
    } else {
      return false;
    }
  },

  chequearPatente(patenteAuto) {
    // const patenteABuscar = patenteAuto;
    return this.autosCargados.some((valor) => valor.patente === patenteAuto);
  },
};

botonSubmit.addEventListener("click", cargarAutos);

function cargarAutos(event) {
  event.preventDefault();

  if (inputPeso.value === "" || inputPatente.value === "") {
    alert("Debes completar todos los campos.");
  } else if (!camion.chequearPeso(Number(inputPeso.value))) {
    alert("Peso maximo excedido.");
  } else if (camion.chequearPatente(inputPatente.value)) {
    alert("El auto ingresado ya existe.");
  } else {
    const auto = {
      peso: inputPeso.value,
      patente: inputPatente.value,
    };

    camion.agregarAuto(auto);

    inputPatente.value = "";
    inputPeso.value = "";

    console.log(camion.autosCargados);
  }
}

function pintarAutos() {}
