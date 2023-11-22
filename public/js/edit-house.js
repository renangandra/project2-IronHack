/**
 * Listagem de Casas
 *
 * VERBO HTTP: GET
 * BASE_URL: http://localhost:5000/sessions
 */

const BASE_URL = "http://localhost:5000";
// A função GetDate pega o dia, a GetMonth() pega o mês em número, sendo que começa pelo 0.
// Pra facilitar, criei um array onde a posição corresponde ao número retornado pelo GetMonth()
// EXEMPLO. Quando chamo o GetMonth() para data atual ele me retorna 10, porque estamos em novembro
// Se você contar os meses começando pelo 0 será 10.
var months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

// Obtém a URL atual
var currentUrl = "http://localhost:3000/edit-house/655dd6c69445af3ec3f8f46c"; // Substitua com window.location.href no seu código

// Divide a URL usando a barra como delimitador
var segments = currentUrl.split("/");

// Obtém o último segmento, que deve conter o ID
var house_id = segments[segments.length - 1];
//const house_id = match[1];

axios
  .get(`${BASE_URL}/houses/${house_id}`, {
    headers: {
      Authorization: localStorage.getItem("_"),
    },
  })
  .then((response) => {
    // Percorre o array retornado da API e monta uma lista de cards com as informações retornadas.
    document.querySelector('input[name="price"]').value = response.data.price;
    document.querySelector("textarea").value = response.data.description;
    document.querySelector('input[name="dateInitial"]').value = new Date(
      response.data.dateInitial
    );
    document.querySelector('input[name="dateFinished"]').value = new Date(
      response.data.dateFinished
    );
    console.log();

    // Supondo que 'response.data.thumbnail_url' seja uma string com a URL da imagem
    var thumbnailUrl = response.data.thumbnail_url;

    // Cria um elemento de link (<a>)
    var linkElement = document.createElement("a");
    linkElement.href = thumbnailUrl;
    linkElement.target = "_blank";
    linkElement.textContent = "Clique aqui para visualizar a imagem atual";

    // Adiciona uma classe ao elemento de link
    linkElement.classList.add("btn");
    linkElement.classList.add("btn-warning");

    // Obtém o parágrafo pelo ID e anexa o elemento do link a ele
    var paragraphElement = document.querySelector('p[id="thumbnail_image"]');
    paragraphElement.appendChild(linkElement);
  })
  .catch((error) => console.log(error));

/**
 * Cadastro de Casa
 *
 * VERBO HTTP: POST
 * BASE_URL: http://localhost:5000/houses
 */

function editHouse(request) {
  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("_"),
    },
  };

  axios
    .put(`${BASE_URL}/houses/${house_id}`, request, headers)
    .then((response) => {
      // SE DEU CERTO
      //window.location.href="/mine-houses"
    })
    .catch((error) => console.error(error)); //SE DEU MERDA
}

//DOM -- Manupulação do HTML para Envio das informações dos formulários e botões
document.getElementById("btn-edit").addEventListener("click", function (event) {
  event.preventDefault();
  //Pegar valores dos inputs e montar a request
  const request = new FormData();

  const price = document.querySelector('input[name="price"]').value;
  const dateInitial = document.querySelector("textarea").value;
  const dateFinished = document.querySelector(
    'input[name="dateInitial"]'
  ).value;
  const description = document.querySelector(
    'input[name="dateFinished"]'
  ).value;
  const thumbnail = document.querySelector('input[name="image"]').files[0];

  if (price) request.append("price", price);
  if (price) request.append("description", description);
  if (price) request.append("dateInitial", dateInitial);
  if (price) request.append("dateFinished", dateFinished);
  if (price) request.append("thumbnail", thumbnail);

  editHouse(request);
});
