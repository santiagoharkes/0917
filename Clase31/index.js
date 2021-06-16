const form = document.getElementById("form");
const search = document.getElementById("search");
const resultados = document.getElementById("resultados");
const botonesMasMenos = document.getElementById("masResultados");

// https://api.lyrics.ovh/suggest/calamaro

const URL = "https://api.lyrics.ovh";

const getSongs = (valor) => {
  fetch(`${URL}/suggest/${valor}`)
    .then((resultado) => resultado.json())
    .then((data) => {
      console.log(data);
      pintarCanciones(data);
    });
};

const pintarCanciones = (arrayDeCanciones) => {
  const codiguitoHtml = `
    <h1>Búsquedas relacionadas a ${search.value}</h1>
    <ul>
        ${arrayDeCanciones.data
          .map(
            (valor) => `
                <li>
                    <p><strong>${valor.artist.name}</strong> - ${valor.title}</p>
                    <audio controls>
                        <source src=${valor.preview} type="audio/mp3" >
                    </audio>
                </li>
            `
          )
          .join("")}
    </ul>
    `;

  resultados.innerHTML = codiguitoHtml;

  if (arrayDeCanciones.next || arrayDeCanciones.prev) {
    botonesMasMenos.innerHTML = `
        ${
          arrayDeCanciones.prev
            ? `<button onclick="haceAlgo('${arrayDeCanciones.prev}')">Anterior</button>`
            : ""
        }
        ${
          arrayDeCanciones.next
            ? `<button onclick="haceAlgo('${arrayDeCanciones.next}')">Siguiente</button>`
            : ""
        }
      `;
  }
};

const haceAlgo = async (url) => {
  const urlParaFetchear = "https://cors-anywhere.herokuapp.com/" + url;
  const fetcheaPerri = await fetch(urlParaFetchear);
  const aberLosResultados = await fetcheaPerri.json();

  pintarCanciones(aberLosResultados);
};

const iniciar = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const loQueEstoyEscribiendo = search.value;

    if (!loQueEstoyEscribiendo) {
      return;
    }

    getSongs(loQueEstoyEscribiendo);
  });
};

iniciar();

function esCapicua(numero) {
  const nuevoArray = String(numero)
    .split("")
    .map((valor) => Number(valor));
  const nuevoArrayReverse = [...nuevoArray].reverse();

  console.log(`Nuevo array es ${nuevoArray}`);
  console.log(`Nuevo array Reverse es ${nuevoArrayReverse}`);

  if (nuevoArray.toString() === nuevoArrayReverse.toString()) {
    console.log("Es capicúa");
  } else {
    console.log("No es capicúa");
  }
}
