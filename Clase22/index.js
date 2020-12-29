// SLICE Y SPLICE
// Metodos de arrays

// const arraycito = [1, 2, 3, 4, "hola", "como", "estas", 100, "todo", "bien"];
// console.log(arraycito);

// SLICE
// Corta una parte del array original y nos devuelve una copia de eso
// const arraySliceado = arraycito.slice(0, 2);
// console.log(arraySliceado);

// SPLICE
// Eliminar o agregar elementos a un array
// Nos devuelve los elementos eliminados en un array
// arraycito.splice(indiceComienzo, cantidadAEliminar, cosasAAgregar)

const elementoInput = document.getElementById("inputcito");
const botonAgregar = document.getElementById("botoncito");
const listaVacia = document.getElementById("listita");
const botonEliminar = document.getElementById("botonEliminarProducto");

const productos = [];

botonAgregar.addEventListener("click", agregarProducto);

document.addEventListener("click", eliminarProducto);

function eliminarProducto(e) {
  // console.dir(e.target.id);

  if (e.target.id === "botonEliminarProducto") {
    // Tenemos el texto a buscar
    const textoABuscar = e.target.parentElement.firstChild.data.trim();
    // Tenemos que buscar el indice de ese texto en el array
    const indiceABorrar = productos.findIndex(
      (valor) => valor.nombre === textoABuscar
    );
    console.log(indiceABorrar);
    // Tenemos que borrar ese indice
    productos.splice(indiceABorrar, 1);
    // Tenemos que volver a pintar el array
    pintarProductos(productos);
  }
}

function agregarProducto(e) {
  e.preventDefault();
  const datoIngresado = elementoInput.value;

  if (datoIngresado === "") {
    alert("No se pueden agregar cosas vacias");
  } else {
    productos.push({ id: productos.length + 1, nombre: datoIngresado });

    pintarProductos(productos);
    elementoInput.value = "";

    console.log(productos);
  }
}

function pintarProductos(elementos) {
  const nuevoArray = elementos.map(
    (valor) =>
      ` <li key=${valor.id}> ${valor.nombre} <button id="botonEliminarProducto">Eliminar</button> </li> `
  );
  const nuevoArrayJoineado = nuevoArray.join("");
  listaVacia.innerHTML = nuevoArrayJoineado;
}

// TAREAAAAAAAAAAAAAAAAAAAAAAAA

// Poder buscar por ID y no por el texto
// Y poder borrar por id y no por texto
