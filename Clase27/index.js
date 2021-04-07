const traerDatitos = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const informacion = JSON.parse(request.responseText);

        resolve(informacion);
      } else if (request.readyState === 4) {
        reject("Hubo un error perri");
      }
    });

    request.open("GET", url);
    request.send();
  });
};

// Vamos a refactorizar con Promesasssssss

traerDatitos(
  "http://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
)
  .then((losDatitos) => {
    console.log("Traje lo del EISH", losDatitos);
    return traerDatitos("https://pokeapi.co/api/v2/pokemon");
  })
  .then((datosPokemon) => {
    console.log("Traje lo de Pokemon ", datosPokemon);
    return traerDatitos("https://jsonplaceholder.typicode.com/todos");
  })
  .then((datosPlaceholder) => {
    console.log("Traje lo de Placeholder", datosPlaceholder);
  })
  .catch((err) => {
    console.log(err);
  });

// Lo de acá abajo es el tan temido callbackhell

// traerDatitos("https://swapi.dev/api/people", (err, data) => {
//   console.log(data);
//   traerDatitos("https://pokeapi.co/api/v2/pokemon", (err, data) => {
//     console.log(data);
//     traerDatitos("https://jsonplaceholder.typicode.com/todos", (err, data) => {
//       console.log(data);
//       traerDatitos(
//         "https://jsonplaceholder.typicode.com/todos",
//         (err, data) => {
//           console.log(data);
//           traerDatitos(
//             "https://jsonplaceholder.typicode.com/todos",
//             (err, data) => {
//               console.log(data);
//               traerDatitos(
//                 "https://jsonplaceholder.typicode.com/todos",
//                 (err, data) => {
//                   console.log(data);
//                   traerDatitos(
//                     "https://jsonplaceholder.typicode.com/todos",
//                     (err, data) => {
//                       console.log(data);
//                       traerDatitos(
//                         "https://jsonplaceholder.typicode.com/todos",
//                         (err, data) => {
//                           console.log(data);
//                           traerDatitos(
//                             "https://jsonplaceholder.typicode.com/todos",
//                             (err, data) => {
//                               console.log(data);
//                               traerDatitos(
//                                 "https://jsonplaceholder.typicode.com/todos",
//                                 (err, data) => {
//                                   console.log(data);
//                                   traerDatitos(
//                                     "https://jsonplaceholder.typicode.com/todos",
//                                     (err, data) => {
//                                       console.log(data);
//                                       traerDatitos(
//                                         "https://jsonplaceholder.typicode.com/todos",
//                                         (err, data) => {
//                                           console.log(data);
//                                           traerDatitos(
//                                             "https://jsonplaceholder.typicode.com/todos",
//                                             (err, data) => {
//                                               console.log(data);
//                                               traerDatitos(
//                                                 "https://jsonplaceholder.typicode.com/todos",
//                                                 (err, data) => {
//                                                   console.log(data);
//                                                 }
//                                               );
//                                             }
//                                           );
//                                         }
//                                       );
//                                     }
//                                   );
//                                 }
//                               );
//                             }
//                           );
//                         }
//                       );
//                     }
//                   );
//                 }
//               );
//             }
//           );
//         }
//       );
//     });
//   });
// });

// const traerDatitos = (vejez, funcioncitaColbak) => {
//   const pokemonFalopa = {
//     nombre: "Jigglypuff",
//     edad: vejez,
//   };

//   if (vejez > 10) {
//     funcioncitaColbak("Eu, el poke no puede ser tan viejo");
//   } else {
//     funcioncitaColbak(null, pokemonFalopa);
//   }
// };

// const funcionCallback = (err, data) => {
//   if (err) {
//     return console.log(err);
//   }

//   console.log(`TODO PIOLA, EL POKEFALOPA TIENE ${data.edad} AÑOS`);
// };

// traerDatitos(11, funcionCallback);

// CALLBACK: FUNCION, QUE SE LE PASA COMO ARGUMENTO/PARAMETRO A OTRA FUNCION
