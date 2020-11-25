// console.log("Estamos escribiendo cosas para la consola");

// ----------- VALORES
// 1 // Number
// 34 // Number
// 5.5 // Number
// "Holis" // String
// 'Holis' // String
// `Otro tipo de holis` // String - `` - template literals
// true // boolean
// false //  boolean
// null //
// undefined //
// [] // arrays (corchetes) // conjunto de valores
// [1, 34, "holis", {}, {}]
// {} // objetos (llaves) // key: value
// {
//     key: value,
//     edad: 34,
//     nombre: "Gandalf"
// }

// console.log(typeof "holis");
// console.log({});
// console.dir([]);

// !
// || esto o esto
// && esto y esto
// 5 == 5
// 5 === 5

// console.log(3 == "3"); // true
// console.log(3 === "3"); // false

// VARIABLES

// var variableTres = 4;
// let variableDos = 5;
// const variableTres = "Holis";

// var objetito = {
//   nombre: "Real",
//   apellido: "Madrid",
//   funcioncita: function () {
//     console.log("Soy un objeto");
//   },
// };

// console.log("El nombre accediendo por punto es " + objetito.nombre);
// console.log("El nombre accediendo por corchetes es " + objetito["nombre"]);

// console.log("El apellido accediendo por punto es " + objetito.apellido);
// console.log("El apellido accediendo por corchetes es " + objetito["apellido"]);

// var arraycito = [1, 2, "holis", 6, 34, 4, 6, 3];

// console.log(arraycito);
// console.log(arraycito[2]);

// var numerito = 40; // <--------------- numerito es 40

// numerito++; // El ++ lo que va a hacer es sumarle 1 al numero <--------------- numerito es 41
// numerito = 50; // <--------------- numerito es 50
// numerito += 1; // El += lo que va a hacer es variable = variable +

// console.log(numerito);

// var llueve = false;

// if () {

// } else {

// }

// if (llueve) {
//   console.log("Se pudrió todo no salimos nada");
// } else {
//   console.log("Sale asaditoooooooooooo");
// }

// var edad = 45;

// if (edad > 18) {
//   if (edad < 30) {
//     console.log("Podes manejar y sos joven");
//   } else {
//     console.log("Podes manejar y sos un viejo");
//   }
// } else {
//   console.log("Vas de acompañante");
// }

// var llueve = false;

// if (!llueve) {
//   console.log("LLueve es False");
// } else {
//   console.log("Llueve es true");
// }

// var arraycito = [1, 2, 3, "Caro", "Sol", "Tadeo", "Etc..."];

// for (let i = 0; i < arraycito.length; i++) {
//   console.log(arraycito[i]);
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// var arraycito = [1, 2, 3, "Caro", "Sol", "Tadeo", "Etc..."];

// for (const nombreCualquiera of arraycito) {
//   console.log(nombreCualquiera);
// }

var objetito = {
  nombre: "Juan",
  apellido: "Veron",
};

for (const nombreCualquiera in objetito) {
  console.log(nombreCualquiera);
  console.log(objetito[nombreCualquiera]);
}
