/**
 * Cadastro de Usuário
 * 
 * VERBO HTTP: POST
 * BASE_URL: http://localhost:5000/users
 */

const BASE_URL = "http://localhost:5000"

function addNewUser(request) {
    axios.post(`${BASE_URL}/users`, request)
      .then(response => {
        // SE DEU CERTO
        alert("Usuário cadastrado com sucesso!");
      })
      .catch(error => console.error(error)); //SE DEU MERDA
}

//DOM -- Manupulação do HTML para Envio das informações dos formulários e botões
document.getElementById('addNewUser').addEventListener('click', function(event) {
    event.preventDefault();
    //Pegar valores dos inputs e montar a request
    const request = {
        name: document.querySelector('input[name="full-name"').value,
        email: document.querySelector('input[name="email"').value,
        password: document.querySelector('input[name="password"').value
    }

    //Chamar AXIOS
    addNewUser(request);
  });