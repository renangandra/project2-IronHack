/**
 * Autenticação de Usuário
 * 
 * VERBO HTTP: POST
 * BASE_URL: http://localhost:5000/sessions
 */
const BASE_URL = "http://localhost:5000"

function login(request){
    axios.post(`${BASE_URL}/sessions`, request)
        .then(response => {
            // Salvando na memória do navegador as informações de usuário retornadas no login para que não se perca ao recarregar a página.
            localStorage.setItem("user_id", response.data.id);
            localStorage.setItem("user_email", response.data.email);
            localStorage.setItem("_", response.data.token);
            // Redirecionando para a página de minhas casas
            window.location.href="http://localhost:3000/mine-houses";
        })
        .catch(error => console.error(error)); //SE DEU MERDA
}

//DOM -- Manupulação do HTML para Envio das informações dos formulários e botões
document.getElementById('btnSignin').addEventListener('click', function(event) {
    event.preventDefault();
    //Pegar valores dos inputs e montar a request
    const request = {
        email: document.querySelector('input[name="email"').value,
        password: document.querySelector('input[name="password"').value
    }
    //Chamar AXIOS
    login(request);
  });