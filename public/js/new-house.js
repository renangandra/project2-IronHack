/**
 * Cadastro de Casa
 * 
 * VERBO HTTP: POST
 * BASE_URL: http://localhost:5000/houses
 */

const BASE_URL = "http://localhost:5000"

function addNewHouse(request) {
    const headers = { headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": localStorage.getItem("_")
    }};

    axios.post(`${BASE_URL}/houses`, request, headers)
      .then(response => {
        // SE DEU CERTO
        window.location.href="/mine-houses"
      })
      .catch(error => console.error(error)); //SE DEU MERDA
}

//DOM -- Manupulação do HTML para Envio das informações dos formulários e botões
document.getElementById('btn-newHouse').addEventListener('click', function(event) {
    event.preventDefault();
    //Pegar valores dos inputs e montar a request
    const request = new FormData;
    request.append("price", document.querySelector('input[name="price"]').value);
    request.append("description", document.querySelector('textarea').value);
    request.append("dateInitial", document.querySelector('input[name="dateInitial"]').value);
    request.append("dateFinished", document.querySelector('input[name="dateFinished"]').value);
    request.append("thumbnail", document.querySelector('input[name="image"]').files[0]);

    addNewHouse(request);
  });


if (!localStorage.getItem('_')) {
    window.location.href="/"
}