// SORT Y REDUCE

// const arrayDePrueba = [1, 10, 4, 7, 3, 67, 123];
// const otroArrayDePrueba = [
//   "Verano",
//   "verano",
//   "aston",
//   "Aston",
//   "albert",
//   "Alberto",
// ];

// SORT
// Lo que hace el metodo sort es ordenar el array
// Nos devuelve el array ordenado
// Los ordena de acuerdo a su codigo unicode

// console.log(arrayDePrueba.sort());
// console.log(otroArrayDePrueba.sort());

// array.sort(funcionComparadora)

// Si queremos que el metodo sort nos ordene como nosotros queremos, de menor a mayor (o de mayor a menor), le pasamos una función comparadora

// console.log(arrayDePrueba);
// arrayDePrueba.sort((a, b) => a - b);
// console.log(arrayDePrueba);

// (1, 10) => { 1 - 10 }
// 1 - 10 = Negativo ------> A viene primero

// (10, 4) => { 10 - 4 }
// 10 - 4 = Positivo ------> B viene primero

// (7, 7) => { 7 - 7 }
// 7 - 7 = Cero ------> No hay ningun cambio

// REDUCE
// const arrayDePrueba = [1, 10, 4, 7, 3, 67, 123];

// const valorUnico = arrayDePrueba.reduce(
//   (acumulador, valorActual) => acumulador + valorActual
// );

// console.log(valorUnico);

// ----------------------------------------------------------------------------------------

// BUCLES

// For
// Va a repetir un bloque de codigo, hasta que una condicion sea falsa

// for (valorInicial, condicion, actualización) {
//     bloqueDeCodigoARepetir
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const cochecitos = ["Pusineri", "Crespo", "Piojo Lopez"];

// for (let i = 1; i < cochecitos.length; i++) {
//   console.log(cochecitos[i]);
// }

// Primer ciclo:
// i = 0
// 0 < 3 ? SI
// Entonces ejecuta el bloque de codigo
// Hace un console de cochecitos[0]
// Y ahora sumale 1 a i

// Segundo ciclo:
// i = 1 (viene de arriba)
// 1 < 3 ? SI
// Entonces ejecuta el bloque de codigo
// Hace un console de cochecitos[1]
// Y ahora sumale 1 a i

// Tercero ciclo:
// i = 2 (viene de arriba)
// 2 < 3 ? SI
// Entonces ejecuta el bloque de codigo
// Hace un console de cochecitos[2]
// Y ahora sumale 1 a i

// Cuarto ciclo:
// i = 3 (viene de arriba)
// 3 < 3 ? NO. ES FALSE
// ACA SE CORTO EL CHORRO. No sos vos, soy yo. Mi amor es el mar.

// ----

// WHILE
// El ciclo while, va a ejecutar un bloque de codigo siempre que la condicion sea verdadera

// while (condicion) { bloqueDeCodigo }

// let i = 20;

// while (i < 10) {
//   // Hace tal cosa
//   console.log("Estamos en el WHILE");

//   // Y sumale 1 a i
//   i++;
// }

// DO WHILE

// do {

// } while (condicion)

// do {
//   console.log("Estamos en el DO WHILE Y SOY ALTO REBELDE ");
//   i++;
// } while (i < 10);

// Faltaban ver
// FORIN
// FOROF
// FORLAN (no jeje joda jeje)
// BREAK
// CONTINUE

// SWITCH (Es un if vestido de gala)

// Prueben hacer un metodo map de los arrays, con un for

// Vamos a probar hacer un filter con for

// metodo map
// const nuevoArray = [1, 2, 3, 4, "hola"]
// nuevoArray.map((valor) => `${valor} un string`)
// ["1 un string", "2 un string", "3 un string", "4 un string", "hola un string"]

// metodo filter
// const nuevoArray = [1, 2, 3, 4, "hola"];
// nuevoArray.filter((valor) => valor >= 3);
// [3, 4]

// hacemos un filter con for

// Estructura principal de for
// for (valorInicial, condicion, actualización) {
//     bloqueDeCodigoARepetir
// }

// const nuevoArray = [1, 2, 3, 4, "hola"]; // nuevoArray.length = 5

// let otroArray = [];

// for (let i = 0; i < nuevoArray.length; i++) {
//   if (nuevoArray[i] >= 3) {
//     otroArray.push(nuevoArray[i]);
//   }

//   console.log(`El elemento que estoy recorriendo es ${nuevoArray[i]}`);
//   console.log(otroArray);
// }

// "${2+2}" --> ${2+2}
// '${2+2}' --> ${2+2}
// `${2+2}` --> 4

// Faltaban ver
// FORIN
// FOROF
// FORLAN (no jeje joda jeje)
// BREAK
// CONTINUE

// FORIN

// const persona = {
//   nombre: "Hola",
//   apellido: "Chau",
//   edad: 90,
//   clave: valor,
// };

// Acceder a los valores del objeto mediante un punto
// persona.nombre
// persona.apellido
// persona.edad

// Había otra forma de acceder a los valores de los objetos
// No con el dot notation
// persona["nombre"]
// persona["apellido"]
// persona["edad"]

// for (variable in objeto) {
//     codigoAEjecutar
// }

// for (const shrek in persona) {
//   console.log(`Una clave del objeto es ${shrek}`); <- Es la clave del objeto
//   console.log(`El tipo de valor de esta clave es ${typeof shrek}`); <- Es un string

//   console.log(objeto.clave)
//   console.log(objeto["clave"])

// El nombre del objeto es: persona
// La clave del objeto es shrek

// Si intento acceder mediante notación de punto
//   console.log(persona.shrek);

// Si intento acceder mediante corchetes
//   console.log(persona[shrek]);
// }

// FOROF

// const array = [1, "Hola", 3, { nombre: "pedro" }, 5];

// console.log("Aca empieza el forof");
// for (const pepito of array) {
//   console.log(pepito);
// }

// console.log("Aca empieza el map");
// array.map((valor) => console.log(valor));

// const unString = "Harry Potter y la piedra filosofal";

// for (const x of unString) {
//   console.log(x);
// }

// const otroObjeto = {
//   nombre: "Nestor",
//   apellido: "Pringles",
//   edad: 75,
//   caracteristica: "Bien bostero",
// };

// for (const x of otroObjeto) {
//   console.log(x);
// }

// FORIN OBJETOS
// FOROF TODO EL RESTO

// const array = [1, "Hola", 3, { nombre: "pedro" }, 5];

// for (const x in array) {
//   console.log(x);
//   console.log(array[x]);
// }

// BREAK Y CONTINUE

// const romarioDaSilva = ["Hola", "como", "andas", "PANFILO", "?"];
// longitud: 5
// otroArray = [0, 1, 2, 3, 4]

// PALABRA CONTINUE
// Lo que hace es saltearse el ciclo actual

// for (let i = 0; i < romarioDaSilva.length; i++) {
//   if (i === 3) {
//     continue;
//   }

//   console.log(romarioDaSilva[i]);
// }

// PALABRA BREAK
// Lo que hace es salir del bucle actual

// for (let i = 0; i < romarioDaSilva.length; i++) {
//   if (i === 3) {
//     break;
//   }

//   console.log(romarioDaSilva[i]);
// }

// SWITCH

const aPer = 5;

if (aPer === 1) {
  console.log("Es uno");
} else if (aPer === 2) {
  console.log("Es dos");
} else if (aPer === 3) {
  console.log("Es tres");
} else if (aPer === 4) {
  console.log("Es cuatro");
} else if (aPer === 5) {
  console.log("Es cinco");
}

switch (aPer) {
  case 1:
    console.log("Es uno");
    break;
  case 2:
    console.log("Es dos");
    break;
  case 3:
    console.log("Es tres");
    break;
  case 4:
    console.log("Es cuatro");
    break;
  case 5:
    console.log("Es cinco");
    break;

  default:
    console.log("No es ningun numero menor a 5");
    break;
}
