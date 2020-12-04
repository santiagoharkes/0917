// METODOS DE LOS ARRAYS
// const array = [1, 2, "Holis", { propiedad: "valor", otraPropiedad: 4 }, 3];
// const array = [1, 2, 45, 65, 2, 786];

// console.log(array);
// console.log(array.length);

// const arrayDos = ["otro", "array"];

// CONCAT
// Concatena dos o más arrays
// const concatenarArrays = array.concat(arrayDos);
// console.log(array);
// console.log(arrayDos);
// console.log(concatenarArrays);

// EVERY
// Nos dice si TODOS los elementos del array, cumplen con una condicion
// Esta condicion, va en forma de funcion
// Nota de revista (?) la funcion que le pasemos como parametro a OTRA funcion, se llama callback
// Esta funcion que hace de condicion, es el callback
// SI UNO no cumple con la condicion -----> da false
// const condicionBella = (princeso) => princeso > 7
// const everyArray = array.every(condicionBella);
// console.log(everyArray);

// ************************************************************************************************
// *********************************** Correcion del punto 5 de ***********************************
// ************************************** la tarea de arrays **************************************
// ************************************************************************************************
// 5)
// a) Hacer una función -- listo
// b) que reciba un array -- listo
// c) y un callback con una condición (revisar que era callback) -- listo
// d) Y que devuelva si todos los elementos del array cumplen con esa condicion

// const arrayUno = [1, 2, 3, 4];
// const arrayDos = [5, 6, 7, 8];
// const arrayTres = [9, 10, 11, 12];
// const arrayCuatro = [13, 14, 15, 16];

// function miFuncion(array, condicion, string) {
//   const variableTemporal = array.every(condicion);
//   console.log("************************************");
//   console.log(array);
//   console.log(string);
//   console.log(variableTemporal);
//   return variableTemporal;
// }

// miFuncion([1, 2, 3, 4], (princeso) => princeso > 7, "Si todos son mayores a 7");
// miFuncion(
//   [6, 7, 3, 2],
//   (princeso) => princeso > 10,
//   "Si todos son mayores a 10"
// );
// miFuncion([3, 6, 3, 9], (princeso) => princeso > 1, "Si todos son mayores a 1");
// miFuncion(arrayUno, (princeso) => princeso > 3, "Si todos son mayores a 3");
// miFuncion(arrayDos, (princeso) => princeso === 8, "Si todos son iguales a 8");
// miFuncion(
//   arrayTres,
//   (princeso) => princeso < 100,
//   "Si todos son menores que 100"
// );
// miFuncion(
//   arrayCuatro,
//   (princeso) => princeso >= 1,
//   "Si todos son mayores o iguales que 1"
// );

// ************************************************************************************************
// ************************************************************************************************
// ************************************************************************************************
// ************************************************************************************************

// const array = [1, 2, 45, 65, 2, 786];
// FILTER
// Crea un nuevo array, con los elementos que cumplan una condicion
// La condicion también va a ser una funcion
// Esta funcion se llamaba... (redoblantes)... CALLBACK yes!
// const filterArray = array.filter((valor) => valor > 7);
// console.log(filterArray);

// FIND
// Devuelve el PRIMER valor del array que cumpla con la condicion
// La condicion va a ser un callback
// const findArray = array.find((princeso) => princeso > 7);
// console.log(findArray);

// FINDINDEX
// Devuelve el index del primer elemento que cumpla la condicion
// const findIndexArray = array.findIndex((princeso) => princeso > 7);
// Facu y la pipol esperan que devuelva un 2
// console.log(findIndexArray);
// SEEEEEEEEEEEEEEEEEE facu nos salvo
// (pero pidió tarea, no se olviden)

// INDEXOF
// Devuelve el index del primer valor que le pasemos
// Si no encuentra nada me devuelve -1
// const indexOfArray = array.indexOf(2);
// console.log(indexOfArray);
// if (array.indexOf(894) === -1) {
//   console.log("No encontramos nada");
// } else {
//   console.log("Entonces encontramos algo");
// }

// INCLUDES
// Nos dice si un array tiene el elemento que querramos buscar
// Devuelve true o false
// const includesArray = array.includes(2);
// console.log(includesArray);

// SOME
// Nos dice si ALGUNO cumple con la condicion
// La condicion... sí, adivinen... ES UN CALLBACK
// (como pa variá)
// Nos devuelve true o false
// const algunoMayorASiete = array.some((princeso) => princeso > 7);
// const algunoMayorA99999 = array.some((princeso) => princeso > 999999999);
// console.log({ algunoMayorASiete });
// console.log({ algunoMayorA99999 });

// FLAT
// Nos devuelve un nuevo array con elementos de un sub-array concatenados
// POR EJEMPLOX:
// Si tengo este array [1, 2, 3, [4, 5, 6]]

// Repaso...
// const queLongitudTiene = [1, 2, 3, [4, 5, 6]];
// console.log(queLongitudTiene);
// console.log(queLongitudTiene.length);
// Fin de repaso.

// Seguimos con flat
// const flatArray = [1, 2, 3, [4, 5, 6]];
// const arrayDentroDeArray = flatArray.flat();
// console.log(arrayDentroDeArray);

const perrito = [1, 2, 45, 65, 2, 786];

// FOREACH
// El for each ejecuta la funcion callback, por cada elemento del array
// array.forEach((valor) =>
//   console.log(`El valor original es ${valor} y si le sumo 5 es ${valor + 5}`)
// );

// JOIN
// Va a unir todos los elementos del array con el caracter que le pasemos
// Nos devuelve un string
// const arrayJoin = array.join(" - ");
// console.log(arrayJoin);

// MAP
// Recorre el array original y
// /!\ NOS DEVUELVE UN NUEVO ARRAY /!\
// Con lo que resulte de la funcion que le pasemos
// const arrayMap = perrito.map((valor) => valor + 2);

// const otroArray = ["Homero", "Marge", "Bart", "Lisa", "Maggie"];
// const arrayMap = otroArray.map((valor) => `${valor} Simpson`);
// const arrayMap = otroArray.map(
//   (valor, index) => `${index} --- ${valor} Simpson`
// );

// arrayMap.map((valor) => console.log(valor));

// console.log(otroArray);
// console.log(arrayMap);

// const otroArray = ["Homero", "Marge", "Bart", "Lisa", "Maggie"];

// POP
// Elimina el ultimo elemento del array
// Devuelve el elemento que borro
// console.log("El array antes del metodo Pop es:");
// console.log(otroArray);
// otroArray.pop();
// console.log("El array después es:");
// console.log(otroArray);
// console.log("*******************");

// PUSH
// Agrega uno o más elementos al final del array
// Me devuelve la nueva longitud del array
// console.log("El array antes del metodo Push es:");
// console.log(otroArray);
// otroArray.push("Moe", "Barney");
// console.log("El array después es:");
// console.log(otroArray);
// console.log("*******************");

// SHIFT
// Elimina el primer elemento del array
// Retorna el elemento que elimino
// console.log("El array antes del metodo Shift es:");
// console.log(otroArray);
// otroArray.shift();
// console.log("El array después es:");
// console.log(otroArray);
// console.log("*******************");

// UNSHIFT
// Agregar uno o mas elementos al principio
// Devuelve la nueva longitud del array
// console.log("El array antes del metodo Unshift es:");
// console.log(otroArray);
// otroArray.unshift("Homero");
// console.log("El array después es:");
// console.log(otroArray);
// console.log("*******************");
