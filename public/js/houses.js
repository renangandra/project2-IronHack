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

axios
  .get(`${BASE_URL}/houses`)
  .then((response) => {
    // Percorre o array retornado da API e monta uma lista de cards com as informações retornadas.
    const html = response.data.map(
      (index) => `
        <div class="col-4 col-sm-4">
            <div class="card">
                <img class="card-img-top" src="${
                  index.thumbnail_url
                }" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${new Date(
                      index.dateInitial
                    ).getDate()} ${
        months[new Date(index.dateInitial).getMonth()]
      } - ${new Date(index.dateFinished).getDate()} ${
        months[new Date(index.dateFinished).getMonth()]
      } <span class="badge text-bg-success tag-price">U$ ${
        index.price
      }</span> </h5>
                    <p class="card-text">${index.description}</p>
                </div>
            </div>
        </div>
    `
    );

    // Insere o os cards que montamos na div com esse ID na página houses
    document.getElementById("list-houses").innerHTML = html;
  })
  .catch((error) => console.log(error));
