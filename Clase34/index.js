// function pepito() {
//   console.log(this);
// }

// pepito();
// // This es Window

// const pepitoDos = () => {
//   console.log("El this de pepitoDos es:");
//   console.log(this);
// };

// pepitoDos();

// const objetito = {
//   pesoMaximo: 5000,
//   // This es este objeto

//   queEsThis: function () {
//     console.log(this.pesoMaximo);
//   },

//   // This es Window
//   queEsThisDos: () => {
//     console.log(this);
//   },
// };

// objetito.queEsThis();
// objetito.queEsThisDos();

// const botoncitoPiola = document.getElementById("botoncitoPiola");

// botoncitoPiola.addEventListener("click", function () {
//   console.log("¿Qué es this en un escuchador de eventos????sdjfnskjfnsdkfjn");
//   this.classList;
// });

// const examenes = {
//   notas: {
//     lengua: 7,
//     matematica: 7.5,
//     fisica: 9,
//     quimica: 8,
//   },

//   promedio: function () {
//     let materias = Object.keys(this.notas);

//     // ["lengua", "matematica", "fisica", "quimica"]

//     return (
//       materias
//         .map((materia) => this.notas[materia])
//         .reduce((acum, actual) => acum + actual) / materias.length
//     );
//   },
// };

// const objetitoPiola = {
//   propiedad: "Hola, soy una propiedad",
//   otraPropiedad: "Del objetitoPiola",
//   vamoATardar: function () {
//     // console.log(this) // This va a ser: objetitoPiola

//     setTimeout(function () {
//       console.log(this); //
//     }, 1000);
//   },
// };

// objetitoPiola.vamoATardar();

// const objetitoPiola = {
//   propiedad: "Hola, soy una propiedad",
//   otraPropiedad: "Del objetitoPiola",
//   vamoATardar: function () {
//     document.addEventListener("click", () => {
//       console.log(this); // This va a ser:
//     });
//   },
// };

// objetitoPiola.vamoATardar();

// const pepito = {
//   nombre: "pepito",
//   apellido: "terepin",
//   edad: 45,
//   gustos: ["el arte", "programar", "y la biwita"],
// };

// const albertito = {
//   nombre: "albertito",
//   apellido: "el gruñon",
//   edad: 35,
// };

// const gustos = ["el arte", "programar", "y la biwita"];

// const funcioncitaPiola = function (gustoUno, gustoDos, gustoTres) {
//   console.log(
//     `Holis, yo soy ${this.nombre}, y me gusta ${gustoUno}, ${gustoDos}, ${gustoTres}`
//   );
// };

// funcioncitaPiola("voley", "handball", "tenis");

// Call, Apply, Bind

// Call
// funcioncitaPiola.call(albertito, "voley", "handball", "tenis");

// Apply
// funcioncitaPiola.apply(pepito, pepito.gustos);

// Bind <-- ¡Devuelve una función!
// const cosaConBind = funcioncitaPiola.bind(
//   albertito,
//   "el bind",
//   "la ginebra",
//   "y el rocanrol"
// );

// cosaConBind();

// ---------------------------------------------------------------

// const defensorUno = {};
// defensorUno.nombre = "Eldes";
// defensorUno.apellido = "Garrado";
// defensorUno.edad = 25;

// const defensorDos = {};
// defensorDos.nombre = "Elflo";
// defensorDos.apellido = "Jito";
// defensorDos.edad = 45;

// const defensorTres = {};
// defensorTres.nombre = "Elflo";
// defensorTres.apellido = "Jito";
// defensorTres.edad = 45;

// const altoPrototype = {
//   habilidad: function () {
//     console.log("Pega juerte con la inhabil");
//   },

//   cumpleaños: function () {
//     console.log(`Mi nombre es ${this.nombre} y cumplo años!`);
//   },
// };

// function crearDefensor(nombre, apellido, edad) {
//   // lo comentamos porque new lo hace por nosotros
//   // const defensor = Object.create(altoPrototype);

//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;

//   // lo comentamos porque new lo va a hacer por nosotros
//   // return defensor;
// }

// crearDefensor.prototype.habilidad = function () {
//   console.log("Pega juerte con la inhabil");
// };

// crearDefensor.prototype.cumpleaños = function () {
//   console.log(`Mi nombre es ${this.nombre} y cumplo años!`);
// };

// const marcosRoto = new crearDefensor("Marcos", "Roto", 25);
// const carlitosDerechoz = new crearDefensor("Carlitos", "Derechoz", 49);

// console.log(marcosRoto);
// console.log(carlitosDerechoz);

// new

// function crearDefensor(nombre, apellido, edad) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;
// }

// crearDefensor.prototype.habilidad = function () {
//   console.log("Pega juerte con la inhabil");
// };

// crearDefensor.prototype.cumpleaños = function () {
//   console.log(`Mi nombre es ${this.nombre} y cumplo años!`);
// };

// const marcosRoto = new crearDefensor("Marcos", "Roto", 25);
// const carlitosDerechoz = new crearDefensor("Carlitos", "Derechoz", 49);

// console.log(marcosRoto);
// console.log(carlitosDerechoz);

// TAREA PARA EL GOHAR
// Leer los links que va a pasar el pesado de Santiago

// function crearPersona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
// }

// const Juanito = new crearPersona("Juanito", 23);

// crearPersona.prototype.cumplianito = function () {
//   return this.edad++;
// };

// **************************************************************

// function crearAlumno(nombre, edad, legajo) {
//   crearPersona.call(this, nombre, edad);
//   this.legajo = legajo;
// }

// crearAlumno.prototype = Object.create(crearPersona.prototype);

// crearAlumno.prototype.decirLegajo = function () {
//   console.log(`Hola mi legajo es: ${this.legajo}`);
// };

// const alumnito = new crearAlumno("Alumnito", 45, 181818);

// console.log(alumnito);

// **************************************************************

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola mi nombre es ${this.nombre}`);
  }
}

// Persona.prototype.saludar = function () {
//   console.log(`Hola mi nombre es ${this.nombre}`);
// };

const pepito = new Persona("pepito", 45);

class Alumno extends Persona {
  constructor(nombre, edad, legajo) {
    super(nombre, edad); // LLAMA AL CONSTRUCTOR DE LA CLASE QUE EXTIENDE
    this.legajo = legajo;
  }

  decirLegajo() {
    console.log(`Hola mi legajo es ${this.legajo}`);
  }
}

const alumnito = new Alumno("Alumnito", 198, 191919);
