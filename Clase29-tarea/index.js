const botoncitoLindo = document.getElementById("botoncitoLindo");
const contenedor = document.getElementById("pewito");

botoncitoLindo.addEventListener("click", traerPewito);

// Esta funcion va a fetchear la data de la API
async function traerPewito() {
  try {
    const infoDeApi = await fetch("https://dog.ceo/api/breeds/image/random");
    const imagenPewito = await infoDeApi.json();

    pintarPewito(imagenPewito.message);
  } catch (error) {
    console.log("Se rompió todo perri ", error);
  }
}

// Esta funcion va a pintar algo en el DOM
function pintarPewito(url) {
  contenedor.innerHTML = `<img src=${url} />`;
}
