//SLICE (copia una parte del array, sin parametros hace una copia total) & SPLICE (elimina o agrega elementos a un array)

// const arraycito = [1,2,3,4,5,6];
// const arraycitoSliado = arraycito.slice(0,2);
// console.log(arraycitoSliado);
// console.log(arraycito);
// arraycito.splice(1,3);
// console.log(arraycito);

const elementoInput = document.getElementById("inputcito");
const botonAgregar = document.getElementById("botoncito");
const listaVacia = document.getElementById("listita");

let productos = [];

botonAgregar.addEventListener("click", agregarProducto);
document.addEventListener("click", eliminarProducto);

function agregarProducto(event) {
  event.preventDefault();
  const datoIngresado = elementoInput.value;
  if (datoIngresado === "") {
    alert("No se puede agregar cosas vacías");
  } else {
    const numeroRandom = Math.floor(Math.random() * 50000);
    productos.push({
      id: numeroRandom,
      nombre: datoIngresado,
    });
    pintarProductos(productos);
    elementoInput.value = "";
    console.log({ productos });
  }
}

function eliminarProducto(event) {
  //console.dir(event.target.id); recordar q console.dir lista todas las prop y func del objeto.-
  if (event.target.id === "botonEliminarProducto") {
    // console.dir(
    //   event.target.parentElement.firstChild.parentNode.attributes.key.value
    // ); //tengo que recuperar el atributo key del li
    //const textoABuscar = event.target.parentElement.firstChild.data.trim(); //recupero el texto a buscar.
    const idABuscar = event.target.parentElement.attributes.key.value;
    console.log({ idABuscar });
    // const indiceABorrar = productos.findIndex(
    //     valor => valor.nombre === textoABuscar
    // );

    // Esto es con metodo splice
    // const indiceABorrar = productos.findIndex(
    //   // valor => console.log(valor.id)
    //   (valor) => valor.id == idABuscar
    // );
    // console.log({ indiceABorrar });

    // productos.splice(indiceABorrar, 1);

    // Esto es con metodo filter

    const nuevoArray = productos.filter(
      (valor) => valor.id !== Number(idABuscar)
    );

    productos = nuevoArray;

    pintarProductos(nuevoArray);
  }
}

function pintarProductos(elementos) {
  const nuevoArray = elementos.map(
    (valor) =>
      `<li key=${valor.id}> ${valor.nombre} <button id="botonEliminarProducto">Eliminar</li>`
  );
  const nuevoArrayJoineado = nuevoArray.join("");
  listaVacia.innerHTML = nuevoArrayJoineado;
}
