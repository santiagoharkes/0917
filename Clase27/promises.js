// PROMESAS

// La promesa puede tener 3 estados: Pending, Fulfilled, Rejected

// const holis = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Traje el hielo después de 5 segundos");
//   }, 5000);
// });

// console.log(holis);

// const pandemia = false;

// const vamoDeJoda = new Promise((resolve, reject) => {
//   if (!pandemia) {
//     const jodita = {
//       nombre: "Molino Rojo",
//       donde: "Carlos Paz",
//       fecha: "Feriado de mayo",
//     };

//     setTimeout(() => {
//       resolve(jodita);
//     }, 2000);
//   } else {
//     reject("Abrime la puerta que quiero salir");
//   }
// });

// console.log(vamoDeJoda);

// Cuando creamos una promesa, se nos desbloquean dos nuevos metodos
// El then y el catch

// El .then, va a recibir el resultado de la promesa Fulfilled en el primer callback
// (opcional, en el segundo, va a recibir el resultado de la promesa rechazada)
// Si no, el .catch es el encargado de recibir el resultado de la promesa rechazada

// .then(callbackOnFulfilled, callbackOnRejected)
// vamoDeJoda.then(
//   (parametrito) => {
//     console.log(parametrito);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// vamoDeJoda
//   .then((parametrito) => {
//     console.log(`El boliche donde será la jodita es en: ${parametrito.nombre}`);
//     console.log(`La ciudad donde queda el boliche es: ${parametrito.donde}`);
//     console.log(`PERO CUANDO ESSSSSSSSSSSS ah acá ta: ${parametrito.fecha}`);
//   })
//   .catch((err) => {
//     console.log("La promesa fue rechazada");
//     console.log("Con el siguiente error:");
//     console.log(err);
//   });

// const vamoDeJoda = (pandemia) => {
//   return new Promise((resolve, reject) => {
//     if (!pandemia) {
//       const jodita = {
//         nombre: "Molino Rojo",
//         donde: "Carlos Paz",
//         fecha: "Feriado de mayo",
//       };

//       setTimeout(() => {
//         resolve(jodita);
//       }, 2000);
//     } else {
//       reject("Abrime la puerta que quiero salir");
//     }
//   });
// };

// vamoDeJoda(false)
//   .then((todoPiola) => {
//     console.log(todoPiola);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// setTimeout(() => {
//   console.log("Esto lo hice después de 1 segundo");
//   setTimeout(() => {
//     console.log("Esto lo hice después de 2 segundos");
//     setTimeout(() => {
//       console.log("Esto lo hice después de 3 segundos");
//       setTimeout(() => {
//         console.log("4 segundos");
//         setTimeout(() => {
//           console.log("5 segundos");
//           setTimeout(() => {
//             console.log("6 segundos");
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const relojito = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
};

relojito()
  .then(() => {
    console.log("Lo hice después de un segundo");
    return relojito();
  })
  .then(() => {
    console.log("Lo hice después de dos segundos");
    return relojito();
  })
  .then(() => {
    console.log("Lo hice después de tres segundos");
    return relojito();
  })
  .then(() => {
    console.log("Lo hice después de cuatro segundos");
    return relojito();
  })
  .then(() => {
    console.log("Lo hice después de cinco segundos");
    return relojito();
  })
  .then(() => {
    console.log("Lo hice después de seis segundos");
  })
  .catch((err) => {
    console.log(err);
  });
