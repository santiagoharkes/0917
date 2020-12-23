// elemento.agregarEscuchador(evento, funcion)

// EventTarget: WINDOW, DOCUMENT, ELEMENT
// Evento: puede ser click, scroll, submit... etc. (hay muchos)
// Funcion: puede ser cualquier cosa

// button.agregarEscuchador(click, function() {console.log("Hola")})

// El metodo agregarEscuchador se llama en realidad addEventListener
// Quedaría así:

// button.addEventListener("click", function() {console.log("Hola")})

// eventtarget.metodo()

const botoncito = document.getElementById("pepito");

botoncito.addEventListener("click", function () {
  botoncito.classList.toggle("nuevaClase");
});
