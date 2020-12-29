// Obtenemos los elementos del DOM
const elementoInput = document.getElementById("inputcito");
const elementoBoton = document.getElementById("botoncito");
const elementoLista = document.getElementById("listita");

// Vamos a crear un array para ir guardando los inputs del usuario y después pintarlos
const productos = [];

// Agregarle un escuchador al boton
elementoBoton.addEventListener("click", function (e) {
  e.preventDefault();

  // Obtener los datos del input
  const datoIngresado = elementoInput.value;

  // Meterlos en el array
  productos.push(datoIngresado);

  // Recorrer el array
  // Por acada uno de los productos
  // Que me cree un <li>
  // Y despues sí... pintar el array

  // Vamos a usar el método de arrays MAP
  // Recordemos que el metodo map nos devuelve un nuevo array

  const nuevoArray = productos.map((valor) => ` <li> ${valor} </li> `);
  // ["<li>tomate</li>", "<li>lechuga</li>"]

  const nuevoArrayJoineado = nuevoArray.join("");
  // El metodo join agarra los diferentes elementos de un array y los une
  // Quedaria asi
  // "<li>tomate</li> ----------- <li>lechuga</li>"
  // Esto es parecido a lo que teniamos en innerHTML
  // Un string con las etiquetas html

  elementoLista.innerHTML = nuevoArrayJoineado;
});

// 1) Crear las cosas en el html
// 2) Obtener los elementos desde JS
// Una vez que haga click en el boton quiero que:
// 3) Obtener los datos del input
// 4) Meterlos en el array
// 5) Pintar el array

// Esto es lo que devuelve la propiedad innerHTML
// Devuelve un string
// Con lo que tenga adentro del elemento
// INCLUIDAS las etiquetas
// "<h1>Bla bla bla</h1> <p>HOlis</p> Jupiter"
