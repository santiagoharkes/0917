let miPuntaje = 0;
let suPuntaje = 0;

// Esta función muestra el juego
const mostrarJuego = () => {
  const botonPlay = document.querySelector(".intro button");
  const introScreen = document.querySelector(".intro");
  const partido = document.querySelector(".partido");

  botonPlay.addEventListener("click", () => {
    console.log("Hiciste click");
    introScreen.classList.add("desvanecer");
    partido.classList.add("aparecer");
  });
};

// Esta función va a empezar el juego
const empezarJuego = () => {
  const opciones = document.querySelectorAll(".opciones button");
  const manoJugador = document.querySelector(".mano-jugador");
  const manoComputadora = document.querySelector(".mano-computadora");
  const manos = document.querySelectorAll(".manos img");
  console.log(opciones);

  manos.forEach((mano) => {
    mano.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  });

  const opcionesComputadora = ["piedra", "papel", "tijera"];

  opciones.forEach((option) => {
    option.addEventListener("click", function () {
      const ganador = document.querySelector(".ganador");

      const numeroComputadora = Math.floor(Math.random() * 3);
      const eleccionComputadora = opcionesComputadora[numeroComputadora];

      manoJugador.src = "./assets/piedra.png";
      manoComputadora.src = "./assets/piedra.png";

      manoJugador.style.animation = "moverManosJugador 2s ease";
      manoComputadora.style.animation = "moverManosComputadora 2s ease";

      ganador.textContent = "A ver que tulchissssssssssss";

      setTimeout(() => {
        compararManos(this.dataset.eleccion, eleccionComputadora);
        manoJugador.src = `./assets/${this.dataset.eleccion}.png`;
        manoComputadora.src = `./assets/${eleccionComputadora}.png`;
      }, 2000);
    });
  });
};

const actualizarPuntajes = () => {
  const puntajeJugador = document.querySelector(".player-score p");
  const puntajeComputadora = document.querySelector(".computer-score p");

  puntajeJugador.textContent = miPuntaje;
  puntajeComputadora.textContent = suPuntaje;
};

const compararManos = (eleccionJugador, eleccionComputadora) => {
  const ganador = document.querySelector(".ganador");

  if (eleccionJugador === eleccionComputadora) {
    ganador.textContent = "Un embole, empataron pewito";
    return;
  }

  if (eleccionJugador === "piedra") {
    if (eleccionComputadora === "tijera") {
      ganador.textContent = "VAMOOOOWWW GANATE";
      miPuntaje++;
      actualizarPuntajes();
      return;
    } else {
      ganador.textContent = "Al horno miwito, perdiste :(";
      suPuntaje++;
      actualizarPuntajes();
      return;
    }
  }

  if (eleccionJugador === "papel") {
    if (eleccionComputadora === "tijera") {
      ganador.textContent = "Al horno miwito, perdiste :(";
      suPuntaje++;
      actualizarPuntajes();
      return;
    } else {
      ganador.textContent = "VAMOOOOWWW GANATE";
      miPuntaje++;
      actualizarPuntajes();
      return;
    }
  }

  if (eleccionJugador === "tijera") {
    if (eleccionComputadora === "piedra") {
      ganador.textContent = "Al horno miwito, perdiste :(";
      suPuntaje++;
      actualizarPuntajes();
      return;
    } else {
      ganador.textContent = "VAMOOOOWWW GANATE";
      miPuntaje++;
      actualizarPuntajes();
      return;
    }
  }
};

mostrarJuego();
empezarJuego();
