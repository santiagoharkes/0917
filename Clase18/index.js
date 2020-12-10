// 1) Hacer una función que reciba tres cosas:
// Un array con strings (ejemplo: ["hola", "como", "andas"])
// Un callback con una condición
// Y algo a buscar

// 2) Y que me devuelva un array filtrado con los elementos que cumplan la condición

// Ejemplo:
// Esta función -> function buscarCosas(["holis", "el diego"], callback, "lis"])
// Debe devolver -> ["holis"]

// 3) Comprobar mayusculas y minusculas

// Concepto a tener en claro: closure /!\

// const condicion = function (algo) {

//   return function (x) {

//     return x === algo;

//   };

// };

// const funcionQueMeDevuelve = condicion(2)
// funcionQueMeDevuelve va a ser igual a = function (x) { return x === 2}
// Como la variable es igual a una funcion, la puedo ejecutar
// Así funcionQueMeDevuelve()

// funcionQueMeDevuelve(1) // false
// funcionQueMeDevuelve(2) // true
// funcionQueMeDevuelve(3) // false
// funcionQueMeDevuelve(4) // false

// Esta ejecucion nos va a devolver otra funcion
// Como va a ser la funcion que me va a devolver?
// ASÍ SDKJFNSDKJFN
// No así no
// function (x) {
//  return x === 2
// }

// (x) => { return x === 2}
// x => x === 2

// Esta funcion está escrita como funcion normal
// const condicion = function (algo) {
//   return function (x) {
//     return x === algo;
//   };
// };

// Esta funcion es igual a la de arriba pero en arrow function
// Vamos a usar esta

// const condicion = (algo) => (x) => x === algo;

// condicion(2); // Me va a devolver (x) => x === 2;
// condicion(6); // Me va a devolver (x) => x === 6;
// condicion(20); // Me va a devolver (x) => x === 20;
// condicion(algo); // Me va a devolver (x) => x === algo;

function filtrarArray(array, callback, algo) {
  return array.filter(callback(algo));
}

const condicion = (algo) => (x) => x.toUpperCase().includes(algo.toUpperCase());
// La comparacion que hace acá es
// 1) "HOLA".includes("EST") -- false
// 2) "COMO".includes("EST") -- false
// 3) "ESTAS".includes("EST") -- true

const arraycito = ["hola", "cOmO", "Estas"];

const variablePiola = filtrarArray(arraycito, condicion, "est");
console.log(variablePiola);

// Proximos temas
// 1) Dos metodos de array que faltan (sort y reduce)
// 2) switch
// 3) Bucles
// 4) Eventos y etc
