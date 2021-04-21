// Fetch

// fetch("https://swapi.dev/api/peoplesdf")
//   .then((response) => {
//     return response.json();
//   }) // El método JSON devuelve una promesa!
//   .then((valor) => console.log(valor.results))
//   .catch((error) => console.log("Se pudrió todo", error));

// fetch("https://swapi.dev/api/peoplesdf")
//   .then((response) => {
//     console.log("FETCHEO PIOLA", response);
//     return response.json(); // El método JSON devuelve una promesa! Si es resolve() va al then, si es reject() va al catch
//   })
//   .then((valor) => {
//     ksdfjnskfjnsdfjknsdfj
//     dfkjsfsdnf
//     skjdfsjdfsdf
//     sjdfdsnf
// })
//   .catch((error) => console.log("Se pudrió todo", error));

// Fetch nos devuelve una promesa. Siempre nos va a devolver un objeto (a menos que haya problemas de conexion)
// Este objeto, tiene el body (donde podemos usar el metodo json) y varias cosas más, por ejemplo el status.

// Si la url está mal, el status va a ser 404, y el body NO va a ser JSON
// Como el body no va a ser JSON. el metodo .json() no va a entender una goma
// Y como el metodo .json devuelve una promesa, va a venir rejectadaaaaaa

// Y si una promesa viene rejectada, a donde va a pasar?
// Al catch, perrito.

// ASYNC AWAIT

// const pintarPersonajes = (array) => {
//     array.map(valor =>
//         // Por cada uno de los objetos del array que reciba como parametro, pintar algo
//         )
// }

const traerDatitos = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/people");

    if (!response.ok) {
      throw new Error(
        "Se pudrió todo no pudimos traer la información y este mensaje de error lo está recibiendo el .catch"
      );
    }

    const valor = await response.json();

    pintarPersonajes(valor.results);
  } catch (error) {
    console.log("Estamos en el bloque catch");
    console.log(error);
  }
};

traerDatitos();

// Tarea para la clase que viene:

// Traer info de alguna api (dos opciones: star wars o pokemon)
// Con el metodo que ustedes quieran
// Y después pintarla
// DARLE ESTILOS

// Link para imagenes de pokemon
// https://pokeres.bastionbot.org/images/pokemon/1.png
