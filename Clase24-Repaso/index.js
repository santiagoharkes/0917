// const desdeSelectores = document.querySelectorAll("#pepito");
// const desdeId = document.getElementById("pepito");

// const desdeName = document.getElementsByName("parrafo");

const desdeTag = document.getElementsByTagName("p");

// console.log(desdeTag);

// console.log(desdeSelectores.textContent);
// console.log(desdeId.textContent);

// [].textContent
// elemento.textContent

// Traer un nodelist y recorrerlo para hacer algo

// for (var i = 0; i < desdeTag.length; i++) {
//   console.log(desdeTag[i]);
// }

// [...desdeTag].map((valor) => console.log(valor));

// const botoncito = document.getElementById("pepito");

// VERSION LARGA
// botoncito.addEventListener("click", function () {
//   [...desdeTag].map((valor) => {
//     if (valor.classList.contains("rojito")) {
//       valor.classList.remove("rojito");
//     } else {
//       valor.classList.add("rojito");
//     }
//   });
// });

// VERSION CORTA
// botoncito.addEventListener("click", function () {
//   [...desdeTag].map((valor) => valor.classList.toggle("rojito"));
// });

const primerParrafo = document.getElementById("primerParrafo");

const funcionAEjecutar = function () {
  alert("ESTAS AFANANDOOOOOOOOOOOOOOOOOOOOOOO");
};

document.addEventListener("copy", funcionAEjecutar);

// Qué nombre recibía la función que se le pasaba como parámetro a otra función?
// Palo dice que se llama "callback"

// La respuesta es:

// CORRECTAAAAAAAAAAAAAA
