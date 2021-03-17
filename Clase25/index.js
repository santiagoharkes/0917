// Obtenemos elementos del DOM
const elementoInput = document.getElementById("inputcito");
const botonAgregar = document.getElementById("botoncito");
const listaVacia = document.getElementById("listita");
const botonTransacciones = document.getElementById("transacciones");
const selectLindo = document.getElementById("selectLindo");

let movimientos = [];

botonAgregar.addEventListener("click", agregarProducto);

document.addEventListener("click", eliminarProducto);

function agregarProducto(event) {
  event.preventDefault();

  const montoIngresado = Number(elementoInput.value);
  const tipoDeMovimiento = selectLindo.value;

  if (montoIngresado <= 0) {
    alert("Por favor ingresá un número mayor a 0");
  } else {
    const numeroRandom = Math.floor(Math.random() * 50000);

    movimientos.push({
      id: numeroRandom,
      monto: montoIngresado,
      tipo: tipoDeMovimiento,
    });

    pintarProductos(movimientos);

    elementoInput.value = "";

    ejecutarCalculos();

    console.log({ movimientos });
  }
}

function eliminarProducto(event) {
  if (event.target.id === "botonEliminarProducto") {
    const idABuscar = event.target.parentElement.attributes.key.value;

    const nuevoArray = movimientos.filter(
      (valor) => valor.id !== Number(idABuscar)
    );

    movimientos = nuevoArray;

    pintarProductos(nuevoArray);
  }
}

function pintarProductos(elementos) {
  const nuevoArray = elementos.map(
    (valor) =>
      `<li key=${valor.id}> ${valor.monto} - ${valor.tipo} <button id="botonEliminarProducto">Eliminar</button></li>`
  );

  const nuevoArrayJoineado = nuevoArray.join("");

  listaVacia.innerHTML = nuevoArrayJoineado;
}

// ------------------------------

// botonTransacciones.addEventListener("click", ejecutarCalculos);

function ejecutarCalculos() {
  const totalIngresos = efectuarSuma("ingreso");
  const totalEgresos = efectuarSuma("extraccion");
  const total = totalIngresos - totalEgresos;

  mostrarEnHTML(total, "total");

  console.log(`El monto real es: ${totalIngresos - totalEgresos}`);
}

function efectuarSuma(parametro) {
  let suma = 0;

  movimientos.forEach((element) => {
    if (element.tipo == parametro) suma += element.monto;
  });

  mostrarEnHTML(suma, parametro);

  return suma;
}

function mostrarEnHTML(valor, etiqueta) {
  switch (etiqueta) {
    case "ingreso":
      const labelIngresos = document.getElementById("muestraIngresos");
      labelIngresos.innerHTML = valor;
      break;
    case "extraccion":
      const labelEgresos = document.getElementById("muestraEgresos");
      labelEgresos.innerHTML = valor;
      break;
    default:
      const labelTotal = document.getElementById("muestraTotal");
      labelTotal.innerHTML = valor;
  }
}

// ----------------------------------------------------

// Tarea No obligatoria. Solo para practicar
// Si el numero total da menos que 0, hacer algo lindo (?)
// Algo lindo sería:
// Un cartel gigante que diga: "Estás al horno perriiiiiiiii" o algo
