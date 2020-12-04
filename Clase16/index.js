// const objetito = {
//   nombre: "Pedro",
//   apellido: "sdkfjnsdf",
//   edad: 99,
//   materias: {
//     lengua: 10,
//     matematica: 2,
//     quimica: 1,
//   },
//   hablar: function () {
//     console.log("Hola estoy ladrando");
//   },
// };

// console.log(objetito.nombre);
// console.log(objetito.apellido);
// console.log(objetito.edad);
// console.log(objetito.materias);
// console.log(objetito.materias.lengua);
// objetito.hablar();

// METODOS DE STRINGGGGGGGGGGGGGGGGGGGGGGGGG

const stringcito = "Hola soy Harry Potter";

// SUBSTR
// Nos va a devolver una cadena nueva, desde donde le indiquemos
// stringcito.substr(inicio, longitud)
// const stringSubstr = stringcito.substr(5);
// console.log(stringSubstr);

// STARTSWITH
// Nos dice si un string empieza con los caracteres de otro string que le pasemos
// const stringStartsWith = stringcito.startsWith("Ho");
// console.log(stringStartsWith);

// ENDSWITH
// Nos dice si un string termina con los caracteres de otro string que le pasemos
// const stringEndsWith = stringcito.endsWith("ter");
// console.log(stringEndsWith);

// TOUPPERCASE - TOLOWERCASE
// Pasa el string a mayusculas o a minusculas
// const mayusculas = stringcito.toUpperCase();
// const minusculas = stringcito.toLowerCase();
// console.log(mayusculas);
// console.log(minusculas);

// const usuarioDice = prompt(
//   "Escribi algo para saber si el string empieza con eso"
// );

// // Paso lo que el usuario dice a mayusculas
// // Y lo guardo en esta variable de abajo
// const usuarioDiceEnMayusculas = usuarioDice.toUpperCase();

// // Paso el stringcito a mayusculas
// // Y lo guardo en esta variable de abajo
// const stringcitoEnMayusculas = stringcito.toUpperCase();
// console.log(stringcitoEnMayusculas.startsWith(usuarioDiceEnMayusculas));

// CHARAT
// Nos devuelve el caracter en la posicion que le indiquemos
// EL INDEX EMPIEZA EN CEROOOOOOOOOO 0
// console.log(stringcito.charAt(1));

// INDEXOF
// Nos devuelve la posicion del string que le pasemos
// PEROOOOOOOOOOO nos devuelve la primera ocurrencia
// En cambio .lastIndexOf() nos devuelve la ultima ocurrencia
// console.log(stringcito.indexOf("H"));

// INCLUDES
// Nos dice si el string que le pasemos esta en el string original
// Devuelve true o false
// console.log(stringcito.includes("Harry"))

// const muchosEspacios = "                 holis                  ";

// console.log(muchosEspacios);
// console.log(muchosEspacios.trim());

// const skjdfnsdkjfnsdjkfn = " filosofal";

// console.log(
//   stringcito.concat(" y nunca encontre la piedra", skjdfnsdkjfnsdjkfn)
// );

// console.log("Holis como ".concat("estas"));

// console.log("HOla " + "como estas");

// SLICE
// Me rebana el string desde una posicion hasta otra
// TIP: EL ULTIMO NO ESTÁ INCLUIDO EN EL COMBO REBANADOR
console.log(stringcito.slice(5, 8));

// SPLIT
const dambeldor = "Hola-soy-dam-bell-door";
console.log(dambeldor.split("a"));
