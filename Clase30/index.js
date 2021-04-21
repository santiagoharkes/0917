const postContainer = document.querySelector(".posts-container");
const loading = document.querySelector(".loader");
const inputFilter = document.querySelector("#filter");

// https://jsonplaceholder.typicode.com/posts?_page=3&_limit=5

let limite = 5;
let pagina = 1;

const getPosts = async () => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pagina}&_limit=${limite}`
  );

  const data = await resp.json();

  return data;
};

const pintarPosts = (posteitos) => {
  const posteosHtml = posteitos
    .map((valor) => {
      return `<div class="post">
        <div class="numerito">${valor.id}</div>
        <div class="post-info">
          <h2 class="post-title">${valor.title}</h2>
          <p class="post-body">
            ${valor.body}
          </p>
        </div>
      </div>`;
    })
    .join("");

  // postContainer.innerHTML = postContainer.innerHTML + posteosHtml
  postContainer.innerHTML += posteosHtml;
};

function iniciarPerri() {
  window.addEventListener("DOMContentLoaded", async () => {
    let posts = await getPosts();
    pintarPosts(posts);
  });

  window.addEventListener("scroll", async () => {
    // const scrollArriba = document.documentElement.scrollTop;
    // const alturaCliente = document.documentElement.clientHeight;
    // const alturaScroll = document.documentElement.scrollHeight;

    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    // MUY BUENA PREGUNTA DE JULI
    // const innerHeight = window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      pagina++;

      const nuevosPosts = await getPosts();

      mostrarLoader(nuevosPosts);
    }
  });

  inputFilter.addEventListener("input", (e) => {
    // Recibir lo que estoy escribiendo
    const loQueEscribo = e.target.value.toUpperCase();

    // Recibir todas las tarjetas de los posts
    const todosLosPosts = document.querySelectorAll(".post");

    // Recorrer los posts que recibi anteriormente, y mostrar u ocultar algunos dependiendo de lo que haya escrito

    for (const post of todosLosPosts) {
      const title = post.querySelector(".post-title").innerText.toUpperCase();
      const body = post.querySelector(".post-body").innerText.toUpperCase();

      if (title.includes(loQueEscribo) || body.includes(loQueEscribo)) {
        post.style.display = "flex";
      } else {
        post.style.display = "none";
      }
    }
  });
}

const mostrarLoader = (reciboNuevosPosts) => {
  loading.classList.add("show");

  // const numeroRandom = Math.floor(Math.random() * 3000);

  setTimeout(() => {
    loading.classList.remove("show");

    setTimeout(() => {
      pintarPosts(reciboNuevosPosts);
    }, 500);
  }, 500);
};

iniciarPerri();

// Pasos a seguir
// 1) Quiero que detecte cuando llego abajo de todo
// 2) Cuando llego abajo de todo, quiero que muestre el loading
// 2.a) Pero necesitamos que primero se muestre, después desaparezca, y después me pinte los posts.
// 3) Despues, que me cargue otros 5 posts y los agregue
// 3.a) Cuando llego al final, me cambie dinamicamente las variables pagina y limite.
// 4) Hacer el filter para filtrar
// 5) Filtrar por titulo y por el body del post
// 6) TODO: Que cuando esté filtrando, y llegue al final, no siga cargando posts.
// 7) TODO: Les voy a pasar un string, y tienen que contar cuántas letras F tiene ese string.
// El string es el siguiente: "Fuimos a Francia fuertemente falopeados comiendo fajitas de jamón y nos fajaron fuerte"

// const sumarNumeritos = (parametro, otroParametro) => {
//   return parametro + otroParametro;
// };

// const unNumero = 4 + 10;

// sumarNumeritos(unNumero, 2);
// sumarNumeritos(2, 3);
// sumarNumeritos(2, 5);
// sumarNumeritos("hola", "como estas?");
// sumarNumeritos(222, 9);
