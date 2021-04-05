const traerDatitos = (url, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const informacion = JSON.parse(request.responseText);

      callback(undefined, informacion);
    } else if (request.readyState === 4) {
      callback("Hubo un error perri", undefined);
    }
  });

  request.open("GET", url);
  request.send();
};

traerDatitos("https://swapi.dev/api/people", (err, data) => {
  console.log(data);
  traerDatitos("https://pokeapi.co/api/v2/pokemon", (err, data) => {
    console.log(data);
    traerDatitos("https://jsonplaceholder.typicode.com/todos", (err, data) => {
      console.log(data);
      traerDatitos(
        "https://jsonplaceholder.typicode.com/todos",
        (err, data) => {
          console.log(data);
          traerDatitos(
            "https://jsonplaceholder.typicode.com/todos",
            (err, data) => {
              console.log(data);
              traerDatitos(
                "https://jsonplaceholder.typicode.com/todos",
                (err, data) => {
                  console.log(data);
                  traerDatitos(
                    "https://jsonplaceholder.typicode.com/todos",
                    (err, data) => {
                      console.log(data);
                      traerDatitos(
                        "https://jsonplaceholder.typicode.com/todos",
                        (err, data) => {
                          console.log(data);
                          traerDatitos(
                            "https://jsonplaceholder.typicode.com/todos",
                            (err, data) => {
                              console.log(data);
                              traerDatitos(
                                "https://jsonplaceholder.typicode.com/todos",
                                (err, data) => {
                                  console.log(data);
                                  traerDatitos(
                                    "https://jsonplaceholder.typicode.com/todos",
                                    (err, data) => {
                                      console.log(data);
                                      traerDatitos(
                                        "https://jsonplaceholder.typicode.com/todos",
                                        (err, data) => {
                                          console.log(data);
                                          traerDatitos(
                                            "https://jsonplaceholder.typicode.com/todos",
                                            (err, data) => {
                                              console.log(data);
                                              traerDatitos(
                                                "https://jsonplaceholder.typicode.com/todos",
                                                (err, data) => {
                                                  console.log(data);
                                                }
                                              );
                                            }
                                          );
                                        }
                                      );
                                    }
                                  );
                                }
                              );
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});

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

// CALLBACK: FUNCION, QUE SE LE PASA COMO ARGUMENTO A OTRA FUNCION
