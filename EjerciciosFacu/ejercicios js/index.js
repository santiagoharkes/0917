//Hacer una función que me devuelva lo siguiente en consola:
// "Hola! Estoy escribiendo desde consola :)"

function ejer1() {
  console.log("Hola! Estoy escribiendo desde consola");
}

ejer1();

//Escribir una función a la que se le pase una cadena <string> y
//muestre por consola
// ¡Hola <string>!

function ejer2() {
  let texto = prompt("Ingrese texto a mostrar en consola.");
  console.log("¡Hola! " + texto);
}

ejer2();

//Crear dos variables: una con nombre y otra con apellido
//Crear una función que me devuelva por consola el nombre completo

const nombre = "Facuuuu";
const apellido = "De Benedetti";

function ejer3(nombre, apellido) {
  console.log("El nombre es: " + nombre + " y el apellido es: " + apellido);
}

ejer3(nombre, apellido);

//Ahora modificar la función anterior y hacerlo con closures.
//Una función que reciba el nombre y que retorne otra función que reciba el apellido y me devuelva el nombre completo

function ejer4(nombre) {
  apellidoo = "de benedetiiiiii";
  function interej(apellido) {
    console.log("El nombre es " + nombre + " y el apellido es : " + apellido);
  }
  return interej(apellidoo);
}

ejer4(nombre);

/* Dado el string: "¡Hello NUCBERS! Acá tamos aprendiendo metodos de strings"
Escribir una función que me devuelva por consola si la palabra que le pasemos está en ese string.
Le pasamos "hello" y devuelve por consola: 
// "Sí, se encontró la palabra"
Le pasamos "perri" y devuelve por consola: 
// "No amigui, no está esa palabra en el string"
(CUIDADO con el case sensitive... tiene que tener esa igualdad para que sea indiferente a las mayúsculas y minúsculas) */

const strincito = "¡Hello NUCBERS! Acá tamos aprendiendo metodos de strings";
const stringcitoMayus = strincito.toUpperCase();
/* console.log(strincito);
console.log(stringcitoMayus); */
const evaluar = prompt("Palabra a buscar en el string");
/* console.log(evaluar); */
const evaularMayus = evaluar.toUpperCase();
/* console.log(evaularMayus); */

function ejer5(eval) {
  if (strincitoMayus.includes(eval)) {
    console.log("Sí, se encontró la palabra");
  } else {
    console.log("No amigui, no está esa palabra en el string");
  }
}

ejer5(evaularMayus);

/* Ahora modificar la función anterior y agregarle lo siguiente:
Si lo que buscamos se encuentra en el string, quiero que le agregue al final del string original lo siguiente: 
// " y vamos a ser cracks en JS!"
Si no, que salga de la función sin devolver nada. */

function ejer6(eval) {
  if (stringcitoMayus.includes(eval)) {
    console.log("Sí, se encontró la palabra");
    console.log(stringcitoMayus.concat(" y vamos a ser cracks en JS!"));
  } else {
    return;
  }
}

ejer6(evaularMayus);

/* Crear una función que nos divida el string original en caracteres individuales y los guarde en un array */

function ejer7(stringdiv) {
  return stringdiv.split("");
}

console.log(ejer7(strincito));
